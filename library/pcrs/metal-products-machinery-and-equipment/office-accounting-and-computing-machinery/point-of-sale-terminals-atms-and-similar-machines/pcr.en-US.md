---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.point-of-sale-terminals-atms-and-similar-machines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Point-of-sale terminals, ATMs and similar machines

## 1. Scope and Applicability

This PCR applies to factory-gate foreground data packages for finished network-connectable point-of-sale (POS) terminals, automated teller machines (ATMs), and machines with the same calculating and transaction-processing function. It covers final hardware assembly, software/firmware configuration, functional and security testing, and packing performed by the reporting factory. Purchased components and materials enter as product flows with upstream datasets.

The boundary includes POS terminals and network-connectable cash registers, ATMs, and comparable completed machines. It excludes unconnected cash registers, ticket-issuing machines, postage-franking machines, totalisator machines, stand-alone magnetic-card validation/control systems, loose parts and accessories, and upstream component manufacture unless performed at the reporting site. Installation, transaction-network infrastructure, cash logistics, use electricity, maintenance, and end-of-life are outside the default factory-gate boundary and require separately declared extension scenarios. The official CPC 3.0 structure establishes the subclass title; the CPC 2.1 explanatory note supplies the reviewed inclusions and exclusions for the same subclass identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.point-of-sale-terminals-atms-and-similar-machines |
| classification_refs | CPC 3.0: 45142, Point-of-sale terminals, ATMs and similar machines (`exact`) |
| covered_products | Finished network-connectable POS terminals; connected cash registers; automated teller machines; completed machines with equivalent calculating and transaction-processing function |
| excluded_products | Unconnected cash registers; ticket-issuing machines; postage-franking machines; totalisator machines; stand-alone magnetic-card validation/control systems; loose parts and accessories |
| representative_product | A finished, configured, functionally tested and packed POS terminal or ATM at the reporting factory gate |
| production_route | Assembly of purchased electronic, display, power-supply, enclosure and packaging components; configuration; functional/security testing; packing |
| market_state | Finished new equipment at factory gate, packed when the declared product is sold packed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished machine capable of the declared POS, cash-dispensing and/or comparable transaction-processing function |
| How much | 1 kg of finished reference product at the factory gate |
| How well | Conforms to the declared model configuration and has passed the manufacturer's release, functional and security tests |
| How long or cycle | One reported production period; service life and use-phase duty cycle are declared separately and are outside this factory-gate functional unit |
| reference_flow_link | The normalized output row `finished_terminal_output` provides the reference product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Point-of-sale terminals, ATMs and similar machines `2c387020-8faf-4bc5-bdc3-a3111560c91b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family (POS terminal, connected cash register, ATM, or similar machine); model and hardware configuration; unit mass; display type; enclosure material; power-supply type; integrated printer, card reader, keypad, cash dispenser and safe presence; software/firmware release; test coverage; packing included or excluded; production geography; reporting period; factory-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | Reference product and all mass-normalized rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net finished-product mass consistently with the packing declaration. Normalize batch totals by released product mass; do not use item count without a measured model-specific count-to-mass conversion. |
| `mu_electricity_conversion` | Assembly and test electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the meter's original energy record and convert kWh to MJ using 1 kWh = 3.6 MJ. Do not treat electricity as a mass flow. |
| `mu_scrap_mass` | Production waste outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet/contaminated state where relevant and keep steel, ABS plastic, populated-board and cardboard wastes segregated; subtract only documented returns that never become waste. |

## 5. System Boundary

The default boundary is cradle-to-factory-gate for the completed machine: foreground operations begin when purchased components, packaging and energy cross the reporting factory boundary and end when conforming finished products and segregated wastes leave it. Upstream production of purchased components must be represented by suitable upstream datasets. Installation, use, maintenance and end-of-life are excluded unless a separately identified extension is reported. Regulatory sources are conformance and scenario rules, not empirical amount ranges.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | default_system_boundary | Include final assembly, configuration, functional/security testing and packing at the reporting factory; connect every purchased component, material and electricity flow to an upstream dataset. |  |
| `sb_product_scope` | product_identity | Apply this PCR only to CPC 45142 products within the reviewed inclusions and exclusions; do not use it for excluded office machines or loose parts. | `un-cpc-3-0-structure-2025`; `un-cpc-2-1-2013` |
| `sb_rohs_disclosure` | regulated_hazardous_substances | Where the declared market is subject to Directive 2011/65/EU, retain supplier declarations or test evidence at homogeneous-material level and disclose applicable exemptions; this is a conformance disclosure, not an inventory range. | `eu-rohs-2011-65` |
| `sb_downstream_extension` | optional_use_and_end_of_life | Report use electricity, maintenance, collection and treatment only in separate extension scenarios. Where Directive 2012/19/EU applies, keep separate collection and treatment/reuse/recycling routes explicit and do not merge them into factory production waste. | `eu-weee-2012-19` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased components, packaging and energy delivered to the reporting factory with supplier identity and mass/energy records |
| starting_condition_role | Foreground gate for final equipment assembly; upstream component manufacture remains represented by linked upstream datasets |
| product_classification_scope | Finished CPC 45142 machines only; parts, accessories and excluded office machines remain outside the reference-product identity |
| recursive_input_rule | A same-category finished machine used as an input must be recorded as a distinct reused/remanufactured input with its own upstream dataset; do not recursively apply this PCR to it inside the same process |
| upstream_dataset_requirement | Use technology-, geography- and product-state-appropriate datasets for purchased PCB assemblies, display modules, power supplies, enclosures, packaging and electricity; disclose proxy use |
| disclosure | Declare product configuration, unit mass, packing state, factory operations, excluded onsite operations, upstream proxies, regulated-market assumptions, and any optional downstream extension |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `terminal_final_assembly` | Final assembly, configuration, functional testing and packing | `required` | Always included; product-specific components absent from the verified BOM are reported as not applicable rather than substituted with another material | Foreground production of the finished reference product | 1 kg of released finished terminal at factory gate |

### Process: Final assembly, configuration, functional testing and packing (`terminal_final_assembly`)

#### Inputs

##### Product flows

###### Populated printed-circuit-board assembly (`populated_pcb_assembly_input`)

Record the mass of the populated PCB assembly installed in the finished machine from BOM and receiving records. Keep the UUID empty because the audited candidates did not establish one exact populated assembly identity.

- Selected flow: Populated printed-circuit-board assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured net installed mass plus documented assembly loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_packaging_mass`
- Sources:

###### LCD display module (`lcd_display_module_input`)

Record the mass of each LCD display module installed in products that contain one. Use not applicable only when the verified model BOM contains no LCD module.

- Selected flow: LCD display module `264605c6-41b8-4baa-82b0-e27e815063a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net installed mass plus documented assembly loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_packaging_mass`
- Sources:

###### AC/DC power-supply unit (`ac_dc_power_supply_input`)

Record the mass of the internal or bundled AC/DC power-supply unit. Keep the UUID empty because no audited candidate exactly represented one complete power-supply unit.

- Selected flow: AC/DC power-supply unit
- Flow property / unit: Mass / kg
- Amount rule: Measured net installed or bundled mass plus documented assembly loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_packaging_mass`
- Sources:

###### Painted steel terminal enclosure (`painted_steel_enclosure_input`)

Record the mass of the painted steel enclosure or safe body installed in the declared model. Use not applicable only when the verified BOM shows no steel enclosure.

- Selected flow: Painted steel terminal enclosure
- Flow property / unit: Mass / kg
- Amount rule: Measured net installed mass plus documented fabrication or fitting loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_packaging_mass`
- Sources:

###### Injection-moulded ABS terminal enclosure (`moulded_abs_enclosure_input`)

Record the mass of the injection-moulded ABS enclosure installed in the declared model. Do not substitute ABS granulate unless moulding is actually inside the foreground boundary.

- Selected flow: Injection-moulded ABS terminal enclosure
- Flow property / unit: Mass / kg
- Amount rule: Measured net installed mass plus documented fitting loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_packaging_mass`
- Sources:

###### Assembly and test electricity (`assembly_test_electricity_input`)

Record purchased electricity metered for assembly, configuration, functional/security testing and packing, with justified allocation where the meter is shared.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Metered electricity attributable to the reporting period, converted to MJ and normalized by released product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_metering`
- Sources:

###### Corrugated board box (`corrugated_board_box_input`)

Record corrugated board boxes consumed for products whose factory-gate reference state includes packing. Use not applicable when packing is explicitly outside the declared reference state.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured box mass issued to conforming products, net of documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_packaging_mass`
- Sources:

###### Expanded polyethylene foam packaging insert (`expanded_pe_foam_insert_input`)

Record the mass of expanded polyethylene foam inserts used to protect the finished product. Keep the UUID empty because audited candidates did not establish both polyethylene chemistry and formed-insert state.

- Selected flow: Expanded polyethylene foam packaging insert
- Flow property / unit: Mass / kg
- Amount rule: Measured insert mass issued to conforming products, net of documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_packaging_mass`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released finished terminal (`finished_terminal_output`)

Record only conforming finished products released at the factory gate. The exact Tiangong state-100 reference-product flow is used.

- Selected flow: Point-of-sale terminals, ATMs and similar machines `2c387020-8faf-4bc5-bdc3-a3111560c91b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured released product mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output_mass`
- Sources:

##### Waste flows

###### Waste populated printed wiring board (`populated_pcb_waste_output`)

Record rejected or damaged populated boards that become waste at the reporting factory. Do not include supplier returns that never enter waste management.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed segregated populated-board waste sent to storage or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_segregated_waste_mass`
- Sources:

###### Steel scrap offcuts (`steel_offcut_scrap_output`)

Record steel offcuts generated by enclosure fitting or onsite fabrication. Use not applicable where no steel cutting or fitting loss occurs onsite.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed segregated steel offcuts leaving the process as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_segregated_waste_mass`
- Sources:

###### Segregated ABS plastic production scrap (`abs_plastic_scrap_output`)

Record ABS enclosure trimming, fitting or breakage waste as one segregated polymer stream. Keep the UUID empty because no exact ABS production-scrap identity was confirmed.

- Selected flow: Segregated ABS plastic production scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated ABS scrap leaving the process as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_segregated_waste_mass`
- Sources:

###### Cardboard packaging waste (`cardboard_packaging_waste_output`)

Record damaged boxes and cardboard offcuts that become waste at the reporting factory. Do not include boxes shipped with conforming products.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cardboard packaging waste leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released finished terminal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_segregated_waste_mass`
- Sources:

##### Elementary flows

No direct elementary exchange is prescribed for this assembly process. Site-specific direct emissions may be added only as separate, chemically specific rows with verified identities and measurements; upstream emissions remain in upstream datasets.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | shared_assembly_and_test_operations | Subdivide by production line, model, test programme or reporting period wherever records allow direct attribution. |  |
| `al_mass_energy_driver` | residual_shared_inputs_and_wastes | Allocate component and packaging masses by BOM/issue records, electricity by metered test time or another documented causal energy driver, and segregated waste by measured source records; use finished-product mass only when no more causal verified driver exists. |  |
| `al_no_avoided_burden` | recyclable_production_waste | Report waste at the factory gate without avoided-burden credit. Any downstream recycling substitution belongs in a separately declared scenario and must not reduce foreground assembly inventory. | `eu-weee-2012-19` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_packaging_mass` | `terminal_final_assembly` | installed components and shipped packaging | BOM, goods issue, receiving record, calibrated scale record | model id; component id; quantity issued; quantity returned; measured unit mass; reject mass; packing inclusion | Reconcile released-model BOM with warehouse issues/returns and model-specific scale checks | kg | Each model/revision and reporting period | Complete reporting period | All reporting-site assembly and packing lines | Sum net issued mass attributable to released products; add documented onsite loss only once | Approved BOM revision, issue/return reconciliation, scale calibration, variance investigation |
| `cp_electricity_metering` | `terminal_final_assembly` | assembly and test electricity | electricity meter and equipment runtime record | meter start/end; multiplier; line/test station; runtime; model; released mass; allocation driver | Read dedicated meters where available; otherwise reconcile shared meters and documented causal allocation drivers | kWh and MJ | At least monthly and at model/test-programme change | Complete reporting period | All included assembly, configuration, test and packing equipment | Convert kWh to MJ, subtract documented excluded loads, allocate residual shared use, divide by released mass | Meter identifier and calibration, bill reconciliation, load boundary diagram, allocation record |
| `cp_product_output_mass` | `terminal_final_assembly` | released finished product | release record and calibrated scale record | model; serial/batch; released quantity; unpacked mass; packed mass; packing declaration | Reconcile release records with model-specific measured mass and reject records | kg | Each model/revision and reporting period | Complete reporting period | All included production lines | Sum only conforming released mass in the declared packing state | Release authorization, scale calibration, packed/unpacked mass reconciliation |
| `cp_segregated_waste_mass` | `terminal_final_assembly` | PCB, steel, ABS and cardboard waste | waste-container scale ticket and transfer manifest | waste identity; container tare/gross; contamination; date; source line; destination; supplier return flag | Weigh each segregated stream and reconcile internal storage change and outbound manifests | kg | Each transfer; aggregate monthly | Complete reporting period including opening and closing stock | All included production and waste-storage areas | Net generated waste = outbound + closing stock - opening stock; exclude documented non-waste supplier returns | Scale calibration, photographs/labels, manifests, stock reconciliation, contamination notes |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | mass inventory rows | normalized kg/kg = attributable row mass in kg / released finished-product mass in kg | reconciled row mass; released finished-product mass | kg per kg reference product |  |
| `calc_electricity_normalization` | `assembly_test_electricity_input` | normalized MJ/kg = attributable metered kWh × 3.6 / released finished-product mass in kg | metered kWh; excluded loads; allocation driver; released mass | MJ per kg reference product |  |
| `calc_waste_stock_balance` | waste outputs | generated waste = outbound transferred mass + closing onsite stock - opening onsite stock, excluding documented supplier returns | scale tickets; manifests; stock records; return records | kg waste per reporting period before normalization |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and component identity | Tie product model, hardware/firmware revision, component identities and packing state to an approved BOM and release record; disclose every UUID-empty flow and proxy dataset. | BOM revision, configuration record, release authorization, supplier specification |
| `dq_temporal` | all foreground rows | Cover one representative continuous reporting period and disclose shutdowns, rework campaigns, new-model ramp-up and missing intervals. | dated meter, warehouse, production and waste records |
| `dq_completeness` | mass and energy balance | Reconcile component issues, released product, rejects, supplier returns and segregated wastes; explain material variances and excluded shared loads. | signed reconciliation and variance log |
| `dq_measurement` | scales and electricity meters | Use identified calibrated instruments and preserve raw readings, multipliers, conversion and allocation calculations. | calibration certificates, raw exports and calculation workbook |
| `dq_regulatory` | regulated market declarations | Where applicable, retain homogeneous-material substance declarations/exemptions and separately document WEEE collection/treatment assumptions used in downstream extensions. | supplier declarations or test evidence; applicable compliance records; scenario documentation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | reference_product | Confirm that `finished_terminal_output` uses the exact reference UUID, Mass property, kg unit, and equals 1 kg after normalization. |  |
| `val_scope_identity` | product_scope | Reject a package for an excluded office machine, loose component, or unconnected cash register; verify the declared POS/ATM/similar-machine function and network capability. | `un-cpc-3-0-structure-2025`; `un-cpc-2-1-2013` |
| `val_inventory_atomicity` | process_inventory | Confirm every row is one atomic exchange and that absent product-specific components are marked not applicable rather than replaced with an umbrella flow. |  |
| `val_reconciliation` | foreground_records | Recalculate mass and electricity normalization, check released-product denominator, reconcile waste stocks and returns, and flag unexplained negative or duplicate quantities. |  |
| `val_boundary_disclosure` | system_boundary | Confirm the factory-gate boundary, packing state, included onsite operations, upstream dataset links, excluded use/end-of-life stages and any regulatory extension scenario are explicit. | `eu-rohs-2011-65`; `eu-weee-2012-19` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after review of representativeness and upstream links |
| downstream_use | Product-footprint and lifecycle-model foreground/background modules for declared POS terminal, ATM or similar-machine configurations |
| allowed_use | Factory-gate comparison or modelling when product configuration, mass, geography, reporting period, packing state and foreground boundary are compatible |
| excluded_use | Direct substitution for excluded CPC products; use-phase or end-of-life claims without separate scenarios; comparison of unlike POS/ATM configurations without functional adjustment |
| required_metadata | PCR id and version; product/model configuration; reference UUID; unit mass; packing state; production site/geography; reporting period; included operations; upstream dataset identities; allocation; unresolved UUIDs; regulatory-market assumptions |
| required_quality_disclosure | Data coverage and gaps; meter/scale calibration; BOM and mass reconciliation; shared-energy allocation; waste stock balance; upstream proxy use; component and packaging not-applicable decisions |
| update_trigger | Hardware, enclosure, display, power-supply, packaging, software/test programme, production site, energy supply, allocation driver or regulatory scope changes that materially alter the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 45142 title and classification identity |
| `un-cpc-2-1-2013` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 2.1, https://unstats.un.org/unsd/statcom/doc13/BG-CPC-Version21.pdf (retrieved 2026-09-07) | Original explanatory-note inclusions and exclusions for subclass 45142 |
| `eu-rohs-2011-65` | `standard` | Directive 2011/65/EU on the restriction of hazardous substances in electrical and electronic equipment, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32011L0065 (retrieved 2026-09-07) | Conditional homogeneous-material compliance evidence and disclosure rule; not an empirical range |
| `eu-weee-2012-19` | `standard` | Directive 2012/19/EU on waste electrical and electronic equipment, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012L0019 (retrieved 2026-09-07) | Conditional separate-collection and treatment/reuse/recycling scenario rules; not an empirical range |
