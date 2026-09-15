---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-of-alloy-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Angles, shapes and sections, of alloy steel

## 1. Scope and Applicability

This PCR covers solid stainless-steel and other alloy-steel angles, shapes and sections supplied as unprepared mill products at the dispatch gate, including hot-formed products and products receiving a declared cold-forming or cold-finishing stage. The foreground boundary begins with semi-finished alloy-steel feedstock or, for a stand-alone cold-finishing site, a received hot-formed section.

It excludes iron or non-alloy-steel sections, welded sections, sheet piling, track material, hollow profiles and tubes, wire, bars and rods, and sections prepared for a specific structure. Upstream steel production, downstream transport, fabrication, installation, use and end-of-life require separate linked datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-of-alloy-steel |
| classification_refs | CPC 3.0 41266, “Angles, shapes and sections, of alloy steel” (`unsd-cpc-3-0-structure-2025`) |
| covered_products | Solid stainless-steel or other alloy-steel angles, shapes and sections supplied as unprepared mill products; hot-formed and declared cold-formed or cold-finished variants |
| excluded_products | Non-alloy, welded, hollow, track, wire, bar, rod and structure-prepared products |
| representative_product | One declared alloy-steel grade and section designation in its dispatch condition |
| production_route | Hot rolling, hot drawing or hot extrusion, with cold forming or cold finishing included only when performed; declare the actual route |
| market_state | Inspected saleable solid section at the producing mill dispatch gate, with declared surface and heat-treatment condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of an alloy-steel angle, shape or section meeting the declared grade, geometry and dispatch condition |
| How much | 1,000 kg net saleable product at the producing mill dispatch gate |
| How well | Conforms to the declared alloy family, grade/composition specification, section designation, dimensional tolerances, mechanical-property condition, heat treatment and surface condition |
| How long or cycle | One production lot through dispatch; service life is not represented |
| reference_flow_link | Use `hot_formed_alloy_steel_section_output` when no cold-finishing stage follows; otherwise use `reference_product_cold_route` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net saleable alloy-steel section |
| Reference product flow | Angles, shapes and sections, of alloy steel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy family and grade; composition or product standard; section designation and dimensions; forming route; heat-treatment condition; surface condition; producing site and geography; production period; recycled-content accounting method; dispatch gate |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use certified net saleable mass, excluding reusable fixtures and external packaging, and normalize the applicable final product output to 1,000 kg. |
| `steel_mass_consistency` | Steel-bearing product and waste flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record feedstock, product, scrap and scale on a consistent mass basis; disclose material moisture or adherent oil. |
| `electricity_energy` | Alternating-current inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity in its original unit and convert with a disclosed exact conversion; do not combine electricity and fuel energy. |
| `gas_reference_volume` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record reference temperature, pressure and dryness with the metered volume. |
| `process_water_mass` | Externally supplied process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record boundary-crossing make-up water by mass; when only volume is metered, convert using documented density at the metered temperature and pressure. |
| `wastewater_volume` | Hot-rolling wastewater | Volume | m3 | Meter wastewater crossing the boundary; report internal recirculation separately. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_gate` | Foreground system boundary | Include all on-site operations from the declared alloy-steel feedstock through surface rectification, reheating, descaling, forming, cooling, straightening, cutting, cold finishing, inspection and dispatch when each operation is performed. | `eu-jrc-fmp-bref-2022` |
| `boundary_upstream_link` | Upstream steel supply | Represent billet, bloom or received hot-formed section with a representative upstream dataset; do not absorb upstream steelmaking into unreported foreground assumptions. | `eu-jrc-fmp-bref-2022` |
| `boundary_route_disclosure` | Conditional process selection | Include `hot_section_forming` and `cold_section_finishing` only when their stated inclusion conditions apply, and declare whether they are linked on-site or through an upstream dataset. | `unsd-cpc-3-0-structure-2025`, `eu-jrc-fmp-bref-2022` |
| `boundary_completeness` | Foreground inventory | Collect company-specific data and include all environmentally relevant material, energy, waste and elementary flows crossing the boundary; disclose exclusions and significance. | `ec-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Alloy-steel billet or bloom received by an integrated hot-forming mill; hot-formed alloy-steel section received by a stand-alone cold-finishing site |
| starting_condition_role | Product input whose upstream production is represented by a linked dataset |
| product_classification_scope | Solid alloy-steel angles, shapes and sections corresponding to CPC 3.0 41266, excluding welded, hollow, non-alloy and structure-prepared products |
| recursive_input_rule | Record a received same-category section as a product input with its own upstream dataset; do not recursively reproduce an unbounded foreground chain |
| upstream_dataset_requirement | Declare alloy family/grade, route, geography, recycled-content accounting, product state and delivery boundary without overlap with foreground operations |
| disclosure | Declare feedstock form, grade, mass basis, supplier geography, hot-charge condition, site configuration, included stages and final dispatch condition |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hot_section_forming` | Hot section forming and finishing | conditional | Include when hot rolling, hot drawing or hot extrusion occurs inside the foreground boundary; may precede on-site cold finishing. | Convert billet or bloom to hot-formed section and record site inputs, wastes and direct emissions. | kg hot-formed alloy-steel section output |
| `cold_section_finishing` | Cold section forming and finishing | conditional | Include when a hot-formed section is cold-formed, cold-finished or otherwise further worked before dispatch. | Convert hot-formed section to the final cold-finished reference product. | kg cold-finished alloy-steel section output |

At least one process shall be included. If both are included, link the hot output to the cold input without duplicating burdens.

### Process: Hot section forming and finishing (`hot_section_forming`)

#### Inputs

##### Product flows

###### Alloy-steel billet input (`alloy_steel_billet_input`)

Record only when billet crosses the foreground boundary.

- Selected flow: Alloy-steel billet
- Flow property / unit: Mass / kg
- Amount rule: measured net billet mass charged to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Alloy-steel bloom input (`alloy_steel_bloom_input`)

Record only when bloom crosses the foreground boundary.

- Selected flow: Alloy-steel bloom
- Flow property / unit: Mass / kg
- Amount rule: measured net bloom mass charged to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Natural gas for reheating (`natural_gas_input`)

Record only when gaseous natural gas is combusted inside the boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: supplier-metered volume assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output at declared reference-volume conditions
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Alternating-current electricity for hot forming (`hot_forming_electricity`)

Record electricity delivered to forming, reheating auxiliaries, descaling, cooling and finishing equipment.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity assigned to hot forming and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Process water (`process_water_input`)

Record externally supplied make-up water for descaling, cooling or finishing; exclude internal recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: boundary-measured make-up-water mass assigned to the production lot; when only volume is metered, convert using documented density at the metered temperature and pressure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Hot-rolling lubricant (`hot_rolling_lubricant`)

Record the declared lubricant only when used; do not combine it with hydraulic fluids or cleaning agents.

- Selected flow: Hot rolling oil `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus documented reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot-formed alloy-steel section output (`hot_formed_alloy_steel_section_output`)

This is the reference product if no cold stage follows; otherwise it is the linked intermediate.

- Selected flow: Angles, shapes and sections, of alloy steel
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output, normalized to 1,000 kg when final
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

###### Mill scale (`mill_scale_waste`)

Record segregated oxide scale at its declared moisture and oil condition.

- Selected flow: Alloy-steel mill scale
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass with documented condition correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfer_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Alloy-steel offcut scrap from hot forming (`hot_process_alloy_steel_scrap`)

Record segregated cropping, cutting and reject scrap leaving for recycling or treatment.

- Selected flow: Alloy-steel offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass leaving hot forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources:

###### Oil- and scale-bearing hot-rolling wastewater (`hot_rolling_wastewater`)

Record only wastewater crossing the boundary after internal reuse.

- Selected flow: Oil- and scale-bearing hot-rolling wastewater
- Flow property / unit: Volume / m3
- Amount rule: boundary-metered wastewater volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air`)

Record monitored or site-calculated fossil carbon dioxide from natural-gas combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: direct measurement or documented site calculation from fuel quantity and carbon/oxidation data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emission_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Nitrogen oxides to air (`nitrogen_oxides_air`)

Record monitored nitrogen oxides using the facility's declared species basis.

- Selected flow: Nitrogen oxides to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: monitored or source-tested mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emission_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Particulate matter to air (`particulate_matter_air`)

Record monitored particulate matter on the facility's declared particle-size basis.

- Selected flow: Particulate matter to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: monitored or source-tested mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg applicable final reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emission_records`
- Sources: `eu-jrc-fmp-bref-2022`

### Process: Cold section forming and finishing (`cold_section_finishing`)

#### Inputs

##### Product flows

###### Hot-formed alloy-steel section input (`hot_formed_alloy_steel_section_input`)

Record the hot-formed section entering cold forming or finishing.

- Selected flow: Angles, shapes and sections, of alloy steel
- Flow property / unit: Mass / kg
- Amount rule: measured net input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cold-finished reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_records`
- Sources: `unsd-cpc-3-0-structure-2025`

###### Alternating-current electricity for cold finishing (`cold_forming_electricity`)

Record electricity delivered to cold-forming, straightening, cutting and finishing equipment.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity assigned to cold finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cold-finished reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `ec-pef-method-2021`

###### Cold-forming lubricant (`cold_forming_lubricant`)

Record the declared lubricant only when used; do not combine it with cleaning chemicals.

- Selected flow: Cold-forming lubricant
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus documented reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cold-finished reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cold-finished reference product (`reference_product_cold_route`)

This is the reference product when cold finishing is included.

- Selected flow: Angles, shapes and sections, of alloy steel
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output normalized to 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg cold-finished reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

###### Alloy-steel offcut scrap from cold finishing (`cold_process_alloy_steel_scrap`)

Record segregated cutting and reject scrap leaving cold finishing.

- Selected flow: Alloy-steel offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass leaving cold finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cold-finished reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources:

###### Spent cold-forming lubricant (`spent_cold_forming_lubricant`)

Record transferred spent lubricant as a distinct waste stream.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: measured waste-transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cold-finished reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfer_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared operations | Avoid allocation by sub-metering or subdividing processes and collect data directly attributable to the declared product where practicable. | `ec-pef-method-2021` |
| `allocation_physical_fallback` | Unsubdividable multifunctional processes | If subdivision or system expansion is impracticable, use a documented causal physical relationship; use mass only when it is demonstrated to drive shared inputs and outputs. | `ec-pef-method-2021` |
| `allocation_scrap_disclosure` | Recovered outputs | Record scrap and scale as measured outputs without an avoided-burden credit inside this gate-to-gate dataset; a downstream study may apply and disclose a consistent recycling method. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steel_mass_records` | `hot_section_forming`; `cold_section_finishing` | Steel inputs | Weighbridge, charge and stock records | form; grade; heat/lot; gross; tare; net mass; stock change; time | Reconcile receipts, charges and stock by lot. | kg | Each event | At least 12 months or full campaign | Included lines | Sum attributable net mass and normalize to final product. | Calibration, traceability and reconciliation |
| `cp_natural_gas_records` | `hot_section_forming` | Natural gas | Supplier and submeter records | volume; temperature; pressure; dryness; calorific value; allocation | Reconcile calibrated meters with invoices. | m3 | Continuous or billing interval | Product period | Included furnaces | Sum corrected attributable volume. | Calibration and invoice reconciliation |
| `cp_electricity_records` | both route process ids | Alternating current | Revenue and submeter records | kWh; voltage; supplier; geography; allocation | Reconcile calibrated meters with invoices. | kWh and MJ | Continuous or billing interval | Product period | Production and controls | Sum attributable kWh, convert to MJ and normalize. | Calibration, invoice and meter map |
| `cp_water_records` | `hot_section_forming` | Process water | Boundary meters | source; volume; recirculation; quality; allocation | Meter external make-up water. | m3 | Continuous or daily | Product period | Included water circuits | Sum attributable input and reconcile discharge. | Calibration and water balance |
| `cp_lubricant_records` | both route process ids | Lubricant | Issue, return and stock records | identity; specification; issued; returned; stock | Reconcile each named product. | kg | Each event | Product period | Included lines | Issued plus stock decrease minus reusable returns. | Batch and stock reconciliation |
| `cp_product_and_scrap_mass` | both route process ids | Product and scrap | Certified weights and transfer records | grade; section; lot; product; scrap; stock | Reconcile saleable, transfer and scrap mass. | kg | Each lot | Input period | Included lines | Sum outputs and normalize final product to 1,000 kg. | Calibration, conformity and mass balance |
| `cp_waste_transfer_records` | both route process ids | Scale and spent lubricant | Waste transfer records | identity; mass; condition; destination; date | Use measured transfer mass. | kg | Each transfer | Product period | Waste points | Sum each distinct waste without netting credits. | Weighing and receiver confirmation |
| `cp_wastewater_records` | `hot_section_forming` | Hot-rolling wastewater | Discharge records | volume; destination; reuse; sampling period | Meter boundary flow after reuse. | m3 | Continuous or event | Product period | Discharge points | Sum attributable boundary volume. | Calibration, water balance and permit records |
| `cp_stack_emission_records` | `hot_section_forming` | CO2, NOx and particulate matter | Monitoring, source tests or site calculations | pollutant; basis; concentration; gas flow; time; fuel/carbon data | Use validated monitoring; calculate CO2 only with documented inputs. | kg | Continuous or test interval | Product period | Included emission points | Integrate mass, assign and normalize. | QA, test and operating records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | All rows | normalized amount = attributable period amount × 1,000 kg / applicable final net saleable product mass | row amount; final product mass | amount per 1,000 kg | `ec-pef-method-2021` |
| `steel_mass_reconciliation` | Each route | feedstock + opening work-in-process = product + scrap + scale + other declared steel outputs + closing work-in-process; investigate residual | steel masses and stock changes | residual and completeness evidence | |
| `electricity_unit_conversion` | Electricity | MJ = kWh × 3.6 | kWh | MJ | |
| `route_linking` | Linked routes | Reconcile hot output and cold input after stock change and count upstream burdens once. | hot output; cold input; stock change | linked amount and residual | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Product and steel inputs | Retain alloy family, grade/composition, heat/lot, section designation, dimensions, heat treatment, surface condition and conformance. | Mill and conformity certificates |
| `dq_temporal_scope` | Activity data | Use at least 12 consecutive representative months or a full shorter campaign; disclose atypical operation. | Coverage table and operating log |
| `dq_meter_coverage` | Energy, water and emissions | Demonstrate complete, non-overlapping meter and emission-point coverage. | Meter map, calibration and reconciliation |
| `dq_mass_balance` | Steel-bearing flows | Reconcile feedstock, product, scrap, scale and stock changes; explain residuals. | Signed mass-balance worksheet |
| `dq_upstream_dataset` | Steel inputs | Match upstream alloy family, route, recycled-content method, geography and delivery boundary. | Supplier declaration and dataset metadata |
| `dq_completeness` | All exchanges | Retain a reason for every excluded exchange and unresolved Tiangong identity. | Completeness checklist and identity register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Product conformance | Reject missing grade, section, route, condition, site, geography, period or gate metadata, and reject welded, hollow, non-alloy or structure-prepared products. | `unsd-cpc-3-0-structure-2025`, `china-mof-tariff-terminology-2024` |
| `validation_reference_mass` | Reference flow | Confirm exactly one applicable final output is normalized to 1,000 kg net saleable mass. | `ec-pef-method-2021` |
| `validation_route_link` | Process map | Confirm at least one conditional route applies and linked hot-to-cold product is counted once. | `eu-jrc-fmp-bref-2022` |
| `validation_inventory_balance` | Inventory | Confirm mass reconciliation, meter coverage, waste destinations, emission-point coverage and explanations for residuals or exclusions. | `ec-pef-method-2021`, `eu-jrc-fmp-bref-2022` |
| `validation_allocation` | Shared operations | Confirm subdivision evidence or a documented causal physical allocation basis. | `ec-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for a declared alloy-steel section and route |
| downstream_use | `secondary_dataset`; `background_dataset` only when upstream datasets are linked and unresolved identities are resolved |
| allowed_use | Mill-gate modelling with matching grade, route, geography, period and allocation method |
| excluded_use | Non-alloy, welded, hollow or fabricated products; cradle-to-gate claims without upstream steel datasets; unmodelled construction, use or end-of-life |
| required_metadata | PCR id; product; grade; standard; section; dimensions; route; heat treatment; surface; site; geography; period; feedstock; upstream dataset ids; allocation; reference flow; flow UUIDs |
| required_quality_disclosure | Record coverage; temporal representativeness; mass-balance residual; gaps; allocation; upstream representativeness; unresolved identities; exclusions; uncertainty; review status |
| update_trigger | Material change in grade grouping, route, fuel, equipment, boundary, electricity, upstream steel, allocation, controls, energy, water, yield, waste or emissions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41266 identity and class context |
| `eu-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Ferrous Metals Processing Industry BREF, adopted December 2022, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry | Downstream semi-finished-steel boundary, process decomposition, water, waste and monitored emissions |
| `ec-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Annex I Product Environmental Footprint Method, Recommendation (EU) 2021/2279, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Functional-unit framing, company-specific data, completeness, allocation and quality |
| `china-mof-tariff-terminology-2024` | Official guidance (`official_guidance`) | Ministry of Finance of the People’s Republic of China, 2024年对塞尔维亚实施的协定税率表, 2024, https://gss.mof.gov.cn/gzdt/zhengcefabu/202406/P020240625320768010766.pdf | Chinese terminology for HS 72224000 and 72287090 alloy-steel angles, shapes and sections |
