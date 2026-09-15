---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.primary-cells-and-primary-batteries
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Primary cells and primary batteries

## 1. Scope and Applicability

This PCR applies to new primary cells and primary batteries that deliver electrical energy by direct conversion of chemical energy and are not designed to be electrically recharged. It covers a single cell and a group of primary cells connected or enclosed as a complete battery, in the condition in which the product leaves the manufacturing site. The foreground boundary covers received material preparation, component forming, electrode and electrolyte preparation, cell assembly and filling, sealing, inspection, electrical testing, marking, and packaging.

The category includes zinc-manganese dioxide, alkaline manganese dioxide-zinc, primary lithium, zinc-air, silver-oxide, and other non-rechargeable electrochemical systems when the dataset declares the actual chemistry and provides a complete route-specific atomic inventory. The representative route in this PCR is a cylindrical alkaline manganese dioxide-zinc battery. The representative inventory is not a substitute for the bill of materials of another chemistry or format.

Rechargeable accumulators, rechargeable battery packs, capacitors, battery parts sold separately, spent batteries, recycling, charging, use, and end-of-life treatment are excluded. A product marketed for recharging is outside this PCR even if it can also be used once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.primary-cells-and-primary-batteries |
| classification_refs | CPC 3.0: 46410, Primary cells and primary batteries |
| covered_products | New non-rechargeable electrochemical cells and complete primary batteries, including cylindrical, prismatic, button, coin, reserve, and multi-cell products |
| excluded_products | Rechargeable accumulators and packs; capacitors; separately sold parts and separators; spent batteries and battery scrap; chargers; use and end-of-life services |
| representative_product | Factory-gate, sale-ready cylindrical alkaline manganese dioxide-zinc battery |
| production_route | Purchased active and structural materials; cathode and anode preparation; component forming; assembly; electrolyte filling; sealing; inspection; electrical testing; marking; packaging |
| market_state | New, non-rechargeable, tested, marked, and packaged product at the manufacturing-site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of electrical energy by a declared primary electrochemical cell or battery |
| How much | One conforming primary cell or primary battery of the declared chemistry, format, and rated capacity |
| How well | Meets the declared rated voltage and capacity under the stated discharge load, duty cycle, temperature, and end-point voltage, and meets the declared leakage and safety acceptance criteria |
| How long or cycle | One non-rechargeable discharge life, with the declared shelf-life and storage condition |
| reference_flow_link | One sale-ready item of the declared primary cell or primary battery at the manufacturing-site gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 item |
| Reference product flow | Alkaline battery `b8cd9a54-b808-450f-8aa6-3ea2a037c416` |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | primary chemistry and electrode couple; IEC or equivalent designation; cell or multi-cell battery; physical format and dimensions; nominal and rated voltage; rated capacity and capacity unit; discharge load and duty cycle; test temperature; end-point voltage; shelf-life claim and storage condition; leakage and safety acceptance criteria; package configuration; manufacturing site and geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. A non-alkaline product may use this PCR only after replacing the representative product flow with an exact route-specific flow and providing its complete route-specific inventory.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | Reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only conforming, sale-ready items. Declare the number of cells in every multi-cell battery and do not treat one cell and one multi-cell battery as equivalent items. |
| `material_mass` | Material and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net as-delivered mass crossing the foreground boundary. Record concentration, moisture, coating, alloy, and purity separately; do not silently convert solution mass to dry substance mass. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity in its source unit and convert to MJ with a documented conversion factor; declare voltage level, grid geography, supplier mix where used, and included distribution losses. |
| `performance_capacity` | Rated capacity qualifier | Declared capacity measure | Ah, mAh, or Wh | Capacity is valid only with the discharge current or load, duty cycle, test temperature, and end-point voltage. Do not compare capacity values with different test conditions without an explicit conversion or test model. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased active materials, electrolyte constituents, component materials, packaging, water, and delivered energy at the primary-battery manufacturing-site gate |
| starting_condition_role | Cradle-to-gate foreground entry point for primary-cell and primary-battery manufacture |
| product_classification_scope | New non-rechargeable primary cells and primary batteries; excludes rechargeable accumulators, parts sold separately, and spent batteries |
| recursive_input_rule | When a primary cell or primary battery is purchased for assembly into a larger primary battery, record it once as a same-category product input and link its upstream factory-gate dataset; do not recursively reconstruct it inside the receiving process |
| upstream_dataset_requirement | Every purchased material, energy carrier, water supply, packaging component, and same-category product input requires a geographically and technologically representative upstream dataset or an explicit data-gap disclosure |
| disclosure | Declare chemistry, format, site, production period, purchased-versus-in-house component boundary, upstream dataset choices, internal recycling, rejected-product treatment, packaging configuration, and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | Foreground manufacture | Include material forming, active-material and electrolyte preparation performed on site, cell assembly and filling, sealing, inspection, electrical testing, marking, and packaging through the sale-ready factory gate. | `us-epa-primary-battery-manufacturing-1975`; `energizer-alkaline-handbook-2018` |
| `sb_upstream_inputs` | Purchased inputs | Link upstream production and delivery datasets for every purchased input; keep the foreground amount as the actual net site receipt or consumption. |  |
| `sb_downstream_exclusion` | Downstream stages | Exclude distribution after the factory gate, use, attempted recharging, and end-of-life treatment unless a separate study system explicitly adds those stages. | `eu-batteries-regulation-2023` |
| `sb_route_completeness` | Non-representative chemistry or format | Replace the representative alkaline bill of materials with the actual atomic exchanges and disclose all route-specific active materials, electrolyte, container, terminals, separator, seals, labels, process emissions, and wastes. | `eu-batteries-regulation-2023`; `energizer-alkaline-ais-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `primary_battery_manufacturing` | Primary-cell component preparation, assembly, testing, and packaging | required | Always for a factory-gate primary-cell or primary-battery dataset | Foreground production from received inputs to tested and packaged output | 1 conforming sale-ready primary cell or primary battery item |

### Process: Primary-cell component preparation, assembly, testing, and packaging (`primary_battery_manufacturing`)

#### Inputs

##### Product flows

###### Cathode manganese dioxide (`cathode_manganese_dioxide`)

Record manganese dioxide received for the cathode mixture of the representative alkaline route.

- Selected flow: Manganese dioxide `a882e0bf-5e21-45e9-8f38-65df4d72bd7f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net mass consumed, excluding returned unopened material and separately quantified internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### Zinc-dust anode material (`anode_zinc_dust`)

Record zinc dust or powder received for the gelled anode of the representative alkaline route.

- Selected flow: Zinc dust `4d92b8d4-6633-4238-b0e2-9096db3e8882`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net zinc-dust mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### Potassium-hydroxide electrolyte (`electrolyte_potassium_hydroxide`)

Record the as-delivered potassium-hydroxide input and its solution concentration. Water included in a purchased solution is not also recorded as process water.

- Selected flow: Potassium hydroxide `4e9c2ac1-efab-4b4c-aa54-79440221a6c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net as-delivered mass consumed, with potassium-hydroxide concentration and water content retained as qualifiers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### Conductive graphite for cathode (`cathode_conductive_graphite`)

Record battery-grade graphite powder added as the cathode conductor. The exact TianGong UUID remains unresolved; do not substitute a graphite electrode or lubricant.

- Selected flow: Battery-grade conductive graphite powder
- Flow property / unit: Mass / kg
- Amount rule: measured net graphite-powder mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### Nickel-plated steel sheet for can and terminals (`nickel_plated_steel_sheet`)

Record nickel-plated steel sheet received for the can, covers, or terminals. The exact TianGong UUID remains unresolved; do not substitute plain steel or nickel sheet.

- Selected flow: Nickel-plated steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured net nickel-plated steel-sheet mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### Brass current-collector material (`current_collector_brass`)

Record brass received for the anode current collector of the representative cylindrical route.

- Selected flow: Brass `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net brass mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-handbook-2018`

###### Separator paper (`separator_paper`)

Record separator paper received for the representative route. If another separator material is used, replace this row with that one concrete material exchange.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net separator-paper mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-handbook-2018`

###### Nylon 6 seal material (`seal_nylon_6`)

Record nylon 6 resin received for an on-site molded cell seal. If a finished seal is purchased, replace this row with the exact finished-seal flow and boundary.

- Selected flow: Nylon 6 `efa66875-efd4-4d6e-bb93-fcc66de3b440`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net nylon 6 resin mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-handbook-2018`

###### Plastic insulating label film (`label_plastic_film`)

Record plastic film consumed as the insulating exterior label substrate. Printing ink or adhesive, when used, is a separate atomic input and must be added to the foreground inventory.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net plastic-film mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-handbook-2018`

###### Paper box packaging (`paper_box`)

Record paper boxes only when they cross the factory gate with the reference product. Add other concrete packaging components as separate rows.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net paper-box mass shipped with conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `energizer-alkaline-ais-2022`

###### Process water (`process_water`)

Record water supplied across the foreground boundary for material preparation or cleaning; exclude water already included in a purchased electrolyte solution.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net process-water input after separately metered closed-loop return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `us-epa-primary-battery-manufacturing-1975`

###### Purchased electricity (`electricity`)

Record metered electricity delivered to material preparation, forming, assembly, sealing, testing, marking, packaging, and allocated auxiliary systems.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered net purchased electricity assigned to the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources:

##### Waste flows

No default waste input is specified. Any externally received waste used as a secondary material must be added as one concrete waste-flow input.

##### Elementary flows

No default elementary input is specified. Direct environmental withdrawals, when present, must be added as individual elementary flows with the receiving compartment and geography.

#### Outputs

##### Product flows

###### Conforming alkaline battery (`alkaline_battery_output`)

Record only items that pass the declared inspection, electrical performance, leakage, marking, and packaging criteria.

- Selected flow: Alkaline battery `b8cd9a54-b808-450f-8aa6-3ea2a037c416`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s); unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: counted conforming sale-ready output items
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_test`
- Sources: `un-cpc-3-0-2025`; `energizer-alkaline-ais-2022`

##### Waste flows

###### Rejected alkaline primary battery (`rejected_alkaline_battery`)

Record complete alkaline batteries rejected during inspection or electrical testing and sent to an external treatment route. The exact TianGong waste UUID remains unresolved.

- Selected flow: Rejected alkaline primary battery
- Flow property / unit: Number of items / Item(s)
- Amount rule: counted rejected complete items leaving the foreground boundary as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-primary-battery-manufacturing-1975`

###### Waste alkaline liquor (`waste_alkaline_liquor`)

Record separately collected potassium-hydroxide-bearing electrolyte or cleaning liquid that leaves the site for treatment. Do not combine it with other wastewater streams.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured mass transferred off site, with potassium-hydroxide concentration and treatment route declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 conforming sale-ready battery item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

No default direct emission is prescribed. Add each measured or permitted direct emission as one species- and compartment-specific elementary-flow output; do not report an umbrella emissions row.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_assignment` | Multiple products or production lines | Prefer subdivision, dedicated meters, batch records, equipment time, and material issue records so inputs and wastes are directly assigned to the declared primary-battery product. |  |
| `allocation_joint_outputs` | Inseparable saleable co-products | Do not apply an undocumented default factor. Declare the co-product, causal relationship, allocation property, prices or physical quantities, allocation period, and sensitivity result; unresolved joint production requires methodology review before publication. |  |
| `allocation_recycling` | Internal recycle and external recovery | Count internal recycle once and subtract only documented returns from gross issues. Do not credit avoided primary production or future recycling inside the factory-gate foreground result; report any such credit as a separate disclosed scenario. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `primary_battery_manufacturing` | Active, structural, seal, label, and packaging material inputs | Purchase receipts, lot issue/return records, bill of materials, and inventory reconciliation | material identity; supplier; lot; chemistry or grade; concentration or coating; gross issue; return; opening and closing stock; conforming output items | Reconcile ERP or warehouse records to production lots and verify representative lots against weighed issues | kg and Item(s) | Each lot, aggregated monthly | At least 12 consecutive months or the full campaign for campaign production | All operations included in the declared manufacturing site | Net consumption equals receipts plus opening stock minus returns, closing stock, and separately documented transfers; divide by conforming output items | Supplier specifications, calibrated scale records, stock reconciliation, and signed bill-of-material revision |
| `cp_water_meter` | `primary_battery_manufacturing` | Process-water input | Water meter and batch make-up records | meter id; opening and closing reading; make-up water; return water; electrolyte-solution water; downtime; output items | Read calibrated site or process meters and reconcile batch additions; exclude water embedded in purchased solutions | kg or m3 with density and temperature | Daily or per batch, aggregated monthly | Same period as output | Included process lines and allocated auxiliaries | Net boundary input divided by conforming output items | Meter calibration, density conversion, line coverage, and reconciliation to invoices |
| `cp_electricity_meter` | `primary_battery_manufacturing` | Purchased electricity input | Revenue meter, submeter, and operating-hour records | meter id; opening and closing reading; line load; auxiliary allocation; downtime; voltage level; supplier and grid geography; output items | Use calibrated submeters where available; otherwise document an engineering allocation from the site meter | kWh converted to MJ | Hourly or daily, aggregated monthly | Same period as output | Included process lines and allocated auxiliaries | Net metered electricity minus documented exports, divided by conforming output items | Meter calibration, invoice reconciliation, submeter coverage, and allocation worksheet |
| `cp_output_and_test` | `primary_battery_manufacturing` | Conforming output and performance qualifiers | Production count, inspection record, and electrical test record | chemistry; designation; format; cell count; voltage; test load; duty cycle; temperature; end-point voltage; capacity; leakage result; accepted items; packaging configuration | Count accepted items after final test and link sampled performance results to lot and test method | Item(s), V, A or ohm, h, Ah or Wh, degree C | Each lot | Same period as inputs | All sale-ready output from the declared site | Sum accepted items; retain lot-weighted performance statistics without converting between unlike test conditions | Counter verification, test-equipment calibration, sampling plan, and nonconformance log |
| `cp_waste_records` | `primary_battery_manufacturing` | Rejected batteries and alkaline liquid waste | Nonconformance log, waste scale ticket, manifest, and treatment receipt | waste identity; source lot; item count or mass; electrolyte concentration; storage change; destination; treatment route; date | Reconcile generated, internally reworked, stored, and off-site transferred quantities | Item(s) or kg | Each transfer, reconciled monthly | Same period as output | All waste-generating operations in scope | Waste generated equals off-site transfer plus closing storage minus opening storage minus documented rework return | Scale calibration, signed transfer record, treatment receipt, and storage reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_per_item_inventory` | Every inventory exchange | Divide the exchange quantity assigned to the production period by the number of conforming sale-ready reference items from the same period. | Net exchange quantity; conforming output items | Exchange per reference item |  |
| `calc_solution_reporting` | Potassium-hydroxide solution and waste alkaline liquor | Report as-delivered solution mass and concentration. Calculate dry potassium-hydroxide mass only as an additional disclosed value: solution mass multiplied by measured mass fraction; never replace the as-delivered exchange silently. | Solution mass; measured or supplier-certified mass fraction | As-delivered mass and optional dry KOH mass |  |
| `calc_electricity_conversion` | Electricity | Convert kWh to MJ using 3.6 MJ per kWh after net meter reconciliation. | Net kWh | MJ electricity |  |
| `calc_capacity` | Performance qualifier | For a constant-current test, capacity in Ah equals current in A multiplied by elapsed hours to the declared end-point voltage; other load profiles require the declared test method and integrated current. | Current or load profile; elapsed time; end-point voltage; temperature; duty cycle | Declared tested capacity | `energizer-alkaline-handbook-2018` |
| `calc_mass_reconciliation` | Material and waste completeness | Reconcile input material mass with product mass, measured wastes, stock change, moisture or volatile loss, and direct emissions. Investigate and disclose the residual rather than forcing balance by changing the reference product. | Material inputs; product mass sample; wastes; stock change; measured emissions | Mass-balance residual and explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Chemistry, designation, format, cell count, performance test conditions, package configuration, site, geography, and production period must be unambiguous. | Product specification, label, approved bill of materials, test method, and lot record |
| `dq_temporal_coverage` | Foreground inventory | Use at least 12 consecutive months for continuous production or the complete campaign for campaign production; explain shutdowns, startups, abnormal lots, and exclusions. | Dated meter, purchase, output, and waste records |
| `dq_completeness` | Atomic exchanges | Reconcile the bill of materials, utilities, output, nonconforming items, other material losses, liquid wastes, and direct emissions. Add actual route-specific exchanges instead of aggregating them into umbrella rows. | Signed completeness checklist and mass reconciliation |
| `dq_geography_technology` | Upstream links | Match supplier geography, production technology, material grade, solution concentration, recycled content, electricity voltage and grid, water supply, and waste-treatment route where they materially affect results. | Supplier declaration, dataset metadata, invoices, and treatment receipts |
| `dq_measurement` | Meters, scales, and tests | Use equipment within its calibration interval and retain the calibration status, resolution, missing-data treatment, and allocation worksheet. | Calibration certificate, meter register, and QA record |
| `dq_uuid_gaps` | UUID-empty rows | Keep the concrete flow name and reported amount, but do not substitute a proxy UUID. Resolve or explicitly carry the identity gap before publication. | UUID review record linked to the row id |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Product identity | Fail validation if the product is rechargeable, spent, a separately sold part, or lacks declared chemistry, format, cell count, manufacturing site, production period, and package configuration. | `eu-batteries-regulation-2023`; `un-cpc-3-0-2025` |
| `validation_reference_flow` | Reference flow | Confirm exactly one conforming sale-ready item and retain the capacity test load, duty cycle, temperature, end-point voltage, rated voltage, and shelf-life declaration. | `energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022` |
| `validation_boundary` | System boundary | Confirm all in-house preparation, forming, assembly, filling, sealing, inspection, testing, marking, packaging, and allocated auxiliaries are included and downstream use and end-of-life are excluded. | `us-epa-primary-battery-manufacturing-1975` |
| `validation_inventory` | Process inventory | Confirm every actual bill-of-material, packaging, energy, water, waste, and direct-emission exchange is represented as one atomic row; confirm no representative alkaline row is applied unchanged to another chemistry. | `energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022` |
| `validation_units` | Amounts and conversions | Confirm item counts, material masses, solution concentrations, electricity conversion, and normalization period are consistent and auditable. |  |
| `validation_reconciliation` | Completeness | Require bill-of-material, output, waste, stock, energy, and water reconciliation; disclose the mass-balance residual, allocation methods, internal recycle, missing data, and exclusions. |  |
| `validation_uuid_resolution` | Database identity | Report `cathode_conductive_graphite`, `nickel_plated_steel_sheet`, and `rejected_alkaline_battery` as unresolved until exact public state-100 flows are confirmed; never pass a proxy UUID as exact. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for one declared primary cell or primary battery product |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Cradle-to-gate product modelling, supplier comparison under matched product and test qualifiers, and downstream studies that add distribution, use, and end-of-life consistently |
| excluded_use | Rechargeable batteries, chemistry substitution without a route-specific inventory, spent-battery treatment, performance comparison under unmatched discharge tests, or an undisclosed global market average |
| required_metadata | PCR id and version; chemistry; IEC or equivalent designation; format and dimensions; cell count; voltage; capacity test conditions; shelf-life claim; package configuration; site and geography; production period; technology; purchased-versus-in-house component boundary; upstream datasets; allocation; internal recycle; waste routes; unresolved identities |
| required_quality_disclosure | Temporal and site coverage; meter and scale coverage; test sampling; calibration; supplier data quality; allocation; missing-data treatment; mass-balance residual; important-flow range evidence gaps; UUID gaps; exclusions and sensitivity cases |
| update_trigger | Change in chemistry, active-material supplier route, format, cell count, bill of materials, electrolyte concentration, production site or line, electricity supply, packaging, test specification, allocation, waste route, or a material change in normalized inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official classification identity for CPC 46410 |
| `eu-batteries-regulation-2023` | Standard (`standard`) | Regulation (EU) 2023/1542 concerning batteries and waste batteries, Article 3, https://eur-lex.europa.eu/eli/reg/2023/1542/oj/eng (retrieved 2026-09-04) | Definitions of battery, battery cell, battery pack, and non-rechargeable battery; semantic exclusions |
| `energizer-alkaline-handbook-2018` | Handbook (`handbook`) | Energizer Brands, Alkaline Manganese Dioxide Handbook and Application Manual, 2018, https://data.energizer.com/pdfs/alkaline_appman.pdf (retrieved 2026-09-04) | Representative alkaline-cell construction, component identities, discharge-capacity qualifiers, and test interpretation |
| `energizer-alkaline-ais-2022` | Handbook (`handbook`) | Energizer, Alkaline Manganese Dioxide-Zinc Batteries Article Information Sheet, document 1022-Alk, October 2022, https://data.energizer.com/wp-content/uploads/2022/09/alkaline1022.pdf (retrieved 2026-09-04) | Non-rechargeable product state, representative material identity, labeling, and safe outer packaging condition; not used as a two-source empirical inventory range |
| `us-epa-primary-battery-manufacturing-1975` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency, Draft Development Document for Effluent Limitations Guidelines and Standards of Performance for the Machinery and Mechanical Products Manufacturing Point Source Category, Volume 2, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000USW8.TXT (retrieved 2026-09-04) | Primary-battery material forming, filling, sealing, testing, packing, process-water, and rejected-product process decomposition; historical formulations are not prescribed |
