---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-spices-and-aromatics-processed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other spices and aromatics, processed

## 1. Scope and Applicability

This PCR covers the complete CPC 3.0 subclass 23929 at the gate of a processing and packing facility. It applies to processed saffron; turmeric (Curcuma or Indian saffron); dill herb and dill seed; curry powders and curry pastes; thyme; bay leaves; Guinea or negro pepper (Xylopia aethiopica seed); angelica stems; and hop cones. Whole, broken, cut, dried, ground, powdered, blended, or paste market forms are included when they retain the identity and culinary or aromatic function of this subclass.

The foreground package starts with declared received plant material or purchased spice ingredients and ends with the saleable processed product, including applicable receiving, sorting, cleaning, washing or soaking, cutting, drying, grinding, sieving, blending, paste preparation, validated microbial-reduction treatment, packing, sanitation, and on-site storage. Cultivation and production of purchased ingredients, packaging, utilities, fuels, cleaning agents, refrigerants, and treatment services are represented by linked upstream datasets and are not silently absorbed into the foreground process.

Live plants, bulbs, tubers, roots, cuttings, slips, and mushroom spawn classified in CPC 01961 and cut flowers, flower buds, bouquets, wreaths, floral baskets, and similar articles classified in CPC 01962 are excluded. Unprocessed agricultural spices and aromatics, extracts and essential oils, and products assigned to another processed-spice subclass are also excluded. A foreground package must name the actual botanical material, product form, route, formulation, moisture condition, microbial-reduction status, packaging format, and geography; the generic Tiangong baseName `Spice` is not sufficient metadata by itself.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-spices-and-aromatics-processed |
| classification_refs | CPC 3.0: 23929, Other spices and aromatics, processed (exact) |
| covered_products | Saffron; turmeric/Curcuma/Indian saffron; dill herb; dill seed; curry powder; curry paste; thyme; bay leaves; Guinea pepper/negro pepper/Xylopia aethiopica seed; angelica stems; hop cones, in whole, broken, cut, dried, ground, powdered, blended, or paste form as applicable |
| excluded_products | CPC 01961 live plants and propagation material; CPC 01962 cut flowers and flower articles; unprocessed agricultural products; essential oils and extracts; sibling processed-spice subclasses CPC 23921-23928 except when an actual ingredient in a CPC 23929 curry product |
| representative_product | One declared saleable processed spice, aromatic, curry powder, or curry paste within CPC 23929 |
| production_route | Dry whole/broken route: receipt/inspection -> cleaning and optional washing/soaking/cutting -> drying when required -> optional treatment -> packing; ground/powder route adds grinding/sieving/dust control; curry-powder route adds recipe-specific blending; curry-paste route adds recipe-specific wet ingredients and only when actually used cooking/pasteurization/cooling; all routes end in packing and declared on-site storage |
| market_state | Food-grade whole, broken, cut, dried, ground, powdered, blended, or paste product at the processing-facility gate, with actual moisture, formulation, treatment, and package declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Processed spice or aromatic product providing declared culinary flavour, aroma, colour, seasoning, brewing, or equivalent product function within CPC 23929 |
| How much | 1 kg net mass of saleable product |
| How well | Conforming to the declared botanical identity or recipe, physical form, moisture or solids specification, particle-size specification where ground, microbial-reduction status, and applicable food-safety and customer specifications |
| How long or cycle | One production lot delivered at the facility gate; storage duration and shelf-life basis declared |
| reference_flow_link | `spice_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Spice `4425d417-e7f4-4569-9985-3468985b4a1f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 23929 product identity; botanical species or full curry recipe; whole/broken/cut/ground/powder/paste form; incoming and final moisture or solids basis; treatment route; microbial-reduction method and status; package format and net content; production geography and reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every inventory result to 1 kg net saleable product at the declared moisture or solids basis; exclude package tare from product mass. |
| `moisture_basis` | received, dried, and final spice material | Mass fraction | kg water/kg wet material or % wet basis | Record measured moisture or solids basis for each relevant lot and do not compare wet- and dry-basis masses without an explicit conversion. |
| `energy_carrier_units` | electricity and each fuel | Energy or fuel mass/volume | kWh, MJ, kg, or m3 | Preserve the metered or invoiced unit and document the lower/higher heating-value convention used for any energy conversion. |
| `packaging_mass` | each packaging component | Mass | kg | Measure or calculate each polymer, paperboard, glass, steel, label, and other component separately per 1 kg net product. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | foreground processing | Include every directly controlled, route-applicable step from received plant material or purchased ingredient through saleable packed product, including sanitation and storage burdens during the declared lot. | `fao-who-cxc-42-1995`; `fao-herb-spice-quality-assurance-1995` |
| `boundary_purchased_inputs` | purchased inputs | Keep every purchased spice ingredient, formulation ingredient, packaging component, electricity supply, heat carrier, fuel, cleaning agent, refrigerant, and treatment service as an explicit atomic product input linked to an upstream dataset. | `eu-pef-2021-2279` |
| `boundary_direct_releases` | direct releases | Record measured or calculated direct emissions to air, water, and soil and each waste stream; do not substitute a fuel input for direct stack emissions or a wastewater volume for its measured pollutant inventory. | `eu-pef-2021-2279` |
| `boundary_no_hidden_cutoff` | completeness | Do not omit a known material, energy, waste, or emission solely because it is small; any study-specific cut-off must be quantified, justified, and disclosed outside this PCR. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received unprocessed plant material, partly processed spice, or purchased formulation ingredient, with supplier, origin, botanical identity, physical form, mass, and moisture or solids basis declared |
| starting_condition_role | Foreground processing-gate input; cultivation and previous processing remain upstream product systems |
| product_classification_scope | Complete CPC 3.0 subclass 23929 only; CPC 01961 and CPC 01962 are explicit exclusions |
| recursive_input_rule | A purchased input already classified in CPC 23929 remains an explicit product input with its own upstream dataset and declared form; it is not recreated by recursively applying this PCR inside the same foreground process |
| upstream_dataset_requirement | Link each purchased material, ingredient, packaging component, utility, fuel, cleaning agent, refrigerant, and treatment service to a geographically and technologically representative upstream dataset |
| disclosure | Declare all included and omitted route steps, raw-material state, formulation, drying technology and heat source, microbial-reduction route, allocation choice, package format, storage conditions, data year, geography, and unresolved identities |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_cleaning` | Receiving, inspection, sorting, and cleaning | required | Always; wet washing, soaking, cutting, and detector steps are route-specific sub-operations | foreground preparation | kg accepted cleaned material |
| `drying_conditioning` | Drying and moisture conditioning | conditional | Include when moisture is removed or added, including re-drying after washing | foreground processing | kg dried or conditioned material |
| `size_reduction` | Cutting, grinding, and sieving | conditional | Include for cut, broken, ground, or powdered market forms | foreground processing | kg size-reduced material |
| `blending_paste` | Blending and curry-paste preparation | conditional | Include for curry powders, spice blends, and curry pastes | foreground formulation | kg formulated intermediate |
| `paste_cooking_cooling` | Curry-paste cooking, pasteurization, and cooling | conditional | Include only when the declared curry-paste route actually applies heat and cooling | foreground heat treatment | kg heat-treated curry paste |
| `microbial_reduction` | Microbial-reduction treatment | conditional | Include when steam, irradiation, fumigation, or another validated treatment is applied | foreground treatment | kg treated material |
| `packaging` | Filling, sealing, labelling, and secondary packing | required | Always for the declared saleable product | foreground packing | kg net packed product |
| `storage` | On-site controlled storage | conditional | Include when energy, refrigeration, or material losses occur before the facility gate | foreground storage | kg released product and storage-days |
| `sanitation` | Equipment and room sanitation | required | Dry cleaning is expected; wet cleaning and disinfection are conditional and must be fully dried before restart | foreground support | lot-level sanitation burden allocated to processed mass |

### Process: Receiving, inspection, sorting, and cleaning (`receiving_cleaning`)

#### Inputs

##### Product flows

###### Saffron stigmas (`raw_saffron`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Saffron stigmas
- Flow property / unit: Mass / kg
- Amount rule: Supplier lot mass accepted into the saffron route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Turmeric rhizomes (`raw_turmeric`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Turmeric rhizomes
- Flow property / unit: Mass / kg
- Amount rule: Supplier lot mass accepted into the turmeric route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Dill herb (`raw_dill_herb`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Dill herb
- Flow property / unit: Mass / kg
- Amount rule: Supplier lot mass accepted into the dill-herb route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Dill seed (`raw_dill_seed`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Dill seed
- Flow property / unit: Mass / kg
- Amount rule: Supplier lot mass accepted into the dill-seed route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Thyme herb (`raw_thyme`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Thyme herb
- Flow property / unit: Mass / kg
- Amount rule: Supplier lot mass accepted into the thyme route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Bay leaves (`raw_bay_leaves`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Bay leaves
- Flow property / unit: Mass / kg
- Amount rule: Supplier lot mass accepted into the bay-leaf route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Guinea pepper seeds (`raw_guinea_pepper`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Xylopia aethiopica seeds
- Flow property / unit: Mass / kg
- Amount rule: Supplier lot mass accepted into the Guinea-pepper route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Angelica stems (`raw_angelica_stems`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Angelica stems
- Flow property / unit: Mass / kg
- Amount rule: Supplier lot mass accepted into the angelica-stem route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Hop cones (`raw_hop_cones`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Hop cones
- Flow property / unit: Mass / kg
- Amount rule: Supplier lot mass accepted into the hop-cone route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Cleaning electricity (`receiving_electricity`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for conveyors, aspirators, screens, magnets, detectors, washers, and cutters.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Washing water (`receiving_water`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water only when washing or soaking is performed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg washed material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`

#### Outputs

##### Product flows

###### Cleaned spice intermediate (`cleaned_spice_intermediate`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted output after sorting and cleaning, with product identity and moisture recorded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Removed mineral matter (`cleaning_stones_waste`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste stones and mineral matter
- Flow property / unit: Mass / kg
- Amount rule: Weighed stones, soil, and mineral fraction removed from the lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Removed plant debris (`cleaning_plant_debris`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste plant debris
- Flow property / unit: Mass / kg
- Amount rule: Weighed chaff, stalk fragments, leaves, and other removed plant matter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Rejected spice material (`cleaning_rejects`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste spice material
- Flow property / unit: Mass / kg
- Amount rule: Weighed mouldy, infested, contaminated, or off-specification material rejected from food use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Washing wastewater (`receiving_wastewater`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Wastewater from food washing
- Flow property / unit: Volume / m3
- Amount rule: Metered or water-balance wastewater sent to on-site or off-site treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg washed material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`

##### Elementary flows

###### Cleaning dust to air (`cleaning_dust_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Particulate matter, unspecified, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Stack or workplace-exhaust measurement, or calculation from captured and uncaptured dust records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted cleaned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

### Process: Drying and moisture conditioning (`drying_conditioning`)

#### Inputs

##### Product flows

###### Cleaned spice feed (`drying_spice_feed`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed cleaned material entering drying, with moisture measured.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Dryer electricity (`drying_electricity`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered fan, conveyor, heat-pump, control, and auxiliary electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Natural gas for drying (`drying_natural_gas`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural gas for direct or indirect dryer heat; zero only when demonstrably absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

###### Liquefied petroleum gas for drying (`drying_lpg`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoiced LPG consumed by the dryer; zero only when demonstrably absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

###### Diesel for drying (`drying_diesel`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Tank or purchase-record diesel consumed by the dryer; zero only when demonstrably absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

#### Outputs

##### Product flows

###### Dried spice intermediate (`dried_spice_intermediate`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed output at measured final moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Dryer fines (`drying_fines_waste`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste spice fines
- Flow property / unit: Mass / kg
- Amount rule: Weighed fines collected from trays, cyclones, and filters and sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

###### Fossil carbon dioxide from dryer combustion (`drying_co2_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Carbon dioxide, fossil, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from each recorded fuel using a declared combustion factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_records`

###### Methane from dryer combustion (`drying_ch4_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Methane, fossil, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from each recorded fuel and declared combustion factor or use stack measurement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_records`

###### Carbon monoxide from dryer combustion (`drying_co_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Carbon monoxide, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from each recorded fuel and a declared combustion factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Nitrous oxide from dryer combustion (`drying_n2o_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Dinitrogen monoxide, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from each recorded fuel and declared combustion factor or use stack measurement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_records`

###### Nitrogen oxides from dryer combustion (`drying_nox_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Nitrogen oxides, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from each recorded fuel and declared factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Sulfur dioxide from dryer combustion (`drying_so2_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Sulfur dioxide, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel-sulfur calculation for each recorded fuel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Dryer particulate matter to air (`drying_pm_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Particulate matter, unspecified, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from dust-control capture records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Volatile organic compounds from drying (`drying_voc_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Volatile organic compounds, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or route-specific calculation where combustion or product volatilization produces a direct release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

### Process: Cutting, grinding, and sieving (`size_reduction`)

#### Inputs

##### Product flows

###### Dried spice feed for size reduction (`milling_spice_feed`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed material entering cutter or mill.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg size-reduced output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Mill electricity (`milling_electricity`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered cutter, mill, sieve, extraction, and conveying electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg size-reduced output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Size-reduced spice intermediate (`milled_spice_intermediate`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed cut, broken, ground, or powdered output meeting the declared particle-size specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Off-specification milled spice (`milling_offspec_waste`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste ground spice
- Flow property / unit: Mass / kg
- Amount rule: Weighed material not reworked and sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg size-reduced output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

###### Milling dust to air (`milling_dust_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Particulate matter, unspecified, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Measurement or balance of captured versus uncaptured mill dust.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg size-reduced output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

### Process: Blending and curry-paste preparation (`blending_paste`)

#### Inputs

##### Product flows

###### Turmeric powder ingredient (`blend_turmeric_powder`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Turmeric powder
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulation input when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Cumin powder ingredient (`blend_cumin_powder`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Cumin powder
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulation input when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Coriander powder ingredient (`blend_coriander_powder`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Coriander powder
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulation input when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Chilli powder ingredient (`blend_chilli_powder`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Chilli powder
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulation input when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Fenugreek powder ingredient (`blend_fenugreek_powder`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Fenugreek powder
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulation input when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Sodium chloride ingredient (`blend_salt`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Weighed salt input when present in the declared formulation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Rapeseed oil ingredient (`paste_rapeseed_oil`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Rapeseed oil
- Flow property / unit: Mass / kg
- Amount rule: Weighed oil input when present in curry paste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg curry paste
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Water ingredient for curry paste (`paste_water`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Potable water
- Flow property / unit: Mass / kg
- Amount rule: Metered or weighed water incorporated into curry paste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg curry paste
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Acetic acid ingredient (`paste_acetic_acid`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Weighed acetic acid input when present in the declared curry-paste recipe.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg curry paste
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Blender electricity (`blending_electricity`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered grinder, blender, mixer, pump, and homogenizer electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg formulated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Curry powder or paste intermediate (`blended_product_intermediate`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulated output; every actual recipe ingredient must have its own atomic input row in the concrete data package.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

##### Waste flows

###### Off-specification blend or paste (`blending_offspec_waste`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste curry blend
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulated product not reworked and sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

### Process: Curry-paste cooking, pasteurization, and cooling (`paste_cooking_cooling`)

#### Inputs

##### Product flows

###### Formulated curry paste feed (`paste_heat_feed`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Curry paste
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulated paste entering a declared cooking or pasteurization step.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg heat-treated paste
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_records`

###### Paste heat-treatment electricity (`paste_heat_electricity`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered cooking, pasteurization, pumping, vacuum, and cooling electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg heat-treated paste
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Paste heat-treatment steam (`paste_heat_steam`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam supplied to cooking or pasteurization when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg heat-treated paste
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Paste cooling water (`paste_cooling_water`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water supplied to the paste-cooling system when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cooled paste
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`

#### Outputs

##### Product flows

###### Heat-treated curry paste (`heat_treated_curry_paste`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed paste released after declared time/temperature and cooling controls.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`

##### Waste flows

###### Paste heat-treatment condensate (`paste_heat_condensate`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Wastewater from food heat treatment
- Flow property / unit: Volume / m3
- Amount rule: Metered or steam/water-balance condensate and blowdown sent to the declared destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg heat-treated paste
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`

##### Elementary flows

### Process: Microbial-reduction treatment (`microbial_reduction`)

#### Inputs

##### Product flows

###### Spice feed for microbial reduction (`treatment_spice_feed`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed material entering the validated treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`

###### Treatment electricity (`treatment_electricity`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered treatment and auxiliary electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Saturated steam (`treatment_steam`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased or on-site steam delivered to the product-treatment system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg steam-treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Ionising radiation treatment service (`treatment_irradiation_service`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Food irradiation service
- Flow property / unit: Mass treated / kg
- Amount rule: Provider record for mass treated and declared absorbed-dose specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg irradiated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`

###### Ethylene oxide treatment gas (`treatment_ethylene_oxide`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Ethylene oxide
- Flow property / unit: Mass / kg
- Amount rule: Metered treatment-agent consumption only where legally permitted and actually used; otherwise not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg gas-treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`

#### Outputs

##### Product flows

###### Treated spice intermediate (`treated_spice_intermediate`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed output released after the validated treatment and verification test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`

##### Waste flows

###### Steam-treatment condensate (`treatment_condensate`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Wastewater from steam treatment
- Flow property / unit: Volume / m3
- Amount rule: Metered or steam-balance condensate sent to the declared destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg steam-treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`

##### Elementary flows

###### Ethylene oxide released to air (`treatment_ethylene_oxide_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Ethylene oxide, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or treatment-agent mass balance for the gas-treatment route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg gas-treated output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

### Process: Filling, sealing, labelling, and secondary packing (`packaging`)

#### Inputs

##### Product flows

###### Product feed to packing (`packaging_product_feed`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed unpacked product entering the filler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Packing electricity (`packaging_electricity`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered filling, sealing, labelling, and case-packing electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Low-density polyethylene film (`packaging_ldpe`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Component mass from packaging bill of materials and verified pack weight when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`

###### Woven polypropylene sack (`packaging_pp_sack`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Woven polypropylene sack
- Flow property / unit: Mass / kg
- Amount rule: Component mass from packaging bill of materials and verified sack weight when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`

###### Corrugated paperboard box (`packaging_corrugated_box`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Corrugated paperboard box
- Flow property / unit: Mass / kg
- Amount rule: Component mass from packaging bill of materials and verified box weight when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`

###### Glass jar (`packaging_glass_jar`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Glass packaging jar
- Flow property / unit: Mass / kg
- Amount rule: Component mass from packaging bill of materials and verified jar weight when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`

###### Steel closure (`packaging_steel_closure`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Steel packaging closure
- Flow property / unit: Mass / kg
- Amount rule: Component mass from packaging bill of materials and verified closure weight when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`

###### Paper label (`packaging_paper_label`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Component mass from packaging bill of materials and verified label weight when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`

###### Aluminium foil (`packaging_aluminium_foil`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Aluminium packaging foil
- Flow property / unit: Mass / kg
- Amount rule: Component mass from packaging bill of materials and verified foil weight when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`

###### Nitrogen for modified-atmosphere packing (`packaging_nitrogen`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Metered or cylinder-balance nitrogen used for gas-tight packing when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`

#### Outputs

##### Product flows

###### Saleable processed spice product (`spice_reference_product`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net saleable product, excluding package tare, at the declared moisture or solids basis.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Low-density polyethylene packaging scrap (`packaging_ldpe_scrap`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Weighed LDPE trim and rejected film sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Polypropylene packaging scrap (`packaging_pp_scrap`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste polypropylene sack material
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected polypropylene material sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Corrugated paperboard scrap (`packaging_paperboard_scrap`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: Weighed box scrap and rejected boxes sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Glass packaging scrap (`packaging_glass_scrap`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste packaging glass
- Flow property / unit: Mass / kg
- Amount rule: Weighed broken or rejected jars sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Steel closure scrap (`packaging_steel_scrap`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste steel packaging
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected closures sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Paper label scrap (`packaging_label_scrap`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste paper labels
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected labels and backing paper sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Aluminium foil scrap (`packaging_aluminium_scrap`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste aluminium packaging foil
- Flow property / unit: Mass / kg
- Amount rule: Weighed foil trim and rejected foil sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packed product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

### Process: On-site controlled storage (`storage`)

#### Inputs

##### Product flows

###### Packed spice entering storage (`storage_product_feed`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed packed product entering the declared storage period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg product released from storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

###### Storage electricity (`storage_electricity`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered lighting, ventilation, dehumidification, and refrigeration electricity over the declared storage period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg product and declared storage-days
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

###### R-134a refrigerant make-up (`storage_r134a_input`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: Maintenance-record make-up allocated to the refrigerated storage system when it contains R-134a.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refrigerated product and declared storage-days
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### R-404A refrigerant make-up (`storage_r404a_input`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass / kg
- Amount rule: Maintenance-record make-up allocated to the refrigerated storage system when it contains R-404A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refrigerated product and declared storage-days
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

#### Outputs

##### Product flows

###### Stored saleable product (`stored_spice_product`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Spice `4425d417-e7f4-4569-9985-3468985b4a1f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed product released at the facility gate after the declared storage period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

##### Waste flows

###### Damaged stored spice product (`storage_damaged_product`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste packaged spice
- Flow property / unit: Mass / kg
- Amount rule: Weighed product discarded after moisture damage, infestation, expiry, or package failure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg product released from storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

###### R-134a emitted to air (`storage_r134a_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: 1,1,1,2-Tetrafluoroethane, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance for equipment containing R-134a.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refrigerated product and declared storage-days
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### R-404A emitted to air (`storage_r404a_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Refrigerant R-404A, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance for equipment containing R-404A.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refrigerated product and declared storage-days
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

### Process: Equipment and room sanitation (`sanitation`)

#### Inputs

##### Product flows

###### Sanitation electricity (`sanitation_electricity`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered vacuum, wash, drying, and sanitation-equipment electricity allocated to the lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`

###### Wet-cleaning water (`sanitation_water`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Metered water only when wet cleaning is necessary; dry cleaning is preferred for dry-product areas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`

###### Sodium hydroxide cleaner (`sanitation_sodium_hydroxide`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Purchase or dosing record for sodium hydroxide used in wet cleaning when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`

###### Ethanol disinfectant (`sanitation_ethanol`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Ethanol
- Flow property / unit: Mass / kg
- Amount rule: Purchase or dosing record for alcohol-based spot disinfection when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`

###### Paper cleaning wipes (`sanitation_paper_wipes`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Paper cleaning wipes
- Flow property / unit: Mass / kg
- Amount rule: Weighed or purchase-record wipes consumed by the lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`

#### Outputs

##### Product flows

##### Waste flows

###### Dry-cleaning spice residue (`sanitation_dry_residue`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste spice dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed vacuumed or swept residue sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Sanitation wastewater (`sanitation_wastewater`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Wastewater from equipment cleaning
- Flow property / unit: Volume / m3
- Amount rule: Metered or water-balance wastewater sent to the declared treatment destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`

###### Used paper cleaning wipes (`sanitation_used_wipes`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Waste paper cleaning wipes
- Flow property / unit: Mass / kg
- Amount rule: Weighed used wipes sent to the declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

###### Ethanol emitted to air (`sanitation_ethanol_air`)

This atomic exchange is recorded separately for the declared route; its amount is obtained by the rule below.

- Selected flow: Ethanol, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Solvent mass balance for alcohol-based sanitation, net of recovered or wastewater fractions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | separable products, routes, and lots | First subdivide processes and use product-, route-, lot-, and meter-specific records so that allocation is avoided. | `eu-pef-2021-2279` |
| `allocation_rework` | rework returned to the same product route | Return reworked material to the same route by mass balance and do not count it as both waste output and virgin input. | `eu-pef-2021-2279` |
| `allocation_recovered_material` | residues sold or used outside the product system | Treat a residue as a co-product only when it has a documented use and market; disclose the decision and apply a physical causal relation where demonstrable, otherwise mass allocation with sensitivity to economic allocation. | `eu-pef-2021-2279` |
| `allocation_shared_support` | shared sanitation, storage, and utilities | Allocate shared support burdens by measured causal drivers such as equipment time, storage-days, metered energy, water, or cleaned surface; use processed mass only when no better causal driver exists and disclose the choice. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receiving_cleaning`; `drying_conditioning`; `size_reduction`; `packaging` | material inputs, intermediates, and saleable output | weighbridge, scale, moisture, and batch record | lot_id; product_identity; gross_mass; tare_mass; net_mass; moisture_or_solids; timestamp | calibrated scales and representative moisture test | kg; % wet basis or % solids | every lot and process hand-off | representative 12 months or declared campaign | all included lines and sites | sum net masses by product route and reconcile inputs, outputs, moisture change, and stocks | calibration certificates; batch sheets; moisture laboratory records |
| `cp_recipe_records` | `blending_paste` | every formulation ingredient and formulated output | approved recipe and batch dosing record | batch_id; ingredient_identity; supplier_lot; target_mass; actual_mass; output_mass; rework_mass | calibrated dosing and batch reconciliation | kg | every batch | representative 12 months or declared campaign | all included mixers and sites | sum actual ingredient mass and output by recipe; no ingredient may remain under a collective label | approved recipe; scale calibration; signed batch record |
| `cp_energy_records` | all applicable processes | electricity and steam | meter, invoice, and operating log | meter_id; opening; closing; unit; process; lot; runtime; steam_mass_or_energy | submeter preferred; otherwise documented causal allocation | kWh; MJ; kg steam | continuous or every batch | representative 12 months or declared campaign | all included equipment and sites | subtract non-production use and allocate by measured driver | meter calibration; invoices; operating logs |
| `cp_fuel_records` | `drying_conditioning` | each fuel | tank, mass, volume, invoice, and heating-value record | fuel_identity; quantity; unit; LHV_or_HHV; stock_change; process; lot | meter or stock balance for each fuel separately | kg; m3; MJ | every delivery and reporting period | representative 12 months or declared campaign | all included combustion equipment | opening stock + purchases - closing stock, normalized to dried output | invoices; tank calibration; fuel specification |
| `cp_water_records` | `receiving_cleaning`; `microbial_reduction` | process water and wastewater | meter and water balance | meter_id; input_volume; condensate; recirculation; wastewater_volume; lot | submeter or documented balance | m3 | every batch or daily | representative 12 months or declared campaign | all included wet operations | net make-up and discharge normalized to route output | meter calibration; discharge log; balance check |
| `cp_packaging_bom` | `packaging` | each packaging component | bill of materials and component weighing | component_id; material; unit_mass; units_used; rejects; product_net_mass | supplier specification verified by representative weighing | kg | each packaging specification and change | current package specification | every declared package format | component unit mass x units consumed, reconciled with scrap | supplier specification; scale record; approved packaging BOM |
| `cp_waste_records` | all applicable processes | each waste stream | container weighing and transfer record | waste_identity; mass_or_volume; source_process; destination; treatment; lot; date | weigh each segregated stream or use verified container mass | kg; m3 | every removal | representative 12 months or declared campaign | all included processes and sites | sum by atomic waste identity and destination; subtract documented rework | waste tickets; transporter and treatment records |
| `cp_emission_records` | `receiving_cleaning`; `drying_conditioning`; `size_reduction`; `microbial_reduction`; `sanitation` | each direct air or water emission | measurement or activity-factor calculation | pollutant_identity; measurement; fuel_or_agent_activity; factor; control_efficiency; method; period | stack/effluent measurement preferred; otherwise declared factor calculation | kg | per permit, campaign, or reporting period | representative 12 months or declared campaign | every direct release point | calculate each pollutant separately and normalize to route output | laboratory report; factor source; control log; calculation sheet |
| `cp_treatment_records` | `microbial_reduction` | treatment inputs and treated output | treatment batch and provider record | treatment_type; input_mass; output_mass; electricity; steam; agent; absorbed_dose_or_process_parameter; validation_result | validated treatment record and release test | kg; kWh; MJ; route-specific parameter | every treated lot | representative 12 months or declared campaign | all on-site and outsourced treatment | aggregate by treatment route only after identity and parameters match | validation study; provider certificate; release result |
| `cp_storage_records` | `storage` | storage energy, time, throughput, and losses | inventory, meter, and environmental log | product_mass_in; product_mass_out; storage_days; temperature; humidity; electricity; loss_reason | inventory ledger linked to storage-zone meter | kg; day; kWh | daily or every lot movement | representative 12 months or declared campaign | every included warehouse or cold room | mass-weight energy by storage-days and retain loss cause | meter record; inventory ledger; temperature/humidity log |
| `cp_refrigerant_records` | `storage` | each refrigerant input and emission | maintenance and equipment record | equipment_id; refrigerant_identity; initial_charge; make_up; recovery; final_charge; service_date | refrigerant mass balance by chemical identity | kg | every service and annually | representative 12 months | every included refrigeration unit | initial + make-up - recovery - final; allocate by refrigerated storage-days | service invoice; technician log; charge plate |
| `cp_sanitation_records` | `sanitation` | cleaning electricity, water, chemical, and wipe inputs | sanitation log, meter, and dosing record | area_or_equipment; method; electricity; water; chemical_identity; dose; wipe_mass; drying_completion; lot | record each cleaning event and chemical separately | kWh; m3; kg | every cleaning event | representative 12 months or declared campaign | all product-contact and processing areas | allocate by documented causal driver and verify dry restart | sanitation schedule; dosing record; inspection release |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = route-attributed amount / net saleable product mass at declared moisture or solids basis | route-attributed amount; net saleable product mass | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_drying_mass_balance` | drying material balance | reconcile wet input mass, dry output mass, removed water, fines, and stock change using measured moisture; investigate any unexplained residual | input/output mass and moisture; fines; stock change | reconciled dry-matter and water balance | `fao-who-cxc-42-1995` |
| `calc_recipe_balance` | curry powder and paste | sum every separately identified ingredient plus rework and reconcile with formulated output, waste, and stock change | ingredient masses; rework; output; waste; stock change | recipe mass-balance residual | `eu-pef-2021-2279` |
| `calc_packaging_mass` | each packaging component | packaging mass = verified unit component mass x units consumed / net product mass | component unit mass; units consumed; net product mass | kg component/kg net product | `eu-pef-2021-2279` |
| `calc_refrigerant_release` | each refrigerant | release = initial charge + make-up - recovered amount - final charge, never combining chemicals | charge and service records by refrigerant | kg refrigerant emitted | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and ingredients | Botanical species or complete recipe, form, treatment status, and CPC 23929 eligibility are traceable by lot; CPC 01961 and 01962 items are rejected from this PCR. | supplier specification; approved recipe; incoming and release records |
| `dq_temporal` | foreground records | Use a representative 12-month period unless a shorter campaign is justified; disclose seasonality, downtime, and abnormal lots. | dated meter, batch, invoice, and production records |
| `dq_technology_geography` | utilities and upstream links | Match electricity, heat, fuels, ingredients, packaging, treatment, and waste datasets to the actual technology, geography, and reference year. | supplier dataset metadata and documented representativeness review |
| `dq_completeness` | all processes | Reconcile product mass and document every known material, energy, packaging, refrigerant, waste, wastewater, and direct-emission exchange as an atomic row. | signed completeness and mass-balance review |
| `dq_measurement` | meters and tests | Retain calibration, sampling, detection-limit, moisture-method, and uncertainty evidence for material, energy, water, and emissions data. | calibration certificates; laboratory methods; QA records |
| `dq_range_gate` | all amount ranges | No amount range is accepted from a single paper, a single case, or a point value; this PCR currently retains no amount ranges, so concrete data packages must rely on foreground records and calculations. | bilingual PCR range audit and generated projection |
| `dq_conditional_pollutants` | direct-fired or smoke drying and direct wastewater discharge | When these routes exist, test or calculate each applicable PAH, formaldehyde, dioxin, heavy-metal, COD/TOC, suspended-solid, nitrogen, phosphorus, and chloride release separately; do not infer presence for routes where it is absent. | route declaration; stack/effluent tests; calculation records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | product identity | Confirm the product is within the full CPC 23929 inclusion list and is not a CPC 01961 live plant/propagation item or CPC 01962 cut flower/flower article. | `un-cpc-3-0-explanatory-notes` |
| `validate_reference` | reference flow | Confirm exactly 1 kg net saleable product, Mass property, kg unit, and all required identity, form, moisture/solids, treatment, package, geography, and year qualifiers. | `un-cpc-3-0-explanatory-notes` |
| `validate_route` | process coverage | Confirm every route-applicable step is included and every omitted conditional process has a documented not-applicable reason. | `fao-who-cxc-42-1995`; `fao-herb-spice-quality-assurance-1995` |
| `validate_atomic_inventory` | inventory exchanges | Reject collective or selector rows; electricity, steam, each fuel, each ingredient, each cleaning agent, each packaging component, each refrigerant, each waste, wastewater, and each pollutant must be separate. | `eu-pef-2021-2279` |
| `validate_mass_balance` | material and recipe balances | Reconcile received material or ingredients, intermediates, moisture change, rework, saleable output, waste, and stock change; investigate and disclose residuals. | `eu-pef-2021-2279` |
| `validate_hygiene` | product safety and treatment | Verify safe moisture or solids, contamination controls, treatment validation where applied, dry-environment sanitation, packaging protection, and lot traceability. | `fao-who-cxc-42-1995` |
| `validate_direct_drying_pollutants` | direct-fired or smoke drying | If combustion gas or smoke can contact product, require route-specific monitoring or calculation for PAH and other applicable direct-drying contaminants and disclose controls; otherwise record the route as not applicable. | `fao-who-cxc-68-2009` |
| `validate_mycotoxin_control` | dried spices and aromatics | Verify rapid drying, safe product-specific moisture or water activity, rejection controls, and disposal of contaminated material; do not apply a dried-product water-activity rule to curry paste. | `fao-who-cxc-78-2017` |
| `validate_range_evidence` | amount ranges | Reject any single-source, single-case, copied point, lower-equals-upper, or falsely precise range; this version must project zero amount ranges. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-processing dataset normalized to 1 kg net processed spice or aromatic product at the facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | LCA process and lifecycle-model construction for the declared CPC 23929 product, form, formulation, treatment, packaging, geography, and reference period |
| excluded_use | Unqualified generic spice proxy; live plants or propagation material; cut flowers or flower articles; a different spice subclass; consumer use; medicinal or essential-oil function; undisclosed recipe or treatment route |
| required_metadata | CPC 23929 identity; botanical species or full recipe; product form; incoming/final moisture or solids; route and equipment; treatment status; packaging BOM; storage; geography; reference year; allocation; upstream dataset links |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; sampling and moisture methods; mass-balance residuals; allocation drivers; supplier-data representativeness; conditional-process exclusions; unresolved UUIDs; data gaps and uncertainty |
| update_trigger | Recipe, botanical source, moisture specification, treatment, dryer or mill technology, fuel, electricity supply, packaging, refrigerant, storage regime, site, geography, or data period changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-explanatory-notes` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 23929, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Complete inclusion scope and classification exclusions |
| `fao-who-cxc-42-1995` | standard | Codex Alimentarius, Code of Hygienic Practice for Spices and Dried Aromatic Herbs, CXC 42-1995, revised 2014. https://www.fao.org/input/download/standards/27/CXP_042e_2014.pdf | Broad product definition; cleaning, drying, grinding, microbial reduction, packaging, sanitation, storage, traceability, and process-control rules |
| `fao-herb-spice-quality-assurance-1995` | official_guidance | Fellows, P.; Axtell, B.; Dillon, M., Quality Assurance for Small-scale Rural Food Industries, FAO Agricultural Services Bulletin 117, section 2.4 Herb and Spice Products, 1995. https://www.fao.org/4/V5380E/V5380E09.htm | Receiving checks, moisture measurement, washing conditions, cleaning, drying, grinding, sieving, packaging, storage, dust, and plant-record requirements |
| `fao-who-cxc-78-2017` | standard | Codex Alimentarius, Code of Practice for the Prevention and Reduction of Mycotoxins in Spices, CXC 78-2017. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B78-2017%252FCXC_078e.pdf | Conditional washing, rapid drying, dried-product water-activity control, rejection, and contaminated-material disposal; no numeric amount range used |
| `fao-who-cxc-68-2009` | standard | Codex Alimentarius, Code of Practice for the Reduction of Contamination of Food with Polycyclic Aromatic Hydrocarbons from Smoking and Direct Drying Processes, CXC 68-2009. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B68-2009%252FCXC_068e.pdf | Conditional direct-fired and smoke-drying contamination controls and pollutant review |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, 2021, corrected 2022. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Functional unit, reference flow, company-specific inventory, completeness, atomic input/output coverage, allocation, calculation, data quality, and validation principles |
| `bolliger-spice-footprint-2026` | literature | Bolliger, C.; Itten, R.; Stucki, M. From Farm to Flavor: Carbon and Biodiversity Footprint of the Global Spice Market. Environmental Science & Technology 60 (2026) 11421-11433. https://doi.org/10.1021/acs.est.5c04846; full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC13104020/ | Peer-reviewed full-text context for 1 kg spice reporting, cultivation/processing/retail separation, drying, grinding, steam treatment, and packaging representation; no quantity range copied |
| `llano-et-al-2022-turmeric-drying` | literature | Llano, S. M.; Gomez, J. A.; Duarte-Correa, Y. Effect of Drying Methods and Processing Conditions on the Quality of Curcuma longa Powder. Processes 10 (2022) 702. https://doi.org/10.3390/pr10040702; OpenAlex W4226152751; full text: https://www.mdpi.com/2227-9717/10/4/702 | Turmeric-only original full-text evidence for optional washing, slicing, drying, grinding, and sealed packing steps; not generalized into a quantity range or mandatory whole-category route |
| `dharmasena-et-al-2006-spice-dust` | literature | Dharmasena, D. A. N.; et al. Dust filtration during spice grinding. Journal of Agricultural Sciences. https://doi.org/10.4038/jas.v1i2.8098; OpenAlex W2396079490; original PDF: https://storage.googleapis.com/jnl-sljo-j-jassl-files/journals/1/articles/8098/submission/proof/8098-1-28547-1-10-20160426.pdf | Original full-text evidence that spice grinding creates airborne dust and requires collection/control; case values are not copied into ranges |
