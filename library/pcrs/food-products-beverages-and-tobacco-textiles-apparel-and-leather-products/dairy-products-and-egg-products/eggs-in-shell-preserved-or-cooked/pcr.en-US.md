---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.eggs-in-shell-preserved-or-cooked
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Eggs, in shell, preserved or cooked

## 1. Scope and Applicability

This PCR applies to bird eggs that retain their shell and are preserved or cooked before leaving the processing facility. Covered routes include validated in-shell pasteurization, cooking in shell, food-grade oil coating, and alkaline or sodium-silicate preservation when the finished egg remains in shell. The foreground boundary begins with receipt of untreated shell eggs and ends with packaged product at the processing-facility gate after any required cooling and storage.

Fresh untreated eggs, hatching eggs, eggs broken for liquid or dried egg products, peeled cooked eggs, formulated egg foods, retail, consumer preparation, and packaging end of life are excluded. The bird species, treatment route, treatment validation basis, shell condition, package format, and storage condition must be declared. A data package may model more than one treatment route only as separately metered and reported product variants.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.eggs-in-shell-preserved-or-cooked |
| classification_refs | CPC 3.0: 22300, Eggs, in shell, preserved or cooked |
| covered_products | Bird eggs retaining the shell after in-shell cooking, validated in-shell pasteurization, food-grade oil coating, or declared alkaline/sodium-silicate preservation |
| excluded_products | Fresh untreated eggs; hatching eggs; eggs not in shell; peeled cooked eggs; liquid, frozen, concentrated, or dried egg products; foods formulated from egg contents |
| representative_product | Marketable preserved or cooked chicken eggs retaining an intact shell |
| production_route | Receipt and grading; dry cleaning or controlled washing/disinfection when applicable; one declared preservation, pasteurization, or cooking route; cooling when required; packaging and storage |
| market_state | Packaged at the processing-facility gate under the declared ambient, chilled, or other validated storage condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of preserved or cooked edible bird eggs retaining their shell |
| How much | 1 kg net mass of marketable eggs in shell, excluding transport and sales packaging |
| How well | Conforming to the declared species, treatment route and validated safety target, with declared shell integrity, grade, package format, and storage condition |
| How long or cycle | One processing lot delivered at the processing-facility gate; shelf life is declared but no use duration is credited |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Eggs, in shell, preserved or cooked |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | bird species; egg grade or size class; treatment route; treatment time-temperature or other validated process specification; pathogen or preservation target; shell retention and integrity criterion; package format; storage temperature and humidity condition; declared shelf life; facility-gate geography; net product mass basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg net mass of conforming eggs in shell at the facility gate. Exclude package mass and report it in its own inventory rows. |
| `count_to_mass` | Records available only as egg counts or dozens | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using measured lot-specific net egg mass. Do not use a generic egg mass when a lot mass is available. |
| `utility_units` | Electricity, steam, purchased heat, and fuels | Energy | kWh or MJ | Preserve the metered unit, document the lower or higher heating-value convention for fuels, and convert consistently before normalization. |
| `water_mass_volume` | Process and cooling water | Mass or volume | kg or m3 | Use measured mass or volume. If converted, record the density and temperature assumption used. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_steps` | Foreground processing | Include receiving and grading, applicable shell cleaning, the declared cooking/pasteurization/preservation treatment, required cooling, packaging, and storage. Record excluded route steps as not applicable with the reason. | `codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization` |
| `boundary_upstream_eggs` | Untreated shell-egg input | Link a supplier-specific or representative upstream dataset for untreated eggs in shell; do not reproduce farm production inside this foreground processing dataset. | `unsd-cpc-22300` |
| `boundary_downstream` | Facility-gate output | Exclude retail, consumer cooking, food-service use, and packaging end of life unless the study explicitly expands the boundary and reports those additions separately. | `unsd-cpc-22300` |
| `boundary_route_separation` | Multiple treatment routes | Subdivide separately metered cooking, pasteurization, oil-coating, and alkaline/silicate-preservation routes. Do not average routes unless production shares and route-specific inventories are retained. | `iso-14044-2006` |
| `boundary_waste_emissions` | Foreground losses and releases | Include broken egg, loose eggshell, wastewater, sludge, packaging scrap, refrigerant loss, and every measured direct combustion or treatment emission as separate exchanges. | `iso-14044-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated edible eggs in shell received at the processing facility, with supplier, species, laying date or age information where available, lot mass, shell condition, and incoming storage condition declared |
| starting_condition_role | Upstream product input to foreground preservation or cooking |
| product_classification_scope | Eggs that remain in shell and become preserved or cooked product; fresh eggs and eggs not in shell are outside this PCR |
| recursive_input_rule | If preserved or cooked eggs in shell are used as an input to another in-scope step, record the input once at receipt and link its upstream dataset; do not recursively recreate its earlier preservation or cooking inventory |
| upstream_dataset_requirement | Use supplier-specific untreated-shell-egg data when available; otherwise use a geographically and technologically representative upstream dataset and disclose the substitution |
| disclosure | Declare species, source geography, incoming grade/condition, treatment route, route share, treatment validation basis, cleaning route, package format, storage condition, losses, and any excluded or shared operation |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `egg_receiving_grading` | Shell-egg receiving, candling, sorting, and grading | required | Always included | Foreground receipt and quality segregation | kg untreated eggs received and kg accepted eggs |
| `shell_cleaning` | Dry cleaning or controlled washing, disinfection, drying, and optional oiling | conditional | Include the actual permitted cleaning route; explicitly record no cleaning when prohibited or unnecessary | Foreground shell preparation | kg eggs entering cleaning |
| `in_shell_treatment` | In-shell cooking, pasteurization, or preservation | required | Include exactly the declared product route; subdivide simultaneous routes | Foreground product transformation | kg treated marketable eggs |
| `post_treatment_cooling` | Cooling after heat treatment | conditional | Include when treatment or product specification requires cooling | Foreground conditioning | kg hot treated eggs entering cooling |
| `packing_and_storage` | Packaging and pre-dispatch storage | required | Always included; refrigeration inputs apply only when installed and used | Foreground packing and storage | kg final marketable eggs in shell |

### Process: Shell-egg receiving, candling, sorting, and grading (`egg_receiving_grading`)

#### Inputs

##### Product flows

###### Untreated shell eggs received (`raw_shell_eggs_receipt`)

Record the net mass of edible untreated eggs in shell crossing the facility boundary.

- Selected flow: Untreated edible bird eggs in shell
- Flow property / unit: Mass / kg
- Amount rule: Measured lot mass received, excluding inbound packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final marketable eggs in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_grading_records`
- Sources: `codex-cxc-15-1976`

###### Electricity for receiving and grading (`receiving_electricity`)

Record metered electricity used by conveyors, candling, crack detection, grading, and associated controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final marketable eggs in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted graded shell eggs (`graded_shell_eggs`)

Record the mass accepted for cleaning or direct treatment after sorting and grading.

- Selected flow: Accepted graded bird eggs in shell
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receiving process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_grading_records`
- Sources: `codex-cxc-15-1976`

##### Waste flows

###### Broken or leaking egg waste from grading (`broken_egg_waste_grading`)

Record rejected eggs whose contents remain with the broken or leaking egg waste stream.

- Selected flow: Broken or leaking bird egg waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass sent to the declared waste treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receiving process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_grading_records`
- Sources: `codex-cxc-15-1976`

###### Loose eggshell waste from grading (`eggshell_waste_grading`)

Record shell fragments collected separately from broken egg contents.

- Selected flow: Bird eggshell waste
- Flow property / unit: Mass / kg
- Amount rule: Measured separately collected shell-fragment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receiving process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_grading_records`
- Sources:

##### Elementary flows

### Process: Dry cleaning or controlled washing, disinfection, drying, and optional oiling (`shell_cleaning`)

#### Inputs

##### Product flows

###### Graded shell eggs entering cleaning (`graded_eggs_cleaning`)

Record accepted eggs entering the declared dry or wet cleaning route.

- Selected flow: Accepted graded bird eggs in shell
- Flow property / unit: Mass / kg
- Amount rule: Measured mass entering cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_material_records`
- Sources: `codex-cxc-15-1976`

###### Water for egg washing and rinsing (`cleaning_water`)

Include only for a permitted wet-cleaning route; record make-up and rinse water crossing the process boundary.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered wash and rinse water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_material_records`
- Sources: `codex-cxc-15-1976`

###### Electricity for cleaning, brushing, pumping, and drying (`cleaning_electricity`)

Record electricity used by dry-cleaning equipment or wet-washing, pumping, sanitising, and drying equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_utility_records`
- Sources:

###### Steam for wash-water heating (`cleaning_steam`)

Include only when steam crosses the cleaning boundary for water heating.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered or calculated delivered steam energy assigned to cleaning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_utility_records`
- Sources:

###### Sodium hydroxide cleaning agent (`sodium_hydroxide_detergent`)

Include only when the facility formulation uses sodium hydroxide as the egg-compatible alkaline detergent.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Measured active sodium hydroxide charged to wash solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_material_records`
- Sources: `codex-cxc-15-1976`

###### Sodium hypochlorite sanitiser (`sodium_hypochlorite_sanitizer`)

Include only when sodium hypochlorite is the approved shell sanitiser used by the facility.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Measured active sodium hypochlorite charged to sanitising solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_material_records`
- Sources: `codex-cxc-15-1976`

###### Food-grade mineral oil after cleaning (`food_grade_mineral_oil_cleaning`)

Include when a food-grade mineral-oil coating is applied after dry cleaning or washing.

- Selected flow: Food-grade mineral oil
- Flow property / unit: Mass / kg
- Amount rule: Measured oil make-up applied to eggs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_material_records`
- Sources: `codex-cxc-15-1976`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned shell eggs (`cleaned_shell_eggs`)

Record eggs leaving cleaning after dry cleaning or washing, sanitising, drying, and optional oiling.

- Selected flow: Cleaned bird eggs in shell
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass leaving cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_output_records`
- Sources: `codex-cxc-15-1976`

##### Waste flows

###### Egg-wash wastewater (`cleaning_wastewater`)

Record wastewater transferred to onsite or offsite treatment; do not combine it with sludge.

- Selected flow: Egg-wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater leaving the cleaning process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_output_records`
- Sources:

###### Egg-wash sludge (`cleaning_sludge`)

Record settled or filtered solids removed from egg-wash water as a separate waste stream.

- Selected flow: Egg-wash sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass, with dry-matter fraction disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_output_records`
- Sources:

###### Broken egg waste from cleaning (`broken_egg_waste_cleaning`)

Record eggs broken during cleaning whose contents remain in the rejected waste stream.

- Selected flow: Broken bird egg waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_output_records`
- Sources: `codex-cxc-15-1976`

###### Loose eggshell waste from cleaning (`eggshell_waste_cleaning`)

Record separately collected shell fragments from cleaning breakage.

- Selected flow: Bird eggshell waste
- Flow property / unit: Mass / kg
- Amount rule: Measured shell-fragment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_output_records`
- Sources:

##### Elementary flows

### Process: In-shell cooking, pasteurization, or preservation (`in_shell_treatment`)

#### Inputs

##### Product flows

###### Shell eggs entering treatment (`cleaned_eggs_treatment`)

Record eggs entering the declared in-shell cooking, pasteurization, or preservation route.

- Selected flow: Prepared bird eggs in shell
- Flow property / unit: Mass / kg
- Amount rule: Measured mass entering the treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_recipe_records`
- Sources: `codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization`

###### Water for in-shell thermal treatment (`treatment_water`)

Include water charged to a hot-water cooking or moist-heat pasteurization system.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water charged to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_utility_records`
- Sources: `shenga-et-al-2010-in-shell-pasteurization`

###### Electricity for treatment equipment (`treatment_electricity`)

Record electricity used by heaters, microwave or radio-frequency equipment, pumps, conveyors, mixers, and controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_utility_records`
- Sources: `chiozzi-et-al-2022-thermal-nonthermal`

###### Steam for thermal treatment (`treatment_steam`)

Include delivered steam only when it crosses the treatment boundary.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered or calculated delivered steam energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_utility_records`
- Sources: `chiozzi-et-al-2022-thermal-nonthermal`

###### Natural gas for onsite treatment heat (`treatment_natural_gas`)

Include natural gas combusted onsite for treatment heat; do not combine it with other fuels.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas consumption on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_utility_records`
- Sources: `chiozzi-et-al-2022-thermal-nonthermal`

###### Liquefied petroleum gas for onsite treatment heat (`treatment_lpg`)

Include liquefied petroleum gas combusted onsite; do not combine it with natural gas.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered LPG consumption on the declared heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_utility_records`
- Sources:

###### Sodium silicate for shell preservation (`sodium_silicate_preservative`)

Include only for a declared sodium-silicate preservation bath or coating route.

- Selected flow: Sodium silicate
- Flow property / unit: Mass / kg
- Amount rule: Measured sodium silicate charged, expressed on the declared commercial-product or active-mass basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_recipe_records`
- Sources:

###### Calcium hydroxide for alkaline preservation (`calcium_hydroxide_preservative`)

Include only when calcium hydroxide is charged to the declared alkaline preservation recipe.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Measured calcium hydroxide charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_recipe_records`
- Sources:

###### Sodium chloride for preservation (`sodium_chloride_preservative`)

Include only when sodium chloride is charged to the declared preservation recipe.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Measured sodium chloride charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_recipe_records`
- Sources:

###### Food-grade mineral oil for preservation (`food_grade_mineral_oil_preservative`)

Include only when oil coating is the declared preservation treatment rather than a cleaning after-step.

- Selected flow: Food-grade mineral oil
- Flow property / unit: Mass / kg
- Amount rule: Measured mineral-oil make-up applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_recipe_records`
- Sources: `codex-cxc-15-1976`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated eggs retaining the shell (`treated_shell_eggs`)

Record conforming eggs leaving the declared treatment with their shell retained.

- Selected flow: Treated bird eggs in shell
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming treated mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_output_records`
- Sources: `codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization`

##### Waste flows

###### Treatment wastewater (`treatment_wastewater`)

Record spent thermal-treatment water or aqueous preservation liquor transferred for treatment.

- Selected flow: In-shell egg treatment wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater leaving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_output_records`
- Sources:

###### Treatment sludge (`treatment_sludge`)

Record settled solids from a preservation bath or treatment-water system separately from wastewater.

- Selected flow: In-shell egg treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass, with dry-matter fraction disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_output_records`
- Sources:

###### Broken egg waste from treatment (`broken_egg_waste_treatment`)

Record nonconforming eggs broken during treatment whose contents remain with the waste.

- Selected flow: Broken treated bird egg waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_output_records`
- Sources:

###### Loose eggshell waste from treatment (`eggshell_waste_treatment`)

Record separately collected shell fragments from treatment breakage.

- Selected flow: Bird eggshell waste
- Flow property / unit: Mass / kg
- Amount rule: Measured shell-fragment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_output_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from onsite fuel combustion (`fossil_carbon_dioxide_air`)

Include only for onsite natural-gas or LPG combustion and exclude upstream fuel-production emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack release or calculated from metered fuel and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_emissions`
- Sources:

###### Carbon monoxide from onsite fuel combustion (`carbon_monoxide_air`)

Include measured or factor-calculated carbon monoxide as its own direct emission.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack release or calculated from metered fuel and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_emissions`
- Sources:

###### Nitrogen oxides from onsite fuel combustion (`nitrogen_oxides_air`)

Include measured or factor-calculated nitrogen oxides as its own direct emission.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack release or calculated from metered fuel and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_emissions`
- Sources:

###### Fossil methane from onsite fuel combustion (`fossil_methane_air`)

Include measured or factor-calculated unburned fossil methane as its own direct emission.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack release or calculated from metered fuel and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_emissions`
- Sources:

###### Fine particulate matter from onsite fuel combustion (`pm25_air`)

Include measured or factor-calculated particulate matter at or below 2.5 micrometres as its own direct emission.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack release or calculated from metered fuel and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_emissions`
- Sources:

### Process: Cooling after heat treatment (`post_treatment_cooling`)

#### Inputs

##### Product flows

###### Hot treated eggs entering cooling (`hot_treated_shell_eggs`)

Record heat-treated eggs entering the cooling operation.

- Selected flow: Hot treated bird eggs in shell
- Flow property / unit: Mass / kg
- Amount rule: Measured mass entering cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_records`
- Sources:

###### Cooling water (`cooling_water`)

Include water crossing the boundary in immersion, spray, or once-through cooling.

- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water supplied to cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_records`
- Sources:

###### Electricity for cooling (`cooling_electricity`)

Record electricity used by chillers, pumps, fans, conveyors, and controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_records`
- Sources:

###### Ammonia refrigerant make-up for cooling (`ammonia_refrigerant_cooling`)

Include only when the cooling system uses R-717 ammonia.

- Selected flow: Ammonia, anhydrous
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance make-up assigned to cooling equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_refrigerant_balance`
- Sources:

###### HFC-134a refrigerant make-up for cooling (`hfc134a_refrigerant_cooling`)

Include only when the cooling system uses HFC-134a.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance make-up assigned to cooling equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_refrigerant_balance`
- Sources:

###### R-404A refrigerant make-up for cooling (`r404a_refrigerant_cooling`)

Include only when the cooling system uses the R-404A refrigerant blend.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance make-up assigned to cooling equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_refrigerant_balance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooled treated eggs (`cooled_shell_eggs`)

Record conforming treated eggs leaving cooling at the declared temperature.

- Selected flow: Cooled treated bird eggs in shell
- Flow property / unit: Mass / kg
- Amount rule: Measured mass leaving cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_records`
- Sources: `codex-cxc-15-1976`

##### Waste flows

###### Cooling wastewater (`cooling_wastewater`)

Record cooling water discharged to onsite or offsite treatment.

- Selected flow: Egg-cooling wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater leaving cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_records`
- Sources:

##### Elementary flows

###### Ammonia refrigerant released during cooling (`ammonia_air_cooling`)

Record only R-717 leakage assigned to cooling equipment.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_refrigerant_balance`
- Sources:

###### HFC-134a released during cooling (`hfc134a_air_cooling`)

Record only HFC-134a leakage assigned to cooling equipment.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_refrigerant_balance`
- Sources:

###### R-404A released during cooling (`r404a_air_cooling`)

Record only R-404A blend leakage assigned to cooling equipment.

- Selected flow: Refrigerant R-404A, to air
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per cooling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_refrigerant_balance`
- Sources:

### Process: Packaging and pre-dispatch storage (`packing_and_storage`)

#### Inputs

##### Product flows

###### Treated eggs entering packing (`cooled_eggs_packing`)

Record treated eggs entering packing, whether cooled or held under another validated condition.

- Selected flow: Treated bird eggs in shell ready for packing
- Flow property / unit: Mass / kg
- Amount rule: Measured mass entering packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_output_records`
- Sources:

###### Electricity for packing (`packing_electricity`)

Record electricity used by packing, coding, check-weighing, and conveying equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_energy_records`
- Sources:

###### Electricity for pre-dispatch storage (`storage_electricity`)

Record electricity used by the declared storage room, refrigeration, fans, lighting, and controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered storage electricity allocated by occupied capacity and storage time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final product output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy_records`
- Sources: `codex-cxc-15-1976`

###### Molded-pulp egg tray (`molded_pulp_tray`)

Include the net mass of molded-pulp trays incorporated into the delivered package.

- Selected flow: Molded-pulp egg tray
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by supplier mass per tray, reconciled to purchase records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_records`
- Sources:

###### Corrugated-fiberboard shipping box (`corrugated_fiberboard_box`)

Include the net mass of corrugated boxes incorporated into the delivered package.

- Selected flow: Corrugated fiberboard box
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by supplier mass per box, reconciled to purchase records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_records`
- Sources:

###### PET egg carton (`pet_egg_carton`)

Include only for a polyethylene-terephthalate carton format.

- Selected flow: Polyethylene terephthalate egg carton
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by supplier mass per carton, reconciled to purchase records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_records`
- Sources:

###### Polyethylene overwrap film (`polyethylene_overwrap`)

Include only when polyethylene film is applied to the finished package.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Issued film mass minus separately measured scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_records`
- Sources:

###### Paper package label (`paper_label`)

Include paper labels affixed to the delivered package.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Label count multiplied by supplier mass per label
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_records`
- Sources:

###### Water-based acrylic label adhesive (`acrylic_label_adhesive`)

Include only when this adhesive is applied onsite to package labels.

- Selected flow: Water-based acrylic adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured adhesive make-up consumed, with water content disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources:

###### Ammonia refrigerant make-up for storage (`ammonia_refrigerant_storage`)

Include only when pre-dispatch storage uses R-717 ammonia.

- Selected flow: Ammonia, anhydrous
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance make-up assigned to storage refrigeration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final product output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_balance`
- Sources:

###### HFC-134a refrigerant make-up for storage (`hfc134a_refrigerant_storage`)

Include only when pre-dispatch storage uses HFC-134a.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance make-up assigned to storage refrigeration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final product output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_balance`
- Sources:

###### R-404A refrigerant make-up for storage (`r404a_refrigerant_storage`)

Include only when pre-dispatch storage uses the R-404A refrigerant blend.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance make-up assigned to storage refrigeration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final product output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_balance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product (`reference_product`)

Record net marketable mass of preserved or cooked eggs retaining their shell at the facility gate.

- Selected flow: Eggs, in shell, preserved or cooked
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `unsd-cpc-22300`

##### Waste flows

###### Molded-pulp packaging scrap (`molded_pulp_waste`)

Record offcuts and rejected molded-pulp trays separately.

- Selected flow: Molded-pulp packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured scrap mass sent to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_output_records`
- Sources:

###### Corrugated-fiberboard packaging scrap (`corrugated_fiberboard_waste`)

Record corrugated box offcuts and rejects separately.

- Selected flow: Corrugated fiberboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured scrap mass sent to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_output_records`
- Sources:

###### PET packaging scrap (`pet_packaging_waste`)

Record rejected PET cartons separately from other packaging scrap.

- Selected flow: Polyethylene terephthalate packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured scrap mass sent to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_output_records`
- Sources:

###### Polyethylene film scrap (`polyethylene_film_waste`)

Record polyethylene film trim and rejects separately from PET and fibre packaging.

- Selected flow: Polyethylene packaging film waste
- Flow property / unit: Mass / kg
- Amount rule: Measured scrap mass sent to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_output_records`
- Sources:

###### Broken egg waste from packing and storage (`broken_egg_waste_packing`)

Record damaged eggs whose contents remain with the rejected product.

- Selected flow: Broken treated bird egg waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_output_records`
- Sources:

###### Loose eggshell waste from packing and storage (`eggshell_waste_packing`)

Record separately collected shell fragments from packing or storage breakage.

- Selected flow: Bird eggshell waste
- Flow property / unit: Mass / kg
- Amount rule: Measured shell-fragment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_output_records`
- Sources:

##### Elementary flows

###### Ammonia refrigerant released during storage (`ammonia_air_storage`)

Record only R-717 leakage assigned to pre-dispatch storage.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final product output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_balance`
- Sources:

###### HFC-134a released during storage (`hfc134a_air_storage`)

Record only HFC-134a leakage assigned to pre-dispatch storage.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final product output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_balance`
- Sources:

###### R-404A released during storage (`r404a_air_storage`)

Record only R-404A blend leakage assigned to pre-dispatch storage.

- Selected flow: Refrigerant R-404A, to air
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance refrigerant loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per final product output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_balance`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared operations and multiple products | First avoid allocation through process subdivision, route-specific metering, and separate lot records. | `iso-14044-2006` |
| `allocation_direct_assignment` | Cleaning, treatment, cooling, packaging, and storage | Directly assign measured material, utility, waste, and emission records to the product route that caused them. | `iso-14044-2006` |
| `allocation_shared_storage` | Shared chilled or ambient storage | Allocate storage electricity and refrigerant loss using occupied capacity multiplied by verified storage time; disclose any alternative causal driver. | `iso-14044-2006` |
| `allocation_waste_default` | Broken egg, eggshell, sludge, and packaging scrap | Treat the stream as waste at the point generated and include its treatment. If a stream is sold or intentionally produced as a co-product, document the changed status, subdivide where possible, and apply a justified physical or economic allocation consistently. | `iso-14044-2006` |
| `allocation_no_avoided_burden` | Recycling or valorisation claims | Do not credit avoided products inside the foreground inventory unless the governing study method explicitly requires substitution and the substituted product, quality, and factor are documented. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_grading_records` | `egg_receiving_grading` | received, accepted, broken-egg, and shell-fragment mass | weighbridge, scale, grader, and rejection log | lot_id; species; supplier; incoming_condition; received_mass; accepted_mass; broken_egg_mass; shell_fragment_mass | Calibrated weighing reconciled to lot and grader records | kg | each lot | representative continuous production period | all included receiving lines | sum by lot, then normalize to final conforming mass | calibration records; lot reconciliation; rejection disposition |
| `cp_receiving_electricity` | `egg_receiving_grading` | electricity | submeter or equipment log | meter_start; meter_end; production_time; lot_id | Submeter preferred; otherwise rated-load calculation with runtime | kWh | each shift or lot | same period as production mass | all included receiving/grading equipment | subtract idle baseline and allocate by processed mass | meter calibration or equipment rating and runtime log |
| `cp_cleaning_material_records` | `shell_cleaning` | eggs, water, detergent, sanitiser, and oil | batch sheet, flow meter, dosing log, and scale | route; egg_mass_in; water_in; chemical_product_mass; active_fraction; oil_mass | Meter or weigh each charged material; retain formulation and approval record | kg or m3 | each batch or shift | same period as cleaning output | each cleaning line | sum actual route inputs and normalize to cleaned output | meter calibration; supplier specification; dosing verification |
| `cp_cleaning_utility_records` | `shell_cleaning` | electricity and steam | utility submeter and steam log | electricity; steam_mass; pressure; temperature; condensate_return | Meter utilities and calculate delivered steam energy from recorded state | kWh or MJ | each shift | same period as cleaning output | each cleaning line | subtract idle use and normalize to cleaned output | utility invoices; meter calibration; steam-state record |
| `cp_cleaning_output_records` | `shell_cleaning` | cleaned eggs, wastewater, sludge, broken eggs, and shell fragments | scale, effluent meter, filter/sludge log, and rejection log | cleaned_mass; wastewater_volume; sludge_wet_mass; sludge_dry_fraction; broken_egg_mass; shell_mass | Measure each output separately and retain treatment destination | kg or m3 | each batch or shift | same period as cleaning inputs | each cleaning line | mass/volume totals normalized to cleaned output | balance reconciliation; destination ticket; sampling record |
| `cp_treatment_recipe_records` | `in_shell_treatment` | eggs and preservation recipe inputs | treatment batch record and formulation sheet | route; egg_mass_in; chemical_product_mass; active_fraction; oil_mass; recipe_id | Weigh each charge and link to the declared treatment route | kg | each batch | same period as treated output | each treatment line | sum by route and normalize to treated output | calibrated scales; approved recipe; lot traceability |
| `cp_treatment_utility_records` | `in_shell_treatment` | water, electricity, steam, natural gas, and LPG | flow meter, submeter, fuel meter, and batch controller | water; electricity; steam_mass; steam_state; natural_gas; lpg; heating_value_basis; route; batch_id | Meter each utility and fuel separately | m3, kWh, MJ, or fuel purchase unit | each batch or shift | same period as treated output | each treatment line and heat source | convert consistently and normalize by route output | meter calibration; invoice reconciliation; controller record |
| `cp_treatment_output_records` | `in_shell_treatment` | treated eggs, wastewater, sludge, broken eggs, and shell fragments | scale, effluent meter, sludge log, and rejection log | treated_mass; wastewater_volume; sludge_wet_mass; sludge_dry_fraction; broken_egg_mass; shell_mass | Measure outputs separately and record destination | kg or m3 | each batch | same period as treatment inputs | each treatment line | sum by route and normalize to treated output | mass balance; treatment record; destination ticket |
| `cp_direct_combustion_emissions` | `in_shell_treatment` | direct combustion emissions | stack test or fuel-factor calculation | fuel_type; fuel_quantity; heating_value_basis; emission_factor; factor_source; measured_concentration; flue_gas_volume | Prefer representative stack measurement; otherwise use documented fuel-specific factors | kg | test campaign plus each production period | representative operating states | each onsite combustor | calculate each pollutant separately and normalize to treatment output | stack report or factor source; fuel-meter reconciliation |
| `cp_cooling_records` | `post_treatment_cooling` | eggs, water, electricity, wastewater, and outlet temperature | batch log, flow meter, submeter, and temperature recorder | egg_mass_in; egg_mass_out; water_in; wastewater_out; electricity; inlet_temperature; outlet_temperature; time | Meter utilities and masses; continuously record critical time-temperature values | kg, m3, kWh, °C, and time | each batch | all cooling batches in reporting period | each cooling system | normalize to cooled output | calibrated temperature recorder; meter calibration; batch release record |
| `cp_cooling_refrigerant_balance` | `post_treatment_cooling` | refrigerant make-up and release | refrigerant inventory and service log | refrigerant_identity; opening_charge; additions; recoveries; closing_charge; equipment_id; allocation_basis | Annual or campaign mass balance by named refrigerant and equipment | kg | each service event and reporting period | full reporting period | cooling equipment only | loss = opening + additions - recoveries - closing; allocate by causal equipment use | service invoices; recovery records; charge verification |
| `cp_packaging_material_records` | `packing_and_storage` | each packaging component | purchase, issue, bill-of-material, and supplier mass record | component_identity; count; unit_mass; issued_mass; returned_mass; scrap_mass | Weigh or count each component separately and reconcile to inventory | kg | each lot or shift | same period as final product | all included packing lines | incorporated mass = issued - returned - scrap | supplier specification; stock reconciliation; scale calibration |
| `cp_packing_energy_records` | `packing_and_storage` | packing electricity | submeter or equipment log | meter_start; meter_end; runtime; product_mass | Submeter preferred; otherwise rated-load calculation | kWh | each shift | same period as packed output | included packing equipment | subtract idle baseline and normalize to packed output | meter calibration or equipment rating and runtime |
| `cp_storage_energy_records` | `packing_and_storage` | storage electricity | room submeter and occupancy log | electricity; storage_time; occupied_capacity; product_mass; room_id | Meter each storage room and record product occupancy-time | kWh and kg·h | daily or shift | full declared storage period | all included storage rooms | allocate by occupied capacity × verified time | submeter calibration; inventory timestamps; room log |
| `cp_storage_refrigerant_balance` | `packing_and_storage` | refrigerant make-up and release | refrigerant inventory and service log | refrigerant_identity; opening_charge; additions; recoveries; closing_charge; equipment_id; allocation_basis | Annual or campaign mass balance by named refrigerant and equipment | kg | each service event and reporting period | full reporting period | storage refrigeration only | loss = opening + additions - recoveries - closing; allocate by occupied capacity-time | service invoices; recovery records; charge verification |
| `cp_packing_output_records` | `packing_and_storage` | final product, packaging scrap, broken eggs, and shell fragments | checkweigher, scrap scale, rejection log, and dispatch record | product_mass; package_mass; each_scrap_mass; broken_egg_mass; shell_mass; dispatch_time | Measure every output stream separately and reconcile to packed input | kg | each lot | same period as packing inputs | all included packing lines and storage rooms | normalize to final marketable product mass | scale calibration; dispatch record; waste destination ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory exchanges | normalized exchange = period exchange ÷ net kg of conforming reference product | exchange record; final product mass | exchange per 1 kg reference product | `iso-14044-2006` |
| `calc_count_mass` | Egg-count records | lot egg mass = measured sample or total lot net mass; use count only to reconcile, not as a generic mass factor | count; measured lot mass | kg eggs |  |
| `calc_active_chemical` | Sodium hydroxide, sodium hypochlorite, sodium silicate, and other formulated chemicals | active mass = commercial product mass × supplier-declared active fraction; retain both commercial and active mass | product mass; active fraction | kg active substance and kg commercial product |  |
| `calc_steam_energy` | Steam inputs | delivered heat = steam mass × difference between inlet steam enthalpy and returned condensate enthalpy; document state assumptions | steam mass; pressure; temperature; condensate state | MJ delivered steam energy |  |
| `calc_storage_allocation` | Shared storage electricity and refrigerant loss | product share = product occupied capacity-time ÷ total occupied capacity-time | product mass or pallet positions; entry/exit time; room total | allocated kWh or kg refrigerant loss | `iso-14044-2006` |
| `calc_refrigerant_loss` | Each named refrigerant | loss = opening charge + additions - recovered amount - closing charge; report each refrigerant separately | charge and service records | kg named refrigerant to air |  |
| `calc_mass_balance` | Each process | closure = inputs - separately measured product outputs - waste outputs - retained or evaporated mass; investigate material unexplained residuals | all mass inputs and outputs | balance closure and explanation | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and treatment route | Preserve lot identity from incoming shell eggs through final product and declare species, route, shell condition, grade, and storage condition. | lot genealogy; batch and dispatch records |
| `dq_temporal` | Foreground records | Cover representative production including start-up, normal operation, cleaning, changeover, and shutdown where they materially affect the route. | dated meters, batch records, and production schedule |
| `dq_completeness` | Inventory | Reconcile all named material, utility, packaging, waste, refrigerant, and direct-emission records; do not hide an unmeasured item in an aggregated placeholder. | completeness checklist and process mass/energy reconciliation |
| `dq_treatment_validation` | Cooking, pasteurization, or preservation | Retain the validated route specification, critical limits, monitoring results, deviations, corrective actions, and product-release decision. | approved validation study and batch controller records |
| `dq_measurement` | Scales, meters, and temperature recorders | Use calibrated equipment suitable for the operating range and retain calibration status for the reporting period. | calibration certificates and verification checks |
| `dq_waste_destination` | Wastewater, sludge, eggshell, broken egg, and packaging scrap | Identify each receiving treatment or recovery route and record wet/dry basis where relevant. | manifests, invoices, treatment contract, or onsite log |
| `dq_refrigerant` | Cooling and storage | Identify the actual refrigerant by chemical or commercial blend and keep service-event mass balance; do not report a generic refrigerant. | equipment register, service log, purchase and recovery records |
| `dq_source_currency` | External method evidence | Use the identified edition or DOI and disclose any jurisdictional departure from Codex cleaning or storage guidance. | source register and deviation note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | Product identity | Fail if the final product is fresh untreated, not in shell, or peeled before the reference-flow gate. | `unsd-cpc-22300` |
| `validate_reference_mass` | Reference flow | Confirm exactly 1 kg net marketable egg mass excluding packaging and verify count-to-mass conversion from lot records. |  |
| `validate_process_route` | Process map | Require receiving/grading, one declared in-shell treatment route, packaging/storage, and each conditionally applicable cleaning or cooling process. | `codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization` |
| `validate_atomic_exchange` | Inventory rows | Reject any combined utility, fuel, chemical, packaging, waste, refrigerant, or emission row; every selected flow must be one resolvable exchange. |  |
| `validate_treatment` | Treatment batch | Confirm that monitored route conditions meet the approved cooking, pasteurization, or preservation specification and that deviations are excluded or corrected. | `codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization` |
| `validate_mass_balance` | Each process | Check measured inputs against product, waste, retained, and released outputs and require an explanation for material imbalance. | `iso-14044-2006` |
| `validate_waste_emissions` | Foreground outputs | Confirm separate records and destinations for wastewater, sludge, broken egg, eggshell, packaging scrap, each refrigerant release, and each direct combustion emission that applies. | `iso-14044-2006` |
| `validate_bilingual_rows` | English and Chinese PCR | Confirm identical ordered process ids, row ids, directions, flow types, controlled values, and source ids; confirm that every non-UUID Chinese selected-flow name is an accurate translation. |  |
| `validate_range_evidence` | Quantitative ranges | Do not add an empirical range unless at least two independent original sources are boundary-, unit-, product-state-, and normalization-compatible, or an authoritative source explicitly prescribes an interval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground processing dataset for preserved or cooked eggs retaining their shell |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product carbon footprint, LCA, supply-chain modelling, facility improvement, and route comparison when product qualifiers and system boundary match |
| excluded_use | Fresh eggs, eggs not in shell, peeled cooked eggs, farm egg production, consumer cooking, or another treatment route without route-specific foreground data |
| required_metadata | PCR id and version; species; supplier geography; incoming condition; route and route share; cleaning route; treatment validation basis; package components; storage condition and duration; allocation method; reference year; facility geography |
| required_quality_disclosure | Meter coverage; calculated-versus-measured shares; unresolved Tiangong identities; mass-balance closure; treatment deviations; waste destinations; refrigerant identity and balance; source editions; data gaps |
| update_trigger | Material change in species mix, treatment technology or recipe, energy source, cleaning permission or practice, package format, refrigeration system, storage duration, allocation, supplier geography, or validated safety target |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-22300` | official_guidance | United Nations Statistics Division. Central Product Classification detail, code 22300, “Eggs, in shell, preserved or cooked.” https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/22300 (retrieved 2026-08-24). | Category inclusion and exclusions; facility-gate product identity |
| `codex-cxc-15-1976` | official_guidance | Codex Alimentarius. Code of Hygienic Practice for Eggs and Egg Products, CXC 15-1976. https://workspace.fao.org/sites/codex/Standards/CXC%2015-1976/CXC_015e.pdf (retrieved 2026-08-24). | Receiving, sorting, grading, dry cleaning, washing, disinfection, drying, oiling, in-shell treatment, packaging, storage, segregation, and validation rules |
| `shenga-et-al-2010-in-shell-pasteurization` | literature | Shenga, E.; Singh, R. P.; Yadav, A. S. Effect of pasteurization of shell egg on its quality characteristics under ambient storage. Journal of Food Science and Technology 47, 420–425. https://doi.org/10.1007/s13197-010-0069-2. | Intact-shell dry, moist-heat, and microwave pasteurization route evidence; treatment-condition and product-quality monitoring |
| `chiozzi-et-al-2022-thermal-nonthermal` | literature | Chiozzi, V.; Agriopoulou, S.; Varzakas, T. Advances, Applications, and Comparison of Thermal (Pasteurization, Sterilization, and Aseptic Packaging) against Non-Thermal (Ultrasounds, UV Radiation, Ozonation, High Hydrostatic Pressure) Technologies in Food Processing. Applied Sciences 12(4), 2202. https://doi.org/10.3390/app12042202. | General thermal/non-thermal treatment classification and the need to collect treatment energy and water records; no egg-specific quantitative range |
| `iso-14044-2006` | standard | ISO 14044:2006. Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html (confirmed current in 2022; retrieved 2026-08-24). | Boundary consistency, subdivision, allocation hierarchy, inventory completeness, and mass-balance validation |
