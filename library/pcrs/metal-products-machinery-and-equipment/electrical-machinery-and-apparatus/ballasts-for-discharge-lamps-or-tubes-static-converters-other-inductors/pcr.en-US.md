---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ballasts-for-discharge-lamps-or-tubes-static-converters-other-inductors
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Ballasts for discharge lamps or tubes; static converters; other inductors

## 1. Scope and Applicability

This PCR governs foreground production data for finished ballasts for discharge lamps or tubes, static power converters, and other inductors. Static converters include rectifiers, inverters, bidirectional power-conversion systems (PCS), chargers, stabilized power supplies, and other equipment whose primary function is power conversion without rotating conversion machinery. The category is intentionally broad, so every data package shall declare a product subtype and its electrical interfaces before this PCR is applied.

The PCR covers factory-gate production of a declared product model or a demonstrably homogeneous product family. It includes received materials and components, electronic assembly where present, magnetic-component manufacture where present, mechanical and thermal integration, final assembly, testing, and packaging. Purchased parts remain visible product inputs linked to upstream datasets.

The PCR does not cover electrical transformers as finished products, rotating converters, electric motors or generators, batteries, complete luminaires or lamps, switching and protection apparatus whose primary function is not power conversion, or loose parts sold separately. Installation, distribution, use-stage electricity losses, maintenance, and end-of-life treatment are outside the foreground production boundary; downstream life-cycle models shall add those stages using product-specific scenarios.

A photovoltaic inverter, lamp ballast, charger, or any other single subtype shall not represent the entire category. Family or proxy use is permitted only when the products have the same main function, applicable product standards, material architecture, manufacturing technology, and performance basis, and when an explicit sensitivity or scaling rule covers power range, mass, losses, cooling, and lifetime differences. This restriction follows the homogeneous-family principles in `pep-ecopassport-pcr-ed4-2021`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ballasts-for-discharge-lamps-or-tubes-static-converters-other-inductors |
| classification_refs | CPC 3.0: 46122, Ballasts for discharge lamps or tubes; static converters; other inductors (`exact`) |
| covered_products | Finished static converters, rectifiers, inverters, bidirectional PCS, chargers, stabilized power supplies, electronic or electromagnetic ballasts for discharge lamps or tubes, and other finished inductors |
| excluded_products | Finished transformers; rotating converters; motors and generators; batteries; complete lamps and luminaires; switching/protection apparatus without a primary power-conversion function; parts sold separately |
| representative_product | A declared finished product model belonging to exactly one product subtype; no category-wide default design or photovoltaic-inverter proxy |
| production_route | Product-specific combination of electronic assembly, magnetic-component manufacture, mechanical and thermal integration, final assembly, testing, and packaging |
| market_state | Finished, conformity-tested product at the manufacturing plant gate, excluding distribution, installation, use, maintenance, and end-of-life treatment |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished ballast, static converter, or inductor of one declared subtype and model/family at the manufacturing plant gate |
| How much | 1 kg net product mass, excluding external packaging and separately sold accessories |
| How well | Saleable and conformity-tested, with declared rated electrical interfaces, power or current/inductance basis, efficiency or loss metric, isolation, cooling, and expected service life |
| How long or cycle | One production reporting period normalized to conforming output; expected service life is a required product qualifier but is not embedded in the 1 kg factory-gate amount |
| reference_flow_link | Product mass is the manufacturing reference; any downstream service functional unit shall link product quantity, load profile, efficiency/losses, maintenance, and service life explicitly |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Ballasts for discharge lamps or tubes, static converters, other inductors `2753fd9b-d904-40b2-9cae-4642fd5fc5fc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; model or homogeneous-family identifier; rated power and whether active or apparent, or rated current and inductance for a passive inductor; input and output voltage ranges; AC/DC type and frequency for every port; number of phases for every AC port; power-conversion direction; efficiency or loss metric with load points, test method, temperature, and auxiliary-power treatment; galvanic-isolation topology; cooling method and included coolant; net mass; included controls, firmware, cables and auxiliaries; expected service life with operating profile and evidence; applicable product standard; manufacturing geography and reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete. If rated power or efficiency is not a meaningful property for a passive inductor, the package shall state `not applicable` and declare rated current, inductance, frequency, and loss or quality-factor data instead.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and material/waste flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass and all mass inventory consistently; exclude packaging from the 1 kg reference product and record packaging separately. |
| `rated_power_basis` | converters, chargers and ballasts | Active power or apparent power, as declared | W, kW, VA or kVA | State whether the rating is input, output, active, apparent, continuous, peak, or lamp power; do not convert among ratings without the declared power factor, duty and duration. |
| `inductor_rating_basis` | passive inductors | Inductance and rated current, plus loss metric | H and A, with Hz and W where applicable | Declare inductance, current, test frequency, temperature and core-loss or winding-loss basis; use `not applicable` for conversion efficiency only when an equivalent loss metric is supplied. |
| `electrical_interfaces` | every electrical port | Voltage, current type, frequency and phase count | V; Hz; dimensionless phase count | Record input/output voltage range, AC or DC, frequency for AC, phase count, and conversion direction separately for each port. |
| `efficiency_and_losses` | converter, charger, PCS and ballast performance | Dimensionless efficiency and electrical energy/power loss | % and W or kWh | Calculate efficiency from paired input/output measurements at declared operating points; state direction, load fraction, voltage, power factor where relevant, ambient/coolant temperature, standby/no-load mode, and inclusion of auxiliaries. Use subtype-specific methods rather than a universal efficiency curve. |
| `service_life` | downstream-use linkage | Time or operating cycles | years, h or cycles | Declare expected service life, operating hours or cycles, load profile, ambient conditions, maintenance assumptions and evidence; do not use an uncited category-wide lifetime default. |
| `production_normalization` | foreground inventory | Mass | kg per kg reference product | Normalize reporting-period inputs, outputs, wastes and emissions to conforming net output after allocation and rework reconciliation. |

For photovoltaic power conditioners, IEC 61683 may support the declared efficiency test method only within its scope. For external power supplies within the scope of EU Regulation 2019/1782 and placed on the relevant market, preserve the regulation's named load conditions and no-load reporting; these conditions are not category-wide thresholds. For other subtypes, use the applicable product standard or a fully disclosed test protocol.

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_manufacturing_inputs` | factory-gate production | Include upstream production and supplier transport of materials, components and subassemblies, plant transformation and assembly, product testing, and primary/secondary packaging; purchased items shall link to upstream datasets. | `pep-ecopassport-pcr-ed4-2021` |
| `sb_sensitive_components` | electronics and magnetics | Do not cut off printed circuit boards, power semiconductors/modules, copper or aluminium conductors, magnetic cores, capacitors, cooling hardware, or other environmentally influential components solely because their mass share is small. | `pep-ecopassport-pcr-ed4-2021` |
| `sb_subtype_specificity` | product family and proxy modelling | A single photovoltaic inverter, ballast, charger or inductor shall not represent another subtype or the whole category without demonstrated homogeneous-family criteria and documented scaling/sensitivity evidence. | `pep-ecopassport-pcr-ed4-2021`; `iec-62477-1-2022`; `iec-62909-1-2025`; `iec-61683-1999`; `iec-61347-2-12-2024` |
| `sb_use_stage_separate` | downstream life-cycle models | Exclude operational conversion losses from the foreground manufacturing process; model them downstream from subtype-specific efficiency/loss maps, direction, duty profile, auxiliary power and declared service life. | `pep-ecopassport-pcr-ed4-2021` |
| `sb_end_of_life_separate` | downstream life-cycle models | Exclude end-of-life treatment and recycling credits from factory-gate production; model deinstallation, collection, depollution, separation, recovery and disposal as separate scenarios. | `pep-ecopassport-pcr-ed4-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials, components and subassemblies accepted at the reporting manufacturing site, with supplier identity, mass and upstream dataset linkage retained |
| starting_condition_role | Foreground manufacturing begins at receiving; upstream production and supplier transport remain represented through linked product inputs |
| product_classification_scope | Semantic scope of finished ballasts, static converters and other inductors; CPC 3.0 code 46122 is a classification reference and does not erase subtype distinctions |
| recursive_input_rule | A purchased input that itself belongs to this category remains an explicit product input with subtype, mass and upstream dataset; it shall not be relabelled as the reference output or recursively expanded without a stopping rule |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise use technology-, geography- and time-representative datasets. Critical electronics, magnetic materials, conductors, thermal hardware and packaging require explicit coverage or a disclosed data gap |
| disclosure | Declare subtype, model/family, plant geography/year, production route, process inclusion decisions, BOM coverage, supplier-data coverage, rated interfaces, performance test basis, isolation, cooling, expected service life and any proxy/scaling rule |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `electronic_assembly` | Electronic and power-stage assembly | conditional | Include for products containing mounted printed circuit boards, power semiconductors, control electronics or electronic ignition/control stages | Builds controlled electronic and power-conversion subassemblies | kg accepted electronic assembly per kg conforming final product |
| `magnetic_component_assembly` | Magnetic-component and winding assembly | conditional | Include for inductors, electromagnetic ballasts, and products with in-house wound/core magnetic components | Produces wound/core assemblies and captures conductor, core, insulation and impregnation burdens | kg accepted magnetic assembly per kg conforming final product |
| `mechanical_thermal_integration` | Mechanical, insulation and thermal integration | required | Include the actual enclosure, busbar, heatsink, fan, pump, liquid loop, insulation or potting route; zero-flow declarations require evidence that a feature is absent | Integrates electrical subassemblies with mechanical protection, insulation and cooling | kg integrated unit per kg conforming final product |
| `final_test_packaging` | Final assembly, configuration, testing and packaging | required | Always include | Produces the saleable factory-gate reference product and records test energy, rejects, rework and packaging | 1 kg conforming net reference product |

### Process: Electronic and power-stage assembly (`electronic_assembly`)

#### Inputs

##### Product flows

###### Electronic boards, power semiconductors and components (`electronic_components`)

Record purchased printed circuit boards, power modules/semiconductors, capacitors, sensors, controllers and other mounted components by supplier part family and mass; do not infer a universal bill of materials.

- Selected flow: Electronic boards, power semiconductors and components
- Flow property / unit: Mass / kg
- Amount rule: measured accepted input mass from BOM, receiving and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted electronic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `pep-ecopassport-pcr-ed4-2021`

###### Assembly consumables (`electronic_consumables`)

Record solder, flux, adhesives, conformal coating, cleaning agents and process gases that cross the process boundary.

- Selected flow: Electronic assembly consumables
- Flow property / unit: Mass / kg
- Amount rule: issued quantity minus documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electronic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `pep-ecopassport-pcr-ed4-2021`

###### Electricity for electronic assembly (`electronic_assembly_electricity`)

Record metered electricity for mounting, soldering, curing, coating, cleaning and local extraction.

- Selected flow: Electricity, plant supply mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated meter total under `calc_shared_resource_allocation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electronic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

###### Electronic rejects, solder dross and spent consumables (`electronic_waste`)

Record each treatment-relevant waste fraction separately when composition or destination differs.

- Selected flow: Electronic manufacturing waste, declared fraction
- Flow property / unit: Mass / kg
- Amount rule: measured waste leaving the process, net of documented same-process rework return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electronic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

##### Elementary flows

###### Direct assembly emissions (`electronic_direct_emissions`)

Record measured or permit-calculated VOC, particulate or other direct releases from soldering, coating and cleaning; absence shall be documented rather than represented by an assumed zero.

- Selected flow: Declared elementary emission by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measured or permit-method release assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electronic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

#### Outputs

##### Product flows

###### Accepted electronic assembly (`electronic_assembly_output`)

Record accepted subassembly mass transferred to integration, including incorporated consumables.

- Selected flow: Accepted electronic and power-stage assembly
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted electronic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_rework`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Magnetic-component and winding assembly (`magnetic_component_assembly`)

#### Inputs

##### Product flows

###### Conductors, magnetic cores and insulation (`magnetic_materials`)

Record copper or aluminium winding conductor, ferrite/steel/powder cores, bobbins, insulation, varnish, resin and potting materials separately where upstream datasets differ.

- Selected flow: Magnetic-component materials by declared material family
- Flow property / unit: Mass / kg
- Amount rule: measured accepted input mass from BOM and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted magnetic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `pep-ecopassport-pcr-ed4-2021`

###### Electricity for winding and curing (`magnetic_assembly_electricity`)

Record winding, core assembly, impregnation, curing and local ventilation electricity.

- Selected flow: Electricity, plant supply mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated meter total under `calc_shared_resource_allocation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted magnetic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

###### Conductor, core and insulation waste (`magnetic_waste`)

Record separated metal, core, resin and insulation waste by destination.

- Selected flow: Magnetic-component manufacturing waste, declared fraction
- Flow property / unit: Mass / kg
- Amount rule: measured waste leaving the process, net of documented same-process reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted magnetic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

##### Elementary flows

###### Impregnation and curing emissions (`magnetic_direct_emissions`)

Record substance-specific direct emissions when varnish, resin, solvents or thermal treatment are used.

- Selected flow: Declared elementary emission by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measured or permit-method release assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted magnetic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

#### Outputs

##### Product flows

###### Accepted magnetic assembly (`magnetic_assembly_output`)

Record accepted winding/core assembly mass transferred to integration.

- Selected flow: Accepted magnetic component assembly
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted magnetic assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_rework`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Mechanical, insulation and thermal integration (`mechanical_thermal_integration`)

#### Inputs

##### Product flows

###### Mechanical, insulation and cooling components (`mechanical_thermal_components`)

Record enclosures, frames, busbars, terminals, connectors, heatsinks, fans, pumps, heat exchangers, thermal interface materials, insulation and potting by mass and supplier dataset. Cooling liquids are included only when supplied with the product.

- Selected flow: Mechanical, electrical-interface, insulation and cooling components
- Flow property / unit: Mass / kg
- Amount rule: measured accepted input mass from BOM and receiving records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `pep-ecopassport-pcr-ed4-2021`

###### Electronic and magnetic subassemblies (`declared_subassemblies`)

Record in-house or purchased electronic and magnetic subassemblies as separate inputs; a purchased same-category assembly follows the recursive input rule.

- Selected flow: Declared electronic or magnetic subassembly
- Flow property / unit: Mass / kg
- Amount rule: measured transferred or purchased mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Integration electricity (`integration_electricity`)

Record forming, fastening, welding, potting, curing and thermal-system charging electricity.

- Selected flow: Electricity, plant supply mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated meter total under `calc_shared_resource_allocation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

###### Integration scrap and spent coolant (`integration_waste`)

Record metal/plastic offcuts, insulation or potting waste, and spent coolant or cleaning liquid separately by treatment route.

- Selected flow: Integration waste, declared fraction
- Flow property / unit: Mass / kg
- Amount rule: measured waste leaving the process, net of documented rework/reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

##### Elementary flows

###### Direct integration emissions (`integration_direct_emissions`)

Record direct substance-specific releases from welding, coating, potting, curing, coolant charging or cleaning when present.

- Selected flow: Declared elementary emission by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measured or permit-method release assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

#### Outputs

##### Product flows

###### Integrated unit ready for final test (`integrated_unit_output`)

Record accepted integrated unit mass before final configuration, test and packaging.

- Selected flow: Integrated ballast, converter or inductor unit
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg integrated unit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_rework`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Final assembly, configuration, testing and packaging (`final_test_packaging`)

#### Inputs

##### Product flows

###### Integrated units and purchased final-stage parts (`final_stage_components`)

Record integrated units plus purchased controls, displays, cables, connectors, labels, firmware-bearing modules and other included auxiliaries.

- Selected flow: Integrated units and final-stage components
- Flow property / unit: Mass / kg
- Amount rule: measured input mass from production orders and BOM records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Test and burn-in electricity (`test_electricity`)

Record gross test/burn-in input electricity and any exported or recovered test electricity separately. Do not net test energy without both meters.

- Selected flow: Electricity, plant supply mix
- Flow property / unit: Energy / kWh
- Amount rule: measured test-system input less no undocumented credits; exported/recovered electricity is a separate output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

###### Packaging materials (`packaging_materials`)

Record primary and secondary packaging, labels and manuals separately from the net reference-product mass.

- Selected flow: Packaging materials by material family
- Flow property / unit: Mass / kg
- Amount rule: measured packaging issued to conforming products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

###### Test rejects and packaging waste (`final_stage_waste`)

Record nonconforming units, replaced parts and packaging waste by rework or treatment destination.

- Selected flow: Final-stage waste, declared fraction
- Flow property / unit: Mass / kg
- Amount rule: measured waste leaving the process, excluding documented rework returned to a named process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_rework`
- Sources:

##### Elementary flows

###### Direct test releases (`test_direct_emissions`)

Record coolant, refrigerant, gas or other direct releases caused by testing; document non-applicability when the test route has no direct release mechanism.

- Selected flow: Declared elementary emission by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measured release assigned to final testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

#### Outputs

##### Product flows

###### Conforming factory-gate reference product (`reference_product_output`)

Record only products that passed the declared final acceptance test. Product mass excludes external packaging.

- Selected flow: Ballasts for discharge lamps or tubes, static converters, other inductors `2753fd9b-d904-40b2-9cae-4642fd5fc5fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed normalization output of 1 kg conforming net product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_output_and_rework`
- Sources:

###### Exported or recovered test electricity (`recovered_test_electricity`)

Record electricity exported from bidirectional testing only when separately metered and demonstrably used outside the test loop.

- Selected flow: Electricity exported from product testing
- Flow property / unit: Energy / kWh
- Amount rule: separately metered export; zero is not assumed when no meter exists
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | separable products, lines and process steps | Prefer product-specific BOMs, meters, production orders and process subdivision so allocation is avoided. | `pep-ecopassport-pcr-ed4-2021` |
| `alloc_shared_resources` | shared utilities and line-level inputs | When subdivision is not possible, allocate by a measured causal driver such as machine time, test energy, material throughput or production time. Mass or item count may be used only when it best represents resource use; disclose the choice and test sensitivity for materially different power ranges or subtypes. | `pep-ecopassport-pcr-ed4-2021` |
| `alloc_rework_and_scrap` | rejects, rework and recovered material | Assign rework energy and material losses to the originating product/process. Credit internal reuse only through the measured quantity returned to the same system; keep sold scrap and treatment flows visible. | `pep-ecopassport-pcr-ed4-2021` |
| `alloc_exported_test_energy` | bidirectional or regenerative product testing | Keep gross test electricity input and separately metered export as distinct flows; do not offset input with nominal power, simulated export or unmetered recovery. |  |
| `alloc_recycling_separate` | recycling and recovery | Do not subtract potential end-of-life recycling benefits from factory-gate production; report any downstream benefit/load beyond the system boundary separately. | `pep-ecopassport-pcr-ed4-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | all applicable processes | materials, components, subassemblies and final-stage parts | BOM, purchase/receiving and inventory records | part id; material family; supplier; accepted quantity; unit mass; incorporated quantity; upstream dataset id; same-category subtype | reconcile released BOM with receiving and production issue/return records | kg | each model revision and monthly reconciliation | same reporting period as production output | every included manufacturing site and supplier route | accepted input minus documented return, mapped to product/process and normalized by accepted output | approved BOM revision; calibrated scale record where weighed; supplier declaration; inventory reconciliation |
| `cp_process_energy` | all applicable processes | electricity, fuel, heat and recovered test electricity | submeters, equipment logs and invoices | meter id; start/end reading; energy carrier; process; product family; operating time; exported energy meter | prefer dedicated meters; otherwise allocate a reconciled facility total by a causal driver | kWh or MJ | continuous/monthly, and per test campaign where applicable | at least 12 representative months or a justified complete production campaign | every included manufacturing site | gross consumption and export remain separate; normalize after allocation | meter calibration; invoice reconciliation; downtime and shared-load log |
| `cp_waste_and_emissions` | all applicable processes | waste and direct elementary emissions | waste tickets, manifests, stack/fugitive measurements and permit calculations | substance/material; mass; compartment; treatment destination; measurement method; process; date | weigh waste and use substance-specific monitored or approved calculation methods for direct releases | kg | each shipment and required monitoring interval | same reporting period as production output | every included manufacturing site | sum by process, fraction/substance and destination; subtract only documented same-process reuse | scale tickets; transporter/treatment records; laboratory/monitoring reports; method and detection limit |
| `cp_output_and_rework` | all applicable processes | accepted output, rejects and rework | production orders, test records and scales | model; subtype; gross output; accepted output; net mass; reject mass; rework destination; test disposition | reconcile serial/lot acceptance records with weighed output and rework movements | kg | each batch/lot; monthly reconciliation | same reporting period as inputs | every included manufacturing site | accepted net output is denominator; rework stays attached to the originating process | final acceptance report; scale calibration; lot genealogy; rework closure |
| `cp_packaging` | `final_test_packaging` | primary/secondary packaging, labels and manuals | packaging BOM and issue records | packaging part id; material; recycled content if evidenced; issued mass; return/waste mass | reconcile packaging BOM with issued and wasted quantities | kg | each packaging design revision and monthly | same reporting period as production output | every included packaging site | packaging per accepted net product mass, separate from reference-product mass | approved packaging specification; supplier mass data; issue reconciliation |
| `cp_product_performance` | `final_test_packaging` | rated interfaces, efficiency/losses, isolation and cooling | nameplate/specification, type/routine tests and calibration records | subtype; model; input/output voltage; AC/DC; frequency; phases; direction; rated power/current/inductance; load point; input/output power; auxiliaries; temperature; isolation; cooling | use applicable product standard or fully disclosed test procedure; preserve raw paired measurements | V, A, Hz, W, VA, H, %, °C | each model/type test and production routine-test plan | current model revision | each declared product family and test facility | calculate only like-for-like operating points; retain direction and auxiliary boundary | accredited/type-test report where available; procedure revision; instrument calibration; pass/fail record |
| `cp_service_life_evidence` | published dataset metadata | expected service life and maintenance profile | reliability test, field-return, warranty or engineering-life records | life metric; operating profile; load; temperature; humidity; cooling maintenance; failure criterion; sample size; confidence; source period | choose the model-relevant evidence hierarchy and document extrapolation | years, h or cycles | each model revision or evidence update | evidence period stated explicitly | target market/use conditions | report declared value with operating and maintenance conditions; no category-wide default | test/field study, warranty analysis, engineering sign-off and uncertainty disclosure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_inventory_normalization` | every foreground inventory row | normalized amount = allocated reporting-period amount / conforming net reference-product mass | allocated input/output/waste/emission; conforming net mass from `cp_output_and_rework` | amount per 1 kg reference product |  |
| `calc_efficiency` | converter, charger, PCS or electronic ballast operating point | efficiency = measured useful output power / measured input power; calculate separately by direction and operating point and disclose auxiliary-power inclusion | paired input/output power, direction, load, voltage, frequency, phase, temperature and auxiliary boundary from `cp_product_performance` | dimensionless efficiency (%) plus loss power (W) | `iec-61683-1999`; `eu-2019-1782` |
| `calc_mass_balance` | each manufacturing process and total foreground | balance gap = mass inputs - product outputs - waste outputs - measured direct mass emissions - documented stock change; investigate rather than force-close material gaps | BOM/receiving mass, output/rework, waste and direct-emission records | process and total mass-balance gap with explanation |  |
| `calc_shared_resource_allocation` | shared utilities and line inputs | allocated amount = measured shared total × declared causal-driver share; shares shall sum to 1 for the allocation pool | shared meter/invoice total and product-specific causal driver | product/process allocated amount | `pep-ecopassport-pcr-ed4-2021` |
| `calc_family_scaling` | homogeneous product family only | apply a reviewed equation or interpolation derived from representative products; validate high, low and median/sales-representative cases and disclose sensitive parameters | product LCAs, mass, power range, component architecture, losses, cooling and lifetime | product-specific inventory with uncertainty/sensitivity evidence | `pep-ecopassport-pcr-ed4-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | All required qualifiers and exact product subtype/model or homogeneous-family scope are complete. | product specification, nameplate, classification and test procedure |
| `dq_bom_coverage` | material/component inputs | BOM coverage reconciles to net product mass and explicitly covers influential electronics, conductors, magnetic cores, cooling hardware, insulation/potting and packaging or discloses a quantified gap. | BOM reconciliation and `calc_mass_balance` |
| `dq_temporal_site` | foreground records | Inputs, outputs, energy, waste and emissions cover the same representative period and all sites in scope; partial periods and site exclusions are quantified. | dated records, production schedule and site list |
| `dq_upstream_data` | purchased inputs | Upstream datasets are supplier-specific where available and otherwise technology-, geography- and time-representative; proxy choices and same-category inputs are disclosed. | supplier declarations, dataset metadata and proxy review |
| `dq_performance` | efficiency/loss and electrical qualifiers | Test method, operating point, direction, temperature, instrument calibration and auxiliary boundary are retained; a subtype-specific result is not generalized without evidence. | raw test data and `cp_product_performance` records |
| `dq_service_life` | downstream-use linkage | Service-life claim states operating/maintenance conditions, evidence type, sample basis and uncertainty; absence of evidence is disclosed rather than replaced with a default. | `cp_service_life_evidence` record |
| `dq_completeness` | modelled inventory | All assessable flows are included or a flow-specific exclusion is justified; cut-off is not used to hide high-impact or hazardous materials/components. | completeness checklist, contribution screening and source-backed justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | The reference output is exactly 1 kg of flow `2753fd9b-d904-40b2-9cae-4642fd5fc5fc`, using Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |  |
| `val_required_qualifiers` | dataset metadata | Product subtype, rated power or inductor rating, input/output voltage, current type, phases, efficiency/loss test basis, isolation, cooling and expected service life are declared or explicitly marked not applicable with an equivalent relevant property. | `iec-62477-1-2022`; `iec-62909-1-2025`; `iec-61683-1999`; `iec-61347-2-12-2024`; `eu-2019-1782` |
| `val_process_route` | process map | All required processes and each applicable conditional process are included; every exclusion has product-specific evidence. |  |
| `val_no_cross_subtype_proxy` | representative and proxy data | A photovoltaic inverter or any other single subtype is not used to represent the entire category; family scaling satisfies homogeneous-function, standard, technology and sensitivity requirements. | `pep-ecopassport-pcr-ed4-2021` |
| `val_mass_and_rework` | foreground inventory | Product, waste, direct-emission and rework records reconcile under `calc_mass_balance`; unexplained gaps are findings, not forced adjustments. |  |
| `val_energy_and_efficiency` | manufacturing and performance data | Manufacturing/test electricity is separate from operational conversion losses; efficiency/loss results preserve direction, load point, electrical interfaces, temperature and auxiliary boundary. | `iec-61683-1999`; `eu-2019-1782` |
| `val_upstream_and_recursive_inputs` | purchased components and subassemblies | Each material purchased input has an upstream dataset or disclosed gap, and every same-category input remains visible with subtype and stopping rule. | `pep-ecopassport-pcr-ed4-2021` |
| `val_sources_and_collection` | all constrained values and rules | Every collected/calculated row links to a collection protocol and every non-default external method constraint cites a listed source id; no uncited numeric default or legal threshold is introduced. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` when representativeness and review support reuse outside the reporting organization |
| downstream_use | Foreground data-package production and factory-gate process publication; downstream process or lifecyclemodel construction for product systems using the declared ballast, converter, charger, PCS or inductor |
| allowed_use | Product-specific or reviewed homogeneous-family manufacturing modelling with explicit subtype/performance qualifiers; downstream use-stage modelling with separately supplied duty, efficiency/loss and service-life scenarios |
| excluded_use | Category-wide default from a single photovoltaic inverter or other subtype; legal-compliance claims; substitution among unlike converter/ballast/inductor functions; operational loss modelling from factory test energy; product comparison without equivalent function and service |
| required_metadata | PCR id/version; product subtype/model/family; CPC reference; plant geography/year; production route; rated electrical interfaces and power/current/inductance basis; conversion direction; efficiency/loss test basis; isolation; cooling; service life; net mass; packaging mass; included auxiliaries/firmware; allocation; BOM/upstream coverage; data sources |
| required_quality_disclosure | primary-data share; BOM and mass-balance coverage; metering/allocation basis; supplier dataset representativeness; process exclusions; direct-emission and waste coverage; performance-test evidence; service-life evidence and uncertainty; proxy/scaling limits; review state |
| update_trigger | Product subtype or main function changes; rated power/interface, topology, isolation or cooling changes materially; BOM or supplier route changes; firmware changes operating losses; efficiency or service-life evidence changes; production site/technology changes; applicable standard/regulation or upstream dataset is revised |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-08) | CPC 46122 identity and its placement under electrical transformers, static converters and inductors |
| `pep-ecopassport-pcr-ed4-2021` | `standard` | PEP ecopassport Program, *Product Category Rules for Electrical, Electronic and HVAC-R Products*, edition 4, 6 September 2021, https://pep-ecopassport.org/site/wp-content/uploads/2026/06/PCR-4-ed4-EN-2021-09-06-PCR-edition-4.pdf (retrieved 2026-08-08) | Life-cycle boundary, manufacturing inputs and packaging, allocation, cut-off safeguards, homogeneous-family extrapolation, performance/lifetime disclosure and end-of-life separation |
| `iec-62477-1-2022` | `standard` | IEC 62477-1:2022, *Safety requirements for power electronic converter systems and equipment - Part 1: General*, https://webstore.iec.ch/en/publication/28936 (retrieved 2026-08-08) | General PECS scope and differentiation of adjustable-speed drives, UPS, stabilized DC supplies and bidirectional converters |
| `iec-62909-1-2025` | `standard` | IEC 62909-1:2025, *Bi-directional grid-connected power converters - Part 1: General and safety requirements*, https://webstore.iec.ch/en/publication/69114 (retrieved 2026-08-08) | Bidirectional PCS identity and explicit separation from UPS, photovoltaic and EV-charging product standards |
| `iec-61683-1999` | `standard` | IEC 61683:1999, *Photovoltaic systems - Power conditioners - Procedure for measuring efficiency*, https://webstore.iec.ch/en/publication/5720 (retrieved 2026-08-08) | Conditional efficiency measurement method for photovoltaic power conditioners only |
| `iec-61347-2-12-2024` | `standard` | IEC 61347-2-12:2024, *Controlgear for electric light sources - Safety - Part 2-12: Particular requirements - DC or AC supplied electronic controlgear for discharge lamps (excluding fluorescent lamps)*, https://webstore.iec.ch/en/publication/64710 (retrieved 2026-08-08) | Electronic discharge-lamp controlgear subtype identity and electrical-supply distinction |
| `eu-2019-1782` | `standard` | European Commission, Commission Regulation (EU) 2019/1782 laying down ecodesign requirements for external power supplies, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32019R1782 (retrieved 2026-08-08) | Conditional external-power-supply input/output declarations, load-point efficiency and no-load reporting; not a category-wide threshold |
