---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.armoured-or-reinforced-safes-strong-boxes-and-doors-and-safe-deposit-lockers-for-strong-f62c9b83
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Armoured or reinforced safes, strong-boxes and doors and safe deposit lockers for strong-rooms, cash or deed boxes and the like, of base metal

## 1. Scope and Applicability

This PCR applies to factory-gate production of finished base-metal armoured or reinforced safes, strong-boxes, strong-room doors, safe-deposit lockers, cash boxes, deed boxes, and functionally similar secure-storage products within CPC 3.0 code 42993. It covers product configurations whose protective body or door is fabricated from base metal and reinforced by a security-barrier construction.

The PCR does not cover ordinary non-reinforced cabinets, furniture, locks supplied as stand-alone products, alarm systems, vault construction performed at the customer site, or upstream production of steel, coatings, barrier constituents, electronics, packaging, and purchased components. A data package shall identify whether it represents a complete safe, strong-box, strong-room door, locker bank, or smaller cash or deed box; products with materially different constructions or declared protection grades shall not be averaged without a documented representativeness justification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.armoured-or-reinforced-safes-strong-boxes-and-doors-and-safe-deposit-lockers-for-strong-f62c9b83 |
| classification_refs | CPC 3.0: 42993 |
| covered_products | Finished base-metal armoured or reinforced safes, strong-boxes, strong-room doors, safe-deposit lockers, cash boxes, deed boxes, and like secure-storage products |
| excluded_products | Ordinary non-reinforced cabinets; stand-alone locks and alarms; on-site strong-room construction; upstream materials and purchased components |
| representative_product | One declared finished secure-storage product whose base-metal body or door and reinforcing barrier satisfy the producer's stated protection specification |
| production_route | Sheet-metal cutting and forming, body and door welding, barrier and lock assembly, applicable surface finishing, packaging, and factory release |
| market_state | Finished product at the manufacturing-site gate, excluding external transport packaging from the net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a finished armoured or reinforced secure-storage product at the manufacturing-site gate |
| How much | 1000 kg net finished product, excluding external transport packaging |
| How well | The declared product type, security or fire-performance designation where applicable, lock configuration, principal barrier construction, and factory acceptance status are stated |
| How long or cycle | One manufactured and released product; service life is disclosed separately and is not embedded in the reference amount |
| reference_flow_link | finished_secure_storage_product |

| Field | Value |
| --- | --- |
| Reference amount | 1000 kg |
| Reference product flow | Armoured or reinforced safes, strong-boxes and doors and safe deposit lockers for strong-rooms, cash or deed boxes and the like, of base metal 35affc80-58a8-406b-9e08-574796726703 |
| Reference flow property | Mass (93a60a56-a3c8-11da-a746-0800200b9a66) |
| Reference unit group | Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66) |
| Reference unit | kg |
| Required qualifiers | product type; model or product family; security or fire-performance designation where applicable; lock configuration; principal barrier construction; manufacturing geography; data period; net product mass basis; packaging exclusion; factory-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mr_reference_product_mass | finished_secure_storage_product | Mass (93a60a56-a3c8-11da-a746-0800200b9a66) | kg | Determine calibrated net finished-product mass after final assembly and before external transport packaging; normalize the released product total to 1000 kg. |
| mr_material_and_waste_mass | all material inputs and solid or liquid waste outputs | Mass (93a60a56-a3c8-11da-a746-0800200b9a66) | kg | Use receiving, batch, issue, return, and waste records reconciled to stock change; report wet or dry basis and composition when it changes interpretation. |
| mr_electricity | purchased and on-site electricity | Net calorific value (93a60a56-a3c8-11da-a746-0800200b9a66) | MJ | Record metered delivered electricity by process; if the meter reports kWh, retain the original reading and convert with 1 kWh = 3.6 MJ. |
| mr_process_water | process_water | Mass (93a60a56-a3c8-11da-a746-0800200b9a66) | kg | Use a mass reading or convert a metered volume with documented density and temperature assumptions; do not merge process water with wastewater. |
| mr_particulate | welding_particulate | Mass (93a60a56-a3c8-11da-a746-0800200b9a66) | kg | Prefer source testing or capture-system mass balance; where an emission factor is necessary, match the actual welding process and consumable and disclose the factor source and controls. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_start | foreground system | The boundary starts with purchased materials, components, energy, water, and packaging delivered to the manufacturing site and includes their linked upstream datasets. | epd-international-godrej-high-security-safes-2025 |
| sb_manufacture | foreground system | Include sheet-metal preparation and forming, body and door welding, barrier filling or installation, lock and hardware assembly, surface pretreatment and coating when used, curing, packaging, final inspection, rework, and factory release. | epd-international-godrej-high-security-safes-2025; us-epa-ap42-electric-arc-welding-1995 |
| sb_exchanges | all included processes | Include all known material, component, water, energy, packaging, waste, and direct elementary exchanges; no blanket percentage cut-off is permitted. Any unavailable exchange shall be identified and its omission justified. | epd-international-godrej-high-security-safes-2025 |
| sb_waste | generated wastes | Include on-site handling and treatment preparation and link each waste output to the downstream treatment or recycling scenario selected by the study; do not credit avoided production inside the foreground without an explicitly declared modelling rule. | epd-international-godrej-high-security-safes-2025 |
| sb_exclusions | foreground system | Exclude capital equipment, factory buildings, employee travel, and downstream distribution, installation, use, maintenance, and end of life unless the study goal explicitly adds them as separately disclosed processes. | epd-international-godrej-high-security-safes-2025 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, utilities, and packaging as received at the manufacturing site |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0 code 42993 complete finished secure-storage products |
| recursive_input_rule | A purchased semi-finished safe body, door, locker module, or other same-category product shall be modelled as a separate upstream product input and shall not be silently substituted for its constituent materials. |
| upstream_dataset_requirement | Each purchased input requires a geographically and technologically representative upstream dataset or an explicitly justified proxy. |
| disclosure | Disclose product type, protection designation, manufacturing geography, data period, route coverage, purchased subassemblies, allocation, exclusions, and downstream waste scenarios. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| body_fabrication_and_welding | Body fabrication and welding | required | Include cutting, forming, fitting, welding, and associated scrap and direct fume for every product. | Converts steel stock into the principal body and door shell. | fabricated body and door mass transferred to assembly |
| barrier_and_lock_assembly | Barrier and lock assembly | required | Include the actual reinforcement, barrier filling or installation, lock fitting, hardware integration, and assembly energy. | Produces the complete protective assembly. | assembled secure-storage product mass transferred to finishing or release |
| surface_finishing | Surface finishing | conditional | Include when aqueous pretreatment, powder coating, another coating, or curing occurs at the reporting site; record unused route rows as zero or not applicable. | Provides the declared surface protection and appearance. | surface-finished product mass |
| packaging_and_final_release | Packaging and final release | required | Include actual factory packaging, final inspection, accepted output, and documented rework before shipment. | Releases the reference product at the factory gate. | finished_secure_storage_product |

### Process: Body fabrication and welding (`body_fabrication_and_welding`)

#### Inputs

##### Product flows

###### Uncoated carbon-steel sheet (`steel_sheet`)

Specific sheet stock crosses the site boundary for cutting, forming, and welding into the body and door. Determine consumption from issued mass less traceable returns, reconciled with stock change.

- Selected flow: Uncoated carbon-steel sheet
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Measure net sheet consumption and normalize with `calc_mass_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_body_materials
- Sources: epd-international-godrej-high-security-safes-2025

###### Solid welding wire (`solid_welding_wire`)

Solid consumable electrode crosses the process boundary only when gas metal arc welding or another documented solid-wire route is used. Determine net wire consumption from spool issues, returns, and stock change.

- Selected flow: Solid welding wire
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Record measured consumption for the applicable welding route; otherwise record zero or not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_body_materials
- Sources: us-epa-ap42-electric-arc-welding-1995

###### Flux-cored wire (`flux_cored_wire`)

Flux-cored consumable wire crosses the process boundary when the FCAW route is used. Determine net wire consumption from spool issues, returns, and stock change.

- Selected flow: Flux Cored Wire 1b74a576-06e0-4764-97ce-11a73f8a4752
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Record measured consumption for FCAW; otherwise record zero or not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_body_materials
- Sources: us-epa-ap42-electric-arc-welding-1995

###### Fabrication electricity (`electricity_fabrication`)

Electricity crosses the process boundary to operate cutting, forming, extraction, and welding equipment. Use submetered energy or a documented machine-load allocation when a dedicated meter is unavailable.

- Selected flow: Electricity 890a70b7-b677-4e2a-8a1b-7d017e0a10ae
- Flow property / unit: Net calorific value (93a60a56-a3c8-11da-a746-0800200b9a66); Units of energy (93a60a57-a3c8-11da-a746-0800200c9a66); MJ
- Amount rule: Record delivered electricity and normalize with `calc_energy_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_fabrication_electricity
- Sources: epd-international-godrej-high-security-safes-2025

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel scrap (`steel_scrap`)

Offcuts and rejected steel parts leave fabrication as a separately measured waste flow. Record gross collected scrap less any verified internal remelt or direct reuse that never leaves the same process system.

- Selected flow: Scrap steel c3fc5605-baa3-4b25-9934-ecf7fcbc72da
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Measure dispatched scrap by scale ticket and normalize with `calc_mass_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_fabrication_waste
- Sources: epd-international-godrej-high-security-safes-2025

##### Elementary flows

###### Welding particulate (`welding_particulate`)

Airborne particulate generated by welding crosses the process boundary after accounting for capture and exhaust controls. Keep the audited particle-size-unspecified identity unless measurement establishes a different exact elementary-flow identity.

- Selected flow: Particulate matter, particle size unspecified 0ce3dedb-caca-407b-a856-a90470eb8ec0
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Use measured released mass or a documented process- and consumable-specific calculation under `calc_welding_particulate`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol ID: cp_welding_emissions
- Sources: us-epa-ap42-electric-arc-welding-1995

### Process: Barrier and lock assembly (`barrier_and_lock_assembly`)

#### Inputs

##### Product flows

###### Cementitious security-barrier compound (`cementitious_barrier`)

The formulated cementitious compound crosses the assembly boundary for filling or installing the reinforcing barrier. Measure the complete supplied mixture as one product exchange and disclose its formulation basis without splitting it into unverified constituents.

- Selected flow: Cementitious security-barrier compound
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Reconcile batch input, returned material, and residual waste, then normalize with `calc_mass_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_assembly_materials
- Sources: epd-international-godrej-high-security-safes-2025

###### Lock assembly (`lock_assembly`)

The complete declared lock assembly crosses the site boundary for installation in the door or box. Record the purchased assembly mass and disclose mechanical, electronic, or combined configuration.

- Selected flow: Secure-storage lock assembly
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Sum accepted lock assemblies installed in released products and normalize their mass with `calc_mass_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_assembly_materials
- Sources: epd-international-godrej-high-security-safes-2025

###### Assembly electricity (`electricity_assembly`)

Electricity crosses the process boundary for mixing, filling, curing support, fitting, and lock or hardware assembly. Use a dedicated meter or a documented equipment-time allocation.

- Selected flow: Electricity 890a70b7-b677-4e2a-8a1b-7d017e0a10ae
- Flow property / unit: Net calorific value (93a60a56-a3c8-11da-a746-0800200b9a66); Units of energy (93a60a57-a3c8-11da-a746-0800200c9a66); MJ
- Amount rule: Record delivered electricity and normalize with `calc_energy_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_assembly_electricity
- Sources: epd-international-godrej-high-security-safes-2025

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Barrier-compound waste (`barrier_compound_waste`)

Off-spec, spilled, or residual cementitious barrier compound leaves assembly as a separately quantified waste. Report wet or cured state and the downstream treatment route.

- Selected flow: Cementitious security-barrier compound waste
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Measure collected waste by batch or container mass and normalize with `calc_mass_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_assembly_waste
- Sources: epd-international-godrej-high-security-safes-2025

##### Elementary flows

### Process: Surface finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Powder coating (`powder_coating`)

Powder coating crosses the process boundary when the product uses an on-site powder-coating route. Determine net consumption from issued powder, recoverable recirculation, stock change, and separately collected waste.

- Selected flow: Powder Coating 0c581697-0eed-4b86-a070-b94966eb7344
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Record net fresh powder consumed; otherwise record zero or not applicable for a non-powder route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_finishing_materials
- Sources: epd-international-godrej-high-security-safes-2025

###### Process water (`process_water`)

Process water crosses the boundary when aqueous cleaning or pretreatment is performed on site. Record make-up water separately from recirculated internal water.

- Selected flow: Process Water 94a04f7e-2d5c-41f0-b182-d54a3b373a02
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Record net make-up water for the applicable route; otherwise record zero or not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_finishing_utilities
- Sources: epd-international-godrej-high-security-safes-2025

###### Finishing electricity (`electricity_finishing`)

Electricity crosses the process boundary for pretreatment equipment, booths, extraction, recovery, and curing. Submeter the route or allocate a shared meter by documented equipment operating time and load.

- Selected flow: Electricity 890a70b7-b677-4e2a-8a1b-7d017e0a10ae
- Flow property / unit: Net calorific value (93a60a56-a3c8-11da-a746-0800200b9a66); Units of energy (93a60a57-a3c8-11da-a746-0800200c9a66); MJ
- Amount rule: Record delivered electricity for the applicable finishing route and normalize with `calc_energy_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_finishing_utilities
- Sources: epd-international-godrej-high-security-safes-2025

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Powder-coating waste (`powder_coating_waste`)

Spent or unrecoverable coating powder leaves finishing as a discrete waste flow. Exclude internally recovered powder that remains within the same process loop.

- Selected flow: Powder coating waste 9aa53a82-5462-400e-9096-efab7718201f
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Measure dispatched or treated waste mass and normalize with `calc_mass_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_finishing_wastes
- Sources: epd-international-godrej-high-security-safes-2025

###### Surface-treatment wastewater (`surface_treatment_wastewater`)

Wastewater discharged from aqueous cleaning or pretreatment leaves finishing as a distinct liquid waste flow. Record discharge mass and disclose whether on-site treatment occurs before the measured boundary point.

- Selected flow: Aqueous surface-treatment wastewater
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Measure discharged wastewater for the applicable route and normalize with `calc_mass_normalization`; otherwise record zero or not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_finishing_wastes
- Sources: epd-international-godrej-high-security-safes-2025

##### Elementary flows

### Process: Packaging and final release (`packaging_and_final_release`)

#### Inputs

##### Product flows

###### Corrugated cardboard (`corrugated_cardboard`)

Corrugated cardboard crosses the process boundary as product-specific transport packaging. Determine the mass installed on released products, excluding returned or unused stock.

- Selected flow: Corrugated cardboard 8bde297e-98df-463f-bcb4-0db52bf6e0b5
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Measure packaging mass and normalize with `calc_mass_normalization`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_packaging_materials
- Sources: epd-international-godrej-high-security-safes-2025

###### Pine-wood pallet (`pine_pallet`)

A pine-wood pallet crosses the process boundary when it is shipped with the product. Record the dry or as-received pallet mass and any reuse assumption separately.

- Selected flow: Pine-wood pallet
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Measure pallet mass shipped with released products and normalize with `calc_mass_normalization`; otherwise record zero or not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_packaging_materials
- Sources: epd-international-godrej-high-security-safes-2025

###### Plastic film (`plastic_film`)

Plastic film crosses the process boundary as wrapping or protective packaging when used. Determine installed film mass from issue and product-pack records.

- Selected flow: Plastic Film 8c3dd40c-a22b-48b5-bdec-7da4d3282bfa
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Measure film mass shipped with released products and normalize with `calc_mass_normalization`; otherwise record zero or not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1000 kg finished secure-storage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol ID: cp_packaging_materials
- Sources: epd-international-godrej-high-security-safes-2025

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished secure-storage product (`finished_secure_storage_product`)

The accepted complete safe, strong-box, strong-room door, locker, cash box, deed box, or like product leaves final release as the quantitative reference. Record net finished mass before external transport packaging.

- Selected flow: Armoured or reinforced safes, strong-boxes and doors and safe deposit lockers for strong-rooms, cash or deed boxes and the like, of base metal 35affc80-58a8-406b-9e08-574796726703
- Flow property / unit: Mass (93a60a56-a3c8-11da-a746-0800200b9a66); Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66); kg
- Amount rule: Set the normalized output to exactly 1000 kg after reconciling measured accepted production.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol ID: cp_finished_product
- Sources: unsd-cpc-3-0-structure-2025; epd-international-godrej-high-security-safes-2025

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_avoid | all shared processes | Avoid allocation through process subdivision, dedicated meters, batch records, and direct assignment to the declared product family wherever practicable. |  |
| al_mass_balance | steel, barrier compound, coating, water, and packaging | Reconcile inputs, accepted product, internal returns, stock change, and measured waste before allocation; internal recycling shall not be counted as both a fresh input reduction and a credited output. |  |
| al_shared_energy | shared electricity | Allocate only the residual shared amount using a causal physical driver such as measured machine operating time multiplied by rated or measured load; document the driver and sensitivity. |  |
| al_multi_product | unavoidable multi-product production | If subdivision and causal assignment are infeasible, use mass allocation only when mass demonstrably represents resource use; otherwise select and justify another physical relationship and report an unallocated sensitivity case. | epd-international-godrej-high-security-safes-2025 |
| al_scrap | recyclable steel scrap and other wastes | Report the waste at the factory boundary and connect the chosen downstream treatment dataset; do not apply an avoided-production credit inside the foreground unless required by the declared study method and shown separately. | epd-international-godrej-high-security-safes-2025 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_body_materials | body_fabrication_and_welding | steel sheet and route-specific welding wire inputs | receiving and stock record | item identity; lot; opening stock; receipts; issues; returns; closing stock; mass | reconcile enterprise records to physical stock | kg | each lot and monthly close | at least 12 consecutive representative months | all fabrication lines serving the declared product | sum net consumption by exact material identity and welding route | purchase records; calibrated scales; stock reconciliation |
| cp_fabrication_electricity | body_fabrication_and_welding | electricity_fabrication | meter and equipment log | meter start; meter end; equipment; operating time; load; losses | dedicated submeter or documented load-time allocation | kWh and MJ | continuous or each shift | same representative period as production | all included fabrication equipment | sum delivered energy and convert retained kWh readings to MJ | meter calibration; allocation worksheet |
| cp_fabrication_waste | body_fabrication_and_welding | steel_scrap | waste dispatch record | waste identity; container tare; gross mass; destination; date | calibrated scale and dispatch ticket | kg | each dispatch | same representative period as production | fabrication waste collection points | sum net dispatched mass by destination | scale calibration; tickets; recycler receipt |
| cp_welding_emissions | body_fabrication_and_welding | welding_particulate | emission test or operating record | process; consumable; mass consumed; capture efficiency; exhaust measurement; factor reference | source test or process-specific calculation | kg | each test and monthly activity | representative operating conditions and annualized data period | every welding route in scope | calculate released mass after documented controls and sum by route | test report; factor edition; control inspection |
| cp_assembly_materials | barrier_and_lock_assembly | cementitious_barrier and lock_assembly | batch and component issue record | identity; formulation or model; batch; receipts; issues; returns; stock change; mass | batch reconciliation and installed-component count or mass | kg | each batch or production order | at least 12 consecutive representative months | all assembly lines serving the declared product | sum net installed or consumed mass by exact component | batch sheet; bill of materials; scale records |
| cp_assembly_electricity | barrier_and_lock_assembly | electricity_assembly | meter and equipment log | meter readings; equipment; operating time; load | submeter or documented load-time allocation | kWh and MJ | continuous or each shift | same representative period as production | all included assembly equipment | sum delivered energy by product family | meter calibration; allocation worksheet |
| cp_assembly_waste | barrier_and_lock_assembly | barrier_compound_waste | batch residual and waste record | state; batch; container tare; gross mass; destination | batch reconciliation and calibrated weighing | kg | each batch or dispatch | same representative period as production | all barrier preparation and filling points | sum net waste mass by state and destination | scale record; waste manifest |
| cp_finishing_materials | surface_finishing | powder_coating | coating issue and recovery record | coating identity; batch; fresh issue; recovered return; stock change; waste | booth-level material balance | kg | each batch and monthly close | same representative period as production | each finishing route used | fresh issue plus opening stock minus return and closing stock | batch sheet; inventory record; scale calibration |
| cp_finishing_utilities | surface_finishing | process_water and electricity_finishing | utility meter | meter start; meter end; route; operating time; density assumption if needed | dedicated meter or documented route allocation | kg; kWh; MJ | continuous or each shift | same representative period as production | all included pretreatment, booth, recovery, and curing equipment | sum by route and convert units under Section 4 | meter calibration; allocation and conversion worksheet |
| cp_finishing_wastes | surface_finishing | powder_coating_waste and surface_treatment_wastewater | waste and discharge record | identity; state; volume or mass; density; treatment point; destination | calibrated weighing or flow metering at the declared boundary | kg | each dispatch or continuous discharge | same representative period as production | every included finishing route | sum separately by exact waste identity and treatment route | waste manifest; meter calibration; treatment log |
| cp_packaging_materials | packaging_and_final_release | corrugated cardboard, pine pallet, and plastic film | packaging issue and pack record | material identity; supplier; units; unit mass; issues; returns; shipped quantity | weigh representative items and reconcile issues to released products | kg | each packaging design and monthly close | same representative period as production | all packaging stations for the declared product | sum installed mass separately for each packaging material | pack specification; scale records; stock reconciliation |
| cp_finished_product | packaging_and_final_release | finished_secure_storage_product | final inspection and production record | product type; model; protection designation; lock configuration; accepted count; net mass; rejected count | calibrated weighing and acceptance record | kg | each product or statistically justified homogeneous batch | same representative period as all inputs | all release points for the declared product | sum accepted net mass before packaging; normalize to 1000 kg | scale calibration; inspection release; production ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_mass_normalization | material inputs and mass outputs | normalized amount = period exchange mass / period accepted net product mass × 1000 kg | exchange mass; accepted net product mass | kg per 1000 kg finished product |  |
| calc_energy_normalization | electricity inputs | convert retained kWh reading to MJ with 3.6 MJ per kWh, then normalized energy = period MJ / period accepted net product mass × 1000 kg | meter reading; accepted net product mass | MJ per 1000 kg finished product |  |
| calc_welding_particulate | welding_particulate | released particulate = measured exhaust mass, or consumable/activity amount × matched particulate factor × (1 − verified capture fraction); do not use a factor for a different welding process or electrode | source test or activity; matched factor; control performance | kg particulate per 1000 kg finished product | us-epa-ap42-electric-arc-welding-1995 |
| calc_mass_balance | steel, barrier compound, coating, water, and packaging | input + opening stock = product incorporation + output waste + internal return + closing stock + documented discrepancy; investigate material discrepancies before normalization | input; stock; incorporated mass; returns; wastes | reconciled mass balance and discrepancy |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dqr_identity | every exchange | Preserve exact material, component, waste, and elementary-flow identity; do not aggregate atomic rows into utilities, energy carriers, materials, residues, or emissions groups. | purchase specification; process record; waste code; flow audit |
| dqr_time | foreground data | Use at least 12 consecutive representative months or justify a shorter campaign for non-continuous production and disclose seasonality, start-up, and abnormal-operation treatment. | dated raw records; production calendar; exclusion log |
| dqr_geography | upstream data | Match the manufacturing and supply geography and disclose any geographic proxy. | supplier location; dataset geography; proxy justification |
| dqr_technology | processes and upstream data | Match the actual steel form, welding process and consumable, barrier formulation, lock type, finishing route, controls, and packaging design. | bill of materials; routing; equipment and control records |
| dqr_completeness | foreground inventory | Reconcile all listed rows, report route-inapplicable rows as zero or not applicable, and document every omitted known exchange; absence of an exact UUID does not permit omission. | signed inventory checklist; mass and energy balances; omission register |
| dqr_uncertainty | measured and calculated values | Record meter or scale uncertainty, sampling coverage, allocation uncertainty, conversion assumptions, and emission-factor uncertainty where used. | calibration certificates; sampling plan; calculation workbook |
| dqr_consistency | bilingual and structured records | Keep English and Chinese row ids, UUIDs, process ids, units, route conditions, and rules aligned with the generated structured projection. | bilingual comparison; clean second sync; schema validation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_reference | reference flow | Confirm exactly one quantitative-reference output named `finished_secure_storage_product`, equal to 1000 kg net finished product, with the audited product UUID and mass references. | unsd-cpc-3-0-structure-2025 |
| val_identity | product category | Confirm CPC 3.0 code 42993 and the declared product type are within the covered boundary and that exclusions are not represented as the reference product. | unsd-cpc-3-0-structure-2025 |
| val_inventory | process inventory | Confirm all 19 atomic inventory rows are present exactly once, each has one direction and flow type, and every UUID-empty row is listed in manifest unresolved review metadata. |  |
| val_routes | conditional processes and rows | Confirm route applicability is declared and every inapplicable welding, finishing, water, wastewater, coating, or packaging row is explicitly zero or not applicable rather than omitted. | us-epa-ap42-electric-arc-welding-1995; epd-international-godrej-high-security-safes-2025 |
| val_balance | mass and energy records | Confirm the finished-product denominator, material balances, waste destinations, retained electricity readings, unit conversions, and shared-meter allocation worksheets reconcile for the same reporting period. |  |
| val_welding | welding particulate | Confirm the particulate calculation matches the documented welding process, consumable, control performance, and audited particle-size-unspecified flow identity. | us-epa-ap42-electric-arc-welding-1995 |
| val_sources | evidence | Confirm every cited source is an original verified document and that no numeric external range is asserted from the single product-specific EPD. | epd-international-godrej-high-security-safes-2025; us-epa-ap42-electric-arc-welding-1995 |
| val_projection | bilingual structured package | Confirm English and Chinese semantic alignment, exact Tiangong Chinese base names for UUID-bearing rows, valid manifest and structured schemas, current fingerprints, and a clean second structured sync. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or representative foreground manufacturing data package for CPC 42993 secure-storage products |
| downstream_use | Construction of process and lifecycle-model datasets with separately selected upstream and downstream scenarios |
| allowed_use | Factory-gate comparison only when product type, performance designation, lock configuration, principal construction, geography, data period, allocation, and completeness are equivalent |
| excluded_use | Direct comparison of unlike safe, door, locker, cash-box, or deed-box configurations; use-phase or end-of-life claims without added scenario modelling; claims that unresolved UUIDs are verified identities |
| required_metadata | product type; model family; security or fire designation; lock configuration; principal construction; net mass; geography; technology; data period; route conditions; allocation; exclusions; source and UUID audit references |
| required_quality_disclosure | measurement coverage; mass and energy balance; meter and scale uncertainty; upstream proxies; emission-factor use; omitted exchanges; unresolved UUIDs; absence of external quantity ranges |
| update_trigger | Change in product construction, protection designation, lock system, welding route, barrier formulation, coating route, energy supply, packaging design, site geography, allocation, or source evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 42993 product identity and classification boundary |
| epd-international-godrej-high-security-safes-2025 | dataset | Godrej & Boyce Manufacturing Company Limited, High Security Safes, EPD-IES-0024476, 2025, https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/d6af31c9-e7e3-48f0-e9e4-08ddacd8e900/Documents | Original product-specific evidence for construction, manufacturing stages, utilities, wastes, packaging, declared mass basis, and factory-gate process decomposition; not used to assert an external quantity range |
| us-epa-ap42-electric-arc-welding-1995 | official_guidance | United States Environmental Protection Agency, AP-42 Section 12.19 Electric Arc Welding, January 1995, https://www.epa.gov/sites/production/files/2020-11/documents/c12s19.pdf | Original official evidence for solid-wire and flux-cored welding routes, particulate generation, and route-matched measurement or calculation |
