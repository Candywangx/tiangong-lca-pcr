---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.track-suits-ski-suits-swimwear-and-other-garments-knitted-or-crocheted-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Track suits, ski suits, swimwear and other garments, knitted or crocheted, n.e.c.

## 1. Scope and Applicability

This PCR governs foreground data production for finished knitted or crocheted track suits, ski suits, swimwear, and other knitted or crocheted garments not elsewhere classified. It covers manufacture from purchased yarn, purchased knitted or crocheted fabric, or purchased garment panels through applicable knitting or crocheting, cutting, sewing or linking, garment finishing, inspection, pressing, and packaging at the manufacturing plant gate.

The PCR includes conventional cut-and-sew and seamless or knit-to-shape routes. A concrete data package shall declare the garment type, fibre composition, knitted or crocheted construction, route, reference size or size mix, performance finish, accessories, packaging configuration, production geography, and reporting period. It excludes woven or otherwise non-knitted garments, hosiery, separately classified knitted shirts, T-shirts, pullovers, babies' garments, clothing accessories, upstream fibre and yarn production, downstream distribution, retail, consumer use and care, and end-of-life unless these stages are added in a separately declared life-cycle model.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.track-suits-ski-suits-swimwear-and-other-garments-knitted-or-crocheted-n-e-c |
| classification_refs | CPC 3.0: 28228 (exact scope reference) |
| covered_products | Finished knitted or crocheted track suits, ski suits, swimwear, and other knitted or crocheted garments not elsewhere classified, including cut-and-sew and seamless or knit-to-shape products. |
| excluded_products | Garments made from textile fabric that is not knitted or crocheted; hosiery; knitted shirts, T-shirts, pullovers, babies' garments, and clothing accessories classified elsewhere; fur, leather, plastics-only, felt, or nonwoven garments classified elsewhere. |
| representative_product | A finished, quality-accepted and packaged knitted or crocheted garment produced to a declared technical specification and reference size or documented size mix. |
| production_route | Purchased knitted or crocheted fabric followed by cutting and assembly, or purchased yarn followed by on-site knitting/crocheting or seamless knit-to-shape forming; conditional wet or dry garment finishing; inspection, pressing, and packaging. |
| market_state | Finished manufactured product at the garment factory gate, packed for distribution. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce a finished knitted or crocheted garment conforming to the declared product specification. |
| How much | 1 kg net mass of quality-accepted finished garments, excluding separately reported transport packaging. |
| How well | Conforms to declared garment type, fibre composition, construction, reference size or size mix, performance finish, accessories, quality grade, and packaging configuration. |
| How long or cycle | One completed manufacturing batch or reporting-period production allocation; consumer service life is outside this foreground reference flow. |
| reference_flow_link | Net mass of the CPC 28228 finished product output at the factory gate. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Track suits, ski suits, swimwear and other garments, knitted or crocheted n.e.c. `243b28b7-df13-4d19-a301-cdad8781f93b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment type; fibre composition by mass; knit or crochet construction; cut-and-sew, seamless, or knit-to-shape route; reference size or production size mix; fabric mass per area when relevant; performance finishes; lining or padding; trims and closures; quality grade; packaging configuration; manufacturing geography; reporting period |

When constructing a foreground data package, all required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or equivalent package fields. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass of quality-accepted finished garments after final conditioning and before adding separately reported transport packaging; normalize all foreground exchanges to 1 kg reference output. |
| `material_mass` | yarn, fabric, panels, trims, chemicals, packaging, products, and solid wastes | Mass | kg | Use calibrated mass records; convert piece-count records with product- or batch-specific measured unit mass and retain the conversion evidence. |
| `fabric_area_mass` | fabric and cutting records | Mass and area | kg and m2 | When fabric is purchased or controlled by area, record area and actual grammage; calculate mass as area multiplied by measured grammage and reconcile it to invoice or scale mass. |
| `energy_measurement` | electricity, fuels, steam, hot water, and compressed air | Energy, mass, or volume as applicable | kWh, MJ, kg, or m3 | Use sub-metered consumption where available; otherwise allocate a documented reporting-period total under Section 7 and preserve meter, invoice, and conversion-factor evidence. |
| `moisture_condition` | reference product and textile material mass | Mass | kg | Declare conditioning state and moisture basis; do not mix conditioned, wet, and dry masses without a documented conversion. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground garment manufacturing | Include every applicable on-site step from the declared purchased yarn, fabric, or panel starting condition through knitting/crocheting, cutting, assembly, finishing, inspection, pressing, and packaging, together with direct utilities, wastes, and elementary emissions. | af-pefcr-3-1-2025; jrc-textiles-bref-2023 |
| `boundary_rule_2` | upstream and downstream stages | Model fibre, yarn, purchased fabric, trims, chemicals, fuels, electricity, packaging production, and waste treatment with traceable upstream datasets; exclude distribution, retail, consumer care, and end-of-life from this gate-to-gate package unless a downstream lifecyclemodel explicitly adds them without double counting. | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `boundary_rule_3` | completeness | Do not omit an applicable material, energy, waste, or direct-emission exchange because its UUID is unresolved or its contribution is assumed small; record it atomically, retain the identity gap, and disclose any justified exclusion. | ec-pef-method-2021; af-pefcr-3-1-2025 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare whether the foreground begins with purchased finished yarn, purchased knitted or crocheted fabric, purchased garment panels, or a mix, and identify any supplier-applied dyeing, printing, coating, lamination, or finishing already embedded upstream. |
| starting_condition_role | The declared starting condition determines which textile-forming, wet-processing, cutting, and assembly steps are foreground and prevents their duplication in upstream datasets. |
| product_classification_scope | Finished knitted or crocheted track suits, ski suits, swimwear, and other knitted or crocheted garments not elsewhere classified; CPC 3.0:28228 is an exact external scope reference, not the canonical PCR identity. |
| recursive_input_rule | If an input is itself a finished garment in this PCR category, record it as a separately traceable product input and use an upstream dataset ending at its declared gate; do not recursively reapply this PCR inside the same foreground process. |
| upstream_dataset_requirement | Each purchased yarn, fabric, panel, trim, chemical, utility, fuel, refrigerant, and packaging input shall have a geographically and technologically representative upstream dataset or a disclosed data gap. |
| disclosure | Disclose route, starting condition, supplier-embedded processing, process locations, on-site and outsourced steps, exclusions, allocation, packaging treatment, waste destinations, and whether transport, use, or end-of-life were added outside this foreground package. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p1_knit_forming` | On-site knitting, crocheting, or seamless forming | conditional | Include when purchased yarn is converted on-site into fabric, panels, or seamless garment bodies. | Form knitted or crocheted intermediates and record yarn losses and forming utilities. | kg conforming knitted intermediate |
| `p2_cutting` | Fabric inspection, marker making, and cutting | conditional | Include for cut-and-sew routes using purchased or on-site produced knitted/crocheted fabric. | Convert fabric to identified garment panels and quantify marker and defect losses. | kg cut panels |
| `p3_assembly` | Sewing, linking, trim attachment, and seam sealing | required | Include all applicable assembly operations; seamless products shall still include linking, trim attachment, and other actual assembly steps. | Produce an assembled garment from panels or a seamless body and individual trims. | kg assembled garment |
| `p4_finishing` | Garment washing, printing, coating, heat treatment, and finishing | conditional | Include each actual wet or dry garment finishing operation performed after assembly or on formed intermediates. | Apply declared appearance or performance finishes and record water, chemicals, energy, effluent, wastes, and direct emissions. | kg finished garment before packaging |
| `p5_quality_packaging` | Inspection, pressing, repair, packing, and internal handling | required | Include final inspection and the actual pressing, repair, packaging, and on-site fuel use. | Deliver quality-accepted packaged factory-gate product. | 1 kg reference product |

### Process: On-site knitting, crocheting, or seamless forming (`p1_knit_forming`)

#### Inputs

##### Product flows

###### Cotton yarn (`cotton_yarn_input`)

Record cotton yarn crossing the process boundary when it is used in the declared product formulation.

- Selected flow: Cotton yarn
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from lot-level warehouse and machine-feed records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_material_energy_records`

###### Polyester filament yarn (`polyester_filament_yarn_input`)

Record polyester filament yarn separately when present in the declared formulation.

- Selected flow: Polyester filament yarn
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from lot-level warehouse and machine-feed records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_material_energy_records`

###### Nylon 6 filament yarn (`nylon6_filament_yarn_input`)

Record Nylon 6 filament yarn separately when used, including swimwear or performance-garment formulations.

- Selected flow: Nylon 6 filament yarn
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from lot-level warehouse and machine-feed records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_material_energy_records`

###### Elastane filament yarn (`elastane_filament_yarn_input`)

Record elastane filament yarn separately when used to provide stretch.

- Selected flow: Elastane filament yarn
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from lot-level warehouse and machine-feed records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_material_energy_records`

###### Medium-voltage electricity (`knitting_electricity_input`)

Record electricity supplied to knitting or crocheting machines and directly attributable auxiliary equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or reporting-period consumption allocated under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_material_energy_records`

###### Compressed air at 700 kPa (`knitting_compressed_air_input`)

Record compressed air delivered to the forming equipment when it is separately measured or calculated from verified compressor records.

- Selected flow: Compressed air, 700 kPa
- Flow property / unit: Volume / m3
- Amount rule: Metered delivered volume or calculated volume from verified equipment runtime and load records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_material_energy_records`

###### Mineral lubricating oil (`knitting_lubricating_oil_input`)

Record make-up lubricating oil consumed by knitting or crocheting equipment.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Opening inventory plus receipts minus closing inventory and recovered oil.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_material_energy_records`

#### Outputs

##### Product flows

###### Knitted garment panels (`knitted_panels_output`)

Record conforming knitted or crocheted panels transferred to assembly for shaped-panel routes.

- Selected flow: Knitted garment panels
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted panel mass transferred to assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_output_waste_records`

###### Seamless knitted garment body (`seamless_garment_body_output`)

Record conforming seamless garment bodies transferred to assembly; do not combine them with panel output in the same route balance.

- Selected flow: Seamless knitted garment body
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted seamless-body mass transferred to assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_output_waste_records`

##### Waste flows

###### Waste textile yarn (`knitting_yarn_waste_output`)

Record rejected cones, start-up yarn, broken yarn, and unusable remnants as one physically defined waste-yarn exchange.

- Selected flow: Waste textile yarn
- Flow property / unit: Mass / kg
- Amount rule: Measured waste yarn leaving the process, net of internally reused material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_output_waste_records`

###### Waste mineral lubricating oil (`knitting_waste_oil_output`)

Record spent mineral lubricating oil transferred to waste management.

- Selected flow: Waste mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_output_waste_records`

##### Elementary flows

###### Textile fibre particulate matter to air (`knitting_fibre_dust_air`)

Record directly measured or capture-adjusted fibre particulate emissions from forming operations when present.

- Selected flow: Textile fibre particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Measured outlet loading multiplied by exhaust volume, plus documented uncaptured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming knitted intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_output_waste_records`

### Process: Fabric inspection, marker making, and cutting (`p2_cutting`)

#### Inputs

##### Product flows

###### Knitted fabric (`knitted_fabric_input`)

Record each knitted-fabric construction as a separate foreground record and aggregate only after retaining fibre composition, grammage, finish, supplier, and lot identity.

- Selected flow: Knitted fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured fabric issued to the cutting order, reconciled to area and actual grammage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut panels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_cutting_records`

###### Crocheted fabric (`crocheted_fabric_input`)

Record each crocheted-fabric construction as a separate foreground record when the cut-and-sew route uses crocheted fabric.

- Selected flow: Crocheted fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured fabric issued to the cutting order, reconciled to area and actual grammage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut panels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_cutting_records`

###### Medium-voltage electricity (`cutting_electricity_input`)

Record electricity used by spreading, digital marker, cutting, vacuum, and directly attributable inspection equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or reporting-period consumption allocated under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cut panels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_cutting_records`

###### Paper marker sheet (`paper_marker_input`)

Record paper marker sheets only for physical-marker routes.

- Selected flow: Paper marker sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured paper issued to the production order.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cut panels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_cutting_records`

#### Outputs

##### Product flows

###### Cut knitted garment panels (`cut_panels_output`)

Record quality-accepted cut panels transferred to assembly.

- Selected flow: Cut knitted garment panels
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted panel mass transferred to assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut panels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_cutting_records`

##### Waste flows

###### Waste knitted textile offcuts (`cutting_textile_offcuts_output`)

Record unusable cutting offcuts and defective cut pieces net of direct internal reuse.

- Selected flow: Waste knitted textile offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material family and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut panels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_cutting_records`

###### Waste paper (`cutting_waste_paper_output`)

Record discarded physical marker paper separately from textile offcuts.

- Selected flow: Waste paper
- Flow property / unit: Mass / kg
- Amount rule: Measured waste paper mass transferred to waste management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cut panels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_cutting_records`

### Process: Sewing, linking, trim attachment, and seam sealing (`p3_assembly`)

#### Inputs

##### Product flows

###### Cut knitted garment panels (`cut_panels_input`)

Record cut panels entering assembly for cut-and-sew or shaped-panel routes.

- Selected flow: Cut knitted garment panels
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Seamless knitted garment body (`seamless_body_input`)

Record seamless bodies entering linking, trim attachment, or final assembly; this row is not applicable to cut-and-sew routes.

- Selected flow: Seamless knitted garment body
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Polyester sewing thread (`sewing_thread_input`)

Record sewing thread separately from garment fabric and other trims.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from cone issue, return, and inventory records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Elastane elastic tape (`elastic_tape_input`)

Record elastane elastic tape when used in waist, cuff, leg-opening, or support construction.

- Selected flow: Elastane elastic tape
- Flow property / unit: Mass / kg
- Amount rule: Piece count or length multiplied by measured unit mass, reconciled to issue records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Polyamide coil zipper (`zipper_input`)

Record each installed polyamide coil zipper as a separate trim input when applicable.

- Selected flow: Polyamide coil zipper
- Flow property / unit: Mass / kg
- Amount rule: Installed piece count multiplied by measured zipper mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Stainless-steel snap fastener (`snap_fastener_input`)

Record installed stainless-steel snap fasteners separately when applicable.

- Selected flow: Stainless-steel snap fastener
- Flow property / unit: Mass / kg
- Amount rule: Installed piece count multiplied by measured fastener mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Polyester garment label (`garment_label_input`)

Record permanent polyester garment labels separately from paper hangtags.

- Selected flow: Polyester garment label
- Flow property / unit: Mass / kg
- Amount rule: Installed label count multiplied by measured label mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Polyurethane seam-sealing tape (`seam_sealing_tape_input`)

Record polyurethane seam-sealing tape for waterproof or protective constructions when used.

- Selected flow: Polyurethane seam-sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Applied length multiplied by verified tape mass per length.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Aqueous polyurethane seam-sealing adhesive (`seam_sealing_adhesive_input`)

Record aqueous polyurethane seam-sealing adhesive separately when used.

- Selected flow: Aqueous polyurethane seam-sealing adhesive
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus measured returned usable adhesive.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Medium-voltage electricity (`assembly_electricity_input`)

Record electricity for sewing, linking, fusing, seam sealing, local extraction, and directly attributable auxiliaries.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or reporting-period consumption allocated under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Compressed air at 700 kPa (`assembly_compressed_air_input`)

Record compressed air delivered to pneumatic assembly equipment when used.

- Selected flow: Compressed air, 700 kPa
- Flow property / unit: Volume / m3
- Amount rule: Metered delivered volume or calculated volume from verified runtime and equipment demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Mineral lubricating oil (`assembly_lubricating_oil_input`)

Record make-up mineral lubricating oil consumed by assembly machinery.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Opening inventory plus receipts minus closing inventory and recovered oil.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_assembly_records`

#### Outputs

##### Product flows

###### Assembled knitted garment (`assembled_garment_output`)

Record quality-accepted assembled garments transferred to finishing or final inspection.

- Selected flow: Assembled knitted garment
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred out of assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

##### Waste flows

###### Waste sewing thread (`assembly_thread_waste_output`)

Record thread trimmings and rejected thread separately from fabric offcuts.

- Selected flow: Waste sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced thread waste transferred to waste management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Defective knitted garment (`defective_assembly_output`)

Record irreparable assembly rejects after subtracting repaired garments returned to production.

- Selected flow: Defective knitted garment
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by reason and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Waste polyurethane adhesive (`waste_seam_adhesive_output`)

Record unusable polyurethane adhesive removed from equipment or discarded after the production run.

- Selected flow: Waste polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Waste mineral lubricating oil (`assembly_waste_oil_output`)

Record spent mineral lubricating oil transferred to waste management.

- Selected flow: Waste mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`assembly_voc_air`)

Record direct non-methane volatile organic compound releases when adhesive, cleaning, or seam-sealing operations emit them.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Measured emission or mass balance using product-specific volatile fraction and verified capture efficiency.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_assembly_records`

### Process: Garment washing, printing, coating, heat treatment, and finishing (`p4_finishing`)

#### Inputs

##### Product flows

###### Assembled knitted garment (`assembled_garment_input`)

Record assembled garments entering the declared finishing sequence.

- Selected flow: Assembled knitted garment
- Flow property / unit: Mass / kg
- Amount rule: Measured input mass by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Process water (`finishing_process_water_input`)

Record cold process water entering garment washing, rinsing, chemical make-up, or printing.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water supplied to applicable finishing batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Hot water (`finishing_hot_water_input`)

Record purchased or separately generated hot water delivered to finishing when its upstream heat is not already counted in steam or fuel inputs.

- Selected flow: Hot water
- Flow property / unit: Mass / kg
- Amount rule: Metered delivered mass with supply and return temperatures retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Steam (`finishing_steam_input`)

Record purchased or generated steam delivered to garment finishing separately from hot water and natural gas.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam mass converted with documented pressure, temperature, condensate return, and enthalpy basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Natural gas (`finishing_natural_gas_input`)

Record natural gas combusted on-site for directly attributable finishing heat.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered fuel volume converted with supplier lower-heating-value data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Medium-voltage electricity (`finishing_electricity_input`)

Record electricity used by washers, dryers, curing, printing, coating, extraction, pumps, and directly attributable auxiliaries.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or reporting-period consumption allocated under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Amino-functional silicone textile softener (`finishing_silicone_softener_input`)

Record amino-functional silicone textile softener separately when it is applied.

- Selected flow: Amino-functional silicone textile softener
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue from formulation and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Non-fluorinated durable water-repellent finishing agent (`finishing_dwr_input`)

Record the non-fluorinated durable water-repellent finishing formulation separately when applied.

- Selected flow: Non-fluorinated durable water-repellent finishing agent
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue from formulation and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Nonionic textile detergent (`finishing_detergent_input`)

Record nonionic textile detergent separately when garment washing is performed.

- Selected flow: Nonionic textile detergent
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue from dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Aqueous polyurethane textile printing ink (`finishing_printing_ink_input`)

Record aqueous polyurethane textile printing ink separately when printing is performed.

- Selected flow: Aqueous polyurethane textile printing ink
- Flow property / unit: Mass / kg
- Amount rule: Net issued ink mass minus usable returned ink.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Refrigerant R-410A (`finishing_r410a_input`)

Record R-410A make-up supplied to a chiller directly serving the finishing process when allocated leakage is present.

- Selected flow: Refrigerant R-410A
- Flow property / unit: Mass / kg
- Amount rule: Allocated make-up mass from service records and refrigerant inventory reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

#### Outputs

##### Product flows

###### Finished knitted garment before packaging (`finished_garment_output`)

Record quality-accepted finished garments transferred to final inspection and packaging.

- Selected flow: Finished knitted garment before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred out of finishing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

##### Waste flows

###### Wastewater from garment washing (`finishing_wastewater_output`)

Record wastewater discharged from garment washing and rinsing before treatment.

- Selected flow: Wastewater from garment washing
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or inlet water minus measured evaporation, retained water, and separately routed streams.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Waste textile finishing liquor (`waste_finishing_liquor_output`)

Record unused or spent finishing liquor routed as a concentrated waste rather than wastewater.

- Selected flow: Waste textile finishing liquor
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Waste polyurethane printing ink (`waste_printing_ink_output`)

Record unusable polyurethane printing ink transferred to waste management.

- Selected flow: Waste polyurethane printing ink
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

###### Defective finished knitted garment (`finishing_reject_output`)

Record irreparable finishing rejects after subtracting repaired garments returned to production.

- Selected flow: Defective knitted garment
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by reason and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_records`

##### Elementary flows

###### Fossil carbon dioxide to air (`finishing_co2_air`)

Record direct fossil carbon dioxide from on-site natural-gas combustion allocated to finishing.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured natural-gas consumption, supplier composition or heating value, and a documented combustion factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_records`

###### Nitrogen oxides to air (`finishing_nox_air`)

Record direct nitrogen oxides from on-site natural-gas combustion allocated to finishing.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured stack emissions or measured fuel multiplied by a documented equipment-specific factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_records`

###### Carbon monoxide to air (`finishing_co_air`)

Record direct carbon monoxide from on-site natural-gas combustion allocated to finishing.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured stack emissions or measured fuel multiplied by a documented equipment-specific factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_records`

###### Chemical oxygen demand to water (`finishing_cod_water`)

Record chemical oxygen demand discharged after the declared on-site treatment boundary.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Discharge volume multiplied by flow-weighted measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_records`

###### Suspended solids to water (`finishing_suspended_solids_water`)

Record suspended solids discharged after the declared on-site treatment boundary.

- Selected flow: Suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Discharge volume multiplied by flow-weighted measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_records`

###### Refrigerant R-410A to air (`finishing_r410a_air`)

Record R-410A released from a chiller directly serving finishing when allocated leakage is present.

- Selected flow: Refrigerant R-410A to air
- Flow property / unit: Mass / kg
- Amount rule: Opening charge plus make-up minus closing charge and recovered refrigerant, allocated to the finishing service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished garment before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_records`

### Process: Inspection, pressing, repair, packing, and internal handling (`p5_quality_packaging`)

#### Inputs

##### Product flows

###### Finished knitted garment before packaging (`finished_garment_input`)

Record quality-candidate garments entering final inspection and packing.

- Selected flow: Finished knitted garment before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured input mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Medium-voltage electricity (`packaging_electricity_input`)

Record electricity used by inspection lighting, pressing, repair, tagging, sealing, and packing equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or reporting-period consumption allocated under Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Steam (`packaging_steam_input`)

Record steam delivered to final pressing separately from electricity and finishing steam.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam mass converted with documented pressure, temperature, condensate return, and enthalpy basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Low-sulphur diesel fuel (`packaging_diesel_input`)

Record low-sulphur diesel combusted by on-site handling equipment allocated to final packing and factory-gate handling.

- Selected flow: Low-sulphur diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Fuel issue or tank reconciliation converted with supplier lower-heating-value data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Low-density polyethylene garment bag (`polyethylene_bag_input`)

Record the primary polyethylene garment bag separately when used.

- Selected flow: Low-density polyethylene garment bag
- Flow property / unit: Mass / kg
- Amount rule: Bag count multiplied by measured bag mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Corrugated paperboard carton (`paperboard_carton_input`)

Record corrugated paperboard cartons separately from primary bags and hangtags.

- Selected flow: Corrugated paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Carton count multiplied by measured carton mass and allocated by packed product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Paper hangtag (`paper_hangtag_input`)

Record paper hangtags separately from permanent garment labels.

- Selected flow: Paper hangtag
- Flow property / unit: Mass / kg
- Amount rule: Installed tag count multiplied by measured tag mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Polypropylene strapping (`polypropylene_strapping_input`)

Record polypropylene carton strapping separately when used.

- Selected flow: Polypropylene strapping
- Flow property / unit: Mass / kg
- Amount rule: Applied length multiplied by measured mass per length.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

#### Outputs

##### Product flows

###### Finished CPC 28228 knitted or crocheted garment (`reference_finished_garment_output`)

This is the quality-accepted factory-gate reference output; transport packaging is inventoried in separate input rows.

- Selected flow: Track suits, ski suits, swimwear and other garments, knitted or crocheted n.e.c. `243b28b7-df13-4d19-a301-cdad8781f93b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg in Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg net mass of quality-accepted finished garments.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Defective finished knitted garment (`packaging_reject_output`)

Record irreparable final-inspection rejects after subtracting repaired garments returned to production.

- Selected flow: Defective knitted garment
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by reason and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Waste polyethylene film (`packaging_waste_polyethylene_output`)

Record discarded incoming polyethylene film and damaged bags separately from paperboard waste.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Waste corrugated paperboard (`packaging_waste_paperboard_output`)

Record discarded incoming cartons and damaged cartons separately from polyethylene waste.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_quality_packaging_records`

##### Elementary flows

###### Fossil carbon dioxide to air (`packaging_co2_air`)

Record direct fossil carbon dioxide from diesel consumed by on-site handling equipment.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured diesel consumption, supplier fuel properties, and a documented combustion factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Nitrogen oxides to air (`packaging_nox_air`)

Record direct nitrogen oxides from diesel consumed by on-site handling equipment.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured exhaust emissions or measured diesel multiplied by a documented equipment-specific factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_quality_packaging_records`

###### Particulate matter to air (`packaging_pm_air`)

Record direct particulate matter from diesel consumed by on-site handling equipment.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured exhaust emissions or measured diesel multiplied by a documented equipment-specific factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_quality_packaging_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | all foreground processes | Avoid allocation by product-specific orders, meters, machine runtime, and waste records. Where subdivision is not feasible, document the shared process, products, reporting period, denominator, and sensitivity. | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `allocation_rule_2` | knitting and finishing | Allocate shared yarn-forming, knitting, and finishing material and energy burdens by measured conforming mass; allocate multi-site electricity using a production-mass-weighted average unless product-specific metering is available. | af-pefcr-3-1-2025 |
| `allocation_rule_3` | assembly and sewing | Allocate shared assembly and sewing activity by quality-accepted garment units when unit-level runtime or records are unavailable, then convert to the 1 kg reference basis using the measured mass of the represented product and size mix. | af-pefcr-3-1-2025 |
| `allocation_rule_4` | wastes and recovered materials | Assign collection and treatment burdens to the process generating the waste. Do not credit recycling or energy recovery inside this foreground dataset unless a separately documented downstream model applies a consistent circularity method without double counting. | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `allocation_rule_5` | co-products | No co-product is normally produced. If a saleable secondary product occurs, first subdivide its process; if subdivision is infeasible, apply a documented physical relation that reflects causality and report the result separately from waste. | ec-pef-method-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_p1_material_energy_records` | `p1_knit_forming` | yarn, electricity, compressed air, lubricating oil | warehouse issues, returns, meters, runtime logs, maintenance and inventory records | order_id; batch_id; row_id; material_id; opening_quantity; receipts; issued_quantity; returned_quantity; closing_quantity; meter_start; meter_end; runtime; output_mass | calibrated scales and meters reconciled to inventory and production orders | kg; kWh; m3 | each batch, with monthly reconciliation | representative reporting period, normally 12 consecutive months | each forming site and machine group | net consumed quantity divided by conforming intermediate mass; keep each row_id separate | calibration records; invoices; lot traceability; meter logs; production order |
| `cp_p1_output_waste_records` | `p1_knit_forming` | conforming intermediates, yarn waste, waste oil, fibre dust | transfer weights, waste tickets, dust measurements, exhaust records | batch_id; row_id; accepted_mass; waste_mass; destination; concentration; exhaust_volume; capture_efficiency | scales, waste-transfer records, and measured exhaust data | kg; m3 | each batch or monitoring event | same reporting period as process inputs | each forming site | sum accepted output and each waste/emission separately; normalize to accepted intermediate mass | scale calibration; transfer note; laboratory and ventilation records |
| `cp_p2_cutting_records` | `p2_cutting` | fabric, paper, electricity, panels, textile offcuts, waste paper | fabric issue and return, marker report, meter, panel transfer, waste ticket | order_id; row_id; fabric_mass; fabric_area; grammage; marker_efficiency; paper_mass; electricity; accepted_panel_mass; waste_mass; destination | calibrated scales, cutting software, meters, and waste records | kg; m2; kWh | each cutting order | representative reporting period, normally 12 consecutive months | each cutting site and line | reconcile fabric input to accepted panels, returned usable fabric, and textile waste; keep paper balance separate | marker file; calibration; meter log; transfer and waste tickets |
| `cp_p3_assembly_records` | `p3_assembly` | panels, garment bodies, individual trims, electricity, compressed air, oil, assembled product, wastes, VOC | order BOM, material issues, piece counts, meter/runtime, output and waste records, formulation composition | order_id; row_id; input_mass; count; unit_mass; length; mass_per_length; electricity; air_volume; accepted_mass; reject_mass; volatile_fraction; capture_efficiency | BOM reconciliation, calibrated scales, counters, meters, and verified calculation inputs | kg; piece; m; kWh; m3 | each production order, with monthly reconciliation | representative reporting period, normally 12 consecutive months | each assembly site and line | calculate each atomic trim separately; normalize to accepted assembled mass | technical pack; BOM; scale and meter calibration; issue and return records; waste ticket |
| `cp_p4_finishing_records` | `p4_finishing` | garment input/output, water, hot water, steam, gas, electricity, each chemical, refrigerant, wastes and emissions | batch formulation, meters, fuel invoices, product transfer, effluent laboratory, waste and refrigerant service records | batch_id; row_id; input_mass; accepted_mass; water_volume; hot_water_mass; temperatures; steam_mass; pressure; condensate_return; gas_volume; heating_value; electricity; chemical_issue; chemical_return; wastewater_volume; pollutant_concentration; refrigerant_opening; refrigerant_added; refrigerant_closing; refrigerant_recovered | calibrated meters and scales, batch dosing, laboratory testing, and service-record reconciliation | kg; m3; kWh; MJ | each batch or monitoring event, with monthly reconciliation | representative reporting period, normally 12 consecutive months | each finishing site and line | normalize each atomic exchange to accepted finished-garment mass; flow-weight effluent concentrations | calibration; formulation; invoice; laboratory certificate; waste manifest; refrigerant service log |
| `cp_p5_quality_packaging_records` | `p5_quality_packaging` | garment input/output, electricity, steam, diesel, each packaging component, rejects, packaging wastes and combustion emissions | inspection report, meters, fuel issue, packaging BOM, piece counts, scale and waste records | order_id; row_id; input_mass; accepted_mass; reject_mass; electricity; steam_mass; diesel_volume; heating_value; packaging_count; unit_mass; waste_mass; destination | calibrated scales and meters, inspection records, packaging counts, and fuel reconciliation | kg; piece; kWh; MJ | each order, with monthly reconciliation | representative reporting period, normally 12 consecutive months | each final inspection and packing site | normalize each atomic input, waste, and calculated emission to 1 kg accepted reference output | inspection report; packaging specification; calibration; invoice; fuel log; waste ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | all inventory rows | normalized amount = net attributable exchange amount / net conforming process output mass; for the final process use net accepted CPC 28228 product mass. | atomic row amount; conforming output mass | amount per kg process or reference output | ec-pef-method-2021 |
| `calc_rule_2` | material mass balance | input textile and trim mass = conforming transferred product mass + separately recorded waste mass + measured stock change; investigate unexplained residuals before release. | material issues and returns; accepted output; waste; stock change | mass-balance residual and reconciliation status | af-pefcr-3-1-2025 |
| `calc_rule_3` | fabric conversion | fabric mass = measured fabric area × actual conditioned grammage; retain both raw fields and reconcile with scale or invoice mass. | area; grammage; conditioning state | fabric mass | af-pefcr-3-1-2025 |
| `calc_rule_4` | unit-count trims and packaging | mass = installed or used count × measured unit mass; for length-based inputs use applied length × measured mass per length. | piece count or length; measured unit mass | trim or packaging mass | af-pefcr-3-1-2025 |
| `calc_rule_5` | combustion emissions | emission mass = measured fuel energy or mass × documented fuel- and equipment-specific emission factor; preserve factor source, heating value, oxidation basis, and pollutant species. | fuel record; heating value; emission factor | separate mass for each elementary emission row | ec-pef-method-2021 |
| `calc_rule_6` | effluent pollutant loads | pollutant load = sum of discharge volume interval × matched flow-weighted concentration; report each pollutant separately at the declared treatment boundary. | discharge volume; concentration; sampling time; treatment boundary | kg pollutant discharged | jrc-textiles-bref-2023 |
| `calc_rule_7` | refrigerant leakage | allocated leakage = opening charge + make-up − closing charge − recovered refrigerant, with allocation based on measured chiller service to the finishing process. | charge inventory; service additions; recovery; service allocation | kg R-410A to air | ec-pef-method-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and reference flow | Verify garment classification, knitted/crocheted construction, route, fibre composition, reference size or size mix, finish, packaging, and the three reference UUIDs. | technical pack; BOM; label specification; state-code-100 Tiangong readback |
| `dq_bom` | product material composition | Provide primary mass data for at least 95% of the BOM and 100% of main fabrics, lining, padding, electronic parts, and metals; identify the residual composition and method. | product-specific BOM, supplier records, and scale records; af-pefcr-3-1-2025 |
| `dq_technology` | each process | Record actual technology, location, route applicability, outsourcing, and supplier-embedded processing; do not apply a route row to a demonstrably absent operation. | process map; equipment list; audit or technical pack |
| `dq_temporal` | foreground activity data | Use one coherent representative period, normally 12 consecutive months, and align inputs, outputs, stock changes, production, and waste records. | dated meters, invoices, production reports, and inventory reconciliation |
| `dq_measurement` | mass, energy, water, fuel, emissions | Retain calibration, measurement resolution, conversion factors, sampling methods, detection limits, and missing-data treatment. | calibration certificates; meter register; laboratory reports; calculation workbook |
| `dq_completeness` | inventory coverage | Include all applicable atomic product, waste, and elementary flows; document and justify every excluded process or exchange and quantify the potential completeness effect. | signed completeness checklist, mass and energy balances, waste register; ec-pef-method-2021 |
| `dq_uuid` | unresolved non-reference identities | Keep UUID cells blank until an exact flow, property, unit, and compartment are confirmed; resolve manifest row_id gaps before reviewed publication. | state-code-100 direct readback and reviewer decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference flow | Require exactly 1 kg output of `243b28b7-df13-4d19-a301-cdad8781f93b` with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and all required qualifiers. | un-cpc-3-0-structure-2023 |
| `validation_rule_2` | semantic scope | Confirm that the product is a knitted or crocheted track suit, ski suit, swimwear item, or other knitted/crocheted garment n.e.c.; reject woven/non-knitted garments and products explicitly classified in another garment category. | un-cpc-3-0-structure-2023 |
| `validation_rule_3` | route coverage | Require all actual foreground steps and prohibit simultaneous application of mutually exclusive cut-and-sew and seamless intermediate outputs without a documented production mix. | af-pefcr-3-1-2025 |
| `validation_rule_4` | atomic inventory | Require each card to resolve to one specific exchange; reject collection labels, combined utilities, combined chemicals, combined packaging, or combined waste/emission rows. | ec-pef-method-2021 |
| `validation_rule_5` | process mass balance | Require reconciled input, conforming output, waste, return, and stock-change masses for forming, cutting, assembly, finishing, and final inspection; flag unexplained residuals. | af-pefcr-3-1-2025 |
| `validation_rule_6` | utilities and emissions | If natural gas or diesel is reported, require separate direct combustion-emission rows or a documented controlled-equipment boundary; if R-410A make-up is reported, require a reconciled leakage or recovery explanation. | ec-pef-method-2021; jrc-textiles-bref-2023 |
| `validation_rule_7` | BOM and primary data | Require the `dq_bom` primary-data coverage, product weight, assembly-loss evidence, manufacturing technology and energy records when applicable. | af-pefcr-3-1-2025 |
| `validation_rule_8` | evidence and identity gaps | Reject fabricated quantities and unverified UUIDs; accept absent quantities only as foreground collection requirements and keep unresolved non-reference identities explicit in manifest review metadata. | ec-pef-method-2021 |
| `validation_rule_9` | boundary and double counting | Confirm that supplier-embedded knitting, dyeing, coating, finishing, packaging, transport, and waste treatment are not duplicated in the foreground inventory or upstream datasets. | af-pefcr-3-1-2025 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-manufacturing dataset for finished knitted or crocheted garments in this PCR scope. |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` in process and lifecyclemodel projections after identity, completeness, quality, and review gates pass. |
| allowed_use | Factory-gate modelling of a declared garment, route, size basis, formulation, finish, geography, technology, reporting period, and packaging configuration; aggregation only across transparently weighted compatible products and routes. |
| excluded_use | Consumer-use service claims, lifetime or wear comparisons, woven garments, another garment category, an undisclosed fibre/finish mix, or comparative assertions beyond the represented product, geography, technology, and period. |
| required_metadata | PCR id and version; reference UUIDs; garment type; fibre composition; knit/crochet construction; route; size basis; grammage where relevant; finish; trims; packaging; location; technology; reporting period; system boundary; allocation; upstream datasets; waste destinations; review status. |
| required_quality_disclosure | Primary-data coverage; BOM coverage; metering and allocation shares; mass-balance residuals; missing data; unresolved UUIDs; source and dataset representativeness; exclusions; uncertainty; verification status. |
| update_trigger | Material change in product scope, reference identity, BOM, construction, route, finish chemistry, site technology, electricity or fuel supply, packaging, allocation, regulation, source methodology, or foreground data older than the declared representativeness period. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2023` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0 Structure*, code 28228, 2023 background document. https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf (retrieved 2026-08-13). | Exact external category boundary and exclusions from adjacent garment subclasses. |
| `ec-pef-method-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-13). | Functional-unit/reference-flow discipline, foreground data, completeness, allocation, electricity, data quality, and validation principles. |
| `af-pefcr-3-1-2025` | `standard` | Technical Secretariat for Apparel and Footwear, *Product Environmental Footprint Category Rules: Apparel and Footwear*, version 3.1, 29 April 2025. Official project record: https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (retrieved 2026-08-13). | Apparel process decomposition; knitting, seamless forming, finishing, assembly, packaging, BOM, manufacturing loss, primary-data, allocation, and quality rules. |
| `jrc-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, EUR 31392 EN, JRC131874, DOI:10.2760/355887, 2023. https://publications.jrc.ec.europa.eu/repository/handle/JRC131874 (retrieved 2026-08-13). | Conditional wet and dry finishing, coating, lamination, printing, resource, wastewater, and direct-emission coverage. |
