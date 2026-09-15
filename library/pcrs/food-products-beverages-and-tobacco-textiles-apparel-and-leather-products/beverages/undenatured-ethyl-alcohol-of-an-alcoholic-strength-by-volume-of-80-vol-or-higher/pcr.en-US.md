---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-volume-of-80-vol-or-higher
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Undenatured ethyl alcohol of an alcoholic strength by volume of 80% vol or higher

## 1. Scope and Applicability

This PCR covers foreground production of undenatured ethyl alcohol whose alcoholic strength is at least 80% by volume, delivered as a saleable bulk or packaged product at the production-site gate. It covers ethanol made by fermentation of sugar-, starch-, or lignocellulose-derived substrates and the required distillation and rectification steps. Route-specific feed preparation, fermentation, product recovery, storage, dispatch preparation, on-site utilities, residue management, and wastewater treatment are included when operated by the reporting site.

Upstream cultivation or collection of biomass, manufacture of purchased feedstocks, enzymes, chemicals, energy, water, and packaging, and inbound transport are represented by linked background datasets. Denaturing, downstream distribution, blending into fuels or beverages, consumption or combustion, beverage aging, and end-of-life are excluded. Synthetic ethanol, denatured ethanol, ethanol below 80% vol, alcoholic beverages, and generic fermentation broth are outside the category. The data package shall state the feedstock route, actual alcohol strength by volume, water content or equivalent composition, measurement temperature and method, product grade, package or bulk form, and whether additional dehydration beyond rectification occurs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-volume-of-80-vol-or-higher |
| classification_refs | CPC 3.0: 24110, Undenatured ethyl alcohol of an alcoholic strength by volume of 80% vol or higher, exact |
| covered_products | Saleable undenatured ethyl alcohol at least 80% vol produced by fermentation followed by distillation and rectification |
| excluded_products | Denatured ethanol; ethanol below 80% vol; synthetic ethanol; spirits and other beverages; fermentation broth; downstream ethanol blends |
| representative_product | Rectified, undenatured ethanol at the production-site gate with declared actual alcoholic strength by volume |
| production_route | Route-specific substrate preparation; fermentation; distillation and rectification; storage and dispatch preparation |
| market_state | Bulk tanker, reusable container, or packaged saleable product, undenatured and at least 80% vol |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Rectified undenatured ethyl alcohol at the production-site gate |
| How much | 1,000 kg |
| How well | Saleable product with measured alcoholic strength of at least 80% vol and declared product grade, water content or equivalent composition, and dispatch form |
| How long or cycle | One completed production campaign normalized from a continuous reporting period of at least 12 months, or a shorter representative period justified for a new or materially changed plant |
| reference_flow_link | Rectified ethanol `276f1cf5-0aa1-4d57-ad95-9dada6e043a0` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Rectified ethanol `276f1cf5-0aa1-4d57-ad95-9dada6e043a0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual alcoholic strength by volume; undenatured status; measurement temperature and test method; water content or equivalent composition; fermentation feedstock and route; dehydration technology if used; product grade; bulk or package format; production site; reporting period |

The direct-read Tiangong flow identifies rectified ethanol as undenatured before denaturing and classifies it to CPC 24110. Because its display name does not state the alcohol-strength threshold, a concrete foreground data package is conforming only when the required qualifiers demonstrate an actual alcoholic strength of at least 80% vol.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net conforming ethanol mass on a calibrated dispatch or production mass basis; preserve gross, tare, stock-change, and loss records before normalizing to 1,000 kg. |
| `alcoholic_strength` | Reference-product identity | Alcoholic strength by volume | % vol | Report the measured value, measurement temperature, test method, and sample basis; values below 80% vol fail category identity and shall not be averaged with conforming output. |
| `water_and_composition` | Product quality and mass balance | Mass fraction or concentration | declared native unit | Preserve water content or an equivalent composition result and any denaturant test so that undenatured status and mass balance can be checked. |
| `energy_conversion` | Electricity, steam, heat, and fuels | Energy | kWh, MJ, or native metered unit | Preserve native readings, calorific-value basis, and conversion factors; do not aggregate electricity, steam, and individual fuels into one inventory exchange. |
| `period_normalization` | All foreground exchanges | Reference-flow property | per 1,000 kg | Reconcile receipts, production, transfers, inventories, recovered materials, wastes, and emissions over one common period before normalization. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_plant_gate` | Foreground dataset | Include route-specific substrate preparation, fermentation, distillation, rectification, product storage, dispatch preparation, on-site utilities, residue handling, and wastewater treatment operated by the reporting site. | `nrel-ethanol-design-2011`; `arcentales-bastidas-ethanol-lca-2022` |
| `boundary_upstream_links` | Lifecycle model | Link separate upstream datasets for delivered feedstocks, enzymes, chemicals, fuels, electricity, water, packaging, and inbound transport; do not embed their production in the site foreground unless the site operates it. | `eu-environmental-footprint-2021` |
| `boundary_product_exclusions` | Product identity | Exclude denaturing and any downstream blending, distribution, use, combustion, or end-of-life; exclude aging and beverage-specific finishing. | `unsd-cpc-3-0-24110`; `us-epa-ap42-distilled-spirits-1997` |
| `boundary_complete_inventory` | Included processes | Record each material, utility, waste, co-product, and elementary emission as an atomic exchange; estimate or flag material missing flows rather than hiding them in an aggregated balance. | `eu-environmental-footprint-2021`; `nrel-ethanol-design-2011` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fermentable substrate or feedstock, utilities, chemicals, enzymes, and packaging delivered to the production site |
| starting_condition_role | Background-to-foreground interface at site receipt |
| product_classification_scope | Undenatured ethyl alcohol with actual alcoholic strength at least 80% vol |
| recursive_input_rule | Purchased conforming ethanol entering redistillation, blending, or dispatch is linked as an upstream ethanol dataset; only the reporting site's additional operations remain foreground. |
| upstream_dataset_requirement | Use supplier-specific or representative datasets for each delivered feedstock, utility, chemical, enzyme, package, and transport service, with route and geography disclosed. |
| disclosure | Declare feedstock route, alcohol-strength method and value, water or composition basis, site boundary, outsourced operations, utility supply mode, co-product destinations, wastewater treatment, dispatch form, reporting period, estimates, and exclusions. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | Feedstock preparation | `required` | Apply only the atomic feedstock and treatment rows used by the declared route. | Prepare fermentable sugars or mash for fermentation. | Prepared fermentable mash transferred to fermentation |
| `fermentation` | Fermentation | `required` | All covered fermentation routes. | Convert fermentable sugars to ethanol-containing broth. | Fermented broth transferred to recovery |
| `distillation_rectification` | Distillation and rectification | `required` | All covered products. | Separate and concentrate ethanol to at least 80% vol. | Rectified ethanol transferred to storage |
| `storage_dispatch` | Product storage and dispatch preparation | `required` | Packaging rows apply only to the declared dispatch form. | Store, verify, and prepare undenatured ethanol for dispatch. | 1,000 kg conforming product at site gate |
| `onsite_utilities_wastewater` | On-site utilities and wastewater treatment | `conditional` | Include each operated boiler, cogeneration, refrigeration, or wastewater-treatment activity; otherwise use purchased utility or off-site treatment datasets. | Supply utilities and manage site wastewater and emissions without double counting purchased services. | Utility output or wastewater treated |

### Process: Feedstock preparation (`feedstock_preparation`)

#### Inputs

##### Product flows

###### Sugarcane juice (`sugarcane_juice`)

Use this route-specific substrate only when sugarcane juice enters the foreground preparation process.

- Selected flow: Sugarcane juice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record receipt mass, soluble-solids or sugar content, moisture basis, supplier, and stock change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `arcentales-bastidas-ethanol-lca-2022`

###### Cane molasses (`cane_molasses`)

Use this atomic substrate only for a molasses-containing route.

- Selected flow: Cane molasses
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record receipt mass, sugar concentration, moisture, grade, supplier, and stock change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `arcentales-bastidas-ethanol-lca-2022`

###### Maize grain (`maize_grain`)

Use maize as one atomic feedstock for the declared starch route.

- Selected flow: Maize grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record receipt mass, moisture, starch content, grade, supplier, and stock change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-epa-ap42-distilled-spirits-1997`

###### Corn stover (`corn_stover`)

Use corn stover only for the declared lignocellulosic route and retain dry-matter and composition records.

- Selected flow: Corn stover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record as-received and dry mass, moisture, carbohydrate and lignin composition, supplier, and stock change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `nrel-ethanol-design-2011`

###### Feed-preparation water (`feed_preparation_water`)

Record water added to milling, mashing, dilution, pretreatment, hydrolysis, or washing without including cooling water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Meter or reconcile water supplied to feed preparation by process area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`

###### Sulfuric acid (`sulfuric_acid`)

Record sulfuric acid only when used for acid pretreatment, hydrolysis, or pH control.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record delivered product mass, concentration, purpose, and batch or meter allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts`
- Sources: `nrel-ethanol-design-2011`

###### Sodium hydroxide for feed preparation (`sodium_hydroxide_feed`)

Record sodium hydroxide only when used for conditioning, pH adjustment, or cleaning assigned to this process.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record delivered product mass, concentration, purpose, and batch allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts`
- Sources: `nrel-ethanol-design-2011`

###### Alpha-amylase (`alpha_amylase`)

Record alpha-amylase as a separate enzyme input for starch liquefaction.

- Selected flow: Alpha-amylase enzyme preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record formulated-product mass, activity, concentration, and batch dose.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts`
- Sources: `us-epa-ap42-distilled-spirits-1997`

###### Glucoamylase (`glucoamylase`)

Record glucoamylase separately when used for starch saccharification.

- Selected flow: Glucoamylase enzyme preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record formulated-product mass, activity, concentration, and batch dose.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts`
- Sources: `us-epa-ap42-distilled-spirits-1997`

###### Feed-preparation electricity (`feed_preparation_electricity`)

Record electricity used by conveying, milling, pumping, agitation, and preparation equipment.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Use submetered electricity or documented equipment load and operating time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`

###### Feed-preparation steam (`feed_preparation_steam`)

Record purchased or on-site steam delivered to pretreatment, cooking, hydrolysis, or evaporation without aggregating it with fuel.

- Selected flow: Saturated process steam
- Flow property / unit: Energy / MJ
- Amount rule: Meter steam or calculate from mass, pressure, condensate return, and verified enthalpy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fermentable mash (`prepared_fermentable_mash`)

The prepared sugar-containing mash or hydrolysate is the single intermediate transferred to fermentation.

- Selected flow: Prepared fermentable mash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record transfer mass, dry matter, fermentable-sugar concentration, temperature, and batch identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_batches`
- Sources: `nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

##### Waste flows

###### Pretreatment solid residue (`pretreatment_solid_residue`)

Record non-marketable solids removed from feed preparation as one wet or dry waste stream with destination and composition.

- Selected flow: Lignin-rich pretreatment solid residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record wet mass, dry matter, composition, recovery, storage change, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct_records`
- Sources: `nrel-ethanol-design-2011`

###### Feed-preparation wastewater (`feed_preparation_wastewater`)

Record wastewater transferred from feed preparation to on-site or off-site treatment separately from solid residue.

- Selected flow: Feed-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Meter or reconcile discharge volume and retain sampled pollutant concentrations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `nrel-ethanol-design-2011`

##### Elementary flows

###### Grain particulate matter to air (`grain_particulate_to_air`)

Record direct particulate emissions from dry grain receipt, handling, cleaning, and milling when those operations are foreground.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use site measurements or a documented source-specific calculation; do not use the AP-42 distilled-spirits section as an amount factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-distilled-spirits-1997`

### Process: Fermentation (`fermentation`)

#### Inputs

##### Product flows

###### Fermentable mash input (`fermentable_mash_input`)

Match this intermediate to the prepared fermentable mash transfer.

- Selected flow: Prepared fermentable mash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reconcile paired transfer records, line hold-up, and losses by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_batches`
- Sources: `nrel-ethanol-design-2011`

###### Fermentation yeast (`fermentation_yeast`)

Record purchased or newly propagated fermentation yeast without double counting internal recycle.

- Selected flow: Saccharomyces cerevisiae fermentation yeast
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record fresh or dry basis, culture source, propagated quantity, reuse, and batch dose.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `us-epa-ap42-distilled-spirits-1997`; `arcentales-bastidas-ethanol-lca-2022`

###### Urea (`urea`)

Record urea separately when used as fermentation nutrient.

- Selected flow: Urea
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record product mass, nitrogen content, purpose, and batch dose.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts`
- Sources: `arcentales-bastidas-ethanol-lca-2022`

###### Diammonium phosphate (`diammonium_phosphate`)

Record diammonium phosphate separately when used as nutrient.

- Selected flow: Diammonium phosphate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record product mass, nutrient concentration, purpose, and batch dose.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts`
- Sources: `nrel-ethanol-design-2011`

###### Polydimethylsiloxane antifoam (`polydimethylsiloxane_antifoam`)

Record this formulated antifoam only when used; do not group it with other process chemicals.

- Selected flow: Polydimethylsiloxane antifoam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record formulated-product mass, concentration, and batch dose.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts`
- Sources: `nrel-ethanol-design-2011`

###### Fermentation cooling water (`fermentation_cooling_water`)

Record net make-up cooling water assigned to fermentation, excluding recirculated internal flow.

- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Amount rule: Meter make-up and blowdown and document the allocation of shared cooling systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`

###### Fermentation electricity (`fermentation_electricity`)

Record electricity for agitation, pumping, cooling, cleaning, and controls assigned to fermentation.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Use submetering or documented equipment load and operating time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fermented ethanol broth (`fermented_ethanol_broth`)

Record the single broth transfer to distillation with its ethanol concentration and batch identity.

- Selected flow: Fermented ethanol broth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record transfer mass or volume and density, ethanol concentration, residual sugar, and temperature.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_records`
- Sources: `nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

##### Waste flows

###### Spent yeast slurry (`spent_yeast_slurry`)

Record surplus yeast leaving fermentation after subtracting internal reuse.

- Selected flow: Spent fermentation yeast slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record wet mass, dry matter, internal recycle, storage change, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct_records`
- Sources: `arcentales-bastidas-ethanol-lca-2022`

##### Elementary flows

###### Fermentation carbon dioxide (`fermentation_carbon_dioxide`)

Record biogenic carbon dioxide vented from fermentation after any recovery.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure recovered and vented carbon dioxide or calculate from reconciled fermentable-carbon and product records with recovery explicitly subtracted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-distilled-spirits-1997`; `nrel-ethanol-design-2011`

###### Fermentation ethanol to air (`fermentation_ethanol_to_air`)

Record ethanol carried in fermentation vent gas as a separate elementary emission.

- Selected flow: Ethanol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use site measurement or a documented vent mass balance; do not apply beverage-aging factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-distilled-spirits-1997`; `nrel-ethanol-design-2011`

### Process: Distillation and rectification (`distillation_rectification`)

#### Inputs

##### Product flows

###### Fermented broth input (`fermented_broth_input`)

Match this input to the fermented ethanol broth transfer.

- Selected flow: Fermented ethanol broth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reconcile paired transfer records, line hold-up, and measured ethanol concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

###### Rectification steam (`rectification_steam`)

Record steam supplied to beer, stripping, rectification, or dehydration units separately from fuel.

- Selected flow: Saturated process steam
- Flow property / unit: Energy / MJ
- Amount rule: Meter steam or calculate from mass, pressure, condensate return, and verified enthalpy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`

###### Rectification electricity (`rectification_electricity`)

Record electricity for pumps, vacuum, controls, cooling, and product-recovery equipment.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Use submetering or documented equipment load and operating time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`

###### Rectification cooling water (`rectification_cooling_water`)

Record net make-up cooling water assigned to condensers and product recovery.

- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Amount rule: Meter make-up and blowdown and document allocation of shared cooling systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rectified ethanol intermediate (`rectified_ethanol_intermediate`)

Record conforming undenatured ethanol transferred from rectification to storage.

- Selected flow: Rectified ethanol `276f1cf5-0aa1-4d57-ad95-9dada6e043a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record net transfer mass, alcohol strength by volume, measurement temperature, water or composition result, and losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_records`
- Sources: `unsd-cpc-3-0-24110`; `nrel-ethanol-design-2011`

###### Fusel oil (`fusel_oil`)

Record recovered fusel oil as a separate co-product only when it has a documented destination outside the process.

- Selected flow: Fusel oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record recovered mass, composition, stock change, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct_records`
- Sources: `us-epa-ap42-distilled-spirits-1997`

##### Waste flows

###### Whole stillage (`whole_stillage`)

Record distillation bottoms as whole stillage before any internal recycle or separation.

- Selected flow: Whole stillage from ethanol distillation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record wet mass, dry matter, composition, internal recycle, stock change, treatment, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct_records`
- Sources: `us-epa-ap42-distilled-spirits-1997`; `arcentales-bastidas-ethanol-lca-2022`

##### Elementary flows

###### Rectification ethanol to air (`rectification_ethanol_to_air`)

Record ethanol in condenser and column vent losses separately from fermentation and storage losses.

- Selected flow: Ethanol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure vent emissions or calculate a documented recovery-system mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-distilled-spirits-1997`; `nrel-ethanol-design-2011`

###### Rectification acetaldehyde to air (`rectification_acetaldehyde_to_air`)

Record direct acetaldehyde emissions when detected or required by the site emission inventory.

- Selected flow: Acetaldehyde to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use source testing, continuous monitoring, or a documented site-specific calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-distilled-spirits-1997`

### Process: Product storage and dispatch preparation (`storage_dispatch`)

#### Inputs

##### Product flows

###### Rectified ethanol for dispatch (`dispatch_ethanol_input`)

Match this input to rectified ethanol transferred from the recovery process.

- Selected flow: Rectified ethanol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reconcile tank receipts, stock changes, quality holds, rework, and dispatch losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources: `nrel-ethanol-design-2011`

###### Dispatch electricity (`dispatch_electricity`)

Record electricity for storage pumps, ventilation, loading, filling, and dispatch equipment.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Use submetering or documented equipment load and operating time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`

###### Nitrogen blanketing gas (`nitrogen_blanketing_gas`)

Record nitrogen separately when tank blanketing is used.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record metered or purchased quantity assigned to ethanol storage and loading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `nrel-ethanol-design-2011`

###### Steel drum (`steel_drum`)

Record one-way steel drums only when used for the declared dispatch form.

- Selected flow: Steel drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record drum count, verified unit mass, reuse status, and product allocation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-environmental-footprint-2021`

###### High-density polyethylene drum (`hdpe_drum`)

Record one-way high-density polyethylene drums separately when used.

- Selected flow: High-density polyethylene drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record drum count, verified unit mass, reuse status, and product allocation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-environmental-footprint-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference ethanol output (`reference_ethanol_output`)

This is the declared reference product leaving the production-site gate.

- Selected flow: Rectified ethanol `276f1cf5-0aa1-4d57-ad95-9dada6e043a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Set to 1,000 kg of net conforming output after quality holds, stock changes, and dispatch losses.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg conforming undenatured ethanol at least 80% vol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-24110`

##### Waste flows

###### Off-spec ethanol (`off_spec_ethanol`)

Record ethanol that leaves the product system for treatment or disposal; internal rework remains an internal transfer.

- Selected flow: Off-spec ethanol waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record mass, alcohol strength, reason for rejection, rework, recovery, and final destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct_records`
- Sources: `nrel-ethanol-design-2011`

##### Elementary flows

###### Storage ethanol to air (`storage_ethanol_to_air`)

Record working, breathing, loading, and fugitive ethanol losses from storage and dispatch.

- Selected flow: Ethanol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use site measurement or a documented tank and loading mass balance; do not use beverage-aging factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-distilled-spirits-1997`; `nrel-ethanol-design-2011`

### Process: On-site utilities and wastewater treatment (`onsite_utilities_wastewater`)

#### Inputs

##### Product flows

###### Natural gas (`natural_gas`)

Record natural gas only for on-site combustion assigned to the ethanol system.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record metered volume, standard conditions, lower or higher heating value, and allocation to utility output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_records`
- Sources: `nrel-ethanol-design-2011`

###### Bagasse fuel (`bagasse_fuel`)

Record bagasse separately when combusted on site for steam or cogeneration.

- Selected flow: Sugarcane bagasse fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record wet and dry mass, moisture, heating value, internal origin or purchase, and allocation to utility output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_records`
- Sources: `arcentales-bastidas-ethanol-lca-2022`

###### Heavy fuel oil (`heavy_fuel_oil`)

Record heavy fuel oil separately when used as boiler or cogeneration fuel.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record delivered mass, heating value, sulfur content, stock change, and allocation to utility output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_records`
- Sources: `arcentales-bastidas-ethanol-lca-2022`

###### Ammonia refrigerant (`ammonia_refrigerant`)

Record ammonia make-up separately when an R717 refrigeration system is used.

- Selected flow: Ammonia refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate make-up from purchases and beginning/end inventory and reconcile service recovery.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `nrel-ethanol-design-2011`

###### Sodium hydroxide for wastewater treatment (`treatment_sodium_hydroxide`)

Record sodium hydroxide separately when consumed in on-site wastewater treatment.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record delivered product mass, concentration, stock change, and treatment use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts`
- Sources: `nrel-ethanol-design-2011`

###### Wastewater to treatment (`wastewater_to_treatment`)

Record the combined wastewater entering on-site treatment after preserving source-process records.

- Selected flow: Ethanol-plant wastewater
- Flow property / unit: Volume / m3
- Amount rule: Meter influent volume and retain flow-weighted chemical oxygen demand, nitrogen, phosphorus, pH, and temperature.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `nrel-ethanol-design-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### On-site steam (`onsite_steam`)

Record steam generated on site as the single utility output paired to boiler or cogeneration inputs.

- Selected flow: Saturated process steam
- Flow property / unit: Energy / MJ
- Amount rule: Calculate from measured steam mass, pressure, temperature, feedwater, and condensate return; prevent double counting with purchased steam.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `nrel-ethanol-design-2011`; `arcentales-bastidas-ethanol-lca-2022`

###### Treated wastewater (`treated_wastewater`)

Record treated effluent leaving the site or transferred for further treatment.

- Selected flow: Treated ethanol-plant wastewater
- Flow property / unit: Volume / m3
- Amount rule: Meter effluent volume and preserve discharge destination, permit point, and paired pollutant samples.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `nrel-ethanol-design-2011`

##### Waste flows

###### Wastewater sludge (`wastewater_sludge`)

Record dewatered or wet sludge leaving treatment separately from effluent.

- Selected flow: Ethanol-plant wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record wet mass, dry matter, composition, storage change, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_coproduct_records`
- Sources: `nrel-ethanol-design-2011`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_carbon_dioxide_to_air`)

Record fossil carbon dioxide from on-site combustion separately from biogenic carbon dioxide.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate from each fossil fuel record and documented carbon factor, subtracting captured carbon where applicable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `nrel-ethanol-design-2011`

###### Biogenic carbon dioxide to air (`biogenic_carbon_dioxide_to_air`)

Record biogenic carbon dioxide from bagasse or other biomass combustion separately from fermentation carbon dioxide.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate from biomass fuel carbon records and documented factors, subtracting captured carbon where applicable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `arcentales-bastidas-ethanol-lca-2022`

###### Nitrogen oxides to air (`nitrogen_oxides_to_air`)

Record direct nitrogen oxides from on-site combustion as one pollutant exchange on the declared reporting basis.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use source testing, continuous monitoring, or fuel- and equipment-specific calculation with the reporting basis declared.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

###### Sulfur dioxide to air (`sulfur_dioxide_to_air`)

Record sulfur dioxide from sulfur-bearing fuels as a separate elementary emission.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use source testing or a fuel sulfur mass balance with retention explicitly documented.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

###### Particulate matter to air (`particulate_matter_to_air`)

Record stack particulate matter separately from grain-handling particulate emissions.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use source testing, continuous monitoring, or equipment-specific calculation and state the particle-size basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

###### Ammonia refrigerant to air (`ammonia_refrigerant_to_air`)

Record unrecovered R717 refrigerant loss as ammonia emitted to air.

- Selected flow: Ammonia to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate from refrigerant inventory, purchases, recovery, and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `nrel-ethanol-design-2011`

###### Chemical oxygen demand to water (`cod_to_water`)

Record chemical oxygen demand discharged in treated effluent as one elementary exchange.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate flow-weighted load from paired effluent volume and representative concentration measurements.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `nrel-ethanol-design-2011`

###### Total nitrogen to water (`total_nitrogen_to_water`)

Record total nitrogen discharged in treated effluent separately from chemical oxygen demand and phosphorus.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate flow-weighted load from paired effluent volume and representative concentration measurements.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `nrel-ethanol-design-2011`; `arcentales-bastidas-ethanol-lca-2022`

###### Total phosphorus to water (`total_phosphorus_to_water`)

Record total phosphorus discharged in treated effluent as a separate elementary exchange.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate flow-weighted load from paired effluent volume and representative concentration measurements.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming ethanol
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `nrel-ethanol-design-2011`; `arcentales-bastidas-ethanol-lca-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-output foreground processes | First subdivide separately metered processes and internal transfers so ethanol, steam, electricity, stillage, fusel oil, carbon dioxide recovery, and other outputs receive only causally connected exchanges. | `eu-environmental-footprint-2021` |
| `allocation_system_expansion` | Marketable co-products | Where subdivision is insufficient and a documented displaced product exists, apply system expansion or substitution and disclose the substituted function, market, quality, and sensitivity case. | `eu-environmental-footprint-2021`; `arcentales-bastidas-ethanol-lca-2022` |
| `allocation_physical_then_economic` | Residual unresolved multifunctionality | If substitution is not justified, use a relevant physical causal relation; use economic allocation only when no defensible physical relation exists, with prices, period, geography, and sensitivity disclosed. | `eu-environmental-footprint-2021` |
| `allocation_waste_or_coproduct` | Stillage, fusel oil, recovered carbon dioxide, lignin residue, and surplus energy | Classify each output by actual destination and marketability before allocation; do not grant a co-product credit to material sent for disposal or treatment. | `eu-environmental-footprint-2021`; `arcentales-bastidas-ethanol-lca-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `feedstock_preparation`; `storage_dispatch` | Feedstocks, nitrogen, and other received materials | invoices, weighbridge tickets, tank gauges, inventory logs, certificates | material identity; supplier; mass or volume; density; moisture or concentration; beginning and ending inventory; batch; date | reconcile receipts plus beginning stock minus ending stock and transfers | native unit and kg | each receipt and monthly close | common reporting period | all included site operations | aggregate by atomic material and route before reference normalization | calibrated scales or gauges; supplier certificate; inventory reconciliation |
| `cp_chemical_receipts` | `feedstock_preparation`; `fermentation`; `onsite_utilities_wastewater` | Each enzyme, nutrient, antifoam, acid, alkali, or treatment chemical | invoices, batch sheets, warehouse issues, formulation certificates | chemical identity; formulated-product mass; active concentration or activity; purpose; batch; inventory | reconcile receipts, issues, return, and stock; allocate only to the consuming process | kg formulated product and declared active basis | each batch and monthly close | common reporting period | all included process areas | sum each chemical separately and normalize after stock reconciliation | product specification; batch record; inventory record |
| `cp_process_batches` | `feedstock_preparation` | Prepared mash and internal transfers | batch sheets, transfer meters, laboratory results | transfer mass or volume; density; dry matter; fermentable sugar; temperature; batch id; losses | pair source and destination records and reconcile line hold-up | kg or m3 plus composition | each batch | common reporting period | all included preparation lines | aggregate matched transfers without counting internal circulation | calibrated transfer meter; laboratory certificate; reconciliation |
| `cp_fermentation_records` | `fermentation` | Fermentation inputs, broth, and yeast | batch logs, tank gauges, laboratory analyses | mash input; yeast dose; fermentation time; broth mass or volume; density; ethanol; residual sugar; recovered carbon dioxide | reconcile each fermenter batch and product transfer | kg or m3 plus concentration | each batch | common reporting period | all fermenters in scope | aggregate conforming batches and separately report aborted batches | calibrated tanks; laboratory method; batch approval |
| `cp_distillation_records` | `distillation_rectification` | Broth, rectified ethanol, and recovery performance | flowmeters, tank gauges, laboratory analyses, production logs | broth input; ethanol concentration; product mass; alcohol strength; water or composition; temperature; reflux or recovery records; stillage | reconcile ethanol and total mass through recovery and transfer | kg and % vol | each campaign or daily | common reporting period | all recovery trains in scope | aggregate only output meeting the category threshold | calibrated meter; alcohol-strength method; mass-balance closure |
| `cp_utility_meters` | all processes | Electricity, steam, water, and utility outputs | meters, invoices, equipment runtime, steam logs | meter id; start and end readings; process area; pressure; temperature; condensate; operating time; conversion factor | use submeters first; otherwise calculate from verified load and operating time | native utility unit | continuous or each shift, monthly close | common reporting period | all included meters and shared systems | subtract internal circulation and allocate shared services with disclosed drivers | calibration; invoice reconciliation; engineering calculation |
| `cp_fuel_records` | `onsite_utilities_wastewater` | Each on-site fuel | flowmeters, weighbridge records, invoices, fuel certificates | fuel identity; quantity; moisture; heating value; carbon and sulfur; stock change; boiler or turbine | reconcile fuel receipt and consumption by equipment | native unit, kg, and MJ | each receipt and daily or monthly meter close | common reporting period | all included combustion units | aggregate each fuel separately and allocate to measured utility output | calibrated meter; supplier certificate; stock reconciliation |
| `cp_refrigerant_records` | `onsite_utilities_wastewater` | Ammonia refrigerant | purchase, inventory, recovery, and maintenance logs | refrigerant identity; initial and final charge; purchase; recovery; service addition; incident loss | annual or campaign mass balance | kg | each service event and annual close | common reporting period | all included R717 systems | purchases plus initial inventory minus recovery and final inventory | technician log; cylinder weights; incident record |
| `cp_storage_dispatch_records` | `storage_dispatch` | Product storage, quality release, and dispatch | tank gauges, weighbridge tickets, quality certificates, shipping records | receipt; stock; rework; off-spec quantity; dispatched net mass; alcohol strength; temperature; package form | reconcile tank movements and net dispatch | kg and % vol | each tank movement and shipment | common reporting period | all product tanks and loading points | normalize only released product meeting at least 80% vol | calibrated scale or tank; signed quality release; dispatch record |
| `cp_packaging_records` | `storage_dispatch` | Each one-way packaging component | purchase, issue, count, and unit-mass records | package material; count; unit mass; reusable or one-way status; product allocation; waste count | multiply verified count by unit mass and reconcile stock | item and kg | each filling run and monthly close | common reporting period | all packaging lines in scope | report each component separately and exclude reusable assets unless consumed | supplier specification; count reconciliation; sample weighing |
| `cp_waste_coproduct_records` | all processes | Each waste or co-product | scales, tank gauges, manifests, invoices, destination records | identity; wet mass; dry matter; composition; stock; destination; revenue; treatment | reconcile generation, internal reuse, sale, treatment, and stock | kg or m3 | each movement and monthly close | common reporting period | all included waste and co-product stores | separate marketable output, internal recycle, and waste by destination | calibrated measure; signed manifest; buyer or treatment record |
| `cp_wastewater_records` | all processes | Wastewater, treated effluent, and water pollutants | flowmeters, composite samples, laboratory reports, discharge records | source; influent and effluent volume; COD; total nitrogen; total phosphorus; pH; temperature; sampling time | pair representative concentration with flow over the same interval | m3 and kg pollutant | continuous flow; representative composite sampling | common reporting period | all included drains and discharge points | calculate flow-weighted loads; do not sum concentration values | calibrated flowmeter; accredited or documented laboratory method; permit record |
| `cp_direct_emissions` | all processes | Each direct air emission | stack tests, continuous monitoring, vent flow and concentration, mass-balance inputs | source id; pollutant; flow; concentration; operating time; fuel; recovery; method | calculate each pollutant by source and reconcile recovered material | kg | monitoring or test frequency required by permit, plus annual close | common reporting period | all included vents, stacks, tanks, and loading points | sum each elementary flow separately after source-level calculation | calibration; test report; permit method; mass-balance evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground exchange | normalized amount = reconciled exchange amount × 1,000 kg / reconciled conforming ethanol output kg | period exchange; net conforming output | amount per 1,000 kg reference flow | `eu-environmental-footprint-2021` |
| `calc_volume_to_mass` | Liquid transfers recorded by volume | mass = measured volume × density at the declared temperature; retain measured volume, density, temperature, and method | volume; density; temperature | kg liquid | `eu-environmental-footprint-2021` |
| `calc_ethanol_quality_gate` | Reference product | segregate output with measured alcohol strength below 80% vol from conforming output; no production-weighted averaging across the threshold | batch output; % vol; test method | conforming output kg and off-spec kg | `unsd-cpc-3-0-24110` |
| `calc_internal_transfer_reconciliation` | Prepared mash, broth, ethanol, steam, and recycled materials | destination input = source output - measured transfer loss - documented inventory change; internal transfers do not create upstream burden | paired records; line hold-up; loss | reconciled transfer | `eu-environmental-footprint-2021` |
| `calc_wastewater_load` | COD, total nitrogen, and total phosphorus | pollutant load = sum of representative interval volume × paired concentration, with unit conversion documented | effluent volume; paired concentration | kg pollutant to water | `nrel-ethanol-design-2011` |
| `calc_refrigerant_loss` | Ammonia refrigeration | loss = purchases + initial charge - recovered quantity - final charge, adjusted for documented transfers | purchase; initial and final inventory; recovery; transfer | kg ammonia to air | `nrel-ethanol-design-2011` |
| `calc_mass_balance` | Each process and full site | reconcile input, product, internal transfer, recovered co-product, waste, emission, and inventory change on compatible wet, dry, carbon, or ethanol bases; investigate material closure gaps | collected flow records; composition; stock change | balance and unresolved difference | `eu-environmental-footprint-2021`; `nrel-ethanol-design-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain alcohol-strength result, measurement temperature and method, undenatured-status evidence, water or composition result, product grade, and dispatch form for every aggregated product family. | quality certificate; laboratory result; product specification |
| `dq_temporal` | Foreground data | Use one common period of at least 12 consecutive months unless a shorter period is demonstrably representative of a new or changed operation; disclose seasonality and shutdowns. | dated raw records; production calendar; justification |
| `dq_technology_route` | Process inventory | Identify feedstock and pretreatment route, fermentation organism, recovery configuration, dehydration step, utility supply, wastewater treatment, and co-product management. | process flow diagram; equipment list; operating narrative |
| `dq_measurement` | Metered and sampled data | Use calibrated instruments and documented laboratory methods; retain native values and conversion factors. | calibration certificate; method; chain of custody; calculation sheet |
| `dq_completeness` | All included processes | Reconcile all identified atomic material, energy, waste, co-product, and elementary flows and explain missing or estimated values. | completeness matrix; mass and energy balances; variance review |
| `dq_supplier_background` | Upstream links | Match supplier, feedstock route, geography, technology, and year where material; disclose proxies and data quality limitations. | supplier data; dataset metadata; proxy rationale |
| `dq_allocation` | Multi-output processes | Retain subdivision, substitution, physical relation, or economic data and the sensitivity case needed to reproduce allocation. | meter map; market evidence; price series; allocation calculation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference flow | Fail category conformance if the product is denatured, the measured alcoholic strength is below 80% vol, or the strength, temperature, and method are missing. | `unsd-cpc-3-0-24110` |
| `validate_reference_amount` | Reference flow | Require exactly 1,000 kg net conforming output after stock change, off-spec product, and dispatch loss reconciliation. | `eu-environmental-footprint-2021` |
| `validate_process_coverage` | Foreground dataset | Require feedstock preparation, fermentation, distillation and rectification, and storage/dispatch inventories; require each applicable on-site utility and wastewater process or an explicit linked external service. | `nrel-ethanol-design-2011` |
| `validate_atomic_inventory` | Inventory rows | Reject aggregated selected-flow labels and require electricity, steam, each fuel, each refrigerant, each feedstock, each chemical, each package, each waste, and each elementary emission to remain separate. | `eu-environmental-footprint-2021` |
| `validate_transfer_balance` | Internal intermediates | Require paired preparation-to-fermentation, fermentation-to-recovery, recovery-to-storage, and on-site steam transfers to reconcile after explicit loss and inventory change. | `nrel-ethanol-design-2011` |
| `validate_mass_and_ethanol_balance` | Process and site totals | Require documented mass and ethanol-balance checks and investigation of material unexplained differences. | `eu-environmental-footprint-2021`; `nrel-ethanol-design-2011` |
| `validate_emissions_wastewater` | Direct emissions and discharge | Require each applicable vent, stack, refrigerant loss, wastewater flow, COD, nitrogen, and phosphorus record or a documented not-applicable determination. | `nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997` |
| `validate_allocation` | Multi-output processes | Reject unreported or unreproducible allocation and any credit assigned to an output sent for treatment or disposal. | `eu-environmental-footprint-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after independent review |
| downstream_use | Plant-gate foreground production package for process datasets and lifecycle models of undenatured ethanol at least 80% vol |
| allowed_use | Studies matching the declared feedstock route, technology, geography, alcohol strength, water or composition, utility supply, co-product treatment, dispatch form, and reference mass basis |
| excluded_use | Denatured or synthetic ethanol; ethanol below 80% vol; beverage products; unqualified global average; downstream blending, distribution, or combustion without added stages |
| required_metadata | PCR id and version; product flow UUID; alcohol strength, temperature, and test method; undenatured status; water or composition; feedstock and route; site and geography; technology; reporting period; dispatch form; boundary; upstream links; co-product and allocation method |
| required_quality_disclosure | Primary-data share; meter and laboratory coverage; mass, ethanol, water, and energy balance results; missing flows; proxies; range-evidence gaps; uncertainty; allocation sensitivity; reviewer status |
| update_trigger | Change in feedstock, fermentation or recovery technology, alcohol-strength specification, energy or water system, co-product destination, wastewater treatment, dispatch form, site boundary, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-24110` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 24110. https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-23) | Official category identity, undenatured status, and minimum 80% vol threshold |
| `eu-environmental-footprint-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annex I. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-23) | Functional unit, boundary completeness, company-specific data, data quality, multifunctionality, allocation, and validation |
| `us-epa-ap42-distilled-spirits-1997` | `official_guidance` | United States Environmental Protection Agency, AP-42 Section 9.12.3, Distilled Spirits, 1997. https://www.epa.gov/sites/default/files/2020-10/documents/c9s12-3.pdf (retrieved 2026-08-23) | Grain preparation, mashing, fermentation, distillation and rectification, stillage, and direct emission candidates; its beverage-aging factors are excluded |
| `nrel-ethanol-design-2011` | `official_guidance` | Humbird et al., Process Design and Economics for Biochemical Conversion of Lignocellulosic Biomass to Ethanol, NREL/TP-5100-47764, 2011. https://www.nrel.gov/docs/fy11osti/47764.pdf (retrieved 2026-08-23) | Lignocellulosic route process decomposition, pretreatment, hydrolysis, fermentation, product recovery, wastewater treatment, lignin combustion, utilities, and process balances |
| `arcentales-bastidas-ethanol-lca-2022` | `literature` | Arcentales-Bastidas, Silva, and Ramirez, The Environmental Profile of Ethanol Derived from Sugarcane in Ecuador, Energies 15 (2022) 5421. https://doi.org/10.3390/en15155421 | Verified sugarcane route decomposition, juice and molasses fermentation, yeast and urea, distillation, stillage/vinasse, bagasse cogeneration, and co-product system-expansion case |
