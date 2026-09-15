---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-animal-fats-rendered
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other animal fats, rendered

## 1. Scope and Applicability

This PCR governs foreground data packages for products classified exactly in CPC Version 3.0 subclass 21529, **Other animal fats, rendered**. The official explanatory notes make this a residual but enumerated subclass: it includes lard oil and lard stearin; oleo-oil, oleostearin and tallow oil; bone, marrow, chrysalis, egg-yolk, turtle-egg, foot, shin-bone, snake, tortoise, mink and rabbit oils; rendered bear, horse, hippopotamus, crab, mollusc, rabbit and turtle fats; and lanolin, wool alcohols, wool grease olein and wool grease stearin.

The subclass excludes pig fat rendered as such (21521), poultry fat rendered as such (21522), tallow as such (21523), fish-liver oil (21524), other fish fats and oils (21525), marine-mammal fats and oils (21526), crude wool grease (21519), unrendered animal fats (2151), and chemically modified animal fats classified in 21590. A foreground package shall name one exact animal source, anatomical or upstream feedstock, one exact fat/oil/fraction product, and one route. It shall never use a generic source-material selector.

For directly rendered fats and oils, the route shall be declared as dry rendering or wet rendering and shall identify the subsequent draining, pressing, centrifugation, filtration or other actually used separation steps. Fraction products shall link the received pig fat or tallow to an upstream dataset whose rendering route is declared. Wool-grease products are an explicit CPC 21529 exception to tissue rendering and shall instead declare the wool-scouring grease-recovery and derivative-processing route. No default amount, performance range or substitute estimate is supplied by this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-animal-fats-rendered` |
| classification_refs | CPC 3.0: 21529, Other animal fats, rendered |
| covered_products | Only the named products and residual rendered animal fats explicitly included in CPC 21529; every dataset identifies one exact product. |
| excluded_products | CPC 21521 pig fat rendered as such; 21522 poultry fat; 21523 tallow; 21524 fish-liver oil; 21525 other fish fats/oils; 21526 marine-mammal fats/oils; 2151 unrendered fats; 21590 chemically modified fats. |
| representative_product | Horse fat, rendered, with horse source and the actual rendering/separation route declared. |
| production_route | Source receiving and segregation; one declared dry-rendering, wet-rendering, rendered-fat fractionation or wool-grease route; separation/purification; packaging, storage and release; allocated cleaning; conditional on-site wastewater treatment. |
| market_state | Dispatch-ready bulk or packaged fat, oil, fraction or wool-grease derivative meeting the declared grade and legal intended-use status. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net mass of one dispatch-ready CPC 21529 product with exact animal source, feedstock, named product, route, grade and intended-use status declared. |
| How much | 1 kg net compliant product; packaging mass is excluded. |
| How well | Meets the declared contractual specification, contamination controls, applicable animal-by-product status and release criteria. |
| How long or cycle | One identified batch or continuous-production campaign within the declared reporting period. |
| reference_flow_link | The reference exchange is the output card `packaging_reference_product_output` in process `packaging_storage_release`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other animal fats, rendered `42e4d7de-ef5e-4dd5-96f9-8680da80c5db` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact animal species or wool source; anatomical tissue or upstream product feedstock; exact CPC 21529 product identity; dry-rendering or wet-rendering route and separation steps for rendered-tissue products; upstream rendering route for fraction feeds; wool-scouring recovery route for wool-grease products; batch or continuous mode; product grade; human-consumption/feed/technical intended-use status; site geography; reporting period; packaging configuration; co-product and waste destinations |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, product description or an equivalent field. A generic “other animal fat” label without the exact product and source identity is incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net compliant product mass from calibrated dispatch measurements after subtracting packaging tare; normalize to exactly 1 kg. |
| `material_mass` | source materials, chemicals, filtration media, solid products and solid wastes | Mass | kg | Use calibrated scale, invoice, issue or transfer records for the named atomic flow; preserve wet/dry basis where relevant. |
| `water_mass` | process water | Mass | kg | Convert a measured water volume only with a documented temperature-appropriate density; preserve the original volume record. |
| `wastewater_volume` | each named wastewater stream | Volume | m3 | Use a source-specific flow meter or tank calibration and preserve sampling-period alignment. |
| `electricity_energy` | each stage electricity card | Energy | kWh | Use stage submeter data; where a shared meter is unavoidable, calculate from a documented causal driver and disclose allocation. |
| `thermal_energy` | purchased steam and purchased hot water | Energy | MJ | Use supplier meter or invoice energy; if only mass is metered, document enthalpy inputs and calculation. |
| `fuel_energy` | natural gas, diesel fuel and liquefied petroleum gas | Energy | MJ | Convert measured fuel quantity with supplier- or batch-specific net calorific value; preserve original quantity and factor. |
| `packaging_mass` | each packaging component | Mass | kg | Use product-specific packaging bill of materials and issued quantities; document reusable-container cycles without a default cycle count. |
| `emission_mass` | each named emission or discharged pollutant | Mass | kg | Use direct measurement or a calculation from measured activity and a documented site-specific factor; identify method and period. |
| `co_product_mass` | each named co-product | Mass | kg | Measure each product separately and reconcile it in the batch mass balance before allocation. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | foreground operations | Include source acceptance, segregation, the declared conversion and separation route, purification, controlled storage/packaging, allocated cleaning, and conditional on-site wastewater treatment through dispatch-ready release. | `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `eu-pef-2021-2279` |
| `boundary_upstream_inputs` | purchased inputs | Keep animal source materials, pre-rendered pig fat or tallow, crude wool grease, electricity, steam, hot water, fuels, water, each chemical, each filtration medium and each packaging component as explicit upstream product inputs. | `eu-pef-2021-2279`; `eu-regulation-1069-2009` |
| `boundary_downstream_exclusions` | downstream life cycle | Exclude upstream animal production and inbound transport from the foreground gate; exclude distribution, retail, use and end-of-life after dispatch, while linking these activities to separate datasets when the study boundary requires them. | `eu-pef-2021-2279` |
| `boundary_route_lock` | route identity | Require one exact source, one exact product identity and a documented route: dry or wet rendering for directly rendered tissue products, an upstream rendering link plus fractionation for fractions, or wool-scouring grease recovery for wool-grease products. | `un-cpc-3-0-explanatory-notes`; `us-epa-ap42-rendering`; `us-epa-wool-processing` |
| `boundary_atomic_exchange` | inventory exchanges | Author and collect one physically or chemically specific exchange per card; add another card for every additional actual source, chemical, filtration medium, package, waste, pollutant or emission. | `eu-pef-2021-2279`; `ec-jrc-sa-bref-2024` |
| `boundary_no_unrecorded_cutoff` | completeness | Do not omit an environmentally relevant exchange solely because this PCR provides no UUID or quantity; leave UUID unresolved and obtain foreground evidence. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Each exact source tissue, pre-rendered feedstock or crude wool grease is accepted at the foreground site gate with supplier, lot, mass and applicable legal category recorded. |
| starting_condition_role | Upstream product input to the foreground conversion route. |
| product_classification_scope | Exact CPC 21529 only, subject to the included and excluded product lists in the official explanatory notes. |
| recursive_input_rule | If a CPC 21529 product is reprocessed, record that exact named product as an upstream product input and link its existing production dataset; do not recursively reconstruct it inside the same package. |
| upstream_dataset_requirement | Supplier datasets shall preserve exact animal/source identity, geography, period, route and intended-use status; pre-rendered fraction feeds shall disclose their rendering route. |
| disclosure | Disclose gate condition, moisture or impurity basis where relevant, storage condition, rejected mass, route decision, separation train and regulatory disposition. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source_material_receiving` | Source-material receiving and segregation | `required` | Include for every dataset; record each accepted animal source or pre-rendered feedstock as a separate atomic input. | `foreground_stage` | accepted mass assigned to the declared product batch |
| `dry_rendering_separation` | Dry rendering, separation and purification | `conditional` | Include when the declared route releases fat by heating and dehydration without adding water to the rendering charge. | `foreground_stage` | mass of dispatchable rendered-fat output attributable to the dry route |
| `wet_rendering_separation` | Wet rendering, separation and purification | `conditional` | Include when the declared route adds water or direct steam to cook source material before phase separation. | `foreground_stage` | mass of dispatchable rendered-fat output attributable to the wet route |
| `rendered_fat_fractionation` | Rendered-fat fractionation | `conditional` | Include for lard oil, lard stearin, oleo-oil, oleostearin or tallow oil; link the incoming pig fat or tallow to its upstream rendering dataset. | `foreground_stage` | mass of the declared CPC 21529 fraction |
| `wool_grease_processing` | Wool-grease separation and derivative processing | `conditional` | Include only for lanolin, wool alcohols, wool grease olein or wool grease stearin explicitly included in CPC 21529. | `foreground_stage` | mass of the declared wool-grease-derived CPC 21529 product |
| `packaging_storage_release` | Packaging, finished storage and release | `required` | Include every packaging configuration and bulk-storage operation under foreground control up to dispatch-ready release. | `foreground_stage` | 1 kg net compliant product, excluding packaging mass |
| `cleaning_disinfection` | Equipment cleaning and disinfection | `required` | Include cleaning and disinfection assigned to the declared production campaign; keep every chemical in a separate atomic card. | `foreground_support_stage` | cleaning campaign allocated to the declared product output |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include only when the facility treats a listed wastewater stream on site; otherwise record the specific wastewater sent to the external treatment dataset. | `foreground_support_stage` | treated wastewater volume assigned to the declared product output |

### Process: Source-material receiving and segregation (`source_material_receiving`)

#### Inputs

##### Product flows

###### Horse fat, unrendered accepted feedstock (`receiving_horse_fat`)

Horse fat, unrendered is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Horse fat, unrendered
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Rabbit fat, unrendered accepted feedstock (`receiving_rabbit_fat`)

Rabbit fat, unrendered is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Rabbit fat, unrendered
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Bear fat, unrendered accepted feedstock (`receiving_bear_fat`)

Bear fat, unrendered is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Bear fat, unrendered
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Crab fat, unrendered accepted feedstock (`receiving_crab_fat`)

Crab fat, unrendered is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Crab fat, unrendered
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Mollusc fat, unrendered accepted feedstock (`receiving_mollusc_fat`)

Mollusc fat, unrendered is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Mollusc fat, unrendered
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Turtle fat, unrendered accepted feedstock (`receiving_turtle_fat`)

Turtle fat, unrendered is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Turtle fat, unrendered
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Bovine bone tissue accepted feedstock (`receiving_bovine_bone`)

Bovine bone tissue is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Bovine bone tissue
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Bovine marrow tissue accepted feedstock (`receiving_bovine_marrow`)

Bovine marrow tissue is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Bovine marrow tissue
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Bovine foot tissue accepted feedstock (`receiving_bovine_foot`)

Bovine foot tissue is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Bovine foot tissue
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Chrysalis biomass accepted feedstock (`receiving_chrysalis`)

Chrysalis biomass is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Chrysalis biomass
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Egg yolk accepted feedstock (`receiving_egg_yolk`)

Egg yolk is a distinct source input. The receiving record shall identify animal species, anatomical material or source product, supplier, legal animal-by-product category where applicable, lot and accepted mass.

- Selected flow: Egg yolk
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Receiving electricity (`receiving_electricity`)

Electricity, grid is one atomic exchange at the source-material receiving and segregation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Receiving-yard diesel (`receiving_diesel`)

Diesel fuel is one atomic exchange at the source-material receiving and segregation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Source-material receiving and segregation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### Waste flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

#### Outputs

##### Product flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Waste flows

###### Rejected horse-fat waste (`receiving_rejected_horse_fat`)

Rejected horse fat is one atomic exchange at the source-material receiving and segregation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Rejected horse fat
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Source-material receiving and segregation from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Rejected rabbit-fat waste (`receiving_rejected_rabbit_fat`)

Rejected rabbit fat is one atomic exchange at the source-material receiving and segregation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Rejected rabbit fat
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Source-material receiving and segregation from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Feedstock-container waste (`receiving_hdpe_container_waste`)

High-density polyethylene feedstock-container waste is one atomic exchange at the source-material receiving and segregation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: High-density polyethylene feedstock-container waste
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Source-material receiving and segregation from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receiving`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

### Process: Dry rendering, separation and purification (`dry_rendering_separation`)

#### Inputs

##### Product flows

###### Electricity, grid input (`dry_rendering_separation_electricity`)

Electricity, grid is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased steam input (`dry_rendering_separation_steam`)

Purchased steam is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased hot water input (`dry_rendering_separation_hot_water`)

Purchased hot water is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Natural gas input (`dry_rendering_separation_natural_gas`)

Natural gas is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diesel fuel input (`dry_rendering_separation_diesel`)

Diesel fuel is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`dry_rendering_separation_lpg`)

Liquefied petroleum gas is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Process water input (`dry_rendering_separation_process_water`)

Process water is recorded only for auxiliary cooling, sealing, condensers or scrubbers in the dry route; it shall not be represented as water added to the dry-rendering charge.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diatomaceous earth filter aid input (`dry_rendering_separation_diatomaceous_earth`)

Diatomaceous earth filter aid is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Activated carbon filtration medium input (`dry_rendering_separation_activated_carbon`)

Activated carbon filtration medium is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Activated carbon filtration medium
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Cellulose filter sheet input (`dry_rendering_separation_cellulose_filter`)

Cellulose filter sheet is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Cellulose filter sheet
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Dry rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### Waste flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

#### Outputs

##### Product flows

###### Horse rendered protein meal co-product (`dry_horse_solids`)

Horse rendered protein meal is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Horse rendered protein meal
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Dry rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Rabbit rendered protein meal co-product (`dry_rabbit_solids`)

Rabbit rendered protein meal is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Rabbit rendered protein meal
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Dry rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Bovine bone rendering solids co-product (`dry_bovine_bone_solids`)

Bovine bone rendering solids is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Bovine bone rendering solids
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Dry rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### Waste flows

###### Spent diatomaceous earth waste (`dry_spent_diatomaceous_earth`)

Spent diatomaceous earth is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Spent diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Dry rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Spent activated carbon waste (`dry_spent_activated_carbon`)

Spent activated carbon is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Spent activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Dry rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Used cellulose filter sheet waste (`dry_used_cellulose_filter`)

Used cellulose filter sheet is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Used cellulose filter sheet
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Dry rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### Elementary flows

###### Carbon dioxide, fossil, to air emission (`dry_co2_air`)

Carbon dioxide, fossil, to air is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Nitrogen oxides to air emission (`dry_nox_air`)

Nitrogen oxides to air is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Sulfur dioxide to air emission (`dry_so2_air`)

Sulfur dioxide to air is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Particulate matter, diameter below 2.5 um, to air emission (`dry_pm25_air`)

Particulate matter, diameter below 2.5 um, to air is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Particulate matter, diameter below 2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Ammonia to air emission (`dry_ammonia_air`)

Ammonia to air is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Hydrogen sulfide to air emission (`dry_h2s_air`)

Hydrogen sulfide to air is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Trimethylamine to air emission (`dry_trimethylamine_air`)

Trimethylamine to air is one atomic exchange at the dry rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Trimethylamine to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
### Process: Wet rendering, separation and purification (`wet_rendering_separation`)

#### Inputs

##### Product flows

###### Electricity, grid input (`wet_rendering_separation_electricity`)

Electricity, grid is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased steam input (`wet_rendering_separation_steam`)

Purchased steam is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased hot water input (`wet_rendering_separation_hot_water`)

Purchased hot water is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Natural gas input (`wet_rendering_separation_natural_gas`)

Natural gas is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diesel fuel input (`wet_rendering_separation_diesel`)

Diesel fuel is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`wet_rendering_separation_lpg`)

Liquefied petroleum gas is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Process water input (`wet_rendering_separation_process_water`)

Process water is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diatomaceous earth filter aid input (`wet_rendering_separation_diatomaceous_earth`)

Diatomaceous earth filter aid is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Activated carbon filtration medium input (`wet_rendering_separation_activated_carbon`)

Activated carbon filtration medium is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Activated carbon filtration medium
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Cellulose filter sheet input (`wet_rendering_separation_cellulose_filter`)

Cellulose filter sheet is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Cellulose filter sheet
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Wet rendering, separation and purification from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### Waste flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

#### Outputs

##### Product flows

###### Horse rendered protein meal co-product (`wet_horse_solids`)

Horse rendered protein meal is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Horse rendered protein meal
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wet rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Rabbit rendered protein meal co-product (`wet_rabbit_solids`)

Rabbit rendered protein meal is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Rabbit rendered protein meal
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wet rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Bovine bone rendering solids co-product (`wet_bovine_bone_solids`)

Bovine bone rendering solids is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Bovine bone rendering solids
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wet rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Horse rendering aqueous phase co-product (`wet_horse_aqueous_phase`)

Horse rendering aqueous phase is recorded as a product output only when it has a documented use and leaves under product control; otherwise its exact destination is recorded as a waste flow.

- Selected flow: Horse rendering aqueous phase
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wet rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Rabbit rendering aqueous phase co-product (`wet_rabbit_aqueous_phase`)

Rabbit rendering aqueous phase is recorded as a product output only when it has a documented use and leaves under product control; otherwise its exact destination is recorded as a waste flow.

- Selected flow: Rabbit rendering aqueous phase
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wet rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Bovine bone rendering aqueous phase co-product (`wet_bovine_bone_aqueous_phase`)

Bovine bone rendering aqueous phase is recorded as a product output only when it has a documented use and leaves under product control; otherwise its exact destination is recorded as a waste flow.

- Selected flow: Bovine bone rendering aqueous phase
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wet rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### Waste flows

###### Spent diatomaceous earth waste (`wet_spent_diatomaceous_earth`)

Spent diatomaceous earth is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Spent diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wet rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Spent activated carbon waste (`wet_spent_activated_carbon`)

Spent activated carbon is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Spent activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wet rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Used cellulose filter sheet waste (`wet_used_cellulose_filter`)

Used cellulose filter sheet is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Used cellulose filter sheet
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wet rendering, separation and purification from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### Elementary flows

###### Carbon dioxide, fossil, to air emission (`wet_co2_air`)

Carbon dioxide, fossil, to air is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Nitrogen oxides to air emission (`wet_nox_air`)

Nitrogen oxides to air is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Sulfur dioxide to air emission (`wet_so2_air`)

Sulfur dioxide to air is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Particulate matter, diameter below 2.5 um, to air emission (`wet_pm25_air`)

Particulate matter, diameter below 2.5 um, to air is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Particulate matter, diameter below 2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Ammonia to air emission (`wet_ammonia_air`)

Ammonia to air is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Hydrogen sulfide to air emission (`wet_h2s_air`)

Hydrogen sulfide to air is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Trimethylamine to air emission (`wet_trimethylamine_air`)

Trimethylamine to air is one atomic exchange at the wet rendering, separation and purification boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Trimethylamine to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack or workplace-boundary measurement where available; otherwise calculate from measured activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_rendering`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
### Process: Rendered-fat fractionation (`rendered_fat_fractionation`)

#### Inputs

##### Product flows

###### Pig fat, rendered fractionation feed (`fractionation_pig_fat`)

Pig fat, rendered is an upstream product input to fractionation. Its source animal, rendering route, supplier dataset and received mass shall remain explicit.

- Selected flow: Pig fat, rendered
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Tallow fractionation feed (`fractionation_tallow`)

Tallow is an upstream product input to fractionation. Its source animal, rendering route, supplier dataset and received mass shall remain explicit.

- Selected flow: Tallow
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Electricity, grid input (`fractionation_electricity`)

Electricity, grid is one atomic exchange at the rendered-fat fractionation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased steam input (`fractionation_steam`)

Purchased steam is one atomic exchange at the rendered-fat fractionation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased hot water input (`fractionation_hot_water`)

Purchased hot water is one atomic exchange at the rendered-fat fractionation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Natural gas input (`fractionation_natural_gas`)

Natural gas is one atomic exchange at the rendered-fat fractionation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diesel fuel input (`fractionation_diesel`)

Diesel fuel is one atomic exchange at the rendered-fat fractionation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`fractionation_lpg`)

Liquefied petroleum gas is one atomic exchange at the rendered-fat fractionation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Process water input (`fractionation_process_water`)

Process water is one atomic exchange at the rendered-fat fractionation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diatomaceous-earth filter aid (`fractionation_diatomaceous_earth`)

Diatomaceous earth filter aid is one atomic exchange at the rendered-fat fractionation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Rendered-fat fractionation from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### Waste flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

#### Outputs

##### Product flows

###### Lard oil product (`fractionation_lard_oil`)

Lard oil is one CPC 21529 fraction. The dataset shall declare whether this named output is the reference product or a co-product and shall not merge it with another fraction.

- Selected flow: Lard oil
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Rendered-fat fractionation from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Lard stearin product (`fractionation_lard_stearin`)

Lard stearin is one CPC 21529 fraction. The dataset shall declare whether this named output is the reference product or a co-product and shall not merge it with another fraction.

- Selected flow: Lard stearin
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Rendered-fat fractionation from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Oleo-oil product (`fractionation_oleo_oil`)

Oleo-oil is one CPC 21529 fraction. The dataset shall declare whether this named output is the reference product or a co-product and shall not merge it with another fraction.

- Selected flow: Oleo-oil
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Rendered-fat fractionation from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Oleostearin product (`fractionation_oleostearin`)

Oleostearin is one CPC 21529 fraction. The dataset shall declare whether this named output is the reference product or a co-product and shall not merge it with another fraction.

- Selected flow: Oleostearin
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Rendered-fat fractionation from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Tallow oil product (`fractionation_tallow_oil`)

Tallow oil is one CPC 21529 fraction. The dataset shall declare whether this named output is the reference product or a co-product and shall not merge it with another fraction.

- Selected flow: Tallow oil
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Rendered-fat fractionation from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`
##### Waste flows

###### Spent filter aid (`fractionation_spent_diatomaceous_earth`)

Spent diatomaceous earth is one atomic exchange at the rendered-fat fractionation boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Spent diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Rendered-fat fractionation from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_fractionation`
- Sources: `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

### Process: Wool-grease separation and derivative processing (`wool_grease_processing`)

#### Inputs

##### Product flows

###### Crude wool-grease feed (`wool_crude_grease`)

Crude wool grease is the distinct upstream feed for CPC 21529 wool-grease derivatives. Link it to the wool-scouring recovery dataset and record its received mass.

- Selected flow: Crude wool grease
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Electricity, grid input (`wool_electricity`)

Electricity, grid is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Purchased steam input (`wool_steam`)

Purchased steam is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Purchased hot water input (`wool_hot_water`)

Purchased hot water is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Natural gas input (`wool_natural_gas`)

Natural gas is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Diesel fuel input (`wool_diesel`)

Diesel fuel is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Liquefied petroleum gas input (`wool_lpg`)

Liquefied petroleum gas is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Process water input (`wool_process_water`)

Process water is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Sodium carbonate input (`wool_sodium_carbonate`)

Sodium carbonate is recorded as one chemical or filtration input only when the declared wool-grease route uses it and purchasing or dosing records identify it.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Sulfuric acid input (`wool_sulfuric_acid`)

Sulfuric acid is recorded as one chemical or filtration input only when the declared wool-grease route uses it and purchasing or dosing records identify it.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Diatomaceous earth filter aid input (`wool_diatomaceous_earth`)

Diatomaceous earth filter aid is recorded as one chemical or filtration input only when the declared wool-grease route uses it and purchasing or dosing records identify it.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Wool-grease separation and derivative processing from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`
##### Waste flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

#### Outputs

##### Product flows

###### Lanolin product (`wool_lanolin`)

Lanolin is one named CPC 21529 product. Keep its production lot, grade and reference-product designation separate from every other wool-grease derivative.

- Selected flow: Lanolin
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wool-grease separation and derivative processing from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool alcohols product (`wool_wool_alcohols`)

Wool alcohols is one named CPC 21529 product. Keep its production lot, grade and reference-product designation separate from every other wool-grease derivative.

- Selected flow: Wool alcohols
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wool-grease separation and derivative processing from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool grease olein product (`wool_wool_grease_olein`)

Wool grease olein is one named CPC 21529 product. Keep its production lot, grade and reference-product designation separate from every other wool-grease derivative.

- Selected flow: Wool grease olein
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wool-grease separation and derivative processing from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool grease stearin product (`wool_wool_grease_stearin`)

Wool grease stearin is one named CPC 21529 product. Keep its production lot, grade and reference-product designation separate from every other wool-grease derivative.

- Selected flow: Wool grease stearin
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wool-grease separation and derivative processing from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`
##### Waste flows

###### Wool-scouring grit waste (`wool_scouring_grit`)

Wool-scouring grit is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Wool-scouring grit
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wool-grease separation and derivative processing from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool-grease separation sludge waste (`wool_separation_sludge`)

Wool-grease separation sludge is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Wool-grease separation sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wool-grease separation and derivative processing from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool-scouring wastewater waste (`wool_scouring_wastewater`)

Wool-scouring wastewater is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Wool-scouring wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wool-grease separation and derivative processing from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Spent diatomaceous earth waste (`wool_spent_diatomaceous_earth`)

Spent diatomaceous earth is one atomic exchange at the wool-grease separation and derivative processing boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Spent diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Wool-grease separation and derivative processing from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wool_grease`
- Sources: `un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`
##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

### Process: Packaging, finished storage and release (`packaging_storage_release`)

#### Inputs

##### Product flows

###### Steel packaging drum input (`packaging_steel_drum`)

Steel packaging drum is one packaging component. Record its issued mass for the declared product batch and keep reusable-container cycles explicit where relevant.

- Selected flow: Steel packaging drum
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Packaging, finished storage and release from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### High-density polyethylene packaging drum input (`packaging_hdpe_drum`)

High-density polyethylene packaging drum is one packaging component. Record its issued mass for the declared product batch and keep reusable-container cycles explicit where relevant.

- Selected flow: High-density polyethylene packaging drum
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Packaging, finished storage and release from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene packaging liner input (`packaging_ldpe_liner`)

Low-density polyethylene packaging liner is one packaging component. Record its issued mass for the declared product batch and keep reusable-container cycles explicit where relevant.

- Selected flow: Low-density polyethylene packaging liner
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Packaging, finished storage and release from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Corrugated fibreboard carton input (`packaging_fibreboard_carton`)

Corrugated fibreboard carton is one packaging component. Record its issued mass for the declared product batch and keep reusable-container cycles explicit where relevant.

- Selected flow: Corrugated fibreboard carton
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Packaging, finished storage and release from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Wooden pallet input (`packaging_wood_pallet`)

Wooden pallet is one packaging component. Record its issued mass for the declared product batch and keep reusable-container cycles explicit where relevant.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Packaging, finished storage and release from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Polyethylene stretch film input (`packaging_stretch_film`)

Polyethylene stretch film is one packaging component. Record its issued mass for the declared product batch and keep reusable-container cycles explicit where relevant.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Packaging, finished storage and release from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Storage and packaging electricity (`packaging_electricity`)

Electricity, grid is one atomic exchange at the packaging, finished storage and release boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the quantity assigned to Packaging, finished storage and release from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### Waste flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

#### Outputs

##### Product flows

###### Reference rendered-fat product (`packaging_reference_product_output`)

This is the verified Tiangong Product reference flow for exact CPC 21529. The generic database name is made specific in each dataset by the mandatory animal source, feedstock, named fat or oil product and route qualifiers.

- Selected flow: Other animal fats, rendered `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`
- Flow property / unit: Mass / kg
- Amount rule: Set to exactly 1 kg net compliant product after subtracting packaging tare under `calc_reference_net_mass`; the exact product identity remains a required qualifier.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`
##### Waste flows

###### Steel packaging waste output (`packaging_steel_waste`)

Steel packaging waste is one atomic exchange at the packaging, finished storage and release boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Steel packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Packaging, finished storage and release from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### High-density polyethylene packaging waste output (`packaging_hdpe_waste`)

High-density polyethylene packaging waste is one atomic exchange at the packaging, finished storage and release boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: High-density polyethylene packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Packaging, finished storage and release from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene liner waste output (`packaging_ldpe_waste`)

Low-density polyethylene liner waste is one atomic exchange at the packaging, finished storage and release boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Low-density polyethylene liner waste
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Packaging, finished storage and release from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Corrugated fibreboard packaging waste output (`packaging_fibreboard_waste`)

Corrugated fibreboard packaging waste is one atomic exchange at the packaging, finished storage and release boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Corrugated fibreboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Packaging, finished storage and release from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Wooden pallet waste output (`packaging_wood_waste`)

Wooden pallet waste is one atomic exchange at the packaging, finished storage and release boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Wooden pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Packaging, finished storage and release from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Polyethylene stretch-film waste output (`packaging_stretch_film_waste`)

Polyethylene stretch-film waste is one atomic exchange at the packaging, finished storage and release boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Polyethylene stretch-film waste
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving Packaging, finished storage and release from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`
##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

### Process: Equipment cleaning and disinfection (`cleaning_disinfection`)

#### Inputs

##### Product flows

###### Process water input (`cleaning_process_water`)

Process water is one atomic exchange at the equipment cleaning and disinfection boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Equipment cleaning and disinfection from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Purchased hot water input (`cleaning_hot_water`)

Purchased hot water is one atomic exchange at the equipment cleaning and disinfection boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the quantity assigned to Equipment cleaning and disinfection from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Electricity, grid input (`cleaning_electricity`)

Electricity, grid is one atomic exchange at the equipment cleaning and disinfection boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the quantity assigned to Equipment cleaning and disinfection from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Sodium hydroxide input (`cleaning_sodium_hydroxide`)

Sodium hydroxide is one atomic exchange at the equipment cleaning and disinfection boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Equipment cleaning and disinfection from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Nitric acid input (`cleaning_nitric_acid`)

Nitric acid is one atomic exchange at the equipment cleaning and disinfection boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Equipment cleaning and disinfection from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Sodium hypochlorite input (`cleaning_sodium_hypochlorite`)

Sodium hypochlorite is one atomic exchange at the equipment cleaning and disinfection boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Equipment cleaning and disinfection from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Peracetic acid input (`cleaning_peracetic_acid`)

Peracetic acid is one atomic exchange at the equipment cleaning and disinfection boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to Equipment cleaning and disinfection from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### Waste flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

#### Outputs

##### Product flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Waste flows

###### Equipment pre-rinse wastewater output (`cleaning_prerinse_wastewater`)

Equipment pre-rinse wastewater is a separately identifiable wastewater stream. Record its metered or tank-calibrated volume and destination without combining it with another cleaning phase.

- Selected flow: Equipment pre-rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity leaving Equipment cleaning and disinfection from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Alkaline cleaning wastewater output (`cleaning_alkaline_wastewater`)

Alkaline cleaning wastewater is a separately identifiable wastewater stream. Record its metered or tank-calibrated volume and destination without combining it with another cleaning phase.

- Selected flow: Alkaline cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity leaving Equipment cleaning and disinfection from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Acid cleaning wastewater output (`cleaning_acid_wastewater`)

Acid cleaning wastewater is a separately identifiable wastewater stream. Record its metered or tank-calibrated volume and destination without combining it with another cleaning phase.

- Selected flow: Acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity leaving Equipment cleaning and disinfection from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Disinfection wastewater output (`cleaning_disinfection_wastewater`)

Disinfection wastewater is a separately identifiable wastewater stream. Record its metered or tank-calibrated volume and destination without combining it with another cleaning phase.

- Selected flow: Disinfection wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity leaving Equipment cleaning and disinfection from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity, grid input (`wwt_electricity`)

Electricity, grid is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Ferric chloride input (`wwt_ferric_chloride`)

Ferric chloride is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Calcium hydroxide input (`wwt_calcium_hydroxide`)

Calcium hydroxide is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Sodium hydroxide input (`wwt_sodium_hydroxide`)

Sodium hydroxide is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### Waste flows

###### Dry-rendering condensate wastewater input (`wwt_dry_condensate`)

Dry-rendering condensate wastewater is one wastewater input to on-site treatment. Record volume and source process separately so pollutant loads remain attributable.

- Selected flow: Dry-rendering condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Wet-rendering aqueous wastewater input (`wwt_wet_aqueous_wastewater`)

Wet-rendering aqueous wastewater is one wastewater input to on-site treatment. Record volume and source process separately so pollutant loads remain attributable.

- Selected flow: Wet-rendering aqueous wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Wool-scouring wastewater input (`wwt_wool_scouring_wastewater`)

Wool-scouring wastewater is one wastewater input to on-site treatment. Record volume and source process separately so pollutant loads remain attributable.

- Selected flow: Wool-scouring wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Alkaline cleaning wastewater input (`wwt_alkaline_cleaning_wastewater`)

Alkaline cleaning wastewater is one wastewater input to on-site treatment. Record volume and source process separately so pollutant loads remain attributable.

- Selected flow: Alkaline cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Acid cleaning wastewater input (`wwt_acid_cleaning_wastewater`)

Acid cleaning wastewater is one wastewater input to on-site treatment. Record volume and source process separately so pollutant loads remain attributable.

- Selected flow: Acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Disinfection wastewater input (`wwt_disinfection_wastewater`)

Disinfection wastewater is one wastewater input to on-site treatment. Record volume and source process separately so pollutant loads remain attributable.

- Selected flow: Disinfection wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the quantity assigned to On-site wastewater treatment from calibrated meters, scales, invoices, issue records or batch logs; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### Elementary flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

#### Outputs

##### Product flows

No exchange is preset for this direction and flow type; if one exists on site, add one named atomic card and complete UUID review.

##### Waste flows

###### Wastewater-treatment screenings output (`wwt_screenings`)

Wastewater-treatment screenings is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Wastewater-treatment screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving On-site wastewater treatment from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Dissolved-air-flotation sludge output (`wwt_daf_sludge`)

Dissolved-air-flotation sludge is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Dissolved-air-flotation sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving On-site wastewater treatment from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Biological wastewater-treatment sludge output (`wwt_biological_sludge`)

Biological wastewater-treatment sludge is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Biological wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the quantity leaving On-site wastewater treatment from calibrated scales, transfer records, waste tickets or laboratory-backed calculations; do not substitute a default value.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### Elementary flows

###### Chemical oxygen demand to water discharge (`wwt_cod_water`)

Chemical oxygen demand to water is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from matched effluent volume and representative measured concentration under `calc_effluent_load`; do not use an author default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Biochemical oxygen demand to water discharge (`wwt_bod_water`)

Biochemical oxygen demand to water is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Biochemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from matched effluent volume and representative measured concentration under `calc_effluent_load`; do not use an author default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Total suspended solids to water discharge (`wwt_tss_water`)

Total suspended solids to water is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from matched effluent volume and representative measured concentration under `calc_effluent_load`; do not use an author default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Total nitrogen to water discharge (`wwt_tn_water`)

Total nitrogen to water is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from matched effluent volume and representative measured concentration under `calc_effluent_load`; do not use an author default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Total phosphorus to water discharge (`wwt_tp_water`)

Total phosphorus to water is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from matched effluent volume and representative measured concentration under `calc_effluent_load`; do not use an author default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Animal fat to water discharge (`wwt_animal_fat_water`)

Animal fat to water is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Animal fat to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from matched effluent volume and representative measured concentration under `calc_effluent_load`; do not use an author default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Ammoniacal nitrogen to water discharge (`wwt_ammoniacal_n_water`)

Ammoniacal nitrogen to water is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Ammoniacal nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from matched effluent volume and representative measured concentration under `calc_effluent_load`; do not use an author default concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Methane to air emission (`wwt_methane_air`)

Methane to air is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement where available; otherwise calculate from measured treatment activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Nitrous oxide to air emission (`wwt_nitrous_oxide_air`)

Nitrous oxide to air is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement where available; otherwise calculate from measured treatment activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Ammonia to air emission (`wwt_ammonia_air`)

Ammonia to air is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement where available; otherwise calculate from measured treatment activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Hydrogen sulfide to air emission (`wwt_h2s_air`)

Hydrogen sulfide to air is one atomic exchange at the on-site wastewater treatment boundary. Record it only when the named flow is physically present and traceable to the declared batch.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement where available; otherwise calculate from measured treatment activity and a documented site-specific factor under `calc_air_emission`. Do not use an author default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant CPC 21529 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | route and product batches | First subdivide by source species, named product, route, line, batch and directly metered stage so separable burdens are not allocated. | `eu-pef-2021-2279` |
| `allocation_direct_assignment` | route-specific inputs and outputs | Directly assign metered materials, utilities, chemicals, packaging, products, wastes and emissions to the batch that caused them. | `eu-pef-2021-2279`; `ec-jrc-sa-bref-2024` |
| `allocation_physical_relation` | inseparable co-production | When subdivision is impossible, use a documented physical causal relationship that reflects how changing outputs changes the shared process burden. | `eu-pef-2021-2279` |
| `allocation_fallback` | no defensible physical relation | If no defensible physical relationship exists, use a documented economic allocation based on contemporaneous product values and report a sensitivity result; do not assign zero burden to a saleable output. | `eu-pef-2021-2279` |
| `allocation_waste_status` | solids and aqueous phases | Classify each named output as product, by-product or waste from documented legal status and actual destination before allocation; do not change status merely to improve results. | `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `eu-pef-2021-2279` |
| `allocation_mass_balance` | all routes | Reconcile input mass, net reference product, every named co-product, water transfer, stock change, evaporation, wastewater and solid waste before applying allocation. | `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_receiving` | `source_material_receiving` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | Reconcile batch ledgers with calibrated meters or scales, invoices, issue records, laboratory results, transfer records and waste tickets for every atomic row. | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | Sum only records for the same named flow and process; allocate shared records under an explicit calculation rule. | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_dry_rendering` | `dry_rendering_separation` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | Reconcile batch ledgers with calibrated meters or scales, invoices, issue records, laboratory results, transfer records and waste tickets for every atomic row. | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | Sum only records for the same named flow and process; allocate shared records under an explicit calculation rule. | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_wet_rendering` | `wet_rendering_separation` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | Reconcile batch ledgers with calibrated meters or scales, invoices, issue records, laboratory results, transfer records and waste tickets for every atomic row. | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | Sum only records for the same named flow and process; allocate shared records under an explicit calculation rule. | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_fat_fractionation` | `rendered_fat_fractionation` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | Reconcile batch ledgers with calibrated meters or scales, invoices, issue records, laboratory results, transfer records and waste tickets for every atomic row. | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | Sum only records for the same named flow and process; allocate shared records under an explicit calculation rule. | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_wool_grease` | `wool_grease_processing` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | Reconcile batch ledgers with calibrated meters or scales, invoices, issue records, laboratory results, transfer records and waste tickets for every atomic row. | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | Sum only records for the same named flow and process; allocate shared records under an explicit calculation rule. | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_packaging_release` | `packaging_storage_release` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | Reconcile batch ledgers with calibrated meters or scales, invoices, issue records, laboratory results, transfer records and waste tickets for every atomic row. | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | Sum only records for the same named flow and process; allocate shared records under an explicit calculation rule. | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_cleaning` | `cleaning_disinfection` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | Reconcile batch ledgers with calibrated meters or scales, invoices, issue records, laboratory results, transfer records and waste tickets for every atomic row. | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | Sum only records for the same named flow and process; allocate shared records under an explicit calculation rule. | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_wastewater` | `onsite_wastewater_treatment` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | Reconcile source-specific flow meters, treatment logbooks, chemical dosing, laboratory chain-of-custody results, sludge tickets and discharge records. | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | Sum only records for the same named flow and process; allocate shared records under an explicit calculation rule. | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_net_mass` | dispatch product | net compliant mass = gross filled mass - verified packaging tare - rejected/nonconforming product mass | gross filled mass; packaging tare; rejected product mass | net compliant product mass in kg | `eu-pef-2021-2279` |
| `calc_normalize_reference` | every inventory row | normalized quantity = quantity assigned to declared product / net compliant product mass | assigned row quantity; net compliant product mass | row quantity per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_air_emission` | each named air emission | use direct measured mass; otherwise measured activity multiplied by a documented site-specific factor with matching technology, fuel and period | direct measurement or activity record; site-specific factor | mass of one named substance to air | `us-epa-ap42-rendering`; `ec-jrc-sa-bref-2024` |
| `calc_effluent_load` | each named water discharge | discharged load = matched effluent volume multiplied by representative measured concentration, with unit conversion documented | effluent volume; concentration; sampling representativeness | mass of one named pollutant to water | `ec-jrc-sa-bref-2024`; `us-epa-wool-processing` |
| `calc_thermal_energy` | purchased steam or hot water where supplier reports mass | energy = measured carrier mass multiplied by documented inlet/outlet enthalpy difference | carrier mass; pressure; temperature; condensate return condition | MJ of the named thermal carrier | `ec-jrc-sa-bref-2024` |
| `calc_fuel_energy` | each named fuel | energy = measured fuel quantity multiplied by supplier- or batch-specific net calorific value | fuel quantity; net calorific value | MJ of the named fuel | `eu-pef-2021-2279` |
| `calc_mass_balance` | each batch or campaign | inputs + opening stock = products + wastes + wastewater transfers + measured evaporation + closing stock; investigate and disclose unreconciled difference | all measured mass records and stock changes | route-level mass-balance statement | `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279` |
| `calc_shared_allocation` | unavoidable shared records | allocate only after subdivision using the declared causal physical relation; where unavailable, apply documented contemporaneous economic shares and sensitivity | shared quantity; output quantities; causal driver or product values | allocated atomic row quantities | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | source and reference product | Preserve supplier, animal/source identity, anatomical or upstream feedstock, product name, legal category, batch, route and destination. | Receiving records, supplier declarations, batch genealogy and release certificate. |
| `dq_temporal` | all foreground rows | Use a reporting period representative of declared operation and identify shutdowns, abnormal batches and seasonal source changes. | Dated raw records and coverage statement. |
| `dq_metering` | meters and scales | Record equipment identifier, calibration status, reading interval, missing-data treatment and any shared-meter allocation. | Calibration certificates, meter extracts and reconciliation workbook. |
| `dq_sampling` | emissions and wastewater | Document sampling location, method, laboratory, detection limit, QA/QC, representativeness and matched flow period for each named substance or parameter. | Chain of custody, laboratory report and flow record. |
| `dq_completeness` | inventory | Reconcile every actual material, energy, product, waste and elementary exchange; absence must be demonstrated rather than inferred from a blank PCR card. | Completeness checklist, purchase ledger, process walkdown and mass/energy reconciliation. |
| `dq_source_quality` | secondary links and factors | Record dataset identity, geography, time, technology, unit and reason for selection; never treat this PCR source table as an amount source. | Dataset citation and selection memorandum. |
| `dq_verification` | published package | Retain calculations, allocation decisions, raw-to-normalized lineage and reviewer findings sufficient for independent reproduction. | Versioned calculation file, evidence index and verification record. |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | The only populated inventory UUID is the verified Product flow `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`; its property is Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, unit is kg, and output is exactly 1 kg net product. | `un-cpc-3-0-retained-structure` |
| `validation_scope` | product classification | The declared product is explicitly included in CPC 21529 and is not a product of 21521-21526, 2151 or 21590. | `un-cpc-3-0-explanatory-notes` |
| `validation_qualifiers` | dataset metadata | Exact animal or wool source, feedstock, named product, route, separation train, grade, intended-use status, geography, period, packaging and output disposition are all present. | `un-cpc-3-0-explanatory-notes`; `eu-regulation-1069-2009` |
| `validation_route` | process inventory | The process map includes the one applicable primary route, receiving, packaging/release and allocated cleaning; on-site wastewater treatment is included only when performed. | `us-epa-ap42-rendering`; `us-epa-wool-processing`; `ec-jrc-sa-bref-2024` |
| `validation_atomicity` | inventory cards | Every exchange card contains one named flow; each additional actual source, energy carrier, fuel, chemical, filter medium, package, product, waste, pollutant and emission has its own row_id. | `eu-pef-2021-2279` |
| `validation_uuid_closure` | Tiangong identity | Every non-reference UUID remains blank until exact semantic dual verification; every blank UUID row_id appears in manifest review metadata with candidate status and rejection reason. | `eu-pef-2021-2279` |
| `validation_amount_evidence` | quantities | Every non-reference amount is collected or calculated from collected records under a listed protocol; no external source value is used as a default. | `eu-pef-2021-2279` |
| `validation_mass_balance` | batch reconciliation | Inputs, products, stock changes, evaporation, wastewater and wastes reconcile under `calc_mass_balance`, and any remaining difference is disclosed and investigated. | `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279` |
| `validation_allocation` | co-products and wastes | Each output has documented status and destination; shared burdens follow the declared allocation hierarchy with calculations and sensitivity where required. | `eu-regulation-1069-2009`; `eu-pef-2021-2279` |
| `validation_emissions` | air and water exchanges | Each reported pollutant or emission is a separate named card linked to measured activity, monitoring or laboratory evidence with method and period disclosed. | `us-epa-ap42-rendering`; `ec-jrc-sa-bref-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground data package and dataset projection for one exact CPC 21529 product and route. |
| downstream_use | LCI dataset creation, process projection, lifecycle-model linking, Environmental Footprint modelling and independent review. |
| allowed_use | Use only when product, source, route, geography, period, quality, regulatory status and allocation match the declared package. |
| excluded_use | Do not use as a default dataset for pig fat, poultry fat, tallow, fish or marine-mammal oil, unrendered fat, chemically modified fat, or an unidentified “other animal fat”. |
| required_metadata | PCR id; CPC code; reference UUID; exact product/source/feedstock; route and separation train; batch mode; grade; intended use; geography; period; packaging; upstream links; co-product status; allocation; data-owner and reviewer. |
| required_quality_disclosure | Raw-record coverage, calibration, sampling QA/QC, calculation lineage, mass-balance result, allocation sensitivity, unresolved UUIDs, exclusions and limitations. |
| update_trigger | Source species/feedstock, named product, route, separation or purification technology, fuel, chemical, packaging, wastewater treatment, regulatory status, allocation, site, supplier or representative period changes materially. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-retained-structure` | `official_guidance` | United Nations Statistics Division, retained CPC Version 3.0 structure, `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` | Exact subclass title and neighbouring-code boundary. |
| `un-cpc-3-0-explanatory-notes` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Included named fats, oils, fractions and wool-grease products; exclusions to 21521-21526 and 21590. |
| `ec-jrc-sa-bref-2024` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, 2024, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Rendering, fat melting, utilities, cleaning, wastewater, waste and emission inventory structure; no BREF quantity is adopted as a default. |
| `us-epa-ap42-rendering` | `official_guidance` | US EPA, AP-42 Section 9.5.3 background document, Meat Rendering Plants, https://www3.epa.gov/ttn/chief/ap42/ch09/bgdocs/b09s05-3.pdf | Dry and wet rendering distinction; size reduction, steam heating, draining, pressing, centrifugation, filtration, storage and named potential air emissions. |
| `fao-rendering-manual` | `extension_guidance` | FAO, Manual for the slaughter of small ruminants in developing countries, section 10.3, https://www.fao.org/4/X6552E/X6552E10.htm | Independent technical corroboration of wet rendering with water and steam, dry rendering without added water, phase separation and recovery of fat, aqueous and solid streams. |
| `eu-regulation-1069-2009` | `standard` | Regulation (EC) No 1069/2009 on animal by-products and derived products not intended for human consumption, https://eur-lex.europa.eu/eli/reg/2009/1069/oj/eng | Animal-by-product source category, segregation, traceability, approved processing and intended-use controls. |
| `eu-regulation-142-2011` | `standard` | Commission Regulation (EU) No 142/2011 implementing Regulation (EC) No 1069/2009, https://eur-lex.europa.eu/eli/reg/2011/142/oj/eng | Processing, storage, packaging, hygiene and record controls for applicable rendered fats; regulatory parameters are not imported as LCI defaults. |
| `us-epa-wool-processing` | `official_guidance` | US EPA, Development Document for Effluent Limitations Guidelines and Standards for the Textile Mills, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10004LF3.TXT | Wool-scouring liquor separation, centrifugation, grease recovery, lanolin refining context, sulfuric-acid cracking option and specific wastewater structure. |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific bill of materials, company-specific manufacturing data, complete LCI, allocation, transparency, data quality and verification. |
