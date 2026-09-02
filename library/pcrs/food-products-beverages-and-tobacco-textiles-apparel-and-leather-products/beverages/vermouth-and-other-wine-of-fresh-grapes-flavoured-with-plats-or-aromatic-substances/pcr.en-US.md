---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.vermouth-and-other-wine-of-fresh-grapes-flavoured-with-plats-or-aromatic-substances
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Vermouth and other wine of fresh grapes flavoured with plants or aromatic substances

## 1. Scope and Applicability

This PCR applies to factory-gate foreground production of vermouth and other aromatised wine made from grapevine wine products and flavoured with plants, spices, herbs, natural flavouring substances, or flavouring preparations. It covers receipt of base wine, preparation or receipt of the aromatic preparation, formulation and blending, optional fortification and sweetening, maturation or holding, clarification or filtration when used, and filling and packaging.

The PCR excludes unflavoured wine, aromatised wine-based drinks below the applicable wine-content or alcoholic-strength threshold, wine-product cocktails, spirit drinks whose identity is not wine-based, and products made solely from non-grape fruit wine. Vineyard cultivation, grape processing, and base-wine vinification are represented by upstream datasets unless they are intentionally added to a wider study boundary.

For products marketed under a regulated sales denomination, the foreground data package shall identify the applicable jurisdiction and demonstrate the relevant composition and naming requirements. For an EU vermouth claim, the product is an aromatised wine whose characteristic taste is obtained using appropriate substances of *Artemisia* species; the current product formulation and market specification remain authoritative for the concrete dataset. Sources: `eu-reg-251-2014-consolidated-2021`, `oiv-aromatised-wines-oeno-395-2011`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.vermouth-and-other-wine-of-fresh-grapes-flavoured-with-plats-or-aromatic-substances |
| classification_refs | CPC 3.0: 24220 |
| covered_products | Vermouth; aromatised wine made from fresh-grape wine and flavoured with plants, herbs, spices, aromatic foodstuffs, natural flavouring substances, or flavouring preparations |
| excluded_products | Unflavoured wine; aromatised wine-based drinks and wine-product cocktails outside the aromatised-wine definition; non-grape fruit vermouth-style beverages; spirit drinks |
| representative_product | Finished vermouth or other aromatised grape wine, expressed as net beverage mass at the factory gate |
| production_route | Base-wine receipt; aromatic preparation receipt or on-site extraction; blending and formulation; optional fortification, sweetening, colouring, maturation, clarification or filtration; filling and packaging |
| market_state | Finished liquid beverage, packaged or in declared bulk delivery form, with product subtype, alcoholic strength, sweetness, colour, formulation, and package format declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of finished vermouth or other aromatised wine made from fresh-grape wine |
| How much | 1,000 kg net beverage, excluding primary, secondary, and tertiary packaging mass |
| How well | Meets the declared product subtype and target-market specification for wine fraction, alcoholic strength, flavouring, sweetness, colour, and package condition |
| How long or cycle | One completed production and packaging batch delivered at the factory gate; no service life is assigned |
| reference_flow_link | The reference flow is the net mass of conforming finished beverage released from the batch |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net finished beverage |
| Reference product flow | Vermouth and other wine of fresh grapes flavoured with plats or aromatic substances `ec365540-43a3-42e4-975d-d2386455767a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype and sales denomination; target market and applicable specification; base-wine identity; grapevine-product volume fraction; actual alcoholic strength by volume at 20 °C; sweetness class or sugar content; colour; complete flavouring and additive formulation; fortification status and alcohol origin; maturation or holding time; clarification or filtration route; net beverage mass; packaging format and component masses; production site and geography; batch and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | net conforming beverage output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1,000 kg net beverage. Packaging mass is inventoried separately and is not included in the reference amount. |
| `ingredient_mass` | base wine, flavouring ingredients, sweeteners, processing aids, and added alcohol | Mass | kg | Record each purchased or internally transferred ingredient separately from calibrated batch issue, tank, or invoice records; do not combine ingredients into a single exchange. |
| `liquid_composition` | product conformance | Volume fraction and alcoholic strength | % vol at 20 °C | Record the grapevine-product fraction and actual alcoholic strength using the applicable target-market method. Under the cited EU aromatised-wine definition, grapevine products are at least 75% of total volume and actual alcoholic strength is at least 14.5% vol and below 22% vol. |
| `electricity_use` | each foreground process | Energy | kWh | Record metered electricity by process or allocate a shared meter using documented operating-time and rated-load records. |
| `water_use` | extraction, formulation, cleaning, and package rinsing | Volume or Mass | m3 or kg | Record each water use role separately; do not merge product-formulation water with cleaning or rinsing water. |
| `packaging_mass` | each packaging component | Mass | kg | Record issued mass separately for every primary, secondary, and tertiary packaging component and subtract documented unused returns. |
| `wastewater_load` | each wastewater discharge indicator | Mass | kg | Calculate each pollutant load separately as discharged volume multiplied by a representative measured concentration, with treatment and discharge boundary declared. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground production | Include all directly controlled operations from receipt of base wine and aromatic inputs through release of finished bulk or packaged aromatised wine. | `abreu-et-al-2021-fortified-wines`; `monteiro-2022-wine-lca` |
| `boundary_upstream_inputs` | purchased products and services | Link base wine, grape must, alcohol, sweeteners, botanicals, flavouring preparations, process aids, water, electricity, and each packaging component to separate upstream datasets. | `eu-reg-251-2014-consolidated-2021`; `oiv-aromatised-wines-oeno-395-2011` |
| `boundary_waste_emissions` | wastes and direct releases | Include each solid waste, wastewater stream, wastewater pollutant load, and direct air emission generated by foreground operations; identify treatment and receiving compartment. | `monteiro-2022-wine-lca` |
| `boundary_atomic_inventory` | all inventory rows | Keep electricity, each thermal carrier or fuel actually used, each refrigerant leaked, water by role, every ingredient and chemical, every packaging component, each waste, each wastewater indicator, and each air emission as separate exchanges. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Base wine and purchased aromatic or packaging inputs received at the reporting facility gate; any on-site aromatic extraction route is declared |
| starting_condition_role | The base wine is an upstream product input; the foreground category transformation begins with aromatisation and formulation |
| product_classification_scope | Finished vermouth and other plant- or aromatic-substance-flavoured wine of fresh grapes |
| recursive_input_rule | A returned or reworked product that already belongs to this category remains a separately quantified same-category product input; its prior production burdens are not silently absorbed or cut off |
| upstream_dataset_requirement | Use product-specific upstream datasets for base wine and major formulation and packaging inputs; disclose geography, technology, recycled content, and allocation where material |
| disclosure | Declare whether base-wine production, on-site extraction, maturation, filtration, wastewater treatment, packaging manufacture, and distribution are inside or linked outside the foreground boundary |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `aromatic_preparation` | Aromatic preparation | conditional | Include when herbs, spices, or other plant materials are extracted or infused on site; omit when a purchased flavouring preparation is dosed directly | Produce the declared aromatic extract or infusion | kg aromatic preparation transferred to formulation |
| `formulation_and_stabilisation` | Formulation and stabilisation | required | Always include; conditional inputs and operations are activated by the declared recipe and production route | Blend base wine and aromatic preparation, adjust composition, mature or hold, clarify or filter, and release conforming bulk beverage | kg conforming bulk beverage |
| `filling_and_packaging` | Filling and packaging | conditional | Include for packaged factory-gate product; omit only for a declared bulk-delivery reference product | Fill, close, label, case, and palletize the finished beverage | 1,000 kg net finished beverage |

### Process: Aromatic preparation (`aromatic_preparation`)

#### Inputs

##### Product flows

###### Wormwood herb (`artemisia_absinthium`)

Dried *Artemisia absinthium* or the specifically declared *Artemisia* species is recorded separately when used to produce the characteristic vermouth flavour on site.

- Selected flow: Dried *Artemisia absinthium* herb
- Flow property / unit: Mass / kg
- Amount rule: Record weighed mass issued to the extraction or infusion batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg aromatic preparation transferred to formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aromatic_ingredients`
- Sources: `eu-reg-251-2014-consolidated-2021`; `abreu-et-al-2021-fortified-wines`

###### Coriander seed (`coriander_seed`)

Coriander seed is recorded as its own ingredient when present in the declared botanical recipe.

- Selected flow: Dried coriander seed
- Flow property / unit: Mass / kg
- Amount rule: Record weighed mass issued to the extraction or infusion batch; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg aromatic preparation transferred to formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aromatic_ingredients`
- Sources: `abreu-et-al-2021-fortified-wines`

###### Clove flower buds (`clove_bud`)

Clove flower buds are recorded as their own ingredient when present in the declared botanical recipe.

- Selected flow: Dried clove flower buds
- Flow property / unit: Mass / kg
- Amount rule: Record weighed mass issued to the extraction or infusion batch; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg aromatic preparation transferred to formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aromatic_ingredients`
- Sources: `abreu-et-al-2021-fortified-wines`

###### Chamomile flowers (`chamomile_flower`)

Chamomile flowers are recorded as their own ingredient when present in the declared botanical recipe.

- Selected flow: Dried chamomile flowers
- Flow property / unit: Mass / kg
- Amount rule: Record weighed mass issued to the extraction or infusion batch; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg aromatic preparation transferred to formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aromatic_ingredients`
- Sources: `abreu-et-al-2021-fortified-wines`

###### Extraction ethanol (`extraction_ethanol`)

Agricultural ethyl alcohol used as extraction solvent is recorded separately from alcohol later added for product fortification.

- Selected flow: Ethyl alcohol of agricultural origin
- Flow property / unit: Mass / kg
- Amount rule: Record mass transferred to the extraction batch from tank or issue records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg aromatic preparation transferred to formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aromatic_liquids`
- Sources: `eu-reg-251-2014-consolidated-2021`

###### Extraction water (`extraction_water`)

Water entering the aromatic extraction or infusion is recorded separately from formulation, cleaning, and bottle-rinsing water.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered or batch-dosed extraction water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg aromatic preparation transferred to formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aromatic_liquids`
- Sources: `eu-reg-251-2014-consolidated-2021`

###### Extraction electricity (`extraction_electricity`)

Electricity for milling, agitation, pumping, temperature control, and transfer is recorded for the on-site aromatic-preparation process.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record sub-metered consumption or calculate from documented operating time and rated load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg aromatic preparation transferred to formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `monteiro-2022-wine-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Aromatic preparation transferred to formulation (`natural_flavouring_preparation`)

The produced extract or infusion is recorded as a single intermediate product transferred to formulation, while its individual ingredients remain visible above.

- Selected flow: Natural flavouring preparation
- Flow property / unit: Mass / kg
- Amount rule: Record net transferred mass after extraction and separation of botanical solids.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per extraction batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aromatic_output`
- Sources: `eu-reg-251-2014-consolidated-2021`; `abreu-et-al-2021-fortified-wines`

##### Waste flows

###### Spent botanical solids (`spent_botanical_solids`)

Separated plant material leaving extraction is recorded as one specific wet spent-botanical waste stream, with destination declared.

- Selected flow: Spent botanical extraction solids
- Flow property / unit: Mass / kg
- Amount rule: Weigh each outgoing container or determine mass from a documented container-count and average-weight method.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg aromatic preparation transferred to formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_wastes`
- Sources:

##### Elementary flows

### Process: Formulation and stabilisation (`formulation_and_stabilisation`)

#### Inputs

##### Product flows

###### Base grape wine (`base_wine`)

Base wine is the principal upstream product input and remains separately visible from must, alcohol, water, sweetener, and flavouring inputs.

- Selected flow: Base grape wine
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated tank mass transferred into each formulation batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `eu-reg-251-2014-consolidated-2021`; `oiv-aromatised-wines-oeno-395-2011`; `abreu-et-al-2021-fortified-wines`

###### Purchased natural flavouring preparation (`natural_flavouring_preparation_input`)

A purchased natural flavouring preparation is recorded as a single product input only when the flavouring is not produced in the on-site aromatic-preparation process.

- Selected flow: Natural flavouring preparation
- Flow property / unit: Mass / kg
- Amount rule: Record net mass dosed from supplier and batch records; mark not applicable for the on-site extraction route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `eu-reg-251-2014-consolidated-2021`; `abreu-et-al-2021-fortified-wines`

###### Agricultural ethyl alcohol for fortification (`agricultural_ethanol`)

Alcohol added to adjust or fortify the beverage is recorded separately from alcohol used only as an extraction or additive carrier.

- Selected flow: Ethyl alcohol of agricultural origin
- Flow property / unit: Mass / kg
- Amount rule: Record mass dosed to the formulation batch; mark not applicable when no alcohol is added.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `eu-reg-251-2014-consolidated-2021`; `oiv-aromatised-wines-oeno-395-2011`; `abreu-et-al-2021-fortified-wines`

###### Sucrose (`sucrose`)

Sucrose is recorded separately when used for sweetening; any other sweetener used by the concrete recipe shall be represented by its own additional atomic row.

- Selected flow: Refined sucrose
- Flow property / unit: Mass / kg
- Amount rule: Record weighed mass dosed to the formulation batch; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `eu-reg-251-2014-consolidated-2021`

###### Grape must (`grape_must`)

Grape must is recorded separately from base wine and sucrose when used for sweetening or composition adjustment.

- Selected flow: Grape must
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated tank or weighed mass dosed to the batch; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `eu-reg-251-2014-consolidated-2021`

###### Formulation water (`formulation_water`)

Water added to prepare flavouring essence, dissolve sweetener, or adjust final composition is recorded separately from cleaning and rinsing water.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered or batch-dosed water entering the product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `eu-reg-251-2014-consolidated-2021`

###### Formulation electricity (`formulation_electricity`)

Electricity for pumping, mixing, cooling, maturation control, clarification, filtration, and transfers is recorded for this process.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record sub-metered consumption or allocate a shared meter by documented operating time and rated load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `monteiro-2022-wine-lca`

###### Diatomaceous earth filter aid (`filter_aid`)

Diatomaceous earth is recorded as a separate processing-aid input only when used in the declared filtration route.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from filtration batch records; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming bulk aromatised wine (`bulk_aromatised_wine`)

Conforming bulk beverage is transferred to filling or released for declared bulk delivery after recipe and quality checks.

- Selected flow: Bulk aromatised grape wine
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated release-tank mass meeting the declared product specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per formulation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bulk_product_release`
- Sources: `abreu-et-al-2021-fortified-wines`

##### Waste flows

###### Filtration residue (`filtration_residue`)

Wet filter cake or retained clarification solids are recorded separately from wastewater and off-spec beverage.

- Selected flow: Wine filtration residue
- Flow property / unit: Mass / kg
- Amount rule: Weigh outgoing containers or calculate from documented container counts and representative wet weights.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_wastes`
- Sources:

###### Off-spec aromatised wine (`off_spec_wine`)

Rejected beverage sent to treatment, recovery, or disposal is recorded separately; internally reworked beverage remains a same-category product input rather than waste.

- Selected flow: Off-spec aromatised wine
- Flow property / unit: Mass / kg
- Amount rule: Record rejected mass by destination from deviation and dispatch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_wastes`
- Sources:

###### Winery wastewater (`winery_wastewater`)

Wastewater from formulation, transfer, tank cleaning, and filtration is recorded as a distinct wastewater flow before or after on-site treatment as declared.

- Selected flow: Winery process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume by process meter or a documented water-balance calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `monteiro-2022-wine-lca`

##### Elementary flows

###### Ethanol emitted to air (`ethanol_to_air`)

Direct ethanol loss to air from open transfer, blending, maturation, or filtration is reported when measured or when a site mass balance identifies a non-negligible volatile loss.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring where available; otherwise calculate only a documented residual ethanol mass balance and disclose uncertainty.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources:

###### Chemical oxygen demand discharged to water (`wastewater_cod`)

COD is reported as a separate elementary load for the declared wastewater discharge point.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Discharged wastewater volume multiplied by flow-weighted COD concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `monteiro-2022-wine-lca`

###### Five-day biochemical oxygen demand discharged to water (`wastewater_bod5`)

BOD5 is reported separately from COD for the declared wastewater discharge point.

- Selected flow: Biochemical oxygen demand, 5-day, to water
- Flow property / unit: Mass / kg
- Amount rule: Discharged wastewater volume multiplied by flow-weighted BOD5 concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `monteiro-2022-wine-lca`

###### Total nitrogen discharged to water (`wastewater_total_nitrogen`)

Total nitrogen is reported as its own elementary load for the declared wastewater discharge point.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Discharged wastewater volume multiplied by flow-weighted total-nitrogen concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources:

###### Total phosphorus discharged to water (`wastewater_total_phosphorus`)

Total phosphorus is reported as its own elementary load for the declared wastewater discharge point.

- Selected flow: Total phosphorus, to water
- Flow property / unit: Mass / kg
- Amount rule: Discharged wastewater volume multiplied by flow-weighted total-phosphorus concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming bulk beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources:

### Process: Filling and packaging (`filling_and_packaging`)

#### Inputs

##### Product flows

###### Bulk aromatised wine for filling (`bulk_aromatised_wine_input`)

Conforming bulk beverage entering the filling line is recorded before packaging components are added.

- Selected flow: Bulk aromatised grape wine
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated filler-feed mass reconciled to packaged product and line losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_line_balance`
- Sources: `monteiro-2022-wine-lca`

###### Packaging electricity (`packaging_electricity`)

Electricity used by rinsing, filling, closing, labelling, conveying, case packing, and pallet wrapping is recorded separately.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record line sub-meter data or calculate from documented operating time and rated load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `monteiro-2022-wine-lca`

###### Bottle-rinsing water (`bottle_rinsing_water`)

Water used to rinse empty containers or clean the filling line is recorded separately from water incorporated into the beverage.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record the filling-line water meter or a documented rinse-cycle calculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_water`
- Sources: `monteiro-2022-wine-lca`

###### Glass bottle (`glass_bottle`)

Glass containers are recorded separately when used for the declared package format.

- Selected flow: Glass beverage bottle
- Flow property / unit: Mass / kg
- Amount rule: Record issued bottle count multiplied by verified unit mass, less unused returns.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `monteiro-2022-wine-lca`

###### Polyethylene terephthalate bottle (`pet_bottle`)

PET containers are recorded separately only when used for the declared package format.

- Selected flow: Polyethylene terephthalate beverage bottle
- Flow property / unit: Mass / kg
- Amount rule: Record issued bottle count multiplied by verified unit mass, less unused returns; mark not applicable for other formats.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `monteiro-2022-wine-lca`

###### Bag-in-box liner (`bag_in_box_liner`)

The flexible product-contact liner is recorded separately from its corrugated outer box.

- Selected flow: Polyethylene bag-in-box liner
- Flow property / unit: Mass / kg
- Amount rule: Record issued liner count multiplied by verified unit mass, less unused returns; mark not applicable for other formats.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `monteiro-2022-wine-lca`

###### Corrugated box (`corrugated_box`)

The corrugated case or bag-in-box outer is recorded as its own packaging component.

- Selected flow: Corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: Record issued count multiplied by verified unit mass, less unused returns.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `monteiro-2022-wine-lca`

###### Aluminium closure (`aluminium_closure`)

An aluminium screw cap is recorded separately when used.

- Selected flow: Aluminium beverage closure
- Flow property / unit: Mass / kg
- Amount rule: Record issued closure count multiplied by verified unit mass, less unused returns; mark not applicable for other closure routes.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources:

###### Cork closure (`cork_closure`)

A natural cork stopper is recorded separately when used.

- Selected flow: Natural cork stopper
- Flow property / unit: Mass / kg
- Amount rule: Record issued stopper count multiplied by verified unit mass, less unused returns; mark not applicable for other closure routes.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources:

###### Paper label (`paper_label`)

Paper labels are recorded separately from the container, closure, and corrugated case.

- Selected flow: Coated paper beverage label
- Flow property / unit: Mass / kg
- Amount rule: Record issued label count multiplied by verified unit mass, less unused returns.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources:

###### Polyethylene pallet wrap (`polyethylene_wrap`)

Stretch or shrink film used for pallet stabilization is recorded as its own tertiary packaging component.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Record roll mass issued minus remaining roll mass, normalized to the packaged batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources:

###### Wooden pallet (`wooden_pallet`)

Wooden pallets are recorded separately with the declared reuse count or one-way status.

- Selected flow: Wooden EUR pallet
- Flow property / unit: Mass / kg
- Amount rule: Record pallets assigned to the batch and allocate reusable pallet mass over the documented expected trips.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged reference product (`packaged_product`)

The output is the conforming net beverage mass; packaging components remain separate inventory inputs.

- Selected flow: Vermouth and other wine of fresh grapes flavoured with plats or aromatic substances `ec365540-43a3-42e4-975d-d2386455767a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Set to 1,000 kg net released beverage after reconciling filler output, line losses, and rejects.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Waste glass (`waste_glass`)

Broken or rejected glass bottles are recorded separately from other packaging wastes.

- Selected flow: Waste packaging glass
- Flow property / unit: Mass / kg
- Amount rule: Weigh outgoing glass waste or reconcile issued, filled, returned, and rejected bottle counts with unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources: `monteiro-2022-wine-lca`

###### Waste PET (`waste_pet`)

Rejected PET bottles are recorded separately from polyethylene liner or film waste.

- Selected flow: Waste polyethylene terephthalate packaging
- Flow property / unit: Mass / kg
- Amount rule: Weigh outgoing PET waste or reconcile rejected container counts with unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources: `monteiro-2022-wine-lca`

###### Waste aluminium closures (`waste_aluminium`)

Rejected aluminium closures are recorded separately.

- Selected flow: Waste aluminium closures
- Flow property / unit: Mass / kg
- Amount rule: Reconcile rejected closure counts with verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources:

###### Waste cork (`waste_cork`)

Rejected cork closures are recorded separately.

- Selected flow: Waste natural cork
- Flow property / unit: Mass / kg
- Amount rule: Reconcile rejected stopper counts with verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources:

###### Waste paper labels (`waste_paper_label`)

Rejected paper labels are recorded separately from corrugated board, glass, metals, and plastics.

- Selected flow: Waste coated paper labels
- Flow property / unit: Mass / kg
- Amount rule: Weigh outgoing label waste or reconcile issued and used label masses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources: `monteiro-2022-wine-lca`

###### Waste corrugated board (`waste_corrugated_board`)

Rejected corrugated cases and bag-in-box outers are recorded separately from paper labels and other packaging wastes.

- Selected flow: Waste corrugated board
- Flow property / unit: Mass / kg
- Amount rule: Weigh outgoing corrugated-board waste or reconcile issued and used box masses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources: `monteiro-2022-wine-lca`

###### Waste polyethylene liner (`waste_polyethylene_liner`)

Rejected polyethylene bag-in-box liners are recorded separately from pallet film and PET waste.

- Selected flow: Waste polyethylene bag-in-box liner
- Flow property / unit: Mass / kg
- Amount rule: Weigh outgoing liner waste or reconcile rejected liner counts with verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources: `monteiro-2022-wine-lca`

###### Waste polyethylene pallet film (`waste_polyethylene_film`)

Discarded pallet stretch film is recorded separately from bag-in-box liners and PET waste.

- Selected flow: Waste polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Weigh outgoing film waste or reconcile film issued and used for the packaged batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources: `monteiro-2022-wine-lca`

###### Packaging-line wastewater (`packaging_wastewater`)

Container-rinsing and filling-line cleaning wastewater is recorded separately from formulation-process wastewater.

- Selected flow: Beverage packaging-line wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume by line meter or a documented water balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged beverage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_water`
- Sources: `monteiro-2022-wine-lca`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | product-specific batches and lines | First subdivide meters, tanks, batches, extraction campaigns, and packaging lines so that product-specific inputs and outputs are directly assigned. |  |
| `allocation_mass` | inseparable shared operations | If subdivision is not practicable and products have comparable functions, allocate shared utilities and wastes by net conforming beverage mass; document the numerator, denominator, and reference period. |  |
| `allocation_causal` | shared operations with measurable drivers | Use a more specific causal driver, such as line operating time, tank occupancy, cleaning cycles, or packaging counts, when it better explains resource use than mass. |  |
| `allocation_rework` | same-category rework | Keep returned or reworked aromatised wine as a quantified product input and avoid double counting its prior production burdens. |  |
| `allocation_recovery` | wastes sent for recovery | Report waste quantity and destination separately and disclose any substitution or recycling credit outside the foreground inventory; do not hide it in a reduced waste amount. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_aromatic_ingredients` | `aromatic_preparation` | each individual botanical ingredient | scale and batch issue record | ingredient identity; supplier lot; gross and tare mass; returned mass; batch id | calibrated scale linked to recipe issue record | kg | each batch | representative 12 months or all campaigns in the reporting period | all on-site extraction lines | sum net issued mass by ingredient and divide by transferred aromatic preparation | scale calibration; batch genealogy; supplier specification |
| `cp_aromatic_liquids` | `aromatic_preparation` | extraction ethanol or extraction water | tank, flowmeter, or batch dosing record | liquid identity; opening and closing tank level; meter reading; density or temperature if needed; batch id | calibrated tank or flowmeter reconciliation | kg or m3 | each batch | representative 12 months | all extraction tanks | sum each liquid separately and normalize to aromatic preparation output | meter calibration; tank chart; recipe record |
| `cp_aromatic_output` | `aromatic_preparation` | aromatic preparation output | transfer record | source batch; destination tank; gross and tare mass; transfer loss | calibrated transfer tank or scale | kg | each transfer | representative 12 months | all extraction lines | sum net transferred mass | transfer reconciliation; batch release record |
| `cp_formulation_ingredients` | `formulation_and_stabilisation` | each base-wine, flavouring, alcohol, sweetener, water, must, or process-aid row | tank, scale, invoice, and recipe record | material identity; supplier lot; opening and closing quantity; gross and tare; density; batch id | calibrated tank, meter, or scale reconciled to recipe | kg or m3 | each batch | representative 12 months | all formulation tanks | calculate net quantity separately for every material row and normalize to conforming bulk output | calibration; supplier specification; batch reconciliation |
| `cp_process_electricity` | each applicable process | electricity | meter and operating record | opening and closing meter reading; process id; operating hours; rated load if allocated | direct sub-meter preferred; documented engineering allocation otherwise | kWh | each batch or monthly | representative 12 months | all foreground equipment | sum by process; shared use follows the declared causal allocation rule | meter calibration; equipment log; allocation worksheet |
| `cp_process_wastes` | applicable process | each solid or liquid waste row | waste dispatch and internal container record | waste identity; gross and tare mass; container count; destination; treatment route; batch or period | weighbridge, calibrated scale, or verified container method | kg | each dispatch | representative 12 months | all foreground operations | sum separately by waste identity and destination | tickets; invoices; container-weight study |
| `cp_bulk_product_release` | `formulation_and_stabilisation` | conforming bulk beverage and off-spec beverage | tank release and quality record | tank mass; product code; batch id; release status; ABV; grapevine fraction; sugar; colour | calibrated tank measurement plus laboratory release test | kg; % vol; g/L as applicable | each batch | all batches in reporting period | all formulation tanks | sum only conforming released mass for denominator; keep off-spec mass separate | tank calibration; laboratory certificate; release authorization |
| `cp_wastewater_monitoring` | `formulation_and_stabilisation` | wastewater volume, COD, BOD5, total nitrogen, and total phosphorus | discharge meter and laboratory record | volume; sampling time; COD; BOD5; total nitrogen; total phosphorus; treatment stage; discharge compartment | continuous or batch volume measurement with representative flow-weighted sampling | m3 and mg/L | each discharge campaign or permit frequency | representative 12 months including peak production | all foreground discharge points | calculate every indicator separately at the declared discharge point | meter calibration; accredited laboratory reports; sampling plan |
| `cp_direct_air_emissions` | `formulation_and_stabilisation` | ethanol to air | monitoring or mass-balance record | ethanol input; ethanol in product; ethanol in liquid waste; recovered ethanol; measured vent concentration and flow if available | direct monitoring preferred; otherwise closed documented batch mass balance | kg | each monitored campaign or batch balance | representative operating conditions over 12 months | all applicable equipment | report the measured or residual loss separately and disclose uncertainty | instrument calibration; balance closure; engineering review |
| `cp_packaging_line_balance` | `filling_and_packaging` | bulk beverage input, packaged beverage, and liquid line loss | filler and tank record | feed mass; filled units; net fill mass; rejects; recovered product; product code | calibrated tank and checkweigher reconciliation | kg | each packaging batch | representative 12 months | all filling lines | reconcile input to net released beverage, recoveries, and losses | tank calibration; checkweigher verification; line reconciliation |
| `cp_packaging_water` | `filling_and_packaging` | bottle-rinsing water or packaging-line wastewater | water and discharge meter record | supply meter; discharge meter; cleaning cycle; line id; batch id | line sub-meter or documented cycle-volume calculation | m3 | each batch or monthly | representative 12 months | all filling lines | keep supply water and wastewater separate; normalize to net packaged beverage | meter calibration; cleaning log; water balance |
| `cp_packaging_components` | `filling_and_packaging` | each individual packaging component | bill of materials, issue, and unit-mass record | component identity; count issued; count returned; unit mass; recycled content; supplier lot | verified count multiplied by measured unit mass, or direct issued mass | kg | each packaging batch | representative 12 months | all packaging formats | calculate each component separately; reusable pallet mass is divided by documented trips | supplier specification; unit-mass sample; inventory reconciliation |
| `cp_packaging_wastes` | `filling_and_packaging` | each individual packaging waste | rejection and waste dispatch record | component material; rejected count or mass; destination; treatment route | direct weighing or rejected count multiplied by verified unit mass | kg | each batch and dispatch | representative 12 months | all packaging lines | sum separately for glass bottles, PET bottles, aluminium closures, cork closures, paper labels, corrugated board, polyethylene liners, and polyethylene film | rejection log; waste ticket; unit-mass verification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_exchange` | every inventory row | normalized amount = net process amount / conforming process output × 1,000 kg | net recorded amount; conforming output mass | amount per 1,000 kg reference product |  |
| `net_ingredient_issue` | each ingredient | net ingredient mass = gross issued mass − tare mass − documented unused return | issue, tare, and return records | net ingredient mass |  |
| `packaging_component_mass` | each packaging component | component mass = (issued count − returned unused count) × verified unit mass; reusable pallet mass is divided by documented trip count | component counts; unit mass; reuse trips | kg component per 1,000 kg beverage |  |
| `wastewater_pollutant_load` | each wastewater indicator | load = discharged volume × flow-weighted concentration with unit conversion; calculate COD, BOD5, total nitrogen, and total phosphorus independently | m3 wastewater; mg/L indicator | kg indicator per 1,000 kg beverage | `monteiro-2022-wine-lca` |
| `batch_mass_balance` | formulation and packaging | mass-balance closure = accounted product, waste, emissions, and inventory change divided by measured material inputs; investigate and disclose unexplained residuals | all measured inputs; products; wastes; emissions; opening and closing inventories | closure ratio and residual mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product and waste rows | Record one physical or chemical flow per row and retain product, supplier, grade, composition, and route identity needed to select an upstream dataset. | purchase specification; safety or technical sheet; recipe; Tiangong UUID where confirmed |
| `dq_temporal` | all foreground data | Use at least 12 consecutive representative months when production is continuous; for campaigns, include all campaigns in the reporting period and disclose seasonality. | meter exports; batch register; production calendar |
| `dq_completeness` | ingredients, utilities, packaging, wastes, wastewater indicators, and emissions | Reconcile recipe, purchase, meter, packaging, waste, laboratory, and product-release records; no aggregate placeholder may replace individual exchanges. | completeness matrix and mass-balance review |
| `dq_measurement` | measured quantities | Use calibrated meters, tanks, scales, and laboratory methods; document estimation or allocation where direct measurement is unavailable. | calibration certificates; laboratory accreditation; allocation worksheet |
| `dq_composition` | reference product | Verify product subtype, grapevine-product fraction, alcoholic strength, flavouring, sweetening, colour, and target-market conformance for each product family. | recipe approval; laboratory release result; legal or specification review |
| `dq_geography` | upstream links | Match electricity, water, base wine, alcohol, ingredients, and packaging datasets to the production and supplier geography or disclose proxies. | supplier location; utility contract; proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | The output UUID, Mass flow property, kg unit, net beverage basis, product subtype, and required qualifiers are present and internally consistent. |  |
| `validate_category_scope` | product category | The product is made from fresh-grape wine products and is flavoured with plants or aromatic substances; excluded wine-based drinks, cocktails, non-grape beverages, and spirits are rejected. | `eu-reg-251-2014-consolidated-2021`; `oiv-aromatised-wines-oeno-395-2011` |
| `validate_vermouth_claim` | product sold as vermouth | When vermouth is claimed under the cited EU definition, appropriate *Artemisia* substances and the applicable composition and alcoholic-strength conditions are evidenced. | `eu-reg-251-2014-consolidated-2021` |
| `validate_atomic_flows` | inventory | Every electricity, thermal carrier, fuel, refrigerant, water role, ingredient, chemical, packaging component, waste, wastewater indicator, and air emission used by the site is a separate row; collection labels and selector placeholders are rejected. |  |
| `validate_process_coverage` | process map | Aromatic preparation is included when performed on site; formulation and stabilisation are included; filling and packaging are included unless the reference product is explicitly bulk delivered. | `abreu-et-al-2021-fortified-wines`; `monteiro-2022-wine-lca` |
| `validate_mass_balance` | each process and total foreground | Product, wastes, emissions, and inventory change are reconciled to measured inputs; unexplained residuals are investigated and disclosed. |  |
| `validate_wastewater` | wastewater | Wastewater volume and each measured COD, BOD5, total-nitrogen, and total-phosphorus load are reported at a declared treatment or discharge point without aggregation. | `monteiro-2022-wine-lca` |
| `validate_packaging` | packaged product | The declared package format matches individual component rows and component masses; glass, PET, bag-in-box liner, corrugated board, closures, labels, film, and pallets are not aggregated. | `monteiro-2022-wine-lca` |
| `validate_no_case_ranges` | all quantitative ranges | A single plant, batch, scenario, or literature observation is not represented as a range, and no range repeats a case value as equal lower and upper bounds. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for finished vermouth or other aromatised fresh-grape wine |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product carbon footprint, life-cycle inventory, environmental footprint, supply-chain comparison, and internal improvement where product subtype, geography, formulation, and package format are compatible |
| excluded_use | Unflavoured wine, wine-based drinks or cocktails outside scope, non-grape fruit beverages, spirits, or undisclosed recipes and package formats |
| required_metadata | PCR id and version; product subtype; target market; production site and period; base-wine origin; recipe and ingredient identities; ABV; grapevine-product fraction; sweetness and colour; maturation and filtration route; package format; net mass; allocation; upstream dataset links |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; recipe completeness; mass-balance closure; wastewater sampling; direct-emission method; packaging unit-mass evidence; proxies; exclusions; uncertainty; unresolved UUIDs |
| update_trigger | Recipe, base-wine source, sales denomination, production technology, energy or water system, wastewater treatment, packaging format, allocation method, site, or applicable legal specification changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-reg-251-2014-consolidated-2021` | Standard (`standard`) | Regulation (EU) No 251/2014, consolidated text of 7 December 2021, EUR-Lex, https://eur-lex.europa.eu/eli/reg/2014/251/2021-12-07/eng/pdf (retrieved 2026-08-20) | Official aromatised-wine and vermouth scope; grapevine-product fraction; alcoholic-strength interval; permitted flavourings, sweeteners, alcohol, water, and additives |
| `oiv-aromatised-wines-oeno-395-2011` | Standard (`standard`) | OIV International Code of Oenological Practices, I.6.8 Aromatised wines (OENO 395-2011), https://www.oiv.int/standards/international-code-of-oenological-practices/part-i-definitions/products-derived-from-grapes%2C-grape-must-or-wine/aromatised-wines (retrieved 2026-08-20) | Independent official category definition, base-wine fraction, possible alcohol addition, sweetening, colouring, and alcoholic strength |
| `abreu-et-al-2021-fortified-wines` | Literature (`literature`) | Abreu, T. et al. (2021), The Flavor Chemistry of Fortified Wines—A Comprehensive Approach, Foods 10(6), 1239, https://doi.org/10.3390/foods10061239 | Original full-text support for vermouth base wine, flavouring agents, blending, fortification, maturation, and common botanicals |
| `monteiro-2022-wine-lca` | Literature (`literature`) | Monteiro, A. (2022), Life Cycle Assessment (LCA): Environmental impacts of wine, Instituto Politécnico de Bragança, https://bibliotecadigital.ipb.pt/server/api/core/bitstreams/3307fbf9-03a8-4516-ae41-420196e046cd/content (retrieved 2026-08-20) | Original full-text process evidence for winery electricity, cleaning water, wastewater, bottling, packaging inputs, packaging formats, and solid waste outputs |
