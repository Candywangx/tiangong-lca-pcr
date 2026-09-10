---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-not-incorporating-reception-apparatus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Transmission apparatus not incorporating reception apparatus

## 1. Scope and Applicability

This PCR covers factory production of stand-alone transmission apparatus whose intended function is to generate and transmit radio-frequency signals without incorporating reception apparatus. It includes configurable equipment for radio and television broadcasting, fixed wireless or microwave links, and other dedicated transmitter infrastructure when the delivered equipment is transmit-only. The category-wide rule is not tied to a named model: each foreground data package shall represent a declared product-family mix or a clearly labelled configuration and shall not claim that one model represents the category.

The default boundary starts with procured parts, modules, materials, and services at the manufacturer's gate and ends with a finished, configured, tested, dispatch-ready transmitter at the manufacturer's gate. Printed circuit board assembly, RF power-amplifier integration, power conversion, cooling hardware, enclosure or rack integration, firmware loading, testing, and packaging are included when performed or controlled by the manufacturer. Outbound delivery, installation, antennas, towers, buildings, external feeders, and operational electricity are outside the default production boundary and shall be modelled separately when the study includes them.

Equipment that incorporates a receiver, transceiver, monitoring receiver, radio or television reception function, camera, recorder, router, base-station receive chain, or general-purpose network communication function is excluded. Spare modules and field-replacement parts are not the reference product unless a separate parts dataset is declared. The intended use, transmission standard and frequency band, rated RF output power, operating-power and duty/load profile, RF power-amplifier technology, power-supply topology, cooling method, chassis and board configuration, included accessories, and delivery state are mandatory product qualifiers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-not-incorporating-reception-apparatus |
| classification_refs | CPC 3.0: 47212, Transmission apparatus not incorporating reception apparatus (exact) |
| covered_products | Stand-alone transmit-only radio or television broadcast transmitters; transmit-only fixed wireless and microwave-link apparatus; dedicated transmit-only RF infrastructure delivered as integrated cabinets, racks, chassis, or modular systems |
| excluded_products | Apparatus incorporating reception or transceiver functionality; radio or television receivers; cameras and recorders; cellular base stations or network apparatus with a receive chain; antennas, feeder systems, towers, buildings, site civil works, and stand-alone replacement parts |
| representative_product | A declared production mix of finished, configured, tested transmit-only apparatus, not a named single model |
| production_route | Procured electronic, RF, power, cooling, and mechanical parts -> board and subassembly preparation -> RF power and cooling integration -> chassis/system integration -> configuration and test -> packaging and dispatch readiness |
| market_state | Finished, tested, and dispatch-ready equipment at the manufacturer's gate; net equipment mass is the reference quantity and packaging is inventoried separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of finished transmission apparatus that intentionally does not incorporate reception apparatus |
| How much | 1 kg net mass of finished equipment, excluding transport packaging |
| How well | Configured and tested to the declared use, transmission standard, frequency band, rated RF output, and delivery acceptance criteria |
| How long or cycle | One declared production period or batch; operating lifetime is not included in this production reference flow |
| reference_flow_link | Transmission apparatus not incorporating reception apparatus `5a185479-beab-4b9a-825b-371e816dbc58` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Transmission apparatus not incorporating reception apparatus `5a185479-beab-4b9a-825b-371e816dbc58` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Intended use; transmit-only confirmation and excluded receive functions; transmission standard or waveform; assigned frequency band; rated RF output power; input power at declared load points; duty cycle or traffic/load profile; RF power-amplifier technology and module count; power-supply topology and redundancy; air, liquid, or other cooling configuration; chassis, rack, cabinet, and board configuration; included exciter, controller, filters, combiners, cables, accessories, and spares; net equipment mass; packaging mass; product-family or configuration coverage; production geography and period; firmware and test state; delivery boundary and dispatch state |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete and prevent comparison between transmitter datasets.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the inventory to measured net mass of accepted finished equipment; exclude transport packaging from reference-product mass and record packaging as a separate input. |
| `shipment_mass_reconciliation` | Dispatch-ready product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile gross shipment mass to net equipment, included accessories and spares, and packaging; disclose any balance difference. |
| `manufacturing_energy` | Assembly, integration, and test electricity | Energy | kWh | Record metered electricity by process where possible; preserve the electricity mix and measurement period and do not convert operating RF power into manufacturing energy. |
| `rf_performance_qualifiers` | Rated RF output, input power, and duty/load profile | Power and time or dimensionless duty fraction | W or kW; h; % or fraction | Preserve declared measurement conditions, waveform or standard, frequency band, load point, auxiliary cooling boundary, and duty/load profile; these are performance qualifiers, not mass-flow conversions. |
| `component_mass_balance` | Bill of materials and process outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use consistent wet or dry and net or gross conventions and reconcile installed parts, process losses, rejects, and accepted output to the reference-flow basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Procured electronic components, PCBAs, RF devices, power supplies, cooling hardware, metalwork, cables, packaging, utilities, and services available at the manufacturer's receiving gate |
| starting_condition_role | The foreground starts at manufacturer-controlled assembly and integration; upstream burdens remain attached to accepted supplier datasets for procured inputs |
| product_classification_scope | Transmit-only apparatus matching the semantic boundary of CPC 3.0 subclass 47212; classification alone does not override the no-receiver product test |
| recursive_input_rule | A procured transmit-only apparatus or complete transmitter module in the same category is recorded as an upstream product input with a separate supplier dataset and is not recursively disassembled unless primary component data are available |
| upstream_dataset_requirement | Use technology-, geography-, and period-representative supplier datasets for PCBAs, RF semiconductors/modules, power supplies, cooling systems, metal chassis or cabinets, cables, packaging, and energy; disclose proxies and black-box modules |
| disclosure | Declare included manufacturing sites and processes, product-family or configuration coverage, cut-offs, allocation, upstream proxies, standard/frequency/power/duty qualifiers, hardware configuration, packaging, included accessories or spares, and the exact delivery boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_production` | Manufacturer-controlled production | Include applicable parts production data, PCBA/module assembly, RF power and cooling integration, enclosure/system assembly, configuration, testing, warehousing directly tied to the product, and packaging. | `etsi-es-203199-2025` |
| `boundary_black_box_inputs` | Procured complete modules | Retain supplier cradle-to-gate burdens for black-box RF modules, power-supply units, cooling units, and other complete modules; disclose mass, quantity, technology, supplier geography and proxy choices. | `etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025` |
| `boundary_use_and_site` | Use and installation | Exclude operational electricity, cooling energy after delivery, installation, antenna and feeder systems, towers, buildings, and site civil works from the default production dataset; when modelled downstream, use the declared input power and duty/load profile and keep those burdens separate. | `etsi-es-203199-2025`; `itu-t-l1410-2024` |
| `boundary_no_receiver` | Product identity | Reject any product-family mix containing apparatus with an incorporated reception or transceiver function; incidental monitoring or control interfaces shall be documented and shown not to constitute signal reception functionality. | `unsd-cpc-v3-2025` |
| `boundary_cutoff_disclosure` | Cut-off decisions | Avoid cut-offs where practicable; assess cumulative mass, energy, and environmental significance, document every excluded process or flow, and retain potentially significant RF semiconductors, PCBAs, power electronics, cooling hardware, and metals even when their mass share is small. | `etsi-es-203199-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pcba_assembly` | Printed circuit board and control/exciter assembly | required | Always included; use supplier PCBA datasets when assembly is fully outsourced | Foreground electronics assembly or supplier-linked black-box preparation | 1 kg accepted reference product |
| `rf_power_cooling_integration` | RF power, power-supply, and cooling integration | required | Always included for the declared hardware configuration | Foreground RF chain and thermal-management integration | 1 kg accepted reference product |
| `chassis_system_assembly` | Chassis, rack, cabinet, and system assembly | required | Always included | Foreground mechanical and electrical system integration | 1 kg accepted reference product |
| `configuration_test` | Firmware configuration, calibration, and acceptance test | required | Always included | Foreground configuration and quality acceptance | 1 kg accepted reference product |
| `packaging_dispatch` | Packaging and dispatch preparation | required | Always included for the declared dispatch-ready state | Foreground packaging and final mass reconciliation | 1 kg accepted reference product |
| `outbound_delivery` | Delivery beyond manufacturer gate | excluded_by_default | Include only in a separately disclosed delivered-to-site extension | Downstream transport extension | tonne-kilometre or declared shipment service |

### Process: Printed circuit board and control/exciter assembly (`pcba_assembly`)

#### Inputs

##### Product flows

###### Electronic parts, bare boards, and procured PCBAs (`electronic_parts_pcba`)

Record the mass of bare and populated boards, integrated circuits, RF small-signal parts, controllers, displays, connectors, and procured PCBAs that enter the assembly boundary. Select specific Tiangong product flows when the foreground dataset is built.

- Selected flow: Product-specific electronic components, bare printed circuit boards, and PCBAs
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass less returned or unused material, reconciled to installed board mass and board-process waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable electronic-parts screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 0.80
  - Unit: kg/kg reference product
  - Basis: broad first-pass estimate pending reviewed product-family BOM evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### PCBA assembly electricity (`pcba_electricity`)

Record metered electricity for soldering, reflow, cleaning, inspection, rework, and directly attributable assembly support.

- Selected flow: Site- and period-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered process electricity or documented allocation of line electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable PCBA-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 50
  - Unit: kWh/kg reference product
  - Basis: broad first-pass estimate pending metered production-line evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted control, exciter, and signal-processing boards (`accepted_pcba_modules`)

Record accepted assembled boards transferred to system integration and reconcile them to input parts and rejected material.

- Selected flow: Product-specific accepted PCBA modules
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted board mass transferred to downstream integration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `etsi-es-203199-2025`

##### Waste flows

###### Rejected boards, solder residues, and electronic assembly waste (`pcba_process_waste`)

Record each waste stream by measured mass and treatment route without netting recycled material against input mass.

- Selected flow: Waste-specific Tiangong flow selected by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected and discarded mass leaving PCBA assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_waste`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable PCBA-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference product
  - Basis: broad screening bound pending batch yield and waste-ticket evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Directly measured assembly emissions (`pcba_direct_emissions`)

Record applicable site-measured emissions by substance-specific Tiangong elementary flow; do not create a generic emission total.

- Selected flow: Substance-specific Tiangong elementary flow selected during dataset construction
- Flow property / unit: Substance-specific property / compatible unit
- Amount rule: Measured or permit-reported direct emission attributable to the process; zero only with documented non-applicability
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `etsi-es-203199-2025`

### Process: RF power, power-supply, and cooling integration (`rf_power_cooling_integration`)

#### Inputs

##### Product flows

###### RF power-amplifier devices and modules (`rf_power_modules`)

Record RF transistors or tubes, amplifier boards/modules, drivers, combiners, filters, couplers, and heat spreaders in the declared RF chain.

- Selected flow: Product-specific RF power devices and amplifier modules
- Flow property / unit: Mass / kg
- Amount rule: Installed BOM mass of the declared RF amplifier chain
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`
- Range: Provisional replaceable RF-chain mass screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.02
  - Upper: 0.60
  - Unit: kg/kg reference product
  - Basis: broad category estimate pending product-family BOM evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Power-supply and distribution hardware (`power_supply_hardware`)

Record rectifiers, converters, transformers, power-distribution units, redundancy modules, busbars, and associated control hardware included in the shipment.

- Selected flow: Product-specific power-supply and distribution hardware
- Flow property / unit: Mass / kg
- Amount rule: Installed BOM mass, including redundant units and externally supplied power cabinets when included in the delivery state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`
- Range: Provisional replaceable power-hardware screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 0.40
  - Unit: kg/kg reference product
  - Basis: broad category estimate pending product-family BOM evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling and thermal-management hardware (`cooling_hardware`)

Record fans, pumps, cold plates, heat exchangers, heat sinks, coolant charged at delivery, ducts, and controls according to the declared air- or liquid-cooling configuration.

- Selected flow: Product-specific cooling and thermal-management hardware
- Flow property / unit: Mass / kg
- Amount rule: Installed mass plus initial coolant charge included in the dispatch-ready product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`
- Range: Provisional replaceable cooling-hardware screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 0.50
  - Unit: kg/kg reference product
  - Basis: broad category estimate pending declared cooling BOM evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### RF integration electricity (`rf_integration_electricity`)

Record electricity for module assembly, power-system integration, coolant filling, and directly attributable checks before final acceptance testing.

- Selected flow: Site- and period-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered process electricity or documented allocation of integration-line electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable RF-integration energy estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 30
  - Unit: kWh/kg reference product
  - Basis: broad first-pass estimate pending metered integration evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Integrated RF power and thermal subsystem (`integrated_rf_subsystem`)

Record the accepted RF, power-conversion, and cooling subsystem transferred to chassis/system assembly.

- Selected flow: Product-specific integrated RF power and thermal subsystem
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted subsystem mass reconciled to installed input hardware and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`

##### Waste flows

###### Rejected RF, power, and cooling parts (`rf_integration_waste`)

Record rejected modules, metal offcuts, coolant losses, and other wastes separately by material and treatment route.

- Selected flow: Waste-specific Tiangong flow selected by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured waste and rejected-part mass leaving the integration process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_waste`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable integration-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference product
  - Basis: broad screening bound pending yield and waste-ticket evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Chassis, rack, cabinet, and system assembly (`chassis_system_assembly`)

#### Inputs

##### Product flows

###### Chassis, cabinet, rack, and structural metalwork (`enclosure_metalwork`)

Record installed sheet metal, frames, racks, cabinets, fasteners, shielding, and mechanical supports included in the delivery state.

- Selected flow: Product-specific enclosure and structural metalwork
- Flow property / unit: Mass / kg
- Amount rule: Installed BOM mass net of offcuts and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable enclosure-mass screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 0.85
  - Unit: kg/kg reference product
  - Basis: broad category estimate pending product-family BOM evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electronic boards and RF/power/cooling subsystems (`system_subassemblies`)

Record accepted boards and subsystems transferred from upstream foreground processes or procured as complete black-box modules.

- Selected flow: Product-specific electronic and RF/power/cooling subassemblies
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass; prevent double counting between internal transfers and procured black-box inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`

###### Cables, connectors, filters, combiners, and included accessories (`cables_and_accessories`)

Record internal cables, connectors, RF filters and combiners, control interfaces, and shipment accessories included in the accepted product.

- Selected flow: Product-specific cables, connectors, RF network hardware, and included accessories
- Flow property / unit: Mass / kg
- Amount rule: Installed and included-accessory BOM mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`

###### System-assembly electricity (`system_assembly_electricity`)

Record electricity for mechanical assembly, wiring, firmware loading, and directly attributable material handling.

- Selected flow: Site- and period-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered process electricity or documented allocation of assembly-line electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable system-assembly energy estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 30
  - Unit: kWh/kg reference product
  - Basis: broad first-pass estimate pending metered assembly evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Integrated transmitter before acceptance test (`integrated_transmitter`)

Record the assembled transmit-only system transferred to configuration and acceptance testing.

- Selected flow: Transmission apparatus not incorporating reception apparatus `5a185479-beab-4b9a-825b-371e816dbc58`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of assembled units transferred to test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: `unsd-cpc-v3-2025`

##### Waste flows

###### Assembly rejects and metal offcuts (`system_assembly_waste`)

Record rejected parts, cable and metal offcuts, and other wastes separately by material and destination.

- Selected flow: Waste-specific Tiangong flow selected by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass leaving system assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_waste`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable assembly-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference product
  - Basis: broad screening bound pending batch yield and waste-ticket evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Firmware configuration, calibration, and acceptance test (`configuration_test`)

#### Inputs

##### Product flows

###### Integrated transmitter entering test (`transmitter_to_test`)

Record the net mass and configuration identity of each assembled unit entering the test sequence.

- Selected flow: Transmission apparatus not incorporating reception apparatus `5a185479-beab-4b9a-825b-371e816dbc58`
- Flow property / unit: Mass / kg
- Amount rule: Measured input mass linked to serial, configuration, or production-lot records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_and_test`
- Sources: `unsd-cpc-v3-2025`

###### Test electricity including declared cooling auxiliaries (`acceptance_test_electricity`)

Record metered electricity for burn-in, calibration, rated-load and reduced-load tests, and the cooling auxiliaries inside the declared test boundary. Do not use rated input power multiplied by an assumed duration when meter data exist.

- Selected flow: Site- and period-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered test-cell electricity minus documented unrelated baseline consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_and_test`
- Sources: `etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`
- Range: Provisional replaceable acceptance-test energy estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 100
  - Unit: kWh/kg reference product
  - Basis: broad first-pass estimate spanning low- and high-power test regimes pending metered test evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted tested transmit-only apparatus (`accepted_tested_transmitter`)

Record only units that pass the declared configuration and acceptance criteria, including transmit-only identity, standard/frequency, rated RF output, input power, duty/load profile, and cooling boundary.

- Selected flow: Transmission apparatus not incorporating reception apparatus `5a185479-beab-4b9a-825b-371e816dbc58`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of accepted tested units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_and_test`
- Sources: `unsd-cpc-v3-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`

##### Waste flows

###### Failed units and replaced test parts (`test_failures_and_rework_waste`)

Record failed units, parts replaced during test, and their rework, reuse, or waste destinations without treating reworked accepted units as both waste and product.

- Selected flow: Product or waste-specific Tiangong flow selected by actual disposition
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by final disposition from test and rework records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_waste`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable test-failure screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference product
  - Basis: broad screening bound pending test-yield and disposition records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Packaging and dispatch preparation (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Accepted tested apparatus entering packaging (`tested_product_to_packaging`)

Record the net accepted product mass and included accessory/spare configuration entering packaging.

- Selected flow: Transmission apparatus not incorporating reception apparatus `5a185479-beab-4b9a-825b-371e816dbc58`
- Flow property / unit: Mass / kg
- Amount rule: Measured net equipment and included-accessory mass before packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_and_packaging`
- Sources: `unsd-cpc-v3-2025`

###### Packaging materials (`packaging_materials`)

Record wood, steel, cardboard, paper, plastics, cushioning, pallets, and reusable transport frames separately where data permit.

- Selected flow: Material-specific packaging product flows selected during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging issued less returned reusable packaging, by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_and_packaging`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable packaging-mass estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 0.60
  - Unit: kg/kg reference product
  - Basis: broad category estimate pending shipment records and reusable-packaging evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dispatch-ready reference product (`reference_product_output`)

Record the net mass of finished, tested, dispatch-ready transmit-only apparatus at the manufacturer's gate. Packaging remains a separate inventory input and is excluded from the 1 kg reference amount.

- Selected flow: Transmission apparatus not incorporating reception apparatus `5a185479-beab-4b9a-825b-371e816dbc58`
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference amount after normalization from measured accepted net equipment mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg dispatch-ready net equipment at manufacturer gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-v3-2025`

##### Waste flows

###### Packaging offcuts and damaged packaging (`packaging_waste`)

Record packaging waste generated before dispatch by material and treatment route.

- Selected flow: Waste-specific Tiangong flow selected by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging waste leaving dispatch preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_waste`
- Sources: `etsi-es-203199-2025`
- Range: Provisional replaceable packaging-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg reference product
  - Basis: broad screening bound pending packaging issue and waste records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate_first` | Product families, configurations, and shared lines | Prefer product-specific BOMs, serial or lot records, process subdivision, and direct metering so burdens are assigned without allocation. | `etsi-es-203199-2025` |
| `allocation_shared_operations` | Shared assembly, test, facility, and support burdens | When subdivision is not feasible, use a documented physical driver that reflects burden causation, such as metered equipment-hours, test-cell energy, machine time, processed board area, or accepted product mass; disclose the driver and apply it consistently. | `etsi-es-203199-2025` |
| `allocation_family_mix` | Production-mix datasets | Weight configurations by accepted net production mass over the declared period; separately disclose configuration counts and rated-power bands so a high-mass or high-power configuration is not hidden by the average. | `etsi-es-203199-2025` |
| `allocation_recycling` | Production scrap and reusable packaging | Report gross waste and destination; apply recycling burdens or credits only under the declared background-dataset convention and do not subtract recycled mass or revenue directly from foreground inputs. | `etsi-es-203199-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_mass` | `pcba_assembly`; `rf_power_cooling_integration`; `chassis_system_assembly` | Installed parts, modules, boards, metalwork, coolant, accessories, and accepted subassemblies | Approved BOM, material issue/return records, scales, and production transfer records | configuration_id; part_id; part_description; supplier; quantity; unit_mass; issued_mass; returned_mass; installed_mass; lot; site; date | Export controlled BOM and material transactions; verify representative items by calibrated scale; reconcile transfers and black-box modules | kg and piece | Each configuration revision and production lot; aggregate for reporting period | Entire declared reporting period | Every included manufacturing and integration site | Sum installed mass by configuration and mass-weight across accepted production; keep internal transfers separate from external inputs | BOM revision approval, calibration records, supplier declarations, goods receipts, and mass-balance reconciliation |
| `cp_process_energy` | `pcba_assembly`; `rf_power_cooling_integration`; `chassis_system_assembly` | Direct and shared manufacturing electricity | Submeters, machine logs, utility intervals, and production records | meter_id; start_time; end_time; kWh; baseline_kWh; process; line; configuration_id; accepted_mass; allocation_driver | Prefer direct submetering; otherwise subtract documented idle baseline and allocate shared energy with the declared physical driver | kWh | Continuous or per batch; aggregate monthly and over the reporting period | Entire declared reporting period, including seasonal production variation | Every included production line and site | Sum attributable kWh and divide by accepted net reference-product mass; preserve site electricity supply | Meter calibration, interval completeness, baseline study, production totals, and allocation worksheet |
| `cp_yield_and_waste` | All required processes | Rejects, rework, offcuts, residues, coolant losses, and waste destinations | Yield logs, non-conformance records, weigh tickets, waste manifests, and recycler receipts | process_id; material; quantity; mass; rework_status; final_disposition; waste_flow; treatment_route; date | Link rejected items to final disposition; weigh by material and prevent double counting of reworked accepted units | kg and piece | Each lot or waste shipment; aggregate for reporting period | Entire declared reporting period | Every included production and test site | Sum final waste by material and destination per accepted net product mass | Non-conformance closure, weigh tickets, manifests, recycler receipts, and accepted-output reconciliation |
| `cp_configuration_and_test` | `configuration_test` | Identity, RF performance qualifiers, test duration, electricity, and acceptance | Configuration control, serial/lot records, test scripts, calibrated RF and power meters, and test-cell energy meter | serial_or_lot; intended_use; no_receiver_confirmation; standard_waveform; frequency_band; rated_rf_output; input_power_by_load; duty_profile; pa_technology; psu_topology; cooling_boundary; start_time; end_time; test_kWh; pass_fail | Run approved test plan; record RF output and AC input at declared load points; meter included cooling auxiliaries; link results to configuration | W or kW, kWh, h, %, and categorical fields | Every accepted configuration and production lot | Entire declared reporting period | Every included test cell and site | Aggregate measured test energy over accepted units; retain distribution of power/load points and failures | Calibration certificates, approved test procedure, raw test files, configuration approval, and pass/fail records |
| `cp_dispatch_and_packaging` | `packaging_dispatch` | Net equipment, accessories, spares, packaging, and delivery state | Packing lists, scales, packaging issue records, and shipment release | shipment_id; configuration_id; net_equipment_mass; accessories_mass; spares_mass; packaging_material; packaging_mass; reusable_flag; gross_mass; delivery_boundary; incoterm_or_equivalent; destination_if_included | Weigh net product and gross shipment; reconcile material-specific packaging and included accessories/spares | kg | Each shipment; aggregate for reporting period | Entire declared reporting period | Every included dispatch site | Net equipment mass defines reference product; packaging and included accessories remain separately reported | Calibrated scale records, signed packing list, packaging issue record, and shipment release |
| `cp_direct_emissions` | All required processes | Direct emissions crossing the environment boundary | Stack or workplace controls where applicable, permit reports, material-loss records, and site environmental records | substance; Tiangong_flow_id; medium; measured_amount; unit; method; process; period; allocation_driver | Use substance-specific measured or officially reported data; document non-applicability instead of assuming zero | Substance-compatible mass or volume unit | Per measurement campaign or reporting interval | Full applicable monitoring period within the declared reporting period | Every included site with potentially applicable direct emissions | Allocate only after process/site totals and driver are documented; normalize to accepted product mass | Laboratory report, monitoring calibration, permit submission, and material balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = reporting-period attributable amount / accepted net mass of reference product in the same period | Attributable flow amount; accepted net product mass | Amount per 1 kg reference product | `etsi-es-203199-2025` |
| `calc_component_balance` | Each configuration and reporting-period mix | external material inputs = installed accepted-product mass + final process waste + inventory change + returned material, subject to documented measurement uncertainty; internal transfers cancel once | BOM and material transactions; accepted mass; waste; returns; opening and closing inventory | Mass-balance check and unexplained difference | `etsi-es-203199-2025` |
| `calc_shared_energy` | Shared manufacturing or test energy | attributable kWh = net shared kWh x declared product driver / total driver; direct-metered energy takes precedence | Shared meter intervals; baseline; machine/test hours, board area, or accepted mass | Allocated process kWh by product family or configuration | `etsi-es-203199-2025` |
| `calc_test_energy` | Acceptance test | test kWh = metered test-cell kWh - documented unrelated baseline; included cooling auxiliaries remain inside the test boundary | Test-cell meter, timestamps, baseline, pass/fail and rework records | Test electricity per accepted net product mass | `etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025` |
| `calc_operating_profile_metadata` | Downstream use scenario metadata | preserve measured input power by declared load point and combine with declared time fractions only in a downstream use model; fractions shall sum to one over the scenario period | Input power by load point; duty/load fractions; operating hours; cooling boundary | Separately reported downstream operational-energy scenario, not manufacturing inventory | `etsi-es-203199-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_semantic_identity` | Product family and every configuration | Demonstrate transmit-only function and absence of incorporated reception apparatus; document incidental control or monitoring interfaces and excluded receive-chain products. | Approved product architecture, functional specification, BOM, and configuration-control record |
| `dq_configuration_coverage` | Reporting-period production mix | Cover configurations representing the declared accepted production mass; report excluded configurations and their mass share without using one model as a category proxy. | Production ledger, configuration list, accepted mass, and coverage calculation |
| `dq_hardware_detail` | BOM and black-box modules | Identify RF PA technology/modules, power supplies and redundancy, cooling configuration and coolant, chassis/rack/cabinet, PCBAs, and included accessories or spares. | Controlled BOM, supplier specifications, drawings, and packing lists |
| `dq_energy` | Assembly, integration, and test energy | Prefer primary metered data, document meter boundary and electricity supply, and retain load-point and duty-profile data separately from manufacturing energy. | Meter data, calibration, baseline study, test scripts, and allocation worksheet |
| `dq_mass_balance` | Material inputs, product, and wastes | Reconcile installed mass, accepted output, process wastes, returns, and inventory changes; investigate material unexplained differences. | BOM reconciliation, scale records, waste tickets, and calculation output |
| `dq_temporal_geography` | All foreground and upstream data | Use data representative of the declared production period and sites; identify supplier proxies, technology vintage, and geographic electricity and material datasets. | Data-quality assessment and source metadata |
| `dq_cutoff_and_completeness` | All unit processes and flows | Assess mass, energy, and environmental significance cumulatively and document exclusions; do not omit semiconductors, PCBAs, power electronics, cooling hardware, or metals solely because of low mass. | Completeness checklist, cut-off register, and sensitivity or proxy assessment |
| `dq_delivery_state` | Reference product and packaging | State factory-gate dispatch condition, firmware/test status, included modules/accessories/spares, net and gross mass, packaging, and whether any downstream transport is separately included. | Packing list, shipment release, scale record, and dataset boundary statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_no_receiver` | Product identity | The dataset shall use the exact reference product flow, represent transmit-only apparatus, and contain no configuration with incorporated reception or transceiver functionality. | `unsd-cpc-v3-2025` |
| `validate_reference_mass` | Quantitative reference | The reference output shall equal 1 kg net accepted equipment after normalization; transport packaging shall not be included in reference-product mass. | `etsi-es-203199-2025` |
| `validate_required_qualifiers` | Dataset metadata | Intended use, standard/waveform, frequency band, rated RF output, input power/load points, duty/load profile, PA technology, PSU topology, cooling, chassis/board configuration, coverage, test state, and delivery boundary shall all be present. | `etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025` |
| `validate_process_coverage` | Process inventory | All five required processes shall be represented by foreground records or disclosed supplier black-box datasets; internal transfers shall not be double counted. | `etsi-es-203199-2025` |
| `validate_mass_balance` | Materials, product, and wastes | Installed components, accepted net product, rejects, returns, inventory changes, packaging, and waste destinations shall reconcile within documented measurement uncertainty. | `etsi-es-203199-2025` |
| `validate_energy_boundary` | Manufacturing and test electricity | Energy records shall identify process, meter boundary, period, site electricity supply, allocation driver, and included cooling auxiliaries; downstream operating energy shall remain separate. | `etsi-es-203199-2025` |
| `validate_family_representativeness` | Product mix | A production-mix dataset shall disclose configuration coverage by accepted mass and rated-power band; a single configuration shall be labelled as such and shall not be presented as the category average. | `etsi-es-203199-2025` |
| `validate_delivery_state` | Final product | Net equipment, included accessories/spares, packaging, firmware/test status, dispatch state, and any delivery extension shall match packing and shipment records. | `etsi-es-203199-2025` |
| `validate_cutoffs_sources` | Completeness and evidence | Every cut-off, proxy, allocation, provisional range, and public source shall be disclosed; provisional reasoned estimates shall not replace available foreground records and shall be flagged for replacement. | `etsi-es-203199-2025`; `itu-t-l1410-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for finished transmit-only apparatus |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` for equipment production in ICT network, broadcasting, wireless-link, infrastructure, or capital-goods studies |
| allowed_use | Manufacturer-gate equipment production when semantic identity, configuration coverage, performance qualifiers, boundary, geography, period, and delivery state match the study |
| excluded_use | Apparatus incorporating reception; operational electricity without a separate measured use scenario; antenna, feeder, tower, building, installation, maintenance, or end-of-life burdens not explicitly added; category-wide comparison based on an undisclosed single model |
| required_metadata | Canonical PCR id; product-flow UUID; CPC reference; manufacturer and sites; production period; product-family/configuration mix; transmit-only evidence; intended use; standard/waveform; frequency band; rated RF output and input-power load points; duty/load profile; RF PA, PSU, cooling, chassis and board configuration; included accessories/spares; net and gross mass; packaging; test/firmware state; delivery boundary; allocation and cut-offs |
| required_quality_disclosure | Foreground coverage; metering and scale quality; BOM and mass-balance result; supplier black-box and proxy share; configuration representativeness; waste destinations; data age and geography; uncertainty; unresolved UUIDs or flow choices; provisional reasoned-estimate ranges replaced or retained |
| update_trigger | Material change in product-family composition, transmission standard or frequency coverage, PA or power-supply technology, cooling architecture, chassis/board design, test regime, production site or energy supply, delivery state, allocation, source evidence, or Tiangong reference identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-09) | Official category identity and separation of transmit-only apparatus from apparatus incorporating reception |
| `etsi-es-203199-2025` | standard | ETSI ES 203 199 V1.4.1 (2025-01), Environmental Engineering; Methodology for environmental Life Cycle Assessment of ICT goods, networks and services, https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.04.01_60/es_203199v010401p.pdf (retrieved 2026-08-09) | ICT functional unit and system-boundary principles; parts, PCB/PCBA, mechanics, black-box modules, assembly, packaging, transport, primary data, cut-off, allocation, energy, data quality, and reporting rules |
| `itu-t-l1410-2024` | standard | ITU-T Recommendation L.1410 (11/2024), Methodology for environmental life cycle assessments of information and communication technology goods, networks and services, https://www.itu.int/rec/T-REC-L.1410-202411-I (retrieved 2026-08-09) | ICT life-cycle framework, unit-process and goods/network context, and separation of production and downstream life-cycle stages |
| `rohde-schwarz-thu9-efficiency` | handbook | Rohde & Schwarz, R&S THU9: Efficiency is the key factor when choosing a high-power broadcast transmitter, https://cdn.rohde-schwarz.com/pws/dl_downloads/dl_common_library/dl_brochures_and_datasheets/pdf_1/THU9_Efficiency_bro_en_3606-8520-62_v0100.pdf (retrieved 2026-08-09) | Category architecture evidence for RF power devices, amplifier boards, combiners/filters, adaptive power supplies, heat sinks, liquid cooling, and configuration-dependent efficiency; no model-specific numeric range is generalized |
| `broadcast-electronics-am-series-2025` | handbook | Broadcast Electronics, AM Transmitter Series brochure, https://www.bdcast.com/wp-content/uploads/2025/11/AM-Brochure-11-06-25-Ver-1.pdf (retrieved 2026-08-09) | Independent category architecture evidence for modular RF amplifiers, regulated and redundant power supplies, air cooling, control, multiple power levels, service modules, and duty/load declaration; no model-specific numeric range is generalized |
