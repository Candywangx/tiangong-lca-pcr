---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-for-the-goods-of-subclasses-45110-and-45130-except-covers-carryin-976151c5
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Parts and accessories for the goods of subclasses 45110 and 45130 (except covers, carrying cases and the like)

## 1. Scope and Applicability

This PCR addresses identifiable parts and accessories dedicated to typewriters, word-processing machines, electronic calculators, and pocket-size data recording, reproducing and displaying machines with calculating functions. Complete host machines, covers, carrying cases, general-purpose components without demonstrated host dedication, and repair services sold as services are excluded. The official classification source establishes the host scope, not a universal bill of materials (`un-cpc-3-0-structure-2025`).

The representative route supplies a finished rubber-coated typewriter platen as a good, starting with a prepared bare steel core and a purchased formulated SBR/NR coating compound. The steel-core choice is a foreground scenario to confirm by supplier drawings. Recoating and finishing evidence from Italian and US specialists supports the operations, not an assertion that all parts use this route. New and reused-core products must be separate datasets. Starting with a stripped core moves stripping and its waste into upstream preparation data; it does not eliminate them.

For calculator electronics, keyboards, gears or other dedicated parts, instantiate the actual single part number, BOM, material states and manufacturing process map. Individually add each actual exchange and audit its UUID; do not carry over platen materials or energy values. A platen dataset cannot represent electronic components. Component manufacture, upstream embodied burdens, rejected parts and host compatibility require distinct methods from complete-machine use accounting.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-for-the-goods-of-subclasses-45110-and-45130-except-covers-carryin-976151c5 |
| classification_refs | CPC 3.0: 45170; `un-cpc-3-0-structure-2025` |
| covered_products | Host-dedicated mechanical and electronic parts within the scope above |
| excluded_products | Complete machines; covers; carrying cases; general-purpose parts; repair services |
| representative_product | Rubber-coated typewriter platen roller, declared model and core provenance |
| production_route | Prepared core receipt; rubber coating; vulcanization; precision finishing; inspection; packing |
| market_state | Accepted finished part at supplier gate; new or remanufactured status declared separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide paper support and feed contact in a compatible typewriter |
| How much | 1 kg net accepted platen output; record corresponding piece count |
| How well | Meet model-specific diameter, runout, hardness, surface and paper-feed acceptance specifications documented by test |
| How long or cycle | One production batch at gate; no assumed host lifetime or replacement interval. Service comparisons require measured durability and installed duty |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Typewriter platen roller |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number; host model and function; drawing revision; dimensions; hardness acceptance method; polymer formulation; core material; new/reused core provenance; net piece mass; yield; site; period; energy technology; upstream preparation boundary; packaging; transport; intended service and durability evidence when comparing functions |

This is a partial production reference, not a complete service-life comparison. Required qualifiers must accompany every foreground package. The 1 kg basis is a normalization choice; a durability-based functional comparison must calculate the necessary number and mass of replacement parts.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_reference | accepted product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Separate product net mass from packaging and waste; convert count using measured model-specific mass. |
| energy_conversion | electricity and steam heat | Energy | MJ | Convert metered kWh by 3.6 MJ/kWh; steam uses net enthalpy transfer, not an arbitrary fixed mass-to-energy factor. |

## 5. System Boundary

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground | Collect receipt-through-dispatch coating, curing, finishing, testing, packing and attributable losses. Connect purchased inputs to upstream supply and actual transport; connect exported waste to treatment. Report the resulting cradle-to-gate partial boundary and all exclusions. | `ghg-protocol-product-standard` |
| boundary_operations | platen_production | Collect coating and finishing as specified in the route; preparation, autoclave and grinding evidence guides process inclusion, but supplier-specific hardness recommendations are not universal limits. | `vescovo-platen-recovery`; `jjshort-typewriter-platen` |
| boundary_extension | other_parts | For a different part or technology replace the representative BOM with the measured BOM and explicit atomic exchanges. Include on-site compounding, bonding, cleaning, coating emissions or boiler operation whenever present; verify each chemical and emission separately before declaring the inventory complete. | `ghg-protocol-product-standard` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Bare prepared steel platen core and delivered formulated rubber compound |
| starting_condition_role | foreground_input |
| product_classification_scope | Machine-dedicated parts; no complete-machine use phase |
| recursive_input_rule | Record a purchased same-category core once with its state-specific upstream dataset; do not recursively create an identical foreground copy. Internally circulated rework is not another purchase. |
| upstream_dataset_requirement | Document core manufacture or recovery, stripping, cleaning, removed rubber treatment, compound formulation and transport in supplier datasets. No zero-burden core assumption without explicit reuse allocation. |
| disclosure | Preparation location; core history; supplier datasets; missing stages; allocation; installed service outside this partial inventory |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| platen_production | Coating, curing, finishing and dispatch | required | Representative prepared-core platen route | foreground_production | 1 kg |

### Process: Coating, curing, finishing and dispatch (`platen_production`)

#### Inputs

##### Product flows

###### Steel typewriter platen core (`core`)

This exchange is measured at the coating-and-finishing boundary using its dedicated batch protocol.

- Selected flow: Steel typewriter platen core
- Flow property / unit: Mass / kg
- Amount rule: Record the dry net mass of prepared bare cores issued, returned and remaining in stock; retain supplier preparation and new/reused status.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net platen output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_core`

###### Unvulcanized SBR/NR compound for platen coating (`compound`)

This exchange is measured at the coating-and-finishing boundary using its dedicated batch protocol.

- Selected flow: Unvulcanized SBR/NR compound for platen coating
- Flow property / unit: Mass / kg
- Amount rule: Weigh the formulated compound as delivered and issued; retain recipe or supplier composition, curing system and returned uncured stock. Do not also count its constituent polymers as separate purchased inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net platen output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_compound`

###### Electricity (`electricity`)

This exchange is measured at the coating-and-finishing boundary using its dedicated batch protocol.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter coating, electric curing when used, machining, extraction and inspection electricity including attributable idle cycles; exclude electricity already included in purchased steam production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net platen output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`

###### heat, steam (`steam`)

This exchange is measured at the coating-and-finishing boundary using its dedicated batch protocol.

- Selected flow: heat, steam `74d07391-d5e4-4beb-bd80-4fe9a7617cf1`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: inclusion_condition: purchased steam supplies the autoclave. Measure net delivered heat using steam flow and inlet/return enthalpy; retain pressure, temperature, condensate return and supplier boundary. If steam is generated on site, instantiate the boiler fuel, water, blowdown and individual emissions instead of buying steam from the same foreground system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net platen output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`

###### corrugated board boxes (`box`)

This exchange is measured at the coating-and-finishing boundary using its dedicated batch protocol.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: inclusion_condition: corrugated boxes are used at the dispatch gate. Weigh empty boxes and allocate actual batch use to accepted net platen output; exclude box mass from product reference mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net platen output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_box`

#### Outputs

##### Product flows

###### Typewriter platen roller (`reference_product`)

This exchange is measured at the coating-and-finishing boundary using its dedicated batch protocol.

- Selected flow: Typewriter platen roller
- Flow property / unit: Mass / kg
- Amount rule: Weigh accepted finished platens after dimensional, hardness and functional inspection; normalize the accepted net product output to 1 kg. Record piece count and measured net mass per model.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net platen output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`

##### Waste flows

###### Waste rubber (`rubber_waste`)

This exchange is measured at the coating-and-finishing boundary using its dedicated batch protocol.

- Selected flow: Waste rubber `b4818cb7-cbef-403a-9fc3-a12fe8baf092`
- Flow property / unit: Mass / kg
- Amount rule: Weigh captured rubber removed during finishing and dispatched to a documented treatment route. Do not count captured material as airborne elementary emissions; measure uncaptured emissions individually where present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net platen output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rubber_waste`

###### Rejected typewriter platen roller (`reject`)

This exchange is measured at the coating-and-finishing boundary using its dedicated batch protocol.

- Selected flow: Rejected typewriter platen roller
- Flow property / unit: Mass / kg
- Amount rule: inclusion_condition: whole rejected platens leave for waste treatment. Weigh these separately from rubber grinding waste; retained rework is an internal loop and is not an exported waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net platen output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_operations | Use batch submetering and process subdivision first. Where unavoidable, allocate shared machine energy using measured operating time and load; justify the physical relationship. Use economic allocation only with a documented reason why physical allocation is unsuitable and disclose sensitivity. | `ghg-protocol-product-standard` |
| allocation_reuse | core_and_waste | Disclose the selected reuse/recycling allocation and inherited core burdens. Do not automatically credit avoided new cores or future machine service. Keep waste treatment separate from coproduct allocation; no duplicate virgin-material substitution credit. | `ghg-protocol-product-standard` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_core | platen_production | core | batch record | batch_id; part_number; dates; opening_stock; receipts; returns; closing_stock; net_quantity; unit; accepted_output; meter_id; destination | Calibrated weighing or submetering; reconcile invoices, issue notes and waste transfers; steam additionally records inlet and return states | kg | each batch | Declared representative production period including idle and failed batches | One identified site and route | Sum net exchange over the same period and divide by accepted net kg; reference output divided by itself | Calibration, traceable tickets, BOM revision, meter reconciliation and inspection records |
| cp_compound | platen_production | compound | batch record | batch_id; part_number; dates; opening_stock; receipts; returns; closing_stock; net_quantity; unit; accepted_output; meter_id; destination | Calibrated weighing or submetering; reconcile invoices, issue notes and waste transfers; steam additionally records inlet and return states | kg | each batch | Declared representative production period including idle and failed batches | One identified site and route | Sum net exchange over the same period and divide by accepted net kg; reference output divided by itself | Calibration, traceable tickets, BOM revision, meter reconciliation and inspection records |
| cp_electricity | platen_production | electricity | batch record | batch_id; part_number; dates; opening_stock; receipts; returns; closing_stock; net_quantity; unit; accepted_output; meter_id; destination | Calibrated weighing or submetering; reconcile invoices, issue notes and waste transfers; steam additionally records inlet and return states | MJ | each batch | Declared representative production period including idle and failed batches | One identified site and route | Sum net exchange over the same period and divide by accepted net kg; reference output divided by itself | Calibration, traceable tickets, BOM revision, meter reconciliation and inspection records |
| cp_steam | platen_production | steam | batch record | batch_id; part_number; dates; opening_stock; receipts; returns; closing_stock; net_quantity; unit; accepted_output; meter_id; destination | Calibrated weighing or submetering; reconcile invoices, issue notes and waste transfers; steam additionally records inlet and return states | MJ | each batch | Declared representative production period including idle and failed batches | One identified site and route | Sum net exchange over the same period and divide by accepted net kg; reference output divided by itself | Calibration, traceable tickets, BOM revision, meter reconciliation and inspection records |
| cp_box | platen_production | box | batch record | batch_id; part_number; dates; opening_stock; receipts; returns; closing_stock; net_quantity; unit; accepted_output; meter_id; destination | Calibrated weighing or submetering; reconcile invoices, issue notes and waste transfers; steam additionally records inlet and return states | kg | each batch | Declared representative production period including idle and failed batches | One identified site and route | Sum net exchange over the same period and divide by accepted net kg; reference output divided by itself | Calibration, traceable tickets, BOM revision, meter reconciliation and inspection records |
| cp_reference_product | platen_production | reference_product | batch record | batch_id; part_number; dates; opening_stock; receipts; returns; closing_stock; net_quantity; unit; accepted_output; meter_id; destination | Calibrated weighing or submetering; reconcile invoices, issue notes and waste transfers; steam additionally records inlet and return states | kg | each batch | Declared representative production period including idle and failed batches | One identified site and route | Sum net exchange over the same period and divide by accepted net kg; reference output divided by itself | Calibration, traceable tickets, BOM revision, meter reconciliation and inspection records |
| cp_rubber_waste | platen_production | rubber_waste | batch record | batch_id; part_number; dates; opening_stock; receipts; returns; closing_stock; net_quantity; unit; accepted_output; meter_id; destination | Calibrated weighing or submetering; reconcile invoices, issue notes and waste transfers; steam additionally records inlet and return states | kg | each batch | Declared representative production period including idle and failed batches | One identified site and route | Sum net exchange over the same period and divide by accepted net kg; reference output divided by itself | Calibration, traceable tickets, BOM revision, meter reconciliation and inspection records |
| cp_reject | platen_production | reject | batch record | batch_id; part_number; dates; opening_stock; receipts; returns; closing_stock; net_quantity; unit; accepted_output; meter_id; destination | Calibrated weighing or submetering; reconcile invoices, issue notes and waste transfers; steam additionally records inlet and return states | kg | each batch | Declared representative production period including idle and failed batches | One identified site and route | Sum net exchange over the same period and divide by accepted net kg; reference output divided by itself | Calibration, traceable tickets, BOM revision, meter reconciliation and inspection records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all_rows | q_i = net exchange_i / accepted net product mass; reconcile stock changes before division; retain rejected-batch burdens | matched-period measured quantities | unit/kg accepted product |  |
| mass_balance | solid_material | Core + compound input = accepted product + exported solid waste + stock change + measured losses; investigate residual against instrument uncertainty, never force closure | net solid masses | kg residual and explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_traceability | all_rows | Use site primary records; separate missing, measured zero and demonstrably absent flows. Do not extrapolate across core histories, electronic/mechanical technologies or grids without qualification. | `ghg-protocol-product-standard`; cp_* |
| quality_function | reference_product | Retain model-specific drawing, hardness method, dimensions, inspection outcomes and actual rejected mass; manufacturer hardness examples are not universal acceptance limits. | `vescovo-platen-recovery`; `jjshort-typewriter-platen` |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | Reject incompatible host parts, missing qualifiers or an unresolved UUID silently replaced by a generic machine flow. | `un-cpc-3-0-structure-2025` |
| validate_inventory | all_rows | Check atomic exchange identity, flow type, units, normalization period, upstream coverage and completeness of conditional operations. Verify electricity and purchased steam do not duplicate heat generation. |  |
| validate_balance | production | Require accepted product mass greater than zero and explain stock-adjusted mass imbalance using measurement uncertainty. Missing evidence is inconclusive, not a zero or an invented range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared part and route supply inventory for compatible machine manufacture or replacement studies |
| excluded_use | Unqualified whole-machine footprint; lifetime benefit claims; calculator electronics represented by platen data |
| required_metadata | Reference qualifiers; BOM; process map; location; dates; upstream datasets; allocation; transport and waste destinations |
| required_quality_disclosure | Missing inputs; unconfirmed identities; measured coverage; exclusions; uncertainty; route changes; absent empirical ranges |
| update_trigger | Change in part design, compound, core provenance, energy supply, process or supplier evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UN Statistics Division, CPC 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Entries 45110, 45130 and 45170; classification scope. Verified 2026-09-08. |
| ghg-protocol-product-standard | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Unit of analysis, partial-boundary disclosure, primary records and allocation hierarchy; used as GHG accounting guidance, not a complete multi-impact LCA specification. Verified 2026-09-08. |
| vescovo-platen-recovery | handbook | Vescovo Restauri, European Typewriter Platen Recovery Service. https://www.vescovorestauri.it/laboratorio/european-typewriter-platen-recovery-service/ | Italian route: SBR/NR coating, vulcanization, dimensional finishing; qualitative process evidence only. Verified 2026-09-08. |
| jjshort-typewriter-platen | handbook | J.J. Short Associates, Typewriter Platens, Feed Rollers, Bail Rollers, Finger Rollers and Power Rollers. https://www.jjshort.com/typewriter-platen-repair.php | US specialist: stripping, recoating, precision grinding, model-specific rubber and hardness. No numerical inventory range. Verified 2026-09-08. |
