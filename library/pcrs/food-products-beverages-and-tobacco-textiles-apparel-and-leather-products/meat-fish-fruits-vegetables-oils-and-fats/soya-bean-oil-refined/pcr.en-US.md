---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-refined
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Soya bean oil, refined

## 1. Scope and Applicability

This PCR guides production of a foreground data package for bulk refined soya bean oil at the refinery gate. It covers chemical or physical refining of crude soya bean oil, including route-applicable degumming, neutralisation, water washing, bleaching, deodorisation, filtration, storage before dispatch, on-site utilities, direct releases, wastewater, and refinery residues. It may be used for edible or technical-grade refined oil only when the declared grade and applicable specification are stated.

The PCR excludes soybean cultivation, seed preparation and oil extraction except as upstream datasets for the crude-oil input. It also excludes hydrogenation, interesterification, transesterification, blending into formulated oils, biodiesel manufacture, consumer packaging, distribution, retail, use, and end-of-life unless a study explicitly adds those processes outside this refinery-gate dataset. The classification reference is evidence of scope correspondence, not the source of canonical PCR identity or an accepted mapping edge.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-refined |
| classification_refs | CPC 3.0 21612, Soya bean oil, refined, exact scope context |
| covered_products | Bulk soya bean oil and liquid fractions that have undergone refining and retain their triglyceride identity; edible or technical grade must be declared |
| excluded_products | Crude soya bean oil; hydrogenated, interesterified, re-esterified or otherwise chemically modified oil; biodiesel; blended or formulated oils; packaged retail products |
| representative_product | Bulk, unhydrogenated refined soya bean oil at the refinery gate after route-applicable degumming, neutralisation, bleaching, deodorisation and final filtration |
| production_route | Chemical refining or physical refining of crude soya bean oil; actual sequence, aids, recovery steps and bypassed operations must be declared |
| market_state | Bulk refined oil at refinery gate; edible or technical grade, packaging status, storage condition and quality specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of refined soya bean oil for subsequent food or technical use |
| How much | 1 kg net mass of refined soya bean oil |
| How well | Refined, not chemically modified, with grade and applicable quality specification declared; food-grade claims require retained conformance test evidence |
| How long or cycle | One production batch or representative reporting campaign ending at refinery-gate storage or dispatch |
| reference_flow_link | The functional unit is realised by exactly the reference amount of the declared refined-oil output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Soya bean oil, refined `a113893c-4722-4285-b86e-fddcc8b54e46` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | refining route; edible or technical grade; crude-oil feed identity; site and geography; production period; allocation method; applicable quality specification and test status; bulk or packaged state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-normalised inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net as-delivered mass. Normalise all inventory results to exactly 1 kg refined-oil output; do not convert to a dry-matter basis. |
| `solution_active_mass` | aqueous alkali, acid and other formulated refining aids | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered solution mass and active-substance concentration separately. Calculate and disclose active mass; do not substitute active mass for purchased solution mass. |
| `energy_carrier_units` | electricity, steam, heat and fuels | Energy or carrier-specific property | kWh, MJ, kg or m3 as applicable | Preserve measured billing or meter units and document every conversion, calorific value and steam-state assumption before normalising to the reference flow. |
| `quality_measurements` | product conformance measurements | Method-specific property | method-specific | Keep acid value, peroxide value, moisture, impurities and other product tests as quality evidence, not inventory mass flows. State the applied specification and analytical method. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crude soya bean oil received at the refinery gate with feed mass, supplier dataset reference, grade, water and impurity basis, and storage change documented |
| starting_condition_role | Upstream product input to a gate-to-gate refining process |
| product_classification_scope | Refined soya bean oil retaining triglyceride identity; CPC 3.0 21612 is classification context only |
| recursive_input_rule | If refined soya bean oil is consumed within the foreground refinery, record it as an upstream product input with its own dataset and do not recursively recreate the same refining process; disclose recirculation separately from external input |
| upstream_dataset_requirement | Use a geographically, temporally and technologically representative crude-soya-bean-oil dataset; do not replace it with soybean seed or a generic vegetable-oil flow without documented proxy review |
| disclosure | Declare refinery route, included unit operations, bypassed steps, on-site treatment, utility supply, storage change, co-product status, allocation, data period, geography and all upstream proxies |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_start_gate` | foreground_start | Start at measured receipt of crude soya bean oil at the refinery gate; represent cultivation and oil extraction through upstream datasets, not duplicated foreground operations. | `us-epa-ap42-9-11-1` |
| `sb_include_refining` | unit_operations | Include all route-applicable degumming, neutralisation or deacidification, washing, bleaching, deodorisation, filtration and intermediate or finished-oil storage operated by the reporting site. | `us-epa-ap42-9-11-1` |
| `sb_utilities_and_treatment` | utilities_and_waste | Include on-site electricity, heat, steam, fuels, water supply, cleaning, vacuum generation, air-pollution control, wastewater treatment and residue handling attributable to the refined oil. | `eu-jrc-fdm-bref-2019` |
| `sb_direct_releases` | elementary_flows | Report measured or calculated site-specific direct releases to air and water by pollutant and receiving compartment; do not substitute a generic total-release row in the final dataset. | `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-11-1` |
| `sb_exclusions` | downstream_and_capital | Exclude consumer packaging, distribution, retail, use and end-of-life. Exclude capital goods unless required by the declared study method, and disclose any added stage separately. | `eu-pef-2021` |
| `sb_no_double_count` | recovered_materials | Distinguish internal recirculation from external inputs and outputs so recovered oil, condensate, water, heat and refining aids are not counted twice. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `process_refining` | Soybean oil refining; Tiangong process identity `1788a02a-26ae-4acb-9cf2-c25eebd00200` | required | Always required for this PCR | Foreground gate-to-gate refining and on-site treatment | 1 kg refined soya bean oil output |

### Process: Soybean oil refining (`process_refining`)

Every quantitative range identified below as `reasoned_estimate` is a replaceable temporary estimate for screening and review, not a sourced default or production factor. Replace it with reviewed site-specific measurements, calculations, supplier evidence, or an applicable authoritative factor before publication-critical use, and disclose the replacement status.

#### Inputs

##### Product flows

###### Crude soya bean oil feed (`crude_soya_oil_input`)

Crude soya bean oil crosses the refinery gate as the principal feed. Its upstream production remains in the linked supplier or background dataset.

- Selected flow: Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3`
- Flow property / unit: Mass / kg
- Amount rule: measured net crude-oil receipt adjusted for opening and closing storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-ap42-9-11-1`
- Range: Provisional crude-oil mass-balance screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.2
  - Unit: kg
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water supplied as a product (`process_water_input`)

Purchased or internally supplied process water used for degumming, washing, cleaning and vacuum or utility services is recorded here. Self-abstracted water is recorded separately as an elementary input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered process-water supply less separately metered recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional process-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium hydroxide for chemical refining (`sodium_hydroxide_input`)

Record sodium hydroxide when neutralisation is used. Physical refining routes that do not consume alkali must report zero and identify the alternative deacidification route.

- Selected flow: Sodium hydroxide, industrial grade `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg delivered product and kg active NaOH
- Amount rule: purchased or issued solution mass with concentration and active mass calculated separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-ap42-9-11-1`
- Range: Provisional alkali-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg delivered product
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bleaching earth (`bleaching_earth_input`)

Bleaching earth or another declared adsorbent is recorded when used to remove colour bodies and impurities.

- Selected flow: Bleaching earth `8b774b7a-2054-4e39-87ec-a17cc015fae9`
- Flow property / unit: Mass / kg
- Amount rule: measured adsorbent issue to the bleaching operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-ap42-9-11-1`
- Range: Provisional adsorbent-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other refining aids (`other_refining_aids_input`)

Record each acid, filter aid, antioxidant or other refining aid as a separate concrete product flow in the produced dataset. This PCR row is a collection pattern and is not authority to merge different substances.

- Selected flow: site-selected product flow for each declared refining aid
- Flow property / unit: Mass / kg
- Amount rule: measured issue by substance, concentration and operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-ap42-9-11-1`
- Range: Provisional per-aid screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg per individual aid
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supply (`electricity_input`)

Electricity consumed by pumps, centrifuges, vacuum systems, filtration, storage and on-site treatment is recorded using the geographically appropriate supply flow.

- Selected flow: site- and geography-specific electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to refining plus allocated common-utility use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-pef-2021`
- Range: Provisional electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy and steam supply (`thermal_energy_input`)

Record purchased steam or heat directly. For on-site fuel combustion, record the fuel inputs and direct combustion emissions rather than adding a duplicate heat product.

- Selected flow: site-specific steam, heat or fuel product flow
- Flow property / unit: Energy / MJ, with carrier quantities retained in their measured units
- Amount rule: metered useful heat or calculated fuel energy using documented calorific value and allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-pef-2021`
- Range: Provisional thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is required by this PCR. If an installation co-treats external waste, model and disclose it as a separate input and verify that it does not change the product boundary.

##### Elementary flows

###### Self-abstracted water (`self_abstracted_water_input`)

Water taken directly from the environment is recorded by source compartment and must not also be counted as purchased process water.

- Selected flow: site-specific elementary water flow by source compartment
- Flow property / unit: Volume / m3
- Amount rule: metered abstraction less water returned before use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional abstraction screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.002
  - Unit: m3
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Refined soya bean oil (`refined_soya_oil_output`)

The reference product is net saleable refined oil at the refinery gate after final filtration and any in-scope storage adjustment.

- Selected flow: Soya bean oil, refined `a113893c-4722-4285-b86e-fddcc8b54e46`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output after normalization from measured net production
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-21612`; `codex-cxs-210-1999`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-pef-2021`

###### Recovered gums or lecithin fraction (`recovered_gums_output`)

Record recovered gums or lecithin as a product only when it meets the site's documented product specification and leaves for beneficial use; otherwise record the material as waste.

- Selected flow: site-selected product flow matching the recovered material specification
- Flow property / unit: Mass / kg
- Amount rule: measured saleable recovered mass after storage adjustment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_residues`
- Sources: `us-epa-ap42-9-11-1`; `eu-pef-2021`
- Range: Provisional recovered-gums screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fatty-acid or deodoriser distillate (`fatty_acid_distillate_output`)

Record a recovered fatty-acid or deodoriser distillate as a product only when a documented specification and beneficial destination establish product status; otherwise record it as waste.

- Selected flow: site-selected product flow matching the distillate specification
- Flow property / unit: Mass / kg
- Amount rule: measured saleable distillate mass after storage adjustment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_residues`
- Sources: `us-epa-ap42-9-11-1`; `eu-pef-2021`
- Range: Provisional distillate screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent bleaching earth (`spent_bleaching_earth_output`)

Spent adsorbent, including retained oil and moisture, is recorded by measured wet mass and linked to its actual recovery or treatment route.

- Selected flow: site-specific spent bleaching earth waste flow
- Flow property / unit: Mass / kg wet waste
- Amount rule: weighed removal from bleaching filtration, adjusted for temporary storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_residues`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional spent-earth screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg wet waste
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Soapstock, neutralisation sludge or rejected gums (`soapstock_sludge_output`)

Route-specific soapstock, sludge or rejected gums are recorded as separate concrete waste flows in the produced dataset, with composition and destination retained.

- Selected flow: site-specific waste flow for each declared residue
- Flow property / unit: Mass / kg wet waste
- Amount rule: measured residue transfer by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_residues`
- Sources: `us-epa-ap42-9-11-1`; `eu-jrc-fdm-bref-2019`
- Range: Provisional residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg wet waste
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater sent to treatment (`wastewater_output`)

Wastewater crossing to internal or external treatment is recorded by volume or mass, with treatment destination and separately measured pollutant loads retained.

- Selected flow: site-specific wastewater flow to the actual treatment route
- Flow property / unit: Volume / m3 or Mass / kg with conversion documented
- Amount rule: metered discharge to treatment less documented recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_releases`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.002
  - Unit: m3
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct releases to air (`direct_air_releases_output`)

Create one elementary-flow exchange per measured or calculated pollutant, including route-relevant combustion pollutants, volatile organics and odorous substances. Do not retain this aggregate collection-pattern row in a final dataset.

- Selected flow: pollutant-specific elementary flow and receiving air compartment
- Flow property / unit: Mass / kg per pollutant
- Amount rule: measured emission or documented calculation from monitored activity data and control efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_releases`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-11-1`
- Range: Provisional per-pollutant release screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg per pollutant
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct releases to water (`direct_water_releases_output`)

When treated water is discharged directly to the environment, create one elementary-flow exchange per reported pollutant and receiving water compartment. Off-site treatment loads remain technosphere wastewater flows.

- Selected flow: pollutant-specific elementary flow and receiving water compartment
- Flow property / unit: Mass / kg per pollutant
- Amount rule: measured concentration multiplied by paired discharge volume for the same period, with non-detect treatment documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined soya bean oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_releases`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional per-pollutant release screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg per pollutant
  - Basis: per 1 kg refined soya bean oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared_refinery_operations | First subdivide unit operations and directly meter inputs, outputs and releases attributable to refined soya bean oil. Use system expansion only when the declared study method permits it and the substituted function is demonstrated. | `eu-pef-2021` |
| `allocation_physical` | unavoidable_shared_burdens | If subdivision or permitted system expansion is not feasible, allocate by a documented physical relationship that represents causal use of the shared operation; mass allocation is not automatic merely because outputs are measured in kg. | `eu-pef-2021` |
| `allocation_other` | no_physical_relationship | If no defensible physical relationship exists, use another documented relationship such as economic allocation based on a representative price period; disclose prices, currency, period, shares and sensitivity. | `eu-pef-2021` |
| `allocation_residue_status` | gums_distillate_soapstock_spent_earth | Determine product, co-product or waste status from specification, legal status and actual destination before allocation. Apply no avoided-burden credit inside this gate-to-gate dataset unless an explicit system-expansion scenario is separately reported. | `eu-pef-2021`; `eu-jrc-fdm-bref-2019` |
| `allocation_consistency` | all_allocated_rows | Apply one internally consistent allocation set to shared inputs, direct releases and treatment burdens, and retain unallocated totals so the allocation can be audited. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_refined_output` | `process_refining` | refined product and quality | calibrated scale, tank reconciliation and laboratory records | batch id; product grade; gross and tare mass; tank opening and closing stock; off-spec return; acid value; peroxide value; method; specification | reconcile dispatch, production and tank records; retain representative laboratory certificates | kg and method-specific quality units | each batch with monthly reconciliation | representative consecutive 12 months or declared campaign | all in-scope refinery lines and tanks | net conforming output equals production plus opening stock minus closing stock minus returns and off-spec diversions | calibration, tank gauge checks, batch traceability, laboratory QA and signed reconciliation |
| `cp_material_inputs` | `process_refining` | crude oil and refining aids | weighbridge, tank, invoice, issue and concentration records | material id; supplier; flow UUID; gross and tare mass; opening and closing stock; returned quantity; concentration; operation; lot | reconcile purchases or issues with inventory change by material | kg delivered and kg active substance | each receipt or issue with monthly reconciliation | same period as product output | all in-scope lines and common storage | net input equals receipts plus opening stock minus closing stock minus returns; active mass equals solution mass times mass fraction | calibrated scales or meters, supplier certificates, stock reconciliation and lot traceability |
| `cp_water_records` | `process_refining` | purchased and abstracted water | supply and abstraction meters | meter id; source; opening and closing reading; recirculated quantity; calibration; downtime estimate | read source-specific meters and separate recirculation | kg or m3 | daily or shift, aggregated monthly | same period as product output | all in-scope operations and utilities | sum net source withdrawals and supplies; convert volume only with documented density | meter calibration, completeness log and documented gap filling |
| `cp_energy_records` | `process_refining` | electricity, steam, heat and fuels | utility meters, invoices and fuel stock records | carrier; meter id; opening and closing reading; fuel receipts; stock change; calorific value; steam pressure and dryness; shared-utility driver | reconcile meters and invoices; allocate common utilities only after direct metering | kWh, MJ and carrier unit | shift or daily, aggregated monthly | same period as product output | all in-scope operations, storage and treatment | net purchased energy plus on-site generation inputs minus exports; convert with documented factors | meter calibration, invoice reconciliation, calorific-value evidence and allocation record |
| `cp_outputs_and_residues` | `process_refining` | co-products, recovered materials and wastes | scale, tank, manifest and destination records | material id; status; specification; gross and tare mass; moisture; oil content; destination; treatment; opening and closing stock | weigh each transfer and reconcile storage | kg wet and dry basis where available | each transfer with monthly reconciliation | same period as product output | all in-scope operations and storage | net output equals transfers plus closing stock minus opening stock; keep product and waste totals separate | scale calibration, product certificate or waste manifest, destination evidence and stock reconciliation |
| `cp_wastewater_and_releases` | `process_refining` | wastewater and direct releases | discharge meters, laboratory results, stack or fuel records and permits | stream; volume; sampling time; pollutant; concentration; detection limit; compartment; control efficiency; activity data | pair concentration with same-period flow; calculate combustion releases from measured fuel only where direct monitoring is absent | m3, kg, mg/L and pollutant-specific units | continuous or permit-defined sampling, aggregated monthly | same period as product output and representative operating conditions | every in-scope discharge and emission point | pollutant load equals paired concentration times discharge volume; sum measured and calculated points without overlap | accredited laboratory reports, meter calibration, permit records, QA blanks, detection-limit treatment and calculation sheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise` | all inventory rows | Normalised amount equals period net amount multiplied by 1 kg divided by period net conforming refined-oil output. | reconciled row quantity; reconciled refined output | amount per 1 kg reference flow | `eu-pef-2021` |
| `calc_active_substance` | formulated chemicals | Active-substance mass equals delivered solution mass multiplied by supplier- or test-supported mass fraction; retain both delivered and active amounts. | solution mass; concentration | kg delivered product and kg active substance | `us-epa-ap42-9-11-1` |
| `calc_water_load` | direct water releases | Pollutant mass equals paired concentration multiplied by discharge volume with unit conversion; document non-detect rule and do not pair mismatched periods. | concentration; flow; sampling period; detection limit | kg pollutant by receiving compartment | `eu-jrc-fdm-bref-2019` |
| `calc_mass_balance` | oil and material balance | Reconcile crude oil, aids and water against refined oil, recovered products, wastes, wastewater, measured releases and documented stock change; investigate unexplained oil loss separately from water evaporation. | all mass records; stock changes; moisture and oil content | balance closure and unexplained residual | `us-epa-ap42-9-11-1`; `eu-jrc-fdm-bref-2019` |
| `calc_shared_utility` | common utilities | Allocate only residual common-utility use after direct metering, using the selected documented causal driver; preserve unallocated total and shares. | total utility; directly metered use; allocation driver | allocated utility quantity | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and crude input | Flow identities, grades, routes and UUIDs must match the actual products; proxy use requires written semantic and property compatibility review. | product specification, supplier data, Tiangong identity lookup and proxy review |
| `dq_time` | all foreground records | Use one consistent representative period, normally a consecutive 12 months; shorter campaigns must cover stable operation and disclose start, end, shutdowns and atypical events. | period register, production log and representativeness statement |
| `dq_completeness` | all in-scope operations | Cover every in-scope line, tank, utility, treatment unit and release point; quantify missing-record fractions and document gap filling without silently applying cut-off. | source register, completeness reconciliation and missing-data log |
| `dq_measurement` | material, water and energy quantities | Use calibrated instruments or reconciled invoices and stock records; retain raw readings, conversion factors, uncertainty and responsible reviewer. | calibration certificates, invoices, meter exports and calculation workbook |
| `dq_quality` | edible-grade claims | Retain specification, sampling and analytical evidence. Codex quality values may be used only where that standard is the declared applicable specification; local legal or customer requirements may be stricter. | laboratory certificates, method references and applicable specification |
| `dq_representativeness` | foreground and upstream datasets | Report technological, geographical, temporal and precision representativeness and replace provisional reasoned ranges with reviewed evidence before publication-critical use. | data-quality assessment and source comparison |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | product_identity | The reference flow UUID, Mass property, Units of mass group and kg unit must match this PCR; grade, route and bulk state qualifiers must be present. | `unsd-cpc-3-21612` |
| `val_reference_amount` | quantitative_reference | The normalised refined-oil output must equal exactly 1 kg and every inventory amount must state the same reference-flow basis or a traceable conversion. | `eu-pef-2021` |
| `val_boundary` | system_boundary | The dataset must start with crude soya bean oil at the refinery gate and include all operated refining, utility, storage, cleaning and treatment steps; excluded upstream and downstream stages must not be duplicated. | `us-epa-ap42-9-11-1`; `eu-jrc-fdm-bref-2019` |
| `val_route` | technology_route | Declared chemical or physical refining route must agree with recorded unit operations and aids; zero-use conditional rows require an explicit not-applicable reason. | `us-epa-ap42-9-11-1` |
| `val_mass_balance` | material_balance | The oil and total material balances must report inputs, outputs, stock changes and residuals; unexplained oil loss or an omitted major stream is an error requiring correction or documented investigation. | `us-epa-ap42-9-11-1`; `eu-jrc-fdm-bref-2019` |
| `val_allocation` | multifunctionality | Subdivision, system expansion or allocation choice must follow the declared hierarchy, apply consistently to all shared burdens, and disclose factors and sensitivity. | `eu-pef-2021` |
| `val_releases` | elementary_flows | Final data must replace aggregate release patterns with pollutant-specific elementary flows, compartments and measured or calculated amounts; wastewater sent off site must not also be reported as direct water release. | `eu-jrc-fdm-bref-2019` |
| `val_food_grade` | product_quality | A food-grade claim requires applicable specification and test evidence. If Codex CXS 210-1999 is declared, refined-oil acid value must not exceed 0.6 mg KOH/g oil and peroxide value must not exceed 10 milliequivalents active oxygen/kg oil, subject to stricter applicable rules. | `codex-cxs-210-1999` |
| `val_data_quality` | dataset_production | The dataset must disclose period, geography, technology, source coverage, calibration, missing data, uncertainty, proxy use and all remaining provisional estimates. | `eu-pef-2021`; `eu-jrc-fdm-bref-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground refinery-gate production dataset for bulk refined soya bean oil |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Refinery-gate inventories, product footprints and lifecycle models whose product grade, route, geography, period and allocation match the dataset |
| excluded_use | Crude-oil production, chemically modified oils, formulated or blended oils, biodiesel, retail packaged oil, or another refinery route without representativeness review |
| required_metadata | PCR id; product and process UUIDs; product grade and specification; route and unit operations; site and geography; period; technology; bulk or packaged state; upstream crude-oil dataset; allocation; cut-off; data owners and review status |
| required_quality_disclosure | Primary-data coverage; calibration; stock reconciliation; balance closure; missing-data treatment; proxy use; uncertainty; direct-release method; co-product or waste status; all reasoned estimates and replacements |
| update_trigger | Material change in feed or product specification, refining route, aids, energy system, treatment, co-product destination, allocation, regulation, Tiangong identity, or data period representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21612` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 21612, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-10 | Classification scope context and refined-soya-bean-oil identity |
| `codex-cxs-210-1999` | standard | Codex Alimentarius, CXS 210-1999 Standard for Named Vegetable Oils, 2015 text, https://www.fao.org/input/download/standards/336/CXS_210e_2015.pdf, retrieved 2026-08-10 | Soya bean oil definition, edible-grade applicability, quality characteristics and analytical evidence |
| `us-epa-ap42-9-11-1` | official_guidance | US EPA, AP-42 Section 9.11.1 Vegetable Oil Processing, Supplement A, November 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf, retrieved 2026-08-10 | Crude-oil starting condition, refining process decomposition, residue and direct-release collection needs |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, EUR 29978 EN, JRC118627, DOI 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627, retrieved 2026-08-10 | Water, energy, emissions, treatment, monitoring and data-quality priorities for food and vegetable-oil processing |
| `eu-pef-2021` | method_factor | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint method, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279, retrieved 2026-08-10 | Reference-flow normalization, company-specific manufacturing data, allocation hierarchy and data-quality disclosure |
