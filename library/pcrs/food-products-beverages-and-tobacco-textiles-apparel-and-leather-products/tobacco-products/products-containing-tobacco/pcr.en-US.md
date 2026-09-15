---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.products-containing-tobacco
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Products containing tobacco

## 1. Scope and Applicability

This PCR governs factory-gate foreground data packages for finished manufactured products that physically contain tobacco or reconstituted tobacco and are intended for inhalation without combustion. The United Nations CPC Ver. 3.0 explanatory note defines subclass 25092 through HS 2022 heading 24.04; within that heading, HS 2404.11 specifically identifies products intended for inhalation without combustion that contain tobacco or reconstituted tobacco. For this product-title PCR, actual tobacco or reconstituted-tobacco content is required and shall be declared. Sources: `un-cpc-3-2025`; `wco-hs-2022-chapter-24`.

The foreground boundary covers receipt and preparation of tobacco material, conditional on-site production of reconstituted tobacco sheet, formulation, forming and assembly of the tobacco-containing consumable, quality release, and packaging. A representative route is a heated-tobacco consumable containing a formed tobacco plug. FDA's technical review describes a tobacco plug made from crimped cast reconstituted tobacco sheet, with water, glycerol, guar gum, cellulose fibres, and route-specific non-tobacco components; EPA documents tobacco conditioning, blending, cutting, drying, remoisturising, reconstituted-sheet production, forming, reject recovery, packing, and associated wastewater. Sources: `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006`.

Combustible cigars, cheroots, cigarillos and cigarettes; loose smoking tobacco; water-pipe tobacco; tobacco extracts and essences; standalone reconstituted tobacco sold as a material; nicotine-only liquids, cartridges, oral products or transdermal products with no tobacco; tobacco-free substitutes; and the reusable heating device are excluded. Tobacco cultivation, curing, stemming, redrying, and purchased reconstituted-tobacco production are upstream unless performed at the reporting facility and explicitly included. Consumer use and end-of-life are outside the factory-gate foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.products-containing-tobacco |
| classification_refs | CPC 3.0: 25092; defined by the CPC explanatory note through HS 2022 heading 24.04, with tobacco-containing non-combustion products identified in HS 2404.11 |
| covered_products | Finished consumable products physically containing tobacco or reconstituted tobacco and intended for inhalation without combustion, including tobacco sticks, plugs, capsules or pods when the tobacco-containing consumable is the saleable reference product |
| excluded_products | Combustible cigars and cigarettes; loose or water-pipe smoking tobacco; tobacco extracts; standalone reconstituted tobacco material; nicotine-only or tobacco-free products; reusable heating devices; medicinal nicotine products |
| representative_product | Finished tobacco-containing non-combustion consumable at factory release, expressed as net product mass excluding separate retail, transport and pallet packaging |
| production_route | Tobacco-material receipt; conditional conditioning, blending or reconstitution; formulation; forming and component assembly; quality release; retail and transport packaging; conditional on-site wastewater treatment |
| market_state | Finished packaged or declared bulk tobacco-containing consumable, with product architecture, tobacco form, formulation, intended use, unit mass, count per pack, packaging configuration, moisture specification and shelf-life condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a finished manufactured consumable that contains tobacco or reconstituted tobacco and is intended for inhalation without combustion |
| How much | 1,000 kg net conforming tobacco-containing product, excluding separately inventoried packaging mass |
| How well | Conforms to the declared formulation, tobacco-content, product architecture, unit-mass, moisture, physical-performance, chemical and target-market specifications |
| How long or cycle | One completed production and release batch at the factory gate; shelf life is declared but no consumer service life is assigned |
| reference_flow_link | Net released mass of conforming finished tobacco-containing consumables after documented rejects and rework |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net finished product |
| Reference product flow | Products containing tobacco `653e40de-b5ea-4e0c-8542-98a32e6bae12` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | tobacco_present=true; tobacco form and origin; reconstituted-tobacco content; intended inhalation-without-combustion route; product architecture and component list; complete ingredient formulation by mass; humectant and flavour specification; net unit mass and units per pack; moisture and water-activity specifications where controlled; package-component masses; release specifications; production site, geography, batch and reference period; whether a reusable device is excluded or separately modelled |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | net conforming finished product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every foreground exchange to exactly 1,000 kg net conforming product. Keep primary, secondary and tertiary packaging outside the reference amount and inventory each component separately. |
| `unit_count_to_mass` | production and packing records recorded by unit count | Mass | kg | Convert count to net product mass using product-specific measured mean unit mass and retained sample records; preserve count, sampling plan, measured mass and conversion calculation. |
| `ingredient_mass` | tobacco, humectants, binders, fibres, additives and adhesives | Mass | kg | Record each physically distinct ingredient as its own exchange from calibrated issue or batch records; do not aggregate ingredients into a recipe total. |
| `component_mass` | tubes, filters, wraps, papers and packaging components | Mass | kg | Record issued and returned mass separately for each component; use count-to-mass conversion only with component-specific measured mass. |
| `energy_separation` | electricity, purchased steam and natural gas | Energy | kWh or MJ | Keep electricity, purchased steam and each combusted fuel as separate exchanges; preserve meter basis, heating-value basis and conversion factors. |
| `water_separation` | formulation, process conditioning, equipment washing and treatment | Volume or Mass | m3 or kg | Record water separately by use role and process; do not combine water incorporated into product with cleaning or treatment water. |
| `wastewater_load` | each direct discharge indicator | Mass | kg | Calculate each pollutant load separately from matched discharge volume and concentration records; retain sampling time, treatment boundary and receiving compartment. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Tobacco blend, tobacco stems/fines, purchased reconstituted tobacco, and non-tobacco ingredients and components received at the reporting facility gate; the selected starting materials and any on-site reconstitution route are declared |
| starting_condition_role | Upstream product inputs to the foreground manufacture of the finished tobacco-containing consumable |
| product_classification_scope | Finished products physically containing tobacco or reconstituted tobacco and intended for inhalation without combustion; nicotine-only, tobacco-free, combustible and reusable-device products are excluded |
| recursive_input_rule | Returned or reworked product already in this category is recorded as a separately quantified same-category product input with its prior burdens retained; it is not silently treated as virgin tobacco or burden-free material |
| upstream_dataset_requirement | Link tobacco cultivation and curing, purchased tobacco preparation or reconstituted-sheet production, electricity, steam, natural gas, water, chemicals, polymers, paper, adhesives, packaging and off-site treatment to representative upstream datasets |
| disclosure | Declare product route; foreground starting materials; on-site versus purchased tobacco preparation; device exclusion; energy and water metering; reject and rework routing; wastewater treatment; air controls; packaging boundary; storage conditions; and all cut-offs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground production | Include directly controlled operations from receipt of declared tobacco materials and components through quality release and factory-gate dispatch of the finished product. | `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006` |
| `boundary_route_specific` | tobacco preparation and product architecture | Include reconstitution, conditioning, steam use, drying, cutting, forming, filters, tubes, papers and adhesives only when performed or used in the declared product route; disclose purchased intermediates as upstream datasets. | `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006` |
| `boundary_complete_inventory` | every included process | Inventory electricity, purchased steam, natural gas, process water, each ingredient, each product component, each package component, each waste stream, each direct air emission, wastewater and each wastewater pollutant as separate exchanges. | `us-epa-tobacco-processing-2006`; `eu-pef-2021` |
| `boundary_device_exclusion` | tobacco consumable and reusable heater | Exclude the reusable heating device from this consumable-product reference flow. A study that includes the device shall model it as a separate product system and disclose the allocation over device lifetime. | `us-fda-iqos-tpl-2019`; `wco-hs-2022-chapter-24` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tobacco_preparation` | Tobacco preparation and formulation | conditional | Include when tobacco is conditioned, blended, ground, reconstituted, formulated, dried or cut at the reporting site | Produce the declared prepared tobacco material | kg prepared tobacco material transferred to assembly |
| `forming_assembly` | Forming and product assembly | required | Always include for the finished tobacco-containing consumable | Form the tobacco portion and assemble each non-tobacco component | kg unpacked conforming product |
| `packaging_release` | Packaging, quality release and dispatch preparation | required | Always include; component rows apply to the declared packaging configuration | Inspect, pack and release the finished product | 1,000 kg net released product |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include when tobacco-process wastewater is treated or directly discharged under foreground control | Treat wastewater and quantify sludge and separate discharge loads | m3 wastewater treated |

### Process: Tobacco preparation and formulation (`tobacco_preparation`)

#### Inputs

##### Product flows

###### Blended tobacco material (`blended_tobacco_input`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Blended tobacco for manufactured tobacco
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass from calibrated receiving and issue records, with tobacco form and moisture stated.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tobacco_materials`
- Sources: `us-epa-tobacco-processing-2006`

###### Process water incorporated into tobacco (`process_water`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-dosed water entering conditioning, extraction, slurry or formulation; exclude cleaning water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006`

###### Glycerol humectant (`glycerol`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Glycerol
- Flow property / unit: Mass / kg
- Amount rule: Weighed glycerol issued to the formulation batch; mark not applicable only when absent from the declared formulation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `us-fda-iqos-tpl-2019`

###### Propylene glycol humectant (`propylene_glycol`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Propylene glycol
- Flow property / unit: Mass / kg
- Amount rule: Weighed propylene glycol issued to the formulation batch when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `us-fda-iqos-tpl-2019`

###### Guar gum binder (`guar_gum`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Guar gum
- Flow property / unit: Mass / kg
- Amount rule: Weighed guar gum issued to the reconstituted-tobacco or tobacco-plug formulation when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `us-fda-iqos-tpl-2019`

###### Cellulose fibre reinforcement (`cellulose_fibre`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Cellulose fibre
- Flow property / unit: Mass / kg
- Amount rule: Weighed cellulose fibre added during sheet or plug formulation when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredients`
- Sources: `us-fda-iqos-tpl-2019`

###### Electricity for tobacco preparation (`preparation_electricity`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered electricity for conveying, grinding, mixing, extraction, evaporation, sheet forming, drying and cutting actually performed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `us-epa-tobacco-processing-2006`

###### Purchased steam for conditioning or drying (`purchased_steam`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Steam, at plant
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam entering conditioning, evaporation or drying; exclude steam generated from separately inventoried on-site natural gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_records`
- Sources: `us-epa-tobacco-processing-2006`

###### Natural gas for on-site thermal equipment (`natural_gas`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural gas consumed by directly controlled dryers or boilers, on lower- or higher-heating-value basis as declared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_records`
- Sources: `us-epa-tobacco-processing-2006`

#### Outputs

##### Product flows

###### Prepared tobacco material (`prepared_tobacco_material`)

This product flow leaves the process boundary as the stated intermediate or reference output. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Prepared tobacco material for non-combustion product assembly
- Flow property / unit: Mass / kg
- Amount rule: Net transferred mass after conditioning, formulation, sheet forming, drying and cutting actually performed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tobacco_materials`
- Sources: `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006`

##### Waste flows

###### Tobacco sheet trim rejected from preparation (`tobacco_solids_waste`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Tobacco sheet-trim waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net tobacco sheet-trim waste sent to recovery, treatment or disposal, with destination declared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-tobacco-processing-2006`

###### Tobacco-preparation process wastewater (`tobacco_process_wastewater`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Tobacco-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured wastewater from sheet forming, extract loss, equipment washing, air-control blowdown and other included tobacco-preparation operations before treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `us-epa-tobacco-processing-2006`

##### Elementary flows

###### Tobacco particulate matter to air (`tobacco_pm10_to_air`)

This elementary flow crosses the process boundary to the stated environmental compartment and is recorded separately from other emissions. Its quantity is obtained from the foreground record or calculation rule below.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack or fugitive PM10 mass from measured concentration and airflow, or a documented site emission calculation for included tobacco-handling equipment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-tobacco-processing-2006`

###### Fossil carbon dioxide from natural gas (`fossil_co2_to_air`)

This elementary flow crosses the process boundary to the stated environmental compartment and is recorded separately from other emissions. Its quantity is obtained from the foreground record or calculation rule below.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from metered natural gas and a documented site or jurisdictional combustion factor; mark not applicable when no on-site natural gas is burned.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-tobacco-processing-2006`

###### Nitrogen oxides from natural gas (`nitrogen_oxides_to_air`)

This elementary flow crosses the process boundary to the stated environmental compartment and is recorded separately from other emissions. Its quantity is obtained from the foreground record or calculation rule below.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from metered natural gas and the applicable equipment-specific factor; mark not applicable when no on-site combustion occurs.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared tobacco material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-tobacco-processing-2006`

### Process: Forming and product assembly (`forming_assembly`)

#### Inputs

##### Product flows

###### Prepared tobacco supplied to assembly (`assembly_tobacco_material`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Prepared tobacco material for non-combustion product assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass from on-site preparation or purchased prepared-tobacco receipt records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-fda-iqos-tpl-2019`

###### Electricity for forming and assembly (`assembly_electricity`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered electricity for crimping, forming, cutting, wrapping, gluing, filter insertion, conveying and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006`

###### Cellulose acetate hollow tube (`cellulose_acetate_tube`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Cellulose acetate hollow tube
- Flow property / unit: Mass / kg
- Amount rule: Net issued component mass when the declared architecture contains a hollow acetate tube.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-fda-iqos-tpl-2019`

###### Polylactic acid cooling filter (`polylactic_acid_filter`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Polylactic acid filter element
- Flow property / unit: Mass / kg
- Amount rule: Net issued component mass when a polylactic-acid cooling element is present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-fda-iqos-tpl-2019`

###### Cellulose acetate mouthpiece filter (`cellulose_acetate_filter`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Cellulose acetate mouthpiece filter
- Flow property / unit: Mass / kg
- Amount rule: Net issued component mass when a cellulose-acetate mouthpiece is present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-fda-iqos-tpl-2019`

###### Tobacco-plug wrap paper (`plug_wrap_paper`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Tobacco-plug wrap paper
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass of the paper directly wrapping the tobacco portion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-fda-iqos-tpl-2019`

###### Outer structural paper (`outer_paper`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Outer structural paper for tobacco consumable
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass of the outer paper used to hold the assembled consumable together.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-fda-iqos-tpl-2019`

###### Tipping paper (`tipping_paper`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Tipping paper
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass joining the mouthpiece or downstream component to the tobacco portion when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-fda-iqos-tpl-2019`

###### Ethylene-vinyl acetate adhesive (`eva_adhesive`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Ethylene-vinyl acetate adhesive
- Flow property / unit: Mass / kg
- Amount rule: Net adhesive mass issued to structural and tipping-paper bonding after documented returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `us-fda-iqos-tpl-2019`

#### Outputs

##### Product flows

###### Unpacked conforming tobacco product (`unpacked_tobacco_product`)

This product flow leaves the process boundary as the stated intermediate or reference output. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Unpacked product containing tobacco
- Flow property / unit: Mass / kg
- Amount rule: Net conforming mass passing in-process physical and formulation checks before retail packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release`
- Sources: `us-fda-iqos-tpl-2019`

##### Waste flows

###### Off-specification tobacco product (`off_spec_tobacco_product`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Off-specification product containing tobacco
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected product mass, separated by internal rework, tobacco recovery, treatment and disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-tobacco-processing-2006`

###### Paper trim from assembly (`paper_trim_waste`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Paper trim waste from product assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured paper offcuts and rejected wraps leaving assembly, net of documented internal return.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-tobacco-processing-2006`

###### Plastic filter trim from assembly (`plastic_filter_trim_waste`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Plastic filter trim waste
- Flow property / unit: Mass / kg
- Amount rule: Measured cellulose-acetate and polylactic-acid trim or rejected filter mass; keep destination and polymer identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-fda-iqos-tpl-2019`

###### Adhesive-contaminated solid waste (`adhesive_contaminated_waste`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Solid waste contaminated with ethylene-vinyl acetate adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded adhesive residue, wipes or contaminated packaging sent to the declared treatment route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-fda-iqos-tpl-2019`

### Process: Packaging, quality release and dispatch preparation (`packaging_release`)

#### Inputs

##### Product flows

###### Unpacked tobacco product supplied to packaging (`packaging_product_input`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Unpacked product containing tobacco
- Flow property / unit: Mass / kg
- Amount rule: Net conforming product mass transferred from assembly to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release`
- Sources: `us-fda-iqos-tpl-2019`

###### Electricity for packaging and quality release (`packaging_electricity`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered electricity for inspection, packing, coding, case packing, pallet handling and conditioned storage attributable to the batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `us-fda-iqos-tpl-2019`

###### Paperboard retail pack (`paperboard_retail_pack`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Paperboard folding carton
- Flow property / unit: Mass / kg
- Amount rule: Net paperboard mass placed around sale units from issue, return and component-weight records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `us-fda-iqos-tpl-2019`

###### Polypropylene retail overwrap (`polypropylene_overwrap`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Polypropylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Net polypropylene film placed on market when the declared retail pack uses film overwrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-pef-2021`

###### Corrugated shipping case (`corrugated_shipping_case`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Net corrugated-board mass used for transport cases attributable to the released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-pef-2021`

###### Wooden dispatch pallet (`wooden_pallet`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Allocate measured pallet mass to the batch by documented trips or one-way use; declare reuse count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-pef-2021`

###### R-410A refrigerant make-up (`r410a_makeup`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Refrigerant R-410A
- Flow property / unit: Mass / kg
- Amount rule: Annual R-410A make-up charged to packaging or conditioned-storage HVAC, allocated by measured operating time; mark not applicable when R-410A is not used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `us-fda-iqos-tpl-2019`

#### Outputs

##### Product flows

###### Released finished product (`finished_product`)

This product flow leaves the process boundary as the stated intermediate or reference output. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Products containing tobacco `653e40de-b5ea-4e0c-8542-98a32e6bae12`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1,000 kg net conforming finished product; packaging mass is excluded and recorded separately.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-2021`; `un-cpc-3-2025`

##### Waste flows

###### Waste paperboard from packaging (`waste_paperboard`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Waste paperboard
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected retail-carton and corrugated-board mass leaving packaging, net of internal reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-2021`

###### Waste polypropylene film from packaging (`waste_polypropylene_film`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Waste polypropylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured polypropylene film offcuts and rejected overwrap leaving packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-2021`

###### Waste wood from damaged pallets (`waste_wood`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Waste wood from pallets
- Flow property / unit: Mass / kg
- Amount rule: Measured pallet wood removed from service and attributable to the batch through the declared reuse allocation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-2021`

##### Elementary flows

###### R-410A refrigerant loss to air (`r410a_to_air`)

This elementary flow crosses the process boundary to the stated environmental compartment and is recorded separately from other emissions. Its quantity is obtained from the foreground record or calculation rule below.

- Selected flow: Refrigerant R-410A, to air
- Flow property / unit: Mass / kg
- Amount rule: Equal to documented R-410A make-up adjusted for inventory change and recovery; mark not applicable when R-410A is not used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Waste flows

###### Tobacco-processing wastewater to treatment (`treatment_wastewater_input`)

This wastewater crosses into the treatment process as the treated waste input. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Tobacco-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater entering the on-site treatment train from included foreground processes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `us-epa-tobacco-processing-2006`

##### Product flows

###### Electricity for wastewater treatment (`treatment_electricity`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for screening, pumping, aeration, mixing, clarification and sludge dewatering.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `us-epa-tobacco-processing-2006`

###### Ferric chloride for phosphorus removal (`ferric_chloride`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Active ferric-chloride mass calculated from formulation concentration and dosed solution mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_chemicals`
- Sources: `us-epa-tobacco-processing-2006`

###### Sodium hypochlorite for disinfection (`sodium_hypochlorite`)

This material or energy input enters the process boundary because it is consumed in the stated operation. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hypochlorite mass calculated from solution concentration and dosed volume when chlorination is used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_chemicals`
- Sources: `us-epa-tobacco-processing-2006`

#### Outputs

##### Waste flows

###### Dewatered wastewater-treatment sludge (`wastewater_sludge`)

This waste flow leaves the process boundary for recovery, treatment or disposal and is recorded separately from other wastes. Its quantity is obtained from the foreground record according to the rule below.

- Selected flow: Dewatered tobacco-wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet sludge mass leaving belt presses, with dry-solids content and destination retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-tobacco-processing-2006`

##### Elementary flows

###### Chemical oxygen demand to water (`cod_to_water`)

This elementary flow crosses the process boundary to the stated environmental compartment and is recorded separately from other emissions. Its quantity is obtained from the foreground record or calculation rule below.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched treated-effluent volume multiplied by measured COD concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_discharge_monitoring`
- Sources: `us-epa-tobacco-processing-2006`

###### Total nitrogen to water (`total_nitrogen_to_water`)

This elementary flow crosses the process boundary to the stated environmental compartment and is recorded separately from other emissions. Its quantity is obtained from the foreground record or calculation rule below.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched treated-effluent volume multiplied by measured total-nitrogen concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_discharge_monitoring`
- Sources: `us-epa-tobacco-processing-2006`

###### Total phosphorus to water (`total_phosphorus_to_water`)

This elementary flow crosses the process boundary to the stated environmental compartment and is recorded separately from other emissions. Its quantity is obtained from the foreground record or calculation rule below.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched treated-effluent volume multiplied by measured total-phosphorus concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_discharge_monitoring`
- Sources: `us-epa-tobacco-processing-2006`

###### Suspended solids to water (`suspended_solids_to_water`)

This elementary flow crosses the process boundary to the stated environmental compartment and is recorded separately from other emissions. Its quantity is obtained from the foreground record or calculation rule below.

- Selected flow: Suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched treated-effluent volume multiplied by measured total-suspended-solids concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_discharge_monitoring`
- Sources: `us-epa-tobacco-processing-2006`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared utilities and multi-output operations | Avoid allocation by sub-metering or subdivision. If impossible, apply a documented physical relationship relevant to the process output; use another relationship such as economic value only after documenting why subdivision, system expansion and physical allocation are infeasible. | `eu-pef-2021` |
| `allocation_internal_rework` | tobacco, sheet and finished-product rework | Return internal rework to the process mass balance without a second product credit. Retain all burdens incurred before rejection and quantify any additional reprocessing inputs. | `us-epa-tobacco-processing-2006`; `eu-pef-2021` |
| `allocation_exported_tobacco_residue` | tobacco residue sold as a co-product | Treat a residue as waste unless it has a documented specification, customer and positive economic value. For a co-product, apply the hierarchy in `allocation_subdivision_first` and disclose quantities, prices, period and sensitivity. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tobacco_materials` | `tobacco_preparation` | tobacco input and prepared output | receiving, issue, transfer and moisture records | material id; supplier; tobacco form; gross and tare mass; moisture; batch; transfer mass | calibrated scales and batch reconciliation | kg | each lot and batch | complete reference period | all included lines | sum net dry- or as-received mass consistently; reconcile opening and closing inventory | calibration, supplier specification, lot traceability and signed batch record |
| `cp_formulation_ingredients` | `tobacco_preparation` | each formulation ingredient | formulation and issue records | ingredient id; concentration; issued mass; return mass; batch | calibrated dispensing and recipe-system export | kg | each batch | complete reference period | all formulations in scope | sum net issued mass separately by ingredient and normalize to output | scale calibration, approved formula and material certificate |
| `cp_water_records` | `tobacco_preparation` | product and process water | meter and batch-dose records | meter id; start/end reading; batch dose; use role; process | dedicated meter or calibrated dosing system | m3 or kg | each batch or daily | representative full production period | each included process | subtract verified non-process uses and aggregate by role | meter calibration and water balance |
| `cp_electricity_records` | all processes | electricity | meter and equipment records | meter id; readings; interval; operating time; rated load; process | sub-meter; otherwise documented engineering allocation | kWh | continuous or each shift | at least one representative year or full campaign | all included lines and treatment | sum metered use; allocate shared use by documented causal driver | meter calibration, coverage and allocation reconciliation |
| `cp_steam_records` | `tobacco_preparation` | purchased steam | supplier meter and condensate records | steam mass or energy; pressure; temperature; condensate return | calibrated custody or process meter | kg steam or MJ | continuous or each batch | complete reference period | included thermal equipment | convert to declared energy basis and subtract documented return credit only once | meter calibration and thermodynamic conversion record |
| `cp_natural_gas_records` | `tobacco_preparation` | natural gas | fuel meter and invoice records | meter readings; volume; temperature; pressure; heating value | calibrated meter reconciled to invoices | m3 and MJ | monthly with batch allocation | complete reference period | included boilers and dryers | convert using declared heating value and allocate by metered or operating-hour driver | invoice reconciliation and meter calibration |
| `cp_component_materials` | `forming_assembly` | tobacco, tube, filter, paper and adhesive components | bill of materials, issue, return and component-weight records | component id; supplier; count; mean mass; issue; return; batch | ERP issue records plus verified component mass | kg | each batch | complete reference period | all assembly lines | net issue by atomic component; reconcile to product and waste mass | approved bill of materials, certificates and scale checks |
| `cp_product_release` | `forming_assembly`; `packaging_release` | conforming intermediate and finished output | batch, count, mass and release records | product id; unit count; sample mass; net batch mass; rejects; release status | calibrated scale and quality-release system | kg | each batch | complete reference period | all products in scope | sum released net mass only; exclude package mass | release certificate, sampling plan and mass-balance reconciliation |
| `cp_packaging_components` | `packaging_release` | each package component | packaging issue, return and specification records | component id; material; count; unit mass; issue; return; reuse trips | ERP issue records and component weighing | kg | each batch | complete reference period | all package formats | net component mass placed on market; allocate reusable pallets by recorded trips | supplier specification, sample weights and return log |
| `cp_waste_records` | all processes | each waste stream | container, scale and destination records | waste id; gross/tare; dry solids where relevant; destination; treatment | calibrated scale or verified contractor ticket | kg | each container or shipment | complete reference period | all included operations | sum separately by atomic waste and destination; do not net against product inputs | weigh tickets, manifests and mass-balance check |
| `cp_wastewater_records` | `tobacco_preparation`; `onsite_wastewater_treatment` | tobacco-process wastewater | flow-meter and route records | inlet/outlet volume; source process; date; treatment route | calibrated flow meter or validated water balance | m3 | continuous or daily | representative full production period | all process drains in scope | aggregate by source and treatment route without sanitary water | meter calibration, drainage map and water balance |
| `cp_direct_emissions` | `tobacco_preparation` | PM10 and combustion emissions | stack, airflow, fuel and operating records | concentration; airflow; duration; fuel use; equipment; factor version | compliant stack test or documented calculation | kg | permit frequency plus batch allocation | representative operating states | all included emission points | calculate each pollutant separately and allocate by causal operation | test report, laboratory QA and factor provenance |
| `cp_refrigerant_records` | `packaging_release` | R-410A make-up and loss | service and refrigerant inventory records | opening stock; purchases; charge; recovery; closing stock; equipment | mass-balance from certified service records | kg | each service event and annual | complete reference year | attributable HVAC equipment | loss = opening + purchases - closing - recovered - transferred; allocate by operating time | technician records and inventory reconciliation |
| `cp_treatment_chemicals` | `onsite_wastewater_treatment` | ferric chloride and sodium hypochlorite | dosing and concentration records | chemical id; solution mass or volume; concentration; batch | calibrated dosing pump and supplier assay | kg active substance | daily | complete treatment period | on-site treatment | calculate active mass separately for each chemical | dosing calibration and certificate of analysis |
| `cp_discharge_monitoring` | `onsite_wastewater_treatment` | each pollutant to water | flow and laboratory records | discharge volume; sample time; COD; total N; total P; TSS; method | flow-proportional sampling and accredited analysis | m3; mg/L; kg | permit frequency | representative full production period | final controlled discharge | pair concentration with matching volume; report each pollutant separately | chain of custody, method detection limit and laboratory accreditation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period amount × 1,000 kg / net conforming finished-product mass for the same period | period exchange; released net product mass | exchange per 1,000 kg reference product |  |
| `calc_component_mass` | count-based product and component records | mass = accepted count × verified mean unit mass; keep sampling uncertainty and do not mix product mass with packaging mass | count; sample masses; component identity | kg by product or component | `us-fda-iqos-tpl-2019` |
| `calc_material_balance` | tobacco preparation and assembly | opening inventory + receipts - closing inventory = conforming transfer + rework + each waste + measured loss; investigate unreconciled loss above the site's approved threshold | inventory, receipt, transfer, product, rework and waste records | reconciled material balance | `us-epa-tobacco-processing-2006` |
| `calc_wastewater_load` | each pollutant to water | load kg = matched discharge volume m3 × concentration mg/L × 0.001 | flow and pollutant concentration | kg pollutant to water | `us-epa-tobacco-processing-2006` |
| `calc_refrigerant_loss` | R-410A | emitted mass = opening inventory + purchases - closing inventory - recovered mass - transferred mass | annual refrigerant inventory and service records | kg R-410A to air |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate physical tobacco or reconstituted-tobacco content, intended non-combustion use, product architecture and exclusion of reusable device mass. | approved specification, bill of materials, label and release record; `un-cpc-3-2025`; `wco-hs-2022-chapter-24` |
| `dq_formula_completeness` | tobacco and non-tobacco formulation | Account for every uniquely identified ingredient, additive and component by quantity; do not replace the bill of materials with confidential or aggregated totals. | controlled formula, component list, supplier certificates and batch issue records; `us-fda-iqos-tpl-2019` |
| `dq_mass_balance` | tobacco preparation, assembly and packaging | Reconcile inputs to product, rework, wastes, emissions and inventory changes for each process and the reporting period. | signed mass-balance worksheet and investigation of discrepancies |
| `dq_temporal_coverage` | all foreground data | Cover the full reference year or complete campaign, including start-up, shutdown, cleaning, rejects and seasonal storage loads. | meter-coverage report and production calendar |
| `dq_route_disclosure` | all conditional processes and flows | State whether reconstitution, steam, natural gas, each component, R-410A and on-site treatment apply; absent rows require a documented not-applicable reason. | process map, equipment list, product architecture and wastewater route |
| `dq_source_separation` | UUID identity and quantitative evidence | Keep Tiangong UUID identity separate from external process evidence and from foreground quantities. | UUID direct-read record, source table and collection records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | Fail if the product does not physically contain tobacco or reconstituted tobacco, is intended for combustion, is a nicotine-only or tobacco-free product, or includes reusable device mass without a separate model. | `un-cpc-3-2025`; `wco-hs-2022-chapter-24`; `us-fda-iqos-tpl-2019` |
| `validate_reference_mass` | reference amount | Fail if net conforming product is not exactly 1,000 kg after normalization or if packaging mass is included in the reference amount. |  |
| `validate_atomic_inventory` | all inventory rows | Fail if electricity, steam, natural gas, water, ingredients, components, packaging, wastes, refrigerants or emissions are combined into collection rows rather than individual exchanges. | `eu-pef-2021`; `us-epa-tobacco-processing-2006` |
| `validate_route_completeness` | process map | Fail if forming and assembly or packaging and release are absent; require a documented applicability decision for tobacco preparation and on-site wastewater treatment. | `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006` |
| `validate_formula_and_mass_balance` | foreground package | Fail if the controlled formulation, atomic component quantities, released mass, rework and wastes do not reconcile or if a discrepancy lacks investigation. | `us-fda-iqos-tpl-2019`; `us-epa-tobacco-processing-2006` |
| `validate_allocation` | shared operations and co-products | Fail if allocation is used without documenting why subdivision or system expansion is infeasible, the selected relationship, data period and sensitivity. | `eu-pef-2021` |
| `validate_uuid_support` | UUID-bearing reference product | Fail if the product-flow UUID, Mass property UUID, Units of mass UUID or kg reference unit does not resolve consistently. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after independent methodology review and publication |
| downstream_use | Foreground process datasets for products containing tobacco and factory-gate lifecycle-model projections |
| allowed_use | Product-specific factory-gate modelling when tobacco presence, non-combustion intended use, formulation, architecture, route, packaging and geography match the dataset metadata |
| excluded_use | Combustible tobacco products; nicotine-only or tobacco-free products; reusable heating devices; use-stage health or exposure assessment; unsupported comparison between different product architectures |
| required_metadata | canonical PCR id and version; reference UUID; CPC and HS context; product specification; tobacco form and mass fraction; complete formulation and component list; unit mass and count; route; package configuration; site and geography; reference period; upstream datasets; allocation; waste and treatment routes |
| required_quality_disclosure | primary-data coverage; meter and scale calibration; formula confidentiality limitations; mass-balance closure; conditional-flow applicability; unresolved UUIDs and ranges; source versions; temporal, geographic and technological representativeness |
| update_trigger | formulation or component change; manufacturing-route or site change; package redesign; new heating architecture; material meter change; wastewater route change; revised CPC/HS scope; reference UUID change; new reviewed range or emission evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division. *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, subclass 25092, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-08-20). | Official CPC identity and link from subclass 25092 to HS 2022 heading 24.04 |
| `wco-hs-2022-chapter-24` | standard | World Customs Organization. *Harmonized System Nomenclature 2022, Chapter 24*, heading 24.04 and subheading 2404.11. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0424_2022e.pdf?la=en (accessed 2026-08-20). | Tobacco-containing, inhalation-without-combustion product scope and exclusions |
| `us-fda-iqos-tpl-2019` | official_guidance | U.S. Food and Drug Administration. *Premarket Tobacco Product Applications: Technical Project Lead Review, IQOS Tobacco Heating System and Heatsticks*, 2019. https://www.fda.gov/media/124247/download?attachment= (accessed 2026-08-20). | Representative product architecture, tobacco plug, formulation ingredients, component identity, manufacturing controls, quality and stability requirements |
| `us-epa-tobacco-processing-2006` | official_guidance | U.S. Environmental Protection Agency. *Final Engineering Report: Tobacco Products Processing Detailed Study*, EPA-821-R-06-015, 2006. https://19january2017snapshot.epa.gov/sites/production/files/2015-09/documents/tobacco-products-processing-study_2006.pdf (accessed 2026-08-20). | Tobacco conditioning, blending, cutting, reconstituted-sheet production, forming, packing, rejects, wastewater sources, air controls and treatment operations |
| `eu-pef-2021` | official_guidance | European Commission. *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, Annex I, 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (accessed 2026-08-20). | Inventory completeness, multifunctionality hierarchy, packaging and data-quality principles |
