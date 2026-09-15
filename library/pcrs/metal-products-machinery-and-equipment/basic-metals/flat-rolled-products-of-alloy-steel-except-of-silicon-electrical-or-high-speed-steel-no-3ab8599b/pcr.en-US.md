---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-or-high-speed-steel-no-3ab8599b
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of alloy steel (except of silicon-electrical or high-speed steel), not further worked than cold-rolled, of a width of less than 600 mm

## 1. Scope and Applicability

This PCR applies to uncoated flat-rolled alloy-steel products, excluding silicon-electrical steel and high-speed steel, whose final width is less than 600 mm and whose terminal metallurgical working state is cold-rolled. It covers full-hard or annealed/temper-rolled strip supplied in coils, bundles, or cut lengths when no working beyond operations directly associated with cold rolling has changed the product into a further-worked or coated article.

The foreground boundary begins with received hot-rolled or externally pickled hot-rolled alloy-steel strip and ends with the net saleable cold-rolled narrow product packaged at the producing plant gate. Steelmaking, continuous casting, hot rolling, upstream acid and utility production, transport to the plant, metallic coating, organic coating, electroplating, forming into articles, distribution, use, and end-of-life are outside the foreground boundary and require linked datasets when included in the study. The process sequence is based on the official ferrous-metals-processing description of cold rolling and its associated pre- and post-treatment operations (`ec-jrc-fmp-bref-2022`, `eu-2022-2110-ferrous-metals-bat`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-or-high-speed-steel-no-3ab8599b |
| classification_refs | CPC 3.0: 41224 (`unsd-cpc-3-0-structure-2025`) |
| covered_products | Flat-rolled alloy-steel strip or sheet, other than silicon-electrical or high-speed steel, final width below 600 mm, not further worked than cold-rolled; full-hard, annealed, or temper-rolled states are covered when declared. |
| excluded_products | Silicon-electrical steel; high-speed steel; stainless steel when represented by a separate high-alloy product identity; products 600 mm or wider; hot-rolled-only products; clad, plated, metallic-coated, organic-coated, embossed, perforated, formed, or otherwise further-worked products. |
| representative_product | Uncoated cold-rolled low-alloy steel strip in coil form, final width below 600 mm, with declared grade, thickness, temper, surface finish, and edge condition. |
| production_route | Cold reduction of received hot-rolled or externally pickled hot-rolled alloy-steel strip, with conditional surface preparation, annealing, temper rolling, slitting, oiling, and packaging. |
| market_state | Net saleable uncoated strip at the cold-rolling plant gate, supplied as a coil, bundle, or cut length; dry or oiled state and packaging configuration declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of uncoated flat-rolled alloy-steel product, excluding silicon-electrical and high-speed steel, in a terminal cold-rolled state and with final width below 600 mm. |
| How much | 1,000 kg net saleable product at the producing plant gate, excluding removable transport packaging. |
| How well | Meets the declared steel designation and composition, final thickness and width tolerances, temper or annealed state, surface finish, flatness, edge condition, and oiling condition. |
| How long or cycle | One production lot at plant gate; service life is not part of this production reference flow. |
| reference_flow_link | `final_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Flat-rolled products of alloy steel (except of silicon-electrical or high-speed steel), not further worked than cold-rolled, of a width of less than 600 mm `aab426b1-1284-44df-950f-75d77f202b1a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel grade/designation and alloy family; declared chemical composition or governing specification; full-hard, annealed, or temper-rolled state; final thickness and width; coil, bundle, or cut-length form; surface finish and roughness where specified; edge condition; dry or oiled state; saleable product mass excluding removable packaging; production site and geography; reporting period; included surface-preparation, annealing, temper-rolling, slitting, and packaging routes |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and steel intermediates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry saleable steel mass; exclude removable packaging, pallets, mandrels, and stillages. Normalize the completed inventory to 1,000 kg reference product. |
| `steel_mass_balance` | steel input, product, scrap, sludge-bound iron, and measured losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile grade-compatible steel mass through each process and explain measured losses, inventory changes, and unreconciled differences. Do not count internally recycled strip twice. |
| `energy_accounting` | purchased electricity and fuels | Energy | MJ | Preserve the purchased carrier and meter basis. Convert kWh to MJ with 1 kWh = 3.6 MJ only for reporting; do not merge electricity and fuel into one energy row. |
| `gas_reference_conditions` | natural gas, hydrogen, and nitrogen recorded by volume | Volume | m3 | State temperature, absolute pressure, dry/wet basis, purity, and lower/higher heating-value convention where relevant; convert all reported volumes to the declared reference conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received hot-rolled or externally pickled hot-rolled alloy-steel strip, with grade, mass, thickness, width, surface/scale condition, prior pickling state, and upstream dataset reference declared. |
| starting_condition_role | Foreground input and downstream-processing starting point. |
| product_classification_scope | Uncoated, non-silicon-electrical, non-high-speed alloy-steel flat products in a terminal cold-rolled state with final width below 600 mm. |
| recursive_input_rule | A purchased input already within this same cold-rolled product category is recorded once as an upstream product input with its own dataset and is not reprocessed through an invented duplicate cold-rolling chain. |
| upstream_dataset_requirement | Link grade- and route-representative datasets for steelmaking, casting, hot rolling, external pickling, purchased chemicals, electricity, fuels, gases, water, packaging, transport, and waste treatment whenever these occur outside the foreground site. |
| disclosure | Declare feedstock state; included unit operations; pickling chemistry; rolling mill type; annealing furnace and atmosphere; temper rolling and slitting; oiling; yield; internal recycling; waste destinations; utility supply; emission-control systems; product form; and cut-off decisions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_01_foreground_operations` | foreground cold-strip production | Include all on-site surface preparation, cold reduction, conditional annealing, temper/skin-pass rolling, width control, oiling, finishing, packaging, emission control, and directly associated wastewater treatment used for the declared product. | `ec-jrc-fmp-bref-2022`; `eu-2022-2110-ferrous-metals-bat` |
| `sb_02_upstream_links` | purchased inputs and external operations | Represent steelmaking, casting, hot rolling, external pickling, purchased utilities and materials, transport, and off-site treatment with explicit upstream datasets rather than silently omitting them. |  |
| `sb_03_direct_releases` | elementary and waste flows | Record measured direct releases and each separately managed waste stream without combining acids, wastewater, sludge, oil, scrap, or air pollutants into umbrella rows. | `eu-2022-2110-ferrous-metals-bat` |
| `sb_04_excluded_further_work` | downstream processing | Exclude metallic or organic coating, electroplating, forming, fabrication, distribution, use, and end-of-life unless the declared study broadens the boundary and reports them separately. | `unsd-cpc-3-0-structure-2025` |
| `sb_05_recursive_inputs` | same-category purchased cold-rolled strip | Use the supplied upstream dataset once and disclose the recursion break; do not recreate an unverified cold-rolling history. |  |

## 6. Process Inventory Structure

The official ferrous-metals-processing evidence describes cold rolling as compression without previous heating and identifies pickling, rolling, annealing, temper/skin-pass rolling, and finishing as the usual sequence for low-alloy and alloy steel. Process applicability remains product- and site-specific (`ec-jrc-fmp-bref-2022`, `eu-2022-2110-ferrous-metals-bat`).

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `surface_preparation` | Surface preparation, pickling, and rinsing | conditional | Include when received feed requires on-site scale removal, degreasing, acid pickling, or rinsing; omit only with documented externally prepared feed or a documented alternative process. | foreground conditioning | kg pickled strip transferred to cold rolling |
| `cold_rolling` | Cold reduction | required | Always include the mill operations that reduce thickness without preheating the strip. | foreground production | kg full-hard cold-rolled strip output |
| `annealing` | Annealing | conditional | Include when the declared product is annealed or when heat treatment is required before finishing; exclude for verified full-hard delivery. | foreground heat treatment | kg annealed strip output |
| `finishing_width_control` | Temper rolling, slitting, and finishing | required | Include the actual finishing sequence; temper rolling, slitting, and oiling rows apply only when performed. | foreground finishing | kg finished narrow strip before packaging |
| `packaging_release` | Packaging and product release | required | Include saleable-mass determination and the actual coil, bundle, or cut-length packaging configuration. | foreground product release | 1,000 kg net saleable product |

### Process: Surface preparation, pickling, and rinsing (`surface_preparation`)

#### Inputs

##### Product flows

###### Received hot-rolled alloy-steel strip (`hot_rolled_alloy_steel_strip`)

Record the grade-compatible hot-rolled feed crossing into on-site surface preparation.

- Selected flow: Hot-rolled non-electrical, non-high-speed alloy-steel strip
- Flow property / unit: Mass / kg
- Amount rule: measured received mass assigned to the declared product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`

###### Pickling-line electricity (`pickling_electricity`)

Record metered electricity for entry handling, descaling, baths, pumps, rinsing, drying, ventilation, and control equipment assigned to surface preparation.

- Selected flow: Electricity supplied to the pickling line at the declared voltage and grid geography
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased electricity assigned to processed product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`

###### Pickling and rinsing water (`pickling_water`)

Record make-up and once-through water crossing the process boundary, net of separately documented internal reuse.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured purchased or withdrawn water mass assigned to processed product lots; convert metered volume to mass using a declared density and reference condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`

###### Hydrochloric acid for pickling (`hydrochloric_acid`)

Include only for a hydrochloric-acid pickling route and declare delivered concentration.

- Selected flow: Hydrochloric acid solution at declared concentration
- Flow property / unit: Mass / kg
- Amount rule: purchased and inventory-adjusted solution mass consumed by the product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-2022-2110-ferrous-metals-bat`

###### Sulfuric acid for pickling (`sulfuric_acid`)

Include only for a sulfuric-acid pickling route and declare delivered concentration.

- Selected flow: Sulfuric acid solution at declared concentration
- Flow property / unit: Mass / kg
- Amount rule: purchased and inventory-adjusted solution mass consumed by the product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-2022-2110-ferrous-metals-bat`

###### Sodium hydroxide for alkaline degreasing (`sodium_hydroxide`)

Include only when an alkaline degreasing bath is used and declare solution concentration.

- Selected flow: Sodium hydroxide solution at declared concentration
- Flow property / unit: Mass / kg
- Amount rule: purchased and inventory-adjusted solution mass consumed by the product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-2022-2110-ferrous-metals-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pickled alloy-steel strip (`pickled_strip_output`)

Record the cleaned internal strip transferred to cold reduction, with grade and surface state preserved.

- Selected flow: Pickled non-electrical, non-high-speed alloy-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after pickling, rinsing, and drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`

##### Waste flows

###### Spent hydrochloric pickling acid (`spent_hydrochloric_acid`)

Include only for the hydrochloric-acid route; record the separately managed spent solution sent to recovery or treatment.

- Selected flow: Spent hydrochloric pickling acid
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch mass adjusted for storage change and documented on-site regeneration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-2022-2110-ferrous-metals-bat`

###### Spent sulfuric pickling acid (`spent_sulfuric_acid`)

Include only for the sulfuric-acid route; record the separately managed spent solution sent to recovery or treatment.

- Selected flow: Spent sulfuric pickling acid
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch mass adjusted for storage change and documented on-site regeneration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-2022-2110-ferrous-metals-bat`

###### Iron-hydroxide treatment sludge (`iron_hydroxide_sludge`)

Record dewatered iron-bearing sludge leaving the associated pickling-water treatment system.

- Selected flow: Iron-hydroxide sludge from pickling-water treatment
- Flow property / unit: Mass / kg
- Amount rule: measured wet and dry mass with dry-solids fraction declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-2022-2110-ferrous-metals-bat`

###### Acidic pickling wastewater (`acidic_wastewater`)

Record the aqueous waste stream leaving the foreground treatment boundary; do not combine it with spent acid or sludge.

- Selected flow: Acidic wastewater from alloy-steel pickling and rinsing
- Flow property / unit: Volume / m3
- Amount rule: metered discharge volume assigned to processed product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-2022-2110-ferrous-metals-bat`

##### Elementary flows

###### Hydrogen chloride to air (`hydrogen_chloride_air`)

Include for hydrochloric-acid pickling when monitoring or a site mass balance demonstrates a release after abatement.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: monitored stack and fugitive release assigned to the product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-2022-2110-ferrous-metals-bat`

###### Sulfur dioxide to air (`sulfur_oxides_air`)

Include for sulfuric-acid pickling when sulfur dioxide is monitored; do not use this row for another sulfur-oxide species or an aggregate expressed on a different basis.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: monitored release assigned to the product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-2022-2110-ferrous-metals-bat`

### Process: Cold reduction (`cold_rolling`)

#### Inputs

##### Product flows

###### Pickled strip input (`pickled_strip_input`)

Record pickled alloy-steel strip transferred into the cold-reduction mill.

- Selected flow: Pickled non-electrical, non-high-speed alloy-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass assigned to the declared product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg full-hard strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling`

###### Cold-rolling electricity (`rolling_electricity`)

Record metered electricity for mill drives, hydraulics, coolant circulation, exhaust, and directly associated equipment.

- Selected flow: Electricity supplied to the cold-rolling mill at the declared voltage and grid geography
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased electricity assigned to rolled product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg full-hard strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling`

###### Rolling lubricant (`rolling_lubricant`)

Record make-up rolling oil or emulsion concentrate as the actual formulation, not total recirculating bath inventory.

- Selected flow: cold rolling oil `a9417245-6f45-4df3-8f04-227ed8a1be58`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased make-up plus opening inventory minus closing inventory and recovered dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg full-hard strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Full-hard cold-rolled strip (`full_hard_strip_output`)

Record cold-reduced strip before optional annealing or final finishing.

- Selected flow: Full-hard cold-rolled non-electrical, non-high-speed alloy-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after cold reduction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg full-hard strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling`

##### Waste flows

###### Alloy-steel rolling scrap (`steel_scrap_rolling`)

Record grade-compatible head, tail, breakage, and defect scrap removed during cold reduction.

- Selected flow: Clean alloy-steel scrap from cold rolling
- Flow property / unit: Mass / kg
- Amount rule: weighed scrap assigned to product lots, net of documented internal remelting return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg full-hard strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling`

###### Spent rolling oil or emulsion (`waste_rolling_oil`)

Record spent lubricant removed from the recirculating system for external recovery or treatment.

- Selected flow: Spent cold-rolling oil or emulsion of declared water content
- Flow property / unit: Mass / kg
- Amount rule: measured waste dispatch mass adjusted for storage change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg full-hard strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling`

##### Elementary flows

###### Rolling-oil mist to air (`oil_mist_air`)

Record monitored rolling-oil mist released after collection and abatement.

- Selected flow: Rolling-oil mist emitted to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored channelled and quantified fugitive release assigned to product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg full-hard strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling`
- Sources: `eu-2022-2110-ferrous-metals-bat`

### Process: Annealing (`annealing`)

#### Inputs

##### Product flows

###### Full-hard strip for annealing (`full_hard_strip_input`)

Include when heat treatment is performed and record the full-hard strip entering the furnace.

- Selected flow: Full-hard cold-rolled non-electrical, non-high-speed alloy-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured furnace-feed mass assigned to annealed product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg annealed strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing`

###### Natural gas for annealing (`annealing_natural_gas`)

Include when gaseous natural gas is consumed by the annealing furnace; disclose supplier geography, heating-value basis, and volume reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: custody-transfer or calibrated submeter volume assigned to annealed product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg annealed strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing`

###### Annealing electricity (`annealing_electricity`)

Record metered electricity for furnace drives, fans, controls, atmosphere handling, and electric heating when used.

- Selected flow: Electricity supplied to annealing at the declared voltage and grid geography
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased electricity assigned to annealed product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg annealed strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing`

###### Protective-atmosphere hydrogen (`protective_hydrogen`)

Include only when hydrogen is supplied or generated for the declared annealing atmosphere; declare purity, pressure, and source route.

- Selected flow: Industrial hydrogen gas of declared purity and pressure
- Flow property / unit: Volume / m3
- Amount rule: metered make-up gas at declared reference conditions assigned to annealed lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg annealed strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing`

###### Protective-atmosphere nitrogen (`protective_nitrogen`)

Include only when nitrogen is supplied or generated for the declared annealing atmosphere; declare purity, pressure, and source route.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered make-up gas at declared reference conditions assigned to annealed lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg annealed strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Annealed cold-rolled strip (`annealed_strip_output`)

Record heat-treated strip transferred to finishing with grade, temper, and surface state declared.

- Selected flow: Annealed cold-rolled non-electrical, non-high-speed alloy-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after annealing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg annealed strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from annealing (`annealing_co2_fossil`)

Record direct fossil carbon dioxide from on-site annealing combustion without assigning a more specific air compartment than the verified flow supports.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: site emissions record or verified furnace-level carbon balance assigned to annealed product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg annealed strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing`

###### Nitrogen oxides from annealing (`annealing_nox`)

Record the monitored nitrogen-oxide species from combustion and state whether the result is expressed as NO2.

- Selected flow: Measured nitrogen oxide species emitted to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored stack release assigned to annealed product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg annealed strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing`
- Sources: `eu-2022-2110-ferrous-metals-bat`

### Process: Temper rolling, slitting, and finishing (`finishing_width_control`)

#### Inputs

##### Product flows

###### Full-hard strip routed directly to finishing (`full_hard_finish_input`)

Include only for a verified full-hard delivery route that bypasses annealing.

- Selected flow: Full-hard cold-rolled non-electrical, non-high-speed alloy-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass assigned to full-hard finished product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished narrow strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

###### Annealed strip routed to finishing (`annealed_finish_input`)

Include only for a declared annealed or temper-rolled delivery route.

- Selected flow: Annealed cold-rolled non-electrical, non-high-speed alloy-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass assigned to annealed finished product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished narrow strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

###### Finishing-line electricity (`finishing_electricity`)

Record metered electricity for temper rolling, slitting, levelling, inspection, oiling, and directly associated handling actually performed.

- Selected flow: Electricity supplied to finishing at the declared voltage and grid geography
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased electricity assigned to finished product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished narrow strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

###### Corrosion-protection oil (`corrosion_protection_oil`)

Include only when oil is applied to the saleable strip and declare the formulation and residual coating basis.

- Selected flow: Corrosion-protection oil of declared formulation
- Flow property / unit: Mass / kg
- Amount rule: purchased and inventory-adjusted oil consumption assigned to oiled product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished narrow strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished narrow cold-rolled strip (`finished_narrow_strip_output`)

Record the accepted strip after required temper rolling, slitting, levelling, inspection, and oiling, before removable packaging is added.

- Selected flow: Finished uncoated cold-rolled alloy-steel strip, width below 600 mm, before packaging
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished narrow strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

##### Waste flows

###### Alloy-steel edge and end trim (`steel_scrap_finishing`)

Record clean edge, end, and inspection-reject alloy-steel scrap removed during finishing.

- Selected flow: Clean alloy-steel edge and end trim from finishing
- Flow property / unit: Mass / kg
- Amount rule: weighed scrap assigned to product lots, net of documented internal remelting return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished narrow strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

##### Elementary flows

### Process: Packaging and product release (`packaging_release`)

#### Inputs

##### Product flows

###### Finished strip sent to packaging (`finished_strip_packaging_input`)

Record accepted finished narrow strip transferred into product release and packaging.

- Selected flow: Finished uncoated cold-rolled alloy-steel strip, width below 600 mm, before packaging
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`

###### Steel strapping (`steel_strapping`)

Record steel strapping that leaves the plant with the declared coil, bundle, or cut-length configuration.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued packaging mass assigned to released product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`

###### Protective paper wrapping (`paper_wrapping`)

Include only when protective paper leaves the plant with the product; declare paper grade and moisture basis.

- Selected flow: Protective packaging paper of declared grade
- Flow property / unit: Mass / kg
- Amount rule: issued paper mass assigned to released product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable cold-rolled alloy-steel product (`final_product_output`)

Record accepted steel mass excluding removable packaging and preserving all required product qualifiers.

- Selected flow: Flat-rolled products of alloy steel (except of silicon-electrical or high-speed steel), not further worked than cold-rolled, of a width of less than 600 mm `aab426b1-1284-44df-950f-75d77f202b1a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: normalize the measured net saleable product mass to exactly 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01_subdivision` | all foreground operations | Prefer physical subdivision using process meters, production orders, grade campaigns, and lot records. Report any shared-resource allocation key and the share assigned to the reference product. |  |
| `allocation_02_steel_scrap` | alloy-steel scrap | Record scrap mass and destination at the generating process. Do not subtract an avoided-primary-steel credit inside the foreground process; apply the study's declared recycling method downstream and prevent double counting of internally remelted scrap. |  |
| `allocation_03_recovered_acid_oil` | recovered acid and oil | Subtract only measured material returned to the same process from make-up consumption. A recovered material exported as a product or waste remains an explicit output; allocation or substitution outside the plant boundary must be disclosed separately. | `eu-2022-2110-ferrous-metals-bat` |
| `allocation_04_shared_treatment` | wastewater, waste-gas, and utility systems | Allocate shared treatment and utility burdens using measured flow, pollutant load, energy demand, or another causal physical driver; use mass allocation only when no more causal measure is available and document the choice. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_surface_preparation` | `surface_preparation` | feed, electricity, water, bath chemicals, pickled output, spent acid, sludge, wastewater, HCl, and sulfur oxides | weighbridge/coil ledger; meters; purchase and tank inventory; waste consignment; laboratory and emissions records | lot id; grade; input/output mass; meter readings; chemical identity and concentration; tank opening/closing stock; waste mass/volume; dry solids; discharge volume; pollutant result; operating hours | calibrated meters and scales reconciled to production and environmental records | kg; m3; MJ | per lot or shift, with monthly reconciliation | representative continuous 12-month period or complete shorter campaign disclosed | all on-site surface-preparation and associated treatment units serving the product | sum eligible records, adjust inventories and internal reuse, assign by measured lot or causal driver, then normalize to output | calibration certificates; invoices; stock reconciliation; laboratory QA/QC; waste notes; monitoring reports |
| `cp_cold_rolling` | `cold_rolling` | pickled input, electricity, lubricant, full-hard output, scrap, spent oil, and oil mist | coil ledger; electricity submeter; lubricant inventory; scrap scale; waste consignment; air-monitoring record | coil id; grade; input/output mass; electricity; lubricant purchases/stocks/recovery; scrap mass; spent-oil mass and water fraction; oil-mist result; operating hours | reconcile mill campaign records and calibrated meters to accepted output | kg; MJ | per coil or campaign, with monthly reconciliation | representative continuous 12-month period or complete shorter campaign disclosed | all mill stands and directly associated systems | assign direct records to lots; allocate shared records causally; normalize to output | meter and scale calibration; inventory balance; waste notes; monitoring QA/QC |
| `cp_annealing` | `annealing` | full-hard input, natural gas, electricity, atmosphere gases, annealed output, fossil CO2, and nitrogen oxides | furnace charge ledger; fuel and electricity meters; gas meters; output ledger; environmental inventory and stack monitoring | charge id; grade; input/output mass; gas volume and reference conditions; heating value; electricity; H2/N2 volume and purity; CO2 mass; NOx species and mass; operating hours | reconcile furnace campaign records to metered utilities and monitored releases | kg; m3; MJ | per charge or campaign, with monthly reconciliation | representative continuous 12-month period or complete shorter campaign disclosed | all annealing furnaces and atmosphere systems serving the product | assign charge records directly; allocate shared meters by furnace time, mass, or measured energy; normalize to output | meter calibration; fuel certificates; atmosphere-gas certificates; emissions QA/QC; mass reconciliation |
| `cp_finishing` | `finishing_width_control` | full-hard/annealed input, electricity, oil, finished output, and steel trim | coil routing and inspection ledger; electricity submeter; oil inventory; output and scrap scales | route state; coil id; grade; input/output mass; final width/thickness; electricity; oil issued; scrap mass; disposition | reconcile routing, inspection acceptance, and measured material/energy records | kg; MJ | per coil or lot, with monthly reconciliation | representative continuous 12-month period or complete shorter campaign disclosed | temper mill, slitter, leveller, inspection, and oiling units actually used | separate full-hard and annealed routes; assign actual operations; normalize to accepted output | calibration; route records; inspection certificate; oil stock reconciliation; scrap ticket |
| `cp_packaging_release` | `packaging_release` | finished input, packaging components, and reference product | production release record; certified scale; packaging bill of materials | lot id; product qualifiers; unwrapped steel mass; packaged gross mass; strap mass; paper mass; packaging configuration; release date | weigh accepted steel separately from removable packaging and reconcile bill of materials | kg | per released lot | same period as foreground production | all packaging and release stations for the product | sum net saleable steel; report packaging separately; normalize steel output to 1,000 kg | scale calibration; packing list; bill of materials; inspection and release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01_normalization` | every inventory amount | normalized amount = eligible process amount / eligible process output mass × 1,000 kg, with the process-output denominator stated | collected amount; accepted process output mass | amount per 1,000 kg reference product or traceable process-output ratio |  |
| `calc_02_inventory_adjustment` | chemicals, oils, gases, and packaging | consumption = purchases + opening stock - closing stock - measured return or export; document stock boundaries and period matching | purchase, stock, return, and export records | net consumed amount |  |
| `calc_03_steel_reconciliation` | each steel-processing step | input steel mass = accepted output + separately weighed scrap + measured other steel-bearing outputs + inventory change + explained measurement difference | coil weights; output weights; scrap and sludge records; inventory change | reconciled mass-balance statement |  |
| `calc_04_energy_conversion` | reported electricity | MJ = metered kWh × 3.6; retain the original kWh record and do not convert natural gas volume without declared conditions and heating value | kWh; carrier metadata | MJ electricity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01_product_identity` | reference product and steel intermediates | Retain grade, composition/specification, thickness, width, temper/annealed state, surface finish, edge, oiling, and lot traceability; verify final width is below 600 mm and product is not silicon-electrical or high-speed steel. | mill certificate; inspection and release record; product specification |
| `dq_02_completeness` | process map and inventory | Cover every unit operation actually used and reconcile steel mass, utilities, chemicals, packaging, wastes, and monitored emissions to the same reporting period. | process routing; meter register; mass balance; completeness checklist |
| `dq_03_temporal_site` | foreground records | Prefer a continuous representative 12-month period; disclose shorter campaigns, shutdowns, abnormal events, outsourced steps, and all sites represented. | dated production and environmental records; site list |
| `dq_04_measurement` | meters, scales, and laboratory results | Use calibrated devices and documented sampling/analytical methods; retain raw units, reference conditions, detection limits, and below-detection treatment. | calibration certificates; laboratory QA/QC; monitoring plan |
| `dq_05_supplier_models` | upstream datasets | Match geography, technology, product state, concentration, purity, electricity voltage, and waste destination; disclose material proxies and their contribution. | supplier declaration; dataset metadata; proxy register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01_identity` | reference product | Fail completeness if final width is not below 600 mm, the product is silicon-electrical or high-speed steel, the terminal state is beyond cold-rolled, or required grade/state/surface qualifiers are missing. | `unsd-cpc-3-0-structure-2025` |
| `validation_02_reference_amount` | reference flow | Confirm that the reference output is exactly 1,000 kg net saleable steel and removable packaging is reported separately. |  |
| `validation_03_route` | process inclusion | Require cold rolling and product release; require evidence for omitting surface preparation or annealing, and record actual temper rolling, slitting, oiling, and outsourced operations. | `ec-jrc-fmp-bref-2022` |
| `validation_04_atomicity` | inventory rows | Reject combined carrier, material, waste, wastewater/sludge, or air-emission labels; each exchange must remain one concrete flow with route conditions stated. |  |
| `validation_05_mass_balance` | steel-bearing flows | Require a documented reconciliation for each included process and investigate any difference outside the site's declared measurement uncertainty. |  |
| `validation_06_uuid_readiness` | Tiangong references | Treat UUID-empty rows as unresolved review items; do not substitute the rejected generic alternating-current flow or any proxy for the exact site/product state. |  |
| `validation_07_source_and_range` | externally constrained quantities | Reject empirical ranges inferred from fewer than two independent, original, boundary-compatible sources; retain foreground collection requirements while range evidence is unresolved. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after methodology review, UUID resolution or explicit accepted exceptions, and documented foreground-data quality review |
| downstream_use | Product-flow, unit-process, aggregated process, and lifecycle-model projections for declared cold-rolled narrow alloy-steel products |
| allowed_use | Studies whose product matches the alloy exclusions, terminal cold-rolled state, width below 600 mm, grade, temper, surface, geography, technology, and plant-gate boundary represented by the dataset |
| excluded_use | Silicon-electrical steel; high-speed steel; stainless or other high-alloy products not represented by the declared identity; widths 600 mm or above; hot-rolled-only, coated, plated, formed, or otherwise further-worked products; undisclosed global generic substitution |
| required_metadata | PCR id and version; product qualifiers; reference amount; site/geography; reporting period; feedstock state and upstream dataset; process route; pickling chemistry; mill and annealing technology; energy and gas conditions; allocation; scrap and waste destinations; emission controls; packaging; cut-offs; unresolved UUIDs or proxies |
| required_quality_disclosure | temporal, geographical, and technological representativeness; primary-data share; meter and scale coverage; mass-balance closure; allocation shares; missing and estimated records; detection-limit handling; supplier dataset quality; range-evidence limitations |
| update_trigger | material change in grade mix, width/thickness range, feedstock state, pickling chemistry, mill or furnace technology, annealing atmosphere, electricity or fuel supply, yield, emission control, waste route, packaging, site, or reporting period; or resolution/change of a referenced UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 Structure, 30 June 2025, CPC 41224. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Official product identity, alloy exclusions, terminal cold-rolled state, and width threshold. |
| `ec-jrc-fmp-bref-2022` | official_guidance | European Commission Joint Research Centre, Ferrous Metals Processing Industry BREF, published 2022. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry (retrieved 2026-09-03) | Downstream steel-processing boundary and usual cold-rolling process sequence. |
| `eu-2022-2110-ferrous-metals-bat` | standard | Commission Implementing Decision (EU) 2022/2110 establishing BAT conclusions for the ferrous metals processing industry. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110 (retrieved 2026-09-03) | Cold-rolling definition; directly associated pickling, annealing, oiling, combustion and treatment operations; chemistry-specific wastes, emissions, monitoring, and quality controls. |
