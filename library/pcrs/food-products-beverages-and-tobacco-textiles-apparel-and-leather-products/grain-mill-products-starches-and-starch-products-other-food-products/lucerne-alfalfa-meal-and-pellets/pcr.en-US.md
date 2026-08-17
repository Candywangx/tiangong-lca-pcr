---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.lucerne-alfalfa-meal-and-pellets
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Lucerne (alfalfa) meal and pellets

## 1. Scope and Applicability

This PCR applies to lucerne (alfalfa) meal and lucerne (alfalfa) pellets classified in CPC 23320 and released at the producing facility gate as animal-feed material. It covers separate foreground data packages for meal and pellet products. A data package shall identify one final form and shall not average meal and pellet routes.

The foreground boundary begins with receipt of a declared lucerne raw-material state and ends with net conforming meal or pellets placed in bulk storage or primary sales packaging. The package shall state whether the received material is fresh wilted chopped lucerne, field-dried lucerne, or purchased dehydrated lucerne; the exact artificial-drying technology and heat source, if used; the grinding and screen configuration; whether steam or liquid-water conditioning and pelleting occur; and the released product form. Distinct raw-material states or drying and pelleting technologies shall be reported as separate routes unless their foreground records remain separately traceable and are reported as separate results.

Covered operations are raw-material receiving, conditional artificial drying, grinding and sieving, conditional conditioning and pelleting, conditional pellet cooling and screening, packaging or bulk load-out, storage and release, equipment cleaning, dust and residue management, and conditional on-site treatment of process wastewater. Cultivation, harvesting, field wilting, field chopping, and inbound transport are upstream of the foreground boundary and require appropriate upstream datasets. Outbound distribution, animal feeding and digestion, retail, packaging end-of-life, and use-stage or manure-management effects are downstream and excluded.

This PCR excludes raw lucerne forage or hay sold without conversion to meal or pellets; mixed or compound feeds containing non-lucerne feed ingredients; pet food; cereal meals and pellets; lucerne leaf-protein concentrates; and bakery products. The remote Tiangong reference-flow `generalComment` text “234 Bakery products” is rejected as a metadata defect and supplies no scope, method, process, or inventory content to this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.lucerne-alfalfa-meal-and-pellets |
| classification_refs | CPC 3.0: 23320, exact |
| covered_products | Single-ingredient lucerne (alfalfa) meal and lucerne (alfalfa) pellets made from a declared lucerne raw-material state |
| excluded_products | Unprocessed forage or hay; mixed or compound feed; pet food; cereal meal or pellets; leaf-protein concentrate; bakery products |
| representative_product | Net saleable lucerne (alfalfa) meal or pellets at the producing facility gate |
| production_route | Declared receipt state; conditional artificial drying; grinding and sieving; meal release or conditional water/steam conditioning, pelleting, cooling, screening, and release |
| market_state | Bulk or packaged feed material, as sold, with declared final form, moisture, grade, packaging configuration, site, and production period |

The category identity is fixed by the exact CPC 23320 title and by the verified Tiangong Product flow, Mass property, and kilogram unit support. The conflicting remote `generalComment` is not used to interpret the category.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of saleable lucerne (alfalfa) meal or pellets with the declared feed-material specification |
| How much | 1 kg net conforming product as released at the producing facility gate |
| How well | Meets the declared final-form, moisture, particle-size or pellet-dimension, feed-grade, and quality-release specification |
| How long or cycle | One production lot or a declared representative production period with route-specific records |
| reference_flow_link | All foreground exchanges are normalized to the net mass of the declared meal or pellet product released from the same route and period |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product; packaging mass excluded |
| Reference product flow | Lucerne (alfalfa) meal and pellets `f984b084-e66e-4d11-8365-354ae0ad5a74` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | final_product_form; raw_alfalfa_state_at_receipt; drying_technology_or_none; dryer_heat_source_or_none; grinding_and_screen_specification; pelleting_route_or_none; conditioning_medium_or_none; binder_substance_and_mass_or_none; moisture_content_at_release; declared_feed_grade; bulk_or_packaged; packaging_configuration_or_none; production_site; production_period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. If a binder, cleaning chemical, water-treatment reagent, fuel, packaging component, waste, or emission not listed in this PCR is actually used or released, the producer shall add one new card naming that single exact substance or physical flow before the package can conform; a generic selector is not acceptable.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use verified net conforming product mass at release. Exclude sack, liner, film, and pallet mass. |
| `as_sold_moisture_basis` | Reference product and intermediate lucerne materials | Mass | kg | Report the reference product on an as-sold mass basis and separately record moisture content and test method; do not silently convert to dry matter. |
| `route_separated_normalization` | All inventory rows | Row-specific property | Row-specific unit | Normalize each exchange to the net output of the same raw-state, drying, grinding, final-form, and packaging route; do not average distinct technologies or meal and pellet routes. |
| `stage_energy_preservation` | Electricity, heat, steam, and fuels | Energy or mass as metered | kWh, MJ, or kg | Preserve stage-level meter or invoice units, conversion factors, lower or higher heating-value convention, and allocation basis before conversion to the reference kilogram. |
| `water_steam_separation` | Conditioning water, purchased steam, purchased hot water, and cleaning water | Mass or energy | kg or MJ | Record liquid water, steam, and hot water as separate exchanges; condensate or recycled water is recorded separately when it crosses a process boundary. |
| `internal_recycle_identity` | Recovered dust, coarse screenings, and pellet fines | Mass | kg | Measure each recovered fraction before return; an internal return is not a saleable co-product and shall not be counted twice as both waste and product. |
| `pollutant_load_calculation` | Air and water emissions | Mass | kg | Calculate pollutant mass from measured mass flow and concentration, or from a documented site-specific activity record and applicable factor; retain the measurement/factor identity and compartment. |
| `mass_balance_check` | Each process and complete foreground route | Mass | kg | Reconcile measured material input, product and internal-transfer output, moisture change, recovered material, waste, and releases for the declared period without forcing an unexplained residual to zero. |

No source example value in this PCR is a default amount, allowed interval, or substitute for foreground records.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Facility-gate receipt of fresh wilted chopped lucerne, field-dried lucerne, or purchased dehydrated lucerne, with state, moisture, origin, supplier, and lot identity recorded |
| starting_condition_role | Foreground entry point for a route-specific meal or pellet production data package |
| product_classification_scope | CPC 23320 lucerne (alfalfa) meal and pellets only |
| recursive_input_rule | Purchased lucerne meal or pellets that already meet CPC 23320 shall not be hidden inside the same foreground route; disclose the quantity and supplier dataset and model it as an upstream input or create a separately bounded toll-processing package |
| upstream_dataset_requirement | Use traceable upstream datasets for lucerne cultivation and field operations, purchased predried or dehydrated lucerne, fuels, utilities, exact additives, and packaging materials |
| disclosure | Declare received lucerne state, artificial-drying technology and heat source, grinding/screen settings, meal or pellet form, conditioning medium, every actual binder substance or none, internal recycles, bulk or package configuration, site, period, and all boundary exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | Product category | Include only the exact CPC 23320 product; reject any bakery interpretation and do not broaden the category to mixed feed preparations. | `un-cpc-3-2025` |
| `boundary_foreground_start` | Raw-material supply | Begin foreground collection at facility receipt; cultivation, harvest, field wilting/chopping, and inbound transport remain upstream but require disclosed background datasets. | `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279` |
| `boundary_route_lock` | Foreground route | Lock one received material state, artificial-drying technology or none, grinding/sieving configuration, pelleting route or none, and final form; report materially different routes separately. | `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `boundary_factory_operations` | Manufacturing | Include all on-site operations from receipt through release, including utilities, dust recovery, cleaning, wastes, direct emissions, and conditional on-site wastewater treatment. | `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `fefac-pefcr-feed-data-2021` |
| `boundary_downstream_exclusion` | Downstream stages | Exclude outbound distribution, animal feeding and digestion, manure management, retail, use, and packaging end-of-life from the foreground result and disclose the exclusions. | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `boundary_no_cutoff_by_label` | Inventory completeness | Do not omit an actual exchange because it lacks a Tiangong UUID or is small; retain one exact semantic flow, leave its UUID blank, and document the unresolved identity. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receiving` | Raw-material receiving and inspection | required | Always included; activate only the card matching each received lucerne state | Foreground material receipt and lot identity | Mass received by state and lot |
| `thermal_drying` | Artificial thermal drying and primary dust recovery | conditional | Include when the site artificially dries fresh, wilted, field-dried, or partly dried lucerne | Foreground moisture removal and dryer emissions | Mass of dried lucerne chops leaving the dryer system |
| `grinding_and_sieving` | Grinding, pneumatic transfer, and sieving | required | Always included for meal and pellet routes | Foreground particle-size reduction and separation | Mass of lucerne meal produced |
| `steam_conditioning_and_pelleting` | Conditioning and pelleting | conditional | Include only for a pellet route; add exact binder cards only for substances actually used | Foreground pellet formation | Mass of hot pellets leaving the pellet mill |
| `pellet_cooling_and_screening` | Pellet cooling and final screening | conditional | Include only when pellets are cooled or screened before release | Foreground pellet stabilization and fines separation | Mass of cooled screened pellets |
| `packaging_storage_and_release` | Packaging or bulk load-out, storage, and release | required | Always included; activate only actual packaging-component cards | Foreground final-product release | 1 kg net conforming meal or pellets |
| `cleaning_and_maintenance` | Equipment cleaning and filter maintenance | required | Always include dry-cleaning and maintenance records; wet-cleaning cards apply only when liquids are used | Foreground housekeeping and residue collection | Same route and production period as reference output |
| `onsite_wastewater_treatment` | On-site process-wastewater treatment | conditional | Include when alfalfa-process wastewater is treated on site before discharge or transfer | Foreground effluent treatment and releases | Volume of wastewater treated |

### Process: Artificial thermal drying and primary dust recovery (`thermal_drying`)

#### Inputs

##### Product flows

###### Drying-stage grid electricity (`drying_electricity`)

Record electricity used by the dryer feed system, drum or alternative dryer drives, fans, cyclones, controls, and product transfer assigned to the declared drying technology.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Drying-stage submeter record or documented equipment-time allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `fefac-pefcr-feed-data-2021`

###### Purchased steam for indirect drying (`drying_purchased_steam`)

Record purchased steam only when it supplies heat to the declared indirect or hybrid drying technology; keep it separate from steam used in pellet conditioning.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered steam energy using recorded mass, pressure, enthalpy, and condensate return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279`

###### Purchased hot water for indirect drying (`drying_purchased_hot_water`)

Record purchased hot water as its own heat carrier only when it crosses the drying-process boundary.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered hot-water mass flow multiplied by the documented inlet-to-return enthalpy difference
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279`

###### Natural gas used by the dryer (`drying_natural_gas`)

Record natural gas consumed by the declared dryer burner without combining it with any other fuel.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Metered gas volume converted with the supplier composition, pressure, temperature, and declared net-calorific-value convention
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### Diesel used by the dryer (`drying_diesel`)

Record diesel delivered to the dryer heat system only when this exact fuel is used; do not merge it with receiving-stage diesel.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Burner fuel meter, calibrated tank balance, or purchase-and-stock record assigned to the drying period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-pef-2021-2279`

###### Liquefied petroleum gas used by the dryer (`drying_lpg`)

Record liquefied petroleum gas only for a dryer burner using this fuel and retain its supplier composition.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Calibrated delivery or tank-mass record assigned to the declared dryer and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-pef-2021-2279`

###### Hard coal used by the dryer (`drying_hard_coal`)

Record hard coal only when the declared dryer is coal-fired; retain grade, moisture, ash, sulfur, and calorific-value records.

- Selected flow: Hard coal
- Flow property / unit: Mass / kg
- Amount rule: Weighed coal delivered from the dryer fuel store, corrected only with documented stock changes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### Wood chips used by the dryer (`drying_wood_chips`)

Record wood chips only when this exact biomass fuel supplies the dryer; retain species or source class, moisture, ash, and calorific-value records.

- Selected flow: Wood chips
- Flow property / unit: Mass / kg
- Amount rule: Weighed wood-chip consumption from delivery and stock records for the dryer period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### Recovered alfalfa-dryer exhaust heat (`drying_recovered_exhaust_heat`)

Record heat recovered from the alfalfa dryer exhaust and returned for predrying only when measured across the recovery boundary; do not treat avoided purchased heat as a negative input.

- Selected flow: Recovered alfalfa-dryer exhaust heat
- Flow property / unit: Energy / MJ
- Amount rule: Calculated recovered heat from measured gas or secondary-fluid flow, inlet and outlet state, and documented heat capacity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

No waste flow enters this process boundary.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide from dryer combustion (`drying_fossil_co2`)

Record fossil carbon dioxide released by the dryer burner from natural gas, diesel, LPG, or hard coal separately from biogenic carbon dioxide.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from measured fossil-fuel consumption, supplier carbon content or a documented applicable factor, and oxidation evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-pef-2021-2279`

###### Biogenic carbon dioxide from wood-chip combustion (`drying_biogenic_co2`)

Record carbon dioxide from wood-chip combustion separately and do not include fossil carbon from auxiliary fuels in this card.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from measured wood-chip consumption, documented dry-matter carbon content, and oxidation evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-pef-2021-2279`

###### Fossil methane from dryer combustion (`drying_fossil_methane`)

Record unburned fossil methane only for fossil-fuel dryer combustion and keep any biogenic wastewater methane in its own card.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or calculation from fuel-specific site activity and a documented applicable emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-pef-2021-2279`

###### Nitrous oxide from dryer combustion (`drying_nitrous_oxide`)

Record nitrous oxide from dryer fuel combustion as one chemical emission distinct from nitric oxide and nitrogen dioxide.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or calculation from measured fuel consumption and a documented fuel- and technology-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-pef-2021-2279`

###### Carbon monoxide from dryer combustion (`drying_carbon_monoxide`)

Record carbon monoxide released by the declared dryer burner from measured stack data or a documented fuel-specific calculation.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or calculation from measured fuel consumption and a documented applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Nitric oxide from dryer combustion (`drying_nitric_oxide`)

Record nitric oxide as its own measured or calculated chemical emission; do not use a combined nitrogen-oxides selector.

- Selected flow: Nitric oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured species-resolved stack load or calculation from measured fuel use and a documented species-resolved factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Nitrogen dioxide from dryer combustion (`drying_nitrogen_dioxide`)

Record nitrogen dioxide as its own measured or calculated chemical emission, separate from nitric oxide.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured species-resolved stack load or calculation from measured fuel use and a documented species-resolved factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Sulfur dioxide from dryer combustion (`drying_sulfur_dioxide`)

Record sulfur dioxide from sulfur-bearing dryer fuel using the measured fuel sulfur balance or stack measurement; do not use a combined sulfur-oxides selector.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or calculation from measured fuel mass, sulfur content, retention, and documented oxidation convention
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Fine dryer particulate to air (`drying_pm25`)

Record the post-control dryer particulate fraction below 2.5 µm from the declared dryer and dust-control configuration.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or size-resolved calculation from documented dryer tests and actual operating data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

###### Coarse dryer particulate to air (`drying_pm_coarse`)

Record the non-overlapping post-control dryer particulate fraction from 2.5 µm through 10 µm and do not duplicate the fine fraction.

- Selected flow: Particulate matter, diameter 2.5–10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured stack load or size-resolved calculation from documented dryer tests and actual operating data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

#### Outputs

##### Product flows

###### Dried lucerne chops (`drying_dried_alfalfa_chops`)

Record the dried chopped lucerne leaving the dryer and primary product-recovery system before grinding, with moisture measured for the same production lot.

- Selected flow: Dried lucerne (alfalfa) chops
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge mass reconciled with inlet mass, moisture removed, recovered dust, wastes, and releases
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`

###### Recovered lucerne dryer dust (`drying_recovered_alfalfa_dust`)

Record lucerne solids recovered by the primary cyclone or equivalent device when they are returned to production or transferred as a separately tracked material.

- Selected flow: Recovered lucerne (alfalfa) dryer dust
- Flow property / unit: Mass / kg
- Amount rule: Measured recovered dry mass by collection device and destination before any internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

##### Waste flows

###### Discarded lucerne dryer dust (`drying_discarded_alfalfa_dust`)

Record recovered alfalfa dryer dust sent to waste management rather than returned as product material.

- Selected flow: Discarded lucerne (alfalfa) dryer dust
- Flow property / unit: Mass / kg
- Amount rule: Measured dry mass removed from the dust-control system, with destination and moisture recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### Coal combustion ash (`drying_coal_ash`)

Record ash generated only by hard-coal combustion in the dryer and keep it separate from biomass ash.

- Selected flow: Coal combustion ash
- Flow property / unit: Mass / kg
- Amount rule: Measured ash removed from the coal-fired dryer furnace and air-pollution-control system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### Wood combustion ash (`drying_wood_ash`)

Record ash generated only by wood-chip combustion in the dryer and keep it separate from coal ash and product dust.

- Selected flow: Wood combustion ash
- Flow property / unit: Mass / kg
- Amount rule: Measured ash removed from the wood-fired dryer furnace and air-pollution-control system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried lucerne chops from the declared dryer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

##### Elementary flows

The dryer combustion and particulate releases are listed above under this output direction; no combined-emission card is used.

### Process: Grinding, pneumatic transfer, and sieving (`grinding_and_sieving`)

#### Inputs

##### Product flows

###### Grinding-stage grid electricity (`grinding_electricity`)

Record electricity used by the hammermill or declared mill, pneumatic transfer, meal cyclone, bag filter, and sieving equipment.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Grinding-stage submeter record or documented equipment-time allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg lucerne meal leaving grinding and sieving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `fefac-pefcr-feed-data-2021`

###### Compressed air for grinding transfer (`grinding_compressed_air`)

Record purchased or centrally generated compressed air only when its quantity is metered or calculated for pneumatic meal transfer or filter cleaning.

- Selected flow: Compressed air
- Flow property / unit: Volume / Nm3
- Amount rule: Metered standard volume or calculated volume from logged compressor output and grinding-stage demand
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg lucerne meal leaving grinding and sieving
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279`

##### Waste flows

No waste flow enters this process boundary.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Lucerne meal leaving grinding (`grinding_alfalfa_meal`)

Record meal after the declared grinding and sieving configuration before final meal release or pellet conditioning.

- Selected flow: Lucerne (alfalfa) meal
- Flow property / unit: Mass / kg
- Amount rule: Measured meal mass reconciled with dried lucerne input, coarse screenings, recovered dust, discarded dust, and moisture change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg lucerne meal leaving grinding and sieving
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-ap42-alfalfa-1996`

###### Coarse lucerne screenings (`grinding_coarse_screenings`)

Record the coarse lucerne fraction separated by the declared screen before any return to the mill or external transfer.

- Selected flow: Coarse lucerne (alfalfa) screenings
- Flow property / unit: Mass / kg
- Amount rule: Measured mass collected from the coarse screen outlet by destination and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg lucerne meal leaving grinding and sieving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### Recovered lucerne grinding dust (`grinding_recovered_dust`)

Record dust collected by the meal cyclone or bag filter when it is returned to the meal or pelleting route.

- Selected flow: Recovered lucerne (alfalfa) grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Measured recovered dry mass by collection device before internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg lucerne meal leaving grinding and sieving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

##### Waste flows

###### Discarded lucerne grinding dust (`grinding_discarded_dust`)

Record collected grinding dust removed from production for waste management, separately from dust returned as product material.

- Selected flow: Discarded lucerne (alfalfa) grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Measured dry mass removed from each dust collector with destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg lucerne meal leaving grinding and sieving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

##### Elementary flows

###### Fine grinding particulate to air (`grinding_pm25`)

Record the post-control grinding and meal-transfer particulate fraction below 2.5 µm.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured channelled and documented fugitive releases for grinding and sieving
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg lucerne meal leaving grinding and sieving
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

###### Coarse grinding particulate to air (`grinding_pm_coarse`)

Record the non-overlapping post-control grinding and meal-transfer particulate fraction from 2.5 µm through 10 µm.

- Selected flow: Particulate matter, diameter 2.5–10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured channelled and documented fugitive releases for grinding and sieving
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg lucerne meal leaving grinding and sieving
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

### Process: Raw-material receiving and inspection (`raw_material_receiving`)

#### Inputs

##### Product flows

###### Fresh wilted chopped lucerne received (`receiving_fresh_wilted_alfalfa`)

Use this card only for fresh or field-wilted lucerne delivered as wet chops; record cultivar or commercial grade, field-wilting condition, chopping state, origin, supplier lot, and measured receipt moisture.

- Selected flow: Fresh wilted lucerne (alfalfa), chopped
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass from calibrated receiving scales, separately by lot and moisture test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product from the same raw-state route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### Field-dried lucerne received (`receiving_field_dried_alfalfa`)

Use this card only for lucerne dried primarily in the field before facility receipt; keep it separate from fresh-wilted and artificially dehydrated material.

- Selected flow: Field-dried lucerne (alfalfa)
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass from calibrated receiving scales, separately by lot, field-drying declaration, and moisture test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product from the same raw-state route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Purchased dehydrated lucerne received (`receiving_dehydrated_alfalfa`)

Use this card for purchased artificially dehydrated lucerne that enters the foreground facility for grinding or pelleting; disclose the supplier drying technology and upstream dataset.

- Selected flow: Purchased dehydrated lucerne (alfalfa)
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass from calibrated receiving scales, separately by supplier lot, upstream drying declaration, and moisture test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product from the same purchased-dehydrated route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### Receiving-stage grid electricity (`receiving_electricity`)

Record only electricity used by unloading, conveying, inspection, sampling, and receiving controls before the material enters the next process.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Submetered receiving-stage consumption or calculated allocation from a documented equipment-time meter record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the same route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Receiving-stage diesel (`receiving_diesel`)

Record diesel crossing the foreground boundary for receiving-stage mobile equipment only; do not combine it with other fuels or inbound transport.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Fuel issue, tank balance, or equipment fuel-meter record attributable to receiving operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the same route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

No waste flow enters this process boundary.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

Accepted lucerne is transferred internally in its recorded receipt state; the boundary input cards above carry the purchased-material identity and quantity.

##### Waste flows

###### Rejected fresh lucerne (`receiving_rejected_fresh_alfalfa`)

Record fresh or wilted lucerne rejected at receiving because it does not meet the declared acceptance specification.

- Selected flow: Rejected fresh lucerne (alfalfa)
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected wet mass by lot, reason, destination, and moisture content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product from the same raw-state route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `eu-pef-2021-2279`

###### Rejected dried lucerne (`receiving_rejected_dried_alfalfa`)

Record field-dried or purchased dehydrated lucerne rejected at receiving, keeping the rejected dried material separate from fresh rejects.

- Selected flow: Rejected dried lucerne (alfalfa)
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected dry-material mass by lot, reason, destination, and moisture content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product from the same raw-state route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `eu-pef-2021-2279`

###### Soil removed during receiving (`receiving_removed_soil`)

Record soil separated from the received lucerne before drying or grinding; do not combine it with stones or plant rejects.

- Selected flow: Soil removed from received lucerne (alfalfa)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of separated soil by collection container and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the same route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `eu-pef-2021-2279`

###### Stones removed during receiving (`receiving_removed_stones`)

Record stones separated from received lucerne as one physical waste flow distinct from soil and plant rejects.

- Selected flow: Stones removed from received lucerne (alfalfa)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of separated stones by collection container and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the same route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Fine receiving dust to air (`receiving_pm25_to_air`)

Record the measured or calculated fine particulate release from unloading and conveying dried lucerne after documented dust recovery.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured exhaust or fugitive-dust data for the receiving stage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the same route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### Coarse receiving dust to air (`receiving_pm_coarse_to_air`)

Record the non-overlapping 2.5–10 µm particulate release from unloading and conveying dried lucerne after control; do not duplicate it in the fine fraction.

- Selected flow: Particulate matter, diameter 2.5–10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured exhaust or fugitive-dust data for the receiving stage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the same route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

### Process: Conditioning and pelleting (`steam_conditioning_and_pelleting`)

#### Inputs

##### Product flows

###### Lucerne meal supplied to the pellet mill (`pelleting_alfalfa_meal`)

Record only lucerne meal entering the declared pellet route and reconcile it to the grinding output and any stored meal inventory change.

- Selected flow: Lucerne (alfalfa) meal
- Flow property / unit: Mass / kg
- Amount rule: Measured pellet-mill feed mass by production lot and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg hot lucerne pellets leaving the pellet mill
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pelleting_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### Liquid conditioning water (`pelleting_conditioning_water`)

Record liquid water deliberately added in the pellet-conditioning chamber separately from steam condensate and cleaning water.

- Selected flow: Conditioning water
- Flow property / unit: Mass / kg
- Amount rule: Metered liquid-water mass added to the declared pellet lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg hot lucerne pellets leaving the pellet mill
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pelleting_records`
- Sources: `fao-feed-milling`; `eu-pef-2021-2279`

###### Purchased steam for pellet conditioning (`pelleting_purchased_steam`)

Record steam introduced to the pellet conditioner separately from drying steam and liquid conditioning water.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Calculated delivered steam energy from measured steam mass, pressure, temperature, and condensate condition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg hot lucerne pellets leaving the pellet mill
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pelleting_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### Pelleting-stage grid electricity (`pelleting_electricity`)

Record electricity used by the conditioner, feeders, pellet mill, cutting equipment, and local extraction assigned to the pellet-forming stage.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Pelleting-stage submeter record or documented equipment-time allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg hot lucerne pellets leaving the pellet mill
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pelleting_records`
- Sources: `fao-feed-milling`; `fefac-pefcr-feed-data-2021`

If a binder is actually added, insert a separate product-input card named for that exact substance and record its mass and legal feed identity. Do not use `binder`, `additive`, or a list of possible substances as the Selected flow; when no binder is used, declare `binder_substance_and_mass_or_none: none` in the data package.

##### Waste flows

No waste flow enters this process boundary.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Hot lucerne pellets (`pelleting_hot_alfalfa_pellets`)

Record pellets at pellet-mill discharge before cooling and final screening.

- Selected flow: Hot lucerne (alfalfa) pellets
- Flow property / unit: Mass / kg
- Amount rule: Measured pellet-mill discharge mass reconciled with meal, water, steam condensate, start-up reject, dust, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg hot lucerne pellets leaving the pellet mill
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pelleting_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

##### Waste flows

###### Pellet-mill start-up reject (`pelleting_startup_reject`)

Record lucerne material discharged during pellet-mill start-up or upset that is not returned to production.

- Selected flow: Lucerne (alfalfa) pellet-mill start-up reject
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by event, cause, moisture, and waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg hot lucerne pellets leaving the pellet mill
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pelleting_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Fine pelleting particulate to air (`pelleting_pm25`)

Record the post-control particulate fraction below 2.5 µm from pellet-mill feeding, extrusion, cutting, and transfer.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured channelled and documented fugitive releases for pelleting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg hot lucerne pellets leaving the pellet mill
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pelleting_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

###### Coarse pelleting particulate to air (`pelleting_pm_coarse`)

Record the non-overlapping post-control particulate fraction from 2.5 µm through 10 µm from pelleting operations.

- Selected flow: Particulate matter, diameter 2.5–10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured channelled and documented fugitive releases for pelleting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg hot lucerne pellets leaving the pellet mill
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pelleting_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

### Process: Pellet cooling and final screening (`pellet_cooling_and_screening`)

#### Inputs

##### Product flows

###### Hot pellets supplied to cooling (`cooling_hot_alfalfa_pellets`)

Record hot lucerne pellets entering the cooler and screen, reconciled to the pellet-mill discharge.

- Selected flow: Hot lucerne (alfalfa) pellets
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or reconciled pellet-mill output for the same lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cooled screened lucerne pellets
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### Cooling-stage grid electricity (`cooling_electricity`)

Record electricity used by cooler fans, conveyors, screens, cyclones, and local dust controls.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Cooling-stage submeter record or documented equipment-time allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg cooled screened lucerne pellets
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `fefac-pefcr-feed-data-2021`

##### Waste flows

No waste flow enters this process boundary.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Cooled screened lucerne pellets (`cooling_screened_alfalfa_pellets`)

Record pellets after the declared cooling and screen specification and before packaging or bulk storage.

- Selected flow: Cooled screened lucerne (alfalfa) pellets
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted pellet mass reconciled with hot pellets, recovered fines, discarded fines, dust, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cooled screened lucerne pellets
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### Recovered lucerne pellet fines (`cooling_recovered_pellet_fines`)

Record fines separated by the pellet screen before they are returned to the meal bin or pellet mill.

- Selected flow: Recovered lucerne (alfalfa) pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Measured fines mass by screen outlet and documented internal-return destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg cooled screened lucerne pellets
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

##### Waste flows

###### Discarded lucerne pellet fines (`cooling_discarded_pellet_fines`)

Record pellet fines sent to waste management instead of being returned to production or sold as feed material.

- Selected flow: Discarded lucerne (alfalfa) pellet fines
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded fines mass with destination and moisture recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg cooled screened lucerne pellets
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

##### Elementary flows

###### Fine pellet-cooling particulate to air (`cooling_pm25`)

Record the post-control particulate fraction below 2.5 µm from pellet cooling, screening, and transfer.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured channelled and documented fugitive releases for cooling and screening
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg cooled screened lucerne pellets
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

###### Coarse pellet-cooling particulate to air (`cooling_pm_coarse`)

Record the non-overlapping post-control particulate fraction from 2.5 µm through 10 µm from cooling and screening.

- Selected flow: Particulate matter, diameter 2.5–10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured channelled and documented fugitive releases for cooling and screening
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg cooled screened lucerne pellets
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

### Process: Packaging or bulk load-out, storage, and release (`packaging_storage_and_release`)

#### Inputs

##### Product flows

###### Lucerne meal supplied for release (`packaging_alfalfa_meal`)

Use this card only for a meal-form route and reconcile it to accepted meal from grinding after any storage change.

- Selected flow: Lucerne (alfalfa) meal
- Flow property / unit: Mass / kg
- Amount rule: Measured meal mass entering bulk load-out or packaging by lot and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `un-cpc-3-2025`; `eu-pef-2021-2279`

###### Lucerne pellets supplied for release (`packaging_alfalfa_pellets`)

Use this card only for a pellet-form route and reconcile it to accepted cooled screened pellets after any storage change.

- Selected flow: Cooled screened lucerne (alfalfa) pellets
- Flow property / unit: Mass / kg
- Amount rule: Measured pellet mass entering bulk load-out or packaging by lot and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `un-cpc-3-2025`; `eu-pef-2021-2279`

###### Packaging and storage grid electricity (`packaging_electricity`)

Record electricity for bagging or bulk load-out, conveyors, warehouse ventilation, and route-attributable storage over the declared period.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Submeter record or documented equipment-time and storage allocation for the declared product form
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Polypropylene woven sack (`packaging_polypropylene_sack`)

Record the mass of polypropylene woven sacks incorporated in the declared sales configuration; omit the card for a bulk route.

- Selected flow: Polypropylene woven sack
- Flow property / unit: Mass / kg
- Amount rule: Count of used sacks multiplied by verified empty-sack mass, reconciled with packaging inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Kraft paper sack (`packaging_kraft_paper_sack`)

Record kraft paper sacks as a separate packaging component only when they are used in the declared configuration.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: Count of used sacks multiplied by verified empty-sack mass, reconciled with packaging inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Low-density polyethylene sack liner (`packaging_ldpe_liner`)

Record an LDPE liner separately from the outer sack and stretch film when this exact liner is used.

- Selected flow: Low-density polyethylene sack liner
- Flow property / unit: Mass / kg
- Amount rule: Count of used liners multiplied by verified liner mass, reconciled with packaging inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Polyethylene stretch film (`packaging_polyethylene_stretch_film`)

Record stretch film used to secure released pallet loads, separately from sack liners and sacks.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured film roll consumption corrected for opening and closing stock for the declared product loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Wood pallet (`packaging_wood_pallet`)

Record wood pallet mass allocated to the declared released product, with reuse count and ownership boundary documented.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Pallet count multiplied by verified pallet mass and divided only by documented foreground reuse cycles assigned to released loads
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net palletized reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

Any additional primary packaging, closure, label, bulk-loading consumable, or pallet material actually used requires its own card with one exact material identity; do not place it under a collective packaging card.

##### Waste flows

No waste flow enters this process boundary.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### CPC 23320 reference product output (`reference_product_output`)

This is the sole UUID-bearing reference exchange and represents the declared meal or pellet form after conformity release.

- Selected flow: Lucerne (alfalfa) meal and pellets `f984b084-e66e-4d11-8365-354ae0ad5a74`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net conforming released product; packaging mass excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference product at the producing facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `un-cpc-3-2025`

##### Waste flows

###### Off-specification lucerne meal (`packaging_offspec_alfalfa_meal`)

Record meal rejected during storage, load-out, or release and not returned to production; keep it separate from pellet rejects.

- Selected flow: Off-specification lucerne (alfalfa) meal
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected meal mass by lot, reason, moisture, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-pef-2021-2279`

###### Off-specification lucerne pellets (`packaging_offspec_alfalfa_pellets`)

Record pellets rejected during storage, load-out, or release and not returned to production; keep them separate from meal rejects.

- Selected flow: Off-specification lucerne (alfalfa) pellets
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected pellet mass by lot, reason, moisture, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-pef-2021-2279`

###### Waste polypropylene sack (`packaging_waste_polypropylene`)

Record damaged or unused polypropylene woven sacks discarded on site, separate from LDPE liner and stretch-film waste.

- Selected flow: Waste polypropylene woven sack
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded polypropylene sack mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Waste kraft paper sack (`packaging_waste_kraft_paper`)

Record damaged or unused kraft paper sacks discarded on site as their own waste flow.

- Selected flow: Waste kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded kraft paper sack mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Waste LDPE liner (`packaging_waste_ldpe`)

Record discarded low-density polyethylene liners separately from other plastic packaging waste.

- Selected flow: Waste low-density polyethylene sack liner
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded LDPE liner mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Waste polyethylene stretch film (`packaging_waste_stretch_film`)

Record discarded polyethylene stretch film separately from sacks and liners.

- Selected flow: Waste polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded stretch-film mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### Waste wood pallet (`packaging_waste_wood`)

Record wood pallets discarded within the foreground ownership boundary after documented reuse, separately from other wood waste.

- Selected flow: Waste wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded pallet mass assigned to the declared route using documented pallet tracking
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

##### Elementary flows

###### Fine packaging and load-out particulate to air (`packaging_pm25`)

Record the post-control particulate fraction below 2.5 µm from bagging, bulk loading, and storage transfer.

- Selected flow: Particulate matter, diameter below 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured channelled and documented fugitive releases for packaging and load-out
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### Coarse packaging and load-out particulate to air (`packaging_pm_coarse`)

Record the non-overlapping post-control particulate fraction from 2.5 µm through 10 µm from bagging, bulk loading, and storage transfer.

- Selected flow: Particulate matter, diameter 2.5–10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant mass from measured channelled and documented fugitive releases for packaging and load-out
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

### Process: Equipment cleaning and filter maintenance (`cleaning_and_maintenance`)

#### Inputs

##### Product flows

###### Cleaning-stage grid electricity (`cleaning_electricity`)

Record electricity used by vacuum cleaning, local extraction, filter maintenance, and any wet-cleaning equipment attributable to the declared route.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Cleaning-stage submeter record or documented equipment-time allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the cleaned route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Compressed air for dry cleaning (`cleaning_compressed_air`)

Record compressed air used for dry cleaning only when its use is permitted and quantified; keep it separate from grinding pneumatic transfer.

- Selected flow: Compressed air
- Flow property / unit: Volume / Nm3
- Amount rule: Metered standard volume or calculated volume from logged compressor output and cleaning demand
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the cleaned route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Process water for wet cleaning (`cleaning_process_water`)

Record liquid water used to wash alfalfa-contact equipment only when wet cleaning occurs; keep it separate from conditioning water and hot water.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Metered wet-cleaning water mass by cleaning event and equipment train
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the cleaned route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

Every cleaning detergent, disinfectant, or maintenance chemical actually consumed requires its own card naming one exact substance and formulation basis. This PCR intentionally contains no unnamed chemical card.

##### Waste flows

No waste flow enters this process boundary.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

No saleable product leaves this support process.

##### Waste flows

###### Dry lucerne sweepings (`cleaning_dry_alfalfa_sweepings`)

Record dry lucerne material removed from floors and equipment by sweeping or vacuum before liquid cleaning.

- Selected flow: Dry lucerne (alfalfa) sweepings
- Flow property / unit: Mass / kg
- Amount rule: Measured dry mass by cleaning event and waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the cleaned route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Alfalfa equipment-wash wastewater (`cleaning_wash_wastewater`)

Record wastewater generated by washing alfalfa-contact equipment before any on-site treatment or off-site transfer.

- Selected flow: Lucerne (alfalfa) equipment-wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or tank-calibrated wastewater volume by cleaning event, with destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product from the cleaned route and period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Used baghouse filter fabric (`cleaning_used_filter_fabric`)

Record spent filter fabric removed from alfalfa dust-control equipment as one material-specific maintenance waste.

- Selected flow: Used baghouse filter fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured removed fabric mass assigned to the route by documented service period and dust-control equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product over the filter service period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

##### Elementary flows

No elementary output is prescribed beyond separately measured dust releases already assigned to their originating process.

### Process: On-site process-wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment grid electricity (`wwt_electricity`)

Record electricity used by screening, pumping, aeration, mixing, settling, filtration, or sludge handling for alfalfa-process wastewater.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Treatment-system submeter record or documented equipment-time allocation to alfalfa-process wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

Every coagulant, neutralizing agent, nutrient, antifoam, or other treatment chemical actually consumed requires its own product-input card naming one exact substance; no generic treatment-chemical card is permitted.

##### Waste flows

###### Equipment-wash wastewater supplied to treatment (`wwt_wash_wastewater`)

Record only the alfalfa equipment-wash wastewater entering the on-site treatment train and reconcile it to the cleaning-process output and buffer-storage change.

- Selected flow: Lucerne (alfalfa) equipment-wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Influent flow-meter or calibrated-tank volume for the declared treatment period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

No saleable product is prescribed for this treatment process.

##### Waste flows

###### Treated alfalfa-process effluent (`wwt_treated_effluent`)

Record the treated wastewater volume leaving the on-site treatment boundary before direct discharge, sewer transfer, or another declared destination.

- Selected flow: Treated lucerne (alfalfa) process effluent
- Flow property / unit: Volume / m3
- Amount rule: Effluent flow-meter volume reconciled with influent, recycled water, evaporation, sludge water, and storage change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Wastewater-treatment screenings (`wwt_screenings`)

Record gross alfalfa solids removed by screens or sieves before biological or physicochemical treatment.

- Selected flow: Lucerne (alfalfa) wastewater-treatment screenings
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass with moisture or dry-solids test and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Alfalfa wastewater-treatment sludge (`wwt_sludge`)

Record sludge removed from the treatment process with wet mass, dry solids, treatment route, and destination.

- Selected flow: Lucerne (alfalfa) wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet sludge mass multiplied by measured dry-solids fraction when a dry-mass result is required
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

##### Elementary flows

###### Chemical oxygen demand to water (`wwt_cod_to_water`)

Record the chemical oxygen demand load in the treated effluent as the official aggregate water-quality parameter, without combining it with BOD5 or suspended solids.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Effluent volume multiplied by paired flow-weighted COD concentration for the same discharge period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Five-day biochemical oxygen demand to water (`wwt_bod5_to_water`)

Record five-day biochemical oxygen demand as a separate effluent parameter with the test duration retained.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: Effluent volume multiplied by paired flow-weighted BOD5 concentration for the same discharge period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Total suspended solids to water (`wwt_tss_to_water`)

Record total suspended solids in the treated effluent separately from COD, BOD5, nitrogen, and phosphorus.

- Selected flow: Total suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Effluent volume multiplied by paired flow-weighted TSS concentration for the same discharge period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Total nitrogen to water (`wwt_total_nitrogen_to_water`)

Record total nitrogen in treated effluent as the official water-quality parameter and retain the analytical method; do not merge it with total phosphorus.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Effluent volume multiplied by paired flow-weighted total-nitrogen concentration for the same discharge period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Total phosphorus to water (`wwt_total_phosphorus_to_water`)

Record total phosphorus in treated effluent as its own official water-quality parameter.

- Selected flow: Total phosphorus, to water
- Flow property / unit: Mass / kg
- Amount rule: Effluent volume multiplied by paired flow-weighted total-phosphorus concentration for the same discharge period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Biogenic methane from wastewater treatment (`wwt_biogenic_methane_to_air`)

Record biogenic methane released by an anaerobic or mixed treatment stage, excluding captured methane transferred as biogas.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured uncaptured methane load or calculation from measured degradable load, treatment performance, capture, and oxidation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### Nitrous oxide from wastewater treatment (`wwt_nitrous_oxide_to_air`)

Record nitrous oxide released by a nitrogen-removal treatment stage as one chemical emission when that stage operates.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured emission load or calculation from measured nitrogen throughput and a documented treatment-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 m3 alfalfa-process wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_route_separation` | Distinct raw states and manufacturing technologies | Prefer subdivision. Keep fresh-wilted, field-dried, and purchased-dehydrated inputs; each dryer technology and fuel; meal and pellet forms; and bulk and packaged release routes separately metered or calculated. Do not allocate by averaging unlike routes. | `eu-pef-2021-2279`; `us-epa-ap42-alfalfa-1996` |
| `allocation_internal_recycle` | Recovered dryer or grinding dust, coarse screenings, and pellet fines | Measure each fraction before return. An internal return carries the originating process burden and is neither a co-product nor an avoided waste credit; prevent double counting at the sending and receiving processes. | `us-epa-ap42-alfalfa-1996`; `fao-feed-milling` |
| `allocation_saleable_lucerne_fraction` | A separately saleable lucerne screening, meal fraction, dust fraction, or pellet-fines product | First subdivide the process where records allow. If subdivision is not possible, use a documented physical relation that reflects the causal production process; use economic allocation only when no defensible physical relation exists, and disclose quantities, prices, period, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_energy_and_utilities` | Shared electricity, steam, hot water, fuel, compressed air, and treatment services | Allocate shared utilities using stage submeters; otherwise use documented equipment time, rated demand corrected by measured load, processed mass, or wastewater volume. Do not use revenue to allocate a shared utility. | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `allocation_waste_and_disposal` | Rejects, discarded dust, ash, packaging waste, screenings, sludge, and wastewater | Assign generation to the process and product route that caused it. Model treatment or disposal transparently; do not create an avoided-product credit in the foreground inventory unless a separately reviewed downstream substitution model is declared. | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `allocation_packaging_reuse` | Reusable wood pallets | Allocate pallet manufacture only over documented foreground reuse cycles within the declared ownership and return system; do not assume a reuse count. | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `raw_material_receiving` | Received lucerne by state; receiving utilities; rejects; removed soil and stones; receiving dust | Scale, meter, inspection, moisture, waste, and emission records | lot_id; received_state; supplier; origin; gross_mass; tare_mass; accepted_mass; rejected_mass; moisture; electricity; diesel; separated_soil; separated_stones; dust_measurement | Calibrated weighbridge or hopper scale, moisture method, utility records, waste-container weights, and stage emission measurement or calculation | kg; % moisture; kWh; kg fuel; kg emission | Each lot and each receiving operating shift | Representative contiguous production period, normally at least 12 months or all campaigns if seasonal | One identified production site | Sum state-specific accepted and rejected masses and utilities; normalize only to output from the linked route | Scale and meter calibration; lot tickets; moisture reports; fuel records; waste manifests; emission method and calculation workbook |
| `cp_drying_records` | `thermal_drying` | Dryer utilities, fuels, recovered heat, dried chops, recovered dust, ash, and individual air emissions | Stage meters, fuel stocks, mass and moisture balance, control-device records, and stack measurements | dryer_id; dryer_type; fuel_identity; fuel_quantity; fuel_quality; electricity; steam_state; hot_water_state; recovered_heat_states; inlet_mass_and_moisture; outlet_mass_and_moisture; dust_mass; ash_mass; stack_flow; pollutant_concentrations; operating_hours | Read calibrated meters and scales; retain fuel analyses and emission-test data; calculate heat and species-resolved loads using declared equations | kWh; MJ; kg; % moisture; Nm3; kg pollutant | Per batch or shift for activity data and at the legally or technically applicable emission-monitoring frequency | Complete declared drying campaign or representative annual period | One identified dryer system at one site | Aggregate only one dryer technology and fuel configuration; calculate mass, heat, and pollutant totals before normalization | Meter and scale calibration; supplier certificates; moisture tests; stack-test reports; control-device logs; calculation workbook |
| `cp_grinding_records` | `grinding_and_sieving` | Grinding utilities, meal, screenings, recovered and discarded dust, and individual particulate fractions | Stage meters, scales, screen records, dust-collector records, and emission measurements | mill_id; screen_specification; feed_mass; feed_moisture; electricity; compressed_air; meal_mass; screenings_mass; recovered_dust_mass; discarded_dust_mass; stack_flow; pm25; pm_coarse | Submeter and calibrated mass records linked to mill and screen settings; size-resolved emission measurement or documented calculation | kWh; Nm3; kg; % moisture; kg pollutant | Each production lot or shift | Complete declared route period | One identified grinding and sieving train | Reconcile inputs, internal returns, meal, screenings, discarded dust, and releases before normalization | Meter and scale calibration; screen specification; filter and cyclone logs; emission reports; mass-balance workbook |
| `cp_pelleting_records` | `steam_conditioning_and_pelleting` | Meal, exact binder cards if any, conditioning water, steam, electricity, hot pellets, reject, and particulate | Batch formulation, meters, scales, pellet-mill operating and emission records | lot_id; meal_mass_and_moisture; binder_substance_and_mass_or_none; water_mass; steam_mass_pressure_temperature; electricity; hot_pellet_mass_and_moisture; reject_mass; stack_flow; pm25; pm_coarse | Link product-specific formulation and mill settings to calibrated feed, water, steam, power, output, reject, and emission records | kg; % moisture; MJ; kWh; kg pollutant | Each pellet lot or shift | Complete declared pellet route period | One identified conditioner and pellet mill | Keep every exact binder separate; reconcile meal, added water, steam condensate, product, reject, dust, and inventory change | Formulation and legal identity; meter and scale calibration; pellet-mill logs; release tests; emission reports |
| `cp_cooling_records` | `pellet_cooling_and_screening` | Hot pellets, cooling electricity, accepted pellets, recovered and discarded fines, and particulate | Stage meters, scales, screen and cooler records, and emission measurements | lot_id; cooler_id; screen_specification; hot_pellet_mass; electricity; accepted_pellet_mass; recovered_fines_mass; discarded_fines_mass; inlet_and_outlet_temperature; moisture; stack_flow; pm25; pm_coarse | Calibrated mass and power measurements linked to cooler and screen settings, with size-resolved release measurement or calculation | kg; kWh; °C; % moisture; kg pollutant | Each pellet lot or shift | Complete declared pellet route period | One identified cooler and screen train | Reconcile hot pellets, accepted pellets, internal fines, discarded fines, dust, and inventory change before normalization | Meter and scale calibration; screen specification; cooler logs; moisture tests; emission reports |
| `cp_packaging_release_records` | `packaging_storage_and_release` | Meal or pellets, electricity, each packaging component, net reference output, off-spec product, packaging waste, and load-out dust | Packaging issue, scale, warehouse, release, waste, and emission records | final_form; lot_id; product_input_mass; moisture; grade; packaging_component_identity_and_mass; pallet_tracking; electricity; net_released_mass; offspec_mass; each_packaging_waste_mass; stack_flow; pm25; pm_coarse | Calibrated product scales, packaging stock reconciliation, pallet records, quality release, warehouse meters, waste weights, and emission measurement or calculation | kg; kWh; % moisture; kg pollutant | Each released lot and monthly inventory reconciliation | Complete declared release period | One identified site and packaging or bulk line | Keep meal and pellet routes and each packaging material separate; use net released mass as denominator | Scale and meter calibration; packaging specifications and invoices; stock records; quality certificates; waste manifests; emission reports |
| `cp_cleaning_records` | `cleaning_and_maintenance` | Electricity, compressed air, wet-cleaning water, exact chemicals if any, sweepings, wash wastewater, and filter fabric | Cleaning event, utility, chemical issue, waste, wastewater, and maintenance records | event_id; equipment_train; dry_or_wet_method; electricity; compressed_air; water_mass; exact_chemical_identity_and_mass; sweepings_mass; wastewater_volume; used_filter_mass; destination | Event-level log linked to calibrated utility meters, material issues, waste weights, wastewater meters or tanks, and maintenance work orders | kWh; Nm3; kg; m3 | Each cleaning or maintenance event | Same period as linked production routes | One identified site and equipment train | Assign each event to the cleaned route by equipment time or processed mass and keep each chemical and waste separate | Cleaning logs; meter calibration; safety and product specifications; chemical issue records; waste manifests; maintenance orders |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | Wastewater, electricity, exact reagents if any, effluent, screenings, sludge, five water parameters, methane, and nitrous oxide | Flow, laboratory, treatment-operation, chemical, waste, and gas records | influent_volume; effluent_volume; recycle_and_storage; electricity; exact_reagent_identity_and_mass; screenings_mass_and_solids; sludge_mass_and_solids; cod; bod5; tss; total_nitrogen; total_phosphorus; methane; nitrous_oxide; sampling_times | Calibrated flow and power meters, representative paired samples, accredited or documented analytical methods, waste weights, and gas measurement or calculation | m3; kWh; kg; mg/L; kg pollutant | Continuous or daily flow totals; sampling at applicable permit or BAT frequency | Complete declared treatment and discharge period | One identified on-site treatment train | Use flow-weighted pollutant loads; reconcile water balance and assign shared treatment by actual influent volume and pollutant load | Meter calibration; chain of custody; laboratory reports; treatment logs; reagent records; waste manifests; emissions calculation workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground exchanges | Normalized amount = route-period exchange quantity divided by net conforming reference-product mass released from the same route and period. | route-period exchange quantity; net released mass | Exchange per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_net_received_material` | Received lucerne | Accepted received mass = gross vehicle or container mass minus tare minus separately weighed rejected material; preserve state and moisture by lot. | gross mass; tare; rejected mass; received state; moisture | Accepted lucerne mass by exact state | `eu-pef-2021-2279` |
| `calc_drying_water_balance` | Thermal drying | Water removed = inlet wet mass × inlet moisture fraction minus outlet mass × outlet moisture fraction, with recovered and discarded solids reconciled separately. | inlet mass and moisture; outlet mass and moisture; dust; ash; inventory change | Water removed and dryer material-balance residual | `us-epa-ap42-alfalfa-1996` |
| `calc_delivered_heat` | Steam, hot water, and recovered heat | Heat = measured mass or volume flow multiplied by the documented inlet-to-outlet specific-enthalpy difference; report steam, hot water, and recovered heat separately. | flow; pressure; temperature; return state; fluid properties | MJ of one named heat carrier | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |
| `calc_shared_stage_electricity` | Stage electricity without a dedicated submeter | Stage electricity = site-meter electricity multiplied by the documented ratio of route equipment measured load-hours to total included equipment load-hours; disclose uncertainty. | site electricity; equipment load; operating time | kWh assigned to one process and route | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `calc_combustion_species` | Each dryer combustion emission | Species mass = measured fuel quantity multiplied by the documented fuel- and technology-specific species factor, adjusted only for measured control and oxidation parameters; use stack measurement instead when representative. | exact fuel; quantity; quality; species factor; control; operating state | kg of one named chemical or particulate fraction to air | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `calc_particulate_load` | Each process particulate fraction | Pollutant load = flow-weighted concentration multiplied by dry or wet exhaust volume on the same reference condition; size fractions shall be non-overlapping. | exhaust flow; concentration; duration; reference condition; size fraction | kg of one particulate fraction to air | `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019` |
| `calc_packaging_mass` | Each packaging component | Component mass = verified unit mass multiplied by units consumed, corrected with opening and closing stock and documented pallet reuse where applicable. | unit mass; count; opening stock; receipts; closing stock; reuse cycles | kg of one named packaging material | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `calc_effluent_pollutant_load` | COD, BOD5, TSS, total nitrogen, or total phosphorus | Pollutant load = paired flow-weighted effluent concentration multiplied by discharged effluent volume with unit conversion documented. | effluent volume; one pollutant concentration; sample coverage | kg of one named water parameter to water | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `calc_route_mass_balance` | Each process and complete route | Residual = measured inputs minus measured products, internal transfers, wastes, releases, measured inventory change, and documented moisture change; investigate rather than force-close material residuals. | all measured mass terms; moisture; inventory change | Disclosed mass-balance residual and reconciliation result | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Confirm final form, single-lucerne identity, CPC 23320 scope, moisture, declared grade, packaging state, site, and period; retain the bakery-comment rejection in the audit trail. | Product specification, release certificate, classification check, and reference-flow verification record |
| `dq_route_identity` | All foreground processes | Record raw-material state, dryer technology and heat source, grinding/screen settings, pelleting and conditioning configuration, binder identity or none, cooler/screen settings, and packaging configuration without averaging unlike routes. | Route diagram, equipment list, lot genealogy, formulation record, and process logs |
| `dq_measurement` | Meters, scales, and laboratory data | Use calibrated instruments and documented methods appropriate to the measured quantity; retain calibration validity, detection limits, sampling conditions, and missing-data treatment. | Calibration certificates, laboratory reports, sampling plans, and instrument logs |
| `dq_temporal` | Foreground activity data | Cover a representative production period, normally at least 12 consecutive months or every campaign in a seasonal year; disclose shutdowns, abnormal operation, and incomplete coverage. | Dated production, utility, maintenance, waste, and release records |
| `dq_completeness` | Inventory | Include all known product, waste, and elementary exchanges, with each electricity, heat carrier, fuel, chemical, packaging component, waste, water parameter, and air emission in its own card. | Inventory reconciliation, supplier and utility records, emission registers, waste manifests, and unresolved-UUID register |
| `dq_mass_balance` | Material processes | Report process and route mass-balance residuals and investigate material discrepancies using moisture, dust recovery, internal recycle, reject, and storage records. | Signed mass-balance workbook and corrective-action note for unexplained residuals |
| `dq_emissions` | Air and water releases | Match emission measurements or factors to the actual technology, fuel, control device, compartment, operating state, and period; do not report overlapping particulate fractions or combine chemical species. | Stack or wastewater reports, permit records, factor source, control logs, and calculation workbook |
| `dq_verifiability` | Published package | Preserve the product-specific BoM, company-specific manufacturing activity data, calculation files, secondary-dataset identities, allocation decisions, data-quality assessment, and reviewer access to underlying records. | PEF-style data inventory, source register, model archive, and verification statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require UUID `f984b084-e66e-4d11-8365-354ae0ad5a74`, Product flow type, exact CPC 23320, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. Reject the conflicting remote bakery `generalComment`. | `un-cpc-3-2025` |
| `validate_reference_amount` | Reference output | Require exactly 1 kg net conforming as-sold meal or pellets and exclude all packaging mass. | `un-cpc-3-2025`; `eu-fdm-bat-2019` |
| `validate_route_lock` | Data package identity | Fail when final form, received lucerne state, drying technology and heat source or none, grinding/screen configuration, pelleting and conditioning route or none, binder identity or none, release moisture, packaging, site, or period is missing; fail when unlike routes are averaged. | `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `validate_process_coverage` | Process map | Require receiving, grinding/sieving, packaging or bulk release, and cleaning; require drying, pelleting, cooling/screening, and on-site wastewater treatment exactly when their inclusion conditions apply. | `us-epa-ap42-alfalfa-1996`; `fao-feed-milling`; `eu-fdm-bat-2019` |
| `validate_atomic_selected_flow` | Inventory cards | Require every Selected flow to be one exact exchange. Reject collective or selector labels for feed, materials, energy, fuels, packaging, chemicals, additives, by-products, wastes, pollutants, or emissions. | `eu-pef-2021-2279` |
| `validate_unlisted_actual_flow` | Actual binders, chemicals, fuels, packaging, wastes, and emissions | If an actual legal flow is not listed, require a newly authored exact card with its own row_id, property/unit, rule, protocol, sources, and unresolved UUID entry; fail any generic placeholder. | `eu-pef-2021-2279` |
| `validate_uuid_policy` | Tiangong references | Allow only the verified reference product, Mass property, and unit-group UUIDs in this candidate. Require every other UUID cell to remain blank until exact hybrid search and direct public state100 read both verify the same semantic flow. |  |
| `validate_uuid_closure` | Manifest review metadata | Require every inventory card without a UUID, except the UUID-bearing reference output, to have exactly one matching unresolved entry by row_id; reject missing, duplicate, or stale entries. |  |
| `validate_amount_provenance` | Non-reference inventory quantities | Require `foreground_record` or `calculated_value` tied to a collection protocol and calculation rule where applicable; reject fabricated defaults, unsupported intervals, and undocumented estimates. | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `validate_material_balance` | Each route | Require reconciled input, output, moisture, internal recycle, waste, emission, and inventory-change terms and a disclosed investigated residual. | `eu-pef-2021-2279` |
| `validate_emission_separation` | Direct emissions | Require separate chemical cards for fossil CO2, biogenic CO2, fossil methane, nitrous oxide, carbon monoxide, nitric oxide, nitrogen dioxide, and sulfur dioxide when present; require non-overlapping particulate-size cards and separate COD, BOD5, TSS, total nitrogen, and total phosphorus loads. | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `validate_data_quality` | Package evidence | Require calibration, product-specific composition, site activity data, source and factor identity, allocation records, route representativeness, quality assessment, and evidence available for review. | `eu-pef-2021-2279`; `fefac-pefcr-feed-data-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Candidate company-specific foreground production dataset that may become a `secondary_dataset` or `background_dataset` after methodology and data review |
| downstream_use | Route-specific modelling of lucerne (alfalfa) meal or pellet supply at the producing facility gate |
| allowed_use | Use only for the declared raw-material state, artificial-drying technology and fuel or no-drying route, grinding/screen configuration, meal or pellet form, conditioning and binder state, packaging, geography, site technology, and production period |
| excluded_use | Mixed feed, pet food, other forage species, unprocessed hay, leaf-protein concentrate, bakery products, a different dryer or fuel mix, combined meal/pellet average, animal feeding or digestion, manure management, distribution, or packaging end-of-life without additional modelling |
| required_metadata | PCR id and candidate status; exact reference UUID and unit support; CPC 23320; final form; raw-material state; drying technology and heat source; grinding and screen settings; pelleting and conditioning route; exact binder or none; moisture and grade; bulk or each packaging component; site and period; process inclusion; upstream dataset identities; allocation; unresolved UUIDs; exclusions |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; sampling and analytical methods; route and technology representativeness; mass and water balances; internal recycle; direct emissions; wastewater; allocation; missing data; uncertainty; unresolved identities; source versions; verification status |
| update_trigger | Change in received lucerne state or supplier mix, dryer technology or fuel, grinding/screen specification, pelleting/conditioning or binder, cooler/screen, packaging configuration, product moisture or grade, emission control, wastewater treatment, allocation, background datasets, reference UUID status, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0, structure and explanatory notes*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact CPC 23320 identity and separation from CPC 2331 feed preparations and division 234 bakery products |
| `us-epa-ap42-alfalfa-1996` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency, *AP-42, Section 9.9.4: Alfalfa Dehydrating*, September 1996. https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-4.pdf | Alfalfa receipt state, direct-fired rotary drying, cyclone recovery, hammermilling, steam conditioning, pelleting, cooling, screening, storage, and particulate-source structure; no AP-42 example factor is adopted as a default amount |
| `eu-jrc-fdm-bref-2019` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Food, Drink and Milk Industries*, JRC118627, EUR 29978 EN, 2019, DOI 10.2760/243911. https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | FDM and animal-feed process scope, company operations, utility, cleaning, wastewater, waste-gas, monitoring, and environmental-management structure; no sector value is copied as a default |
| `eu-fdm-bat-2019` | Standard (`standard`) | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | Green-fodder predrying and heat recovery; grinding and pellet-cooling dust; energy, water, dry cleaning, treatment, COD, BOD, TSS, nitrogen, phosphorus, and monitoring structure; BAT levels are not PCR default quantities |
| `fao-feed-milling` | Handbook (`handbook`) | Food and Agriculture Organization of the United Nations, *Feed Milling Processes*, Chapter 18, Section 4, pelleting, cooling, and screening. https://www.fao.org/4/x5738e/x5738e0j.htm | Liquid-water or steam conditioning, die pelleting, cooler operation, screening, and pellet-fines return; example operating values are not adopted as defaults |
| `fefac-pefcr-feed-data-2021` | Official guidance (`official_guidance`) | European Feed Manufacturers’ Federation, *Key elements in data collection for PEFCR Feed*, 2021. https://fefac.eu/wp-content/uploads/2021/10/SR_Factsheet-key-elements-data-collection.pdf | Exact feed-ingredient bill of materials and company primary data for manufacturing energy, water, packaging, origin, and downstream boundary |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated English text. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific BoM, company-specific manufacturing data, complete inputs and outputs, allocation, reference-flow normalization, data quality, transparency, and verification |
