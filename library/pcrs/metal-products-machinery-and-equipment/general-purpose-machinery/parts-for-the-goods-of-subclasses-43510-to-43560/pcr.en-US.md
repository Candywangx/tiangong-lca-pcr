---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43510-to-43560
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclasses 43510 to 43560

## 1. Scope and Applicability

This PCR applies to separately supplied parts designed solely or principally for pulley tackle, hoists, winches, capstans, jacks, cranes, lifting frames, works trucks, fork-lift trucks, lifts, escalators, moving walkways, conveyors, and other lifting or handling machinery within the CPC 43510 to 43560 family. It covers production up to the factory gate of the finished part.

Complete lifting or handling machines, CPC 43580 buckets, shovels, grabs and grips, general-purpose fasteners or other standard items classified in their own right, manufacturing services on customer-owned inputs, installation, maintenance, use, and end-of-life are excluded. The representative inventory is a separately delivered, uncoated alloy-steel part made from hot-worked bar stock by cutting, machining, finishing, and inspection. A dataset for another material, forming route, coating, or assembled part shall declare that variant and replace or add one atomic row for every actual boundary-crossing material, chemical, waste, and emission.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43510-to-43560 |
| classification_refs | CPC 3.0: 43570, exact |
| covered_products | Separately supplied parts designed solely or principally for goods in the CPC 43510 to 43560 family |
| excluded_products | Complete machines; CPC 43580 buckets, shovels, grabs and grips; independently classified standard items; services; installation; maintenance; use; end-of-life |
| representative_product | One uncoated, machined alloy-steel lifting or handling equipment part delivered at the producing factory gate |
| production_route | Hot-worked alloy-steel bar receipt, cutting, machining, mechanical finishing, inspection, with conditional on-site heat treatment, thermal cutting, and aqueous cleaning |
| market_state | Finished, separately supplied part at factory gate; unpackaged; mass, material grade, dimensions, treatment state, surface condition, and intended parent-machine family declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A separately supplied part that meets the declared drawing, material, dimensional, surface-condition, and acceptance requirements for its stated lifting or handling equipment application |
| How much | 1 kg net mass of accepted finished part |
| How well | Conforming to the declared drawing revision, material grade, tolerance class, treatment state, surface condition, and inspection status |
| How long or cycle | One production lot represented by the reporting period; no use-stage service life is included |
| reference_flow_link | The reference flow is the measured net mass of accepted finished parts leaving the producing factory gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished lifting and handling equipment part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | intended parent-machine family; part name and drawing number/revision; material and alloy grade; net finished mass; manufacturing route; heat-treatment state; coating or surface condition; dimensional or tolerance class; acceptance status; production geography; reporting period; recycled-content claim basis; unpackaged factory-gate state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-balance rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry, clean net mass at the declared factory-gate state. Exclude transport packaging and separately supplied accessories. Retain weighing records and the allocation from lot output to accepted output. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Retain the metered or invoiced unit, conversion factor, and converted MJ. Do not combine electricity with fuel or purchased heat. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at declared reference conditions. If invoices use energy, retain the supplier conversion and reference conditions before expressing the Tiangong flow in m3. |

## 5. System Boundary

The foreground boundary begins when externally supplied materials, utilities, and components arrive at the producing site and ends with the accepted, unpackaged part at the factory gate. Upstream production and delivery of purchased inputs are represented by linked background datasets. The foreground includes the actual cutting, machining, finishing, inspection, and any declared on-site heat treatment, thermal cutting, cleaning, joining, coating, or other route-specific operation used for the reported part.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_input_output_inventory` | all foreground processes | Record each actual raw material, fuel, energy carrier, process chemical, water input, product, waste, and direct elementary emission as a separate exchange. Retain a process flow sheet showing where wastes and emissions arise. | `eu-smitheries-foundries-bat-2024` |
| `boundary_route_disclosure` | product variants | Include only operations actually used for the declared part and disclose which forming, machining, heat-treatment, cleaning, joining, coating, and inspection steps are on-site or outsourced. | `eu-smitheries-foundries-bat-2024` |
| `boundary_category_exclusions` | product identity | Exclude complete lifting or handling machinery and the separately classified CPC 43580 buckets, shovels, grabs and grips from this parts PCR. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Externally supplied materials, components, fuels, electricity, gases, and water as received at the producing site |
| starting_condition_role | Foreground collection begins at site receipt; upstream production and delivery remain linked background processes |
| product_classification_scope | Separately supplied parts solely or principally for the CPC 43510 to 43560 lifting and handling equipment family |
| recursive_input_rule | A purchased CPC 43570 part incorporated into another reported part remains a distinct technosphere input with its upstream dataset; an internally transferred intermediate is not reclassified as a new reference product |
| upstream_dataset_requirement | Link a geographically, technologically, temporally, and product-state appropriate upstream dataset for every purchased material, component, fuel, electricity supply, gas, water supply, and outsourced treatment |
| disclosure | Declare part identity, drawing revision, parent-machine family, material/alloy, gross input and net output masses, manufacturing and treatment route, outsourced steps, scrap destination, geography, reporting period, and factory-gate state |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_manufacturing` | Material preparation, machining, finishing, and inspection | `required` | Always included for the representative machined alloy-steel part | Foreground production | 1 kg accepted finished part |
| `onsite_heat_treatment` | On-site natural-gas heat treatment | `conditional` | Include only when the declared part receives on-site natural-gas-fired heat treatment | Foreground thermal treatment | Accepted heat-treated part mass allocated to the reference output |
| `aqueous_cleaning` | On-site aqueous cleaning | `conditional` | Include only when process water crosses the site boundary for cleaning or rinsing the declared part | Foreground finishing | Accepted cleaned part mass allocated to the reference output |

### Process: Material preparation, machining, finishing, and inspection (`part_manufacturing`)

#### Inputs

##### Product flows

###### Hot-worked alloy-steel bar stock (`alloy_steel_bar_input`)

This is the mass of alloy-steel bar stock received for the representative machined-part route.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted bar-stock mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input`
- Sources: `eu-smitheries-foundries-bat-2024`

###### Purchased electricity (`electricity_input`)

Electricity used by covered cutting, machining, finishing, inspection, and allocated auxiliary equipment is recorded separately from fuels.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or invoiced electricity allocated to the reported lot and converted to MJ with a documented factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_input`
- Sources: `eu-smitheries-foundries-bat-2024`

###### Industrial oxygen for thermal cutting (`industrial_oxygen_input`)

Oxygen is included only when thermal cutting using supplied industrial oxygen occurs within the foreground boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: supplier-metered or invoiced industrial oxygen consumed by the reported lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part produced with the thermal-cutting route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_industrial_oxygen`
- Sources: `eu-smitheries-foundries-bat-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished part (`output_finished_lifting_handling_part`)

This is the accepted net output mass of the separately supplied part at the declared factory-gate state. Its exact Tiangong product UUID remains unresolved.

- Selected flow: Finished lifting and handling equipment part
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass normalized to 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_output`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Segregated post-industrial steel scrap (`post_industrial_steel_scrap`)

Clean alloy-steel offcuts and machining chips leaving the foreground process as a segregated waste flow are weighed separately from contaminated residues.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of segregated steel offcuts and chips leaving the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_output`
- Sources: `eu-smitheries-foundries-bat-2024`

##### Elementary flows

### Process: On-site natural-gas heat treatment (`onsite_heat_treatment`)

#### Inputs

##### Product flows

###### Gaseous natural gas (`natural_gas_input`)

Natural gas is recorded only for the declared on-site gas-fired heat-treatment route.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or invoiced gaseous natural gas allocated to the heat-treated production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part receiving on-site gas-fired heat treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas`
- Sources: `eu-smitheries-foundries-bat-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_co2_output`)

Direct fossil carbon dioxide is included only for natural gas combusted within the declared foreground boundary; upstream electricity emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or verified site combustion-emissions ledger amount allocated to the heat-treated production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part receiving on-site gas-fired heat treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_fossil_co2`
- Sources: `eu-smitheries-foundries-bat-2024`

### Process: On-site aqueous cleaning (`aqueous_cleaning`)

#### Inputs

##### Product flows

###### Process water for cleaning and rinsing (`process_water_input`)

Process water is included only when it crosses the site boundary for the declared cleaning or rinsing operation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered process-water mass allocated to the cleaned production lot, net of documented closed-loop reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part receiving on-site aqueous cleaning
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-smitheries-foundries-bat-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared manufacturing operations | Prefer subdivision and direct metering by machine, operation, production order, or lot. Where direct metering is unavailable, allocate shared inputs and outputs using a documented causal driver such as machine time, processed mass, or measured power-time. |  |
| `allocation_rejects_rework` | rejects and rework | Include the inputs and outputs of internal rework in the reported lot. Exclude rejected mass from accepted reference output and disclose whether it is reworked, recycled, or discarded. |  |
| `allocation_scrap` | post-industrial steel scrap | Treat segregated steel scrap as a waste output at the factory gate. Do not subtract an avoided-virgin-material credit inside this attributional foreground inventory; disclose any downstream recycling model separately. |  |
| `allocation_multi_product` | unavoidable shared multi-product operation | If subdivision and causal allocation are not feasible, use a documented mass allocation for materially similar outputs; use economic allocation only when physical causality is demonstrably unsuitable, and report the prices, period, and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input` | `part_manufacturing` | alloy-steel bar input | purchase, receiving, issue, and return records | material identity; heat/lot; gross issued mass; returned mass; moisture/contamination correction if any | reconcile calibrated scale or verified ERP issue records to the production order | kg | each lot | full reporting period | all covered production lines | sum net issued mass and divide by accepted finished output mass | purchase certificate; material certificate; scale calibration; lot reconciliation |
| `cp_energy_input` | `part_manufacturing` | purchased electricity | meter and invoice records | opening/closing readings; submeter value; invoice quantity; conversion factor; allocation driver | reconcile site meter, submeters, and invoices; allocate only covered operations | MJ | monthly and each production campaign when submetered | full reporting period | all covered operations and allocated auxiliaries | convert documented source unit to MJ, subtract excluded loads, and divide by accepted output mass | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_industrial_oxygen` | `part_manufacturing` | industrial oxygen input | supplier meter, cylinder, or invoice records | supplied volume; opening/closing stock; returned stock; reference temperature and pressure; allocation driver | reconcile consumption and stock change for thermal cutting | m3 | each lot or delivery cycle | all thermal-cutting campaigns in the reporting period | all applicable thermal-cutting equipment at the producing site | allocate consumed volume to thermally cut accepted output mass | supplier specification; invoice; stock ledger; meter certificate |
| `cp_finished_output` | `part_manufacturing` | accepted finished part output | final inspection and weighing records | part identity; drawing revision; count; unit mass or lot mass; rejected mass; acceptance status | weigh accepted output after final finishing and before transport packaging | kg | each lot | full reporting period | all accepted product in scope | sum accepted net mass; normalize inventory to 1 kg | calibrated scale record; inspection release; lot traceability |
| `cp_scrap_output` | `part_manufacturing` | post-industrial steel scrap | scrap-bin and dispatch records | alloy family; offcut mass; chip mass; contamination status; destination | weigh segregated offcuts and chips and reconcile with dispatch records | kg | each lot or bin dispatch | full reporting period | all covered machining lines | sum segregated steel scrap and allocate by production order or processed mass | scale calibration; bin identity; recycler receipt; mass-balance reconciliation |
| `cp_natural_gas` | `onsite_heat_treatment` | gaseous natural gas input | meter and invoice records | meter readings; invoiced volume; reference conditions; allocation driver | reconcile furnace or site meter to invoice and isolate covered heat-treatment campaigns | m3 | each campaign and monthly | all applicable heat-treatment campaigns | all applicable heat-treatment furnaces at the producing site | allocate by metered furnace use or documented heat-treatment load | meter calibration; invoice; furnace log; allocation worksheet |
| `cp_direct_fossil_co2` | `onsite_heat_treatment` | direct fossil carbon dioxide output | stack measurement or verified emissions ledger | measured CO2 mass or ledger amount; fuel identity; monitoring period; allocation driver | use site measurement or a separately verified facility combustion ledger; do not substitute upstream electricity emissions | kg | each monitoring period | all applicable heat-treatment campaigns | all applicable on-site combustion units serving the covered heat-treatment route | allocate the verified direct emission to covered heat-treatment output | monitoring report; ledger verification; allocation worksheet |
| `cp_process_water` | `aqueous_cleaning` | process water input | meter, tank, and invoice records | inlet reading; make-up water; recovered water; discharged water; allocation driver | reconcile make-up water to the cleaning line water balance | kg | each lot and monthly | all applicable cleaning campaigns | all applicable aqueous-cleaning lines at the producing site | use net external make-up water and divide by accepted cleaned output mass | meter calibration; water balance; invoice; production log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount equals the covered lot amount divided by accepted net finished-part mass; the published reference output is then 1 kg | covered lot exchange amount; accepted output mass | exchange amount per 1 kg accepted finished part |  |
| `calc_mass_reconciliation` | representative steel route | reconcile alloy-steel input with accepted output, segregated steel scrap, measured rejects, returned stock, and documented stock change; explain the residual | net issued alloy-steel mass; accepted output mass; scrap; rejects; returns; stock change | lot mass-balance residual and completeness flag | `eu-smitheries-foundries-bat-2024` |
| `calc_energy_allocation` | shared electricity or natural-gas meters | allocate shared energy using directly metered consumption where available; otherwise use documented machine power-time, furnace load, or processed mass and retain excluded loads | meter or invoice total; submeter data; operating time; rated or measured power; production mass | allocated energy per covered lot |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Maintain drawing revision, parent-machine family, material grade, heat-treatment state, surface condition, and inspection release for every included lot. | drawing; material certificate; route card; inspection release |
| `dq_measurement` | mass, energy, gas, oxygen, and water records | Use calibrated meters or reconcile invoices and stock records; document conversion factors, reference conditions, and allocation drivers. | calibration certificates; invoices; stock ledgers; allocation worksheets |
| `dq_temporal` | foreground reporting period | Cover a representative continuous period or all campaigns in the declared period; disclose start/end dates, shutdowns, atypical campaigns, and missing records. | production calendar; meter coverage; exception log |
| `dq_completeness` | input/output inventory | Reconcile material, energy, water, waste, and direct-emission records against production orders and the process flow sheet; justify every omitted applicable exchange. | mass balance; energy reconciliation; water balance; input/output inventory |
| `dq_upstream` | purchased inputs and outsourced operations | Use upstream datasets compatible with the declared product state, geography, technology, and time; disclose proxies and cut-offs. | dataset metadata; supplier documentation; proxy register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail validation when the part name, intended parent-machine family, drawing revision, material grade, net mass, route, treatment state, surface condition, or factory-gate state is missing. | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | reference flow | Require exactly 1 kg accepted net finished-part mass and exclude transport packaging and rejected product from the reference amount. |  |
| `validate_atomic_inventory` | process inventory | Require one physical, chemical, waste, energy, or elementary exchange per inventory row; reject combined utilities, material families, waste groups, and emission groups. | `eu-smitheries-foundries-bat-2024` |
| `validate_conditional_routes` | conditional processes | Require natural gas and direct fossil CO2 rows only when on-site gas-fired heat treatment occurs, oxygen only when supplied oxygen is used in on-site thermal cutting, and process water only when on-site aqueous cleaning uses external make-up water. | `eu-smitheries-foundries-bat-2024` |
| `validate_mass_balance` | representative steel route | Require reconciliation of net alloy-steel input, accepted output, steel scrap, rejects, returns, and stock change; any residual shall be quantified and explained. | `eu-smitheries-foundries-bat-2024` |
| `validate_uuid_gap` | reference product identity | Keep the reference-product UUID empty until a public state-100 flow exactly identifies a separately supplied CPC 43570 part with mass property and compatible product state. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product-manufacturing dataset eligible for publication as a secondary_dataset or background_dataset after review |
| downstream_use | attributional cradle-to-factory-gate modelling of the declared lifting or handling equipment part and downstream assemblies that consume it |
| allowed_use | Use only for a part matching the declared parent-machine family, material/alloy, finished state, route, geography, period, and factory-gate boundary, or after a documented representativeness review |
| excluded_use | Complete lifting or handling machines; CPC 43580 attachments; parts with materially different material or production route without adaptation; installation; maintenance; use-stage operation; end-of-life; consequential recycling credit |
| required_metadata | PCR id and version; part name; parent-machine family; drawing revision; material/alloy; net mass; route; treatment and surface state; site and geography; period; allocation method; upstream dataset versions; unresolved reference-product UUID status |
| required_quality_disclosure | meter and scale coverage; allocation shares; mass-balance residual; missing or proxy data; outsourced operations; recycled-content claim basis; scrap destination; range-evidence gaps |
| update_trigger | drawing or material change; route or treatment change; supplier or energy mix change; site relocation; major process change; reporting data older than the declared validity period; confirmation of an exact reference-product UUID; new independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-05 | Official CPC 43570 identity and neighboring category exclusions |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-09-05 | Category context for lifting and handling equipment and separate CPC 43580 attachments |
| `eu-smitheries-foundries-bat-2024` | `official_guidance` | European Commission, Implementing Decision (EU) 2024/2974, ELI http://data.europa.eu/eli/dec_impl/2024/2974/2024-12-06, retrieved 2026-09-05 | Route-conditioned forming, machining, finishing, and heat-treatment decomposition; input/output inventory and monitoring of materials, fuels, energy, water, wastes, and emissions |
