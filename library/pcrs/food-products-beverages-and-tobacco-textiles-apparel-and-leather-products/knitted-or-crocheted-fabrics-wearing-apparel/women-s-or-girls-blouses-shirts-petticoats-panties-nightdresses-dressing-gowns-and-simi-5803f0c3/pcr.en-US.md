---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-petticoats-panties-nightdresses-dressing-gowns-and-simi-5803f0c3
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Women's or girls' blouses, shirts, petticoats, panties, nightdresses, dressing gowns and similar articles, knitted or crocheted

## 1. Scope and Applicability

This PCR governs foreground data packages for the manufacture of saleable women's or girls' knitted or crocheted blouses, shirts, petticoats, panties, nightdresses, dressing gowns, and similar articles. It begins when knitted or crocheted fabric, trims, auxiliaries, and packaging materials enter the reporting manufacturing site and ends when finished articles leave the site gate. It supports product-specific cutting, sewing and assembly, conditional garment wet processing, pressing and finishing, inspection, and sale packaging.

The PCR does not treat fibre production, yarn manufacture, knitting or crocheting of fabric, upstream fabric dyeing or finishing, distribution, retail, consumer use, repair, or end-of-life as foreground operations. These stages remain visible through linked upstream or downstream datasets when required by the study scope. Woven or otherwise non-knitted apparel, men's or boys' garments, hosiery, T-shirts, sweaters, outerwear, and products outside CPC 28224 are excluded.

This is a mass-based manufacturing data-production rule. It is not a comparative cradle-to-grave apparel functional unit and must not be used by itself for consumer-facing product comparisons.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-petticoats-panties-nightdresses-dressing-gowns-and-simi-5803f0c3 |
| classification_refs | CPC 3.0: 28224 |
| covered_products | Women's or girls' blouses, shirts, petticoats, panties, nightdresses, dressing gowns, and similar articles made by knitting or crocheting |
| excluded_products | Woven or other non-knitted apparel; men's or boys' apparel; T-shirts; sweaters; hosiery; suits, coats, jackets, dresses, skirts, trousers, and shorts; fabric sold as fabric rather than as an article |
| representative_product | A finished, inspected, sale-packaged knitted women's blouse produced from purchased knitted fabric by cutting, sewing, optional wet processing, pressing, and packaging |
| production_route | Cut-and-sew manufacture from purchased knitted or crocheted fabric, with product-specific trims and conditional post-assembly wet processing |
| market_state | Finished, saleable article at manufacturing site gate; net garment mass and packaging mass reported separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished women's or girls' knitted or crocheted articles within the declared CPC 28224 product specification |
| How much | 1 kg net mass of saleable finished articles at the manufacturing site gate, excluding sale packaging |
| How well | Conforming to the declared style, fibre composition, size range, bill of materials, quality grade, finish, colour, care instructions, and applicable durability or performance specification |
| How long or cycle | One declared production batch or campaign; use-phase service life is outside this foreground reference |
| reference_flow_link | The reference amount is the net finished-garment output of `sale_packaging`, after inspection and before adding packaging mass to the garment mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished article |
| Reference product flow | Women's or girls' blouses, shirts, petticoats, panties, nightdresses, dressing gowns and similar articles, knitted or crocheted `b7c07ef2-cdde-46c1-88df-c1e4d030520e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; women or girls target group; knit or crochet construction; fibre composition by mass; style or SKU; reference size and size range; net garment mass; bill of materials; colour and finish; wet-processing route; trim specification; production geography; reporting period; sale-packaging configuration; quality grade |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate net saleable garment mass without polybags, cartons, hangtags, inserts, or other sale packaging; normalize every inventory amount to 1 kg net finished article. |
| `bom_mass_basis` | Fabrics, trims, and auxiliaries retained in the article | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record purchased and issued mass by specific material; do not substitute gross product weight for a bill of materials when the bill of materials is available. |
| `packaging_separation` | Sale packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each packaging material separately and exclude it from the reference product mass while retaining it as an input normalized to the reference flow. |
| `energy_carrier_separation` | Electricity, purchased steam, natural gas, and LPG | Carrier-specific energy property | kWh, MJ, kg, or m3 as metered | Preserve the recorded carrier and unit; never combine electricity, steam, natural gas, or LPG into one energy amount. Conversion factors and calorific-value bases shall be disclosed. |
| `water_mass_volume` | Process water and textile wastewater | Mass or volume | kg or m3 | Preserve measured water and wastewater units; if converted, report density, temperature basis when material, and the exact conversion used. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate_to_gate` | Foreground manufacturing | Include material receipt into the reporting site, cutting, sewing and assembly, applicable garment wet processing, pressing and finishing, inspection, handling of manufacturing losses, and sale packaging through the manufacturing site gate. | `pefcr-apparel-footwear-2025`; `sandin-knitted-garment-2024` |
| `boundary_upstream_links` | Purchased fabrics, trims, chemicals, energy, water, and packaging | Keep each purchased input visible and link it to a geographically, technologically, and temporally representative upstream dataset; upstream fibre, yarn, and fabric production are not absorbed into foreground garment operations. | `eu-pef-method-2021`; `pefcr-apparel-footwear-2025` |
| `boundary_conditional_routes` | Wet processing and on-site thermal energy | Include each conditional process and its atomic inputs, wastewater, wastes, and direct emissions only when records show that it occurred for the declared product; document an explicit not-applicable determination otherwise. | `eu-textiles-bref-2023`; `pefcr-apparel-footwear-2025` |
| `boundary_losses` | Cutting scrap, assembly losses, rejects, and packaging scrap | Report manufacturing losses and leftovers as separate waste outputs by material and treatment route; do not net recyclable scrap against virgin material input or finished-product output. | `pefcr-apparel-footwear-2025` |
| `boundary_exclusions` | Distribution, retail, use, repair, and end-of-life | Exclude these stages from the foreground data package and state the exclusion; add linked downstream scenarios only in a wider lifecycle model. | `eu-pef-method-2021`; `pefcr-apparel-footwear-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased knitted or crocheted fabric, trims, process auxiliaries, and packaging are received at the reporting manufacturing site with identity, mass, supplier, and upstream dataset references available |
| starting_condition_role | Foreground gate-to-gate garment manufacturing entry point |
| product_classification_scope | Finished women's or girls' knitted or crocheted articles within CPC 28224; intermediate cut panels and assembled garments are manufacturing states, not separate classification claims |
| recursive_input_rule | If an already finished CPC 28224 article enters for subcontract finishing, rework, or repackaging, record it once as a same-category product input with its upstream dataset and model only the added foreground operations; do not recursively recreate its prior manufacturing inventory |
| upstream_dataset_requirement | Every purchased fabric, trim, chemical, energy carrier, water supply, and packaging material requires a representative upstream dataset or a disclosed unresolved data gap |
| disclosure | Declare product subtype, BOM coverage, fibre composition, reference size, site and period, included processes, outsourced operations, wet-processing recipe, energy supply, loss destinations, packaging configuration, and all exclusions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | Material preparation and cutting | required | Always included for cut-and-sew manufacture from knitted or crocheted fabric | Convert issued fabric and applicable interlinings into cut garment components while recording cutting losses | kg cut components |
| `sewing_assembly` | Sewing, trim attachment, and assembly | required | Always included for cut-and-sew manufacture | Assemble cut components and product-specific trims into a garment | kg assembled garment |
| `garment_wet_processing` | Garment wet processing | conditional | Include only when the assembled article is washed, garment-dyed, bleached, neutralised, softened, or otherwise wet-processed | Apply the declared wet recipe and record water, individual chemicals, thermal energy, wastewater, and direct emissions | kg wet-processed garment |
| `finishing_pressing` | Pressing, dry finishing, inspection, and repair | required | Include applicable pressing, dry finishing, final inspection, and in-line repair before sale packaging | Produce a conforming finished article and isolate rejects | kg finished garment |
| `sale_packaging` | Sale packaging and plant-gate release | required | Include all primary, secondary, and tertiary packaging applied before the manufacturing site gate | Package and release the reference product while keeping net garment and packaging masses separate | 1 kg net finished article |

### Process: Material preparation and cutting (`material_cutting`)

#### Inputs

##### Product flows

###### Knitted or crocheted shell fabric (`knitted_fabric_input`)

Record each product-specific shell fabric composition and finish as its own exchange. A blended fabric is one purchased material only when its supplier dataset represents that declared blend.

- Selected flow: Knitted or crocheted fabric, product-specific fibre blend and finish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to cutting for the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `pefcr-apparel-footwear-2025`

###### Knitted lining fabric (`lining_fabric_input`)

Include only for products with a separate lining and record the actual fibre composition.

- Selected flow: Knitted lining fabric, product-specific composition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured lining mass issued to cutting; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`

###### Fusible textile interlining (`fusible_interlining_input`)

Include only when a fusible interlining is used; retain its textile and adhesive composition in metadata.

- Selected flow: Fusible textile interlining, product-specific composition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured interlining mass issued; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`

###### Garment marker paper (`marker_paper_input`)

Include paper consumed by physical marker making or pattern handling; do not include it when an entirely digital route consumes none.

- Selected flow: Paper for garment cutting markers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or issued marker-paper mass attributable to the product; not applicable for paperless cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`

###### Electricity for cutting (`cutting_electricity_input`)

Record electricity supplied to spreading, cutting, fusing, and directly associated extraction equipment within this process.

- Selected flow: Electricity supplied to garment cutting equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or calculated share from equipment power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut garment components (`cut_components_output`)

Record the mass transferred to sewing after cutting and fusing.

- Selected flow: Cut knitted garment components
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass or calculated BOM component mass reconciled to cutting inputs and waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_cutting_records`

##### Waste flows

###### Pre-consumer knitted textile cutting scrap (`cutting_textile_scrap_output`)

Keep cutting scrap separate by fibre blend and declared treatment destination.

- Selected flow: Pre-consumer knitted textile cutting scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed scrap removed from cutting, corrected for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `pefcr-apparel-footwear-2025`

###### Waste garment marker paper (`marker_paper_waste_output`)

Record discarded marker paper separately from textile scrap.

- Selected flow: Waste garment marker paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed discarded marker paper; not applicable for a paperless route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`

##### Elementary flows

### Process: Sewing, trim attachment, and assembly (`sewing_assembly`)

#### Inputs

##### Product flows

###### Cut garment components (`cut_components_input`)

This intermediate input represents only the cut knitted garment pieces transferred into sewing and assembly.

- Selected flow: Cut knitted garment components
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer from `material_cutting`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_assembly_records`

###### Sewing thread (`sewing_thread_input`)

Record thread by actual fibre composition and linear-density specification.

- Selected flow: Sewing thread, product-specific fibre composition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued mass less returned usable stock, reconciled with thread waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_assembly_records`
- Sources: `sandin-knitted-garment-2024`

###### Garment buttons (`buttons_input`)

Include only when buttons are in the BOM; retain button material and count-to-mass evidence.

- Selected flow: Garment button, product-specific material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Count used multiplied by measured or supplier-declared mass per button; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_assembly_records`

###### Garment zipper (`zipper_input`)

Include only when a zipper is in the BOM and record its declared construction.

- Selected flow: Garment zipper, product-specific material and length
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Count used multiplied by measured or supplier-declared mass per zipper; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_assembly_records`

###### Garment elastic tape (`elastic_tape_input`)

Include only when elastic tape is in the BOM and record its composition and width.

- Selected flow: Garment elastic tape, product-specific composition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued mass less returned usable stock; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_assembly_records`

###### Woven textile garment label (`textile_label_input`)

Record the sewn-in textile label separately from paper sale-packaging labels.

- Selected flow: Woven textile garment label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Count used multiplied by measured or supplier-declared mass per label
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_assembly_records`

###### Electricity for sewing and trim attachment (`sewing_electricity_input`)

This exchange represents only electricity consumed by sewing machines and trim-attachment equipment for the declared garment.

- Selected flow: Electricity supplied to sewing equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or calculated share from equipment power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_assembly_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled knitted garment (`assembled_garment_output`)

This intermediate output is the assembled knitted garment leaving sewing before any optional wet processing or pressing.

- Selected flow: Assembled knitted garment before wet processing and pressing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed accepted assembly output transferred to the next applicable process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_assembly_records`

##### Waste flows

###### Defective assembled knitted garment (`defective_assembly_output`)

This waste output represents only defective assembled knitted garments removed from production for a declared treatment route.

- Selected flow: Defective assembled knitted garment for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed units rejected from assembly and not repaired within the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_assembly_records`

###### Sewing thread offcuts (`sewing_thread_offcuts_output`)

This waste output contains only discarded sewing thread of the recorded fibre composition.

- Selected flow: Sewing thread offcuts, product-specific fibre composition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed sewing-thread offcuts for the declared fibre composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_assembly_records`

###### Garment elastic tape offcuts (`elastic_tape_offcuts_output`)

This waste output contains only discarded garment elastic tape of the recorded composition.

- Selected flow: Garment elastic tape offcuts, product-specific composition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed elastic-tape offcuts for the declared composition; not applicable when elastic tape is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_assembly_records`

##### Elementary flows

### Process: Garment wet processing (`garment_wet_processing`)

#### Inputs

##### Product flows

###### Assembled garment for wet processing (`assembled_garment_wet_input`)

This intermediate input is the assembled knitted garment entering the optional garment wet-processing operation.

- Selected flow: Assembled knitted garment before wet processing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed batch load; not applicable when no garment wet processing occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

###### Process water (`process_water_input`)

This exchange represents water supplied specifically to garment washing, dyeing, bleaching, or rinsing operations.

- Selected flow: Process water for garment wet processing
- Flow property / unit: Volume / m3
- Amount rule: Metered or tank-volume water entering the declared garment wet-processing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bref-2023`

###### Nonionic textile detergent (`nonionic_detergent_input`)

This exchange represents the specific nonionic detergent charged to a garment wet-processing bath.

- Selected flow: Nonionic textile detergent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed formulated product added to the batch with active content disclosed; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

###### Reactive textile dye (`reactive_dye_input`)

This exchange represents one declared reactive dye formulation and colour charged to garment dyeing.

- Selected flow: Reactive textile dye, declared colour and active content
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed formulated dye added to the batch; not applicable unless reactive garment dyeing occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

###### Sodium chloride (`sodium_chloride_input`)

This exchange represents sodium chloride added specifically as electrolyte in reactive garment dyeing.

- Selected flow: Sodium chloride for reactive dyeing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed salt added to the batch; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

###### Sodium carbonate (`sodium_carbonate_input`)

This exchange represents sodium carbonate added specifically to establish alkalinity for reactive-dye fixation.

- Selected flow: Sodium carbonate for reactive dye fixation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed alkali added to the batch; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

###### Hydrogen peroxide solution (`hydrogen_peroxide_input`)

This exchange represents hydrogen peroxide solution added specifically for garment bleaching.

- Selected flow: Hydrogen peroxide solution for garment bleaching
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed solution with concentration recorded; not applicable unless peroxide bleaching occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

###### Acetic acid solution (`acetic_acid_input`)

This exchange represents acetic acid solution added specifically for textile-bath neutralisation.

- Selected flow: Acetic acid solution for textile neutralisation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed solution with concentration recorded; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

###### Electricity for wet processing (`wet_processing_electricity_input`)

This exchange represents only electricity consumed by garment wet-processing equipment.

- Selected flow: Electricity supplied to garment wet-processing equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for washing, dyeing, extraction, tumbling, and applicable drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

###### Purchased steam for wet processing (`wet_processing_steam_input`)

This exchange represents only steam purchased from outside the site and supplied to garment wet processing.

- Selected flow: Purchased steam supplied to garment wet processing
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam or calculated enthalpy from measured mass, pressure, and condensate return; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing_records`

###### Natural gas for wet processing (`wet_processing_natural_gas_input`)

This exchange represents only natural gas combusted on site to provide heat for garment wet processing.

- Selected flow: Natural gas combusted on site for garment wet processing
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural gas converted with the disclosed calorific-value basis; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing_records`

###### LPG for wet processing (`wet_processing_lpg_input`)

This exchange represents only liquefied petroleum gas combusted on site to provide heat for garment wet processing.

- Selected flow: Liquefied petroleum gas combusted on site for garment wet processing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or invoiced LPG attributable to the process; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-processed knitted garment (`wet_processed_garment_output`)

This intermediate output is the knitted garment leaving the optional wet-processing operation before pressing.

- Selected flow: Wet-processed knitted garment before pressing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed accepted output after wet processing and drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`

##### Waste flows

###### Textile wet-processing wastewater (`textile_wastewater_output`)

This waste output represents only aqueous effluent discharged from garment wet processing before its declared treatment.

- Selected flow: Wastewater from garment wet processing
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or water-balance result, with destination and treatment state declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bref-2023`

##### Elementary flows

###### Fossil carbon dioxide from natural gas (`natural_gas_co2_output`)

This elementary output represents only fossil carbon dioxide released by on-site natural-gas combustion for wet processing.

- Selected flow: Carbon dioxide, fossil, to air from on-site natural gas combustion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate from measured fuel and a facility-specific carbon balance or cited jurisdictional factor; not applicable without on-site natural-gas combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing_records`

###### Fossil carbon dioxide from LPG (`lpg_co2_output`)

This elementary output represents only fossil carbon dioxide released by on-site LPG combustion for wet processing.

- Selected flow: Carbon dioxide, fossil, to air from on-site LPG combustion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate from measured LPG and a facility-specific carbon balance or cited jurisdictional factor; not applicable without on-site LPG combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing_records`

### Process: Pressing, dry finishing, inspection, and repair (`finishing_pressing`)

#### Inputs

##### Product flows

###### Garment before pressing (`garment_before_pressing_input`)

Use the accepted assembled garment when no wet process occurs or the wet-processed garment when it does; do not count both for the same unit.

- Selected flow: Knitted garment before pressing and final inspection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed transfer from the preceding applicable process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_pressing_records`

###### Electricity for pressing and finishing (`pressing_electricity_input`)

This exchange represents only electricity consumed by garment pressing and finishing equipment.

- Selected flow: Electricity supplied to pressing and finishing equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or calculated share from equipment power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_pressing_records`

###### Purchased steam for pressing (`pressing_steam_input`)

This exchange represents only steam purchased from outside the site and supplied to garment pressing.

- Selected flow: Purchased steam supplied to garment pressing
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam or calculated enthalpy from measured mass, pressure, and condensate return; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_pressing_records`

###### Natural gas for pressing (`pressing_natural_gas_input`)

This exchange represents only natural gas combusted on site to provide heat for garment pressing.

- Selected flow: Natural gas combusted on site for garment pressing
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural gas converted with the disclosed calorific-value basis; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_pressing_records`

###### LPG for pressing (`pressing_lpg_input`)

This exchange represents only liquefied petroleum gas combusted on site to provide heat for garment pressing.

- Selected flow: Liquefied petroleum gas combusted on site for garment pressing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or invoiced LPG attributable to pressing; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_pressing_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished garment before sale packaging (`finished_garment_output`)

This intermediate output is the conforming CPC 28224 knitted garment after pressing and before sale packaging.

- Selected flow: Finished CPC 28224 knitted garment before sale packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed saleable output after inspection and any in-line repair
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_pressing_records`

##### Waste flows

###### Rejected finished knitted garment (`rejected_finished_garment_output`)

This waste output represents only finished knitted garments rejected after inspection and sent to a declared treatment route.

- Selected flow: Rejected finished knitted garment for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed inspected product rejected and not repaired within the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_pressing_records`

##### Elementary flows

###### Fossil carbon dioxide from pressing natural gas (`pressing_natural_gas_co2_output`)

This elementary output represents only fossil carbon dioxide released by on-site natural-gas combustion for pressing.

- Selected flow: Carbon dioxide, fossil, to air from on-site natural gas combustion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate from measured fuel and a facility-specific carbon balance or cited jurisdictional factor; not applicable without on-site natural-gas combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_pressing_records`

###### Fossil carbon dioxide from pressing LPG (`pressing_lpg_co2_output`)

This elementary output represents only fossil carbon dioxide released by on-site LPG combustion for pressing.

- Selected flow: Carbon dioxide, fossil, to air from on-site LPG combustion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate from measured LPG and a facility-specific carbon balance or cited jurisdictional factor; not applicable without on-site LPG combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_pressing_records`

### Process: Sale packaging and plant-gate release (`sale_packaging`)

#### Inputs

##### Product flows

###### Finished garment for packaging (`finished_garment_packaging_input`)

This intermediate input is the conforming CPC 28224 knitted garment entering sale-packaging operations.

- Selected flow: Finished CPC 28224 knitted garment before sale packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer from `finishing_pressing`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sale_packaging_records`

###### Low-density polyethylene garment polybag (`polyethylene_polybag_input`)

This exchange represents only the low-density polyethylene bag used to contain one or more declared garments.

- Selected flow: Low-density polyethylene garment polybag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Count used multiplied by measured or supplier-declared mass per polybag; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sale_packaging_records`
- Sources: `pefcr-apparel-footwear-2025`

###### Corrugated cardboard shipping carton (`corrugated_carton_input`)

This exchange represents only the corrugated cardboard carton used for shipment of the declared garments.

- Selected flow: Corrugated cardboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Carton count attributable to the batch multiplied by measured or supplier-declared empty-carton mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sale_packaging_records`
- Sources: `pefcr-apparel-footwear-2025`

###### Paper garment hangtag (`paper_hangtag_input`)

This exchange represents only the paper hangtag attached to the declared garment.

- Selected flow: Paper garment hangtag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Count used multiplied by measured or supplier-declared mass per hangtag; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sale_packaging_records`
- Sources: `pefcr-apparel-footwear-2025`

###### Adhesive paper packaging label (`adhesive_paper_label_input`)

This exchange represents only the adhesive paper label applied during packaging of the declared garment.

- Selected flow: Adhesive paper packaging label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Count used multiplied by measured or supplier-declared mass per label; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sale_packaging_records`

###### Electricity for packaging (`packaging_electricity_input`)

This exchange represents only electricity consumed by garment bagging, sealing, labelling, and carton-handling equipment.

- Selected flow: Electricity supplied to garment packaging equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or equipment power multiplied by operating time; not applicable for entirely manual packaging without powered equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sale_packaging_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference finished article (`reference_finished_article_output`)

This is the only inventory row carrying the verified CPC 28224 reference product UUID. Its amount is net garment mass; packaging remains in separate input and waste rows.

- Selected flow: Women's or girls' blouses, shirts, petticoats, panties, nightdresses, dressing gowns and similar articles, knitted or crocheted `b7c07ef2-cdde-46c1-88df-c1e4d030520e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net saleable finished article after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Waste polyethylene packaging film (`polyethylene_film_scrap_output`)

This waste output contains only low-density polyethylene film discarded during garment packaging.

- Selected flow: Waste low-density polyethylene film from garment packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed film scrap generated at the reporting site; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sale_packaging_records`

###### Waste corrugated cardboard (`corrugated_cardboard_scrap_output`)

This waste output contains only corrugated cardboard discarded during garment packaging.

- Selected flow: Waste corrugated cardboard from garment packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed carton scrap generated at the reporting site; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sale_packaging_records`

###### Waste paper garment hangtags (`paper_hangtag_scrap_output`)

This waste output contains only paper garment hangtags discarded during packaging.

- Selected flow: Waste paper garment hangtags
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed paper hangtag scrap generated at the reporting site; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sale_packaging_records`

###### Waste adhesive paper packaging labels (`adhesive_paper_label_scrap_output`)

This waste output contains only adhesive paper packaging labels discarded during packaging.

- Selected flow: Waste adhesive paper packaging labels
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed adhesive paper label scrap generated at the reporting site; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sale_packaging_records`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Product-dedicated and shared manufacturing operations | Avoid allocation by product-specific metering, batch segregation, equipment-time records, or subdivision of unit operations wherever the input or emission can be directly assigned. | `eu-pef-method-2021` |
| `allocation_physical_causality` | Shared utilities and common operations that cannot be subdivided | Allocate using the documented physical driver that causes the burden, such as machine operating time, steam demand, processed mass, or occupied equipment time; do not default to finished-product mass when it is not causal. | `eu-pef-method-2021` |
| `allocation_economic_last_resort` | Multi-output operations with no defensible physical relationship | Use economic allocation only after documenting why subdivision, system expansion, and physical allocation are not feasible; use contemporaneous net-gate values and disclose the sensitivity of results. | `eu-pef-method-2021` |
| `allocation_scrap_no_credit` | Recyclable manufacturing scrap and packaging waste | Report the full mass and destination of scrap; do not subtract sale revenue or avoided virgin production from the foreground inventory. Any recycling benefit or burden belongs to the explicitly selected background or lifecycle-model convention. | `pefcr-apparel-footwear-2025`; `eu-pef-method-2021` |
| `allocation_rework` | In-line repair and rework | Retain rework material and energy in the producing batch. If rework crosses reporting periods, reconcile opening and closing work-in-progress and disclose the method. | `pefcr-apparel-footwear-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_cutting_records` | `material_cutting` | Fabric, interlining, marker paper, electricity, cut output, and separated cutting wastes | BOM issue records, scales, scrap tickets, electricity meter or equipment logs | batch_id; SKU; material_id; composition; opening_stock; issued_mass; returned_mass; cut_output_mass; scrap_mass; meter_start; meter_end; machine_power; operating_time; destination | Capture per batch and reconcile issued material to output, waste, and stock change | kg; kWh | Each batch, with meter readings at least each shift when shared | At least one representative production year or all batches in a shorter declared campaign | All cutting lines producing the declared product at the reporting site | Sum accepted records by material and batch, subtract returned usable stock, allocate shared electricity by causal machine time, then divide by net finished output | Calibrated scale and meter records; BOM revision; stock ledger; scrap destination receipt |
| `cp_sewing_assembly_records` | `sewing_assembly` | Cut components, each trim, electricity, assembled output, defects, and offcuts | BOM issue and return records, component counts and masses, production logs, scales, electricity meter or equipment logs | batch_id; SKU; trim_id; composition; count_used; mass_per_item; issued_mass; returned_mass; assembled_output_mass; defect_mass; offcut_mass; meter_start; meter_end; operating_time | Capture each distinct trim and material separately per batch | item; kg; kWh | Each batch | At least one representative production year or all batches in a shorter declared campaign | All sewing and trim-attachment lines in scope | Convert counts to mass using retained measurements, reconcile inputs and outputs, allocate shared electricity by machine operating time, and normalize by net finished output | BOM and trim specifications; calibrated scales; production and rejection logs; meter records |
| `cp_wet_processing_records` | `garment_wet_processing` | Batch load, water, each named chemical, electricity, steam, natural gas, LPG, wastewater, output, and direct combustion CO2 | Recipe sheets, dosing records, meters, tank levels, fuel invoices, batch logs, wastewater meters and analyses | batch_id; recipe_id; chemical_id; concentration; dose_mass; load_mass; output_mass; water_in; wastewater_out; electricity; steam_mass; steam_pressure; condensate_return; fuel_quantity; calorific_value; emission_factor_id; treatment_destination | Collect every batch and retain the exact recipe and carrier-specific meter basis | kg; m3; kWh; MJ | Each wet-processing batch | At least one representative production year or all batches in a shorter declared campaign | Every in-scope wet-processing unit and on-site thermal source | Sum each atomic exchange, calculate steam energy and direct CO2 only with disclosed factors, reconcile water and product mass, then normalize by accepted wet-processed output and reference output | Calibrated meters and dosing devices; chemical SDS/specifications; recipe approval; fuel and wastewater records; cited emission-factor record |
| `cp_finishing_pressing_records` | `finishing_pressing` | Garment input, electricity, steam, natural gas, LPG, accepted output, rejects, and direct combustion CO2 | Transfer weights, meters, fuel invoices, equipment logs, inspection and repair records | batch_id; input_mass; output_mass; rejected_mass; repaired_mass; meter_start; meter_end; steam_mass; steam_pressure; condensate_return; fuel_quantity; calorific_value; operating_time; emission_factor_id | Capture by batch and separate each energy carrier | kg; kWh; MJ | Each batch, with meter readings at least each shift when shared | At least one representative production year or all batches in a shorter declared campaign | Every finishing, pressing, inspection, and repair line in scope | Reconcile garment mass, allocate shared energy by causal operating time or throughput, calculate direct CO2 with disclosed factors, and divide by accepted output | Calibrated scales and meters; fuel invoices; inspection and repair logs; cited emission-factor record |
| `cp_sale_packaging_records` | `sale_packaging` | Finished garment, each packaging material, electricity, reference output, and separated packaging scrap | Packaging BOM, item counts, sampled item masses, issue and return records, scales, production logs | batch_id; packaging_material_id; material_specification; count_used; sampled_mass_per_item; issued_mass; returned_mass; packaging_scrap_mass; net_garment_mass; packaged_units; electricity | Capture each packaging material separately and verify net garment mass independently from packaging | item; kg; kWh | Each packaging batch | At least one representative production year or all batches in a shorter declared campaign | All in-scope sale-packaging lines | Convert item counts to mass, subtract returned stock, keep packaging outside reference mass, allocate applicable electricity, and normalize to 1 kg net article | Packaging specifications and invoices; calibrated scales; count-to-mass samples; batch release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory exchange | normalized amount = exchange amount attributable to conforming output / net kg of conforming finished articles | attributable exchange amount; net conforming finished article mass | exchange amount per 1 kg net finished article | `eu-pef-method-2021` |
| `calc_material_reconciliation` | Each process and material | opening stock + receipts or transfers in = transfers out + product retained mass + separated wastes + closing stock; investigate rather than silently distribute unexplained imbalance | opening stock; receipts; transfers; product mass; each waste mass; closing stock | reconciled material balance and disclosed imbalance | `pefcr-apparel-footwear-2025` |
| `calc_count_to_mass` | Buttons, zippers, labels, hangtags, polybags, and cartons | material mass = accepted item count × representative measured or supplier-declared mass per item | item count; mass per item; sampling basis | material-specific input mass | `pefcr-apparel-footwear-2025` |
| `calc_shared_electricity` | Shared electrically powered equipment | attributable electricity = metered period electricity × causal driver for declared product / total causal driver for all products in the meter period | meter delta; machine time or other justified causal driver by product | product-attributable kWh | `eu-pef-method-2021` |
| `calc_steam_energy` | Purchased steam | steam energy = steam mass × (supply specific enthalpy − credited condensate-return enthalpy); retain pressure, temperature, and return assumptions | steam mass; pressure or temperature; condensate return; enthalpy source | MJ steam attributable to the product | `eu-pef-method-2021` |
| `calc_direct_combustion_co2` | On-site natural-gas or LPG combustion | direct fossil CO2 = measured carrier quantity × cited facility-specific carbon balance or jurisdictional factor; record factor identity and basis in the produced dataset | fuel quantity; calorific value where applicable; emission factor | kg fossil CO2 to air | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and BOM | Retain style or SKU, product subtype, target group, construction, reference size, fibre composition, finish, net mass, and BOM revision; BOM coverage shall include all materials retained in the product. | Approved product specification, BOM, technical pack, and release record |
| `dq_primary_data` | Foreground operations | Use company-specific records for all in-scope processes; disclose any proxy, allocation, missing meter, or excluded line and its effect on completeness. | Meter, scale, recipe, invoice, production, inspection, and waste records; data-gap register |
| `dq_temporal` | Reporting period | Cover a representative continuous 12-month period when production is recurring, or all batches in a shorter campaign; state seasonality, shutdowns, and abnormal batches. | Production calendar and batch population reconciliation |
| `dq_technology_geography` | Site and process representation | Identify site, line, equipment, wet-processing technology, energy supply, water source, wastewater treatment destination, and waste treatment route. | Site register, equipment list, utility contracts, permits, and treatment receipts |
| `dq_completeness` | Inventory | Demonstrate that the BOM, carrier-specific energy, water, named process chemicals, packaging materials, separated waste streams, and on-site direct emissions have been assessed without aggregate selector flows. | Signed completeness checklist reconciled to purchasing, utility, production, and waste ledgers |
| `dq_measurement` | Meters, scales, and count-to-mass conversions | Retain calibration status, resolution, reading frequency, sampling basis, and uncertainty or limitation for each material measurement. | Calibration certificates, sampling sheet, and meter register |
| `dq_source_traceability` | External and background evidence | Record dataset identity, geography, technology, reference year, version, and any substitution or proxy decision for every linked upstream flow. | Dataset register and documented selection rationale |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm the reference flow is the verified public Product flow for CPC 28224, uses Mass and kg, and carries every required product qualifier. | `un-cpc-v3`; `pefcr-apparel-footwear-2025` |
| `validate_reference_mass` | Normalization | Confirm reference output equals exactly 1 kg net conforming finished article after normalization and that sale packaging is excluded from this mass. | `eu-pef-method-2021`; `pefcr-apparel-footwear-2025` |
| `validate_atomic_inventory` | Inventory rows | Reject any row that combines materials, energy carriers, chemicals, waste streams, emissions, or route alternatives; every selected flow shall denote one specific exchange. | `pefcr-apparel-footwear-2025` |
| `validate_process_route` | Process map | Confirm every required process has a detailed inventory and every conditional wet-processing or energy route is supported by records or an explicit not-applicable determination. | `pefcr-apparel-footwear-2025`; `sandin-knitted-garment-2024` |
| `validate_mass_balance` | Cutting, assembly, wet processing, finishing, and packaging | Reconcile input, output, waste, and stock-change masses by material and investigate unexplained imbalance; do not force balance by changing the reference output. | `pefcr-apparel-footwear-2025` |
| `validate_energy_separation` | Utilities | Confirm electricity, purchased steam, natural gas, and LPG remain separate and that shared-utility allocation uses a disclosed causal driver. | `eu-pef-method-2021` |
| `validate_wet_processing` | Garment wet processing | When wet processing occurs, require the exact recipe, each named chemical, water, carrier-specific energy, wastewater destination, and applicable direct combustion emissions; reject generic chemical or energy bundles. | `eu-textiles-bref-2023`; `pefcr-apparel-footwear-2025` |
| `validate_packaging` | Sale packaging | Confirm polybag, carton, hangtag, adhesive paper label, and any additional packaging material are measured separately and kept outside net garment mass. | `pefcr-apparel-footwear-2025` |
| `validate_uuid_evidence` | UUID-bearing rows | Accept only Tiangong UUIDs confirmed by hybrid search and direct public state100 read; leave other UUIDs blank and retain the row-specific review record. |  |
| `validate_data_quality` | Produced foreground dataset | Confirm temporal coverage, site scope, calibration, BOM coverage, allocation, data gaps, linked dataset metadata, and completeness disclosures are present. | `eu-pef-method-2021`; `pefcr-apparel-footwear-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for finished CPC 28224 knitted or crocheted women's or girls' articles |
| downstream_use | `secondary_dataset`; `background_dataset` when independently reviewed, geographically and technologically representative, and linked to the declared product qualifiers |
| allowed_use | Foreground process construction, supplier-specific product-footprint studies, and lifecycle models that explicitly add upstream fabric production and applicable downstream stages |
| excluded_use | Direct comparison of apparel products; claims for woven apparel or other CPC categories; substitution for missing fibre, yarn, fabric, distribution, use, or end-of-life inventories; use without product and route qualifiers |
| required_metadata | PCR id and version; CPC 28224; style or SKU; subtype and target group; fibre composition and BOM; size basis; net product mass; included processes; wet-processing route; site and geography; technology; reporting period; energy supply; packaging configuration; allocation; upstream dataset identities; waste destinations |
| required_quality_disclosure | Primary-data share; BOM coverage; measurement and calibration basis; temporal, geographical, and technological representativeness; allocation drivers; material-balance results; unresolved UUIDs; proxies; exclusions; missing data; uncertainty and review status |
| update_trigger | Change in product construction or BOM; fibre composition; size basis; manufacturing site or line; wet-processing recipe; energy or water supply; wastewater or waste treatment; packaging configuration; allocation method; reference flow identity; or evidence and data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 resources, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-13) | Official classification system context and CPC 28224 scope |
| `pefcr-apparel-footwear-2025` | Standard (`standard`) | Technical Secretariat, Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025, valid to 31 December 2027, https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf (retrieved 2026-08-13) | Apparel manufacturing boundary and process decomposition; BOM and assembly-loss records; packaging separation; mandatory company-specific data and quality rules |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-13) | Functional unit and reference flow, completeness, foreground data, allocation hierarchy, energy modelling, data quality, and reporting |
| `eu-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, DOI 10.2760/355887, https://doi.org/10.2760/355887 (retrieved 2026-08-13) | Conditional textile wet-processing operations, water and chemical record scope, wastewater and environmental-control disclosure |
| `sandin-knitted-garment-2024` | Literature (`literature`) | Sandin et al., Life cycle assessment of a circular textile value chain: the case of a garment made from chemically recycled cotton, The International Journal of Life Cycle Assessment, 2024, https://doi.org/10.1007/s11367-024-02346-2 (retrieved 2026-08-13) | Independent evidence for knitted-garment cutting, sewing, trim attachment, ironing, printing or drying, and polybag and carton packaging process decomposition |
