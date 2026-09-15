---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.garments-made-up-of-felt-or-nonwovens-garments-made-up-of-textile-fabrics-impregnated-o-38230521
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Garments made up of felt or nonwovens; garments made up of textile fabrics impregnated or coated with plastics, rubber or other materials

## 1. Scope and Applicability

This PCR governs foreground data packages for garments whose defining shell or functional panel is felt, a nonwoven, or a textile substrate impregnated, coated, covered or laminated with a polymeric or rubber material. It covers accepted garments at the manufacturing factory gate, including garment material cutting, product assembly, conditional seam-barrier treatment, final inspection and shipment packaging.

The declared product may be reusable or limited-use and may have protective, industrial, occupational or ordinary apparel functions. The data package shall declare garment design, intended use, service-life class, primary material construction, substrate fibre, coating or membrane chemistry, areal density, joining method, seam treatment, closures, size basis, manufacturing sites and packaging configuration. A protective-performance claim does not follow from CPC identity; it requires the applicable product specification and test evidence.

Production of fibres, felt, nonwoven rollstock, textile substrate, coating, impregnation, membrane, lamination resin and purchased components is represented by upstream product datasets. Distribution, use, cleaning, repair and end-of-life are outside this gate-to-gate foreground boundary. If coating, impregnation, lamination, wet finishing or solvent treatment occurs at the reporting site, it shall be modelled in an additional material-converting process with its own chemicals, utilities, wastes and emissions; this PCR's garment-assembly inventory shall not conceal that operation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.garments-made-up-of-felt-or-nonwovens-garments-made-up-of-textile-fabrics-impregnated-o-38230521 |
| classification_refs | CPC 3.0: 28250 (exact) |
| covered_products | Garments made up of felt; garments made up of nonwovens; garments made up of textile fabrics impregnated, coated, covered or laminated with plastics, rubber or another declared material |
| excluded_products | Unconverted felt, nonwoven or coated textile in rolls or sheets; ordinary woven or knitted garments classified elsewhere; plastic-only apparel without a qualifying textile construction; headgear; footwear; non-garment technical textile articles |
| representative_product | One accepted packaged garment manufactured from a declared CPC 28250 material system |
| production_route | Received converted material and components → inspection/cutting → sewing, ultrasonic welding or adhesive assembly → conditional seam-barrier treatment → final inspection → packaging |
| market_state | Accepted finished packaged garment at the manufacturing factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an accepted garment whose defining material construction is within CPC 28250 and whose declared design and performance requirements are met |
| How much | 1 kg of accepted finished packaged garment |
| How well | Conforms to the declared BOM, material construction, dimensions, joining route, seam/closure specification, intended-use requirements and final inspection criteria |
| How long or cycle | One manufacturing output cycle at the factory gate; service duration or limited-use status is declared but downstream use is outside this foreground package |
| reference_flow_link | `finished_packaged_garment_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Garments made up of felt or nonwovens; garments made up of textile fabrics impregnated or coated with plastics, rubber or other materials `3c972aa8-6aa5-4724-8a61-694aef1b09fe` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment type and size basis; reusable or limited-use status; felt/nonwoven/coated-or-laminated material family; substrate fibre and construction; coating/membrane/rubber chemistry; areal density; coating or membrane mass where applicable; joining technology; seam configuration and seam tape identity; closures and accessories; intended use and claimed performance; manufacturing site; accepted-output and packaging mass basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to exactly 1 kg of accepted finished packaged garment measured at the factory gate. |
| `accepted_output_basis` | accepted garment output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Exclude nonconforming garments from the denominator and record them as a separate waste output before normalization. |
| `area_to_mass_conversion` | materials issued or recorded by area | Mass | kg | Convert area to mass with the lot-specific measured areal density; retain area, areal-density measurement, lot identity and conversion calculation. |
| `component_mass_conversion` | fasteners, labels and other pieces counted by item | Mass | kg | Convert counts to mass using a measured mean mass from the same component specification and lot, retaining sample count, scale record and component identity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Converted felt, nonwoven or chemically specified coated/laminated textile and purchased garment components are received at the garment manufacturing site with supplier identity, lot, mass and BOM records. |
| starting_condition_role | Upstream product input to garment manufacture |
| product_classification_scope | The finished output must satisfy the semantic scope of CPC 28250; material rolls, sheets and technical textile articles that are not garments remain outside the reference product. |
| recursive_input_rule | A purchased unfinished CPC 28250 garment that enters for contract finishing or packaging is recorded as one separately identified product input, and its upstream garment manufacture is represented by a non-overlapping upstream dataset rather than recreated within the receiving process. |
| upstream_dataset_requirement | Use composition- and technology-specific upstream datasets for each felt, nonwoven, coated/laminated textile, component, adhesive, seam tape and packaging material. |
| disclosure | Declare every manufacturing site, outsourced step, material construction, coating chemistry, joining route, rejected output, waste destination, utility meter allocation and any on-site coating, lamination, wet or solvent process. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_received_converted_material` | foreground_start | Start the garment foreground system when converted sheet or roll materials and purchased components are received at the garment manufacturing site. | `afw-pefcr-3-1-2025`; `eu-textile-bat-2022` |
| `boundary_separate_upstream_material_conversion` | upstream_materials | Represent fibre production, felt/nonwoven formation, textile coating, impregnation and lamination with separate upstream datasets matched to the declared material construction. | `iso-9092-2026`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025` |
| `boundary_add_on_site_converting_process` | on_site_material_conversion | When the reporting site performs coating, lamination, wet finishing or solvent treatment, add a distinct process inventory for each operation and its specific inputs, wastes and emissions; do not assign those burdens implicitly to garment assembly. | `eu-textile-bat-2022` |
| `boundary_end_at_packaged_factory_gate` | foreground_end | End the foreground system when the accepted packaged garment is measured and released at the manufacturing factory gate. | `afw-pefcr-3-1-2025` |
| `boundary_exclude_downstream_stages` | downstream_stages | Exclude distribution, use, cleaning, repair and end-of-life from this gate-to-gate package and disclose that downstream models require additional datasets. | `afw-pefcr-3-1-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | Material inspection and cutting | required | Include all primary garment materials issued to cutting and every separately measured offcut output. | Prepare accepted garment panels from received converted materials. | Per 1 kg accepted finished packaged garment |
| `garment_assembly` | Garment joining and component assembly | required | Include the declared sewing, ultrasonic welding, hot-melt bonding and component-installation activities; rows absent from the actual route are zero only with BOM and technology-pack evidence. | Join panels and components into one assembled garment. | Per 1 kg accepted finished packaged garment |
| `seam_barrier_treatment` | Seam barrier treatment | conditional | Include when seam tape or an equivalent post-assembly barrier treatment is applied; ultrasonic welding without a separate tape step remains in `garment_assembly`. | Apply the declared seam-barrier construction. | Per 1 kg accepted finished packaged garment |
| `final_inspection` | Final inspection and acceptance | required | Include dimensional, visual, closure, seam and claimed-performance acceptance checks specified for the product. | Separate accepted unpackaged garments from nonconforming output. | Per 1 kg accepted finished packaged garment |
| `packaging` | Product packaging | required | Include shipment packaging that leaves the factory and reusable transport assets allocated to the shipment. | Deliver the accepted CPC 28250 reference product at the factory gate. | Per 1 kg accepted finished packaged garment |

### Process: Material inspection and cutting (`material_cutting`)

#### Inputs

##### Product flows

###### Wool felt issued to cutting (`wool_felt_input`)

Wool felt crosses the cutting boundary only when it is an actual garment material in the BOM. Record fibre composition, felt-making route, density, thickness, finish and supplier lot.

- Selected flow: Wool felt sheet
- Flow property / unit: Mass / kg
- Amount rule: measured wool felt issued to the cutting batch minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `un-cpc-3-0-2025`; `afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### Needle-punched polyester felt issued to cutting (`polyester_felt_input`)

Needle-punched polyester felt is recorded separately from wool felt because its fibre and bonding system define a different product input and waste identity.

- Selected flow: Needle-punched polyester felt sheet
- Flow property / unit: Mass / kg
- Amount rule: measured polyester felt issued to the cutting batch minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `un-cpc-3-0-2025`; `afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### Polypropylene spunbond nonwoven issued to cutting (`pp_spunbond_nonwoven_input`)

Single-layer polypropylene spunbond material crosses the cutting boundary as its own product input. Retain polymer grade, areal density, colour and surface-treatment records.

- Selected flow: Polypropylene spunbond nonwoven fabric
- Flow property / unit: Mass / kg
- Amount rule: measured polypropylene spunbond nonwoven issued to cutting minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `iso-9092-2026`; `afw-pefcr-3-1-2025`

###### Polypropylene SMS nonwoven issued to cutting (`pp_sms_nonwoven_input`)

The declared spunbond-meltblown-spunbond construction is recorded independently from single-layer spunbond material because its layer structure and barrier function differ.

- Selected flow: Polypropylene spunbond-meltblown-spunbond nonwoven fabric
- Flow property / unit: Mass / kg
- Amount rule: measured polypropylene SMS nonwoven issued to cutting minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `iso-9092-2026`; `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

###### Flash-spun HDPE nonwoven issued to cutting (`pe_flashspun_nonwoven_input`)

Flash-spun high-density polyethylene nonwoven enters only when named in the BOM and supplier specification. Its lot mass and areal density are recorded independently.

- Selected flow: High-density polyethylene flash-spun nonwoven fabric
- Flow property / unit: Mass / kg
- Amount rule: measured flash-spun HDPE nonwoven issued to cutting minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `iso-9092-2026`; `afw-pefcr-3-1-2025`

###### PU-coated polyester textile issued to cutting (`pu_coated_polyester_fabric_input`)

Polyurethane-coated polyester textile is a distinct converted material input. Declare substrate construction, polyurethane system, coating side, coating mass and any membrane layer.

- Selected flow: Polyurethane-coated polyester textile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured PU-coated polyester textile issued to cutting minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `un-cpc-3-0-2025`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025`

###### PVC-coated polyester textile issued to cutting (`pvc_coated_polyester_fabric_input`)

Polyvinyl-chloride-coated polyester textile is recorded separately from polyurethane-coated material. Retain substrate, coating mass, plasticizer system and supplier lot.

- Selected flow: Polyvinyl-chloride-coated polyester textile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured PVC-coated polyester textile issued to cutting minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `un-cpc-3-0-2025`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025`

###### PTFE-laminated polyester textile issued to cutting (`ptfe_laminated_polyester_fabric_input`)

Polytetrafluoroethylene-laminated polyester textile is recorded as one declared laminate product. Retain substrate construction, membrane type, adhesive layer and laminate mass.

- Selected flow: Polytetrafluoroethylene-laminated polyester textile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured PTFE-laminated polyester textile issued to cutting minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `un-cpc-3-0-2025`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025`

###### Nitrile-rubber-coated polyester textile issued to cutting (`nitrile_rubber_coated_polyester_fabric_input`)

Nitrile-rubber-coated polyester textile crosses the cutting boundary only when the declared garment uses this rubber system. Retain substrate, rubber formulation family and coating mass.

- Selected flow: Nitrile-rubber-coated polyester textile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured nitrile-rubber-coated polyester textile issued to cutting minus unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `un-cpc-3-0-2025`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025`

###### Electricity consumed by cutting equipment (`cutting_electricity_input`)

Electricity crosses the cutting boundary through inspection tables, cutting equipment, extraction equipment and directly supporting controls. Use a dedicated meter or an auditable physical allocation.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity consumed by the cutting batch
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

###### Cut garment panels transferred to assembly (`cut_garment_panels_output`)

Accepted cut panels leave cutting as one measured foreground intermediate tied to the garment style, size mix and complete material BOM.

- Selected flow: Cut CPC 28250 garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured mass of accepted cut panels transferred to garment assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

###### Wool felt cutting offcuts (`wool_felt_offcuts_output`)

Wool felt offcuts leave cutting as a separately weighed waste material with their actual destination recorded.

- Selected flow: Waste wool felt offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured wool felt offcuts generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Polyester felt cutting offcuts (`polyester_felt_offcuts_output`)

Needle-punched polyester felt offcuts are segregated from wool felt and nonwoven wastes so their composition and treatment remain auditable.

- Selected flow: Waste needle-punched polyester felt offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured polyester felt offcuts generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Polypropylene spunbond cutting offcuts (`pp_spunbond_offcuts_output`)

Single-layer polypropylene spunbond offcuts are weighed independently and linked to the same material lot used as input.

- Selected flow: Waste polypropylene spunbond nonwoven offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured polypropylene spunbond nonwoven offcuts generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Polypropylene SMS cutting offcuts (`pp_sms_offcuts_output`)

Polypropylene SMS offcuts are not merged with single-layer spunbond waste because their multilayer construction is different.

- Selected flow: Waste polypropylene spunbond-meltblown-spunbond nonwoven offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured polypropylene SMS nonwoven offcuts generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Flash-spun HDPE cutting offcuts (`pe_flashspun_offcuts_output`)

Flash-spun HDPE offcuts are separately weighed and retain the supplier material identity and treatment destination.

- Selected flow: Waste high-density polyethylene flash-spun nonwoven offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured flash-spun HDPE nonwoven offcuts generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`

###### PU-coated textile cutting offcuts (`pu_coated_fabric_offcuts_output`)

PU-coated polyester offcuts retain both substrate and coating identity and are not merged with uncoated polyester waste.

- Selected flow: Waste polyurethane-coated polyester textile offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured PU-coated polyester textile offcuts generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`; `eu-textile-bat-2022`

###### PVC-coated textile cutting offcuts (`pvc_coated_fabric_offcuts_output`)

PVC-coated polyester offcuts are weighed separately because their coating chemistry changes waste identity and treatment compatibility.

- Selected flow: Waste polyvinyl-chloride-coated polyester textile offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured PVC-coated polyester textile offcuts generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`; `eu-textile-bat-2022`

###### PTFE-laminated textile cutting offcuts (`ptfe_laminated_fabric_offcuts_output`)

PTFE-laminated polyester offcuts retain the laminate construction and are recorded separately from coated textile wastes.

- Selected flow: Waste polytetrafluoroethylene-laminated polyester textile offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured PTFE-laminated polyester textile offcuts generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`; `eu-textile-bat-2022`

###### Nitrile-rubber-coated textile cutting offcuts (`nitrile_rubber_coated_fabric_offcuts_output`)

Nitrile-rubber-coated polyester offcuts are weighed as their own waste material and linked to the specified treatment destination.

- Selected flow: Waste nitrile-rubber-coated polyester textile offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured nitrile-rubber-coated polyester textile offcuts generated by the cutting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `afw-pefcr-3-1-2025`; `eu-textile-bat-2022`

##### Elementary flows

### Process: Garment joining and component assembly (`garment_assembly`)

#### Inputs

##### Product flows

###### Cut garment panels received by assembly (`cut_garment_panels_input`)

The measured intermediate panel set enters assembly with garment style, size mix and material-lot traceability preserved.

- Selected flow: Cut CPC 28250 garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured accepted cut-panel mass received from material cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Polyester sewing thread consumed in assembly (`sewing_thread_input`)

Polyester sewing thread enters only for stitched seams or component attachment. Record the actual thread specification and net issued mass.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured thread issued to the assembly batch minus unused thread returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

###### Nylon-coil zipper installed in the garment (`zipper_input`)

The specified zipper crosses the assembly boundary only when present in the BOM. Its tape, coil, slider and closure mass are retained as one purchased component identity.

- Selected flow: Polyester-tape nylon-coil garment zipper
- Flow property / unit: Mass / kg
- Amount rule: measured mass of installed nylon-coil zippers from component issue and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

###### Polyester-elastane elastic tape installed in the garment (`elastic_tape_input`)

Elastic tape enters for cuffs, waist, hood, ankles or another declared garment location. Record composition, width and installed mass.

- Selected flow: Polyester-elastane garment elastic tape
- Flow property / unit: Mass / kg
- Amount rule: measured mass of installed polyester-elastane elastic tape
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Polyamide hook-and-loop fastener installed in the garment (`hook_loop_fastener_input`)

The declared hook-and-loop closure is measured separately from zippers and snaps so its polymer and installed mass remain explicit.

- Selected flow: Polyamide hook-and-loop garment fastener
- Flow property / unit: Mass / kg
- Amount rule: measured mass of installed polyamide hook-and-loop fastener
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

###### Stainless-steel snap fastener installed in the garment (`snap_fastener_input`)

Stainless-steel snaps are converted from counted pieces to installed mass using the lot-specific component mass rule.

- Selected flow: Stainless-steel garment snap fastener
- Flow property / unit: Mass / kg
- Amount rule: count of installed snaps multiplied by measured mean mass per snap from the same component lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Printed polyester care label installed in the garment (`care_label_input`)

The durable care or identity label is recorded as a physical component when it remains with the product at the factory gate.

- Selected flow: Printed polyester garment care label
- Flow property / unit: Mass / kg
- Amount rule: count of installed labels multiplied by measured mean label mass from the same specification lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_materials`
- Sources: `eu-textile-fibre-regulation-1007-2011`; `afw-pefcr-3-1-2025`

###### EVA hot-melt adhesive consumed in assembly (`eva_hot_melt_adhesive_input`)

Ethylene-vinyl-acetate hot-melt adhesive is recorded only when that exact chemistry is declared for panel, elastic or component bonding. A different adhesive chemistry requires its own separate exchange.

- Selected flow: Ethylene-vinyl-acetate hot-melt garment adhesive
- Flow property / unit: Mass / kg
- Amount rule: measured EVA hot-melt adhesive issued to the batch minus unused adhesive returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `afw-pefcr-3-1-2025`

###### Electricity consumed by assembly equipment (`assembly_electricity_input`)

Electricity supplies sewing machines, ultrasonic welders, hot-melt applicators and directly supporting controls included in the declared production route.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity consumed by garment assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_electricity`
- Sources: `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled garment transferred from joining (`assembled_garment_output`)

The joined garment leaves assembly before any separate seam-tape operation. Its recorded identity includes the actual stitched, bonded or ultrasonic-welded seam configuration.

- Selected flow: Assembled CPC 28250 garment before seam barrier treatment
- Flow property / unit: Mass / kg
- Amount rule: measured mass of assembled garments transferred to seam treatment or final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

##### Waste flows

###### Polyester sewing-thread trimmings (`waste_sewing_thread_output`)

Thread ends and rejected stitching thread leave assembly as a separately weighed polyester waste exchange.

- Selected flow: Waste polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured polyester sewing-thread waste generated by the assembly batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `afw-pefcr-3-1-2025`

##### Elementary flows

### Process: Seam barrier treatment (`seam_barrier_treatment`)

#### Inputs

##### Product flows

###### Assembled garment supplied for seam treatment (`assembled_garment_sealing_input`)

The assembled garment enters this conditional process only when a separate seam-tape or barrier-sealing operation is specified.

- Selected flow: Assembled CPC 28250 garment before seam barrier treatment
- Flow property / unit: Mass / kg
- Amount rule: measured assembled-garment mass entering the seam-treatment batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seam_treatment`
- Sources: `cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

###### PU seam-sealing tape applied to seams (`thermoplastic_seam_tape_input`)

Polyurethane thermoplastic seam tape is a distinct purchased material applied over declared seam locations. A different tape chemistry requires its own exchange rather than substitution into this row.

- Selected flow: Polyurethane thermoplastic garment seam-sealing tape
- Flow property / unit: Mass / kg
- Amount rule: measured seam tape issued to the treatment batch minus unused tape returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seam_treatment`
- Sources: `cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

###### Electricity consumed by seam-tape equipment (`sealing_electricity_input`)

Electricity supplies the seam-tape heater, rollers, controls and directly supporting equipment for the declared treated seam length.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity consumed by seam barrier treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seam_treatment`
- Sources: `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Seam-sealed garment transferred to inspection (`seam_sealed_garment_output`)

The treated garment leaves with declared tape chemistry, seam locations, machine settings and acceptance evidence linked to the batch.

- Selected flow: Seam-sealed CPC 28250 garment
- Flow property / unit: Mass / kg
- Amount rule: measured mass of seam-sealed garments transferred to final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seam_treatment`
- Sources: `cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

##### Waste flows

###### PU seam-tape offcuts (`waste_seam_tape_output`)

Start-up pieces, edge trims and rejected polyurethane seam tape leave as a separately weighed waste material.

- Selected flow: Waste polyurethane thermoplastic seam-sealing tape
- Flow property / unit: Mass / kg
- Amount rule: measured waste PU seam-sealing tape generated by the treatment batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seam_treatment`
- Sources: `afw-pefcr-3-1-2025`

##### Elementary flows

### Process: Final inspection and acceptance (`final_inspection`)

#### Inputs

##### Product flows

###### Untaped assembled garment supplied to inspection (`assembled_garment_inspection_input`)

An assembled garment enters final inspection directly when the technology pack confirms that no separate seam-tape process applies.

- Selected flow: Assembled CPC 28250 garment before seam barrier treatment
- Flow property / unit: Mass / kg
- Amount rule: measured assembled-garment mass entering final inspection without a separate seam-tape step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_inspection`
- Sources: `cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

###### Seam-sealed garment supplied to inspection (`seam_sealed_garment_inspection_input`)

A seam-sealed garment enters with its treatment-batch identity so seam appearance and applicable barrier evidence can be checked against the declared specification.

- Selected flow: Seam-sealed CPC 28250 garment
- Flow property / unit: Mass / kg
- Amount rule: measured seam-sealed garment mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_inspection`
- Sources: `cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

###### Electricity consumed by inspection equipment (`inspection_electricity_input`)

Electricity supplies inspection lighting, test devices and directly supporting controls included in the final acceptance process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity consumed by final inspection and acceptance testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_inspection`
- Sources: `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted unpackaged garment released by inspection (`accepted_unpacked_garment_output`)

The garment becomes accepted only after required dimensional, seam, closure, appearance and claimed-performance checks pass.

- Selected flow: Accepted unpackaged CPC 28250 garment
- Flow property / unit: Mass / kg
- Amount rule: measured accepted unpackaged garment mass released to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_inspection`
- Sources: `cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

##### Waste flows

###### Nonconforming garment rejected at final inspection (`nonconforming_garment_output`)

Garments rejected from the accepted output are weighed separately with defect reason, rework decision and final disposition retained.

- Selected flow: Waste nonconforming CPC 28250 garment
- Flow property / unit: Mass / kg
- Amount rule: measured mass of nonconforming garments leaving the accepted-product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_inspection`
- Sources: `afw-pefcr-3-1-2025`

##### Elementary flows

### Process: Product packaging (`packaging`)

#### Inputs

##### Product flows

###### Accepted unpackaged garment supplied to packaging (`accepted_unpacked_garment_input`)

The measured accepted garment enters packaging without rejected products in its mass.

- Selected flow: Accepted unpackaged CPC 28250 garment
- Flow property / unit: Mass / kg
- Amount rule: measured accepted unpackaged garment mass received from final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

###### LDPE garment polybag used for packaging (`ldpe_polybag_input`)

The low-density polyethylene bag is recorded only when it accompanies the garment out of the factory. Film thickness, recycled content and bag mass remain product qualifiers.

- Selected flow: Low-density polyethylene garment polybag
- Flow property / unit: Mass / kg
- Amount rule: measured LDPE garment-polybag mass consumed by accepted packaged output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

###### Printed paper hangtag attached for shipment (`paper_hangtag_input`)

The printed paper hangtag is recorded separately from the sewn care label and from corrugated transport packaging.

- Selected flow: Printed paper garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: count of attached paper hangtags multiplied by measured mean hangtag mass from the same specification lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

###### Corrugated cardboard carton used for shipment (`corrugated_carton_input`)

Corrugated cartons crossing the factory gate with the product are weighed from issue and return records and kept distinct from paper hangtags.

- Selected flow: Corrugated cardboard garment shipping carton
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated carton mass consumed for the accepted shipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

###### Reusable wood pallet allocated to the shipment (`wood_pallet_input`)

The pallet burden is calculated from the actual pallet specification, documented completed reuse cycles and packaged product mass carried by the shipment.

- Selected flow: Reusable wood shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: pallet mass divided by documented completed reuse cycles and allocated by accepted packaged product mass on the shipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

###### LDPE stretch film used for palletization (`ldpe_stretch_film_input`)

Low-density polyethylene stretch film used around the shipment pallet is measured independently from individual garment polybags.

- Selected flow: Low-density polyethylene pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured LDPE pallet stretch-film mass consumed for the accepted shipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

###### Electricity consumed by packaging equipment (`packaging_electricity_input`)

Electricity supplies sealing, labelling, weighing and pallet-wrapping equipment included in the shipment packaging process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity consumed by packaging accepted garments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished packaged garment (`finished_packaged_garment_output`)

The accepted packaged garment leaves the foreground system at the factory gate as the reference product. Its Tiangong identity is the dual-confirmed CPC 28250 Product flow with Mass as quantitative reference.

- Selected flow: Garments made up of felt or nonwovens; garments made up of textile fabrics impregnated or coated with plastics, rubber or other materials `3c972aa8-6aa5-4724-8a61-694aef1b09fe`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted packaged output mass; exactly 1 kg after normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished packaged garment at the manufacturing factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output`
- Sources: `un-cpc-3-0-2025`; `afw-pefcr-3-1-2025`

##### Waste flows

###### Waste LDPE garment-polybag film (`waste_ldpe_polybag_output`)

Damaged or excess garment-polybag film leaves packaging as a separate waste exchange with actual mass and destination recorded.

- Selected flow: Waste low-density polyethylene garment-polybag film
- Flow property / unit: Mass / kg
- Amount rule: measured waste LDPE garment-polybag film generated during packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

###### Waste printed paper hangtags (`waste_paper_hangtag_output`)

Rejected or excess printed paper hangtags are weighed separately from corrugated carton waste.

- Selected flow: Waste printed paper garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: measured waste printed paper hangtags generated during packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

###### Waste corrugated cardboard cartons (`waste_corrugated_cardboard_output`)

Damaged corrugated cartons and carton trimmings generated before shipment are weighed as their own waste material.

- Selected flow: Waste corrugated cardboard garment carton
- Flow property / unit: Mass / kg
- Amount rule: measured waste corrugated cardboard generated during packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

###### Waste LDPE pallet stretch film (`waste_ldpe_stretch_film_output`)

Start-up and damaged pallet stretch film is recorded separately from garment-polybag film because its use and collection point differ.

- Selected flow: Waste low-density polyethylene pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured waste LDPE pallet stretch film generated during packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `afw-pefcr-3-1-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_processes_first` | foreground_processes | Avoid allocation by keeping cutting, assembly, seam treatment, inspection and packaging as separate process records and by separating materially different production routes and sites. | `afw-pefcr-3-1-2025` |
| `allocation_use_direct_records` | materials_and_components | Assign material and component inputs by batch issue, controlled return, installed count-to-mass conversion and measured waste records before using any shared-site allocation. | `afw-pefcr-3-1-2025` |
| `allocation_shared_electricity` | shared_electricity | Use process submetering where available; otherwise allocate a shared meter by documented equipment operating time multiplied by measured demand, and disclose the driver and reconciliation to the meter total. | `afw-pefcr-3-1-2025` |
| `allocation_multi_site_electricity_mix` | multi_site_manufacturing | When aggregating multiple manufacturing sites, calculate the electricity mix as a production-mass-weighted average and retain each site's energy records. | `afw-pefcr-3-1-2025` |
| `allocation_waste_no_avoided_burden` | manufacturing_wastes | Report each waste output and its destination without an avoided-product credit inside this gate-to-gate package; any downstream recovery benefit belongs to an explicitly linked downstream model. | `afw-pefcr-3-1-2025` |
| `allocation_reusable_pallet` | reusable_pallet | Allocate reusable pallet production by the actual pallet mass and documented completed reuse cycles, then assign the shipment share by accepted packaged product mass. | `afw-pefcr-3-1-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_materials` | `material_cutting` | converted material inputs, accepted panels and material-specific offcuts | BOM, purchase lot, issue/return ticket, scale record, cutting batch and waste destination record | garment_style; size_mix; material_id; substrate_fibre; construction; coating_chemistry; areal_density; issued_mass; returned_mass; accepted_panel_mass; offcut_mass; destination | Reconcile calibrated mass records for each material identity and cutting batch. | kg | each batch | representative production period, normally at least 12 months | every cutting site and controlled contractor | Sum each atomic material exchange by batch and divide by accepted packaged output mass. | calibration record; BOM revision; lot trace; issue/return reconciliation; waste receipt |
| `cp_cutting_electricity` | `material_cutting` | cutting electricity | submeter or shared meter plus equipment log | meter_start; meter_end; equipment_id; operating_time; measured_demand; batch_id; site | Read a dedicated submeter or apply the documented physical driver and reconcile to the site meter. | kWh | each batch or meter interval | same period as production | every cutting site | Allocate to cutting batches, sum and normalize to accepted packaged output mass. | meter record; equipment log; allocation worksheet |
| `cp_assembly_materials` | `garment_assembly` | panels, thread, closures, elastic, label, adhesive, assembled garment and thread waste | BOM, technology pack, component issue/return record, installed count, sample mass, scale record and production log | garment_style; joining_method; component_id; issued_mass; returned_mass; installed_count; mean_piece_mass; assembled_mass; thread_waste_mass | Measure issued and returned materials; convert counts only under the component-mass rule. | kg | each batch | same period as production | every assembly site and controlled contractor | Calculate net consumption by atomic component and normalize to accepted packaged output mass. | approved technology pack; component lot; scale calibration; batch reconciliation |
| `cp_assembly_electricity` | `garment_assembly` | assembly electricity | submeter or shared meter plus equipment log | meter_start; meter_end; sewing_hours; ultrasonic_welder_hours; adhesive_applicator_hours; measured_demand; batch_id | Meter assembly electricity or allocate by auditable equipment time and measured demand. | kWh | each batch or meter interval | same period as production | every assembly site | Allocate to assembly batches, reconcile to meter total and normalize. | meter record; equipment log; allocation worksheet |
| `cp_seam_treatment` | `seam_barrier_treatment` | garment input/output, PU seam tape, tape waste and electricity | seam specification, tape issue/return, treated-length record, scale record, meter and acceptance log | seam_configuration; tape_id; issued_mass; returned_mass; tape_waste_mass; garment_input_mass; garment_output_mass; treated_length; electricity | Collect material and energy records only for batches receiving a separate seam treatment. | kg; m; kWh | each treated batch | same period as production | every seam-treatment site | Reconcile tape and garment mass, allocate electricity and normalize to accepted packaged output mass. | technology pack; tape certificate; meter record; seam acceptance record |
| `cp_final_inspection` | `final_inspection` | garment inputs, accepted output, rejects and inspection electricity | inspection lot, scale record, defect/rework log, test report and meter record | garment_style; input_mass; accepted_mass; rejected_mass; defect_code; rework_status; test_method; result; electricity | Weigh accepted and rejected outputs separately and retain evidence for each claimed performance check. | kg; kWh | each inspection lot | same period as production | every final-inspection site | Sum accepted and rejected mass and normalize exchanges to packaged accepted output. | inspection report; test report; scale calibration; nonconformance disposition |
| `cp_packaging` | `packaging` | unpackaged garment, each packaging input, packaging wastes and electricity | packaging BOM, issue/return record, item count, sample mass, pallet register, scale and meter record | garment_mass; packaging_id; packaging_mass; item_count; sample_mean_mass; pallet_mass; completed_reuse_cycles; shipment_product_mass; waste_mass; electricity | Measure each packaging material independently and calculate counted or reusable items from collected records. | kg; kWh | each shipment batch | same period as production | every packaging site | Sum each material and waste exchange, apply documented pallet reuse, allocate electricity and normalize. | packaging specification; scale calibration; pallet register; meter record; shipment record |
| `cp_reference_output` | `packaging` | accepted finished packaged garment | calibrated factory-gate scale and release record | product_id; CPC_code; lot_id; packaged_mass; accepted_quantity; release_status; timestamp | Weigh only accepted packaged CPC 28250 output at release. | kg | each release lot | same period as all foreground data | final manufacturing gate | Sum accepted mass and set the normalized reference output to exactly 1 kg. | scale calibration; release certificate; CPC identity review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | every foreground exchange | normalized exchange = batch exchange amount / accepted packaged output mass for the same reconciled production scope | atomic exchange amount; accepted packaged output mass | exchange per 1 kg reference product | `afw-pefcr-3-1-2025` |
| `calc_net_material_consumption` | issued materials and components | net consumption = issued mass − mass returned to controlled stock; do not subtract offcuts that leave as waste outputs | issued mass; controlled return mass | net material input | `afw-pefcr-3-1-2025` |
| `calc_count_to_component_mass` | counted snaps, labels or equivalent specified pieces | installed mass = installed count × measured mean mass per item from the same specification lot | installed count; sample item masses; sample count | installed component mass | `afw-pefcr-3-1-2025` |
| `calc_material_specific_cutting_balance` | each cutting material | input mass = returned unused mass + accepted panel mass attributable to the material + material-specific offcut mass + documented inventory change; investigate any residual | issue, return, panel, offcut and inventory-change mass | material-balance residual | `afw-pefcr-3-1-2025` |
| `calc_shared_electricity` | shared process meter | process electricity = shared meter total × process physical driver / sum of drivers, where driver = equipment operating time × measured demand | meter total; equipment time; measured demand | allocated process electricity | `afw-pefcr-3-1-2025` |
| `calc_reusable_pallet_mass` | reusable wood pallet | allocated pallet mass = pallet mass / documented completed reuse cycles × shipment share of accepted packaged product mass | pallet mass; completed reuse cycles; shipment accepted product mass | pallet mass assigned to reference output | `afw-pefcr-3-1-2025` |
| `calc_bom_completeness` | product BOM | completeness = sum of explicitly identified component masses / finished unpackaged garment mass; main fabrics, lining, padding, electronic parts and metals are checked independently for full identity coverage | component masses; finished unpackaged garment mass; component roles | BOM completeness and mandatory-component coverage | `afw-pefcr-3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain CPC scope review, garment style, intended use, service-life class, size basis, material family, exact substrate/coating identity, joining route, seam specification and packaging configuration. | product specification; BOM; technology pack; classification review |
| `dq_bom_coverage` | materials and components | Primary BOM data shall cover at least 95% of product mass and 100% of main fabrics, lining, padding, electronic parts and metals when present; every omitted share is disclosed. | BOM completeness calculation and supplier records |
| `dq_material_specificity` | felt, nonwoven and coated/laminated textiles | Do not use a generic material-family row for an actual input. Add a separate atomic exchange when fibre, polymer, coating, membrane, rubber or laminate identity differs from the listed candidates. | supplier specification; safety/technical data; lot certificate |
| `dq_temporal_representativeness` | all foreground records | Use one consistent representative production period, normally at least 12 consecutive months, or disclose and justify a shorter campaign for a new or seasonal product. | dated production, purchase, meter and waste records |
| `dq_site_completeness` | manufacturing network | Include every owned or contracted site performing cutting, assembly, seam treatment, final inspection or packaging for the declared output. | supplier/site list; production orders; contractor records |
| `dq_measurement_traceability` | measured mass and energy | Retain calibration status, measurement timestamp, lot/batch identity, unit conversion and reconciliation for every material, waste, output and meter record. | calibration certificates; raw readings; reconciliation worksheets |
| `dq_protective_claims` | garments with a protective or barrier claim | Retain the applicable test method, specimen identity, seam/closure configuration, result, laboratory identity and link from tested construction to the production batch. | accredited or otherwise declared laboratory report; quality-release record |
| `dq_waste_destination` | each waste output | Record waste composition, contamination, measured mass, destination, treatment contract and receipt; do not merge coated, laminated, rubber-coated or uncoated material wastes. | waste log; transfer note; treatment receipt |
| `dq_electricity_identity` | electricity inputs | Use supplier-specific electricity only with reliable contractual evidence; otherwise use the site-country residual consumption mix and disclose meter allocation. | invoice or contract; meter record; residual-mix source; allocation worksheet |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Require Product flow UUID `3c972aa8-6aa5-4724-8a61-694aef1b09fe`, exact CPC 28250, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` and kg. | `un-cpc-3-0-2025` |
| `validate_required_qualifiers` | product_metadata | Reject a data package missing garment type, service-life class, primary material construction, substrate fibre, coating/membrane chemistry where applicable, joining method, seam configuration, intended use, site or packaging basis. | `un-cpc-3-0-2025`; `iso-9092-2026`; `cdc-niosh-protective-clothing-selection` |
| `validate_cpc_scope` | reference_product | Confirm the output is a garment made from felt, nonwoven or a textile impregnated/coated/laminated with a declared material; reject material rollstock, headgear, footwear and technical textile articles. | `un-cpc-3-0-2025` |
| `validate_atomic_material_identity` | material_inputs_and_wastes | Require one chemically and physically specific exchange for every actual primary material and its offcut waste; an unlisted material must be added as a new row and must not be assigned to a nearest generic candidate. | `iso-9092-2026`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025` |
| `validate_process_route` | process_inventory | Require `material_cutting`, `garment_assembly`, `final_inspection` and `packaging`; require `seam_barrier_treatment` when a separate seam-tape operation occurs and document non-applicability otherwise. | `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection` |
| `validate_on_site_converting` | system_boundary | Reject use of this garment-only inventory as complete when on-site coating, impregnation, lamination, wet finishing or solvent treatment lacks a separate process with specific inputs, wastes and emissions. | `eu-textile-bat-2022` |
| `validate_bom_completeness` | product_BOM | Require the BOM coverage calculation and at least 95% mass coverage plus complete identity for all main fabrics, lining, padding, electronic parts and metals present. | `afw-pefcr-3-1-2025` |
| `validate_mass_balance` | cutting_assembly_and_acceptance | Reconcile each primary material from issue through controlled return, accepted intermediate, material-specific waste and inventory change; reconcile garment inputs to accepted and nonconforming outputs. | `afw-pefcr-3-1-2025` |
| `validate_seam_and_closure_claims` | claimed_protective_performance | When barrier or protective performance is claimed, require evidence tied to the exact material, seam, tape, zipper/closure and garment construction; material-only results are insufficient for an overall garment claim. | `cdc-niosh-protective-clothing-selection` |
| `validate_electricity_records` | electricity_inputs | Require site, meter interval, kWh, process allocation and electricity-product identity for each process electricity row. | `afw-pefcr-3-1-2025` |
| `validate_packaging_separation` | packaging | Require individual mass records for LDPE garment polybags, paper hangtags, corrugated cartons, reusable wood pallets and LDPE stretch film when present; do not accept one aggregate packaging amount. | `afw-pefcr-3-1-2025` |
| `validate_waste_separation` | waste_outputs | Require each offcut, thread, seam-tape, rejected-garment and packaging waste to retain its own material identity, mass and destination. | `afw-pefcr-3-1-2025`; `eu-textile-bat-2022` |
| `validate_no_unverified_uuid` | tiangong_identity | Reject any non-reference UUID unless both hybrid retrieval and state-100 direct retrieval confirm the exact public flow identity, flow type, classification and quantitative property. |  |
| `validate_foreground_amounts` | inventory_amounts | Require a foreground record or declared calculation for every included exchange; do not substitute an AI-authored value or per-piece default for the one-kilogram product-specific record. | `afw-pefcr-3-1-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and site-specific foreground manufacturing data package for one declared CPC 28250 garment construction |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` after review and linked with exact upstream material datasets and downstream distribution/use/end-of-life models |
| allowed_use | Modelling accepted garment manufacture from received converted materials through packaged factory-gate output for the declared BOM, joining route, sites and period |
| excluded_use | Generic proxy for an unspecified felt/nonwoven/coated material; proof of protective performance; material coating or lamination not inventoried on site; distribution, use or end-of-life modelling |
| required_metadata | PCR id; CPC 28250; reference UUIDs; garment design and size basis; reusable/limited-use status; exact BOM; substrate/coating/membrane identity; joining and seam route; site list; temporal coverage; allocation methods; packaging configuration; waste destinations |
| required_quality_disclosure | BOM coverage; unresolved material or UUID identities; missing site records; measurement and allocation uncertainty; rejected-output treatment; test evidence for claims; upstream dataset choices; any excluded on-site operation |
| update_trigger | Change in primary material or coating chemistry, garment design, joining or seam technology, claimed performance, supplier/site, packaging system, waste treatment, meter allocation, production period or reference-flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | Exact CPC 28250 product scope, covered material families and exclusions from neighbouring product classes |
| `afw-pefcr-3-1-2025` | `official_guidance` | Technical Secretariat for Apparel and Footwear, *Product Environmental Footprint Category Rules: Apparel and Footwear*, version 3.1, 29 April 2025. https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf (retrieved 2026-08-13); European Commission announcement: https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en | BOM coverage, company-specific manufacturing data, cutting/assembly/packaging process decomposition, step-specific losses, electricity hierarchy, allocation, packaging types and data quality |
| `iso-9092-2026` | `standard` | ISO 9092:2026, *Nonwovens — Vocabulary*. https://www.iso.org/standard/90537.html (retrieved 2026-08-13) | Nonwoven terminology and required distinction between nonwovens and other material constructions |
| `eu-textile-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-13) | Separation and disclosure of coating, lamination, finishing and thermal treatment; input/output inventories; material, chemical, energy, water, waste and emission records |
| `eu-textile-fibre-regulation-1007-2011` | `official_guidance` | Regulation (EU) No 1007/2011 on textile fibre names and related labelling and marking of fibre composition. http://data.europa.eu/eli/reg/2011/1007/oj (retrieved 2026-08-13) | Fibre and multi-component identity, lining/component declarations, label traceability and finished-product composition checks |
| `cdc-niosh-protective-clothing-selection` | `official_guidance` | US CDC/NIOSH, *Selecting Protective Clothing*, updated 2024. https://www.cdc.gov/niosh/healthcare/protective-clothing/selection.html (retrieved 2026-08-13) | Conditional protective-garment design qualifiers; sewn, bound, taped and ultrasonic-welded seam routes; seam/closure barrier and strength evidence |
