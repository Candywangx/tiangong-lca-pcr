---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electrical-resistors-except-heating-resistors
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Electrical resistors (except heating resistors)

## 1. Scope and Applicability

This PCR applies to foreground production of finished electrical resistors in CPC 47120, including fixed resistors and variable resistors such as rheostats and potentiometers, but excluding heating resistors. It covers discrete surface-mount, leaded, chassis-mounted, preset, single-turn, and multi-turn products when their principal function is electrical resistance or adjustable electrical resistance.

The production route begins with purchased constituent materials, parts, and same-category intermediate products at the declared factory gate and ends with tested, marked, packaged finished resistors at the plant gate. The producer must declare the resistor family and technology actually represented; route-specific operations that do not occur must not be modelled as if they did.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electrical-resistors-except-heating-resistors |
| classification_refs | CPC 3.0 `47120`, Electrical resistors (except heating resistors), exact |
| covered_products | Finished fixed resistors and resistor networks; film, foil, composition, wirewound, and metal-strip resistor technologies; variable resistors including rheostats, potentiometers, presets, and multi-turn types |
| excluded_products | Heating resistors; unassembled resistive elements or generic resistive and conductive materials; semiconductor devices, capacitors, and other broader electronic-component groups; resistor-containing assemblies whose principal function is not the resistor; installation, use, maintenance, and end-of-life activities |
| representative_product | A finished, electrically tested resistor conforming to the declared fixed or variable resistor specification |
| production_route | Production mix, at plant, covering material preparation, resistive-element formation, termination and mechanical assembly, and finishing, testing, marking, and pack-out; non-applicable route steps are declared |
| market_state | Finished product, manufactured and released for sale at the plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished electrical resistors, except heating resistors, with the declared product and performance specification |
| How much | 1 kg net mass of accepted finished resistor product |
| How well | Conforming to the declared fixed or variable type, technology, resistance value or adjustment range, tolerance, rated dissipation, temperature coefficient or stability class, termination, housing or package, and applicable electrical inspection criteria |
| How long or cycle | One production lot or reporting-period production campaign represented at the plant gate; service life is not part of the reference quantity |
| reference_flow_link | The functional unit is realized by the Tiangong product flow and mass reference below; the foreground package normalizes accepted output to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Electrical resistors (except heating resistors) `9bee079d-ab55-44db-b1a4-72d61a856d61` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fixed or variable resistor family; resistive-element technology; surface-mount, leaded, chassis-mounted, preset, single-turn, or multi-turn form; resistance value or adjustment range; tolerance; rated dissipation; temperature coefficient or stability class; termination and housing or package; production geography and period; production mix; plant gate; net product mass; conformity basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted finished resistor output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory quantities to 1 kg net mass of accepted finished product at the declared plant gate; packaging is inventoried separately and is not included in net product mass. |
| `piece_to_mass_conversion` | records available only as item counts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass using a measured, product-specific average net mass from a documented sample of the represented lot; record sample size, total sample mass, scale identity, and calculation. |
| `wet_or_solution_mass` | process chemicals reported as solutions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered solution mass and concentration separately; do not substitute active-substance mass for total purchased solution mass without an explicit calculation record. |
| `internal_rework_mass` | internally recirculated resistor material or units | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Track internal rework separately from external inputs and saleable output so that recirculation is not double-counted. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground production | Include constituent-material and part receiving and preparation, resistive-element formation, termination and mechanical assembly, route-applicable coating or encapsulation, electrical testing, marking, and pack-out through accepted product at the plant gate. | `vishay-fixed-resistor-basics-2008` |
| `boundary_route_declaration` | all represented product families | Declare whether the product is fixed or variable and identify the actual technology and form; include contact, wiper, adjustment-mechanism, shaft, housing, or multi-turn assembly only when present, and do not add absent route steps. | `iec-60115-1-2020`; `iec-60393-1-2008`; `vishay-fixed-resistor-basics-2008` |
| `boundary_upstream_links` | purchased products and services | Link purchased substrates, cores, resistive materials, wires or foils, termination and contact materials, housings, coatings, encapsulants, process chemicals, packaging, energy carriers, water, and external treatment services to suitable upstream datasets; retain supplier-primary data where available. | `eu-pef-2021-2279` |
| `boundary_direct_releases` | site-controlled operations | Include measured or permitted direct air emissions, wastewater releases, and wastes caused by included processes, with the treatment or destination declared. | `eu-pef-2021-2279` |
| `boundary_exclusions` | downstream and capital activities | Exclude distribution beyond the plant gate, installation, use, maintenance, and end of life. Exclude capital goods only when the study method permits and disclose that exclusion; do not exclude material or energy flows merely because they are small. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | purchased constituent materials, parts, utilities, and any same-category intermediate resistor product received at the manufacturing site |
| starting_condition_role | foreground gate-to-gate starting inventory with upstream links and declared supplier or internal-production status |
| product_classification_scope | CPC 3.0 `47120`, including fixed and variable electrical resistors and excluding heating resistors |
| recursive_input_rule | A same-category resistor input is recorded as an explicit product input with its mass and production status; its upstream burden is linked once and is not recreated by recursively applying this PCR inside the same foreground package. |
| upstream_dataset_requirement | Use geographically, temporally, and technologically representative upstream datasets for all material purchased inputs, utilities, packaging, and external treatment services; disclose proxies and data gaps. |
| disclosure | Declare product family, technology, form, plant location, reporting period, included production stages, same-category inputs, outsourced steps, packaging basis, exclusions, and upstream dataset choices. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| material_receiving_and_preparation | Material receiving and preparation | required |  | foreground material preparation | kg prepared constituent materials and parts |
| resistive_element_formation | Resistive-element formation | required | Include the declared film, foil, composition, wirewound, metal-strip, or other qualifying resistor route; route-specific deposition, printing, pressing, winding, etching, cutting, and trimming operations apply only when performed. | foreground component manufacture | kg accepted formed resistive elements |
| termination_and_mechanical_assembly | Termination and mechanical assembly | required | Include fixed-resistor termination and body assembly; additionally include contact, wiper, adjustment mechanism, shaft, housing, or multi-turn assembly for applicable variable resistors. | foreground product assembly | kg assembled resistors before final finishing and testing |
| finishing_testing_and_packout | Finishing, electrical testing, marking, and pack-out | required | Include route-applicable coating, encapsulation, curing, plating, marking, screening, final inspection, and packaging. | foreground finishing and release | kg accepted finished electrical resistors |

### Process: Material receiving and preparation (`material_receiving_and_preparation`)

#### Inputs

##### Product flows

###### Purchased constituent materials and parts (`purchased_constituent_materials_and_parts`)

Record all purchased substrates or cores, resistive materials, wire, foil or strip, termination and contact materials, housings, adjustment parts, coatings, encapsulants, process chemicals, and other parts that enter production. Preserve product-family and supplier-lot identity.

- Selected flow: Select supplier- and material-specific product flows for each constituent material or part
- Flow property / unit: Mass / kg
- Amount rule: measured received or issued mass, corrected for documented returns and stock changes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted prepared material and parts issued to included production
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_material_records`
- Sources: `vishay-fixed-resistor-basics-2008`
- Range: Provisional material-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg/kg accepted prepared material and parts
  - Basis: per kg accepted prepared material and parts issued to production; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Prepared materials and parts issued to production (`prepared_materials_and_parts`)

Record weighed materials and parts released from receiving, preparation, mixing, cutting, or kitting to the next included process. Keep route-specific material groups separately identifiable.

- Selected flow: Select material- or part-specific intermediate product flows
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass plus documented prepared stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepared_material_output`
- Sources:

##### Waste flows

###### Rejected incoming material and preparation waste (`receiving_and_preparation_waste`)

Record rejected, spilled, trimmed, expired, or otherwise discarded material leaving the process, separated by material and treatment destination.

- Selected flow: Select material- and treatment-specific waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch mass or reconciled container mass by waste stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted prepared material and parts issued to production
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_waste_records`
- Sources:
- Range: Provisional receiving-waste screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg accepted prepared material and parts
  - Basis: per kg accepted prepared material and parts issued to production; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Resistive-element formation (`resistive_element_formation`)

#### Inputs

##### Product flows

###### Prepared resistive-element materials (`prepared_resistive_element_materials`)

Record the prepared ceramic or other base, resistive film or paste constituents, composition compound, resistance wire, foil, or metal strip used by the declared route.

- Selected flow: Select technology-specific prepared material product flows
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass by material and production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted formed resistive elements
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_element_material_records`
- Sources: `vishay-fixed-resistor-basics-2008`
- Range: Provisional element-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg/kg accepted formed resistive elements
  - Basis: per kg accepted formed resistive elements; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formation-process electricity (`element_formation_electricity`)

Record metered electricity for route-applicable deposition, printing, pressing, curing, winding, etching, cutting, or laser and mechanical trimming operations.

- Selected flow: Select geography- and voltage-specific electricity supply flow
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption, or documented allocation from a calibrated shared meter using machine operating time and rated or measured load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed resistive elements
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_element_utility_records`
- Sources: `vishay-fixed-resistor-basics-2008`
- Range: Provisional formation-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 1000
  - Unit: kWh/kg accepted formed resistive elements
  - Basis: per kg accepted formed resistive elements; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Accepted formed resistive elements (`accepted_formed_resistive_elements`)

Record the measured mass of accepted formed elements transferred to termination and assembly after route-applicable trimming or intermediate inspection.

- Selected flow: Select the technology-specific formed resistor-element intermediate product flow
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: process reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_element_output_records`
- Sources:
- Range: Process quantitative-reference identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg accepted formed resistive elements used as the process quantitative reference
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-pef-2021-2279`

##### Waste flows

###### Element-formation scrap and residues (`element_formation_scrap_and_residues`)

Record trimmings, spent paste or solution, rejected elements, sludge, and other residues by material composition and treatment destination. Internal return to the same process is tracked as rework, not external waste.

- Selected flow: Select material- and treatment-specific waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment or container mass reconciled to lot-level scrap records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted formed resistive elements
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_element_waste_records`
- Sources:
- Range: Provisional element-waste screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg accepted formed resistive elements
  - Basis: per kg accepted formed resistive elements; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct releases from element formation (`element_formation_direct_releases`)

Record measured or permit-calculated direct releases to air or water from route-applicable coating, printing, etching, cleaning, drying, curing, cutting, and trimming operations; do not substitute purchased chemical mass for an emitted amount.

- Selected flow: Select substance- and compartment-specific elementary flows
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from monitored concentration and treated exhaust or effluent volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed resistive elements
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_element_release_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional direct-release screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg accepted formed resistive elements
  - Basis: per kg accepted formed resistive elements; replace with measured or permit-calculated records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Termination and mechanical assembly (`termination_and_mechanical_assembly`)

#### Inputs

##### Product flows

###### Formed resistive elements (`formed_elements_for_assembly`)

Record accepted formed elements entering termination and assembly, preserving technology and lot identity.

- Selected flow: Select the matching technology-specific formed resistor-element intermediate product flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled resistors before final finishing and testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_input_records`
- Sources:
- Range: Provisional formed-element input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg/kg assembled resistors
  - Basis: per kg assembled resistors before final finishing and testing; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Termination, contact, and mechanical parts (`termination_contact_and_mechanical_parts`)

Record terminals, lead wires, end caps, metallization or plating chemicals, conductive joining materials, and body or housing parts. For variable resistors, additionally record contacts, wipers, tracks, adjustment mechanisms, shafts, and multi-turn parts when present.

- Selected flow: Select part- and material-specific product flows
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass or count converted with documented product-specific part mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled resistors before final finishing and testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_part_records`
- Sources: `iec-60393-1-2008`; `vishay-fixed-resistor-basics-2008`

###### Assembly electricity (`assembly_electricity`)

Record metered electricity for welding, brazing, soldering, pressing, fastening, plating, curing, and mechanical adjustment performed in this process.

- Selected flow: Select geography- and voltage-specific electricity supply flow
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption, or documented allocation from a calibrated shared meter using machine operating time and rated or measured load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled resistors before final finishing and testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_utility_records`
- Sources:
- Range: Provisional assembly-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 1000
  - Unit: kWh/kg assembled resistors
  - Basis: per kg assembled resistors before final finishing and testing; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Assembled resistors before final finishing and testing (`assembled_resistors`)

Record the measured mass of assembled fixed or variable resistors transferred to final finishing and testing.

- Selected flow: Select the matching assembled-resistor intermediate product flow
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_output_records`
- Sources:
- Range: Process quantitative-reference identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg assembled resistors used as the process quantitative reference
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-pef-2021-2279`

##### Waste flows

###### Assembly scrap and rejected parts (`assembly_scrap_and_rejected_parts`)

Record rejected elements, termination and lead scrap, contact and housing rejects, joining residues, and plating waste by material and treatment destination.

- Selected flow: Select material- and treatment-specific waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass reconciled to production rejects and external dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled resistors before final finishing and testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste_records`
- Sources:
- Range: Provisional assembly-waste screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg assembled resistors
  - Basis: per kg assembled resistors before final finishing and testing; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Finishing, electrical testing, marking, and pack-out (`finishing_testing_and_packout`)

#### Inputs

##### Product flows

###### Assembled resistors for finishing (`assembled_resistors_for_finishing`)

Record assembled fixed or variable resistors entering route-applicable coating, encapsulation, curing, plating, marking, electrical testing, and pack-out.

- Selected flow: Select the matching assembled-resistor intermediate product flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished electrical resistors
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_input_records`
- Sources:
- Range: Provisional assembled-product input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg/kg accepted finished electrical resistors
  - Basis: per kg accepted finished electrical resistors; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing, marking, and packaging materials (`finishing_marking_and_packaging_materials`)

Record route-applicable coatings, encapsulants, lacquers, marking media, cleaning chemicals, carriers, reels, trays, bags, cartons, and other packaging separately from net product mass.

- Selected flow: Select material-specific product flows
- Flow property / unit: Mass / kg
- Amount rule: measured issue or purchase mass corrected for documented stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished electrical resistors
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_records`
- Sources: `vishay-fixed-resistor-basics-2008`
- Range: Provisional finishing-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg accepted finished electrical resistors
  - Basis: per kg accepted finished electrical resistors; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and test electricity (`finishing_and_test_electricity`)

Record metered electricity for coating or encapsulation, curing, marking, electrical screening, inspection, handling, and packaging equipment.

- Selected flow: Select geography- and voltage-specific electricity supply flow
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption, or documented allocation from a calibrated shared meter using machine operating time and rated or measured load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished electrical resistors
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utility_records`
- Sources:
- Range: Provisional finishing-and-test electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 1000
  - Unit: kWh/kg accepted finished electrical resistors
  - Basis: per kg accepted finished electrical resistors; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Accepted finished electrical resistors (`accepted_finished_electrical_resistors`)

Record accepted output after electrical testing, inspection, marking, and release. Normalize the complete foreground inventory to 1 kg net mass of this output.

- Selected flow: Electrical resistors (except heating resistors) `9bee079d-ab55-44db-b1a4-72d61a856d61`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted finished product; normalize the reported dataset to 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished electrical resistors
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_and_qc_records`
- Sources: `iec-60115-1-2020`; `iec-60393-1-2008`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg accepted finished electrical resistors used as the reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-pef-2021-2279`

##### Waste flows

###### Off-specification product and finishing waste (`off_specification_product_and_finishing_waste`)

Record off-specification units not internally reworked, coating and encapsulation residues, spent cleaning materials, marking waste, and packaging scrap by material and treatment destination.

- Selected flow: Select material- and treatment-specific waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or dispatched waste mass after subtracting documented internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished electrical resistors
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste_records`
- Sources:
- Range: Provisional finishing-waste screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg accepted finished electrical resistors
  - Basis: per kg accepted finished electrical resistors; replace with collected records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct releases from finishing (`finishing_direct_releases`)

Record measured or permit-calculated air and water releases from coating, encapsulation, curing, cleaning, marking, and other included finishing operations.

- Selected flow: Select substance- and compartment-specific elementary flows
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from monitored concentration and treated exhaust or effluent volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished electrical resistors
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_release_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional finishing-release screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg accepted finished electrical resistors
  - Basis: per kg accepted finished electrical resistors; replace with measured or permit-calculated records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | independently measurable products, lines, or batches | Avoid allocation by subdividing product families, production lines, batches, and process records whenever inputs and outputs can be measured separately. | `eu-pef-2021-2279` |
| `allocation_internal_rework` | internal rework and recirculation | Keep rework inside the process where it is reused, record its mass, and count only additional inputs, utilities, direct releases, and final losses caused by rework; do not treat the recirculated mass as a new external input or saleable co-product. | `eu-pef-2021-2279` |
| `allocation_shared_utilities` | shared meters and common services | Allocate shared electricity, fuel, compressed air, water, and common treatment first by measured process consumption; when measurement is unavailable, use a documented causal physical driver such as machine operating time multiplied by measured or rated load. | `eu-pef-2021-2279` |
| `allocation_co_products` | jointly produced saleable products | After subdivision has been exhausted, use a documented physical relationship that reflects the causal production relationship; if no defensible physical relationship can be established, use economic allocation based on a representative price period and report the sensitivity. | `eu-pef-2021-2279` |
| `allocation_scrap` | recoverable scrap and residues | Record treatment up to the foreground gate and disclose the applied recycling or substitution convention. Do not assign an avoided-product credit or zero burden without the governing study method and explicit evidence. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receiving_material_records | material_receiving_and_preparation | Purchased constituent materials and parts | purchase, receiving, issue, and inventory records | material or part id; supplier; lot; mass or count; concentration when applicable; receipt and issue dates; opening and closing stock; returns | calibrated weighing or count converted with documented part mass, reconciled to inventory | kg | per receipt and issue | representative reporting period, normally at least twelve consecutive months unless a shorter campaign is justified | declared manufacturing site | sum by material and lot; add opening stock and subtract closing stock and returns; normalize to prepared output | scale calibration; supplier specification; inventory reconciliation |
| cp_prepared_material_output | material_receiving_and_preparation | Prepared materials and parts issued to production | preparation and issue record | material id; lot; issued mass; prepared stock change; destination process | calibrated weighing and inventory issue record | kg | per lot or issue | same period as represented production | declared manufacturing site | sum accepted issues and stock change by route | scale calibration; signed issue record |
| cp_receiving_waste_records | material_receiving_and_preparation | Rejected incoming material and preparation waste | waste log and dispatch record | waste id; composition; mass; date; destination; internal rework status | calibrated scale or reconciled container mass | kg | per waste movement | same period as represented production | declared manufacturing site | sum external waste by stream; exclude documented internal rework | waste manifest; scale calibration |
| cp_element_material_records | resistive_element_formation | Prepared resistive-element materials | batch issue record | material id; lot; issue mass; returned mass; route; batch id | calibrated weighing and batch reconciliation | kg | per batch | same period as represented production | element-formation area at declared site | net issued mass by material and route | scale calibration; batch record |
| cp_element_utility_records | resistive_element_formation | Formation-process electricity | submeter or equipment energy record | meter id; start and end reading; machine id; operating time; measured or rated load; batch id | calibrated submeter preferred; otherwise documented causal allocation | kWh | continuous, shift, or batch | same period as represented production | element-formation area at declared site | subtract readings and allocate only documented shared consumption | meter calibration; allocation worksheet |
| cp_element_output_records | resistive_element_formation | Accepted formed resistive elements | transfer and inspection record | lot; technology; gross mass; accepted mass; rejected mass; date | calibrated weighing at transfer | kg | per lot | same period as represented production | element-formation area at declared site | sum accepted transfer mass by technology | scale calibration; inspection release |
| cp_element_waste_records | resistive_element_formation | Element-formation scrap and residues | scrap log, waste manifest, and inventory reconciliation | waste id; composition; mass; date; destination; rework quantity | calibrated weighing or container reconciliation | kg | per batch and dispatch | same period as represented production | element-formation area at declared site | sum external waste by stream after removing documented rework | waste manifest; mass-balance reconciliation |
| cp_element_release_records | resistive_element_formation | Direct releases from element formation | monitoring and permit record | substance; compartment; concentration; exhaust or effluent volume; time; treatment status | direct monitoring or concentration-volume calculation | kg | per monitoring event with reporting-period coverage | same period as represented production | controlled emission points at declared site | calculate and sum releases by substance and compartment | laboratory report; instrument calibration; calculation sheet |
| cp_assembly_input_records | termination_and_mechanical_assembly | Formed resistive elements | transfer record | lot; technology; transferred mass; date | calibrated weighing | kg | per lot | same period as represented production | assembly area at declared site | sum transferred mass by represented product family | scale calibration; transfer record |
| cp_assembly_part_records | termination_and_mechanical_assembly | Termination, contact, and mechanical parts | issue and bill-of-material records | part or material id; lot; mass or count; product-specific part mass; returned quantity; product family | calibrated weighing or count-to-mass conversion with documented sample | kg | per lot or batch | same period as represented production | assembly area at declared site | net issue by part and product family | scale calibration; bill of materials; sampling record |
| cp_assembly_utility_records | termination_and_mechanical_assembly | Assembly electricity | submeter or equipment energy record | meter id; readings; machine id; operating time; load; batch id | calibrated submeter preferred; otherwise documented causal allocation | kWh | continuous, shift, or batch | same period as represented production | assembly area at declared site | subtract readings and allocate only documented shared consumption | meter calibration; allocation worksheet |
| cp_assembly_output_records | termination_and_mechanical_assembly | Assembled resistors before final finishing and testing | transfer and inspection record | lot; product family; gross mass; accepted mass; rejected mass; date | calibrated weighing at transfer | kg | per lot | same period as represented production | assembly area at declared site | sum accepted transfer mass by product family | scale calibration; inspection release |
| cp_assembly_waste_records | termination_and_mechanical_assembly | Assembly scrap and rejected parts | scrap log and waste manifest | waste id; composition; mass; date; destination; rework quantity | calibrated weighing or container reconciliation | kg | per batch and dispatch | same period as represented production | assembly area at declared site | sum external waste by stream after removing documented rework | waste manifest; mass-balance reconciliation |
| cp_finishing_input_records | finishing_testing_and_packout | Assembled resistors for finishing | transfer record | lot; product family; transferred mass; date | calibrated weighing | kg | per lot | same period as represented production | finishing area at declared site | sum transferred mass by product family | scale calibration; transfer record |
| cp_finishing_material_records | finishing_testing_and_packout | Finishing, marking, and packaging materials | issue, purchase, and stock record | material id; lot; issue mass; purchase mass; opening and closing stock; returns; packaging type | calibrated weighing and inventory reconciliation | kg | per issue with period reconciliation | same period as represented production | finishing and pack-out areas at declared site | net consumption by material; packaging reported separately from product mass | scale calibration; inventory reconciliation |
| cp_finishing_utility_records | finishing_testing_and_packout | Finishing and test electricity | submeter or equipment energy record | meter id; readings; machine id; operating time; load; batch id | calibrated submeter preferred; otherwise documented causal allocation | kWh | continuous, shift, or batch | same period as represented production | finishing, test, and pack-out areas at declared site | subtract readings and allocate only documented shared consumption | meter calibration; allocation worksheet |
| cp_final_product_and_qc_records | finishing_testing_and_packout | Accepted finished electrical resistors | production, weighing, and quality release record | product code; lot; fixed or variable family; technology; form; resistance or range; tolerance; rated dissipation; stability descriptor; net accepted mass; packaging mass; test status; date | calibrated net-mass weighing linked to electrical test and release records | kg | per released lot | same period as represented production | declared manufacturing site and plant gate | sum accepted net product mass; normalize all included flows to 1 kg | scale and test-equipment calibration; lot release; product specification |
| cp_finishing_waste_records | finishing_testing_and_packout | Off-specification product and finishing waste | reject, rework, and waste dispatch record | product or waste id; composition; mass; rework quantity; date; destination | calibrated weighing and reject reconciliation | kg | per lot and dispatch | same period as represented production | finishing and pack-out areas at declared site | sum external waste after subtracting documented internal rework | reject log; waste manifest; mass balance |
| cp_finishing_release_records | finishing_testing_and_packout | Direct releases from finishing | monitoring and permit record | substance; compartment; concentration; exhaust or effluent volume; time; treatment status | direct monitoring or concentration-volume calculation | kg | per monitoring event with reporting-period coverage | same period as represented production | controlled emission points at declared site | calculate and sum releases by substance and compartment | laboratory report; instrument calibration; calculation sheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | all included inventory rows | normalized amount = reporting-period amount / accepted finished net product mass × 1 kg | aggregated protocol record; accepted net product mass from `cp_final_product_and_qc_records` | amount per 1 kg accepted finished electrical resistors | `eu-pef-2021-2279` |
| `convert_count_to_mass` | part or product records available as counts | mass = item count × measured product-specific mean item mass; the mean is total calibrated sample mass divided by sample count | count record; sampled item count; calibrated sample mass | kg material, parts, or accepted product |  |
| `calculate_direct_release` | concentration-and-volume emission records | released mass = monitored concentration × treated exhaust or effluent volume, with explicit compatible-unit conversion and treatment status | concentration; flow or volume; monitoring period; unit conversion | kg substance released to the declared compartment | `eu-pef-2021-2279` |
| `reconcile_process_mass` | each process and reporting period | mass discrepancy = external material inputs + opening work-in-progress − accepted transfers − external wastes − closing work-in-progress; internal rework is reported but cancels from the external balance | material, output, waste, stock, and rework protocols | documented mass-balance discrepancy and investigation status | `eu-pef-2021-2279` |
| `allocate_shared_energy` | shared electricity or fuel meter | process energy = shared-meter consumption × documented causal driver for the process / sum of the same driver for all users | meter readings; operating time; measured or rated load, or another justified physical driver | kWh or MJ assigned to the included process | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and production mix | Preserve product code and lot linkage to fixed or variable family, technology, form, resistance or range, tolerance, rated dissipation, stability descriptor, termination, housing or package, and conformity result. | product specification; bill of materials; route sheet; lot release record |
| `dq_technological_representativeness` | foreground and upstream data | Foreground records must represent the declared resistor technologies and forms; upstream datasets must match material grade and production technology where material. Document any proxy. | technology coverage matrix; supplier data; proxy justification |
| `dq_geographical_representativeness` | utilities, upstream inputs, and treatment | Use datasets and mixes representative of the declared manufacturing site and supplier or treatment geography; document mismatches. | site address; supplier origin; utility contract; dataset metadata |
| `dq_time_representativeness` | reporting-period data | Prefer a continuous representative period covering seasonal and production-mix variation, normally at least twelve consecutive months; justify a shorter campaign and disclose data age. | reporting calendar; production schedule; dated records |
| `dq_measurement_and_precision` | measured mass, energy, and releases | Identify measurement equipment, calibration status, resolution, sampling method, and calculation steps sufficient to reproduce material amounts and direct releases. | calibration certificates; sampling plan; calculation workbook |
| `dq_completeness_and_balance` | all included processes | Reconcile material inputs, accepted transfers, product, work-in-progress changes, internal rework, wastes, and direct releases; investigate material discrepancies and disclose unresolved gaps without applying an undocumented cut-off. | process mass balances; exception log; completeness review |
| `dq_primary_and_secondary_data` | foreground collection and upstream links | Use site- or company-specific primary data for directly controlled foreground processes and document the source, representativeness, and quality of each secondary dataset. | meter and production records; supplier records; secondary-dataset register; data-quality rating |
| `dq_restricted_substances` | products placed on regulated markets | When applicable, maintain current material declarations, exemption status, and risk-based analytical evidence for restricted substances; screening and confirmatory testing must use the applicable current IEC 62321 parts and jurisdictional requirements. | supplier declarations; bill of materials; exemption register; accredited laboratory report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_identity` | product category and reference flow | The represented output must be a finished fixed or variable electrical resistor within CPC 47120 and must not be a heating resistor, generic resistive material, unassembled element, broader electronic-component mix, or resistor-containing assembly with another principal function. | `unsd-cpc-3-0-structure`; `iec-60115-1-2020`; `iec-60393-1-2008` |
| `validate_reference_flow` | functional unit and quantitative reference | The reference output must use product flow `9bee079d-ab55-44db-b1a4-72d61a856d61`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, normalized to exactly 1 kg net accepted finished product. |  |
| `validate_required_qualifiers` | foreground package metadata | Every required qualifier in section 3 must be present and consistent with product, bill-of-material, route, test, and release records. | `iec-60115-1-2020`; `iec-60393-1-2008` |
| `validate_process_route` | process map and inventory | Each included route step and conditional variable-resistor assembly must match the declared product family and technology; absent operations must not receive invented flows, and outsourced operations must be linked and disclosed. | `vishay-fixed-resistor-basics-2008` |
| `validate_collection_links` | collected or calculated inventory rows | Every collected or calculated amount must link to a listed collection protocol and retain the specified raw fields, period, site scope, aggregation, and quality evidence. | `eu-pef-2021-2279` |
| `validate_mass_balance` | each process and full foreground system | Material inputs, accepted transfers, stock changes, internal rework, product, wastes, and direct releases must be reconciled; any unresolved discrepancy must be quantified and makes validation inconclusive. | `eu-pef-2021-2279` |
| `validate_allocation` | shared processes, co-products, and recoverable scrap | Applied subdivision, causal driver, allocation basis, price period, recycling convention, and sensitivity must comply with section 7 and be disclosed wherever relevant. | `eu-pef-2021-2279` |
| `validate_completeness` | included inventory | No material, energy, water, direct-release, waste, or treatment flow may be omitted solely because it is small; all exclusions, data gaps, and proxies must be disclosed and justified. | `eu-pef-2021-2279` |
| `validate_restricted_substance_evidence` | regulated-market conformity disclosure | If restricted-substance conformity is claimed, the applicable jurisdiction, current exemptions, supplier evidence, test method, laboratory, sample, date, and result must be documented; a screening result alone must not be presented as universal legal compliance. | `eu-rohs-2011-65-eu`; `iec-62321-series` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_product_system; unit_process_or_aggregated_process_dataset |
| downstream_use | foreground_data_package; process; lifecyclemodel; comparative or non-comparative LCA subject to matching scope |
| allowed_use | Production of finished electrical resistors except heating resistors when product family, technology, form, performance qualifiers, geography, period, production mix, and plant gate match the represented data |
| excluded_use | Heating resistors; raw or unassembled resistive materials; generic electronic components; downstream distribution, installation, use, maintenance, or end-of-life modelling without additional datasets |
| required_metadata | canonical PCR id; CPC 3.0 code; reference flow UUIDs; required qualifiers; plant and geography; reporting period; production mix; process coverage; outsourced steps; upstream datasets; allocation and recycling conventions; conformity basis |
| required_quality_disclosure | protocol coverage; primary-data share; technological, geographical, and time representativeness; measurement and sampling evidence; mass-balance results; proxies; gaps; exclusions; allocation sensitivity; restricted-substance evidence when claimed |
| update_trigger | Change in product scope, resistor technology or form, plant or route, bill of materials, energy or treatment system, allocation convention, applicable regulation or standard, Tiangong identity, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, CPC 47120, 2023, https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf, retrieved 2026-08-09 | official product-category identity and exclusion of heating resistors |
| `iec-60115-1-2020` | standard | IEC 60115-1:2020, Fixed resistors for use in electronic equipment — Part 1: Generic specification, https://webstore.iec.ch/en/publication/28476, retrieved 2026-08-09 | fixed-resistor scope, terminology, performance qualifiers, inspection, and test context |
| `iec-60393-1-2008` | standard | IEC 60393-1:2008, Potentiometers for use in electronic equipment — Part 1: Generic specification, https://webstore.iec.ch/en/publication/2017, retrieved 2026-08-09 | variable-resistor and potentiometer scope, forms, terminology, inspection, and test context |
| `vishay-fixed-resistor-basics-2008` | handbook | Vishay, Basics of Linear Fixed Resistors, Technical Note TN0002, revision 23 October 2008, https://www.vishay.com/docs/28771/basics.pdf, retrieved 2026-08-09 | fixed-resistor technology families, materials, formation, termination, trimming, coating, marking, and test route evidence |
| `eu-rohs-2011-65-eu` | standard | Directive 2011/65/EU on restriction of hazardous substances in electrical and electronic equipment, current consolidated text, https://eur-lex.europa.eu/eli/dir/2011/65/2026-07-01/eng, retrieved 2026-08-09 | jurisdiction-dependent restricted-substance conformity and exemption evidence |
| `iec-62321-series` | standard | IEC 62321 series, Determination of certain substances in electrotechnical products; current IEC 62321-3-1:2026 screening methods page, https://webstore.iec.ch/en/publication/66313, retrieved 2026-08-09 | risk-based restricted-substance screening and analytical-method disclosure |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02021H2279-20211230, retrieved 2026-08-09 | foreground primary data, subdivision and allocation, no undocumented cut-off, calculation, representativeness, completeness, and data-quality rules |
