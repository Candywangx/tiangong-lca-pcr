---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-the-flow-level-pressure-or-other-va-beb9ec57
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Instruments and apparatus for measuring or checking the flow, level, pressure or other variables of liquids or gases

## 1. Scope and Applicability

This PCR applies to complete, marketable instruments and apparatus whose primary function is to measure or check flow, level, pressure, or another physical process variable of a liquid or gas. It covers contact and non-contact instruments, mechanical and electronic instruments, local indicators and transmitters, and instruments with integral display or communications. The declared product must be a complete instrument capable of its intended measurement or checking function after calibration and configuration.

The product configuration shall be classified by measured-variable class (`flow`, `level`, `pressure`, or `other_liquid_or_gas_variable`), contact mode (`contact` or `non_contact`), operating architecture (`mechanical` or `electronic`), process connection, enclosure protection rating, and intended medium. Electronic configurations shall additionally declare output or communication type and power-supply arrangement. IEC 62828-1 distinguishes pressure, level, and flow process measurement transmitters and analogue and digital transmitters; IEC 60529 provides the enclosure-protection classification used for the declared IP rating.

Excluded are gas, liquid, or electricity supply or production meters used for trade or utility settlement; automatic regulating or controlling instruments and apparatus; navigational, hydrological, or meteorological instruments; physical or chemical analysis instruments; and standalone sensing elements, transducers, housings, electronics modules, displays, communication modules, process connections, spare parts, or other components that cannot perform the complete measurement function by themselves.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-the-flow-level-pressure-or-other-va-beb9ec57 |
| classification_refs | CPC 3.0: 48252 (exact classification context) |
| covered_products | Complete industrial or professional instruments for measuring or checking liquid or gas flow, level, pressure, or another physical process variable; contact or non-contact; mechanical or electronic; local-indicating or transmitting configurations |
| excluded_products | Trade or utility supply meters; automatic controllers or regulators; navigational, hydrological, meteorological, or physical/chemical-analysis instruments; standalone sensors, transducers, parts, modules, and accessories |
| representative_product | A complete calibrated process instrument with sensing or measuring mechanism, process interface where applicable, housing, and all electronics, display or communication, and power-interface elements required by its sold configuration |
| production_route | Supplier component production and inbound supply; conditional in-house mechanical or sensing-component manufacture; conditional electronics assembly; instrument assembly and sealing; configuration, calibration and functional testing; packaging |
| market_state | Finished, calibrated, saleable instrument at the manufacturing gate, excluding external distribution packaging from reference-product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete calibrated instrument or apparatus for measuring or checking a declared liquid or gas process variable |
| How much | 1 kg net mass of finished instrument, excluding external distribution packaging |
| How well | Saleable configuration that has passed specified calibration, functional, leak or pressure-integrity where applicable, and enclosure or sealing checks; not a standalone sensing element or component |
| How long or cycle | One completed manufacturing and factory acceptance cycle; service life is not embedded in the cradle-to-gate reference amount and shall be declared separately for downstream use modelling |
| reference_flow_link | The reference output of `packaging_and_release`, normalized from measured net finished-product mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished instrument |
| Reference product flow | Instruments and apparatus for measuring or checking the flow, level, pressure or other variables of liquids or gases, except navigational, hydrological or meteorological instruments and appliances, gas or liquid supply meters and automatic regulating or controlling instruments and apparatus `7af33061-607c-44d5-bafb-cb4efe98f0ec` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | measured-variable class; contact or non-contact mode; mechanical or electronic architecture; measurement principle and range; intended liquid or gas medium; wetted or sensing-element materials; housing material; process-connection type, size and material; enclosure protection rating and test basis; electronics present or absent; display and communication configuration; power-supply arrangement and rated power or current; calibration method, standard, accuracy class and acceptance status; manufacturing site and geography; net product mass; packaging mass |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. A missing qualifier makes the concrete reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground amounts to 1 kg measured net mass of released finished instrument; exclude external distribution packaging from reference-product mass and report packaging separately. |
| `component_mass_reconciliation` | Product bill of materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile sensing or measuring mechanism, wetted or process-connection parts, housing, electronics, display or communication, power-interface parts, seals, fasteners, and other retained materials to measured net product mass; document moisture, fill-fluid, coating, adhesive, and rounding treatment. |
| `configuration_weighting` | Product-family or production-mix dataset | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weight configuration-specific inventories by verified production mass, not sales value or an unweighted model average; retain each configuration's measured-variable, contact-mode, architecture, connection, protection, electronics, communication, power, and calibration attributes. |
| `item_to_mass_conversion` | Records available only per instrument item | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item-based component, energy, test-media, waste, and packaging records using measured net mass and released item count for the same model, lot, site, and reporting period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, components, subassemblies, auxiliary materials, and packaging are received at the reporting manufacturing site with supplier identity, origin, mass, and upstream dataset reference declared. |
| starting_condition_role | Cradle-to-gate foreground starting condition for instrument manufacture and release |
| product_classification_scope | Complete CPC 48252 instruments only; utility or trade settlement meters, automatic controllers, excluded instrument classes, and standalone sensing elements or other parts remain outside the reference product. |
| recursive_input_rule | A purchased complete instrument in the same category used inside a system shall be recorded once as an upstream product input with its mass, supplier, configuration and function; do not recursively reopen its manufacture inside the same foreground package. |
| upstream_dataset_requirement | Use supplier-specific upstream datasets for sensing elements, process-contact hardware, housings, printed-circuit assemblies, displays, communication modules, power components and major materials when available; otherwise document the selected background proxy and the mass and technology it represents. |
| disclosure | Declare site, reporting period, production mix, measured-variable/contact/architecture split, process connections and protection ratings, complete component-group mass balance, electronics/display/communication/power configuration, calibration and test basis, inbound transport, manufacturing energy and auxiliaries, wastes, net output, and packaging. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_complete_instrument` | product_scope | Include only a complete calibrated instrument as reference output; standalone sensing elements, transducers, parts and modules may enter as component inputs but shall not be reported as the reference product. | `iec-62828-1-2026`; `abb-pgs300-epd-2024` |
| `system_boundary_cradle_to_gate` | foreground_system_boundary | Include upstream material and component supply, inbound transport, in-house component and electronics operations when performed, final assembly and sealing, factory calibration and functional testing, packaging operations, manufacturing energy and auxiliaries, process wastes and released product. | `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023` |
| `system_boundary_configuration` | configuration_coverage | Keep separate or explicitly weighted inventories when measured-variable class, contact mode, mechanical/electronic architecture, process connection, enclosure protection, electronics, display/communication, power supply, calibration route or material composition changes. | `iec-62828-1-2026`; `iec-60529-2013`; `abb-pgs300-epd-2024` |
| `system_boundary_downstream` | downstream_scenarios | Distribution, installation, operational energy, field recalibration or maintenance, service-life replacement, de-installation and end-of-life are outside the cradle-to-gate reference dataset; model them as explicit downstream scenarios when required and do not mix them into factory-gate production. | `siemens-sitrans-lr250-epd-2023`; `eu-weee-2012-consolidated-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_supply_and_manufacture` | Component supply and conditional in-house manufacture | required | Always include component receipt and upstream supply; include in-house machining, forming, coating, sensing-element manufacture or other component operations only when performed by the reporting site. | Foreground and linked upstream production of sensing or measuring mechanism, process-contact parts, housing, electronics and other retained components | Measured accepted component mass per kg released instrument |
| `electronics_assembly` | Electronics, display, communication and power-interface assembly | conditional | Include for electronic instruments or any configuration containing printed-circuit assemblies, displays, communications or an integral power module. | Populate, join, clean, inspect and configure electronic subassemblies | Measured accepted electronic-subassembly mass per kg released instrument |
| `instrument_assembly` | Instrument assembly, joining and sealing | required | Always include complete product assembly; mechanical configurations explicitly record absence of electronics. | Combine sensing or measuring mechanism, process interface, housing and configuration-specific modules into a complete instrument | Measured assembled-instrument mass before calibration per kg released instrument |
| `calibration_and_testing` | Configuration, calibration and functional testing | required | Always include calibration and factory acceptance; include leak, pressure-integrity, ingress-protection or medium-specific tests when required by design or specification. | Establish metrological performance and saleable acceptance status | Measured accepted instrument mass and tested item count per kg released instrument |
| `packaging_and_release` | Packaging and factory-gate release | required | Always include packaging operations and record external packaging separately from net product mass. | Produce packaged saleable output and reference flow | 1 kg net released instrument |

### Process: Component supply and conditional in-house manufacture (`component_supply_and_manufacture`)

#### Inputs

##### Product flows

###### Sensing element or mechanical measuring mechanism (`sensing_mechanism_input`)

Record the complete sensing or mechanical measuring mechanism entering instrument assembly, including its operating principle, contact mode, wetted materials, fill fluid where present, supplier, part number, origin and accepted mass. A standalone sensing element is an input component, never the reference product.

- Selected flow: Foreground supplier-specific sensing element or mechanical measuring mechanism
- Flow property / unit: Mass / kg
- Amount rule: Accepted component mass from receiving records and bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `abb-pgs300-epd-2024`

###### Process-contact hardware, seals and connection parts (`process_contact_parts_input`)

Record bodies, diaphragms, tubes, probes, antennas, flanges, threaded or hygienic connections, seals, gaskets, fill fluids and other medium-contact parts with material and connection specification.

- Selected flow: Foreground supplier-specific process-contact hardware and seals
- Flow property / unit: Mass / kg
- Amount rule: Accepted mass by component and material from bill of materials and receiving records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `abb-pgs300-epd-2024`

###### Housing, fasteners and protective parts (`housing_parts_input`)

Record enclosure, covers, windows, cable glands, fasteners, protective coatings and potting or sealing parts by material, mass and declared enclosure-protection configuration.

- Selected flow: Foreground supplier-specific housing and protective parts
- Flow property / unit: Mass / kg
- Amount rule: Accepted mass by material and protection configuration from bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `iec-60529-2013`; `abb-pgs300-epd-2024`

###### Raw materials and fabrication auxiliaries for in-house components (`in_house_material_input`)

Include metals, polymers, ceramics, glass, elastomers, coatings, adhesives, lubricants and processing chemicals only for component operations performed inside the reporting boundary.

- Selected flow: Foreground material-specific raw material or fabrication auxiliary
- Flow property / unit: Mass / kg
- Amount rule: Issued quantity minus verified return to stock for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_issue_and_return`
- Sources: `abb-pgs300-epd-2024`

###### Inbound transport service for components and materials (`inbound_transport_service`)

Record supplier origin, mass, mode and actual distance or route for major components, materials and subassemblies; keep transport embedded in an upstream dataset only when double counting is prevented.

- Selected flow: Foreground route-specific freight transport service
- Flow property / unit: Transport service / tkm or mode-appropriate unit
- Amount rule: Shipment mass multiplied by actual route distance, or verified carrier record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inbound_transport`
- Sources: `abb-pgs300-epd-2024`

###### Manufacturing energy and utilities (`component_manufacturing_energy`)

Record metered electricity, fuels, compressed air, process water and other utilities used by in-house component operations; allocate shared consumption only under section 7.

- Selected flow: Foreground site- and carrier-specific energy or utility flow
- Flow property / unit: Carrier-specific property / metered unit
- Amount rule: Metered or submetered consumption attributable to included in-house component operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured accepted component output and then per 1 kg net released instrument
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `abb-pgs300-epd-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted component set for instrument assembly (`accepted_component_set`)

Record accepted internally manufactured and purchased components by configuration and mass after incoming and in-process inspection.

- Selected flow: Foreground accepted component set
- Flow property / unit: Mass / kg
- Amount rule: Accepted component mass transferred to instrument assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted component-set output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `abb-pgs300-epd-2024`

##### Waste flows

###### Component fabrication scrap and spent auxiliaries (`component_fabrication_waste`)

Record metal, polymer, ceramic, electronic, chemical, wastewater and mixed waste separately by measured mass and treatment route when in-house component operations occur.

- Selected flow: Foreground waste-specific output to treatment
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented waste shipment attributable to included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `abb-pgs300-epd-2024`

##### Elementary flows

###### Direct releases from in-house fabrication (`component_direct_releases`)

Record measured or permit-calculated direct emissions to air, water or soil from included component operations; do not duplicate releases already contained in purchased energy or treatment datasets.

- Selected flow: Foreground substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: Monitored or permit-calculated direct release
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources:

### Process: Electronics, display, communication and power-interface assembly (`electronics_assembly`)

#### Inputs

##### Product flows

###### Electronic components and bare printed-circuit boards (`electronic_parts_input`)

Record bare boards, populated or discrete electronic components, connectors, cables and firmware-bearing modules by supplier, part number, mass and compliance status.

- Selected flow: Foreground supplier-specific electronic components and printed-circuit boards
- Flow property / unit: Mass / kg
- Amount rule: Accepted electronic-part mass issued to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released electronic instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics_bom`
- Sources: `eu-rohs-2011-consolidated-2026`

###### Display, communication and power-interface components (`display_communication_power_input`)

Record display or indicator, keypad, communication hardware, antenna, terminals, power-conditioning components, batteries if integral, and external power accessories included in the sold configuration; explicitly record absence where not fitted.

- Selected flow: Foreground supplier-specific display, communication and power-interface components
- Flow property / unit: Mass / kg
- Amount rule: Accepted component mass by sold configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released electronic instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics_bom`
- Sources: `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023`

###### Solder, cleaning agents and electronics assembly auxiliaries (`electronics_auxiliaries`)

Record solder, flux, cleaning agents, adhesives, conformal coating and other assembly auxiliaries from issue and return records.

- Selected flow: Foreground material-specific electronics assembly auxiliary
- Flow property / unit: Mass / kg
- Amount rule: Issued quantity minus verified return and separately recovered amount
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted electronics-module output and then per 1 kg net released instrument
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_issue_and_return`
- Sources:

###### Electronics assembly electricity and utilities (`electronics_energy`)

Record metered electricity and utilities for board population, soldering, cleaning, coating, inspection and programming.

- Selected flow: Foreground site-specific electricity and utility flow
- Flow property / unit: Energy or carrier-specific property / metered unit
- Amount rule: Metered or submetered consumption attributable to electronics assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted electronics-module output and then per 1 kg net released instrument
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `siemens-sitrans-lr250-epd-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted electronics module (`accepted_electronics_module`)

Record accepted populated board, display, communication and power-interface assembly mass and configuration transferred to instrument assembly.

- Selected flow: Foreground accepted electronics module
- Flow property / unit: Mass / kg
- Amount rule: Accepted module mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted electronics-module output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics_bom`
- Sources:

##### Waste flows

###### Electronics assembly waste (`electronics_assembly_waste`)

Record rejected boards and components, solder residues, spent cleaning materials and other electronics waste separately with treatment route.

- Selected flow: Foreground waste-specific electronics output to treatment
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented waste shipment attributable to electronics assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released electronic instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-weee-2012-consolidated-2024`

##### Elementary flows

### Process: Instrument assembly, joining and sealing (`instrument_assembly`)

#### Inputs

##### Product flows

###### Accepted sensing, process-contact and housing components (`assembly_component_input`)

Transfer accepted sensing or measuring mechanism, process-contact and connection parts, housing, seals and fasteners into assembly with configuration identity preserved.

- Selected flow: Foreground accepted mechanical and sensing component set
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass issued to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `abb-pgs300-epd-2024`

###### Accepted electronics, display, communication and power module (`assembly_electronics_input`)

For electronic configurations, transfer the accepted electronics module and preserve display, communication, output and power-supply attributes. For mechanical configurations record `not_fitted` and zero mass rather than selecting a proxy module.

- Selected flow: Foreground accepted electronics module or documented not-fitted state
- Flow property / unit: Mass / kg
- Amount rule: Measured mass fitted to the sold configuration; zero only for documented mechanical or non-electronic configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics_bom`
- Sources: `iec-62828-1-2026`

###### Assembly consumables and energy (`assembly_consumables_energy`)

Record adhesives, sealants, lubricants, fasteners not already in the BOM, electricity, compressed air and other assembly resources.

- Selected flow: Foreground material- or carrier-specific assembly input
- Flow property / unit: Carrier-specific property / measured unit
- Amount rule: Issued consumables and metered assembly energy attributable to included production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured assembled-instrument output and then per 1 kg net released instrument
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources: `abb-pgs300-epd-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled instrument awaiting calibration (`assembled_instrument`)

Record complete assembled instrument mass, configuration code, connection, enclosure, electronics, display or communication, and power arrangement before calibration.

- Selected flow: Foreground assembled instrument awaiting calibration
- Flow property / unit: Mass / kg
- Amount rule: Measured assembled-instrument mass transferred to calibration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembled-instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output`
- Sources:

##### Waste flows

###### Assembly rejects and material waste (`assembly_waste`)

Record non-reworked rejects, trimmed seals, adhesive containers, cleaning waste and other assembly waste separately by material and treatment route.

- Selected flow: Foreground waste-specific assembly output to treatment
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste and disposition records attributable to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

### Process: Configuration, calibration and functional testing (`calibration_and_testing`)

#### Inputs

##### Product flows

###### Assembled instrument submitted for calibration (`calibration_instrument_input`)

Record serial or lot identity, measured-variable class, measuring principle, range, accuracy requirement, contact mode, process connection, protection rating and electronic configuration for every submitted instrument or statistically justified batch.

- Selected flow: Foreground assembled instrument awaiting calibration
- Flow property / unit: Mass / kg
- Amount rule: Measured submitted-instrument mass and item count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per calibration batch and then per 1 kg net released instrument
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_records`
- Sources: `iec-62828-1-2026`

###### Calibration media, services and test energy (`calibration_media_energy`)

Record electricity, pressure or vacuum generation, liquid or gas test media, reference-instrument service and any leak, pressure-integrity or enclosure-test resources actually consumed.

- Selected flow: Foreground carrier-, medium- or service-specific calibration input
- Flow property / unit: Carrier- or medium-specific property / measured unit
- Amount rule: Metered consumption or test-rig records attributable to accepted and rejected tests
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per tested item or batch and then per 1 kg net released instrument
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_records`
- Sources: `iec-62828-1-2026`; `iec-60529-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Calibrated and accepted instrument (`calibrated_instrument`)

Record final configuration, calibration method and reference, tested points, acceptance limits, result, uncertainty or accuracy class, calibration date, and accepted mass. Failed units sent to rework remain internal and are not counted as released product.

- Selected flow: Foreground calibrated and accepted complete instrument
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of instruments with passed calibration and factory acceptance records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted calibration output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_records`
- Sources: `iec-62828-1-2026`

##### Waste flows

###### Spent calibration media and non-reworkable test rejects (`calibration_waste`)

Record discharged test media and non-reworkable failed units by measured quantity and treatment route; record reusable or recirculated media only for the net make-up and disposal crossing the boundary.

- Selected flow: Foreground waste-specific calibration or test output
- Flow property / unit: Medium-specific property / measured unit
- Amount rule: Net discharged test medium and weighed non-reworkable rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

### Process: Packaging and factory-gate release (`packaging_and_release`)

#### Inputs

##### Product flows

###### Calibrated instrument input (`packaging_instrument_input`)

Transfer only instruments with passed calibration and acceptance status to packaging.

- Selected flow: Foreground calibrated and accepted complete instrument
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted instrument mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output`
- Sources:

###### External distribution packaging (`packaging_material_input`)

Record cartons, paper, films, foams, pallets, labels, manuals, desiccants and other packaging by material and mass; keep their mass outside the net reference product.

- Selected flow: Foreground material-specific packaging input
- Flow property / unit: Mass / kg
- Amount rule: Packaging BOM mass and issued quantity for released products
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Sources: `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023`

###### Packaging operation energy (`packaging_energy`)

Record metered or allocated packaging-line electricity and utilities.

- Selected flow: Foreground site-specific electricity or utility flow
- Flow property / unit: Energy or carrier-specific property / metered unit
- Amount rule: Metered packaging consumption or physically allocated shared consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released finished instrument reference output (`released_finished_instrument`)

This is the complete, calibrated, saleable instrument and the only reference output. The quantity is normalized from measured net product mass; external packaging is reported separately.

- Selected flow: Instruments and apparatus for measuring or checking the flow, level, pressure or other variables of liquids or gases, except navigational, hydrological or meteorological instruments and appliances, gas or liquid supply meters and automatic regulating or controlling instruments and apparatus `7af33061-607c-44d5-bafb-cb4efe98f0ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Divide measured net released-product mass and all included foreground amounts by measured net released-product mass so the reference output equals 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_output`
- Sources:

##### Waste flows

###### Packaging line waste (`packaging_waste`)

Record offcuts, damaged packaging and rejected labels or manuals separately by material and treatment route.

- Selected flow: Foreground waste-specific packaging output to treatment
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented packaging waste attributable to released products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | multi_product_manufacturing | Avoid allocation by separating component manufacture, electronics, assembly, calibration and packaging records by line, model, configuration, batch or time period whenever meters and production records permit. | `abb-pgs300-epd-2024` |
| `allocation_physical_fallback` | shared_energy_auxiliaries_and_waste | When subdivision is not possible, allocate shared electricity, utilities, auxiliaries and waste using the causal physical driver: metered machine time or energy first, then accepted processing time, component mass or released product mass; disclose the driver and test sensitivity for material shared burdens. Economic allocation is not the default. | `abb-pgs300-epd-2024` |
| `allocation_rework_and_scrap` | rework_scrap_and_recycling | Return rework burdens to the configuration that caused them. Assign waste treatment to the generating process and do not credit recovered material inside the factory-gate dataset; any recycling substitution or benefit belongs to an explicitly declared downstream scenario. | `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023` |
| `allocation_no_controller_service_credit` | measurement_service_benefits | Do not credit process-energy, water, safety or control-system benefits enabled by the instrument against its manufacturing burden; such avoided-impact claims belong to a separate consequential or downstream system study. | `iec-62828-1-2026` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_supply_and_manufacture` | Sensing mechanism, process-contact parts, housing and retained components | ERP BOM, drawing, receiving and weighing record | model; configuration; component group; supplier; part number; material; wetted status; contact mode; process connection; IP configuration; origin; quantity; unit mass; accepted mass | Export revision-controlled BOM and reconcile sampled or production weighing to accepted receipt and net product mass | kg and item | Each BOM revision and reporting period | Same period as released production | Each manufacturing site and configuration family | Sum accepted mass by component group and configuration; production-mass weight only after separate configuration reconciliation | Approved BOM revision, supplier specification, scale calibration, receiving inspection and mass-balance sign-off |
| `cp_material_issue_and_return` | `component_supply_and_manufacture` | In-house raw materials, fabrication and assembly auxiliaries | Stores issue, return and batch record | material id; lot; issued mass; returned mass; recovered mass; process; batch; date | Reconcile issued quantity to return, recovered amount and waste disposition | kg or material-specific unit | Per batch, aggregated monthly | At least one representative year or full shorter campaign | Each reporting site and included operation | Net input equals issue minus verified return and separately recovered amount, normalized to accepted process output | Inventory transaction trail and batch reconciliation |
| `cp_inbound_transport` | `component_supply_and_manufacture` | Inbound component and material transport | Shipment, supplier and carrier record | supplier origin; destination; component group; shipment mass; mode; route distance; load factor if known; embedded-transport flag | Use actual carrier distance and mode; estimate route only when disclosed and prevent double counting with supplier datasets | kg, km, tkm | Per shipment or supplier route | Same period as component receipts | All major supplier routes to each reporting site | Sum mass-distance by mode and normalize to accepted component or released product mass | Bill of lading, carrier record, supplier invoice and route method |
| `cp_process_energy` | all_processes | Electricity, fuel, compressed air, process water and utilities | Meter, submeter, invoice and equipment log | carrier; meter id; opening and closing reading; unit; process; operating time; production output; allocation driver | Prefer process submetering; reconcile to site invoices and allocate residual shared consumption under section 7 | Carrier-specific metered unit | Continuous or per batch, aggregated monthly | At least one representative year or full shorter campaign | Each reporting site and process | Sum consumption by process and normalize to accepted process output, then reference flow | Meter calibration, invoice reconciliation and allocation worksheet |
| `cp_electronics_bom` | `electronics_assembly` | Electronics, display, communication and power-interface components | Electronics BOM, pick list, supplier declaration and inspection record | configuration; PCB id; component id; supplier; material or declared composition; quantity; unit mass; display; communication; power arrangement; integral battery; RoHS status | Export configuration-specific electronics BOM, reconcile pick quantities and accepted module mass, and retain compliance declaration | kg and item | Each electronics BOM revision and reporting period | Same period as electronic instrument production | Each electronics assembly site and configuration | Sum accepted fitted mass by module role; record not-fitted state for mechanical configurations | BOM revision, supplier declaration, pick-list reconciliation and accepted module weighing |
| `cp_assembly_records` | `instrument_assembly` | Assembly components, consumables and assembled output | Work order, issue record, line log and weighing record | configuration; serial or lot; issued component mass; consumable quantity; assembled mass; rework; reject; operating time | Link issued parts and consumables to assembled output and preserve configuration attributes | kg, item, hour and carrier-specific unit | Per batch or work order | Same period as released production | Each assembly line and site | Sum by configuration and normalize to accepted assembled mass, then released net mass | Work-order closure, calibrated scale, rework log and supervisor sign-off |
| `cp_calibration_records` | `calibration_and_testing` | Calibration, functional, sealing and protection tests and their resource use | Calibration certificate, test-rig log, reference-instrument record and meter reading | serial or lot; variable class; principle; range; test points; reference standard; reference instrument id and validity; acceptance limit; result; uncertainty or accuracy class; calibration date; media; energy; leak or integrity test; IP test basis; rework status | Capture digital test-rig output or controlled certificate and link all consumed media and energy to tested and accepted items | item, kg and test- or carrier-specific unit | Every item unless a justified batch plan applies | Same period as released production | Each calibration and test station | Count accepted, reworked and rejected items separately; normalize resources to accepted mass without dropping failed-test burden | Traceable certificate, reference-instrument status, controlled procedure and test-system audit trail |
| `cp_waste_records` | all_processes | Manufacturing, electronics, assembly, calibration and packaging wastes | Waste scale, container log, manifest and treatment invoice | process; waste type; material; hazardous status; mass; date; destination; treatment route; recovered amount | Weigh by process where possible and reconcile dispatched mass to treatment documentation | kg or medium-specific unit | Per container or shipment, aggregated monthly | Same period as production | Each reporting site and process | Sum by waste type and treatment route; allocate shared containers by documented mass contribution | Calibrated scale, waste manifest, invoice and hazardous-waste classification |
| `cp_direct_release_records` | `component_supply_and_manufacture` | Direct releases to air, water or soil | Continuous monitor, laboratory result, permit calculation and operating log | substance; compartment; concentration; flow; duration; calculation method; process; date | Calculate release from measured concentration and flow or approved permit method; subtract nothing already represented as a technosphere treatment flow | kg or substance-specific unit | Permit or monitoring frequency | Same period as included operations | Each release point of each reporting site | Sum substance by compartment and normalize to released net mass | Calibration, laboratory QA, permit method and calculation worksheet |
| `cp_reference_output` | `packaging_and_release` | Accepted net instrument output and configuration mix | Release, serial, production and calibrated weighing record | model; configuration; variable class; contact mode; architecture; process connection; IP rating; electronics; display; communication; power; calibration status; item count; net mass; packaging mass; site; date | Sum only released instruments with passed acceptance; separately weigh or calculate net instrument and packaging mass | kg and item | Per released lot, aggregated monthly | Same period as all foreground inputs | Each reporting site and configuration | Normalize all included foreground quantities by net released-product mass; production-mass weight configuration inventories | Calibrated scale, release record, calibration acceptance and packaging BOM reconciliation |
| `cp_packaging_bom` | `packaging_and_release` | External distribution packaging | Packaging BOM, issue and release record | material; packaging component; quantity; unit mass; recycled content if evidenced; released lot; waste | Reconcile packaging issued to packaged output and separately collected packaging waste | kg and item | Each packaging revision and reporting period | Same period as released production | Each packaging site and configuration | Sum packaging mass by material per net kg released product | Packaging specification, scale calibration, issue record and supplier declaration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = included foreground amount / measured net mass of released accepted instruments | included amount; net released-product mass | amount per 1 kg net released instrument |  |
| `calc_component_mass_balance` | Product BOM | mass-balance residual = net released-product mass - sum of retained component-group masses; investigate rather than silently allocating any material residual | net product mass; sensing mechanism; process-contact parts; housing; electronics; display/communication; power components; seals; fasteners; coatings; fill fluids; other retained materials | component mass-balance residual and reconciliation status | `abb-pgs300-epd-2024` |
| `calc_item_to_mass` | Item-based production records | amount per kg = total item-based amount / measured net released mass for the same model, lot, site and period | item-based amount; released item count; net released mass | amount per kg net released instrument |  |
| `calc_transport_service` | Inbound transport | tonne-kilometres = shipment mass in tonnes × actual route distance in kilometres; sum by mode and prevent duplication with embedded supplier transport | shipment mass; route distance; transport mode; embedded-transport flag | tkm by mode per kg net released instrument | `abb-pgs300-epd-2024` |
| `calc_configuration_mix` | Multi-configuration dataset | mixed inventory = sum of each configuration inventory × its share of verified net production mass; do not use sales value or unweighted model count | configuration-specific inventory; configuration net production mass | production-mass-weighted mixed inventory | `abb-pgs300-epd-2024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | Reference product | Demonstrate that every reference output is a complete CPC 48252 instrument and not an excluded trade meter, automatic controller, instrument class or standalone sensing element or part. | Product specification, functional description, configuration code and released-product inspection |
| `dq_configuration_completeness` | Product family and configuration mix | Preserve measured-variable, contact mode, mechanical/electronic architecture, measurement principle and range, medium, sensing/wetted materials, housing, process connection, protection rating, electronics, display/communication, power and calibration attributes for each configuration. | Revision-controlled BOM, drawings, technical specification, calibration record and configuration weighting file |
| `dq_mass_balance` | Components, waste and output | Reconcile retained component-group mass to measured net product mass and reconcile issued materials to product, return, recovered material and waste; investigate material residuals. | Calibrated weighing records, BOM reconciliation and waste manifests |
| `dq_temporal_site_match` | Foreground records | Use the same site and reporting period for production output, energy, materials, calibration resources, waste and packaging; disclose substitutions and non-representative shutdown or start-up periods. | Meter periods, production ledger, site identifier and representativeness note |
| `dq_calibration_traceability` | Calibration and testing | Link accepted product to a controlled calibration or test record, reference-instrument validity, acceptance limit, result and date; a generic certificate without configuration or lot linkage is insufficient. | Calibration certificate, reference-instrument status and test-rig audit trail |
| `dq_electronics_and_substances` | Electronic configurations | Collect configuration-specific electronics/display/communication/power BOM and applicable hazardous-substance compliance evidence; do not represent an electronic instrument as a generic mechanical device. | Electronics BOM and supplier declarations, including applicable RoHS evidence |
| `dq_proxy_disclosure` | Upstream and background datasets | Identify each proxy, represented component/material/technology, geography, time and mass share; replace material proxies when supplier-specific evidence becomes available. | Dataset mapping register and proxy justification |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope_gate` | reference_product | Reject a dataset whose reference output is a trade or utility supply meter, automatic regulating or controlling apparatus, navigational/hydrological/meteorological or physical/chemical-analysis instrument, standalone sensor or transducer, part, module or accessory. | `iec-62828-1-2026` |
| `validation_reference_identity` | reference_flow | Require product flow `7af33061-607c-44d5-bafb-cb4efe98f0ec`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and 1 kg measured net released-product mass excluding external packaging. |  |
| `validation_required_qualifiers` | dataset_metadata | Fail completeness when any required measured-variable, contact-mode, architecture, measurement principle/range, medium, sensing/wetted material, housing, process connection, protection, electronics, display/communication, power, calibration, site, mass or packaging qualifier is missing. | `iec-62828-1-2026`; `iec-60529-2013`; `abb-pgs300-epd-2024` |
| `validation_complete_bom` | component_inventory | Require explicit sensing or measuring mechanism, process-contact hardware, housing, electronics, display/communication, power-interface and other retained-component records, using documented not-fitted states for inapplicable electronic groups; require component mass reconciliation to net product mass. | `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023` |
| `validation_process_coverage` | process_inventory | Require component supply, instrument assembly, calibration/testing and packaging; require in-house component and electronics operations when the declared route performs them, with energy, auxiliaries and wastes linked to foreground protocols. | `abb-pgs300-epd-2024` |
| `validation_calibration_acceptance` | released_output | Count only instruments with passed configuration-specific calibration and factory acceptance as released output; preserve failed-test energy, media, rework and disposal burdens in the producing period. | `iec-62828-1-2026` |
| `validation_no_double_counting` | upstream_and_downstream | Reject duplicated component production or transport already embedded in upstream datasets and reject factory-gate inventories that also embed undisclosed use-phase, maintenance or end-of-life burdens. | `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023` |
| `validation_electronic_end_of_life_disclosure` | downstream_profile | For electronic configurations, require downstream users to disclose applicable separate-collection, hazardous-substance and treatment assumptions rather than treating the instrument as unsorted municipal waste. | `eu-rohs-2011-consolidated-2026`; `eu-weee-2012-consolidated-2024`; `siemens-sitrans-lr250-epd-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-gate production dataset for complete calibrated instruments, with configuration-specific or production-mass-weighted foreground evidence |
| downstream_use | Secondary dataset or background dataset for process-instrument manufacturing; input to lifecycle models that add explicit distribution, operational electricity, maintenance/recalibration, replacement and end-of-life scenarios |
| allowed_use | Complete instruments within the declared scope and configuration mix; comparative use only when reference amount, boundary, geography, technology, variable/contact/architecture mix, connection/protection, electronics/power and data quality are equivalent |
| excluded_use | Standalone sensors or parts; trade or utility meters; automatic controllers; excluded instrument classes; claims about avoided process energy, water or safety impacts; undisclosed mixing of factory-gate and use/end-of-life burdens |
| required_metadata | PCR id; product-flow UUID; site; geography; period; measured-variable/contact/architecture and principle mix; intended medium; sensing/wetted and housing materials; process connection; IP or other protection rating and basis; electronics/display/communication/power configuration; calibration and acceptance basis; net mass; packaging mass; production route; allocation; upstream dataset and proxy register |
| required_quality_disclosure | BOM and mass-balance coverage; meter and scale calibration; configuration weighting; calibration traceability; supplier and transport coverage; proxy mass shares; waste and direct-release coverage; applicable RoHS/WEEE assumptions for downstream electronic configurations |
| update_trigger | BOM, sensing principle, wetted or housing material, process connection, protection rating, electronics/display/communication/power design, calibration route, manufacturing site or energy supply changes; material supplier or transport changes; configuration-mix shift; new foreground period; or a revised applicable standard or legal requirement |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-62828-1-2026` | standard | IEC 62828-1:2026, Reference conditions and procedures for testing industrial and process measurement transmitters — Part 1: General procedures for all types of transmitters, https://webstore.iec.ch/en/publication/86735 (retrieved 2026-08-09) | Complete-transmitter scope; pressure/level/flow and analogue/digital typology; calibration and performance-test records |
| `iec-60529-2013` | standard | IEC 60529:1989+A1:1999+A2:2013, Degrees of protection provided by enclosures (IP Code), https://webstore.iec.ch/en/publication/2452 (retrieved 2026-08-09) | Enclosure-protection configuration and declaration basis |
| `abb-pgs300-epd-2024` | dataset | ABB, Pre-Certified Environmental Product Declaration: PGS300 Gauge Pressure Transmitter, 9AAU00000000030 EN 03-2024, https://library.e.abb.com/public/a89aadb4c1954668a80dbb7f76dbb5a8/EPD%20Declaration.pdf (retrieved 2026-08-09) | Component and configuration groups; sensing mechanism, process connection, housing, display and communication declaration; manufacturing/assembly boundary; foreground BOM, energy, transport, waste and mass-balance evidence; allocation method example |
| `siemens-sitrans-lr250-epd-2023` | dataset | Siemens, Environmental Product Declaration: SITRANS LR250, DI_PA_EPD30008.01, 26 September 2023, https://support.industry.siemens.com/cs/attachments/109962931/LR2000B0_LR250-EPDecl-Siemens-DI_PA_EPD30008.01-Sept_26_2023.pdf (retrieved 2026-08-09) | Non-contact radar level-instrument example; product and packaging separation; manufacturing/use/end-of-life boundary; primary-data preference and end-of-life treatment disclosure |
| `eu-rohs-2011-consolidated-2026` | official_guidance | European Union, Directive 2011/65/EU on restriction of hazardous substances in electrical and electronic equipment, consolidated version current 2026-07-01, http://data.europa.eu/eli/dir/2011/65/2026-07-01 (retrieved 2026-08-09) | Electronic-component substance and compliance evidence for industrial monitoring instruments |
| `eu-weee-2012-consolidated-2024` | official_guidance | European Union, Directive 2012/19/EU on waste electrical and electronic equipment, consolidated version 2024-04-08, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:02012L0019-20240408 (retrieved 2026-08-09) | Separate collection and downstream treatment disclosure for electronic monitoring instruments |
