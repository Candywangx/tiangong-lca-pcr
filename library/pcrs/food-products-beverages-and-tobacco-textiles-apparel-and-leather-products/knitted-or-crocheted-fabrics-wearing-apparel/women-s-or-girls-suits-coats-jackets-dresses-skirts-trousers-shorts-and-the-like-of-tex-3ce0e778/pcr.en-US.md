---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-of-tex-3ce0e778
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, of textile fabric, not knitted or crocheted

## 1. Scope and Applicability

This PCR governs foreground production data for finished women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and comparable garments made from textile fabric that is not knitted or crocheted. It covers a declared factory route from received shell fabric, linings, interlinings, trims and packaging materials through cutting, sewing and assembly, conditional garment wet finishing, pressing, quality control and packaging to an accepted finished product at the factory gate.

The PCR does not cover knitted or crocheted garments, shirts and underwear assigned to other product categories, babies' garments, track suits, ski suits, swimwear, fur apparel, footwear, stand-alone accessories, or upstream fibre, yarn, fabric, dyeing and fabric-finishing production performed outside the declared foreground facility. Distribution, retail, consumer use, repair and end-of-life are excluded from this foreground package. Those stages may be added only in a downstream lifecycle model with separately declared data and assumptions.

The one-kilogram reference flow is intended for production inventory and supplier-data exchange. It is not a per-wear service comparison and shall not be used to compare garment durability or consumer performance without a separate functional-equivalence study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-of-tex-3ce0e778 |
| classification_refs | CPC 3.0: 28233 |
| covered_products | Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and comparable finished garments of textile fabric that is not knitted or crocheted |
| excluded_products | Knitted or crocheted garments; shirts and underwear outside CPC 28233; babies' garments; track suits; ski suits; swimwear; fur apparel; footwear; stand-alone clothing accessories |
| representative_product | One declared finished, packaged garment conforming to CPC 28233, normalized by accepted net product mass |
| production_route | Received non-knitted/non-crocheted textile fabric and trims; cutting; sewing and assembly; conditional garment wet finishing; pressing and quality control; packaging |
| market_state | Finished manufactured product, packaged as declared, at factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce a finished women's or girls' garment of non-knitted/non-crocheted textile fabric that provides the declared clothing, coverage or weather-protection function of its garment sub-category |
| How much | 1 kg accepted finished packaged garment at the factory gate |
| How well | Conforms to the declared garment specification, reference size or size distribution, fibre composition, fabric construction, finish, quality acceptance criteria and packaging configuration |
| How long or cycle | One declared production batch or representative annual production period; consumer use duration is not represented |
| reference_flow_link | The accepted output mass is linked one-to-one to the Tiangong CPC 28233 product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, of textile fabric, not knitted or crocheted `27320bfc-4629-4ed1-8139-2abf1f1ea14e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment sub-category; women's or girls' size basis; fibre composition by component; shell fabric construction; lining, interlining and padding presence; trim specification; wet-finish status; dry-finish status; production geography; facility; batch or reference period; net finished mass; packaging configuration |

When constructing a foreground data package, every required qualifier shall be stated in metadata, the product description, the reference flow comment or an equivalent controlled field. The accepted packaged output mass excludes reusable transport assets but includes disposable packaging that leaves the factory with the product; product mass and packaging mass shall also be reported separately.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Accepted finished packaged garment output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine accepted output mass on calibrated scales after final quality acceptance and packaging. Normalize all inventory exchanges to exactly 1 kg of accepted output. |
| `component_mass` | Shell fabric, lining, interlining, thread, trims and disposable packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record issued, returned, transferred and wasted mass by component and material; do not substitute purchase cost or item count unless a documented product-specific mass conversion is retained. |
| `energy_measurement` | Electricity and steam | Energy | kWh or MJ | Preserve the metered energy unit and conversion factor. Do not treat monetary expenditure as energy without an invoice-supported tariff and consumption quantity. |
| `water_measurement` | Process water and wet-processing wastewater | Volume or Mass | m3 or kg | Record supply and discharge in the measured unit and retain density or meter conversion when converting between volume and mass. |
| `packaging_separation` | Disposable packaging and reusable transport assets | Mass | kg | Report each packaging material separately. Allocate reusable pallet production using the documented reuse count and exclude the pallet mass from the reference product mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `foreground_gate_boundary` | Foreground garment production | Include received-material handling that changes the product, cutting, sewing and assembly, conditional garment wet finishing, pressing, final quality control, packaging, on-site waste handling and direct releases through the accepted packaged product at the factory gate. | afw-pefcr-3-1-2025 |
| `upstream_dataset_boundary` | Purchased materials and utilities | Represent shell fabric, linings, interlinings, thread, trims, electricity, steam, water, detergent and packaging with traceable upstream datasets. Do not claim cradle-to-gate completeness when any material upstream dataset is absent. | afw-pefcr-3-1-2025 |
| `loss_and_release_boundary` | Each foreground process | Record process-specific material losses, rejected garments, packaging scrap, wastewater, sludge and direct releases at the process where they occur. Do not hide losses inside a single category-wide yield factor. | afw-pefcr-3-1-2025; eu-textiles-bref-2023 |
| `excluded_life_cycle_stages` | Downstream model | Distribution, retail, use, repair and end-of-life are outside this foreground package. Add them only as explicit downstream lifecycle-model stages and disclose the added scenarios. | afw-pefcr-3-1-2025 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Shell fabric, lining, interlining, thread, trims, labels and packaging arrive at the foreground facility with supplier identity, mass, composition and upstream-dataset references declared. |
| starting_condition_role | Gate-to-gate foreground starting condition for cut-and-sew garment production. |
| product_classification_scope | CPC 3.0 code 28233 only; garment identity must remain within non-knitted/non-crocheted textile fabric products listed in this PCR. |
| recursive_input_rule | An incoming product already within this canonical PCR category shall be recorded as a product input with its own upstream dataset and declared production stage; it shall not be silently expanded using this same foreground package. |
| upstream_dataset_requirement | Every purchased material and utility that crosses the boundary requires a supplier-specific or otherwise representative upstream dataset with geography, technology, time period and data-quality disclosure. |
| disclosure | Declare garment sub-category, component BOM, facility geography, process route, outsourced operations, allocation bases, waste destinations, output acceptance basis and all omitted or proxy upstream datasets. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | Material cutting | required | Always included for cut-and-sew garments in scope. | Convert received sheet fabrics into measured garment panels and segregated offcuts. | Per 1 kg accepted finished packaged garment |
| `sewing_assembly` | Sewing and assembly | required | Always included for garments assembled from cut components. | Join garment panels and product-specific trims into an assembled garment. | Per 1 kg accepted finished packaged garment |
| `garment_wet_finishing` | Garment wet finishing | conditional | Include when the assembled garment is washed, rinsed, softened, dyed or otherwise wet-treated at the foreground facility or by a controlled contractor. | Apply the declared wet treatment and record water, energy, formulation, wastewater and sludge. | Per 1 kg accepted finished packaged garment |
| `pressing_quality_control` | Pressing and final quality control | required | Include final pressing or equivalent shape setting and acceptance inspection. | Produce accepted unpackaged finished garments and segregate nonconforming output. | Per 1 kg accepted finished packaged garment |
| `packaging` | Product packaging | required | Include all disposable packaging leaving the factory and reusable transport assets used for the shipment lot. | Package accepted garments and deliver the CPC 28233 reference product at the factory gate. | Per 1 kg accepted finished packaged garment |

### Process: Material cutting (`material_cutting`)

#### Inputs

##### Product flows

###### Shell fabric supplied for cutting (`shell_fabric_input`)

The declared non-knitted/non-crocheted shell fabric enters cutting as the principal garment material. Record its fibre composition, construction, finish, width and mass from the BOM and issue records.

- Selected flow: Non-knitted/non-crocheted textile shell fabric
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the cutting batch minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_and_bom`
- Sources: `afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### Lining fabric supplied for cutting (`lining_fabric_input`)

Lining fabric enters cutting only when the declared garment specification contains a lining. Keep its fibre composition and mass separate from the shell fabric.

- Selected flow: Textile lining fabric
- Flow property / unit: Mass / kg
- Amount rule: measured lining mass issued to the cutting batch minus unused lining returned to controlled stock; zero only when the BOM confirms no lining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_and_bom`
- Sources: `afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### Fusible interlining supplied for cutting (`fusible_interlining_input`)

Fusible interlining enters cutting only when it is specified for shape retention or reinforcement. Record the substrate and adhesive system as product qualifiers.

- Selected flow: Fusible textile interlining
- Flow property / unit: Mass / kg
- Amount rule: measured interlining mass issued to the cutting batch minus unused interlining returned to controlled stock; zero only when the BOM confirms no interlining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_and_bom`
- Sources: `afw-pefcr-3-1-2025`

###### Electricity consumed by cutting equipment (`cutting_electricity_input`)

Electricity crosses the cutting boundary through cutting tables, blades, vacuum systems and directly supporting equipment. Record a dedicated meter or an auditable submeter allocation.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered cutting electricity for the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_electricity`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut shell-fabric panels transferred to sewing (`cut_shell_panels_output`)

Accepted cut shell panels leave cutting as a measured internal product transfer. Their identity remains tied to the garment model, size distribution and shell-fabric lot.

- Selected flow: Cut shell-fabric garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured accepted cut shell-panel mass transferred to sewing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_and_bom`
- Sources: `afw-pefcr-3-1-2025`

###### Cut lining-fabric panels transferred to sewing (`cut_lining_panels_output`)

Accepted cut lining panels leave cutting only for lined garments. Record the internal transfer independently from shell panels.

- Selected flow: Cut lining-fabric garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured accepted cut lining-panel mass transferred to sewing; zero only when no lining is specified
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_and_bom`
- Sources: `afw-pefcr-3-1-2025`

###### Cut interlining panels transferred to sewing (`cut_interlining_panels_output`)

Accepted cut interlining panels leave cutting only when reinforcement is specified. Record their mass as a separate internal product transfer.

- Selected flow: Cut fusible-interlining garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured accepted cut interlining-panel mass transferred to sewing; zero only when no interlining is specified
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_and_bom`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

###### Shell-fabric cutting offcuts (`shell_fabric_offcuts_output`)

Shell-fabric offcuts leave cutting as a segregated waste exchange. Record actual mass before reuse, recycling or disposal and retain the destination evidence.

- Selected flow: Waste shell textile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured shell-fabric offcut mass generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_and_bom`
- Sources: `afw-pefcr-3-1-2025`

###### Lining-fabric cutting offcuts (`lining_fabric_offcuts_output`)

Lining-fabric offcuts leave cutting as a separate waste exchange when lining is used. Do not merge this mass with shell-fabric offcuts.

- Selected flow: Waste lining textile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured lining-fabric offcut mass generated by the cutting batch; zero only when no lining is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_and_bom`
- Sources: `afw-pefcr-3-1-2025`

###### Interlining cutting offcuts (`interlining_offcuts_output`)

Interlining offcuts leave cutting as a separate waste exchange when interlining is used. Keep adhesive-bearing waste distinct from ordinary textile offcuts.

- Selected flow: Waste fusible textile interlining
- Flow property / unit: Mass / kg
- Amount rule: measured interlining offcut mass generated by the cutting batch; zero only when no interlining is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_and_bom`
- Sources: `afw-pefcr-3-1-2025`

##### Elementary flows

### Process: Sewing and assembly (`sewing_assembly`)

#### Inputs

##### Product flows

###### Cut shell-fabric panels received by sewing (`cut_shell_panels_input`)

Accepted shell panels enter sewing from the cutting transfer. Their measured mass provides the principal material input to garment assembly.

- Selected flow: Cut shell-fabric garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured shell-panel mass received by sewing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Cut lining-fabric panels received by sewing (`cut_lining_panels_input`)

Accepted lining panels enter sewing only for lined garments. Record them independently from shell panels.

- Selected flow: Cut lining-fabric garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured lining-panel mass received by sewing; zero only when no lining is specified
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Cut interlining panels received by sewing (`cut_interlining_panels_input`)

Accepted interlining panels enter sewing or fusing only when reinforcement is specified. Record their mass separately.

- Selected flow: Cut fusible-interlining garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured interlining-panel mass received by sewing; zero only when no interlining is specified
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Sewing thread consumed in assembly (`sewing_thread_input`)

Sewing thread crosses the assembly boundary as a distinct trim material. Declare fibre or polymer composition and measure issued mass net of returned spools.

- Selected flow: Sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured thread mass issued to the batch minus unused thread returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Zipper installed in the garment (`zipper_input`)

A zipper enters assembly only when required by the garment BOM. Record its mass and material specification separately from buttons and labels.

- Selected flow: Garment zipper
- Flow property / unit: Mass / kg
- Amount rule: measured zipper mass installed in accepted and rejected units; zero only when the BOM confirms no zipper
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Buttons installed in the garment (`button_input`)

Buttons enter assembly only when required by the garment BOM. Keep button material and mass distinct from every other fastening component.

- Selected flow: Garment button
- Flow property / unit: Mass / kg
- Amount rule: measured button mass installed in accepted and rejected units; zero only when the BOM confirms no buttons
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Textile care label installed in the garment (`care_label_input`)

The sewn-in care label enters assembly as a distinct textile component. Record its substrate, printing system and mass independently from the removable paper hangtag.

- Selected flow: Textile garment care label
- Flow property / unit: Mass / kg
- Amount rule: measured care-label mass installed in accepted and rejected units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### Electricity consumed by sewing equipment (`sewing_electricity_input`)

Electricity crosses the assembly boundary through sewing, fusing and directly supporting equipment. Use a dedicated meter or an auditable submeter allocation.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered sewing and assembly electricity for the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_electricity`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled garment transferred from sewing (`assembled_garment_output`)

The assembled garment leaves sewing before optional wet finishing and final pressing. Record accepted internal transfer mass by garment model and batch.

- Selected flow: Assembled non-knitted/non-crocheted textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured mass of assembled garments transferred to the next process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

###### Sewing-thread trimmings (`sewing_thread_waste_output`)

Thread tails and unusable thread leave sewing as a separate waste exchange. Do not merge this mass with textile cutting offcuts.

- Selected flow: Waste sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured sewing-thread waste generated by the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-3-1-2025`

##### Elementary flows

### Process: Garment wet finishing (`garment_wet_finishing`)

#### Inputs

##### Product flows

###### Assembled garment supplied to wet finishing (`assembled_garment_wet_input`)

An assembled garment enters this process only when the declared production route includes a garment-level wet treatment. Record the exact garment mass treated.

- Selected flow: Assembled non-knitted/non-crocheted textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured assembled-garment mass loaded into garment wet finishing; zero only when this process is not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### Process water supplied to wet finishing (`process_water_input`)

Process water enters garment wet finishing through washing, rinsing or formulation preparation. Record the dedicated meter or batch-volume total.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered water supplied to the garment wet-finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### Electricity consumed by wet-finishing equipment (`wet_finishing_electricity_input`)

Electricity crosses the wet-finishing boundary through washers, pumps, dosing systems and directly supporting equipment. Record a dedicated meter or an auditable allocation.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity for the garment wet-finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### Steam supplied to wet finishing (`steam_input`)

Steam enters wet finishing only when the actual recipe uses indirect or direct steam heating. Declare steam conditions and supplier or boiler source.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam supplied to the garment wet-finishing batch; zero only when no steam is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### Liquid textile detergent dosed in wet finishing (`liquid_textile_detergent_input`)

The purchased liquid detergent formulation enters only when it is identified in the approved wet-finishing recipe. Record this formulation as one product exchange and disclose its supplier identity and composition information.

- Selected flow: Liquid textile detergent
- Flow property / unit: Mass / kg
- Amount rule: measured detergent formulation mass dosed to the garment wet-finishing batch; zero only when the recipe confirms no detergent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-finished garment transferred to pressing (`wet_finished_garment_output`)

The wet-finished garment leaves this process after the declared washing or treatment and associated drying. Record accepted transfer mass independently from untreated assembled garments.

- Selected flow: Wet-finished non-knitted/non-crocheted textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured accepted wet-finished garment mass transferred to pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

###### Garment wet-processing wastewater (`wet_processing_wastewater_output`)

Wastewater leaves wet finishing as a distinct waste exchange before off-site treatment or on-site wastewater treatment. Record volume and destination; do not merge it with sludge.

- Selected flow: Garment wet-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater discharged from the garment wet-finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### Garment wet-processing sludge (`wet_processing_sludge_output`)

Sludge leaves the foreground boundary only when generated by on-site treatment attributable to the wet-finishing batch. Record wet or dry mass basis and treatment destination.

- Selected flow: Garment wet-processing sludge
- Flow property / unit: Mass / kg
- Amount rule: measured sludge mass attributable to garment wet finishing; zero only when no attributable on-site sludge is generated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `eu-textiles-bref-2023`

##### Elementary flows

### Process: Pressing and final quality control (`pressing_quality_control`)

#### Inputs

##### Product flows

###### Assembled garment supplied directly to pressing (`assembled_garment_pressing_input`)

An assembled garment enters pressing directly only when no garment-level wet finish is performed. This card represents that single internal transfer and is not combined with wet-finished garments.

- Selected flow: Assembled non-knitted/non-crocheted textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured assembled-garment mass entering pressing without garment wet finishing; zero when the wet-finishing path applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_and_quality`
- Sources: `afw-pefcr-3-1-2025`

###### Wet-finished garment supplied to pressing (`wet_finished_garment_pressing_input`)

A wet-finished garment enters pressing only when garment wet finishing was performed. Record this internal transfer separately from untreated assembled garments.

- Selected flow: Wet-finished non-knitted/non-crocheted textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured wet-finished garment mass entering pressing; zero when garment wet finishing is not performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_and_quality`
- Sources: `afw-pefcr-3-1-2025`

###### Electricity consumed by pressing equipment (`pressing_electricity_input`)

Electricity crosses the process boundary through presses, irons, inspection lighting and directly supporting equipment. Record a dedicated meter or an auditable allocation.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered pressing and final-quality-control electricity for the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_and_quality`
- Sources: `afw-pefcr-3-1-2025`

###### Steam supplied to pressing equipment (`pressing_steam_input`)

Steam enters the pressing process when supplied to irons, bucks or tunnel finishers. Declare steam conditions and source independently from electricity.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam supplied to pressing for the production batch; zero only when no steam is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_and_quality`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished unpackaged garment accepted by quality control (`finished_unpackaged_garment_output`)

The finished unpackaged garment leaves pressing after final acceptance. Record accepted mass before disposable packaging is added.

- Selected flow: Finished unpackaged non-knitted/non-crocheted textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured mass of unpackaged garments accepted by final quality control
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_and_quality`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

###### Nonconforming garments rejected at final inspection (`nonconforming_garment_output`)

Garments rejected from sale leave quality control as a separate waste exchange unless repaired and returned to accepted production. Record disposition and avoid netting them against accepted output.

- Selected flow: Waste nonconforming textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured mass of nonconforming garments not returned to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_and_quality`
- Sources: `afw-pefcr-3-1-2025`

##### Elementary flows

### Process: Product packaging (`packaging`)

#### Inputs

##### Product flows

###### Finished unpackaged garment supplied to packaging (`finished_unpackaged_garment_input`)

Accepted unpackaged garments enter packaging as the sole garment input. Record the transferred product mass before packaging materials are added.

- Selected flow: Finished unpackaged non-knitted/non-crocheted textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured accepted unpackaged garment mass received by packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

###### LDPE garment polybag (`ldpe_polybag_input`)

The garment polybag enters packaging only when it leaves the factory with the product. Record LDPE film mass and recycled-content declaration independently from shrink film.

- Selected flow: Low-density polyethylene garment polybag
- Flow property / unit: Mass / kg
- Amount rule: measured LDPE garment-polybag mass consumed for the shipment lot; zero only when this packaging is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Paper garment hangtag (`paper_hangtag_input`)

The removable paper hangtag enters packaging as a distinct primary-packaging component. Record paper grade, printed mass and recycled content independently from the sewn-in care label.

- Selected flow: Paper garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: measured paper hangtag mass consumed for the shipment lot; zero only when no paper hangtag is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Corrugated cardboard shipping carton (`corrugated_cardboard_input`)

Corrugated cardboard enters packaging as a separate shipping-container exchange. Divide shared carton mass among enclosed garments using measured packed garment mass.

- Selected flow: Corrugated cardboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-cardboard carton mass used for the shipment lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Reusable wood pallet used for shipment (`wood_pallet_input`)

A wood pallet enters the packaging model as a reusable transport asset when used by the shipment lot. Record pallet specification, allocated mass and documented reuse count; do not include the physical pallet mass in the product reference flow.

- Selected flow: Reusable wood pallet
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass divided by documented expected uses and allocated to the shipment lot; zero only when no wood pallet is used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

###### LDPE shrink film used for palletization (`ldpe_shrink_film_input`)

LDPE shrink film enters packaging only when used to stabilize the shipment lot. Record it independently from the garment polybag.

- Selected flow: Low-density polyethylene shrink film
- Flow property / unit: Mass / kg
- Amount rule: measured LDPE shrink-film mass consumed for the shipment lot; zero only when no shrink film is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Electricity consumed by packaging equipment (`packaging_electricity_input`)

Electricity crosses the packaging boundary through bag sealing, labelling, conveyors and directly supporting equipment. Record a dedicated meter or an auditable allocation.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered packaging electricity for the shipment lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished packaged garment (`finished_packaged_garment_output`)

The accepted packaged garment leaves the foreground system at the factory gate as the reference product. Its identity is the dual-confirmed Tiangong CPC 28233 Product flow with Mass as quantitative reference.

- Selected flow: Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, of textile fabric, not knitted or crocheted `27320bfc-4629-4ed1-8139-2abf1f1ea14e`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted packaged output mass; exactly 1 kg after normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished packaged garment at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output`
- Sources: `un-cpc-3-0-2025`; `afw-pefcr-3-1-2025`

##### Waste flows

###### Waste LDPE garment-polybag film (`waste_ldpe_polybag_output`)

Damaged or excess garment-polybag film leaves packaging as a separate waste exchange. Record actual mass and treatment destination independently from shrink film.

- Selected flow: Waste low-density polyethylene polybag film
- Flow property / unit: Mass / kg
- Amount rule: measured waste garment-polybag film generated during packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Waste LDPE shrink film (`waste_ldpe_shrink_film_output`)

Damaged or excess shrink film leaves packaging as a separate waste exchange. Do not combine it with garment-polybag waste in the foreground record.

- Selected flow: Waste low-density polyethylene shrink film
- Flow property / unit: Mass / kg
- Amount rule: measured waste shrink film generated during packaging; zero only when shrink film is not used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Waste paper hangtags (`waste_paper_hangtag_output`)

Rejected or damaged paper hangtags leave packaging as a separate waste exchange. Record their mass independently from corrugated cardboard.

- Selected flow: Waste paper hangtag
- Flow property / unit: Mass / kg
- Amount rule: measured waste paper hangtag mass generated during packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Waste corrugated cardboard (`waste_corrugated_cardboard_output`)

Damaged or excess corrugated cardboard leaves packaging as a separate waste exchange. Record actual mass and treatment destination.

- Selected flow: Waste corrugated cardboard
- Flow property / unit: Mass / kg
- Amount rule: measured waste corrugated-cardboard mass generated during packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-3-1-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Shared foreground operations | Prefer process subdivision, dedicated meters, batch issue records and direct waste weighing. Apply allocation only to residual shared inputs or outputs that cannot be measured directly. | afw-pefcr-3-1-2025 |
| `assembly_unit_allocation` | Shared sewing and assembly resources | Allocate residual shared sewing resources by accepted garment units processed, then convert to the one-kilogram reference flow using measured accepted net garment mass. Disclose unit counts and conversion mass. | afw-pefcr-3-1-2025 |
| `finishing_mass_allocation` | Shared wet finishing and pressing resources | Allocate residual shared finishing inputs and outputs by the measured mass of garments treated in the shared batch. Do not use revenue. | afw-pefcr-3-1-2025 |
| `packaging_mass_allocation` | Cartons, pallets and shipment-lot packaging | Allocate shared disposable packaging by measured packed garment mass. Allocate reusable pallet production by measured pallet mass divided by documented expected uses before shipment-lot allocation. | afw-pefcr-3-1-2025 |
| `waste_no_avoided_burden` | Offcuts, rejects and packaging scrap | Report each waste output at gross measured mass and its actual destination. Do not subtract an avoided-material credit inside the foreground inventory; model recycling or recovery in the downstream treatment dataset. | afw-pefcr-3-1-2025 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_mass_and_bom` | `material_cutting` | Fabric inputs, cut-panel transfers and segregated offcuts | BOM, warehouse issue/return record, batch transfer record and calibrated scale record | batch_id; product_reference; size_distribution; component_id; fibre_composition; fabric_construction; issued_mass_kg; returned_mass_kg; transferred_mass_kg; offcut_mass_kg; waste_destination | Reconcile BOM and warehouse movements with direct weighing of accepted panels and each offcut stream | kg | Every cutting batch | All batches in the declared reference period | Every included cutting site and controlled contractor | Sum by product reference and material component, then normalize with `calc_normalize_to_reference_mass` | Scale calibration, signed issue/return tickets, transfer tickets, waste tickets and BOM revision |
| `cp_cutting_electricity` | `material_cutting` | Cutting electricity | Revenue meter, submeter or machine-energy record | meter_id; timestamp_start; timestamp_end; opening_kwh; closing_kwh; batch_id; allocation_driver | Prefer dedicated metering; otherwise apply `calc_shared_meter_allocation` | kWh | Every batch or monthly with batch allocation | Same period as output mass | Every included cutting site | Sum dedicated consumption or allocated shared consumption, then normalize | Meter calibration, bills, machine logs and allocation worksheet |
| `cp_sewing_materials` | `sewing_assembly` | Cut components, thread, trims, assembled output and thread waste | BOM, line issue/return record, transfer record and calibrated scale record | batch_id; component_id; material_specification; issued_mass_kg; returned_mass_kg; installed_mass_kg; output_mass_kg; waste_mass_kg | Reconcile BOM with line issues, returns, accepted output and separately weighed thread waste | kg | Every sewing batch | All batches in the declared reference period | Every included sewing site and controlled contractor | Sum by component and product reference, then normalize | BOM revision, signed material tickets, scale calibration and transfer records |
| `cp_sewing_electricity` | `sewing_assembly` | Sewing electricity | Submeter or machine-energy record | meter_id; timestamp_start; timestamp_end; opening_kwh; closing_kwh; batch_id; accepted_units; accepted_mass_kg | Prefer dedicated metering; otherwise apply unit allocation and `calc_shared_meter_allocation` | kWh | Every batch or monthly with batch allocation | Same period as output mass | Every included sewing site | Sum or allocate to accepted units, then normalize by accepted mass | Meter calibration, production counts and allocation worksheet |
| `cp_wet_finishing_records` | `garment_wet_finishing` | Garment load, water, electricity, steam, detergent, accepted output, wastewater and sludge | Recipe, batch sheet, utility meters, dosing record, discharge meter and waste record | batch_id; garment_input_mass_kg; water_m3; electricity_kwh; steam_mj; detergent_mass_kg; accepted_output_mass_kg; wastewater_m3; sludge_mass_kg; sludge_basis; destination | Read dedicated batch records and meters; retain recipe identity and zero declarations for absent exchanges | kg; m3; kWh; MJ | Every wet-finishing batch | All applicable batches in the declared reference period | Every included wet-finishing site and controlled contractor | Sum by product reference and normalize; shared batches use treated garment mass | Meter and scale calibration, signed recipe, dosing log, discharge record and waste manifest |
| `cp_pressing_and_quality` | `pressing_quality_control` | Garment transfer, electricity, steam, accepted output and nonconforming garment waste | Batch transfer, utility meter, inspection and calibrated scale record | batch_id; input_route; input_mass_kg; electricity_kwh; steam_mj; accepted_mass_kg; rejected_mass_kg; rework_return_mass_kg; disposition | Reconcile transferred input with accepted output, rework returns and separately weighed final rejects | kg; kWh; MJ | Every batch | All batches in the declared reference period | Every included pressing and inspection site | Sum by product reference and normalize; shared utilities use treated mass | Meter and scale calibration, inspection release, reject disposition and rework records |
| `cp_packaging_materials` | `packaging` | Unpackaged garment, each packaging material, packaging electricity and each packaging scrap stream | Packaging BOM, warehouse issue/return, shipment-lot record, pallet register, meter and waste record | shipment_lot; product_reference; unpackaged_mass_kg; material_id; issued_mass_kg; returned_mass_kg; scrap_mass_kg; packed_mass_kg; pallet_mass_kg; expected_reuses; electricity_kwh | Reconcile each packaging material separately; retain pallet reuse evidence and separately weigh each scrap stream | kg; kWh | Every shipment lot | All shipment lots in the declared reference period | Every included packaging site | Sum net consumed mass by material, calculate reusable pallet share, allocate to packed mass and normalize | Packaging specification, issue/return tickets, scale calibration, pallet-pool record, meter and waste tickets |
| `cp_reference_output` | `packaging` | CPC 28233 accepted packaged product | Final release, calibrated scale and shipment record | batch_id; shipment_lot; product_reference; garment_subcategory; size_basis; fibre_composition; net_product_mass_kg; disposable_packaging_mass_kg; accepted_packaged_mass_kg; rejected_mass_kg | Weigh accepted released product after packaging; report net garment and disposable packaging mass separately | kg | Every shipment lot | All accepted output in the declared reference period | Every included factory gate | Sum accepted mass and normalize the inventory to exactly 1 kg | Final release signature, scale calibration, packing list and reconciliation to production count |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | Every foreground exchange | normalized amount = attributable batch or period amount / accepted packaged output mass in kg | Attributable exchange amount; accepted packaged output mass | Exchange amount per 1 kg reference product | afw-pefcr-3-1-2025 |
| `calc_net_material_consumption` | Fabric, trims and disposable packaging | net consumed mass = issued mass - unused returned mass; separately report measured scrap and stock change | Issued mass; returned mass; scrap mass; stock change | Net material input and reconciled waste output | afw-pefcr-3-1-2025 |
| `calc_shared_meter_allocation` | Residual shared electricity or steam | allocated amount = meter-period consumption × documented batch allocation driver / total driver for the meter period | Opening and closing meter readings; batch driver; total driver | Batch utility amount | afw-pefcr-3-1-2025 |
| `calc_process_mass_balance` | Cutting, sewing, wet finishing, pressing and packaging | input mass + opening work-in-progress = accepted transfers + measured wastes + closing work-in-progress; investigate the residual before normalization | Component inputs; transfers; wastes; opening and closing work-in-progress | Process mass-balance residual | afw-pefcr-3-1-2025 |
| `calc_reusable_pallet_share` | Reusable wood pallet | allocated pallet production mass = pallet mass / documented expected uses × shipment-lot allocation share | Pallet mass; expected uses; shipment-lot packed mass; total palletized packed mass | Allocated pallet mass per shipment lot | afw-pefcr-3-1-2025 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and materials | Retain product reference, garment sub-category, women's or girls' size basis, component-level fibre composition, shell construction, finish route and packaging configuration. | Approved specification, current BOM, fibre-composition records and final release |
| `dq_temporal` | Foreground records | Use a complete, representative production period, normally the most recent 12 months or a shorter campaign covering all relevant variants; disclose shutdowns, trials and abnormal batches. | Dated meter exports, production ledger and coverage statement |
| `dq_geography` | Sites and suppliers | Identify every foreground site, controlled contractor and utility geography; do not substitute a generic geography without disclosure. | Site list, supplier register and dataset metadata |
| `dq_technology` | Cutting, assembly, finishing, pressing and packaging | Record actual equipment and process route sufficiently to select representative upstream datasets and explain conditional processes. | Equipment list, route sheet, recipe and production records |
| `dq_completeness` | Inventory | Cover 100% of accepted output and all known material components; reconcile at least 95% of BOM mass while explicitly listing the unrepresented remainder. | BOM coverage calculation, mass balance and exception log |
| `dq_measurement` | Meters and scales | Use calibrated devices or document the uncertainty and correction applied. Preserve raw readings before aggregation. | Calibration certificate, raw meter export and signed scale tickets |
| `dq_uuid_status` | Tiangong references | Use a UUID only after hybrid-search identification and independent state-100 retrieval confirm the same semantic flow, flow type, property and classification where applicable. Leave unresolved UUIDs blank and retain the manifest review item. | Identity review record and manifest unresolved candidate entry |
| `dq_outsourcing` | Controlled contractors | Apply the same collection protocols to outsourced cutting, sewing, wet finishing, pressing or packaging; otherwise disclose the supplier dataset, gap and representativeness limitation. | Supplier questionnaire, activity records and dataset metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm UUID `27320bfc-4629-4ed1-8139-2abf1f1ea14e` resolves at state 100 to CPC 28233, Product flow, Mass, and that the unit group is Units of mass with kg as the reference unit. | un-cpc-3-0-2025 |
| `validate_category_scope` | Product metadata | Reject knitted or crocheted garments and products outside the listed CPC 28233 boundary. Require a declared garment sub-category and shell-fabric construction. | un-cpc-3-0-2025 |
| `validate_atomic_inventory` | Process inventory | Reject any inventory row that combines multiple utilities, materials, packaging components, wastes or emissions. Every exchange shall have one row_id and one specific Selected flow. | afw-pefcr-3-1-2025 |
| `validate_process_route` | Process map | Require cutting, sewing and assembly, pressing and quality control, and packaging. Require garment wet finishing only when the route declaration or records show that it occurs. | afw-pefcr-3-1-2025 |
| `validate_mass_balance` | Every foreground process | Investigate and disclose any material-balance residual exceeding the site measurement uncertainty; do not force the residual to zero by changing accepted output. | afw-pefcr-3-1-2025 |
| `validate_bom_coverage` | Material inputs | Confirm that the reported BOM covers at least 95% of product mass and 100% of shell fabric, lining, interlining, padding, electronic parts and metals when present. List the remaining mass explicitly. | afw-pefcr-3-1-2025 |
| `validate_packaging` | Packaging | Confirm polybag, hangtag, carton, pallet and shrink-film amounts are separate, product-specific foreground records. Reject direct use of per-piece defaults converted to kg without the actual product count and mass basis. | afw-pefcr-3-1-2025 |
| `validate_data_quality` | Published foreground package | Require current period, technology, geography, completeness, calibration, allocation and outsourcing disclosures. Any unresolved material UUID or upstream dataset makes the package incomplete for publication. | afw-pefcr-3-1-2025 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for CPC 28233 finished garments |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Supplier data exchange, foreground process modelling, cradle-to-gate models that add complete upstream datasets, and lifecycle models that add declared distribution, use and end-of-life scenarios |
| excluded_use | Per-wear comparison, durability claims, business-to-consumer comparative assertions, knitted/crocheted garments, or cradle-to-grave claims without added downstream stages |
| required_metadata | PCR id and version; product flow UUID; garment sub-category; size basis; component BOM and fibre composition; production sites; reference period; process route; net product mass; packaging configuration; allocation bases; waste destinations; upstream dataset identifiers |
| required_quality_disclosure | BOM coverage; temporal, geographical and technological representativeness; meter and scale calibration; mass-balance residuals; supplier and contractor coverage; proxy datasets; unresolved UUIDs; excluded exchanges; uncertainty and reviewer status |
| update_trigger | Material change to product composition, garment construction, process route, wet finish, equipment, energy supply, site geography, contractor, packaging configuration, allocation method, Tiangong identity, or governing source |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 28233 identity, inclusion and exclusion boundary |
| `afw-pefcr-3-1-2025` | `standard` | Product Environmental Footprint Category Rules for Apparel and Footwear, Version 3.1, 29 April 2025, Technical Secretariat coordinated by Cascale, official landing page https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ and full text https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf | Garment sub-categories, BOM coverage, manufacturing process decomposition, process-specific losses, foreground data collection, allocation, electricity hierarchy, packaging types and data-quality rules |
| `eu-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry | Conditional garment wet-processing boundary, utility and wastewater/sludge record requirements |
| `eu-textile-fibre-regulation-1007-2011` | `standard` | Regulation (EU) No 1007/2011 on textile fibre names and related labelling and marking of fibre composition, ELI http://data.europa.eu/eli/reg/2011/1007/oj | Fibre-composition and textile-component identity disclosure |
