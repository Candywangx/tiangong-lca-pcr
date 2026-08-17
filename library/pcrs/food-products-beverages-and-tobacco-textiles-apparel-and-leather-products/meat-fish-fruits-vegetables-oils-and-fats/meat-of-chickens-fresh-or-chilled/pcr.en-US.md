---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-chickens-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of chickens, fresh or chilled

## 1. Scope and Applicability

This PCR applies to foreground production of edible meat from chickens (`Gallus domesticus`) that leaves a slaughterhouse or meat-processing plant fresh or chilled. The representative boundary begins with accepted live chickens at the slaughterhouse gate and ends with inspected, chilled chicken meat ready for dispatch at the plant gate. It covers whole dressed carcasses and declared bone-in or boneless cuts, with or without skin and primary packaging, when they remain fresh or chilled.

The PCR excludes live-chicken farming as a foreground activity, frozen chicken meat, edible poultry offal as the reference product, rendered poultry fat, cooked, seasoned, marinated, cured, smoked, canned, or otherwise prepared meat, retail and food-service operations, consumer cooking, and end-of-life treatment of packaging. A producer may include cutting, deboning, primary packaging, on-site wastewater treatment, or on-site by-product treatment only when those operations occur before the declared plant gate and their inventories are separately disclosed. Product form, chilling method, packaging state, geography, and included optional operations must be stated because they materially affect yield, water, energy, and co-product results.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-chickens-fresh-or-chilled |
| classification_refs | CPC 3.0 `21121`, Meat of chickens, fresh or chilled, exact scope reference |
| covered_products | Edible meat of chickens, fresh or chilled; whole dressed carcasses; bone-in cuts; boneless cuts; skin-on or skinless cuts; bulk or primary-packaged product |
| excluded_products | Live chickens; frozen chicken meat; edible poultry offal as a separate product; rendered fat; mechanically separated meat unless explicitly classified within the applicable jurisdiction; cooked, seasoned, marinated, cured, smoked, canned, or otherwise prepared chicken products |
| representative_product | Inspected whole dressed chicken carcass, chilled and ready for dispatch at the slaughterhouse gate |
| production_route | Live-bird reception and inspection; stunning; bleeding; scalding; defeathering; head and feet removal as applicable; evisceration and post-mortem inspection; washing; rapid chilling; optional cutting and primary packaging; chilled holding and dispatch |
| market_state | Fresh or chilled edible chicken meat at the slaughterhouse or processing-plant gate; never frozen during the represented route |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of edible fresh or chilled chicken meat that has passed the applicable post-mortem inspection and is ready for dispatch at the declared plant gate |
| How much | 1 kg net mass of the declared chicken-meat product, excluding packaging, free ice, and separately marketed offal or other co-products |
| How well | Product identity, form, hygiene disposition, chilling method, dispatch temperature, and packaging state meet the applicable legal and customer specification; the product has not been frozen or further prepared |
| How long or cycle | One identified production lot through slaughter, chilling, declared optional preparation, and plant-gate dispatch; chilled conditions are maintained through the gate |
| reference_flow_link | One functional unit is realized by exactly 1 kg of the declared reference product flow at the plant gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net fresh or chilled chicken meat at plant gate |
| Reference product flow | Meat of chickens, fresh or chilled `562d85c5-f2c0-4a72-b866-5b3587bf4f29` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | chicken species and production class; whole carcass or named cut; bone-in or boneless; skin-on or skinless; fresh or chilled state; chilling method; measured product temperature at gate; net mass basis and drainage convention; packaging state; plant-gate geography; production-lot period; included cutting, deboning, packaging, wastewater-treatment, and by-product-treatment operations |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh saleable fresh or chilled chicken meat after chilling and the declared drainage period. Deduct packaging tare, free ice, containers, separately marketed offal, and separately marketed by-products. Normalize the completed inventory to 1 kg net reference product. |
| `product_temperature` | Reference product at plant gate | Temperature | °C | Record product temperature using the applicable lot sampling plan. Use 4 °C or below as the default guideline for chilled poultry unless a stricter competent-authority or customer limit applies; retain the actual limit, measurement points, and exceptions. |
| `water_uptake_disclosure` | Water-chilled product | Mass | kg | When immersion or spray chilling changes product mass, determine uptake from documented pre-chill and post-drain mass measurements and disclose the method. Do not hide retained water by changing the declared reference amount. |
| `live_mass_basis` | Incoming live chickens | Mass | kg live weight | Record both bird count and measured net live weight by lot. Use mass, not bird count alone, for yield and mass-balance calculations. |
| `energy_conversion` | Electricity, fuels, steam, heat, and refrigeration | Energy | kWh | Preserve source meter units. Convert MJ to kWh by dividing by 3.6 and disclose lower- or higher-heating-value conventions for fuels. Do not combine purchased electricity and fuel energy until both are converted to the same net-energy basis. |
| `water_volume_conversion` | Supplied water and wastewater | Volume | m3 | Use metered volume; convert litres to cubic metres by dividing by 1,000. Keep separately discharged non-contact cooling water and stormwater distinct from process wastewater. |
| `packaging_exclusion` | Reference product and packaging | Mass | kg | Packaging is excluded from reference-product mass and recorded as a separate input when primary packaging occurs before the declared plant gate. |
| `normalization_denominator` | All foreground inventory rows | Mass | per 1,000 kg reference product | Aggregate the declared reporting period first, then divide each flow by net conforming reference-product mass and multiply by 1,000. Do not normalize by total live-bird mass, total carcass mass, or total co-product output unless a source range explicitly uses that separate basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live chickens accepted for slaughter at the slaughterhouse receiving point, with supplier, origin, arrival mass, bird count, mortality, and inspection disposition recorded |
| starting_condition_role | Foreground-gate input condition; upstream husbandry and feed production are supplied by linked background datasets rather than repeated inside the slaughter foreground |
| product_classification_scope | Edible chicken meat that remains fresh or chilled under CPC 3.0 `21121`; frozen meat, edible offal, and prepared or preserved chicken products remain outside this PCR identity |
| recursive_input_rule | If fresh or chilled chicken meat enters a cutting, deboning, repacking, or rework operation, record it as a separate same-category technosphere input with an upstream dataset and do not recursively reproduce its slaughter inventory in the receiving process |
| upstream_dataset_requirement | Require traceable upstream datasets for live-chicken production and any inbound transport, electricity, fuel or heat, water supply, chemicals, packaging, refrigerant, and off-site treatment that crosses the selected boundary |
| disclosure | Declare geography, plant type, product form, chilling method, gate temperature limit, drainage convention, reporting period, included optional operations, treatment ownership, co-product destinations, allocation method, and all deviations from this boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_slaughter_route` | Foreground slaughter and chilling | Include live-bird reception and inspection, stunning, bleeding, scalding, defeathering, head and feet removal as applicable, evisceration, post-mortem inspection, washing, chilling, chilled holding, and dispatch. Include cutting, deboning, and primary packaging when performed before the declared product gate. | `ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005` |
| `boundary_rule_cold_chain` | Chilled product | Include refrigeration and handling needed to reduce product temperature rapidly and maintain the declared chilled state through the plant gate. A temporary cold-chain interruption may be represented only when necessary for documented operations and its duration and temperature consequence are recorded. | `codex-cxc-58-2005` |
| `boundary_rule_upstream` | Live chickens and other supplied inputs | Exclude farming, hatchery, feed production, and off-site supply processes from the slaughter foreground, but link their burdens through upstream datasets. Include inbound transport separately when it is not already included in the delivered live-chicken dataset. | `ifc-poultry-processing-ehs-2007` |
| `boundary_rule_stream_separation` | Meat, edible co-products, inedible material, and wastewater | Keep reference meat, edible offal, saleable by-products, condemned material, blood, feathers, other solids, and wastewater as distinct streams. Do not route recoverable organic material implicitly into wastewater. | `ifc-poultry-processing-ehs-2007`; `ec-bat-slaughterhouses-2023` |
| `boundary_rule_treatment` | On-site and off-site treatment | Include on-site wastewater or by-product treatment burdens when operated within the declared plant boundary. Otherwise record the outgoing waste or co-product and link the appropriate off-site treatment or processing dataset. | `ec-bat-slaughterhouses-2023` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_chill_gate` | Chicken slaughtering, chilling, and plant-gate preparation | required | Always; cutting, deboning, primary packaging, on-site treatment, and by-product processing are included within this process only when they occur before the declared gate and are disclosed | Foreground production of fresh or chilled chicken meat | 1,000 kg net conforming reference product at plant gate |

Tiangong process identity reference for the representative route: Chicken slaughtering and chilling `c7c5f519-5cd5-4e35-aa80-6a387051d896`.

### Process: Chicken slaughtering, chilling, and plant-gate preparation (`slaughter_chill_gate`)

#### Inputs

##### Product flows

###### Accepted live chickens (`incoming_live_chickens`)

Accepted birds cross the foreground boundary at slaughterhouse reception. Record net live mass and bird count by lot; upstream husbandry remains in the linked live-chicken dataset.

- Selected flow: Live chickens, accepted for slaughter; use a mass-compatible Tiangong product flow matching the declared bird and market state
- Flow property / unit: Mass / kg live weight
- Amount rule: measured net live weight of accepted birds entering the slaughter route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming fresh or chilled chicken meat at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bird_receipt`
- Sources: `ifc-poultry-processing-ehs-2007`
- Range: Replaceable provisional live-bird input screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1200
  - Upper: 4000
  - Unit: kg live weight
  - Basis: per 1,000 kg net reference product; broad envelope for whole carcasses and declared cuts, to be replaced by product-specific reviewed yield evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity (`purchased_electricity`)

Electricity supplies slaughter-line equipment, pumps, ventilation, chilling, cold holding, optional cutting and packaging, and on-site treatment included in the boundary.

- Selected flow: Site- and voltage-appropriate purchased electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered purchased electricity allocated to the included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-bat-slaughterhouses-2023`; `ifc-poultry-processing-ehs-2007`

###### Fuel, steam, or supplied process heat (`process_heat`)

Record fuels, steam, or supplied heat used for scalding, hot water, sanitation, space conditioning, and any included treatment operation without combining unlike products into one untraceable amount.

- Selected flow: Site-specific fuel, steam, or heat product flow; create separate inventory rows in the produced dataset for materially different energy carriers
- Flow property / unit: Energy / kWh after documented conversion
- Amount rule: metered or invoice-reconciled net energy by carrier for included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-bat-slaughterhouses-2023`; `ifc-poultry-processing-ehs-2007`

###### Potable process and sanitation water (`process_water`)

Record supplied water used for scalding, carcass washing, chilling, cleaning, sanitation, and included treatment operations. Keep non-contact cooling water separate.

- Selected flow: Geography-appropriate potable or process-water product flow
- Flow property / unit: Volume / m3
- Amount rule: metered supplied process and sanitation water minus separately metered non-process uses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Sources: `ifc-poultry-processing-ehs-2007`; `ec-bat-slaughterhouses-2023`
- Range: Published cross-installation water-use screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5.07
  - Upper: 67.4
  - Unit: m3
  - Basis: per 1,000 kg slaughtered animal on the source basis; compare only after documenting conversion from the PCR reference-product basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ifc-poultry-processing-ehs-2007`

###### Cleaning and disinfection agents (`cleaning_agents`)

Record each materially different cleaning or disinfection product used in included areas; active ingredient concentration and dilution water must remain traceable.

- Selected flow: Product-specific cleaning or disinfection agent flow
- Flow property / unit: Mass / kg product and kg active ingredient where relevant
- Amount rule: issued quantity minus returned stock, reconciled to cleaning records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables_records`
- Sources: `ifc-poultry-processing-ehs-2007`; `ec-bat-slaughterhouses-2023`

###### Primary packaging materials (`primary_packaging`)

Packaging crosses the foreground boundary only when the declared product is packed before the plant gate. Record films, trays, absorbent pads, labels, cartons, and reusable-container losses separately where material.

- Selected flow: Material-specific primary packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: packaging issued to conforming product plus attributable packaging scrap, by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-cxc-58-2005`
- Range: Replaceable provisional packaging screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: kg packaging
  - Basis: per 1,000 kg net reference product; zero represents unpackaged bulk product and the upper bound is a broad authoring screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up (`refrigerant_makeup`)

Record refrigerant added to refrigeration systems serving the included route. Allocate shared systems using documented metering, engineering load, or operating-hour evidence.

- Selected flow: Refrigerant-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: measured annual or campaign make-up attributable to included chilling and cold holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-bat-slaughterhouses-2023`

##### Waste flows

No waste input is prescribed. If an on-site treatment operation accepts waste from outside this product system, record that waste input separately and disclose the allocation boundary.

##### Elementary flows

Record direct water withdrawal as an elementary input only when the facility extracts water from the environment. Do not duplicate water already represented by a supplied-water product flow.

#### Outputs

##### Product flows

###### Fresh or chilled chicken meat reference product (`reference_chicken_meat`)

This is the conforming reference output after inspection, chilling, declared optional preparation, and drainage at the plant gate.

- Selected flow: Meat of chickens, fresh or chilled `562d85c5-f2c0-4a72-b866-5b3587bf4f29`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: net conforming product mass normalized to exactly 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output_records`
- Sources: `codex-cxc-58-2005`; `ifc-poultry-processing-ehs-2007`

###### Edible offal co-products (`edible_offal_coproducts`)

Record edible organs and other edible offal separately from chicken meat because they are outside the reference-product identity. Distinguish chilled, frozen, and other states where relevant.

- Selected flow: Species- and state-appropriate edible chicken offal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured saleable edible offal by product and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_stream_records`
- Sources: `unsd-cpc-v3-21121`; `codex-cxc-58-2005`

###### Other marketable slaughter co-products (`other_coproducts`)

Record blood, feet, heads, feathers, fat, skin, and other material as separate product outputs only when they meet the applicable product definition and have a documented use or market destination.

- Selected flow: Material- and destination-specific co-product flow
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass by co-product type and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_stream_records`
- Sources: `ifc-poultry-processing-ehs-2007`

##### Waste flows

###### Condemned and inedible organic material (`inedible_organic_waste`)

Record dead-on-arrival birds, condemned carcasses or parts, intestinal contents, solids, and other inedible material by risk class and destination. Do not combine these streams with saleable co-products.

- Selected flow: Risk-class- and treatment-specific poultry-processing waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to each on-site or off-site treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_stream_records`
- Sources: `ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005`

###### Process wastewater (`process_wastewater`)

Record process wastewater leaving the included operations or the on-site treatment boundary. Keep separately discharged non-contact cooling water and stormwater distinct.

- Selected flow: Destination- and treatment-state-appropriate poultry-processing wastewater flow
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater discharge by treatment route, reconciled with the site water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Sources: `ec-bat-slaughterhouses-2023`; `ifc-poultry-processing-ehs-2007`
- Range: BAT-associated wastewater-discharge screening range for chicken slaughterhouses
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.45
  - Upper: 6.30
  - Unit: m3
  - Basis: per 1,000 kg cold chicken carcass on the source basis; compare only after documenting conversion from the PCR reference-product basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ec-bat-slaughterhouses-2023`

##### Elementary flows

###### Direct refrigerant releases (`refrigerant_emissions`)

Record refrigerant released directly to air from systems serving included chilling and cold storage. Do not treat make-up refrigerant as both an input and an emission without a documented stock balance.

- Selected flow: Refrigerant-specific emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured leak or charge-balance loss attributable to the included route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-bat-slaughterhouses-2023`

###### Direct on-site combustion emissions (`onsite_combustion_emissions`)

Record measured direct emissions from included on-site combustion individually. When calculated rather than measured, the produced dataset must identify the fuel record, factor source, oxidation convention, and pollutant-specific formula.

- Selected flow: Pollutant- and compartment-specific elementary flow
- Flow property / unit: Mass / kg pollutant
- Amount rule: site emission measurement, or a separately cited calculation from measured fuel use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `ec-bat-slaughterhouses-2023`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_subdivision` | Separately metered operations and outputs | Avoid allocation first by subdividing the process and assigning inputs, wastes, and emissions directly to chilling, cutting, packaging, wastewater treatment, or by-product operations when records support that distinction. | `eu-pef-2021-2279` |
| `allocation_rule_system_expansion` | Multi-functional output systems | If the declared study goal permits system expansion and a representative substituted function is demonstrable, model and disclose the expanded system consistently. Do not apply an avoided-product credit merely because a residue has a possible use. | `eu-pef-2021-2279` |
| `allocation_rule_physical` | Shared slaughter burdens after subdivision is exhausted | When system expansion is not used, prefer a relevant, quantified physical relationship that reflects how shared burdens arise. Document the selected relationship, included output streams, measurement period, and why it represents the process. | `eu-pef-2021-2279` |
| `allocation_rule_other_relationship` | Shared burdens without a defensible physical relationship | If a physical relationship is not defensible, use another documented relationship such as site-specific economic value at the co-product split point. Report prices, currency, period, zero-value streams, and sensitivity to material price changes. | `eu-pef-2021-2279` |
| `allocation_rule_waste_status` | Condemned or inedible outputs | Treat an output as waste unless its legal status, quality, purchaser or user, and actual destination demonstrate a product function. Waste treatment burdens remain with the system that generates the waste unless the selected method and study goal justify another treatment. | `ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005` |
| `allocation_rule_closure` | All reference and co-product outputs | The allocation model must include reference meat, edible offal, blood, feet, feathers, fat, skin, other marketed streams, and waste status as applicable; allocation fractions for partitioned burdens must sum to 1 within rounding tolerance. | `ec-bat-slaughterhouses-2023`; `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_bird_receipt` | `slaughter_chill_gate` | accepted live chickens | receiving scale, bird-count, supplier, mortality, and inspection records | lot_id; supplier_id; farm_origin; arrival_time; gross_vehicle_mass; tare_mass; net_live_mass; bird_count; dead_on_arrival_count; rejected_mass; accepted_mass; inspection_disposition | calibrated weighbridge or platform scale linked to receiving and inspection records | kg; item | each incoming lot | all lots in reporting period | all suppliers and receiving lines feeding the declared product | sum accepted live mass and counts; keep rejected and dead-on-arrival streams separate | calibration certificate; lot log; inspection record; reconciliation to slaughter schedule |
| `cp_product_output_records` | `slaughter_chill_gate` | reference chicken meat | product scale, temperature, drainage, grading, and dispatch records | lot_id; product_form; bone_status; skin_status; chilling_method; pre_chill_mass; post_drain_mass; packaging_tare; net_product_mass; product_temperature; temperature_limit; disposition | calibrated product scale and calibrated temperature device under the lot sampling plan | kg; °C | each production lot and dispatch lot | all conforming production in reporting period | all lines, chillers, cutting rooms, and dispatch points in scope | sum net conforming mass after tare; retain rejected, reworked, frozen, and downgraded product separately | scale and thermometer calibration; lot traceability; temperature log; inspection and release record |
| `cp_energy_records` | `slaughter_chill_gate` | electricity and process heat | submeter, main meter, fuel invoice, steam meter, and operating log | meter_id; opening_reading; closing_reading; electricity_kWh; fuel_quantity; fuel_unit; heating_value_basis; steam_or_heat_kWh; included_area; allocation_driver; downtime | direct submetering preferred; reconcile allocated records to site totals and invoices | kWh plus native fuel unit | daily or shift; monthly invoice reconciliation | representative continuous period, normally at least 12 months or a complete seasonal campaign | all included slaughter, chilling, cold holding, optional processing, and on-site treatment equipment | sum by carrier; convert to kWh; allocate shared systems with documented driver; reconcile to site total | meter calibration; invoices; conversion factors; operating-hour and refrigeration-load records |
| `cp_water_wastewater_records` | `slaughter_chill_gate` | supplied water and wastewater | water meters, wastewater flow meters, production logs, and water-balance records | supply_meter_readings; non_contact_cooling_water; stormwater; process_water; wastewater_volume; discharge_route; pre_treatment_status; product_mass; carcass_basis_mass | direct meters at supply and discharge; engineering balance only for documented gaps | m3 | daily or shift; monthly reconciliation | same period as production and energy records | all included water uses and discharge points | sum process water and wastewater separately; exclude separately discharged cooling water and stormwater; reconcile unexplained balance | meter calibration; water flow diagram; meter map; discharge and treatment records |
| `cp_consumables_records` | `slaughter_chill_gate` | cleaning and disinfection agents | stock issue, purchase, concentration, and cleaning schedule records | product_name; active_ingredient; concentration; issued_mass; returned_mass; dilution_ratio; application_area; lot_id | inventory reconciliation linked to sanitation records | kg product; kg active ingredient | each issue; monthly reconciliation | same reporting period as production | all included cleaning and sanitation areas | sum net issue by product and active ingredient; exclude unrelated facility use | invoices; safety data sheet; stock ledger; sanitation log |
| `cp_packaging_records` | `slaughter_chill_gate` | primary packaging | bill of materials, stock issue, scrap, and packed-output records | material; item_mass; items_issued; returned_items; scrap_mass; reusable_loss; packed_product_mass | mass-per-item verification plus inventory reconciliation | kg | each packaging run; monthly reconciliation | all packed lots in reporting period | all declared primary packaging lines | aggregate by material; include attributable scrap; exclude returnable assets except measured losses | supplier specification; sample weighing; stock ledger; scrap record |
| `cp_output_stream_records` | `slaughter_chill_gate` | edible co-products, marketable by-products, and organic waste | dedicated scale, container, dispatch, inspection, and treatment records | stream_id; material_name; edible_status; risk_class; measured_mass; destination; product_or_waste_status; buyer_or_treatment_provider; lot_id | weigh each stream or use verified container tare and gross mass | kg | each container, batch, or dispatch | all output streams in reporting period | all evisceration, cutting, sorting, storage, and by-product areas | sum by material, status, and destination; prohibit unexplained netting between products and wastes | scale calibration; inspection disposition; dispatch ticket; treatment receipt; buyer record |
| `cp_refrigerant_records` | `slaughter_chill_gate` | refrigerant make-up and direct loss | refrigeration service, charge, recovery, and leak records | refrigerant_identity; opening_charge; additions; recoveries; closing_charge; leak_event; system_id; served_areas; operating_hours | service records and charge balance; direct leak measurement where available | kg | every service or leak event; annual reconciliation | complete reporting year or declared campaign with annualized disclosure | all refrigeration systems serving included operations | additions minus recovery and documented stock change; allocate shared systems by documented engineering driver | technician report; purchase and recovery record; leak-test record; equipment register |
| `cp_direct_emission_records` | `slaughter_chill_gate` | on-site combustion emissions | stack test, continuous monitor, fuel, and operating records | source_id; pollutant; measured_concentration; gas_flow; operating_time; emitted_mass; fuel_quantity; factor_reference | direct measurement preferred; calculated values require separately cited pollutant factors | kg pollutant; source units | per permit and operating plan | representative normal and material abnormal operation | all included on-site combustion sources | sum measured mass by pollutant and compartment; keep calculated results distinct | accredited test report; monitor QA; fuel invoice; factor source and formula |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory flow | normalized amount = reporting-period flow amount / reporting-period net conforming reference-product mass × 1,000 | collected flow amount; net product mass | flow amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_live_to_product_yield` | Live birds and reference product | yield = net conforming reference-product mass / accepted net live mass; report separately by product form and route | accepted live mass; net product mass | kg reference product per kg accepted live weight | `ifc-poultry-processing-ehs-2007` |
| `calc_energy_intensity` | Electricity and process heat | convert each carrier to kWh on the declared basis, sum only after conversion, and divide by net product mass; additionally calculate the source-compatible cold-carcass basis for BAT comparison when available | electricity; fuels; steam or heat; heating values; net product mass; cold carcass mass | kWh per 1,000 kg reference product and, when available, kWh per tonne cold carcass | `ec-bat-slaughterhouses-2023` |
| `calc_water_balance` | Water and wastewater | supplied process water = process wastewater + water retained in product or by-products + evaporation + exported moisture + documented losses, within stated uncertainty | supply; wastewater; uptake; outputs; evaporation estimate | reconciled water balance and unexplained difference | `ec-bat-slaughterhouses-2023`; `ifc-poultry-processing-ehs-2007` |
| `calc_chilling_uptake` | Water-chilled product | uptake fraction = (post-drain product mass − comparable pre-chill product mass) / comparable pre-chill product mass | paired pre-chill and post-drain masses | kg retained water per kg pre-chill product | `ifc-poultry-processing-ehs-2007` |
| `calc_refrigerant_loss` | Refrigeration systems | refrigerant loss = opening charge + additions − recovered refrigerant − closing charge, adjusted for documented transfers | charge and service records | kg refrigerant emitted by identity | `ec-bat-slaughterhouses-2023` |
| `calc_mass_balance` | Slaughter route | compare accepted live mass and other material inputs with reference meat, co-products, wastes, retained water change, and documented stock changes; explain the residual rather than forcing closure | all material inputs and outputs; stock changes; moisture or uptake | mass-balance residual and relative closure | `mass-balance-identity`; `ifc-poultry-processing-ehs-2007` |
| `calc_allocation_fractions` | Shared burdens | allocation fraction for each co-product = selected allocation quantity for that co-product / sum of selected allocation quantities for all product outputs; fractions must sum to 1 within rounding tolerance | direct assignments; product masses or other physical driver; or documented market values | allocation fraction and allocated burden by output | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Reference product and incoming birds | Preserve lot-level linkage from supplier and accepted birds through inspection, chilling, product form, temperature release, and plant-gate dispatch. | receiving, inspection, production, grading, temperature, and dispatch records |
| `dq_measurement_control` | Mass, temperature, water, energy, and flow records | Use calibrated or verified devices appropriate to the measured range; retain calibration status, reading frequency, missing-data treatment, and reconciliation results. | calibration certificates; meter map; device logs; reconciliation report |
| `dq_temporal_representativeness` | Foreground reporting period | Use at least 12 consecutive months when seasonal throughput or refrigeration loads are material; a shorter complete campaign must state season, product mix, and limitation. | reporting-period declaration; throughput and operating calendar |
| `dq_completeness` | Process inventory | Cover every included shift, line, product form, optional operation, co-product, waste route, and material abnormal event. Quantify data coverage and disclose exclusions rather than silently applying zero. | completeness matrix; production reconciliation; incident and downtime log |
| `dq_stream_status` | Co-products and wastes | Substantiate edible, saleable, waste, risk-class, and destination status independently for each output stream. | inspection disposition; legal classification; contracts; dispatch tickets; treatment receipts |
| `dq_source_basis` | External QA ranges | Preserve the original source denominator and compare a foreground value only after documenting any conversion between live-bird, cold-carcass, and net reference-product bases. | calculation sheet; source citation; mass and yield records |
| `dq_geography_technology` | Background datasets | Match electricity voltage and geography, fuel and heat technology, water supply, packaging material, refrigerant identity, and treatment route to the foreground plant. | background dataset metadata and selection rationale |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_identity` | Product category | Fail if the reference output is live chicken, frozen chicken meat, edible offal, rendered fat, or a prepared/preserved chicken product, or if the declared product is not edible chicken meat in a fresh or chilled state. | `unsd-cpc-v3-21121` |
| `validation_rule_reference_flow` | Functional unit and reference object | Require exactly 1 kg net reference product linked to product flow `562d85c5-f2c0-4a72-b866-5b3587bf4f29`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `mass-balance-identity` |
| `validation_rule_qualifiers` | Dataset metadata | Fail completeness when any required qualifier is absent, including product form, bone and skin status, chilling method, gate temperature, net-mass and drainage convention, packaging state, geography, period, or included optional operations. | `codex-cxc-58-2005`; `ifc-poultry-processing-ehs-2007` |
| `validation_rule_boundary` | Foreground process map | Require the complete declared slaughter-and-chilling route and explicit upstream datasets for live birds and other supplied inputs. Reject double counting of farming or feed burdens in both the live-bird dataset and slaughter foreground. | `ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005` |
| `validation_rule_temperature` | Chilled product release | Require measured product-temperature evidence and the applicable limit. Flag values above 4 °C against the default IFC guideline unless the dataset documents a competent-authority or customer specification and disposition. | `ifc-poultry-processing-ehs-2007`; `codex-cxc-58-2005` |
| `validation_rule_streams` | Products, co-products, wastes, and wastewater | Require separate amounts and destinations for reference meat, edible offal, other marketed by-products, condemned or inedible material, and wastewater; reject unexplained netting or routing of solids into wastewater. | `ifc-poultry-processing-ehs-2007`; `ec-bat-slaughterhouses-2023` |
| `validation_rule_allocation` | Multi-functional burdens | Require direct attribution before allocation, a documented reason for the selected allocation relationship, a complete output set, and allocation fractions summing to 1 within ±0.001. | `eu-pef-2021-2279` |
| `validation_rule_mass_balance` | Material inventory | Require a documented mass-balance residual. Investigate a relative residual greater than 5% of accepted live mass; do not force closure by assigning the residual to the reference product or wastewater. | `mass-balance-identity`; `ifc-poultry-processing-ehs-2007` |
| `validation_rule_energy_qa` | Total net energy | When a source-compatible cold-carcass basis is available, compare total net energy with the EU BAT screening interval of 170–490 kWh per tonne cold chicken carcass. Treat an outlier as a review trigger, not an automatic replacement value, and explain boundary or technology differences. | `ec-bat-slaughterhouses-2023` |
| `validation_rule_wastewater_qa` | Wastewater discharge | When a source-compatible cold-carcass basis is available, compare wastewater discharge with 1.45–6.30 m3 per tonne cold chicken carcass. Treat an outlier as a review trigger and preserve separately discharged cooling water and stormwater distinctions. | `ec-bat-slaughterhouses-2023` |
| `validation_rule_evidence` | Foreground package | Require source records, collection protocols, calculation inputs, calibration or reconciliation evidence, and explicit disclosure of missing or estimated fields. Reasoned-estimate ranges in this PCR are replaceable authoring aids and must not override collected foreground values. | `ec-bat-slaughterhouses-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Construction of chicken-meat product systems, food-product footprints, supply-chain LCAs, process datasets, and lifecycle models requiring fresh or chilled chicken meat at a declared plant gate |
| allowed_use | Use for the declared chicken product form, geography, technology, chilling route, packaging state, reporting period, and allocation method; adapt only with documented representativeness checks |
| excluded_use | Frozen or further-prepared chicken products; live-chicken farming; edible offal as the reference product; retail, cooking, consumption, or packaging end of life; comparative claims across unlike product forms or allocation methods without harmonization |
| required_metadata | Canonical PCR id; product and flow UUID; all reference-flow qualifiers; plant geography and technology; gate and boundary; reporting period; data coverage; product temperature specification; optional operations; upstream datasets; co-product and waste destinations; allocation method; source ids; review status |
| required_quality_disclosure | Primary-data share; meter and scale coverage; calibration status; missing-data treatment; yield and mass-balance residual; water balance; energy and wastewater source-basis comparisons; refrigerant method; allocation sensitivity; temporal, geographical, and technological limitations; all replaceable provisional estimates |
| update_trigger | Material change in product form, chilling or packaging technology, plant boundary, supplier or geography, reporting period, throughput, energy or water system, refrigerant, treatment route, legal temperature or hygiene requirement, co-product market, allocation relationship, Tiangong identity reference, or stronger source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-21121` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, subclass 21121, 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-10) | Product identity; inclusion of fresh or chilled chicken meat; exclusion of frozen chicken meat and edible chicken offal |
| `codex-cxc-58-2005` | standard | FAO/WHO Codex Alimentarius, *Code of Hygienic Practice for Meat*, CXC 58-2005, https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf (retrieved 2026-08-10) | Post-mortem inspection; hygienic process control; rapid chilling; temperature monitoring; cold-chain continuity; separation and handling rules |
| `ifc-poultry-processing-ehs-2007` | official_guidance | International Finance Corporation, World Bank Group, *Environmental, Health, and Safety Guidelines for Poultry Processing*, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-poultry-processing-ehs-guidelines-en.pdf (retrieved 2026-08-10) | Poultry-processing process map; 4 °C chilling guidance; water, energy, wastewater, by-product, and waste inventory requirements; cross-installation water-use screening range |
| `ec-bat-slaughterhouses-2023` | official_guidance | European Commission, Commission Implementing Decision (EU) 2023/2749 establishing BAT conclusions for slaughterhouses, 11 December 2023, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023D2749 (retrieved 2026-08-10) | Input-output inventory and monitoring; refrigeration and treatment boundary; chicken-slaughter total-energy and wastewater-discharge QA ranges |
| `eu-pef-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annex I section 4.5, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-10) | General multi-functionality hierarchy: subdivision or system expansion, physical allocation, then another documented relationship |
| `mass-balance-identity` | method_factor | Conservation of mass and declared reference-flow normalization identity; no external numerical factor | Reference normalization, material balance, and allocation closure calculations |
