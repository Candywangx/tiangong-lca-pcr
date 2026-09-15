---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of goat, fresh or chilled

## 1. Scope and Applicability

This PCR covers edible goat meat placed at the slaughterhouse gate in a fresh or chilled state under CPC 21116. It applies to carcasses, sides, quarters and cuts that have not been frozen and whose net accepted meat mass is known. Edible offal, blood, hide, fat, bones and other separated outputs are not part of the reference product and are recorded individually when produced.

Frozen goat meat, edible offal sold as such, meat preparations, rendered products and waste treatment products are outside the product scope. Goat rearing and incoming animal transport are outside the foreground boundary but must be represented by upstream datasets linked to the live-goat input. Distribution, retail, cooking, consumption and end-of-life are also outside the foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-fresh-or-chilled |
| classification_refs | CPC 3.0: 21116 (exact) |
| covered_products | Goat carcasses, sides, quarters and cuts intended as meat and dispatched fresh or under chilled conditions without freezing |
| excluded_products | Frozen goat meat; edible offal sold separately; prepared or preserved goat meat; rendered fat; hides; blood; bones; livestock; retail or cooked products |
| representative_product | Net accepted chilled goat meat cuts at slaughterhouse dispatch |
| production_route | Live-goat reception and slaughter; carcass dressing and specific by-product separation; cutting and deboning; chilling and cold storage; cleaning and sanitation; conditional on-site wastewater treatment; packaging and dispatch |
| market_state | Fresh or chilled, food-grade, accepted for dispatch, excluding packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible goat meat supplied fresh or chilled at the slaughterhouse dispatch gate |
| How much | 1 kg net accepted product mass |
| How well | Food-grade goat meat meeting the declared cut, temperature, hygiene, composition and acceptance specification, with no frozen state |
| How long or cycle | One completed production lot through dispatch; no use-phase duration is assigned |
| reference_flow_link | Net accepted fresh-or-chilled goat meat output from `packaging_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat of goat, fresh or chilled `20b4b0eb-d827-48d9-b744-d54842ba57ef` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Goat species; carcass or cut description; bone-in or boneless state; fresh or chilled state; dispatch temperature; net product mass; lot and facility; slaughter and cutting route; packaging configuration; production period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent data-package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_meat_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to exactly 1 kg of accepted fresh-or-chilled goat meat excluding primary, secondary and transport packaging and excluding separately recovered by-products. |
| `live_mass_and_output_mass` | live goat and slaughter outputs | Mass | kg | Retain measured live mass, dressed-carcass mass, meat-output mass and each separated output mass for the same production population and period; do not substitute head count for mass. |
| `temperature_state` | meat outputs | Temperature and time | °C; h | Record measured product temperature and relevant residence time at chilling and dispatch so that fresh-or-chilled status is demonstrable and frozen production is excluded. |
| `energy_carrier_separation` | electricity and thermal inputs | Energy | kWh; MJ; kg as purchased | Preserve electricity, purchased steam, purchased hot water, natural gas, diesel and LPG as separate records and disclose every conversion factor. |
| `chemical_formulation_mass` | cleaning and disinfection agents | Mass | kg | Record the supplied formulation mass and active content separately; do not report an unspecified chemicals total. |
| `packaging_net_mass` | packaging inputs | Mass | kg | Derive each packaging component mass from measured empty mass and count, and exclude all packaging from reference-product mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | foreground operations | Begin at live-goat acceptance at the slaughterhouse and end with accepted fresh-or-chilled goat meat packaged for dispatch; include all in-house and subcontracted slaughter, dressing, cutting, chilling, sanitation, relevant wastewater management and packaging operations. | `jrc-sa-bref-2024`; `ec-pef-method-2021` |
| `boundary_upstream_live_goat` | live-goat input | Keep goat rearing and incoming transport outside the foreground process inventory, but link the live-goat input to transparent upstream production and transport datasets consistent with the declared animals and geography. | `ec-pef-method-2021` |
| `boundary_downstream_exclusion` | downstream life cycle | Exclude distribution, retail, cooking, consumption and end-of-life unless a study explicitly adds those stages outside this factory-gate PCR. | `ec-pef-method-2021` |
| `boundary_actual_route` | conditional operations | Include on-site refrigeration, direct combustion and wastewater treatment only when present, and disclose absent or externally supplied operations without netting their exchanges into another process. | `jrc-sa-bref-2024` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live goats accepted at the slaughterhouse reception point, with accepted head count, measured live mass, origin, arrival time and fitness status recorded |
| starting_condition_role | Upstream livestock production and transport terminate at a product input to the foreground slaughterhouse system |
| product_classification_scope | CPC 21116 fresh-or-chilled goat meat only; frozen meat and offal are excluded from the reference product |
| recursive_input_rule | Any purchased fresh-or-chilled goat meat used in an in-scope lot is recorded as a separate same-category input with its own upstream dataset and is not recursively decomposed inside this PCR |
| upstream_dataset_requirement | Live-goat production, incoming transport, purchased utilities, chemicals, packaging and external treatment services require geographically, temporally and technologically representative upstream datasets |
| disclosure | Declare animal origin and live mass, slaughter route, product form, bone state, chilling regime, facility and subcontractor boundaries, wastewater route, packaging and all exclusions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `animal_reception_slaughter` | Animal reception and slaughter | `required` | Always included | Foreground reception, lairage and slaughter | kg bled goat carcass output |
| `carcass_dressing_byproduct_recovery` | Carcass dressing and by-product recovery | `required` | Always included | Foreground dressing and separation | kg dressed goat carcass output |
| `cutting_deboning` | Cutting and deboning | `required` | Include the actual cut and bone-removal route; retain as a process even when only carcass subdivision occurs | Foreground meat preparation | kg unchilled accepted goat meat output |
| `chilling_cold_storage` | Chilling and cold storage | `required` | Always included for chilled product; record measured holding conditions for product sold fresh without active chilling | Foreground temperature control | kg accepted fresh-or-chilled goat meat output |
| `cleaning_sanitation` | Cleaning and sanitation | `required` | Always included; individual heat, fuel and chemical cards apply only when used | Foreground hygiene support | kg reference-product-equivalent production served |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include when slaughterhouse wastewater is treated on site before discharge or transfer | Foreground pollution control | kg equalized slaughterhouse wastewater treated |
| `packaging_dispatch` | Packaging and dispatch | `required` | Always included; unused packaging cards are declared not applicable | Foreground final product preparation | 1 kg net accepted reference product |

### Process: Animal reception and slaughter (`animal_reception_slaughter`)

#### Inputs

##### Product flows

###### Accepted live goats (`live_goat_input`)

Accepted live goats cross the slaughterhouse boundary as one livestock product input; weigh the accepted population and preserve origin and head-count records.

- Selected flow: Live goat
- Flow property / unit: Mass / kg
- Amount rule: measured accepted live-goat mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bled goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_slaughter`
- Sources: `jrc-sa-bref-2024`

###### Reception and slaughter process water (`reception_slaughter_water_input`)

Meter water supplied to reception, lairage and slaughter as one stage-specific water input, excluding water assigned to later sanitation.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured reception-and-slaughter water volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bled goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_slaughter`
- Sources: `jrc-sa-bref-2024`

###### Reception and slaughter electricity (`reception_slaughter_electricity_input`)

Record electricity metered or causally assigned to live-animal handling and slaughter equipment separately from later stages.

- Selected flow: Electricity, low voltage, at slaughterhouse
- Flow property / unit: Energy / kWh
- Amount rule: measured or causally allocated reception-and-slaughter electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bled goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_slaughter`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bled goat carcass (`bled_goat_carcass_output`)

The carcass after slaughter and bleeding crosses to dressing; obtain its mass from calibrated rail or batch weighing.

- Selected flow: Bled goat carcass
- Flow property / unit: Mass / kg
- Amount rule: measured bled goat carcass mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bled goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_slaughter`
- Sources: `jrc-sa-bref-2024`

###### Goat blood for technical processing (`goat_blood_byproduct_output`)

Separately collected goat blood leaving for a declared technical processing route is weighed as one specific co-product.

- Selected flow: Goat blood for technical processing
- Flow property / unit: Mass / kg
- Amount rule: measured separately collected goat-blood mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bled goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_slaughter`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

###### Goat manure from reception (`goat_manure_waste_output`)

Goat manure removed from reception and lairage is weighed separately and linked to its actual receiving treatment.

- Selected flow: Goat manure
- Flow property / unit: Mass / kg
- Amount rule: measured manure mass removed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bled goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_slaughter`
- Sources: `jrc-sa-bref-2024`

###### Condemned whole goat carcass (`condemned_whole_goat_waste_output`)

A whole goat condemned before dressing is recorded as a specific animal-tissue waste and is not netted against accepted live input.

- Selected flow: Condemned whole goat carcass
- Flow property / unit: Mass / kg
- Amount rule: measured condemned whole-carcass mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bled goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_slaughter`
- Sources: `jrc-sa-bref-2024`

###### Goat slaughter-hall wastewater (`slaughter_wastewater_output`)

Wastewater physically collected from the goat slaughter hall is measured as one specific waste flow before mixing or treatment; lairage wash water is reported separately when generated.

- Selected flow: Wastewater from goat slaughter hall
- Flow property / unit: Volume / m3
- Amount rule: measured goat slaughter-hall wastewater volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bled goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_slaughter`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

### Process: Carcass dressing and by-product recovery (`carcass_dressing_byproduct_recovery`)

#### Inputs

##### Product flows

###### Bled goat carcass input (`bled_goat_carcass_input`)

The weighed bled carcass enters dressing without combining its mass with blood or condemned animals.

- Selected flow: Bled goat carcass
- Flow property / unit: Mass / kg
- Amount rule: measured bled goat carcass mass entering dressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

###### Dressing process water (`dressing_water_input`)

Meter water supplied to carcass dressing separately from slaughter, cutting and sanitation water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured dressing-water volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

###### Dressing electricity (`dressing_electricity_input`)

Record electricity metered or causally assigned to dressing equipment as its own stage exchange.

- Selected flow: Electricity, low voltage, at slaughterhouse
- Flow property / unit: Energy / kWh
- Amount rule: measured or causally allocated dressing electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dressed goat carcass (`dressed_goat_carcass_output`)

The accepted dressed carcass leaves after evisceration and hide removal; use calibrated rail or batch mass.

- Selected flow: Dressed goat carcass
- Flow property / unit: Mass / kg
- Amount rule: measured accepted dressed-carcass mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

###### Edible goat liver (`edible_goat_liver_output`)

Accepted goat liver sold for food is weighed separately from meat and every other edible organ.

- Selected flow: Goat liver, edible
- Flow property / unit: Mass / kg
- Amount rule: measured accepted edible goat-liver mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

###### Edible goat heart (`edible_goat_heart_output`)

Accepted goat heart sold for food is weighed as its own edible co-product rather than an offal collection.

- Selected flow: Goat heart, edible
- Flow property / unit: Mass / kg
- Amount rule: measured accepted edible goat-heart mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

###### Goat hide (`goat_hide_byproduct_output`)

The removed goat hide is weighed separately and assigned its declared sale or treatment route.

- Selected flow: Goat hide
- Flow property / unit: Mass / kg
- Amount rule: measured goat-hide mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

###### Goat stomach contents (`goat_stomach_contents_waste_output`)

Goat stomach contents removed during evisceration are weighed separately from intestinal contents before treatment.

- Selected flow: Goat stomach contents
- Flow property / unit: Mass / kg
- Amount rule: measured goat-stomach-content waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

###### Goat intestinal contents (`goat_intestinal_contents_waste_output`)

Goat intestinal contents removed during evisceration are weighed as their own waste exchange before treatment.

- Selected flow: Goat intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: measured goat-intestinal-content waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

###### Condemned goat viscera (`condemned_goat_viscera_waste_output`)

Viscera rejected from food and co-product routes are weighed as a specific condemned tissue waste.

- Selected flow: Condemned goat viscera
- Flow property / unit: Mass / kg
- Amount rule: measured condemned goat-viscera mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

###### Carcass-dressing wastewater (`dressing_wastewater_output`)

Wastewater collected from dressing is measured before mixing with sanitation or cutting wastewater.

- Selected flow: Wastewater from goat carcass dressing
- Flow property / unit: Volume / m3
- Amount rule: measured dressing-wastewater volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed goat carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_dressing`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

### Process: Cutting and deboning (`cutting_deboning`)

#### Inputs

##### Product flows

###### Dressed goat carcass input (`dressed_goat_carcass_input`)

The dressed carcass enters the declared cutting or deboning route at its measured accepted mass.

- Selected flow: Dressed goat carcass
- Flow property / unit: Mass / kg
- Amount rule: measured dressed-carcass mass entering cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unchilled accepted goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_deboning`
- Sources: `jrc-sa-bref-2024`

###### Cutting-room process water (`cutting_water_input`)

Water used directly during cutting or deboning is metered separately from scheduled sanitation water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured cutting-room process-water volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unchilled accepted goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_deboning`
- Sources: `jrc-sa-bref-2024`

###### Cutting and deboning electricity (`cutting_electricity_input`)

Record electricity for cutting, sawing and deboning equipment separately from refrigeration and packaging.

- Selected flow: Electricity, low voltage, at slaughterhouse
- Flow property / unit: Energy / kWh
- Amount rule: measured or causally allocated cutting-and-deboning electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unchilled accepted goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_deboning`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unchilled accepted goat meat (`unchilled_goat_meat_output`)

Accepted meat leaving cutting is weighed before chilling and before packaging, with its cut and bone state declared.

- Selected flow: Goat meat cuts, unchilled
- Flow property / unit: Mass / kg
- Amount rule: measured accepted unchilled goat-meat mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unchilled accepted goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_deboning`
- Sources: `jrc-sa-bref-2024`

###### Goat bones for further processing (`goat_bones_byproduct_output`)

Bones separated during cutting or deboning are weighed as one specific co-product and assigned their declared route.

- Selected flow: Goat bones for further processing
- Flow property / unit: Mass / kg
- Amount rule: measured separated goat-bone mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unchilled accepted goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_deboning`
- Sources: `jrc-sa-bref-2024`

###### Goat fat for rendering (`goat_fat_byproduct_output`)

Clean goat fat trimmings sent to rendering are weighed separately from meat, bones and condemned tissue.

- Selected flow: Goat fat for rendering
- Flow property / unit: Mass / kg
- Amount rule: measured goat-fat trimming mass sent to rendering
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unchilled accepted goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_deboning`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

###### Condemned goat meat trimmings (`condemned_meat_waste_output`)

Goat meat trimmings rejected from edible and co-product routes are weighed as a separate condemned waste.

- Selected flow: Condemned goat meat trimmings
- Flow property / unit: Mass / kg
- Amount rule: measured condemned goat-meat trimming mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unchilled accepted goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_deboning`
- Sources: `jrc-sa-bref-2024`

###### Cutting-room wastewater (`cutting_wastewater_output`)

Wastewater arising directly from cutting operations is measured as its own stage flow before common treatment.

- Selected flow: Wastewater from goat-meat cutting
- Flow property / unit: Volume / m3
- Amount rule: measured cutting-room wastewater volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unchilled accepted goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_deboning`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

### Process: Chilling and cold storage (`chilling_cold_storage`)

#### Inputs

##### Product flows

###### Unchilled goat meat input (`unchilled_goat_meat_input`)

The accepted unchilled meat enters the declared chilling or fresh-product holding regime at measured mass and temperature.

- Selected flow: Goat meat cuts, unchilled
- Flow property / unit: Mass / kg
- Amount rule: measured unchilled goat-meat mass entering temperature control
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted fresh-or-chilled goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `jrc-sa-bref-2024`

###### Chilling electricity (`chilling_electricity_input`)

Meter electricity supplied to refrigeration compressors, fans and cold-room equipment separately from other stages.

- Selected flow: Electricity, low voltage, at slaughterhouse
- Flow property / unit: Energy / kWh
- Amount rule: measured or causally allocated chilling and cold-storage electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh-or-chilled goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `jrc-sa-bref-2024`

###### Chilling defrost water (`chilling_defrost_water_input`)

Water supplied for defrosting or cooling equipment is metered as a separate stage-specific input when used.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured refrigeration-defrost water volume when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted fresh-or-chilled goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `jrc-sa-bref-2024`

###### Ammonia refrigerant make-up (`ammonia_refrigerant_input`)

Anhydrous ammonia added to an R717 refrigeration circuit is recorded from maintenance or inventory records when that specific refrigerant is used.

- Selected flow: Ammonia, anhydrous, refrigerant grade
- Flow property / unit: Mass / kg
- Amount rule: measured ammonia refrigerant make-up mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted fresh-or-chilled goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fresh-or-chilled goat meat (`chilled_goat_meat_output`)

Meat leaving temperature control is weighed and accepted against the declared non-frozen temperature and quality specification.

- Selected flow: Goat meat before packaging
- Flow property / unit: Mass / kg
- Amount rule: measured accepted fresh-or-chilled goat-meat mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted fresh-or-chilled goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `un-cpc-3-0-21116`; `jrc-sa-bref-2024`

##### Waste flows

###### Refrigeration defrost wastewater (`chilling_defrost_wastewater_output`)

Defrost water leaving the refrigeration system is measured separately before it enters treatment or sewer collection.

- Selected flow: Wastewater from refrigeration defrosting
- Flow property / unit: Volume / m3
- Amount rule: measured refrigeration-defrost wastewater volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted fresh-or-chilled goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

###### Ammonia refrigerant released to air (`ammonia_refrigerant_air_output`)

Ammonia lost from the R717 circuit is calculated from reconciled refrigerant inventory or measured release records as one air emission.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: calculated ammonia refrigerant loss to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted fresh-or-chilled goat meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage`
- Sources: `jrc-sa-bref-2024`

### Process: Cleaning and sanitation (`cleaning_sanitation`)

#### Inputs

##### Product flows

###### Sanitation process water (`sanitation_water_input`)

Water used for scheduled cleaning and sanitation is metered separately from water used directly in meat operations.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured sanitation-water volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Sanitation electricity (`sanitation_electricity_input`)

Record electricity for pumps, pressure washers and sanitation support equipment as a separate stage exchange.

- Selected flow: Electricity, low voltage, at slaughterhouse
- Flow property / unit: Energy / kWh
- Amount rule: measured or causally allocated sanitation electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Purchased steam for sanitation (`purchased_steam_input`)

Purchased steam crossing the facility boundary for sanitation is metered independently from hot water and on-site fuels.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: measured purchased steam supplied to sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Purchased hot water for sanitation (`purchased_hot_water_input`)

Purchased hot water crossing the facility boundary is recorded separately from steam and cold process water.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: measured purchased hot-water energy supplied to sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Natural gas for sanitation heat (`natural_gas_input`)

Natural gas burned on site to generate sanitation heat is recorded from a dedicated meter or causal allocation when used.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: measured natural-gas energy supplied to sanitation heat generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Diesel for sanitation heat (`diesel_input`)

Diesel burned on site for sanitation heat is recorded as its own fuel exchange when that equipment is used.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured diesel energy supplied to sanitation heat generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### LPG for sanitation heat (`lpg_input`)

Liquefied petroleum gas burned on site for sanitation heat is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured LPG energy supplied to sanitation heat generation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Sodium hydroxide cleaning formulation (`sodium_hydroxide_cleaner_input`)

The supplied sodium-hydroxide cleaning formulation is weighed separately and its active concentration is retained.

- Selected flow: Sodium hydroxide cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: measured supplied sodium-hydroxide formulation mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Peracetic acid disinfectant formulation (`peracetic_acid_disinfectant_input`)

The supplied peracetic-acid disinfectant is weighed as one formulation and documented with its active concentration.

- Selected flow: Peracetic acid disinfectant formulation
- Flow property / unit: Mass / kg
- Amount rule: measured supplied peracetic-acid formulation mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater (`sanitation_wastewater_output`)

Spent cleaning water from sanitation is measured as a specific wastewater flow before equalization or external transfer.

- Selected flow: Wastewater from slaughterhouse sanitation
- Flow property / unit: Volume / m3
- Amount rule: measured sanitation-wastewater volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

###### Fossil carbon dioxide from natural-gas combustion (`natural_gas_co2_air_output`)

Fossil carbon dioxide from the recorded natural-gas input is calculated with a disclosed applicable factor or measured directly.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated or measured fossil carbon dioxide from natural-gas combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `ec-pef-method-2021`

###### Nitrogen oxides from natural-gas combustion (`natural_gas_nox_air_output`)

Nitrogen oxides from natural-gas combustion are measured or calculated separately from the same recorded fuel inventory.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: calculated or measured nitrogen oxides from natural-gas combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Fossil carbon dioxide from diesel combustion (`diesel_co2_air_output`)

Fossil carbon dioxide from the recorded diesel input is calculated with a disclosed applicable factor or measured directly.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated or measured fossil carbon dioxide from diesel combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `ec-pef-method-2021`

###### Nitrogen oxides from diesel combustion (`diesel_nox_air_output`)

Nitrogen oxides from diesel combustion are measured or calculated as one distinct elementary exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: calculated or measured nitrogen oxides from diesel combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Fine particulate matter from diesel combustion (`diesel_pm25_air_output`)

Primary fine particulate matter from diesel combustion is measured or calculated separately from gaseous emissions.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated or measured primary PM2.5 from diesel combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

###### Fossil carbon dioxide from LPG combustion (`lpg_co2_air_output`)

Fossil carbon dioxide from the recorded LPG input is calculated with a disclosed applicable factor or measured directly.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated or measured fossil carbon dioxide from LPG combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `ec-pef-method-2021`

###### Nitrogen oxides from LPG combustion (`lpg_nox_air_output`)

Nitrogen oxides from LPG combustion are measured or calculated as their own air emission.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: calculated or measured nitrogen oxides from LPG combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference-product-equivalent production served
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `jrc-sa-bref-2024`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

##### Waste flows

###### Equalized slaughterhouse wastewater (`equalized_wastewater_input`)

The physically mixed and equalized slaughterhouse wastewater entering on-site treatment is measured at the treatment inlet as one waste exchange.

- Selected flow: Equalized goat-slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater volume entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 equalized wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sludge from slaughterhouse wastewater treatment (`wastewater_sludge_output`)

Sludge removed from the on-site treatment system is weighed as one specific waste and linked to its receiving treatment.

- Selected flow: Sludge from slaughterhouse wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured dewatered wastewater-sludge mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 equalized wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

###### Chemical oxygen demand discharged to water (`cod_water_output`)

Chemical oxygen demand in final effluent is calculated from measured concentration and discharge volume as one water emission.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: calculated COD mass in discharged treated effluent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 equalized wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater`
- Sources: `jrc-sa-bref-2024`

###### Total nitrogen discharged to water (`total_nitrogen_water_output`)

Total nitrogen in final effluent is calculated separately from its measured concentration and discharge volume.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: calculated total-nitrogen mass in discharged treated effluent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 equalized wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater`
- Sources: `jrc-sa-bref-2024`

###### Total phosphorus discharged to water (`total_phosphorus_water_output`)

Total phosphorus in final effluent is calculated as a distinct water emission from measured concentration and volume.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: calculated total-phosphorus mass in discharged treated effluent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 equalized wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater`
- Sources: `jrc-sa-bref-2024`

###### Biogenic methane from wastewater treatment (`wastewater_methane_air_output`)

Biogenic methane released from on-site wastewater treatment is measured or calculated as one air emission when anaerobic conditions occur.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated biogenic methane released from wastewater treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 equalized wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater`
- Sources: `jrc-sa-bref-2024`

### Process: Packaging and dispatch (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Fresh-or-chilled goat meat before packaging (`chilled_goat_meat_packaging_input`)

Accepted fresh-or-chilled goat meat enters final packaging at measured net mass and documented product temperature.

- Selected flow: Goat meat before packaging
- Flow property / unit: Mass / kg
- Amount rule: measured accepted meat mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `un-cpc-3-0-21116`

###### Polyethylene primary packaging film (`polyethylene_film_input`)

Polyethylene film placed around the product is weighed separately from cartons and labels for the actual configuration.

- Selected flow: Polyethylene primary packaging film
- Flow property / unit: Mass / kg
- Amount rule: calculated used polyethylene-film mass from count and measured empty unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `ec-pef-method-2021`

###### Corrugated shipping carton (`corrugated_carton_input`)

Corrugated cartons used for dispatch are measured as their own packaging component and allocated by contained net meat mass.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: calculated corrugated-carton mass assigned to the reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `ec-pef-method-2021`

###### Paper product label (`paper_label_input`)

The paper label attached to the packaged product or carton is recorded separately from every other packaging component.

- Selected flow: Paper product label
- Flow property / unit: Mass / kg
- Amount rule: calculated used paper-label mass from count and measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `ec-pef-method-2021`

###### Packaging electricity (`packaging_electricity_input`)

Electricity for sealing, labelling and dispatch preparation is metered or causally assigned separately from refrigeration.

- Selected flow: Electricity, low voltage, at slaughterhouse
- Flow property / unit: Energy / kWh
- Amount rule: measured or causally allocated packaging electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference fresh-or-chilled goat meat output (`reference_goat_meat_output`)

The verified CPC 21116 product leaves the foreground system at exactly 1 kg net accepted fresh-or-chilled goat-meat mass, excluding packaging.

- Selected flow: Meat of goat, fresh or chilled `20b4b0eb-d827-48d9-b744-d54842ba57ef`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (`93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: accepted net fresh-or-chilled goat-meat mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `un-cpc-3-0-21116`

##### Waste flows

###### Waste polyethylene packaging film (`polyethylene_film_waste_output`)

Damaged or unused polyethylene film is weighed separately and linked to its actual receiving treatment.

- Selected flow: Waste polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured waste polyethylene-film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `ec-pef-method-2021`

###### Waste corrugated paperboard (`corrugated_carton_waste_output`)

Damaged or unused corrugated carton material is weighed as one paperboard waste exchange and linked to its treatment.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: measured waste corrugated-paperboard mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `ec-pef-method-2021`

###### Waste paper label stock (`paper_label_waste_output`)

Rejected or unused paper labels are weighed independently from corrugated board and plastic film waste.

- Selected flow: Waste paper label stock
- Flow property / unit: Mass / kg
- Amount rule: measured waste paper-label mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `ec-pef-method-2021`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all foreground operations | First subdivide reception/slaughter, dressing, cutting, chilling, sanitation, wastewater treatment and packaging and directly measure product-specific exchanges before allocation. | `ec-pef-method-2021` |
| `allocation_saleable_outputs` | meat and saleable blood, liver, heart, hide, fat or bones | Apply a documented physical causal relationship where it represents how burdens arise; when no physical relationship is defensible, apply the PEF allocation hierarchy and disclose any economic allocation period, prices, currency and sensitivity. | `ec-pef-method-2021` |
| `allocation_waste_outputs` | condemned tissue, gut contents, manure, wastewater, sludge and packaging waste | Assign production burdens to the operation that generated the waste and model the actual receiving treatment; do not create an avoided-product credit without an explicitly justified downstream method. | `ec-pef-method-2021`; `jrc-sa-bref-2024` |
| `allocation_shared_utilities` | shared electricity, water and heat meters | Allocate each measured utility separately using a causal driver such as operating time multiplied by measured power, water demand or heat demand; retain meter total, numerator, denominator and reconciliation. | `ec-pef-method-2021` |
| `allocation_packaging` | grouped cartons | Assign a measured empty carton mass to products using contained net product mass for the same packing configuration and period. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reception_slaughter` | `animal_reception_slaughter` | live goat, water, electricity, carcass, blood, manure, condemnation and wastewater | livestock reception; calibrated scales; meters; slaughter and waste logs | lot; origin; head count; live mass; accepted mass; meter readings; carcass mass; blood mass; manure mass; condemned mass; wastewater volume; destinations | Link all readings and outputs to the same accepted slaughter lot | kg; m3; kWh | Per lot or shift, aggregated monthly | Representative production period, normally 12 months or complete campaign | All reception, lairage and slaughter operations and subcontractors | Sum homogeneous lots, reconcile mass and normalize by bled-carcass output | Scale and meter calibration; veterinary acceptance; lot reconciliation; transfer receipts |
| `cp_carcass_dressing` | `carcass_dressing_byproduct_recovery` | carcass, water, electricity, dressed carcass, liver, heart, hide, gut contents, condemned viscera and wastewater | rail scales; organ and hide scales; meters; inspection and transfer logs | lot; input carcass mass; water; electricity; dressed mass; each output mass; wastewater; acceptance status; destination | Weigh each separated output and rejected stream for the same dressing lot | kg; m3; kWh | Per lot or shift, aggregated monthly | Representative production period | All dressing and inspection lines | Sum by product specification and divide by dressed-carcass output | Calibration; inspection record; output destination; process mass balance |
| `cp_cutting_deboning` | `cutting_deboning` | carcass, water, electricity, meat, bones, fat, condemned trimmings and wastewater | batch scale; cutting records; meters; waste and co-product logs | product code; bone state; input mass; water; electricity; meat mass; bone mass; fat mass; condemned mass; wastewater | Reconcile every cutting lot from dressed carcass through accepted meat and each separated output | kg; m3; kWh | Per batch, aggregated monthly | Representative production period | All cutting and deboning lines and subcontractors | Aggregate only identical cut and bone specifications and normalize to accepted meat | Calibration; cut specification; yield reconciliation; destination receipts |
| `cp_chilling_storage` | `chilling_cold_storage` | meat, electricity, defrost water, ammonia make-up, chilled meat, wastewater and ammonia release | scales; temperature logger; refrigeration meter; water meter; refrigerant inventory and maintenance log | lot; input/output mass; entry/exit temperature; time; electricity; water; ammonia opening stock, additions, recovery and closing stock; wastewater | Link mass, temperature, residence time and utility records to each chilling campaign | kg; °C; h; kWh; m3 | Continuous temperature, per batch mass, monthly utilities | Representative production period covering seasonal operation | All chillers, cold rooms and refrigeration circuits | Allocate refrigeration by measured load or documented causal driver and normalize to accepted meat | Calibrated logger and meters; refrigerant reconciliation; maintenance reports |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | water, electricity, steam, hot water, each fuel, each formulation, wastewater and combustion emissions | sanitation schedule; utility meters; fuel invoices; chemical issue; effluent and stack records | area/equipment; time; water; electricity; steam; hot water; natural gas; diesel; LPG; formulation mass and active content; wastewater; factor or measurement | Record every supplied carrier, fuel and formulation independently for the sanitation event | m3; kWh; MJ; kg | Per sanitation event or shift, aggregated monthly | Representative production period | All in-scope cleaning systems and heat equipment | Allocate shared records with documented causal drivers and calculate each emission from its own fuel | Meter calibration; invoices; SDS; concentration; factor citation; stack result; reconciliation |
| `cp_onsite_wastewater` | `onsite_wastewater_treatment` | equalized wastewater, sludge, COD, nitrogen, phosphorus and methane | inlet/outlet flow meters; laboratory results; sludge scales; gas monitoring | date; inlet and discharge volume; sample time; COD; total nitrogen; total phosphorus concentrations; sludge mass and moisture; methane measurement or model fields | Match representative samples to measured flows and calculate each discharge separately | m3; mg/L; kg | Flow continuous or daily; sampling per permit and operating plan | Representative production period | Complete on-site treatment boundary | Sum mass loads by period and assign them to production using measured wastewater volumes | Laboratory accreditation; sampling plan; flow-meter calibration; sludge receipts; calculation file |
| `cp_packaging_dispatch` | `packaging_dispatch` | meat, each package component, electricity, reference output and each package waste | product scale; packaging specification; component counts and tare weights; meter; waste logs | lot; cut; bone state; temperature; net meat mass; package counts; empty unit masses; carton contents; electricity; each waste mass | Reconcile meat and each package component for every packing configuration | kg; item; kWh; °C | Per packing lot, aggregated monthly | Representative production period | All packing and dispatch lines | Convert component counts to mass, allocate cartons by contained net meat mass and normalize to 1 kg net meat | Scale calibration; package specification; packing list; meter identity; waste receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period exchange amount / accepted net fresh-or-chilled goat-meat mass | period exchange amount; accepted reference-product mass | exchange amount per 1 kg reference product | `ec-pef-method-2021` |
| `calc_stage_mass_balance` | reception/slaughter, dressing and cutting | residual = measured mass inputs - accepted main output - each measured co-product - each measured waste - documented evaporation or retained water | all stage-specific mass records | disclosed residual for each stage | `jrc-sa-bref-2024` |
| `calc_refrigerant_loss` | ammonia refrigeration circuit | ammonia loss = opening inventory + additions - recovered quantity - closing inventory - documented transfer | refrigerant inventory and maintenance records | kg ammonia released, subject to reconciliation and release-route evidence | `ec-pef-method-2021` |
| `calc_effluent_load` | each wastewater emission | discharged mass = matched concentration × discharged effluent volume with documented unit conversion | concentration; volume; sampling representativeness | kg of one specified water emission | `jrc-sa-bref-2024` |
| `calc_combustion_emission` | each direct fuel emission | emission mass = recorded quantity of one fuel × one disclosed applicable factor, unless direct measurement is used | fuel quantity and properties; factor or measurement | kg of one specified air emission | `ec-pef-method-2021` |
| `calc_packaging_mass` | each packaging component | used mass = issued count × measured empty unit mass - returned unused mass; grouped carton mass is assigned by contained net product mass | issue/return counts; tare mass; contained net meat mass | kg of one packaging component per kg product | `ec-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate goat species, CPC 21116 fresh-or-chilled state, cut/carcass description, bone state, acceptance specification and dispatch temperature. | Product specification; lot record; temperature log; classification review |
| `dq_lot_traceability` | slaughter and meat outputs | Preserve traceability from accepted live-goat population through carcass, cuts and dispatched product for the declared period. | Reception, veterinary, slaughter, cutting and dispatch records |
| `dq_mass_completeness` | mass balance | Measure the main product and every actual blood, organ, hide, fat, bone, condemned tissue, gut-content, manure and sludge output separately; disclose unresolved residuals. | Calibrated weights; stage reconciliations; destination records |
| `dq_temporal` | foreground data | Use a representative period, normally 12 consecutive months or the complete production campaign, and explain seasonal or abnormal operation. | Dated production, meter, purchase, maintenance and waste records |
| `dq_measurement` | foreground exchanges | Identify instrument, calibration, frequency, meter boundary and allocation calculation for every material, water, utility, output, waste and emission record. | Calibration certificates; meter register; calculation workpapers |
| `dq_temperature` | fresh-or-chilled state | Retain continuous or lot-representative temperature and time records demonstrating that the declared output was not frozen. | Calibrated temperature logger; cold-room and dispatch records |
| `dq_chemical_identity` | cleaning and disinfection | Retain formulation name, supplier, SDS, active concentration and issued mass for every actual cleaning or disinfecting formulation. | SDS; supplier specification; chemical issue records |
| `dq_waste_destination` | each waste output | Retain mass, classification and receiving-treatment evidence for each waste; do not infer recycling or recovery from sale alone. | Transfer note; invoice; treatment declaration |
| `dq_representativeness` | upstream datasets | Document geographic, temporal and technological match for live goats, incoming transport, utilities, refrigerant, chemicals, packaging and external treatment. | Dataset metadata and PEF data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference UUID must equal `20b4b0eb-d827-48d9-b744-d54842ba57ef`, resolve as a public state-100 Product flow classified to CPC 21116, and use Mass `93a60a56-a3c8-11da-a746-0800200b9a66` with kg from Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. | `un-cpc-3-0-21116` |
| `validate_reference_amount` | reference flow | Output must normalize to exactly 1 kg net accepted goat meat, exclude packaging and separated outputs, and retain the measured unnormalized mass. | `ec-pef-method-2021` |
| `validate_scope_state` | product identity | Product must be goat meat dispatched fresh or chilled; frozen meat, edible offal, prepared meat and separately recovered outputs cannot be included in the reference mass. | `un-cpc-3-0-21116` |
| `validate_actual_route` | process inventory | Reception/slaughter, dressing, cutting, temperature control, sanitation and packaging must be represented; on-site fuel combustion, refrigeration and wastewater treatment must be included whenever present. | `jrc-sa-bref-2024` |
| `validate_atomic_rows` | process inventory | Every card must represent one concrete exchange; each utility, fuel, refrigerant, formulation, packaging component, by-product, waste and elementary emission must remain separate. | `ec-pef-method-2021` |
| `validate_uuid_evidence` | UUID-bearing rows | Store a Tiangong UUID only when both required lookup cores agree on identity, Product type, CPC where applicable and Mass support; otherwise leave it absent and retain a manifest review item. |  |
| `validate_mass_balance` | foreground processes | Reconcile live mass through carcass, meat, every separated co-product and every waste for each stage; unexplained netting or hidden yield factors are nonconformant. | `jrc-sa-bref-2024` |
| `validate_temperature` | product state | Retain calibrated time-temperature evidence demonstrating fresh-or-chilled, not frozen, status at dispatch. | `un-cpc-3-0-21116`; `jrc-sa-bref-2024` |
| `validate_utility_separation` | utilities and fuels | Electricity, steam, hot water, natural gas, diesel and LPG must not be pooled; shared records require meter boundary, period, driver, numerator and denominator. | `ec-pef-method-2021`; `jrc-sa-bref-2024` |
| `validate_byproduct_separation` | separated outputs | Every actual edible or non-edible output must have its own measured row, declared destination and disclosed allocation treatment. | `jrc-sa-bref-2024`; `ec-pef-method-2021` |
| `validate_wastewater_emissions` | on-site wastewater treatment | Report wastewater volume, sludge and each monitored emission separately; do not use an aggregate wastewater-pollutants exchange. | `jrc-sa-bref-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; eligible for `background_dataset` use after methodology and data review |
| downstream_use | Foreground process and lifecyclemodel construction for slaughterhouse-gate production of CPC 21116 goat meat |
| allowed_use | Product-specific fresh-or-chilled goat-meat studies matching species, cut/carcass form, bone state, slaughter and cutting route, temperature regime, facility geography, period, wastewater route and packaging |
| excluded_use | Frozen meat; edible offal; prepared meat; live-goat production; mismatched species or route; retail, cooking or consumption claims not separately modelled; comparative assertions without an applicable reviewed method |
| required_metadata | canonical PCR id; reference UUID; CPC reference; species; origin; product form; bone state; lot; net meat mass; temperature and time; facility and period; animal count and live mass; process route; subcontractors; allocation; packaging; wastewater route; co-product and waste destinations; source ids |
| required_quality_disclosure | primary-data coverage; scale and meter calibration; lot traceability; stage mass-balance residuals; temperature evidence; utility allocation; refrigerant reconciliation; chemical identity; wastewater sampling; emission calculation; upstream dataset representativeness; uncertainty and verification status |
| update_trigger | Change in CPC scope, reference UUID, product state, species, cut or bone state, slaughter or cutting technology, refrigeration, sanitation chemistry, facility or supplier geography, wastewater treatment, allocation, packaging or applicable PEF/BREF guidance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-21116` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 structure, code 21116 “Meat of goat, fresh or chilled”, official 30 June 2025 structure file and repository-retained raw CSV, https://unstats.un.org/unsd/classifications/Econ/cpc, accessed 2026-08-13 | Exact product identity and fresh-or-chilled boundary; exclusion of frozen meat and offal from the reference category |
| `jrc-sa-bref-2024` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, doi:10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Process decomposition from animal reception through slaughter, dressing, cutting and chilling; sanitation, utilities, refrigeration, wastewater, emissions and individually separated animal outputs |
| `ec-pef-method-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/oj | Product-specific inventory, company-specific foreground data, allocation hierarchy, completeness, transparency, data quality and verification |
