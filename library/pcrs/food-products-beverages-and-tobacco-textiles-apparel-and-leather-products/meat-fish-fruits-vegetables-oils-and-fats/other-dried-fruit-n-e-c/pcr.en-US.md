---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-dried-fruit-n-e-c
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Other dried fruit, n.e.c.

## 1. Scope and Applicability

This PCR covers marketable dried fruit in CPC 3.0 subclass 21419 produced by removing moisture from whole fruit, fruit pieces, or fruit mixtures by natural or artificial drying. It applies to single-fruit and mixed-fruit products not represented by the separately identified raisin category. The foreground starts with received food-grade fresh fruit or a disclosed same-category dried-fruit ingredient and ends with packaged dried fruit at the processor gate. Cultivation, production of purchased utilities and materials, distribution, retail, use, and packaging end-of-life are linked as background or excluded as stated below.

Products preserved principally by sugar, products whose defining preservation route is osmotic dehydration without a subsequent declared drying step, fruit juices, jams, fruit pastes, frozen fruit, fruit powders produced by spray drying, and dried vegetables are excluded. Dried fruit mixed with nuts is covered only when the marketed product remains within CPC 21419 and the mass and identity of each incoming dried-fruit and nut component are separately reported.

The producer shall declare fruit species and cultivar or mixture composition, incoming fruit condition, preparation form, pretreatments and additives, drying technology and energy sources, final moisture or water activity specification, packaging format, storage regime, production geography, and reference period. These declarations prevent unlike drying routes and product states from being treated as interchangeable.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-dried-fruit-n-e-c |
| classification_refs | CPC 3.0: 21419, Other dried fruit, n.e.c. |
| covered_products | Dried apples, apricots, avocados, bananas or plantains, berries, dates, figs, guavas, mangoes, melons, citrus fruit, papayas, peaches, persimmons, pineapple, pomegranates, other dried fruit, and qualifying mixtures of dried fruit or nuts and dried fruit. |
| excluded_products | Raisins; sugar-preserved or candied fruit; fruit juice, jam, jelly, puree or paste; frozen fruit; fruit powder produced by spray drying; dried vegetables; products whose declared identity belongs to another CPC subclass. |
| representative_product | Shelf-stable dried fruit pieces packed in a sealed flexible pouch and ready for sale or further food manufacture. |
| production_route | Receiving and preparation; optional blanching; optional sulphuring or sulphiting; natural, solar, convective, heat-pump, vacuum, microwave-assisted, or freeze drying; conditioning and sorting; packaging; conditional controlled storage. |
| market_state | Packaged dried fruit at the processor gate, with declared moisture or water activity specification and no assumed distribution, retail, or consumption. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide marketable packaged dried fruit of the declared fruit identity and processing route at the processor gate. |
| How much | 1 kg net mass of dried fruit, excluding the mass of packaging. |
| How well | Meets the declared sale specification for fruit composition, preparation form, moisture content or water activity, additive treatment, food safety, and package integrity. |
| How long or cycle | One production output at processor-gate handover; shelf life, distribution, and use are not included. |
| reference_flow_link | The reference flow is the net mass of conforming dried fruit required to provide the functional unit. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dried fruit |
| Reference product flow | Other dried fruit, n.e.c. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fruit species and cultivar or mixture recipe; origin and incoming condition; whole, sliced, diced, leather, or other preparation form; pretreatment and additive identity; drying technology; heat and electricity sources; final moisture content and basis or water activity; net product mass; package components and masses; storage temperature and duration when controlled; production geography; reference period; allocation choices |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net dried-fruit mass excluding packaging; retain gross and tare measurements when net mass is derived. |
| `material_mass` | fruit, additives, fuels sold by mass, refrigerants, packaging, wastes, and direct emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured mass or convert from volume using a documented density applicable to the measured temperature and composition. |
| `moisture_basis` | incoming, intermediate, and finished fruit | mass fraction | kg water/kg wet product or kg water/kg dry matter | Declare wet or dry basis for every moisture result and do not combine results on different bases without an explicit conversion. |
| `electricity_measurement` | electricity | energy | kWh | Use meter or invoice electricity and allocate shared meters using documented operating records. |
| `thermal_energy_measurement` | purchased heat or steam | energy | MJ | Report delivered energy; when only steam mass and state are measured, calculate enthalpy from documented pressure, temperature, and condensate return. |
| `fuel_measurement` | natural gas, LPG, diesel, and wood pellets | mass, volume, and energy as recorded | kg, m3, L, or MJ | Preserve the purchasing unit and convert to energy with supplier- or jurisdiction-specific heating value and density, retaining whether the heating value is lower or higher. |
| `water_measurement` | process and sanitation water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured water mass or convert metered volume using documented water density; keep recirculated water separate from make-up water. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Food-grade fresh fruit received at the processing facility, or disclosed purchased dried-fruit or nut ingredients for a qualifying mixture. |
| starting_condition_role | Processor-gate foreground entry; upstream cultivation, harvest, and supplier processing are represented by linked upstream datasets. |
| product_classification_scope | CPC 3.0 subclass 21419 only, subject to the exclusions and declared market identity in this PCR. |
| recursive_input_rule | A purchased dried-fruit input in the same category is recorded once as a product input with its upstream dataset; its production is not recursively reconstructed inside this foreground package. |
| upstream_dataset_requirement | Link fruit, other ingredients, packaging components, electricity, heat, fuels, water supply, chemicals, refrigerants, and external waste treatment to geographically and technologically representative upstream datasets. |
| disclosure | Disclose fruit identity, preparation and drying route, optional processes, utility generation, on-site or external treatment, package format, storage, cut-offs, allocation, and any missing upstream dataset. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | foreground production | Include receiving, sorting, washing and preparation, every applied pretreatment, drying, conditioning, packaging, sanitation, and any on-site controlled storage or wastewater treatment. | `fao-processing-dried-fruits-2004`; `codex-cxc-3-1969` |
| `boundary_complete_inventory` | material, energy, waste, and elementary flows | Inventory every environmentally relevant input, waste, and direct emission crossing the declared boundary; do not omit a flow solely because its quantity is small. | `eu-pef-2021-2279` |
| `boundary_upstream_links` | purchased inputs | Represent production of fresh fruit, purchased dried ingredients, utilities, fuels, chemicals, refrigerants, and packaging with upstream datasets rather than as burden-free inputs. | `eu-pef-2021-2279` |
| `boundary_downstream_exclusions` | downstream stages | Exclude distribution, retail, consumer storage and use, and packaging end-of-life unless the study goal explicitly expands the boundary; state any expansion separately. | `eu-pef-2021-2279` |
| `boundary_hygiene_controls` | food-contact operations | Include measured sanitation water, chemicals, energy, wastewater, and rejected product associated with the hygiene and hazard controls actually operated. | `codex-cxc-1-1969`; `codex-cxc-3-1969` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receive_and_prepare` | Receive, sort, wash, and prepare fruit | `required` | Always included. | Foreground raw-material preparation. | kg fruit ready for drying |
| `blanching` | Blanch fruit | `conditional` | Include when hot-water or steam blanching is applied. | Foreground pretreatment. | kg fruit ready for drying |
| `sulphiting` | Sulphur or sulphite fruit | `conditional` | Include when elemental sulphur, sodium metabisulphite, or potassium metabisulphite is applied. | Foreground pretreatment and preservation. | kg fruit ready for drying |
| `drying` | Dry fruit | `required` | Always included; declare the actual technology and heat source. | Foreground moisture removal. | kg dried fruit |
| `conditioning` | Condition, inspect, and sort dried fruit | `required` | Always included. | Foreground product finishing. | kg conditioned dried fruit |
| `packaging` | Package dried fruit | `required` | Always included. | Foreground packing and reference-product output. | 1 kg net packaged dried fruit |
| `cold_storage` | Controlled cold storage | `conditional` | Include when refrigeration is used before processor-gate handover. | Foreground storage. | kg packaged dried fruit and storage duration |
| `sanitation` | Clean and sanitize food-contact equipment | `required` | Include the sanitation programme operated for the production represented. | Foreground hygiene support. | production campaign or kg reference product |
| `wastewater_treatment` | Treat wastewater on site | `conditional` | Include when any process wastewater is treated or discharged within the foreground facility. | Foreground treatment and direct discharge. | kg influent wastewater |

### Process: Receive, sort, wash, and prepare fruit (`receive_and_prepare`)

#### Inputs

##### Product flows

###### Received fresh fruit (`raw_fruit`)

Food-grade fruit entering the facility is weighed by lot before sorting and preparation.

- Selected flow: Fresh fruit for drying
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured net received mass by fruit species, cultivar, origin, and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-cxc-3-1969`

###### Washing water (`wash_water`)

Potable water entering fruit washing is recorded separately from recirculated water.

- Selected flow: Potable water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered or tank-balance make-up water supplied to fruit washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fruit ready for drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `codex-cxc-3-1969`

###### Preparation electricity (`preparation_electricity`)

Electricity for conveyors, washers, peelers, cutters, and preparation ventilation is metered or allocated from operating records.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated share of a documented common meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fruit ready for drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fruit ready for drying (`prepared_fruit_output`)

Accepted washed and prepared fruit is weighed before any optional pretreatment or direct drying.

- Selected flow: Fruit ready for drying
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured mass transferred to pretreatment or drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `fao-processing-dried-fruits-2004`

##### Waste flows

###### Rejected fruit (`rejected_fruit`)

Fruit rejected as damaged, rotten, contaminated, or otherwise unfit is weighed before its treatment route is assigned.

- Selected flow: Rejected fresh fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured rejected mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fruit ready for drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-cxc-3-1969`

###### Peel waste (`peel_waste`)

Removed fruit peel is recorded independently when peeling is applied.

- Selected flow: Fruit peel waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured peel mass by treatment or recovery destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fruit ready for drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Pit and stone waste (`pit_stone_waste`)

Removed pits or stones are weighed separately from other preparation residues.

- Selected flow: Fruit pit and stone waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured pit and stone mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fruit ready for drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Core waste (`core_waste`)

Removed cores are weighed independently when coring is applied.

- Selected flow: Fruit core waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured core mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fruit ready for drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Washing wastewater (`washing_wastewater`)

Wastewater leaving fruit washing is measured before on-site or external treatment.

- Selected flow: Fruit washing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered discharge or water balance, with treatment destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fruit ready for drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater`
- Sources: `codex-cxc-3-1969`

##### Elementary flows

### Process: Blanch fruit (`blanching`)

#### Inputs

##### Product flows

###### Fruit entering blanching (`fruit_input_blanching`)

Prepared fruit entering the conditional blanching operation is weighed by batch.

- Selected flow: Fruit prepared for blanching
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per blanching batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `fao-processing-dried-fruits-2004`

###### Blanching water (`blanching_water`)

Make-up water supplied to hot-water blanching is recorded when that route is used.

- Selected flow: Potable water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered or tank-balance make-up water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg blanched fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `fao-processing-dried-fruits-2004`

###### Blanching steam (`blanching_steam`)

Purchased steam supplied to steam blanching is recorded separately from other heat carriers.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Delivered steam energy calculated from measured steam mass and documented state
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg blanched fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

###### Blanching electricity (`blanching_electricity`)

Electricity for pumps, controls, and blanching equipment is recorded when blanching is operated.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated share of a documented common meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg blanched fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

###### Citric acid (`citric_acid`)

Food-grade citric acid used in an anti-browning or pretreatment bath is recorded by batch.

- Selected flow: Citric acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured citric acid charged to the blanching or pretreatment bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg blanched fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `fao-processing-dried-fruits-2004`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Blanched fruit ready for drying (`blanched_fruit_output`)

Blanched fruit is weighed after draining and before drying or further pretreatment.

- Selected flow: Blanched fruit ready for drying
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured drained output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per blanching batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

##### Waste flows

###### Blanching wastewater (`blanching_wastewater`)

Spent blanching water and drained bath liquid are measured before treatment.

- Selected flow: Fruit blanching wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered discharge or bath mass balance, with treatment destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg blanched fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater`
- Sources:

##### Elementary flows

### Process: Sulphur or sulphite fruit (`sulphiting`)

#### Inputs

##### Product flows

###### Fruit entering sulphiting (`fruit_input_sulphiting`)

Prepared or blanched fruit entering sulphur treatment is weighed by batch.

- Selected flow: Fruit prepared for sulphiting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per sulphiting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-cxc-3-1969`; `fao-processing-dried-fruits-2004`

###### Sulphiting water (`sulphiting_water`)

Water used to prepare a sulphite dip is measured when wet sulphiting is applied.

- Selected flow: Potable water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured water charged to sulphite solution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sulphited fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `fao-processing-dried-fruits-2004`

###### Sodium metabisulphite (`sodium_metabisulphite`)

Food-grade sodium metabisulphite is recorded independently when used as the sulphiting agent.

- Selected flow: Sodium metabisulphite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured mass charged by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sulphited fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `fao-processing-dried-fruits-2004`

###### Potassium metabisulphite (`potassium_metabisulphite`)

Food-grade potassium metabisulphite is recorded independently when used instead of sodium metabisulphite.

- Selected flow: Potassium metabisulphite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured mass charged by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sulphited fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `fao-processing-dried-fruits-2004`

###### Elemental sulphur (`elemental_sulphur`)

Elemental sulphur burned in a sulphuring chamber is recorded independently when dry sulphuring is applied.

- Selected flow: Sulphur
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured sulphur charged and unburned residue returned or discarded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sulphured fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `fao-processing-dried-fruits-2004`

###### Sulphiting electricity (`sulphiting_electricity`)

Electricity for solution preparation, pumping, and chamber ventilation is recorded when used.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated share of a documented common meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sulphited fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sulphited fruit ready for drying (`sulphited_fruit_output`)

Treated fruit is weighed after draining or chamber treatment and before drying.

- Selected flow: Sulphited fruit ready for drying
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured treated output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per sulphiting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

##### Waste flows

###### Spent sulphite solution (`spent_sulphite_solution`)

Spent sulphite dip is measured separately from other wastewater and assigned to its actual treatment route.

- Selected flow: Spent sulphite solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured bath discharge mass and residual sulphite concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sulphited fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `fao-processing-dried-fruits-2004`

##### Elementary flows

###### Sulphur dioxide to air from sulphuring (`sulphur_dioxide_sulphiting`)

Sulphur dioxide released from the sulphuring chamber is calculated from sulphur use and verified capture or residual records, or measured directly.

- Selected flow: Sulphur dioxide, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Site measurement or batch sulphur balance excluding retained product sulphur and recovered residues
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sulphured fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `codex-cxc-3-1969`

### Process: Dry fruit (`drying`)

#### Inputs

##### Product flows

###### Fruit ready for drying (`fruit_input_drying`)

Fruit entering the declared drying technology is weighed and its moisture basis is recorded.

- Selected flow: Fruit ready for drying
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured input mass with moisture content and wet or dry basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_operation`
- Sources: `sagar-kumar-drying-2010`

###### Drying electricity (`drying_electricity`)

Electricity for fans, heat pumps, vacuum pumps, refrigeration, microwave or infrared generators, controls, and conveyors is recorded together under one electricity exchange but not combined with heat or fuels.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered dryer-system electricity for the production represented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fuel`
- Sources: `sagar-kumar-drying-2010`

###### Purchased steam for drying (`purchased_steam`)

Purchased steam crossing the dryer boundary is recorded separately when used.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Delivered energy from steam mass and documented supply and condensate states
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

###### Natural gas for on-site drying heat (`natural_gas`)

Natural gas burned on site for drying heat is recorded independently from all other fuels.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered fuel converted with documented heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

###### Liquefied petroleum gas for on-site drying heat (`liquefied_petroleum_gas`)

LPG burned on site for drying heat is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured LPG mass from invoices and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

###### Diesel fuel for on-site drying heat (`diesel_fuel`)

Diesel burned on site for drying heat or a dedicated generator is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured diesel mass from delivery and stock records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

###### Wood pellets for on-site drying heat (`wood_pellets`)

Wood pellets burned on site for drying heat are recorded independently from fossil fuels.

- Selected flow: Wood pellets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured pellet mass with moisture and heating-value records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

###### Refrigerant R134a make-up in drying equipment (`refrigerant_r134a_drying`)

R134a added to heat-pump or refrigeration-assisted drying equipment is recorded independently when that refrigerant is used.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R134a)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Refrigerant purchase plus opening stock minus closing stock and recovered amount
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources:

###### Refrigerant ammonia R717 make-up in drying equipment (`refrigerant_r717_drying`)

Ammonia added to refrigeration-assisted drying equipment is recorded independently when R717 is used.

- Selected flow: Ammonia (R717)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Refrigerant purchase plus opening stock minus closing stock and recovered amount
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried fruit output (`dried_fruit_output`)

Dryer output is weighed after cooling and tested against the declared moisture or water activity specification.

- Selected flow: Dried fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured conforming dryer output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_operation`
- Sources: `codex-cxc-3-1969`

##### Waste flows

###### Drying condensate (`drying_condensate`)

Condensate removed by heat-pump, vacuum, or freeze-drying systems is measured separately from wash and cleaning wastewater.

- Selected flow: Fruit drying condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered or vessel-balance condensate sent to treatment or reuse
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater`
- Sources:

##### Elementary flows

###### Evaporated water to air (`evaporated_water`)

Water removed from fruit and vented to air is derived from the measured fruit moisture balance after subtracting collected condensate.

- Selected flow: Water, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Moisture mass balance from input fruit, dried output, collected condensate, and other measured water losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_operation`
- Sources:

###### Fossil carbon dioxide from combustion (`carbon_dioxide_fossil`)

Direct fossil carbon dioxide from on-site natural-gas, LPG, or diesel combustion is reported separately from biogenic carbon dioxide.

- Selected flow: Carbon dioxide, fossil, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement or fuel-specific calculation using collected fuel quantity, carbon content, and oxidation factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Biogenic carbon dioxide from combustion (`carbon_dioxide_biogenic`)

Direct biogenic carbon dioxide from wood-pellet combustion is reported independently from fossil carbon dioxide.

- Selected flow: Carbon dioxide, biogenic, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement or biomass carbon balance using collected pellet quantity, carbon content, and oxidation factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Methane from combustion (`methane_combustion`)

Direct methane from all on-site drying-fuel combustion is quantified as one pollutant flow from fuel-specific records.

- Selected flow: Methane, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement or sum of fuel-specific quantities multiplied by documented methane factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Nitrous oxide from combustion (`nitrous_oxide_combustion`)

Direct nitrous oxide from on-site drying-fuel combustion is quantified independently.

- Selected flow: Nitrous oxide, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement or sum of fuel-specific quantities multiplied by documented nitrous-oxide factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Nitrogen oxides from combustion (`nitrogen_oxides_combustion`)

Direct nitrogen oxides from on-site drying-fuel combustion are quantified separately from other air pollutants.

- Selected flow: Nitrogen oxides, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement or sum of fuel-specific quantities multiplied by documented nitrogen-oxides factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Sulphur dioxide from combustion (`sulphur_dioxide_combustion`)

Direct sulphur dioxide from on-site fuel combustion is quantified independently from sulphuring emissions.

- Selected flow: Sulphur dioxide, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement or fuel sulphur balance using collected fuel composition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Carbon monoxide from combustion (`carbon_monoxide_combustion`)

Direct carbon monoxide from on-site drying-fuel combustion is quantified independently.

- Selected flow: Carbon monoxide, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement or sum of fuel-specific quantities multiplied by documented carbon-monoxide factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Fine particulate matter from combustion (`particulate_matter_2_5_combustion`)

Direct particulate matter with aerodynamic diameter at or below 2.5 micrometres is quantified independently when fuel is burned on site.

- Selected flow: Particulate matter, less than 2.5 micrometres, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Stack measurement or sum of fuel-specific quantities multiplied by documented PM2.5 factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### R134a leakage from drying equipment (`r134a_leak_drying`)

R134a emitted from drying equipment is calculated from the refrigerant balance and reported independently.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R134a), air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Refrigerant balance less recovered and transferred amounts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources:

###### Ammonia R717 leakage from drying equipment (`r717_leak_drying`)

Ammonia emitted from drying equipment is calculated from the refrigerant balance and reported independently.

- Selected flow: Ammonia (R717), air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Refrigerant balance less recovered and transferred amounts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried fruit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources:

### Process: Condition, inspect, and sort dried fruit (`conditioning`)

#### Inputs

##### Product flows

###### Dried fruit entering conditioning (`dried_fruit_input_conditioning`)

Dried fruit transferred from the dryer is weighed before conditioning and final sorting.

- Selected flow: Dried fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `fao-processing-dried-fruits-2004`

###### Conditioning electricity (`conditioning_electricity`)

Electricity for conveyors, inspection, grading, and conditioning equipment is recorded.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated share of a documented common meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned dried fruit (`conditioned_dried_fruit`)

Conforming dried fruit after moisture equalization, inspection, and sorting is weighed before packaging.

- Selected flow: Conditioned dried fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured conforming output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

##### Waste flows

###### Dried fruit fines (`dried_fruit_fines`)

Small particles and fines removed during grading are weighed and assigned to their actual destination.

- Selected flow: Dried fruit fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured fines mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Conditioning rejects (`conditioning_rejects`)

Mouldy, scorched, contaminated, or otherwise nonconforming dried fruit removed at final inspection is weighed separately.

- Selected flow: Rejected dried fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reject mass by cause and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-cxc-3-1969`

##### Elementary flows

### Process: Package dried fruit (`packaging`)

#### Inputs

##### Product flows

###### Conditioned dried fruit for packaging (`conditioned_fruit_input_packaging`)

Conditioned fruit entering packaging is weighed independently of packaging materials.

- Selected flow: Conditioned dried fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured net fruit mass entering the filler
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Low-density polyethylene pouch film (`ldpe_film`)

LDPE used as primary pouch or sealant film is weighed independently when present.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Issued film mass minus returned usable film, reconciled with package count
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `fao-processing-dried-fruits-2004`

###### Polypropylene pouch film (`polypropylene_film`)

Polypropylene film is weighed independently when used in the package.

- Selected flow: Polypropylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Issued film mass minus returned usable film, reconciled with package count
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Polyethylene terephthalate pouch film (`pet_film`)

PET film is weighed independently when used as a laminate layer or primary film.

- Selected flow: Polyethylene terephthalate film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Issued film mass minus returned usable film, reconciled with package count
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Corrugated board shipping carton (`corrugated_board`)

Corrugated board used for secondary cartons is weighed separately from primary packaging.

- Selected flow: Corrugated board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Carton count multiplied by verified unit mass, reconciled with receipts and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Paper label (`paper_label`)

Paper labels are recorded as a separate package component when used.

- Selected flow: Paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Label count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Packaging electricity (`packaging_electricity`)

Electricity for filling, sealing, coding, labelling, and case packing is recorded separately from packaging materials.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated share of a documented common meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged other dried fruit (`reference_product_output`)

Conforming packaged dried fruit is reported as net fruit mass; packaging mass remains in separate input rows.

- Selected flow: Other dried fruit, n.e.c.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg net conforming dried-fruit output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### LDPE packaging scrap (`packaging_scrap_ldpe`)

LDPE trim and rejected LDPE packages are weighed separately.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured scrap mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Polypropylene packaging scrap (`packaging_scrap_polypropylene`)

Polypropylene trim and rejected polypropylene packages are weighed separately.

- Selected flow: Waste polypropylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured scrap mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### PET packaging scrap (`packaging_scrap_pet`)

PET trim and rejected PET packages are weighed separately.

- Selected flow: Waste polyethylene terephthalate film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured scrap mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Corrugated board packaging scrap (`packaging_scrap_corrugated_board`)

Damaged cartons and corrugated offcuts are weighed separately from plastic scrap.

- Selected flow: Waste corrugated board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured scrap mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Paper label scrap (`packaging_scrap_paper`)

Rejected paper labels and release-paper waste are weighed separately when material.

- Selected flow: Waste paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured scrap mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged dried fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Elementary flows

### Process: Controlled cold storage (`cold_storage`)

#### Inputs

##### Product flows

###### Packaged fruit entering cold storage (`packaged_fruit_input_storage`)

Packaged dried fruit entering controlled cold storage is measured with its residence time.

- Selected flow: Packaged dried fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured product mass and storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg stored packaged dried fruit
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage`
- Sources: `codex-cxc-3-1969`

###### Cold-storage electricity (`cold_storage_electricity`)

Electricity for refrigeration, fans, lighting, and controls is allocated by measured storage load and duration.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered storage electricity allocated by documented mass-time or chamber record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg stored packaged dried fruit and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage`
- Sources:

###### Refrigerant R134a make-up in storage (`refrigerant_r134a_storage`)

R134a added to the cold-storage system is recorded independently when used.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R134a)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Refrigerant purchase plus opening stock minus closing stock and recovered amount
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stored packaged dried fruit and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources:

###### Refrigerant R404A make-up in storage (`refrigerant_r404a_storage`)

R404A added to the cold-storage system is recorded independently when used.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Refrigerant purchase plus opening stock minus closing stock and recovered amount
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stored packaged dried fruit and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged fruit leaving cold storage (`packaged_fruit_output_storage`)

Packaged product leaving storage is weighed and reconciled with holds, rejects, and opening inventory.

- Selected flow: Packaged dried fruit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured released product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per storage campaign
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage`
- Sources:

##### Waste flows

##### Elementary flows

###### R134a leakage from cold storage (`r134a_leak_storage`)

R134a emitted from the cold-storage system is calculated from the refrigerant balance.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R134a), air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Refrigerant balance less recovered and transferred amounts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stored packaged dried fruit and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources:

###### R404A leakage from cold storage (`r404a_leak_storage`)

R404A emitted from the cold-storage system is calculated from the refrigerant balance.

- Selected flow: Refrigerant R404A, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Refrigerant balance less recovered and transferred amounts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stored packaged dried fruit and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources:

### Process: Clean and sanitize food-contact equipment (`sanitation`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

Potable water used to clean food-contact equipment and rooms is measured separately from fruit washing water.

- Selected flow: Potable water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered sanitation water assigned to the represented production campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `codex-cxc-1-1969`; `codex-cxc-3-1969`

###### Sodium hydroxide cleaning agent (`sodium_hydroxide_cleaning`)

Sodium hydroxide used in alkaline cleaning solution is recorded independently.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured active sodium hydroxide mass charged to cleaning solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources:

###### Peracetic acid sanitizer (`peracetic_acid_sanitizer`)

Peracetic acid used as sanitizer is recorded independently from alkaline cleaner.

- Selected flow: Peracetic acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured active peracetic acid mass charged to sanitation solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources:

###### Sanitation electricity (`sanitation_electricity`)

Electricity for pumps, pressure washers, and sanitation heating controls is recorded separately.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated share of a documented common meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

Spent cleaning and sanitation liquid is measured independently from process wastewater.

- Selected flow: Food-processing cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered discharge or sanitation water and solution balance, with treatment destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources:

##### Elementary flows

### Process: Treat wastewater on site (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wastewater_treatment_electricity`)

Electricity used by on-site wastewater pumps, aeration, mixing, and dewatering is recorded separately.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered treatment electricity allocated to dried-fruit wastewater by influent records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Sodium hydroxide for wastewater treatment (`wastewater_treatment_sodium_hydroxide`)

Sodium hydroxide dosed for pH control in on-site treatment is recorded independently from cleaning use.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured active sodium hydroxide mass dosed to treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

##### Waste flows

###### Fruit washing wastewater input (`washing_wastewater_input_treatment`)

Fruit washing wastewater received by on-site treatment is measured as a separate influent stream.

- Selected flow: Fruit washing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered influent mass reconciled with the preparation-process output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Fruit blanching wastewater input (`blanching_wastewater_input_treatment`)

Blanching wastewater received by on-site treatment is measured as a separate influent stream.

- Selected flow: Fruit blanching wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered influent mass reconciled with the blanching-process output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Spent sulphite solution input (`spent_sulphite_solution_input_treatment`)

Spent sulphite solution received by on-site treatment is measured independently because of its sulphite load.

- Selected flow: Spent sulphite solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured influent mass reconciled with the sulphiting-process output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Cleaning wastewater input (`cleaning_wastewater_input_treatment`)

Cleaning wastewater received by on-site treatment is measured as a separate influent stream.

- Selected flow: Food-processing cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered influent mass reconciled with the sanitation-process output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Drying condensate input (`drying_condensate_input_treatment`)

Drying condensate received by on-site treatment is measured separately from other influent streams.

- Selected flow: Fruit drying condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered influent mass reconciled with the drying-process output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge`)

Sludge removed from on-site treatment is measured after the declared dewatering state and assigned to its destination.

- Selected flow: Wastewater treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured wet sludge mass with dry-solids content and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

##### Elementary flows

###### Treated water discharged to surface water (`treated_water_discharge`)

Final treated effluent discharged to surface water is measured separately from its pollutant loads.

- Selected flow: Water, surface water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Metered final effluent mass at the discharge point
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Chemical oxygen demand to water (`chemical_oxygen_demand_to_water`)

COD load in final effluent is calculated from discharge flow and representative concentration measurements.

- Selected flow: Chemical oxygen demand, water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Effluent mass or volume multiplied by measured COD concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Biochemical oxygen demand to water (`biochemical_oxygen_demand_to_water`)

BOD load in final effluent is calculated independently from COD.

- Selected flow: Biochemical oxygen demand, water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Effluent mass or volume multiplied by measured BOD concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Total nitrogen to water (`total_nitrogen_to_water`)

Total nitrogen load in final effluent is calculated as a separate elementary flow.

- Selected flow: Nitrogen, total, water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Effluent mass or volume multiplied by measured total-nitrogen concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Total phosphorus to water (`total_phosphorus_to_water`)

Total phosphorus load in final effluent is calculated as a separate elementary flow.

- Selected flow: Phosphorus, total, water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Effluent mass or volume multiplied by measured total-phosphorus concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

###### Suspended solids to water (`suspended_solids_to_water`)

Suspended-solids load in final effluent is calculated independently from dissolved pollutant indicators.

- Selected flow: Suspended solids, water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Effluent mass or volume multiplied by measured suspended-solids concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional foreground processes | Avoid allocation first by separately measuring product-specific batches, equipment, meters, and waste streams; use system expansion only when the additional function and substituted product are demonstrable and consistently modelled. | `eu-pef-2021-2279` |
| `allocation_physical` | unavoidable joint production | If subdivision and system expansion are not feasible, use a documented physical relationship that reflects causation between inputs and co-product functions; do not default to mass merely because mass is available. | `eu-pef-2021-2279` |
| `allocation_economic` | no defensible physical relationship | Use economic allocation only when no relevant physical relationship can be demonstrated; use representative price and quantity records for the same reference period and disclose sensitivity. | `eu-pef-2021-2279` |
| `allocation_waste` | rejects, peel, pits, cores, fines, packaging scrap, and sludge | Keep collection and treatment burdens in the product system for discarded waste. Treat a residue as a co-product only when it has a documented market or function, and apply the preceding hierarchy. | `eu-pef-2021-2279` |
| `allocation_mixtures` | dried-fruit or nut mixtures | Model each purchased component as an input with its own mass and upstream dataset; mixture composition does not justify averaging away component identity. | `unsd-cpc-3-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `receive_and_prepare`; `blanching`; `sulphiting`; `conditioning` | fruit, additives, intermediate products, rejects, and residues | scales, batch sheets, inventory and destination records | lot id; fruit identity; gross mass; tare; net mass; moisture basis; additive issue and return; residue destination | calibrated scale and batch reconciliation | kg | every batch | representative continuous 12-month period or full seasonal campaign | all lines and shifts in scope | sum net masses by process and normalize to conforming reference product | scale calibration; signed batch sheets; stock reconciliation; destination receipts |
| `cp_water_wastewater` | `receive_and_prepare`; `blanching`; `sulphiting`; `drying` | make-up water, wastewater, spent solution, and condensate | meters, tank levels, batch sheets, and discharge records | meter readings; tank change; recirculation; discharge destination; concentration when relevant | meter difference or documented mass balance | kg | each batch or daily with batch allocation | same period as product inventory | all water systems serving the processes | subtract recirculation and allocate shared systems by measured throughput or operating time | meter calibration; balance closure; treatment receipts |
| `cp_energy_fuel` | all production processes | electricity, steam, natural gas, LPG, diesel, and wood pellets | meters, invoices, tank and stock records, operating logs | meter readings; fuel quantity; density; heating value basis; steam state; operating time | direct measurement preferred; documented allocation for shared meters | kWh, MJ, kg, m3, or L | each batch, shift, or billing interval | same period as product inventory | all included equipment and utility systems | convert with documented factors and normalize by conforming process output | meter calibration; invoices; stock reconciliation; factor source |
| `cp_drying_operation` | `drying` | input fruit, dried output, moisture removal, technology, and operating conditions | dryer batch logs and laboratory results | fruit mass; initial and final moisture with basis; condensate; time; temperature; humidity; pressure; product status | calibrated scales, sensors, and validated moisture or water-activity method | kg and declared process units | every drying batch | full represented campaign | every dryer and recipe in scope | calculate fruit and water mass balances by declared technology and recipe | calibration; test method; batch traceability; mass-balance closure |
| `cp_direct_emissions` | `sulphiting`; `drying` | sulphur dioxide and combustion pollutants | stack tests, continuous monitoring, fuel analysis, and factor calculations | pollutant result; flow rate; operating time; fuel quantity; carbon or sulphur content; oxidation and emission factors; factor source | direct measurement preferred; otherwise fuel-specific calculation | kg | each required test and each inventory period | same period as fuel inventory | all on-site emission points | sum pollutant mass by source and normalize to process output | accredited test report or documented factor lineage; reconciliation with fuel use |
| `cp_refrigerant` | `drying`; `cold_storage` | refrigerant make-up and leakage | service logs, purchase records, cylinder weights, recovery records | refrigerant identity; opening stock; purchases; closing stock; recovered; transferred; equipment | equipment-level annual mass balance | kg | every service event and annually | same period as product inventory | every refrigerant circuit in scope | calculate loss by named refrigerant and allocate by equipment output or mass-time | technician records; cylinder scale calibration; stock reconciliation |
| `cp_packaging` | `packaging` | each package component and its scrap | bills of materials, receipts, counts, unit masses, and scrap scales | material identity; layer or component; count; unit mass; issued; returned; scrap; destination | component mass balance | kg | each packaging batch | same period as product inventory | every package format in scope | calculate each component and scrap mass per net kg product | supplier specification; verified unit mass; stock and scrap reconciliation |
| `cp_storage` | `cold_storage` | stored product, electricity, temperature, and duration | warehouse records, meters, and temperature logs | entry and release mass; timestamps; chamber; temperature; electricity | mass-time inventory and metered energy | kg, h, kWh, degC | continuous or each release | represented storage period | all controlled chambers in scope | allocate electricity by measured chamber load or mass-time and disclose method | calibrated temperature sensor; inventory reconciliation; meter records |
| `cp_sanitation` | `sanitation` | sanitation water, active chemicals, electricity, and wastewater | sanitation logs, formulation sheets, meters, and chemical issue records | cleaning event; water; formulated product mass; active fraction; electricity; wastewater | event-level measurement and formulation calculation | kg and kWh | every sanitation event | same period as product inventory | all food-contact equipment and rooms in scope | sum events attributable to represented production and normalize to reference product | sanitation sign-off; chemical specification; meter records |
| `cp_wastewater_treatment` | `wastewater_treatment` | influent streams, utilities, sludge, final effluent, and pollutant loads | influent and effluent meters, laboratory results, chemical dosing, electricity, and sludge tickets | stream identity; flow; COD; BOD; total N; total P; suspended solids; chemical dose; electricity; sludge mass and dry solids | flow-proportional sampling and process records | kg, concentration units, and kWh | continuous flow with representative sampling | same period as product inventory | on-site treatment and discharge points | calculate each pollutant load from flow and concentration; allocate shared treatment by justified load driver | laboratory QA; sampling plan; meter calibration; sludge destination record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all foreground exchanges | Divide the exchange assigned to conforming product by net conforming dried-fruit mass; packaging mass is not included in the denominator. | exchange amount; net conforming dried-fruit mass | exchange per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_water_balance` | `drying` | Water removed equals water in fruit entering drying minus water in dried output, adjusted for measured liquid additions and withdrawals; split removed water into collected condensate and vented water. | wet- and dry-basis moisture results; fruit masses; condensate; added water | kg condensate and kg water to air | |
| `calc_shared_energy` | shared electricity and heat | Allocate only after subdivision by metering; remaining shared energy is assigned using documented equipment operating time and load, product throughput, or another causal driver. | meter total; equipment time and load; process output | process-specific kWh or MJ | `eu-pef-2021-2279` |
| `calc_fuel_emissions` | on-site fuel combustion | Calculate each pollutant separately from fuel-specific quantity and documented factor; calculate fossil and biogenic carbon dioxide separately and retain factor source and heating-value basis. | fuel by type; carbon or sulphur content; oxidation or emission factor; stack result | kg of each direct air emission | |
| `calc_refrigerant_loss` | drying and storage refrigerants | Opening stock plus purchases minus closing stock, recovered amount, and documented transfers equals loss for each named refrigerant. | equipment-level refrigerant records | kg emitted by refrigerant identity | |
| `calc_effluent_load` | final effluent pollutants | Multiply final effluent volume by representative measured concentration and convert to pollutant mass; do not combine COD, BOD, nitrogen, phosphorus, or suspended solids. | final effluent flow; analyte concentration | kg of each pollutant to water | |
| `calc_packaging_mass` | package components | Multiply verified unit component mass by conforming package count and reconcile against issued, returned, and scrap masses for each material. | component count and unit mass; issue and scrap records | kg of each package material per reference product | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and process route | Preserve lot-to-batch-to-package traceability and the declared fruit, pretreatment, dryer, package, and storage identity. | batch genealogy, product specification, recipe, and package bill of materials |
| `dq_temporal` | foreground records | Cover a representative continuous 12-month period or the complete seasonal campaign; disclose start, end, shutdowns, and exceptional batches. | dated meters, logs, invoices, and production ledger |
| `dq_completeness` | inventory | Reconcile fruit mass, water balance, energy, fuels, package materials, refrigerants, wastes, and direct emissions; explain every material imbalance or missing row. | signed balance sheets and unresolved-data register |
| `dq_measurement` | measured data | Use calibrated instruments and retain units, moisture basis, sampling method, detection limits, and conversion factors. | calibration certificates, laboratory QA, and calculation workbook |
| `dq_representativeness` | foreground and upstream data | Assess technological, geographical, and time representativeness and precision; document proxies and why they are appropriate. | data-quality assessment consistent with the PEF criteria |
| `dq_source_lineage` | calculated values | Retain the raw record, formula, factor identity, factor source, and version used for every calculated exchange. | auditable calculation lineage and factor record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | reference product | Confirm that the denominator is exactly 1 kg net conforming dried fruit and excludes all packaging mass. | `eu-pef-2021-2279` |
| `validate_qualifiers` | product identity | Fail conformance when fruit composition, preparation form, pretreatment, drying technology, final moisture or water-activity specification, package format, geography, or reference period is missing. | `unsd-cpc-3-2025`; `codex-cxc-3-1969` |
| `validate_process_map` | foreground boundary | Confirm that every applied operation has a process inventory and that every conditional operation is either supported by records or explicitly not applicable. | `fao-processing-dried-fruits-2004`; `codex-cxc-3-1969` |
| `validate_atomic_inventory` | process exchanges | Fail when electricity, steam, any fuel, refrigerant, water, chemical, packaging component, waste stream, or direct emission is combined with another exchange or represented by a selector label. | `eu-pef-2021-2279` |
| `validate_mass_balance` | fruit and water | Reconcile incoming fruit with conforming product, residues, rejects, condensate, vented water, and inventory change; investigate unexplained imbalance rather than forcing closure. | `codex-cxc-1-1969` |
| `validate_energy_emissions` | drying utilities and direct emissions | Reconcile each fuel and electricity record to the declared dryer route and verify that each on-site combustion pollutant and each named refrigerant loss is represented separately. | `sagar-kumar-drying-2010`; `eu-pef-2021-2279` |
| `validate_wastewater` | wastewater and discharge | Reconcile each wastewater stream to treatment or external transfer and verify separate final-effluent loads for COD, BOD, total nitrogen, total phosphorus, and suspended solids when on-site discharge occurs. | `eu-pef-2021-2279` |
| `validate_food_safety_records` | hygiene and product release | Verify potable water, sanitation, process-control, moisture or water-activity, package integrity, deviation, and release records for the represented batches. | `codex-cxc-1-1969`; `codex-cxc-3-1969` |
| `validate_allocation` | co-products and shared processes | Verify the allocation hierarchy, driver, same-period quantities and prices where relevant, and sensitivity; fail undocumented burden-free residues or co-products. | `eu-pef-2021-2279` |
| `validate_data_quality` | dataset | Verify temporal coverage, calibration, representativeness, precision, completeness, proxy disclosure, and calculation lineage before release. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for other dried fruit, n.e.c. at the processor gate. |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA process and lifecycle-model construction for a product matching the declared fruit, route, moisture or water-activity specification, packaging, geography, technology, and period. |
| excluded_use | Comparative assertion or substitution across materially different fruit species, sweetened versus unsweetened products, drying technologies, moisture states, package formats, or geographies without additional review. |
| required_metadata | PCR id and version; fruit and mixture identity; origin and incoming condition; preparation form; pretreatment and additives; drying technology; utility and fuel sources; final moisture content and basis or water activity; package bill of materials; storage regime; geography; technology; reference period; cut-offs; allocation; upstream dataset identifiers. |
| required_quality_disclosure | Coverage and balance results; measured versus calculated values; calibration and sampling; temporal, technological, and geographical representativeness; precision; proxies; unresolved UUIDs and range evidence; allocation sensitivity; deviations. |
| update_trigger | Change in fruit or mixture recipe, incoming state, pretreatment, drying technology or fuel, package format, storage regime, facility, wastewater treatment, allocation, upstream dataset, legal product specification, or representative reference period. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `official_guidance` | United Nations Statistics Division. *CPC Ver. 3.0 Explanatory Notes*, last updated 30 June 2025, subclass 21419. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-24). | Product-category scope, included dried fruits, and mixture identity. |
| `codex-cxc-3-1969` | `standard` | Codex Alimentarius Commission. *Code of Hygienic Practice for Dried Fruits*, CXC 3-1969, adopted 1969, editorial amendments 2011. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ro/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+3-1969%2FCXC_003e.pdf (retrieved 2026-08-24). | Dried-fruit scope, raw-material protection, potable water, preparation, drying-yard controls, packaging, moisture stability, storage, sanitation, and records. |
| `codex-cxc-1-1969` | `standard` | FAO and WHO. *General Principles of Food Hygiene*, CXC 1-1969. Rome, 2023. https://doi.org/10.4060/cc6125en (full text retrieved 2026-08-24). | GHP and HACCP controls, potable water, sanitation, monitoring, verification, documentation, traceability, and corrective-action records. |
| `fao-processing-dried-fruits-2004` | `extension_guidance` | International Centre for Underutilised Crops. *Processing of Dried Fruits*. FAO-hosted technical guide, 2004. https://www.fao.org/fileadmin/templates/inpho/documents/AE618e.pdf (retrieved 2026-08-24). | Process decomposition for selection, washing, cutting, blanching, sulphuring or sulphiting, drying, conditioning, quality control, packaging, and storage. |
| `sagar-kumar-drying-2010` | `literature` | Sagar, V. R. and Suresh Kumar, P. “Recent advances in drying and dehydration of fruits and vegetables: a review.” *Journal of Food Science and Technology* 47, 15–26 (2010). https://doi.org/10.1007/s13197-010-0010-8; PMCID: PMC3550996 (full text verified 2026-08-24). | Drying-technology alternatives and the need to record technology-specific energy, product quality, and operating conditions. |
| `eu-pef-2021-2279` | `official_guidance` | European Commission. *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, consolidated 30 December 2021. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (full text retrieved 2026-08-24). | Reference-flow normalization, complete inventory, company-specific data, allocation hierarchy, cut-off disclosure, direct elementary flows, validation, and data-quality criteria. |
