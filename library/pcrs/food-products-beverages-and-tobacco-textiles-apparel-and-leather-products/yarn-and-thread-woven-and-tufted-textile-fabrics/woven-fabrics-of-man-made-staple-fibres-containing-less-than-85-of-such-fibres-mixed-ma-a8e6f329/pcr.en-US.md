---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-staple-fibres-containing-less-than-85-of-such-fibres-mixed-ma-a8e6f329
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven fabrics of man-made staple fibres, containing less than 85% of such fibres, mixed mainly or solely with wool or fine animal hair

## 1. Scope and Applicability

This PCR applies to gate-to-gate production of woven fabric whose man-made staple-fibre share is below 85% by mass and whose principal or sole blend partner is wool or fine animal hair. It covers yarn preparation, warping and conditional sizing, weaving, conditional preparation/dyeing/finishing, inspection, and packaging. The route may use synthetic staple fibres, artificial staple fibres, wool, or a named fine animal hair, but each homogeneous product route shall be modelled separately.

It excludes knitted or crocheted fabric, nonwovens, carpets, pile or special fabrics, garments, yarn sold as the reference product, fabrics whose composition belongs to another CPC leaf, and downstream use or end of life. Upstream fibre and yarn production and off-site residual treatment are represented by linked datasets unless performed inside the declared foreground site.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-staple-fibres-containing-less-than-85-of-such-fibres-mixed-ma-a8e6f329 |
| classification_refs | CPC 3.0: 26770 (exact) |
| covered_products | Woven fabrics containing less than 85% man-made staple fibres by mass and mixed mainly or solely with wool or fine animal hair |
| excluded_products | Fabrics with 85% or more man-made staple fibre; cotton-dominant blends; knitted, crocheted, nonwoven, pile, special, coated-only, or made-up textile articles |
| representative_product | Market-ready polyester/wool woven fabric; other synthetic/wool, artificial/wool, and named fine-animal-hair routes remain eligible when separately declared |
| production_route | Purchased yarn to warp preparation and weaving, followed by route-specific wet or dry finishing, inspection, and packaging |
| market_state | Greige or finished woven fabric at the manufacturing gate, with composition, construction, finish, quality grade, moisture basis, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of conforming woven fabric made from less than 85% man-made staple fibres and blended mainly or solely with wool or fine animal hair |
| How much | 1 kg net fabric mass, excluding packaging |
| How well | Conforms to the declared fibre identities and percentages, yarn route, weave construction, mass per area, width, colour, finish, quality grade, and moisture basis |
| How long or cycle | One homogeneous manufacturing lot delivered at the mill gate; no use duration is represented because the fabric is an intermediate product |
| reference_flow_link | Exactly 1 kg of accepted output from `inspection_packaging`, linked to the category-exact Tiangong product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net woven fabric |
| Reference product flow | Woven fabrics of man-made staple fibres, containing less than 85% of such fibres, mixed mainly or solely with wool or fine animal hair `dad59cf0-4b5e-4f0a-ae44-00f1b0587dfb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | man-made staple-fibre identity and mass percentage; wool or named fine-animal-hair identity and mass percentage; recycled content by fibre; yarn input form; weave construction; mass per unit area; usable width; greige, dyed, printed, coated, or finished state; dyeing and finishing route; colour; quality grade and test method; moisture basis; geography; reference year; packaging inclusion; allocation method |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. The Tiangong reference identity supplies none of these route facts.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference fabric | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net fabric excluding core, film, pallet, and other packaging. Retain gross mass, tare, net mass, and scale record. |
| `blend_composition_mass` | Fibre and yarn composition | Mass | kg and percent by mass | Determine each named fibre share on one declared moisture basis. The man-made staple-fibre share shall be below 85%, and wool plus named fine animal hair shall be the principal or sole blend partner. |
| `fabric_area_mass` | Fabric construction | Mass and area | g/m2, kg, m2 | Retain roll length, usable width, measured mass, and mass-per-area test result. Convert area to mass only from lot-representative measurements. |
| `utility_separation` | Electricity, steam, and natural gas | Carrier-specific property | kWh, MJ, or m3 | Record each carrier separately in its native metered unit. Do not merge electricity, purchased steam, and on-site fuel before inventory completion. |
| `water_balance` | Process-water use and wastewater | Water content (mass) or volume | kg or m3 | Record withdrawal, internal reuse, discharge, evaporation, and water carried in outputs separately. Internal reuse is not a new withdrawal. |
| `chemical_recipe_mass` | Each sizing agent, dye, and auxiliary | Mass | kg | Record every purchased chemical substance or supplier formulation as its own atomic exchange with concentration and active-content basis; do not use a combined chemical total as an exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased synthetic or artificial staple-fibre yarn and purchased wool or named fine-animal-hair yarn at the weaving mill gate, with composition, yarn count, moisture basis, supplier, and upstream coverage declared |
| starting_condition_role | Upstream product inputs to the fabric-production foreground system |
| product_classification_scope | CPC 26770 woven fabric; not yarn, knitted fabric, nonwoven, carpet, garment, or another woven-fabric composition class |
| recursive_input_rule | Purchased CPC 26770 fabric used for rework or blending shall remain a separate input with an upstream dataset and shall not recursively be treated as internally produced reference fabric |
| upstream_dataset_requirement | Link representative upstream datasets for each yarn, utility, chemical, and packaging input and a treatment dataset for each exported waste or wastewater; disclose geography, year, technology, recycled content, and transport inclusion |
| disclosure | Declare fibre identities and percentages, yarn form, weaving technology, sizing, wet-processing sequence, dye classes and named substances, finish, on-site fuel use, wastewater destination, product specification, period, site coverage, and allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_separation` | Fibre blend and manufacturing route | Model each homogeneous fibre blend, weave, sizing route, and finishing route separately; aggregate only after route inventories are complete and production shares are documented. | `un-cpc-3-0-26770`; `eu-txt-bref-2023` |
| `sb_required_operations` | Foreground site | Include yarn preparation, warping, applicable sizing, weaving, applicable wet/dry finishing, inspection, packaging, site-attributable utilities, direct emissions, textile wastes, and wastewater. | `eu-txt-bref-2023` |
| `sb_wool_sensitive_dyeing` | Polyester/wool and polyamide/wool routes | Preserve the actual one-bath or two-bath sequence and wool-protection conditions; do not substitute a generic high-temperature synthetic-fibre dyeing route. | `eu-txt-bref-2023` |
| `sb_residual_destination` | Waste and wastewater | Link each exported textile waste, packaging waste, and wastewater to its actual treatment destination. Include on-site treatment as a separately measured foreground process when operated by the reporting site. | `eu-txt-bref-2023` |
| `sb_downstream_exclusion` | Reference product | Exclude garment manufacture, distribution, use, maintenance, and end of life from the default foreground boundary. | `un-cpc-3-0-26770`; `eu-pef-2021-2279` |

## 6. Process Inventory Structure

Each card below is one atomic exchange. A route shall use only the applicable cards and shall add one equally atomic card for every actual fibre, chemical, fuel, refrigerant, packaging material, waste, or emission not listed. Amounts without category-exact quantitative evidence are foreground records; this PCR defines no AI-generated amount range.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_weaving` | Yarn preparation, warping, sizing, and weaving | `required` | Always; sizing cards only when sizing is used | Foreground process | per 1 kg accepted reference fabric |
| `wet_dry_finishing` | Route-specific preparation, dyeing, drying, and finishing | `conditional` | Included when performed at the reporting site | Foreground process | per 1 kg accepted reference fabric |
| `inspection_packaging` | Inspection, roll preparation, and packaging | `required` | Always | Foreground process | per 1 kg accepted reference fabric |

### Process: Yarn preparation, warping, sizing, and weaving (`yarn_preparation_weaving`)

#### Inputs

##### Product flows

###### Synthetic staple-fibre blend yarn (`synthetic_blend_yarn`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Yarn (other than sewing thread) of synthetic staple fibres, containing less than 85% by weight of such fibres `914fcc34-ead6-4938-af63-b4ffa94e0a99`
- UUID status: confirmed — Product flow, CPC 26440, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured net yarn issued to the homogeneous fabric lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `un-cpc-3-0-26770`; `eu-txt-bref-2023`

###### Artificial staple-fibre blend yarn (`artificial_blend_yarn`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Yarn (other than sewing thread) of artificial staple fibres, containing less than 85% by weight of such fibres, not put up for retail sale `2fde586f-9999-4f3e-8022-fe0d8a19e270`
- UUID status: confirmed — Product flow, CPC 26461, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured net yarn issued to the homogeneous artificial-fibre route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `un-cpc-3-0-26770`; `eu-txt-bref-2023`

###### Wool yarn (`wool_yarn`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Yarn of wool, containing 85% or more by weight of wool, not put up for retail sale `10c7de33-bef0-4310-98e7-734d8e2e4c9f`
- UUID status: confirmed — Product flow, CPC 26320, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured net wool yarn issued to the homogeneous fabric lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `un-cpc-3-0-26770`; `eu-txt-bref-2023`

###### Cashmere yarn (`fine_animal_hair_yarn`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Cashmere yarn
- UUID status: unresolved — requires foreground mapping; rejected-candidate detail is retained in manifest review metadata
- Flow property / unit: Mass / kg
- Amount rule: measured net cashmere yarn issued only when the declared fine-animal-hair route applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `un-cpc-3-0-26770`

###### Electricity for yarn preparation and weaving (`weaving_electricity`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID status: confirmed — Product flow, Net calorific value / kWh
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered or submetered electricity attributable to warping, sizing, looms, compressed-air supply, humidification, and local support
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

###### Corn starch sizing agent (`corn_starch_sizing`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: corn starch `982918a4-54b1-4792-9ee5-2f3155d4e929`
- UUID status: confirmed — Product flow, CPC 23220, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured corn-starch mass charged to size preparation; do not combine with another sizing substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the sized route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `eu-txt-bref-2023`

###### Polyvinyl alcohol sizing agent (`pva_sizing`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- UUID status: confirmed — Product flow, CPC 34790, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured polyvinyl-alcohol mass charged to size preparation; do not combine with starch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the sized route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `eu-txt-bref-2023`

###### Process water for sizing and loom cleaning (`weaving_process_water`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Process water `8d71b67c-8513-4310-a01d-34e813e89ec3`
- UUID status: confirmed — Product flow, CPC 18000, Water content (mass) / kg
- Flow property / unit: Water content (mass) / kg
- Amount rule: measured fresh make-up water crossing the site boundary; internal recirculation reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `eu-txt-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven man-made-staple/wool blend fabric (`greige_blend_fabric`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Greige woven man-made-staple/wool blend fabric
- UUID status: unresolved — requires foreground mapping; rejected-candidate detail is retained in manifest review metadata
- Flow property / unit: Mass / kg
- Amount rule: measured greige-fabric mass transferred to finishing or final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `eu-txt-bref-2023`

##### Waste flows

###### Waste woven man-made-staple/wool blend fabric (`textile_waste`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Waste woven man-made-staple/wool blend fabric
- UUID status: unresolved — requires foreground mapping; rejected-candidate detail is retained in manifest review metadata
- Flow property / unit: Mass / kg
- Amount rule: measured yarn ends, selvedges, loom waste, and rejected greige fabric recorded by one named disposition; split different destinations into additional cards
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `eu-txt-bref-2023`

##### Elementary flows

###### Particulate matter not exceeding 10 micrometres to air (`weaving_pm10`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: particles (PM10) `9fbb5096-ed5b-11e6-bc64-92361f002671`
- UUID status: confirmed — Elementary flow, Mass / kg, emissions to air
- Flow property / unit: Mass / kg
- Amount rule: measured uncaptured PM10 load from the weaving area; omit only with documented non-applicability
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`
- Sources: `eu-txt-bref-2023`

### Process: Route-specific preparation, dyeing, drying, and finishing (`wet_dry_finishing`)

#### Inputs

##### Product flows

###### Greige woven man-made-staple/wool blend fabric input (`greige_fabric_to_finishing`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Greige woven man-made-staple/wool blend fabric
- UUID status: unresolved — internal product identity follows `greige_blend_fabric`
- Flow property / unit: Mass / kg
- Amount rule: measured greige mass received by the finishing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

###### Process water for wet finishing (`finishing_process_water`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Process water `8d71b67c-8513-4310-a01d-34e813e89ec3`
- UUID status: confirmed — Product flow, CPC 18000, Water content (mass) / kg
- Flow property / unit: Water content (mass) / kg
- Amount rule: metered fresh make-up water by preparation, dyeing, washing, and finishing step; internal reuse is reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

###### Electricity for wet and dry finishing (`finishing_electricity`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID status: confirmed — Product flow, Net calorific value / kWh
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered or submetered finishing-line electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

###### Process heat from purchased steam (`finishing_steam`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- UUID status: confirmed — Product flow, Gross calorific value / MJ
- Flow property / unit: Gross calorific value / MJ
- Amount rule: metered purchased steam heat attributable to the declared finishing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

###### Gaseous natural gas for on-site heat (`finishing_natural_gas`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID status: confirmed — Product flow, CPC 12020, Volume / m3
- Flow property / unit: Volume / m3
- Amount rule: metered natural gas combusted for route-attributable drying, curing, or heat setting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

###### Acetic acid solution for pH control (`acetic_acid`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Acetic acid solution, 98% in water `4fb2ab8d-9291-46ee-a9fd-11ec4c8784e3`
- UUID status: confirmed — Product flow, CPC 34140, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured solution mass; retain supplier concentration and active-acid calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

###### Sodium hydroxide (`sodium_hydroxide`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- UUID status: confirmed — Product flow, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured solution or solid mass with concentration retained; include only for the actual preparation, cleaning, or treatment recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

###### Disperse Blue 56 (`disperse_blue_56`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Disperse Blue 56
- UUID status: unresolved — requires foreground mapping; rejected-candidate detail is retained in manifest review metadata
- Flow property / unit: Mass / kg
- Amount rule: measured dyestuff mass only when this exact substance is used for the man-made-fibre component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same recipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

###### Acid Blue 9 (`acid_blue_9`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Acid Blue 9
- UUID status: unresolved — requires foreground mapping; rejected-candidate detail is retained in manifest review metadata
- Flow property / unit: Mass / kg
- Amount rule: measured dyestuff mass only when this exact substance is used for the wool or fine-animal-hair component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same recipe
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-finished woven man-made-staple/wool blend fabric (`wet_finished_blend_fabric`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Wet-finished woven man-made-staple/wool blend fabric
- UUID status: unresolved — requires foreground mapping; rejected-candidate detail is retained in manifest review metadata
- Flow property / unit: Mass / kg
- Amount rule: measured conforming fabric mass transferred to final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

##### Waste flows

###### Wastewater from dyeing and finishing blend fabric (`textile_wastewater`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Wastewater from dyeing and finishing man-made-staple/wool woven fabric
- UUID status: unresolved — requires foreground mapping; rejected-candidate detail is retained in manifest review metadata
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater transferred to the named on-site or off-site treatment destination; separate incompatible streams
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`finishing_co2_fossil`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID status: confirmed — Elementary flow, Mass / kg, emissions to air unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured load or calculated from collected fuel use with a separately cited current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

###### Methane, fossil, to air (`finishing_methane_fossil`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- UUID status: confirmed — Elementary flow, Mass / kg, emissions to air unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured load or calculated from collected fuel use with a separately cited current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

###### Dinitrogen monoxide to air (`finishing_n2o`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: dinitrogen monoxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- UUID status: confirmed — Elementary flow, Mass / kg, emissions to air unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured load or calculated from collected fuel use with a separately cited current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

###### Nitrogen dioxide to air (`finishing_nitrogen_dioxide`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- UUID status: confirmed — Elementary flow, Mass / kg, emissions to air unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured load or calculated from collected fuel use with a separately cited current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

###### Non-methane volatile organic compounds to air (`finishing_nmvoc`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: non-methane volatile organic compounds `d86bec9a-6555-11dd-ad8b-0800200c9a66`
- UUID status: confirmed — Elementary flow, Mass / kg, emissions to air
- Flow property / unit: Mass / kg
- Amount rule: measured route-specific NMVOC load from drying, curing, or finishing; omit only with documented non-applicability
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`
- Sources: `eu-txt-bref-2023`

### Process: Inspection, roll preparation, and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Finished blend fabric entering inspection (`finished_fabric_to_inspection`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Wet-finished woven man-made-staple/wool blend fabric
- UUID status: unresolved — internal product identity follows `wet_finished_blend_fabric`
- Flow property / unit: Mass / kg
- Amount rule: measured mass received for final inspection and roll preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `eu-txt-bref-2023`

###### Electricity for inspection and packaging (`release_electricity`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID status: confirmed — Product flow, Net calorific value / kWh
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered or defensibly submeter-allocated electricity for inspection, rolling, cutting, and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `eu-pef-2021-2279`

###### Cardboard tube or paper core (`paperboard_core`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- UUID status: confirmed — Product flow, CPC 32199, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured core mass assigned across the fabric mass carried by the same core
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene packaging film (`ldpe_packaging_film`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Low-density polyethylene packaging film
- UUID status: unresolved — requires foreground mapping; rejected-candidate detail is retained in manifest review metadata
- Flow property / unit: Mass / kg
- Amount rule: measured film mass; retain polymer grade and recycled-content declaration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `eu-pef-2021-2279`

###### Wooden pallet (`wooden_pallet`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- UUID status: confirmed — Product flow, CPC 31702, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass divided by actual fabric load and documented reuse cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming CPC 26770 woven fabric (`reference_fabric`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Woven fabrics of man-made staple fibres, containing less than 85% of such fibres, mixed mainly or solely with wool or fine animal hair `dad59cf0-4b5e-4f0a-ae44-00f1b0587dfb`
- UUID status: confirmed — Product flow, CPC 26770, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg accepted net reference fabric excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_release`
- Sources: `un-cpc-3-0-26770`

##### Waste flows

###### Rejected finished blend fabric (`final_fabric_reject`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Waste woven man-made-staple/wool blend fabric
- UUID status: unresolved — shares the unresolved identity review for `textile_waste`
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or downgraded fabric mass by final disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `eu-txt-bref-2023`

###### Packaging waste, cardboard (`waste_cardboard`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- UUID status: confirmed — Waste flow, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured discarded paper core or cardboard packaging mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `eu-pef-2021-2279`

###### Waste polyethylene (`waste_polyethylene`)

This card records the named atomic exchange crossing this process boundary when the declared route applies; the linked foreground protocol supplies its amount.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- UUID status: confirmed — Waste flow, Mass / kg
- Flow property / unit: Mass / kg
- Amount rule: measured discarded polyethylene film mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | Different fibre, weave, and finishing routes | Avoid allocation by separate metering and subdivision before combining production routes. | `eu-pef-2021-2279` |
| `al_internal_reuse` | Returned yarn, fabric, water, size, and heat | Treat internal reuse as an internal loop. Count only make-up inputs and outputs crossing the reporting boundary; do not credit the same loop twice. | `eu-txt-bref-2023`; `eu-pef-2021-2279` |
| `al_saleable_outputs` | Saleable downgraded fabric or recovered material | Classify an output as product or waste from its actual function and destination. If a co-product remains, apply a documented causal physical relation; use economic allocation only when no defensible physical relation exists. | `eu-pef-2021-2279` |
| `al_shared_utilities` | Shared meters and support systems | Allocate shared utilities with a documented causal driver such as machine-hours, metered demand, bath volume, or processed mass; report the driver and coverage. | `eu-pef-2021-2279`; `kir-et-al-2024-textile-resource-use` |
| `al_waste_treatment` | Textile waste and wastewater | Assign treatment burdens to the generating route by measured residual mass or volume and, when treatment demand differs, a documented pollutant-load driver. | `eu-txt-bref-2023`; `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving` | `yarn_preparation_weaving` | Each yarn, sizing substance, water, electricity, greige fabric, waste, PM10 | Lot sheet, issue record, scale, recipe, meter, waste record, emission result | lot_id; fibre_name; yarn_mass; moisture_basis; starch_mass; PVA_mass; water; electricity; greige_mass; waste_mass_by_destination; PM10_load | Lot-level weighing and recipe reconciliation with calibrated meters or defensible submeter allocation | kg; kWh | Each lot; utilities at least shift or monthly with allocation driver | At least 12 representative months or every campaign in a shorter production year | Each site, loom technology, blend, and sizing route separately | Close yarn/material balance before normalization; aggregate only homogeneous routes | Supplier specification; scale/meter calibration; recipe; production and waste records; laboratory QA |
| `cp_finishing` | `wet_dry_finishing` | Fabric, each chemical, water, electricity, steam, gas, output, wastewater, each air emission | Batch recipe, dosing record, meters, scale, laboratory and discharge record | lot_id; fabric_in; process_sequence; dye_name; chemical_name; formulation_concentration; dose_mass; water; electricity; steam_MJ; gas_m3; fabric_out; wastewater_mass; emission_load_and_method | Record each named substance and carrier separately by batch or homogeneous campaign | kg; kWh; MJ; m3 | Each batch; meters at least shift or daily | At least 12 representative months including all represented recipes | Each site, machine, blend, and recipe separately | Reconcile recipe and mass/water balances; normalize only after route completion | Recipe approval; dosing evidence; meter calibration; laboratory QA; wastewater transfer record |
| `cp_release` | `inspection_packaging` | Finished input, accepted product, rejects, electricity, core, film, pallet, packaging wastes | Roll ticket, inspection result, scale, packaging BOM, meter, waste manifest | lot_id; roll_id; gross_mass; tare; net_mass; width; length; mass_per_area; composition; finish; grade; electricity; core_mass; film_mass; pallet_mass; reuse_cycles; reject_mass; waste_mass_by_destination | Weigh every release lot and retain specification and inspection result | kg; m; m2; g/m2; kWh | Every released lot | All released lots in the reporting period | Each site and product specification separately | Sum accepted net mass and normalize all route totals to it; packaging remains separate | Calibration; test method; inspection certificate; packaging BOM; manifests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_route_normalization` | All inventory rows | `normalized_amount = homogeneous_route_period_amount / accepted_net_reference_fabric_mass` | route-specific records; accepted net mass | amount per kg reference fabric | `eu-pef-2021-2279` |
| `cr_blend_share` | Fibre composition | `fibre_share_i = dry_or_declared_basis_mass_i / sum_of_all_fibre_masses_on_same_basis`; retain the original test or supplier result | fibre masses or composition test; common moisture basis | percent by mass for each named fibre | `un-cpc-3-0-26770` |
| `cr_area_mass_check` | Roll records | `calculated_mass = usable_length × usable_width × measured_mass_per_area`; compare with net scale mass and investigate differences | length; width; g/m2; scale mass | reconciled roll mass | `eu-txt-bref-2023` |
| `cr_process_mass_balance` | Weaving and finishing | Reconcile input fabric/yarn and named substances with product, waste, emissions, wastewater solids, and inventory change on compatible bases; investigate rather than invent a balancing flow. | measured inputs and outputs; moisture/solids | closure and discrepancy | `eu-pef-2021-2279` |
| `cr_water_balance` | Wet processing | `fresh_withdrawal + water_in_inputs = wastewater + evaporation + water_in_product_and_waste + inventory_change`; report recirculation separately. | measured water terms | reconciled water balance | `eu-txt-bref-2023` |
| `cr_shared_utility` | Shared meters | `route_utility = metered_total × documented_causal_driver_share`; retain total, driver, and coverage. | meter total; route driver | route-specific utility amount | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Reference product | Link each released roll to fibre identities and percentages, yarn lots, weave, wet-processing recipe, finish, quality result, moisture basis, and packaging state. | Lot genealogy and release certificate |
| `dq_route_representativeness` | Technology and blend | Keep route-specific records and report production shares, machine coverage, downtime, rejected lots, and excluded sites. | Production ledger, machine register, coverage calculation |
| `dq_temporal_coverage` | Foreground period | Use at least 12 representative months for continuous production or all represented campaigns for seasonal/short-run production; disclose deviations. | Dated raw records and coverage statement |
| `dq_meter_recipe_quality` | Utilities and chemicals | Retain calibration, recipe revision, formulation concentration, dosing evidence, allocation driver, and data-gap treatment. | Calibration, invoices, batch sheets, dosing and meter records |
| `dq_mass_water_closure` | Each route | Report mass- and water-balance closure and investigate material discrepancies without inventing balancing exchanges. | Reconciliation workbook and investigation record |
| `dq_no_universal_range` | All amounts | Do not substitute wool-only, synthetic-only, or cross-facility literature values as a CPC 26770 default. Use foreground records unless a reviewed blend- and route-specific quantitative source is added. | Source applicability review and foreground records |
| `dq_uuid_resolution` | Unresolved inventory identities | Before publication, resolve an exact Tiangong flow or retain a documented blocking review item; never attach a semantically broader candidate UUID. | Hybrid-search candidate record and deterministic direct-read review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Require product UUID `dad59cf0-4b5e-4f0a-ae44-00f1b0587dfb`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg net output. | `un-cpc-3-0-26770` |
| `val_cpc_composition` | Product classification | Require man-made staple fibres below 85% by mass and wool or named fine animal hair as the principal or sole blend partner; reject a missing or contradictory composition. | `un-cpc-3-0-26770` |
| `val_woven_scope` | Product form | Reject knitted, crocheted, nonwoven, carpet, pile, special, garment, or yarn products and reject a fabric route whose weaving evidence is absent. | `un-cpc-3-0-26770`; `eu-txt-bref-2023` |
| `val_required_qualifiers` | Dataset metadata | Fail completeness when any required qualifier in Section 3 is absent. | `un-cpc-3-0-26770`; `eu-txt-bref-2023` |
| `val_atomic_inventory` | Inventory | Require separate rows for each fibre/yarn, sizing substance, dye, auxiliary, energy carrier, packaging material, waste, and elementary emission actually used or released. | `eu-txt-bref-2023` |
| `val_route_records` | Foreground amounts | Reject an AI-generated or universal literature amount substituted for missing route records; require measured or documented calculated foreground evidence. | `kir-et-al-2024-textile-resource-use`; `eu-pef-2021-2279` |
| `val_balance_and_allocation` | Mass, water, and shared burdens | Require reported mass/water reconciliation, internal-loop treatment, and documented allocation drivers; fail silent double counting or unexplained imbalance. | `eu-txt-bref-2023`; `eu-pef-2021-2279` |
| `val_waste_destination` | Residuals | Require one named destination and representative treatment dataset for every exported waste and wastewater row. | `eu-txt-bref-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Fabric inputs to apparel, furnishing, technical-textile, process, and lifecyclemodel studies requiring a CPC 26770 manufacturing-gate dataset |
| allowed_use | The declared fibre blend, weave, finishing route, geography, technology, year, quality specification, and boundary represented by the dataset |
| excluded_use | Another fibre composition, knitted/nonwoven product, garment, generic textile proxy, use phase, or end-of-life model without explicit adaptation |
| required_metadata | All Section 3 qualifiers; site and period; process coverage; upstream dataset references; treatment destinations; allocation; data owner; review status |
| required_quality_disclosure | Raw-record coverage, measured versus calculated shares, route shares, mass/water closure, meter and recipe QA, unresolved UUIDs, data gaps, uncertainty, and source limitations |
| update_trigger | Change in blend, yarn source, weave, sizing, dye recipe, finishing technology, energy/water system, wastewater destination, packaging, geography, reporting year, or evidence that materially changes representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-26770` | `official_guidance` | United Nations Statistics Division. *Central Product Classification (CPC) Version 3.0, Explanatory Notes*, code 26770, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product identity, included/excluded composition, classification validation |
| `eu-txt-bref-2023` | `official_guidance` | European Commission Joint Research Centre. *Best Available Techniques (BAT) Reference Document for the Textiles Industry*. EUR 31392 EN, JRC131874, 2023. https://doi.org/10.2760/355887 | Woven-fabric production, sizing agents, polyester/wool and polyamide/wool dyeing, finishing, utilities, emissions, wastewater, and monitoring structure |
| `eu-pef-2021-2279` | `official_guidance` | European Commission. Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I Product Environmental Footprint method, 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | Functional unit, inventory completeness, data quality, allocation, packaging, and dataset use |
| `kir-et-al-2024-textile-resource-use` | `literature` | Kır, A.; Ozturk, E.; Yetis, U.; Kitis, M. “Resource utilization in the sub-sectors of the textile industry: opportunities for sustainability.” *Environmental Science and Pollution Research* 31 (2024): 25312-25328. https://doi.org/10.1007/s11356-024-32768-2; full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC11024048/ | Evidence that water, auxiliary, dyestuff, electricity, and steam use vary materially by woven-fabric sub-sector and facility; supports route-specific foreground collection rather than universal defaults |
