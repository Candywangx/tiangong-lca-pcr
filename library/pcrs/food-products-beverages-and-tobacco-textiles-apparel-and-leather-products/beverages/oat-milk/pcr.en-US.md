---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.oat-milk
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Oat milk

## 1. Scope and Applicability

This PCR applies to liquid plant beverages manufactured predominantly from oats (*Avena* spp.) and released as oat milk or oat drink. It covers plain and formulated products, including ambient-stable and refrigerated products, when the declared reference product is a finished oat beverage. The foreground production boundary includes ingredient receiving and preparation, aqueous extraction or slurry preparation, optional enzymatic treatment, separation, formulation, heat treatment, homogenisation, filling, cleaning, and factory release as applicable to the declared route.

Products made predominantly from another plant source, dairy milk and oat blends, fermented spoonable products, powdered beverage concentrates, infant formula, and food preparations in which oat beverage is only an ingredient are excluded. Agricultural oat production, production of purchased ingredients and packaging, distribution, retail, consumer use, and end-of-life are represented by linked upstream or downstream datasets when required by the study, rather than invented as foreground plant records.

This candidate PCR provides data-production rules. Its provisional screening ranges are not substitute data and shall be replaced by representative facility or supplier records for publication-critical modelling.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.oat-milk |
| classification_refs | CPC 3.0: 24425 Oat milk |
| covered_products | Finished liquid beverages manufactured predominantly from oats, including plain, fortified, flavoured, ambient-stable, and refrigerated oat beverages |
| excluded_products | Dairy-containing milk blends; beverages predominantly made from other plants; fermented spoonable oat products; powdered concentrates; infant formula; downstream foods using oat beverage as an ingredient |
| representative_product | Packaged, heat-treated oat milk released by the manufacturing facility |
| production_route | Oat receiving or oat-ingredient preparation; water addition and extraction or slurry preparation; optional enzymatic conversion; separation; formulation; heat treatment; homogenisation; filling; cleaning; release |
| market_state | Finished liquid beverage, packaged for ambient or refrigerated distribution as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished oat milk available as a liquid beverage or food ingredient |
| How much | 1 kg of packaged oat milk at the manufacturing facility gate |
| How well | Meets the declared recipe, oat content, fortification, sensory and microbiological release specifications, heat-treatment route, packaging format, and storage condition |
| How long or cycle | At factory release; shelf life and storage regime are declared qualifiers, not a service-duration conversion |
| reference_flow_link | One kilogram of conforming packaged oat milk is the quantitative reference for normalising all included foreground flows |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Oat milk `ad17fd2f-4977-4a51-b80b-f52061c153ec` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | oat share and oat ingredient form; recipe or product variant; solids or dry-matter basis where available; fortification and sweetener status; enzymatic treatment; heat-treatment route; homogenisation; packaging format and net fill; ambient or refrigerated storage; geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference oat milk and all normalised results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the net mass of conforming packaged product, excluding secondary and tertiary transport packaging; convert volume records using a measured or product-specific density and retain the density record. |
| `ingredient_mass_basis` | Oats, oat ingredients, additives, fortificants, oils, sweeteners, and processing aids | Mass | kg | Record received mass and declare wet, as-received, dry-matter, or active-substance basis where the distinction changes interpretation; do not mix bases without an explicit conversion. |
| `water_mass_equivalence` | Process and cleaning water | Mass or volume | kg or m3 | Preserve measured volume where collected; if converted to mass, use the measured operating density or a disclosed water-density convention and retain the conversion. |
| `energy_carrier_separation` | Electricity, thermal energy, and fuels | Energy | kWh, MJ, or carrier-specific mass/volume | Keep purchased electricity, recovered heat, steam, and individual fuels as separate records. Convert units explicitly and do not combine energy carriers before linking their upstream datasets. |
| `packaging_net_basis` | Primary packaging and closures | Mass and count | kg and item | Derive packaging mass from issued or purchased mass, or from counted units multiplied by verified component mass; distinguish product net mass from packaging mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased oats or oat ingredient, formulation materials, primary packaging, water, and utilities are received at the oat-milk manufacturing facility boundary |
| starting_condition_role | Foreground collection begins with facility-controlled receiving and processing; upstream agricultural and purchased-material burdens are linked through separate datasets |
| product_classification_scope | Finished oat beverages corresponding to CPC 3.0 code 24425, subject to the semantic inclusions and exclusions in this PCR |
| recursive_input_rule | If oat milk or an oat-milk intermediate within the same category enters the foreground system, record it once as a product input with its upstream dataset and declared processing stage; do not recursively recreate its production inside the receiving process |
| upstream_dataset_requirement | Link representative datasets for oats or oat ingredients, additives, fortificants, oils, sweeteners, packaging, water, electricity, fuels, heat, and externally treated wastes when included in the study boundary |
| disclosure | Declare the oat ingredient form and origin, foreground facility and period, recipe variant, included unit operations, co-product and waste status, allocation choice, packaging format, storage regime, excluded stages, and all upstream dataset substitutions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_minimum` | Facility foreground boundary | Include all facility-controlled operations from receipt of oat ingredients and other inputs through extraction or slurry preparation, formulation, heat treatment, filling, cleaning, and release when they occur for the declared product. | `eu-jrc-fdm-bref-2019`; `epd-international-pcr-2025-03` |
| `sb_upstream_links` | Complete cradle-to-gate model | Represent purchased oats, ingredients, packaging, and energy carriers with disclosed upstream datasets; do not treat their arrival at the plant as burden-free. | `eu-pef-2021-2279`; `epd-international-pcr-2025-03` |
| `sb_route_specificity` | Route-dependent operations | Include optional enzymatic treatment, dehulling or milling, chilled storage, aseptic treatment, and external treatment only when they occur or are required by the declared route; identify exclusions explicitly. | `eu-jrc-fdm-bref-2019` |
| `sb_downstream_scope` | Distribution, retail, use, and end-of-life | Exclude downstream stages from the default plant-gate foreground package; add them as explicit downstream scenarios when the study goal or applicable declaration programme requires them. | `eu-pef-2021-2279`; `epd-international-pcr-2025-03` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_oat_slurry` | Oat receiving and slurry preparation | required | Always included; combine receiving, cleaning, milling, soaking, and enzymatic steps only when records cannot be separated and disclose the aggregation | Foreground ingredient preparation and aqueous extraction feed preparation | kg slurry or prepared extract transferred to separation per production period |
| `separate_and_formulate` | Separation and formulation | required | Always included; separation may be integral to extraction but its yields and residue fate remain separately reported | Foreground solids separation and recipe formulation | kg formulated oat base transferred to final treatment |
| `treat_fill_release` | Heat treatment, homogenisation, filling, and release | required | Always included; declare pasteurised, UHT, aseptic, or other validated treatment route and the actual packaging format | Foreground final manufacture and quantitative reference production | kg conforming packaged oat milk released |
| `cleaning_and_utilities` | Cleaning-in-place and shared utilities | required | Include facility cleaning and shared utility consumption allocated to the represented product period; disclose any utility records embedded in other processes | Foreground hygiene and shared plant services | production period serving the represented oat-milk output |

### Process: Oat receiving and slurry preparation (`prepare_oat_slurry`)

#### Inputs

##### Product flows

###### Oat grain, flakes, flour, or concentrate (`oat_ingredient_input`)

Record the mass of the actual oat-derived ingredient entering the foreground process and declare its form, moisture or dry-matter basis, origin, and upstream dataset.

- Selected flow: Oat ingredient (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: mass received into the represented production period, net of documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_packaging`
- Range: Provisional oat-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.03
  - Upper: 0.50
  - Unit: kg oat ingredient/kg packaged oat milk
  - Basis: broad formulation and yield screen across dilute drinks and concentrated oat ingredients; replace with recipe and receiving records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water for slurry preparation (`slurry_water_input`)

Record water added to the product stream during soaking, grinding, extraction, enzyme treatment, or dilution. Keep cleaning water in `cleaning_and_utilities`.

- Selected flow: Process water (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or metered water delivered to product-contact preparation steps
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Range: Provisional product-contact water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 3.0
  - Unit: kg water/kg packaged oat milk
  - Basis: broad first-pass screen including water retained in product and preparation losses; replace with recipe and meter records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Enzymes and preparation aids (`preparation_aids_input`)

Record enzymes, pH-control agents, and other aids that are actually used; omit absent aids and declare whether they remain in product, leave with residues, or enter wastewater.

- Selected flow: Enzyme or processing aid, route-specific (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued quantity minus documented return, by product-contact preparation step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_packaging`

###### Preparation electricity (`preparation_electricity_input`)

Record metered or allocated electricity for receiving, conveying, milling, mixing, pumping, and enzyme-treatment controls.

- Selected flow: Electricity, supplied at facility (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a facility meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Range: Provisional preparation-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1.0
  - Unit: kWh/kg packaged oat milk
  - Basis: deliberately broad first-pass facility screen; replace with submeter or allocation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared oat slurry or extract (`prepared_oat_slurry_output`)

Record the transferred intermediate as a calculated internal product flow so that preparation yield and transfers reconcile with the next process.

- Selected flow: Prepared oat slurry or extract, internal intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or tank-volume change converted with product-specific density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production-period output from slurry preparation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_intermediate_yield`

##### Waste flows

###### Receiving and preparation rejects (`preparation_rejects_output`)

Record screenings, foreign material, spills, and rejected oat material leaving preparation as waste unless a documented product or co-product use applies.

- Selected flow: Organic preparation rejects (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured waste container mass or calculated difference supported by inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_and_wastewater`
- Range: Provisional preparation-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg oat ingredient received
  - Basis: broad first-pass reject fraction; replace with receiving and waste records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Separation and formulation (`separate_and_formulate`)

#### Inputs

##### Product flows

###### Prepared oat slurry or extract (`prepared_oat_slurry_input`)

Record the internal intermediate transferred from slurry preparation on the same mass and period basis.

- Selected flow: Prepared oat slurry or extract, internal intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: matched transfer from `prepared_oat_slurry_output`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production-period formulated oat-base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_intermediate_yield`

###### Formulation ingredients (`formulation_ingredients_input`)

Record oils, sweeteners, salt, flavours, stabilisers, minerals, vitamins, and other ingredients actually added to the recipe as separate supplier flows where material or environmentally relevant.

- Selected flow: Formulation ingredient, product-specific (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued quantity minus return for each ingredient and recipe variant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_packaging`

###### Separation and formulation electricity (`separation_electricity_input`)

Record electricity for screens, centrifuges, decanters, pumps, blending, cooling, and formulation controls.

- Selected flow: Electricity, supplied at facility (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a facility meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Range: Provisional separation-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1.0
  - Unit: kWh/kg packaged oat milk
  - Basis: deliberately broad first-pass facility screen; replace with submeter or allocation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formulated oat base (`formulated_oat_base_output`)

Record the formulated liquid transferred to final heat treatment on the same production-period mass basis.

- Selected flow: Formulated oat base, internal intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or tank-volume change converted with product-specific density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production-period output from formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_intermediate_yield`

###### Separated oat solids for beneficial use (`oat_solids_coproduct_output`)

Record separated oat solids as a product output only when the facility controls a documented beneficial use or sale and the material meets the receiving specification; otherwise record the material as waste.

- Selected flow: Separated oat solids (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass plus measured or representative dry-matter fraction for the declared period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_and_wastewater`
- Range: Provisional separated-solids screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg wet solids/kg packaged oat milk
  - Basis: deliberately broad wet-mass screen sensitive to oat input, extraction yield, and dewatering; replace with residue weighing and dry-matter tests
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Separated oat solids managed as waste (`oat_solids_waste_output`)

Use this row instead of `oat_solids_coproduct_output` when the separated material has no documented product destination or fails the receiving specification; link the actual treatment route.

- Selected flow: Oat solids waste (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and declared dry-matter fraction sent to each waste treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_and_wastewater`
- Range: Provisional oat-solids-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg wet solids/kg packaged oat milk
  - Basis: use only when solids are waste; replace with residue weighing and dry-matter tests
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Heat treatment, homogenisation, filling, and release (`treat_fill_release`)

#### Inputs

##### Product flows

###### Formulated oat base (`formulated_oat_base_input`)

Record the internal formulated base transferred from formulation and reconcile it to final product, losses, and stock change.

- Selected flow: Formulated oat base, internal intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: matched transfer from `formulated_oat_base_output`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production-period released oat milk
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_intermediate_yield`

###### Thermal energy for product treatment (`thermal_energy_input`)

Record steam, hot water, direct fuel, or other heat supplied for product treatment, including heat recovery as a separate disclosed credit or internal transfer rather than netting it invisibly.

- Selected flow: Thermal energy carrier, route-specific (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: metered carrier use or calculated heat use from measured carrier quantity and documented conversion efficiency
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Range: Provisional thermal-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: MJ/kg packaged oat milk
  - Basis: broad first-pass screen across pasteurisation, UHT, losses, and heat recovery; replace with meter and fuel records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Final-treatment and filling electricity (`final_electricity_input`)

Record electricity for homogenisation, pumping, cooling, sterilisation auxiliaries, filling, coding, conveying, and release controls.

- Selected flow: Electricity, supplied at facility (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a facility meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Range: Provisional final-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1.5
  - Unit: kWh/kg packaged oat milk
  - Basis: deliberately broad first-pass facility screen; replace with submeter or allocation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging and closures (`primary_packaging_input`)

Record each primary package, closure, label, seal, and directly product-associated component by material and actual mass. Secondary and tertiary packaging are separate flows when included by the study.

- Selected flow: Primary packaging component, material-specific (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued packaging mass or component count multiplied by verified component mass, net of returned stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_and_packaging`
- Range: Provisional primary-packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.30
  - Unit: kg packaging/kg packaged oat milk
  - Basis: broad first-pass screen across cartons, bottles, pouches, closures, and fill sizes; replace with bill-of-material and component-mass records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming packaged oat milk (`oat_milk_reference_output`)

Record only released product meeting the declared quality specification as the quantitative reference output.

- Selected flow: Oat milk `ad17fd2f-4977-4a51-b80b-f52061c153ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg reference output after normalising released net product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Off-spec product and filling losses (`offspec_product_waste_output`)

Record oat beverage that is not released, including start-up, changeover, filling, sampling, spill, and rejected-package contents, net of documented rework into the same represented product period.

- Selected flow: Off-spec oat beverage waste (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass plus package-content mass from rejected units, minus documented same-period rework
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_intermediate_yield`
- Range: Provisional product-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg/kg packaged oat milk
  - Basis: broad first-pass screen for start-up and reject losses; replace with production and rejection records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging scrap (`packaging_scrap_output`)

Record unused, damaged, trim, and rejected packaging by material and treatment route; do not include packaging that leaves with conforming product.

- Selected flow: Packaging scrap, material-specific (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass or issued mass minus packed-product packaging mass and returned stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_and_packaging`
- Range: Provisional packaging-scrap screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg scrap/kg packaging issued
  - Basis: broad first-pass packaging loss fraction; replace with stock and scrap records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning-in-place and shared utilities (`cleaning_and_utilities`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`cleaning_water_input`)

Record water used for cleaning-in-place, rinsing, sanitation, and product-contact cleaning separately from water incorporated into product.

- Selected flow: Process water (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered cleaning water or recipe-based cycle volume multiplied by verified cycle count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Range: Provisional cleaning-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kg water/kg packaged oat milk
  - Basis: broad first-pass screen across plant scale and cleaning regime; replace with meter or validated cycle records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sanitation chemicals (`cleaning_chemicals_input`)

Record formulated cleaning chemicals or active substances consistently, including concentration and dilution basis, and keep incompatible chemical types separate.

- Selected flow: Cleaning chemical, product-specific (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued formulated-product mass or calculated active mass from concentration and dosing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`

###### Shared utility energy (`shared_utility_energy_input`)

Record electricity and thermal energy for cleaning, compressed air, refrigeration, boilers, and other shared services not already assigned to production processes; retain carriers as separate inventory flows.

- Selected flow: Shared utility energy carrier (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh or MJ
- Amount rule: submetered use or documented allocation from shared facility meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Range: Provisional shared-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 5.0
  - Unit: MJ or kWh, carrier preserved/kg packaged oat milk
  - Basis: deliberately broad first-pass screen; replace with submeter and allocation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Process and cleaning wastewater (`wastewater_output`)

Record wastewater leaving the facility or entering on-site treatment, including the measured quantity and route; separately record material pollution indicators when measured and required by the study.

- Selected flow: Wastewater, route-specific (Tiangong UUID unresolved)
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: effluent meter reading or water-balance calculation, separated by treatment route where possible
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_and_wastewater`
- Range: Provisional wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12
  - Unit: kg wastewater/kg packaged oat milk
  - Basis: broad first-pass screen covering process loss and cleaning water; replace with effluent meter or water-balance records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refrigerant emissions (`refrigerant_emissions_output`)

Record direct refrigerant losses to air when refrigeration or cooling equipment is within the foreground boundary. Keep the refrigerant substance and replenishment basis explicit.

- Selected flow: Refrigerant emission to air, substance-specific (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: annual or campaign refrigerant additions plus documented losses allocated to the represented production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged oat milk released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_avoid_first` | Multi-output and shared processes | Avoid allocation first by separately metering or subdividing oat-milk operations, recipes, packaging lines, cleaning cycles, and utilities whenever the records support it. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `al_residue_status` | Separated oat solids | Classify separated solids as product/co-product only when a documented beneficial destination and receiving specification exist; otherwise model them as waste with the actual treatment route. Do not record the same mass in both rows. | `iso-14044-2006`; `mass-balance-identity` |
| `al_physical_basis` | Unavoidable co-product allocation | When subdivision cannot resolve shared burdens and the applicable study or programme does not prescribe another method, use a documented physical relationship that reflects the process, such as dry-matter mass for oat milk and separated solids. Record wet mass, dry-matter measurements, formula, and allocation fractions; fractions shall sum to one. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `al_economic_exception` | Co-products lacking a defensible physical relationship | Use economic allocation only when a physical relationship is not defensible or an applicable programme requires it. Use a representative price period, identify price basis and currency, disclose volatility, and test sensitivity. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `al_recycling_substitution` | Avoided-product or substitution claims | Do not apply substitution or avoided-burden credit unless required by the declared study method. Identify the substituted function, dataset, displacement ratio, and sensitivity separately from the foreground inventory. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials_and_packaging` | `prepare_oat_slurry`; `separate_and_formulate`; `treat_fill_release` | Oat ingredients, formulation materials, processing aids, and packaging | receiving, issue, return, recipe, bill-of-material, and stock records | material id; supplier; lot; received mass; issued mass; returned mass; moisture or concentration; package count; component mass; recipe variant | calibrated receiving or line scales, inventory system, supplier certificate, and verified bill of material | kg; item; mass fraction | each delivery and production issue; aggregate monthly | continuous 12 months or a declared representative campaign | representative facility and declared product variants | reconcile opening stock + receipts - closing stock - returns to issued or consumed mass; normalise by released net product mass | calibration records; stock reconciliation; supplier specifications; approved recipe and bill of material |
| `cp_water_and_energy` | all processes | Process water, electricity, heat, fuel, refrigeration, and shared utilities | meter, submeter, invoice, fuel receipt, and operating-hour records | meter id; opening and closing reading; unit; carrier; process or line; operating period; production period; allocation driver; heat-recovery transfer | calibrated meter or submeter preferred; otherwise documented engineering allocation from facility totals | kg; m3; kWh; MJ; carrier-specific unit | continuous or each batch where available; aggregate monthly | continuous 12 months or a declared representative campaign | represented production lines plus disclosed shared services | subtract documented non-production use and double-counted submeters; allocate shared totals using a causal driver; preserve carrier identity | meter calibration or verification; invoice reconciliation; allocation worksheet; operating log |
| `cp_product_and_intermediate_yield` | `prepare_oat_slurry`; `separate_and_formulate`; `treat_fill_release` | Intermediate transfers, final product, rework, rejects, and stock change | tank, flowmeter, filling-counter, weighbridge, release, rejection, and inventory records | batch id; start and end tank mass or volume; density; transfer mass; filled count; net fill; released mass; rejected mass; rework mass; stock change | calibrated tank or flow measurement and released-package reconciliation | kg; L with density conversion; item | each batch or campaign; aggregate by product variant and month | continuous 12 months or a declared representative campaign | represented process train and declared product variants | reconcile matched transfers and normalise only by conforming released net product mass | calibration; release certificate; density measurement; filling-control check; batch reconciliation |
| `cp_residue_waste_and_wastewater` | all processes | Oat solids, rejects, waste, and wastewater | container scale, weighbridge, dry-matter test, effluent meter, manifest, and treatment invoice | material type; wet mass; dry-matter fraction; destination; product or waste status; treatment route; effluent volume; sampling result; period | weigh each shipment or container; meter effluent; sample according to facility plan | kg wet; kg dry matter; m3; concentration unit | each shipment and continuous or batch effluent reading; aggregate monthly | continuous 12 months or a declared representative campaign | all represented waste and co-product destinations | separate product outputs from waste; convert wet to dry mass when used for allocation; reconcile waste shipments and effluent totals | scale or meter calibration; laboratory result; receiving specification; transfer note; treatment manifest |
| `cp_cleaning_records` | `cleaning_and_utilities` | Cleaning water, chemicals, cycles, and sanitation energy | cleaning-in-place recipe, dosing, cycle counter, water meter, chemical issue, and temperature-time log | circuit; cycle type; cycle count; water volume; chemical product; concentration; dose; temperature; duration; product line served | automated cleaning log and submeter preferred; otherwise validated recipe multiplied by cycle count | kg; m3; L; mass fraction; cycle; kWh; MJ | every cleaning cycle; aggregate monthly | continuous 12 months or a declared representative campaign | circuits and shared systems serving represented oat-milk production | assign dedicated cycles directly; allocate shared cycles by causal driver such as cleaned circuit time or product-contact volume | validated cleaning recipe; dosing calibration; sanitation verification; meter record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_reference_normalisation` | Every inventory amount | normalised amount = amount attributable to represented product / kg conforming packaged oat milk released | attributable flow amount; released net product mass | flow amount per 1 kg reference flow | `mass-balance-identity`; `epd-international-pcr-2025-03` |
| `cr_volume_to_mass` | Product and water volume records | mass = measured volume x measured or disclosed density at the recorded condition | volume; density; temperature or measurement condition | kg material | `mass-balance-identity` |
| `cr_packaging_mass` | Count-based packaging records | packaging mass = component count x verified mass per component; reconcile to issued mass and scrap | component count; component mass; issued mass; returned stock; scrap | kg packaging by material | `mass-balance-identity` |
| `cr_dry_matter` | Oat ingredients and separated solids | dry-matter mass = wet mass x measured dry-matter fraction | wet mass; dry-matter fraction | kg dry matter | `mass-balance-identity` |
| `cr_mass_balance` | Each process and represented period | residual = total mass inputs + opening stock - product outputs - co-product outputs - waste outputs - measured elementary mass outputs - closing stock; investigate and disclose material residuals without forcing them into an invented flow | all measured mass flows; opening and closing stock | mass-balance residual and reconciliation note | `mass-balance-identity` |
| `cr_coproduct_fraction` | Unavoidable physical allocation | allocation fraction for output i = selected physical quantity of output i / sum of the selected physical quantity for all co-products; use the same wet- or dry-matter basis for all outputs | output quantities on common physical basis | allocation fractions summing to 1 | `iso-14044-2006`; `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and recipe | Retain product specification, recipe or bill of material, oat ingredient form, process route, net fill, packaging, release status, and required qualifiers sufficient to distinguish the represented oat milk from excluded products. | approved product specification; recipe; batch and release records |
| `dq_temporal` | Foreground data period | Use a continuous 12-month period when representative annual production exists; a shorter campaign is acceptable only when seasonality, start-up, cleaning, product mix, and downtime are represented or their exclusion is disclosed. | dated meter, production, purchasing, cleaning, waste, and release records; representativeness rationale |
| `dq_technology` | Process and utility records | Match extraction, separation, enzyme, heat-treatment, homogenisation, filling, cleaning, and refrigeration technologies to the declared route; disclose aggregated or proxy operations. | equipment list; process flow diagram; operating log; allocation worksheet |
| `dq_geography` | Upstream and utility datasets | Use datasets matching the declared sourcing and production geography where material; disclose substitutions and their likely direction of bias. | supplier origin; facility location; electricity and fuel contract; dataset metadata |
| `dq_completeness` | Mass, water, energy, packaging, residues, waste, and direct emissions | Include all material flows in collection protocols and reconcile product, co-product, waste, water, and energy records. Explain missing records, zero values, and mass-balance residuals. | completeness checklist; mass and water balance; invoice-to-meter reconciliation; waste manifests |
| `dq_precision` | Measured and calculated values | Preserve raw readings, units, density or dry-matter conversions, calibration state, aggregation formulas, and allocation fractions so the normalised value can be reproduced. | source records; calibration evidence; calculation workbook or machine-readable transformation |
| `dq_provisional_ranges` | Every `reasoned_estimate` range | Treat the range only as a review and QA screen. Do not substitute its midpoint or bound for a missing foreground value without an explicit scenario decision, and replace it with reviewed evidence before publication-critical use. | range provenance flag; replacement or exception review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `va_product_identity` | Product metadata | Fail identity validation when the product is not predominantly oat-based, contains dairy milk as a blended base, is not a finished liquid beverage, or lacks the required product and route qualifiers. | `cpc-3-24425`; `eu-jrc-fdm-bref-2019` |
| `va_reference_flow` | Quantitative reference | Require exactly one reference output using Oat milk `ad17fd2f-4977-4a51-b80b-f52061c153ec`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and 1 kg after normalisation. |  |
| `va_process_coverage` | Process map and inventory | Require all four `required` processes or an explicit disclosed aggregation that preserves their inputs, outputs, yields, cleaning, and utility burdens without double counting. | `eu-jrc-fdm-bref-2019` |
| `va_transfer_reconciliation` | Internal intermediates | Require `prepared_oat_slurry_output` to match `prepared_oat_slurry_input` and `formulated_oat_base_output` to match `formulated_oat_base_input` for the same period after documented stock changes and losses. | `mass-balance-identity` |
| `va_mass_balance` | Each foreground process | Calculate and report `cr_mass_balance`; investigate material residuals and do not close the balance by adding an unsupported emission, waste, or water flow. | `mass-balance-identity` |
| `va_residue_exclusivity` | Separated oat solids | Reject simultaneous reporting of the same separated-solids mass as both `oat_solids_coproduct_output` and `oat_solids_waste_output`; require destination, status, wet mass, and dry-matter evidence. | `iso-14044-2006`; `mass-balance-identity` |
| `va_allocation` | Multi-output and shared processes | Require documented avoidance effort, selected allocation rule, causal or physical basis, formulas, source records, and fractions summing to one; require sensitivity disclosure for economic allocation. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `va_range_use` | Provisional ranges | Flag every `reasoned_estimate` as provisional and fail publication-critical validation if it has been used as a final foreground value without an accepted scenario or replacement evidence. |  |
| `va_completeness` | Dataset package | Require raw-record links or documented gaps for oat ingredients, formulation materials, process and cleaning water, electricity, thermal energy, packaging, product yield, residues, waste, wastewater, and direct refrigerant emissions where applicable. | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground oat-milk production dataset that may be published as a secondary_dataset or background_dataset after review, validation, and linkage of upstream datasets |
| downstream_use | Product carbon footprint, environmental footprint, EPD-supporting LCA, process datasets, and lifecyclemodel projections consistent with the declared boundary and programme rules |
| allowed_use | Facility- or route-specific modelling of packaged oat milk when product qualifiers, geography, period, upstream datasets, allocation, and data quality are visible |
| excluded_use | Unqualified comparison of nutrition or consumer function; representation of other plant beverages or dairy blends; substitution for missing foreground data using provisional ranges without scenario disclosure; claims outside the modelled boundary |
| required_metadata | canonical PCR id; product and recipe variant; oat ingredient form and origin; facility geography; production period; process route; heat treatment; packaging; storage regime; reference flow UUID and unit; included boundary; upstream datasets; co-product status; allocation method; collection protocols |
| required_quality_disclosure | temporal, geographical, technological, and product representativeness; measured versus allocated records; meter and scale coverage; mass-balance residuals; missing or proxy flows; provisional estimates; allocation sensitivity; external treatment routes |
| update_trigger | material recipe or oat-source change; new extraction, enzyme, separation, heat-treatment, filling, packaging, cleaning, energy, or waste technology; changed co-product destination or allocation; changed electricity or fuel supply; data older than the declared representativeness period; corrected UUID or source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc-3-24425` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 24425, Oat milk | Product-category identity and scope context |
| `epd-international-pcr-2025-03` | standard | EPD International, PCR 2025:03 Food and beverage products (main PCR), version 1.0.1, valid to 2030-07-14, https://www.environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5 (retrieved 2026-08-11) | Sector-level declared-unit and EPD modelling context; upstream and downstream boundary disclosure |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries (retrieved 2026-08-11) | Facility process coverage; water, energy, cleaning, waste, and emissions collection context |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I: Product Environmental Footprint method, Official Journal L 471, 30 December 2021, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Life-cycle boundary, dataset quality, allocation, and disclosure rules |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, including Amendments 1:2017 and 2:2020 | Allocation hierarchy, multi-output modelling, transparency, and sensitivity requirements |
| `mass-balance-identity` | method_factor | Conservation of mass applied through the calculation rules in this PCR | Transfer reconciliation, dry-matter conversion, packaging calculation, mass balance, and allocation-fraction QA |
