---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.quilts-eiderdowns-cushions-pouffes-pillows-sleeping-bags-and-the-like-fitted-with-sprin-c4ef5280
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Quilts, eiderdowns, cushions, pouffes, pillows, sleeping bags and the like, fitted with springs or stuffed or internally fitted with any material or of cellular rubber or plastics

## 1. Scope and Applicability

This PCR covers factory-gate foreground production of CPC 3.0 subclass 27180 articles: quilts, eiderdowns, cushions, pouffes, pillows, sleeping bags and similar articles fitted with springs, stuffed or internally fitted with material, or made of cellular rubber or plastics. It applies to a declared product family and bill of materials, not to an undisclosed average across all article types.

The foreground boundary begins with purchased, production-ready shell fabrics, filling, foam or spring cores, sewing components, process chemicals and packaging at the manufacturing site. It includes cutting, sewing, filling or core insertion, quilting or closure, conditional on-site wet finishing and drying, inspection, rework, labelling and packaging. Upstream manufacture of purchased materials is represented by linked upstream datasets. Distribution, use, laundering during use and end-of-life are outside the default factory-gate boundary.

Mattresses, upholstered furniture, unfilled bed linen, apparel, raw textile fibres, loose filling sold as a product, fabric and standalone packaging are excluded. If a study expands beyond the factory gate, those added stages must be declared and modelled separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.quilts-eiderdowns-cushions-pouffes-pillows-sleeping-bags-and-the-like-fitted-with-sprin-c4ef5280 |
| classification_refs | CPC 3.0:27180 |
| covered_products | Quilts; eiderdowns; cushions; pouffes; pillows; sleeping bags; comparable spring-fitted, stuffed, internally fitted or cellular-rubber/plastic articles within CPC 27180 |
| excluded_products | Mattresses; upholstered furniture; unfilled bed linen; apparel; raw fibres; loose filling; fabric; standalone packaging; products outside CPC 27180 |
| representative_product | A declared finished CPC 27180 article with product-family, dimensions, net mass, shell construction, filling/core construction and packaging status specified |
| production_route | Receipt of production-ready materials; cutting and sewing; filling, core insertion, quilting and closure; conditional wet finishing and drying; inspection, rework, labelling and packaging |
| market_state | Finished manufactured article at factory gate; packaging mass reported separately from the 1 kg net-product reference flow |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of the declared cushioning, insulation, support or sleeping function of one CPC 27180 article family at the factory gate |
| How much | 1 kg net mass of conforming finished article, excluding packaging |
| How well | The declared product family, dimensions, shell material and construction, filling or core material and content, relevant performance grade, included components and quality-control status |
| How long or cycle | One manufacturing batch and one factory-gate delivery; service life is declared only when a downstream use-stage model is added |
| reference_flow_link | The reference flow is the exact mass of conforming finished product needed to provide the stated function and qualifiers |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Quilts, eiderdowns, cushions, pouffes, pillows, sleeping bags and the like, fitted with springs or stuffed or internally fitted with any material or of cellular rubber or plastics `f646f2c3-aead-4a65-8904-8894b67221f8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product_family; intended_function; dimensions; net_product_mass; shell_material_and_construction; filling_or_core_material; filling_or_core_content; spring_construction_if_present; closure_and_accessory_configuration; finish_or_treatment; performance_grade; recycled_or_biogenic_content_claim; production_site; production_geography; production_period; packaging_inclusion; factory_gate_boundary |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent field. A dataset missing any applicable qualifier has an incomplete reference-flow definition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-bearing material and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the inventory to exactly 1 kg net conforming finished article; exclude packaging from product mass and retain reporting-period totals before normalization. |
| `bom_mass_basis` | Shell, filling, foam, spring, sewing component and adhesive inputs | Mass | kg | Record as-issued and returned quantities for the declared batch and derive net consumption from foreground records; do not infer material shares from an AI estimate. |
| `packaging_separation` | Packaging inputs and wastes | Mass | kg | Measure each packaging component separately and report it outside net product mass. |
| `electricity_record` | Cutting, sewing, filling, finishing, drying, inspection and packing electricity | Energy | kWh | Preserve meter or invoice values and the electricity supply identity before normalization. |
| `fuel_record` | On-site natural-gas use | Net calorific value | MJ | Preserve the measured or invoiced quantity, conversion basis and supplier/site calorific value used. |
| `water_record` | On-site wet finishing and rinsing | Volume | m3 | Use metered inlet water and retain any measured reuse or recycle quantity separately. |
| `wastewater_record` | Textile finishing wastewater | Volume | m3 | Use measured discharge volume; retain sampling location, discharge route and treatment boundary. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_direct_operations` | Foreground manufacturing | Include all site-controlled receipt, cutting, sewing, filling or core insertion, quilting or closure, conditional wet finishing and drying, inspection, rework, labelling and packaging operations used for the declared article. | `epa-textile-sector-notebook-1997`; `uk-resource-efficiency-textiles-2024` |
| `sb_purchased_inputs` | Purchased materials and utilities | Keep each purchased material and utility as a separate product input and link it to a geographically and technologically appropriate upstream dataset. | `eu-pef-2021`; `iso-14044-2006` |
| `sb_direct_outputs` | Foreground wastes and emissions | Record each site-generated offcut, filling loss, foam scrap, metal scrap, wastewater, sludge and relevant direct air emission separately, with treatment destinations outside the site linked as downstream datasets. | `eu-textiles-bat-2022` |
| `sb_recursive_category` | Same-category product inputs | Keep any purchased CPC 27180 article used as an input visible as one product input and require an upstream dataset for it; do not recursively reconstruct its manufacture inside this foreground package. | `eu-pef-2021` |
| `sb_default_exclusions` | Distribution, use and end-of-life | Exclude distribution, consumer or institutional use, laundering during use and end-of-life from the default factory-gate package; an expanded study must identify and model them as additional stages. | `iso-14040-2006`; `eu-pef-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased production-ready shell materials, filling or core materials, sewing components, process chemicals and packaging received at the manufacturing site |
| starting_condition_role | Foreground factory-gate starting point; upstream raw-material extraction and purchased-material manufacture are represented by upstream datasets |
| product_classification_scope | One declared product family within CPC 3.0 subclass 27180 |
| recursive_input_rule | A purchased article within CPC 27180 remains an explicit atomic product input with its own upstream dataset and is not unfolded recursively in this package |
| upstream_dataset_requirement | Every purchased product and utility input requires an identity-matched upstream dataset or a disclosed, justified proxy before publication |
| disclosure | Declare product family, BOM, material grades, production route, site, geography, period, included on-site treatments, packaging boundary, exclusions, proxies, cut-offs and allocation decisions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `article_fabrication` | Article fabrication and assembly | `required` | Always included for the declared product route | Foreground cutting, sewing, filling or core insertion, quilting and closure | Net kg of unpackaged conforming article leaving fabrication |
| `wet_finishing_drying` | Wet finishing and drying | `conditional` | Include only when washing, rinsing, chemical wet finishing or drying is performed on site | Foreground wet treatment and associated water, energy, wastewater and direct emissions | Net kg of article leaving the wet route |
| `inspection_packaging` | Inspection and packaging | `required` | Always included; zero packaging is permitted only with documented unpackaged delivery | Foreground inspection, rework, labelling and packing | 1 kg net conforming finished article at factory gate |

### Process: Article fabrication and assembly (`article_fabrication`)

#### Inputs

##### Product flows

###### Cotton shell fabric (`cotton_shell_fabric_in`)

Record this row when woven cotton fabric is cut or sewn into the declared article shell.

- Selected flow: Woven cotton fabric
- Flow property / unit: Mass / kg
- Amount rule: Net batch consumption from weighed issue less documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `epa-textile-sector-notebook-1997`; `uk-resource-efficiency-textiles-2024`

###### Polyester shell fabric (`polyester_shell_fabric_in`)

Record this row when woven polyester fabric is cut or sewn into the declared article shell.

- Selected flow: Woven polyester fabric
- Flow property / unit: Mass / kg
- Amount rule: Net batch consumption from weighed issue less documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `epa-textile-sector-notebook-1997`; `uk-resource-efficiency-textiles-2024`

###### Polyamide 6 shell fabric (`nylon_shell_fabric_in`)

Record this row when woven polyamide 6 fabric is used as the shell of the declared article.

- Selected flow: Woven polyamide 6 fabric
- Flow property / unit: Mass / kg
- Amount rule: Net batch consumption from weighed issue less documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `uk-resource-efficiency-textiles-2024`

###### Polyester filling (`polyester_fill_in`)

Record polyester staple fibre metered or weighed into the declared article.

- Selected flow: Polyester staple fibre filling
- Flow property / unit: Mass / kg
- Amount rule: Weighed filling charged to the batch less recovered clean return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `uk-resource-efficiency-textiles-2024`

###### Duck down-and-feather filling (`duck_down_fill_in`)

Record cleaned duck down-and-feather filling when it is charged to the declared article.

- Selected flow: Cleaned duck down-and-feather filling
- Flow property / unit: Mass / kg
- Amount rule: Weighed filling charged to the batch less recovered clean return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `un-cpc-3-27180`

###### Flexible polyurethane foam core (`pu_foam_core_in`)

Record flexible cellular polyurethane foam cut or inserted as a core or filling.

- Selected flow: Flexible cellular polyurethane foam
- Flow property / unit: Mass / kg
- Amount rule: Weighed foam issued to the batch less reusable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `un-cpc-3-27180`

###### Cellular natural-rubber foam core (`natural_rubber_foam_core_in`)

Record cellular natural-rubber foam cut or inserted as a core or filling.

- Selected flow: Cellular natural rubber foam
- Flow property / unit: Mass / kg
- Amount rule: Weighed foam issued to the batch less reusable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `un-cpc-3-27180`

###### Steel spring unit (`steel_spring_unit_in`)

Record the assembled steel spring unit inserted into the declared article.

- Selected flow: Assembled steel spring unit
- Flow property / unit: Mass / kg
- Amount rule: Weighed spring units consumed by the conforming batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `un-cpc-3-27180`

###### Polyester sewing thread (`polyester_thread_in`)

Record polyester sewing thread consumed in shell construction, quilting and closure.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Net thread issue to the batch from spool issue and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `epa-textile-sector-notebook-1997`

###### Polyester-coil zipper (`polyester_zipper_in`)

Record complete polyester-coil zippers when they remain in the finished article.

- Selected flow: Polyester-coil zipper
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass of accepted zippers consumed by the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `uk-resource-efficiency-textiles-2024`

###### Waterborne polyurethane adhesive (`waterborne_pu_adhesive_in`)

Record formulated waterborne polyurethane adhesive only for a route that bonds foam, shell or internal components with this adhesive.

- Selected flow: Waterborne polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: Weighed or purchase-reconciled adhesive consumption for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `eu-textiles-bat-2022`

###### Fabrication electricity (`electricity_fabrication_in`)

Record low-voltage electricity used by cutting, sewing, filling, quilting, closure and local extraction equipment.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Dedicated meter reading for the batch or reporting-period submeter value normalized to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_energy`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unpackaged article (`unpackaged_article_out`)

Record the conforming unpackaged article transferred to wet finishing or final inspection.

- Selected flow: Stuffed bedding article, unpackaged
- Flow property / unit: Mass / kg
- Amount rule: Weighed net mass of conforming unpackaged output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`
- Sources: `un-cpc-3-27180`

##### Waste flows

###### Cotton cutting offcut (`cotton_offcut_out`)

Record cotton fabric offcuts leaving the fabrication process as waste.

- Selected flow: Cotton fabric cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed cotton offcuts by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`
- Sources: `uk-resource-efficiency-textiles-2024`

###### Polyester cutting offcut (`polyester_offcut_out`)

Record polyester fabric offcuts leaving the fabrication process as waste.

- Selected flow: Polyester fabric cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed polyester offcuts by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`
- Sources: `uk-resource-efficiency-textiles-2024`

###### Polyamide 6 cutting offcut (`nylon_offcut_out`)

Record polyamide 6 fabric offcuts leaving the fabrication process as waste.

- Selected flow: Polyamide 6 fabric cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed polyamide 6 offcuts by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`
- Sources: `uk-resource-efficiency-textiles-2024`

###### Polyester filling waste (`polyester_fill_waste_out`)

Record polyester filling collected as non-reusable waste.

- Selected flow: Polyester staple fibre filling waste
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed non-reusable filling loss by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`
- Sources: `uk-resource-efficiency-textiles-2024`

###### Duck down-and-feather filling waste (`down_fill_waste_out`)

Record cleaned duck down-and-feather filling collected as non-reusable waste.

- Selected flow: Cleaned duck down-and-feather filling waste
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed non-reusable filling loss by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`
- Sources: `uk-resource-efficiency-textiles-2024`

###### Polyurethane foam offcut (`pu_foam_offcut_out`)

Record flexible polyurethane foam offcuts leaving fabrication as waste.

- Selected flow: Flexible polyurethane foam offcut
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed non-reusable foam offcuts by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`
- Sources: `uk-resource-efficiency-textiles-2024`

###### Steel spring scrap (`steel_scrap_out`)

Record rejected or trimmed steel spring material leaving fabrication as waste.

- Selected flow: Steel spring scrap
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed steel spring scrap by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`
- Sources: `eu-textiles-bat-2022`

###### Polyester thread waste (`thread_waste_out`)

Record polyester sewing-thread tails and rejected thread leaving fabrication as waste.

- Selected flow: Polyester sewing thread waste
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed or mass-balanced thread waste by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`
- Sources: `uk-resource-efficiency-textiles-2024`

##### Elementary flows

###### Fibre particulate to air (`pm10_air_out`)

Record emitted particulate below 10 micrometres when fill handling, cutting or extraction monitoring identifies this elementary flow as relevant.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or calculation from collected abatement and activity records using a documented method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabrication_air`
- Sources: `eu-textiles-bat-2022`

### Process: Wet finishing and drying (`wet_finishing_drying`)

#### Inputs

##### Product flows

###### Unpackaged article entering wet finishing (`unpackaged_article_wet_in`)

Record the unpackaged article entering the on-site wet route.

- Selected flow: Stuffed bedding article, unpackaged
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass accepted into the wet-finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_materials_output`
- Sources: `eu-textiles-bat-2022`

###### Wet-process water (`process_water_wet_in`)

Record supplied process water used for washing, rinsing or wet finishing.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered inlet water less separately metered reused water already credited within the process water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_water_energy`
- Sources: `eu-textiles-bat-2022`

###### Wet-process electricity (`electricity_wet_in`)

Record low-voltage electricity used by washing, dosing, dewatering, drying and air-handling equipment.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Dedicated meter reading for the wet batch or reporting-period submeter value normalized to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_water_energy`
- Sources: `eu-textiles-bat-2022`

###### Natural gas for wet-route heat (`natural_gas_wet_in`)

Record natural gas combusted on site to supply direct or indirect heat to the wet route.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or invoiced gas converted with the recorded supplier or site net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_water_energy`
- Sources: `eu-textiles-bat-2022`

###### Hydrogen peroxide (`hydrogen_peroxide_wet_in`)

Record hydrogen peroxide only when the declared wet route uses it.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: Active chemical mass from batch dosing records and recorded concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_materials_output`
- Sources: `eu-textiles-bat-2022`

###### Sodium carbonate (`sodium_carbonate_wet_in`)

Record sodium carbonate only when the declared wet route uses it.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Active chemical mass from batch dosing records and recorded concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_materials_output`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-finished unpackaged article (`wet_finished_article_out`)

Record the conforming unpackaged article leaving the wet route.

- Selected flow: Wet-finished stuffed bedding article, unpackaged
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass accepted after wet finishing and drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_materials_output`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

###### Textile finishing wastewater (`wet_process_wastewater_out`)

Record wastewater discharged from washing, rinsing or wet finishing before off-site or on-site treatment outside this unit process.

- Selected flow: Textile finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge volume at the declared process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_waste_emissions`
- Sources: `eu-textiles-bat-2022`; `epa-textile-sector-notebook-1997`

###### Textile wastewater-treatment sludge (`wet_treatment_sludge_out`)

Record sludge generated when wastewater treatment is inside the declared foreground site boundary.

- Selected flow: Textile wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge with solids content recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_waste_emissions`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air_out`)

Record fossil carbon dioxide from on-site natural-gas combustion when that combustion lies inside the foreground boundary.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected fuel consumption and a documented supplier or site carbon-content factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_waste_emissions`
- Sources: `eu-textiles-bat-2022`

### Process: Inspection and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Unpackaged article entering inspection (`unpackaged_article_pack_in`)

Record the unpackaged conforming or rework-candidate article entering final inspection and packaging.

- Selected flow: Stuffed bedding article, unpackaged
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_inputs_output`
- Sources: `un-cpc-3-27180`

###### Packaging electricity (`electricity_pack_in`)

Record low-voltage electricity used for inspection, compression, sealing, labelling and packing.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Dedicated meter reading or reporting-period submeter value normalized to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_inputs_output`
- Sources: `eu-textiles-bat-2022`

###### Low-density polyethylene packaging film (`ldpe_film_in`)

Record LDPE film that leaves the site with the finished product.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Weighed or purchase-reconciled LDPE film consumed by the conforming batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article, reported outside net product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_inputs_output`
- Sources: `eu-pef-2021`

###### Corrugated fibreboard box (`corrugated_box_in`)

Record corrugated fibreboard boxes that leave the site with the finished product.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Weighed or purchase-reconciled box mass consumed by the conforming batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article, reported outside net product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_inputs_output`
- Sources: `eu-pef-2021`

###### Uncoated paper label (`paper_label_in`)

Record uncoated paper labels that leave the site with the finished product.

- Selected flow: Uncoated paper label
- Flow property / unit: Mass / kg
- Amount rule: Weighed or purchase-reconciled label mass consumed by the conforming batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article, reported outside net product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_inputs_output`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished CPC 27180 article (`finished_product_out`)

This is the reference product output. Packaging is not included in its mass.

- Selected flow: Quilts, eiderdowns, cushions, pouffes, pillows, sleeping bags and the like, fitted with springs or stuffed or internally fitted with any material or of cellular rubber or plastics `f646f2c3-aead-4a65-8904-8894b67221f8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net conforming finished article after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-27180`

##### Waste flows

###### Off-spec article waste (`off_spec_article_waste_out`)

Record rejected finished articles sent to waste treatment after rework opportunities are exhausted.

- Selected flow: Off-spec stuffed bedding article
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed rejected product mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `uk-resource-efficiency-textiles-2024`

###### LDPE film waste (`ldpe_film_waste_out`)

Record LDPE film trim and rejected film generated during packing.

- Selected flow: Low-density polyethylene film waste
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed LDPE film waste by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-textiles-bat-2022`

###### Corrugated fibreboard waste (`corrugated_board_waste_out`)

Record rejected or trimmed corrugated fibreboard generated during packing.

- Selected flow: Corrugated fibreboard waste
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed corrugated fibreboard waste by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-textiles-bat-2022`

###### Paper label waste (`paper_label_waste_out`)

Record rejected uncoated paper labels generated during packing.

- Selected flow: Uncoated paper label waste
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed or purchase-reconciled paper label waste by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_waste`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | Multi-product lines and shared operations | Prefer batch, line or process subdivision and direct metering so that the declared product carries its measured foreground inputs and outputs before any allocation is used. | `iso-14044-2006`; `eu-pef-2021` |
| `alloc_shared_utilities` | Unavoidably shared electricity, heat, water and common wastes | Use a documented physical causal driver such as metered machine time, treated mass or measured throughput; retain the total, driver and calculation, and do not use revenue when a physical relation is available. | `iso-14044-2006`; `eu-pef-2021` |
| `alloc_multi_output_fallback` | Saleable co-products that remain after subdivision | Apply a documented physical relationship when it reflects causality; use economic allocation only when no defensible physical relationship exists, and disclose the method and sensitivity. | `iso-14044-2006`; `eu-pef-2021` |
| `alloc_rework_and_scrap` | Internal rework and production scrap | Return internal rework to the originating batch without treating it as a co-product; report net material consumption and each exported scrap or waste flow separately, without an unreviewed avoided-burden credit. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `article_fabrication` | BOM material inputs | Weighing, ERP issue/return and approved BOM records | product_family; batch_id; material_name; material_grade; supplier; lot_id; mass_issued; mass_returned; unit; timestamp | Calibrated weighing plus ERP issue/return reconciliation | kg | Each batch | Representative production period, normally at least 12 consecutive months | Each manufacturing site and declared line | Sum net material consumption by exact material identity, then divide by net conforming product mass | Scale calibration; ERP transaction export; approved BOM revision; supplier specification |
| `cp_fabrication_energy` | `article_fabrication` | Electricity input | Submeter or dedicated equipment meter | meter_id; opening_reading; closing_reading; kWh; batch_id; production_time; net_output_mass | Direct meter reading | kWh | Each batch or shift | Same period as product output | Each site and line | Subtract opening from closing reading and normalize only after matching output mass | Meter calibration; invoice reconciliation; downtime log |
| `cp_fabrication_output_waste` | `article_fabrication` | Unpackaged output and material-specific wastes | Output and segregated waste weighing | batch_id; output_mass; waste_material_identity; waste_mass; destination; timestamp | Calibrated output and waste scales | kg | Each batch | Same period as material inputs | Each site and line | Sum each waste identity separately; do not combine materials | Scale calibration; waste ticket; batch yield report |
| `cp_fabrication_air` | `article_fabrication` | PM10 emission | Stack or workplace extraction measurement plus activity records | sampling_point; method; concentration; gas_flow; abatement_state; operating_time; output_mass | Applicable standard measurement or documented calculation from collected data | kg | Measurement frequency justified by relevance and operating change | Representative normal operation and significant changes | Each relevant emission point | Calculate emitted mass for the measured period and normalize to matched output | Laboratory report; instrument calibration; abatement operating log |
| `cp_wet_materials_output` | `wet_finishing_drying` | Article and chemical inputs and finished output | Batch weighing and dosing records | batch_id; input_article_mass; chemical_identity; concentration; dosed_mass; output_article_mass; timestamp | Calibrated weighing and automated or manual dosing log | kg | Each wet batch | Same period as wet-route energy and water | Each wet-treatment line | Preserve each chemical identity and derive active mass from recorded concentration | Scale calibration; dosing-system record; formulation revision; batch release record |
| `cp_wet_water_energy` | `wet_finishing_drying` | Water, electricity and natural gas inputs | Water, electricity and gas meters | meter_id; opening_reading; closing_reading; reused_water; energy_unit; calorific_value; batch_id; output_mass | Direct meter readings and supplier records | m3; kWh; MJ | Each batch or shift | Same period as wet output | Each site and wet line | Calculate net supplied water and measured energy separately, then normalize to matched output | Meter calibration; utility invoice; calorific-value record; water-balance reconciliation |
| `cp_wet_waste_emissions` | `wet_finishing_drying` | Wastewater, sludge and fossil CO2 | Discharge meter, sludge scale, fuel record and emission calculation | discharge_volume; sampling_point; treatment_boundary; sludge_wet_mass; sludge_solids; fuel_quantity; carbon_factor; factor_source; output_mass | Direct measurement; CO2 calculated only from collected fuel and documented carbon data | m3; kg | Each batch or discharge; emissions matched to the reporting period | Same period as wet inputs | Each site and wet-treatment line | Keep wastewater, sludge and fossil CO2 separate and normalize to matched output | Meter/scale calibration; laboratory record; waste transfer note; factor documentation |
| `cp_pack_inputs_output` | `inspection_packaging` | Unpackaged article, packaging, electricity and final product | Weighing, packaging issue/return, meter and inspection records | batch_id; input_mass; packaging_identity; packaging_mass_issued; packaging_mass_returned; electricity; accepted_output_mass; packaging_status | Calibrated weighing, ERP reconciliation and direct metering | kg; kWh | Each batch | Same period as accepted product output | Each site and packaging line | Calculate each packaging component separately and exclude it from net product mass | Scale/meter calibration; packaging specification; inspection release; ERP export |
| `cp_pack_waste` | `inspection_packaging` | Rejected article and packaging wastes | Segregated waste weighing | batch_id; waste_identity; waste_mass; destination; rework_status; timestamp | Calibrated waste scale and waste transfer record | kg | Each batch | Same period as packing inputs | Each site and packaging line | Sum each waste identity separately and exclude successfully reworked product | Scale calibration; rework log; waste transfer note |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material` | Each fabrication or packaging material | net material = mass issued − mass returned to stock; returned material must retain the same identity and usable state | mass_issued; mass_returned | net material consumption by atomic identity | `uk-resource-efficiency-textiles-2024` |
| `calc_reference_normalization` | All inventory rows | normalized amount = reporting-period or batch amount / net kg of conforming finished article; packaging is not included in the denominator | collected row amount; net conforming finished-product mass | amount per 1 kg reference product | `iso-14044-2006`; `eu-pef-2021` |
| `calc_wet_water_balance` | Wet-process water and wastewater | reconcile supplied water, reused water, product moisture change, measured wastewater and documented evaporation; disclose any unresolved balance | inlet water; reused water; input/output article mass; wastewater; evaporation record | reconciled process water balance | `eu-textiles-bat-2022` |
| `calc_fossil_co2` | On-site natural-gas combustion | fossil CO2 = collected fuel quantity on the recorded energy basis × documented supplier or site carbon factor; retain factor source and basis | natural-gas quantity; calorific value; carbon factor | kg fossil CO2 | `eu-textiles-bat-2022` |
| `calc_mass_balance` | Fabrication and packing | inputs = conforming product + each separately identified waste/output + documented inventory change, within measurement uncertainty | atomic material inputs; product output; atomic waste outputs; stock change | material-specific mass-balance residual | `eu-textiles-bat-2022`; `uk-resource-efficiency-textiles-2024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | Reference flow | Confirm the public state-100 Product flow, CPC 27180 leaf, Mass property, Units of mass and kg reference; reject a semantically broader, narrower or different article flow. | Tiangong direct read and `un-cpc-3-27180` |
| `dq_product_stratification` | All foreground records | Keep product family, dimensions, shell, filling/core, construction, finish and packaging status explicit; do not merge materially different routes into an undisclosed average. | Approved product specification and BOM |
| `dq_uuid_gate` | Every UUID-bearing inventory row | Assign a Tiangong UUID only after flow-hybrid-search discovery and a state-100 direct read confirm exact atomic semantics, flow type, reference property and unit; otherwise leave it blank and retain the row-specific review item. | Tiangong identity evidence |
| `dq_completeness` | BOM, utilities, wastes and emissions | Reconcile all material BOM lines and include every relevant site utility, material-specific waste, wastewater, sludge and direct emission as an atomic exchange. | ERP export; meter records; waste register; input-output inventory |
| `dq_temporal_geography` | Foreground and upstream data | Use records representative of the declared production period, site, geography and technology; disclose data age, proxies and supplier coverage. | Dataset metadata and source records |
| `dq_measurement` | Collected foreground quantities | Retain meter/scale identity, calibration status, original unit, batch or period linkage, aggregation rule and any missing-data treatment. | Calibration records and collection-protocol outputs |
| `dq_no_ai_quantity` | All quantitative inventory rows | Do not use an AI-generated range or default amount; use collected foreground values or calculations from collected records under the declared protocols. | Row value modes and collection links |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Fail if the reference UUID, Product flow type, CPC 27180 classification, Mass property UUID, Units of mass UUID, kg unit or 1 kg net-product amount differs from section 3. | `un-cpc-3-27180` |
| `val_required_qualifiers` | Dataset metadata | Fail when any applicable required qualifier is missing or when packaging inclusion and factory-gate boundary are not explicit. | `eu-pef-2021` |
| `val_atomic_rows` | Process inventory | Fail if a selected flow combines materials, utilities, fuels, wastes or emissions, or if bilingual process_id, row_id, direction, flow type, order or UUID differs. | `eu-textiles-bat-2022` |
| `val_uuid_evidence` | UUID-bearing rows | Fail if a UUID lacks both hybrid-search discovery evidence and a state-100 direct read confirming exact semantics, flow type, reference property and unit. | `un-cpc-3-27180` |
| `val_foreground_records` | Quantitative rows | Fail if a non-reference amount is an AI estimate, an unsupported default or lacks a linked collection protocol and traceable foreground record. | `iso-14044-2006`; `eu-pef-2021` |
| `val_mass_balance` | Fabrication and packing | Fail when product-family material inputs, net product, atomic wastes and stock change are not reconciled or a residual is left undisclosed. | `eu-textiles-bat-2022`; `uk-resource-efficiency-textiles-2024` |
| `val_wet_route` | Conditional wet finishing | Fail when an on-site wet route is declared but water, electricity, fuel where used, each process chemical, wastewater, sludge where generated or relevant direct emission is omitted. | `eu-textiles-bat-2022`; `epa-textile-sector-notebook-1997` |
| `val_allocation` | Shared processes and multi-output lines | Fail when allocation is used without first testing subdivision, documenting the causal driver, preserving totals and disclosing the method and sensitivity. | `iso-14044-2006`; `eu-pef-2021` |
| `val_scope` | System boundary | Fail when upstream purchased-material datasets are missing or distribution, use or end-of-life is silently included in or excluded from the declared factory-gate package. | `iso-14040-2006`; `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process data package for one declared CPC 27180 product family and production route |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Article-specific factory-gate process, product-system and lifecyclemodel construction when required qualifiers, foreground evidence, upstream links and review status are preserved |
| excluded_use | Undisclosed category-wide averaging; substitution across materially different shells, fillings, cores, constructions or wet routes; consumer-use or end-of-life claims without added stage models; publication with unresolved UUID blockers |
| required_metadata | PCR id and version; CPC reference; product family; intended function; dimensions; net mass; shell and construction; filling/core identity and content; spring and closure configuration; finish; performance grade; site; geography; period; BOM revision; technology; wet-route status; packaging status; boundary; allocation; upstream datasets; collection protocols |
| required_quality_disclosure | Foreground coverage; supplier coverage; meter and scale calibration; mass-balance residuals; missing-data treatment; proxy use; data age; allocation drivers; cut-offs; unresolved UUIDs; wastewater and emission monitoring applicability |
| update_trigger | Any material change in product family, BOM, filling/core, construction, chemical finish, manufacturing technology, wet route, site, energy supply, packaging system, production period, allocation basis or Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-27180` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0, subclass 27180, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/27180 (retrieved 2026-08-13) | Product-category scope, classification identity and exact reference-flow gate |
| `iso-14040-2006` | `standard` | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework, https://www.iso.org/standard/37456.html (confirmed 2026-08-13) | LCA principles, functional unit, scope and life-cycle framing |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (confirmed 2026-08-13) | Inventory, allocation, data quality, reporting and review rules |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-13) | Functional unit and reference flow, system boundary, allocation hierarchy, data needs and disclosure |
| `eu-textiles-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508, BAT conclusions for the textiles industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-13) | Process input-output inventory; water, energy, materials, chemicals, wastewater, waste and emission monitoring |
| `epa-textile-sector-notebook-1997` | `extension_guidance` | US EPA, Profile of the Textile Industry, Sector Notebook Project, https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/textilsn.pdf (retrieved 2026-08-13) | Fabric laying, cutting, sewing and wet-processing waste and wastewater process decomposition |
| `uk-resource-efficiency-textiles-2024` | `official_guidance` | UK Department for Environment, Food & Rural Affairs, Unlocking Resource Efficiency: Phase 2 Textiles, https://assets.publishing.service.gov.uk/media/6620f19f651136bd0b757d85/unlocking-resource-efficiency-phase-2-textiles-report.pdf (retrieved 2026-08-13) | Cutting, sewing, bedding filling, packaging-component attachment and manufacturing-waste measurement |
