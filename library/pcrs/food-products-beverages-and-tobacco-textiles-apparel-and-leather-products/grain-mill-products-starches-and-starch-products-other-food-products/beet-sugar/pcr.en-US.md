---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.beet-sugar
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Beet sugar

## 1. Scope and Applicability

This PCR covers factory-gate manufacture of marketable sugar from sugar beet: receipt and cleaning, slicing, countercurrent diffusion, juice liming/carbonatation and filtration, evaporation, crystallisation, centrifugation, finishing, and applicable packaging. Beet-pulp handling, on-site energy conversion and wastewater treatment are included when performed inside the reporting boundary.

Sugar-beet cultivation and inbound transport, production of purchased materials and energy, downstream distribution, use and end-of-life are linked or excluded according to the declared study boundary. Cane sugar, refining whose principal feed is purchased raw sugar, syrup, molasses and beet pulp as reference products are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.beet-sugar` |
| classification_refs | CPC 3.0: 23512 Beet sugar |
| covered_products | Marketable sugar whose sucrose is extracted from sugar beet |
| excluded_products | Cane sugar; purchased-raw-sugar refining; syrup, molasses, beet pulp or carbonatation lime as reference products |
| representative_product | Beet-derived crystalline sugar, production mix at plant |
| production_route | Reception and cleaning; slicing and diffusion; purification; evaporation and crystallisation; finishing; applicable pulp, energy, treatment and packaging operations |
| market_state | Net conforming beet sugar at factory gate, bulk or with separately declared packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of marketable beet sugar at the producing factory gate |
| How much | 1 kg net conforming beet sugar, excluding packaging mass |
| How well | Declared grade, sucrose-content basis, moisture, physical form and packaging status |
| How long or cycle | One released lot or declared campaign-average production mix |
| reference_flow_link | `reference_beet_sugar` in `sugar_finishing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Beet sugar `f6141c1d-e50a-4f80-9125-cc7eb82eb51a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | beet feedstock origin; route; grade; sucrose and moisture basis; physical form; bulk or packaged state; site/geography; campaign; allocation; co-product states and destinations |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net conforming sugar mass and exclude all packaging. |
| `wet_dry_basis` | beet, pulp, molasses, lime and sludge | Mass | kg | Record wet mass and dry matter separately. |
| `sucrose_basis` | beet, juices, molasses and sugar | Mass fraction | kg/kg | Declare analytical method, sampling point and wet/dry basis. |
| `carrier_specific_energy` | electricity, steam, hot water and each fuel | Energy | kWh or MJ | Meter each carrier separately and prevent double counting fuel input with generated energy. |
| `water_balance` | external, embedded, recovered, evaporated and discharged water | Mass or volume | kg or m3 | Keep external withdrawal, internal loops and discharge separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | accepted sugar beet at the factory gate |
| starting_condition_role | foreground manufacturing gate |
| product_classification_scope | CPC 3.0 code 23512 |
| recursive_input_rule | Re-entering beet sugar or intermediates remain visible product inputs linked to their source dataset. |
| upstream_dataset_requirement | Link beet, each purchased energy carrier, each chemical, water and each packaging material to specific upstream datasets. |
| disclosure | Declare campaign, technology, internal loops, pulp route, energy system, treatment, packaging, co-products, allocation and exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate_scope` | foreground manufacture | Include all required and applicable conditional factory operations and directly controlled utilities, wastes and emissions. | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `sb_atomic_exchanges` | inventory | Keep every material, chemical, electricity, steam, hot water, fuel, refrigerant, package, waste and emission as its own exchange. | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `sb_internal_recycling` | internal water, condensate, juice, sugar and energy | Represent each internal transfer once and prevent an equivalent external input or credit. | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974` |
| `sb_conditional_routes` | pulp, energy, chemicals, refrigeration and packaging | Include a conditional atomic card only when its exact technology or material is present and document non-applicability otherwise. | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `sb_upstream_downstream` | linked life-cycle stages | Link purchased inputs upstream and exclude distribution, use and end-of-life from this factory-gate dataset. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `beet_reception_cleaning` | Sugar beet reception, fluming, washing, and tare removal | `required` | Always for delivered sugar beet | `foreground_process` | `cleaned_sugar_beets` |
| `slicing_diffusion` | Beet slicing and countercurrent diffusion | `required` | Always | `foreground_process` | `raw_diffusion_juice` |
| `juice_purification` | Juice liming, carbonatation, clarification, and filtration | `required` | Always; conditional reagent cards apply only to the actual route | `foreground_process` | `purified_thin_juice` |
| `evaporation_crystallisation` | Juice evaporation, vacuum crystallisation, and centrifugation | `required` | Always | `foreground_process` | `sugar_crystals` |
| `sugar_finishing` | Sugar drying, cooling, storage, quality release, and packaging | `required` | Always; packaging cards apply only to packaged reference product | `foreground_process` | `reference_beet_sugar` |
| `pulp_handling` | Beet-pulp pressing, drying, and co-product preparation | `conditional` | Include operations performed within the site boundary | `foreground_process` | `pressed_beet_pulp` |
| `onsite_energy_supply` | On-site steam, electricity, and hot-water generation | `conditional` | Include when energy carriers are converted on site | `foreground_process` | `onsite_steam_output` |
| `wastewater_treatment` | Wastewater collection, treatment, discharge, and residual management | `required` | Include on-site treatment; otherwise model the off-site hand-off | `foreground_process` | `treated_process_water` |

### Process: Sugar beet reception, fluming, washing, and tare removal (`beet_reception_cleaning`)

#### Inputs

##### Product flows

###### Sugar beet (`sugar_beets_received`)

Sugar beet crosses the sugar beet reception, fluming, washing, and tare removal boundary as one separately quantified product flow. Record gross and net mass, tare, sucrose, moisture, origin and receiving time.

- Selected flow: Sugar beet
- Flow property / unit: Mass / kg
- Amount rule: Net accepted beet mass after the declared weighbridge and tare procedure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`
- Range: Beet-input yield QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 6
  - Upper: 8
  - Unit: kg accepted sugar beet
  - Basis: per 1 kg net conforming beet sugar
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ec-jrc-fdm-bref-2019`

###### Process water (`reception_makeup_water`)

Process water crosses the sugar beet reception, fluming, washing, and tare removal boundary as one separately quantified product flow. Exclude recirculated flume and wash water from this external input.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered external make-up water allocated to reception and cleaning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Electricity, facility supply (`reception_electricity`)

Electricity, facility supply crosses the sugar beet reception, fluming, washing, and tare removal boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or a documented causal share of the reconciled facility meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`


##### Waste flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


#### Outputs

##### Product flows

###### Cleaned sugar beet (`cleaned_sugar_beets`)

Cleaned sugar beet crosses the sugar beet reception, fluming, washing, and tare removal boundary as one separately quantified product flow. Transfer this intermediate to slicing without creating an external co-product.

- Selected flow: Cleaned sugar beet
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or accepted beet minus separately quantified tare and losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `us-epa-beet-sugar-1974`


##### Waste flows

###### Soil from sugar beet cleaning (`beet_soil_waste`)

Soil from sugar beet cleaning crosses the sugar beet reception, fluming, washing, and tare removal boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Soil from sugar beet cleaning
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched soil mass by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Stones from sugar beet cleaning (`beet_stone_waste`)

Stones from sugar beet cleaning crosses the sugar beet reception, fluming, washing, and tare removal boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Stones from sugar beet cleaning
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched stone mass by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `us-epa-beet-sugar-1974`

###### Weeds from sugar beet cleaning (`beet_weed_waste`)

Weeds from sugar beet cleaning cross the sugar beet reception, fluming, washing, and tare removal boundary as one separately quantified waste flow. Keep this plant-tare identity, quantity and destination separate from beet tops and all other tare.

- Selected flow: Weeds from sugar beet cleaning
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched weed mass by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `us-epa-beet-sugar-1974`

###### Beet tops from sugar beet cleaning (`beet_top_waste`)

Beet tops from sugar beet cleaning cross the sugar beet reception, fluming, washing, and tare removal boundary as one separately quantified waste flow. Keep this plant-tare identity, quantity and destination separate from weeds and all other tare.

- Selected flow: Beet tops from sugar beet cleaning
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched beet-top mass by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `us-epa-beet-sugar-1974`

###### Sugar-beet cleaning wastewater (`cleaning_wastewater`)

Sugar-beet cleaning wastewater crosses the sugar beet reception, fluming, washing, and tare removal boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Sugar-beet cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered net transfer volume to treatment or off-site hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


### Process: Beet slicing and countercurrent diffusion (`slicing_diffusion`)

#### Inputs

##### Product flows

###### Cleaned sugar beet (`diffusion_beet_input`)

Cleaned sugar beet crosses the beet slicing and countercurrent diffusion boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Cleaned sugar beet
- Flow property / unit: Mass / kg
- Amount rule: Measured internal transfer from reception and cleaning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `us-epa-beet-sugar-1974`

###### Process water (`diffusion_fresh_water`)

Process water crosses the beet slicing and countercurrent diffusion boundary as one separately quantified product flow. Do not combine with recovered condensate or pulp-press water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered external water added to the diffuser.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Recovered process condensate (`diffusion_recovered_condensate`)

Recovered process condensate crosses the beet slicing and countercurrent diffusion boundary as one separately quantified product flow. Record once as an internal transfer and prevent an equivalent external-water input.

- Selected flow: Recovered process condensate
- Flow property / unit: Mass / kg
- Amount rule: Metered internal condensate supplied to diffusion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Beet-pulp press water (`diffusion_pulp_press_water`)

Beet-pulp press water crosses the beet slicing and countercurrent diffusion boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Beet-pulp press water
- Flow property / unit: Mass / kg
- Amount rule: Metered internal pulp-press water returned to diffusion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `us-epa-beet-sugar-1974`

###### Steam (`diffusion_steam`)

Steam crosses the beet slicing and countercurrent diffusion boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam enthalpy supplied to the diffuser.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Electricity, facility supply (`diffusion_electricity`)

Electricity, facility supply crosses the beet slicing and countercurrent diffusion boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for slicers, conveyors, pumps and diffuser drives.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`


##### Waste flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


#### Outputs

##### Product flows

###### Raw sugar-beet diffusion juice (`raw_diffusion_juice`)

Raw sugar-beet diffusion juice crosses the beet slicing and countercurrent diffusion boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Raw sugar-beet diffusion juice
- Flow property / unit: Mass / kg
- Amount rule: Measured or balanced juice mass with sucrose and dry-matter analyses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Wet beet pulp (`wet_beet_pulp`)

Wet beet pulp crosses the beet slicing and countercurrent diffusion boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Wet beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Measured wet pulp mass and dry matter at the diffuser outlet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`


##### Waste flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


### Process: Juice liming, carbonatation, clarification, and filtration (`juice_purification`)

#### Inputs

##### Product flows

###### Raw sugar-beet diffusion juice (`purification_raw_juice`)

Raw sugar-beet diffusion juice crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Raw sugar-beet diffusion juice
- Flow property / unit: Mass / kg
- Amount rule: Measured internal transfer from diffusion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `us-epa-beet-sugar-1974`

###### Calcium oxide (`purification_quicklime`)

Calcium oxide crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. If limestone is calcined on site, model limestone and kiln operation in a separate applicable process rather than substituting its mass here.

- Selected flow: Calcium oxide
- Flow property / unit: Mass / kg
- Amount rule: Stock-adjusted mass of calcium oxide used for liming.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Carbon dioxide (`purification_carbon_dioxide`)

Carbon dioxide crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: Metered purchased or on-site-generated carbon dioxide entering carbonatation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Sulfur dioxide (`purification_sulfur_dioxide`)

Sulfur dioxide crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. Conditional: record only when the plant sulfites purified juice.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Metered sulfur dioxide entering sulfitation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `us-epa-beet-sugar-1974`

###### Diatomaceous earth filter aid (`purification_diatomaceous_earth`)

Diatomaceous earth filter aid crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. Conditional: record only when this specific filter aid is used.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Stock-adjusted mass dosed to filtration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-fdm-bref-2019`

###### Process water (`purification_process_water`)

Process water crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered external water used for slaking, filter washing or other purification duties.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Steam (`purification_steam`)

Steam crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam enthalpy supplied to juice heating and purification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Electricity, facility supply (`purification_electricity`)

Electricity, facility supply crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for pumps, filters and clarification equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`


##### Waste flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


#### Outputs

##### Product flows

###### Purified sugar-beet thin juice (`purified_thin_juice`)

Purified sugar-beet thin juice crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Purified sugar-beet thin juice
- Flow property / unit: Mass / kg
- Amount rule: Measured thin-juice mass with sucrose, dry matter and impurity indicators.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Carbonatation lime (`carbonatation_lime_product`)

Carbonatation lime crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified product flow. Use this product row only when the output qualifies as a co-product.

- Selected flow: Carbonatation lime
- Flow property / unit: Mass / kg
- Amount rule: Weighed output sent to a documented beneficial use with specification and economic status.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### Waste flows

###### Waste carbonatation lime (`carbonatation_lime_waste`)

Waste carbonatation lime crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified waste flow. Mutually exclusive with the co-product quantity for the same material.

- Selected flow: Waste carbonatation lime
- Flow property / unit: Mass / kg
- Amount rule: Weighed lime mud or filter-cake waste sent to its actual treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Spent diatomaceous earth filter aid (`spent_diatomaceous_earth`)

Spent diatomaceous earth filter aid crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified waste flow. Conditional on use of diatomaceous earth.

- Selected flow: Spent diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent filter aid by actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Sugar-juice purification wastewater (`purification_wastewater`)

Sugar-juice purification wastewater crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Sugar-juice purification wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered net wastewater transferred to treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### Elementary flows

###### Ammonia, to air (`purification_ammonia_air`)

Ammonia, to air crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified elementary flow. Record only when monitored or material to the route.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured vented mass or concentration-flow-duration calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `us-epa-beet-sugar-1974`

###### Sulfur dioxide, to air (`purification_sulfur_dioxide_air`)

Sulfur dioxide, to air crosses the juice liming, carbonatation, clarification, and filtration boundary as one separately quantified elementary flow. Conditional on sulfitation; do not combine with other sulfur species.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or sulfur balance for sulfitation vents.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `us-epa-beet-sugar-1974`


### Process: Juice evaporation, vacuum crystallisation, and centrifugation (`evaporation_crystallisation`)

#### Inputs

##### Product flows

###### Purified sugar-beet thin juice (`evaporation_juice_input`)

Purified sugar-beet thin juice crosses the juice evaporation, vacuum crystallisation, and centrifugation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Purified sugar-beet thin juice
- Flow property / unit: Mass / kg
- Amount rule: Measured internal thin-juice transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Steam (`evaporation_steam`)

Steam crosses the juice evaporation, vacuum crystallisation, and centrifugation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam enthalpy to multiple-effect evaporators and vacuum pans.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Electricity, facility supply (`evaporation_electricity`)

Electricity, facility supply crosses the juice evaporation, vacuum crystallisation, and centrifugation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for evaporators, vacuum equipment, centrifuges and pumps.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Cooling water (`evaporation_cooling_water`)

Cooling water crosses the juice evaporation, vacuum crystallisation, and centrifugation boundary as one separately quantified product flow. Keep recirculated cooling water out of the external input.

- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Amount rule: Metered external cooling-water input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `us-epa-beet-sugar-1974`


##### Waste flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


#### Outputs

##### Product flows

###### Beet-sugar crystals (`sugar_crystals`)

Beet-sugar crystals crosses the juice evaporation, vacuum crystallisation, and centrifugation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Beet-sugar crystals
- Flow property / unit: Mass / kg
- Amount rule: Measured crystal mass after centrifugation and before finishing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_release`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Beet molasses (`beet_molasses`)

Beet molasses crosses the juice evaporation, vacuum crystallisation, and centrifugation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Beet molasses
- Flow property / unit: Mass / kg
- Amount rule: Measured molasses mass with dry matter, sugar content and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Recovered process condensate (`recovered_condensate`)

Recovered process condensate crosses the juice evaporation, vacuum crystallisation, and centrifugation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Recovered process condensate
- Flow property / unit: Mass / kg
- Amount rule: Metered condensate sent to a named internal use or external destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### Waste flows

###### Evaporation and crystallisation wastewater (`evaporation_wastewater`)

Evaporation and crystallisation wastewater crosses the juice evaporation, vacuum crystallisation, and centrifugation boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Evaporation and crystallisation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered net blowdown, cleaning and process wastewater sent to treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### Elementary flows

###### Water, to air (`process_water_vapour`)

Water, to air crosses the juice evaporation, vacuum crystallisation, and centrifugation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Water, to air
- Flow property / unit: Mass / kg
- Amount rule: Water balance residual assigned to measured or calculated evaporation after internal condensate recovery.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


### Process: Sugar drying, cooling, storage, quality release, and packaging (`sugar_finishing`)

#### Inputs

##### Product flows

###### Beet-sugar crystals (`finishing_sugar_crystals`)

Beet-sugar crystals crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Beet-sugar crystals
- Flow property / unit: Mass / kg
- Amount rule: Measured internal transfer from crystallisation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_release`
- Sources: `us-epa-beet-sugar-1974`

###### Electricity, facility supply (`finishing_electricity`)

Electricity, facility supply crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for drying, cooling, conveying, silos and packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Steam (`finishing_steam`)

Steam crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Conditional on actual steam use.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam supplied to indirect sugar drying or facility finishing duties.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Hot water (`finishing_hot_water`)

Hot water crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Keep the water mass in the site water balance and avoid double counting its heat.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered heat content of externally supplied hot water used in finishing or cleaning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Ammonia refrigerant (`finishing_ammonia_refrigerant`)

Ammonia refrigerant crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Conditional on ammonia refrigeration; other refrigerants require separate rows.

- Selected flow: Ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Stock reconciliation of ammonia charged to finishing refrigeration equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Kraft paper sugar sack (`packaging_paper_sack`)

Kraft paper sugar sack crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Kraft paper sugar sack
- Flow property / unit: Mass / kg
- Amount rule: BOM and stock-reconciled mass used for packaged product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Woven polypropylene sugar sack (`packaging_polypropylene_woven_sack`)

Woven polypropylene sugar sack crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Woven polypropylene sugar sack
- Flow property / unit: Mass / kg
- Amount rule: BOM and stock-reconciled mass used for packaged product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Low-density polyethylene bag liner (`packaging_ldpe_liner`)

Low-density polyethylene bag liner crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Low-density polyethylene bag liner
- Flow property / unit: Mass / kg
- Amount rule: BOM and stock-reconciled mass used for packaged product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Corrugated paperboard carton (`packaging_corrugated_carton`)

Corrugated paperboard carton crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Corrugated paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: BOM and stock-reconciled mass used for packaged product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Wood pallet (`packaging_wood_pallet`)

Wood pallet crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Issued pallet mass assigned to the declared packaged product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-jrc-fdm-bref-2019`


##### Waste flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


#### Outputs

##### Product flows

###### Beet sugar (`reference_beet_sugar`)

Beet sugar crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified product flow. The released reference product is the only inventory row carrying the confirmed beet-sugar UUID.

- Selected flow: Beet sugar `f6141c1d-e50a-4f80-9125-cc7eb82eb51a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Fixed at 1 kg net conforming beet sugar; packaging mass is excluded.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_quality_release`
- Sources:


##### Waste flows

###### Off-specification beet sugar (`offspec_beet_sugar_waste`)

Off-specification beet sugar crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Off-specification beet sugar
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass leaving internal rework for downgrade, recovery or waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Waste kraft paper sugar sack (`waste_kraft_paper_sack`)

Waste kraft paper sugar sack crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Waste kraft paper sugar sack
- Flow property / unit: Mass / kg
- Amount rule: Weighed paper-sack scrap by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Waste woven polypropylene sugar sack (`waste_polypropylene_woven_sack`)

Waste woven polypropylene sugar sack crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Waste woven polypropylene sugar sack
- Flow property / unit: Mass / kg
- Amount rule: Weighed woven-polypropylene sack scrap by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Waste low-density polyethylene liner (`waste_ldpe_liner`)

Waste low-density polyethylene liner crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Waste low-density polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: Weighed liner scrap by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Waste corrugated paperboard carton (`waste_corrugated_carton`)

Waste corrugated paperboard carton crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Waste corrugated paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Weighed carton scrap by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Waste wood pallet (`waste_wood_pallet`)

Waste wood pallet crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Waste wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Weighed unusable pallet mass by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`


##### Elementary flows

###### Particulate matter, PM10, to air (`sugar_particulate_matter_air`)

Particulate matter, PM10, to air crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified elementary flow. Do not combine PM10 with other particulate size fractions.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored mass or concentration-flow-duration calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-fdm-bref-2019`

###### Ammonia, to air (`finishing_ammonia_air`)

Ammonia, to air crosses the sugar drying, cooling, storage, quality release, and packaging boundary as one separately quantified elementary flow. Conditional on ammonia refrigeration.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant stock loss adjusted for recovered and transferred ammonia.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-fdm-bref-2019`


### Process: Beet-pulp pressing, drying, and co-product preparation (`pulp_handling`)

#### Inputs

##### Product flows

###### Wet beet pulp (`pulp_wet_input`)

Wet beet pulp crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Wet beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Measured internal pulp transfer from diffusion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Electricity, facility supply (`pulp_electricity`)

Electricity, facility supply crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for pressing, drying auxiliaries and conveying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Steam (`pulp_drying_steam`)

Steam crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Conditional on indirect steam drying.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam for indirect pulp drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `eu-fdm-bat-2019`

###### Natural gas (`pulp_drying_natural_gas`)

Natural gas crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Conditional on natural-gas firing.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy for direct pulp drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `eu-fdm-bat-2019`

###### Diesel fuel (`pulp_drying_diesel`)

Diesel fuel crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Conditional on diesel firing.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Stock-reconciled diesel energy for direct pulp drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `eu-fdm-bat-2019`

###### Liquefied petroleum gas (`pulp_drying_lpg`)

Liquefied petroleum gas crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Conditional on LPG firing.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered or stock-reconciled LPG energy for direct pulp drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `eu-fdm-bat-2019`

###### Beet molasses (`pulp_molasses_input`)

Beet molasses crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Conditional on molassed-pulp production.

- Selected flow: Beet molasses
- Flow property / unit: Mass / kg
- Amount rule: Measured molasses applied to beet pulp.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### Waste flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


#### Outputs

##### Product flows

###### Pressed beet pulp (`pressed_beet_pulp`)

Pressed beet pulp crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Use for pressed pulp dispatched or transferred as a separately quantified state.

- Selected flow: Pressed beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Weighed pressed-pulp output with dry matter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Dried beet pulp (`dried_beet_pulp`)

Dried beet pulp crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Conditional on on-site drying.

- Selected flow: Dried beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Weighed dried-pulp output with dry matter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Molassed beet pulp (`molassed_beet_pulp`)

Molassed beet pulp crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified product flow. Conditional on on-site molassing.

- Selected flow: Molassed beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Weighed molassed-pulp output with dry matter and molasses addition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### Waste flows

###### Off-specification beet pulp (`offspec_beet_pulp_waste`)

Off-specification beet pulp crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Off-specification beet pulp
- Flow property / unit: Mass / kg
- Amount rule: Weighed pulp rejected from useful output and sent to actual treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`


##### Elementary flows

###### Particulate matter, PM10, to air (`pulp_dryer_pm10_air`)

Particulate matter, PM10, to air crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored mass or concentration-flow-duration calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

###### Nitrogen oxides, to air (`pulp_dryer_nitrogen_oxides_air`)

Nitrogen oxides, to air crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored mass or fuel-and-factor calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

###### Carbon monoxide, to air (`pulp_dryer_carbon_monoxide_air`)

Carbon monoxide, to air crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored mass or fuel-and-factor calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

###### Sulfur oxides, to air (`pulp_dryer_sulfur_oxides_air`)

Sulfur oxides, to air crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified elementary flow. Conditional where sulfur-bearing fuel is used.

- Selected flow: Sulfur oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored mass or fuel-sulfur calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

###### Non-methane volatile organic compounds, to air (`pulp_dryer_tvoc_air`)

Non-methane volatile organic compounds, to air crosses the beet-pulp pressing, drying, and co-product preparation boundary as one separately quantified elementary flow. Conditional on high-temperature direct drying or monitoring requirement.

- Selected flow: Non-methane volatile organic compounds, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored total non-methane volatile-organic mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`


### Process: On-site steam, electricity, and hot-water generation (`onsite_energy_supply`)

#### Inputs

##### Product flows

###### Process water (`boiler_process_water`)

Process water crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered external boiler make-up water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Electricity, facility supply (`onsite_auxiliary_electricity`)

Electricity, facility supply crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered imported electricity used by boilers and generators.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Natural gas (`onsite_natural_gas`)

Natural gas crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Conditional on natural-gas use.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy using the period lower heating value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Diesel fuel (`onsite_diesel`)

Diesel fuel crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Conditional on diesel use.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Delivery and stock-reconciled diesel energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Liquefied petroleum gas (`onsite_lpg`)

Liquefied petroleum gas crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Conditional on LPG use.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered or stock-reconciled LPG energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Hard coal (`onsite_hard_coal`)

Hard coal crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Conditional on coal use.

- Selected flow: Hard coal
- Flow property / unit: Energy / MJ
- Amount rule: Delivery and stock-reconciled coal energy with lower heating value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Biogas (`onsite_recovered_biogas`)

Biogas crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Conditional on biogas use.

- Selected flow: Biogas
- Flow property / unit: Energy / MJ
- Amount rule: Metered recovered-biogas energy with methane content.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Sodium hydroxide (`boiler_sodium_hydroxide`)

Sodium hydroxide crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Conditional on this specific treatment chemistry.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Stock-adjusted mass dosed to boiler-water treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-fdm-bref-2019`

###### Trisodium phosphate (`boiler_trisodium_phosphate`)

Trisodium phosphate crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Conditional on this specific treatment chemistry.

- Selected flow: Trisodium phosphate
- Flow property / unit: Mass / kg
- Amount rule: Stock-adjusted mass dosed to boiler-water treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-fdm-bref-2019`


##### Waste flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


#### Outputs

##### Product flows

###### Steam (`onsite_steam_output`)

Steam crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered useful steam enthalpy sent to production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Electricity (`onsite_electricity_output`)

Electricity crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered generated electricity sent to production or export.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Hot water (`onsite_hot_water_output`)

Hot water crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered useful hot-water heat sent to production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`


##### Waste flows

###### Boiler bottom ash (`boiler_bottom_ash_waste`)

Boiler bottom ash crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified waste flow. Conditional on ash-forming fuel.

- Selected flow: Boiler bottom ash
- Flow property / unit: Mass / kg
- Amount rule: Weighed bottom ash by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Boiler fly ash (`boiler_fly_ash_waste`)

Boiler fly ash crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified waste flow. Conditional on ash-forming fuel.

- Selected flow: Boiler fly ash
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected fly ash by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Boiler blowdown wastewater (`boiler_blowdown_wastewater`)

Boiler blowdown wastewater crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered blowdown sent to treatment or discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `ec-jrc-fdm-bref-2019`


##### Elementary flows

###### Carbon dioxide, fossil, to air (`onsite_carbon_dioxide_fossil_air`)

Carbon dioxide, fossil, to air crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Fuel input multiplied by a cited carbon and oxidation factor or direct measurement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-fdm-bref-2019`

###### Carbon dioxide, biogenic, to air (`onsite_carbon_dioxide_biogenic_air`)

Carbon dioxide, biogenic, to air crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Biogas input multiplied by a cited biogenic-carbon and oxidation factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-fdm-bref-2019`

###### Nitrogen oxides, to air (`onsite_nitrogen_oxides_air`)

Nitrogen oxides, to air crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored mass or fuel-and-factor calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-fdm-bref-2019`

###### Sulfur dioxide, to air (`onsite_sulfur_dioxide_air`)

Sulfur dioxide, to air crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored mass or fuel-sulfur calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-fdm-bref-2019`

###### Carbon monoxide, to air (`onsite_carbon_monoxide_air`)

Carbon monoxide, to air crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored mass or fuel-and-factor calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-fdm-bref-2019`

###### Particulate matter, PM10, to air (`onsite_pm10_air`)

Particulate matter, PM10, to air crosses the on-site steam, electricity, and hot-water generation boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: Post-abatement monitored mass or fuel-and-factor calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-fdm-bref-2019`


### Process: Wastewater collection, treatment, discharge, and residual management (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity, facility supply (`wastewater_treatment_electricity`)

Electricity, facility supply crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for pumps, aeration and treatment equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Calcium hydroxide (`wastewater_calcium_hydroxide`)

Calcium hydroxide crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified product flow. Conditional on this specific treatment chemistry.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Stock-adjusted mass dosed for pH or precipitation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-fdm-bref-2019`

###### Ferric chloride (`wastewater_ferric_chloride`)

Ferric chloride crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified product flow. Conditional on this specific treatment chemistry.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Stock-adjusted mass dosed for coagulation or phosphorus removal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-fdm-bref-2019`

###### Anionic polyacrylamide (`wastewater_polyacrylamide`)

Anionic polyacrylamide crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified product flow. Conditional on this specific treatment chemistry.

- Selected flow: Anionic polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: Stock-adjusted mass dosed for flocculation or sludge dewatering.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-fdm-bref-2019`


##### Waste flows

###### Beet-sugar manufacturing wastewater (`wastewater_received`)

Beet-sugar manufacturing wastewater crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Beet-sugar manufacturing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered net influent by source stream without double counting internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`


##### Elementary flows

No direct exchanges of this flow type are expected; record any exception as a separate atomic card.


#### Outputs

##### Product flows

###### Treated process water (`treated_process_water`)

Treated process water crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified product flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Treated process water
- Flow property / unit: Volume / m3
- Amount rule: Metered treated water recycled to a named process or sent to another installation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Biogas (`recovered_biogas`)

Biogas crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified product flow. Conditional on anaerobic treatment and useful recovery.

- Selected flow: Biogas
- Flow property / unit: Energy / MJ
- Amount rule: Metered useful biogas with methane content and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_balance`
- Sources: `ec-jrc-fdm-bref-2019`


##### Waste flows

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

Wastewater-treatment sludge crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified waste flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet and dry sludge mass by actual destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_residue_records`
- Sources: `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### Elementary flows

###### Biochemical oxygen demand, BOD5, to water (`effluent_bod5_water`)

Biochemical oxygen demand, BOD5, to water crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Biochemical oxygen demand, BOD5, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched treated-effluent volume multiplied by representative BOD5 concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Chemical oxygen demand, to water (`effluent_cod_water`)

Chemical oxygen demand, to water crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched treated-effluent volume multiplied by representative COD concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Suspended solids, to water (`effluent_suspended_solids_water`)

Suspended solids, to water crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched treated-effluent volume multiplied by representative suspended-solids concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Nitrogen, total, to water (`effluent_total_nitrogen_water`)

Nitrogen, total, to water crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched treated-effluent volume multiplied by representative total-nitrogen concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `ec-jrc-fdm-bref-2019`

###### Phosphorus, total, to water (`effluent_total_phosphorus_water`)

Phosphorus, total, to water crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified elementary flow. Keep its identity, quantity and destination or source separate from all alternatives.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched treated-effluent volume multiplied by representative total-phosphorus concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_quantity_quality`
- Sources: `ec-jrc-fdm-bref-2019`

###### Methane, to air (`wastewater_methane_air`)

Methane, to air crosses the wastewater collection, treatment, discharge, and residual management boundary as one separately quantified elementary flow. Conditional on anaerobic treatment.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: Anaerobic-treatment gas balance minus captured, flared and oxidised methane.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming beet sugar
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-fdm-bref-2019`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | separable operations | Avoid allocation through meters, batch records and subdivision. | `iso-14044-2006` |
| `alloc_internal_recycling` | internal loops | Do not treat an internal recovered flow as a co-product and do not credit it twice. | `ec-jrc-fdm-bref-2019`; `iso-14044-2006` |
| `alloc_output_classification` | pulp, molasses, lime and recovered biogas | Use a product row only with documented specification, beneficial destination and economic status; otherwise use the corresponding waste row. | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`; `iso-14044-2006` |
| `alloc_economic_coproducts` | inseparable shared burdens | After subdivision, use same-period factory-gate net revenue only when no defensible physical relationship exists; disclose prices and sensitivity. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | all | feedstocks and intermediates | scales, tanks, inventories and laboratory records | flow; mass; inventory; moisture; sucrose; time | calibrated measurement and stock reconciliation | kg | each transfer | full campaign | site | sum each atomic flow and normalise | calibration, ledger and analyses |
| `cp_water_balance` | all | water and condensate | flowmeters, tanks and moisture records | source; destination; volume; density; reuse flag | meter external and internal streams separately | m3; kg | continuous/shift | full campaign | site | close net site balance | calibration and water-loop diagram |
| `cp_energy_balance` | all | electricity, steam, hot water and fuels | meters, deliveries and stock | carrier; quantity; LHV; source; destination | carrier-specific meter and stock reconciliation | kWh; MJ | continuous/daily | full campaign | site | preserve carrier identity | meters, invoices and fuel analyses |
| `cp_chemical_inventory` | purification, energy and treatment | each chemical | purchase, stock and dosing records | chemical; grade; purity; stock; dose | opening plus receipts minus closing and transfers | kg | batch/daily | full campaign | consuming unit | sum each chemical separately | supplier specification and dosing log |
| `cp_refrigerant_records` | `sugar_finishing` | refrigerant charge and loss | service and stock records | refrigerant; charge; recovery; addition; transfer | refrigerant mass balance | kg | each service; annual | reporting period | refrigeration system | additions minus recovery and inventory change | service log |
| `cp_product_quality_release` | crystallisation and finishing | crystals and reference sugar | scale and laboratory release | lot; mass; sucrose; moisture; grade; status | calibrated mass and declared analytical method | kg; fraction | each lot | full campaign | product system | net released mass | calibration and release certificate |
| `cp_coproduct_dispatch` | pulp, lime, molasses and biogas | useful outputs | scales, quality, destination and invoice | product; state; mass; dry matter; destination; value | reconcile dispatch and inventory | kg; MJ | each dispatch | same inventory period | site | separate each product state | specification and acceptance |
| `cp_packaging_records` | `sugar_finishing` | each package component | BOM, issue and stock | component; material; mass; count; scrap | component mass and stock reconciliation | kg | each lot | same product period | packaging line | each material separately | supplier specification and stock |
| `cp_waste_and_residue_records` | all | each waste | transfer note, scale and contractor | waste; origin; mass; destination; treatment | weigh dispatch and reconcile storage | kg | each dispatch | full campaign | site | each waste and destination separately | transfer note and acceptance |
| `cp_wastewater_quantity_quality` | cleaning, purification, energy and treatment | wastewater and water pollutants | flow and laboratory sampling | stream; volume; analyte; concentration; period | match flow and representative sample | m3; kg | continuous/permit | full campaign | each stream | pollutant-specific load | calibration and laboratory report |
| `cp_air_emissions` | purification, finishing, drying, energy and treatment | each air pollutant | stack, monitor, fuel and operating log | source; pollutant; concentration; flow; time; fuel; factor | direct measurement or transparent calculation | kg | continuous/permit | representative campaign | each source | pollutant-specific mass | monitor/stack report and factor citation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | all rows | assigned period amount / net conforming beet-sugar mass | atomic amount; reference mass | amount/kg sugar | `iso-14044-2006` |
| `calc_mass_sucrose_balance` | material stages | reconcile mass and measured sucrose across products, wastes, emissions and inventory change | masses; analyses; inventories | closure | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974` |
| `calc_water_balance` | site and water processes | external plus embedded water = products plus wastes plus discharge plus evaporation plus inventory change; internal loops cancel | water records | closure | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974` |
| `calc_energy_balance` | site energy | reconcile each carrier's import, generation, use, recovery and export; fuel energy = quantity × cited LHV | meters; fuel; LHV | carrier balance | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019` |
| `calc_pollutant_load` | air and water emissions | matched concentration × flow × time, or measured carrier × cited factor | measurements and factors | pollutant mass | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all rows | Resolve only exact Tiangong identities; unresolved UUIDs stay blank and manifest-listed. | double-kernel identity review |
| `dq_atomicity` | all rows | No card may combine carriers, alternatives, package types, wastes or pollutants. | parser audit and applicability log |
| `dq_primary` | foreground | Use complete company-specific campaign records including start-up, shutdown and inventory change. | dated raw records |
| `dq_balance` | mass, sucrose, energy and water | Close balances within declared measurement uncertainty and investigate residuals. | reconciliation worksheets |
| `dq_background` | upstream links | Match material, technology, geography and time and disclose every proxy. | dataset selection record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | reference | Use Beet sugar `f6141c1d-e50a-4f80-9125-cc7eb82eb51a`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg and CPC 23512. |  |
| `val_atomic_inventory` | inventory | Each selected flow shall be a single concrete exchange and every card shall contain a non-empty description. | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `val_no_provisional_ranges` | amounts | No inference-only quantitative range may remain; quantities shall come from foreground records, calculation rules or cited external evidence. |  |
| `val_route_completeness` | conditional routes | Declare applicability for every chemical, energy, refrigeration, pulp, treatment and packaging row. | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `val_balances` | material, sucrose, energy and water | Reconcile all imports, internal transfers, products, wastes, emissions and inventory changes without double counting. | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974` |
| `val_uuid_resolution` | identity | Only double-confirmed UUIDs may be populated; all other rows shall remain blank and manifest-listed. |  |
| `val_allocation` | co-products | Declare state, destination, economic status and allocation for every qualifying co-product. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground beet-sugar manufacturing dataset |
| downstream_use | LCA process, lifecycle model and product-footprint studies |
| allowed_use | Beet-sugar routes matching declared site, campaign, technology, product and packaging |
| excluded_use | Cane sugar, raw-sugar refining, cultivation, distribution, use or end-of-life |
| required_metadata | PCR id; CPC; reference UUID chain; grade; sucrose/moisture; route; site; campaign; energy; water; treatment; packaging; co-products; allocation |
| required_quality_disclosure | primary-data coverage; balances; meters; analyses; proxies; applicability; unresolved UUIDs; allocation and uncertainty |
| update_trigger | change in product, beet source, process, fuel, refrigerant, treatment, package, co-product market, allocation, site, period, source or UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ec-jrc-fdm-bref-2019` | Official guidance (`official_guidance`) | European Commission JRC, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf | process boundary, water/energy loops, chemicals, co-products, wastes and emissions; beet-input QA range |
| `eu-fdm-bat-2019` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2019/2031, BAT conclusions for food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | beet-pulp pressing/drying routes; energy and wastewater performance context; PM10, NOx, CO, SOx and NMVOC monitoring |
| `us-epa-beet-sugar-1974` | Official guidance (`official_guidance`) | US EPA, Development Document for Effluent Limitations Guidelines and Standards of Performance for New Sources: Beet Sugar Processing Subcategory, EPA 440/1-74-002-b, 1974. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10004HMU.TXT | independent process decomposition; beet, limestone/lime, sulfur, fuel and water inputs; diffusion, pulp water return, carbonatation, sulfitation, wastewater and water balance |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html | boundary, allocation, calculation, quality and reporting |
