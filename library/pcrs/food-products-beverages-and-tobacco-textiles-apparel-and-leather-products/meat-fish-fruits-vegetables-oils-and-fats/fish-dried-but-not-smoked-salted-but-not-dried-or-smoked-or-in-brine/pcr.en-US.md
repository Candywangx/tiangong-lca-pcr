---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-dried-but-not-smoked-salted-but-not-dried-or-smoked-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fish, dried but not smoked; salted but not dried or smoked; or in brine

## 1. Scope and Applicability

This PCR applies to edible fish products placed on the market in one of three declared preservation states: dried but not smoked; salted but neither dried nor smoked; or held in brine. It covers receiving eligible fresh or frozen fish, route-specific thawing and preparation, salting or brining where used, non-smoking drying where used, sorting, packing, and the storage operations needed to deliver the declared product state. Upstream fishing or aquaculture, feed production, hatchery operations, vessel operations, and transport to the declared processing gate are represented by linked upstream datasets rather than recreated inside the foreground boundary.

The PCR excludes smoked and smoke-dried fish, edible fish meal, fish offal sold as a distinct product category, canned or cooked fish, caviar, crustaceans, molluscs, and products whose preservation identity is primarily freezing or another preparation not named above. Product-specific food-safety, additive, contaminant, labelling, parasite-control, and legal requirements remain mandatory and must be declared for the species, origin, route, and market jurisdiction.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-dried-but-not-smoked-salted-but-not-dried-or-smoked-or-in-brine |
| classification_refs | CPC 3.0: 21231, exact classification context |
| covered_products | Edible finfish dried without smoking, fish salted without drying or smoking, and fish preserved or marketed in brine; whole, split, dressed, fillet, or other declared edible form |
| excluded_products | Smoked or smoke-dried fish; edible fish meal; separately marketed fish offal; cooked, canned, or otherwise prepared fish; caviar; crustaceans; molluscs; non-food products |
| representative_product | Packed edible fish in the declared dried, salted, or brined route and sale state |
| production_route | Received fish -> conditional thawing -> preparation -> route-specific salting/brining -> conditional non-smoking drying -> sorting/conditioning -> packaging -> route-required storage |
| market_state | Packed product at processing-facility gate; storage regime, species, product form, salting method, drying status, brine state, and packaging system declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible fish supplied in the declared dried-but-not-smoked, salted-but-not-dried-or-smoked, or in-brine state |
| How much | 1 kg net mass of conforming product, excluding packaging |
| How well | Meets the declared species, product form, preservation route, food-safety plan, quality specification, packaging, and storage regime |
| How long or cycle | One production lot delivered at the processing-facility gate; shelf-life is separately declared and substantiated |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the reference product flow on a net-product mass basis |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product mass |
| Reference product flow | Fish, dried but not smoked, salted but not dried or smoked, or in brine `39347f84-4a1d-414b-89f0-746f31b01aa6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species and scientific or trade identity; wild or farmed origin where known; whole/split/dressed/fillet form; dried/salted/brined route; salting or brining method; drying method and endpoint claim where applicable; drained or undrained sale basis for brined product; storage temperature regime; packaging system; geographic and temporal scope |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg of conforming edible product excluding packaging; for brined products declare whether the commercial net quantity includes brine and also collect drained fish mass when relevant to the declared specification. |
| `mass_input_output_consistency` | Fish, salt, water, brine, product, co-products, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured wet-basis amounts and calculate normalized amounts per 1 kg reference product; do not mix drained and undrained bases or dry- and wet-basis measurements without an explicit conversion. |
| `temperature_time_records` | Chilled, thawing, salting, brining, maturing, drying, and storage steps | Temperature and elapsed time | °C and h | Preserve measured temperature and time records in their original units and declare any conversion; route-specific limits come from the validated HACCP/quality plan and applicable specification. |
| `energy_conversion` | Electricity and fuels | Energy | kWh and MJ | Retain source meter or invoice units and conversion factors; allocate shared energy only under the rules in Section 7 and report the normalized result per 1 kg reference product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Eligible fresh, chilled, or frozen edible fish is received at the processing facility with measured mass, species/product form, origin, preservation state, temperature condition, supplier lot identity, and acceptance disposition. |
| starting_condition_role | The received fish is a technosphere product input; fishing or aquaculture and delivery to the gate are upstream and linked through representative datasets. |
| product_classification_scope | The foreground output is limited to CPC 3.0 code 21231 product states; smoking and other prepared-fish identities are outside this PCR. |
| recursive_input_rule | A purchased input already in the same CPC 21231 category is recorded once as an upstream product input with its declared preservation route and is not recursively reprocessed unless the foreground facility performs a documented transformation. |
| upstream_dataset_requirement | Link representative upstream datasets for received fish, salt, water, energy, packaging, refrigerants, transport, and waste treatment at the geographic, technological, and temporal resolution available. |
| disclosure | Declare species, origin, input state, route steps, salting/brining method, drying technology and endpoint claim, storage regime, packaging, co-products, waste treatment, allocation, exclusions, and any data gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_gate` | Foreground process system | Include every operation performed from accepted fish receipt through production of the packed reference product at the facility gate, including conditional thawing, preparation, salting/brining, drying, intermediate storage, packaging, refrigeration, sanitation-related material use when attributable, rejects, wastewater/brine, and waste handling. | codex-cxc-52-2003 |
| `boundary_upstream_linking` | Purchased fish and other technosphere inputs | Represent production and delivery before the declared receiving gate with linked upstream datasets and disclose missing or proxy geography, technology, and time. | eu-pef-2021-2279 |
| `boundary_route_exclusion` | Smoking and out-of-scope preparation | Do not include smoking or smoke-drying under this PCR; a dataset performing those operations requires the applicable product category rule. | unsd-cpc-3-0-2025 |
| `boundary_food_safety_controls` | All foreground steps | Model the actual process sequence and retain the HACCP/prerequisite-programme records that establish relevant hazards, critical or operational limits, monitoring, corrective actions, verification, and lot release. | codex-cxc-52-2003 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fish_receipt_and_conditioning` | Fish receipt and input conditioning | required | Always; thawing and chilled/frozen holding are included only when used | Foreground receipt, acceptance, and condition control | kg accepted fish |
| `fish_preparation` | Fish preparation and washing | required | Preparation intensity follows whole/split/dressed/fillet form | Foreground edible preparation | kg prepared fish |
| `salting_or_brining` | Salting, brining, or brine holding | conditional | Required for salted and brined routes and when salt is used before drying | Foreground preservation | kg salted or brined fish |
| `non_smoking_drying` | Non-smoking drying | conditional | Required only for the dried-but-not-smoked route | Foreground moisture removal | kg dried fish |
| `packing_and_storage` | Sorting, packing, and route-required storage | required | Always; chilled storage applies when required by product state and validated plan | Final foreground product preparation | 1 kg reference product |

### Process: Fish receipt and input conditioning (`fish_receipt_and_conditioning`)

#### Inputs

##### Product flows

###### Received edible fish (`received_fish`)

Record the mass and declared identity of every accepted fresh, chilled, or frozen fish lot crossing the facility gate.

- Selected flow: Edible fish, route-appropriate raw material; Tiangong UUID pending exact identity review
- Flow property / unit: Mass / kg
- Amount rule: Measured received fish mass attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fish_receipt`
- Sources: `codex-cxc-52-2003`; `codex-cxs-190-1995` only when the received material is within that standard's scope
- Range: Provisional received-fish mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: received fish per 1 kg conforming product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling or thawing energy (`receipt_conditioning_energy`)

Record metered electricity and measured fuels used for chilled/frozen holding or controlled thawing when these operations occur.

- Selected flow: Electricity and/or fuel carrier by actual facility supply; UUIDs pending exact identity review
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered energy or allocated shared-meter energy for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fish_receipt`
- Range: Provisional receipt-conditioning energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg reference product
  - Basis: combined electrical-equivalent screen per 1 kg conforming product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Accepted conditioned fish (`accepted_conditioned_fish`)

Calculate the accepted mass transferred to preparation after rejection and any thaw-drip loss.

- Selected flow: Accepted fish intermediate; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: received fish minus rejected fish and measured conditioning losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted conditioned fish
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fish_receipt`

##### Waste flows

###### Rejected fish and thaw losses (`receipt_rejects`)

Record rejected material and separately identify edible diversion, by-product recovery, wastewater, or waste treatment destination.

- Selected flow: Rejected fish or thaw loss by actual destination; UUID pending exact identity review
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fish plus separately measured or calculated thaw-drip loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg received fish
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fish_receipt`
- Range: Provisional receipt-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg received fish
  - Basis: rejected material and thaw loss per kg received fish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Fish preparation and washing (`fish_preparation`)

#### Inputs

##### Product flows

###### Accepted fish for preparation (`fish_for_preparation`)

Transfer the accepted intermediate without double counting its upstream burden.

- Selected flow: Accepted fish intermediate; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced accepted conditioned fish
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation`

###### Preparation water (`preparation_water`)

Record potable or otherwise legally suitable water used for washing and preparation.

- Selected flow: Potable or process water by actual supply; UUID pending exact identity review
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: Metered water attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg prepared fish
  - Basis: water used per kg prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Prepared fish (`prepared_fish`)

Record edible fish transferred to salting, brining, drying, or final handling.

- Selected flow: Prepared fish intermediate; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured prepared edible fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`

##### Waste flows

###### Preparation offcuts and rejects (`preparation_offcuts`)

Separate marketable co-products from wastes and record each destination.

- Selected flow: Fish offcuts or rejects by actual disposition; UUID pending exact identity review
- Flow property / unit: Mass / kg
- Amount rule: measured mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted fish input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation`
- Range: Provisional preparation-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg/kg accepted fish input
  - Basis: preparation offcuts and rejects per kg accepted fish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater sent to treatment, including entrained solids when separately measured.

- Selected flow: Wastewater by actual receiving treatment; UUID pending exact identity review
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: metered discharge or water input minus measured carryover and evaporation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation`
- Range: Provisional preparation-wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg prepared fish
  - Basis: wastewater per kg prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Salting, brining, or brine holding (`salting_or_brining`)

#### Inputs

##### Product flows

###### Prepared fish for preservation (`fish_for_salting`)

Record prepared fish entering the declared salting or brining route.

- Selected flow: Prepared fish intermediate; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured prepared fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg salted or brined fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_batch`

###### Food-grade salt (`food_grade_salt`)

Record new food-grade salt added by dry salting, wet salting, brining, injection, pickling, or replenishment; do not assume reused salt.

- Selected flow: Sodium chloride or food-grade salt by actual supply; UUID pending exact identity review
- Flow property / unit: Mass / kg
- Amount rule: weighed salt added to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg salted or brined fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional salt-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kg/kg salted or brined fish output
  - Basis: food-grade salt input per kg preserved fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Brine make-up water (`brine_water`)

Record potable water used to prepare or replenish brine when the route uses brine.

- Selected flow: Potable water by actual supply; UUID pending exact identity review
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: metered or batch-weighed make-up water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg salted or brined fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional brine-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg salted or brined fish output
  - Basis: brine make-up water per kg preserved fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Salted or brined fish intermediate (`salted_or_brined_fish`)

Record preserved fish mass and the route's measured salt/brine, time, temperature, and release criteria.

- Selected flow: Salted or brined fish intermediate; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured fish-plus-retained-brine mass on the explicitly declared basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg preserved fish intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_batch`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Spent brine and salt-bearing wastewater (`spent_brine`)

Record spent brine, drainage, and cleaning discharge separately from freshwater wastewater where treatment differs.

- Selected flow: Spent brine or salt-bearing wastewater by actual treatment; UUID pending exact identity review
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: measured discharge or batch balance by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg salted or brined fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_batch`
- Range: Provisional spent-brine QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg salted or brined fish output
  - Basis: spent brine and salt-bearing wastewater per kg output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Non-smoking drying (`non_smoking_drying`)

#### Inputs

##### Product flows

###### Fish entering drying (`fish_for_drying`)

Record fish mass entering non-smoking drying and its prior salting state.

- Selected flow: Prepared or salted fish intermediate; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass at dryer entry
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`

###### Drying energy (`drying_energy`)

Record electricity and fuels consumed by fans, heaters, dehumidification, controls, and attributable auxiliary equipment; exclude smoking fuel.

- Selected flow: Electricity and/or fuel carrier by actual dryer technology; UUIDs pending exact identity review
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered or engineering-allocated energy for the drying batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dried product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Provisional drying-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/kg dried product
  - Basis: combined electrical-equivalent screen per kg dried product output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Dried fish intermediate (`dried_fish`)

Record final dried fish mass and the product-specific validated drying endpoint; no universal moisture or water-activity limit is asserted by this PCR.

- Selected flow: Dried fish intermediate; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured conforming dried fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Drying rejects (`drying_rejects`)

Record off-specification fish removed after drying and its disposition.

- Selected flow: Off-specification dried fish by actual disposition; UUID pending exact identity review
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg fish entering drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Provisional drying-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg fish entering drying
  - Basis: off-specification dried fish per kg dryer input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Sorting, packing, and route-required storage (`packing_and_storage`)

#### Inputs

##### Product flows

###### Conforming preserved fish for packing (`fish_for_packing`)

Record dried, salted, or brined product transferred to sorting and packing without double counting internal transfers.

- Selected flow: Conforming preserved fish intermediate; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass at packing entry
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_storage`

###### Primary and secondary packaging (`packaging_materials`)

Record each packaging material by type and measured or bill-of-material mass.

- Selected flow: Packaging material by actual polymer, paper, metal, glass, wood, or composite; UUIDs pending exact identity review
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material or weighed packaging issued minus returned unused packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_storage`
- Sources: `codex-cxc-52-2003`
- Range: Provisional packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kg/kg net reference product
  - Basis: total packaging issued per kg net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage energy (`storage_energy`)

Record route-required refrigeration, ventilation, or humidity-control energy through the facility gate.

- Selected flow: Electricity and/or fuel carrier by actual storage system; UUIDs pending exact identity review
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered energy allocated by occupied capacity-time or another disclosed causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_storage`
- Range: Provisional storage-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg reference product
  - Basis: combined electrical-equivalent screen through the facility gate
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Reference fish product (`reference_product`)

The conforming packed product is the quantitative reference for all normalized foreground amounts.

- Selected flow: Fish, dried but not smoked, salted but not dried or smoked, or in brine `39347f84-4a1d-414b-89f0-746f31b01aa6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net product mass, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packing rejects and packaging waste (`packing_waste`)

Record off-specification product and packaging waste separately by treatment or recovery destination.

- Selected flow: Product reject and packaging waste by actual material and destination; UUIDs pending exact identity review
- Flow property / unit: Mass / kg
- Amount rule: measured mass by waste type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_storage`
- Range: Provisional packing-waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: packing rejects and packaging waste per kg net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Shared or multi-output foreground operations | First avoid allocation through process subdivision or by expanding the system where the substituted function is demonstrable and consistent with the study goal. | eu-pef-2021-2279 |
| `allocation_physical_second` | Unavoidable joint processes with a causal physical relationship | Allocate by a measured causal physical relationship such as mass, processing time, occupied capacity-time, or metered energy; explain why the driver represents resource use or emissions. | eu-pef-2021-2279 |
| `allocation_other_relation_last` | Unavoidable joint processes without a defensible physical relationship | Use another documented relationship, normally economic value over a representative period, only after the preceding options are infeasible; disclose prices, period, currency, shares, and sensitivity. | eu-pef-2021-2279 |
| `co_product_or_waste_status` | Offcuts, rejected fish, recovered salt/brine, and other outputs | Classify an output as a co-product only when it has a documented destination and function or market value; otherwise model it as waste to the actual treatment. Do not credit avoided burden without an explicit system-expansion model. | eu-pef-2021-2279 |
| `internal_flow_no_double_count` | Intermediate fish transferred between foreground steps | Internal transfers carry mass for balance checks but do not introduce a second upstream burden. | eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fish_receipt` | `fish_receipt_and_conditioning` | Received fish, rejects, thaw loss, and conditioning energy | Weighbridge/scale, receiving inspection, temperature log, meter, supplier lot record | lot_id; species; product_form; origin; input_state; gross_mass; tare_mass; accepted_mass; reject_mass; thaw_loss; receipt_temperature; holding_time; electricity; fuel; disposition | Calibrated weighing, acceptance inspection, continuous or batch temperature record, and attributable meter/invoice reading | kg; °C; h; kWh; MJ | Every lot; energy at least each production campaign | Representative operating period including normal seasonal variation | Each included facility and receiving/storage area | Sum lot quantities; subtract tare; allocate shared conditioning energy by measured causal driver; normalize to conforming output | Calibration, supplier specification, acceptance decision, temperature trace, meter reconciliation, and lot linkage |
| `cp_preparation` | `fish_preparation` | Fish input/output, water, offcuts, and wastewater | Batch sheet, calibrated scale, water meter, waste ticket | lot_id; input_mass; prepared_mass; water_input; offcut_mass_by_disposition; reject_mass; wastewater_volume; solids_mass | Batch weighing and metering with disposition-specific waste records | kg; m3 | Every batch or continuous meter interval linked to batches | Representative operating period | Each preparation line | Mass balance by batch; aggregate only like product forms and routes; normalize to prepared and final outputs | Scale/meter calibration, batch reconciliation, and waste destination evidence |
| `cp_salting_batch` | `salting_or_brining` | Fish, salt, brine water, preserved output, spent brine, time, and temperature | Recipe/batch sheet, scales, flow meter, salinometer or validated concentration test, temperature logger | lot_id; method; fish_input_mass; salt_mass; brine_water; brine_concentration; make_up; time; temperature; output_mass; spent_brine; discharge_destination | Weigh each batch addition and output; monitor concentration, time, and temperature under the validated plan | kg; m3; concentration unit; °C; h | Every batch with monitoring frequency defined by HACCP/quality plan | Representative operating period | Each salting/brining line and vessel | Batch mass balance; no averaging across materially different methods; normalize to preserved output and reference product | Calibration, recipe authorization, concentration checks, temperature/time record, corrective action, and lot release |
| `cp_drying_batch` | `non_smoking_drying` | Dryer input/output, energy, endpoint, and rejects | Batch sheet, calibrated scales, energy meters, time/temperature/humidity logs, validated endpoint test | lot_id; dryer_id; input_mass; output_mass; reject_mass; electricity; fuel; start_time; end_time; temperature_profile; humidity_profile; endpoint_method; endpoint_result | Weigh input/output; meter energy; record operating profile; test the declared endpoint by validated method | kg; kWh; MJ; °C; h; declared endpoint unit | Every batch or continuous run segment | Representative seasons and loading conditions | Each dryer technology and site | Separate technologies and recipes; calculate yield and specific energy; normalize to dried and final product | Calibration, meter reconciliation, endpoint test record, deviation/corrective action, and lot release |
| `cp_packing_storage` | `packing_and_storage` | Product, packaging, rejects, storage energy, duration, and temperature | Packing bill of materials, scales, warehouse system, temperature logger, meter, waste record | lot_id; packed_net_mass; drained_mass_if_applicable; packaging_mass_by_material; rejects; storage_start; storage_end; temperature_profile; energy; occupied_capacity; waste_destination | Weigh or reconcile packing materials and product; meter storage energy; continuously or periodically log storage condition under validated plan | kg; h; °C; kWh; MJ | Every packing lot; storage energy and conditions over attributable intervals | Representative operating period | Each packing line and storage system | Normalize packaging by net product; allocate storage energy by occupied capacity-time unless a better causal driver is measured | Net-content check, material reconciliation, temperature trace, meter calibration, lot code, and release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground inventory row | normalized amount = attributable row amount / conforming net reference-product mass | attributable row amount; conforming net product kg | amount per 1 kg reference product |  |
| `calc_process_mass_balance` | Each fish-processing step | mass-balance residual = total measured mass inputs - total measured product, co-product, waste, wastewater-solids, retained-brine, and measured moisture-loss outputs; investigate material residuals using uncertainty and missing-flow records | batch input/output masses and moisture/brine basis | residual and completeness flag |  |
| `calc_yield` | Preparation, preservation, drying, and packing | process yield = conforming process-output mass / eligible process-input fish mass on the same declared basis | eligible fish input; conforming output | kg/kg yield |  |
| `calc_shared_energy` | Shared meters | attributable energy = measured shared energy x documented causal share; use production time, metered load, occupied capacity-time, or another justified physical driver before economic allocation | meter total; causal driver totals; product share | attributable kWh or MJ | eu-pef-2021-2279 |
| `calc_allocation_share` | Multi-output process | Apply the selected Section 7 hierarchy and calculate shares from the same period and boundary as the allocated inventory; shares must sum to 1 within numerical tolerance | subdivided inventory or physical/economic driver data | allocated inventory and allocation shares | eu-pef-2021-2279 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Fish and reference product | Preserve supplier, species/product identity, origin where known, lot chain, input and output state, and the declared CPC 21231 route through final lot release. | Receiving record, supplier specification, batch genealogy, product specification, and lot code |
| `dq_measurement_control` | Mass, water, energy, concentration, temperature, time, and endpoint measurements | Use calibrated or verified instruments suitable for the operating range; preserve raw readings, units, conversion factors, calibration status, and data substitutions. | Calibration/verification records, meter reconciliation, laboratory method, and calculation sheet |
| `dq_temporal_representativeness` | Foreground activity data | Cover a representative operating period including relevant species, route, technology, load, and seasonal variation; disclose shutdowns, atypical batches, and exclusions. | Production calendar, batch coverage table, and representativeness assessment |
| `dq_completeness` | Process inventory | Reconcile fish mass through each process and collect all material fish, salt, brine, water, energy, packaging, refrigerant loss where relevant, wastewater, rejects, co-products, and treatment destinations. | Process mass balance, utility reconciliation, waste tickets, and completeness checklist |
| `dq_food_safety_quality` | Processing and release controls | Maintain prerequisite programmes and a product/route-specific HACCP and defect-control plan, including limits, monitoring, corrective actions, verification, and release criteria required by applicable law and specification. | HACCP plan, monitoring logs, deviations, corrective actions, verification, test results, and release authorization; `codex-cxc-52-2003` |
| `dq_proxy_disclosure` | Upstream and missing foreground data | Identify every proxy, gap-filled value, estimate, allocation, and unverified UUID; report its effect and replacement priority. | Data-gap register, sensitivity result, and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require reference product UUID `39347f84-4a1d-414b-89f0-746f31b01aa6`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg net product. |  |
| `validate_required_qualifiers` | Dataset metadata and product description | Fail completeness when any required qualifier in Section 3 is missing or when drained/undrained basis is ambiguous for a brined product. | unsd-cpc-3-0-2025 |
| `validate_route_scope` | Process map | Require salting/brining only when used, require non-smoking drying for the dried route, prohibit smoking under this PCR, and disclose all omitted conditional steps. | codex-cxc-52-2003; unsd-cpc-3-0-2025 |
| `validate_mass_balance` | Each foreground process and whole foreground system | Require a documented mass balance on consistent wet/drained/dry bases; investigate and disclose material residuals rather than forcing closure. |  |
| `validate_haccp_records` | Food-safety and quality controls | Require a route- and product-specific HACCP/prerequisite record set with monitoring, corrective action, verification, and lot-release evidence. | codex-cxc-52-2003 |
| `validate_salting_brining_controls` | Salted or brined routes | Require food-grade salt, potable brine water, measured salt or brine input, declared method, time/temperature and concentration controls where applicable, and spent-brine destination. | codex-cxc-52-2003 |
| `validate_drying_endpoint` | Dried route | Require a product-specific validated drying endpoint and method, recorded operating conditions, and confirmation that no smoking operation occurred; this PCR does not supply a universal endpoint value. | codex-cxc-52-2003 |
| `validate_chilled_storage` | Salt-matured fish requiring chilled storage | Require storage between 1 °C and 4 °C with recorded time and temperature unless a stricter applicable product specification governs. | codex-cxc-52-2003 |
| `validate_allocation` | Multi-output and shared operations | Require the Section 7 hierarchy, causal-driver evidence, shares summing to 1, and disclosure/sensitivity for any economic or other-relation allocation. | eu-pef-2021-2279 |
| `validate_provisional_ranges` | Reasoned-estimate QA ranges | Treat every `reasoned_estimate` range as a non-binding review screen; do not substitute it for foreground data or claim source-backed representativeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a declared dried, salted, or brined fish route |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed for representativeness and reuse |
| allowed_use | Product carbon footprint, LCA, EPD, supply-chain, and process-improvement studies that match the declared species/product form, preservation route, geography, technology, storage, and time |
| excluded_use | Smoked or smoke-dried fish, edible fish meal, fish offal categories, cooked/canned or otherwise prepared fish, unqualified generic seafood proxies, or public comparative assertions without applicable review |
| required_metadata | PCR id/version; reference UUIDs; species and origin; product form; input state; preservation route and method; dried endpoint claim; brine/net-mass basis; storage regime; packaging; facility geography; technology; reference year; allocation; upstream datasets; exclusions |
| required_quality_disclosure | Foreground coverage, calibration, mass balance, HACCP/quality evidence, route-specific limits, proxies, provisional estimates, unverified UUIDs, allocation sensitivity, data gaps, and review status |
| update_trigger | Material change in species mix, source fish, route, salting/brining recipe, dryer or storage technology, preservation endpoint, packaging, energy supply, facility, law/specification, allocation driver, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21231, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-06-23) | Product-category scope and exclusions |
| `codex-cxc-52-2003` | official_guidance | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products; https://www.fao.org/input/download/standards/10273/CXP_052e.pdf (accessed 2026-08-11) | Receiving and preparation, salting/brining/drying process decomposition, hygiene and HACCP controls, packaging, quality records, and route-dependent chilled storage |
| `codex-cxs-190-1995` | standard | Codex Alimentarius, CXS 190-1995, Standard for Quick Frozen Fish Fillets | Conditional incoming-material specification only when a quick-frozen fish fillet is used and is within the standard's scope; no category-wide numerical rule is imported |
| `eu-pef-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint method, CELEX 32021H2279; https://eur-lex.europa.eu/eli/reco/2021/2279/oj | System boundary linkage, multi-functionality hierarchy, shared-resource allocation, and co-product handling |
