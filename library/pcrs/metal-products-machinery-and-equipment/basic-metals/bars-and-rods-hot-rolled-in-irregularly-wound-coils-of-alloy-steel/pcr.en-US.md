---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-hot-rolled-in-irregularly-wound-coils-of-alloy-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Bars and rods, hot-rolled, in irregularly wound coils, of alloy steel

## 1. Scope and Applicability

This PCR applies to alloy-steel bars and rods that obtain their final hot-rolled long-product form in a rolling mill and are supplied at the mill gate in irregularly wound coils. The foreground boundary begins with received alloy-steel billet, bloom, or an equivalent semi-finished long-steel feed and ends with inspected, bundled, saleable coil at the producing mill gate.

The PCR covers surface rectification when performed, reheating, descaling, hot rolling, controlled cooling, irregular coiling, inspection, trimming and bundling. It excludes production of the semi-finished steel feed, cold rolling, cold drawing, wire drawing, separate post-rolling pickling, separate annealing or patenting, galvanising, other coating, machining, downstream fabrication, distribution, use and end-of-life. A dataset that includes an excluded transformation shall report it as a separately identified process and shall not describe its output solely as the reference product of this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-hot-rolled-in-irregularly-wound-coils-of-alloy-steel |
| classification_refs | CPC 3.0: 41243, exact classification context |
| covered_products | Stainless-steel and other alloy-steel hot-rolled bars and rods supplied in irregularly wound coils, including grade-specific wire rod in that market state |
| excluded_products | Iron or non-alloy-steel wire rod; straight bars or rods; cold-formed, cold-finished or drawn wire; separately annealed, pickled, galvanised or coated downstream products; semi-finished billets and blooms |
| representative_product | Saleable alloy-steel hot-rolled wire-rod coil at the rolling-mill gate |
| production_route | Semi-finished alloy-steel feed; optional surface rectification; reheating; descaling; hot rolling; controlled cooling; irregular coiling; inspection, trimming and bundling |
| market_state | Hot-rolled, irregularly wound coil; alloy grade, dimensional specification, surface condition, heat-treatment state and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of alloy-steel bars and rods in the hot-rolled, irregularly wound coil state at the producing mill gate |
| How much | 1,000 kg net saleable product, excluding transport packaging mass |
| How well | Conforming to the declared alloy grade, diameter or section, dimensional tolerance, surface condition and applicable customer or product specification |
| How long or cycle | One completed production lot through the declared billet-to-coil hot-rolling route; no use-duration function is assigned |
| reference_flow_link | `alloy_steel_hot_rolled_coil_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net saleable hot-rolled coiled bars and rods |
| Reference product flow | Bars and rods, hot-rolled, in irregularly wound coils, of alloy steel; Tiangong UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy grade and standard; stainless, high-speed, silico-manganese or other alloy-steel family; billet or bloom feed state; nominal diameter or section; dimensional tolerance; surface condition; heat-treatment state; coil mass range; production route; mill technology; production site and geography; production period; recycled-content accounting method; net product mass; packaging inclusion or exclusion; mill-gate delivery boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all ferrous material-balance rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report dry, net metal mass at the weighing condition declared by the mill. Exclude strapping and other transport packaging from the reference product mass and record them as separate inputs. |
| `energy_conversion` | Alternating-current electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electricity unit and conversion factor in the foreground package; when converting kWh to MJ, use 3.6 MJ per kWh and do not mix primary-energy factors with delivered electricity. |
| `gas_volume_conditions` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the temperature, absolute pressure, moisture basis and meter correction used for the reported gas volume; do not combine volumes stated at different reference conditions. |
| `water_net_makeup` | Process water | Volume | m3 | Report net make-up water crossing the site boundary. Recirculated water within the mill is an internal flow and shall not be counted repeatedly as new input. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Alloy-steel billet, bloom, or equivalent semi-finished long-steel feed received at the hot-rolling mill boundary, with grade, mass, casting route, temperature state and supplier geography declared |
| starting_condition_role | Upstream steelmaking and casting are represented by the selected semi-finished alloy-steel input dataset rather than reconstructed inside this foreground PCR |
| product_classification_scope | Alloy-steel hot-rolled bars and rods supplied in irregularly wound coils; CPC 3.0 code 41243 is classification context and does not replace the semantic product qualifiers |
| recursive_input_rule | A purchased or transferred product already meeting this PCR's reference-product state shall be recorded as an upstream product input and shall not be rerun through the billet-to-coil foreground process; disclose the transferred mass and avoid double counting its prior rolling burdens |
| upstream_dataset_requirement | Use a geographically, technologically and grade-representative semi-finished alloy-steel dataset with its steelmaking route, recycled-content method and casting state disclosed |
| disclosure | Declare included unit operations, direct-firing fuels, electricity supply, water-loop boundary, surface rectification, yield and internal returns, waste destinations, emission-monitoring basis, packaging, site, geography and production period |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_start` | foreground_start | Begin the foreground system at receipt of semi-finished alloy-steel billet, bloom or equivalent long-steel feed; connect upstream steelmaking and casting through the input dataset. | `ec-jrc-fmp-bref-2022` |
| `boundary_rule_operations` | foreground_operations | Include all attributable on-site surface rectification when used, reheating, descaling, hot rolling, cooling, irregular coiling, inspection, trimming, bundling, direct energy, water, wastes and direct emissions. | `ec-jrc-fmp-bref-2022` |
| `boundary_rule_downstream` | excluded_downstream_processing | Exclude wire drawing, cold rolling, separate pickling, separate annealing or patenting, galvanising, coating and downstream fabrication from the reference-product process; model any included downstream transformation separately. | `ec-jrc-fmp-bref-2022` |
| `boundary_rule_internal_returns` | internal_recycling | Do not report scale, crop ends, off-specification rod, water or lubricant as an external output when it is fully returned and consumed within the same declared foreground system; retain the internal return record for mass-balance review. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hot_rolling_and_coiling` | Billet preparation, reheating, descaling, hot rolling, cooling, irregular coiling and finishing | required | Surface rectification exchanges apply only when scarfing or grinding is performed; all other listed core stages are included for saleable hot-rolled coiled product | Foreground production from semi-finished alloy-steel feed to mill-gate coil | 1,000 kg net saleable hot-rolled coiled bars and rods |

### Process: Billet preparation, hot rolling and coiling (`hot_rolling_and_coiling`)

This process aggregates the connected mill stages so that intermediate hot billets and rod between stands are not counted as external product exchanges. Unit-operation meters and records shall still be retained where available.

#### Inputs

##### Product flows

###### Semi-finished alloy-steel feed (`alloy_steel_billet_input`)

Record the alloy-steel billet, bloom or equivalent long-steel feed that crosses the rolling-mill boundary. Grade and feed state shall match the produced coil.

- Selected flow: Alloy-steel billet or bloom; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net mass charged to production lots, adjusted for opening and closing work-in-process inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

###### Delivered alternating-current electricity (`hot_rolling_electricity_input`)

Record metered alternating-current electricity delivered to billet preparation, rolling drives, pumps, fans, cooling, coiling and finishing within the foreground process.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered delivered electricity allocated to the declared production lots and converted to MJ using the recorded meter unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_metering`
- Sources: `ec-jrc-fmp-bref-2022`

###### Natural gas for reheating (`reheating_natural_gas_input`)

Record gaseous natural gas delivered to reheating or holding burners within the foreground process. Supplier geography, burner technology and volume reference conditions are required.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: corrected meter volume attributable to the declared production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_metering`
- Sources: `us-epa-ap42-steel-minimills-2009`

###### Net process-water make-up (`process_water_input`)

Record the net process water supplied across the site boundary for descaling, roll cooling, product cooling and other direct mill uses. Do not count internally recirculated water as repeated input. Convert volume-meter records to mass using a documented measured or supplier density at the declared reference condition.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: mass of incoming make-up water less the mass of measured return exported back to the same supplier system, attributable to the declared production lots
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_metering`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling lubricant (`rolling_lubricant_input`)

Record hot rolling oil when it crosses the foreground boundary for the declared mill technology. Mark this row not applicable when production and stores records verify that no hot rolling oil was supplied; chemically different lubricants shall be added as separate dataset exchanges.

- Selected flow: Hot rolling oil `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued lubricant mass consumed by the declared production lots, corrected for inventory change and recovered lubricant returned to service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lubricant_records`
- Sources:

###### Steel strapping for coil bundling (`steel_strapping_input`)

Record steel straps shipped with the coil separately from the net reference-product mass.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass / kg
- Amount rule: issued or purchased steel-strap mass attached to shipped coils in the declared production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

No waste flow is expected as an input to the declared billet-to-coil process. If externally generated waste is used, define it as a separate, chemically and physically specific exchange and explain its treatment role.

##### Elementary flows

No elementary input is prescribed. Water supplied by a utility or withdrawn under a product-flow convention is recorded in the product-flow water row; any direct environmental withdrawal shall instead be represented by the exact elementary flow used by the dataset.

#### Outputs

##### Product flows

###### Saleable hot-rolled alloy-steel coiled bars and rods (`alloy_steel_hot_rolled_coil_output`)

Record only product passing the declared grade, dimension, surface and coil acceptance criteria. Packaging mass is excluded.

- Selected flow: Bars and rods, hot-rolled, in irregularly wound coils, of alloy steel; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net saleable product mass; normalize the foreground inventory to 1,000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

###### Mill scale sent outside the foreground system (`mill_scale_output`)

Record oxide scale removed during descaling and rolling only when it leaves the declared foreground system for treatment, recovery or disposal.

- Selected flow: Mill scale `763bdad1-b443-428a-89b6-371a6807fc6c`
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass plus closing storage inventory less opening storage inventory, attributed to the declared production lots
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Grinding or scarfing swarf (`grinding_swarf_output`)

Record alloy-steel swarf or dust leaving the foreground system when surface rectification by grinding or scarfing is performed. Mark the row not applicable only when production records show that no such operation occurred.

- Selected flow: Steel swarf `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- Flow property / unit: Mass / kg
- Amount rule: measured collected mass attributable to production lots that underwent surface rectification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods for the applicable route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent rolling lubricant (`spent_rolling_lubricant_output`)

Record used hot rolling oil only when it leaves the foreground system for external regeneration, treatment or disposal. Mark this row not applicable when no hot rolling oil was supplied or no used oil crossed the boundary.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass adjusted for opening and closing on-site waste storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass_records`
- Sources:

###### Rejected alloy-steel rod sent outside the foreground system (`rejected_alloy_steel_rod_output`)

Record crop ends and off-specification hot-rolled rod only when they leave the declared foreground system. Material fully returned to an upstream steelmaking process inside the same declared system is tracked internally and not reported as an external waste output.

- Selected flow: Off-specification alloy-steel hot-rolled rod; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass adjusted for opening and closing reject inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Cooling-water blowdown (`cooling_water_blowdown_output`)

Record cooling-water blowdown that crosses the foreground boundary to external wastewater treatment or discharge. Do not combine it with sanitary wastewater or unrelated site effluent.

- Selected flow: Hot-rolling cooling-water blowdown; Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: measured blowdown volume attributable to the declared production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_metering`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide from on-site fuel combustion (`reheating_fossil_co2_air`)

Record fossil carbon dioxide emitted to air from natural-gas combustion in reheating or holding furnaces within the foreground boundary. Do not include upstream gas-supply emissions in this direct elementary flow.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-measured or facility-verified direct fossil carbon-dioxide mass attributable to the declared production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable hot-rolled coiled bars and rods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_records`
- Sources: `us-epa-ap42-steel-minimills-2009`

No external quantitative ranges are prescribed in this candidate PCR. Important-flow ranges remain unresolved until at least two independent original-text sources with compatible billet-to-coil boundary, functional unit, product state, geography and technology are verified; foreground collection remains mandatory.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_subdivide` | shared_mill_operations | Prefer subdivision or direct lot, meter and mass-record attribution for reheating, rolling, cooling, coiling and finishing before applying allocation. |  |
| `allocation_rule_internal_returns` | internal_returns | Treat scale, crop ends, rejected rod, water and lubricant returned within the declared foreground system as internal exchanges; do not assign an avoided-product credit or report them again as external outputs. |  |
| `allocation_rule_residuals` | saleable_residual_outputs | If a saleable residual leaves the foreground system and shared burdens cannot be subdivided, allocate the remaining shared burdens by documented physical mass after separately attributing process-specific burdens; disclose output masses, market status, allocation fraction and sensitivity to an economic alternative. |  |
| `allocation_rule_no_recycled_content_double_count` | semi_finished_steel_input | Preserve the recycled-content or end-of-life accounting method of the upstream semi-finished alloy-steel dataset and do not add a second scrap credit in the rolling foreground. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `hot_rolling_and_coiling` | `alloy_steel_billet_input`; `alloy_steel_hot_rolled_coil_output`; `rejected_alloy_steel_rod_output` | certified weighbridge, scale, production and inventory records | heat or lot id; grade; feed mass; saleable coil mass; reject mass; crop-end mass; opening and closing work-in-process; scale id; calibration status | Link weighed inputs and outputs to heat or production-lot identifiers and reconcile inventory change | kg | each heat or lot; aggregate monthly | at least 12 consecutive representative months, or the full campaign when shorter | all lines and lots represented by the dataset | Sum verified lot records, adjust for inventory change, then normalize by verified net saleable product mass | calibrated-scale certificates; production reconciliation; grade certificates; inventory sign-off |
| `cp_electricity_metering` | `hot_rolling_and_coiling` | `hot_rolling_electricity_input` | revenue, submeter or verified energy-management records | meter id; start and end reading; meter unit; line or equipment scope; outage; production lot or period; supplier; voltage; geography; calibration | Prefer line submeters; otherwise attribute site-meter electricity using documented operating hours or equipment load after subtracting non-foreground uses | kWh or MJ | continuous or shift readings; aggregate monthly | same representative period as product output | all included rolling-mill equipment and attributable auxiliaries | Sum attributable delivered electricity and convert to MJ without applying a primary-energy factor | meter calibration; invoices; submeter map; reconciliation to site total |
| `cp_natural_gas_metering` | `hot_rolling_and_coiling` | `reheating_natural_gas_input` | corrected gas-meter and supplier records | meter id; volume; temperature; pressure; moisture basis; correction factor; burner and furnace id; production period; supplier geography | Read furnace or line meters; reconcile corrected volume to supplier invoices and production operating periods | m3 | continuous or shift readings; aggregate monthly | same representative period as product output | every reheating or holding furnace included in the dataset | Sum volume at one declared reference condition and allocate only documented shared-furnace use | meter calibration; supplier invoices; correction certificate; furnace operating log |
| `cp_water_metering` | `hot_rolling_and_coiling` | `process_water_input`; `cooling_water_blowdown_output` | intake, make-up, return and blowdown meter records | meter id; intake; purchased make-up; exported return; blowdown; line scope; date; water source; water density and reference condition; treatment destination | Reconcile water-loop meters and distinguish internal recirculation from boundary-crossing make-up and blowdown | m3 raw readings; kg reported process-water input | daily or shift readings; aggregate monthly | same representative period as product output | rolling, descaling and cooling water systems attributable to the product | Calculate net boundary-crossing volumes, convert the process-water input to mass using documented density, and allocate shared systems using documented throughput or operating time | meter calibration; density record; water balance; utility invoice; discharge or treatment record |
| `cp_lubricant_records` | `hot_rolling_and_coiling` | `rolling_lubricant_input`; `spent_rolling_lubricant_output` | purchase, issue, recovery and waste-dispatch records | product identity; issued mass; purchased mass; recovered mass; opening and closing stock; spent mass; destination; production period | Reconcile stores and waste records by chemically specific lubricant and line | kg | each issue and dispatch; aggregate monthly | same representative period as product output | all included rolling equipment | Consumption equals issues or purchases plus opening stock minus closing stock and verified return to service | safety data sheet; purchase invoice; stores ledger; waste transfer note |
| `cp_packaging_records` | `hot_rolling_and_coiling` | `steel_strapping_input` | packaging bill of materials and issue records | strap specification; mass per strap or issued mass; number of straps; coil id; opening and closing stock | Link strap issues or bill-of-material counts to shipped coils and verify count-to-mass conversion | kg | each shipped coil; aggregate monthly | same representative period as product output | all reference-product coils shipped by the represented site | Sum verified attached strap mass; exclude it from net reference-product mass | packaging specification; calibrated sample mass; issue record; shipment record |
| `cp_waste_mass_records` | `hot_rolling_and_coiling` | `mill_scale_output`; `grinding_swarf_output`; `spent_rolling_lubricant_output` | waste scale, storage and transfer records | waste identity; source operation; measured mass; opening and closing storage; internal return; destination; date; lot or period | Weigh each segregated waste stream and reconcile dispatches, storage change and internal returns | kg | each dispatch; aggregate monthly | same representative period as product output | all included process areas and waste stores | External output equals dispatch plus closing storage minus opening storage; exclude documented internal returns | scale calibration; waste transfer note; storage inventory; destination evidence |
| `cp_direct_emissions_records` | `hot_rolling_and_coiling` | `reheating_fossil_co2_air` | continuous monitoring, stack test, or facility-verified direct-emissions inventory | source id; fossil fuel quantity and composition; monitored or calculated CO2; method; sampling period; production period; control status; uncertainty | Use site monitoring or a facility-verified inventory linked to included furnaces; retain the method and source-specific boundary | kg | continuous, test campaign, or verified reporting period; aggregate to dataset period | same representative period as product output | all direct fuel-combustion sources inside the foreground boundary | Sum source-specific fossil CO2 and attribute to represented product lots using direct records or documented furnace service | monitoring QA/QC; calibration; laboratory or verification report; source-to-furnace map |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period-attributable exchange / period net saleable reference-product mass × 1,000 kg | verified exchange amount; verified net saleable coil mass | exchange amount per 1,000 kg reference product |  |
| `calc_material_balance` | ferrous material rows | unexplained mass difference = adjusted semi-finished feed mass - saleable product mass - externally dispatched ferrous or oxide outputs - closing internal ferrous inventory increase; report all terms and sign convention | feed, product, scale, swarf, reject and inventory-change records | documented mill mass-balance reconciliation |  |
| `calc_net_process_water` | process water | net make-up-water mass = (boundary-crossing intake or purchased make-up volume - water volume exported back to the same supplier system) × documented water density at the declared reference condition; use direct mass records when available and exclude internal recirculation | intake, make-up, export and recirculation records; water density and reference condition | net process-water input in kg |  |
| `calc_gas_reference_volume` | natural gas | Convert each gas record to the single declared temperature, absolute-pressure and moisture condition using the meter or supplier correction; do not combine uncorrected volumes | metered volume; reference and observed conditions; correction factor | corrected natural-gas volume in m3 |  |
| `calc_packaging_mass` | steel strapping | strap mass = verified strap count × measured or specified mass per strap, unless total issued mass is directly weighed | strap count; mass per strap; direct issued mass | steel-strapping input mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and semi-finished feed | Retain grade certificates, product specification, heat or lot traceability, diameter or section, surface and heat-treatment state, and evidence that the output is supplied as an irregularly wound hot-rolled coil. | certificates of analysis; production order; inspection and shipment records |
| `dq_temporal_representativeness` | all foreground exchanges | Use one common representative production period, normally at least 12 consecutive months; document shutdowns, campaigns, abnormal events and any shorter-period justification. | dated raw records; production calendar; representativeness statement |
| `dq_meter_and_scale_quality` | mass, energy, gas and water | Use calibrated meters or documented reconciliation to invoices and site totals; retain meter scope, unit, correction and uncertainty information. | calibration certificates; meter map; invoice reconciliation; QA/QC records |
| `dq_completeness` | process inventory | Reconcile all listed rows as measured, calculated, zero with evidence, not applicable under the stated condition, or unresolved; do not omit a known exchange because its UUID is unresolved. | signed completeness checklist; material, energy and water balances; unresolved-flow register |
| `dq_upstream_steel` | semi-finished alloy-steel input | Document steelmaking route, casting route, grade family, supplier geography, recycled-content method and whether the feed dataset includes hot charging or prior reheating. | supplier dataset and certificate; procurement specification; chain-of-custody record |
| `dq_waste_destination` | external waste outputs | Distinguish internal returns from external recovery, treatment and disposal and retain the receiving destination and mass evidence. | waste transfer notes; receiver records; inventory reconciliation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_identity` | reference_product | Confirm CPC classification context and every required product qualifier; reject a dataset whose output is straight bar, drawn wire, coated product or another downstream state. | `unsd-cpc-3-0-structure-2025`; `unsd-cpc-1-1-chinese` |
| `validation_rule_reference_amount` | reference_flow | Confirm that all exchanges are normalized to exactly 1,000 kg net saleable product and that steel strapping or other packaging is excluded from that mass. |  |
| `validation_rule_boundary` | system_boundary | Confirm that upstream steelmaking and casting are represented only through the semi-finished feed dataset and that all included hot-rolling stages, direct energy, water, external wastes and direct emissions are covered. | `ec-jrc-fmp-bref-2022` |
| `validation_rule_mass_balance` | ferrous_material_balance | Reconcile semi-finished feed, saleable product, mill scale, swarf, rejects, internal returns and work-in-process change; investigate and disclose any material unexplained difference. |  |
| `validation_rule_energy` | electricity_and_fuel | Reconcile electricity and corrected natural-gas records to the same production period and mill scope; confirm that upstream supply burdens are not duplicated as direct emissions. | `us-epa-ap42-steel-minimills-2009` |
| `validation_rule_uuid_status` | tiangong_references | Before activation or publication, directly read and confirm any newly adopted Tiangong UUID as public state_code 100 with matching base name, flow type, classification, property, unit group, state, geography, technology and comment; retain unresolved rows explicitly until then. |  |
| `validation_rule_ranges` | quantitative_ranges | Do not add an externally inferred range unless at least two mutually independent original sources have compatible system boundary, reference basis and product state and the synthesis explains geography and technology differences. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset suitable, after review, for publication as a `secondary_dataset` or `background_dataset` |
| downstream_use | Product-carbon-footprint, process-LCA and lifecyclemodel studies needing a mill-gate alloy-steel hot-rolled wire-rod coil input |
| allowed_use | Use when alloy family, grade, product state, mill route, geography, production period, upstream steel route, recycled-content method and reference mass are compatible with the study |
| excluded_use | Do not use as a proxy for non-alloy-steel rod, straight bar, cold-drawn wire, separately heat-treated or pickled wire rod, coated products, semi-finished steel, or cradle-to-gate steel without the upstream feed dataset |
| required_metadata | PCR id and version; product and grade qualifiers; reference-flow UUID status; site and geography; period; technology; included stages; semi-finished feed dataset; steel route and recycled-content method; energy suppliers; water boundary; allocation; packaging; waste destinations; direct-emissions method; unresolved identities |
| required_quality_disclosure | raw-record coverage; meter and scale quality; temporal and technological representativeness; material, energy and water reconciliation; allocation sensitivity; data gaps; UUID and range-evidence status; uncertainty and verification status |
| update_trigger | Change in alloy family, product state, furnace or rolling technology, upstream steel route, electricity or fuel supply, water system, yield, allocation, packaging, site, representative period, Tiangong reference identity, or applicable product specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Official CPC 3.0 code 41243 identity, English title and hierarchy context |
| `unsd-cpc-1-1-chinese` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition. https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-03) | Verified Chinese steel-product terminology for irregularly coiled, hot-rolled stainless or other alloy-steel bars and rods under code 41243 |
| `ec-jrc-fmp-bref-2022` | official_guidance | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Ferrous Metals Processing Industry, JRC131649, EUR 31321 EN, 2022, DOI 10.2760/196475. https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 (retrieved 2026-09-03) | Semi-finished-steel downstream boundary; hot-rolling process sequence; distinction from cold rolling, wire drawing, pickling, annealing and coating routes |
| `us-epa-ap42-steel-minimills-2009` | official_guidance | U.S. Environmental Protection Agency, Emission Factor Documentation for AP-42 Section 12.5.1, Iron and Steel Production - Steel Minimills, April 2009. https://www.epa.gov/sites/production/files/2020-11/documents/b12s0501.pdf (retrieved 2026-09-03) | Natural-gas-fired reheating of semi-finished steel, direct-emission scope and source-quality expectations |
