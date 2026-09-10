---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-fffa1be2
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage exceeding 1000 V

## 1. Scope and Applicability

This PCR covers finished, factory-assembled boards, consoles, cabinets and other equipped bases for electric control or distribution at a rated voltage exceeding 1,000 V. It includes air-insulated, gas-insulated, vacuum-interrupting and hybrid metal-enclosed assemblies where switching, protection, control, measurement or auxiliary apparatus is installed as part of the delivered assembly. The declared product shall be identified by its actual configuration and ratings rather than by the generic term “switchgear” alone.

The factory-gate core covers materials and purchased components entering the manufacturing site, enclosure and busbar fabrication when performed on site, equipment integration, insulation or interruption-medium management, factory testing, inspection and primary packaging. A cradle-to-grave study may add installation, operational losses and auxiliary electricity, maintenance, replacement and end-of-life modules only when their scenarios are explicitly declared. It shall not silently combine those scenarios with factory-gate results.

This PCR excludes assemblies rated at or below 1,000 V, empty enclosures or unequipped bases, individual circuit-breakers, switches, disconnectors, fuses, relays or other single apparatus, loose parts, cables and connectors, and complete prefabricated substations whose transformer and building functions dominate the product. These exclusions prevent substitution between CPC 46214, adjacent low-voltage assemblies, single high-voltage apparatus and parts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-fffa1be2` |
| classification_refs | CPC 3.0 `46214`, exact |
| covered_products | Equipped boards, consoles, cabinets and other bases for control or distribution at rated voltage exceeding 1,000 V, including AIS, GIS and hybrid assemblies |
| excluded_products | Assemblies at or below 1,000 V; empty enclosures; individual switching, protection or connection apparatus; loose parts; cables; complete prefabricated substations |
| representative_product | A finished, factory-tested medium- or high-voltage switchgear or controlgear assembly with declared switching, protection, control and distribution configuration |
| production_route | Purchased material and apparatus supply; enclosure and busbar fabrication where applicable; mechanical and electrical integration; medium filling or sealed-boundary verification where applicable; factory testing; packaging |
| market_state | Finished product, manufactured, at plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a finished, factory-tested equipped switchgear or controlgear assembly for the declared electric control, switching, protection and distribution functions |
| How much | 1 kg of net finished assembly mass at the plant gate |
| How well | The declared rated voltage is greater than 1,000 V, and rated current, current type and frequency, insulation level and medium, short-circuit withstand, switching or breaking capability, protection configuration and assembly type are specified |
| How long or cycle | Factory-gate results have no time scaling; lifecycle results shall state the manufacturer-declared reference service life and the maintenance and replacement scenario |
| reference_flow_link | The mass reference flow represents the configured finished assembly, not an empty cabinet or an individual apparatus |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage exceeding 1000 V `84db785c-a90a-48df-a23e-ebcbca35cc4c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | rated voltage; rated current; AC or DC and rated frequency where applicable; rated insulation level; short-time withstand current and duration; peak withstand or making capacity where applicable; breaking capacity and protection configuration; assembly type as AIS, GIS or hybrid; insulation and interruption medium identity and installed charge; gas-tight or vacuum boundary and monitoring or test method; busbar material; enclosure material and coating; installed switching, protection, control, measurement and auxiliary apparatus; net product mass; primary packaging and installation-accessory masses; indoor or outdoor service; applicable standard and factory-test status; production site, geography and reference year; manufacturer-declared service life; maintenance and replacement scenario; operational loss and auxiliary-power scenario when lifecycle modules are reported |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the net mass of the fully equipped, factory-tested assembly; exclude primary packaging and separately delivered installation accessories from the reference amount and report them separately. |
| `assembly_scaling` | all factory-gate inventory | Mass | kg per kg reference product | Divide the production-period inventory attributable to the declared configuration by its net finished mass; retain the unscaled batch totals for audit. |
| `material_mass_balance` | metals, polymers, ceramics, fluids and electronic assemblies | Mass | kg | Reconcile purchased input, product content, recovered return, scrap, waste and stock change by material family without assuming unmeasured scrap rates. |
| `medium_mass_balance` | insulating or interruption gas and fluid | Mass | kg | Record initial charge, recovered amount, returned amount, measured or calculated release and closing stock for the declared production period; a vacuum route records no gas charge but retains vacuum-boundary test evidence. |
| `electricity_conversion` | electricity records | Energy | kWh and MJ | Preserve metered kWh and use 1 kWh = 3.6 MJ when an energy conversion is required. |
| `use_energy` | operational losses and auxiliaries in lifecycle studies | Energy | kWh per declared service life | Calculate each operating mode from measured or declared power multiplied by annual hours and service years, including load-dependent losses and standby or control power separately. |
| `service_life_scaling` | maintenance, replacement and end-of-life modules | Time | year | Use the manufacturer-declared reference service life and disclose every replacement count and timing; do not apply an undisclosed category-default lifetime. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | factory-gate core | Include purchased materials and apparatus, inbound transport when included in the declared study, on-site fabrication, assembly, medium handling, factory testing, inspection, production waste treatment and primary packaging through finished product at plant gate. | `pep-psr-0005-2023` |
| `boundary_equipped_assembly` | product identity | Model the delivered equipped assembly and its installed switching, protection, control, measurement and auxiliary apparatus; an empty cabinet or one individual apparatus is outside this PCR. | `unsd-cpc-3-2025`; `iec-62271-1-2021`; `iec-62271-200-2021` |
| `boundary_conditional_lifecycle` | lifecycle extensions | Include installation, use, maintenance, replacement and end of life only as separately identified modules with declared geography, electricity, loading, operating hours, service life, recovery and treatment scenarios. | `pep-psr-0005-2023`; `epd-cpcr-switchgear-2024` |
| `boundary_medium_integrity` | gas-, fluid- or vacuum-dependent equipment | Include filling, recovery, factory losses and integrity tests for gas or fluid systems; for vacuum interrupters include the installed component and boundary verification, while use-phase leakage or failure is scenario-dependent. | `iec-62271-1-2021`; `iec-62271-200-2021` |
| `boundary_same_category` | recursive CPC 46214 input | Record a purchased equipped assembly of the same category as one upstream product input and do not unfold it inside the same foreground system unless the internal manufacture is measured and counted exactly once. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, subassemblies, energy carriers and packaging at the manufacturing-site gate, with supplier, geography and transport treatment declared |
| starting_condition_role | Separates supplier or background production from site-specific enclosure fabrication, busbar fabrication, integration, medium management, testing and packaging |
| product_classification_scope | Finished equipped control or distribution assemblies at rated voltage exceeding 1,000 V under CPC 3.0 `46214` |
| recursive_input_rule | A purchased product that itself meets CPC 46214 is represented by one upstream dataset; its internal stages shall not be duplicated in the receiving assembly process |
| upstream_dataset_requirement | Prefer supplier-specific datasets matching material grade, apparatus type, insulation medium, geography and reference year; otherwise use a disclosed representative dataset and document the mismatch |
| disclosure | State all exclusions, cut-offs, capital-goods treatment, transport assumptions, supplier-data substitutions, lifecycle modules and scenario boundaries |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `enclosure_busbar_fabrication` | Enclosure and busbar fabrication | conditional | Include when metal forming, machining, joining, plating, painting or busbar preparation occurs within the reporting organization | Converts raw or semi-finished material to assembly-ready structures and records scrap and surface-treatment burdens | measured finished parts and fabrication records per kg reference product |
| `final_assembly_testing_packaging` | Final assembly, medium management, factory testing and packaging | required | Always include for the finished equipped assembly; medium filling or vacuum-boundary checks apply to the installed technology | Integrates all apparatus and delivers the tested, packed reference product | HV board/cabinet final assembly and factory testing `f2685e52-4286-4243-8b9c-a5d649d833aa`, normalized to 1 kg output |
| `use_maintenance` | Use and maintenance | conditional | Include only when reporting lifecycle modules | Records electrical losses, auxiliary energy, leakage, service materials and replacements over the declared service life | declared operating, maintenance and replacement scenario |
| `end_of_life` | Decommissioning and end of life | conditional | Include only when reporting lifecycle modules | Records de-energization, medium recovery, dismantling, recycling and residual treatment | declared geography-specific end-of-life scenario |

### Process: Enclosure and busbar fabrication (`enclosure_busbar_fabrication`)

#### Inputs

##### Product flows

###### Enclosure, busbar and support materials (`fabrication_materials`)

Record each material family and grade entering on-site fabrication, including steel or aluminium enclosure material, copper or aluminium busbar material, coatings, fasteners and insulating supports.

- Selected flow: No default selected; choose supplier or market flows matching each material family, grade, recycled-content claim and geography
- Flow property / unit: Mass / kg
- Amount rule: measured issue to production plus verified stock change, disaggregated by material family
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources: `pep-psr-0005-2023`

###### Fabrication electricity and fuels (`fabrication_energy`)

Record metered electricity and fuels used for cutting, forming, machining, joining, surface treatment and ventilation attributable to the declared products.

- Selected flow: No default selected; choose site energy flows matching carrier, voltage level and geography
- Flow property / unit: Energy / kWh for electricity and MJ or carrier mass for fuels
- Amount rule: direct submetering, or documented equipment-time allocation when submetering is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources: `pep-psr-0005-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fabricated enclosure and busbars (`fabricated_structures`)

Record the measured mass transferred to final assembly, disaggregated into enclosure, busbars and supports.

- Selected flow: No default selected; use internal intermediate flows with documented material composition
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources:

##### Waste flows

###### Fabrication scrap and treatment residues (`fabrication_waste`)

Record metal scrap, coating residues, spent baths, abrasives and rejected parts by treatment route, distinguishing internally returned material from waste leaving the site.

- Selected flow: No default selected; choose waste flows matching material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch or internal-return records reconciled to the material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources: `pep-psr-0005-2023`

##### Elementary flows

### Process: Final assembly, medium management, factory testing and packaging (`final_assembly_testing_packaging`)

#### Inputs

##### Product flows

###### Assembly materials and installed apparatus (`assembly_components`)

Record the accepted enclosure and busbars plus every installed switching, protection, control, measurement and auxiliary apparatus family. Separately identify conductors, insulators, electronics, batteries where present, fasteners and other significant material families.

- Selected flow: No default selected; use supplier-specific or representative product flows matching component function, ratings, medium and geography
- Flow property / unit: Mass / kg and item counts retained as supporting attributes
- Amount rule: configuration-specific bill-of-material quantity reconciled to goods issue and net product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `pep-psr-0005-2023`; `iec-62271-200-2021`

###### Insulation or interruption medium (`insulation_medium`)

For gas- or fluid-filled equipment, record medium identity, composition, virgin or reclaimed status and measured installed charge. For vacuum interrupters, record no gas input here and retain the purchased interrupter and vacuum-boundary evidence with the assembly records.

- Selected flow: No default selected; choose an exact substance or product flow matching the declared medium and supply state
- Flow property / unit: Mass / kg
- Amount rule: measured filling minus recovered return, reconciled to installed charge, releases and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_medium_integrity`
- Sources: `iec-62271-1-2021`; `iec-62271-200-2021`

###### Assembly, testing and packaging energy and materials (`assembly_testing_packaging_inputs`)

Record electricity and other energy for integration, gas handling, vacuum or pressure tests, dielectric and functional tests, plus primary packaging by material.

- Selected flow: No default selected; choose exact site energy and packaging-material flows
- Flow property / unit: Energy / kWh and Mass / kg
- Amount rule: metered or documented equipment-time energy and measured configuration-specific packaging issue
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing_packaging`
- Sources: `pep-psr-0005-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished equipped switchgear or controlgear assembly (`reference_product`)

Record the net mass of the configured, accepted and factory-tested assembly at the plant gate. The output shall match CPC 46214 and all required qualifiers.

- Selected flow: Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage exceeding 1000 V `84db785c-a90a-48df-a23e-ebcbca35cc4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net finished product after factory acceptance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_testing_packaging`
- Sources:

##### Waste flows

###### Assembly rejects, offcuts and packaging waste (`assembly_waste`)

Record rejected components, conductor offcuts, wiring waste, test failures, packaging offcuts and other wastes by material and destination.

- Selected flow: No default selected; choose waste flows matching material and documented treatment
- Flow property / unit: Mass / kg
- Amount rule: measured waste dispatch and return records allocated to the declared configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing_packaging`
- Sources: `pep-psr-0005-2023`

##### Elementary flows

###### Factory release of insulating or interruption medium (`factory_medium_release`)

Record measured or mass-balance-derived releases by exact substance. Do not represent vacuum loss as a material emission.

- Selected flow: No default selected; choose the exact elementary flow for the declared released substance
- Flow property / unit: Mass / kg
- Amount rule: measured recovery-system loss or documented charge-recovery-stock mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_medium_integrity`
- Sources: `iec-62271-1-2021`

### Process: Use and maintenance (`use_maintenance`)

#### Inputs

##### Product flows

###### Operational electricity (`use_electricity`)

When lifecycle modules are included, record electrical losses and auxiliary consumption for each operating mode using the declared loading and annual hours.

- Selected flow: No default selected; choose an electricity supply flow matching the use geography and voltage level
- Flow property / unit: Energy / kWh
- Amount rule: sum of measured or declared mode power multiplied by mode hours and service years
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_maintenance`
- Sources: `pep-psr-0005-2023`

###### Maintenance materials and replacement apparatus (`maintenance_replacements`)

Record scheduled and corrective service materials, replacement apparatus, replenished medium and their transport under the declared maintenance plan.

- Selected flow: No default selected; choose exact material and apparatus flows matching the maintenance event
- Flow property / unit: Mass / kg and item count as a supporting attribute
- Amount rule: event quantity multiplied by the declared number of events or replacements
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_maintenance`
- Sources: `pep-psr-0005-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Replaced apparatus and service waste (`maintenance_waste`)

Record removed apparatus, spent service materials and recovered medium by actual or scenario treatment route.

- Selected flow: No default selected; choose waste flows matching material and treatment
- Flow property / unit: Mass / kg
- Amount rule: event-specific removed quantity multiplied by the declared number of events
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_maintenance`
- Sources: `pep-psr-0005-2023`

##### Elementary flows

###### Use-phase medium release (`use_medium_release`)

For gas- or fluid-containing equipment, record release by exact substance from measured service records or an explicitly documented scenario. EU studies shall separately demonstrate applicable fluorinated-gas compliance.

- Selected flow: No default selected; choose the exact elementary flow for the declared released substance
- Flow property / unit: Mass / kg
- Amount rule: measured service loss or declared charge multiplied by documented event-specific loss, summed over service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_maintenance`
- Sources: `eu-2024-573-fgas`

### Process: Decommissioning and end of life (`end_of_life`)

#### Inputs

##### Product flows

##### Waste flows

###### Retired equipped assembly (`retired_assembly`)

Record the retired product mass entering de-energization, medium recovery and dismantling under the declared scenario.

- Selected flow: No default selected; choose a waste flow explicitly representing the retired equipped assembly
- Flow property / unit: Mass / kg
- Amount rule: reference product mass plus declared replacement remnants entering end-of-life treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life`
- Sources: `pep-psr-0005-2023`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered metals, components and medium (`recovered_products`)

Record only outputs that meet the declared system-boundary and quality criteria for recovery as products; keep burdens and credits consistent with the allocation rule.

- Selected flow: No default selected; choose recovered-product flows matching material quality and destination
- Flow property / unit: Mass / kg
- Amount rule: scenario or facility record for recovered output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life`
- Sources: `pep-psr-0005-2023`

##### Waste flows

###### Residual treatment fractions (`end_of_life_residuals`)

Record non-recovered metal, polymers, ceramics, electronics, fluids and other residuals by treatment route.

- Selected flow: No default selected; choose waste flows matching material and treatment
- Flow property / unit: Mass / kg
- Amount rule: scenario or facility record reconciled to retired input, recovered products and releases
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life`
- Sources: `pep-psr-0005-2023`

##### Elementary flows

###### End-of-life medium release (`end_of_life_medium_release`)

Record the exact unrecovered substance released during decommissioning or treatment; do not infer an emission when verified full recovery is documented.

- Selected flow: No default selected; choose the exact elementary flow for the declared released substance
- Flow property / unit: Mass / kg
- Amount rule: initial residual charge minus recovered and transferred amount, reconciled with measured release and closing stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life`
- Sources: `eu-2024-573-fgas`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | all foreground processes | Prefer direct measurement, physical segregation and configuration-specific bills of material so that inputs, energy, waste and releases are assigned without allocation. | `pep-psr-0005-2023` |
| `causal_allocation` | shared equipment or batch operations | When direct separation is unavailable, use a documented causal driver such as machine time, test time, treatment area or metered energy that reflects resource use. | `pep-psr-0005-2023` |
| `mass_allocation_fallback` | shared production with no defensible causal driver | Allocate by net output mass only as a fallback, identify the affected flows and products, disclose the allocation share and test sensitivity when it may affect conclusions. | `pep-psr-0005-2023` |
| `recycling_separation` | scrap and end-of-life recovery | State the chosen recycling system boundary and allocation method; do not combine recycled-content benefits, scrap credits and end-of-life credits in a way that double counts the same recovery. | `pep-psr-0005-2023` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_records` | `enclosure_busbar_fabrication` | material, energy, accepted part and waste records | ERP issue, scale ticket, meter, stock and waste-transfer record | material id and grade; quantity; unit; batch; product configuration; meter reading; scrap destination; opening and closing stock | reconcile production orders, meters, scale records and waste dispatches | kg, kWh, MJ | each batch or monthly meter period | representative continuous 12-month period or complete production campaign | each fabrication site | configuration-specific direct records first; otherwise documented causal allocation | calibrated-meter evidence, production order, stock reconciliation and waste receipt |
| `cp_assembly_bom` | `final_assembly_testing_packaging` | installed components and net product composition | approved bill of materials, goods issue and as-built configuration | component id; supplier; quantity; mass; material; rating; medium; serial or batch; accepted substitution | reconcile approved BOM, as-built record, purchase receipt and net weighing | kg and item | each product configuration | reference-year production | each assembly site | retain each material and apparatus family before normalization | controlled BOM revision, supplier declaration and as-built sign-off |
| `cp_medium_integrity` | `final_assembly_testing_packaging` | medium charge, recovery, release and sealed-boundary verification | cylinder or vessel weighing, recovery log, leak test, pressure or density record, vacuum test | substance; composition; supplied; charged; recovered; returned; stock change; measured release; test method; result; instrument id | close a substance mass balance for each batch and link integrity evidence to serial or configuration | kg and test result | each filling or integrity-test event | reference-year production | each handling and test location | sum measured events by exact substance and configuration | calibrated scale, recovery log, leak or vacuum test report and operator sign-off |
| `cp_testing_packaging` | `final_assembly_testing_packaging` | test energy, packaging, rejects and accepted reference product | test report, meter, packaging issue, scale and reject record | rating; test standard; result; energy; packaging material; packaging mass; net product mass; reject disposition | link factory acceptance, net weighing, energy and packaging records to configuration | kg and kWh | each assembly or production batch | reference-year production | each assembly and test site | accepted output and attributable records divided by accepted net mass | factory-test report, calibrated scale, meter and packaging issue record |
| `cp_use_maintenance` | `use_maintenance` | losses, auxiliary electricity, maintenance, replacements and medium events | type-test or measurement report, loading profile, maintenance plan and service log | operating mode; power; loading; hours; years; event; material; replacement; charge; recovered; released | combine measured or declared performance with the explicit use and service scenario | kWh, kg, item and year | each operating mode and service event | declared reference service life | declared use geography and installed population | calculate each mode and event separately, then sum over life | applicable test report, manufacturer data, maintenance plan and service evidence |
| `cp_end_of_life` | `end_of_life` | retired input, recovered outputs, residuals and releases | dismantling study, facility record, recovery log and scenario source | input mass; material fraction; recovered product; treatment route; medium recovered; medium released; geography | reconcile scenario or facility mass flows by material and exact substance | kg | each scenario or facility campaign | scenario reference year | declared treatment geography | conserve mass by material family and disclose unclassified remainder | facility record, licensed-handler evidence, recovery certificate or documented scenario source |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | factory-gate flows | normalized amount = attributable production-period amount divided by accepted net reference-product mass | attributable amount; accepted net mass | amount per 1 kg reference product |  |
| `reconcile_material_balance` | each material family | input + opening stock = product content + internally returned material + waste + closing stock; report unresolved imbalance and investigate rather than force closure | material issue; product content; return; waste; stock | material-family balance and unresolved difference | `pep-psr-0005-2023` |
| `calculate_medium_release` | gas or fluid handling | release = supplied + opening stock - installed charge - recovered return - transferred amount - closing stock, unless direct calibrated release measurement is more reliable | exact-substance mass records | release by substance | `iec-62271-1-2021` |
| `calculate_use_energy` | each use mode | lifetime energy = power in kW multiplied by annual operating hours multiplied by service years; sum modes and state load assumptions | measured or declared power; annual hours; years | kWh per declared service life | `pep-psr-0005-2023` |
| `calculate_replacements` | replacement apparatus and service materials | lifetime quantity = event quantity multiplied by declared event count; include replaced item treatment separately | event quantity; count; treatment | lifetime input and waste quantities | `pep-psr-0005-2023` |
| `reconcile_end_of_life` | end-of-life scenario | retired input mass = recovered product + residual treatment + exact-substance release + disclosed stock or unclassified remainder | dismantling and recovery records | scenario mass balance | `pep-psr-0005-2023` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_ratings` | reference product | Configuration and ratings shall demonstrate an equipped control or distribution assembly above 1,000 V and distinguish it from an empty enclosure or individual apparatus. | nameplate, approved drawing, single-line diagram, BOM and factory-test report |
| `dq_bom_completeness` | product composition | Report busbar and enclosure materials plus installed apparatus, electronics, insulators, medium, batteries where present and primary packaging; explain omitted material families. | controlled as-built BOM, supplier declarations and net mass reconciliation |
| `dq_traceability` | primary data | Every site-specific value shall link to a dated record, site, product configuration, unit, aggregation method and responsible data owner. | record index and audit trail |
| `dq_medium_boundary` | gas, fluid and vacuum technologies | Gas or fluid records shall close the exact-substance balance and link leakage tests; vacuum equipment shall link purchased interrupter identity and vacuum-boundary verification. | charge and recovery logs, calibrated weighing, leak or vacuum test report |
| `dq_temporal_geographic` | all datasets | State data period, production site, supplier geography, use geography and treatment geography and document proxy mismatches. | dataset metadata and source register |
| `dq_scenario_transparency` | lifecycle modules | Disclose service life, loading, hours, grid, losses, auxiliary consumption, maintenance, replacements, medium loss, recovery and end-of-life assumptions. | scenario sheet, calculation workbook and supporting tests or service plan |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | product identity | Confirm the product is an equipped electric-control or distribution assembly with rated voltage exceeding 1,000 V; reject low-voltage assemblies, empty cabinets, single apparatus and parts. | `unsd-cpc-3-2025` |
| `validate_reference` | reference flow | Confirm the selected product flow UUID, Mass property UUID, Units of mass UUID, 1 kg reference amount and net finished mass basis. |  |
| `validate_ratings` | required qualifiers | Require rated voltage, rated current, current type and frequency, insulation level, short-circuit withstand and duration, making or breaking capability where applicable, protection configuration and factory-test status. | `iec-62271-1-2021`; `iec-62271-200-2021` |
| `validate_materials` | composition | Require busbar and enclosure material and coating, installed medium and charge, installed apparatus families, net mass and separately reported packaging and installation accessories. | `pep-psr-0005-2023` |
| `validate_medium` | gas, fluid or vacuum boundary | Require exact medium identity and charge plus charge-recovery-release balance and integrity-test method for gas or fluid equipment; require purchased-interrupter identity and vacuum-boundary test evidence for vacuum equipment. | `iec-62271-1-2021`; `iec-62271-200-2021` |
| `validate_mass_balance` | foreground and end-of-life inventories | Reconcile material and exact-substance inputs, product, return, stock, waste, recovery and release; report every unresolved difference without inserting an assumed balancing flow. | `pep-psr-0005-2023` |
| `validate_processes` | process completeness | Include final assembly, applicable medium management, factory testing and packaging; include on-site fabrication and each lifecycle process when its inclusion condition is met. | `pep-psr-0005-2023` |
| `validate_use` | lifecycle modules | When use or maintenance is reported, require declared service life, operating modes, loading, hours, losses, auxiliary power, replacements, maintenance and medium-loss scenario; otherwise mark those modules excluded. | `pep-psr-0005-2023` |
| `validate_eu_fgas` | EU fluorinated-gas equipment | For an EU scenario containing regulated fluorinated gas, record the applicable containment, leak-check or monitoring basis, recovery and service restrictions, and commissioning prohibition or derogation status without treating the regulation as a universal product-performance threshold. | `eu-2024-573-fgas` |
| `validate_allocation` | shared operations and recycling | Confirm allocation was avoided where possible, any causal driver or mass fallback is documented, and recycling benefits are not double counted. | `pep-psr-0005-2023` |
| `validate_quality` | dataset release | Confirm source traceability, temporal and geographic representativeness, configuration-specific completeness and disclosure of every proxy, exclusion and scenario assumption. | `pep-psr-0005-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-specific foreground unit process for a finished equipped medium- or high-voltage switchgear or controlgear assembly |
| downstream_use | Product carbon footprint, EPD, product comparison under equivalent technical function and scenario, process dataset, or lifecycle model |
| allowed_use | Factory-gate or explicitly modular lifecycle studies whose product ratings, assembly technology, material composition, production geography, reference year and scenario match the declared dataset |
| excluded_use | Low-voltage assemblies; empty enclosures; individual circuit-breakers or other single apparatus; unmatched voltage or insulation technology; undisclosed generic substitution; legal compliance claims based only on LCA results |
| required_metadata | PCR id; CPC 3.0 code; reference flow UUID; all required qualifiers; process inclusions; site and year; data sources; allocation; exclusions; lifecycle scenario modules |
| required_quality_disclosure | Primary-data coverage; BOM and mass-balance completeness; supplier and background proxies; energy measurement method; medium or vacuum-boundary evidence; uncertainty and scenario sensitivity |
| update_trigger | Change in rated configuration, busbar or enclosure material, installed apparatus, insulation or interruption medium, manufacturing site or route, service-life or use scenario, regulation affecting the declared scenario, or material background-data revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes, class 462 and subclass 46214, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-08) | Exact category identity and separation from high-voltage single apparatus, low-voltage equipped assemblies and parts |
| `iec-62271-1-2021` | standard | IEC 62271-1:2017+A1:2021, High-voltage switchgear and controlgear - Part 1: Common specifications for alternating current switchgear and controlgear. https://webstore.iec.ch/en/publication/71439 (retrieved 2026-08-08) | Voltage scope, common ratings, service conditions, gas and vacuum technology declarations and integrity evidence |
| `iec-62271-200-2021` | standard | IEC 62271-200:2021, High-voltage switchgear and controlgear - Part 200: AC metal-enclosed switchgear and controlgear for rated voltages above 1 kV and up to and including 52 kV. https://webstore.iec.ch/en/publication/63466 (retrieved 2026-08-08) | Metal-enclosed assembly scope, compartments, interlocks, resistance, short-circuit and internal-arc testing context |
| `pep-psr-0005-2023` | official_guidance | PEP ecopassport, PSR-0005-ed3.1-EN-2023 08 12, Product Specific Rules for Electrical Switchgear and Controlgear Solutions. https://register.pep-ecopassport.org/documents/public/PSR-0005-EN (retrieved 2026-08-08) | Product composition, reference product, boundary, primary-data traceability, allocation, operational energy, maintenance, replacement and end-of-life modelling |
| `epd-cpcr-switchgear-2024` | official_guidance | International EPD System, 2024:06-c-PCR-001 Electrical switchgear and controlgear solutions, adoption of PSR-0005, valid through 2028-06-06. https://www.environdec.com/pcr-library/pcr_029113de-2d79-4a79-9ba1-08dd782e0347 (retrieved 2026-08-08) | Independent PCR-library status and applicability of the switchgear product-specific rules |
| `eu-2024-573-fgas` | standard | Regulation (EU) 2024/573 of the European Parliament and of the Council of 7 February 2024 on fluorinated greenhouse gases. https://eur-lex.europa.eu/eli/reg/2024/573/2024-02-20/eng (retrieved 2026-08-08) | EU-specific containment, leak-check, monitoring, recovery, service and commissioning disclosures for fluorinated-gas switchgear |
