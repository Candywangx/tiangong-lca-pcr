---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.t-shirts-singlets-and-other-vests-knitted-or-crocheted
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# T-shirts, singlets and other vests, knitted or crocheted

## 1. Scope and Applicability

This PCR governs production of foreground data packages for finished knitted or crocheted T-shirts, singlets, undershirts, tank tops, and comparable vests. It applies to consumer and professional garments of any declared fibre composition, size range, colour, and finish when the garment is ready for sale or shipment at the manufacturing gate.

The foreground boundary begins with finished knitted or crocheted fabric, thread, trims, accessories, packaging, and other purchased inputs delivered to the garment-manufacturing system. It covers material receipt and preparation, cutting, sewing and assembly, conditional garment-stage wet processing or finishing, quality control, packaging, manufacturing waste, and conditional on-site wastewater treatment. Fibre production, yarn production, knitting, fabric-stage dyeing and finishing, purchased energy production, and packaging manufacture are represented by traceable upstream datasets unless they occur under the declared foreground operator's control.

The PCR does not by itself represent distribution, retail, consumer use and care, reuse, or end-of-life. A downstream lifecycle model may add those stages. Fabric sold as fabric, woven garments, hosiery, sweaters and pullovers, babies' garments, other knitted apparel, leather or fur apparel, and non-textile garments are outside this canonical product boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.t-shirts-singlets-and-other-vests-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28225, exact mapping context |
| covered_products | Finished knitted or crocheted T-shirts, singlets, undershirts, tank tops, and other vests for consumer or professional use |
| excluded_products | Woven or non-knitted tops; hosiery; sweaters, pullovers and cardigans; babies' garments; other knitted garments and accessories; fur, leather, plastics-only or non-textile apparel; fabric sold as an intermediate product |
| representative_product | A finished short-sleeved knitted T-shirt of declared fibre composition, size or size mix, colour, finish, and individual garment mass |
| production_route | Delivered knitted fabric and components -> receipt and preparation -> cutting -> sewing and assembly -> conditional garment wet finishing -> quality control and packaging |
| market_state | Saleable finished garment at the manufacturing gate; product mass excludes distribution and consumer packaging unless explicitly stated otherwise |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished, saleable knitted or crocheted T-shirts, singlets, or other vests at the manufacturing gate |
| How much | 1 kg net garment mass, excluding packaging |
| How well | Conforming to the declared product specification and quality acceptance criteria, with composition, construction, size, colour, finish, and moisture condition stated |
| How long or cycle | One declared production period or batch; expected lifetime, number of uses, and care scenario are separate downstream-use qualifiers |
| reference_flow_link | Mass-normalized manufacturing reference flow; convert to an item or one-day-of-wear functional unit only with measured garment mass and an explicitly documented lifetime and use scenario |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished garment |
| Reference product flow | T-shirts, singlets and other vests, knitted or crocheted `4de987ca-f5f5-4001-a465-07f12ef9775f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment type; fibre composition and mass percentages; knit or crochet construction; size or production-weighted size mix; individual garment mass or distribution; colour and dyeing/printing route; finishing treatments; finished-product moisture condition; manufacturing site and geography; included production steps; reporting period; packaging exclusion; expected uses and care scenario when projected to a use-based functional unit |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net accepted garment mass after final conditioning and before packaging. Normalize the foreground inventory to exactly 1 kg net finished garment. |
| `packaging_mass_separation` | Consumer and distribution packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure packaging separately by material. Do not include packaging mass in the 1 kg reference product. |
| `item_to_mass_conversion` | Records available only as garment counts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using measured net mass by product and size stratum from the same reporting period; retain sample counts, weighing method, mean mass, and variability. |
| `mass_composition_closure` | Fibre, trim, accessory, and product content declarations | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and mass % | Report composition on a consistent net-product basis and reconcile declared constituent masses to the measured net garment mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished knitted or crocheted fabric, sewing thread, trims, accessories, packaging, and other purchased inputs delivered to the first foreground garment-manufacturing operation |
| starting_condition_role | Traceable upstream product inputs to garment making; not burden-free raw materials |
| product_classification_scope | The finished reference product is CPC 3.0 28225; upstream fabrics, yarns, chemicals, utilities, packaging, transport, and waste-treatment services retain their own identities |
| recursive_input_rule | If an input is already a finished CPC 28225 garment, record it as a separately identified reused, reworked, or intermediate garment input and do not recursively rebuild its history inside this foreground package |
| upstream_dataset_requirement | Require representative upstream datasets for fabric and other main materials, fibre and yarn production where not already included in the fabric dataset, fabric wet processing, purchased energy, packaging manufacture, inbound transport, and off-site waste treatment |
| disclosure | Declare which spinning, knitting, dyeing, printing, finishing, packaging production, transport, wastewater treatment, and waste-treatment steps are inside or outside operator control; disclose geography, technology, reporting period, and any generic or proxy datasets |

### Normative Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_foreground` | Garment manufacturing | Include receipt and preparation, cutting, sewing and assembly, quality control, packaging, and the wastes generated by those operations. | `epd-international-pcr-2024-03-apparel` |
| `boundary_conditional_operations` | Garment-stage finishing and treatment | Include garment washing, dyeing, printing, curing, coating, drying, on-site utilities, and wastewater treatment whenever performed under foreground control; otherwise identify representative upstream or service datasets and prevent double counting. | `epd-international-pcr-2024-03-apparel` |
| `boundary_upstream_traceability` | Purchased materials and services | Do not treat delivered fabric, thread, trims, packaging, energy, transport, or waste treatment as burden-free; link them to representative upstream datasets or disclose a data gap. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `boundary_inventory_completeness` | Foreground inventory | Account for at least 99% of product-content mass and energy use and assess exclusions against environmental relevance; document every cut-off and the evidence used to verify it. | `epd-international-pcr-2024-03-apparel` |
| `boundary_downstream_separation` | Dataset use | Keep distribution, retail, consumer care, reuse, and end-of-life outside the manufacturing foreground dataset, while preserving metadata needed to connect those stages in a lifecycle model. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_receipt_preparation` | Material receipt and preparation | required | Always | Foreground receipt, verification, conditioning, relaxation, and issue of fabric and components | kg prepared material issued to cutting or assembly |
| `cutting` | Marker making, spreading and cutting | required | Always | Foreground conversion of knitted fabric into garment panels and parts | kg cut components accepted for assembly |
| `garment_assembly` | Sewing and garment assembly | required | Always | Foreground assembly of panels, thread, trims, labels, and accessories | kg assembled garments |
| `garment_wet_finishing` | Garment-stage wet processing and finishing | conditional | Include when washing, dyeing, printing, curing, coating, drying, or another garment-stage finish is performed under foreground control | Foreground finishing and associated utilities, chemicals, emissions, and wastewater | kg accepted wet-finished garments |
| `quality_packaging` | Quality control and packaging | required | Always | Foreground inspection, testing, rework disposition, packing, and release | 1 kg net accepted finished garment |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include when foreground wastewater is treated on site | Foreground treatment of garment-manufacturing wastewater | m3 wastewater treated |

### Process: Material receipt and preparation (`material_receipt_preparation`)

#### Inputs

##### Product flows

###### Delivered knitted or crocheted fabric (`delivered_knitted_fabric`)

Record each fabric construction and composition separately when it crosses the foreground boundary. The exact Tiangong flow remains product-specific and shall be selected from supplier identity, construction, composition, and wet-processing state.

- Selected flow: Knitted or crocheted fabric; UUID unresolved by product specification
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: measured warehouse receipts adjusted for opening and closing inventory and returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional fabric-input screening estimate, replace with foreground mass balance
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.5
  - Upper: 10
  - Unit: kg delivered fabric/kg net accepted finished garment
  - Basis: broad first-pass fabric input before product-specific cutting yield is known
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivered thread, trims, labels, and accessories (`delivered_components`)

Record sewing thread, neck rib, binding, labels, fasteners, elastic, and other components by material and supplier identity. Do not collapse materially different components into one unknown flow.

- Selected flow: Product-specific thread, trim, label, or accessory flow; UUID unresolved by component specification
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured receipts and inventory issues by component type
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional component-input screening estimate, replace with bill-of-material records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg components/kg net accepted finished garment
  - Basis: broad first-pass thread, trim, label, and accessory input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inbound transport service (`inbound_transport`)

Record actual supplier origin, delivery distance, mode, vehicle class, load, and empty-return treatment for main materials when transport is not already included in the upstream dataset.

- Selected flow: Route-specific freight transport service; UUID unresolved by route and vehicle
- Flow property / unit: Transport service / tkm
- Amount rule: delivered mass multiplied by one-way or allocated round-trip distance according to the documented route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional inbound-transport screening estimate, replace with route records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: tkm/kg net accepted finished garment
  - Basis: broad first-pass freight service before supplier routes are known
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fabric and components issued to production (`prepared_materials`)

Record materials accepted and issued to cutting or assembly after inspection, conditioning, and inventory reconciliation.

- Selected flow: Internal prepared-material product flow; no external UUID required
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured issue quantity by material type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg material issued to the next foreground process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Prepared-material output normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg prepared material issued
  - Basis: output normalized to one kg prepared material issued
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Rejected or returned incoming material (`incoming_material_rejects`)

Record rejected, damaged, or returned materials separately from production cutting scrap and identify their disposition.

- Selected flow: Material-specific reject or waste flow; UUID unresolved by material and treatment route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured reject or return mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg received material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Incoming-reject mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg rejected or returned material/kg received material
  - Basis: reject fraction cannot exceed the corresponding received material mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Marker making, spreading and cutting (`cutting`)

#### Inputs

##### Product flows

###### Prepared knitted fabric (`cutting_fabric_input`)

Record fabric issued to each lay, marker, or cutting order.

- Selected flow: Internal prepared knitted-fabric flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fabric issue to cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut components
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional cutting-input screening estimate, replace with cutting-order balance
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 5
  - Unit: kg prepared fabric/kg accepted cut components
  - Basis: broad first-pass cutting input before marker yield is measured
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cutting electricity (`cutting_electricity`)

Record metered or defensibly allocated electricity used by spreading, cutting, extraction, and directly associated equipment.

- Selected flow: Site-specific supplied electricity; UUID unresolved by voltage, geography, and supply contract
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented equipment-meter allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted cut components
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional cutting-electricity screening estimate, replace with metered data
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg accepted cut components
  - Basis: broad first-pass cutting-room electricity before technology and metering are known
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cut garment components (`cut_components`)

Record the mass of panels and parts released to assembly.

- Selected flow: Internal cut-component product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-calculated accepted cut-component mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut components
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `mass-balance-identity`
- Range: Accepted cut-component output normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted cut components
  - Basis: output normalized to one kg accepted cut components
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Cutting off-cuts and fabric scrap (`cutting_textile_waste`)

Record cutting-room off-cuts, defective panels, and usable remnants by material composition and actual destination.

- Selected flow: Composition- and route-specific textile waste; UUID unresolved by composition and treatment route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste mass, cross-checked as fabric input minus accepted cut components and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut components
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `mass-balance-identity`; `epd-international-pcr-2024-03-apparel`
- Range: Provisional cutting-waste screening estimate, replace with cutting-order balance
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 4
  - Unit: kg cutting waste/kg accepted cut components
  - Basis: broad first-pass waste amount consistent with the provisional cutting-input ceiling
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Sewing and garment assembly (`garment_assembly`)

#### Inputs

##### Product flows

###### Cut components, thread, trims, labels, and accessories (`assembly_materials`)

Record the mass of cut panels and each separately identified assembly component consumed by the production order.

- Selected flow: Internal cut components and product-specific purchased components
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured issue minus documented returns to stores
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional assembly-input screening estimate, replace with production-order balance
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 2
  - Unit: kg assembly materials/kg accepted assembled garments
  - Basis: broad first-pass material input before assembly losses are measured
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Assembly electricity (`assembly_electricity`)

Record electricity used by sewing, joining, pressing, local extraction, and directly associated assembly equipment.

- Selected flow: Site-specific supplied electricity; UUID unresolved by voltage, geography, and supply contract
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented equipment-meter allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted assembled garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional assembly-electricity screening estimate, replace with metered data
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg accepted assembled garments
  - Basis: broad first-pass sewing and assembly electricity before technology and metering are known
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted assembled garments (`assembled_garments`)

Record garments accepted for finishing or final quality control.

- Selected flow: Internal assembled-garment product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted garment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Accepted assembled-garment output normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted assembled garments
  - Basis: output normalized to one kg accepted assembled garments
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Assembly scrap and rejects (`assembly_waste`)

Record thread ends, trimmed components, rejected garments, and other assembly waste by material and disposition.

- Selected flow: Material- and route-specific assembly waste; UUID unresolved by composition and treatment route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste and reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional assembly-waste screening estimate, replace with production-order balance
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg assembly waste/kg accepted assembled garments
  - Basis: broad first-pass assembly reject and scrap amount
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Garment-stage wet processing and finishing (`garment_wet_finishing`)

#### Inputs

##### Product flows

###### Garments entering wet finishing (`wet_finishing_garments`)

Record assembled garments transferred into garment washing, dyeing, printing, coating, curing, drying, or comparable finishing.

- Selected flow: Internal assembled-garment product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional wet-finishing transfer screening estimate, replace with batch mass balance
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.5
  - Upper: 2
  - Unit: kg garments entering wet finishing/kg accepted wet-finished garments
  - Basis: broad first-pass transfer ratio allowing declared moisture and process mass changes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wet-finishing water (`wet_finishing_water`)

Record make-up water separately from recirculated water and from wastewater discharge.

- Selected flow: Site- and geography-specific water supply flow; UUID unresolved by source and treatment state
- Flow property / unit: Volume / m3
- Amount rule: metered make-up water allocated to the declared finishing batches
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted wet-finished garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional wet-finishing water screening estimate, replace with metered batch data
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: m3/kg accepted wet-finished garments
  - Basis: broad first-pass make-up-water estimate across optional garment finishing routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wet-finishing electricity (`wet_finishing_electricity`)

Record electricity for wet-processing equipment, pumping, extraction, drying, curing, and directly associated controls.

- Selected flow: Site-specific supplied electricity; UUID unresolved by voltage, geography, and supply contract
- Flow property / unit: Energy / kWh
- Amount rule: submetered or batch-allocated electricity for the declared finishing orders
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted wet-finished garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional wet-finishing electricity screening estimate, replace with metered data
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg accepted wet-finished garments
  - Basis: broad first-pass electricity estimate across optional garment finishing technologies
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wet-finishing thermal energy and fuels (`wet_finishing_thermal_energy`)

Record each fuel, purchased heat, or steam carrier separately without netting electricity or recovered energy.

- Selected flow: Carrier-, technology-, and geography-specific thermal-energy flow; UUID unresolved by carrier and supply
- Flow property / unit: Energy / MJ
- Amount rule: metered, invoice, or equipment-log thermal energy allocated to the declared finishing orders
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted wet-finished garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional wet-finishing thermal-energy screening estimate, replace with carrier records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ/kg accepted wet-finished garments
  - Basis: broad first-pass thermal-energy estimate across optional drying and curing routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wet-finishing process chemicals (`wet_finishing_chemicals`)

Record dyes, pigments, auxiliaries, detergents, coatings, and finishing agents separately by product, concentration, and composition.

- Selected flow: Recipe- and chemical-specific product flow; UUID unresolved by formulation and supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: batch-recipe quantity reconciled to stock or invoice records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted wet-finished garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional wet-finishing chemical screening estimate, replace with batch recipes
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg formulated process chemicals/kg accepted wet-finished garments
  - Basis: broad first-pass gross formulated-product input across optional finishing recipes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted wet-finished garments (`wet_finished_garments`)

Record accepted garments after the declared finishing and conditioning operations.

- Selected flow: Internal wet-finished garment product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conditioned output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Accepted wet-finished-garment output normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted wet-finished garments
  - Basis: output normalized to one kg accepted wet-finished garments
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Wet-finishing wastewater (`wet_finishing_wastewater`)

Record wastewater volume separately from solid and liquid residues and identify its on-site or off-site treatment route.

- Selected flow: Route-specific wastewater flow; UUID unresolved by composition and treatment route
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater discharge assigned to the declared finishing batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted wet-finished garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional wet-finishing wastewater screening estimate, replace with metered discharge
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: m3/kg accepted wet-finished garments
  - Basis: broad first-pass wastewater estimate across optional garment finishing routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wet-finishing residues and rejects (`wet_finishing_residues`)

Record sludge, spent baths, rejected garments, chemical containers, and other residues separately by material and actual treatment route.

- Selected flow: Material- and route-specific finishing waste flow; UUID unresolved by composition and treatment route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste and reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted wet-finished garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional finishing-residue screening estimate, replace with waste records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg residues/kg accepted wet-finished garments
  - Basis: broad first-pass gross residue and reject amount
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct emissions from garment finishing (`wet_finishing_emissions`)

Record measured or permit-calculated releases to air, water, and soil as individual elementary flows with the correct compartment.

- Selected flow: Pollutant- and compartment-specific Tiangong elementary flows; UUIDs unresolved by site emission profile
- Flow property / unit: Use each selected elementary flow's reference property and unit
- Amount rule: monitoring result or documented regulatory calculation for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted wet-finished garments
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional direct-emission screening ceiling, replace with pollutant-specific monitoring
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg selected pollutant/kg accepted wet-finished garments
  - Basis: deliberately broad provisional ceiling for detecting unit, compartment, or normalization errors
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Quality control and packaging (`quality_packaging`)

#### Inputs

##### Product flows

###### Garments entering final quality control (`qc_garments`)

Record assembled or wet-finished garments entering final inspection, testing, folding, and packing.

- Selected flow: Internal assembled or wet-finished garment flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional final-QC input screening estimate, replace with acceptance records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 2
  - Unit: kg garments entering final quality control/kg net accepted finished garment
  - Basis: broad first-pass input allowing rejects and rework
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consumer and distribution packaging (`packaging_materials`)

Record bags, cartons, tissue, labels, tags, hangers, pallets, and other packaging separately by material and recycled-content status.

- Selected flow: Material-specific packaging product flow; UUID unresolved by packaging specification
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured packaging issued minus returned unused packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional packaging screening estimate, replace with packaging bill of materials
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg packaging/kg net accepted finished garment
  - Basis: broad first-pass gross consumer and distribution packaging input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net accepted finished garment reference product (`finished_tshirt_reference`)

This is the quantitative reference output. Packaging is excluded from its mass and recorded separately.

- Selected flow: T-shirts, singlets and other vests, knitted or crocheted `4de987ca-f5f5-4001-a465-07f12ef9775f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: exactly 1 kg after normalization from measured net accepted output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: normalized net accepted finished garment output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Quality rejects and packaging waste (`qc_packaging_waste`)

Record rejected garments, rework losses, damaged packaging, and packaging scrap separately by material and destination.

- Selected flow: Material- and route-specific waste flow; UUID unresolved by material and treatment route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured reject and packaging-waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional QC and packaging-waste screening estimate, replace with waste records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg quality rejects and packaging waste/kg net accepted finished garment
  - Basis: broad first-pass gross reject and packaging-waste output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wwt_electricity`)

Record electricity used by pumps, aeration, dewatering, controls, and directly associated treatment equipment.

- Selected flow: Site-specific supplied electricity; UUID unresolved by voltage, geography, and supply contract
- Flow property / unit: Energy / kWh
- Amount rule: metered or documented equipment allocation assigned to wastewater treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional wastewater-treatment electricity screening estimate, replace with metered data
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/m3 wastewater treated
  - Basis: broad first-pass treatment electricity across technology configurations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment thermal energy and fuels (`wwt_thermal_energy`)

Record each fuel, purchased heat, or steam carrier separately when used by on-site treatment.

- Selected flow: Carrier-, site-, and technology-specific thermal-energy flow; UUID unresolved by carrier and supply
- Flow property / unit: Energy / MJ
- Amount rule: metered, invoice, or equipment-log thermal energy assigned to wastewater treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional wastewater-treatment thermal-energy screening estimate, replace with carrier records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/m3 wastewater treated
  - Basis: broad first-pass treatment thermal energy across technology configurations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment chemicals (`wwt_chemicals`)

Record coagulants, flocculants, neutralization agents, nutrients, disinfectants, and other treatment chemicals separately by formulation.

- Selected flow: Formulation-, site-, and technology-specific treatment-chemical flow; UUID unresolved by treatment configuration
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: invoice, batch-dose, or stock-balance quantity assigned to wastewater treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional wastewater-treatment chemical screening estimate, replace with dosing records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg formulated treatment chemicals/m3 wastewater treated
  - Basis: broad first-pass gross treatment-chemical input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Untreated foreground wastewater (`untreated_wastewater`)

Record the measured wastewater volume entering on-site treatment and retain pollutant-load measurements.

- Selected flow: Site-specific wastewater flow; UUID unresolved by wastewater composition
- Flow property / unit: Volume / m3
- Amount rule: metered influent volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Untreated-wastewater input normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: m3/m3 wastewater treated
  - Basis: influent volume normalized to one m3 wastewater treated
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge and residues (`wwt_sludge`)

Record sludge and other treatment residues by measured mass, dry-matter basis where available, and actual destination.

- Selected flow: Route-specific sludge or treatment-residue waste flow; UUID unresolved by composition and destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet mass with dry-matter content retained, or measured dry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional treatment-sludge screening estimate, replace with measured mass and dry matter
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wet sludge and residues/m3 wastewater treated
  - Basis: deliberately broad wet-mass estimate before treatment chemistry and dewatering are known
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated effluent emissions (`treated_effluent_emissions`)

Record discharged water and measured pollutant loads as individual elementary flows to the correct water compartment.

- Selected flow: Water- and pollutant-specific Tiangong elementary flows; UUIDs unresolved by discharge profile and compartment
- Flow property / unit: Use each selected elementary flow's reference property and unit
- Amount rule: effluent volume and concentration multiplied over the same monitored period, adjusted for sampling coverage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated and then per 1 kg net accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `epd-international-pcr-2024-03-apparel`
- Range: Provisional treated-effluent pollutant screening ceiling, replace with matched monitoring
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg selected pollutant/m3 wastewater treated
  - Basis: deliberately broad provisional ceiling for detecting unit, concentration, or normalization errors
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Shared foreground operations | Avoid allocation first by subdividing processes, metering product lines, batches, equipment, utilities, and waste streams separately, or expanding data collection so the target product's inventory is directly observed. | `epd-international-pcr-2024-03-apparel`; `iso-14044-2006` |
| `allocation_physical_relation` | Unavoidable shared-process burdens | When subdivision is not possible, partition burdens using a documented physical relationship that changes with the delivered co-products, such as measured process time, machine demand, or causal mass throughput; do not select mass solely because it is convenient. | `epd-international-pcr-2024-03-apparel`; `iso-14044-2006` |
| `allocation_economic_fallback` | Shared processes without a defensible physical relation | Economic allocation is a last fallback. Use reporting-period values, disclose prices and currency basis, and perform a sensitivity analysis showing the effect of the allocation choice. | `epd-international-pcr-2024-03-apparel` |
| `allocation_waste_polluter_pays` | Manufacturing wastes and recovered materials | Assign waste processing to the product system that generated the waste until documented end-of-waste criteria are met. Do not award an avoided-burden credit inside this foreground dataset. | `epd-international-pcr-2024-03-apparel` |
| `allocation_scrap_classification` | Cutting scrap, rejects, and reusable remnants | Treat material as waste unless a documented market, technical specification, legal compliance, and safe intended use demonstrate that it has ceased to be waste; disclose any co-product treatment and allocation. | `epd-international-pcr-2024-03-apparel` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | `material_receipt_preparation`; `garment_assembly` | fabric, thread, trim, accessory receipts and issues | warehouse receipts, issue notes, returns, stock counts, specifications | material id; supplier; composition; wet-processing state; opening stock; receipts; issues; returns; closing stock; mass | calibrated scales plus inventory reconciliation | kg | per receipt and production order; monthly stock close | same representative reporting period as core production | all foreground sites and outsourced operations under control | opening + receipts - returns - closing, assigned to declared products using traceable order records | scale calibration; stock reconciliation; supplier specification; unexplained variance log |
| `cp_transport_records` | `material_receipt_preparation` | inbound freight | bills of lading, route records, carrier records | material mass; origin; destination; distance; mode; vehicle; load factor; empty return; dataset inclusion flag | supplier/carrier records and documented route calculation | kg; km; tkm | per delivery | reporting period aligned with material receipts | all main-material routes | sum mass x distance without double counting transport already embedded upstream | invoices; route evidence; load assumptions |
| `cp_cutting_records` | `cutting` | fabric input, cut components, off-cuts and rejects | lay, marker, cutting-order, issue, output, and waste records | product id; fabric id; issue mass; returned mass; cut-component mass; off-cut mass; reject mass; marker/lay id | calibrated scales and cutting-order reconciliation | kg | per cutting order | representative production period | every cutting site in scope | reconcile issued fabric to accepted components, returned material, waste, and inventory change | scale calibration; mass-balance closure; signed order completion |
| `cp_energy_records` | `cutting`; `garment_assembly`; `garment_wet_finishing`; `quality_packaging`; `onsite_wastewater_treatment` | electricity, fuel, steam and heat | meters, invoices, equipment logs, production hours | meter id; start/end reading; energy carrier; quantity; unit; equipment or line; runtime; product order | submetering preferred; documented causal allocation otherwise | kWh; MJ; carrier reference unit | continuous or per shift; monthly reconciliation | same period for all core processes | each site and relevant line | sum metered consumption and allocate only residual shared use with disclosed driver | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_wet_finishing_records` | `garment_wet_finishing` | water, recipe chemicals, utilities, wastewater and residues | batch sheets, recipes, meters, stock records, discharge logs | batch id; garment input/output mass; water; chemical name/concentration/mass; energy; wastewater volume; residues | batch records plus calibrated meters and stock reconciliation | kg; m3; kWh; MJ | per batch; monthly reconciliation | same period as finished output | each wet-finishing site and technology | aggregate declared batches and normalize to accepted conditioned output | meter calibration; recipe approval; chemical SDS/specification; mass and water balance |
| `cp_production_output` | `garment_assembly`; `garment_wet_finishing`; `quality_packaging` | accepted, rejected, reworked and transferred garments | production orders, acceptance logs, scale records, quality records | product id; size; count; net mass; moisture condition; accepted; rejected; reworked; transfer destination | calibrated scale and quality-system record | count; kg | per batch or order | representative production period | all foreground production sites | production-volume-weighted aggregation by product and size stratum | scale calibration; acceptance criteria; rework trace |
| `cp_packaging_records` | `quality_packaging` | consumer and distribution packaging | bills of material, issue/return logs, supplier specifications | packaging id; material; mass; recycled content; issue; return; packaged product count/mass | weighed packaging plus inventory reconciliation | kg | per packaging order; monthly reconciliation | same period as packaged output | all packing sites | net issue by material normalized to net accepted garment mass | scale calibration; supplier specification; stock reconciliation |
| `cp_waste_records` | all foreground processes | rejects, scraps, residues, and off-site treatment | waste logs, weighbridge tickets, transfer notes, invoices | waste id; process; composition; mass; moisture or dry matter; destination; treatment; date; end-of-waste evidence | measured mass and documented transfer | kg | per movement; monthly reconciliation | same period as process inputs and outputs | all foreground sites | sum by composition and route; reconcile with process material balances | weighbridge ticket; licensed-carrier/treatment record; inventory closure |
| `cp_emissions_records` | `garment_wet_finishing`; `onsite_wastewater_treatment` | direct air, water, and soil emissions | monitoring, laboratory, permit, and calculation records | pollutant; compartment; concentration; flow rate or volume; time coverage; method; detection limit | accredited or documented monitoring and permit calculation | selected elementary-flow unit | permit frequency and event-specific sampling | representative reporting period with gaps disclosed | every emitting point source in scope | integrate concentration and flow over matched periods; no below-detection substitution without disclosure | laboratory report; method; calibration; sampling coverage |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | influent, treatment inputs, effluent, sludge, and pollutant loads | influent/effluent meters, laboratory results, chemical and energy records, sludge tickets | volume; pollutant concentrations; treatment chemical; energy; sludge mass; dry matter; discharge compartment | calibrated meters, laboratory testing, and treatment logs | m3; kg; kWh; MJ | continuous volume; permit sampling frequency | same period as wet-processing production | all on-site treatment units | water and pollutant balance over matched periods, then normalize to garment output | meter calibration; laboratory QA; permit compliance; sludge disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground amounts | normalized amount = reporting-period amount / reporting-period net accepted garment mass | amount by flow; net accepted garment mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calc_material_consumption` | Fabric, thread, trims, accessories, and packaging | consumed mass = opening stock + receipts - returns to supplier - closing stock; reconcile issues and unexplained losses | stock and transaction records | consumed kg by material | `mass-balance-identity` |
| `calc_cutting_balance` | Cutting | fabric issued = accepted cut components + returned fabric + off-cuts + rejected panels + inventory change + documented measurement variance | cutting-order mass records | reconciled cutting inputs and outputs | `mass-balance-identity` |
| `calc_item_mass` | Count-only garment records | net garment mass = accepted count x measured mean net mass for the same product and size stratum | count; sample weights; stratum production weights | kg net accepted garment | `iso-14048-2002` |
| `calc_shared_utility` | Shared meters | allocate residual shared utility only after direct meters, using a documented causal driver and reconciling allocated totals to the meter | meter total; direct-meter totals; causal driver by product | allocated utility by product | `epd-international-pcr-2024-03-apparel`; `iso-14044-2006` |
| `calc_pollutant_load` | Direct emissions and treated effluent | pollutant load = matched-period concentration x matched-period gas or liquid volume, with unit conversion and sampling coverage disclosed | concentration; volume or flow; time; detection-limit treatment | mass of pollutant by compartment | `iso-14048-2002` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain garment type, composition percentages, construction, size or size mix, net unit mass, colour, finish, moisture condition, manufacturing route, site, geography, and reporting period. | approved specification; bill of materials; production order; scale records |
| `dq_core_specific_data` | All foreground core processes | Use site-specific data for operations under foreground control. All core data shall represent the same period; deviations require explicit disclosure and justification. | meter, invoice, production, warehouse, quality, waste, and treatment records; `epd-international-pcr-2024-03-apparel` |
| `dq_upstream_representativeness` | Fabric, fibre, yarn, wet processing, packaging, energy, transport, and treatment datasets | Assess technology, geography, time, composition, recycled content, and system-boundary fit; prefer supplier-specific data for main materials and disclose generic or proxy shares. | supplier datasets; representativeness assessment; sensitivity analysis; `epd-international-pcr-2024-03-apparel` |
| `dq_completeness` | Product system | Demonstrate at least 99% product-content mass and energy coverage and screen exclusions for environmental relevance. | mass and energy reconciliation; exclusion register; sensitivity or expert review; `epd-international-pcr-2024-03-apparel` |
| `dq_measurement` | Mass, energy, water, emissions, and waste | Identify instrument, calibration status, unit, sampling frequency, detection limit where applicable, missing-data treatment, and aggregation method. | calibration certificates; laboratory QA; meter and sampling logs; `iso-14048-2002` |
| `dq_allocation` | Shared processes | Retain the subdivision attempt, causal relationship, driver values, allocated totals, and sensitivity analysis for any fallback allocation. | allocation worksheet; meter reconciliation; sensitivity analysis; `epd-international-pcr-2024-03-apparel` |
| `dq_waste_route` | All wastes and recovered materials | Identify composition, mass basis, destination, treatment, carrier, and end-of-waste evidence; do not assume recycling from collection alone. | transfer note; weighbridge record; treatment receipt; end-of-waste evidence |
| `dq_uncertainty_and_gaps` | Dataset as published | Disclose unresolved UUIDs, proxy data, estimates, missing periods, exclusions, mass/energy imbalance, and sensitivity results. | quality disclosure and review record; `iso-14044-2006`; `iso-14048-2002` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Product identity | Fail if the canonical PCR id, CPC 28225 context, garment type, knitted/crocheted construction, fibre composition, size basis, net mass, colour/finish, route, site, or reporting period is missing. | `epd-international-pcr-2024-03-apparel` |
| `validate_reference_flow` | Quantitative reference | Fail unless the normalized reference output is exactly 1 kg net accepted garment using flow `4de987ca-f5f5-4001-a465-07f12ef9775f`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `mass-balance-identity` |
| `validate_packaging_separation` | Packaging | Fail if packaging mass is included in net reference-product mass or if packaging is not reported separately by material. | `epd-international-pcr-2024-03-apparel` |
| `validate_required_processes` | Process coverage | Fail if receipt/preparation, cutting, garment assembly, or quality/packaging is absent. Require a declared applicability decision for garment wet finishing and on-site wastewater treatment. | `epd-international-pcr-2024-03-apparel` |
| `validate_material_balance` | Mass-based processes | Fail if inputs, accepted outputs, wastes, returns, and inventory change do not reconcile within the declared measurement uncertainty or if an unexplained imbalance is hidden by normalization. | `mass-balance-identity`; `iso-14048-2002` |
| `validate_energy_and_water` | Utilities | Fail if an included foreground operation lacks metered or documented utility data, or if shared utilities are allocated without meter reconciliation and a disclosed causal driver. | `epd-international-pcr-2024-03-apparel` |
| `validate_waste_and_emissions` | Wastes, wastewater, and direct emissions | Fail if foreground wastes lack composition and disposition, or if applicable wastewater/direct emissions are omitted, aggregated across incompatible compartments, or assigned unsupported treatment credits. | `epd-international-pcr-2024-03-apparel` |
| `validate_completeness` | Product system | Fail if the dataset cannot demonstrate 99% product-content mass and energy coverage or does not document and assess cut-offs. | `epd-international-pcr-2024-03-apparel` |
| `validate_allocation` | Shared processes | Fail if allocation bypasses subdivision without justification, lacks a defensible physical relationship, or uses economic allocation without reporting-period values and sensitivity analysis. | `epd-international-pcr-2024-03-apparel`; `iso-14044-2006` |
| `validate_upstream_links` | Purchased inputs and services | Fail if main fabric, other main materials, packaging, energy, transport, or off-site treatment is treated as burden-free or linked to an unassessed generic/proxy dataset. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `validate_data_quality_disclosure` | Published foreground dataset | Fail if the time period, geography, technology, supplier-specific/generic/proxy status, measurement methods, allocation, cut-offs, uncertainty, and unresolved identity references are not disclosed. | `epd-international-pcr-2024-03-apparel`; `iso-14048-2002` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for finished knitted or crocheted T-shirts, singlets, and other vests |
| downstream_use | `secondary_dataset`; `background_dataset` for product systems that require the garment-manufacturing stage; source for downstream `process` and `lifecyclemodel` projections |
| allowed_use | Garment-manufacturing LCI, supplier-specific or representative production modelling, hotspot analysis, and connection to separately modelled upstream fabric and downstream distribution/use/end-of-life stages |
| excluded_use | Claiming a complete cradle-to-grave apparel result without connected upstream and downstream stages; comparison across garments with different function, lifetime, performance, composition, or care scenario without functional equivalence; use as a fabric-production dataset |
| required_metadata | PCR id and version state; product and flow identity; composition; construction; size basis; net unit mass; colour/finish; included route; site and geography; reporting period; reference UUIDs; upstream dataset identities; allocation; cut-offs; data sources |
| required_quality_disclosure | specific, selected-generic, and proxy data shares; measurement and sampling methods; temporal, geographical, and technological representativeness; mass and energy closure; waste routes; assumptions; uncertainty; sensitivity; unresolved UUIDs and range-evidence gaps |
| update_trigger | Change in product construction, composition, supplier route, technology, site, energy supply, wet-processing recipe, waste treatment, allocation, or data period that materially changes an inventory amount or any declared environmental result; correct errors and refresh stale upstream datasets |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epd-international-pcr-2024-03-apparel` | standard | International EPD System, PCR 2024:03, Apparel, except fur and leather apparel, version 1.0.0, 2024-05-28, valid to 2028-05-28. https://www.environdec.com/pcr-library/pcr_fe5934d8-029d-4c48-19ea-08db3f138c24 (PDF: https://api.prod.environdec.com/api/v2/EPDLibrary/Files/e91dc7c8-2c6c-4f16-e74f-08dc7a67eb3e/Data), retrieved 2026-07-30. | CPC 282 scope; functional-use qualifiers; upstream/core/downstream process coverage; quality control, packaging, waste and wastewater inclusion; 99% completeness; allocation hierarchy; specific-data and disclosure rules |
| `ec-pef-method-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf, retrieved 2026-07-30. | Lifecycle scope, material/emission/waste modelling, inventory compilation, reproducibility, verification, and connection of foreground datasets to full product footprints |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, confirmed 2022, with Amendments 1:2017 and 2:2020. https://www.iso.org/standard/38498.html, retrieved 2026-07-30. | LCI goal and scope, inventory, allocation, interpretation, reporting, review, and limitation principles |
| `iso-14048-2002` | standard | ISO/TS 14048:2002, Environmental management - Life cycle assessment - Data documentation format. https://www.iso.org/standard/29872.html, retrieved 2026-07-30. | Transparent documentation of data collection, calculation, data quality, units, sampling, and review evidence |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to measured foreground inputs, outputs, wastes, returns, and inventory change; no external numeric factor. | Reference normalization, material consumption, cutting reconciliation, and mass-balance validation |
