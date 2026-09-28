---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.straw-or-fodder-balers-including-pickup-balers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Straw or fodder balers, including pickup balers

## 1. Scope and Applicability

This rule covers manufacture of a complete, accepted straw or fodder baler at the factory gate, including a pickup baler when fitted. It applies to round and square balers whose function is to compact harvested straw or fodder into bales. Record the actual model and configuration. It excludes tractors, standalone mowers and other haymaking machines, loose straw or fodder, bales, field operation, maintenance, and end of life. Purchased materials and components enter as upstream product inputs; the foreground includes site-performed cutting, forming, welding and finishing, together with assembly and acceptance. Include each operation only when performed for the declared configuration.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.straw-or-fodder-balers-including-pickup-balers |
| classification_refs | CPC 3.0 44125 (`un-cpc-3-2025`) |
| covered_products | Complete straw or fodder round and square balers, including pickup balers |
| excluded_products | Other haymaking machinery; tractors; baler parts sold separately; baled straw or fodder |
| representative_product | One accepted complete baler of a declared model and configuration |
| production_route | Steel fabrication, welding, finishing where used, assembly and acceptance; purchased components remain separate inputs |
| market_state | Complete tested machine at the factory gate, excluding transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Compact harvested straw or fodder into bales with an accepted complete baler. |
| How much | One accepted complete baler of the declared configuration. |
| How well | Conforms to the manufacturer's acceptance record for that configuration; state pickup and bale format. |
| How long or cycle | One manufactured machine at the factory gate; service life and field cycles are outside this production dataset. |
| reference_flow_link | `finished_baler` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Straw or fodder balers, including pickup balers `696c0149-7a29-424b-8aa3-bd8e3f015901` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; serial or lot; round or square bale format; pickup configuration; drive and wrapping configuration; accepted complete net mass M; factory gate and reporting period |

M is measured for the accepted machine represented by the data package. Do not substitute a catalogue weight or transport gross mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete baler of the same configuration in kg; collect using cp_mass. |
| `electricity_energy` | electricity | Net calorific value | MJ | Record purchased electricity as metered energy in MJ; convert from kWh using 1 kWh = 3.6 MJ and preserve the meter unit in the source record. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel, coating material, components and electricity enter the integrated factory boundary; disclose incoming state and supplier gate. |
| starting_condition_role | Upstream inputs to an accepted complete baler manufacturing dataset. |
| product_classification_scope | Complete balers classified by CPC 3.0 44125, not crop material or separately sold machinery parts. |
| recursive_input_rule | If an input is itself a complete baler, record it as a separately purchased product and link an upstream dataset; do not recurse into this foreground process. |
| upstream_dataset_requirement | Use upstream datasets for each purchased input with matching material state, electricity supply geography and supplier gate. |
| disclosure | Disclose model, configuration, site, period, included stages, purchased-component content and exclusions. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | factory_gate | Include purchased inputs and on-site fabrication, finishing, assembly and acceptance through the accepted machine gate; exclude field use and disposal. | |
| `boundary_identity` | product_category | Keep complete balers separate from neighbouring haymaking machinery and separately sold parts. | `un-cpc-3-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `baler_manufacture` | Integrated baler fabrication and assembly | required | Every accepted baler | Foreground manufacturing and acceptance; includes site electricity for all included stages | per one accepted finished baler |
| `powder_finishing` | Powder-coating material application | conditional | Include only when the declared machine's finish uses powder coating; exclude for other finishing routes and disclose the alternative route | Foreground finishing material input, with energy already in `baler_manufacture` | per one accepted finished baler |

### Process: Integrated baler fabrication and assembly (`baler_manufacture`)

#### Inputs

##### Product flows

###### Hot-rolled non-alloy steel sheet input (`steel_sheet`)

Record the mass of one specified hot-rolled non-alloy steel sheet or plate stock delivered for the configured baler, before cutting. Record grade and thickness; do not substitute alloy or galvanized stock.

- Selected flow: Hot-rolled non-alloy steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured stock issued to accepted baler production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Solid steel arc-welding wire input (`welding_wire`)

Include when solid-wire arc welding is used for this baler. Record the mass of the specific wire grade issued net of returned wire; another welding route requires its own resolved exchange.

- Selected flow: Solid steel arc-welding wire
- Flow property / unit: Mass / kg
- Amount rule: Measured solid wire consumed for accepted baler production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Purchased electricity for manufacture (`electricity`)

Record the attributable metered electricity delivered to the site for fabrication, finishing, assembly and acceptance; choose the upstream electricity dataset for the site and reporting period.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered purchased electricity attributable to accepted balers, converted to MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Purchased baler gearbox (`gearbox`)

Record one configured agricultural-baler gearbox received as a separate purchased component when fitted. Use its supplier dataset; do not use a wind-turbine gearbox proxy.

- Selected flow: Agricultural baler gearbox
- Flow property / unit: Number of items / item
- Amount rule: Accepted gearbox count installed in the declared baler configuration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete baler (`finished_baler`)

Measure the net mass of the complete machine after acceptance and before transport packaging; use the same configuration and acceptance record as the functional unit.

- Selected flow: Straw or fodder balers, including pickup balers `696c0149-7a29-424b-8aa3-bd8e3f015901`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Post-industrial steel fabrication scrap (`steel_scrap`)

Record segregated steel offcuts leaving the factory as waste. If scrap is internally reused, keep it within the foreground material balance and exclude it from this exported waste amount.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap crossing the factory waste gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

##### Elementary flows

### Process: Powder-coating material application (`powder_finishing`)

#### Inputs

##### Product flows

###### Powder-coating paint input (`powder_coating`)

Include only for the powder-coating route. Record the mass of one formulated powder-coating paint charged net of recovered powder; disclose formulation and coating technology.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Measured powder paint consumed for the accepted baler configuration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared_factory_inputs | First assign directly metered or recorded material, electricity and waste to the declared baler model and period. | |
| `allocation_shared` | unavoidable_shared_inputs | When direct assignment is unavailable, allocate the measured shared quantity by a documented physical driver reflecting use of the shared process; disclose driver, denominator and sensitivity. | |
| `scrap_no_credit` | steel_scrap | Report exported steel scrap as a waste flow at the gate; avoid an unverified avoided-production credit in the foreground inventory. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `baler_manufacture` | accepted complete baler | weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete baler on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted machine | reporting period | manufacturing site | accepted net mass per baler | calibration certificate; acceptance record |
| `cp_material` | `baler_manufacture` | steel sheet and solid welding wire, each separately | issue and return ledger | model; configuration; material specification; issued mass; returned mass; accepted machine count | Reconcile material issue and returns for each atomic product against the accepted machine record. | kg | each batch | reporting period | manufacturing site | per one accepted finished baler | weighed issue records; BOM; return ledger |
| `cp_energy` | `baler_manufacture` | purchased electricity | meter and allocation record | meter id; kWh; period; production line; accepted machine count; allocation driver | Read calibrated meter totals and assign attributable electricity to accepted machines. | MJ | monthly | reporting period | manufacturing site | per one accepted finished baler | meter readings; tariff invoice; allocation worksheet |
| `cp_parts` | `baler_manufacture` | agricultural baler gearbox | receipt and installation ledger | component specification; received count; installed count; model; serial number | Reconcile supplier receipts and installed gearbox count to each accepted configuration. | item | each accepted machine | reporting period | manufacturing site | per one accepted finished baler | supplier invoice; BOM; acceptance record |
| `cp_waste` | `baler_manufacture` | exported steel scrap | weighed waste transfer | scrap grade; mass; transfer date; receiver; accepted machine count | Weigh segregated offcuts at the waste gate and deduct internal returns. | kg | each transfer | reporting period | manufacturing site | per one accepted finished baler | weighbridge ticket; transfer note |
| `cp_coating` | `powder_finishing` | powder coating paint | coating material ledger | formulation; charged mass; recovered mass; coated model; accepted machine count | Reconcile powder charged and recovered for the declared coating route. | kg | each coating batch | reporting period | manufacturing site | per one accepted finished baler | issue ledger; recovery record; coating specification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_convert` | `electricity` | Electricity in MJ equals metered kWh multiplied by 3.6. | meter kWh | MJ per accepted baler | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and components | Confirm model, configuration, bale format, pickup and installed gearbox specification. | BOM and acceptance record |
| `dq_balance` | steel_sheet and steel_scrap | Reconcile issued sheet, returned stock, incorporated steel and exported scrap without treating internal reuse as waste. | material and waste ledgers |
| `dq_time` | all foreground exchanges | Use the same reporting period and site scope as the accepted machine output. | dated meter, issue, transfer and acceptance records |
| `dq_route` | powder_finishing | Disclose actual coating route and product formulation; mark this process not applicable if powder coating is absent. | coating specification and batch record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_mass` | finished_baler | Check M is the accepted net mass from `cp_mass` and the output amount is M kg for the same configuration. | |
| `validate_basis` | all_inventory_rows | Check every input and waste amount is per one accepted finished baler and tied to a collection record. | |
| `validate_identity` | unresolved_flow_uuids | Do not substitute non-exact TianGong identities for hot-rolled sheet, solid welding wire or the baler gearbox. | |
| `validate_route` | powder_finishing | Require a declared powder-coating route before including `powder_coating`. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared baler model and configuration. |
| downstream_use | secondary_dataset; background_dataset for subsequent machinery systems |
| allowed_use | Model cradle-to-factory-gate manufacturing of the declared baler configuration. |
| excluded_use | Field baling service, lifetime impacts, tractor operation or end-of-life claims without additional data. |
| required_metadata | model, configuration, bale format, pickup, gearbox, coating route, site, period, M and gate definition |
| required_quality_disclosure | measurement evidence, allocated shares, unresolved flow UUIDs, missing external ranges and excluded stages |
| update_trigger | Change of machine configuration, material specification, coating route, supplier mix or production site. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 44125 product identity and neighbouring category distinction |
