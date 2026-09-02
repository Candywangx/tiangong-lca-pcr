---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-units-of-automatic-data-processing-machines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other units of automatic data processing machines

## 1. Scope and Applicability

This PCR applies to separately presented automatic data processing units within the reviewed semantic boundary of CPC 3.0 subclass 45289: arithmetic units; accelerators other than graphics accelerators; print processors; control and adaptor units; disk-to-tape or tape-to-disk converters; machines that decode data and present the result in clear form; machines that introduce fixed programs into integrated circuits; and machines that transcribe data onto media in coded form.

Every foreground data package shall select one equipment family from that list and describe the unit's data-processing function. A product that cannot be assigned unambiguously to one listed family, or that combines functions whose principal identity may fall in another subclass, requires `manual_review` before this PCR is used.

The default dataset boundary is production of a finished unit at the manufacturing gate. It covers attributable parts and subassemblies, PCBA and final assembly, configuration and functional testing, warehousing, and packaging. It does not by default include outbound delivery, use-stage electricity or data-centre overhead, maintenance, or end-of-life; any extension shall be separately modelled and disclosed.

Servers and other complete automatic data processing machines; systems presented as complete systems; fixed or removable storage units; input or output peripherals; video, graphics, sound, or network expansion cards; integrated circuits; general network communications equipment; and generic parts or accessories that do not themselves perform the listed data-processing functions are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-units-of-automatic-data-processing-machines |
| classification_refs | CPC 3.0: 45289, Other units of automatic data processing machines |
| covered_products | Separately presented arithmetic units; non-graphics accelerators; print processors; control and adaptor units; disk-to-tape or tape-to-disk converters; clear-form data decoders; fixed-program introducing machines; coded-media transcribing machines |
| excluded_products | Servers and other complete computers; ADP systems; fixed or removable storage units; input or output peripherals; graphics, video, sound, or network cards; integrated circuits; network communications equipment; passive parts and accessories |
| representative_product | One declared CPC 45289 equipment-family unit with a complete configuration record, normalized by finished net mass |
| production_route | Supplier parts and subassemblies; kitting; PCBA or module integration; final assembly; firmware or fixed-program loading where applicable; functional and power testing; warehousing; packaging at plant |
| market_state | Finished, tested unit at manufacturing gate; packaging is inventoried separately and the delivered or unpackaged state is declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a separately presented CPC 45289 automatic data processing unit that performs the declared equipment-family function |
| How much | 1 kg finished net product at the manufacturing gate |
| How well | Conforming to the declared function, native capacity metric, tested configuration, interfaces, power profile, thermal design, and acceptance criteria |
| How long or cycle | One manufacturing lot normalized to 1 kg accepted product; if a use-stage extension is modelled, operating lifetime and mode-time profile are declared separately |
| reference_flow_link | All production inputs, wastes, and releases are normalized to accepted net product mass; item counts are converted using measured net mass per accepted unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other units of automatic data processing machines `b3854d4e-54f5-4fad-9457-2f899c4a1653` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | equipment family; primary data-processing function; native functional or capacity rating and test method; rated / active / idle / sleep / off power states where supported; chassis or enclosure form and rack or board form factor; PCB and subassembly configuration; integrated storage type and capacity if incidental; interface types and counts; integrated cooling type and coolant charge if any; power-supply configuration; firmware or fixed-program state; net unit mass; packaging inclusion; delivery boundary; manufacturing geography; reporting period; lot and yield basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net product mass without transport packaging. If a packaged reference state is required, report product and packaging masses separately and keep the reference amount tied to net product mass. |
| `count_to_mass` | item-count production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert accepted and rejected item counts with measured configuration-specific mass per item from the same reporting period; do not use nominal catalogue mass when measured lot mass is available. |
| `functional_capacity` | product identity and test results | Family-specific native capacity | declared native unit | State the equipment-family function and its native rating or throughput test. Do not aggregate different equipment families by an invented common capacity factor; route a non-equivalent or ambiguous unit to `manual_review`. |
| `power_and_energy` | production tests and any use-stage extension | Energy and power | kWh and W | Record measured power by supported operating state, workload or capacity setting, test method, and duration. Calculate energy from state-specific power and time; do not fold data-centre cooling, UPS, or other site overhead into device electricity without a separately declared allocation. |
| `bom_mass_balance` | parts, subassemblies, finished product, rejects, and scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile incoming attributable component mass with accepted product, packaging handled separately, rejects, recoverable scrap, and other wastes over the same lot and reporting period. |
| `delivery_service` | conditional outbound delivery | Transport service and mass | tonne-km and kg | Record mode, origin, destination, distance, load factor, and shipped mass separately. Delivery is outside the default factory-gate reference flow and shall not be hidden in product mass or manufacturing energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased parts, PCBAs, modules, enclosure and mechanical parts, cables and connectors, power and integrated cooling parts, incidental storage where applicable, auxiliary materials, and packaging arrive at the manufacturing or integration site with supplier dataset identities declared. |
| starting_condition_role | Upstream dataset boundary for supplier-produced parts and subassemblies; foreground collection begins with receipt, kitting, in-house assembly, test, warehousing, and packaging activities. |
| product_classification_scope | Only separately presented units within the reviewed CPC 45289 equipment families; the equipment family and principal function are mandatory identity fields. |
| recursive_input_rule | A purchased item already meeting the same CPC 45289 product identity is recorded as an upstream product input with its supplier dataset and configuration; its production is not recreated inside the receiving foreground process. |
| upstream_dataset_requirement | Use technology-, geography-, and time-representative datasets for PCBAs, integrated circuits and other electronic parts, enclosure and mechanical parts, interfaces and cabling, power components, integrated cooling components and coolant, incidental storage, auxiliary materials, packaging, electricity, and waste treatment. |
| disclosure | Declare equipment family; function and capacity; configuration; BOM coverage; integrated storage and interfaces; cooling and power architecture; firmware state; factory-gate or delivered state; packaging; geography; time period; yields; allocation; exclusions; and any use, maintenance, delivery, or end-of-life extension. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | product identity | Include only units whose principal identity matches one CPC 45289 equipment family. Route multifunction or unclear products to `manual_review` before modelling. | `unstats-cpc-3-0-45289` |
| `boundary_production` | default foreground system | Include attributable parts and subassemblies, PCBA or module assembly where performed, final assembly, functional and power testing, warehousing, and packaging through the manufacturing gate. | `etsi-es-203-199-v1-3-1` |
| `boundary_parts` | product composition | Identify applicable electronic, mechanical, cooling, cable, power, storage, interface, and packaging parts from a configuration-specific BOM; disclose excluded part categories and the reason for exclusion. | `etsi-es-203-199-v1-3-1` |
| `boundary_cooling` | cooling and power support | Include cooling hardware and coolant physically shipped with the unit in the BOM. Allocate manufacturing-facility cooling and power-support burdens to production; exclude data-centre or customer-site cooling, UPS, and building overhead from the factory-gate product unless a separately declared downstream extension is modelled. | `etsi-es-203-199-v1-3-1` |
| `boundary_delivery` | packaging and distribution | Inventory packaging at the plant. Outbound delivery begins after the factory gate and is excluded by default; when included, model it as a conditional route-specific process and preserve the factory-gate result. | `etsi-es-203-199-v1-3-1` |
| `boundary_exclusions` | overlap control | Exclude complete computers and servers, complete systems, storage units, input or output peripherals, expansion cards, integrated circuits, network communications equipment, and passive parts or accessories covered by other product identities. | `unstats-cpc-3-0-45289` |
| `boundary_use_and_end_of_life` | downstream extensions | Do not include use electricity, maintenance replacement, reuse, recycling, or disposal in the default production dataset. If a lifecycle model adds them, disclose operating lifetime, state-time profile, electricity geography, maintenance, and end-of-life scenario separately. | `etsi-es-203-199-v1-3-1` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parts_supply_and_kitting` | Parts, subassemblies, and kitting | required | All foreground packages | Supplier dataset interface and receipt-to-line preparation | kg kitted parts per kg accepted net product |
| `assembly_and_integration` | PCBA, module, and final assembly | required | All foreground packages; purchased completed modules remain upstream product inputs | Foreground production and configuration integration | kg assembled unit per kg accepted net product |
| `functional_test` | Functional, capacity, thermal, and power testing | required | All foreground packages | Acceptance testing and reject accounting | kg accepted tested unit per kg test input |
| `packaging_and_factory_gate` | Warehousing, packaging, and factory-gate release | required | All foreground packages | Reference-product completion | 1 kg finished net product at factory gate |
| `outbound_delivery` | Outbound delivery extension | conditional | Include only when the declared dataset boundary extends beyond the manufacturing gate | Route-specific delivery extension | tonne-km and kg delivered product |

### Process: Parts, subassemblies, and kitting (`parts_supply_and_kitting`)

#### Inputs

##### Product flows

###### Electronic parts, PCBAs, and processing modules (`electronic_parts_and_pcbas`)

Record all purchased electronic parts and assemblies attributable to the selected configuration, including processor or accelerator modules, printed boards, populated PCBAs, memory and control electronics. Integrated circuits are inputs, not the CPC 45289 reference product.

- Selected flow: Supplier-specific electronic parts and PCBA product flows
- Flow property / unit: Mass / kg; board area or die area may be retained as allocation evidence
- Amount rule: BOM and goods-receipt mass attributable to accepted production, including yield-adjusted upstream quantities when known
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

###### Chassis, enclosure, and mechanical hardware (`chassis_and_mechanics`)

Record the enclosure, rack or board carrier, brackets, fasteners, shields, heat spreaders, and other mechanical items shipped as part of the unit.

- Selected flow: Supplier-specific mechanical part product flows
- Flow property / unit: Mass / kg
- Amount rule: Configuration-specific BOM mass and receipt records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

###### Interfaces, connectors, and cabling (`interfaces_connectors_cabling`)

Record installed physical interfaces, connectors, transceivers that are integral to the unit, internal cables, and external cables included in the sales package. Stand-alone network communications equipment is excluded.

- Selected flow: Supplier-specific connector, cable, and integral interface product flows
- Flow property / unit: Mass / kg
- Amount rule: BOM mass by interface type and included cable set
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

###### Power and integrated cooling parts (`power_and_integrated_cooling_parts`)

Record power-supply modules, voltage conversion, fans, heat sinks, cold plates, pumps, sealed cooling loops, and coolant physically shipped with the unit. Facility and data-centre support systems are not product parts.

- Selected flow: Supplier-specific power and integrated cooling product flows
- Flow property / unit: Mass / kg; coolant by mass or volume with density conversion retained
- Amount rule: BOM mass and fill records for the shipped configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

###### Incidental integrated storage (`incidental_integrated_storage`)

Record storage only when it is physically integrated and subordinate to the declared CPC 45289 function. A separately presented storage unit or a product whose principal function is storage is outside this PCR.

- Selected flow: Supplier-specific integrated storage component flow
- Flow property / unit: Mass / kg and declared capacity in the native storage unit
- Amount rule: BOM mass and configuration record for subordinate integrated storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `unstats-cpc-3-0-45289`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Kitted parts and subassemblies (`kitted_parts_and_subassemblies`)

Record the complete configuration-specific kit transferred to assembly, including traceability to the selected equipment family and BOM revision.

- Selected flow: Kitted parts and subassemblies for the declared unit
- Flow property / unit: Mass / kg
- Amount rule: Sum of accepted issued component masses less documented receipt or kitting losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg kitted output transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

##### Waste flows

###### Incoming and kitting waste (`incoming_and_kitting_waste`)

Record damaged parts, protective films, reels, trays, incoming packaging, and other waste generated before assembly by material and treatment route.

- Selected flow: Site-specific waste flows by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or reconciled waste from the same parts and kitting reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

##### Elementary flows

### Process: PCBA, module, and final assembly (`assembly_and_integration`)

#### Inputs

##### Product flows

###### Kitted parts transferred to assembly (`assembly_kitted_input`)

Record the mass and configuration of the kit consumed by in-house PCBA, module, and final assembly.

- Selected flow: Kitted parts and subassemblies for the declared unit
- Flow property / unit: Mass / kg
- Amount rule: Line issue and return records reconciled to assembly output and scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `etsi-es-203-199-v1-3-1`

###### Assembly electricity and facility support (`assembly_electricity`)

Record metered assembly-line electricity plus an explicitly allocated share of attributable facility power and cooling. Keep the metered load and allocation calculation separable.

- Selected flow: Electricity supply matching the manufacturing geography and reporting period
- Flow property / unit: Energy / kWh
- Amount rule: Metered line electricity plus documented physical allocation of shared facility electricity and cooling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `etsi-es-203-199-v1-3-1`

###### Assembly auxiliaries and coolant charge (`assembly_auxiliaries_and_coolant`)

Record solder, adhesives, cleaning agents, thermal-interface materials, lubricants, and coolant charged into a shipped integrated cooling system when applicable.

- Selected flow: Site- and material-specific auxiliary product flows
- Flow property / unit: Mass / kg or volume with documented density conversion
- Amount rule: Purchase issue, dosing, or fill records less documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `etsi-es-203-199-v1-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled and configured unit (`assembled_configured_unit`)

Record the assembled unit transferred to functional testing with equipment family, configuration, interface, power, cooling, storage, and firmware identifiers preserved.

- Selected flow: Assembled CPC 45289 unit pending acceptance test
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass of assembled units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `unstats-cpc-3-0-45289`

##### Waste flows

###### Assembly scrap and residues (`assembly_scrap_and_residues`)

Record rejected components, board and metal scrap, spent auxiliaries, waste coolant, and other assembly residues by material and treatment route.

- Selected flow: Site-specific waste flows by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste and material-balance reconciliation for the assembly reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `etsi-es-203-199-v1-3-1`

##### Elementary flows

### Process: Functional, capacity, thermal, and power testing (`functional_test`)

#### Inputs

##### Product flows

###### Assembled units entering test (`assembled_units_for_test`)

Record the configuration and mass of units entering the acceptance-test sequence.

- Selected flow: Assembled CPC 45289 unit pending acceptance test
- Flow property / unit: Mass / kg
- Amount rule: Test-entry count multiplied by measured configuration-specific mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted tested unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_configuration_power`
- Sources: `unstats-cpc-3-0-45289`

###### Test electricity (`test_electricity`)

Record electricity used by the unit under test and attributable test equipment. Preserve measured power states, workload or capacity settings, duration, and the allocation of shared test benches.

- Selected flow: Electricity supply matching the test-site geography and reporting period
- Flow property / unit: Energy / kWh
- Amount rule: Sum of measured state-specific power multiplied by test duration plus documented physical allocation of shared bench electricity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted tested unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_configuration_power`
- Sources: `etsi-es-203-199-v1-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted tested unit (`accepted_tested_unit`)

Record units that pass the declared function, capacity, interface, thermal, power, and firmware acceptance criteria.

- Selected flow: Accepted CPC 45289 unit before packaging
- Flow property / unit: Mass / kg
- Amount rule: Accepted count multiplied by measured configuration-specific net mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted tested unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_configuration_power`
- Sources: `unstats-cpc-3-0-45289`

##### Waste flows

###### Test rejects and failed parts (`test_rejects_and_failed_parts`)

Record failed units and parts sent to rework, recovery, or waste treatment without counting reworked units as new product output.

- Selected flow: Site-specific reject, rework, and waste flows
- Flow property / unit: Mass / kg
- Amount rule: Failed count and measured mass by disposition, net of successfully reworked units returned to the same lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted tested unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_configuration_power`
- Sources: `etsi-es-203-199-v1-3-1`

##### Elementary flows

### Process: Warehousing, packaging, and factory-gate release (`packaging_and_factory_gate`)

#### Inputs

##### Product flows

###### Accepted units entering packaging (`accepted_units_for_packaging`)

Record accepted units transferred from testing without changing their product identity or net mass basis.

- Selected flow: Accepted CPC 45289 unit before packaging
- Flow property / unit: Mass / kg
- Amount rule: Transfer mass reconciled to factory-gate released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_warehouse`
- Sources: `unstats-cpc-3-0-45289`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging attributable to released products by material. Packaging is not part of the net reference mass.

- Selected flow: Packaging material product flows by material and recycled-content specification
- Flow property / unit: Mass / kg
- Amount rule: Issued packaging less returned or unused material, reconciled to packed released units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_warehouse`
- Sources: `etsi-es-203-199-v1-3-1`

###### Warehousing and packaging electricity (`packaging_warehouse_electricity`)

Record metered or physically allocated electricity for product warehousing, packing, and factory-gate release.

- Selected flow: Electricity supply matching the manufacturing geography and reporting period
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or documented physical allocation to released product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_warehouse`
- Sources: `etsi-es-203-199-v1-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Factory-gate reference product (`factory_gate_reference_product`)

Record accepted finished net product at the manufacturing gate with packaging mass reported separately.

- Selected flow: Other units of automatic data processing machines `b3854d4e-54f5-4fad-9457-2f899c4a1653`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg accepted net product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted net product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Packaging and warehousing waste (`packaging_and_warehouse_waste`)

Record damaged packaging, labels, pallets, protective materials, and other warehouse or packing waste by treatment route.

- Selected flow: Site-specific waste flows by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste reconciled with packaging issue and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_warehouse`
- Sources: `etsi-es-203-199-v1-3-1`

##### Elementary flows

### Process: Outbound delivery extension (`outbound_delivery`)

#### Inputs

##### Product flows

###### Factory-gate product entering delivery (`factory_gate_product_for_delivery`)

Record the factory-gate product and packaging mass entering the declared delivery route while preserving the factory-gate result.

- Selected flow: Other units of automatic data processing machines `b3854d4e-54f5-4fad-9457-2f899c4a1653`
- Flow property / unit: Mass / kg
- Amount rule: shipped net product mass and packaging mass from dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per declared delivery consignment
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_route`
- Sources: `etsi-es-203-199-v1-3-1`

###### Outbound transport service (`outbound_transport_service`)

Record each transport leg using actual mode, distance, shipped mass, utilization, and any temperature-control or special-handling requirement.

- Selected flow: Route- and mode-specific freight transport service
- Flow property / unit: Transport service / tonne-km
- Amount rule: shipped mass in tonnes multiplied by leg distance in kilometres, adjusted only by the selected transport dataset convention
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per declared delivery consignment
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery_route`
- Sources: `etsi-es-203-199-v1-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Delivered product (`delivered_product`)

Record delivered product as an explicit downstream extension; do not replace or obscure the factory-gate reference output.

- Selected flow: Delivered CPC 45289 unit with route declaration
- Flow property / unit: Mass / kg
- Amount rule: delivered net product mass confirmed by dispatch and receipt records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per declared delivery consignment
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_route`
- Sources: `etsi-es-203-199-v1-3-1`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared production and test processes | Avoid allocation by subdividing lines, meters, test benches, and records by configuration or production lot whenever feasible. | `etsi-es-203-199-v1-3-1` |
| `allocation_physical` | shared facility electricity, cooling, warehousing, and assembly support | When subdivision is not feasible, use a causal physical driver. Prefer board area for PCB processes, good die area for integrated-circuit processes, machine time or metered energy for assembly and test, and mass for other components and warehousing. | `etsi-es-203-199-v1-3-1` |
| `allocation_economic_fallback` | shared processes without a defensible physical relationship | Use economic allocation only when a physical relation is insufficient; disclose prices, period, currency, co-products, and a sensitivity check. | `etsi-es-203-199-v1-3-1` |
| `allocation_rework` | rejects and rework | Return successfully reworked units to the originating lot without a second product credit. Assign measured rework inputs and unrecovered reject treatment to the lot that generated them. | `etsi-es-203-199-v1-3-1` |
| `allocation_recycling` | production scrap and recoverable materials | Record scrap mass and treatment output explicitly. Do not apply an avoided-burden or recycling credit inside the foreground inventory unless the downstream study declares and consistently applies a recycling method. | `etsi-es-203-199-v1-3-1` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass_and_kitting` | `parts_supply_and_kitting` | product BOM, receipts, issued kits, and incoming waste | BOM export; goods receipt; scale record; material disposition | equipment family; product and BOM revision; supplier part id; part category; quantity; measured unit mass; board area; die area where available; storage capacity; interface count; cooling and power configuration; waste mass and route | Export controlled BOM, reconcile receipts and line issues, and weigh representative parts and wastes with calibrated scales | kg; item; m2 board; mm2 die; native capacity unit | each BOM revision and production lot | same reporting period as assembly output | all sites and suppliers contributing to the declared configuration | Sum attributable input and waste by configuration, convert counts with measured unit mass, and normalize to accepted net product mass | approved BOM; receiving records; calibration certificate; supplier dataset reference; reconciliation report |
| `cp_assembly_energy_and_yield` | `assembly_and_integration` | assembly inputs, electricity, auxiliaries, output, and scrap | line meter; production execution record; issue and return log; waste ticket | line; configuration; start and end meter; output count and mass; machine time; facility cooling and power allocation driver; auxiliary and coolant issue; scrap and route | Read dedicated meters where available and document physical allocation of shared facility loads; reconcile material issue, output, returns, and scrap | kWh; kg; item; machine-hour | per lot with monthly meter reconciliation | representative contiguous production period, normally at least one month | each assembly site in scope | Allocate shared loads with the declared physical driver and normalize net inputs to kg assembled output | meter calibration; production log; allocation workbook; mass-balance closure; waste receipt |
| `cp_test_configuration_power` | `functional_test` | function, capacity, thermal, power, acceptance, and reject records | test-system export; power analyser; thermal log; rework and disposition log | equipment family; configuration; firmware; native capacity and test method; interface state; cooling state; power mode; workload; W; duration; ambient condition; pass or fail; reject mass and disposition | Run the declared acceptance sequence with calibrated instruments and retain mode-time and workload settings | W; kWh; native capacity unit; degree C; kg; item | each tested lot and configuration | same period as reported tested output | each test site and bench type in scope | Sum state-specific energy, allocate shared bench energy by measured test time, and normalize to accepted tested mass | test procedure; calibration records; raw result files; pass-fail log; rework closure |
| `cp_packaging_and_warehouse` | `packaging_and_factory_gate` | accepted product, packaging, warehouse energy, and packing waste | dispatch release; packaging issue; scale record; warehouse meter; waste ticket | net product mass; accepted count; packaging material and mass; pallet reuse; meter or allocation driver; released quantity; packing waste and route | Reconcile accepted product to dispatch release, weigh packaging by material, and meter or physically allocate warehouse and packing energy | kg; item; kWh | per lot with monthly reconciliation | same reporting period as factory-gate release | all packing and warehouse sites in scope | Normalize packaging, energy, and waste to 1 kg released net product while retaining packaging separately | dispatch record; packaging specification; scale and meter calibration; waste receipt |
| `cp_delivery_route` | `outbound_delivery` | conditional outbound delivery | bill of lading; carrier record; dispatch and receipt confirmation | origin; destination; mode; leg distance; net and gross shipped mass; utilization; special handling; delivered mass; loss or damage | Capture actual route legs and carrier data; use modelled routes only when flagged as a scenario | kg; tonne-km; km | each shipment or representative route class | declared delivery period | all routes included in the extension | Calculate tonne-km per leg, sum route results, and keep delivery separate from factory-gate production | bill of lading; carrier invoice; route evidence; receipt confirmation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_count_to_mass` | item-based production and reject records | mass = item count multiplied by measured configuration-specific mass per item from the same period | item count; measured unit mass | kg by flow and configuration |  |
| `calc_bom_mass_balance` | parts, product, and waste reconciliation | incoming attributable mass = accepted net product mass + returned material + recoverable scrap + other waste + measured inventory change; investigate and disclose residual imbalance | BOM and issue mass; product mass; returns; scrap; waste; inventory change | mass-balance statement and residual |  |
| `calc_process_energy` | assembly, testing, warehousing, and packaging | normalized energy = measured dedicated energy plus physically allocated shared energy divided by accepted process output mass | start and end meters; shared-load total; allocation driver; accepted output mass | kWh per kg process output | `etsi-es-203-199-v1-3-1` |
| `calc_power_profile` | device power qualifier and optional use-stage extension | use energy = sum of state-specific power multiplied by time in that state; retain workload, capacity, cooling, and interface settings | W by state; hours by state; workload and configuration | kWh for the declared profile | `etsi-es-203-199-v1-3-1` |
| `calc_delivery` | conditional outbound delivery | transport service = sum over route legs of shipped tonnes multiplied by leg kilometres | shipped mass; distance; mode; route leg | tonne-km by mode and route | `etsi-es-203-199-v1-3-1` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product identity | Evidence shall demonstrate one CPC 45289 equipment family and principal function; an ambiguous or multifunction product requires `manual_review`. | product specification; functional block diagram; classification review against `unstats-cpc-3-0-45289` |
| `dq_configuration` | function and comparability | Preserve native capacity, test method, firmware, interfaces, PCB and subassembly configuration, incidental storage, power supply, and integrated cooling for each reported configuration. | controlled configuration and test records |
| `dq_bom` | product composition | Cover all applicable electronic, mechanical, cable, power, cooling, storage, interface, auxiliary, and packaging categories, and explain any excluded category. | controlled BOM; supplier datasets; mass-balance reconciliation; `etsi-es-203-199-v1-3-1` |
| `dq_energy` | production and power profile | Use calibrated measurements where feasible; disclose meter coverage, shared-load allocation, operating state, workload, test duration, and electricity geography. | meter and analyser calibration; raw logs; allocation workbook; `etsi-es-203-199-v1-3-1` |
| `dq_temporal_geographic` | all foreground and upstream data | State the reporting period, manufacturing sites, supplier geography, electricity geography, and technological representativeness; explain substitutions. | site and supplier records; dataset metadata |
| `dq_yield_and_waste` | all production processes | Reconcile accepted output, rejects, rework, scrap, and waste treatment to the same lot and period without double counting reworked product. | production logs; rework closure; waste receipts; mass balance |
| `dq_boundary` | packaging, delivery, cooling, use, and end-of-life | Disclose whether each boundary element is included and keep any downstream extension separable from the factory-gate result. | boundary statement; process map; route or scenario records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | classification and product name | The product shall match one listed CPC 45289 equipment family and shall not be represented only by the residual title "other unit". | `unstats-cpc-3-0-45289` |
| `validate_reference_flow` | quantitative reference | The reference output shall use product flow `b3854d4e-54f5-4fad-9457-2f899c4a1653`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, normalized to accepted net product mass. |  |
| `validate_required_qualifiers` | dataset metadata | Equipment family, function, native capacity and test, power states, chassis or board form, PCB and subassembly configuration, incidental storage, interfaces, integrated cooling, power supply, firmware state, net mass, packaging, delivery boundary, geography, period, lot, yield, and allocation shall be present or explicitly not applicable. | `etsi-es-203-199-v1-3-1` |
| `validate_no_overlap` | category exclusion | Reject server or complete-computer datasets, complete systems, separate storage units, input or output peripherals, graphics, video, sound, or network cards, integrated circuits, network communications equipment, and passive parts or accessories. | `unstats-cpc-3-0-45289` |
| `validate_bom_and_mass_balance` | inventory completeness | The BOM categories and process mass balance shall reconcile accepted net product, packaging, returns, rejects, scrap, wastes, and inventory change; exclusions and residual imbalance shall be disclosed. | `etsi-es-203-199-v1-3-1` |
| `validate_power_and_cooling` | energy and thermal boundary | Power shall be tied to operating state, workload or capacity, duration, and instrument method. Integrated cooling shipped with the unit shall be in the BOM; manufacturing-facility and downstream data-centre cooling shall remain separately identified. | `etsi-es-203-199-v1-3-1` |
| `validate_delivery_boundary` | factory-gate and delivered results | Packaging shall be separate from net reference mass, and outbound delivery shall be absent from the default result or reported as a separable route-specific extension. | `etsi-es-203-199-v1-3-1` |
| `validate_allocation` | shared processes | The dataset shall state each shared process, allocation hierarchy, physical driver, and fallback sensitivity; unexplained economic or generic mass allocation fails validation. | `etsi-es-203-199-v1-3-1` |
| `validate_manual_review` | broad-leaf ambiguity | If the equipment family, principal function, or boundary against excluded server, complete-machine, storage, peripheral, expansion-card, integrated-circuit, communications, or passive-part identities cannot be resolved, validation is inconclusive and the record shall be routed to `manual_review`. | `unstats-cpc-3-0-45289` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared CPC 45289 equipment family and configuration at the manufacturing gate |
| downstream_use | Secondary dataset and background dataset for product, process, and lifecyclemodel construction when identity, configuration, capacity, and boundary are compatible |
| allowed_use | Configuration-specific product footprinting; supply-chain modelling; data-centre or computing-system component inventories; scenario analysis with separately modelled delivery, use, maintenance, and end-of-life extensions |
| excluded_use | Direct comparison across unlike equipment families or capacities; representation of servers, complete computers or systems, storage units, peripherals, expansion cards, integrated circuits, communications equipment, or passive parts; use-stage or delivered claims from a factory-gate-only dataset |
| required_metadata | Equipment family; principal function; native capacity and test method; power modes; operating profile if used; chassis or board form; PCB and subassembly configuration; incidental storage; interfaces; integrated cooling and coolant; power supply; firmware state; net mass; packaging; delivery boundary; manufacturing and electricity geography; reporting period; lot; yield; allocation; BOM coverage; exclusions; data sources |
| required_quality_disclosure | Foreground versus upstream data shares; supplier dataset coverage; measurement and calibration coverage; BOM and mass-balance residual; shared-load allocation; temporal, geographic, and technological representativeness; missing part categories; rework and waste closure; downstream scenario assumptions |
| update_trigger | Change of equipment family, principal function, native capacity test, major PCB or semiconductor generation, chassis or interface architecture, integrated storage, cooling or power design, firmware that changes function or power, manufacturing site or electricity supply, supplier route, packaging, delivery boundary, allocation method, or source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0-45289` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, subclass 45289, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-09 | Semantic equipment-family boundary; included and excluded products; classification ambiguity checks |
| `etsi-es-203-199-v1-3-1` | Standard (`standard`) | ETSI ES 203 199 V1.3.1, Environmental Engineering: Methodology for environmental Life Cycle Assessment of Information and Communication Technology goods, networks and services, February 2015, https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.03.01_60/es_203199v010301p.pdf, retrieved 2026-08-09 | Functional-unit qualifiers; product composition and BOM coverage; assembly, warehousing, and packaging boundary; power modes; cooling and support goods; data collection; allocation; reporting and quality rules |
