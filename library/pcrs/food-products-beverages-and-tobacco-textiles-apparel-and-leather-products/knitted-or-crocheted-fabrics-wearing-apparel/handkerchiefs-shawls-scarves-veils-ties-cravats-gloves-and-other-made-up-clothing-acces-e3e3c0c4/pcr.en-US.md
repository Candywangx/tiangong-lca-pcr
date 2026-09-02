---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.handkerchiefs-shawls-scarves-veils-ties-cravats-gloves-and-other-made-up-clothing-acces-e3e3c0c4
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Handkerchiefs, shawls, scarves, veils, ties, cravats, gloves and other made-up clothing accessories, of textile fabric, not knitted or crocheted; parts of garments or of clothing accessories, of textile fabric, not knitted or crocheted n.e.c.

## 1. Scope and Applicability

This PCR governs foreground data packages for factory production of made-up clothing accessories and garment or clothing-accessory parts within CPC 3.0 subclass 28238. Covered finished accessories include handkerchiefs, shawls, scarves, veils, ties, cravats, non-knitted textile gloves and comparable made-up accessories. Covered intermediate products are identifiable garment or clothing-accessory parts made from textile fabric that is not knitted or crocheted and that are not more specifically classified elsewhere.

The common foreground route starts with finished woven or otherwise non-knitted, non-crocheted textile fabrics, interlining, sewing materials and trims received at the reporting factory. It includes pattern or shape cutting, edge making, sewing and assembly, conditional washing or other finishing, inspection, rework, labelling and packaging, and ends with conforming accessories or parts released at the factory gate. Upstream fibre, yarn, fabric, interlining, trim and packaging production is linked through supplier-specific or representative upstream datasets.

Knitted or crocheted accessories and parts, leather or plastics accessories, sports gloves, hats and headgear, finished garments classified elsewhere, and fabric sold by the piece rather than as a made-up accessory or identifiable garment part are excluded. Distribution, retail, consumer use and care, repair, reuse and end-of-life are outside this factory-gate foreground boundary.

Each applicable material, utility, waste and direct emission shall be represented by its own atomic exchange. A route-specific exchange may be absent only when the dataset declares the route condition and retains evidence that it did not occur.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.handkerchiefs-shawls-scarves-veils-ties-cravats-gloves-and-other-made-up-clothing-acces-e3e3c0c4 |
| classification_refs | CPC 3.0: 28238, exact |
| covered_products | Handkerchiefs, shawls, scarves, veils, ties, cravats, non-knitted textile gloves and other made-up clothing accessories; non-knitted, non-crocheted textile garment or clothing-accessory parts not elsewhere classified |
| excluded_products | Knitted or crocheted accessories or parts; leather or plastics accessories; sports gloves; hats and headgear; complete garments classified elsewhere; unmade-up fabric sold by the piece |
| representative_product | A saleable made-up textile accessory produced from finished woven fabric by cutting, edge making or sewing, with declared component construction, finishing route and packaging |
| production_route | Receipt of finished fabric, interlining and trims; pattern or shape cutting; edge making, sewing and assembly; conditional washing, pressing, printing or other finishing; inspection; labelling and packaging |
| market_state | Finished, conforming and sale-ready accessory or identifiable garment part at the reporting factory gate; packaging reported separately from net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply conforming made-up clothing accessories or identifiable garment or clothing-accessory parts made from textile fabric that is not knitted or crocheted |
| How much | 1 kg net conforming product, excluding sale and transport packaging mass |
| How well | Factory-gate product meeting the declared accessory or part type, dimensions or size, fibre composition, textile construction, component design, finish, trim and quality specification |
| How long or cycle | One completed production batch or declared representative production period ending at factory-gate release |
| reference_flow_link | reference_accessory_or_part_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Handkerchiefs, shawls, scarves, veils, ties, cravats, gloves and other made-up clothing accessories, of textile fabric, not knitted or crocheted; parts of garments or of clothing accessories, of textile fabric, not knitted or crocheted n.e.c. `4cbb1b61-4222-4c6b-8eb2-3e6622e784c7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype and whether it is a finished accessory or garment part; intended end use; dimensions or size; net mass per item; item count represented by 1 kg; fibre composition and mass shares; woven or other non-knitted construction; layer, lining, interlining and padding construction; edge, seam and assembly method; trims, fasteners and labels; dyeing, printing and finish state; wet or dry finishing route; factory geography; production period; packaging configuration and mass by material |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, product description or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to exactly 1 kg of conforming accessory or garment-part net output; exclude packaging, irreparable rejects and rework-in-process from reference mass. |
| `material_mass` | fabrics, interlining, thread, trims, detergents, packaging and solid wastes | Mass | kg | Use calibrated scale, invoice, stock-issue or BOM records and reconcile issued, returned, incorporated, rejected and discarded mass for the same production period. |
| `product_count` | assembly and sewing allocation | Number of items | item | Retain accepted item count and net mass per item so unit-based sewing and assembly burdens can be converted transparently to the 1 kg reference flow. |
| `electricity_use` | cutting, assembly, finishing and packaging electricity | Energy | kWh | Use process sub-metering where available; otherwise calculate from documented equipment power and operating time and disclose the allocation basis. |
| `steam_use` | purchased steam used for pressing, drying or wet finishing | Mass | kg | Record delivered steam mass and condition from supplier meter or invoice; do not combine steam with electricity, natural gas, diesel or LPG. |
| `water_use` | washing or wet finishing | Mass | kg | Meter water supplied to each applicable wet operation; if volume is measured, document density and temperature conversion. |
| `packaging_mass` | sale and transport packaging | Mass | kg | Report every packaging material separately per 1 kg net product and do not add packaging mass to the reference product. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_operations` | foreground accessory or garment-part production | Include receipt and internal handling of finished fabrics and components, cutting, edge making, sewing, assembly, applicable finishing, inspection, rework, labelling, packaging, direct utilities, process wastes and direct releases through factory-gate release. | `afw-pefcr-3-1` |
| `boundary_upstream_linkage` | purchased inputs | Keep each purchased fabric, interlining, trim, chemical, utility and packaging material visible and connect it to a composition-, technology-, geography- and period-appropriate upstream dataset. | `ec-pef-2021-2279`; `afw-pefcr-3-1` |
| `boundary_conditional_finishing` | washing, printing, embellishment and finishing | Include only operations actually performed at the reporting factory; declare absence explicitly and add an atomic exchange for every additional chemical, fuel, refrigerant, waste or direct emission used by an applicable route. | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `boundary_downstream_exclusion` | downstream life-cycle stages | Exclude distribution beyond the factory gate, retail, consumer use and care, repair, reuse and end-of-life from this foreground package; downstream studies shall add those stages separately. | `afw-pefcr-3-1` |
| `boundary_same_category_recursion` | same-category accessory or part inputs | Record purchased or transferred CPC 28238 accessories or parts crossing the boundary as explicit product inputs linked to an upstream dataset; do not recursively recreate uncontrolled production. | `ec-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished non-knitted, non-crocheted textile fabrics, interlining, sewing materials, trims and packaging are received at the reporting factory with declared identity, composition, quantity, supplier and upstream dataset linkage. |
| starting_condition_role | factory-gate foreground input |
| product_classification_scope | CPC 3.0 subclass 28238; classification supports scope but does not replace product subtype, construction and finish qualifiers. |
| recursive_input_rule | Same-category accessories or parts crossing the boundary remain product inputs with upstream datasets and are not expanded recursively unless produced in a foreground unit process controlled by the reporting operator. |
| upstream_dataset_requirement | Prefer supplier-specific datasets; otherwise use a documented representative dataset matched to material form, fibre composition, manufacturing technology, geography and reference period. |
| disclosure | Declare BOM coverage, product subtype, garment-part status, excluded and subcontracted operations, route-specific finishing, factory geography, allocation bases, mass-balance residuals, packaging configuration, data gaps and UUIDs withheld pending exact Tiangong identity confirmation. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p1_cutting` | Pattern or shape cutting | required | Finished textile fabric and applicable interlining are cut into accessory or garment-part components. | Convert declared materials into controlled components while recording composition-specific cutting losses. | kg cut components and kg offcuts per 1 kg net product |
| `p2_assembly` | Edge making, sewing and assembly | required | Cut components are hemmed, sewn, fused or otherwise joined and applicable trims are attached. | Produce an assembled accessory or part and record item-based activity, thread losses and rejects. | items assembled and kg assembled output per 1 kg net product |
| `p3_finishing_qc` | Conditional finishing and quality control | conditional | Include washing, pressing, printing, embellishment, drying or other finishing only when performed at the reporting site; inspection and quality control are always included. | Produce conforming unpackaged product and record utilities, wastewater, rejects and rework. | kg conforming unpackaged output per 1 kg net product |
| `p4_packaging` | Labelling, packaging and factory-gate release | required | Conforming products are labelled, packed and released at the factory gate. | Apply declared packaging and produce the reference flow while keeping packaging mass separate. | 1 kg net reference product |

### Process: Pattern or shape cutting (`p1_cutting`)

#### Inputs

##### Product flows

###### Woven cotton fabric (`woven_cotton_fabric_input`)

Record cotton woven fabric issued for handkerchiefs, scarves, gloves, parts or other declared components when present.

- Selected flow: Woven cotton fabric
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Woven silk fabric (`woven_silk_fabric_input`)

Record the actual silk woven fabric issued for a declared shawl, scarf, tie, veil or other accessory component.

- Selected flow: Woven silk fabric
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Woven polyester fabric (`woven_polyester_fabric_input`)

Record polyester woven fabric only for the declared polyester portion of the product BOM.

- Selected flow: Woven polyester fabric
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Woven wool fabric (`woven_wool_fabric_input`)

Record wool woven fabric when it forms a declared shawl, scarf, glove or other component.

- Selected flow: Woven wool fabric
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Woven viscose fabric (`woven_viscose_fabric_input`)

Record the declared viscose, modal or lyocell woven portion represented by this specific selected flow.

- Selected flow: Woven viscose fabric
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Polyester nonwoven interlining (`polyester_nonwoven_interlining_input`)

Record polyester nonwoven interlining used in ties, cravats, collars, cuffs or other declared structured parts; other compositions require separate rows.

- Selected flow: Polyester nonwoven fusible interlining
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Cutting electricity (`cutting_electricity_input`)

Record electricity delivered to marker, spreading, die-cutting, blade-cutting and directly associated extraction equipment.

- Selected flow: Electricity supplied to textile cutting equipment
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or documented equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `afw-pefcr-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut accessory or garment-part components (`cut_accessory_components_output`)

Record the internal transfer of accepted cut components to edge making, sewing and assembly.

- Selected flow: Cut woven clothing-accessory components
- Flow property / unit: Mass / kg
- Amount rule: calculated fabric and interlining inputs minus unused returns, material-specific offcuts and cutting rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

##### Waste flows

###### Cotton fabric offcuts (`cotton_fabric_offcuts_output`)

Keep cotton woven offcuts separate from other fibre compositions and record their treatment destination.

- Selected flow: Cotton woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured cotton woven offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Silk fabric offcuts (`silk_fabric_offcuts_output`)

Keep silk woven offcuts separate when silk fabric is used and record their treatment destination.

- Selected flow: Silk woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured silk woven offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Polyester fabric offcuts (`polyester_fabric_offcuts_output`)

Keep polyester woven offcuts separate from cotton, silk, wool and viscose offcuts.

- Selected flow: Polyester woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured polyester woven offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Wool fabric offcuts (`wool_fabric_offcuts_output`)

Keep wool woven offcuts separate when wool fabric is used and record their destination.

- Selected flow: Wool woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured wool woven offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Viscose fabric offcuts (`viscose_fabric_offcuts_output`)

Keep viscose-family woven offcuts separate when this material is used.

- Selected flow: Viscose woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured viscose woven offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Interlining offcuts (`interlining_offcuts_output`)

Keep polyester nonwoven interlining offcuts separate from woven-fabric offcuts.

- Selected flow: Polyester nonwoven interlining offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured polyester interlining offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

##### Elementary flows

### Process: Edge making, sewing and assembly (`p2_assembly`)

#### Inputs

##### Product flows

###### Cut accessory or garment-part components (`cut_accessory_components_input`)

Record the accepted component mass transferred internally from `p1_cutting` to assembly.

- Selected flow: Cut woven clothing-accessory components
- Flow property / unit: Mass / kg
- Amount rule: equal to the recorded `cut_accessory_components_output` transferred to assembly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources: `afw-pefcr-3-1`

###### Polyester sewing thread (`polyester_sewing_thread_input`)

Record polyester thread issued and consumed for hemming, seaming, edge making or component attachment when present in the BOM.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured issue minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Cotton sewing thread (`cotton_sewing_thread_input`)

Record cotton sewing thread separately from polyester thread when it occurs in the product BOM.

- Selected flow: Cotton sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured issue minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Metal fastener (`metal_fastener_input`)

Record metal press fasteners when used; every other metal clasp, hook or buckle requires its own atomic row.

- Selected flow: Metal press fastener
- Flow property / unit: Mass / kg
- Amount rule: counted fasteners multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Plastic fastener (`plastic_fastener_input`)

Record plastic snap fasteners separately from metal press fasteners when used; other plastic fastener types require their own rows.

- Selected flow: Plastic snap fastener
- Flow property / unit: Mass / kg
- Amount rule: counted fasteners multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Elastic narrow fabric (`elastic_narrow_fabric_input`)

Record elastic tape or narrow elastic fabric used in gloves or another declared accessory or garment part.

- Selected flow: Elastic narrow fabric
- Flow property / unit: Mass / kg
- Amount rule: measured issued length multiplied by verified linear mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Woven textile label (`woven_textile_label_input`)

Record a sewn-in woven textile label separately from paperboard hangtags and packaging.

- Selected flow: Woven textile label
- Flow property / unit: Mass / kg
- Amount rule: counted labels multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Assembly electricity (`assembly_electricity_input`)

Record electricity used by sewing, overlocking, hemming, fusing, attaching and directly associated assembly equipment.

- Selected flow: Electricity supplied to textile accessory assembly equipment
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or documented equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per item assembled and converted to 1 kg net product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `afw-pefcr-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled accessory or garment part (`assembled_accessory_or_part_output`)

Record the internal transfer of an accepted sewn or otherwise assembled product before final finishing and quality release.

- Selected flow: Assembled woven clothing accessory or garment part
- Flow property / unit: Mass / kg
- Amount rule: measured accepted assembly output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `afw-pefcr-3-1`

##### Waste flows

###### Polyester sewing thread offcuts (`polyester_thread_offcuts_output`)

Record polyester thread ends and unusable polyester sewing thread separately from cotton thread and fabric offcuts.

- Selected flow: Polyester sewing thread offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured polyester sewing thread waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `afw-pefcr-3-1`

###### Cotton sewing thread offcuts (`cotton_thread_offcuts_output`)

Record cotton thread ends and unusable cotton sewing thread separately when cotton thread is used.

- Selected flow: Cotton sewing thread offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured cotton sewing thread waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `afw-pefcr-3-1`

###### Rejected assembled accessories or parts (`rejected_assembly_output`)

Record irreparable assembly rejects; repairable units remain rework-in-process and are not waste.

- Selected flow: Rejected woven clothing accessories or garment parts
- Flow property / unit: Mass / kg
- Amount rule: measured irreparable reject mass leaving assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled accessory or part output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_rework`
- Sources: `afw-pefcr-3-1`

##### Elementary flows

### Process: Conditional finishing and quality control (`p3_finishing_qc`)

#### Inputs

##### Product flows

###### Assembled accessory or garment part (`assembled_accessory_or_part_input`)

Record the accepted assembled product transferred from `p2_assembly` to applicable finishing and inspection.

- Selected flow: Assembled woven clothing accessory or garment part
- Flow property / unit: Mass / kg
- Amount rule: equal to accepted `assembled_accessory_or_part_output` transferred to finishing and inspection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming unpackaged output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_qc`
- Sources: `afw-pefcr-3-1`

###### Finishing electricity (`finishing_electricity_input`)

Record electricity for inspection, pressing, drying and other finishing equipment that actually operates at the reporting site.

- Selected flow: Electricity supplied to textile accessory finishing equipment
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or documented equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unpackaged output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `afw-pefcr-3-1`

###### Purchased steam (`purchased_steam_input`)

Record purchased steam separately when used for pressing, drying or finishing; on-site steam generation requires a separate support process with atomic fuel and emission exchanges.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: measured supplier steam delivered to applicable finishing equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unpackaged output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_and_qc`
- Sources: `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508`

###### Process water (`process_water_input`)

Record supplied process water only when product washing or another wet finishing route is performed on site.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied to the declared wet finishing operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg wet-finished output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_and_qc`
- Sources: `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508`

###### Non-ionic detergent (`nonionic_detergent_input`)

Record this specific detergent only when used in product washing; every other chemical shall have its own atomic row.

- Selected flow: Non-ionic textile detergent
- Flow property / unit: Mass / kg
- Amount rule: measured chemical issue to the declared washing operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg wet-finished output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_and_qc`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished unpackaged accessory or garment part (`finished_unpacked_accessory_or_part_output`)

Record conforming product after applicable finishing, inspection and documented rework and before sale packaging.

- Selected flow: Finished unpackaged woven clothing accessory or garment part
- Flow property / unit: Mass / kg
- Amount rule: measured conforming net output mass released to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming unpackaged output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_and_qc`
- Sources: `afw-pefcr-3-1`

##### Waste flows

###### Finishing wastewater (`finishing_wastewater_output`)

Record wastewater only for an on-site wet route and keep it separate from solid residues and rejected products.

- Selected flow: Textile accessory finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharged wastewater mass or documented water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg wet-finished output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_and_qc`
- Sources: `eu-textiles-bat-2022-2508`

###### Rejected finished accessories or parts (`rejected_finishing_output`)

Record irreparable rejects from finishing or final inspection separately from rework returned to the process.

- Selected flow: Rejected finished woven clothing accessories or garment parts
- Flow property / unit: Mass / kg
- Amount rule: measured irreparable reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming unpackaged output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_rework`
- Sources: `afw-pefcr-3-1`

##### Elementary flows

### Process: Labelling, packaging and factory-gate release (`p4_packaging`)

#### Inputs

##### Product flows

###### Finished unpackaged accessory or garment part (`finished_unpacked_accessory_or_part_input`)

Record the conforming unpackaged product transferred internally from `p3_finishing_qc`.

- Selected flow: Finished unpackaged woven clothing accessory or garment part
- Flow property / unit: Mass / kg
- Amount rule: equal to conforming product mass released to packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_release`
- Sources: `afw-pefcr-3-1`

###### Low-density polyethylene packaging film (`ldpe_packaging_film_input`)

Record the mass of individual LDPE bags or wrapping film applied to the product when used.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: counted packaging pieces multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_release`
- Sources: `afw-pefcr-3-1`

###### Paperboard hangtag (`paperboard_hangtag_input`)

Record paperboard hangtags separately from sewn-in textile labels.

- Selected flow: Paperboard hangtag
- Flow property / unit: Mass / kg
- Amount rule: counted hangtags multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_release`
- Sources: `afw-pefcr-3-1`

###### Corrugated shipping carton (`corrugated_shipping_carton_input`)

Record the allocated mass of corrugated board transport cartons leaving the factory with the product.

- Selected flow: Corrugated board shipping carton
- Flow property / unit: Mass / kg
- Amount rule: carton count multiplied by verified empty carton mass and allocated by contained net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_release`
- Sources: `afw-pefcr-3-1`

###### Packaging electricity (`packaging_electricity_input`)

Record electricity for labelling, sealing, folding and packing equipment used for the declared product.

- Selected flow: Electricity supplied to textile accessory packaging equipment
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or documented equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `afw-pefcr-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference accessory or garment part (`reference_accessory_or_part_output`)

This is the only reference product output and its amount excludes every packaging component.

- Selected flow: Handkerchiefs, shawls, scarves, veils, ties, cravats, gloves and other made-up clothing accessories, of textile fabric, not knitted or crocheted; parts of garments or of clothing accessories, of textile fabric, not knitted or crocheted n.e.c. `4cbb1b61-4222-4c6b-8eb2-3e6622e784c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_and_release`
- Sources: `un-cpc-3-2025`

##### Waste flows

###### LDPE packaging scrap (`ldpe_packaging_scrap_output`)

Record rejected bags and film trim generated during packaging as one specific polymer waste.

- Selected flow: Low-density polyethylene packaging film scrap
- Flow property / unit: Mass / kg
- Amount rule: measured LDPE packaging scrap mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_release`
- Sources: `afw-pefcr-3-1`

###### Paperboard scrap (`paperboard_scrap_output`)

Record rejected or trimmed paperboard hangtag material separately from corrugated board.

- Selected flow: Paperboard hangtag scrap
- Flow property / unit: Mass / kg
- Amount rule: measured paperboard scrap mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_release`
- Sources: `afw-pefcr-3-1`

###### Corrugated board scrap (`corrugated_board_scrap_output`)

Record unusable corrugated board generated during carton preparation as a separate waste.

- Selected flow: Corrugated board packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated board scrap mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_release`
- Sources: `afw-pefcr-3-1`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all foreground processes | First avoid allocation through batch or style separation, process sub-metering, separate material issue and direct waste weighing. | `iso-14044-2006`; `ec-pef-2021-2279` |
| `allocation_cutting_mass` | cutting and composition-specific losses | Assign fabric, interlining and cutting losses by measured material mass for the declared product and batch; preserve material composition in each waste output. | `afw-pefcr-3-1` |
| `allocation_assembly_unit` | sewing and assembly | Allocate shared sewing and assembly activity by accepted units processed, then convert to the 1 kg reference flow using accepted item count and measured net mass per item. | `afw-pefcr-3-1` |
| `allocation_finishing_mass` | finishing | Allocate shared finishing burdens by measured product mass only when products receive the same route; separate products with different washing, printing, embellishment, pressing or drying routes before allocation. | `afw-pefcr-3-1` |
| `allocation_shared_electricity` | shared equipment | Use process sub-metering first; otherwise use documented operating time multiplied by equipment power. Use mass throughput only when products have demonstrably equivalent processing intensity. | `afw-pefcr-3-1` |
| `allocation_waste` | offcuts, rejects and packaging scrap | Report each waste at the process where it arises with measured composition, mass and treatment destination; do not hide it in a global loss rate or mixed waste exchange. | `iso-14044-2006`; `afw-pefcr-3-1` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `p1_cutting`, `p2_assembly` | fabrics, interlining, thread and trims | BOM, stock issue, return, count and purchase records | product subtype; material identity; composition; supplier; lot; issued mass, length or count; unused return; unit mass or linear mass | reconcile the approved product BOM with warehouse issue and return records | kg, item, m | each batch | representative current production period | all reporting-factory stores and lines in scope | sum net issued amount by atomic material and normalize to conforming net output | approved BOM; supplier specification; calibrated scale record; stock reconciliation |
| `cp_cutting_mass_balance` | `p1_cutting` | cut components and composition-specific offcuts | lay, marker, pattern, cut-output and waste records | input and return mass by material; accepted component mass; offcut mass; cutting reject mass | weigh material inputs, accepted components and segregated offcuts for the same batch | kg | each batch | representative current production period | all cutting operations in scope | reconcile each material input to unused returns, accepted components, offcuts and rejects | marker or pattern record; calibrated scale record; waste ticket; signed batch reconciliation |
| `cp_assembly_records` | `p2_assembly` | assembled products, trims and assembly losses | production-line and material-consumption records | item count; net mass per item; accepted output mass; thread issue and return; trim counts; rejects | reconcile line output with component and trim records | kg, item | each batch or shift | representative current production period | all assembly lines in scope | aggregate by subtype and route, then convert unit-based activity to 1 kg net output | production log; BOM; quality disposition; calibrated scale record |
| `cp_process_electricity` | `p1_cutting`, `p2_assembly`, `p3_finishing_qc`, `p4_packaging` | process electricity | meter, equipment and operating-time records | meter start and end; equipment identifier; rated or measured power; operating time; products processed; downtime | sub-meter directly or calculate power multiplied by operating time | kWh | batch, shift or meter interval | representative current production period | all included equipment and shared services | subtract documented non-production load and allocate by the approved process rule | meter certificate; bill reconciliation; equipment plate; operating log |
| `cp_finishing_and_qc` | `p3_finishing_qc` | finishing inputs, outputs and wastewater | route, recipe, meter, batch, quality and discharge records | finishing route; input mass; electricity; steam; water; each chemical; output mass; wastewater; rework; rejects | collect only for operations actually performed and reconcile each wet batch separately | kg, kWh | each finishing batch | representative current production period | all included finishing and inspection operations | aggregate separately by finishing route before normalization | route sheet; batch recipe; meter record; chemical issue; discharge record; inspection report |
| `cp_quality_and_rework` | `p2_assembly`, `p3_finishing_qc` | rejects and rework | defect and disposition records | defect code; item count; mass; repair action; re-entry process; final disposition | track each failed unit to completed rework or waste exit | item, kg | each batch | representative current production period | all included assembly and finishing lines | count rework once and exclude recovered rework from waste | quality report; rework traveller; waste transfer ticket |
| `cp_packaging_and_release` | `p4_packaging` | packaging and reference output | packing specification, issue, count, mass and release records | product count; product net mass; packaging type; piece count; unit mass; packaging scrap; released mass | reconcile packaging material issue with packed-product release | kg, item | each batch | representative current production period | all packaging lines and factory-gate releases | allocate grouped cartons by contained net product mass and normalize packaging separately to 1 kg product | packing specification; scale record; warehouse release; scrap record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | normalized exchange = production-period exchange / conforming net product mass; set reference output to exactly 1 kg. | production-period exchange; conforming net released mass | exchange per 1 kg net product | `ec-pef-2021-2279` |
| `calc_cutting_mass_balance` | each fabric and interlining material | net issued input = accepted cut component mass + composition-specific offcuts + cutting rejects; investigate rather than aggregate any residual. | issued mass; returned mass; accepted component mass; offcut mass; reject mass | reconciled material flow and disclosed residual | `afw-pefcr-3-1` |
| `calc_assembly_loss` | complete product BOM | assembly loss mass = net BOM material issued minus conforming product mass, adjusted for unused returns and recovered rework; retain composition-specific losses. | BOM issue; unused returns; conforming output; recovered rework | assembly loss by material | `afw-pefcr-3-1` |
| `calc_unit_to_mass` | sewing and assembly | burden per kg = total assembly burden / accepted item count / measured net mass per accepted item. | assembly burden; accepted item count; net mass per item | assembly burden per 1 kg reference flow | `afw-pefcr-3-1` |
| `calc_shared_electricity` | shared electrical equipment | assigned electricity = total metered electricity × product-specific operating-time × equipment-power term / sum of all operating-time × equipment-power terms. | meter total; equipment time; equipment power | kWh assigned to product | `afw-pefcr-3-1` |
| `calc_packaging_mass` | grouped packaging | packaging per kg = packaging piece count × verified unit mass / contained net product mass. | piece count; unit mass; contained net product mass | kg packaging per kg net product | `afw-pefcr-3-1` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity` | reference product | Match the exact CPC 28238 Product-flow identity and retain the verified product-flow, Mass and Units of mass UUIDs without dataset versions. | Tiangong hybrid result and public state-code-100 direct read; `un-cpc-3-2025` |
| `dqr_bom_coverage` | material inventory | Provide primary data for at least 95% of BOM mass and cover 100% of main fabrics, lining, padding, metals and electronic parts when present; quantify and disclose every omitted remainder. | approved BOM; supplier specifications; `afw-pefcr-3-1` |
| `dqr_product_subtype` | category representativeness | Declare whether the product is a handkerchief, shawl, scarf, veil, tie, cravat, glove, other accessory or garment part; do not aggregate materially different subtypes without production-weighted data. | product specification; production mix; `un-cpc-3-2025` |
| `dqr_route` | process coverage | Identify every controlled cutting, edge-making, assembly, finishing, inspection, rework and packaging operation and each subcontracted operation; documentation for one step shall not imply coverage of another step. | process map; route sheet; supplier declaration; `afw-pefcr-3-1` |
| `dqr_temporal` | foreground records | Use current, production-representative data and explain product mix, seasonality, site mix and any extrapolation. | dated production, meter, stock and quality records; `afw-pefcr-3-1` |
| `dqr_measurement` | measured quantities | Retain calibration status, reading interval, unit conversion and reconciliation evidence for mass, count, electricity, steam and water. | calibration certificate; meter log; scale record; invoice reconciliation |
| `dqr_waste_destination` | waste outputs | Record composition, mass, applicable hazardous status, treatment destination and transfer evidence separately for every atomic waste. | waste ticket; contractor receipt; internal disposition record; `afw-pefcr-3-1` |
| `dqr_wet_finishing` | conditional wet operations | Retain route, recipe, water balance, each chemical issue, wastewater quantity, discharge route and monitoring basis; declare not applicable when no wet finishing occurs. | recipe; meter and discharge records; `eu-textiles-bat-2022-2508` |
| `dqr_uuid` | non-reference exchanges | Leave a UUID blank until one exact Tiangong flow is confirmed by hybrid search and public state-code-100 direct read for the relevant composition, technology, geography, treatment route or elementary-flow compartment. | manifest identity review and future state-code-100 readback |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The output UUID shall resolve to one public Product flow whose complete name and CPC leaf exactly match 28238 and whose quantitative reference is Mass; the reference output shall equal 1 kg net product. | `un-cpc-3-2025` |
| `validate_scope` | product and boundary | The product shall be a covered non-knitted, non-crocheted textile accessory or garment/accessory part and the foreground dataset shall stop at the reporting factory gate. | `un-cpc-3-2025`; `afw-pefcr-3-1` |
| `validate_qualifiers` | reference metadata | Product subtype, finished-accessory or part status, end use, dimensions or size, net item mass, item count, BOM, construction, trims, finishing route, geography, period and packaging shall be declared. | `afw-pefcr-3-1` |
| `validate_bom` | material inventory | BOM coverage shall meet the stated threshold, every included component shall have one atomic material row, and omitted mass shall be quantified and disclosed. | `afw-pefcr-3-1` |
| `validate_mass_balance` | cutting, assembly, finishing and packaging | Inputs, unused returns, accepted outputs, rework, offcuts, rejects and scrap shall reconcile for the same production period within a declared measurement tolerance. | `afw-pefcr-3-1` |
| `validate_energy` | process utilities | Electricity shall be separate for each process or transparently allocated from shared metering; steam, water and every fuel shall remain separate atomic exchanges. | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `validate_conditional_finishing` | finishing | Each wet or dry finishing route shall have complete atomic input, waste and emission records or be explicitly declared absent with route evidence. | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `validate_atomic_flows` | process inventory | No selected flow may be a collection, selector instruction, carrier list or combined waste; each additional material, chemical, fuel, refrigerant, packaging component, waste or emission shall have its own row. | `afw-pefcr-3-1` |
| `validate_allocation` | shared processes | Allocation shall follow the declared hierarchy and basis; assembly and sewing unit allocation shall be converted with accepted item count and measured net mass per item. | `iso-14044-2006`; `afw-pefcr-3-1` |
| `validate_data_quality` | foreground records | Records shall be current, representative and traceable, with calibration, stock, meter, quality and waste evidence; every data gap and withheld UUID shall be disclosed. | `ec-pef-2021-2279`; `afw-pefcr-3-1` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or production-weighted foreground factory-gate dataset for CPC 28238 textile accessories or garment/accessory parts |
| downstream_use | May serve as a secondary or background dataset when product subtype, composition, construction, technology, geography, period and finishing route match |
| allowed_use | Factory-gate inventory construction, supplier data exchange, hotspot analysis, and downstream process or lifecyclemodel projection with declared limitations |
| excluded_use | Direct substitution for knitted accessories, leather or plastics accessories, sports gloves, hats, complete garments or fabric production; unsupported comparative claims; silent use of unresolved UUIDs |
| required_metadata | canonical PCR id; product-flow UUID; product subtype; finished-accessory or part status; dimensions or size; net item mass and count; complete component BOM; construction and finish; factory geography and period; subcontracted steps; allocation; packaging; waste destinations |
| required_quality_disclosure | BOM and process coverage; source and meter provenance; calibration; representativeness; allocation; mass-balance residuals; data gaps; wet-finishing applicability; UUID review status |
| update_trigger | Material change in category scope, product mix, BOM, construction, finishing route, factory technology, geography, allocation, reference identity, evidence or applicable apparel environmental-footprint rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, subclass 28238. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact product-category scope and classification identity |
| `ec-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, 16 December 2021. http://data.europa.eu/eli/reco/2021/2279/oj | Reliable, verifiable and comparable product-footprint data and general modelling quality principles |
| `afw-pefcr-3-1` | standard | Technical Secretariat, Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025. https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf | Accessory manufacturing process decomposition, BOM coverage, process-specific losses and waste, primary data, energy modelling, and mass/unit allocation |
| `eu-textiles-bat-2022-2508` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. http://data.europa.eu/eli/dec_impl/2022/2508/oj | Conditional wet finishing, process chemicals, water, wastewater and process-level monitoring |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html | Goal and scope, inventory, allocation, reporting and review principles |
