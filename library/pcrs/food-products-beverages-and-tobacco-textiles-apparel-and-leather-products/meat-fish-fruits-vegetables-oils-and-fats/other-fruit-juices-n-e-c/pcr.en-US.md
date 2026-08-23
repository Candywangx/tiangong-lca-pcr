---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-fruit-juices-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other fruit juices, n.e.c.

## 1. Scope and Applicability

This PCR covers unfermented fruit juices classified as other fruit juices, n.e.c., including single-fruit juices from fruit species not assigned to the five separately named CPC subclasses and mixtures of fruit juices. Directly expressed juice, juice reconstituted from concentrate, and concentrated juice are covered when the declared product remains fruit juice and its fruit species, concentration state, soluble-solids basis, preservation route, packaging format, and storage condition are stated.

Orange, grapefruit, pineapple, grape, and apple juices are excluded because CPC assigns them separate subclasses. Vegetable juice, fruit nectar, fruit purée sold as purée, fermented or alcoholic beverages, flavoured drinks that do not meet the applicable fruit-juice identity, and downstream retail or consumer use are excluded. The foreground boundary starts with fruit, juice, or concentrate received at the juice-processing site and ends with the declared bulk or packaged juice at the factory gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-fruit-juices-n-e-c |
| classification_refs | CPC 3.0: 21439, Other fruit juices, n.e.c. |
| covered_products | Lemon, lime, mandarin, apricot, blackcurrant, cherry, coconut, pear, date, fig, raspberry, guava, gooseberry, mango, peach, prune, tamarind, lychee, passion-fruit and other fruit juices not separately classified; mixtures of fruit juices; directly expressed, reconstituted-from-concentrate, and concentrated market states when declared. |
| excluded_products | Orange juice; grapefruit juice; pineapple juice; grape juice; apple juice; vegetable juice; fruit nectar; fruit purée sold as purée; fermented or alcoholic beverages; non-juice flavoured drinks. |
| representative_product | Unfermented, single-strength passion-fruit juice in its declared saleable factory-gate packaging. |
| production_route | Fruit receipt, washing and preparation; mechanical size reduction and extraction when fruit is the starting material; optional enzymatic treatment, clarification, aroma recovery, concentration or reconstitution; stabilization; filling and packaging; conditional cold storage; sanitation and wastewater management. |
| market_state | Bulk or packaged; single-strength or concentrated; directly expressed or reconstituted; clear or cloudy; shelf-stable, chilled, or frozen, as declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unfermented other fruit juice that retains the essential physical, chemical, organoleptic, and nutritional characteristics of the declared fruit or fruit mixture. |
| How much | 1,000 kg of saleable other fruit juice at the processing-site factory gate. |
| How well | Conforms to the declared fruit species or mixture, route, concentration state, soluble-solids value, clarity, preservation treatment, packaging format, and storage condition. |
| How long or cycle | One production lot delivered at the factory gate; no use-stage duration is assigned. |
| reference_flow_link | The reference product output row is `reference_product_other_fruit_juice` in `stabilization_packaging`. |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Passion-fruit juice |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fruit species and botanical or common name; mixture composition by mass; directly expressed, reconstituted, or concentrated route; measured soluble solids in °Brix and measurement temperature; clear or cloudy; pulp or cells restored; preservation treatment; packaging format and bill of materials; shelf-stable, chilled, or frozen condition; production geography; reference period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-dimension inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` | kg | Normalize the saleable reference product to 1,000 kg. Preserve measured wet mass for fruit, juice, ingredients, packaging, residues, wastes, refrigerants, and direct mass emissions. |
| `soluble_solids_declaration` | reference product and reconstitution or concentration control | soluble solids | °Brix | Record the measured °Brix, measurement temperature, analytical method, fruit species, and whether the juice is directly expressed, reconstituted, or concentrated; do not substitute a generic category value for a species-specific specification. |
| `energy_conversion` | electricity, steam, and fuel | energy | kWh or MJ | Preserve the invoiced or metered unit and conversion factor; do not combine electricity, purchased steam, and natural gas into one energy row. |
| `water_measurement` | process, reconstitution, and sanitation water | volume | m3 | Record each water use by process meter, batch record, or defensible allocation from a shared meter and identify recycled water separately from incoming water. |
| `effluent_load_measurement` | direct water emissions | mass | kg | Calculate each reported pollutant load from matched effluent volume and concentration records; do not report wastewater volume as a substitute for an individual pollutant load. |

## 5. System Boundary

The foreground boundary is governed by:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | processing_site | Include receipt, washing, preparation, extraction when applicable, formulation, clarification, concentration or reconstitution when applicable, stabilization, packaging, onsite storage, sanitation, onsite wastewater treatment, and all direct releases controlled by the processing site. | `conidi-2020-fruit-juice-membranes`; `fao-2001-fruit-juice-processing`; `codex-cxc-1-1969` |
| `boundary_upstream_links` | purchased_inputs | Keep fruit, juice, concentrate, ingredients, processing aids, packaging components, electricity, steam, fuel, refrigerants, water, and offsite waste-treatment services as explicit product or waste exchanges linked to appropriate upstream datasets. | `eu-pef-2021-2279` |
| `boundary_no_silent_cutoff` | inventory_completeness | Do not omit a material, energy, waste, or direct-emission exchange merely because it is small; any exclusion must be quantified, justified, and disclosed against the study's applicable cut-off rule. | `eu-pef-2021-2279` |
| `boundary_distribution` | downstream_boundary | End the default foreground dataset at the factory gate. Distribution, retail refrigeration, consumer storage, consumption, and packaging end-of-life require separately declared downstream scenarios. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sound fruit received at the processor, or purchased fruit juice or fruit-juice concentrate received for blending, reconstitution, or further processing. |
| starting_condition_role | Foreground gate; cultivation and production of purchased juice or concentrate are upstream. |
| product_classification_scope | Other fruit juices, n.e.c., including listed minor-fruit juices and fruit-juice mixtures, excluding the five separately classified fruit juices and non-juice products. |
| recursive_input_rule | Purchased juice or concentrate that falls within the same product category remains an explicit product input; do not recursively recreate its upstream production inside this foreground process. |
| upstream_dataset_requirement | Link every purchased fruit, juice, concentrate, ingredient, processing aid, utility, refrigerant, packaging component, and offsite treatment service to a geographically and technologically representative upstream dataset. |
| disclosure | Declare fruit species and mixture, starting material, concentration state, route, preservation, packaging, storage, site geography, reference period, exclusions, allocation, and whether residues are products or wastes. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fruit_receiving_preparation` | Fruit receiving and preparation | conditional | Required when whole or prepared fruit enters the foreground site. | foreground preparation | kg prepared fruit transferred to extraction |
| `juice_extraction_separation` | Juice extraction and primary separation | conditional | Required when juice is mechanically extracted from fruit at the foreground site. | foreground conversion | kg raw juice transferred to finishing |
| `formulation_finishing` | Formulation, clarification, concentration or reconstitution | required | At least the operations actually used by the declared route are included. | foreground finishing | kg stabilized bulk juice transferred to packaging |
| `stabilization_packaging` | Stabilization, filling and packaging | required | Include the declared thermal, non-thermal or aseptic stabilization and the actual bulk or retail packaging route. | foreground production | kg saleable reference product |
| `cold_storage` | Chilled or frozen storage | conditional | Required when the declared market state uses controlled-temperature storage before the factory gate. | foreground storage | kg packaged juice released from storage |
| `sanitation_wastewater` | Sanitation and wastewater management | required | Include cleaning and disinfection for all in-scope operations and onsite wastewater treatment when present. | foreground support | allocation to in-scope production during the reference period |

### Process: Fruit receiving and preparation (`fruit_receiving_preparation`)

#### Inputs

##### Product flows

###### Sound fruit received (`fruit_received`)

Record each fruit species as a separate exchange when a mixture is produced.

- Selected flow: Fresh passion fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured accepted fruit mass at site receipt before washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch_balance`
- Sources: `codex-cxs-247-2005`; `fao-2001-fruit-juice-processing`

###### Fruit-washing water (`fruit_wash_water`)

Record incoming water used directly to wash fruit.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-recorded incoming wash water, net of separately measured recycled water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch_balance`
- Sources: `fao-2001-fruit-juice-processing`

###### Fruit-wash sodium hypochlorite (`fruit_wash_sodium_hypochlorite`)

Record this sanitizer only when sodium hypochlorite is actually dosed to fruit-washing water.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: purchased active product mass reconciled with dosing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch_balance`
- Sources: `fao-2001-fruit-juice-processing`

###### Receiving electricity (`receiving_electricity`)

Record electricity for conveyors, washers, sorting, trimming, peeling, destoning, and size reduction assigned to this process.

- Selected flow: Electricity, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch_balance`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fruit (`prepared_fruit`)

Record the cleaned and physically prepared fruit transferred to extraction.

- Selected flow: Prepared passion fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured transfer mass or batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_batch_balance`
- Sources: `conidi-2020-fruit-juice-membranes`

##### Waste flows

###### Rejected fruit (`rejected_fruit`)

Record fruit rejected during receipt, sorting, trimming, peeling, destoning, or preparation when it leaves as waste.

- Selected flow: Rejected passion fruit waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch_balance`
- Sources: `esparza-2020-fruit-vegetable-waste`

###### Fruit-wash wastewater (`fruit_wash_wastewater`)

Record wash water leaving this process for onsite or offsite treatment.

- Selected flow: Fruit-wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or water balance assigned to fruit washing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_batch_balance`
- Sources: `conidi-2020-fruit-juice-membranes`

##### Elementary flows

### Process: Juice extraction and primary separation (`juice_extraction_separation`)

#### Inputs

##### Product flows

###### Prepared fruit input (`prepared_fruit_input`)

Record prepared fruit entering milling, crushing, grinding, pulping, or pressing.

- Selected flow: Prepared passion fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured transfer mass from preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch_balance`
- Sources: `conidi-2020-fruit-juice-membranes`

###### Pectinase input (`pectinase_input`)

Record pectinase only when it is used for maceration, liquefaction, extraction, or clarification.

- Selected flow: Pectinase enzyme preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: batch dosing record reconciled with inventory movement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch_balance`
- Sources: `codex-cxs-247-2005`; `conidi-2020-fruit-juice-membranes`

###### Extraction water (`extraction_water`)

Record water added during maceration or extraction only when it becomes a process input.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-dosed extraction water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch_balance`
- Sources: `conidi-2020-fruit-juice-membranes`

###### Extraction electricity (`extraction_electricity`)

Record electricity for milling, crushing, pulping, pressing, pumping, centrifugation, and primary filtration.

- Selected flow: Electricity, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch_balance`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw extracted juice (`raw_juice`)

Record juice transferred from extraction to finishing before stabilization.

- Selected flow: Raw passion-fruit juice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured transfer mass or batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_extraction_batch_balance`
- Sources: `conidi-2020-fruit-juice-membranes`

###### Recovered fruit aroma (`recovered_fruit_aroma`)

Record aroma recovered from the same kind of fruit only when it leaves extraction as a separately managed co-product or intermediate.

- Selected flow: Recovered passion-fruit aroma
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured recovered mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch_balance`
- Sources: `codex-cxs-247-2005`; `conidi-2020-fruit-juice-membranes`

###### Fruit pomace co-product (`fruit_pomace_coproduct`)

Use this product row only when pomace is sold or transferred for a documented beneficial use and therefore is not waste.

- Selected flow: Passion-fruit pomace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wet mass by documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch_balance`
- Sources: `esparza-2020-fruit-vegetable-waste`

##### Waste flows

###### Fruit pomace waste (`fruit_pomace_waste`)

Use this waste row when pomace is discarded or sent to waste treatment rather than transferred as a co-product.

- Selected flow: Passion-fruit pomace waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wet mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch_balance`
- Sources: `esparza-2020-fruit-vegetable-waste`

###### Extraction wastewater (`extraction_wastewater`)

Record liquid reject or equipment drainage generated during extraction, separate from sanitation wastewater when separately measured.

- Selected flow: Juice-extraction wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or process water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_extraction_batch_balance`
- Sources: `conidi-2020-fruit-juice-membranes`

##### Elementary flows

### Process: Formulation, clarification, concentration or reconstitution (`formulation_finishing`)

#### Inputs

##### Product flows

###### Raw juice input (`raw_juice_input`)

Record foreground-extracted or purchased single-strength juice entering finishing.

- Selected flow: Raw passion-fruit juice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured transfer or purchase mass by fruit species
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `codex-cxs-247-2005`

###### Fruit-juice concentrate (`fruit_juice_concentrate`)

Record each purchased concentrate by fruit species when the juice is reconstituted or blended from concentrate.

- Selected flow: Passion-fruit juice concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: received mass reconciled with batch formulation records and measured °Brix
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `codex-cxs-247-2005`

###### Reconstitution water (`reconstitution_water`)

Record potable water incorporated into juice reconstituted from concentrate.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: batch-dosed or metered water incorporated into product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `codex-cxs-247-2005`

###### Bentonite clarifier (`bentonite_clarifier`)

Record bentonite only when it is actually used as a clarifying or filtration aid.

- Selected flow: Bentonite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: batch dosing record reconciled with stock movement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `codex-cxs-247-2005`

###### Diatomaceous-earth filter aid (`diatomaceous_earth_filter_aid`)

Record diatomaceous earth only when used in filtration.

- Selected flow: Diatomaceous earth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: batch dosing record reconciled with stock movement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `codex-cxs-247-2005`

###### Finishing electricity (`finishing_electricity`)

Record electricity for pumping, centrifugation, filtration, membrane separation, homogenization, cooling, and controls.

- Selected flow: Electricity, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `eu-pef-2021-2279`

###### Purchased steam (`purchased_steam`)

Record purchased steam used for evaporation, heating, pasteurization, or cleaning heat in this process.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased steam; exclude steam generated from natural gas already represented by the fuel row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `conidi-2020-fruit-juice-membranes`

###### Natural gas (`natural_gas`)

Record natural gas only when it is combusted onsite for process heat or steam generation assigned to finishing.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel at lower or higher heating value with the basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `eu-pef-2021-2279`

###### Finishing refrigerant R-134a (`finishing_refrigerant_r134a`)

Record R-134a make-up assigned to finishing equipment only when that refrigerant is installed.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: reconciled refrigerant purchases, additions, recovery, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `eu-pef-2021-2279`

###### Finishing refrigerant ammonia (`finishing_refrigerant_ammonia`)

Record anhydrous ammonia make-up assigned to finishing equipment only when ammonia refrigeration is installed.

- Selected flow: Ammonia, anhydrous (R-717)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: reconciled refrigerant purchases, additions, recovery, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized bulk juice (`stabilized_bulk_juice`)

Record bulk juice transferred to filling after the declared finishing and stabilization operations.

- Selected flow: Stabilized passion-fruit juice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured transfer mass and °Brix reconciled with formulation and concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `codex-cxs-247-2005`; `conidi-2020-fruit-juice-membranes`

##### Waste flows

###### Clarification solids (`clarification_solids`)

Record separated suspended solids when they leave as waste.

- Selected flow: Fruit-juice clarification solids
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wet mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `conidi-2020-fruit-juice-membranes`; `esparza-2020-fruit-vegetable-waste`

###### Spent diatomaceous earth (`spent_filter_aid`)

Record spent diatomaceous earth separately after filtration.

- Selected flow: Spent diatomaceous earth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wet mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `codex-cxs-247-2005`

###### Spent bentonite (`spent_bentonite`)

Record spent bentonite separately after clarification.

- Selected flow: Spent bentonite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wet mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `codex-cxs-247-2005`

###### Finishing wastewater (`finishing_wastewater`)

Record evaporator condensate, membrane permeate rejected from reuse, and process drainage as wastewater only when they share the declared treatment destination.

- Selected flow: Fruit-juice finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or process water balance by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_material_utility_balance`
- Sources: `conidi-2020-fruit-juice-membranes`

##### Elementary flows

###### Fossil carbon dioxide from boiler (`boiler_carbon_dioxide_fossil`)

Record direct fossil carbon dioxide only for onsite natural-gas combustion assigned to this process.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or fuel use multiplied by a documented facility or regulatory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Methane from boiler (`boiler_methane`)

Record direct methane from onsite natural-gas combustion separately from carbon dioxide.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or fuel use multiplied by a documented facility or regulatory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Nitrous oxide from boiler (`boiler_nitrous_oxide`)

Record direct nitrous oxide from onsite combustion as an individual emission.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or fuel use multiplied by a documented facility or regulatory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Nitrogen oxides from boiler (`boiler_nitrogen_oxides`)

Record direct nitrogen oxides from the applicable stack test, continuous monitor, permit inventory, or documented factor.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured or documented-factor emission assigned to juice production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Sulfur dioxide from boiler (`boiler_sulfur_dioxide`)

Record direct sulfur dioxide when reported for the onsite combustion source.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured or documented-factor emission assigned to juice production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Fine particulate matter from boiler (`boiler_particulate_matter_2_5`)

Record direct fine particulate matter from onsite combustion separately from gaseous pollutants.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured or documented-factor emission assigned to juice production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### R-134a emission from finishing (`finishing_r134a_emission`)

Record R-134a leaked from finishing refrigeration as an elementary emission.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a) to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: refrigerant mass balance assigned to finishing equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Ammonia emission from finishing (`finishing_ammonia_emission`)

Record ammonia leaked from finishing refrigeration as an elementary emission.

- Selected flow: Ammonia to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: refrigerant mass balance assigned to finishing equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

### Process: Stabilization, filling and packaging (`stabilization_packaging`)

#### Inputs

##### Product flows

###### Stabilized juice input (`stabilized_juice_input`)

Record juice entering the declared thermal, non-thermal, aseptic, filling, and packaging sequence.

- Selected flow: Stabilized passion-fruit juice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `fao-2001-fruit-juice-processing`

###### PET bottle (`pet_bottle`)

Record the PET bottle body separately when the declared packaging route uses PET bottles.

- Selected flow: Polyethylene terephthalate bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: product-specific bill of materials reconciled with packaging issues and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `eu-pef-2021-2279`

###### Polypropylene closure (`polypropylene_closure`)

Record the polypropylene closure separately from the bottle body.

- Selected flow: Polypropylene bottle closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: product-specific bill of materials reconciled with packaging issues and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `eu-pef-2021-2279`

###### Polyethylene label (`polyethylene_label`)

Record the polyethylene label or sleeve separately when used.

- Selected flow: Polyethylene bottle label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: product-specific bill of materials reconciled with packaging issues and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `eu-pef-2021-2279`

###### Corrugated-board case (`corrugated_board_case`)

Record corrugated secondary packaging separately from primary packaging.

- Selected flow: Corrugated board case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: product-specific bill of materials reconciled with packaging issues and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `eu-pef-2021-2279`

###### Wooden pallet (`wooden_pallet`)

Record pallet mass attributable to the shipment, accounting separately for documented reuse.

- Selected flow: Wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: shipment record multiplied by attributable pallet mass and declared reuse accounting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `eu-pef-2021-2279`

###### Packaging electricity (`packaging_electricity`)

Record electricity for stabilization equipment assigned here, container handling, filling, sealing, coding, and case packing.

- Selected flow: Electricity, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `fao-2001-fruit-juice-processing`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product: other fruit juice (`reference_product_other_fruit_juice`)

This is the saleable reference product in the declared concentration, preservation, packaging, and storage state.

- Selected flow: Passion-fruit juice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured saleable output mass normalized by `calc_reference_normalization` to 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `codex-cxs-247-2005`

##### Waste flows

###### Off-specification juice (`off_spec_juice`)

Record saleable juice losses and rejected finished product separately from wastewater.

- Selected flow: Off-specification fruit juice waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured rejected product mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `esparza-2020-fruit-vegetable-waste`

###### Waste PET (`waste_pet`)

Record rejected PET bottle material separately from other packaging waste.

- Selected flow: Waste polyethylene terephthalate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured packaging scrap mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `eu-pef-2021-2279`

###### Waste polypropylene (`waste_polypropylene`)

Record rejected polypropylene closures separately from other packaging waste.

- Selected flow: Waste polypropylene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured packaging scrap mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `eu-pef-2021-2279`

###### Waste polyethylene (`waste_polyethylene`)

Record rejected polyethylene labels or sleeves separately from other packaging waste.

- Selected flow: Waste polyethylene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured packaging scrap mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `eu-pef-2021-2279`

###### Waste corrugated board (`waste_corrugated_board`)

Record rejected corrugated board separately from plastic packaging waste.

- Selected flow: Waste corrugated board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured packaging scrap mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom_balance`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

### Process: Chilled or frozen storage (`cold_storage`)

#### Inputs

##### Product flows

###### Packaged juice entering cold storage (`packaged_juice_input`)

Record packaged juice entering controlled-temperature storage before the factory gate.

- Selected flow: Packaged passion-fruit juice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: warehouse receipt mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_energy_refrigerant`
- Sources: `fao-2001-fruit-juice-processing`

###### Cold-storage electricity (`cold_storage_electricity`)

Record electricity for chilled or frozen storage assigned by measured occupancy and storage time.

- Selected flow: Electricity, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity allocated by documented mass-time occupancy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy_refrigerant`
- Sources: `fao-2001-fruit-juice-processing`; `eu-pef-2021-2279`

###### Cold-storage refrigerant R-134a (`cold_storage_refrigerant_r134a`)

Record R-134a make-up only when that refrigerant is installed in cold storage.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: refrigerant inventory balance assigned to cold-storage equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy_refrigerant`
- Sources: `eu-pef-2021-2279`

###### Cold-storage refrigerant ammonia (`cold_storage_refrigerant_ammonia`)

Record anhydrous ammonia make-up only when ammonia refrigeration is installed in cold storage.

- Selected flow: Ammonia, anhydrous (R-717)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: refrigerant inventory balance assigned to cold-storage equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy_refrigerant`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cold-stored packaged juice (`cold_stored_packaged_juice`)

Record packaged juice released from controlled-temperature storage at the factory gate.

- Selected flow: Packaged passion-fruit juice, cold stored
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: warehouse issue mass reconciled with storage losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy_refrigerant`
- Sources: `fao-2001-fruit-juice-processing`

##### Waste flows

##### Elementary flows

###### R-134a emission from cold storage (`cold_storage_r134a_emission`)

Record R-134a leaked from cold-storage refrigeration as an elementary emission.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a) to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: refrigerant mass balance assigned to cold-storage equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy_refrigerant`
- Sources: `eu-pef-2021-2279`

###### Ammonia emission from cold storage (`cold_storage_ammonia_emission`)

Record ammonia leaked from cold-storage refrigeration as an elementary emission.

- Selected flow: Ammonia to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: refrigerant mass balance assigned to cold-storage equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy_refrigerant`
- Sources: `eu-pef-2021-2279`

### Process: Sanitation and wastewater management (`sanitation_wastewater`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

Record incoming water used for equipment, line, container, and facility cleaning and rinsing.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: sanitation meter or cycle-level water record assigned to in-scope production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `codex-cxc-1-1969`

###### Sodium hydroxide cleaner (`sanitation_sodium_hydroxide`)

Record sodium hydroxide only when used in an alkaline cleaning cycle.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: purchased product mass reconciled with concentration, cycle volume, and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `codex-cxc-1-1969`

###### Nitric-acid cleaner (`sanitation_nitric_acid`)

Record nitric acid only when used in an acid cleaning cycle.

- Selected flow: Nitric acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: purchased product mass reconciled with concentration, cycle volume, and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `codex-cxc-1-1969`

###### Peracetic-acid disinfectant (`sanitation_peracetic_acid`)

Record peracetic acid only when it is the disinfectant used after cleaning.

- Selected flow: Peracetic acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: purchased product mass reconciled with concentration, cycle volume, and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `codex-cxc-1-1969`

###### Sanitation electricity (`sanitation_electricity`)

Record electricity for clean-in-place pumps, washers, and onsite wastewater equipment.

- Selected flow: Electricity, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `eu-pef-2021-2279`

###### Sanitation steam (`sanitation_steam`)

Record purchased steam used directly for sanitation, separate from process steam.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased steam assigned to sanitation cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `codex-cxc-1-1969`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater (`sanitation_wastewater`)

Record combined cleaning and rinsing water leaving for onsite or offsite treatment.

- Selected flow: Sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or water balance assigned to sanitation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `codex-cxc-1-1969`

###### Wastewater-treatment sludge (`wastewater_sludge`)

Record dewatered sludge from onsite wastewater treatment by actual destination.

- Selected flow: Fruit-juice wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wet mass with dry-matter content retained as quality evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `esparza-2020-fruit-vegetable-waste`

###### Wastewater screenings (`wastewater_screenings`)

Record coarse solids removed by onsite wastewater screens separately from sludge.

- Selected flow: Fruit-juice wastewater screenings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wet mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `esparza-2020-fruit-vegetable-waste`

##### Elementary flows

###### Methane from onsite wastewater treatment (`wastewater_treatment_methane`)

Record methane emitted from onsite wastewater treatment as an individual air emission.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or treated organic load multiplied by a documented facility or regulatory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Nitrous oxide from onsite wastewater treatment (`wastewater_treatment_nitrous_oxide`)

Record nitrous oxide emitted from onsite wastewater treatment separately from methane.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured emission or treated nitrogen load multiplied by a documented facility or regulatory factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Effluent chemical oxygen demand (`effluent_chemical_oxygen_demand`)

Record chemical oxygen demand discharged to receiving water only when onsite treatment discharges directly.

- Selected flow: Chemical oxygen demand to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: matched effluent volume and laboratory concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Effluent total nitrogen (`effluent_total_nitrogen`)

Record total nitrogen discharged to receiving water as a separate pollutant load.

- Selected flow: Total nitrogen to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: matched effluent volume and laboratory concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

###### Effluent total phosphorus (`effluent_total_phosphorus`)

Record total phosphorus discharged to receiving water as a separate pollutant load.

- Selected flow: Total phosphorus to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: matched effluent volume and laboratory concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_operations | Avoid allocation by submetering or subdividing fruit species, product routes, batches, packaging lines, storage, sanitation, and wastewater operations wherever directly attributable records can be obtained. | `eu-pef-2021-2279` |
| `allocation_physical_second` | unavoidable_shared_burdens | When subdivision is not feasible, use a documented physical relationship that represents the causal use of the shared input or service; mass, operating time, metered volume, or mass-time occupancy may be used only when it is relevant to that shared operation. | `eu-pef-2021-2279` |
| `allocation_economic_last` | co_products | If no relevant physical relationship can be justified for saleable juice, recovered aroma, or pomace co-products, allocate remaining shared burdens by consistent factory-gate economic value using a representative price period and disclose currency, period, quantities, and sensitivity. | `eu-pef-2021-2279`; `esparza-2020-fruit-vegetable-waste` |
| `allocation_waste_destination` | residues_and_wastes | Classify each residue once as a product or waste according to its documented destination. Do not simultaneously use the pomace product and pomace waste rows for the same mass, and do not credit avoided products inside the default attributional foreground dataset. | `esparza-2020-fruit-vegetable-waste`; `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_batch_balance` | `fruit_receiving_preparation` | received fruit, preparation inputs, prepared fruit, rejects, wash wastewater | weighbridge, batch, meter, dosing, and waste records | fruit species; supplier; accepted kg; rejected kg; prepared kg; wash-water m3; sanitizer kg; electricity kWh; wastewater m3; destination | reconcile batch records with monthly purchase, meter, and waste totals | kg; m3; kWh | each batch with monthly reconciliation | representative continuous 12-month period or full seasonal campaign | all in-scope receiving and preparation lines | sum by fruit species and route, then normalize with `calc_reference_normalization` | calibrated scales and meters; supplier tickets; stock reconciliation; waste transfer notes |
| `cp_extraction_batch_balance` | `juice_extraction_separation` | extraction inputs, juice, aroma, pomace, wastewater | batch, meter, dosing, transfer, and waste records | prepared fruit kg; enzyme kg; water m3; electricity kWh; raw juice kg and °Brix; aroma kg; pomace kg and destination; wastewater m3 | close mass and water balances for each extraction route | kg; m3; kWh; °Brix | each batch with monthly reconciliation | representative continuous 12-month period or full seasonal campaign | all in-scope extraction lines | keep species and route separate before reference-flow normalization | calibrated scales and meters; laboratory °Brix; dosing logs; transfer and destination records |
| `cp_finishing_material_utility_balance` | `formulation_finishing` | juice formulation, aids, utilities, refrigerants, bulk output, finishing wastes | batch recipe, stock, meter, refrigerant, transfer, and waste records | juice and concentrate kg and °Brix; water m3; each aid kg; electricity kWh; steam MJ; natural gas MJ; refrigerant additions and recovery kg; bulk juice kg and °Brix; wastes kg or m3 | reconcile formulation and concentration balances with utility and stock records | kg; m3; kWh; MJ; °Brix | each batch; utilities at least monthly | representative continuous 12-month period or full seasonal campaign | all in-scope finishing equipment | calculate species-specific soluble-solids and mass balance before aggregation | calibrated instruments; recipes; invoices; stock reconciliation; refrigerant service logs; laboratory records |
| `cp_packaging_bom_balance` | `stabilization_packaging` | juice input, actual packaging components, electricity, product and packaging rejects | bill of materials, packaging issue, line meter, production, warehouse, and scrap records | juice input kg; each component identity and kg; electricity kWh; saleable output kg; off-spec juice kg; each scrap material kg and destination | reconcile product-specific BoM and packaging issues with saleable units, inventory change, and scrap | kg; kWh | each product run with monthly reconciliation | representative continuous 12-month period or full seasonal campaign | all in-scope stabilization and packaging lines | preserve every packaging component as an individual exchange before normalization | approved BoM; purchase and issue records; line counts; calibrated scales; scrap transfer notes |
| `cp_storage_energy_refrigerant` | `cold_storage` | stored product, electricity, refrigerant and leakage | warehouse, submeter, occupancy, and refrigerant-service records | product kg; entry and release times; temperature setpoint; electricity kWh; installed refrigerant; additions, recovery, and inventory change kg | allocate submetered energy by documented mass-time occupancy and close refrigerant mass balance | kg; kg·day; kWh; °C | warehouse movement continuously; energy monthly; refrigerant per service event and annually | representative continuous 12-month period or full seasonal campaign | all in-scope cold rooms and refrigeration systems | normalize only the occupancy and refrigerant share attributable to the declared product | warehouse logs; calibrated temperature and energy meters; service invoices; leak checks |
| `cp_sanitation_wastewater_records` | `sanitation_wastewater` | sanitation inputs, wastewater, sludge and screenings | cleaning-cycle, purchase, meter, treatment, laboratory, and waste records | water m3; each cleaner and disinfectant kg; electricity kWh; steam MJ; wastewater m3; sludge and screenings kg; destinations; treatment operation | reconcile cleaning cycles and treatment records with purchase, meter, and waste totals | kg; m3; kWh; MJ | each cleaning cycle; treatment and laboratory frequency required by permit; monthly reconciliation | representative continuous 12-month period or full seasonal campaign | all in-scope production lines and onsite treatment | allocate shared sanitation by documented cycle time or cleaned production and keep treatment destinations separate | approved cleaning procedures; chemical stock reconciliation; calibrated meters; laboratory certificates; waste transfer notes |
| `cp_direct_release_records` | `formulation_finishing` | each onsite air or water elementary emission | stack, continuous-monitor, permit, refrigerant, wastewater, fuel, and laboratory records | source; substance; measured concentration or factor; gas, fuel, refrigerant, or effluent activity; sampling time; calculation basis | calculate each substance separately from matched activity and concentration or a documented factor | kg; source activity unit | per measurement, service event, or permit frequency with annual reconciliation | same period as foreground activity data | all in-scope direct release points | assign by direct process record first, otherwise by documented causal physical allocation | laboratory reports; monitor QA; permit submissions; fuel and refrigerant reconciliation; calculation sheets |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period amount × 1,000 kg / saleable reference-product kg from the same period and scope | period exchange amount; saleable output kg | exchange per 1,000 kg reference product |  |
| `calc_juice_mass_balance` | each production route | reconcile fruit, purchased juice, concentrate, incorporated water, aids, saleable juice, co-products, wastes, retained stock, and measured losses; investigate unexplained imbalance before publication | matched mass and stock records | closed route-specific mass balance | `codex-cxs-247-2005`; `fao-2001-fruit-juice-processing` |
| `calc_reconstitution_control` | reconstituted juice | verify final measured °Brix and species-specific formulation against concentrate and incorporated-water records; retain the applicable product specification and method | concentrate mass and °Brix; water; final juice mass and °Brix | verified reconstitution record | `codex-cxs-247-2005` |
| `calc_packaging_bom` | packaging inputs | component mass = issued component count × verified unit mass, reconciled with opening stock, purchases, closing stock, saleable units, and component-specific scrap | product-specific BoM; counts; unit masses; stock and scrap | kg of each packaging component per reference flow | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | each refrigeration system | direct refrigerant emission = opening inventory + purchases + additions − recovered amount − closing inventory, with unexplained differences investigated | refrigerant inventory and service records | kg of each refrigerant emitted | `eu-pef-2021-2279` |
| `calc_effluent_load` | each direct water pollutant | pollutant load = sum of matched effluent volume × laboratory concentration with unit conversion and sampling coverage disclosed | effluent volume; substance concentration; sampling coverage | kg of one pollutant discharged | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain fruit species or mixture, route, °Brix and temperature, clarity, preservation, package, storage state, geography, and reference period; verify applicable identity and authenticity requirements. | product specification; recipe; laboratory report; label; `codex-cxs-247-2005` |
| `dq_company_specific_foreground` | manufacturing activity | Use company-specific activity data for product formulation, manufacturing utilities, packaging BoM, waste composition, and direct emissions; explain any secondary estimate. | meters; invoices; stock records; BoM; laboratory and emissions records; `eu-pef-2021-2279` |
| `dq_temporal_coverage` | all foreground rows | Cover a representative continuous 12-month period or the full seasonal campaign, disclose downtime and excluded campaigns, and align numerator and denominator periods. | dated source records and reconciliation worksheet |
| `dq_completeness` | process and exchange coverage | Confirm every applicable process and every material, energy, waste, and direct-emission exchange is represented; retain a quantified justification for every exclusion. | signed completeness checklist; mass, water, energy, and packaging reconciliations; `eu-pef-2021-2279` |
| `dq_representativeness` | foreground and linked upstream data | Assess technological, geographical, and time representativeness and precision; identify proxy datasets and their limitations. | data-quality assessment and dataset metadata; `eu-pef-2021-2279` |
| `dq_waste_destination` | residues and waste | Record actual destination, product-versus-waste status, moisture or dry matter where relevant, and transfer evidence without assigning the same mass to two routes. | weigh tickets; contracts; transfer notes; treatment invoices; `esparza-2020-fruit-vegetable-waste` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | product_identity | The declared product must be unfermented fruit juice within CPC 21439 and must not be one of the five separately classified juices, vegetable juice, nectar, purée sold as purée, or an alcoholic or non-juice drink. | `unstats-cpc-3-21439`; `codex-cxs-247-2005` |
| `validate_reference_flow` | reference_product | The output must normalize to 1,000 kg using the confirmed mass property and unit group, and all required product qualifiers must be present. | `codex-cxs-247-2005` |
| `validate_route_processes` | process_coverage | Every process used by the declared route must appear, including sanitation; direct-fruit routes require receiving and extraction, reconstituted routes require concentrate and incorporated-water records, and chilled or frozen routes require cold storage. | `conidi-2020-fruit-juice-membranes`; `fao-2001-fruit-juice-processing`; `codex-cxc-1-1969` |
| `validate_atomic_inventory` | inventory_rows | Each ingredient, aid, packaging component, electricity supply, purchased steam, fuel, refrigerant, waste, and direct emission must be represented as one atomic exchange; collection labels and combined carrier rows are nonconforming. | `eu-pef-2021-2279` |
| `validate_no_double_count` | utilities_and_residues | Purchased steam and fuel used to generate onsite steam must not represent the same heat, and a residue mass must not be recorded simultaneously as both co-product and waste. | `eu-pef-2021-2279`; `esparza-2020-fruit-vegetable-waste` |
| `validate_balances` | mass_water_packaging | Species- and route-specific mass, reconstitution, packaging, water, refrigerant, and waste balances must be reconciled and unexplained differences documented before release. | `codex-cxs-247-2005`; `eu-pef-2021-2279` |
| `validate_direct_releases` | elementary_flows | Every direct air or water release must identify one substance, release compartment, calculation method, matched activity record, and evidence source; wastewater volume alone does not represent its pollutant loads. | `eu-pef-2021-2279` |
| `validate_ranges` | quantitative_ranges | No empirical or QA range may be added until at least two independent, original, boundary-compatible sources support the same unit and normalization basis; absent evidence remains an unresolved range need rather than an invented value. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for other fruit juice, n.e.c., at the processing-site factory gate. |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication. |
| allowed_use | Product-specific LCI and lifecycle models whose fruit species or mixture, concentration state, route, preservation, packaging, storage, geography, technology, and period are compatible with the dataset. |
| excluded_use | Generic substitution for separately classified juices; use for nectar, vegetable juice, purée, fermented beverages, or non-juice drinks; comparative assertions without equivalent product qualifiers and downstream boundaries. |
| required_metadata | canonical PCR id; fruit species or mixture; route and starting material; °Brix and measurement temperature; clarity; preservation; packaging BoM; storage state; site geography; reference period; technology; allocation; waste destinations; exclusions; data sources; unresolved identities and limitations |
| required_quality_disclosure | foreground coverage and reconciliation; meter and record quality; representativeness and precision; upstream proxies; allocation sensitivity; laboratory and emissions methods; cut-offs; unresolved flow UUIDs and unresolved range evidence |
| update_trigger | Change in fruit species or formulation, starting material, concentration or preservation technology, package, storage regime, energy or refrigerant system, waste destination, allocation, site geography, or representative reference period; or resolution of material UUID or range-evidence gaps. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-21439` | official_guidance | United Nations Statistics Division. Central Product Classification Version 3.0, subclass 21439, Other fruit juices, n.e.c. https://unstats.un.org/unsd/classifications/Econ/CPC (accessed 2026-08-24). | classification scope and exclusions; the official CPC 2.1 explanatory note for the unchanged subclass was also checked for the enumerated fruit examples and fruit-juice mixtures |
| `codex-cxs-247-2005` | standard | Codex Alimentarius. General Standard for Fruit Juices and Nectars, CXS 247-2005, amended 2025. https://openknowledge.fao.org/handle/20.500.14283/cd9081en (accessed 2026-08-24). | fruit-juice identity, direct and reconstituted routes, species and mixture rules, °Brix and authenticity, processing aids |
| `codex-cxc-1-1969` | standard | FAO and WHO. 2023. General Principles of Food Hygiene, CXC 1-1969. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (accessed 2026-08-24). | sanitation, cleaning and disinfection, waste management, process description, monitoring and records |
| `fao-2001-fruit-juice-processing` | official_guidance | Bates, R.P., Morris, J.R. and Crandall, P.G. 2001. Principles and Practices of Small- and Medium-scale Fruit Juice Processing. FAO Agricultural Services Bulletin 146. https://www.fao.org/4/y2515e/y2515e00.htm (accessed 2026-08-24). | process decomposition, washing, extraction, separation, thermal stabilization, packaging, refrigeration and storage |
| `conidi-2020-fruit-juice-membranes` | literature | Conidi, C., Castro-Muñoz, R. and Cassano, A. 2020. Membrane-Based Operations in the Fruit Juice Processing Industry: A Review. Beverages 6(1):18. https://doi.org/10.3390/beverages6010018. | original full-text verification of conventional process sequence, water and enzyme inputs, solid residue and wastewater, clarification, concentration, pasteurization and membrane alternatives |
| `esparza-2020-fruit-vegetable-waste` | literature | Esparza, I., Jiménez-Moreno, N., Bimbela, F., Ancín-Azpilicueta, C. and Gandía, L.M. 2020. Fruit and Vegetable Waste Management: Conventional and Emerging Approaches. Journal of Environmental Management 265:110510. https://doi.org/10.1016/j.jenvman.2020.110510. | original accepted-manuscript verification of fruit and vegetable waste definitions, destination-specific inventory, conventional treatment and valorization routes |
| `eu-pef-2021-2279` | official_guidance | European Commission. Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint method. http://data.europa.eu/eli/reco/2021/2279/oj (accessed 2026-08-24). | company-specific bill of materials and manufacturing data, inventory completeness, allocation hierarchy, direct-emission records, data quality and disclosure |
