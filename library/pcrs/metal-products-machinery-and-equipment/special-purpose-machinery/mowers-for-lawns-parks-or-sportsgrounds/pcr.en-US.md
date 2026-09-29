---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mowers-for-lawns-parks-or-sportsgrounds
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mowers for lawns, parks or sportsgrounds

## 1. Scope and Applicability

This PCR covers production of complete machines primarily intended to cut grass on lawns, parks or sportsgrounds, including walk-behind, ride-on and autonomous mowers with gasoline, diesel or electric propulsion. It defines a factory-gate product dataset, not a mowing-service comparison. Declare the model, cutting system, propulsion, power supply, included battery and accessories, manufacturing site and acceptance state. Other mowers such as tractor-mounted cutter bars, hand-held trimmers, spare blades, stand-alone chargers and grass-cutting services are outside this product boundary. The UN CPC entries distinguish 44121 from 44123; route-specific examples in the mower LCA studies do not establish category-wide amounts. `un-cpc-3-2025`; `un-cpc-exp-3-2025`; `ramboll-husqvarna-2022`; `chalmers-lan-liu-2010`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mowers-for-lawns-parks-or-sportsgrounds` |
| classification_refs | CPC 3.0 44121; classification identity only, without an accepted mapping claim. |
| covered_products | Complete lawn, park and sportsground mowers at factory gate, including walk-behind, ride-on and robotic configurations. |
| excluded_products | Tractor-mounted cutter bars and other non-lawn mowers (CPC 44123), parts sold alone, trimmers, services, and used or refurbished machines. |
| representative_product | One accepted complete mower of the declared model and configuration. |
| production_route | Purchased components and conditional in-house metal or plastic fabrication, followed by assembly, acceptance test and packaging; disclose gasoline or electric route. |
| market_state | New, complete, accepted, gate-ready machine; transport packaging is separate from its net mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a complete mower capable of cutting managed grass in a lawn, park or sportsground. |
| How much | One accepted complete machine of the declared configuration. |
| How well | Meets the manufacturer's declared cutting and acceptance specification; record cutting width, drive and power source. |
| How long or cycle | At factory-gate acceptance; operating lifetime and mowing frequency are downstream scenario parameters. |
| reference_flow_link | `finished_mower` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Mowers for lawns, parks or sportsgrounds `2855f6db-d009-4af5-a3de-b01c75d14cd9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; configuration; cutting system; propulsion and energy source; installed battery chemistry and capacity when applicable; included accessories; acceptance record; measured net mass M; factory location and reference year. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `electricity_conversion` | `site_electricity` | Net calorific value | MJ | If the factory meter records kWh, convert the attributable electricity to MJ using 1 kWh = 3.6 MJ before reporting the selected flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | New complete mower accepted at the factory gate; disclose included accessories and whether packaging is separately counted. |
| starting_condition_role | Product output of foreground manufacture; upstream purchased materials and parts retain their supplier production datasets. |
| product_classification_scope | CPC 3.0 44121 identifies the covered product, not a blanket identity for inputs. |
| recursive_input_rule | A complete mower entering rework is recorded as a separately identified input with its original upstream dataset; do not recursively apply this PCR to its own output. |
| upstream_dataset_requirement | Link geographically and technically representative datasets for purchased sheets, resin, components, fuels, electricity and packaging; disclose proxy use. |
| disclosure | Report site, year, model, route, included components, mass scope, direct versus allocated records, omitted flows and upstream dataset provenance. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | product system | Include upstream production and inbound transport of recorded inputs, attributable in-house fabrication, assembly, acceptance test and gate packaging; stop at factory gate. | `ramboll-husqvarna-2022`; `chalmers-lan-liu-2010` |
| `boundary_downstream` | downstream use | Keep customer mowing fuel or electricity, maintenance, distribution after factory gate and end-of-life outside this production inventory; model them in separately declared downstream stages. | `ramboll-husqvarna-2022` |
| `boundary_no_double_count` | purchased components | A purchased painted part or moulded housing includes its supplier production upstream; do not also count its constituent sheet or resin as this factory's input. | `ramboll-husqvarna-2022`; `chalmers-lan-liu-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mower_manufacture` | Mower fabrication, assembly, acceptance test and gate packaging | `required` | All covered routes; apply each flow card's stated route condition. | Foreground production process | One accepted complete machine of the declared configuration. |

### Process: Mower manufacture (`mower_manufacture`)

#### Inputs

##### Product flows

###### Hot-rolled steel sheet (`steel_sheet`)

Conditional input when the factory cuts and forms a steel chassis or deck; record purchased sheet mass, not finished component mass.

- Selected flow: Hot-rolled steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `chalmers-lan-liu-2010`

###### ABS granulate (`abs_granulate`)

Conditional input when ABS housing parts are injection moulded in this factory; exclude the same resin embedded in purchased housings.

- Selected flow: Acrylonitrile-butadiene-styrene (ABS) copolymer, granulate `8f1317c1-aa51-4524-8692-74079c923e2c`
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `ramboll-husqvarna-2022`

###### Purchased painted metal parts (`painted_metal_parts`)

Conditional purchased mower deck or chassis parts; exclude this input when the same metal parts are made and counted from sheet within the factory.

- Selected flow: Painted metal parts for lawn mower `8eb07159-a8e1-4d36-9a53-098a20f6fba7`
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `chalmers-lan-liu-2010`

###### Gasoline engine (`gasoline_engine`)

Conditional purchased complete engine for a gasoline-powered mower; exclude for an electric-only model.

- Selected flow: Small gasoline internal combustion engine `139afa12-e131-4bed-8e26-9ab59c89f101`
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `chalmers-lan-liu-2010`

###### Electric motor (`electric_motor`)

Conditional purchased cutting or traction motor on an electric mower; record actual installed motor mass.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `ramboll-husqvarna-2022`

###### Lithium-ion battery (`liion_battery`)

Conditional installed complete lithium-ion battery on a battery-powered mower; count battery items and disclose chemistry and capacity separately.

- Selected flow: Lithium Ion Battery `5554faa4-1ae2-459a-959a-b2180ab3cedc`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Count installed battery items per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_battery`
- Sources: `ramboll-husqvarna-2022`

###### Purchased injection-moulded housing (`purchased_housing`)

Conditional input for a purchased plastic housing; exclude the same housing when produced in-house from the recorded ABS granulate.

- Selected flow: Injection molded plastic housing parts `42e17f3b-3473-4b98-a766-f11ce51c2669`
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `ramboll-husqvarna-2022`

###### Factory electricity (`site_electricity`)

Electricity used for attributable fabrication, assembly and acceptance testing at this factory; meter or physically allocate the shared total.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured MJ per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ramboll-husqvarna-2022`

###### Gasoline for factory test (`gasoline_test`)

Conditional fuel input when a gasoline mower is run during acceptance testing; exclude customer-use fuel and disclose exhaust modelling.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `ramboll-husqvarna-2022`

###### Corrugated shipping box (`corrugated_box`)

Conditional single corrugated box supplied with a gate-ready mower; exclude reusable pallets and account for them separately.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ramboll-husqvarna-2022`

###### Diesel engine (`diesel_engine`)

Conditional complete installed diesel engine on a diesel ride-on mower; count engine items and disclose rated power.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured Item(s) per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_engine_count`
- Sources: `ramboll-husqvarna-2022`

###### Diesel acceptance-test fuel (`diesel_test`)

Conditional diesel input when a diesel mower is run during factory acceptance testing; exclude customer-use fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `ramboll-husqvarna-2022`

###### Mower cutting blade (`cutting_blade`)

Installed grass-cutting steel blade on the accepted mower; record the actual blade mass and configuration, not a generic saw blade.

- Selected flow: Steel mower cutting blade
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `ramboll-husqvarna-2022`

#### Outputs

##### Product flows

###### Accepted finished mower (`finished_mower`)

Output is one complete accepted mower of the declared configuration at the factory gate; net mass M excludes transport packaging and separate accessories.

- Selected flow: Mowers for lawns, parks or sportsgrounds `2855f6db-d009-4af5-a3de-b01c75d14cd9`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`

##### Waste flows

###### Steel fabrication scrap (`steel_scrap`)

Conditional separately collected post-industrial ferrous scrap from in-house sheet cutting or forming; record outgoing mass.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `chalmers-lan-liu-2010`

###### ABS moulding scrap (`abs_moulding_scrap`)

Conditional separately collected ABS sprues and rejected ABS housings from in-house moulding; do not combine with plastic packaging waste.

- Selected flow: ABS injection-moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured kg per one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `ramboll-husqvarna-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_subdivide` | shared manufacturing | First isolate model or line-specific material, energy, test and waste records; preserve direct measurements. | `eu-pef-2021` |
| `allocate_causal` | shared manufacturing | If subdivision is impossible, use a documented physical driver such as equipment operating time for electricity or measured material throughput for scrap; demonstrate causation and disclose denominator and sensitivity. | `eu-pef-2021` |
| `allocate_recycling` | outgoing scrap | Record segregated scrap mass and actual destination; do not claim avoided virgin-material credit inside this production inventory without an explicitly declared downstream method. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `mower_manufacture` | finished reference machine | calibrated weighing and acceptance record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each sampled accepted configuration | reporting year | final acceptance at site | accepted net mass per machine | scale calibration and acceptance record |
| `cp_bom` | `mower_manufacture` | sheet, resin and purchased components | controlled bill of materials and receiving weights | model; configuration; part number; material; received mass; accepted machine count | Reconcile purchased or consumed component mass with the accepted-model bill of materials and stock movements. | kg | each production batch | reporting year | manufacturing site and tier-one suppliers | attributable material mass / accepted machines | signed BOM revision and receiving records |
| `cp_battery` | `mower_manufacture` | installed lithium-ion battery | serialised BOM and assembly record | model; battery part number; chemistry; capacity; installed item count; accepted machine count | Count complete installed batteries against serialised acceptance and supplier records. | Item(s) | each production batch | reporting year | battery-equipped route | installed battery items / accepted machines | battery BOM and acceptance record |
| `cp_engine_count` | `mower_manufacture` | installed diesel engine | engine BOM and acceptance record | model; engine part number; rated power; installed item count; accepted machine count | Count complete installed diesel engines against the signed BOM and acceptance record. | Item(s) | each production batch | reporting year | diesel-powered route | installed engine items / accepted machines | engine BOM and acceptance record |
| `cp_energy` | `mower_manufacture` | site electricity | meter and production log | meter interval; kWh; line hours; accepted machine count | Meter attributable factory electricity; subdivide by line or use documented causal operating hours for shared meters. | MJ | monthly | reporting year | manufacturing site | attributable electricity / accepted machines | calibrated meter, utility bill and production hours |
| `cp_test` | `mower_manufacture` | gasoline or diesel acceptance test | fuel issue and test record | fuel type; fuel mass; test run; model; accepted machine count | Weigh or trace gasoline or diesel issued to acceptance tests, net of returned fuel. | kg | each test campaign | reporting year | gasoline or diesel route at manufacturing site | test fuel mass / accepted machines | fuel issue and acceptance log |
| `cp_pack` | `mower_manufacture` | corrugated box | packaging BOM and issue record | box specification; dry mass; box count; accepted machine count | Weigh the actual corrugated box and reconcile issued boxes to accepted machines. | kg | each production batch | reporting year | gate packaging | corrugated box mass / accepted machines | packaging specification and issue record |
| `cp_scrap` | `mower_manufacture` | separate steel and ABS scrap | waste weighing and segregation record | waste code; material; weighed mass; batch; accepted machine count | Weigh steel and ABS scrap separately before transfer; reconcile batch origin and destination. | kg | each waste transfer | reporting year | on-site fabrication | attributable segregated scrap / accepted machines | calibrated weighbridge ticket and waste transfer record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_mj` | `site_electricity` | Attributable MJ = metered kWh × 3.6 after documented shared-meter allocation. | metered kWh; accepted machine count; causal line hours when shared | MJ per accepted machine | `eu-pef-2021` |
| `activity_per_machine` | recorded inputs and wastes | Attribute the measured batch quantity to the declared model and divide by accepted machines of that model; retain rejected units and rework in the batch balance. | batch quantities; accepted machine count; model records | exchange per accepted machine | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all rows | Match every source record to the same model, route, configuration and reporting period as the reference machine. | BOM revision, serial and acceptance records. |
| `dq_mass` | reference and materials | Measure net mass M and reconcile major material or component quantities without merging shipping packaging into the machine. | scale record, BOM and packaging records. |
| `dq_route` | conditional rows | State why each gasoline, diesel, electric, battery, purchased-housing and in-house fabrication row applies or is absent. | route and process records. |
| `dq_gap` | unresolved rows and quantities | Keep UUID and range evidence gaps visible; do not substitute a proxy identity or a case value for a category benchmark. | lookup review and foreground records. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Confirm one accepted complete CPC 44121 mower output, the exact reference UUID and M kg for the same configuration. | `un-cpc-3-2025` |
| `validate_material_route` | inventory | Reconcile purchased components against in-house sheet and resin routes; reject duplicate counting and record each condition as present or absent. | `ramboll-husqvarna-2022`; `chalmers-lan-liu-2010` |
| `validate_utilities` | electricity and test fuel | Confirm metered electricity, any gasoline or diesel test use, their units and a causal shared-site allocation; disclose exhaust modelling without counting customer use. | `eu-pef-2021`; `ramboll-husqvarna-2022` |
| `validate_scrap` | waste | Match steel and ABS waste masses with separate transfer records and declared treatment; unresolved ABS flow UUID remains blank. | `ramboll-husqvarna-2022`; `chalmers-lan-liu-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product manufacturing dataset. |
| downstream_use | `secondary_dataset`; may serve as `background_dataset` for an explicitly compatible mower supply chain. |
| allowed_use | Cradle-to-factory-gate inventory for the declared mower configuration with separately linked upstream datasets. |
| excluded_use | Claims about mowing service, lifetime impacts, comparative superiority, or other mower configurations without matched use-stage and quality data. |
| required_metadata | Model, route, cutting width, motor or engine, battery chemistry and capacity, factory, year, M, included accessories, packaging scope and upstream dataset versions. |
| required_quality_disclosure | Meter coverage, BOM completeness, allocation drivers, missing UUIDs, quantity range evidence gaps, proxy datasets, rejects and waste destinations. |
| update_trigger | Design or bill-of-material change, powertrain change, supplier/site change, new measured data or resolved UUID identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, row 44121; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-09-24). | Product identity. |
| `un-cpc-exp-3-2025` | `official_guidance` | UN Statistics Division, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, entries 44121 and 44123; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-09-24). | Neighboring mower boundary. |
| `ramboll-husqvarna-2022` | `literature` | Ramboll Sweden AB for Husqvarna Group, LCA of CEORA™ 546 EPOS™ & Rider P525DX, version 1.3, 7 June 2022, pp. 2, 7, 12–13; https://www.husqvarna.com/-/files/aprimo/husqvarna/robotic-mowers/documents/guideline/qk-274541.pdf?v=3a59cbf2 (accessed 2026-09-24). | Mower routes, process decomposition and conditional inputs; case observations only. |
| `chalmers-lan-liu-2010` | `literature` | Xing Lan and Yu Liu, Life Cycle Assessment of Lawnmowers: Two Mowers' Case Studies, Chalmers Master's Thesis 2010:11, §3.1, p. 7; https://odr.chalmers.se/bitstreams/286ce17b-0137-4137-82fd-9183f9e1bdf1/download (accessed 2026-09-24). | Walk-behind fabrication, purchased components and assembly; case observations only. |
| `eu-pef-2021` | `official_guidance` | European Commission, Annex I, Product Environmental Footprint Method, §4.5, to Recommendation (EU) 2021/2279, 16 December 2021; https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf (accessed 2026-09-24). | Shared-process allocation hierarchy. |
