---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.crustaceans-otherwise-prepared-or-preserved
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Crustaceans, otherwise prepared or preserved

## 1. Scope and Applicability

This PCR guides production of foreground data packages for crustaceans that are prepared or preserved by operations other than simple freezing, salting, drying, or brining. It covers crabs, prawns, shrimps, lobsters, crayfish, rock lobsters, and other food crustaceans that are boiled, steamed, fried, roasted, otherwise cooked, placed in vinegar, oil, marinade, or sauce, made into paste or pâté, smoked, canned or packed in airtight containers, pasteurized, sterilized, breaded, or otherwise prepared or preserved.

The foreground boundary begins when declared raw, chilled, frozen, live, or previously processed crustacean material is accepted at the processing facility and ends with the packaged product at the manufacturing plant gate. Route-specific operations are included only when they occur. Upstream production of crustaceans, ingredients, packaging, energy carriers, water supply, and other purchased inputs is represented through linked datasets. Distribution, retail, consumer preparation, use, and end-of-life are outside this foreground boundary unless a broader study links separate datasets for those stages.

Complete prepared dishes or meals, crustaceans preserved only by freezing, salting, drying, or brining, and extracts or juices of crustaceans are excluded. This PCR does not prescribe food-safety critical limits; applicable legal, customer, HACCP, and product-specification requirements remain authoritative and their monitored process parameters must be retained as foreground evidence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.crustaceans-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0: 21270, exact scope reference |
| covered_products | Food crustaceans prepared or preserved by cooking, frying, roasting, smoking, marination, sauce formulation, paste or pâté manufacture, breading, canning, airtight packing, pasteurization, sterilization, or another treatment beyond simple freezing, salting, drying, or brining |
| excluded_products | Complete prepared dishes or meals; crustaceans only frozen, salted, dried, or in brine; crustacean extracts and juices; live, fresh, or chilled crustaceans without the covered preparation or preservation |
| representative_product | Packaged prepared or preserved crustacean product at the manufacturing plant gate |
| production_route | Receipt and conditioning; preparation and cleaning; route-specific formulation or preservation; route-specific cooling, chilling, or freezing; packaging, labelling, and factory-gate storage; cleaning and wastewater or residue management |
| market_state | Declared chilled, frozen, shelf-stable, canned, airtight-packed, smoked, marinated, sauced, breaded, paste, pâté, or other finished manufactured state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Prepared or preserved crustacean food product delivered at the manufacturing plant gate |
| How much | 1 kg net product, excluding transport packaging not sold with the product |
| How well | Conforming to the declared species or product group, recipe, preparation or preservation route, shell state, cooking or ready-to-eat state, packaging system, legal requirements, and release specification |
| How long or cycle | One released production lot at the plant gate; declared storage condition and intended shelf-life apply |
| reference_flow_link | 1 kg of the reference product flow represents the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Crustaceans, otherwise prepared or preserved `d844fbf5-2247-4c2d-8071-7dab57ad8c77` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | crustacean species or commercial group; wild or farmed origin when known; incoming material state; shell, peeled, and deveined state; preparation or preservation route; cooking and ready-to-eat status; formulation and additives; product moisture or drained-weight basis when relevant; packaging format and net mass; chilled, frozen, or ambient storage condition; intended shelf-life; production facility, geography, and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground results to 1 kg released net product at the factory gate. State whether declared net mass or drained mass is used and do not include secondary or tertiary transport packaging in product mass. |
| `ingredient_mass_basis` | Raw crustaceans, ingredients, additives, packaging, residues, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert scale, invoice, recipe, and stock-change records to kg on the same wet, dry, drained, or as-purchased basis used in the named record; disclose conversions and moisture or concentration assumptions. |
| `utility_unit_preservation` | Electricity, fuel, steam, refrigeration, and direct heat | Route-specific energy or fuel property | kWh, MJ, kg, or m3 as recorded | Preserve the metered or invoiced unit, document every conversion factor, and normalize only after subtracting excluded uses and applying a documented shared-resource rule. |
| `water_balance_basis` | Process, cooling, ice, cleaning, and sanitation water | Mass or volume | kg or m3 | Keep supplied water, water retained in product, evaporated water, segregated clean water, and wastewater distinct. Convert volume to mass only with a documented density and temperature basis. |
| `packaging_mass_basis` | Primary and sale-unit packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging material by component and actual mass per released net product. Keep reusable and one-way packaging separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted crustacean raw material at the processing facility, with species or commercial group, wild or farmed origin when known, supplier, incoming live/chilled/frozen/previously processed state, shell state, preservation history, temperature condition, additives, lot mass, and rejection status declared |
| starting_condition_role | Upstream product input to foreground manufacturing |
| product_classification_scope | Crustaceans prepared or preserved beyond simple freezing, salting, drying, or brining, consistent with CPC 3.0 subclass 21270 |
| recursive_input_rule | A purchased input already within this PCR category is linked as a separate upstream product dataset and is not recursively decomposed inside the consuming process; its mass, route, supplier, and dataset reference must be disclosed |
| upstream_dataset_requirement | Link representative datasets for wild capture or aquaculture and primary handling of raw crustaceans, all purchased ingredients and additives, packaging materials, electricity, fuels, water supply, refrigerants, and externally treated wastes or wastewater |
| disclosure | Declare included and omitted route steps, facility and geography, reporting period, product mix, allocation, material state, formulation, thermal or preservation treatment, cooling or storage regime, packaging, upstream dataset choices, cut-offs, and data gaps |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate_to_gate` | foreground_manufacturing | Include all on-site operations from accepted incoming crustacean material through release of packaged product at the manufacturing plant gate, including utilities, cleaning, refrigeration, and on-site emission or waste handling attributable to production. | `codex-cxc-52-2003`; `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `sb_route_conditionals` | route_specific_operations | Model only the preparation, cooking, frying, smoking, marination, sauce, breading, canning, pasteurization, sterilization, cooling, freezing, and storage operations that occur for the declared product; provide a process-flow diagram and identify excluded alternatives. | `unsd-cpc-3-0-21270`; `codex-cxc-52-2003` |
| `sb_upstream_links` | purchased_inputs | Represent raw crustacean production, ingredients, additives, packaging, energy, water supply, refrigerants, and external treatment with linked upstream datasets rather than omitting their burdens. | `eu-pef-2021-2279` |
| `sb_foreground_streams` | waste_and_emissions | Identify foreground co-products, residues, product losses, wastewater streams, waste gases, refrigerant losses, and direct emissions to air, water, and soil; keep clean segregated water distinct from contaminated wastewater. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `sb_cutoff_disclosure` | exclusions_and_cutoffs | Avoid cut-offs. Any excluded process or flow must be explicitly identified, justified using material, energy, and environmental significance, and reported as a limitation; known hazardous, toxic, or route-defining flows may not be excluded solely for low mass. | `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | downstream_stages | Exclude distribution beyond the plant gate, retail, consumer preparation, consumption, and end-of-life from this foreground dataset; broader studies must link separate datasets and avoid double counting. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | Raw-material receipt, conditioning, preparation, and cleaning | `required` | Always included; individual holding, thawing, washing, grading, shelling, peeling, deveining, trimming, or cutting steps follow the declared incoming state | Foreground material preparation | kg prepared crustacean intermediate |
| `preservation_processing` | Formulation and preparation or preservation treatment | `required` | Include the actual route: cooking, steaming, frying, roasting, smoking, marination, sauce or oil addition, paste or pâté manufacture, breading, canning, airtight packing, pasteurization, sterilization, or another covered treatment | Foreground transformation and preservation | kg preserved bulk product |
| `cooling_storage` | Cooling, chilling, freezing, glazing, and intermediate storage | `conditional` | Include when the declared route uses active cooling, chilled or frozen storage, freezing after preservation, glazing, or refrigerated holding | Foreground temperature control | kg temperature-conditioned product |
| `packaging_release` | Primary packaging, labelling, finished-product storage, and release | `required` | Always included; packaging form and storage condition are product-specific | Foreground completion and factory-gate reference output | 1 kg released net product |
| `cleaning_waste_management` | Cleaning, sanitation, residue segregation, wastewater, and on-site treatment | `required` | Include routine and changeover cleaning; model on-site treatment directly and externally treated streams as outgoing waste flows | Cross-cutting foreground support and emission control | allocated service per 1 kg released net product |

### Process: Raw-material receipt, conditioning, preparation, and cleaning (`receipt_preparation`)

#### Inputs

##### Product flows

###### Incoming crustacean raw material (`rp_raw_crustacean`)

Record every accepted lot by species or commercial group, origin, incoming state, shell state, preservation history, and mass. Select a route-specific Tiangong product flow and linked upstream dataset for the declared raw material.

- Selected flow: Route-specific crustacean product flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: accepted raw-material mass consumed by the production lots yielding the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_materials`
- Sources: `unsd-cpc-3-0-21270`; `codex-cxc-52-2003`
- Range: Provisional raw-material screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: accepted raw crustacean mass per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation, thawing, washing, and ice water (`rp_process_water`)

Record metered or mass-balanced water and ice used for thawing, washing, cleaning the product, or maintaining temperature in this process. Keep water reused under a verified hygienic control separately identified.

- Selected flow: Route- and location-specific process water flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured supplied water plus ice, less separately metered recovered water returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- Range: Provisional preparation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: supplied preparation water and ice per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared crustacean intermediate (`rp_prepared_intermediate`)

Calculate the mass transferred to preservation processing from lot records after sorting, washing, shelling, peeling, deveining, trimming, or other declared preparation.

- Selected flow: Product-specific intermediate product flow; UUID required if represented as a separate Tiangong exchange
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass or accepted raw mass minus measured preparation residues and attributable losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared intermediate transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_materials`
- Sources: `codex-cxc-52-2003`

###### Recovered shell or edible residue co-product (`rp_recovered_coproduct`)

Record shells, meat fragments, or other separated material as a product co-product only when a documented market, permitted use, and traceable destination exist; otherwise record the material as waste.

- Selected flow: Destination-specific co-product flow; UUID required when classified as a product output
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass leaving the process with documented product status and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Unrecovered shells, viscera, rejects, and preparation residues (`rp_solid_residue`)

Record each residue by type, mass, legal status, treatment route, and destination. Do not classify a stream as burden-free merely because it has low or no sale value.

- Selected flow: Route-specific waste flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured residue and rejected-lot mass sent to each destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- Range: Provisional preparation-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: preparation residues per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`rp_preparation_wastewater`)

Record wastewater volume or mass separately from clean segregated water and identify whether it enters on-site treatment or an external treatment system.

- Selected flow: Site-specific wastewater flow; UUID required in the foreground data package
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured or water-balanced wastewater leaving preparation operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional preparation-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: preparation wastewater per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Formulation and preparation or preservation treatment (`preservation_processing`)

#### Inputs

##### Product flows

###### Prepared crustacean intermediate input (`pp_prepared_input`)

Transfer the prepared intermediate without double counting its upstream burdens.

- Selected flow: Same intermediate identity as `rp_prepared_intermediate`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or calculated prepared-intermediate transfer mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_materials`
- Sources: `codex-cxc-52-2003`

###### Ingredients, additives, coating, oil, sauce, or packing medium (`pp_ingredients`)

Record each recipe component separately by material identity, concentration or as-purchased state, mass, supplier, and lot. Include retained water and cooking or frying oil; do not combine materially different ingredients into an unexplained balance item.

- Selected flow: Ingredient-specific Tiangong product flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued quantity plus stock decrease minus documented return or recovery for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_materials`
- Sources: `unsd-cpc-3-0-21270`; `codex-cxc-52-2003`
- Range: Provisional formulation-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: total retained and consumed ingredients per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy, steam, or fuel for preservation (`pp_thermal_energy`)

Record the route-specific energy carrier used for cooking, steaming, frying, roasting, smoking, pasteurization, sterilization, or retort operation. Separate direct fuel from purchased steam and include startup, holding, and attributable cleaning energy.

- Selected flow: Site-specific fuel, heat, or steam flow; UUID required in the foreground data package
- Flow property / unit: Route-specific energy or fuel property / MJ, kWh, kg, or m3
- Amount rule: direct meter or invoice-and-stock-balance consumption allocated to the covered production route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- Range: Provisional thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg reference product
  - Basis: delivered thermal energy per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Processing electricity (`pp_electricity`)

Record electricity for conveyors, grinders, mixers, cutters, fryers, smoke systems, pumps, retorts, controls, and other route equipment, excluding separately recorded cooling and packaging electricity.

- Selected flow: Location- and voltage-specific electricity flow; UUID required in the foreground data package
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented shared-meter allocation to preservation processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- Range: Provisional processing-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg reference product
  - Basis: processing electricity per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved bulk crustacean product (`pp_preserved_bulk`)

Record the bulk product after the declared preservation step and before route-specific final cooling or packaging.

- Selected flow: Product-specific intermediate product flow; UUID required if represented as a separate Tiangong exchange
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass reconciled with raw material, ingredients, residues, retained media, evaporation, and other losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_materials`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Preservation residues, spent media, and product losses (`pp_process_residue`)

Record spent frying oil, marinade or sauce losses, coating losses, retort rejects, off-specification product, and other route-specific residues separately by destination.

- Selected flow: Route-specific waste flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass sent to recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional preservation-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: preservation residues per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation wastewater (`pp_process_wastewater`)

Record cooking, cooling, brine, sauce, retort, fryer-cleaning, and other wastewater streams by source when they differ materially in treatment or pollutant load.

- Selected flow: Site-specific wastewater flow; UUID required in the foreground data package
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured discharge or water-balance result for preservation processing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional preservation-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: preservation wastewater per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Route-specific direct air emissions (`pp_direct_air_emissions`)

Quantify direct emissions from smoking, combustion, frying, or other on-site route equipment when present. Record each elementary flow separately using measurement or a documented activity-data calculation; do not use this aggregate role as the final exchange identity.

- Selected flow: Pollutant-specific elementary flow; UUID required in the foreground data package
- Flow property / unit: Mass / kg
- Amount rule: measured emission or activity data multiplied by a documented emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Cooling, chilling, freezing, glazing, and intermediate storage (`cooling_storage`)

#### Inputs

##### Product flows

###### Preserved bulk product for temperature conditioning (`cs_bulk_input`)

Transfer the preserved bulk product to the actual cooling, chilling, freezing, glazing, or refrigerated holding route.

- Selected flow: Same intermediate identity as `pp_preserved_bulk`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass entering temperature conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg temperature-conditioned product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_materials`
- Sources: `codex-cxc-52-2003`

###### Cooling, freezing, and storage electricity (`cs_refrigeration_electricity`)

Record electricity for chillers, freezers, cold rooms, pumps, fans, glazing systems, and attributable refrigerated holding.

- Selected flow: Location- and voltage-specific electricity flow; UUID required in the foreground data package
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or engineering allocation based on equipment load and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- Range: Provisional refrigeration-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg reference product
  - Basis: cooling, freezing, and storage electricity per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing or cooling water (`cs_cooling_water`)

Record once-through, recirculated, and retained water separately and identify hygienic restrictions on reuse.

- Selected flow: Route- and location-specific process water flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured makeup water plus retained glaze water, with recirculated water reported separately and not counted repeatedly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- Range: Provisional cooling-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: cooling and glazing makeup water per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Temperature-conditioned product (`cs_conditioned_product`)

Record the product mass and declared temperature state transferred to packaging or released storage.

- Selected flow: Product-specific intermediate product flow; UUID required if represented as a separate Tiangong exchange
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass including retained glaze where sold as part of the declared net product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg temperature-conditioned product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_materials`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Cooling and glazing wastewater (`cs_cooling_wastewater`)

Record discharged cooling or glazing water separately from uncontaminated closed-loop water and identify its treatment route.

- Selected flow: Site-specific wastewater flow; UUID required in the foreground data package
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured discharge or cooling-water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional cooling-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: cooling and glazing wastewater per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant losses (`cs_refrigerant_loss`)

Record each refrigerant by substance and calculate attributable leakage from verified charge, recovery, and top-up records when direct measurement is unavailable.

- Selected flow: Refrigerant-specific elementary flow to air; UUID required in the foreground data package
- Flow property / unit: Mass / kg
- Amount rule: annual or campaign refrigerant top-up plus unrecovered charge change, allocated to the covered product under `calc_shared_resources`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional refrigerant-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg reference product
  - Basis: refrigerant loss per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary packaging, labelling, finished-product storage, and release (`packaging_release`)

#### Inputs

##### Product flows

###### Product entering packaging (`pk_product_input`)

Use the preserved bulk or temperature-conditioned product appropriate to the declared route and keep its upstream burdens linked once.

- Selected flow: Same intermediate identity as `pp_preserved_bulk` or `cs_conditioned_product`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass transferred to the packaging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging-line output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_materials`
- Sources: `codex-cxc-52-2003`

###### Primary and sale-unit packaging materials (`pk_packaging_materials`)

Record cans, jars, pouches, films, trays, cartons, labels, closures, absorbent pads, and other packaging components separately by material and mass. Include secondary packaging only when it is part of the sold unit; otherwise model it as transport packaging outside reference product mass.

- Selected flow: Material-specific packaging product flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: packaging bill of materials reconciled with issued, returned, damaged, and scrapped components
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`
- Range: Provisional packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: primary and sold-unit packaging per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and finished-storage electricity (`pk_electricity`)

Record filling, sealing, labelling, inspection, conveyors, and attributable finished-product cold or ambient storage electricity.

- Selected flow: Location- and voltage-specific electricity flow; UUID required in the foreground data package
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from equipment load, operating time, and storage occupancy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- Range: Provisional packaging-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg reference product
  - Basis: packaging and finished-storage electricity per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released reference product (`pk_reference_product`)

This is the quantitative reference. The released lot must carry all required qualifiers and pass the declared release specification.

- Selected flow: Crustaceans, otherwise prepared or preserved `d844fbf5-2247-4c2d-8071-7dab57ad8c77`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg released net product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Packaging scrap and rejected packed product (`pk_packaging_waste`)

Record packaging scrap separately by material and keep rejected packed product distinct from clean packaging scrap so product content and packaging destinations remain traceable.

- Selected flow: Material- and treatment-specific waste flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured packaging scrap and rejected packed-product mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional packaging-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: packaging scrap and rejected packed product per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning, sanitation, residue segregation, wastewater, and on-site treatment (`cleaning_waste_management`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`cw_cleaning_water`)

Record water used for equipment, floors, containers, cleaning-in-place, sanitation, and changeovers. Keep water reused after treatment separately identified and prevent repeated counting of recirculated volumes.

- Selected flow: Route- and location-specific process water flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured cleaning-water supply less separately metered recovered water returned within the same foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- Range: Provisional cleaning-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: cleaning and sanitation water per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning chemicals and treatment consumables (`cw_cleaning_chemicals`)

Record each detergent, disinfectant, pH-control chemical, flocculant, and other treatment consumable by formulation mass and active concentration where relevant.

- Selected flow: Chemical-specific product flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued mass plus stock decrease minus documented return for covered operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_materials`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional cleaning-chemical screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: formulated cleaning and treatment chemicals per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Collected process wastewater (`cw_wastewater_input`)

When treatment is on-site, transfer each wastewater stream as a waste input without duplicating the upstream process output. When treatment is external, omit this on-site transfer and retain the outgoing waste exchange from the generating process.

- Selected flow: Same wastewater identities as generating process outputs
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: sum of measured wastewater transfers to on-site treatment after excluding segregated uncontaminated water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered water or usable residue (`cw_recovered_output`)

Record recovered water, biogas, animal-feed material, or another usable output only with a measured quantity, quality specification, permitted use, and documented destination. Internal recirculation is reported once and does not create an avoided upstream burden unless the downstream model explicitly applies a supported substitution rule.

- Selected flow: Destination-specific recovered product flow; UUID required when represented as a product output
- Flow property / unit: Route-specific property and unit
- Amount rule: measured recovered output delivered to internal reuse or an external user
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

###### Wastewater-treatment sludge and separated solids (`cw_treatment_residue`)

Record treatment residues by wet or dry mass basis, composition when available, treatment route, and destination.

- Selected flow: Treatment-specific waste flow; UUID required in the foreground data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured sludge and separated-solids mass leaving on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional treatment-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: wet treatment residue per kg released net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated effluent emissions to water (`cw_treated_effluent`)

For direct discharge, record effluent water and each relevant pollutant as separate elementary flows calculated from measured flow and representative concentrations. For discharge to an external treatment system, use a wastewater waste flow instead.

- Selected flow: Water- and pollutant-specific elementary flows; UUIDs required in the foreground data package
- Flow property / unit: Mass / kg
- Amount rule: measured effluent flow multiplied by the representative measured concentration for each pollutant, with unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-fdm-bat-2019-2031`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared_processes_and_outputs | Avoid allocation first by subdividing production lines, batches, meters, and process records or by expanding the system when the additional function is explicitly part of the study. | `eu-pef-2021-2279` |
| `allocation_physical` | unavoidable_multifunctionality | When subdivision or system expansion is not practicable, allocate inputs and outputs using a documented causal physical relationship such as independently measured mass, processing time, equipment load, or another driver relevant to the shared operation. | `eu-pef-2021-2279` |
| `allocation_other_relationship` | no_relevant_physical_relationship | Use another relationship, including economic value at the specific production stage, only after documenting why subdivision, system expansion, and relevant physical allocation are not applicable; disclose price period, geography, source, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_residue_status` | shells_offcuts_recovered_material_and_waste | Determine whether each shell, offcut, spent medium, recovered ingredient, or other residue is a co-product or waste from its legal status, actual destination, quality specification, and transaction evidence; do not assign avoided burdens automatically. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `allocation_factor_check` | allocated_inventory | Allocation factors for each shared inventory block must be non-negative, mutually exclusive, sum to 1 within rounding tolerance, and preserve the unallocated totals in an audit table. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_materials` | `receipt_preparation`; `preservation_processing`; `cooling_storage`; `packaging_release`; `cleaning_waste_management` | raw material, intermediate, ingredients, additives, chemicals, and final product | weighbridge, calibrated scale, recipe, batch, invoice, and stock record | lot_id; product_id; supplier; species_or_group; origin; incoming_state; shell_state; material_id; concentration; opening_stock; received; issued; returned; closing_stock; measured_mass; timestamp | Reconcile calibrated scale and batch records with procurement and stock change; retain recipe revisions and rejected-lot records | kg and declared concentration basis | each lot or batch, aggregated monthly | full representative reporting period; normally 12 consecutive months or a complete seasonal campaign with justification | all included lines and production shifts at the declared facility | Sum consumed mass by material and route, link to released product lots, and normalize under `calc_reference_normalization` | calibration records; inventory reconciliation; lot traceability; signed recipe and release records |
| `cp_route_conditions` | `receipt_preparation`; `preservation_processing`; `cooling_storage`; `packaging_release` | processing route and product state | process log, HACCP or control record, equipment historian, and release specification | lot_id; process_step; equipment_id; start_time; end_time; temperature; pressure; humidity; storage_condition; preservation_medium; cooking_or_treatment_status; deviation; corrective_action | Export verified process records and retain route-specific critical or quality control evidence without replacing applicable food-safety requirements | native process units | each lot and monitored control interval | full reporting period | all included route equipment | Associate each lot with the steps actually used; summarize duration and condition distributions without averaging away deviations | instrument calibration; reviewed control logs; deviation and release decisions |
| `cp_utility_meters` | `receipt_preparation`; `preservation_processing`; `cooling_storage`; `packaging_release`; `cleaning_waste_management` | water, ice, electricity, fuel, steam, heat, refrigeration, and compressed air | submeter, utility invoice, tank gauge, production historian, and equipment log | meter_id; utility_type; opening_reading; closing_reading; unit; timestamp; equipment_id; line_id; operating_hours; production_mass; excluded_use; reused_water | Prefer process or line submeters; reconcile to site totals and use a documented physical driver for shared services | native meter or invoice unit | continuous, shift, batch, or monthly according to source | full reporting period with startup, shutdown, cleaning, and storage included | all included foreground operations | Subtract excluded uses, prevent double counting between meters, allocate shared totals under `calc_shared_resources`, then normalize | meter calibration or verification; invoices; site reconciliation; allocation worksheet |
| `cp_packaging_records` | `packaging_release` | primary and sale-unit packaging | packaging specification, bill of materials, issue and scrap records, and component weighing | product_id; packaging_component; material; supplier; component_mass; units_issued; units_returned; units_scrapped; released_units | Verify component mass by specification or representative weighing and reconcile issue, return, and scrap quantities | kg and item count | each packaging specification and production lot | full reporting period | all packaging lines serving the product | Calculate packaging consumed as issued minus returned, separate scrap, and divide by released net product mass | approved specification; scale calibration; stock reconciliation; packaging change history |
| `cp_residue_waste_records` | `receipt_preparation`; `preservation_processing`; `packaging_release`; `cleaning_waste_management` | co-products, shells, offcuts, rejects, spent media, packaging scrap, sludge, and other wastes | bin or container weighing, waste manifest, sales record, transfer ticket, and treatment certificate | stream_id; material_description; legal_status; wet_or_dry_basis; mass; destination; treatment; sale_value; batch_or_period; transporter; receipt | Weigh each segregated stream where practicable and reconcile internal transfers with external destination records | kg | each transfer, aggregated monthly | full reporting period | all included foreground operations and destinations | Sum by stream, status, and destination; internal transfers cancel once between processes; external outputs remain exchanges | calibrated scale; manifest or transfer receipt; destination and status evidence |
| `cp_emission_monitoring` | `receipt_preparation`; `preservation_processing`; `cooling_storage`; `cleaning_waste_management` | wastewater, waste gas, direct emissions, and refrigerant loss | flow meter, composite or spot sample, laboratory result, stack test, fuel record, refrigerant service log, and treatment report | stream_id; location; flow_or_activity; sampling_period; concentration; pollutant; analytical_method; detection_limit; fuel_use; emission_factor; refrigerant_charge; top_up; recovery; unit | Monitor relevant streams at representative points; pair concentrations with flow for the same period; use documented factors only when direct measurement is unavailable | native measurement units | frequency appropriate to variability and applicable permits; at least sufficient to represent the reporting period | full reporting period and all operating modes | all direct discharge and emission points attributable to the foreground system | Calculate loads under `calc_emission_load`, keep below-detection handling explicit, and allocate shared emissions under `calc_shared_resources` | laboratory accreditation or method record; instrument calibration; chain of custody; permit report; service record |
| `cp_reference_release` | `packaging_release` | reference product output and qualifiers | release record, label, product specification, warehouse transaction, and sales-unit weight check | lot_id; reference_flow_uuid; species_or_group; origin; route; formulation; shell_state; cooking_status; package_type; net_mass; storage_condition; shelf_life; released_mass; release_status | Link released product mass and every required qualifier to the production and packaging records used in the inventory | kg | each released lot | full reporting period | declared facility and product variants | Include only released conforming mass in the denominator and preserve excluded or rejected mass as separate waste or rework records | release authorization; label and specification; calibrated net-weight checks; traceability link |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | normalized exchange = attributable exchange quantity / released net product mass; multiply by 1 kg reference amount | attributable exchange quantity; released net product mass from `cp_reference_release` | exchange amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_material_consumption` | raw materials, ingredients, additives, chemicals, and packaging | consumed = opening stock + receipts - closing stock - documented returns; reconcile with direct issue and batch records | stock, purchase, return, issue, recipe, and batch fields from `cp_lot_materials` or `cp_packaging_records` | consumed mass by material and product route | `eu-pef-2021-2279` |
| `calc_mass_balance` | each process and complete foreground system | reconcile mass inputs with product, co-product, waste, wastewater, evaporation, retained water, and other quantified outputs on consistent wet, dry, or concentration bases; investigate and disclose the residual | material records; wastewater; residues; product transfers; moisture and concentration conversions | mass-balance table and residual by process and reporting period | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_shared_resources` | shared utilities, cleaning, storage, emissions, and treatment | assign direct-metered quantities first; allocate remaining shared quantity using the most causal verified driver such as operating time, equipment load, water flow, or product mass; preserve total and factor sum | site and submeter totals; driver records; excluded uses; released product by route | attributable shared inventory and allocation audit table | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_emission_load` | wastewater and waste-gas pollutants | pollutant load = matched stream flow or gas volume × representative concentration, with density, dry or wet basis, reference conditions, and unit conversions documented | flow, concentration, sampling period, analytical result, gas conditions | pollutant mass per reporting period and per reference product | `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_loss` | refrigeration systems | loss = verified top-up + opening charge - closing charge - recovered quantity - documented transfers, with negative or implausible results investigated | refrigerant charge, top-up, recovery, transfer, and service records | refrigerant-specific loss to air allocated to reference product | `eu-fdm-bat-2019-2031` |
| `calc_allocation` | multifunctional process blocks | apply the hierarchy and evidence requirements in Section 7; store unallocated totals, factor, driver, assigned amount, and sensitivity for every output | process totals; output quantities; physical driver or economic data; allocation decision | allocated inventory by output with factor sum equal to 1 | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_traceability` | reference product and raw material | Link each included released product lot to species or commercial group, origin when known, incoming state, processing route, formulation, packaging, and source lots. | lot genealogy; supplier and receipt records; route logs; release specification; `codex-cxc-52-2003` |
| `dq_completeness` | foreground inventory | Cover all known material and energy inputs, products, co-products, wastes, wastewater, and direct emissions within the declared boundary; report reconciliation residuals, cut-offs, and data gaps. | process-flow diagram; mass, water, and energy reconciliations; emission inventory; `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `dq_temporal_coverage` | activity data | Use a full representative period, normally 12 consecutive months; a complete seasonal campaign is acceptable when annual operation is not representative and the limitation is documented. | dated meter, batch, stock, waste, emission, and release records; production calendar; BAT yearly-average basis in `eu-fdm-bat-2019-2031` |
| `dq_representativeness` | foreground and linked datasets | Disclose technological, geographical, time-related representativeness, precision, methodological consistency, and completeness for foreground and material upstream datasets. | data-quality assessment and dataset metadata; `eu-pef-2021-2279` |
| `dq_measurement_control` | measured and calculated values | Retain calibration, analytical method, detection-limit, sampling, chain-of-custody, meter reconciliation, and calculation-version evidence appropriate to each record. | calibration certificates; laboratory and sampling records; calculation workbook or reproducible script; `codex-cxc-52-2003`; `eu-fdm-bat-2019-2031` |
| `dq_route_conditions` | route-specific process controls | Retain the treatment, cooling, storage, and deviation records needed to prove which operations occurred and that released lots represent the declared market state; do not infer food-safety compliance from LCA data alone. | process historian; monitored control records; deviation and corrective-action records; release decision; `codex-cxc-52-2003` |
| `dq_allocation_audit` | shared and multifunctional inventory | Preserve direct measurements, allocation hierarchy decision, driver, factor calculation, factor sum, price basis when used, and sensitivity. | allocation audit table and supporting records; `eu-pef-2021-2279` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference_flow | The reference product UUID, Mass flow-property UUID, Units of mass UUID, 1 kg amount, and net-product basis must match Section 3. |  |
| `val_required_qualifiers` | dataset_metadata | Every required qualifier must be present and consistent across reference flow, product description, process records, packaging, and release data. | `unsd-cpc-3-0-21270`; `codex-cxc-52-2003` |
| `val_scope_exclusions` | product_scope | Reject complete prepared meals, simple frozen/salted/dried/brined crustaceans, extracts, and juices from this PCR unless a separately justified broader study uses this dataset only for the qualifying prepared-crustacean component. | `unsd-cpc-3-0-21270` |
| `val_process_route` | process_map | Every operation actually used by the declared route must appear in the process-flow diagram and inventory; unused alternatives must not contribute inventory. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `val_mass_balance` | material_inventory | Raw materials and ingredients must reconcile with product, co-products, residues, wastewater, retained water, evaporation, and other outputs on consistent bases; residuals require explanation and uncertainty disclosure. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `val_water_energy_coverage` | utility_inventory | Water, ice, electricity, fuel, steam, refrigeration, cleaning, and storage must be measured or explicitly shown not applicable; shared quantities require an allocation audit. | `eu-fdm-bat-2019-2031` |
| `val_waste_emission_coverage` | waste_and_emissions | Each solid residue, wastewater stream, waste gas, refrigerant loss, and direct emission must have an identity, amount method, destination or compartment, and double-counting check. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `val_packaging` | packaging_inventory | Packaging components must reconcile issued, returned, scrapped, and released quantities; reference product mass must exclude transport packaging not sold with the product. | `eu-pef-2021-2279` |
| `val_allocation_hierarchy` | allocation | Subdivision or expansion must be considered before physical allocation, and another relationship may be used only with the required rejection rationale and sensitivity; factors must sum to 1. | `eu-pef-2021-2279` |
| `val_upstream_links` | background_datasets | Material raw crustacean, ingredient, additive, packaging, energy, water, refrigerant, and external-treatment exchanges must link to representative datasets or disclose a validated data gap. | `eu-pef-2021-2279` |
| `val_temporal_representativeness` | reporting_period | Activity data must cover the declared representative period and include startup, shutdown, cleaning, storage, rejected production, and all included shifts or document each exclusion. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `val_reasoned_estimates` | provisional_ranges | A `reasoned_estimate` range is a candidate-stage screening aid only; it may not replace foreground collection and must be replaced or explicitly accepted during methodology review before activation. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and facility-specific foreground manufacturing dataset for prepared or preserved crustaceans |
| downstream_use | May be published and consumed as a `secondary_dataset` or `background_dataset` after review, with upstream and downstream datasets linked according to study scope |
| allowed_use | Factory-gate manufacturing inventory for the declared species or product group, recipe, route, packaging, technology, facility, geography, reporting period, and market state; component in cradle-to-gate or broader product systems when boundaries are connected without overlap |
| excluded_use | Raw capture or aquaculture production; simple freezing, salting, drying, or brining; complete prepared meals; crustacean extracts or juices; an undeclared recipe, route, technology, geography, or storage state; food-safety certification |
| required_metadata | PCR id and version; reference UUIDs; all required qualifiers; facility and geography; reporting period; process-flow diagram; technology and capacity; included and excluded operations; product and co-product status; upstream dataset references; allocation; cut-offs; data gaps; source and calculation versions |
| required_quality_disclosure | Mass, water, and energy reconciliation; temporal, technological, geographical, and precision assessment; meter and laboratory evidence; route-control coverage; allocation audit; provisional ranges; uncertainty and limitations; review status |
| update_trigger | Material change in species or sourcing profile, recipe, preparation or preservation route, technology, capacity, energy or water system, refrigerant, packaging, product market state, waste or wastewater treatment, allocation, applicable regulation, reference UUID, or evidence that invalidates a rule or provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21270` | `standard` | United Nations Statistics Division, Central Product Classification Version 3.0, explanatory notes for subclass 21270, 30 June 2025. [Official PDF](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf). Retrieved 2026-08-11. | Product scope, included preparation and preservation routes, and exclusions |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003 (official consolidated text available from FAO). [Official PDF](https://www.fao.org/input/download/standards/10273/CXP_052e.pdf). Retrieved 2026-08-11. | Crustacean process decomposition; receipt, washing, cooking, cooling, peeling, packaging, storage, monitoring, traceability, and route-specific control records |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint Method. [Official text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279). Retrieved 2026-08-11. | Functional unit and reference flow, system boundary, company-specific data, cut-offs, multifunctionality and allocation hierarchy, data quality, completeness, and disclosure |
| `eu-fdm-bat-2019-2031` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing best available techniques conclusions for the food, drink and milk industries, including fish and shellfish processing. [Official text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019D2031). Retrieved 2026-08-11. | Water, energy, raw-material, wastewater, waste-gas and residue inventories; monitoring; resource efficiency; fish and shellfish process emissions and water management |
