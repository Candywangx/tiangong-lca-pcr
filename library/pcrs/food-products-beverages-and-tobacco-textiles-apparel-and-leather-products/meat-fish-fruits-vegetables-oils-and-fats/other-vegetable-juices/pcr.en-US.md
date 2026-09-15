---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetable-juices
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other vegetable juices

## 1. Scope and Applicability

This PCR covers the manufacture of juice whose character is provided by one or more edible vegetables other than tomato, including carrot, celery, cucumber, spinach, red cabbage, beetroot, rhubarb, and comparable vegetable juices. It covers direct-expressed, pulp-containing, clarified, blended, reconstituted-from-concentrate, refrigerated, frozen, aseptically packed, and shelf-stable routes when the product remains vegetable juice.

The default foreground boundary starts with vegetables, vegetable juice intermediates, or vegetable juice concentrate received at the manufacturing site and ends with conforming finished juice at the plant gate. It includes receiving, sorting, washing, size reduction, extraction, separation, formulation, optional concentration or reconstitution, stabilization, filling, packaging operations, cleaning, controlled storage, directly controlled utilities, residues, and wastewater. Agricultural production, manufacture of purchased ingredients and packaging, off-site energy supply, distribution, retail, consumer use, and packaging end-of-life are represented by linked upstream or downstream datasets rather than by foreground duplication.

Tomato juice, fruit juices, vegetable nectars or beverages that are not sold as juice, smoothies whose principal function is not vegetable juice, soups, sauces, fermented alcoholic beverages, and isolated vegetable by-products are excluded. A mixed fruit-and-vegetable product is covered only when the declared product identity and applicable classification treat it as other vegetable juice; otherwise use the more specific PCR.

This is candidate methodology. Site-specific formulation, technology, legal food-safety regime, pathogen-control validation, product density, soluble-solids basis, and packaging state must be declared. The food-safety rules in cited United States regulation and guidance apply only where that legal regime is applicable; elsewhere, the producer must identify and document the equivalent competent-authority requirements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetable-juices |
| classification_refs | CPC 3.0: 21329 Other vegetable juices |
| covered_products | Direct-expressed, pulp-containing, clarified, blended, reconstituted, refrigerated, frozen, aseptic, or shelf-stable juice from edible vegetables other than tomato |
| excluded_products | Tomato juice; fruit juice; non-juice vegetable beverages and nectars; smoothies, soups, and sauces; fermented alcoholic beverages; isolated vegetable by-products |
| representative_product | Packaged, stabilized other vegetable juice at the manufacturing plant gate |
| production_route | Receiving and preparation; extraction and separation; optional formulation, concentration, or reconstitution; stabilization; filling, packaging operations, and controlled storage |
| market_state | Finished liquid juice, declared as refrigerated, frozen, aseptic shelf-stable, or otherwise shelf-stable, with packaging state disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Other vegetable juice that meets the declared formulation, safety treatment, quality specification, and market state |
| How much | 1 kg net finished juice, excluding the mass of sales and transport packaging |
| How well | Conforming saleable juice with declared vegetable species or blend, soluble-solids or composition specification, pulp or clarification state, concentration or reconstitution route, pathogen-control status, and storage class |
| How long or cycle | At the plant gate for one production batch; declared shelf life and storage temperature are product qualifiers, not an extension of the reference amount |
| reference_flow_link | One kilogram of the declared finished other vegetable juice represented by the Tiangong product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished juice |
| Reference product flow | Other vegetable juices `641392fd-b293-4355-affa-b1b8c936698c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | vegetable species and blend shares; direct-expressed or from-concentrate route; concentration factor or reconstitution ratio; soluble solids or declared composition basis; pulp or clarification state; heat, UV, high-pressure, or other pathogen-control route; refrigerated, frozen, aseptic, or shelf-stable market state; packaging format and whether packaging is included in system scope; production geography and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all reported foreground amounts to 1 kg net finished juice. Exclude packaging mass from the reference amount and report packaging as separate product inputs when packaging is in scope. |
| `volume_to_mass` | Juice records reported by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass using a batch- or product-specific density measured at a stated temperature; retain measured volume, density, temperature, and calculation. Do not assume water density. |
| `concentrate_reconstitution` | Concentrated or reconstituted routes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record concentrate mass, added water, recovered aroma or pulp, soluble-solids basis, and concentration or reconstitution ratio separately; do not treat added water as vegetable input. |
| `energy_carrier_separation` | Electricity, fuels, steam, heat, and refrigeration | Carrier-specific energy property | kWh, MJ, or kg of fuel | Preserve each purchased energy carrier as a separate input. Convert only for the reported site-total energy intensity and retain original carrier quantities and conversion factors. |
| `wastewater_volume` | Process wastewater | Volume | m3 | Report wastewater at the point it leaves the foreground process or enters on-site treatment. Keep separately discharged non-contact cooling water and stormwater distinct. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground manufacture | Include all directly controlled operations from receipt of vegetables or juice intermediates through conforming finished juice at the plant gate, including cleaning, utilities, losses, wastewater, and controlled storage. | `eu-fdm-bat-2019`; `codex-cxc-1-1969` |
| `boundary_upstream_links` | Purchased inputs | Link vegetables, concentrates, ingredients, packaging, electricity, fuels, steam, water supply, cleaning chemicals, and off-site waste treatment to appropriate upstream datasets without recreating those suppliers inside the foreground boundary. | `iso-14044-2006` |
| `boundary_conditional_routes` | Concentration, reconstitution, pathogen control, cold storage, and on-site wastewater treatment | Include each conditional operation when performed by the reporting site and disclose excluded operations that are transferred to another facility. | `ecfr-21-cfr-120`; `fda-juice-haccp-guidance`; `eu-fdm-bat-2019` |
| `boundary_food_safety_controls` | Juice safety controls | Record sanitation, hazard-control, monitoring, and validated stabilization operations that materially consume inputs, energy, or generate losses. Apply jurisdiction-specific legal requirements and identify the governing regime. | `ecfr-21-cfr-120`; `codex-cxc-1-1969` |
| `boundary_exclusions` | Distribution and downstream life cycle | Exclude distribution, retail refrigeration, consumer use, and packaging end-of-life from the default foreground dataset; include them only in a separately declared downstream lifecycle model. | `iso-14044-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Vegetables, direct juice, puree used as juice, or vegetable juice concentrate received at the manufacturing site with supplier identity, mass, composition or soluble-solids basis, and acceptance status recorded |
| starting_condition_role | Entry point for foreground manufacturing; cultivation and manufacture of purchased juice intermediates remain upstream |
| product_classification_scope | Other vegetable juices excluding tomato juice and fruit juices; mixed products require explicit classification and predominant product identity |
| recursive_input_rule | Purchased other vegetable juice or concentrate remains a visible same-category product input with quantity and supplier dataset reference. Do not recursively expand it as if manufactured by the reporting site. |
| upstream_dataset_requirement | Use geographically and technologically representative upstream datasets for vegetables, purchased juice or concentrate, water, packaging, energy carriers, processing aids, cleaning chemicals, and off-site treatment |
| disclosure | Declare vegetable species and blend, origin, received form, concentration or reconstitution route, soluble-solids or composition specification, yield basis, stabilization method, storage class, packaging scope, allocation method, site coverage, reference period, and material exclusions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving, sorting, washing, and preparation | required | Always | Foreground raw-material acceptance and preparation | Mass of accepted vegetables or received juice intermediate |
| `extraction_formulation_stabilization` | Extraction, separation, formulation, and stabilization | required | Always; individual unit operations depend on the declared route | Foreground conversion to stabilized juice | Mass of stabilized juice before final filling |
| `filling_storage` | Filling, packaging operations, and controlled storage | required | Always; packaging production is upstream if packaging is in scope | Foreground completion of the marketable product | 1 kg net finished juice |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include when wastewater is treated within the reporting site's operational control | Foreground environmental control | Volume of wastewater entering treatment |

### Process: Receiving, sorting, washing, and preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Vegetables or vegetable juice intermediates received (`received_vegetable_material`)

Record each vegetable species, direct juice, puree used as juice, or concentrate separately so source, received form, composition, and upstream dataset remain traceable.

- Selected flow: Vegetable raw material or vegetable juice intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted input plus separately recorded rejected input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished other vegetable juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Range: Provisional raw-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 20
  - Unit: kg/kg net finished juice
  - Basis: received vegetable material per kg net finished juice across high-yield and low-yield routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Washing and preparation water (`preparation_water`)

Record metered water entering washing, fluming, trimming, and preparation. Separate recirculated internal water from fresh supplied water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Fresh make-up water measured at the preparation process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 hl net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Range: Provisional preparation-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/hl net finished juice
  - Basis: fresh preparation water per hectolitre of finished juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared vegetable material (`prepared_vegetable_material`)

Calculate accepted prepared material transferred to extraction from measured receipts and preparation rejects.

- Selected flow: Prepared vegetable material
- Flow property / unit: Mass / kg
- Amount rule: accepted received material minus measured preparation rejects and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `iso-14044-2006`

##### Waste flows

###### Sorting and preparation rejects (`preparation_rejects`)

Record soil-bearing rejects, spoiled vegetables, trimming residues, and foreign material by destination and by-product or waste status.

- Selected flow: Vegetable preparation residues
- Flow property / unit: Mass / kg
- Amount rule: weighed quantity by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_and_wastes`
- Range: Provisional preparation-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 19
  - Unit: kg/kg net finished juice
  - Basis: preparation rejects per kg net finished juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record water leaving preparation to sewer, off-site treatment, reuse outside the process, or on-site wastewater treatment.

- Selected flow: Process wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or water-balance calculation by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 hl net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`

##### Elementary flows

### Process: Extraction, separation, formulation, and stabilization (`extraction_formulation_stabilization`)

#### Inputs

##### Product flows

###### Prepared vegetables (`prepared_material_input`)

Transfer the prepared vegetable material from the preceding process without adding upstream burdens again.

- Selected flow: Prepared vegetable material
- Flow property / unit: Mass / kg
- Amount rule: matched transfer from `prepared_vegetable_material`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`

###### Purchased vegetable juice, puree, or concentrate (`purchased_juice_intermediate`)

Include when the route uses purchased juice, puree as juice, or concentrate. Record vegetable identity, supplier, soluble-solids basis, and whether the intermediate has already received a validated safety treatment.

- Selected flow: Vegetable juice intermediate
- Flow property / unit: Mass / kg
- Amount rule: weighed purchased intermediate entering the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`

###### Formulation or reconstitution water (`formulation_water`)

Include water incorporated into the product or used for reconstitution separately from cleaning and washing water.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or weighed water incorporated into the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Range: Provisional formulation-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net finished juice
  - Basis: water incorporated into finished juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Processing aids and permitted ingredients (`processing_aids`)

Record enzymes, clarifying or filtration aids, acids, salts, preservatives, recovered aroma or pulp, and other ingredients separately when used; disclose whether retained in product, recovered, or discharged.

- Selected flow: Processing aid or permitted ingredient
- Flow property / unit: Mass / kg
- Amount rule: issue records or batch formulation quantities by substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Range: Provisional processing-aid screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net finished juice
  - Basis: total processing aids and added ingredients per kg net finished juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity (`processing_electricity`)

Record metered electricity for extraction, pumps, separation, homogenization, concentration, stabilization, cleaning, and directly controlled auxiliary equipment. Allocate shared meters with a documented operating-hour or submeter rule.

- Selected flow: Electricity supply
- Flow property / unit: Energy / MWh
- Amount rule: metered electricity allocated to the foreground production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 hl net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Provisional electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.035
  - Unit: MWh/hl net finished juice
  - Basis: purchased electricity before combination with thermal energy
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fuels, steam, or purchased heat (`processing_thermal_energy`)

Record each thermal energy carrier separately and retain delivered energy, fuel mass, lower or higher heating value convention, boiler efficiency treatment, and supplier dataset.

- Selected flow: Fuel, steam, or purchased heat by carrier
- Flow property / unit: Energy / MWh
- Amount rule: metered or calculated delivered thermal energy allocated to the batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 hl net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Range: Provisional thermal-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.035
  - Unit: MWh/hl net finished juice
  - Basis: delivered thermal energy before combination with electricity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized juice transferred to filling (`stabilized_juice`)

Calculate the mass transferred to filling from calibrated tank or filler records and retain the declared stabilization route, critical parameters, deviations, and rework.

- Selected flow: Stabilized other vegetable juice
- Flow property / unit: Mass / kg
- Amount rule: calibrated transfer mass after formulation and stabilization, adjusted for rework and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `ecfr-21-cfr-120`; `fda-juice-haccp-guidance`

##### Waste flows

###### Extraction pomace and separation residues (`extraction_residues`)

Record pomace, pulp removal, filtration cake, spent filter media, and out-of-spec juice separately by destination and economic status.

- Selected flow: Vegetable juice extraction residue
- Flow property / unit: Mass / kg
- Amount rule: weighed residue or mass-balance calculation by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_and_wastes`
- Range: Provisional extraction-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 19
  - Unit: kg/kg net finished juice
  - Basis: extraction and separation residues per kg net finished juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Processing and cleaning wastewater (`processing_wastewater`)

Record extraction, formulation, stabilization, cleaning-in-place, and non-product water that leaves the process. Keep internal reuse and separately discharged non-contact cooling water distinct.

- Selected flow: Process wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or complete water-balance calculation by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 hl net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Range: Contextual BAT wastewater-discharge screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.08
  - Upper: 0.20
  - Unit: m3/hl products
  - Basis: yearly average specific wastewater discharge for soft drinks and nectar or juice made from processed fruit and vegetables; use as contextual comparison only when route and facility are comparable
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Direct process emissions to air (`direct_air_emissions`)

Record direct combustion emissions, refrigerant losses, and other measured site emissions only when they cross the environment boundary and are not already represented inside a purchased energy dataset.

- Selected flow: Substance-specific elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or source-backed calculation from foreground fuel and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-fdm-bat-2019`

### Process: Filling, packaging operations, and controlled storage (`filling_storage`)

#### Inputs

##### Product flows

###### Stabilized juice input (`stabilized_juice_input`)

Transfer stabilized juice from the preceding process and record filling losses and rework explicitly.

- Selected flow: Stabilized other vegetable juice
- Flow property / unit: Mass / kg
- Amount rule: matched transfer from `stabilized_juice`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`

###### Primary, secondary, and transport packaging (`packaging_inputs`)

Include packaging materials when packaging is in system scope, but never include their mass in the 1 kg reference product. Record each material and recycled-content specification separately.

- Selected flow: Packaging material by material and format
- Flow property / unit: Mass / kg
- Amount rule: issued packaging minus returned unused packaging, divided by conforming net juice mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net finished juice
  - Basis: all packaging materials included in scope per kg net finished juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming other vegetable juice (`reference_product_output`)

This is the quantitative reference. Product mass is net juice only; packaging remains a separate input.

- Selected flow: Other vegetable juices `641392fd-b293-4355-affa-b1b8c936698c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg conforming net finished juice
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Filling loss, off-spec juice, and packaging scrap (`filling_and_packaging_waste`)

Record juice loss, rejected filled units, start-up and shutdown loss, and packaging scrap separately by recovery, rework, by-product, recycling, or disposal destination.

- Selected flow: Filling loss or packaging waste by material
- Flow property / unit: Mass / kg
- Amount rule: weighed or counted loss converted with measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_and_wastes`
- Range: Provisional filling-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net finished juice
  - Basis: filling loss, off-spec product, and packaging scrap per kg net finished juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment chemicals and energy (`wastewater_treatment_inputs`)

Include chemicals, electricity, fuels, and other purchased inputs when on-site treatment is controlled by the reporting facility. Record them by carrier or substance in the dataset implementation.

- Selected flow: Wastewater-treatment input by substance or energy carrier
- Flow property / unit: Carrier-specific property and unit
- Amount rule: metered or issue-record quantity allocated to treated foreground wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 foreground wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Foreground wastewater received for treatment (`wastewater_to_treatment`)

Transfer the volume and characteristics of wastewater from preparation and processing without double counting.

- Selected flow: Process wastewater
- Flow property / unit: Volume / m3
- Amount rule: matched transfer from preparation and processing wastewater rows
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge and screenings (`wastewater_treatment_residues`)

Record sludge, screenings, and recovered material by mass, dry matter where available, and destination.

- Selected flow: Wastewater-treatment residue
- Flow property / unit: Mass / kg
- Amount rule: weighed wet mass with dry-matter measurement where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 foreground wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`

##### Elementary flows

###### Treated effluent to receiving environment (`treated_effluent`)

Record treated effluent volume and substance-specific loads at the actual discharge point; do not represent sewer-bound wastewater as an elementary flow.

- Selected flow: Substance-specific elementary flow to water
- Flow property / unit: Volume / m3 and pollutant mass / kg
- Amount rule: flow-proportional measured discharge and monitored concentration or load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Separately measurable products, batches, and unit operations | First avoid allocation by subdividing processes, using batch-specific records, or expanding metering so independently caused burdens remain with the responsible product. | `iso-14044-2006` |
| `allocation_residues` | Pomace, recovered pulp, concentrates, and other valuable outputs | Classify each output as product, by-product, or waste according to the declared market and regulatory context. If burdens remain shared after subdivision, use a documented physical relationship that reflects causation; use economic allocation only when a defensible physical relationship is unavailable. | `iso-14044-2006` |
| `allocation_treatment` | Waste treatment, recycling, and energy recovery | Keep treatment burdens inside the foreground boundary when treatment is site-controlled. Apply recycling, recovery, or avoided-product credits only in the downstream lifecycle model under a disclosed method; do not subtract an undocumented credit from the foreground inventory. | `iso-14044-2006` |
| `allocation_rework` | Internal juice rework and internal water recirculation | Treat internal rework and recirculation as internal transfers. Count only net external inputs, final outputs, losses, and emissions, while retaining gross records needed to demonstrate the mass and water balances. | `eu-fdm-bat-2019` |
| `allocation_shared_utilities` | Shared meters, cleaning, storage, and wastewater systems | Allocate shared utilities using submetered use where available; otherwise use documented operating time, throughput, or another causal engineering driver and disclose the driver and sensitivity. | `iso-14044-2006`; `eu-fdm-bat-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `receiving_preparation` | Vegetables and juice intermediates | Weighbridge, receiving, supplier, and acceptance records | species or blend, supplier, origin, received form, batch id, gross mass, tare, accepted mass, rejected mass, soluble solids or composition, treatment status | Calibrated scale plus receiving inspection and supplier documentation | kg | Each receipt | At least 12 representative months or the full seasonal campaign | All sites and receipts in dataset scope | Sum accepted and rejected mass by material and batch; reconcile opening and closing stock | Calibration records, supplier specification, acceptance record, and stock reconciliation |
| `cp_water_and_wastewater` | `receiving_preparation` | Fresh water, reused water, and wastewater | Meter, batch log, and discharge record | meter id, opening and closing reading, source, use area, reuse transfer, discharge destination, flow, pH, temperature | Calibrated meter; if calculated, complete water balance with documented uncertainty | m3 | Continuous or each batch with monthly reconciliation | Same period as production | All water uses and discharges in foreground scope | Fresh inflow minus net product incorporation, evaporation, stock change, and separately metered transfers; report streams separately | Meter calibration, reconciliation residual, and discharge monitoring record |
| `cp_formulation_records` | `extraction_formulation_stabilization` | Formulation water, ingredients, and processing aids | Approved formula, issue record, and batch sheet | batch id, material id, lot, issued mass, returned mass, water mass, concentration factor, soluble solids, recovered aroma or pulp | Weighed issue and return records linked to approved formulation | kg | Each batch | Full dataset reference period | All formulations in product scope | Net issued quantity divided by conforming net juice mass | Scale calibration, formula approval, lot traceability, and deviation record |
| `cp_energy_records` | `extraction_formulation_stabilization` | Electricity and thermal energy | Utility meter, fuel invoice, steam or heat meter, and equipment log | carrier, meter id, readings, fuel mass or volume, energy content convention, steam or heat quantity, operating hours, batch allocation driver | Submeter preferred; otherwise reconcile site meter or invoice to batch allocation | kWh, MJ, MWh, or kg fuel | Continuous, shift, or monthly with batch allocation | At least 12 representative months or full seasonal campaign | All directly controlled manufacturing, cleaning, and storage uses in scope | Preserve carriers separately; sum converted delivered energy only for the site-total comparator | Meter calibration, invoice reconciliation, conversion factors, and allocation sensitivity |
| `cp_batch_mass_balance` | `extraction_formulation_stabilization` | Product transfers, yield, rework, and losses | Tank, filler, scale, batch, and stock records | batch id, input masses, tank levels, density and temperature if volume-based, output mass, rework, loss, opening stock, closing stock | Calibrated mass measurement or volume converted with measured batch density | kg | Each batch | Full dataset reference period | All product lines and sites in scope | Inputs plus opening stock equal outputs plus closing stock, residues, wastewater product loss, and unexplained difference | Instrument calibration, signed batch record, density test, and balance closure report |
| `cp_residues_and_wastes` | `filling_storage` | Rejects, pomace, off-spec juice, sludge, and packaging scrap | Scale ticket, bin count, waste manifest, and destination record | material, wet mass, dry matter if relevant, container count, destination, product or waste status, revenue if economically allocated | Weigh directly; convert counts only with measured unit mass | kg | Each batch or shipment | Full dataset reference period | All residue and waste destinations in scope | Sum by material, status, and destination; subtract documented internal rework only | Scale calibration, manifests, destination acceptance, and by-product classification rationale |
| `cp_packaging_records` | `filling_storage` | Packaging inputs | Bill of materials, issue and return records, and finished-unit count | material, format, unit mass, issued count, returned count, rejected count, filled units, recycled content | Count multiplied by periodically verified unit mass, or direct weighing | kg | Each packaging lot and batch | Full dataset reference period | All packaging formats included in scope | Net packaging issued divided by conforming net juice mass | Supplier specification, unit-mass checks, count reconciliation, and scrap record |
| `cp_direct_emissions` | `extraction_formulation_stabilization` | Direct air emissions | Fuel, equipment, refrigerant, stack, and maintenance records | source, substance, measured concentration or loss, flow, operating time, fuel quantity, factor, refrigerant charge and top-up | Direct monitoring preferred; otherwise calculate from foreground activity and documented factor | kg | At monitoring event and each relevant maintenance or fuel period | Same period as production | All direct emission sources in foreground scope | Sum substance-specific releases and normalize to net finished juice | Calibration, laboratory result, factor citation, maintenance log, and double-counting check |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | Treatment inputs, effluent, and sludge | Inlet and outlet meters, laboratory data, chemical issue, energy meter, sludge tickets | flow, pH, temperature, COD or TOC, BOD, total nitrogen, total phosphorus, total suspended solids, chemicals, energy, sludge mass, destination | Flow-proportional monitoring at defined treatment and discharge points | m3, kg, mg/L, and energy units | Continuous flow where available; analytes at applicable permit or BAT frequency | Full dataset reference period | Entire on-site treatment system receiving foreground wastewater | Calculate pollutant load as concentration times flow; reconcile inlet, outlet, sludge, and bypasses | Meter calibration, accredited laboratory results, permit reports, and treatment log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground rows | normalized amount equals period or batch amount divided by conforming net finished juice mass in kg | collected amount; conforming net juice mass | amount per 1 kg reference product | `iso-14044-2006` |
| `calc_volume_to_mass` | Volume-based product records | product mass equals measured volume multiplied by product-specific density at the recorded temperature | volume; density; temperature | kg juice |  |
| `calc_mass_balance` | Each batch and dataset period | total material inputs plus opening stock equal products, residues, wastewater-borne product, direct losses, closing stock, and disclosed unexplained difference | all batch material records; stock change; residues; wastewater loss | mass-balance closure and residual | `iso-14044-2006` |
| `calc_total_energy_intensity` | Site electricity and thermal energy | convert carriers to MWh using documented factors, sum delivered electricity and thermal energy, and divide by finished product volume in hl. Compare 0.01 to 0.035 MWh/hl only when the facility and route are comparable to the cited soft-drink and processed-fruit-or-vegetable nectar or juice scope; otherwise disclose the non-comparability. | carrier quantities; conversion factors; finished juice volume | MWh/hl finished juice | `eu-fdm-bat-2019` |
| `calc_specific_wastewater` | Wastewater leaving foreground manufacture | wastewater volume divided by finished product volume in hl, excluding separately discharged cooling water and stormwater | stream-specific wastewater volume; finished juice volume | m3/hl finished juice | `eu-fdm-bat-2019` |
| `calc_pollutant_load` | On-site treated effluent | substance load equals flow-proportional concentration multiplied by discharge volume with unit conversion | analyte concentration; effluent volume | kg substance per reference product | `eu-fdm-bat-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and reference flow | Match the product to other vegetable juice and declare every required qualifier, product-flow UUID, net-mass basis, and packaging scope. | Product specification, label or sales description, batch code, and dataset metadata |
| `dq_temporal` | Foreground activity data | Cover at least 12 representative months or the complete seasonal campaign and disclose shutdowns, abnormal batches, and seasonal weighting. | Production calendar, batch list, utility periods, and representativeness statement |
| `dq_measurement` | Mass, volume, energy, water, and emissions | Use calibrated instruments or reconciled records; retain density and temperature for volume-to-mass conversions and carrier-specific conversion factors for energy. | Calibration certificates, meter reconciliation, laboratory results, and calculation workbook |
| `dq_completeness` | Process and flow coverage | Cover every required process and every material input, product, residue, wastewater stream, direct emission, and shared utility above the declared cut-off; quantify and justify exclusions. | Process flow diagram, inventory completeness checklist, mass balance, water balance, and energy reconciliation |
| `dq_food_safety` | Stabilization and sanitation controls | Identify the governing food-safety regime, retain hazard analysis and validated critical parameters, and record deviations and corrective actions. Where 21 CFR Part 120 applies, retain evidence of the applicable pathogen-reduction control and monitoring records. | HACCP or equivalent plan, validation report, time-temperature or other critical-parameter record, SSOP record, and corrective-action log |
| `dq_allocation` | Multi-product and shared systems | Document subdivision attempts, classification of residues, allocation driver, quantities, and sensitivity; do not hide credits or internal transfers. | Allocation worksheet, market or destination evidence, and sensitivity result |
| `dq_source_currency` | External benchmarks and legal controls | Check applicability and current status of cited law, guidance, and BAT documents at dataset update; never treat a contextual BAT range as a universal allowed range. | Source review record and applicability statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference product | The quantitative reference must be exactly 1 kg net conforming other vegetable juice using product flow `641392fd-b293-4355-affa-b1b8c936698c`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg; packaging mass must not be included. |  |
| `validate_product_scope` | Product identity | Reject the dataset when vegetable species or blend, juice route, composition or soluble-solids basis, stabilization method, storage class, or packaging scope is missing, or when the product is tomato juice, fruit juice, or a non-juice beverage. | `ecfr-21-cfr-120` |
| `validate_process_coverage` | Foreground boundary | Every required process must have activity data, and each conditional process must be included or explicitly marked not applicable with evidence that it occurred outside the reporting site's control. | `eu-fdm-bat-2019`; `codex-cxc-1-1969` |
| `validate_mass_balance` | Batch and period inventory | Require a documented mass-balance closure. Investigate and disclose the residual; do not force closure by changing the fixed reference output or hiding losses. | `iso-14044-2006` |
| `validate_water_energy` | Water, wastewater, and energy | Require stream-specific water and wastewater records and carrier-specific energy records. Calculate the cited contextual energy and wastewater indicators when comparable, and explain results outside those ranges without automatically rejecting valid non-comparable routes. | `eu-fdm-bat-2019` |
| `validate_safety_controls` | Stabilization and sanitation | Require the applicable hazard-control regime, validation evidence, critical limits, actual monitored values, deviations, and corrective actions. Where 21 CFR Part 120 applies, the pathogen-control process must meet the applicable validated reduction requirement; do not transplant a time-temperature schedule from another juice without product-specific validation. | `ecfr-21-cfr-120`; `fda-juice-haccp-guidance`; `codex-cxc-1-1969` |
| `validate_allocation` | Co-products, residues, and shared utilities | Require subdivision or a documented causal allocation method, complete residue destinations, and separate disclosure of any downstream recycling or recovery credit. | `iso-14044-2006` |
| `validate_uuid_resolution` | Tiangong references | The reference product, mass property, and unit-group UUIDs must match the selected Tiangong records. All additional inventory UUIDs must be selected and verified before publication; unresolved semantic flow labels remain review blockers. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific or representative foreground manufacturing dataset for other vegetable juice at the plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness, review, and publication requirements are met |
| allowed_use | Product carbon footprint and LCA studies that match the declared vegetable composition, processing route, geography, technology, packaging scope, storage class, allocation method, and reference period |
| excluded_use | Agricultural cultivation without linked upstream datasets; tomato or fruit juice; non-juice beverages; consumer-health comparison; nutrition claims; legal food-safety certification; routes with materially different concentration, preservation, packaging, or storage conditions without adaptation |
| required_metadata | PCR id and status; reference product UUID; vegetable species and blend shares; supplier or origin coverage; direct-expressed or from-concentrate route; soluble-solids or composition basis; pulp or clarification state; stabilization method and governing safety regime; market and storage state; packaging format and scope; geography; technology; site coverage; reference period; allocation method; data owner and review state |
| required_quality_disclosure | Primary-data share; temporal, geographic, and technological representativeness; instrument and record basis; mass-, water-, and energy-balance residuals; contextual BAT comparisons and applicability; provisional estimates retained; unresolved UUIDs; exclusions; allocation sensitivity; food-safety validation evidence; uncertainty and review limitations |
| update_trigger | Change in vegetable blend, supplier form, concentration or reconstitution route, yield, formulation, stabilization technology or critical parameters, packaging format, storage regime, site or utility mix, wastewater treatment, allocation method, legal requirements, or any material flow by more than 10 percent; otherwise review at least every three years |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-fdm-bat-2019` | Official guidance (`official_guidance`) | European Commission Implementing Decision (EU) 2019/2031, BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj, retrieved 2026-08-11 | Process and emissions inventory requirements; water, energy, raw materials, residues, and wastewater monitoring; contextual 0.01-0.035 MWh/hl energy and 0.08-0.20 m3/hl wastewater indicators for comparable processed-fruit-or-vegetable nectar or juice routes |
| `ecfr-21-cfr-120` | Standard (`standard`) | United States eCFR, Title 21 Part 120, Hazard Analysis and Critical Control Point Systems, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-120, retrieved 2026-08-11 | Juice definition covering fruits and vegetables; sanitation, hazard analysis, monitoring, validation, verification, and records where the regulation applies |
| `fda-juice-haccp-guidance` | Official guidance (`official_guidance`) | U.S. FDA, Juice HACCP Hazards and Controls Guidance, First Edition, Docket 02D-0333, https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-juice-hazard-analysis-critical-control-point-hazards-and-controls-guidance-first, retrieved 2026-08-11 | Product-specific process validation, pathogen-control monitoring, and caution against transferring treatment parameters between juices |
| `codex-cxc-1-1969` | Standard (`standard`) | FAO and WHO, General Principles of Food Hygiene, CXC 1-1969, Rome 2023, https://www.fao.org/fao-who-codexalimentarius/publications/en/, retrieved 2026-08-11 | General hygiene, HACCP, process control, cross-contamination prevention, monitoring, verification, and documentation |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, https://www.iso.org/standard/38498.html, retrieved 2026-08-11 | LCA and LCI goal and scope, inventory, reporting, review, allocation hierarchy, and interpretation framework |
