---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-refined
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Groundnut oil, refined

## 1. Scope and Applicability

This PCR applies to bulk edible groundnut (peanut) oil refined from crude groundnut oil derived from *Arachis hypogaea* seed. It covers refinery-gate production through degumming, a route-appropriate neutralisation or physical-refining branch, bleaching and filtration, deodorisation, finishing, and bulk storage. Chemical refining is the representative route. Physical refining may be used only when the actual process sequence, pretreatment, material inputs, yields, emissions, and co-products are collected rather than copied from the representative route.

The foreground starts with crude groundnut oil received at the refinery. Oilseed cultivation, peanut preparation, pressing or solvent extraction, and crude-oil transport to the refinery remain upstream and require linked datasets. Retail packaging, distribution after the refinery gate, cooking, and end-of-life are outside the foreground boundary. Blended oils, hydrogenated or interesterified products, biodiesel feedstocks, and crude groundnut oil sold without refining are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-refined |
| classification_refs | CPC 3.0: 21622, Groundnut oil, refined |
| covered_products | Bulk refined edible oil derived predominantly from groundnut or peanut oilseed, including chemically or physically refined grades whose actual route is declared |
| excluded_products | Crude groundnut oil; blended edible oils; hydrogenated or interesterified oils; flavoured consumer products; biodiesel or other non-food derivatives |
| representative_product | Refined groundnut oil at the refinery gate before retail packaging |
| production_route | Crude-oil receipt, degumming and route-appropriate neutralisation, bleaching and filtration, deodorisation and finishing |
| market_state | Bulk edible refined oil meeting Codex CXS 210-1999 or the declared applicable market specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Refined edible groundnut oil at the refinery gate |
| How much | 1 kg |
| How well | Conforming to Codex CXS 210-1999 or a declared equivalent applicable specification, with the refining route and quality basis documented |
| How long or cycle | One representative continuous or batch refinery production period, normalized to saleable output |
| reference_flow_link | The functional unit is represented by the Tiangong product flow and Mass property below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Groundnut oil, refined `f3a626d9-6e6e-42c2-9542-4824ab538765` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | groundnut-only or declared blend status; chemical or physical refining route; edible quality specification; refinery geography; technology and reference year; bulk packaging state; crude-oil starting condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass inventory flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground amounts to 1 kg saleable bulk refined groundnut oil; retain unrounded production records and report conversion factors. |
| `energy_measurement` | Electricity and thermal energy | Energy property appropriate to the selected Tiangong flow | kWh for electricity; MJ for heat | Convert metered fuel or steam to delivered process energy using documented site-specific properties and avoid mixing fuel input with delivered heat. |
| `water_measurement` | Process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass or convert measured volume with a declared density and temperature basis. |
| `concentration_correction` | Sodium hydroxide and acid solutions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg active substance and kg solution | Record solution mass and concentration, then calculate active substance; link the background flow matching the purchased concentration. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crude groundnut oil received at the refinery gate, including its water, gums, free-fatty-acid and impurity condition when known |
| starting_condition_role | Upstream product input to the foreground refining system |
| product_classification_scope | CPC 3.0 code 21622 for the reference output; crude groundnut oil is CPC 3.0 code 21621 |
| recursive_input_rule | Purchased refined groundnut oil or externally processed rework entering the system is recorded as a separate product input with its supplier dataset and is not recursively reconstructed inside this PCR |
| upstream_dataset_requirement | Link crude groundnut oil, chemicals, water, electricity, thermal energy, packaging used inside the gate, and external treatment services to geographically and technologically appropriate upstream datasets |
| disclosure | Declare refining route, included operations, site and period, crude-oil origin and condition, product yield, rework fraction, co-product destinations, external treatment, and any omitted operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | Core refinery foreground | Include crude-oil receipt and storage losses, degumming, route-appropriate neutralisation or physical-refining pretreatment, bleaching and filtration, deodorisation, finishing, on-site utilities directly attributable to refining, and bulk product storage through the refinery gate. | `jrc-fdm-bref-2019`; `list-pattee-2020-peanut-oil` |
| `system_boundary_rule_2` | Upstream and downstream separation | Exclude oilseed cultivation, pressing or solvent extraction and inbound crude-oil transport from the foreground but link them as upstream datasets; exclude retail packaging, distribution, use and end-of-life. | `codex-cxs-210-1999` |
| `system_boundary_rule_3` | Conditional operations and recursive inputs | Include soapstock splitting, condensate or scrubber handling, and wastewater treatment when operated on-site; otherwise record exported co-products, wastes, emissions, and treatment services. Treat purchased refined oil or external rework according to the declared recursive input rule. | `jrc-fdm-bref-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `degumming_neutralisation` | Degumming and route-appropriate neutralisation | required | Degumming is required; sodium hydroxide neutralisation applies only to the chemical route and must be replaced by measured physical-refining pretreatment for a physical route | Remove phospholipids, free fatty acids and associated impurities | 1 kg intermediate oil transferred to bleaching |
| `bleaching_filtration` | Bleaching and filtration | required | Include adsorbent preparation, contact, filtration and spent-earth handling | Remove pigments, oxidation products, trace contaminants and residual soaps | 1 kg bleached oil transferred to deodorisation |
| `deodorisation_finishing` | Deodorisation, finishing and bulk storage | required | Include steam stripping under vacuum, condensation or scrubbing, cooling, polishing and saleable bulk storage | Produce specification-conforming refined oil | 1 kg saleable bulk refined groundnut oil |
| `soapstock_splitting` | Soapstock splitting | conditional | Include only when acidulation is performed within the reporting site | Convert soapstock to acid oil and aqueous residue | Measured soapstock treated |

### Process: Degumming and route-appropriate neutralisation (`degumming_neutralisation`)

#### Inputs

##### Product flows

###### Crude groundnut oil (`crude_groundnut_oil`)

Crude groundnut oil enters the refinery boundary and carries all upstream production burdens. Record tank receipts corrected for inventory change and sampling or handling losses.

- Selected flow: Groundnut oil, crude `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured crude-oil receipts minus stock increase attributable to the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable refined groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crude_oil_receipts`
- Sources:
- Range: Provisional refinery-yield QA guardrail
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1.00
  - Upper: 1.15
  - Unit: kg
  - Basis: per 1 kg saleable refined groundnut oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water (`degumming_water`)

Record water added for hydration, washing, chemical dilution and centrifuge cleaning when attributable to the process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or batch-sheet water supplied to degumming and neutralisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_water`
- Sources:
- Range: Provisional water-use screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg intermediate oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphoric acid (`degumming_acid`)

Record phosphoric acid used for acid degumming. If citric acid or another approved agent is used, replace the selected flow with the exact purchased substance and retain the active-substance calculation.

- Selected flow: Phosphoric acid, production mix, at plant `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg active acid
- Amount rule: purchased solution mass multiplied by recorded active-acid concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_chemicals`
- Sources: `jrc-fdm-bref-2019`
- Range: Vegetable-oil refinery phosphoric-acid use
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 0.002
  - Unit: kg active acid
  - Basis: per 1 kg intermediate oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `jrc-fdm-bref-2019`

###### Sodium hydroxide (`neutralisation_alkali`)

Record sodium hydroxide for the chemical-refining route. Set this row to not applicable for a documented physical-refining route; do not substitute a zero without recording the route.

- Selected flow: Sodium hydroxide, production mix, at plant, industrial grade 95 to 98 percent `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg active NaOH
- Amount rule: purchased solution mass multiplied by recorded NaOH concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_chemicals`
- Sources: `jrc-fdm-bref-2019`
- Range: Vegetable-oil refinery NaOH use
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.006
  - Unit: kg active NaOH
  - Basis: per 1 kg intermediate oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `jrc-fdm-bref-2019`

###### Electricity (`degumming_electricity`)

Record metered electricity for pumping, mixing, heating auxiliaries, centrifugation and process controls. Select the Tiangong electricity flow matching site geography and supply voltage.

- Selected flow: Electricity, alternating current, 1 to 35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: allocated submeter reading or engineering allocation from the refinery electricity meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_degumming_energy`
- Sources:
- Range: Provisional electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh
  - Basis: per 1 kg intermediate oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Degummed or neutralised oil (`degummed_neutralised_oil`)

Record the intermediate oil transferred to bleaching using tank transfer or mass-balance records.

- Selected flow: Degummed or neutralised groundnut oil; foreground intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer, or calculated from input and separately measured separated streams and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable refined groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_balance`
- Sources: `mass-balance-identity`

###### Soapstock or separated gums (`soapstock_gums`)

Record separated gums, soapstock, or acid oil as a product output only when it has documented beneficial use and economic value; otherwise classify it as waste with the same measured mass and destination.

- Selected flow: Soapstock, gums or acid oil; route-specific foreground output
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured separated-stream mass corrected for water content when the commercial basis requires it
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources: `jrc-fdm-bref-2019`
- Range: Provisional separated-stream screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg
  - Basis: per 1 kg intermediate oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Degumming and neutralisation wastewater (`degumming_wastewater`)

Record aqueous effluent leaving the process for on-site or external treatment, including the measured pollutant characterization used by the selected treatment dataset.

- Selected flow: Vegetable-oil refinery wastewater; treatment-specific flow to be selected for the site
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered discharge or water balance, excluding recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources: `jrc-fdm-bref-2019`
- Range: Provisional wastewater screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg intermediate oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Bleaching and filtration (`bleaching_filtration`)

#### Inputs

##### Product flows

###### Degummed or neutralised oil (`bleaching_feed_oil`)

Record the foreground intermediate received from the preceding process without assigning a second upstream crude-oil burden.

- Selected flow: Degummed or neutralised groundnut oil; foreground intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer or reconciled intermediate mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg bleached oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_balance`
- Sources: `mass-balance-identity`

###### Bleaching earth (`bleaching_earth`)

Record fresh bleaching earth or other adsorbent actually charged. Do not use perlite or a filter aid as a substitute for bleaching earth unless it is separately consumed and recorded.

- Selected flow: Bleaching earth, production mix, at plant `a49e60f4-17c1-45c4-95db-4c0c6e593a85`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh-ticket, purchase-and-stock balance, or batch charge records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg bleached oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_materials`
- Sources: `jrc-fdm-bref-2019`
- Range: Vegetable-oil refinery bleaching-earth use
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.03
  - Unit: kg
  - Basis: per 1 kg bleached oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `jrc-fdm-bref-2019`

###### Electricity (`bleaching_electricity`)

Record electricity for vacuum generation, agitation, pumping and filtration using a site-appropriate electricity flow.

- Selected flow: Electricity, alternating current, 1 to 35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: allocated submeter reading or documented engineering allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg bleached oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bleaching_energy`
- Sources:
- Range: Provisional electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh
  - Basis: per 1 kg bleached oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bleached groundnut oil (`bleached_oil`)

Record the oil transferred to deodorisation after filtration.

- Selected flow: Bleached groundnut oil; foreground intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer, or input oil minus measured retained oil and other losses adjusted for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable refined groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_balance`
- Sources: `mass-balance-identity`

##### Waste flows

###### Spent bleaching earth (`spent_bleaching_earth`)

Record wet spent adsorbent, its retained-oil content, recovery practice and final destination. Select a geography- and treatment-specific waste flow rather than assuming the available China-specific Tiangong flow is universally applicable.

- Selected flow: Spent bleaching earth; site- and treatment-specific waste flow pending dataset selection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg wet waste
- Amount rule: measured outgoing mass; reconcile against fresh earth plus retained oil and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg bleached oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources: `jrc-fdm-bref-2019`
- Range: Provisional spent-earth screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.06
  - Unit: kg wet waste
  - Basis: per 1 kg bleached oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Deodorisation, finishing and bulk storage (`deodorisation_finishing`)

#### Inputs

##### Product flows

###### Bleached groundnut oil (`deodorisation_feed_oil`)

Record the foreground intermediate received from bleaching and avoid duplicating its upstream inventory.

- Selected flow: Bleached groundnut oil; foreground intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer or reconciled intermediate balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable refined groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_balance`
- Sources: `mass-balance-identity`

###### Process heat from steam (`deodorisation_heat`)

Record delivered process heat for steam stripping, oil heating and vacuum-system operation. Where only steam mass is metered, calculate delivered heat from measured pressure, condensate condition and a documented enthalpy method.

- Selected flow: Process heat from steam, GLO `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: metered delivered heat or steam mass multiplied by documented usable enthalpy change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable refined groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deodorisation_energy`
- Sources: `jrc-fdm-bref-2019`
- Range: Provisional process-heat screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 10
  - Unit: MJ
  - Basis: per 1 kg saleable refined groundnut oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity (`deodorisation_electricity`)

Record electricity for vacuum pumps, circulation, cooling auxiliaries, polishing and bulk storage using a site-appropriate supply flow.

- Selected flow: Electricity, alternating current, 1 to 35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: allocated submeter reading or documented engineering allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable refined groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_deodorisation_energy`
- Sources:
- Range: Provisional electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh
  - Basis: per 1 kg saleable refined groundnut oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined groundnut oil (`refined_groundnut_oil`)

This is the quantitative reference output. Count only saleable bulk oil meeting the declared specification; off-specification oil returned to the process is internal rework.

- Selected flow: Groundnut oil, refined `f3a626d9-6e6e-42c2-9542-4824ab538765`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg after normalization from measured saleable output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`

###### Deodoriser distillate (`deodoriser_distillate`)

Record condensate or deodoriser distillate as a product only when it has verified beneficial use and economic value; otherwise record the actual waste or treatment route. Do not use a palm-oil-specific Tiangong flow for groundnut-oil distillate.

- Selected flow: Groundnut-oil deodoriser distillate; route-specific foreground output pending dataset selection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured collection mass corrected for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable refined groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources: `jrc-fdm-bref-2019`
- Range: Provisional distillate screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg saleable refined groundnut oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Deodorisation condensate and scrubber wastewater (`deodorisation_wastewater`)

Record contaminated condensate or scrubber liquid sent to treatment. Clean cooling water circulating in a closed loop is not reported as a consumptive input, but make-up and discharge are reported.

- Selected flow: Vegetable-oil refinery wastewater; treatment-specific flow to be selected for the site
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered discharge or condensate balance excluding clean recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable refined groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources: `jrc-fdm-bref-2019`
- Range: Provisional wastewater screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg saleable refined groundnut oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct deodoriser vent emissions (`deodoriser_vent_emissions`)

Report measured organic emissions after condensers and scrubbers as exact Tiangong elementary flows. Do not use a generic VOC flow when a measured substance-specific profile is available.

- Selected flow: Substance-specific air emissions selected from site measurements; no default UUID
- Flow property / unit: Mass / kg
- Amount rule: measured stack concentration multiplied by dry gas flow and operating time, less no undocumented credit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable refined groundnut oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-fdm-bref-2019`
- Range: Provisional direct-emission screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg
  - Basis: per 1 kg saleable refined groundnut oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Multi-output refinery operations | Avoid allocation by subdivision and direct metering of degumming, bleaching, deodorisation, utilities, wastes and recovered streams wherever technically feasible. | `iso-14044-2006` |
| `allocation_rule_2` | Soapstock, acid oil, gums and deodoriser distillate | Classify each stream from documented destination and economic value. If a saleable co-product remains after subdivision, allocate the inseparable residual burden using site-specific economic shares averaged over the representative period and report a mass-allocation sensitivity. If the stream is waste, assign treatment without co-product allocation. | `iso-14044-2006`; `jrc-fdm-bref-2019` |
| `allocation_rule_3` | Recycling, recovery and avoided products | Do not grant an avoided-product credit solely because recovery is possible. A substitution model requires a documented receiving market, substituted product, quality relationship and separate scenario; never count the same stream as both co-product and waste. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crude_oil_receipts` | `degumming_neutralisation` | crude oil input | tank and weighbridge records | receipt mass, tank level, density basis, stock change, supplier, lot | calibrated scale or reconciled tank inventory | kg | each receipt and monthly close | representative 12 months, or justified campaign | reporting refinery | receipts minus stock increase and non-process transfers | calibration, invoices, stock reconciliation |
| `cp_degumming_water` | `degumming_neutralisation` | process water and aqueous discharge | meter and batch records | meter start and end, batch volume, recirculation, discharge | calibrated flowmeter or batch total | kg or m3 with density | batch or daily | same period as product output | process line | net fresh water and net discharge | meter calibration, water balance |
| `cp_degumming_chemicals` | `degumming_neutralisation` | acid and alkali | batch sheet and purchase-stock record | solution mass, concentration, lot, stock change, route | weigh scale and inventory reconciliation | kg solution and mass fraction | each batch | same period as product output | process line | active substance equals solution mass times concentration | certificate of analysis, scale calibration, stock reconciliation |
| `cp_degumming_energy` | `degumming_neutralisation` | electricity | submeter or engineering allocation | meter readings, operating hours, rated load, allocation driver | submeter preferred; otherwise documented load-hour calculation | kWh | daily or batch | same period as product output | process line | sum readings; allocate shared load by measured operating driver | meter calibration, equipment log |
| `cp_bleaching_materials` | `bleaching_filtration` | bleaching earth | batch and stock records | charge mass, receipts, stock change, adsorbent grade | calibrated batch scale and inventory reconciliation | kg | each batch | same period as product output | process line | charges reconciled to purchase and stock movement | scale calibration, invoices, batch sheets |
| `cp_bleaching_energy` | `bleaching_filtration` | electricity | submeter or engineering allocation | meter readings, operating hours, rated load, allocation driver | submeter preferred; otherwise documented load-hour calculation | kWh | daily or batch | same period as product output | process line | sum readings; allocate shared load by measured operating driver | meter calibration, equipment log |
| `cp_deodorisation_energy` | `deodorisation_finishing` | steam heat and electricity | steam and electricity meters | steam mass, pressure, temperature, condensate state, electricity reading, operating time | calibrated meters and thermodynamic conversion | kg steam, MJ and kWh | hourly or batch | same period as product output | process line | delivered heat from measured enthalpy change; electricity from submeter | meter calibration, steam-property method, operating log |
| `cp_intermediate_balance` | all required processes | intermediate oil | tank and transfer records | opening and closing stock, transfer mass, rework, sampling, measured separated streams | calibrated mass flow or reconciled tanks | kg | each transfer and monthly close | same period as product output | reporting refinery | transfers reconciled across adjacent processes without double counting | calibration, signed transfer record, balance closure |
| `cp_coproduct_waste` | all required processes | co-products and wastes | weigh tickets and destination records | mass, water or oil content, classification, destination, revenue, treatment | calibrated scale and shipment documentation | kg | each shipment | same period as product output | reporting refinery | sum by stream and destination, corrected only on declared commercial basis | weigh tickets, invoices, waste manifests, analyses |
| `cp_direct_air_emissions` | `deodorisation_finishing` | direct air emissions | stack test or continuous measurement | substance, concentration, dry gas flow, temperature, pressure, operating time | accredited stack method or calibrated continuous monitor | kg substance | regulatory test or continuous | representative operating state in reporting period | emission point | concentration times standardized gas flow times operating time | laboratory report, method, detection limits, calibration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | All foreground exchanges | normalized amount = reporting-period exchange divided by saleable refined-oil output; preserve the unnormalized totals and unit conversions | exchange totals, saleable output | amount per 1 kg reference product | `mass-balance-identity` |
| `calculation_rule_2` | Crude-oil yield | refining yield = saleable refined-oil mass divided by crude-oil input after consistent stock corrections | crude receipts, crude stock change, refined output, refined stock change | mass yield and crude input per kg product | `mass-balance-identity` |
| `calculation_rule_3` | Acid and alkali | active substance = solution mass multiplied by measured or certificate concentration | solution mass, mass fraction | kg active chemical | `jrc-fdm-bref-2019` |
| `calculation_rule_4` | Process and site mass balance | mass-balance difference = inputs plus stock decrease minus products, co-products, wastes, emissions and stock increase; report the closure percentage and investigated residual | all measured mass streams and stock changes | mass-balance residual and closure | `mass-balance-identity` |
| `calculation_rule_5` | Economic allocation | co-product share = net sales value of each co-product divided by total net sales value of all allocated outputs over the representative period; use consistent price basis and report mass sensitivity | output mass, net price, period | allocation shares | `iso-14044-2006` |
| `calculation_rule_6` | Direct air emission | emitted mass = measured concentration multiplied by standardized dry gas flow and operating time, with units and below-detection treatment documented | stack concentration, gas flow, time | kg substance per kg product | `jrc-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `data_quality_1` | Temporal representativeness | Use a representative 12-month period including normal shutdowns and product changes, or justify a shorter campaign and disclose seasonality. | dated production, meter and stock records |
| `data_quality_2` | Geographic and technological representativeness | Match electricity, heat, water, crude oil, chemicals and treatment datasets to the site and actual refining route; disclose proxies. | supplier, geography, technology and route metadata |
| `data_quality_3` | Completeness | Include all required processes and all material inputs, outputs, wastes and direct emissions; explain exclusions and detection limits. | process map, mass balance, waste manifests, emission reports |
| `data_quality_4` | Measurement quality | Prefer calibrated meters and scales; document allocation of shared utilities and uncertainty of calculated records. | calibration certificates, allocation workbook, reconciliation records |
| `data_quality_5` | Source and estimate transparency | Keep source-backed ranges distinct from foreground quantities and replace every reasoned estimate before active publication unless a reviewer accepts and documents it. | source ids, review record, replacement foreground evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Product identity and reference flow | Confirm CPC 3.0 code 21622, the refined groundnut-oil flow UUID, Mass flow-property UUID, Units of mass unit-group UUID, 1 kg reference amount, edible quality basis and all required qualifiers. | `codex-cxs-210-1999` |
| `validation_rule_2` | Route and boundary completeness | Verify that degumming, the declared chemical or physical route branch, bleaching, deodorisation, finishing, utilities and conditional on-site treatment are represented and that crude-oil production is linked upstream rather than counted as foreground refining. | `jrc-fdm-bref-2019`; `list-pattee-2020-peanut-oil` |
| `validation_rule_3` | Mass and intermediate balance | Reconcile crude oil, chemicals, water and intermediate transfers with refined oil, co-products, wastes, emissions and stock changes for the reporting period; investigate and disclose residuals rather than forcing closure. | `mass-balance-identity` |
| `validation_rule_4` | Chemicals and energy | Check solution concentration corrections, route applicability, active-substance units, electricity geography and voltage, and steam heat conversion; reject silent substitution of solution mass for active mass or steam mass for delivered heat. | `jrc-fdm-bref-2019` |
| `validation_rule_5` | Outputs, waste and allocation | Verify each gums, soapstock, acid-oil, spent-earth and distillate destination and economic status; ensure no stream is simultaneously a co-product, waste and avoided-product credit, and reproduce allocation shares and sensitivity. | `iso-14044-2006`; `jrc-fdm-bref-2019` |
| `validation_rule_6` | Quality, sources and estimates | Confirm saleable output meets the declared Codex or market specification, source ids resolve, source-backed ranges retain their basis, and every remaining reasoned estimate is flagged for replacement or accepted by review. | `codex-cxs-210-1999` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Secondary or background unit-process dataset for bulk refined groundnut oil at the refinery gate |
| downstream_use | Food-product LCIs, ingredient supply-chain models, process datasets and lifecycle models that consume bulk refined groundnut oil |
| allowed_use | Declared refinery geography, period, refining route, quality specification and bulk market state consistent with collected data |
| excluded_use | Crude groundnut oil, blended or modified oils, consumer packaging, cultivation or extraction, and unqualified claims for another geography, route or period |
| required_metadata | PCR id and version; CPC 21622; reference-flow UUID, Mass property and Units of mass unit group; geography; reference year; technology and route; crude-oil origin; allocation method; data owner and review state |
| required_quality_disclosure | Coverage and mass-balance closure; foreground measurement share; shared-utility allocation; proxy datasets; reasoned estimates; co-product destinations and prices; uncertainty and review findings |
| update_trigger | Material change in route, site, crude-oil sourcing, yield, energy system, pollution controls, co-product destination or allocation; new reviewed evidence; revised Codex product requirements; changed Tiangong support or flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | standard | FAO/WHO Codex Alimentarius, CXS 210-1999, Standard for Named Vegetable Oils, last modified 2024. https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/ Retrieved 2026-08-10. | Groundnut-oil identity, edible market state and declared quality conformity |
| `jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, 2019, Chapter 11. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf Retrieved 2026-08-10. | Vegetable-oil refining sequence, process conditions, chemical-use ranges, outputs, wastes and emissions controls |
| `list-pattee-2020-peanut-oil` | literature | List, G. R. and Pattee, H. E., Production, Processing, and Food Uses of Peanut Oilseed, Oil, and Protein, 2020. DOI: 10.1002/047167849X.bio014.pub2. https://doi.org/10.1002/047167849X.bio014.pub2 Retrieved 2026-08-10. | Groundnut-specific corroboration of extraction upstream and conventional caustic refining, bleaching and deodorisation route |
| `iso-14044-2006` | standard | International Organization for Standardization, ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html Retrieved 2026-08-10. | Allocation hierarchy, consistency, transparency and sensitivity requirements |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to measured refinery inputs, outputs and stock changes. | Normalisation, yield, intermediate reconciliation and mass-balance validation |
