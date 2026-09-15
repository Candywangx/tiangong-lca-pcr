---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-such-as-open-seam-riveted-or-similarly-closed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other tubes and pipes, such as open seam, riveted or similarly closed

## 1. Scope and Applicability

This PCR covers steel tubes and pipes classified in CPC 3.0 code 41289 that are supplied with an open longitudinal seam, closed by riveting, or closed by another comparable mechanical method. It covers forming from flat steel stock, route-specific mechanical closure, optional cutting and surface conditioning, inspection, and release at the factory gate. It excludes seamless tubes, welded tubes, oil- or gas-well casing and tubing, drill pipe, cast tubes, tube fittings, and non-ferrous tubes. A welded seam is outside this boundary even when other fabrication operations resemble those described here.

The declared product must identify the steel grade, input-stock form, cross-section, outside dimensions, wall thickness, length, closure route, seam or joint configuration, coating or surface state, heat-treatment state, manufacturing site and geography, and factory-gate delivery state. The mechanical-closure process applies only to riveted or similarly closed products; it does not apply to an open-seam product. The final product is distinct from the purchased flat steel input and must not recursively absorb another CPC 41289 tube or pipe as an unreported material input.

## 2. Product Category Identity

| Field | Value |
|---|---|
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-such-as-open-seam-riveted-or-similarly-closed` |
| classification_refs | CPC 3.0: 41289 |
| covered_products | Steel tubes and pipes delivered open seam, riveted, or closed by a comparable mechanical method |
| excluded_products | Seamless or welded tubes; casing, tubing and drill pipe; cast tubes; tube fittings; non-ferrous tubes |
| representative_product | Factory-gate steel tube or pipe with declared dimensions, grade, seam route and surface state |
| production_route | Flat-steel preparation and roll forming, open-seam release or mechanical closure, applicable conditioning, inspection and release |
| market_state | Conforming unpackaged product at the factory gate |

## 3. Reference Flow

| Field | Value |
|---|---|
| What | Manufacture and factory-gate delivery of a conforming open-seam, riveted, or similarly mechanically closed steel tube or pipe |
| How much | 1 kg net mass of conforming, unpackaged product |
| How well | Meets the declared grade, dimensions, closure route, seam configuration, surface state, and applicable inspection acceptance criteria |
| How long or cycle | One production batch at factory-gate release; service life is outside the boundary |
| reference_flow_link | `reference_product_flow` |

| Field | Value |
|---|---|
| Reference amount | 1 kg |
| Reference product flow | Other tubes and pipes, such as open seam, riveted or similarly closed `29ae082c-4fd0-45b8-8138-a85adf168ea4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Steel grade; input-stock form; cross-section; outside dimensions; wall thickness; length; closure route; seam or joint configuration; coating or surface state; heat-treatment state; plant and geography; scrap and wastewater destinations; gas reference conditions; factory-gate delivery state |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
|---|---|---|---|---|
| `reference_product_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net conforming, unpackaged product mass after inspection and normalize all exchanges to 1 kg. |
| `material_and_waste_mass` | Materials and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh purchased materials and each segregated waste stream; retain source records and moisture or solution-state qualifications. |
| `gas_volume` | Purchased gases | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | Meter each gas separately and declare pressure, temperature, composition or purity, and volume basis. |
| `electricity_energy` | Alternating current | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Meter electricity by process; preserve the native meter unit and document conversion to MJ. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
|---|---|
| declared_starting_condition | Purchased flat steel and all other inputs at the manufacturing-site gate |
| starting_condition_role | Background-to-foreground interface |
| product_classification_scope | CPC 3.0 code 41289 only, with seamless, welded, cast, drilling, casing, tubing, fitting and non-ferrous products excluded |
| recursive_input_rule | A CPC 41289 tube or pipe input must remain a separately disclosed upstream dataset and may not be absorbed into this reference-product dataset |
| upstream_dataset_requirement | Match purchased steel, electricity, gases, water, chemicals, fluids and waste treatment by geography, technology, state and delivery boundary |
| disclosure | Declare closure route, plant, reporting period, product qualifiers, optional operations, allocation, waste destinations and gas reference conditions |

The boundary begins with purchased flat steel, electricity, cutting fluid, gases, water, sodium hydroxide, and route-specific rivets at the manufacturing-site gate. It includes cutting, edge preparation, roll forming, open-seam release or mechanical closure, optional thermal treatment and alkaline cleaning, rinsing, straightening and finishing where performed, inspection, internal handling, and segregation of wastes. It ends with the net conforming product released at the factory gate and all reported wastes and direct fossil carbon dioxide leaving the foreground system.

| rule_id | Applies to | Rule | source_ids |
|---|---|---|---|
| `sb_01` | Product identity | Include only the residual CPC 41289 boundary; seamless and welded tube routes and the other listed exclusions require separate product systems. | `src_unsd_cpc_3_0_2025` |
| `sb_02` | Foreground operations | Model cutting and edge preparation, repeated-roll forming, route-specific mechanical closure, applicable conditioning, inspection, and release as distinguishable foreground operations. | `src_doe_roll_forming_2003`; `src_nist_riveted_pipe_2009`; `src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022` |
| `sb_03` | Recursive inputs | Do not absorb a purchased CPC 41289 tube or pipe into the same reference-product dataset. If one is used, model it as a separately disclosed upstream dataset and report its mass and purpose. |  |
| `sb_04` | Background interfaces | Link purchased steel, electricity, gases, water, chemicals, fluids, and waste treatment to datasets matching the declared geography, technology, product state, and delivery boundary. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
|---|---|---|---|---|---|
| `material_preparation_and_forming` | Material preparation and forming | required | All routes | Prepare flat steel and form the tube or pipe section | Mass of formed product transferred forward |
| `mechanical_seam_closure` | Mechanical seam closure | conditional | Riveted or similarly mechanically closed routes only; exclude open-seam release | Mechanically close and finish the seam | Mass of mechanically closed product transferred forward |
| `surface_conditioning_and_release` | Surface conditioning and release | required | Release always; conditioning inputs only when the operation occurs | Apply applicable conditioning, inspect and release product | 1 kg net conforming reference product |

### Process: Material preparation and forming (`material_preparation_and_forming`)

#### Inputs

##### Product flows

###### input (`in_non_alloy_steel`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Non-Alloy Steel `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- Flow property / unit: Mass / kg
- Amount rule: Weigh purchased flat steel charged to the modeled production, adjusted for documented stock change, and normalize to the conforming reference-product mass.
- Inclusion condition: Always include; replace the representative public flow only with an exact grade, product-state, geography, and technology match.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022`
- Collection protocol: `cp_material_preparation`

###### input (`in_ac_electricity_forming`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter electricity used for cutting, edge preparation, roll forming, straightening, and forming-line auxiliaries, then normalize to conforming output.
- Inclusion condition: Always include electricity consumed by the preparation and forming process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_doe_roll_forming_2003`
- Collection protocol: `cp_material_preparation`

###### input (`in_cutting_fluid`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Record cutting-fluid additions less recoverable closing inventory for the modeled cutting operation; report concentrate and make-up water separately when applicable.
- Inclusion condition: Include only when wet cutting, sawing, or edge preparation consumes cutting fluid.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_epa_steel_pipe_1995`
- Collection protocol: `cp_material_preparation`

###### input (`in_natural_gas_cutting`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Meter natural gas delivered to thermal cutting or edge-preparation burners at declared reference conditions.
- Inclusion condition: Include only when natural gas is used directly for cutting or edge preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources:
- Collection protocol: `cp_material_preparation`

###### input (`in_industrial_oxygen_cutting`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Meter industrial oxygen delivered to oxygen-assisted cutting at declared reference conditions.
- Inclusion condition: Include only when oxygen-assisted cutting is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources:
- Collection protocol: `cp_material_preparation`

#### Outputs

##### Waste flows

###### waste (`out_post_industrial_steel_scrap_forming`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weigh segregated offcuts, edge trim, rejects, and other steel scrap generated in material preparation and forming.
- Inclusion condition: Always include as a non-negative output; report zero only with reconciled batch evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_epa_steel_pipe_1995`
- Collection protocol: `cp_material_preparation`

###### waste (`out_spent_coolant`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: Weigh spent cutting-fluid or coolant removed from the modeled preparation process, net of fluid returned for reuse within the boundary.
- Inclusion condition: Include only when spent coolant leaves the foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources:
- Collection protocol: `cp_material_preparation`

##### Elementary flows

###### elementary (`out_fossil_co2_cutting`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure direct fossil carbon dioxide from cutting burners or calculate it from collected burner fuel quantity, composition, carbon content, and oxidation records without including upstream fuel-supply emissions.
- Inclusion condition: Include when fossil fuel is combusted in material preparation or cutting.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Sources:
- Collection protocol: `cp_material_preparation`

### Process: Mechanical seam closure (`mechanical_seam_closure`)

#### Inputs

##### Product flows

###### input (`in_steel_rivets`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Steel rivets
- Flow property / unit: Mass / kg
- Amount rule: Weigh steel rivets issued and consumed for the modeled product, adjusted for returned unused rivets.
- Inclusion condition: Include only for riveted closure; for another mechanical closure, add its exact atomic closure material as a distinct foreground flow rather than relabeling this row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_nist_riveted_pipe_2009`
- Collection protocol: `cp_mechanical_closure`

###### input (`in_ac_electricity_closure`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter electricity used by riveting, pressing, caulking, seam-closing equipment, and closure-line auxiliaries.
- Inclusion condition: Include only when a mechanical closure process is performed; exclude for open-seam release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_nist_riveted_pipe_2009`
- Collection protocol: `cp_mechanical_closure`

#### Outputs

##### Waste flows

###### waste (`out_post_industrial_steel_scrap_closure`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weigh steel scrap and rejected rivets attributable to mechanical seam closure.
- Inclusion condition: Include only when mechanical closure produces segregated steel scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources:
- Collection protocol: `cp_mechanical_closure`

### Process: Surface conditioning and release (`surface_conditioning_and_release`)

#### Inputs

##### Product flows

###### input (`in_process_water`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Meter process water delivered to alkaline cleaning, rinsing, or quenching and convert volume to mass using a documented density and reference condition when necessary.
- Inclusion condition: Include only when water is used in surface conditioning, rinsing, or quenching.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022`
- Collection protocol: `cp_surface_release`

###### input (`in_sodium_hydroxide`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Record sodium-hydroxide mass in purchased or prepared cleaning solution from solution mass and measured concentration.
- Inclusion condition: Include only when sodium hydroxide is used for alkaline cleaning; do not use this row for other cleaning chemicals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_jrc_fmp_bref_2022`
- Collection protocol: `cp_surface_release`

###### input (`in_natural_gas_heat`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Meter natural gas combusted for route-specific annealing or other direct thermal conditioning at declared reference conditions.
- Inclusion condition: Include only when direct natural-gas thermal conditioning is performed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_epa_steel_pipe_1995`
- Collection protocol: `cp_surface_release`

###### input (`in_ac_electricity_release`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter electricity used for applicable conditioning, rinsing, straightening, inspection, finishing, and release activities.
- Inclusion condition: Always include electricity consumed by the release process; document which optional operations occurred.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022`
- Collection protocol: `cp_surface_release`

#### Outputs

##### Product flows

###### output (`out_reference_product`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Other tubes and pipes, such as open seam, riveted or similarly closed `29ae082c-4fd0-45b8-8138-a85adf168ea4`
- Flow property / unit: Mass / kg
- Amount rule: Measure net mass of product that passes the declared dimensional, seam-route, surface, and inspection acceptance criteria.
- Inclusion condition: Always include as the quantitative reference output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: Exactly 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_unsd_cpc_3_0_2025`
- Collection protocol: `cp_surface_release`

##### Waste flows

###### waste (`out_waste_alkaline_liquor`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: Weigh or meter spent alkaline bath solution leaving the foreground boundary, converting volume to mass with documented density where necessary.
- Inclusion condition: Include only when a segregated alkaline cleaning bath is discharged; do not combine it with rinse wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_jrc_fmp_bref_2022`
- Collection protocol: `cp_surface_release`

###### waste (`out_cleaning_wastewater`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Meter segregated cleaning and rinse wastewater leaving the foreground boundary and convert volume to mass using documented density where necessary.
- Inclusion condition: Include only when cleaning or rinsing generates a separate wastewater stream; exclude spent concentrated alkaline bath already reported above.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Sources: `src_epa_steel_pipe_1995`; `src_jrc_fmp_bref_2022`
- Collection protocol: `cp_surface_release`

##### Elementary flows

###### elementary (`out_fossil_co2_heat`)

This atomic exchange crosses the named process boundary and is quantified using the stated amount rule.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure direct fossil carbon dioxide from thermal-conditioning combustion or calculate it from collected furnace-fuel quantity, composition, carbon content, and oxidation records without upstream fuel-supply emissions.
- Inclusion condition: Include when fossil fuel is combusted for surface or thermal conditioning.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: Per 1 kg net conforming reference product at factory-gate release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Sources:
- Collection protocol: `cp_surface_release`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
|---|---|---|---|
| `alloc_01` | Shared lines and meters | Prefer physical subdivision or route-specific metering. If unavoidable shared burdens remain, allocate by a measured causal driver such as machine time, metered energy, or processed mass and disclose the driver and shares. |  |
| `alloc_02` | Steel scrap and process wastes | Report each waste output at the foreground boundary and its destination. Do not credit avoided primary production within the foreground inventory; any recycling or treatment consequence belongs to the selected downstream model. |  |
| `alloc_03` | Co-products | If a saleable co-product is unavoidable, disclose its identity and quantity, justify the allocation hierarchy and factor, and test a physically plausible alternative. Do not encode an undisclosed credit as a negative input. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `cp_material_preparation` | `material_preparation_and_forming` | All input and output rows in material preparation and forming | Meter, scale, material issue, stock and waste records | Quantity, unit, time, batch, equipment, stock change, gas conditions, destination | Reconcile process-specific meters and mass records to batches and conforming output | kg; m3; MJ | Each batch or transaction, aggregated for the reporting period | Same representative reporting period as the reference output | Declared manufacturing site | Sum applicable atomic rows separately and normalize by net conforming output | Calibration, invoices, batch travelers, stock records and waste manifests |
| `cp_mechanical_closure` | `mechanical_seam_closure` | Rivets, closure electricity and closure scrap | Material issue, joint drawing, meter and scrap records | Rivet count and mass, returned rivets, equipment energy, scrap mass, batch and route | Reconcile route-specific issue and meter records to joint configuration and output | kg; MJ | Each applicable batch, aggregated for the reporting period | Same representative reporting period as the reference output | Declared mechanical-closure line | Include only mechanically closed routes; sum atomic rows and normalize | Joint drawings, issue-return records, meter records and scrap weights |
| `cp_surface_release` | `surface_conditioning_and_release` | Conditioning inputs, wastes, emissions and reference output | Meter, bath, fuel, laboratory, scale, acceptance and waste records | Water, chemical concentration, energy, fuel conditions, waste quantity, output mass, acceptance | Reconcile operation-specific records, calculate emissions from collected fuel where not measured, and link release mass to acceptance | kg; m3; MJ | Each batch, meter period or disposal, aggregated for the reporting period | Same representative reporting period as the reference output | Declared conditioning and release operations | Preserve atomic rows and optional-route flags; normalize by accepted net output | Calibration, concentration tests, fuel specifications, acceptance and disposal records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
|---|---|---|---|---|---|
| `calc_material_yield` | Steel mass reconciliation | Divide net conforming reference-product mass by total flat-steel input mass for the same reporting scope; investigate mismatch against steel scrap, stock change, and rejects. | `in_non_alloy_steel`; `out_post_industrial_steel_scrap_forming`; `out_post_industrial_steel_scrap_closure`; `out_reference_product` | Material yield and reconciliation finding |  |
| `calc_energy_normalization` | Process electricity | Convert each process electricity record from its native unit to MJ with a documented conversion and divide by net conforming output; do not merge process rows before validation. | `in_ac_electricity_forming`; `in_ac_electricity_closure`; `in_ac_electricity_release`; `out_reference_product` | Process-specific electricity intensity |  |
| `calc_cutting_co2` | Cutting combustion | Use direct measurement where available; otherwise calculate fossil carbon dioxide from collected cutting-fuel quantity and documented composition, carbon content, and oxidation, without upstream supply-chain emissions. | `in_natural_gas_cutting` | `out_fossil_co2_cutting` |  |
| `calc_heat_co2` | Thermal-conditioning combustion | Use direct measurement where available; otherwise calculate fossil carbon dioxide from collected thermal-conditioning fuel and documented composition, carbon content, and oxidation, without upstream supply-chain emissions. | `in_natural_gas_heat` | `out_fossil_co2_heat` |  |
| `calc_cleaning_balance` | Cleaning-system balance | Reconcile process water and cleaning solution with spent alkaline liquor, cleaning wastewater, retained bath inventory, evaporation, carryover, and product or sludge retention; retain all residual explanations. | `in_process_water`; `in_sodium_hydroxide`; `out_waste_alkaline_liquor`; `out_cleaning_wastewater` | Cleaning-system balance and residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
|---|---|---|---|
| `dq_identity` | Product | Identify declared steel grade, dimensions, seam route, surface state and acceptance status. | Product specification, batch traveler and acceptance record |
| `dq_temporal` | Reporting period | Cover all included conforming production, rejects, inputs and operating exchanges; explain exceptional campaigns. | Period reconciliation and operating log |
| `dq_metering` | Measured and calculated rows | Document calibration, gas conditions, solution concentration, source records and conversions. | Calibration, laboratory and calculation records |
| `dq_completeness` | Inventory | Include every applicable atomic exchange, distinguish not-applicable from zero, and reconcile purchases, stock, production and waste. | Completeness checklist and balances |
| `dq_route` | Conditional operations | Keep open-seam, riveted and other mechanical routes distinguishable and include only operations that occurred. | Route coding, joint drawing and operation log |
| `dq_uncertainty` | Estimates and allocation | Retain derivations and assess effects on material balance, energy, waste and direct fossil carbon dioxide. | Uncertainty and sensitivity record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
|---|---|---|---|
| `val_identity` | Product and classification | Confirm CPC 41289 identity, declared steel and dimensional qualifiers, and exclusion of seamless, welded, cast, fitting, drilling, casing, tubing, and non-ferrous products. | `src_unsd_cpc_3_0_2025` |
| `val_route` | Conditional process rows | Verify that mechanical-closure exchanges are absent for open-seam release, rivets occur only for the riveted route, and no welding material, welding electricity, or welded-product flow is hidden in the dataset. | `src_nist_riveted_pipe_2009`; `src_epa_steel_pipe_1995` |
| `val_reference` | Quantitative reference | Confirm exactly 1 kg net conforming, unpackaged reference product after inspection and consistent normalization of every exchange. |  |
| `val_mass_balance` | Steel-bearing flows | Reconcile flat-steel input, rivets where applicable, conforming product, segregated steel scraps, rejects, and documented stock change; investigate and explain the residual. |  |
| `val_energy` | Electricity and fuel | Confirm native meter records, unit conversions, route assignment, gas reference conditions, and separation of preparation, closure, and release energy. |  |
| `val_waste` | Process wastes | Confirm atomic separation of spent coolant, spent alkaline liquor, cleaning wastewater, and steel scrap, with no duplicate mass or hidden combined waste row. | `src_jrc_fmp_bref_2022` |
| `val_emissions` | Direct fossil carbon dioxide | Recalculate each direct fossil carbon-dioxide output from its corresponding collected fuel record or compare with direct measurement; exclude upstream electricity and fuel-supply emissions. |  |

## 10. Published Dataset Profile

| Field | Value |
|---|---|
| dataset_role | Foreground factory-gate production dataset for CPC 41289 steel tubes and pipes |
| downstream_use | Construction of process and lifecyclemodel projections using the declared route and background links |
| allowed_use | Product systems matching the declared steel grade, dimensions, seam route, surface state, plant geography and factory-gate state |
| excluded_use | Seamless, welded, cast, fitting, drilling, casing, tubing or non-ferrous products; generic substitution without qualifier review |
| required_metadata | Reporting period; plant and geography; grade and dimensions; closure route; seam structure; surface and heat-treatment state; gas conditions; waste destinations; allocation |
| required_quality_disclosure | Metering, calibration, concentration, stock reconciliation, conditional routes, estimates, allocation, balances and unresolved UUID status |
| update_trigger | Material change in product identity, closure route, plant technology, energy or material supply, conditioning, waste destination, allocation, data period or public UUID status |

## 11. Data Sources

| Source id | Type | Reference | Used for |
|---|---|---|---|
| `src_unsd_cpc_3_0_2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, CPC 41289. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official product identity and separation from adjacent seamless and welded tube and pipe leaves |
| `src_nist_riveted_pipe_2009` | official_guidance | National Institute of Standards and Technology NEHRP official record for MCEER-08-0016 and its linked full report PB2009107910; original-text verification used section 5.4.3.3 describing lap-jointed riveted steel pipe fabrication. https://nehrpsearch.nist.gov/article/PB2009-107910/XAB | Riveted closure by overlapped plate edges, longitudinal and circumferential lap joints, rivets, and caulking |
| `src_doe_roll_forming_2003` | official_guidance | U.S. Department of Energy, Module 3C: Fabrication Technology, roll-forming process description. https://www.energy.gov/sites/default/files/2021-07/Module_3C.pdf | Repeated-roll forming of sheet to a uniform cross-section |
| `src_epa_steel_pipe_1995` | official_guidance | U.S. Environmental Protection Agency, Development Document for the Metal Products and Machinery Point Source Category, steel pipe production description. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30003VJS.TXT | Flat stock, cutting, forming, optional annealing, quenching, straightening, alkaline conditioning, rinsing, and associated segregated foreground exchanges; welding description used only to enforce exclusion |
| `src_jrc_fmp_bref_2022` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, 2022, DOI 10.2760/196475. https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 | Flat-steel tube forming context, route-specific conditioning, water and chemical management, segregation and monitoring of treatment streams |
