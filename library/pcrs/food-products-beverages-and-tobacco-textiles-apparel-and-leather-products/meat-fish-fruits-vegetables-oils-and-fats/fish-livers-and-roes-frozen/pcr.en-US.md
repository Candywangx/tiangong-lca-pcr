---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fish livers and roes, frozen

## 1. Scope and Applicability

This PCR governs foreground data packages for edible fish livers, fish roes, or declared mixtures of the two that are separated, cleaned or graded as applicable, frozen, optionally glazed, packaged, and delivered at the frozen-product cold-store gate. It applies to shore-based and vessel-based processing when the included operations and starting condition are declared.

It excludes fresh or chilled livers and roes; dried, smoked, salted, or brined products; cooked, canned, fermented, seasoned, or otherwise prepared products; non-fish aquatic animal organs; non-food grades; and products in which fish liver or roe is only an ingredient. Fishing or aquaculture, landing, and upstream production of incoming fish or separately purchased organs are represented by linked upstream datasets rather than recreated inside the foreground process, unless the study explicitly expands the boundary.

The foreground data package shall identify species or species group, liver/roe/mixed state, whole-fish versus separated-organ starting condition, wild-caught or aquaculture origin when known, product form, freezing technology, glaze share, packaging format, storage duration and temperature, site or vessel, geography, and reporting period.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-frozen |
| classification_refs | CPC 3.0: 21226, Fish livers and roes, frozen (exact) |
| covered_products | Edible fish livers, fish roes, or declared liver-and-roe mixtures preserved by freezing, whether block-, tray-, or individually frozen and whether glazed or unglazed |
| excluded_products | Fresh or chilled; dried, smoked, salted, or brined; cooked, canned, fermented, seasoned, or other prepared forms; non-fish products; non-food grades; ingredient-containing preparations |
| representative_product | Packaged edible frozen fish livers or roes at the producing facility's frozen cold-store gate |
| production_route | Receipt of whole fish or separated edible organs; organ separation where applicable; trimming, washing and grading; freezing and optional glazing; packaging; frozen storage and dispatch |
| market_state | Frozen product at the producing facility gate, with net product mass excluding packaging and separately declared glaze ice |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible fish liver, fish roe, or a declared mixture preserved by freezing |
| How much | 1 kg net mass of frozen edible product |
| How well | Conforming to the declared species, organ type, product form, freezing route, glaze share, packaging format, and food-safety controls |
| How long or cycle | At the producing facility's frozen cold-store gate after one production lot; storage duration is declared |
| reference_flow_link | The functional unit is realized by 1 kg of the selected reference product flow on a net-product-mass basis |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net frozen product mass |
| Reference product flow | Fish livers and roes, frozen `4b21f535-008c-42a3-a6b7-04565095a86a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species or species group; liver, roe, or mixture; whole-fish or separated-organ starting condition; wild-caught or aquaculture origin when known; product form; freezing technology; glaze share; net-mass convention; packaging format; storage duration and temperature; facility or vessel; geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net edible frozen product; exclude primary, secondary, and transport packaging and subtract separately declared glaze ice from gross weighed mass. |
| `mass_input_output` | Fish material, edible co-products, residues, wastewater, glaze, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured mass by production lot before normalization; declare wet, drained, gross, and net conventions wherever they differ. |
| `water_mass_conversion` | Metered water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer measured mass; when volume is recorded, retain measured volume, density assumption, temperature if material, and the conversion calculation. |
| `energy_reporting` | Electricity and thermal energy | Energy | kWh and MJ | Preserve metered carrier and unit, convert with a declared factor, and do not combine electricity, fuel, and recovered energy into one undifferentiated total. |
| `temperature_reporting` | Freezing and frozen storage | Temperature | °C | Record product thermal-centre temperature after thermal stabilization where available and the cold-store temperature record; do not infer temperature from equipment set-point alone. |
| `glaze_accounting` | Glazed product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate glaze ice separately and disclose the method; glaze is not part of the 1 kg net edible reference amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole fish, evisceration stream, or already separated edible liver/roe received at the foreground facility or vessel, with supplier, origin, preservation condition, incoming mass, and economic status declared |
| starting_condition_role | Foreground entrance condition used to determine included separation work, upstream dataset linkage, and co-product allocation point |
| product_classification_scope | Edible frozen fish livers and roes within CPC 3.0 code 21226; classification is a scope reference and does not replace the semantic product declaration |
| recursive_input_rule | Incoming frozen fish liver or roe already within this category is recorded as an upstream product input with its own dataset and is not re-expanded into the same foreground operations |
| upstream_dataset_requirement | Link species-, origin-, production-system-, preservation-, geography-, and period-representative upstream datasets for whole fish or separated organs; disclose proxy use and any upstream allocation already applied |
| disclosure | Declare starting condition, excluded upstream stages, on-vessel versus shore processing, organ recovery route, freezing and glazing route, storage duration, cut-offs, co-products, waste treatment, allocation method, and all proxy datasets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_start_and_end` | Foreground boundary | Start at physical receipt of the declared fish material and end with packaged frozen product leaving the producing facility's frozen cold store; link upstream fish production and downstream distribution as separate datasets. | `unsd-cpc-3-0-21226`; `eu-pef-2021-2279` |
| `sb_required_operations` | Included operations | Include receipt and holding, separation when whole fish or an evisceration stream is received, trimming, washing or grading when performed, freezing, optional glazing, packaging, frozen storage, internal handling, sanitation, wastewater handling, direct releases, and treatment of production residues. | `codex-cxc-52-2003` |
| `sb_cold_chain` | Freezing and storage | Model the actual freezing operation and frozen storage; verify that the product thermal centre reaches -18 °C or lower after thermal stabilization and that frozen storage maintains -18 °C unless a stricter declared specification applies. | `codex-cxc-52-2003` |
| `sb_recursive_product` | Same-category input | Represent purchased frozen liver or roe as a linked upstream product input and prevent recursive re-creation of its production stages. |  |
| `sb_exclusions` | Product transformations | Exclude salting, smoking, drying, brining, cooking, canning, fermentation, seasoning, and downstream retail or consumer thawing unless the study explicitly expands and labels the boundary. | `unsd-cpc-3-0-21226` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p01_receipt_separation_cleaning` | Receipt, organ separation, trimming, washing, and grading | required | Separation is zero when already separated edible organs are received; all performed handling and sanitation remain included | Convert each atomic incoming material into cleaned fish liver or roe and measured co-products or wastes | kg cleaned fish liver or roe output |
| `p02_freezing_glazing` | Freezing and optional glazing | required | Glazing inputs and output mass are zero only when the product is declared unglazed | Produce frozen fish liver or roe meeting the declared thermal and glaze specification | kg net frozen product before packaging |
| `p03_packaging_storage_dispatch` | Packaging, frozen storage, and dispatch | required | Packaging components and storage duration follow the represented product lot | Deliver the packaged reference product at the frozen cold-store gate | 1 kg net frozen product reference flow |

### Process: Receipt, organ separation, trimming, washing, and grading(`p01_receipt_separation_cleaning`)

#### Inputs

##### Product flows

###### Chilled whole fish input (`incoming_whole_fish_chilled`)

Record chilled whole fish input only when it crosses the foreground receipt boundary; keep its mass separate from every other starting material.

- Selected flow: Whole fish, chilled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass at receipt by material state and supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional incoming-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg net frozen reference product; apply only to the applicable non-zero starting-material row
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Chilled fish liver input (`incoming_fish_liver_chilled`)

Record chilled fish liver input only when it crosses the foreground receipt boundary; keep its mass separate from every other starting material.

- Selected flow: Fish liver, chilled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass at receipt by material state and supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional incoming-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg net frozen reference product; apply only to the applicable non-zero starting-material row
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Chilled fish roe input (`incoming_fish_roe_chilled`)

Record chilled fish roe input only when it crosses the foreground receipt boundary; keep its mass separate from every other starting material.

- Selected flow: Fish roe, chilled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass at receipt by material state and supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional incoming-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg net frozen reference product; apply only to the applicable non-zero starting-material row
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water (`process_water`)

Record suitable process water used for washing, rinsing, attributable sanitation, and related preparation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or tank-volume-derived water attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned liver or roe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `codex-cxc-52-2003`
- Range: Replaceable water-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg cleaned liver or roe output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ice used in handling (`handling_ice`)

Record purchased or site-produced ice physically used to maintain incoming material during receipt and cleaning.

- Selected flow: Ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured issued ice less documented recovery; site ice-production energy remains separate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned liver or roe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `codex-cxc-52-2003`
- Range: Replaceable handling-ice QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg cleaned liver or roe output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separation electricity, low voltage (`separation_electricity_low_voltage`)

Apply only when Alternating current, low-voltage grid supply crosses this process boundary; voltage rows are mutually exclusive for the same metered quantity.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: measured submeter use or documented equipment-load calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned liver or roe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Replaceable separation-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg cleaned liver or roe output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separation electricity, medium voltage (`separation_electricity_medium_voltage`)

Apply only when Alternating current, medium-voltage grid supply crosses this process boundary; voltage rows are mutually exclusive for the same metered quantity.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: measured submeter use or documented equipment-load calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned liver or roe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Replaceable separation-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg cleaned liver or roe output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned fish liver intermediate (`cleaned_fish_liver_intermediate`)

Record cleaned fish liver intermediate as one organ-specific transfer and reconcile it with adjacent process records.

- Selected flow: Cleaned edible fish liver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net edible fish-liver mass transferred to freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:

###### Cleaned fish roe intermediate (`cleaned_fish_roe_intermediate`)

Record cleaned fish roe intermediate as one organ-specific transfer and reconcile it with adjacent process records.

- Selected flow: Cleaned edible fish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net edible fish-roe mass transferred to freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:

###### Edible fish meat co-product (`fish_meat_coproduct`)

Record edible fish meat recovered as a marketable co-product from the same separation operation.

- Selected flow: Edible fish meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured co-product mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Fish-tissue trimming waste (`fish_tissue_trimming_waste`)

Record fish-tissue trimming waste separately from all other waste streams and retain its disposition record.

- Selected flow: Fish-tissue trimming waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured trimming-waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned liver or roe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:
- Range: Replaceable residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg cleaned liver or roe output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected fish liver waste (`rejected_fish_liver_waste`)

Record rejected fish liver waste separately from all other waste streams and retain its disposition record.

- Selected flow: Rejected fish liver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected fish-liver mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned liver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:
- Range: Replaceable residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg cleaned liver or roe output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected fish roe waste (`rejected_fish_roe_waste`)

Record rejected fish roe waste separately from all other waste streams and retain its disposition record.

- Selected flow: Rejected fish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected fish-roe mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned roe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:
- Range: Replaceable residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg cleaned liver or roe output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater to treatment (`process_wastewater`)

Record fish-processing wastewater sent to treatment without combining it with solid residues.

- Selected flow: Fish-processing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discharge or water-balance calculation by treatment route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cleaned liver or roe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater_records`
- Sources: `codex-cxc-52-2003`
- Range: Replaceable wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg cleaned liver or roe output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Freezing and optional glazing(`p02_freezing_glazing`)

#### Inputs

##### Product flows

###### Cleaned fish liver input to freezing (`cleaned_fish_liver_to_freezing`)

Record cleaned fish liver input to freezing as one organ-specific transfer and reconcile it with adjacent process records.

- Selected flow: Cleaned edible fish liver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fish-liver transfer mass into freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:

###### Cleaned fish roe input to freezing (`cleaned_fish_roe_to_freezing`)

Record cleaned fish roe input to freezing as one organ-specific transfer and reconcile it with adjacent process records.

- Selected flow: Cleaned edible fish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fish-roe transfer mass into freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:

###### Freezing electricity, low voltage (`freezing_electricity_low_voltage`)

Apply only when Alternating current, low-voltage grid supply crosses this process boundary; voltage rows are mutually exclusive for the same metered quantity.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: measured submeter use or documented equipment-load and operating-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-52-2003`
- Range: Replaceable freezing-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 5
  - Unit: kWh
  - Basis: per 1 kg net frozen product before packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezing electricity, medium voltage (`freezing_electricity_medium_voltage`)

Apply only when Alternating current, medium-voltage grid supply crosses this process boundary; voltage rows are mutually exclusive for the same metered quantity.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: measured submeter use or documented equipment-load and operating-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-52-2003`
- Range: Replaceable freezing-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 5
  - Unit: kWh
  - Basis: per 1 kg net frozen product before packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glazing_water`)

Record clean water applied as glaze and keep retained glaze separate from overspray or bath loss.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured water use and measured or calculated retained glaze mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen product excluding glaze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glaze_temperature_records`
- Sources: `codex-cxc-52-2003`
- Range: Replaceable retained-glaze QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg net frozen product excluding glaze
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezer R134a refrigerant make-up (`freezer_r134a_makeup`)

Apply only to equipment whose service record identifies Refrigerant, R134a; do not combine this charge with another refrigerant.

- Selected flow: Refrigerant, R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: allocated make-up charge from maintenance and inventory records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:
- Range: Replaceable freezer-refrigerant QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg net frozen product before packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezer R404A refrigerant make-up (`freezer_r404a_makeup`)

Apply only to equipment whose service record identifies Refrigerant R404A; do not combine this charge with another refrigerant.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: allocated make-up charge from maintenance and inventory records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:
- Range: Replaceable freezer-refrigerant QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg net frozen product before packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen fish liver before packaging (`frozen_fish_liver_intermediate`)

Record frozen fish liver before packaging as one organ-specific transfer and reconcile it with adjacent process records.

- Selected flow: Frozen fish liver intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured gross frozen fish-liver mass minus retained glaze
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per freezing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_temperature_records`
- Sources: `codex-cxc-52-2003`

###### Frozen fish roe before packaging (`frozen_fish_roe_intermediate`)

Record frozen fish roe before packaging as one organ-specific transfer and reconcile it with adjacent process records.

- Selected flow: Frozen fish roe intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured gross frozen fish-roe mass minus retained glaze
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per freezing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_temperature_records`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Rejected frozen fish liver (`freezing_rejected_fish_liver`)

Record rejected frozen fish liver separately from all other waste streams and retain its disposition record.

- Selected flow: Rejected frozen fish liver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected or spilled frozen fish-liver mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:

###### Rejected frozen fish roe (`freezing_rejected_fish_roe`)

Record rejected frozen fish roe separately from all other waste streams and retain its disposition record.

- Selected flow: Rejected frozen fish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected or spilled frozen fish-roe mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:

###### Glazing wastewater (`glazing_wastewater`)

Record glazing wastewater separately from all other waste streams and retain its disposition record.

- Selected flow: Glazing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured glaze-system wastewater mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:

##### Elementary flows

###### R134a emitted from freezing (`freezer_r134a_emission`)

Calculate HFC-134a to air from the substance-specific refrigerant balance and record it only for the matching system.

- Selected flow: HFC-134a to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: refrigerant mass-balance loss allocated to the represented operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

###### R404A emitted from freezing (`freezer_r404a_emission`)

Calculate Refrigerant R404A to air from the substance-specific refrigerant balance and record it only for the matching system.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: refrigerant mass-balance loss allocated to the represented operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen product before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:


### Process: Packaging, frozen storage, and dispatch(`p03_packaging_storage_dispatch`)

#### Inputs

##### Product flows

###### Frozen fish liver input to packaging (`frozen_fish_liver_to_packaging`)

Record frozen fish liver input to packaging as one organ-specific transfer and reconcile it with adjacent process records.

- Selected flow: Frozen fish liver intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fish-liver transfer mass into packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:

###### Frozen fish roe input to packaging (`frozen_fish_roe_to_packaging`)

Record frozen fish roe input to packaging as one organ-specific transfer and reconcile it with adjacent process records.

- Selected flow: Frozen fish roe intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fish-roe transfer mass into packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_lot_records`
- Sources:

###### Polyethylene bag packaging (`packaging_polyethylene_bag`)

Record Polyethylene bag as one packaging component and reconcile issued mass, returns, and rejects.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued component mass less documented returns, divided by conforming net product output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Replaceable packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg net reference product; apply to the applicable component without summing the same issue twice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated-cardboard packaging (`packaging_corrugated_cardboard`)

Record Corrugated cardboard as one packaging component and reconcile issued mass, returns, and rejects.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued component mass less documented returns, divided by conforming net product output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Replaceable packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg net reference product; apply to the applicable component without summing the same issue twice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and frozen-storage electricity, low voltage (`storage_electricity_low_voltage`)

Apply only when Alternating current, low-voltage grid supply crosses this process boundary; voltage rows are mutually exclusive for the same metered quantity.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: measured use or documented packaging-line and cold-store allocation calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net product-day of declared frozen storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-52-2003`
- Range: Replaceable frozen-storage energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/(kg day)
  - Basis: per kg net product-day of frozen storage
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and frozen-storage electricity, medium voltage (`storage_electricity_medium_voltage`)

Apply only when Alternating current, medium-voltage grid supply crosses this process boundary; voltage rows are mutually exclusive for the same metered quantity.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: measured use or documented packaging-line and cold-store allocation calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net product-day of declared frozen storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-52-2003`
- Range: Replaceable frozen-storage energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/(kg day)
  - Basis: per kg net product-day of frozen storage
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cold-store R134a refrigerant make-up (`cold_store_r134a_makeup`)

Apply only to equipment whose service record identifies Refrigerant, R134a; do not combine this charge with another refrigerant.

- Selected flow: Refrigerant, R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: allocated make-up charge from maintenance and inventory records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net product-day of declared frozen storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:
- Range: Replaceable cold-store refrigerant QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg net reference product over declared storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cold-store R404A refrigerant make-up (`cold_store_r404a_makeup`)

Apply only to equipment whose service record identifies Refrigerant, R404A; do not combine this charge with another refrigerant.

- Selected flow: Refrigerant, R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: allocated make-up charge from maintenance and inventory records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net product-day of declared frozen storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:
- Range: Replaceable cold-store refrigerant QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg net reference product over declared storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged frozen fish livers and roes reference product (`reference_frozen_product`)

This row is the declared reference flow at the frozen cold-store gate; net edible mass excludes packaging and glaze.

- Selected flow: Fish livers and roes, frozen `4b21f535-008c-42a3-a6b7-04565095a86a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net edible frozen product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-21226`

##### Waste flows

###### Polyethylene-bag packaging scrap (`polyethylene_packaging_scrap`)

Record polyethylene-bag packaging scrap separately from all other waste streams and retain its disposition record.

- Selected flow: Polyethylene-bag packaging scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected polyethylene-bag mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Corrugated-cardboard packaging scrap (`corrugated_cardboard_scrap`)

Record corrugated-cardboard packaging scrap separately from all other waste streams and retain its disposition record.

- Selected flow: Corrugated-cardboard packaging scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected corrugated-cardboard mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Unsaleable frozen fish liver (`unsaleable_frozen_fish_liver`)

Record unsaleable frozen fish liver separately from all other waste streams and retain its disposition record.

- Selected flow: Unsaleable frozen fish liver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured lost frozen fish-liver mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Unsaleable frozen fish roe (`unsaleable_frozen_fish_roe`)

Record unsaleable frozen fish roe separately from all other waste streams and retain its disposition record.

- Selected flow: Unsaleable frozen fish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured lost frozen fish-roe mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Elementary flows

###### R134a emitted from frozen storage (`cold_store_r134a_emission`)

Calculate HFC-134a to air from the substance-specific refrigerant balance and record it only for the matching system.

- Selected flow: HFC-134a to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: refrigerant mass-balance loss allocated to the represented operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net product-day of declared frozen storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

###### R404A emitted from frozen storage (`cold_store_r404a_emission`)

Calculate Refrigerant R404A to air from the substance-specific refrigerant balance and record it only for the matching system.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: refrigerant mass-balance loss allocated to the represented operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net product-day of declared frozen storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | Multi-output foreground operations | First avoid allocation through process subdivision, direct metering, separate batch records, or expansion of separately operated lines. | `eu-pef-2021-2279` |
| `alloc_status` | Whole fish, organ streams, co-products, and residues | Document the physical point and evidence at which liver, roe, other fish outputs, or residues become products with an economic function rather than wastes; do not change status merely to shift burdens. | `eu-pef-2021-2279` |
| `alloc_physical` | Joint separation and shared utilities | When subdivision is not possible and a physical relation represents causality, allocate by that documented physical relation; mass allocation may be used only with justification and complete output mass records. | `eu-pef-2021-2279` |
| `alloc_economic` | Joint outputs without a defensible causal physical relation | Use contemporaneous economic value at the allocation point, disclose prices, currency, period, quantities, treatment of zero-value outputs, and uncertainty, and test a mass-based sensitivity case. | `eu-pef-2021-2279` |
| `alloc_upstream` | Linked fish-production datasets | Preserve the allocation already embedded in accepted upstream datasets and disclose it; do not allocate the same upstream burden again in the foreground model. | `eu-pef-2021-2279` |
| `alloc_recycling_treatment` | Packaging recycling, residue recovery, and waste treatment | Apply the declared downstream treatment or recycling method consistently, disclose credits or substitutions, and prevent double counting between product, waste, and avoided-product claims. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_lot_records` | `p01_receipt_separation_cleaning`; `p02_freezing_glazing`; `p03_packaging_storage_dispatch` | Incoming material, intermediates, products, co-products, residues, and losses | Calibrated scale tickets, batch sheets, inventory movements, disposition records | timestamp; lot_id; species; organ_state; gross_mass; tare_mass; glaze_mass; net_mass; destination; scale_id | Capture each lot or batch, reconcile transfers, and aggregate only compatible product states | kg | Each lot or batch | Full represented campaign or at least 12 consecutive representative months | Each included facility or vessel | Sum accepted net masses by lot; retain rejected and co-product masses separately; normalize after mass-balance review | Calibration record; signed batch record; inventory reconciliation; destination evidence |
| `cp_utility_records` | `p01_receipt_separation_cleaning`; `p02_freezing_glazing` | Water and ice | Meter, tank log, purchase invoice, ice-production log | meter_start; meter_end; tank_volume; purchased_mass; recovered_mass; allocation_driver; lot_id | Prefer submetering; otherwise allocate shared use with documented operating time or mass driver | kg; m3 | Each batch or daily meter interval | Same period as product mass data | Each included utility system and facility | Convert volume with declared density where needed; subtract unrelated use; normalize to compatible process output | Meter identifier; calibration or invoice; allocation worksheet |
| `cp_energy_records` | all processes | Electricity, fuel, heat, and purchased cooling | Utility submeter, invoice, equipment runtime, fuel issue record | carrier; meter_start; meter_end; quantity; unit; equipment_id; runtime; load; allocation_driver | Keep carriers separate and prioritize submetered use; document shared-service allocation | kWh; MJ; carrier unit | Continuous, batch, daily, or invoice interval | Same period as product mass data and including seasonal cold-store operation | Each included process and shared utility | Sum by carrier; subtract exports; allocate shared service with disclosed driver; normalize to output or storage service | Meter calibration; invoice; equipment log; calculation worksheet |
| `cp_water_wastewater_records` | `p01_receipt_separation_cleaning` | Wastewater quantity and load | Effluent meter, sampling result, water balance, treatment invoice | discharge_volume; sampling_time; COD; BOD; total_nitrogen; total_phosphorus; suspended_solids; treatment_route | Measure discharge and sample using the site's controlled procedure; use a reconciled water balance only when direct metering is unavailable | kg; m3; mg/L | Meter interval and representative sampling campaign | Same period as water and product data | Each discharge point and treatment route | Keep concentration and volume paired by period; calculate load before normalization | Laboratory report; meter record; water-balance closure; treatment receipt |
| `cp_glaze_temperature_records` | `p02_freezing_glazing`; `p03_packaging_storage_dispatch` | Glaze, freezing acceptance, and cold-chain condition | Gross/net weight test, thermal-centre measurement, continuous temperature logger | lot_id; gross_frozen_mass; deglazed_net_mass; product_core_temperature; stabilization_time; store_temperature; timestamp; device_id | Test representative units by lot and retain continuous or interval cold-store records | kg; °C; h | Each lot plus continuous or defined interval monitoring | Entire represented production and storage period | Each freezer and cold store | Calculate glaze share from paired gross and deglazed net mass; summarize temperatures without replacing excursions | Calibrated scale and thermometer/logger records; corrective-action record |
| `cp_packaging_records` | `p03_packaging_storage_dispatch` | Packaging inputs and rejects | Bill of materials, issue record, purchase specification, reject log | material; component_mass; units_used; recycled_content; supplier; rejects; returnable_cycles | Record each packaging component and reconcile issued units to conforming product units | kg; count | Each packaging run | Same period as product output | Each packaging line and product format | Convert count to mass from verified component mass; subtract documented returns; keep rejects separate | Supplier specification; weighing record; stock reconciliation |
| `cp_refrigerant_records` | `p02_freezing_glazing`; `p03_packaging_storage_dispatch` | Refrigerant make-up, recovery, and loss | Refrigerant inventory, service log, purchase and recovery receipt | substance; opening_charge; added_mass; recovered_mass; closing_charge; equipment_id; service_date; cause | Maintain substance-specific mass balance for each refrigeration system and allocate shared systems by documented service driver | kg | Each service event and annual closure | Same period as production and storage data | Each included refrigeration circuit | Loss = opening charge + additions - recovery - closing charge, adjusted for documented transfers; allocate without mixing substances | Technician log; purchase/recovery receipt; inventory sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Reference product and glaze | Net edible frozen mass = gross frozen packaged mass - packaging mass - separately determined retained glaze mass | gross mass; packaging mass; glaze mass | kg net reference product | `codex-cxc-52-2003` |
| `calc_yield` | Separation and freezing | Yield = net frozen edible product mass / accepted incoming fish-material mass; report starting condition with the result | net product mass; incoming material mass | kg/kg and percent |  |
| `calc_mass_balance` | Each process and complete foreground system | Reconcile measured mass inputs with product, co-product, waste, wastewater, retained water or ice, inventory change, and documented evaporation; investigate material residuals before normalization | all mass rows; inventory change | kg residual and percent closure | `eu-pef-2021-2279` |
| `calc_energy_normalization` | Electricity, fuel, heat, and cold service | Convert each carrier with a declared factor and divide attributable use by compatible process output or kg-day storage service; never merge carriers before impact modelling | carrier quantity; conversion factor; allocation driver; output; storage days | kWh/kg, MJ/kg, or kWh/(kg day) | `eu-pef-2021-2279` |
| `calc_wastewater_load` | Wastewater | Pollutant load = paired discharge volume × measured concentration with unit conversion; normalize only after period alignment | discharge volume; concentration; unit factor; output | kg pollutant/kg output |  |
| `calc_refrigerant_loss` | Freezing and cold storage | Substance-specific loss = opening charge + additions - recovered mass - closing charge, adjusted for documented transfers; allocate shared-system loss by declared refrigeration or storage service | charge inventory; additions; recovery; closing charge; allocation driver | kg refrigerant/kg output or kg-day |  |
| `calc_allocation_factor` | Joint products | Physical factor = selected causal physical quantity for one output / total selected quantity; economic factor = output revenue / total joint-output revenue at the allocation point | output quantities; causal property or prices; currency; period | dimensionless allocation factor | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity` | Product and upstream fish material | Declare species or species group, organ state, origin system, starting condition, product form, glaze, packaging, and facility or vessel; prevent aggregation of materially different routes without stratification | Product specification, supplier record, lot record, reference-flow qualifiers |
| `dqr_temporal` | Foreground activity data | Use the full represented campaign or at least 12 consecutive representative months when continuous operation is claimed; disclose shutdowns, seasonality, storage carryover, and substitutions | Dated meter, batch, inventory, and invoice coverage table |
| `dqr_technology_geography` | Freezing, cold storage, utilities, and upstream datasets | Match actual freezer, refrigeration system, electricity geography, water treatment, waste route, fish origin, and production system; justify every proxy | Equipment list, utility contract, supplier origin, dataset metadata, proxy rationale |
| `dqr_completeness` | Inventory | Include all mapped process rows or document a measured zero/not-applicable decision; quantify co-products, wastes, wastewater, packaging, cold storage, and direct refrigerant losses | Process-to-row completeness matrix and mass/energy reconciliation |
| `dqr_measurement` | Mass, utility, temperature, and refrigerant records | Retain equipment identity, calibration or verification status, sampling method, allocation worksheet, and unit conversions; distinguish measurement from estimate | Calibration certificates, logger files, laboratory reports, service logs, calculations |
| `dqr_food_safety` | Water, handling, freezing, and storage | Retain evidence that water is suitable for its intended food-contact use, hygienic handling controls are applied, the thermal-centre freezing requirement is met, and frozen storage temperature is controlled | `codex-cxc-52-2003`; sanitation and HACCP records; temperature logs |
| `dqr_method_disclosure` | Dataset publication | Disclose system boundary, exclusions, allocation hierarchy, upstream dataset allocation, data sources, proxy use, provisional reasoned estimates, uncertainty, and any departures from this PCR | `eu-pef-2021-2279`; model report and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Require product flow UUID `4b21f535-008c-42a3-a6b7-04565095a86a`, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and amount 1 on a net edible product basis. |  |
| `val_scope` | Product identity | Reject or flag products that are fresh/chilled, dried, smoked, salted, brined, cooked, canned, fermented, seasoned, non-fish, non-food, or preparations in which liver or roe is only an ingredient. | `unsd-cpc-3-0-21226` |
| `val_qualifiers` | Dataset metadata | Fail completeness when any required qualifier is absent or when gross, net, packaging, and glaze mass conventions are ambiguous. |  |
| `val_freezing` | Freezing lot | Require evidence that the product thermal centre reached -18 °C or lower after thermal stabilization; retain nonconformance and corrective-action records. | `codex-cxc-52-2003` |
| `val_frozen_storage` | Cold store | Require a frozen-storage temperature record demonstrating maintenance at -18 °C or the stricter declared specification; flag excursions and their disposition. | `codex-cxc-52-2003` |
| `val_process_coverage` | Foreground inventory | Require all three process-map rows and all applicable inventory rows; a missing flow must have a documented zero, not-applicable, or excluded-with-justification decision. |  |
| `val_mass_balance` | Process and system mass flows | Require lot- and period-compatible mass reconciliation; report closure residual and investigate unresolved differences before dataset release. | `eu-pef-2021-2279` |
| `val_allocation` | Multi-output operations | Require evidence that allocation was avoided where possible; otherwise require the causal physical or economic basis, complete output set, factor sum, allocation point, and sensitivity disclosure. | `eu-pef-2021-2279` |
| `val_refrigerant` | Refrigeration systems | Require substance identity and mass-balance records when refrigerant additions or losses occur; reject an unidentified generic refrigerant emission. |  |
| `val_reasoned_ranges` | Provisional QA screens | Treat values outside reasoned-estimate ranges as review findings, not automatic replacements; never substitute a midpoint for missing foreground data, and disclose every retained estimate. |  |
| `val_data_quality` | Published data package | Require temporal, technological, geographic, completeness, measurement, food-safety, proxy, and uncertainty evidence defined in section 8; mark validation inconclusive when required records are unavailable. | `eu-pef-2021-2279`; `codex-cxc-52-2003` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for frozen edible fish livers and/or roes at the producing facility's frozen cold-store gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and publication |
| allowed_use | LCA studies whose species, organ state, origin, starting condition, production route, geography, period, freezing technology, glaze, packaging, storage, and allocation are representative or transparently adjusted |
| excluded_use | Fresh/chilled, salted, smoked, dried, brined, cooked, canned, fermented, seasoned, non-fish, non-food, or ingredient-containing preparations; unidentified fish supply; undisclosed allocation; unverified net mass |
| required_metadata | PCR id and version; reference-flow UUIDs; all required qualifiers; facility or vessel; geography; reporting period; upstream dataset links; process coverage; technology; glaze and packaging; storage duration and temperature; allocation; data sources; validation status |
| required_quality_disclosure | Foreground coverage, measurement and calibration evidence, mass and energy reconciliation, co-product status, allocation factors and sensitivity, upstream allocation, proxy datasets, reasoned estimates, uncertainty, exclusions, cold-chain excursions, wastewater treatment, and refrigerant identity |
| update_trigger | Species or origin change; whole-fish versus organ starting-condition change; new allocation or price basis; material process, freezer, glaze, packaging, cold-store, energy mix, refrigerant, treatment, supplier, geography, or period change; new reviewed quantitative evidence; or failed validation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21226` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21226, “Fish livers and roes, frozen”, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Product-category boundary, included frozen state, and exclusion of adjacent preservation states |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf (retrieved 2026-08-11) | Hygienic handling and water controls, freezing definition and thermal-centre requirement, glazing, frozen storage, temperature records, and food-safety quality evidence |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (reference confirmed 2026-08-11; detailed method application pending review) | System-boundary disclosure, allocation hierarchy, inventory completeness, data quality, and dataset reporting method |
