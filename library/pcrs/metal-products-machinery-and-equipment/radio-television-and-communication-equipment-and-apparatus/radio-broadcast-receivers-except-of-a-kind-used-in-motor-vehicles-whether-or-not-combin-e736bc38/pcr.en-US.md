---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-except-of-a-kind-used-in-motor-vehicles-whether-or-not-combin-e736bc38
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Radio broadcast receivers (except of a kind used in motor vehicles), whether or not combined with sound recording or reproducing apparatus or a clock

## 1. Scope and Applicability

This PCR covers new finished radio broadcast receivers for household, emergency, tabletop, or portable use. A covered receiver may combine broadcast reception with a loudspeaker, display, clock, or sound recording and reproducing apparatus. The declared product configuration shall identify every reception band or frequency range, analogue modulation or digital broadcast system, portable or tabletop form, power source, battery, loudspeaker, display, clock, and recording or playback function that is present.

The PCR does not cover receivers designed for installation or use in motor vehicles, television receivers, radio transmitters, telecommunications receivers, parts sold without a finished receiver, or pure audio players that cannot receive radio broadcasts. A multifunction product is covered only when radio broadcast reception is a marketed and testable function and television reception is absent.

The core foreground boundary is cradle-to-factory-gate production of one kilogram of finished receivers. Cradle-to-grave studies shall add the conditional use-phase and end-of-life processes and shall declare service life, playback and standby schedules, regional electricity, battery replacements, and treatment scenarios. No category-wide numerical default is supplied; measured foreground records and explicitly documented product scenarios are required.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-except-of-a-kind-used-in-motor-vehicles-whether-or-not-combin-e736bc38 |
| classification_refs | CPC 3.0: 47311, exact |
| covered_products | Household, emergency, tabletop, and portable radio broadcast receivers, whether or not combined with a loudspeaker, display, clock, or sound recording or reproducing apparatus |
| excluded_products | Motor-vehicle radio receivers; television receivers; radio transmitters; telecommunications receivers; receiver parts; pure audio players without radio reception |
| representative_product | A new finished radio receiver with its actual tuner, antenna, enclosure, PCB assembly, power system, loudspeaker and optional display, clock, recording, or playback functions declared |
| production_route | Electronic assembly, final product assembly, functional and power-mode testing, and packaging; use and end-of-life are conditional extensions |
| market_state | New finished receiver at the factory gate, represented by the production-weighted output of the declared site and period |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A new finished non-vehicle radio broadcast receiver in the declared product configuration |
| How much | 1 kg net mass of finished receivers, excluding transport and sales packaging |
| How well | Meets the declared bands, modulation or digital broadcast systems, form factor, power topology, reception and audio functions, and applicable product acceptance criteria |
| How long or cycle | One declared production lot or reporting-period production mix; downstream use studies additionally declare product service life and operating schedules |
| reference_flow_link | The reference output of `final_assembly`, with net product mass reconciled to the component bill of materials and measured production output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Radio broadcast receivers (except of a kind used in motor vehicles), whether or not combined with sound recording or reproducing apparatus or a clock `d85eef63-dec7-4d95-a2b5-546e6cb92224` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | reception band(s) and frequency range(s); analogue modulation(s) and digital broadcast system(s); portable, tabletop, or emergency form; internal battery, external power supply, mains, hand-crank, or solar power topology as applicable; battery chemistry, rated capacity, removability, and replacement arrangement; built-in loudspeaker and external audio output; display and clock; sound recording or reproducing functions and media; tuner and antenna configuration; net product mass; manufacturing geography and reference year; playback test state including signal, volume or audio output, display, clock, and power source; standby, off, networked-standby, and automatic power-down states; declared service-life and use scenario when applicable |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Finished receiver reference flow | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all factory-gate inventory to 1 kg measured net finished-product mass; exclude packaging mass and separately report packaging. |
| `component_mass` | PCB or PCBA, enclosure, loudspeaker, display, clock or recording module, battery, power supply, cables, fasteners, and other components | Mass | kg/kg finished receiver | Record measured or supplier-declared masses by material or component and reconcile them with net output mass and manufacturing scrap. |
| `factory_energy` | Manufacturing, assembly, testing, and packing energy | Energy | kWh/kg finished receiver | Meter electricity and other energy for the declared reporting period and normalize after allocation to accepted finished-product mass. |
| `power_modes` | Playback or active, standby, off, and networked-standby modes | Power | W | Measure each applicable, precisely declared operating mode at the receiver power interface using IEC 62087-6 for active audio operation and IEC 62301 for standby and other non-active modes; record the test configuration. |
| `use_energy` | Declared use-phase scenario | Energy | kWh/kg finished receiver over the declared service life | Calculate from measured mode powers and declared hours in each mode; avoid double counting externally supplied charging or battery energy. |
| `packaging_mass` | Primary, secondary, and tertiary packaging attributed to the product | Mass | kg/kg finished receiver | Record packaging material masses separately from net receiver mass and normalize to shipped finished-product mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_core_production` | Cradle-to-factory-gate dataset | Include upstream production of purchased materials and components through available supplier datasets, inbound transport when within the declared study scope, electronics assembly, final assembly, functional and power-mode testing, packing, factory energy and utilities, direct emissions, scrap, rework, and waste treatment attributable to the receiver. | `eu-recommendation-2021-2279`; `iec-82474-1-2025` |
| `boundary_product_configuration` | All datasets | Represent the actual PCB or PCBA, enclosure, tuner and antenna, loudspeaker, display, clock or recording module, battery, external power supply, cables, fasteners, accessories, and packaging supplied with the declared product; mark absent optional elements as not applicable. | `iec-82474-1-2025` |
| `boundary_use_extension` | Cradle-to-grave dataset | Include playback or active, standby, off, networked-standby, charging and replacement-battery energy only for modes and power sources actually present, using a declared service-life and regional scenario. | `iec-62087-6-2015`; `iec-62301-2026`; `eu-regulation-2023-826`; `eu-recommendation-2021-2279` |
| `boundary_end_of_life_extension` | Cradle-to-grave dataset | Include collection, preparation for reuse, battery removal where applicable, dismantling, recycling, recovery, and disposal using a declared regional scenario; keep receiver, battery, and packaging routes distinguishable. | `eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279` |
| `boundary_exclusions` | Product identity and model | Exclude motor-vehicle receivers, television receivers, radio transmitters, telecommunications receivers, parts-only products, and pure audio players without broadcast reception; disclose any omitted capital equipment, employee travel, or other cut-off. | `eu-recommendation-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased components and materials enter the foreground at the receiving gate with supplier identity, origin, mass, and available upstream dataset recorded; self-manufactured parts remain inside the foreground boundary |
| starting_condition_role | Prevents component manufacturing performed by the reporting organization from being hidden as a purchased input and establishes where upstream datasets connect |
| product_classification_scope | Finished products meeting CPC 3.0 code 47311 and the covered-product definition in section 2 |
| recursive_input_rule | A finished receiver of the same category used as an input is recorded as a separately identified purchased or reused product with origin, condition, mass, and upstream dataset; it is not recursively expanded within the same foreground process map |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise use geographically and technologically representative datasets and disclose provider, geography, reference year, and substitution |
| disclosure | Declare organizational and physical boundary, reporting period, facilities, outsourced steps, component origin, transport inclusion, cut-offs, use and end-of-life extensions, and every dataset substitution |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `electronics_assembly` | Electronics assembly | required | Include supplier PCBA as an input when board assembly is outsourced; otherwise include on-site PCB population and soldering | core production | Accepted electronics assemblies delivered to final assembly |
| `final_assembly` | Final receiver assembly | required | Always | core production | 1 kg net accepted finished receiver |
| `functional_test` | Functional and power-mode testing | required | Always; declare which power modes are physically available | quality and measurement | Tested finished receivers and measured mode-power records |
| `packaging` | Product packaging | required | Always; report no packaging only with evidence that none is supplied | supporting production | Packaged receivers shipped |
| `use_phase_operation` | Receiver use-phase operation | conditional | Required for cradle-to-grave studies | lifecycle extension | Declared radio reception service over product life |
| `end_of_life` | Receiver end-of-life treatment | conditional | Required for cradle-to-grave studies | lifecycle extension | 1 kg discarded receiver plus separately modelled packaging and replacement batteries |

### Process: Electronics assembly (`electronics_assembly`)

#### Inputs

##### Product flows

###### Printed circuit boards, components, and electronic subassemblies (`electronics_components_input`)

Record the actual purchased bare boards, populated boards, tuner, antenna, semiconductors, passive components, connectors, wiring, solder, and other electronic materials crossing the site boundary.

- Selected flow: Select supplier- and technology-specific product flows for each purchased component or material
- Flow property / unit: Mass / kg
- Amount rule: Measured receipts or supplier bill-of-material masses allocated to accepted electronics assemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted electronics assembly delivered to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `iec-82474-1-2025`

###### Electronics assembly energy and consumables (`electronics_energy_input`)

Record metered electricity and material consumables for on-site board population, soldering, cleaning, inspection, and rework. If assembly is outsourced, record the supplier dataset instead of duplicating its energy.

- Selected flow: Select site- and market-specific electricity, fuel, and consumable product flows
- Flow property / unit: Energy / kWh; Mass / kg as applicable
- Amount rule: Metered or invoice-reconciled reporting-period use allocated to accepted electronics assemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted electronics assembly delivered to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_energy`
- Sources: `eu-recommendation-2021-2279`

##### Waste flows

###### Electronics scrap and rejected assemblies (`electronics_scrap_output`)

Record rejected boards, component scrap, solder residues, cleaning residues, and their documented treatment destinations without netting them from purchased inputs.

- Selected flow: Select treatment-specific waste flows by material and hazard class
- Flow property / unit: Mass / kg
- Amount rule: Weighed or waste-transfer-record quantity attributable to electronics assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted electronics assembly delivered to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_and_emissions`
- Sources: `eu-recommendation-2021-2279`

##### Elementary flows

###### Direct electronics-assembly emissions (`electronics_direct_emissions`)

Record measured or permitted emissions from soldering, cleaning, and other on-site electronics operations when they cross the environmental boundary.

- Selected flow: Select substance- and compartment-specific elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Measured release, mass balance, or documented emission-factor calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted electronics assembly delivered to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_scrap_and_emissions`
- Sources: `eu-recommendation-2021-2279`

#### Outputs

##### Product flows

###### Populated receiver electronics (`electronics_assembly_output`)

Record the accepted electronics assembly transferred to final product assembly.

- Selected flow: Select a product-specific intermediate electronics assembly flow
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reporting-period accepted output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `iec-82474-1-2025`

##### Waste flows

##### Elementary flows

### Process: Final receiver assembly (`final_assembly`)

#### Inputs

##### Product flows

###### Receiver components and subassemblies (`receiver_components_input`)

Record populated electronics, enclosure parts, loudspeaker, display, clock or recording module, battery, external power supply, cables, fasteners, and accessories in the actual product configuration. Optional elements that are absent shall be marked not applicable rather than assigned zero by assumption.

- Selected flow: Select supplier- and product-specific flows for each component and subassembly
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared bill-of-material mass issued to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished receiver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `iec-82474-1-2025`

###### Final assembly energy and consumables (`final_assembly_energy_input`)

Record metered electricity, compressed air, fuels, adhesives, cleaners, and other consumables used for mechanical assembly and finishing.

- Selected flow: Select site- and market-specific utility and consumable product flows
- Flow property / unit: Energy / kWh; Mass / kg as applicable
- Amount rule: Metered or invoice-reconciled reporting-period use allocated to accepted receiver output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished receiver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_energy`
- Sources: `eu-recommendation-2021-2279`

##### Waste flows

###### Assembly scrap and rejected receivers (`assembly_scrap_output`)

Record enclosure, cable, fastener, adhesive, battery, and mixed-product scrap plus rejected receivers by destination.

- Selected flow: Select treatment-specific waste flows by material and hazard class
- Flow property / unit: Mass / kg
- Amount rule: Weighed or waste-transfer-record quantity attributable to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished receiver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_and_emissions`
- Sources: `eu-recommendation-2021-2279`

##### Elementary flows

###### Direct final-assembly emissions (`assembly_direct_emissions`)

Record on-site emissions from adhesives, cleaning, finishing, and fuel use when they cross the environmental boundary.

- Selected flow: Select substance- and compartment-specific elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Measured release, mass balance, or documented emission-factor calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished receiver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_scrap_and_emissions`
- Sources: `eu-recommendation-2021-2279`

#### Outputs

##### Product flows

###### Finished radio broadcast receiver (`finished_receiver_output`)

Record net accepted receiver mass before packaging. The flow identity is the Tiangong Product flow verified for CPC 47311.

- Selected flow: Radio broadcast receivers (except of a kind used in motor vehicles), whether or not combined with sound recording or reproducing apparatus or a clock `d85eef63-dec7-4d95-a2b5-546e6cb92224`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net accepted finished-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net accepted finished receiver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Functional and power-mode testing (`functional_test`)

#### Inputs

##### Product flows

###### Receiver under test and test energy (`test_input`)

Record receivers entering test and electricity or battery energy consumed by reception, audio, display, clock, recording, standby, off, and charging tests. State the signal source, band, modulation, audio output or volume, display state, power source, stabilization, and duration.

- Selected flow: Finished receiver flow and site-specific electricity or battery-energy flow
- Flow property / unit: Mass / kg; Energy / kWh
- Amount rule: Tested receiver mass and metered test energy attributable to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished receiver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power_mode_test`
- Sources: `iec-62087-6-2015`; `iec-62301-2026`

##### Waste flows

###### Test failures and replaced parts (`test_failure_output`)

Record receivers or parts rejected during test and distinguish rework returns from waste sent to treatment.

- Selected flow: Select product- or treatment-specific waste flows
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected mass minus documented rework returned to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished receiver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_and_emissions`
- Sources: `eu-recommendation-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

###### Tested receiver and power-mode record (`tested_receiver_output`)

Record accepted receiver mass and the measured playback or active, standby, off, and networked-standby powers for modes physically available on the declared configuration.

- Selected flow: Finished receiver flow plus product-specific test record
- Flow property / unit: Mass / kg; Power / W
- Amount rule: Accepted tested mass and arithmetic mean of valid stabilized measurements, with individual readings retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: declared receiver configuration and test state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power_mode_test`
- Sources: `iec-62087-6-2015`; `iec-62301-2026`; `eu-regulation-2023-826`

##### Waste flows

##### Elementary flows

### Process: Product packaging (`packaging`)

#### Inputs

##### Product flows

###### Packaging materials (`packaging_materials_input`)

Record primary, secondary, and allocated tertiary packaging by material, including printed manuals, protective inserts, bags, cartons, pallets, and supplied accessories packaging.

- Selected flow: Select material- and supplier-specific packaging product flows
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging bill-of-material mass allocated to shipped receiver output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished receiver shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `eu-recommendation-2021-2279`

###### Packing energy and consumables (`packing_energy_input`)

Record metered packing-line energy and consumables not already included in packaging product flows.

- Selected flow: Select site- and market-specific energy and consumable product flows
- Flow property / unit: Energy / kWh; Mass / kg as applicable
- Amount rule: Reporting-period use allocated to shipped receivers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished receiver shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_energy`
- Sources: `eu-recommendation-2021-2279`

##### Waste flows

###### Packaging-line waste (`packaging_waste_output`)

Record offcuts, damaged packaging, and rejected printed materials by treatment destination.

- Selected flow: Select treatment-specific packaging waste flows
- Flow property / unit: Mass / kg
- Amount rule: Weighed packaging-line waste allocated to shipped receivers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished receiver shipped
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_and_emissions`
- Sources: `eu-recommendation-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged receiver (`packaged_receiver_output`)

Record shipped receiver units, net product mass, and packaging mass as distinct quantities.

- Selected flow: Product-specific packaged receiver shipment record
- Flow property / unit: Mass / kg
- Amount rule: Net receiver mass plus separately identified packaging mass, without changing the 1 kg net-product reference amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: shipped reporting-period output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Sources: `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

### Process: Receiver use-phase operation (`use_phase_operation`)

#### Inputs

##### Product flows

###### Operating electricity and replacement batteries (`use_energy_input`)

For cradle-to-grave studies, record electricity, primary batteries, rechargeable battery losses, and replacement batteries for the declared service life. Apply only power sources and modes present in the product.

- Selected flow: Select regional electricity and chemistry-specific battery product flows
- Flow property / unit: Energy / kWh; Mass / kg as applicable
- Amount rule: Calculated from measured mode powers, declared hours and charging efficiency, plus documented battery replacements
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg receiver over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_scenario`
- Sources: `iec-62087-6-2015`; `iec-62301-2026`; `eu-regulation-2023-826`; `eu-recommendation-2021-2279`

##### Waste flows

###### Spent replacement batteries (`spent_battery_output`)

Record spent batteries removed during use by chemistry and regional collection or treatment route.

- Selected flow: Select chemistry- and treatment-specific waste battery flows
- Flow property / unit: Mass / kg
- Amount rule: Declared battery mass multiplied by documented replacement count, excluding the original battery counted at receiver end-of-life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg receiver over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_scenario`
- Sources: `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

###### Declared radio reception service (`radio_service_output`)

Record the declared service delivered over the assumed life, preserving the hours by playback, standby, off, and other applicable modes.

- Selected flow: Product-specific radio reception service record
- Flow property / unit: Time / h
- Amount rule: Sum of declared hours by mutually exclusive mode over the declared service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg receiver over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_scenario`
- Sources: `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

### Process: Receiver end-of-life treatment (`end_of_life`)

#### Inputs

##### Product flows

###### Discarded receiver, battery, and packaging (`end_of_life_input`)

For cradle-to-grave studies, record separately the discarded receiver, installed battery, replacement batteries not already counted, and packaging fractions entering regional collection and treatment.

- Selected flow: Select product-, material-, battery-chemistry-, and region-specific end-of-life input flows
- Flow property / unit: Mass / kg
- Amount rule: Scenario share multiplied by discarded mass, with shares summing to the declared discarded mass for each stream
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg receiver over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered material and reusable fractions (`recovered_material_output`)

Record recovered materials or reusable components only where the selected treatment dataset provides documented outputs; apply the declared allocation or substitution rule.

- Selected flow: Select treatment-specific recovered product flows
- Flow property / unit: Mass / kg
- Amount rule: Treatment-output quantity from the documented regional scenario
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg discarded receiver or separately declared stream
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-directive-2012-19-weee`; `eu-recommendation-2021-2279`

##### Waste flows

###### Residual treatment wastes (`residual_waste_output`)

Record residual electronics, plastics, glass, metals, batteries, and disposal residues by treatment route.

- Selected flow: Select material- and treatment-specific waste flows
- Flow property / unit: Mass / kg
- Amount rule: Treatment-output quantity from the documented regional scenario
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg discarded receiver or separately declared stream
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared production, utilities, testing, rework, and waste treatment | Prefer direct metering and subdivision by product family, line, batch, or test station so allocation is avoided. | `eu-recommendation-2021-2279` |
| `allocation_physical` | Unavoidable shared inputs and outputs | Allocate by a documented causal physical driver such as machine time, test duration, direct energy, accepted unit count, or mass; justify why the driver reflects resource use. | `eu-recommendation-2021-2279` |
| `allocation_economic_fallback` | Shared operation without a defensible physical driver | Use economic allocation only as a disclosed fallback, state prices and reference period, and report sensitivity for materially affected results. | `eu-recommendation-2021-2279` |
| `allocation_rework_scrap` | Rework, rejects, and recyclable manufacturing scrap | Attribute rework and rejection burdens to the production that generated them; report scrap mass and treatment separately and do not subtract revenue or recovered mass from input quantities. | `eu-recommendation-2021-2279` |
| `allocation_end_of_life` | Reuse, recycling, recovery, and disposal | State the selected end-of-life allocation or substitution approach, keep burdens and credits consistent across material streams, and prevent double counting between the product system and recovered-material users. | `eu-recommendation-2021-2279`; `eu-directive-2012-19-weee` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_configuration` | `final_assembly` | product identity and required qualifiers | product master and technical record | model or family; CPC code; bands and frequency ranges; modulation and digital systems; form; power sources; battery; speaker; display; clock; recording or playback; tuner; antenna; net mass | Controlled extraction from approved product specification and configuration bill | text; kg | Each model or configuration change | Current production declaration | Each represented model and site | Preserve configuration-specific fields; production-weight only models explicitly combined | Approved specification; configuration bill; responsible-person sign-off |
| `cp_component_bom_mass` | `electronics_assembly`; `final_assembly` | components and material composition | bill of materials and supplier declaration | part number; component role; material; supplier; mass; quantity; recycled content if claimed; battery chemistry and capacity | Reconcile engineering BOM, measured sample masses, purchase records, and supplier declarations | kg | Each BOM revision; reconcile per reporting period | Same period as production or documented current BOM | Each represented site and product configuration | Multiply verified unit masses by accepted production; keep PCB, enclosure, packaging, battery, power supply, loudspeaker, display, and optional modules distinct | Approved BOM; scale records; supplier material declaration |
| `cp_factory_energy` | `electronics_assembly`; `final_assembly`; `packaging` | energy and utilities | meter, invoice, and production log | meter identifier; start and end readings; fuel or utility type; dates; line hours; accepted output; allocation driver | Prefer submetering; reconcile submeters to site invoices and production records | kWh; MJ; kg as applicable | Monthly or each production campaign | Representative continuous period, normally at least one production campaign | Each represented facility and outsourced step | Sum valid readings, subtract documented non-product loads, then allocate under section 7 | Calibration record; invoices; meter logs; production reconciliation |
| `cp_scrap_and_emissions` | `electronics_assembly`; `final_assembly`; `functional_test`; `packaging` | scrap, waste, rework, and direct emissions | weigh ticket, waste transfer record, rework log, monitoring record | material or substance; hazard class; mass; compartment; destination; rework return; date | Weigh streams where practicable; use documented mass balance or permitted factor when direct measurement is unavailable | kg | Each shipment or reporting interval | Same period as production | Each represented facility | Sum by material, hazard class, environmental compartment, and destination; keep rework separate | Weigh tickets; transfer notes; monitoring and calculation worksheets |
| `cp_output_mass` | `electronics_assembly`; `final_assembly` | accepted output | production and mass record | units accepted; sampled unit mass; rejected units; net output mass; model mix | Calibrated scale measurements reconciled to production counts | kg | Each lot or statistically justified sampling plan | Same period as production | Each represented line and product configuration | Accepted count multiplied by verified unit mass, or direct bulk mass; retain model-specific values before production weighting | Scale calibration; sampling plan; production release record |
| `cp_power_mode_test` | `functional_test` | playback, standby, off, networked standby, and auto power-down | laboratory or production test record | model; power source; band; modulation; signal; audio output or volume; loudspeaker; display; clock; recording state; battery or charge state; stabilization; mode; W; duration; ambient conditions | Measure active audio modes following IEC 62087-6 and non-active modes following IEC 62301 at the declared power interface | W | Each represented model and firmware or hardware change affecting power | Current marketed configuration | Each represented configuration and applicable supply voltage | Retain readings by mode; calculate a mean only across valid replicate measurements under the same declared state | Test method; calibrated power meter record; raw time series; configuration photograph or log |
| `cp_packaging_bom` | `packaging` | packaging materials | packaging specification and shipment record | material; layer or role; unit mass; units per receiver; reusable cycles if claimed; shipped units | Weigh packaging components and reconcile to purchase and shipment records | kg | Each packaging revision; reconcile per reporting period | Same period as shipment | Each represented product configuration | Sum material masses per shipped receiver and report primary, secondary, and allocated tertiary packaging separately | Packaging specification; scale record; purchase and shipment reconciliation |
| `cp_use_scenario` | `use_phase_operation` | lifetime energy and battery replacement | scenario and measured power record | service life; hours by mutually exclusive mode; measured W by mode; grid region; charge efficiency; battery chemistry; capacity; replacement count | Combine product-specific power tests with a documented geographically relevant use scenario | h; W; kWh; kg | Each study and material design or market change | Declared scenario reference year and service life | Declared market geography | Calculate by section 8 formulas; scenario-weight only documented user segments | Scenario source; power test record; calculation workbook; sensitivity cases |
| `cp_end_of_life_scenario` | `end_of_life` | treatment routes and outputs | regional scenario and treatment dataset | collection share; reuse; recycling; recovery; disposal; battery removal; material outputs; residual wastes; geography; year | Map receiver, battery, and packaging masses to documented regional treatment routes | kg; fraction | Each study and regulatory or treatment change | Declared scenario reference year | Declared market geography | Route shares sum to one for each stream; preserve treatment outputs and residuals | Official statistics or treatment records; selected dataset metadata; mass-balance worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_bom_normalization` | PCB or PCBA, enclosure, loudspeaker, display, clock or recording module, battery, power supply, accessories, and packaging | Sum verified unit mass multiplied by accepted unit count, then divide by net accepted receiver mass; report packaging separately. | unit mass; quantity; accepted units; net output mass | kg component or packaging per kg finished receiver | `iec-82474-1-2025`; `eu-recommendation-2021-2279` |
| `calc_factory_energy` | Factory electricity, fuel, and utilities | Subtract documented unrelated loads from reconciled reporting-period use, apply the section 7 allocation driver, and divide by net accepted receiver mass. | meter or invoice use; excluded loads; allocation driver; output mass | kWh, MJ, or kg per kg finished receiver | `eu-recommendation-2021-2279` |
| `calc_mass_balance` | Electronics assembly, final assembly, and packaging | Compare material and component inputs with accepted outputs, separately reported scrap, waste, stored work-in-progress, and measured emissions; investigate rather than force-close material differences. | input masses; output mass; scrap; waste; stock change; emissions | disclosed process mass-balance difference and reconciliation status | `eu-recommendation-2021-2279` |
| `calc_mode_energy` | Use-phase electricity | For mutually exclusive modes, lifetime electricity at the measured interface equals the sum of mode power in W multiplied by declared lifetime hours, divided by 1000; divide by net receiver mass for the PCR reference basis. Treat charging losses consistently and do not also count energy embedded in disposable batteries as grid electricity. | measured W by mode; hours by mode; service life; charge efficiency where applicable; net product mass | kWh per kg receiver over declared service life | `iec-62087-6-2015`; `iec-62301-2026`; `eu-recommendation-2021-2279` |
| `calc_battery_replacements` | Use-phase batteries | Multiply battery mass and upstream dataset by documented batteries installed initially and replaced during life; count the original battery once in production and once as waste at end-of-life, and count each replacement once as an input and spent-battery output. | chemistry; battery mass; original battery; replacement count; service life | kg battery input and waste per kg receiver over declared life | `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279` |
| `calc_production_mix` | Multiple models represented by one dataset | Calculate each model-specific inventory first, then weight by accepted net receiver mass produced during the reporting period; do not average configurations with materially different bands, power topology, or integrated functions without disclosure. | model inventory; accepted mass by model; configuration qualifiers | production-weighted inventory per kg receiver | `eu-recommendation-2021-2279` |
| `calc_end_of_life` | Receiver, battery, and packaging treatment | Multiply each separately declared discarded mass by route shares that sum to one, then apply the selected treatment datasets and the section 7 end-of-life allocation approach. | masses; collection and treatment shares; treatment datasets | treatment inputs, recovered outputs, residual wastes, burdens, and disclosed credits per kg receiver | `eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technological` | Product and process representation | Match the declared bands, modulation or digital systems, form, PCB and tuner design, enclosure, power topology, battery, loudspeaker, display, clock, recording or playback functions, and manufacturing route. | Product specification; BOM revision; process map; supplier dataset metadata |
| `dq_geographical` | Electricity, materials, suppliers, use, and end-of-life | Represent the actual manufacturing and market geographies or disclose every geographic proxy and its likely effect. | Site location; supplier origin; electricity market; scenario and dataset geography |
| `dq_temporal` | Foreground records and background datasets | Use a production period representative of current manufacture and record source years; assess changes in design, firmware, supply chain, electricity, use, and treatment. | Reporting dates; BOM and firmware revision; dataset vintages; update review |
| `dq_precision` | Mass, energy, power, scrap, and output measurements | Retain raw readings, calibration status, sampling and replicate counts, aggregation equations, and unexplained variation; do not replace missing measurements with an undisclosed zero. | Raw records; calibration certificates; sampling plan; calculation workbook |
| `dq_completeness` | Entire foreground data package | Cover PCB or PCBA, enclosure, packaging, and all present battery, external power supply, loudspeaker, display, clock, recording and playback elements, plus standby and playback power; state not applicable with evidence for absent elements. | Completeness checklist; signed configuration record; inventory-to-BOM reconciliation |
| `dq_consistency` | Bilingual and machine projection | Keep stable identifiers, Tiangong UUIDs, units, process and row IDs, rules, protocols, and source IDs aligned between languages and regenerate the structured projection after canonical changes. | Builder lint; structured projection fingerprint; bilingual identifier check |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | Product identity | Fail if radio broadcast reception is not a marketed and testable function, CPC 47311 is not applicable, or the product is a motor-vehicle receiver, television receiver, transmitter, telecommunications receiver, part-only item, or pure audio player. |  |
| `validate_reference_flow` | Reference flow | Fail unless the reference amount is 1 kg net finished receiver mass using Product flow `d85eef63-dec7-4d95-a2b5-546e6cb92224`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |  |
| `validate_configuration` | Required qualifiers | Fail when bands or frequency ranges, modulation or digital systems, form, power topology, loudspeaker, display, clock, recording or playback functions, net mass, manufacturing geography, and reference year are missing; battery, external power supply, and optional modules must be declared present, absent, or not applicable. | `iec-82474-1-2025` |
| `validate_inventory_completeness` | Production inventory | Fail if PCB or PCBA, enclosure, packaging, factory energy, accepted output, scrap or waste, and direct emissions screening are absent; require actual configuration rows for battery, power supply, loudspeaker, display, clock, and recording or playback modules. | `iec-82474-1-2025`; `eu-recommendation-2021-2279` |
| `validate_power_modes` | Power testing | Fail if playback or active power and every physically available standby, off, or networked-standby mode lack measured W values and declared test states; do not treat absent modes as measured zero. | `iec-62087-6-2015`; `iec-62301-2026` |
| `validate_eu_power_claim` | EU regulatory conformity claim | When the dataset makes an EU Regulation 2023/826 conformity claim, validate the applicable product scope, dates, mode definitions, limits, information requirements, and amendments against the regulation version in force for the placed-on-market date; otherwise report this check as not applicable. | `eu-regulation-2023-826` |
| `validate_mass_balance` | Production processes | Fail when input, output, scrap, waste, stock-change, and emission records cannot be reconciled within a site-defined and disclosed measurement uncertainty; a numerical tolerance shall not be invented by this PCR. | `eu-recommendation-2021-2279` |
| `validate_use_extension` | Cradle-to-grave dataset | Fail unless service life, mutually exclusive hours by mode, product-specific measured powers, regional electricity, battery replacement assumptions, and sensitivity cases are declared; skip as not applicable for factory-gate-only datasets. | `iec-62087-6-2015`; `iec-62301-2026`; `eu-recommendation-2021-2279` |
| `validate_end_of_life_extension` | Cradle-to-grave dataset | Fail unless receiver, battery, and packaging routes are separate, route shares reconcile for each stream, regional treatment datasets are identified, and allocation or substitution is disclosed; skip as not applicable for factory-gate-only datasets. | `eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279` |
| `validate_data_quality` | All datasets | Fail if technological, geographical, temporal, precision, completeness, or consistency evidence is missing, or if a proxy, cut-off, allocation choice, or missing foreground measurement is undisclosed. | `eu-recommendation-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for production of new finished CPC 47311 radio broadcast receivers, with optional use and end-of-life extensions |
| downstream_use | Construction and review of Tiangong `process`, `lifecyclemodel`, and dataset projections for product carbon footprint, LCA, design comparison, procurement, and disclosure |
| allowed_use | Declared receiver configurations and production mixes that meet the scope, reference flow, foreground collection, quality, and validation rules |
| excluded_use | Motor-vehicle receivers; television receivers; transmitters; telecommunications receivers; receiver parts; pure audio players; configuration, geography, or time extrapolation without disclosed justification |
| required_metadata | Canonical PCR id and version; CPC 3.0 code 47311; product model or production mix; all required qualifiers; facility and geography; reference year and reporting period; organizational and physical boundary; allocation; cut-offs; background datasets; test methods; use and end-of-life scenarios when included |
| required_quality_disclosure | Source and quality of BOM, mass, energy, power, scrap, emissions, output, packaging, use, and treatment records; calibration and sampling; data gaps; proxies; uncertainty; allocation sensitivity; structured projection fingerprint and validation result |
| update_trigger | Change in tuner or broadcast system, PCB or electronic architecture, enclosure or material composition, power topology or battery, integrated functions, firmware affecting power, production route, facility, supplier, packaging, use pattern, regulation, or end-of-life treatment that can materially change the inventory or scope |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-62087-6-2015` | standard | IEC 62087-6:2015, Audio, video, and related equipment — Determination of power consumption — Part 6: Audio equipment, https://webstore.iec.ch/en/publication/22586, accessed 2026-08-09 | Active or playback audio power measurement and test-state disclosure |
| `iec-62301-2026` | standard | IEC 62301:2026, Household electrical appliances — Measurement of standby power, https://webstore.iec.ch/en/publication/90194, accessed 2026-08-09 | Standby, off, and other non-active mode measurement at AC, DC, external-supply, or battery interfaces |
| `eu-regulation-2023-826` | official_guidance | Commission Regulation (EU) 2023/826 on ecodesign requirements for off mode, standby mode, and networked standby energy consumption, https://eur-lex.europa.eu/eli/reg/2023/826/oj/eng, accessed 2026-08-09 | Radio-set scope, mode declarations, information requirements, and conditional EU conformity validation |
| `iec-82474-1-2025` | standard | IEC 82474-1:2025, Material declaration — Part 1: General requirements, https://webstore.iec.ch/en/publication/67763, accessed 2026-08-09 | Component and material declarations, supplier evidence, and BOM completeness |
| `eu-recommendation-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng, accessed 2026-08-09 | Functional unit, lifecycle boundary, packaging, electricity, allocation, calculation, and data quality |
| `eu-directive-2012-19-weee` | official_guidance | Directive 2012/19/EU on waste electrical and electronic equipment, https://eur-lex.europa.eu/eli/dir/2012/19/oj/eng, accessed 2026-08-09 | Conditional collection, recovery, recycling, and disposal modelling for radio sets |
| `eu-regulation-2023-1542-batteries` | official_guidance | Regulation (EU) 2023/1542 concerning batteries and waste batteries, https://eur-lex.europa.eu/eli/reg/2023/1542/oj/eng, accessed 2026-08-09 | Conditional battery identity, replacement, removal, collection, and end-of-life disclosures for applicable markets and dates |
