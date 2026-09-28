---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.air-heaters-and-hot-air-distributors-not-electrically-heated-incorporating-a-motor-driv-7aebf949
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Air heaters and hot air distributors, not electrically heated, incorporating a motor-driven fan or blower, of iron or steel

## 1. Scope and Applicability

This rule covers factory-gate iron or steel air heaters and hot-air distributors with a motor-driven fan or blower and a non-electric heat source, represented by a hot-water heat exchanger or a gas burner. Electricity driving the fan does not make the heater electrically heated. The representative product is a complete steel-cased hydronic unit; gas-fired component and test rows apply only under their stated conditions. Exclude resistance-heated appliances, radiators without a fan, stand-alone boilers, site installation, use, and end of life. See `un-cpc-3-2025`, `kampmann-tip4-epd-2026`, and `nist-tn1975r2`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.air-heaters-and-hot-air-distributors-not-electrically-heated-incorporating-a-motor-driv-7aebf949 |
| classification_refs | CPC 3.0:44824 |
| covered_products | Finished iron/steel-cased hydronic or gas-fired air heaters with motor-driven fan |
| excluded_products | Electric-resistance heaters; fanless radiators; stand-alone boilers; unassembled components |
| representative_product | Complete steel-cased hydronic unit heater with motor-driven fan |
| production_route | Sheet fabrication, component assembly, factory test and packing; declare hydronic or gas-fired route |
| market_state | One accepted complete unit at factory gate, excluding transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One accepted complete iron/steel non-electric air heater with motor-driven fan |
| How much | One unit with measured net mass M kg |
| How well | Declared heat-source route, air-flow performance, casing material and motor configuration |
| How long or cycle | Factory-gate product; no use period |
| reference_flow_link | finished_heater |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Air heaters and hot air distributors, not electrically heated, incorporating a motor-driven fan or blower, of iron or steel `bab3c9c3-6018-402d-835f-c56ee7db029c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | heat-source route; casing steel state; fan/motor configuration; acceptance state; net-mass measurement record |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground manufacturing | Include received purchased materials and components, sheet fabrication, assembly, factory testing and packing through accepted output; model use and end of life separately. | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |
| `boundary_route` | covered product | Include only iron/steel heaters with a motor-driven fan and a non-electric heat source; select hydronic or gas components from the actual route. | `un-cpc-3-2025`; `kampmann-tip4-epd-2026`; `nist-tn1975r2` |
| `boundary_upstream` | purchased inputs | Record purchased materials and components as product inputs with upstream datasets; do not duplicate supplier manufacture in this foreground process. | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory receipt of specified steel sheet, fan assembly and route-specific heat-source components |
| starting_condition_role | foreground manufacturing entry |
| product_classification_scope | CPC 3.0:44824 finished products; component classification is independent |
| recursive_input_rule | If a purchased input is itself in the category, record it once as a distinct purchased product flow rather than recursively expanding the same manufacturing process |
| upstream_dataset_requirement | Link each purchased input to an upstream dataset with a distinct boundary; disclose missing links |
| disclosure | Disclose route, model, steel state, site, period, measured M and allocation of shared energy |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `heater_manufacturing` | Air-heater fabrication, assembly, test and packing | required | All covered routes; activate conditional rows by actual route | foreground production | per one accepted finished unit; reference product M kg |

### Process: Air-heater fabrication, assembly, test and packing (`heater_manufacturing`)

#### Inputs

##### Product flows

###### Galvanized steel sheet for casing (`galvanized_sheet`)

Inclusion condition: galvanized casing route. This card represents one concrete exchange.

- Selected flow: Sendzimir galvanized steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Record the installed and offcut mass of received sheet used for a galvanized casing, only when this casing stock is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`route_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `kampmann-tip4-epd-2026`

###### Cold-rolled steel sheet for casing (`cold_rolled_sheet`)

Inclusion condition: cold-rolled ungalvanized casing route. This card represents one concrete exchange.

- Selected flow: Cold-rolled steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Record received cold-rolled cabinet sheet mass when the gas-fired or another declared route uses this stock; exclude sheet already counted as galvanized_sheet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`route_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `nist-tn1975r2`

###### Purchased motor-driven fan assembly (`fan_motor`)

Inclusion condition: all covered routes. This card represents one concrete exchange.

- Selected flow: Motor-driven air circulation fan assembly
- Flow property / unit: Mass / kg
- Amount rule: Record installed purchased fan-and-motor assembly mass for each accepted heater configuration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `kampmann-tip4-epd-2026`; `nist-tn1975r2`

###### Hydronic heat exchanger assembly (`hydronic_exchanger`)

Inclusion condition: hydronic hot-water route. This card represents one concrete exchange.

- Selected flow: Copper-aluminium hydronic air heat exchanger assembly
- Flow property / unit: Mass / kg
- Amount rule: Record installed purchased copper-aluminium hydronic exchanger mass only for the hot-water heating route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`route_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `kampmann-tip4-epd-2026`

###### Gas heat exchanger tube assembly (`gas_exchanger`)

Inclusion condition: gas-fired route. This card represents one concrete exchange.

- Selected flow: Aluminized-steel gas heat exchanger tube assembly
- Flow property / unit: Mass / kg
- Amount rule: Record installed aluminized-steel heat-exchanger tube assembly mass only for the gas-fired route; exclude burner mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`route_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `nist-tn1975r2`

###### Gas burner assembly (`gas_burner`)

Inclusion condition: gas-fired route. This card represents one concrete exchange.

- Selected flow: Natural-gas burner assembly for unit air heater
- Flow property / unit: Mass / kg
- Amount rule: Record installed gas burner assembly mass only for the gas-fired route; exclude heat-exchanger tubes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`route_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `nist-tn1975r2`

###### Factory alternating current (`factory_electricity`)

Inclusion condition: all covered routes. This card represents one concrete exchange.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measure electricity attributable to sheet fabrication, assembly, testing and packing for one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `kampmann-tip4-epd-2026`

###### Natural gas for factory firing test (`test_natural_gas`)

Inclusion condition: gas-fired route with factory firing test. This card represents one concrete exchange.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Record metered gaseous natural gas used for a factory firing test only when the gas-fired unit is fired before dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`route_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `nist-tn1975r2`

###### Corrugated shipping box (`corrugated_box`)

Inclusion condition: when corrugated boxes are used. This card represents one concrete exchange.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Weigh corrugated board boxes issued for shipment per accepted finished unit; exclude transport packaging from the accepted unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `kampmann-tip4-epd-2026`; `nist-tn1975r2`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished non-electric air heater (`finished_heater`)

Inclusion condition: all covered routes. This card represents one concrete exchange.

- Selected flow: Air heaters and hot air distributors, not electrically heated, incorporating a motor-driven fan or blower, of iron or steel `bab3c9c3-6018-402d-835f-c56ee7db029c`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`; `kampmann-tip4-epd-2026`; `nist-tn1975r2`

##### Waste flows

###### Steel sheet fabrication scrap (`steel_scrap`)

Inclusion condition: when casing fabrication generates steel scrap. This card represents one concrete exchange.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: Weigh segregated steel offcuts and rejects from casing fabrication attributable to one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route or product specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `kampmann-tip4-epd-2026`; `nist-tn1975r2`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | direct inputs and scrap | Assign direct components, packaging and steel scrap to accepted product models from bills of materials and weighing records; do not net off recycling substitution credits in the factory foreground. | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |
| `allocation_shared_energy` | shared electricity | Prefer sub-metered electricity; where shared, use recorded equipment operating time and power as an attribution driver and disclose the driver and unassigned amount. | `kampmann-tip4-epd-2026` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `heater_manufacturing` | reference product | acceptance and calibrated weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each unit or batch | representative production year with dates | actual manufacturing site | accepted net mass per unit | meter calibration, invoices, batch and acceptance records |
| `cp_bom` | `heater_manufacturing` | material and component inputs | bill of materials, receiving and weighing records | model; configuration; part number; material state; input mass; accepted unit count | Reconcile installed masses for the same configuration and aggregate separately by hydronic or gas route. | kg | each unit or batch | representative production year with dates | actual manufacturing site | per one accepted finished unit | meter calibration, invoices, batch and acceptance records |
| `cp_electricity` | `heater_manufacturing` | alternating current | electricity meter record | meter boundary; reading; unit; period; accepted count; allocation driver | Read traceable meter and attribute energy to recorded production; if meter reports kWh, convert at 3.6 MJ/kWh and retain original reading. | MJ | each unit or batch | representative production year with dates | actual manufacturing site | attributable electricity / accepted units | meter calibration, invoices, batch and acceptance records |
| `cp_gas` | `heater_manufacturing` | factory test natural gas | gas meter and test record | gas state; meter reading; unit; test lot; accepted count | Attribute only metered gaseous natural gas for this site’s pre-dispatch firing test to the matching gas-fired units. | m3 | each unit or batch | representative production year with dates | actual manufacturing site | per one accepted finished unit | meter calibration, invoices, batch and acceptance records |
| `cp_packaging` | `heater_manufacturing` | corrugated boxes | packaging issue and weighing records | box type; mass per box; box count; accepted unit count | Reconcile corrugated boxes shipped with each unit; exclude transport packaging from M. | kg | each unit or batch | representative production year with dates | actual manufacturing site | box mass / accepted units | meter calibration, invoices, batch and acceptance records |
| `cp_scrap` | `heater_manufacturing` | steel scrap | steel scrap weighing and disposition records | material state; scrap mass; batch; disposition; accepted count | Weigh attributable steel offcuts and rejects; reconcile internal rework against exported waste to prevent double counting. | kg | each unit or batch | representative production year with dates | actual manufacturing site | exported scrap mass / accepted units | meter calibration, invoices, batch and acceptance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `unit_mass_relation` | `finished_heater` | M = measured net mass of one accepted complete unit; record through cp_mass and aggregate inputs per unit. | M; cp_mass | M kg | `kampmann-tip4-epd-2026` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all inventory rows | All rows refer to the same model, configuration and acceptance lot; record hydronic or gas route. | bill of materials and acceptance record |
| `dq_completeness` | all inventory rows | Reconcile components, metered energy, packaging and wastes; add a separate atomic row for any uncovered specific exchange rather than an other-material aggregate. | meter ledger, purchasing and waste transfer records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product identity | Check iron/steel casing, motor-driven fan, non-electric heat source and declared route. | `un-cpc-3-2025` |
| `validate_mass` | reference mass | Confirm positive same-configuration accepted net mass M from cp_mass, excluding packaging; reference definition and finished_heater row both use M kg. | `kampmann-tip4-epd-2026` |
| `validate_inventory` | atomic inventory | Confirm each applicable material, component, energy, packaging and waste is a separate concrete exchange reconciled to bill of materials and meters. | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |
| `validate_allocation` | shared burdens | Check documented meter or allocation driver for shared electricity; disclose scrap disposition separately without netting recycling credits. | `kampmann-tip4-epd-2026`; `nist-tn1975r2` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset per accepted unit |
| downstream_use | construct process and lifecyclemodel projections and link upstream material and component datasets |
| allowed_use | declared configurations with measured M, actual route and complete atomic inventory |
| excluded_use | not for electric heaters or undeclared heat-source variants without route-specific additions |
| required_metadata | model; configuration; heat source; site; period; output count; mass and allocation records |
| required_quality_disclosure | missing upstream data, unresolved UUIDs, absent comparable ranges and allocation assumptions |
| update_trigger | material, heat-source route, fan configuration or manufacturing process materially changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | CPC Version 3.0 Structure (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product classification identity |
| `kampmann-tip4-epd-2026` | dataset | Unit heater: TIP - size 4, EPD-IES-0028786:001 (15 June 2026), https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/7d618de6-69a2-4a59-77f1-08de6ec010de/Documents | hydronic components, manufacturing process and factory-gate basis |
| `nist-tn1975r2` | literature | Building Industry Reporting and Design for Sustainability (BIRDS) Commercial Database Technical Manual: Update, NIST Technical Note 1975 Revision 2 (September 2019), https://doi.org/10.6028/NIST.TN.1975r2 | gas-route component identification; modeled case is not an industry quantity range |
