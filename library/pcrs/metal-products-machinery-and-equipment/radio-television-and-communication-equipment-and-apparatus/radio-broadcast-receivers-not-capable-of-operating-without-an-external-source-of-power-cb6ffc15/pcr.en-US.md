---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-not-capable-of-operating-without-an-external-source-of-power-cb6ffc15
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Radio broadcast receivers not capable of operating without an external source of power, of a kind used in motor vehicles

## 1. Scope and Applicability

This PCR applies to finished radio broadcast receivers designed for installation and use in road motor vehicles and dependent on an external vehicle electrical supply. It covers standalone head units and integrated receiver, audio, or infotainment units when radio reception remains a declared product function. A covered unit may incorporate a display, audio amplification, media reproduction, connectivity, or navigation; those combined functions and the delivered configuration must be declared.

The foreground manufacturing package starts with purchased electronic components and assemblies, mechanical parts, displays, amplifier or navigation modules, wiring harnesses, installation accessories, consumables, and packaging at the reporting organization's receiving gate. It covers the controlled assembly, integration, programming, functional and electrical testing, rework, waste preparation, and packaging operations needed to deliver a finished receiver at the manufacturer's gate. Purchased component production and material extraction require upstream datasets unless performed within the reporting organization.

Excluded are portable or battery-powered receivers capable of operating without external power; receivers not designed for motor vehicles; antennas, loudspeakers, displays, amplifiers, navigation devices, wiring harnesses, or mounting parts supplied alone; complete vehicles; repair services; and a rule written for only one vehicle model or proprietary stock-keeping unit. A product-specific dataset may represent a single model, but it must declare how that model fits this category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-not-capable-of-operating-without-an-external-source-of-power-cb6ffc15 |
| classification_refs | CPC 3.0: 47312, exact |
| covered_products | Finished externally vehicle-powered radio broadcast receivers for road motor vehicles, including standalone head units and integrated radio/audio/infotainment units with optional display, amplification, media, connectivity, or navigation functions. |
| excluded_products | Self-powered or portable receivers; non-vehicle receivers; standalone antennas, loudspeakers, displays, amplifiers, navigation devices, wiring harnesses, or installation parts; complete vehicles; repair services; and methodology restricted to one vehicle model. |
| representative_product | A finished vehicle radio receiver or integrated receiver/audio/infotainment unit, tested, configured, and supplied at the manufacturer's gate. |
| production_route | Receipt of purchased components and materials; electronic assembly when performed; mechanical and functional-module integration; firmware configuration; functional and electrical testing; rework and waste preparation; packaging and dispatch. |
| market_state | Finished manufactured unit at the manufacturer's gate, with included wiring and installation accessories and the packaging/delivery state separately declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished externally vehicle-powered radio broadcast receiver for use in a road motor vehicle. |
| How much | 1 kg net mass of accepted finished receiver output at the manufacturer's gate, including wiring harnesses and installation accessories supplied as part of the unit and excluding separately reported distribution packaging. |
| How well | Functionally tested and released in the declared standalone-head-unit or integrated-unit form, with declared supported radio bands, external vehicle power requirements, combined functions, and delivery configuration. |
| How long or cycle | One declared manufacturing reporting period; service life and in-vehicle operation are not part of the foreground manufacturing reference flow and require a separately declared use scenario. |
| reference_flow_link | The accepted finished output of `packaging_and_delivery`, normalized to 1 kg net delivered receiver mass. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Radio broadcast receivers not capable of operating without an external source of power, of a kind used in motor vehicles `0d100766-4820-4747-aea0-1185a8c4383a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form: standalone head unit or integrated unit; supported radio bands; external vehicle power specification; incorporated display, amplification, navigation, media, and connectivity functions; included wiring harnesses and installation accessories; operating, idle or standby, and automatic power-down modes and measured power where applicable; net unit mass; separately reported packaging mass; delivery state; production geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted finished receiver and included wiring/installation accessories | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or derive from controlled bill-of-material and shipment records the net accepted receiver mass. Include harnesses and installation accessories delivered as part of the unit; exclude distribution packaging and report it separately. |
| `manufacturing_energy` | electricity used by assembly, integration, programming, testing, rework, and packaging | Energy | kWh | Record metered or invoice-reconciled electricity by process and reporting period and normalize it to accepted net receiver output mass. Preserve the declared electricity dataset geography and voltage level. |
| `power_modes` | operating, decoding, idle or standby, and automatic power-down behavior | Power | W | Measure power at the declared external vehicle DC supply condition. Record input voltage, current or direct power, supported band and signal condition, audio output/load condition, display state, amplifier state, navigation/connectivity state, and mode duration. Do not substitute nameplate maximum power for measured operating or idle/standby power. |
| `variant_aggregation` | multi-model or multi-configuration foreground datasets | Mass and process-specific properties | declared units | Use production-mass-weighted results across included variants. Retain variant-level form, function, power, accessory, and delivery-state records and disclose the production mix; do not extrapolate one vehicle model to the entire category. |
| `mass_balance` | material inputs, accepted products, rework, rejects, and wastes | Mass | kg | Reconcile opening stock, receipts, closing stock, accepted output, reusable rework, and waste for each reporting period. Report unresolved imbalance and the treatment of returned-to-process material. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased electronic components and assemblies, printed circuit boards, mechanical parts, displays, amplifier/navigation/connectivity modules, wiring harnesses, installation accessories, consumables, and packaging materials as received at the reporting organization's gate. |
| starting_condition_role | Foreground manufacturing entry point for component receipt, controlled transformation, integration, testing, and delivery of the finished receiver. |
| product_classification_scope | Finished externally vehicle-powered radio broadcast receivers for motor vehicles; combined functions are included only when integrated into the delivered receiver unit. |
| recursive_input_rule | A purchased finished receiver or functionally equivalent integrated receiver unit is recorded as an upstream product input with a separate conforming dataset and is not re-created through the foreground process map. |
| upstream_dataset_requirement | Use upstream datasets for purchased components, materials, electricity, consumables, packaging, and external waste treatment. Supplier-specific component and material declarations are preferred when available. |
| disclosure | Declare organizational control, manufacturing geography, included and excluded component-production steps, standalone or integrated form, supported bands, external power specification, combined functions, delivered harness/accessory set, packaging state, use-phase inclusion or exclusion, and any cut-off or data gap. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | foreground manufacturing package | Include all controlled receiving, assembly, integration, configuration, testing, rework, waste preparation, packaging, and dispatch activities needed for accepted receiver output; use upstream datasets for purchased inputs outside organizational control. | `iec-63366-2025`; `iso-14044-2006` |
| `boundary_vehicle_exclusion` | downstream vehicle system | Exclude complete-vehicle assembly, vehicle operation, maintenance, and end-of-life unless a separately declared downstream scenario is added; never report the receiver dataset as a complete vehicle. | `unsd-cpc-3-0` |
| `boundary_external_power` | vehicle electrical interface | Declare the external vehicle supply and wiring/connection conditions relevant to the delivered unit and power measurements because vehicle electrical loads depend on the wiring harness and connection system. | `iso-16750-2-2023` |
| `boundary_combined_functions` | integrated display, amplifier, navigation, media, or connectivity functions | Include the materials and controlled manufacturing burdens of functions physically integrated into the delivered receiver; disclose excluded remote modules and avoid claiming their functions or burdens. | `iec-63366-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `incoming_component_control` | Incoming component, material, and accessory control | required | Always included for purchased inputs crossing the reporting-organization gate. | Foreground receipt, identity, quantity, and supplier-evidence control. | kg inputs per reporting period and per kg accepted receiver output |
| `electronic_assembly` | Electronic assembly | conditional | Include when printed circuit assembly, soldering, coating, bonding, or comparable electronic assembly is under reporting-organization control. | Foreground transformation of electronic inputs. | kg assembled electronics output |
| `unit_integration` | Receiver and functional-module integration | required | Always include final mechanical/electrical integration controlled by the reporting organization. | Foreground integration of receiver electronics, enclosure, display, amplifier, navigation/connectivity modules, harnesses, and accessories. | kg integrated unit output |
| `configuration_and_test` | Firmware configuration and functional/electrical test | required | Always include configuration and release testing of the finished unit. | Foreground programming, radio/audio/function verification, and external-power-mode testing. | kg accepted tested unit output |
| `rework_waste_handling` | Rework and waste preparation | conditional | Include when rework, rejects, scrap segregation, or treatment preparation occurs within the reporting boundary. | Foreground retention of rework burdens and preparation of waste for external treatment. | kg rework and waste per kg accepted receiver output |
| `packaging_and_delivery` | Packaging and manufacturer's-gate delivery | required | Always include packaging and release to the manufacturer's gate. | Foreground delivery-state definition and reference-product output. | 1 kg net accepted receiver output |

### Process: Incoming component, material, and accessory control (`incoming_component_control`)

#### Inputs

##### Product flows

###### Purchased components and assemblies (`purchased_components`)

Record all received printed circuit boards and assemblies, tuners, semiconductors, passive components, displays, amplifiers, navigation/connectivity modules, storage devices, connectors, and mechanical parts by supplier part and mass.

- Selected flow: Purchased electronic and mechanical components for vehicle receiver manufacture
- Flow property / unit: Mass / kg
- Amount rule: foreground received mass reconciled to inventory movements and accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incoming_component_records`
- Sources: `iec-62474-2018`

###### Wiring harnesses and installation accessories (`received_harness_accessories`)

Record harnesses, adapters, brackets, fasteners, trim pieces, and other installation accessories supplied with the receiver; preserve whether each item is included in net reference mass.

- Selected flow: Vehicle receiver wiring harnesses and installation accessories
- Flow property / unit: Mass / kg
- Amount rule: foreground received and issued mass by accessory part number and delivered configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incoming_component_records`
- Sources: `iso-16750-2-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released inputs for production (`released_components`)

Record accepted components, materials, harnesses, and accessories released from incoming control to foreground assembly and integration.

- Selected flow: Inspected and released vehicle receiver production inputs
- Flow property / unit: Mass / kg
- Amount rule: accepted received mass transferred to production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_incoming_component_records`
- Sources: `iec-62474-2018`

##### Waste flows

###### Incoming nonconforming material (`incoming_nonconforming_material`)

Record rejected or damaged incoming material crossing the foreground boundary to return, recycling, or disposal.

- Selected flow: Nonconforming received electronic and mechanical material
- Flow property / unit: Mass / kg
- Amount rule: measured nonconforming mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incoming_component_records`
- Sources:

##### Elementary flows

### Process: Electronic assembly (`electronic_assembly`)

#### Inputs

##### Product flows

###### Electronic components, boards, and assembly consumables (`electronic_assembly_inputs`)

Record issued boards, components, solder, flux, cleaning agents, coatings, adhesives, and other process consumables when electronic assembly is controlled by the reporting organization.

- Selected flow: Electronic assembly inputs and consumables
- Flow property / unit: Mass / kg
- Amount rule: issued mass less documented return to stock for each material and consumable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled electronics output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronic_assembly_records`
- Sources: `iec-62474-2018`

###### Electronic assembly electricity (`electronic_assembly_electricity`)

Record electricity for placement, soldering, cleaning, coating, inspection, local ventilation, and directly attributable support equipment.

- Selected flow: Electricity supplied to electronic assembly
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered use or documented allocation from facility meter records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled electronics output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronic_assembly_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled receiver electronics (`assembled_electronics`)

Record accepted assembled electronics transferred to unit integration.

- Selected flow: Assembled vehicle receiver electronics
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled electronics output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronic_assembly_records`
- Sources:

##### Waste flows

###### Electronic assembly scrap (`electronic_assembly_scrap`)

Record board, component, solder-bearing, cleaning, coating, and mixed scrap separately by actual downstream disposition.

- Selected flow: Electronic assembly scrap by declared waste fraction
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by waste code and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled electronics output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronic_assembly_records`
- Sources:

##### Elementary flows

###### Direct electronic-assembly emissions (`electronic_assembly_emissions`)

Record quantified direct releases to air or water from soldering, cleaning, or coating only when they cross the environmental boundary; do not substitute workplace concentration measurements for emitted mass.

- Selected flow: Measured direct emissions from controlled electronic assembly
- Flow property / unit: Mass / kg
- Amount rule: pollutant-specific measured or permit-calculated emitted mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled electronics output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronic_assembly_records`
- Sources:

### Process: Receiver and functional-module integration (`unit_integration`)

#### Inputs

##### Product flows

###### Receiver modules, enclosure, and declared combined-function parts (`integration_parts`)

Record the receiver electronics, enclosure, controls, display, amplifier, navigation/connectivity modules, storage or media hardware, harnesses, and accessories physically integrated into or delivered with the unit.

- Selected flow: Vehicle receiver integration parts and functional modules
- Flow property / unit: Mass / kg
- Amount rule: issued mass by bill-of-material position less documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_unit_integration_records`
- Sources: `iec-62474-2018`

###### Integration electricity (`integration_electricity`)

Record electricity used for mechanical and electrical integration and directly attributable support equipment.

- Selected flow: Electricity supplied to receiver integration
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered use or documented allocation from facility meter records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_unit_integration_records`
- Sources:

###### Integration consumables (`integration_consumables`)

Record adhesives, fasteners, labels, cleaning materials, and other material inputs consumed during mechanical and electrical integration.

- Selected flow: Receiver integration consumables by declared material
- Flow property / unit: Mass / kg
- Amount rule: issued mass less documented return to stock for each consumable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_unit_integration_records`
- Sources: `iec-62474-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Integrated receiver unit (`integrated_receiver_unit`)

Record the assembled unit transferred to programming and final functional/electrical testing.

- Selected flow: Integrated externally vehicle-powered radio receiver unit
- Flow property / unit: Mass / kg
- Amount rule: measured integrated unit output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_unit_integration_records`
- Sources:

##### Waste flows

###### Integration scrap and damaged parts (`integration_scrap`)

Record damaged modules, enclosure parts, harnesses, fasteners, adhesive waste, and mixed scrap by measured mass and disposition.

- Selected flow: Receiver integration scrap by declared waste fraction
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by material or waste code and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_unit_integration_records`
- Sources:

##### Elementary flows

### Process: Firmware configuration and functional/electrical test (`configuration_and_test`)

#### Inputs

##### Product flows

###### Integrated units for configuration and test (`units_for_test`)

Record integrated units entering firmware loading, configuration, radio/function checks, and electrical testing.

- Selected flow: Integrated externally vehicle-powered radio receiver unit
- Flow property / unit: Mass / kg
- Amount rule: measured mass of units entering configuration and test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted tested unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_test_records`
- Sources:

###### Configuration and test electricity (`configuration_test_electricity`)

Record electricity supplied to programming, radio-signal, display, amplifier, navigation/connectivity, burn-in where used, and final electrical tests, including attributable test equipment.

- Selected flow: Electricity supplied to receiver configuration and test
- Flow property / unit: Energy / kWh
- Amount rule: metered or test-cycle-calculated electricity reconciled to test logs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted tested unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_test_records`
- Sources: `iec-62087-6-2015`; `iso-16750-2-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted tested receiver (`accepted_tested_receiver`)

Record units that pass declared radio reception, combined-function, and external-power checks and are released to packaging.

- Selected flow: Accepted tested externally vehicle-powered radio receiver
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted tested unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_test_records`
- Sources: `iec-62087-6-2015`; `iso-16750-2-2023`

###### Units routed to rework (`test_rework_units`)

Record failed units transferred to controlled rework without treating them as co-products or burden-free inputs.

- Selected flow: Vehicle receiver units routed to rework
- Flow property / unit: Mass / kg
- Amount rule: measured failed-unit mass transferred to rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted tested unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_test_records`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Rework and waste preparation (`rework_waste_handling`)

#### Inputs

##### Product flows

###### Failed units and recoverable parts for rework (`rework_inputs`)

Record failed units and recovered parts entering diagnosis, repair, cleaning, reprogramming, and repeat testing.

- Selected flow: Failed receiver units and recoverable parts for rework
- Flow property / unit: Mass / kg
- Amount rule: measured input mass by rework route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rework_waste_records`
- Sources:

###### Rework electricity (`rework_electricity`)

Record electricity consumed by diagnosis, repair, cleaning, reprogramming, and repeat testing.

- Selected flow: Electricity supplied to receiver rework and repeat testing
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered or cycle-calculated electricity reconciled to rework and repeat-test logs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rework_waste_records`
- Sources:

###### Rework replacement materials (`rework_replacement_materials`)

Record replacement parts, solder, cleaning agents, and other materials consumed by rework.

- Selected flow: Receiver rework replacement parts and consumables by declared material
- Flow property / unit: Mass / kg
- Amount rule: issued mass less documented return to stock for each replacement part and consumable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rework_waste_records`
- Sources: `iec-62474-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reworked units returned to test (`reworked_units`)

Record repaired units returned to the configuration-and-test process; retain all original and rework burdens.

- Selected flow: Reworked vehicle receiver units returned to test
- Flow property / unit: Mass / kg
- Amount rule: measured repaired-unit mass returned to test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rework_waste_records`
- Sources:

##### Waste flows

###### Prepared manufacturing wastes (`prepared_manufacturing_wastes`)

Record unrecoverable electronic, metal, plastic, glass, cable, solder-bearing, packaging, and mixed wastes separately and link each fraction to its actual external treatment route.

- Selected flow: Segregated vehicle receiver manufacturing waste by declared fraction
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched waste mass by waste code and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rework_waste_records`
- Sources:

##### Elementary flows

### Process: Packaging and manufacturer's-gate delivery (`packaging_and_delivery`)

#### Inputs

##### Product flows

###### Accepted receiver, harnesses, and installation accessories (`delivery_configuration`)

Record the accepted receiver and the exact harness and installation-accessory set included in the delivered configuration.

- Selected flow: Accepted receiver and included delivery accessories
- Flow property / unit: Mass / kg
- Amount rule: measured net delivered receiver mass, excluding separately reported packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_delivery_records`
- Sources:

###### Distribution packaging materials (`distribution_packaging`)

Record cartons, trays, bags, protective films, labels, manuals, pallets, and other packaging by material and mass without adding their mass to the net receiver reference flow.

- Selected flow: Distribution packaging materials by declared material
- Flow property / unit: Mass / kg
- Amount rule: issued packaging mass less documented returns, normalized to packed accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_delivery_records`
- Sources: `iec-63366-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished externally powered vehicle radio receiver (`finished_vehicle_radio_receiver`)

This is the accepted net receiver output at the manufacturer's gate. It includes delivered harnesses and installation accessories declared as part of the unit and excludes separately reported distribution packaging.

- Selected flow: Radio broadcast receivers not capable of operating without an external source of power, of a kind used in motor vehicles `0d100766-4820-4747-aea0-1185a8c4383a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net accepted finished receiver output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Packaging operation waste (`packaging_operation_waste`)

Record offcuts, damaged packaging, labels, and rejected manuals by material and downstream treatment.

- Selected flow: Packaging operation waste by declared material
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished receiver output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_delivery_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared assembly, test, rework, utilities, and packaging operations | Prefer direct metering, batch records, and process subdivision. When residual sharing remains, use a physical driver that reflects resource use, document the driver, and apply it consistently. | `iso-14044-2006`; `iec-63366-2025` |
| `allocation_variant_mix` | multiple receiver models or configurations in one dataset | Calculate production-mass-weighted foreground amounts from variant-level output mass and process records. Disclose included variants and combined-function mix; do not represent the whole category with one model unless the dataset scope is explicitly that model. | `iso-14044-2006` |
| `allocation_rework` | failed, repaired, and retested units | Retain original and rework burdens with accepted output. Returned-to-process parts and units are not burden-free co-products. | `iso-14044-2006` |
| `allocation_waste_recycling` | scrap and wastes sent to recycling, recovery, or disposal | Record waste quantity and actual treatment route. Apply recycling credits or avoided-burden treatment only under the declared downstream LCA method, with substitution assumptions and sensitivity disclosed; do not create an implicit credit in the foreground inventory. | `iso-14044-2006`; `iec-63366-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_incoming_component_records` | `incoming_component_control` | purchased and released components, harnesses, accessories, and incoming rejects | ERP receipts, supplier declarations, inventory movements, inspection and disposition records | supplier part id; description; component/function class; supplier; received mass; accepted mass; rejected mass; return-to-supplier mass; issue and return mass; IEC 62474 declaration reference; included-in-delivery flag | Reconcile receiving, inventory, inspection, and production-issue records by part and reporting period. | kg | each receipt and reporting-period reconciliation | declared representative manufacturing period | every included manufacturing site and supplier stream | Sum accepted and rejected masses by part; reconcile opening and closing stock; normalize to accepted net receiver output. | supplier material declarations, calibrated scales, ERP audit trail, inspection disposition records |
| `cp_electronic_assembly_records` | `electronic_assembly` | assembly inputs, electricity, output, scrap, and direct emissions | material issue/return records, sub-meters, machine logs, output counts/masses, waste tickets, emission measurements or permit calculations | batch; line; board/part id; input mass; return mass; electricity; accepted output mass; scrap mass and code; pollutant and emitted mass; operating hours | Reconcile issued materials, meters, machine logs, accepted output, wastes, and quantified direct releases for each assembly route. | kg; kWh; pollutant-specific kg | per batch or shift, aggregated for the reporting period | declared representative manufacturing period | each electronic-assembly line under organizational control | Sum by technology route and site, subtract documented stock returns, and normalize to assembled electronics output and reference output. | meter records, calibration records, batch travelers, waste manifests, emission method records |
| `cp_unit_integration_records` | `unit_integration` | functional modules, enclosure, combined-function parts, harnesses, accessories, energy, output, and scrap | variant bill of materials, issue/return records, meters, production travelers, output and waste records | variant id; standalone/integrated form; supported bands; display/amplifier/navigation/media/connectivity flags; part id; part mass; accessory flag; electricity; consumable mass; accepted output; scrap | Reconcile variant BOM and actual issues with metered energy, accepted integrated output, and scrap. | kg; kWh | per batch, aggregated for the reporting period | declared representative manufacturing period | each integration line and included site | Aggregate by variant and production route; normalize to integrated output, then production-mass weight for multi-variant datasets. | controlled BOM revision, issue/return records, calibrated scales, meter records, production release records |
| `cp_configuration_test_records` | `configuration_and_test` | programming, function release, external-power modes, test energy, acceptance, and rework | firmware/configuration records, test-station logs, power measurements, meters, pass/fail and rework records | unit/variant id; firmware/configuration; supported bands; input voltage; current or power; mode; signal condition; audio load/output; display state; amplifier state; navigation/connectivity state; mode duration; test energy; accepted mass; failed mass; rework route | Capture automated or controlled test-station records and reconcile to accepted and failed units. | W; V; A; h; kWh; kg | each tested unit or statistically justified lot with reporting-period reconciliation | declared representative manufacturing period | each configuration and final-test station | Calculate mode power and test energy from recorded measurements; aggregate by variant and production mass; normalize manufacturing test energy to accepted output. | calibrated power analyzer or traceable DC measurement, test procedure revision, pass/fail logs, meter reconciliation |
| `cp_rework_waste_records` | `rework_waste_handling` | rework inputs, replacement materials, energy, recovered units, and prepared wastes | rework tickets, material issues, meters, repeat-test logs, waste weights and manifests | failure code; unit mass; rework route; replacement part and mass; consumable mass; electricity; recovered unit mass; waste code; waste mass; destination and treatment | Track each rework route and waste fraction through closure; reconcile returned units to repeat testing and dispatched waste to manifests. | kg; kWh | each rework lot and waste shipment | declared representative manufacturing period | all included rework areas and waste preparation points | Sum inputs and outputs by route, retain burdens with accepted output, and normalize to reference output. | rework closure records, calibrated scales, meter records, repeat-test logs, signed waste manifests |
| `cp_packaging_delivery_records` | `packaging_and_delivery` | net receiver, included accessories, packaging, packed output, and packaging waste | released BOM, packing specification, scales, packaging issue/return records, shipment and waste records | unit/variant id; receiver mass; harness/accessory id and mass; included-in-reference flag; packaging material and mass; delivery state; accepted packed quantity; packaging waste | Reconcile release, packing, shipment, and waste records and distinguish net reference mass from packaging. | kg | each packing specification and reporting-period reconciliation | declared representative manufacturing period | each included packing and dispatch site | Sum net receiver and included accessory mass separately from packaging; normalize packaging and packaging waste to 1 kg net accepted output. | calibrated scales, controlled packing specification, BOM release, shipment reconciliation, waste records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output_mass` | net accepted reference output | Net reference mass = accepted receiver mass + mass of harnesses/accessories flagged as included in the delivered unit; distribution packaging is excluded and reported separately. | accepted receiver mass; included accessory mass; included-in-reference flags; packaging mass | kg net accepted receiver output | `unsd-cpc-3-0` |
| `calc_inventory_normalization` | every foreground amount | Normalized amount = reporting-period process amount / reporting-period net accepted receiver output mass. Preserve the original unit and report the resulting amount per 1 kg reference output. | process amount; accepted output mass | inventory amount per kg reference output | `iso-14044-2006`; `iec-63366-2025` |
| `calc_variant_weighting` | multi-variant dataset | Weighted amount = sum of variant-specific normalized amount multiplied by variant accepted output mass, divided by total accepted output mass. | variant amounts; variant accepted masses; variant qualifiers | production-mass-weighted inventory and disclosed variant mix | `iso-14044-2006` |
| `calc_mode_power` | operating, idle/standby, and automatic power-down modes | Prefer direct power measurement; otherwise power = time-aligned DC voltage × current. Report the measurement window, signal and functional state, load condition, and averaging rule for each mode. | voltage; current or direct power; time; radio band/signal; audio/display/amplifier/navigation/connectivity state | W by declared mode and variant | `iec-62087-6-2015`; `iso-16750-2-2023` |
| `calc_mass_reconciliation` | each material process and reporting period | Imbalance = opening stock + receipts - closing stock - accepted outputs - documented returns - waste outputs. Investigate and disclose unresolved imbalance; do not force it to zero by changing measured flows. | stock, receipt, product, return, and waste masses | kg imbalance and reconciliation status | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and variants | Retain the standalone/integrated form, supported bands, external vehicle power specification, combined-function configuration, included harness/accessory set, net mass, packaging state, geography, and reporting period for every represented variant. | product master, controlled BOM, technical specification, packing specification, release record |
| `dq_material_traceability` | purchased electronic and mechanical inputs | Retain supplier, part, material or component class, declared mass, declaration revision, and data-gap status. Use IEC 62474-compatible supplier declarations when available; do not treat the declaration as process-emission evidence. | supplier declaration, receiving record, BOM revision, data-gap log |
| `dq_energy` | manufacturing electricity | Reconcile sub-metered or allocated electricity with facility totals. Document allocation drivers, meter coverage, excluded loads, electricity dataset geography, and any test-cycle calculation. | meter and invoice records, equipment logs, allocation worksheet, calibration record |
| `dq_power_modes` | product operating and idle/standby data | Use traceable DC measurement and retain supply voltage, signal and band, audio load/output, display/amplifier/navigation/connectivity states, measurement duration, averaging, and instrument calibration. | power test method, raw test log, calibration certificate, variant configuration |
| `dq_mass_balance` | material, product, rework, and waste flows | Reconcile each included process and the overall foreground system; document stock change, return to supplier or process, waste destination, and unresolved imbalance. | mass-balance worksheet, inventory ledger, production and waste records |
| `dq_temporal_geographical_technology` | all foreground and upstream data | Declare data period, site geography, production route, technology, data age, supplier coverage, and substitution or proxy use. Explain whether the period represents normal production and identify material gaps. | dataset metadata, site list, production records, supplier coverage table, gap assessment |
| `dq_completeness` | foreground package | Include every applicable required or conditional process and all material, energy, product, waste, and direct-emission flows known to cross its boundary. Quantify and justify any cut-off instead of silently omitting a flow. | process applicability matrix, inventory completeness check, cut-off and gap log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_scope` | product identity | Confirm that the product is a radio broadcast receiver designed for a motor vehicle and cannot operate without an external power source. Reject portable/self-powered receivers, non-vehicle receivers, standalone parts, complete vehicles, and model-exclusive category claims. | `unsd-cpc-3-0` |
| `validate_reference_identity` | reference flow | Require product flow UUID `0d100766-4820-4747-aea0-1185a8c4383a`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and a reference amount of 1. |  |
| `validate_required_qualifiers` | product and dataset metadata | Fail completeness when form, supported bands, external power specification, combined functions, wiring/accessory content, power modes, net mass, packaging mass, delivery state, geography, or reporting period is missing. | `iso-16750-2-2023`; `iec-62087-6-2015` |
| `validate_power_measurement` | operating, idle/standby, and automatic power-down records | Reject a power claim that omits the external DC supply condition and functional mode or substitutes nameplate maximum power for measured mode power. | `iec-62087-6-2015`; `iso-16750-2-2023` |
| `validate_delivery_mass` | reference output and packaging | Confirm that included harnesses/accessories follow the declared delivery configuration and that distribution packaging is inventoried separately from the 1 kg net reference output. |  |
| `validate_process_coverage` | foreground process map | Require incoming control, unit integration, configuration/test, and packaging/delivery; require electronic assembly and rework/waste handling when their inclusion conditions apply. | `iec-63366-2025`; `iso-14044-2006` |
| `validate_material_and_energy_records` | foreground inventory | Require traceable component/material quantities, manufacturing electricity, accepted output, rework, waste, and applicable direct emissions with protocol links and consistent normalization. | `iec-62474-2018`; `iso-14044-2006` |
| `validate_allocation` | shared operations and variants | Require subdivision or a documented physical allocation driver, production-mass weighting for grouped variants, and retention of rework burdens; reject undisclosed recycling credits. | `iso-14044-2006`; `iec-63366-2025` |
| `validate_mass_balance_and_gaps` | process and system totals | Require reported mass-reconciliation status, quantified unresolved imbalance, cut-offs, proxy data, supplier coverage, and material data gaps. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for an externally vehicle-powered radio receiver, publishable after review as a `secondary_dataset` and usable as a `background_dataset` for downstream component, infotainment-system, or vehicle studies. |
| downstream_use | Component supply-chain LCA, product carbon footprint, receiver or infotainment assembly modelling, and downstream vehicle-system models that add their own transport, use, maintenance, and end-of-life scenarios. |
| allowed_use | Use for the declared standalone or integrated receiver configuration, production geography, technology, reporting period, functional-module set, harness/accessory delivery state, and packaging treatment. |
| excluded_use | Do not use as a complete vehicle, portable receiver, non-vehicle receiver, standalone display/amplifier/navigation/harness dataset, universal category average without a representative production mix, or use-phase dataset without a declared vehicle power and operating scenario. |
| required_metadata | canonical PCR id; product flow UUID; Mass and Units of mass UUIDs; standalone/integrated form; supported bands; external vehicle power specification; combined functions; included harnesses/accessories; net mass; packaging mass; delivery state; variant mix; production route; site geography; reporting period; upstream dataset versions; allocation; cut-offs; data gaps; operating/idle/standby power test conditions when reported |
| required_quality_disclosure | Supplier and BOM coverage, foreground meter and mass coverage, power-test method and calibration, variant weighting, mass-balance status, rework and waste treatment, direct-emission applicability, proxy data, cut-offs, uncertainty or missing range evidence, and review status. |
| update_trigger | Change in receiver form or supported bands; external power architecture; display/amplifier/navigation/connectivity configuration; delivered harness/accessory set; BOM or packaging; assembly/test technology; site or electricity supply; allocation or variant mix; power-test method; waste route; or a material change in foreground or supplier data. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-63366-2025` | standard | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691 (retrieved 2026-08-09) | Electrical/electronic-product PCR and LCA framework, foreground boundary, product-specific declarations, allocation, and reporting. |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines (confirmed 2022, with published amendments), https://www.iso.org/standard/38498.html (retrieved 2026-08-09) | LCI goal and scope, inventory completeness, allocation, normalization, reporting, and data quality. |
| `iso-16750-2-2023` | standard | ISO 16750-2:2023, Road vehicles — Environmental conditions and testing for electrical and electronic equipment — Part 2: Electrical loads, https://www.iso.org/standard/76119.html (retrieved 2026-08-09) | Applicability to road-vehicle electrical/electronic units, external electrical loads, and wiring-harness/connection conditions. |
| `iec-62087-6-2015` | standard | IEC 62087-6:2015, Audio, video, and related equipment — Determination of power consumption — Part 6: Audio equipment, https://webstore.iec.ch/en/publication/22586 (retrieved 2026-08-09) | Operating, decoding, idle, and automatic power-down mode measurement concepts for receiver/audio power reporting. |
| `iec-62474-2018` | standard | IEC 62474:2018, Material declaration for products of and for the electrotechnical industry, consolidated with AMD1:2020, https://webstore.iec.ch/en/publication/29857 (retrieved 2026-08-09) | Supplier material declarations, component/material traceability, and supply-chain data exchange; not process-chemical or use-emission evidence. |
| `unsd-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure and classification resources, https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml (retrieved 2026-08-09) | CPC 3.0 category identity and exclusion of whole vehicles, standalone parts, and non-vehicle receivers from this classification leaf. |
