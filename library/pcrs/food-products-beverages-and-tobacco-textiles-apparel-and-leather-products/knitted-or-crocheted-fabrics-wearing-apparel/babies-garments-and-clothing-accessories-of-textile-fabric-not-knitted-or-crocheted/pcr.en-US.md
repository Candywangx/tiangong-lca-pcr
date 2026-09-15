---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-of-textile-fabric-not-knitted-or-crocheted
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Babies' garments and clothing accessories, of textile fabric, not knitted or crocheted

## 1. Scope and Applicability

This PCR governs foreground data packages for the factory production of babies' garments and clothing accessories made from woven or otherwise non-knitted, non-crocheted textile fabric. Covered articles include infant shirts, trousers, dresses, sleepwear, outer garments, bibs and comparable textile clothing accessories when their defining construction is not knitted or crocheted. The foreground route begins with finished fabrics, interlining and trims received at the garment factory and ends with conforming sale-ready garments and accessories at the factory gate.

The PCR covers marker planning and cutting, sewing and assembly, conditional garment washing or other finishing, inspection, rework, and sale packaging. Upstream fibre, yarn, fabric, trim and packaging production must be linked through supplier-specific or representative upstream datasets. Distribution, retail, consumer use, laundering during use, repair, reuse and end-of-life are outside this factory-gate foreground boundary. Knitted or crocheted baby garments, footwear, toys, nappies, protective clothing, garments whose defining material is felt or nonwoven, and articles of leather, plastics or fur are excluded.

This is a production-data rule, not a claim that all products use every listed exchange. Each applicable material, trim, utility, waste and emission must be recorded as its own atomic exchange. A route-specific exchange may be absent only when the dataset declares the route condition and retains evidence that the exchange did not occur.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-of-textile-fabric-not-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28235, exact |
| covered_products | Babies' garments and clothing accessories whose defining body material is woven or otherwise textile fabric that is not knitted or crocheted |
| excluded_products | Knitted or crocheted baby garments; footwear; toys; nappies; protective wear; felt or nonwoven garments; leather, plastics or fur apparel; upstream fabrics sold as fabrics |
| representative_product | A saleable infant garment produced by cutting and sewing finished woven fabric, with declared trims, finishing route and packaging |
| production_route | Receipt of finished fabric and trims; marker planning and cutting; sewing and assembly; conditional washing, pressing or dry finishing; inspection; packaging |
| market_state | Finished, conforming and sale-ready product at the garment factory gate; packaging reported separately from net garment mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply finished babies' garments or clothing accessories made from textile fabric that is not knitted or crocheted |
| How much | 1 kg net conforming product, excluding sale and transport packaging mass |
| How well | Sale-ready, quality-inspected product meeting the declared style, infant size, fibre composition, construction, finish, trim and regulatory specification |
| How long or cycle | One completed production batch or other declared representative production period ending at the factory gate |
| reference_flow_link | reference_baby_garment_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Babies' garments and clothing accessories, of textile fabric, not knitted or crocheted `be638ef7-ac8c-4fde-a338-0535d81d5242` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment or accessory type; infant age and declared size, including whether the reference size is 68 cm when used; net mass per item; item count represented by 1 kg; fibre composition and mass shares; woven construction; lining, padding and interlining; trim and fastener specification; dyeing and finish state; garment washing, printing or embellishment route; factory geography; production period; packaging configuration and mass by material |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, product description or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to exactly 1 kg of net conforming garment or accessory output; exclude packaging, rejects and rework-in-process from reference mass. |
| `material_mass` | fabrics, interlining, thread, trims, detergents, packaging and solid wastes | Mass | kg | Use calibrated scale, invoice, stock-issue or BOM records and reconcile issued, returned, incorporated, rejected and discarded mass for the same production period. |
| `product_count` | assembly and sewing allocation | Number of items | item | Retain produced item count and net mass per item so unit-based assembly burdens can be converted transparently to the 1 kg reference flow. |
| `electricity_use` | cutting, assembly, finishing and packaging electricity | Energy | kWh | Use process sub-metering where available; otherwise calculate from documented machine power and operating time and disclose the allocation basis. |
| `thermal_input` | purchased steam used for pressing or wet finishing | Mass | kg | Record supplier meter or invoice mass and steam condition; do not combine steam with electricity or fuels. |
| `water_use` | garment washing or wet finishing | Mass | kg | Meter supplied process water; if volume is measured, apply a documented density and temperature conversion. |
| `transported_packaging` | sale and transport packaging | Mass | kg | Report each packaging material separately per 1 kg net product and do not add packaging mass to the reference product. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_operations` | foreground garment production | Include receipt and internal handling of finished fabrics and trims, cutting, sewing, assembly, applicable finishing, inspection, rework, packaging, direct utilities, process wastes and direct releases through the factory gate. | `afw-pefcr-3-1` |
| `boundary_upstream_linkage` | purchased product inputs | Keep each purchased fabric, trim, chemical, utility and packaging material visible and connect it to a composition-, technology- and geography-appropriate upstream dataset; do not absorb upstream burdens into an undocumented aggregate. | `ec-pef-2021-2279`; `afw-pefcr-3-1` |
| `boundary_conditional_finishing` | washing, printing, embellishment and finishing | Include only the finishing operations actually performed at the reporting factory; declare absence explicitly and add one atomic exchange for every additional chemical, carrier, waste or direct emission used by an applicable route. | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `boundary_downstream_exclusion` | distribution and use | Exclude distribution beyond the factory gate, retail, consumer care, repair, reuse and end-of-life from this foreground package; a cradle-to-grave study must add those stages outside this factory production dataset. | `afw-pefcr-3-1` |
| `boundary_same_category_recursion` | same-category garment inputs | Record purchased or transferred baby garments used as inputs as explicit product exchanges and link an upstream dataset; do not recursively recreate their production inside this foreground package unless the unit process is under the reporting operator's control. | `ec-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished woven fabrics, interlining, sewing materials, trims and packaging materials are received at the reporting garment factory with declared composition, quantity, supplier and upstream dataset linkage. |
| starting_condition_role | factory-gate foreground input |
| product_classification_scope | Babies' garments and clothing accessories of CPC 3.0 class 28235; classification is evidence for scope and does not replace product qualifiers. |
| recursive_input_rule | Same-category garments or accessories crossing the boundary remain product inputs with an upstream dataset and are not expanded recursively unless produced in a controlled foreground unit process. |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise use a documented representative dataset matched to material form, fibre composition, manufacturing technology, geography and reference period. |
| disclosure | Declare BOM coverage, excluded operations, subcontracted steps, route-specific finishing, factory geography, allocation bases, data gaps, packaging configuration and all UUIDs withheld pending exact Tiangong identity confirmation. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p1_cutting` | Marker planning and cutting | required | Finished textile fabric is cut into garment or accessory components. | Convert finished fabric and interlining into controlled cut components while recording material-specific offcuts. | kg cut components and kg offcuts per 1 kg net product |
| `p2_assembly` | Sewing and assembly | required | Cut components and applicable trims are joined into an assembled article. | Join components and trims and record unit-based assembly activity, thread losses and rejects. | items assembled and kg assembled product per 1 kg net product |
| `p3_finishing_qc` | Conditional finishing and quality control | conditional | Include garment washing, pressing, printing, embellishment, drying or other finishing only when performed at the reporting site; inspection and quality control are always included. | Produce conforming unpackaged product and record utilities, wastewater, rejects and rework. | kg conforming unpackaged product per 1 kg net product |
| `p4_packaging` | Sale packaging and factory-gate release | required | Conforming product is labelled, packed and released at the factory gate. | Apply declared packaging and produce the reference flow while keeping packaging mass separate. | 1 kg net reference product |

### Process: Marker planning and cutting (`p1_cutting`)

#### Inputs

##### Product flows

###### Woven cotton fabric (`woven_cotton_fabric_input`)

Record the actual cotton woven fabric mass issued to lays for body, lining or pocketing when present.

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

###### Woven polyester fabric (`woven_polyester_fabric_input`)

Record this exchange only for a declared polyester woven fabric portion.

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

###### Woven viscose fabric (`woven_viscose_fabric_input`)

Record this exchange only for a declared viscose, modal or lyocell woven fabric portion represented by the selected flow.

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

###### Woven wool fabric (`woven_wool_fabric_input`)

Record this exchange only for a declared wool woven fabric portion.

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

###### Woven flax fabric (`woven_flax_fabric_input`)

Record this exchange only for a declared flax or linen woven fabric portion represented by the selected flow.

- Selected flow: Woven flax fabric
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Polyester nonwoven fusible interlining (`polyester_nonwoven_interlining_input`)

Record the mass of polyester fusible interlining applied to declared components; other interlining compositions require separate atomic rows.

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

Record electricity supplied to marker, spreading, cutting and directly associated extraction equipment.

- Selected flow: Electricity supplied to cutting equipment
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or documented machine power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `ec-pef-2021-2279`; `afw-pefcr-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut garment components (`cut_components_output`)

Internal cut components transfer to sewing and assembly and are calculated from component mass records.

- Selected flow: Cut woven baby-garment components
- Flow property / unit: Mass / kg
- Amount rule: calculated fabric and interlining inputs minus material-specific offcuts and documented cutting rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

##### Waste flows

###### Cotton fabric offcuts (`cotton_offcuts_output`)

Keep cotton offcuts separate from other fibre compositions and record their destination.

- Selected flow: Cotton woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured cotton offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Polyester fabric offcuts (`polyester_offcuts_output`)

Keep polyester offcuts separate and record their destination.

- Selected flow: Polyester woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured polyester offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Viscose fabric offcuts (`viscose_offcuts_output`)

Keep viscose-family offcuts separate when this material is used.

- Selected flow: Viscose woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured viscose offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Wool fabric offcuts (`wool_offcuts_output`)

Keep wool offcuts separate when this material is used.

- Selected flow: Wool woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured wool offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Flax fabric offcuts (`flax_offcuts_output`)

Keep flax offcuts separate when this material is used.

- Selected flow: Flax woven fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured flax offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut components produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `afw-pefcr-3-1`

###### Interlining offcuts (`interlining_offcuts_output`)

Keep fusible interlining offcuts separate from woven-fabric offcuts.

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

### Process: Sewing and assembly (`p2_assembly`)

#### Inputs

##### Product flows

###### Cut garment components (`cut_components_input`)

Internal transfer of the cut components produced by `p1_cutting`.

- Selected flow: Cut woven baby-garment components
- Flow property / unit: Mass / kg
- Amount rule: equal to the recorded `cut_components_output` transferred to assembly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources: `afw-pefcr-3-1`

###### Polyester sewing thread (`polyester_sewing_thread_input`)

Record polyester sewing thread issued and consumed when present in the BOM.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured issue minus unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Cotton sewing thread (`cotton_sewing_thread_input`)

Record cotton sewing thread separately when present in the BOM.

- Selected flow: Cotton sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured issue minus unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Plastic snap fasteners (`plastic_snap_fastener_input`)

Record plastic snap fasteners as a separate component when used.

- Selected flow: Plastic snap fastener
- Flow property / unit: Mass / kg
- Amount rule: counted fasteners multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Metal snap fasteners (`metal_snap_fastener_input`)

Record metal snap fasteners separately from plastic fasteners.

- Selected flow: Metal snap fastener
- Flow property / unit: Mass / kg
- Amount rule: counted fasteners multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Elastic narrow fabric (`elastic_narrow_fabric_input`)

Record elastic tape or narrow elastic fabric as one declared component when used.

- Selected flow: Elastic narrow fabric
- Flow property / unit: Mass / kg
- Amount rule: measured issued length multiplied by verified linear mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Woven textile label (`woven_textile_label_input`)

Record sewn-in textile labels separately from paper hangtags and packaging.

- Selected flow: Woven textile label
- Flow property / unit: Mass / kg
- Amount rule: counted labels multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-3-1`

###### Assembly electricity (`assembly_electricity_input`)

Record electricity used by sewing, overlocking, attaching, fusing and directly associated assembly equipment.

- Selected flow: Electricity supplied to garment assembly equipment
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or documented machine power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per item assembled and converted to 1 kg net product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `ec-pef-2021-2279`; `afw-pefcr-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled baby garment (`assembled_garment_output`)

Internal transfer of a sewn article before final finishing and quality release.

- Selected flow: Assembled woven baby garment
- Flow property / unit: Mass / kg
- Amount rule: measured accepted assembly output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `afw-pefcr-3-1`

##### Waste flows

###### Sewing thread offcuts (`thread_offcuts_output`)

Record thread ends and unusable sewing thread separately from fabric offcuts.

- Selected flow: Textile sewing thread offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured thread waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `afw-pefcr-3-1`

###### Rejected assembled garments (`rejected_assembly_output`)

Record irreparable assembly rejects; repairable units remain rework-in-process and are not waste.

- Selected flow: Rejected woven baby garments
- Flow property / unit: Mass / kg
- Amount rule: measured irreparable reject mass leaving assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_rework`
- Sources: `afw-pefcr-3-1`

##### Elementary flows

### Process: Conditional finishing and quality control (`p3_finishing_qc`)

#### Inputs

##### Product flows

###### Assembled baby garment (`assembled_garment_input`)

Internal transfer from sewing and assembly.

- Selected flow: Assembled woven baby garment
- Flow property / unit: Mass / kg
- Amount rule: equal to accepted `assembled_garment_output` transferred to finishing and inspection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming unpackaged output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_qc`
- Sources: `afw-pefcr-3-1`

###### Finishing electricity (`finishing_electricity_input`)

Record electricity for inspection, pressing, drying and other on-site finishing equipment that actually operates.

- Selected flow: Electricity supplied to garment finishing equipment
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or documented machine power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unpackaged output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `ec-pef-2021-2279`; `afw-pefcr-3-1`

###### Purchased steam (`purchased_steam_input`)

Record purchased steam separately when used for pressing, drying or finishing; on-site steam generation requires its own support process.

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

Record supplied water only when garment washing or another wet finishing route is performed on site.

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

Record this exact detergent exchange only when used; every other wet-finishing chemical requires its own atomic row.

- Selected flow: Non-ionic textile detergent
- Flow property / unit: Mass / kg
- Amount rule: measured chemical issue to the declared garment washing operation
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

###### Finished unpackaged baby garment (`finished_unpacked_garment_output`)

Conforming garment or accessory after applicable finishing, inspection and recorded rework, before sale packaging.

- Selected flow: Finished unpackaged woven baby garment
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

Record wastewater only for an on-site wet route and keep it separate from solid residues and rejects.

- Selected flow: Textile garment finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharged wastewater mass or documented water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg wet-finished output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_and_qc`
- Sources: `eu-textiles-bat-2022-2508`

###### Rejected finished garments (`rejected_finishing_output`)

Record irreparable rejects from finishing or final inspection separately from rework returned to the process.

- Selected flow: Rejected finished woven baby garments
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

### Process: Sale packaging and factory-gate release (`p4_packaging`)

#### Inputs

##### Product flows

###### Finished unpackaged baby garment (`finished_unpacked_garment_input`)

Internal transfer of conforming product from `p3_finishing_qc`.

- Selected flow: Finished unpackaged woven baby garment
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

Record individual polybag or wrapping film mass when used.

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

Record paperboard hangtags separately from sewn textile labels.

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
- Amount rule: carton count multiplied by verified empty carton mass and allocated by packed product count
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_release`
- Sources: `afw-pefcr-3-1`

###### Packaging electricity (`packaging_electricity_input`)

Record electricity for labelling, sealing, folding and packing equipment.

- Selected flow: Electricity supplied to garment packaging equipment
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or documented machine power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `ec-pef-2021-2279`; `afw-pefcr-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference babies' garment or accessory (`reference_baby_garment_output`)

This is the only reference product output and excludes packaging mass.

- Selected flow: Babies' garments and clothing accessories, of textile fabric, not knitted or crocheted `be638ef7-ac8c-4fde-a338-0535d81d5242`
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

Record film trim and rejected bags generated during packaging.

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

Record rejected or trimmed paperboard hangtag material.

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

Record unusable corrugated board generated during carton preparation.

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
| `allocation_avoid` | all foreground processes | First avoid allocation through batch separation, sub-metering, separate stock issue and direct waste weighing. | `iso-14044-2006`; `ec-pef-2021-2279` |
| `allocation_cutting_mass` | cutting and material losses | Assign fabrics, interlining and cutting losses by measured mass for the declared style and production batch; preserve material composition in each waste output. | `afw-pefcr-3-1` |
| `allocation_assembly_unit` | sewing and assembly | Allocate shared sewing and assembly activity by units processed, then convert to the 1 kg reference flow using the measured item count and net mass per item. | `afw-pefcr-3-1` |
| `allocation_finishing_mass` | finishing | Allocate shared finishing burdens by measured product mass when products receive the same route; separate products with different washing, printing, embellishment or pressing routes before allocation. | `afw-pefcr-3-1` |
| `allocation_shared_energy` | shared equipment and services | Use process sub-metering first; otherwise use documented machine operating time multiplied by rated power. Use mass throughput only when products have demonstrably equivalent processing intensity. | `ec-pef-2021-2279` |
| `allocation_waste` | offcuts, rejects and packaging scrap | Report waste at the process where it arises with measured composition, mass and treatment destination. Do not subtract an avoided-product credit inside this foreground inventory unless the downstream study method explicitly requires and discloses it. | `iso-14044-2006`; `afw-pefcr-3-1` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `p1_cutting`, `p2_assembly` | fabrics, interlining, thread and trims | BOM, stock issue, return and purchase records | material identity; composition; supplier; lot; issued mass or count; unused return; unit mass or linear mass | reconcile product BOM with warehouse issue and return records | kg, item, m | each batch | representative production period | all reporting-factory material stores and lines | sum net issued amount by atomic material and normalize to conforming net output | approved BOM; supplier specification; calibrated scale record; stock reconciliation |
| `cp_cutting_mass_balance` | `p1_cutting` | cut components and material-specific offcuts | lay, marker, cut-output and waste records | input mass by material; marker efficiency; accepted cut mass; offcut mass; cutting reject mass | weigh inputs, accepted components and segregated offcuts for the same batch | kg | each batch | representative production period | all cutting lines in scope | reconcile each material input to accepted components, returns, offcuts and rejects | marker report; calibrated scale record; waste ticket; signed batch reconciliation |
| `cp_assembly_records` | `p2_assembly` | assembled products, trims and assembly losses | line production and material-consumption records | item count; net mass per item; accepted output mass; thread issue and return; fastener count; label count; rejects | reconcile line output with component and trim records | kg, item | each batch or shift | representative production period | all assembly lines in scope | aggregate by style and route, then convert unit-based activity to 1 kg net output | line production log; BOM; quality disposition; calibrated scale record |
| `cp_process_electricity` | `p1_cutting`, `p2_assembly`, `p3_finishing_qc`, `p4_packaging` | process electricity | meter, equipment and operating-time records | meter start and end; machine identifier; rated power; operating time; products processed; downtime | sub-meter directly or calculate power multiplied by operating time | kWh | batch, shift or monthly meter interval | representative production period | all included equipment and shared services | subtract documented non-production load and allocate by the approved process rule | meter certificate; bill reconciliation; equipment plate; operating log |
| `cp_finishing_and_qc` | `p3_finishing_qc` | finishing inputs, outputs and wastewater | recipe, meter, batch, quality and discharge records | route; input mass; electricity; steam; water; each chemical; output mass; wastewater; rework; rejects | collect only for operations actually performed and reconcile each wet batch | kg, kWh | each finishing batch | representative production period | all included finishing and inspection operations | aggregate separately by finishing route before normalizing | batch recipe; meter record; chemical issue; discharge record; inspection report |
| `cp_quality_and_rework` | `p2_assembly`, `p3_finishing_qc` | rejects and rework | defect and disposition records | defect code; item count; mass; repair action; re-entry process; final disposition | track each failed unit to rework completion or waste exit | item, kg | each batch | representative production period | all included assembly and finishing lines | count rework once and exclude only recovered rework from waste | quality report; rework traveller; waste transfer ticket |
| `cp_packaging_and_release` | `p4_packaging` | packaging and reference output | packing specification, issue, count, mass and release records | product count; net mass; packaging type; piece count; unit mass; packaging scrap; released mass | reconcile packing material issue and packed-product release | kg, item | each batch | representative production period | all packaging lines and factory-gate releases | allocate grouped cartons by contained product count and normalize packaging separately to 1 kg net product | packing specification; scale record; warehouse release; scrap record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | normalized exchange = period exchange / conforming net product mass; set the reference output to exactly 1 kg. | period exchange; conforming net released mass | exchange per 1 kg net product | `ec-pef-2021-2279` |
| `calc_cutting_mass_balance` | each fabric and interlining material | net issued input = cut component mass + material-specific offcuts + cutting rejects; investigate any residual rather than hiding it in an aggregate. | issued mass; returned mass; cut mass; offcut mass; reject mass | reconciled material flow and residual | `afw-pefcr-3-1` |
| `calc_assembly_loss` | complete product BOM | assembly loss mass = BOM material mass issued for one product minus net conforming product mass, adjusted for documented unused returns and recovered rework. | BOM mass; returned mass; net output mass; recovered rework | assembly loss by material | `afw-pefcr-3-1` |
| `calc_unit_to_mass` | sewing and assembly | burden per kg = total assembly burden / accepted item count / measured net mass per accepted item. | assembly burden; accepted item count; net mass per item | assembly burden per 1 kg reference flow | `afw-pefcr-3-1` |
| `calc_shared_electricity` | shared electrical equipment | assigned electricity = total metered electricity × product-specific machine operating time × rated power / sum of operating-time × rated-power terms. | meter total; machine time; rated power | kWh assigned to product | `ec-pef-2021-2279` |
| `calc_packaging_mass` | grouped packaging | packaging per kg = packaging piece count × verified unit mass / contained net product mass. | piece count; unit mass; contained net product mass | kg packaging per kg net product | `afw-pefcr-3-1` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity` | reference product | Match the exact CPC 28235 product identity and retain the verified Tiangong product-flow, Mass and Units of mass UUIDs without dataset versions. | Tiangong state-100 readback; product specification; `un-cpc-3-2025` |
| `dqr_bom_coverage` | material inventory | Provide primary data for at least 95% of BOM mass and cover 100% of main fabrics, lining, padding, metal parts and electronic parts when present; disclose every omitted remainder. | approved BOM; supplier specifications; `afw-pefcr-3-1` |
| `dqr_route` | process coverage | Identify every controlled cutting, assembly, finishing, inspection, rework and packaging operation and every subcontracted operation; do not treat a single-step dataset as covering undocumented steps. | process map; supplier declaration; `afw-pefcr-3-1` |
| `dqr_temporal` | all foreground records | Use a representative, current production period; explain seasonal, style, size and line-mix representativeness and any extrapolation. | dated production, meter, stock and quality records; `ec-pef-2021-2279` |
| `dqr_measurement` | mass, count, electricity, steam and water | Retain calibration status, reading interval, unit conversion and reconciliation evidence for every measured quantity. | calibration certificate; meter log; scale record; invoice reconciliation |
| `dqr_waste_destination` | all waste outputs | Record composition, mass, hazardous status where applicable, treatment destination and transfer evidence separately for each atomic waste. | waste ticket; contractor receipt; internal disposition record; `afw-pefcr-3-1` |
| `dqr_wet_finishing` | conditional wet operations | Retain recipe, water balance, each chemical issue, wastewater quantity, discharge route and monitoring basis; declare the route not applicable when no wet finishing occurs. | batch recipe; meter record; discharge record; `eu-textiles-bat-2022-2508` |
| `dqr_uuid` | non-reference exchanges | Leave a UUID blank until one real Tiangong flow is confirmed for the exact material, geography, technology, treatment route or elementary-flow compartment; do not borrow a nearby identity. | manifest identity review; direct state-100 readback when resolved |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The output UUID shall resolve to a public Product flow whose name and CPC path exactly match 28235 and whose quantitative reference is Mass; reference output shall equal 1 kg net product. | `un-cpc-3-2025` |
| `validate_scope` | product and boundary | The product shall be a babies' garment or clothing accessory made from textile fabric that is not knitted or crocheted, and the dataset shall stop at the declared garment factory gate. | `un-cpc-3-2025`; `afw-pefcr-3-1` |
| `validate_qualifiers` | reference metadata | Garment type, infant size or age, net item mass, item count, fibre composition, construction, trims, finishing route, geography, period and packaging shall all be declared. | `afw-pefcr-3-1` |
| `validate_bom` | material inventory | BOM coverage shall meet the declared threshold, every included component shall have one atomic material row, and omitted mass shall be quantified and disclosed. | `ec-pef-2021-2279`; `afw-pefcr-3-1` |
| `validate_mass_balance` | cutting, assembly, finishing and packaging | Input, accepted output, returned material, rework, offcut, reject and scrap mass shall reconcile for the same production period within a declared measurement tolerance. | `afw-pefcr-3-1` |
| `validate_energy` | process utilities | Electricity shall be separate for each process or transparently allocated from shared metering; steam, water and any fuel shall remain separate atomic exchanges. | `ec-pef-2021-2279`; `afw-pefcr-3-1` |
| `validate_conditional_finishing` | finishing | Wet or dry finishing shall either have complete atomic input, waste and emission records or be explicitly declared absent with supporting route evidence. | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `validate_atomic_flows` | process inventory | No selected flow may be a collection, carrier list, selector instruction or combined waste; any additional BOM material, chemical, packaging component, waste or emission shall be added as its own row. | `ec-pef-2021-2279` |
| `validate_allocation` | shared processes | Allocation shall follow the declared hierarchy and basis; sewing and assembly unit allocation shall be converted with measured item count and net mass per item. | `iso-14044-2006`; `afw-pefcr-3-1` |
| `validate_data_quality` | foreground records | Records shall be current, representative, traceable and supported by calibration, stock, meter, quality and waste evidence; every gap and withheld UUID shall be disclosed. | `ec-pef-2021-2279`; `afw-pefcr-3-1` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or representative foreground production dataset for non-knitted, non-crocheted babies' garments and clothing accessories |
| downstream_use | May be used as a secondary dataset or background dataset for apparel product systems when identity, geography, technology, time and finishing route match |
| allowed_use | Factory-gate inventory construction, supplier data exchange, hotspot analysis, and downstream process or lifecyclemodel projection with declared limitations |
| excluded_use | Direct substitution for knitted baby garments, fabric manufacture, protective wear, consumer use, laundering, repair or end-of-life; unsupported comparative claims; silent use of unresolved UUIDs |
| required_metadata | canonical PCR id; product-flow UUID; garment type; size or age; net item mass and count; full fibre and component BOM; construction and finish; process geography and period; subcontracted steps; allocation; packaging; waste destinations |
| required_quality_disclosure | BOM coverage; process coverage; source and meter provenance; calibration; representativeness; allocation methods; mass-balance residuals; data gaps; UUID review status; wet-finishing applicability |
| update_trigger | Material change in product scope, BOM, construction, finishing route, factory technology, geography, allocation, reference identity, evidence, or applicable apparel environmental-footprint rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, class 28235. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product-category scope and exact classification identity |
| `ec-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods. http://data.europa.eu/eli/reco/2021/2279/oj | Product-specific BOM and manufacturing data, completeness, consistency, allocation and data-quality principles |
| `afw-pefcr-3-1` | standard | Technical Secretariat, Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025. https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ | Apparel boundary and process decomposition, BOM coverage, cutting and assembly losses, manufacturing waste, unit and mass allocation, primary-data requirements |
| `eu-textiles-bat-2022-2508` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. http://data.europa.eu/eli/dec_impl/2022/2508/oj | Conditional wet finishing, chemical, water, wastewater and monitoring requirements |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html | Goal and scope, inventory, allocation, reporting and review principles |
