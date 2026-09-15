---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43240
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclass 43240

## 1. Scope and Applicability

This PCR covers separately traded parts intended to be incorporated into, maintain, or repair taps, cocks, valves, and similar appliances for pipes, boiler shells, tanks, vats, or comparable equipment. Covered parts include pressure-retaining bodies and bonnets, stems, discs, plugs, balls, seats, and other identifiable valve or tap components supplied as finished or semi-finished market products.

Complete appliances, generic fasteners, seals, actuators, instruments, pipe fittings, unworked raw material, and manufacturing or repair services are excluded. The data package shall state the part's function, material, and completion state. A mass-based declared unit is used because the covered goods are intermediate products whose service depends on the final appliance and application.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43240 |
| classification_refs | CPC 3.0: 43254, Parts for the goods of subclass 43240 |
| covered_products | Separately traded bodies, bonnets, stems, discs, plugs, balls, seats, and other identifiable parts for taps, cocks, valves, and similar appliances |
| excluded_products | Complete appliances; generic fasteners, seals, actuators, instruments, and pipe fittings; unworked raw material; installation, repair, and machining services |
| representative_product | Machined chromium-steel valve body or trim component supplied for downstream assembly |
| production_route | Purchased alloy-steel semi-finished material followed by machining; heat treatment and aqueous surface cleaning when performed; final inspection and packing |
| market_state | Identifiable finished or semi-finished part at the manufacturer's gate, clean and packed when packing is part of the sale |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | An identifiable part providing a declared pressure-retaining, flow-control, sealing, or structural function in a tap, cock, valve, or similar appliance |
| How much | 1 kg of finished or declared semi-finished part at the manufacturer's gate |
| How well | Conforming to the declared drawing/specification, material grade, dimensions and tolerances, surface condition, and applicable pressure-temperature or sealing requirements |
| How long or cycle | One delivered production lot; no service duration is assigned unless a downstream study documents the complete appliance life |
| reference_flow_link | 1 kg of the declared covered part meeting all required qualifiers |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts for the goods of subclass 43240 (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part type and function; finished or semi-finished state; material grade and stock form; net product mass; drawing/specification and revision; dimensions and tolerances; pressure-temperature or sealing class when applicable; heat-treatment condition; surface treatment; production site and geography; reporting period; packaging inclusion |

Every required qualifier shall be declared in metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mr_reference_mass` | reference product and mass-based inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of conforming covered parts at the declared market state. Exclude detachable transport fixtures and packaging from product mass. |
| `mr_energy` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Record delivered electricity at the process meter; retain the source unit, conversion, and meter boundary. |
| `mr_gas_volume` | natural-gas row | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State metering reference temperature and pressure, gas basis, and whether volume is corrected to standard conditions. |
| `mr_normalization` | all foreground amounts | row-specific property | row-specific reference unit | Normalize inputs and outputs by net mass of conforming parts from the same scope and period; retain gross production, rejects, rework, and inventory changes. |

## 5. System Boundary

The foreground boundary begins with purchased semi-finished material and other products at the site gate and includes on-site machining, conditional heat treatment, conditional aqueous surface cleaning, final inspection, and packing through the covered part at the manufacturer's gate. Upstream production is linked through supplier or background datasets. Capital equipment, site construction, downstream distribution, installation, use, maintenance, and end of life are excluded unless the study expands the boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased chromium steel or another explicitly declared semi-finished material enters with grade, form, mass, supplier geography, and recycled-content information |
| starting_condition_role | Upstream product input to foreground parts manufacture |
| product_classification_scope | Separately traded parts for taps, cocks, valves, and similar appliances; complete appliances and generic components are outside this identity |
| recursive_input_rule | Record a purchased unfinished part already in this category once as a product input with a supplier dataset and completion state; do not recreate its upstream foreground manufacture |
| upstream_dataset_requirement | Use representative cradle-to-gate datasets for purchased material, electricity, natural gas, water, chemicals, and packaging; disclose proxies and gaps |
| disclosure | Declare starting material, machining, heat treatment, surface preparation, rejects/rework, wastewater and scrap destinations, packing state, exclusions, and company-specific data boundaries |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | all foreground processes | Include all on-site material, energy, water, waste, and direct-emission exchanges from receipt of the declared semi-finished material through release of the covered part. | eu-pef-method-2021; us-epa-fabricated-metal-products-1995 |
| `sb_conditional_processes` | heat treatment and aqueous surface cleaning | Include each conditional process only when performed; disclose its technology and add every actual atomic exchange crossing its boundary. | us-epa-fabricated-metal-products-1995 |
| `sb_exclusions` | excluded stages | Document and justify exclusions; do not silently exclude rejects, rework, scrap, cleaning wastewater, or direct combustion emissions. | eu-pef-method-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_primary_machining` | Primary machining of alloy-steel part | conditional | Include when the covered part is produced by machining chromium steel or another declared metal semi-finished input | Foreground material shaping | kg of conforming machined part |
| `p_heat_treatment` | Heat treatment | conditional | Include when controlled heating and cooling changes the material condition | Foreground property modification | kg of heat-treated part |
| `p_aqueous_cleaning` | Aqueous surface cleaning | conditional | Include when alkaline aqueous cleaning and rinsing are performed on-site | Foreground surface preparation | kg of cleaned part |
| `p_final_release` | Final inspection and packing | required | Always include final conformity release; include the box row only when boxes are part of the sale | Foreground release of reference product | 1 kg of conforming covered part |

### Process: Primary machining of alloy-steel part (`p_primary_machining`)

#### Inputs

##### Product flows

###### Chromium-steel semi-finished material (`chromium_steel_input`)

Record this input only for the chromium-steel route; other material routes shall use separately identified atomic material flows.

- Selected flow: Chromium steel `f4f19250-c683-4ff0-9763-1498069df9de`
- Flow property / unit: Mass / kg
- Amount rule: purchased mass entering machining, adjusted for opening and closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming covered part from the same production scope
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: us-epa-fabricated-metal-products-1995

###### Electricity delivered to machining (`machining_electricity`)

Record metered electricity used by machine tools and directly attributable auxiliary equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated delivered electricity for machining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of conforming covered part from the same production scope
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: us-epa-fabricated-metal-products-1995

###### Cutting fluid supplied to machining (`cutting_fluid_input`)

Record purchased make-up cutting fluid; keep recovered recirculating inventory distinct.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchased make-up mass consumed after inventory adjustment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of conforming covered part from the same production scope
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: us-epa-fabricated-metal-products-1995

###### Process water supplied to machining (`machining_process_water`)

Record water used for water-miscible cutting fluid or direct machining when it crosses this boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-recorded water mass attributable to machining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of conforming covered part from the same production scope
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: us-epa-fabricated-metal-products-1995

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel scrap generated by machining (`steel_scrap_from_machining`)

Record chips, turnings, and offcuts leaving machining; state alloy grade, oil contamination, and destination.

- Selected flow: Steel scrap from machining `a88e0790-436c-44f8-b336-ee509aa8a38a`
- Flow property / unit: Mass / kg
- Amount rule: measured scrap dispatched or transferred to treatment, adjusted for scrap inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming covered part from the same production scope
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: us-epa-fabricated-metal-products-1995

##### Elementary flows

### Process: Heat treatment (`p_heat_treatment`)

#### Inputs

##### Product flows

###### Natural gas supplied to the furnace (`heat_treatment_natural_gas`)

Record gaseous natural gas only for directly fired or gas-heated equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: corrected metered natural-gas volume attributable to heat treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of heat-treated covered part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: us-epa-fabricated-metal-products-1995

###### Electricity delivered to heat treatment (`heat_treatment_electricity`)

Record furnace and directly attributable auxiliary electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated delivered electricity for heat treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of heat-treated covered part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: us-epa-fabricated-metal-products-1995

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide (`heat_treatment_fossil_co2`)

Record only direct on-site fossil carbon dioxide from natural-gas combustion; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: monitored site emission mass attributable to heat treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of heat-treated covered part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: us-epa-fabricated-metal-products-1995

### Process: Aqueous surface cleaning (`p_aqueous_cleaning`)

#### Inputs

##### Product flows

###### Sodium hydroxide used in alkaline cleaning (`cleaning_sodium_hydroxide`)

Record supplied sodium-hydroxide mass only when present; retain solution concentration separately.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased sodium-hydroxide mass in cleaning make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of cleaned covered part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: us-epa-fabricated-metal-products-1995

###### Process water used for cleaning and rinsing (`cleaning_process_water`)

Record metered water crossing the cleaning boundary for bath make-up and rinsing.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered water mass attributable to cleaning and rinsing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of cleaned covered part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: us-epa-fabricated-metal-products-1995

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater from cleaning (`cleaning_wastewater`)

Record cleaning and rinse wastewater leaving for on-site or off-site treatment; disclose composition and destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass leaving cleaning, adjusted for storage changes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of cleaned covered part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: us-epa-fabricated-metal-products-1995

##### Elementary flows

### Process: Final inspection and packing (`p_final_release`)

#### Inputs

##### Product flows

###### Corrugated board boxes used for shipment (`corrugated_board_boxes`)

Record boxes included in the sale or needed for the declared factory-gate state.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: issued box mass less returned unused boxes, allocated to released parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming covered part released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished covered valve part (`finished_valve_part`)

This is the reference product after conformity release. Its exact Tiangong product-flow UUID remains unresolved.

- Selected flow: Parts for the goods of subclass 43240 (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: fixed reference amount of 1 kg of conforming covered part
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: un-cpc-3-0-structure-2025; eu-pef-method-2021

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | shared machines, lines, and utilities | Avoid allocation by separately metering batches, machines, or stages attributable to covered parts. | eu-pef-method-2021 |
| `al_physical_relationship` | inseparable shared foreground processes | If subdivision is impracticable, use a documented causal physical driver such as machine time, load-adjusted furnace occupancy, metered energy, or treated surface area. | eu-pef-method-2021 |
| `al_other_relationship` | remaining multifunctional processes | Use another relationship, including economic allocation, only when no defensible physical relationship exists; disclose values, period, sensitivity, and affected flows. | eu-pef-method-2021 |
| `al_scrap_disclosure` | steel scrap and recycling | Record scrap as waste without netting it against metal input or energy. Model recycling burdens and credits consistently downstream and disclose the convention. | eu-pef-method-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_records` | `p_primary_machining` | chromium steel, electricity, cutting fluid, process water, steel scrap | purchase/issue records, meters, scrap tickets, production log | inventories; purchases/issues; meter readings; scrap mass; conforming mass; rejects; rework; identifiers | Reconcile records to the same machines, lots, and period | kg; MJ | Per batch where available and at least monthly | Representative continuous 12-month period or justified shorter campaign | All attributable on-site machining | Sum net inputs/outputs, allocate shared resources, divide by conforming mass | calibrated meters/scales, invoices, batch travellers, scrap tickets, reconciliation sign-off |
| `cp_heat_treatment_records` | `p_heat_treatment` | natural gas, electricity, fossil carbon dioxide | meters, furnace logs, emissions records, production log | corrected gas volume; electricity; monitored CO2; furnace; recipe; load; output mass | Match meters or allocation to furnace batches and technology | m3; MJ; kg | Per batch or meter interval and at least monthly | Representative continuous 12-month period or justified shorter campaign | On-site heat treatment | Sum attributable records and divide by heat-treated conforming mass | calibration, reference-condition record, furnace log, emissions monitoring record |
| `cp_cleaning_records` | `p_aqueous_cleaning` | sodium hydroxide, water, cleaning wastewater | chemical issues, meters, bath logs, production log | chemical mass/concentration; water; wastewater; bath inventory; treated mass; destination | Reconcile make-up, rinse water, wastewater, inventories, and output | kg | Per batch or meter interval and at least monthly | Representative continuous 12-month period or justified shorter campaign | On-site aqueous cleaning | Sum net inputs and wastewater, divide by cleaned conforming mass | invoices, calibrated meters/scales, bath analyses, transfer manifests, mass-balance review |
| `cp_release_records` | `p_final_release` | corrugated boxes and finished part | packaging issues and final inspection/production records | boxes issued/returned; box mass; conforming mass; rejects; rework; part/specification revision | Link packaging and release records to the same order or period | kg | Per order or batch and at least monthly | Representative continuous 12-month period or justified shorter campaign | Final release and packing | Divide net box mass by conforming mass; set reference output to 1 kg | scale checks, packaging specification, inspection release, production reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_net_consumption` | purchased products | Net consumption = purchases or issues + opening inventory - closing inventory - documented returns | transactions and inventories for one scope and period | net boundary-crossing quantity | eu-pef-method-2021 |
| `cr_reference_normalization` | variable inventory rows | Normalized amount = attributable net quantity / net conforming-part mass for the same scope and period | net quantity, conforming mass, allocation driver if needed | amount per kg reference flow or process output | eu-pef-method-2021 |
| `cr_scrap_reconciliation` | machining material balance | Reconcile metal input with conforming output, scrap, rejects, rework transfers, and inventory changes; investigate unexplained imbalance. | metal input, output, scrap, rejects, rework, inventories | documented mass balance and residual | us-epa-fabricated-metal-products-1995 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and material | Preserve part number, drawing/specification revision, function, grade, stock form, treatment state, and completion state. | product specification, certificate of conformity, material certificate, release record |
| `dq_scope` | foreground processes | Use the same site, technology, products, and period for inputs and outputs; document outsourced steps and upstream datasets. | process map, boundary statement, supplier records, period reconciliation |
| `dq_measurement` | meters and mass records | Retain calibration, unit conversions, meter coverage, estimation method, and allocation driver. | calibration certificates, meter register, conversion worksheet, allocation record |
| `dq_temporal` | foreground data | Prefer a continuous 12-month period; justify shorter campaigns and disclose shutdowns, abnormal batches, and utilization. | dated production, purchase, utility, and waste records |
| `dq_completeness` | inventory | Reconcile metal, water when cleaning is used, and process outputs; report missing exchanges and likely significance. | signed mass-balance and completeness review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity_complete` | reference flow | Fail when a required qualifier, reference mass, market state, or drawing/specification identity is missing. | un-cpc-3-0-structure-2025; eu-pef-method-2021 |
| `vr_inventory_atomic` | process inventory | Fail when a row combines multiple materials, utilities, packaging components, wastes, or emissions, or uses an umbrella route selector. | us-epa-fabricated-metal-products-1995 |
| `vr_period_reconciliation` | variable amounts | Fail when quantities lack a common site, process scope, and period or omit inventory changes and rework. | eu-pef-method-2021 |
| `vr_uuid_semantics` | UUID-bearing flows | Confirm public state, bilingual names, flow type, classification, property, unit group, and qualifiers; never replace the unresolved reference product with a proxy. |  |
| `vr_boundary_disclosure` | system boundary | Fail when an applicable machining, heat-treatment, cleaning, reject, wastewater, scrap, packaging, or direct-emission process is omitted without justification. | eu-pef-method-2021; us-epa-fabricated-metal-products-1995 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset publishable as a secondary_dataset or background_dataset after review |
| downstream_use | process and lifecyclemodel projections for manufacture of separately traded parts for taps, cocks, valves, and similar appliances |
| allowed_use | Studies matching declared function, material, completion state, technology, geography, period, boundary, and allocation |
| excluded_use | Complete appliances; generic metal products; parts with materially different functions, materials, or routes; unsupported comparative assertions |
| required_metadata | PCR id/version; part and drawing/specification identity; function; material/treatment; market state; reference mass; site/geography; technology; period; process map; allocation; upstream datasets; packaging state |
| required_quality_disclosure | foreground coverage; measured versus allocated data; calibration/conversions; temporal representativeness; mass-balance residuals; rejects/rework; missing exchanges; proxies; uncertainty and range-evidence gaps |
| update_trigger | Material change in function, grade, completion state, machining route, heat treatment, cleaning chemistry, site, energy supply, allocation, packaging, supplier datasets, or period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, `https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv` (retrieved 2026-09-05) | Official identity of CPC 43254 and its parent goods in subclass 43240 |
| `us-epa-fabricated-metal-products-1995` | official_guidance | U.S. EPA, *Profile of the Fabricated Metal Products Industry*, EPA/310-R-95-007, September 1995, `https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000DGC.TXT` (retrieved 2026-09-05) | Metal fabrication, machining, heat treatment, surface preparation, inputs, and waste-output decomposition |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, Annexes I-II, consolidated 30 December 2021, `https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng` (retrieved 2026-09-05) | Functional unit/reference flow, boundary disclosure, company-specific data, allocation, validation, and quality rules |
