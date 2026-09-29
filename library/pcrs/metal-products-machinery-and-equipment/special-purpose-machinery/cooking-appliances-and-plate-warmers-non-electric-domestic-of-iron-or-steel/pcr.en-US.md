---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cooking-appliances-and-plate-warmers-non-electric-domestic-of-iron-or-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-electric domestic iron or steel cooking appliances and plate warmers

## 1. Scope and Applicability

This rule produces a factory-gate foreground data package for one accepted, complete, non-electric domestic cooking appliance or plate warmer whose principal body is iron or steel. Gas-fired domestic hobs and cookers are representative routes; the declared configuration may instead be another non-electric cooking or warming design. Record its fuel, burner or heater design, material bill, surface finish and sale state. Manufacture of loose replacement parts, electric appliances, copper-bodied appliances, use-stage cooking fuel and end-of-life treatment are outside this factory-gate package. The category distinction follows `un-cpc-3-2025`; product-specific bill-of-material collection follows `eu-jrc-cooking-appliances-2020`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cooking-appliances-and-plate-warmers-non-electric-domestic-of-iron-or-steel |
| classification_refs | CPC 3.0 44821, classification context only; no accepted mapping is asserted |
| covered_products | Complete non-electric domestic iron or steel cooking appliances and plate warmers, including gas-fired domestic hobs and cookers |
| excluded_products | Electric cooking appliances; non-cooking space heaters of CPC 44822; separately sold parts of CPC 44832; copper-bodied cooking or heating appliances of CPC 42912; commercial cooking equipment |
| representative_product | Accepted, complete iron or steel domestic gas hob with installed burner and controls |
| production_route | Steel housing fabrication, route-specific surface finishing, purchased functional component assembly, acceptance testing and factory-gate packaging |
| market_state | Finished and accepted appliance at factory gate, with declared sales packaging; transport packaging is excluded from net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete domestic appliance that cooks food or warms plates without electric heat |
| How much | One accepted finished appliance of the declared model and configuration |
| How well | Meets the manufacturer's declared cooking or warming performance and applicable acceptance test; fuel and installed components are identified |
| How long or cycle | At factory acceptance; no assumed service life or cooking cycle is embedded in this production reference |
| reference_flow_link | `finished_appliance` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Cooking appliances and plate warmers, non-electric, domestic, of iron or steel `6cc6000a-58ba-4ba3-bfa1-94ee239070ff` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; configuration; fuel or heat source; iron or steel body grade; installed burner or warming assembly; coating route; sales packaging state; manufacturing site and period |

The foreground producer measures M for the same accepted configuration. Inventory is collected per one accepted finished unit and delivered with M kg as the reference product; no universal appliance mass is assumed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `electricity_energy` | `fabrication_electricity` | Net calorific value | MJ | Record alternating-current electricity consumed by the declared fabrication and assembly processes in MJ; convert a metered kWh record using 1 kWh = 3.6 MJ, and retain the original reading. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Iron or steel sheet and purchased burner components enter the foreground factory; their upstream production is linked as separate background datasets |
| starting_condition_role | Purchased product inputs at the gate of the first included factory process |
| product_classification_scope | Finished CPC 44821 appliance; separately supplied CPC 44832 parts remain input components |
| recursive_input_rule | If a complete same-category appliance is purchased as an input, disclose and link its upstream dataset rather than recursively modelling it as fresh factory output |
| upstream_dataset_requirement | Link upstream datasets for purchased metal, functional components, coating material, gas, electricity and packaging, with geography and technology recorded |
| disclosure | Declare site, period, model, configuration, fuel, process route, purchased-versus-in-house components, mass M and all exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | factory-gate foreground package | Include fabrication, route-specific finishing, final assembly, acceptance testing, attributable factory energy, scrap and packaging up to release of the accepted appliance. | `eu-jrc-cooking-appliances-2020`; `us-epa-metal-fabrication-2007` |
| `boundary_exclusions` | downstream stages | Exclude customer cooking fuel, distribution, installation and end-of-life from this factory-gate inventory; disclose any separately modelled downstream scenarios. | `eu-jrc-cooking-appliances-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `housing_fabrication` | Steel housing fabrication | conditional | Include when sheet-metal housing cutting and forming occur at the declared factory | Foreground cutting, forming and joining | per one accepted finished unit |
| `surface_coating` | Powder coating | conditional | Include when powder coating is applied to the housing at the declared factory | Foreground finishing | per one accepted finished unit |
| `final_assembly_test` | Final assembly and acceptance test | required | Every accepted complete appliance is assembled and tested | Foreground assembly and test | per one accepted finished unit |
| `sales_packaging` | Corrugated-box packaging | conditional | Include when a corrugated board box is supplied with the factory-gate sale unit | Foreground packaging | per one accepted finished unit |

### Process: Steel housing fabrication (`housing_fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled steel sheet for housing (`steel_sheet_input`)

For the sheet-fabrication route, record the mass of non-alloy cold-rolled steel sheet entering the housing line, including sheet that becomes measured offcut. Supplier grade and coating state must be declared; its Tiangong flow identity remains unresolved.

- Selected flow: Cold-rolled non-alloy steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured sheet issued per one accepted finished unit; record supplier mass and reconcile stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eu-jrc-cooking-appliances-2020`; `us-epa-metal-fabrication-2007`

###### Alternating-current fabrication electricity (`fabrication_electricity`)

Meter or allocate the electricity used by cutting, forming, joining and installed finishing and assembly equipment; avoid double counting shared meters.

- Selected flow: Alternating current `949661a5-2af6-4e66-adf8-74f5fca306a9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable alternating-current electricity in MJ per one accepted finished unit; convert recorded kWh using `electricity_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `us-epa-metal-fabrication-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel sheet offcut scrap (`steel_scrap_output`)

Weigh clean steel offcuts leaving the fabrication line. Record contaminated swarf separately in the produced dataset if present; the selected flow here is only steel scrap.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: Measured steel scrap dispatched or stock-adjusted per one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `us-epa-metal-fabrication-2007`

##### Elementary flows

### Process: Powder coating (`surface_coating`)

#### Inputs

##### Product flows

###### Powder paint applied to housing (`powder_coating_input`)

Include only when the declared factory uses powder paint; record purchased and consumed coating powder, with losses assigned to this line.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Measured powder paint consumed per one accepted finished unit when powder coating is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`
- Sources: `us-epa-metal-fabrication-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Final assembly and acceptance test (`final_assembly_test`)

#### Inputs

##### Product flows

###### Purchased domestic gas burner assembly (`domestic_gas_burner_input`)

Include for a gas-fired configuration with a purchased domestic hob burner assembly; record its supplier identity and delivered mass. The searched industrial burner records are not this product.

- Selected flow: Domestic gas hob burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of purchased domestic burner assemblies per one accepted gas-fired finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `eu-jrc-cooking-appliances-2020`

###### Natural gas for gas-fired acceptance test (`acceptance_test_natural_gas`)

Include only when natural gas is actually burned during the factory acceptance test; use a separate atomic fuel row in the produced dataset for any other test fuel.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas consumed in acceptance testing per one accepted finished unit when this fuel is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_gas`
- Sources: `eu-jrc-cooking-appliances-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished cooking appliance or plate warmer (`finished_appliance`)

The reference product is one accepted complete unit. Its net mass M excludes the transport package and is weighed for the same configuration.

- Selected flow: Cooking appliances and plate warmers, non-electric, domestic, of iron or steel `6cc6000a-58ba-4ba3-bfa1-94ee239070ff`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`; `eu-jrc-cooking-appliances-2020`

##### Waste flows

##### Elementary flows

### Process: Corrugated-box packaging (`sales_packaging`)

#### Inputs

##### Product flows

###### Corrugated board sale box (`corrugated_box_input`)

Include only when a corrugated board sale box accompanies the accepted appliance at the declared factory gate. This box is outside the measured net product mass M.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of corrugated sale boxes issued per one accepted finished unit when boxed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-jrc-cooking-appliances-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared factory processes | First separate metered process lines, production periods and product configurations; retain directly traceable sheet, scrap, coating, burner, test gas and box records. | `us-epa-metal-fabrication-2007`; `eu-jrc-cooking-appliances-2020` |
| `allocation_shared` | remaining shared energy and waste | If direct measurement cannot separate a shared process, allocate by a documented physical driver tied to that process, such as measured machine time; disclose the driver, denominator and sensitivity. | `us-epa-metal-fabrication-2007` |
| `scrap_no_credit` | steel scrap output | Record steel scrap as an output; do not subtract an assumed recycling credit inside the factory-gate foreground inventory. | `us-epa-metal-fabrication-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `final_assembly_test` | accepted reference product | calibrated scale record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted model or production lot | declared production period | declared factory | accepted net mass per unit | calibration certificate; acceptance record |
| `cp_materials` | `housing_fabrication` | steel sheet input | supplier and issue ledger | steel grade; sheet form; received mass; issued mass; opening and closing stock; accepted units | Reconcile supplier and issue records with stock change for the declared configuration. | kg | each lot | declared production period | housing line | issued sheet mass / accepted units | supplier invoice; stock ledger |
| `cp_electricity` | `housing_fabrication` | alternating-current input | meter record | meter id; kWh reading; period; line allocation driver; accepted units | Read the calibrated meter and convert kWh to MJ; document allocation of shared electricity. | MJ | monthly or batch | declared production period | included factory lines | attributable MJ / accepted units | meter readings; allocation worksheet |
| `cp_scrap` | `housing_fabrication` | steel offcut output | weighbridge and stock record | scrap type; dispatched mass; opening and closing stock; accepted units | Weigh clean steel offcuts and reconcile stock change. | kg | each dispatch or batch | declared production period | housing line | steel scrap mass / accepted units | weighbridge ticket; stock ledger |
| `cp_coating` | `surface_coating` | powder paint input | coating issue record | powder type; issued mass; returned mass; accepted units | Reconcile powder issues and returns when this route is used. | kg | each batch | declared production period | coating line | consumed powder mass / accepted units | issue ledger; route record |
| `cp_components` | `final_assembly_test` | burner assembly input | supplier BoM and receipt | burner model; supplier; receipt mass; installed count; accepted units | Reconcile received domestic burner assemblies with installed components and rejected units. | kg | each model or lot | declared production period | assembly line | installed burner mass / accepted units | supplier BoM; receipt; assembly traveler |
| `cp_test_gas` | `final_assembly_test` | natural gas test input | gas meter and test record | gas meter id; m3 reading; gas type; test duration; accepted units | Meter natural gas attributable to acceptance tests for the declared gas configuration. | m3 | each test batch | declared production period | test line | attributable natural gas m3 / accepted units | gas meter record; test log |
| `cp_packaging` | `sales_packaging` | corrugated sale box input | packaging issue record | box specification; issued mass; accepted units | Reconcile corrugated boxes issued to accepted units when boxed. | kg | each lot | declared production period | packing line | issued box mass / accepted units | packaging ledger; supplier specification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all included rows | Keep model, fuel, coating route and accepted configuration consistent with M and the bill of materials. | `eu-jrc-cooking-appliances-2020`; acceptance and supplier records |
| `dq_period` | all collected rows | Use one declared production period; reconcile shared meter and stock boundaries to accepted output. | meter, ledger and acceptance dates |
| `dq_identity` | unresolved UUID rows | Preserve the concrete physical name and leave UUID blank until an exact public TianGong flow is verified. | flow identity review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_mass` | reference and material balance | Confirm M is measured for the accepted configuration and the finished output equals M kg; reconcile sheet issued, component mass, scrap and stock movements without forcing equality across unlike materials. | `eu-jrc-cooking-appliances-2020`; `us-epa-metal-fabrication-2007` |
| `validate_routes` | conditional process rows | Confirm powder paint, domestic burner, natural gas and corrugated box are included only when their declared routes apply; require an explicit absence reason otherwise. | `eu-jrc-cooking-appliances-2020` |
| `validate_sources` | foreground data package | Require meter, supplier, weighbridge, BoM and acceptance records for nonzero rows; disclose geography, technology, time and unresolved UUIDs. | `eu-jrc-cooking-appliances-2020`; `us-epa-metal-fabrication-2007` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground data package for an accepted complete appliance |
| downstream_use | May become a reviewed secondary_dataset or background_dataset and support process or lifecyclemodel projections |
| allowed_use | Use for the declared model, site, period, fuel and finish route, with upstream links and disclosed UUID gaps |
| excluded_use | Do not treat this production package as a use-stage cooking or end-of-life result; do not transfer it to electric, copper-bodied or industrial equipment |
| required_metadata | model; configuration; fuel; iron or steel grade; site; period; M and measurement evidence; BoM; process routes; packaging state; upstream dataset geography |
| required_quality_disclosure | direct measurements; allocation drivers; excluded stages; unmatched flow UUIDs; unresolved range evidence; data coverage |
| update_trigger | Reissue when material design, burner, fuel, coating route, supplier, site or measurement protocol changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | CPC Version 3.0 Structure, United Nations Statistics Division, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product class and adjacent exclusions only |
| `eu-jrc-cooking-appliances-2020` | `official_guidance` | Review study of Ecodesign and Energy Labelling for Cooking appliances, first draft, February 2020, https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2020-07/CA_%20Prep%20Study_draft1_Feb2020.pdf | Domestic gas appliance scope; product-specific BoM and component collection; no empirical PCR range |
| `us-epa-metal-fabrication-2007` | `official_guidance` | Clean Lines: Strategies for Reducing Your Environmental Footprint, U.S. Environmental Protection Agency, November 2007, https://www.epa.gov/sites/default/files/2015-03/documents/fabrication.pdf | Fabrication process map, steel scrap and machining-fluid separation |
