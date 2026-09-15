---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.coconut-oil-crude
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Coconut oil, crude

## 1. Scope and Applicability

This PCR covers foreground production of crude coconut oil from dried coconut kernel (copra) at an oil mill. The core route includes copra receipt and preparation, mechanical pressing, crude-oil clarification or filtration, and storage at the oil-mill gate. Solvent extraction of pressed cake is conditional and must be modelled only when used. The product remains unrefined and is intended for subsequent refining or technical processing.

The PCR excludes coconut cultivation, harvest, dehusking, shelling, and copra drying when these occur before the declared oil-mill gate; those stages require upstream datasets. It also excludes chemical or physical refining, bleaching, deodorisation, fractionation, hydrogenation, retail packing, distribution, use, and end-of-life. Virgin or cold-pressed coconut oil marketed for direct consumption, refined coconut oil, coconut milk or cream, and oils from other botanical sources are outside scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.coconut-oil-crude |
| classification_refs | CPC 3.0: 21661, Coconut oil, crude (mapping context only) |
| covered_products | Unrefined coconut oil derived from coconut kernel or copra by mechanical expelling, with conditional solvent recovery from pressed cake; bulk crude coconut oil intended for refining or technical processing |
| excluded_products | Virgin or cold-pressed coconut oil marketed for direct consumption; refined, bleached, deodorised, fractionated, hydrogenated, or formulated coconut oils; coconut milk and cream; palm-kernel and other botanical oils |
| representative_product | Bulk crude coconut oil from copra, clarified or filtered and ready for dispatch from the oil mill |
| production_route | Copra receipt and preparation; mechanical pressing; optional pressed-cake solvent extraction and solvent recovery; crude-oil clarification or filtration; bulk storage |
| market_state | Unrefined bulk oil at oil-mill gate; extraction route, origin, lot, moisture, impurities, and applicable commercial quality specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Crude coconut oil supplied at the oil-mill gate for subsequent refining or technical processing |
| How much | 1 kg crude coconut oil |
| How well | Unrefined oil derived from coconut kernel or copra, clarified or filtered, with extraction route and applicable lot quality specification declared |
| How long or cycle | One production lot at dispatch; no service duration applies |
| reference_flow_link | `crude_coconut_oil_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Coconut oil, crude `8b18e824-f237-4a70-9127-ddabde706d15` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | unrefined state; copra or kernel origin; mechanical-only or mechanical-plus-solvent route; production geography; production period and lot; moisture and volatile matter test basis; insoluble impurities test basis; free-fatty-acid or acid-value test basis; storage condition; intended downstream refining or technical use |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference crude coconut oil | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net crude coconut oil leaving final clarification or storage; exclude container tare and report the weighing point. |
| `material_mass_basis` | Copra, cake or meal, wastes, filter residues, and solvent | Mass | kg | Record mass as received and, where moisture changes materially affect yield or balance, also record moisture and dry matter using the stated sampling method. |
| `energy_consistency` | Purchased electricity, fuels, and steam | Energy or mass as metered | kWh, MJ, or kg | Preserve the metered unit and conversion factor; do not add fuel energy and generated steam energy when both describe the same energy supply. |
| `water_balance` | Process and cleaning water | Mass or volume | kg or m3 | Record net make-up water separately from internally recirculated water and report discharged wastewater separately; state density if volume is converted to mass. |
| `solvent_balance` | Conditional solvent-extraction route | Mass | kg | Record solvent make-up, opening and closing inventory, recovered internal recycle, off-site transfers, destruction, and releases on one consistent campaign balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dried coconut kernel (copra) received at the first oil-mill control point, with supplier, origin, received mass, moisture basis, and whether upstream dehusking, shelling, and drying are included in the upstream dataset declared |
| starting_condition_role | Gate-to-gate foreground starting condition for crude-oil extraction; copra production and drying are upstream product systems unless performed within the reporting facility |
| product_classification_scope | Crude, unrefined coconut oil derived from coconut kernel or copra; downstream refining and consumer-grade virgin or cold-pressed oil are outside this PCR |
| recursive_input_rule | Returned or reworked crude coconut oil from the same lot or facility is an internal loop and is not counted as a new product input; externally purchased crude coconut oil is disclosed and modelled with a separate upstream dataset and must not be silently relabelled as foreground output |
| upstream_dataset_requirement | Use geographically and temporally representative upstream datasets for copra, purchased energy, fuels, water, solvent, filter aids, and other technosphere inputs; disclose missing upstream coverage |
| disclosure | Declare the mill gate, included unit operations, mechanical or solvent route, treatment of internal recycle, allocation method, excluded upstream and downstream stages, geography, production period, and any shared utilities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_core_operations` | All datasets | Include copra receiving and preparation, mechanical pressing, crude-oil separation or filtration, transfers, and storage through the oil-mill dispatch point. | `eu-jrc-fdm-bref-2019`; `codex-cxs-210-1999` |
| `boundary_conditional_solvent` | Solvent-assisted mills | Include pressed-cake extraction, miscella distillation, meal desolventising, solvent recovery, make-up solvent, wastewater, waste, and fugitive or channelled solvent releases when this route is operated. | `eu-jrc-fdm-bref-2019` |
| `boundary_refining_exclusion` | All datasets | Exclude degumming, neutralisation, bleaching, deodorisation, fractionation, and hydrogenation; if performed at the same site, meter or allocate them to a downstream refining dataset. | `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_disclosure` | Copra supply | Exclude cultivation, harvest, dehusking, shelling, and copra drying only when they are represented by an upstream dataset; on-site performance of any such operation must be separately inventoried and disclosed. | `iso-14044-2006` |
| `boundary_no_hazardous_cutoff` | Materiality screening | Do not omit solvent, direct air emissions, wastewater, hazardous chemicals, or hazardous wastes solely because their mass share is small; disclose any other excluded flow and its screening basis. | `iso-14044-2006`; `eu-jrc-fdm-bref-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `copra_receiving_preparation` | Copra receiving and preparation | required | Always included | Receive, inspect, clean, size-reduce, and condition copra for extraction | kg prepared copra transferred |
| `mechanical_oil_extraction` | Mechanical oil extraction | required | Always included | Press prepared copra and separate pressed crude oil from coconut press cake | kg pressed crude oil transferred |
| `solvent_oil_recovery` | Solvent oil recovery from pressed cake | conditional | Include only when pressed cake is solvent-extracted | Recover residual oil and produce desolventised meal or cake | kg extracted crude oil transferred |
| `crude_oil_clarification_storage` | Crude-oil clarification and storage | required | Always included | Combine route streams, settle or filter, and store crude coconut oil for dispatch | 1 kg crude coconut oil dispatched |

### Process: Copra receiving and preparation (`copra_receiving_preparation`)

#### Inputs

##### Product flows

###### Copra received at the oil mill (`copra_input`)

Dried coconut kernel crosses the foreground boundary at receipt. Supplier tickets and receiving measurements provide the quantity and quality basis.

- Selected flow: Copra (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured net received mass accepted for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`
- Sources: `codex-cxs-210-1999`
- Range: Provisional copra-input mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.4
  - Upper: 3.5
  - Unit: kg/kg crude coconut oil
  - Basis: received copra per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Electricity used for receiving, conveying, cleaning, size reduction, and conditioning auxiliaries is recorded by submeter or defensible allocation from a shared meter.

- Selected flow: Electricity, supplied (candidate; Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: measured or allocated net purchased electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_by_process`
- Range: Provisional preparation-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg crude coconut oil
  - Basis: preparation electricity per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Prepared copra transferred to pressing (`prepared_copra_output`)

Prepared copra is an internal intermediate; record its measured mass and moisture without assigning an external product credit.

- Selected flow: Prepared copra, internal intermediate (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`

##### Waste flows

###### Separated foreign material and rejected copra (`preparation_rejects`)

Stones, metal, dirt, spoiled copra, and other removed material are recorded by destination and waste or recovered-material status.

- Selected flow: Copra preparation rejects (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_emissions`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional preparation-reject QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg crude coconut oil
  - Basis: preparation rejects per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Preparation dust released to air (`preparation_dust_air`)

Direct dust after any capture system is reported as an elementary emission; captured dust remains a waste or recovered material.

- Selected flow: Particulate matter, to air (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated value from measured exhaust flow, concentration, and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals_emissions`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional direct-dust QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg crude coconut oil
  - Basis: released particulate matter per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Mechanical oil extraction (`mechanical_oil_extraction`)

#### Inputs

##### Product flows

###### Prepared copra (`prepared_copra_input`)

The internal prepared-copra transfer must match the output of `copra_receiving_preparation` over the same lot balance.

- Selected flow: Prepared copra, internal intermediate (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: transferred mass from preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per mechanical-extraction output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`

###### Extraction electricity (`extraction_electricity`)

Electricity for presses, conveyors, pumps, and associated controls is recorded for the production campaign.

- Selected flow: Electricity, supplied (candidate; Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: measured or allocated net purchased electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_by_process`
- Range: Provisional extraction-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 2
  - Unit: kWh/kg crude coconut oil
  - Basis: mechanical-extraction electricity per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning thermal energy (`conditioning_thermal_energy`)

Fuel or purchased steam used to heat or condition copra before or during pressing is recorded only when applied; report the actual carrier and avoid double counting steam and its generating fuel.

- Selected flow: Thermal energy carrier or steam used on site (candidate; Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel lower-heating-value input or metered purchased steam energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_by_process`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional conditioning-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ/kg crude coconut oil
  - Basis: conditioning energy per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pressed crude coconut oil intermediate (`pressed_crude_oil_output`)

Pressed oil is an internal intermediate transferred to clarification or combined with solvent-extracted oil.

- Selected flow: Crude coconut oil, internal intermediate `8b18e824-f237-4a70-9127-ddabde706d15`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred from pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per mechanical-extraction output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`

###### Coconut press cake (`press_cake_output`)

Pressed cake is reported as a co-product when sold or transferred for beneficial use, as an internal intermediate when solvent-extracted on site, or as waste when discarded.

- Selected flow: Coconut press cake (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass and destination status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional press-cake output QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 2.5
  - Unit: kg/kg crude coconut oil
  - Basis: press cake before optional solvent extraction per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Solvent oil recovery from pressed cake (`solvent_oil_recovery`)

#### Inputs

##### Product flows

###### Pressed cake sent to extraction (`press_cake_extraction_input`)

This internal flow is included only for mills that extract residual oil from pressed cake.

- Selected flow: Coconut press cake, internal intermediate (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged to the extractor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per solvent-recovery process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`

###### Make-up extraction solvent (`makeup_solvent_input`)

Make-up solvent crossing the facility boundary is recorded separately from recovered internal recycle.

- Selected flow: Extraction solvent, make-up (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: purchased or tank-balanced make-up solvent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional make-up-solvent QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg crude coconut oil
  - Basis: make-up solvent per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Solvent-route energy (`solvent_route_energy`)

Record electricity and thermal energy for extraction, miscella distillation, desolventising, meal drying, and solvent recovery by carrier.

- Selected flow: Electricity, steam, and fuel by carrier (candidate; Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: measured carrier-specific energy converted to MJ with conversion factors retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_by_process`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional solvent-route energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: MJ/kg crude coconut oil
  - Basis: combined reported energy carriers per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Solvent-route process water (`solvent_route_water`)

Net make-up and process water are recorded separately from recirculated cooling water.

- Selected flow: Process water (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured net make-up water crossing the facility boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional solvent-route water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg crude coconut oil
  - Basis: net make-up water per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Solvent-extracted crude coconut oil intermediate (`solvent_crude_oil_output`)

Recovered crude oil is an internal intermediate transferred to final clarification or blending.

- Selected flow: Crude coconut oil, internal intermediate `8b18e824-f237-4a70-9127-ddabde706d15`
- Flow property / unit: Mass / kg
- Amount rule: measured net recovered oil transferred
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per solvent-recovery process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`

###### Desolventised coconut meal or cake (`desolventised_meal_output`)

Meal or cake leaving solvent recovery is reported as a co-product only when it meets a declared specification and has a beneficial destination; otherwise classify it as waste.

- Selected flow: Desolventised coconut meal or cake (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass by specification and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional desolventised-meal QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 2.5
  - Unit: kg/kg crude coconut oil
  - Basis: desolventised meal or cake per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Solvent-route wastewater (`solvent_route_wastewater`)

Wastewater from solvent-water separation, equipment cleaning, and related route operations is measured at discharge before treatment or transfer.

- Selected flow: Wastewater, solvent-route (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured discharged mass or volume with density stated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional solvent-route wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg crude coconut oil
  - Basis: wastewater per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Solvent released to air (`solvent_release_air`)

Fugitive and channelled releases are quantified by measurement or a reconciled solvent balance; do not equate all make-up solvent with air release.

- Selected flow: Extraction solvent, to air (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured release or reconciled solvent-balance result by release pathway
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional solvent-release QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg crude coconut oil
  - Basis: solvent released to air per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Crude-oil clarification and storage (`crude_oil_clarification_storage`)

#### Inputs

##### Product flows

###### Crude-oil intermediates (`crude_oil_intermediate_input`)

Pressed and, when applicable, solvent-extracted crude-oil streams are reconciled before clarification.

- Selected flow: Crude coconut oil, internal intermediate `8b18e824-f237-4a70-9127-ddabde706d15`
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass entering clarification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per clarification-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`

###### Clarification electricity (`clarification_electricity`)

Electricity for pumps, settling or centrifugation, filtration, and storage is recorded for the lot or period.

- Selected flow: Electricity, supplied (candidate; Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: measured or allocated net purchased electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_by_process`
- Range: Provisional clarification-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg crude coconut oil
  - Basis: clarification and storage electricity per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Filter aid and other clarification consumables (`filter_aid_input`)

Filter aid or other consumables are recorded when they cross the foreground boundary.

- Selected flow: Filter aid, unspecified (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass by material type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_quality`
- Range: Provisional filter-aid QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg crude coconut oil
  - Basis: filter aid per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude coconut oil at oil-mill gate (`crude_coconut_oil_output`)

This is the quantitative reference flow. It is the net, unrefined crude coconut oil mass dispatched after clarification or filtration and storage.

- Selected flow: Coconut oil, crude `8b18e824-f237-4a70-9127-ddabde706d15`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output after measured lot normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-210-1999`

##### Waste flows

###### Clarification solids and spent filter material (`clarification_residue`)

Retained solids, oil-bearing filter cake, and spent filter media are reported by treatment or recovery destination.

- Selected flow: Oil-bearing clarification residue (candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude coconut oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_emissions`
- Range: Provisional clarification-residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg crude coconut oil
  - Basis: clarification residue per 1 kg crude coconut oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Shared operations and utilities | First avoid allocation through process subdivision, submetering, lot tracking, or another physically defensible separation of copra preparation, pressing, optional solvent recovery, and clarification. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_cake_meal` | Crude coconut oil and saleable press cake or desolventised meal | When subdivision cannot resolve the joint operation, prefer a documented physical causal relationship. If none can be demonstrated, allocate by site-specific economic value using consistent net revenue at the same mill gate over a representative period; disclose prices, period, currency, allocation shares, and sensitivity to a mass-based result. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_residual_status` | Rejects, residues, recovered solvent, and wastes | Do not assign co-product credit to internal solvent recycle, internal rework, or material sent for disposal. Treat a residual as a co-product only when it meets a declared specification and has a documented beneficial destination and value. | `iso-14044-2006`; `eu-jrc-fdm-bref-2019` |
| `allocation_shared_services` | Shared electricity, steam, water, treatment, and storage | Allocate shared services using measured consumption where possible; otherwise use a documented causal driver such as operating hours, throughput, heat duty, or discharge load and test material shared-service allocations for sensitivity. | `iso-14044-2006`; `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_quality` | all mapped processes | copra, intermediates, oil, cake or meal, filter aid | weighbridge tickets, scale logs, tank gauges, transfer records, laboratory certificates | timestamp; lot_id; material_id; gross_mass; tare_mass; net_mass; moisture; impurities; FFA_or_acid_value; origin; destination; instrument_id | calibrated weighing or tank gauging with representative sampling and stated test method | kg; mass %; declared test unit | each receipt, transfer, and dispatch lot | at least one representative production year or complete declared campaign | each included mill and production line | reconcile opening stock + receipts - closing stock - transfers by lot and normalize to net dispatched oil | calibration records; sampling plan; laboratory method; stock reconciliation |
| `cp_energy_by_process` | all mapped processes | electricity, fuel, and purchased steam | meters, fuel invoices, boiler logs, run-time records | timestamp; process_id; carrier; meter_start; meter_end; fuel_mass_or_volume; heating_value; steam_mass; allocation_driver | submetering preferred; otherwise documented engineering allocation from shared meters | kWh; MJ; kg carrier | monthly and each production campaign | same period as product output | each included line; shared utility boundary declared | subtract exports, retain conversion factors, and allocate shared utilities by causal driver | meter calibration; invoices; fuel specification; allocation worksheet |
| `cp_water_balance` | solvent_oil_recovery and cleaning operations | make-up water, recirculated water, wastewater | water meters, tank records, discharge meters | timestamp; source; make_up_volume; recirculated_volume; discharge_volume; density; treatment_destination | meter boundary-crossing water and identify internal recycle separately | m3; kg | monthly and each production campaign | same period as product output | each included mill and discharge point | net make-up and discharge are separately normalized; internal recirculation is memo information | meter calibration; water-balance reconciliation; discharge record |
| `cp_solvent_balance` | solvent_oil_recovery | make-up solvent, recovered solvent, transfers, destruction, releases | purchase records, tank levels, recovery meters, stack tests, leak records | solvent_identity; opening_stock; receipts; closing_stock; recovered_recycle; offsite_transfer; destroyed_mass; measured_air_release; unexplained_loss | closed campaign mass balance supplemented by measured release-pathway data | kg | each campaign and monthly reconciliation | complete solvent-route operating period | each extraction and recovery system | reconcile all solvent inputs, inventories, recycle, transfers, destruction, and releases; do not assign all make-up to air | calibrated tank or flow meters; purchase records; leak survey; stack-test report; signed balance |
| `cp_residuals_emissions` | all mapped processes | rejects, wastes, residues, dust, direct releases | waste tickets, scales, stack tests, exhaust logs, treatment manifests | timestamp; row_id; mass; concentration; exhaust_flow; operating_time; destination; treatment; recovery_status | weigh residuals and calculate releases from measured concentration × flow × operating time where applicable | kg; mg/Nm3; Nm3/h; h | each shipment and monitoring event | same period as product output | each included source and destination | aggregate by row and destination, then normalize to dispatched oil | calibration; laboratory report; chain-of-custody or waste manifest |
| `cp_coproduct_value` | mechanical_oil_extraction and solvent_oil_recovery | allocation drivers for oil, cake, and meal | sales invoices, transfer prices, quantity records | product_id; quantity; specification; net_price; currency; date; destination; internal_transfer_basis | collect comparable mill-gate values net of separable downstream handling | kg; currency/kg | each transaction; summarized monthly | representative 12-month period or justified campaign | each included mill | calculate quantity-weighted net value using one currency and price basis | invoice sample; currency conversion; price-basis review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = period or lot amount / net kg of `crude_coconut_oil_output` dispatched for the same boundary and period | row amount; net crude-oil output | amount per 1 kg crude coconut oil | `iso-14044-2006` |
| `calc_material_balance` | Each process and whole mill | opening stocks + external receipts + internal transfers in = closing stocks + external outputs + internal transfers out + measured wastes and emissions + documented balance difference; internal transfers cancel at whole-mill level | mass and stock records | process and whole-mill balance plus unexplained difference | `iso-14044-2006` |
| `calc_direct_air_release` | Measured dust or solvent releases | released mass = concentration × dry or wet exhaust flow × operating time, with reference conditions and unit conversions documented | concentration; exhaust flow; operating time | kg released by pathway | `eu-jrc-fdm-bref-2019` |
| `calc_solvent_reconciliation` | Solvent route | unexplained solvent loss = opening stock + receipts - closing stock - off-site transfers - documented destruction; report measured air/water/waste pathways separately and reconcile, without forcing the entire difference to air | solvent balance fields | kg solvent by fate and unexplained difference | `eu-jrc-fdm-bref-2019` |
| `calc_economic_allocation` | Joint oil and saleable cake or meal | product value share = quantity × consistent net mill-gate price / sum of quantity × net price for all co-products; apply shares only after subdivision has been exhausted | product quantities; comparable prices; currency basis | allocation factors summing to 1 | `iso-14044-2006`; `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and copra | Retain lot linkage, botanical origin as coconut kernel or copra, extraction route, unrefined status, and declared moisture, impurity, and FFA or acid-value test bases. | receiving records; product certificate; laboratory method; `codex-cxs-210-1999` |
| `dq_temporal` | Foreground inventory | Use at least one representative production year; a shorter complete campaign is allowed only for seasonal or batch production with dates, throughput, downtime, and representativeness justification disclosed. | dated meters, invoices, batch records, and production logs |
| `dq_geography_technology` | Foreground and upstream data | Identify mill location, copra origin, extraction technology, solvent use, energy carriers, and pollution controls; justify upstream datasets against those characteristics. | site metadata; supplier declarations; equipment list; dataset selection record |
| `dq_completeness` | Material, energy, water, wastes, and emissions | Reconcile all process maps and report missing, estimated, or allocated flows. Solvent, direct emissions, wastewater, and hazardous wastes cannot be omitted only because their mass is small. | process balance; utility reconciliation; solvent balance; waste manifests; `eu-jrc-fdm-bref-2019` |
| `dq_measurement` | Collected foreground values | Identify instrument, calibration state, sampling method, test method, frequency, and any data substitution; preserve raw records and conversion factors. | calibration certificates; sampling plan; laboratory reports; calculation workbook |
| `dq_estimate_replacement` | Every provisional QA range | Treat `reasoned_estimate` ranges only as screening flags. Replace or confirm them with reviewed coconut-oil foreground evidence before active status; values outside a guardrail require investigation, not automatic rejection. | review record; site evidence; documented investigation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require exactly 1 kg net output of Tiangong flow `8b18e824-f237-4a70-9127-ddabde706d15` with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and all required qualifiers. | `codex-cxs-210-1999` |
| `validate_scope_route` | Process coverage | Require all required processes and require `solvent_oil_recovery` only when solvent extraction occurs; reject inclusion of refining inside the crude-oil unit process unless it is separately metered or allocated to a downstream dataset. | `eu-jrc-fdm-bref-2019` |
| `validate_internal_transfers` | Process links | Require prepared copra, cake sent to extraction, and crude-oil intermediate inputs to reconcile with their corresponding outputs over the same lot or period. | `iso-14044-2006` |
| `validate_material_balance` | Each process and whole mill | Require a disclosed mass-balance difference and investigation of unexplained losses; do not silently close the balance by changing the reference output or assigning the difference to air. | `iso-14044-2006` |
| `validate_energy_water` | Utilities | Require carrier-specific energy, net make-up water, internal recirculation memo flows, and wastewater discharge to use consistent boundaries and conversions without double counting. | `eu-jrc-fdm-bref-2019` |
| `validate_solvent_route` | Conditional solvent route | Require solvent identity and a reconciled balance covering make-up, inventories, recovered recycle, transfers, destruction, and measured releases; omission is an error when the route is included. | `eu-jrc-fdm-bref-2019` |
| `validate_allocation` | Joint products and shared services | Require the allocation hierarchy, driver, values, period, factor sum, and sensitivity result to be disclosed whenever subdivision does not fully avoid allocation. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `validate_provisional_ranges` | QA guardrails | Flag values outside a provisional `reasoned_estimate` QA guardrail for review. Do not substitute the guardrail midpoint or treat the range as an allowed conformance interval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for crude coconut oil at the oil-mill gate |
| downstream_use | `secondary_dataset`; `background_dataset` after independent methodology and data-quality review |
| allowed_use | Cradle-to-gate or later life-cycle models that add representative upstream copra and utility datasets and downstream refining, transport, use, and end-of-life as required by goal and scope |
| excluded_use | Direct representation of virgin or refined coconut oil; direct consumer product claims; substitution for coconut cultivation or copra drying; comparative public claims without applicable review |
| required_metadata | PCR id; reference-flow UUID and qualifiers; mill and copra geography; production period; extraction route; included processes; upstream datasets; utility carriers; allocation method and factors; co-product status; quality test methods |
| required_quality_disclosure | Foreground coverage; measured, calculated, allocated, and estimated shares; mass- and solvent-balance differences; missing UUIDs; provisional range use; data age; laboratory and meter quality; exclusions and sensitivity results |
| update_trigger | Change in copra origin or preparation, extraction technology, solvent, energy system, co-product market, allocation driver, pollution control, product specification, or a material foreground value; or evidence showing provisional guardrails are no longer appropriate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | standard | Codex Alimentarius, CXS 210-1999, Standard for Named Vegetable Oils, amended 2026, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B210-1999%252FCXS_210e.pdf (retrieved 2026-08-11) | Coconut-oil identity, crude-oil status and quality-specification context |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries, 2019, https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-11) | Crude vegetable-oil process decomposition, separation from refining, utilities, solvent route, emissions, wastes, and co-products |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed 2022, https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | LCA scope, inventory consistency, allocation hierarchy, reporting, and review |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Allocation disclosure, data quality, representativeness, and sensitivity expectations |
