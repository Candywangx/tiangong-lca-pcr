---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.beans-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Beans, frozen

## 1. Scope and Applicability

This PCR applies to single-component frozen bean products manufactured from clean, sound, succulent bean pods or immature bean seeds. It covers green beans, wax beans, lima beans, and comparable beans that are received fresh, prepared, blanched where required for product stability, rapidly frozen, packaged or placed in a declared bulk container, and held frozen to the processing-facility gate.

The foreground boundary begins with fresh beans received at the processing facility. Upstream cultivation and delivery of fresh beans are represented by linked supplier datasets. The foreground includes receiving, trimming or shelling when applicable, washing, sorting, cutting when applicable, blanching, cooling, draining or dewatering, quick freezing, packaging, and frozen storage through dispatch from the facility gate.

This PCR excludes dried beans, canned or otherwise shelf-stable beans, peas, mixed vegetables, seasoned prepared dishes, bean purées, and products for which beans are not the reference product. Distribution after the declared facility gate, retail storage, cooking, consumption, and end-of-life are outside the default boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.beans-frozen |
| classification_refs | CPC 3.0 `21311` Beans, frozen (mapping context only) |
| covered_products | single-component frozen green beans, wax beans, lima beans, and comparable frozen bean pods or immature bean seeds |
| excluded_products | dried beans; canned beans; peas; mixed vegetables; seasoned meals; bean purées; products in which beans are not the reference product |
| representative_product | unseasoned frozen beans, packaged or in a declared bulk container, at the processing-facility gate |
| production_route | fresh-bean receiving and preparation; blanching and cooling; quick freezing; packaging and frozen storage |
| market_state | frozen product at the processing-facility gate, with thermal-centre temperature at or below -18 °C subject to declared permitted tolerances |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Market-ready, single-component frozen beans supplied at the processing-facility gate |
| How much | 1 kg net frozen bean product, excluding packaging |
| How well | Conforming to the declared species or commercial type, edible part, style, additives, quality specification, and cold-chain condition; thermal-centre temperature reaches -18 °C or colder after stabilization |
| How long or cycle | From receipt of fresh beans through the declared in-plant frozen-storage duration and dispatch at the facility gate |
| reference_flow_link | `reference_frozen_beans` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Beans, frozen `d6a6b877-75b8-48c5-b219-857c70de3e3d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | bean species or commercial type; pod or seed form; cut style and size grade; blanching status; additives or seasoning status; freezing technology; package or bulk-container format; net mass basis; facility-gate geography; production period; frozen-storage duration; product-temperature monitoring basis |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference frozen bean product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net edible frozen bean mass at the facility gate; exclude primary, secondary, and transport packaging from the reference amount. |
| `stage_mass_balance` | fresh beans, intermediates, product, residues, and wastewater solids | Mass | kg | Measure wet mass at the stated process condition and reconcile stage inputs, outputs, retained water, removed water, and inventory change on one declared wet-mass basis. |
| `water_accounting` | process and cooling water | Mass or volume with density | kg or m3 | Record gross intake, recycled circulation, net make-up, and discharge separately; convert volume to mass using measured temperature-dependent density or a disclosed conversion assumption. |
| `energy_accounting` | electricity, steam, heat, and fuels | Energy or carrier-specific property | kWh, MJ, or kg | Preserve energy carriers separately, meter purchased electricity and heat, and document lower or higher heating value whenever fuel mass or volume is converted to energy. |
| `temperature_condition` | product thermal centre and cold storage | Temperature | °C | Record the method, location, frequency, calibration status, and excursion handling used to demonstrate the declared frozen condition; do not infer product temperature solely from a freezer set point. |
| `packaging_separation` | packaging materials | Mass | kg | Report packaging by material and distinguish packaging applied to the reference product from reusable transport items and packaging waste. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | fresh beans accepted at the processing-facility receiving gate |
| starting_condition_role | foreground product input whose upstream cultivation and delivery are represented by linked provider datasets |
| product_classification_scope | single-component frozen bean products corresponding to CPC 3.0 `21311` as mapping context, without making CPC the canonical PCR identity |
| recursive_input_rule | if frozen beans in the same product category enter for repacking or further processing, record them as a declared starting-condition product input and link a separate upstream frozen-bean dataset rather than recursively reproducing this foreground system |
| upstream_dataset_requirement | link geographically and technologically representative datasets for fresh beans, packaging materials, electricity, thermal energy or fuels, water supply, refrigerant production, and any external waste or wastewater treatment |
| disclosure | declare bean species or commercial type, edible part, incoming condition, preparation steps, blanching status, freezing technology, additives, packaging format, net mass basis, facility location, production period, storage duration, product-temperature evidence, and all deviations from the default gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | default foreground system | Include fresh-bean receiving, trimming or shelling where applicable, washing, sorting, cutting where applicable, blanching and cooling, draining or dewatering, quick freezing, packaging or bulk containment, in-plant frozen storage, product losses, wastewater, and direct site emissions through dispatch from the facility gate. | `codex-cxs-320-2015`; `usda-frozen-green-wax-beans-1996`; `usda-frozen-lima-beans-2013` |
| `sb_cold_chain_condition` | freezing and in-plant cold chain | Demonstrate that quick freezing passes the maximum-crystallization range rapidly, reaches -18 °C or colder at the product thermal centre after stabilization, and maintains the product at -18 °C or colder subject to declared permitted tolerances; retain temperature-monitoring and excursion records. | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `sb_upstream_links` | supplies entering the foreground | Keep cultivation, inbound transport, packaging production, energy supply, water supply, and refrigerant production outside the foreground only when linked provider datasets represent them; disclose missing or proxy providers. | `iso-14044-2006` |
| `sb_waste_and_emissions` | residues, wastewater, packaging waste, refrigerants, and combustion | Record every material waste output and direct elementary emission that crosses the foreground boundary. Link external treatment datasets and avoid counting the same treatment burden in both the foreground and a provider dataset. | `iso-14044-2006` |
| `sb_downstream_exclusion` | activities after facility dispatch | Exclude downstream distribution, retail storage, cooking, consumption, and end-of-life from the default system; include them only in an explicitly extended study and report them separately from this foreground result. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_preparation` | Receiving and preparation | `required` |  | foreground preparation | kg accepted fresh beans |
| `blanching_and_cooling` | Blanching and cooling | `required` |  | foreground stabilization | kg prepared beans entering blanching |
| `quick_freezing` | Quick freezing | `required` |  | foreground freezing | kg cooled blanched beans entering freezer |
| `packaging_and_frozen_storage` | Packaging and frozen storage | `required` |  | foreground finishing and facility-gate storage | kg net conforming frozen beans dispatched |

### Process: Receiving and preparation (`receiving_and_preparation`)

#### Inputs

##### Product flows

###### Accepted fresh beans (`fresh_beans_input`)

Record the weighed mass of accepted fresh beans entering preparation, including the declared species, pod or seed form, maturity, supplier, and receiving lot.

- Selected flow: Fresh beans matching the declared species and edible form
- Flow property / unit: Mass / kg
- Amount rule: measured accepted fresh-bean mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen bean product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources:
- Range: Provisional fresh-bean input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.00
  - Upper: 1.60
  - Unit: kg
  - Basis: per 1 kg net frozen bean product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water_input`)

Record net make-up water used for washing, fluming, sorting, and equipment rinsing; separately disclose recycled circulation.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered net make-up water allocated to frozen-bean production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh beans
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources:
- Range: Provisional preparation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg accepted fresh beans
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity_input`)

Record metered or defensibly submeter-allocated electricity for conveying, sorting, cutting, pumps, and preparation equipment.

- Selected flow: Electricity supply matching facility geography and voltage level
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity allocated to receiving and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh beans
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources:
- Range: Provisional preparation-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.20
  - Unit: kWh
  - Basis: per 1 kg accepted fresh beans
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared beans (`prepared_beans_output`)

Calculate prepared bean mass after trimming, shelling, sorting, washing, and cutting as applicable, before blanching.

- Selected flow: Prepared beans, intermediate product
- Flow property / unit: Mass / kg
- Amount rule: measured prepared-bean mass or mass balance from accepted input less segregated residues and losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted fresh beans
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources:
- Range: Provisional preparation-yield screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.65
  - Upper: 1.05
  - Unit: kg
  - Basis: per 1 kg accepted fresh beans
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Trimmings and rejected beans (`preparation_residues_output`)

Record stems, strings, pods or shells where removed, defective beans, foreign vegetable matter, and other segregated preparation residues by destination.

- Selected flow: Bean preparation residues
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by treatment or recovery destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted fresh beans
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources:
- Range: Provisional preparation-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.35
  - Unit: kg
  - Basis: per 1 kg accepted fresh beans
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater_output`)

Record wastewater leaving preparation, net of measured internal recycling, and identify whether it is sent to on-site or external treatment.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or calculated net water balance for preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh beans
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources:
- Range: Provisional preparation-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg accepted fresh beans
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No elementary flow is prescribed by default. Record direct releases only when measured or calculated from site-specific records and ensure that they are not already represented in wastewater or energy-provider datasets.

### Process: Blanching and cooling (`blanching_and_cooling`)

#### Inputs

##### Product flows

###### Prepared beans entering blanching (`prepared_beans_input`)

Record the prepared-bean mass transferred from preparation to the blancher.

- Selected flow: Prepared beans, intermediate product
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg blanched and cooled beans
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blanching_cooling_records`
- Sources: `codex-cxs-320-2015`
- Range: Provisional blanching-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.90
  - Upper: 1.25
  - Unit: kg
  - Basis: per 1 kg blanched and cooled beans
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Blanching thermal energy (`blanching_thermal_energy_input`)

Record purchased steam or heat by meter; if fuel is combusted on site, record the fuel and direct emissions instead of duplicating purchased heat.

- Selected flow: Steam, heat, or fuel matching the declared blanching technology
- Flow property / unit: Energy / MJ
- Amount rule: metered thermal energy or carrier quantity converted using a disclosed heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg blanched and cooled beans
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blanching_cooling_records`
- Sources: `codex-cxs-320-2015`
- Range: Provisional blanching-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 2.5
  - Unit: MJ
  - Basis: per 1 kg blanched and cooled beans
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Blanching and cooling water (`blanching_cooling_water_input`)

Record net make-up water for blanching and cooling, separately from internally recirculated water.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered net make-up water allocated to blanching and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg blanched and cooled beans
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blanching_cooling_records`
- Sources:
- Range: Provisional blanching-and-cooling-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 15
  - Unit: kg
  - Basis: per 1 kg blanched and cooled beans
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Blanched and cooled beans (`blanched_cooled_beans_output`)

Record the mass after adequate blanching, cooling, and draining or dewatering and before quick freezing.

- Selected flow: Blanched and cooled beans, intermediate product
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass after cooling and draining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared beans entering blanching
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blanching_cooling_records`
- Sources: `codex-cxs-320-2015`
- Range: Provisional blanching-yield screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.80
  - Upper: 1.15
  - Unit: kg
  - Basis: per 1 kg prepared beans entering blanching
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Blanching and cooling wastewater (`blanching_cooling_wastewater_output`)

Record net wastewater discharge, including controlled overflow and cleaning discharge allocated to the process, by treatment destination.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or calculated water balance after internal recycling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg blanched and cooled beans
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_blanching_cooling_records`
- Sources:
- Range: Provisional blanching-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg
  - Basis: per 1 kg blanched and cooled beans
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record direct combustion emissions only when fuel is burned within this process boundary; calculate them from measured fuel use and a declared factor source.

### Process: Quick freezing (`quick_freezing`)

#### Inputs

##### Product flows

###### Blanched beans entering freezer (`blanched_beans_input`)

Record the cooled, drained bean mass entering the quick-freezing equipment.

- Selected flow: Blanched and cooled beans, intermediate product
- Flow property / unit: Mass / kg
- Amount rule: measured freezer-feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg bulk frozen beans leaving the freezer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quick_freezing_records`
- Sources:
- Range: Provisional freezer-feed screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.95
  - Upper: 1.15
  - Unit: kg
  - Basis: per 1 kg bulk frozen beans leaving the freezer
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezing electricity (`freezing_electricity_input`)

Record electricity for freezing equipment and process-attributable refrigeration auxiliaries; prevent overlap with frozen-storage electricity.

- Selected flow: Electricity supply matching facility geography and voltage level
- Flow property / unit: Energy / kWh
- Amount rule: metered or submeter-allocated electricity for quick freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg bulk frozen beans leaving the freezer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quick_freezing_records`
- Sources: `codex-cxs-320-2015`; `codex-cxc-8-1976`
- Range: Provisional freezing-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 1.0
  - Unit: kWh
  - Basis: per 1 kg bulk frozen beans leaving the freezer
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up (`refrigerant_makeup_input`)

Calculate process-attributable refrigerant make-up from system-level purchase, recovery, charge, and inventory records using an explicit allocation basis.

- Selected flow: Refrigerant matching the installed system
- Flow property / unit: Mass / kg
- Amount rule: allocated refrigerant inventory loss over the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen product handled by the connected refrigeration system
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory_records`
- Sources:
- Range: Provisional refrigerant-make-up screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.005
  - Unit: kg
  - Basis: per 1 kg frozen product handled
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Bulk frozen beans (`bulk_frozen_beans_output`)

Record conforming frozen bean mass after the product thermal centre reaches the declared freezing condition and before final packaging or storage allocation.

- Selected flow: Bulk frozen beans, intermediate product
- Flow property / unit: Mass / kg
- Amount rule: measured conforming freezer output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg blanched beans entering the freezer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quick_freezing_records`
- Sources: `codex-cxs-320-2015`; `codex-cxc-8-1976`
- Range: Provisional freezing-yield screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.85
  - Upper: 1.05
  - Unit: kg
  - Basis: per 1 kg blanched beans entering the freezer
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant emitted to air (`refrigerant_to_air_output`)

Report the identity and allocated mass of unrecovered refrigerant loss as a direct elementary emission; report zero only with complete charge and recovery reconciliation.

- Selected flow: Refrigerant emission to air matching the installed substance
- Flow property / unit: Mass / kg
- Amount rule: calculated unrecovered refrigerant loss allocated to frozen-bean throughput
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen product handled by the connected refrigeration system
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory_records`
- Sources:
- Range: Provisional refrigerant-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.005
  - Unit: kg
  - Basis: per 1 kg frozen product handled
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging and frozen storage (`packaging_and_frozen_storage`)

#### Inputs

##### Product flows

###### Bulk frozen beans entering finishing (`bulk_frozen_beans_input`)

Record the bulk frozen bean mass transferred into packaging and facility-gate frozen storage.

- Selected flow: Bulk frozen beans, intermediate product
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen bean product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_records`
- Sources:
- Range: Provisional finishing-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.00
  - Upper: 1.20
  - Unit: kg
  - Basis: per 1 kg net conforming frozen bean product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials_input`)

Record primary and allocated secondary packaging separately by material and exclude reusable transport items unless losses occur in the reporting period.

- Selected flow: Packaging material by declared polymer, paper, board, metal, or other material
- Flow property / unit: Mass / kg
- Amount rule: purchased packaging issued to conforming product less documented returns and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen bean product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_records`
- Sources:
- Range: Provisional packaging-mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.002
  - Upper: 0.15
  - Unit: kg
  - Basis: per 1 kg net conforming frozen bean product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen-storage electricity (`frozen_storage_electricity_input`)

Record electricity allocated to in-plant frozen storage from completion of freezing until dispatch, using the declared storage duration and excluding downstream distribution.

- Selected flow: Electricity supply matching facility geography and voltage level
- Flow property / unit: Energy / kWh
- Amount rule: metered storage electricity allocated by occupied capacity-time or measured product throughput and declared duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen bean product for the declared in-plant storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_records`
- Sources: `codex-cxc-8-1976`
- Range: Provisional frozen-storage-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.30
  - Unit: kWh per month
  - Basis: per 1 kg frozen product per month of in-plant storage
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Reference frozen beans (`reference_frozen_beans`)

This is the declared reference product at the processing-facility gate after normalization to net product mass.

- Selected flow: Beans, frozen `d6a6b877-75b8-48c5-b219-857c70de3e3d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net frozen beans excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference frozen bean product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `mass-balance-identity`
- Range: Exact reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Packaging waste (`packaging_waste_output`)

Record damaged, trimmed, or unused packaging leaving the foreground system by material and treatment destination.

- Selected flow: Packaging waste by material
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste or calculated material balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen bean product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_records`
- Sources:
- Range: Provisional packaging-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: per 1 kg net conforming frozen bean product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nonconforming frozen beans (`nonconforming_frozen_beans_output`)

Record off-specification or damaged frozen beans by recovery, rework, food use, feed use, digestion, composting, or disposal destination; do not net them against the reference product.

- Selected flow: Nonconforming frozen bean product
- Flow property / unit: Mass / kg
- Amount rule: measured nonconforming mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen bean product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_records`
- Sources:
- Range: Provisional nonconforming-product screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg
  - Basis: per 1 kg net conforming frozen bean product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record direct refrigerant emissions from frozen storage under `refrigerant_to_air_output` using the same system-level refrigerant protocol, allocating once across freezing and storage without double counting.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_avoid_allocation` | shared preparation, freezing, storage, and utilities | Prefer subdivision, direct metering, batch records, or physically meaningful process separation so that burdens are assigned without allocation. | `iso-14044-2006` |
| `al_internal_recycling` | rework, recirculated water, recovered refrigerant, and internally reused intermediates | Treat internal loops as internal exchanges; record make-up inputs, purge or loss outputs, and the energy needed for recovery, and do not credit the same recovered material twice. | `mass-balance-identity` |
| `al_joint_products` | marketable co-products produced with frozen beans | If allocation cannot be avoided, use a documented physical relationship that reflects causality. If no defensible physical relationship exists, use economic allocation based on a representative twelve-month price period and disclose price sources, volatility, and a physical-allocation sensitivity result. | `iso-14044-2006` |
| `al_waste_treatment` | residues and nonconforming product sent to treatment or recovery | Record the waste flow at the facility gate and apply the chosen treatment or recovery convention consistently; disclose any avoided-product credit and prevent overlap with treatment-provider datasets. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_preparation_records` | `receiving_and_preparation` | fresh beans, prepared beans, water, electricity, residues, and wastewater | receiving, production, meter, and waste records | lot id; species/type; supplier; incoming mass; accepted mass; prepared mass; water intake; recycled water; discharge; electricity; residue mass; destination; timestamps | calibrated scales, calibrated water and electricity meters, batch records, and waste transfer records | kg; m3; kWh | per lot or batch with monthly meter reconciliation | representative production period, normally at least 12 consecutive months or the full seasonal campaign | all lines and shifts producing the declared product at the facility | sum attributable records, reconcile inventory change, allocate shared meters by documented causal driver, then normalize to net reference output | calibration certificates, meter identifiers, lot traceability, reconciliation, and signed waste records |
| `cp_blanching_cooling_records` | `blanching_and_cooling` | bean transfer, thermal energy, water, wastewater, time, and temperature | batch, meter, boiler or heat-supply, and temperature records | batch id; input/output mass; blanch time; blanch temperature; cooling condition; steam/heat/fuel; make-up water; recycled water; discharge; timestamps | calibrated scales and temperature sensors, energy and water meters, and batch-control export | kg; °C; s or min; MJ; m3 | per batch for mass and temperature; continuous or shift meter readings with monthly reconciliation | representative production period, normally at least 12 consecutive months or the full seasonal campaign | all relevant blanchers, coolers, lines, and shifts | reconcile batch mass and utility meters; allocate shared utilities by measured run time, throughput, or heat duty; normalize to stage output and reference flow | sensor and meter calibration, batch completeness, utility reconciliation, and deviation records |
| `cp_quick_freezing_records` | `quick_freezing` | freezer feed, freezer output, electricity, and product temperature | batch, meter, freezer-control, and temperature records | batch id; feed mass; conforming output mass; electricity; freezer technology; air set point; thermal-centre measurement; stabilization time; excursion record | calibrated scales, submeter or defensible meter allocation, and calibrated product-temperature probe or validated equivalent method | kg; kWh; °C; min | per batch for mass and thermal-centre verification; continuous or shift electricity data | representative production period, normally at least 12 consecutive months or the full seasonal campaign | every freezer and shift producing the declared product | reconcile feed and output mass; allocate freezer electricity by metered line use or throughput-time; normalize to conforming output | scale and temperature-probe calibration, meter coverage, control-system export, and excursion disposition |
| `cp_refrigerant_inventory_records` | `quick_freezing` | refrigerant make-up and emission | refrigeration-system inventory and maintenance records | refrigerant identity; opening charge; additions; recovery; transfer; closing charge; service date; leak event; connected equipment; frozen throughput | annual or campaign mass-balance reconciliation supported by purchase, recovery, and maintenance records | kg | each service event with annual or campaign reconciliation | same reporting period as production data | all refrigeration systems serving freezing and included frozen storage | unrecovered loss = opening charge + additions - recovery - transfers - closing charge; allocate once by metered refrigeration duty or documented throughput-time | invoices, service logs, recovery records, charge inventory, and reconciliation sign-off |
| `cp_packaging_storage_records` | `packaging_and_frozen_storage` | bulk frozen input, packaging, storage electricity, finished product, and wastes | packaging issue, production, warehouse, dispatch, meter, and waste records | batch id; product input/output mass; packaging material and mass; packaging inventory; storage entry/exit; storage duration; air and product temperatures; electricity; waste mass; destination | calibrated scales, packaging inventory records, warehouse-management timestamps, calibrated temperature monitoring, electricity meters, and waste records | kg; kWh; °C; day | per batch or dispatch; continuous temperature; monthly electricity reconciliation | representative production period, normally at least 12 consecutive months or the full seasonal campaign | all packaging lines and frozen stores serving the declared product | reconcile product and packaging balances; allocate storage electricity by occupied capacity-time or measured refrigeration duty; normalize to net dispatched product | scale and sensor calibration, inventory reconciliation, dispatch traceability, temperature logs, and excursion disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_reference_normalization` | all foreground exchanges | normalized amount = attributable exchange amount / net conforming frozen beans dispatched, then multiply by 1 kg reference flow | attributable exchange amount; net conforming dispatched mass | exchange amount per 1 kg reference frozen beans | `mass-balance-identity` |
| `cr_stage_mass_balance` | each process stage | mass-balance residual = total mass inputs - product outputs - waste outputs - measured water removal or addition - inventory change; investigate and disclose material residuals rather than forcing them to zero | calibrated mass and water records; inventory change | stage yield, losses, and residual | `mass-balance-identity` |
| `cr_shared_utility_allocation` | shared electricity, heat, water, and cold storage | allocate shared totals using the most causal measured driver available, in order: submetered use, equipment run-time multiplied by measured load, mass-throughput time, or occupied capacity-time; disclose the chosen driver | shared meter total; driver measurements; production output | attributable utility amount | `iso-14044-2006` |
| `cr_refrigerant_loss` | connected refrigeration systems | unrecovered refrigerant loss = opening charge + additions - recovery - transfers - closing charge; allocate the result once across products served by the system | charge inventory; purchases; recovery; transfers; throughput or refrigeration-duty driver | kg refrigerant emitted per reference flow | `mass-balance-identity` |
| `cr_storage_duration` | frozen-storage electricity | storage allocation driver = occupied product mass × storage duration; allocate common storage electricity by the declared driver unless direct metering is available | warehouse entry/exit timestamps; occupied mass; electricity meter | kWh storage electricity per reference flow and declared duration | `codex-cxc-8-1976` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | product and reference flow | Trace every reported lot to species or commercial type, pod or seed form, cut style, additives, package format, facility, production period, and the exact Tiangong reference-flow UUID. | lot genealogy, product specification, label, and dataset metadata |
| `dq_measurement_control` | mass, utilities, temperature, and refrigerant | Use identified instruments within calibration; document estimation for gaps and prohibit an undocumented freezer set point from replacing product thermal-centre evidence. | calibration certificates, meter coverage map, gap log, and thermal-centre records |
| `dq_temporal_representativeness` | foreground activity data | Cover at least 12 consecutive months where year-round operation exists, or the complete declared seasonal campaign; disclose abnormal shutdowns, crop-season effects, and storage-duration distribution. | dated production, meter, warehouse, and dispatch records |
| `dq_completeness` | foreground inventory | Reconcile fresh-bean input, conforming output, residues, wastewater, packaging, energy, and refrigerant records; explain every excluded process and every material balance residual. | reconciliation workbook, exclusion register, and signed review |
| `dq_provider_alignment` | upstream and treatment datasets | Match geography, technology, time, bean production route, electricity mix, packaging material, water supply, refrigerant, and treatment route where material; disclose proxies and sensitivity. | provider-dataset metadata and proxy register |
| `dq_cold_chain` | quick freezing and in-plant storage | Retain continuous air-temperature monitoring and periodic or validated equivalent product-temperature evidence, with calibration and documented disposition of excursions. | temperature logs, probe calibration, alarm history, and corrective-action records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_identity` | reference flow | The reference product UUID must be `d6a6b877-75b8-48c5-b219-857c70de3e3d`, the flow property UUID must be `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit-group UUID must be `93a60a57-a4c8-11da-a746-0800200c9a66`, and the normalized reference amount must equal 1 kg net frozen beans. |  |
| `vr_scope_qualifiers` | product identity | Reject the data package as incomplete when species or commercial type, pod or seed form, cut style, blanching status, additives, freezing technology, packaging format, facility gate, production period, storage duration, or product-temperature basis is missing. | `codex-cxs-320-2015`; `usda-frozen-green-wax-beans-1996`; `usda-frozen-lima-beans-2013` |
| `vr_process_completeness` | process inventory | Require all four declared foreground processes and require explicit zero, not-applicable, or exclusion evidence for every prescribed flow that does not occur. | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `vr_temperature_condition` | quick freezing and in-plant cold chain | Require evidence that the thermal centre reached -18 °C or colder after stabilization and that frozen storage was maintained at -18 °C or colder subject to declared permitted tolerances; flag undocumented excursions as nonconforming. | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `vr_mass_balance` | each process and total foreground | Require documented input-output reconciliation for each stage and the total foreground; fail validation when a material residual is neither corrected nor explained. | `mass-balance-identity` |
| `vr_allocation_disclosure` | shared utilities and co-products | Require the allocation hierarchy, driver, allocation factors, co-product treatment, price period when used, and sensitivity result to be present and internally consistent. | `iso-14044-2006` |
| `vr_no_double_counting` | utilities, refrigerant, internal recycling, and waste treatment | Ensure that purchased heat and on-site fuel, refrigerant make-up and direct loss, internal recycling and make-up, and foreground treatment and provider treatment are not counted twice. | `mass-balance-identity`; `iso-14044-2006` |
| `vr_data_coverage` | foreground records | Require declared temporal, site, line, and shift coverage plus calibration evidence and a documented treatment for missing records before the dataset is used as reviewed background data. | `codex-cxc-8-1976` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process foreground dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and data review |
| allowed_use | frozen-bean production models matching the declared product form, preparation route, freezing technology, facility gate, geography, period, packaging, and storage duration |
| excluded_use | fresh, dried, canned, mixed, seasoned, or cooked bean products; cultivation-only datasets; downstream cold-chain or consumer-use models without an explicitly extended boundary |
| required_metadata | canonical PCR id; Tiangong reference-flow UUID; species or commercial type; pod or seed form; cut style; blanching status; additives; freezing technology; package format; net mass basis; facility; geography; production period; storage duration; temperature evidence; allocation method; provider dataset references |
| required_quality_disclosure | foreground-record coverage; instrument calibration; mass and water balance; energy-meter allocation; refrigerant reconciliation; temperature excursions; product losses; proxy providers; reasoned-estimate screening results; data-quality review status |
| update_trigger | material change in bean scope, preparation or blanching route, freezer or refrigerant technology, packaging, storage duration, facility geography, energy supply, allocation, data coverage, quality specification, or controlling external standard |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-320-2015` | standard | FAO and WHO, CXS 320-2015, Standard for Quick-Frozen Vegetables, 2022 revision, https://workspace.fao.org/sites/codex/Standards/CXS%20320-2015/CXS_320e.pdf (retrieved 2026-08-11) | product definition, preparation and blanching process decomposition, quick-freezing condition, green and wax bean scope and presentation |
| `codex-cxc-8-1976` | official_guidance | FAO and WHO, CXC 8-1976, Code of Practice for the Processing and Handling of Quick Frozen Foods, 2008 revision, https://workspace.fao.org/sites/codex/Standards/CXC%208-1976/CXC_008e.pdf (retrieved 2026-08-11) | cold-chain boundary, -18 °C condition, temperature monitoring, calibration, storage, and handling rules |
| `usda-frozen-green-wax-beans-1996` | standard | USDA Agricultural Marketing Service, United States Standards for Grades of Frozen Green Beans and Frozen Wax Beans, effective 1996-08-19, https://www.ams.usda.gov/sites/default/files/media/Frozen_Green_and_Wax_Bean_Standard%5B1%5D.pdf (retrieved 2026-08-11) | green and wax bean product definition, preparation sequence, styles, quality and lot-inspection context |
| `usda-frozen-lima-beans-2013` | standard | USDA Agricultural Marketing Service, United States Standards for Grades of Frozen Lima Beans, 2013-08-29, https://www.ams.usda.gov/sites/default/files/media/Frozen_Lima_Bean_Standard%5B1%5D.pdf (retrieved 2026-08-11) | lima bean product definition, shelling, washing, blanching, draining, freezing, and quality context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed 2022, https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | system-boundary consistency, allocation hierarchy, provider linkage, reporting, and sensitivity requirements |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to declared wet-mass process conditions and measured inventory changes | reference normalization, process mass-balance calculations, internal-loop accounting, and QA reconciliation |
