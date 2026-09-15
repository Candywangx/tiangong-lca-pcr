---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.accounting-machines-cash-registers-postage-franking-machines-ticket-issuing-machines-an-3d465500
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Accounting machines, cash registers, postage-franking machines, ticket-issuing machines and similar machines, incorporating a calculating device (except point-of-sale terminals, ATMs and similar machines)

## 1. Scope and Applicability

This PCR covers factory-gate production of a finished accounting machine, cash register, postage-franking machine, ticket-issuing machine, or similar machine whose defining function incorporates a calculating device. It applies to electronic, electromechanical, and hybrid configurations delivered as complete, saleable machines.

Point-of-sale terminals, automated teller machines, and similar machines classified outside CPC 45141 are excluded. Stand-alone printers, vending machines, general-purpose computers, loose parts sold separately, distribution, installation, use, maintenance, and end-of-life are outside the default boundary. A study may extend beyond the factory gate only by declaring the additional stages and keeping their inventories separate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.accounting-machines-cash-registers-postage-franking-machines-ticket-issuing-machines-an-3d465500 |
| classification_refs | CPC 3.0: 45141 |
| covered_products | Accounting machines; cash registers; postage-franking machines; ticket-issuing machines; similar machines incorporating a calculating device |
| excluded_products | Point-of-sale terminals; automated teller machines; similar CPC 45142 machines; stand-alone printers; vending machines; loose replacement parts |
| representative_product | One complete electronic or electromechanical calculating transaction machine with product-specific controls, display or indicator, power supply, enclosure, and any declared printing, franking, ticketing, cash-drawer, or battery modules |
| production_route | Purchased product-specific components and subassemblies are received, assembled, programmed where applicable, functionally tested, inspected, and packed |
| market_state | Finished, conforming machine at the manufacturing site gate; net machine mass and included accessories and packaging are declared separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared accounting, cash-recording, postage-franking, ticket-issuing, or analogous calculation-backed transaction function |
| How much | One complete conforming machine |
| How well | Meets the manufacturer's declared calculation, input/output, safety, and functional-test specifications for the named configuration |
| How long or cycle | One finished unit delivered at the factory gate; operating lifetime and transactions during use are not part of this cradle-to-gate functional unit |
| reference_flow_link | The reference flow is the measured net mass in kg of the one complete machine that realizes the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | Measured net mass in kg of one complete conforming machine |
| Reference product flow | Accounting machines, cash registers, postage-franking machines, ticket-issuing machines and similar machines, incorporating a calculating device (except point-of-sale terminals, ATMs and similar machines) `07f6c98e-d1a3-41f2-984b-8b5e59191916` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Product subtype; model and configuration; calculation and transaction function; included display or indicator; included printing, franking, or ticketing mechanism; cash-drawer inclusion; battery inclusion and chemistry; included accessories; net machine mass; packaging excluded from net mass; manufacturing site and geography; production period; technology and test route |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `unit_rule_1` | reference machine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or otherwise verify the net mass of one conforming machine without shipping packaging; include built-in modules and accessories shipped as part of the declared machine. |
| `unit_rule_2` | component and packaging inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert supplier counts to installed or packed mass using product-specific measured unit masses and retain the count, sample size, and conversion record. |
| `unit_rule_3` | assembly electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 1 kWh = 3.6 MJ; identify voltage level, grid geography, and whether losses are included. |
| `unit_rule_4` | mass balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile component and packaging receipts, inventory change, finished output, rework returns, and each source-separated waste stream over the same reporting period before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Product-specific purchased components, subassemblies, packaging articles, and electricity delivered to the assembly site |
| starting_condition_role | Foreground manufacturing inputs with upstream production represented by supplier-specific or suitable secondary datasets |
| product_classification_scope | Finished CPC 45141 machines only; CPC 45142 terminals and ATMs and loose parts sold separately are outside this PCR identity |
| recursive_input_rule | If a complete CPC 45141 machine is used as an input for refurbishment or integration, record it as a distinct upstream product input and do not recursively apply this foreground assembly inventory to that input |
| upstream_dataset_requirement | Each purchased component, subassembly, packaging article, and electricity input requires a geographically and technologically representative upstream dataset; proxies must be disclosed and must not change flow identity |
| disclosure | Declare the exact product configuration, included modules and accessories, BOM coverage, net and packaged masses, site, period, allocation, excluded stages, data gaps, and proxy datasets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground manufacturing | Include receiving, product-specific assembly, programming where performed, functional testing, inspection, rework attributable to the reporting period, and final packaging through the factory gate. | `eu-environmental-footprint-2021` |
| `boundary_rule_2` | purchased inputs | Include upstream production of every environmentally relevant component, subassembly, packaging article, and energy input using linked upstream datasets; do not treat a purchased assembly as burden-free. | `eu-environmental-footprint-2021` |
| `boundary_rule_3` | product-specific data | Use the declared model's BOM and company-specific assembly, test, packaging, output, and waste data; a portfolio-average BOM is allowed only when the represented product family and weighting are disclosed. | `eu-environmental-footprint-2021` |
| `boundary_rule_4` | excluded stages | Exclude distribution after the factory gate, installation, use-phase electricity and consumables, maintenance, and end-of-life from the default dataset; disclose and model them as separate stages when the study scope includes them. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `machine_assembly_test_pack` | Component assembly, functional testing, inspection, rework, and packaging | `required` | Always included for a finished factory-gate machine; conditional component cards apply only when the declared model contains that component | foreground production | One complete conforming reference machine, normalized by measured net mass |

### Process: Component assembly, functional testing, inspection, rework, and packaging (`machine_assembly_test_pack`)

#### Inputs

##### Product flows

###### Populated printed circuit board assembly (`pcb_assembly`)

Record the measured installed mass of the populated control and calculation board assemblies in the product-specific BOM.

- Selected flow: Electronic components and PCB assemblies `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed mass from BOM receipts and assembly issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Injection-moulded plastic housing parts (`plastic_housing`)

Record the measured installed mass of moulded plastic housing parts, separated from packaging plastics.

- Selected flow: Injection molded plastic housing parts `fef5eb63-58bf-4bfb-9da9-9f5a3aa73084`
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed mass from BOM receipts and assembly issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Sheet-steel machine chassis component (`steel_chassis`)

Record the installed mass of the sheet-steel chassis or internal support frame when present; the Tiangong flow UUID remains unresolved.

- Selected flow: Sheet-steel machine chassis component
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed mass; include only when a sheet-steel chassis or internal support frame is present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Assembled liquid-crystal display module (`display_module`)

Record the installed mass of the LCD module only when the declared model includes an LCD; other indicator technologies require their own atomic flow row.

- Selected flow: LCD module, assembled `daedcb7b-760e-4acf-9a1c-3adb472c4eba`
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed mass; include only when an LCD module is present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Keypad assembly (`keypad_assembly`)

Record the installed mass of the complete keypad or key-switch input assembly when present; the Tiangong flow UUID remains unresolved.

- Selected flow: Keypad assembly
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed mass; include only when a keypad or key-switch assembly is present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Integrated thermal printer mechanism (`printer_mechanism`)

Record the installed mechanism mass when receipt printing, postage marking, or ticket printing is integrated; exclude paper consumables used after the factory gate.

- Selected flow: Integrated thermal printer mechanism
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed mass; include only when an integrated thermal printer mechanism is present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Electronic equipment power-supply unit (`power_supply_unit`)

Record the installed mass of the internal or dedicated external power-supply unit shipped with the machine; the Tiangong flow UUID remains unresolved.

- Selected flow: Electronic equipment power-supply unit
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed or shipped mass from the BOM
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Connectorized insulated electrical cable assembly (`cable_assembly`)

Record the installed and included cable-assembly mass, including a shipped mains lead when part of the declared product; the Tiangong flow UUID remains unresolved.

- Selected flow: Connectorized insulated electrical cable assembly
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed and shipped mass from the BOM
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Steel screws (`steel_screws`)

Record the installed mass of finished steel screws used to secure the machine; fasteners of another material require a separate atomic row.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed mass from BOM count multiplied by verified mean screw mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Cash-drawer assembly (`cash_drawer`)

Record the mass of a cash-drawer assembly only when it is integral to or shipped as part of the declared cash-register configuration; the Tiangong flow UUID remains unresolved.

- Selected flow: Cash-drawer assembly
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed or included mass; include only when a cash drawer is part of the declared machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Rechargeable lithium-ion battery pack (`battery_pack`)

Record the installed battery-pack mass only when a rechargeable lithium-ion pack is included; other battery chemistries require separate atomic rows.

- Selected flow: Rechargeable lithium-ion battery pack
- Flow property / unit: Mass / kg
- Amount rule: Product-specific installed mass; include only when a rechargeable lithium-ion battery pack is present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-environmental-footprint-2021`

###### Corrugated board shipping box (`corrugated_box`)

Record the mass of the corrugated board box used for the declared saleable unit, excluding corrugated transport packaging allocated to multiple units unless separately apportioned.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured box mass attributable to one reference machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `eu-environmental-footprint-2021`

###### Expanded polyethylene foam packaging insert (`foam_insert`)

Record the mass of expanded polyethylene protective inserts when present; the Tiangong flow UUID remains unresolved.

- Selected flow: Expanded polyethylene foam packaging insert
- Flow property / unit: Mass / kg
- Amount rule: Measured insert mass attributable to one reference machine; include only when this foam chemistry and form are used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `eu-environmental-footprint-2021`

###### Low-density polyethylene packaging bag (`polyethylene_bag`)

Record the mass of the low-density polyethylene protective bag when present; the Tiangong flow UUID remains unresolved.

- Selected flow: Low-density polyethylene packaging bag
- Flow property / unit: Mass / kg
- Amount rule: Measured bag mass attributable to one reference machine; include only when an LDPE bag is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `eu-environmental-footprint-2021`

###### Printed paper instruction insert (`printed_manual`)

Record the mass of printed paper instructions shipped with the machine; electronic-only documentation has no physical exchange in this row.

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass / kg
- Amount rule: Measured printed insert mass attributable to one reference machine; include only when physical instructions are shipped
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `eu-environmental-footprint-2021`

###### Assembly, testing, and packaging electricity (`assembly_electricity`)

Record metered purchased electricity for assembly, programming, functional testing, inspection, rework, and packaging, excluding electricity already represented inside purchased-component datasets.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated to the process and normalized to conforming output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources: `eu-environmental-footprint-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished conforming reference machine (`reference_machine`)

Record the measured net mass of conforming finished machines leaving the process, excluding shipping packaging mass.

- Selected flow: Accounting machines, cash registers, postage-franking machines, ticket-issuing machines and similar machines, incorporating a calculating device (except point-of-sale terminals, ATMs and similar machines) `07f6c98e-d1a3-41f2-984b-8b5e59191916`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of one complete conforming machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `un-cpc-3-0-structure-2025`; `eu-environmental-footprint-2021`

##### Waste flows

###### Rejected populated printed wiring board (`populated_board_waste`)

Record the measured mass of populated boards discarded from assembly or test and sent to the declared treatment route; exclude boards returned to usable inventory.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Measured source-separated waste mass net of rework and supplier returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-environmental-footprint-2021`

###### Injection-moulded plastic housing scrap (`plastic_housing_scrap`)

Record source-separated moulded housing parts discarded after damage, fitting, or inspection; the Tiangong flow UUID remains unresolved.

- Selected flow: Injection-moulded plastic housing scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured source-separated housing-part waste mass net of rework and supplier returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-environmental-footprint-2021`

###### Steel chassis scrap (`steel_scrap`)

Record source-separated steel chassis and support-frame scrap generated during fitting or rejection and sent to the declared treatment route.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: Measured source-separated steel waste mass net of rework and supplier returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-environmental-footprint-2021`

###### Corrugated cardboard packaging waste (`cardboard_waste`)

Record source-separated corrugated cardboard waste from damaged or trimmed product packaging at the assembly site.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Measured source-separated cardboard waste mass attributable to the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete conforming reference machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-environmental-footprint-2021`

##### Elementary flows

No direct elementary flow is prescribed generically for final assembly. Any measured site emission crossing the environment boundary must be added as its own chemically specific elementary-flow row and must not be replaced by an umbrella emission category.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared processes and meters | First subdivide production lines, work centres, test stations, and meters so that only inputs and outputs directly attributable to the declared machine are assigned. | `eu-environmental-footprint-2021` |
| `allocation_rule_2` | residual shared burdens | If subdivision is not practicable, use a documented causal physical driver such as machine-hours, test time, or metered energy; if no direct causal driver exists, apply a relevant physical relationship and disclose the sensitivity. | `eu-environmental-footprint-2021` |
| `allocation_rule_3` | rework and scrap | Assign rework energy and material losses to the reporting-period output that caused them. Report wastes at the factory boundary without avoided-burden credits; treatment burdens and any recovery credits belong in the selected downstream waste-treatment model. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `machine_assembly_test_pack` | installed product components and subassemblies | approved BOM, purchase receipt, issue record, count-to-mass sample | model_id; component_id; description; supplier; quantity_per_unit; unit_mass; installed_mass; return_mass; inclusion_condition | Reconcile approved product-specific BOM with material issues, returns, engineering changes, and measured unit masses | kg | Each model or engineering revision; reconcile at least once per reporting period | Full production period represented by the dataset | All assembly lines and shifts producing the declared model | Sum installed mass for conforming output; subtract usable returns; normalize by conforming machine count | BOM revision approval, scale calibration, sampling record, issue/return reconciliation |
| `cp_packaging_bom` | `machine_assembly_test_pack` | packaging articles and printed insert | packaging specification, packing issue record, unit-mass sample | model_id; packaging_item; material; quantity_per_unit; unit_mass; packed_units; damaged_mass | Weigh each concrete packaging article and reconcile issued quantities with packed output | kg | Each packaging revision; reconcile at least once per reporting period | Full production period represented by the dataset | All packing lines for the declared model | Attribute article mass to one packed unit; report bulk transport packaging separately | Approved packaging specification, scale calibration, sample log, issue reconciliation |
| `cp_electricity` | `machine_assembly_test_pack` | assembly, test, rework, and packaging electricity | calibrated meter and production log | meter_id; opening_reading; closing_reading; unit; line; shift; model; conforming_units; rework_units; downtime_exclusion | Read dedicated meters; where shared, retain the allocation driver and reconciliation | kWh and MJ | At least monthly and for each material production change | Same production period as output and wastes | All included assembly, test, inspection, rework, and packing operations | Net metered use minus documented out-of-boundary loads; allocate under section 7; divide by conforming output; convert kWh to MJ | Meter calibration, bills, reading log, allocation worksheet, production log |
| `cp_output_mass` | `machine_assembly_test_pack` | conforming reference-machine output | calibrated scale and released-production record | model_id; serial_or_batch; net_mass; included_accessories; packaging_mass; released_count | Weigh a representative sample or every unit and reconcile with quality release records | kg | Each model/configuration and reporting period | Full production period represented by the dataset | All included production lines and shifts | Calculate configuration-specific mean net mass and multiply by released count; keep packaging separate | Scale calibration, sampling plan, release record, serial/batch traceability |
| `cp_waste_mass` | `machine_assembly_test_pack` | source-separated production wastes | calibrated waste scale, transfer note, rework and supplier-return log | waste_type; source_operation; gross_mass; tare_mass; net_mass; destination; treatment_route; return_or_rework_status | Weigh each source-separated waste stream and reconcile transfers, rework, and supplier returns | kg | Each transfer; aggregate monthly and over the reporting period | Same production period as inputs and output | All included assembly, test, rework, and packing areas | Sum net discarded mass by concrete waste identity and destination; exclude usable rework and supplier returns | Scale calibration, transfer note, destination evidence, rework/return reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | count-to-mass component and packaging records | installed_or_packed_mass = verified_quantity_per_unit × measured_mean_unit_mass | approved quantity per unit; calibrated unit-mass sample | kg per reference machine | `eu-environmental-footprint-2021` |
| `calc_rule_2` | electricity | electricity_MJ_per_machine = (net_kWh × 3.6 × allocation_fraction) / conforming_machine_count | meter readings; excluded loads; allocation driver; conforming output | MJ per reference machine | `eu-environmental-footprint-2021` |
| `calc_rule_3` | waste | waste_kg_per_machine = source_separated_discarded_mass / conforming_machine_count | net waste mass; rework and return exclusions; conforming output | kg waste per reference machine | `eu-environmental-footprint-2021` |
| `calc_rule_4` | mass balance | mass_balance_difference = total material inputs - finished net product - shipped packaging - source-separated wastes - verified inventory change and returns | all mass-bearing records over one period | documented mass-balance difference and investigation | `eu-environmental-footprint-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_rule_1` | product identity | Bind every record to the declared subtype, model, configuration, BOM revision, production site, and reporting period. | Approved BOM, model specification, production and release records |
| `dq_rule_2` | completeness | Account for all known material and energy inputs, products, wastes, and direct emissions within the declared boundary; explain every exclusion or data gap. | BOM reconciliation, meter coverage, waste register, mass balance, exclusion log |
| `dq_rule_3` | measurement | Use calibrated meters and scales and retain count-to-mass sampling methods and uncertainty. | Calibration certificates, sampling records, meter and scale logs |
| `dq_rule_4` | representativeness | Match upstream datasets to component identity, production technology, supplier or market geography, and time; disclose every proxy. | Supplier data, dataset metadata, proxy register, sensitivity assessment |
| `dq_rule_5` | consistency | Use the same period, conforming-output denominator, allocation method, net-mass definition, and packaging separation across all rows. | Calculation workbook, period reconciliation, reviewer checklist |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | product classification | Confirm that the declared product is within CPC 45141 and is not a POS terminal, ATM, or similar CPC 45142 machine. | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | reference flow | Confirm one complete conforming machine, its net mass, included accessories, and separately reported packaging mass. |  |
| `validation_rule_3` | BOM | Confirm the BOM is specific to the declared model/configuration and reconciles engineering changes, issues, returns, and conditional modules. | `eu-environmental-footprint-2021` |
| `validation_rule_4` | inventory atomicity | Confirm every selected flow is one concrete physical, waste, or energy exchange and every no-exact UUID row remains explicitly unresolved. |  |
| `validation_rule_5` | energy | Confirm electricity covers only included operations, uses the disclosed grid and voltage boundary, and converts kWh to MJ consistently. | `eu-environmental-footprint-2021` |
| `validation_rule_6` | mass balance | Reconcile material inputs, finished net product, shipped packaging, wastes, returns, rework, and inventory change for the same period; investigate and disclose residual differences. | `eu-environmental-footprint-2021` |
| `validation_rule_7` | allocation | Confirm subdivision was attempted before residual physical allocation and retain the driver, calculation, and sensitivity. | `eu-environmental-footprint-2021` |
| `validation_rule_8` | scope | Confirm distribution, installation, use, maintenance, and end-of-life are excluded or separately modelled and disclosed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific factory-gate `secondary_dataset` or reviewed `background_dataset` for production of one declared CPC 45141 machine |
| downstream_use | Product-system models requiring manufacture of accounting machines, cash registers, postage-franking machines, ticket-issuing machines, or similar calculation-backed transaction machines |
| allowed_use | Cradle-to-gate modelling for the declared product subtype, model/configuration, site/geography, technology, and production period; broader use only after representativeness review |
| excluded_use | POS terminals, ATMs, CPC 45142 machines, stand-alone printers, vending machines, loose parts, use-phase service claims, and comparative assertions across materially different configurations without harmonization |
| required_metadata | Canonical PCR id; CPC reference; product subtype; model/configuration; included modules/accessories; functional-test specification; net and packaged masses; site/geography; technology; production period; BOM coverage; allocation; upstream datasets; unresolved UUIDs; exclusions |
| required_quality_disclosure | Primary-data share; meter and scale coverage; BOM and mass-balance reconciliation; temporal, geographical, and technological representativeness; proxy list; uncertainty; conditional-module treatment; review status |
| update_trigger | Product or packaging redesign; BOM or supplier change affecting represented mass or technology; new display, printer, cash-drawer, battery, or power architecture; site/process change; allocation change; material data gap resolution; older production data no longer representative |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (verified original CSV; retrieved 2026-09-08) | Official CPC 45141 identity and express exclusion of CPC 45142 products |
| `eu-environmental-footprint-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279, Annexes 1 to 2, Product Environmental Footprint Method, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf (verified original PDF; retrieved 2026-09-08) | Product-specific BOM, company-specific manufacturing data, completeness, allocation hierarchy, foreground collection, and data quality |
