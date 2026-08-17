---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-singlets-underpants-pyjamas-dressing-gowns-and-similar-articles-of-73979720
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Men's or boys' shirts, singlets, underpants, pyjamas, dressing gowns and similar articles, of textile fabric, not knitted or crocheted

## 1. Scope and Applicability

This PCR applies to factory-gate production of men's or boys' shirts, singlets, underpants, pyjamas, dressing gowns, and similar garments made from woven or otherwise non-knitted and non-crocheted textile fabric. It covers material preparation, cutting, sewing and assembly, applicable garment wet processing, pressing and finishing, inspection, and packaging. It supports a foreground data package normalized to finished garment mass.

Knitted or crocheted garments, women's or girls' garments, babies' garments, protective clothing whose primary function is protection from health or safety hazards, leather or fur apparel, and apparel made primarily from plastics are excluded. Upstream fibre, yarn, weaving, dyeing, and fabric-finishing production is represented by linked upstream datasets unless performed within the reporting facility. Distribution beyond the garment factory gate, retail, consumer use, and end of life are outside this factory-gate foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-singlets-underpants-pyjamas-dressing-gowns-and-similar-articles-of-73979720 |
| classification_refs | CPC 3.0: 28232 |
| covered_products | Men's or boys' shirts, singlets, underpants, pyjamas, dressing gowns, and similar articles made from woven or other non-knitted and non-crocheted textile fabric |
| excluded_products | Knitted or crocheted apparel; women's or girls' apparel; babies' apparel; protective clothing; leather, fur, or primarily plastic apparel |
| representative_product | A finished, quality-approved men's woven long-sleeved shirt |
| production_route | Received finished woven fabric and components; cutting; sewing and assembly; conditional wet processing; pressing and finishing; inspection; packaging |
| market_state | Finished garment at the garment factory gate; packaging is inventoried separately and excluded from reference-product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished men's or boys' woven-textile garment that fulfils its declared clothing function |
| How much | 1 kg of finished, quality-approved garment, excluding packaging mass |
| How well | Conforms to the declared product specification, fibre composition, size, construction, finish, and quality acceptance criteria |
| How long or cycle | One factory-gate production output event; consumer use duration is outside this foreground dataset |
| reference_flow_link | The finished reference garment output from `packaging` normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Men's or boys' shirts, singlets, underpants, pyjamas, dressing gowns and similar articles, of textile fabric, not knitted or crocheted `66e77e01-9118-4c94-a727-c8bbcf2d4eee` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment type; men's or boys' designation; woven or otherwise non-knitted and non-crocheted construction; fibre composition by mass; finished product mass; reference size; BOM coverage; wet-processing route; finish specification; packaging configuration; production geography; reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished garments without sales or transport packaging and normalize the foreground inventory to exactly 1 kg. |
| `component_mass` | fabrics, thread, interlining, fasteners, labels, and packaging | Mass | kg | Record issued mass and returned unused mass separately; do not infer component mass from purchase value. |
| `electricity_energy` | electricity inputs | Energy | kWh | Preserve metered electricity in kWh and convert only with a documented unit conversion; do not combine electricity with steam or fuel. |
| `steam_energy` | purchased steam inputs | Energy | MJ | Record purchased steam separately from electricity; retain the supplier pressure or enthalpy basis in dataset documentation. |
| `water_mass` | process-water and wastewater rows | Mass | kg | Use measured mass or convert metered volume with a disclosed density appropriate to the measured temperature. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished woven textile fabric, sewing thread, garment components, packaging items, and utilities are received at the garment manufacturing site. |
| starting_condition_role | Foreground gate at receipt of purchased materials and utilities |
| product_classification_scope | Men's or boys' garments within CPC 3.0 code 28232 and the reviewed semantic scope stated in Section 1 |
| recursive_input_rule | If a finished or partly finished garment within this same semantic product category enters the foreground system, record it as an explicit product input and link its upstream dataset; do not recreate its upstream burdens inside the current process without disclosure. |
| upstream_dataset_requirement | Each purchased fabric, component, packaging item, electricity supply, steam supply, water supply, and waste-treatment service requires a geographically and technologically representative upstream dataset. |
| disclosure | Declare facility geography, reporting period, product specification, reference size, BOM coverage, subcontracted operations, wet-processing applicability, utility supply routes, packaging configuration, and all exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground garment production | Include received-material preparation, cutting, sewing and assembly, applicable garment wet processing, pressing and finishing, inspection, and packaging through accepted finished garment output at the factory gate. | `afw-pefcr-v3-1-2025`; `olugbemi-bolson-2026-shirt-carbon` |
| `boundary_subcontracted_operations` | outsourced foreground operations | Include subcontracted cutting, sewing, washing, finishing, or packing as linked processes when they occur for the declared product; disclose the supplier geography and data source. | `afw-pefcr-v3-1-2025` |
| `boundary_upstream_inputs` | purchased materials and utilities | Link upstream production and transport represented outside the garment facility through explicit product inputs; do not silently omit them from the complete data package. | `ec-pef-method-2021`; `afw-pefcr-v3-1-2025` |
| `boundary_downstream_exclusion` | distribution, retail, use, and end of life | Exclude downstream stages from this factory-gate foreground dataset and state that it is not a cradle-to-grave apparel footprint. | `afw-pefcr-v3-1-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cutting` | Material preparation and cutting | `required` | Always included for cut-and-sewn woven garments | Foreground conversion of finished woven fabric into garment panels | kg accepted cut panels |
| `sewing_assembly` | Sewing and assembly | `required` | Always included | Foreground assembly of panels and components | kg sewn garment shell |
| `wet_processing` | Garment wet processing | `conditional` | Include when the product is washed, dyed, rinsed, softened, or otherwise wet-processed after sewing | Foreground wet treatment | kg wet-processed garment |
| `finishing_inspection` | Pressing, finishing, and inspection | `required` | Always included; steam row applies only when steam is used | Foreground finishing and quality acceptance | kg accepted finished garment |
| `packaging` | Product packaging | `required` | Always included; record zero only for a documented packaging-free product | Foreground sales and shipment preparation | 1 kg reference garment output |

### Process: Material preparation and cutting (`cutting`)

#### Inputs

##### Product flows

###### Finished woven fabric input (`woven_textile_fabric_input`)

Finished woven textile fabric crosses the factory boundary for spreading, marker placement, and cutting; obtain its mass from product-specific BOM and material-issue records net of returned unused rolls.

- Selected flow: Woven textile fabric, finished
- Flow property / unit: Mass / kg
- Amount rule: measured issued fabric mass minus measured unused fabric returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Cutting electricity input (`cutting_electricity_input`)

Electricity supplied to spreading, cutting, extraction, and directly assigned cutting-area equipment is recorded from a dedicated meter or a documented allocation of the site meter.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured cutting-process electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut garment panels output (`cut_garment_panels_output`)

Accepted cut panels leave the cutting process and enter sewing; determine their mass from batch weighing or a reconciled cutting mass balance.

- Selected flow: Cut woven textile garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured accepted cut-panel mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut-panel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources:

##### Waste flows

###### Textile cutting offcuts output (`textile_cutting_offcuts_output`)

Woven fabric pieces separated during marker cutting cross the process boundary as one composition-specific waste stream; record their measured mass and treatment destination.

- Selected flow: Waste woven textile cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured separated cutting-offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut-panel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

### Process: Sewing and assembly (`sewing_assembly`)

#### Inputs

##### Product flows

###### Cut panel input (`cut_panels_input`)

Accepted cut panels enter sewing as the main material input; transfer mass must reconcile with the preceding cutting output.

- Selected flow: Cut woven textile garment panels
- Flow property / unit: Mass / kg
- Amount rule: measured cut-panel mass issued to sewing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sewn garment-shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_records`
- Sources:

###### Sewing thread input (`sewing_thread_input`)

Sewing thread incorporated into seams crosses the assembly boundary; record its fibre composition and issued mass net of returned cones.

- Selected flow: Sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured issued thread mass minus measured unused thread returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sewn garment-shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Fusible interlining input (`fusible_interlining_input`)

Fusible textile interlining is recorded only when incorporated into collars, cuffs, plackets, or other declared garment parts; use product BOM and issue records.

- Selected flow: Fusible textile interlining
- Flow property / unit: Mass / kg
- Amount rule: measured interlining mass incorporated or issued net of returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sewn garment-shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Button input (`button_input`)

Garment buttons are recorded as one material-specific component flow when the product specification includes buttons; convert counted pieces to mass using a retained batch-average weighing record.

- Selected flow: Garment button
- Flow property / unit: Mass / kg
- Amount rule: button count multiplied by measured average mass per button for the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sewn garment-shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Slide fastener input (`slide_fastener_input`)

A garment slide fastener is recorded only for products whose BOM includes this closure; use measured batch-average component mass and installed count.

- Selected flow: Garment slide fastener
- Flow property / unit: Mass / kg
- Amount rule: installed fastener count multiplied by measured average fastener mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sewn garment-shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Sewing electricity input (`sewing_electricity_input`)

Electricity supplied to sewing machines, fusing equipment, buttonholing, trimming, and directly assigned assembly equipment is recorded separately from thermal energy.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured sewing and assembly electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sewn garment-shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sewn garment shell output (`sewn_garment_shell_output`)

The assembled garment shell leaves sewing after in-line acceptance and before any garment wet treatment or final pressing; record its accepted mass.

- Selected flow: Sewn woven textile garment shell
- Flow property / unit: Mass / kg
- Amount rule: measured accepted sewn garment-shell mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sewn garment-shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_records`
- Sources:

##### Waste flows

###### Sewing thread offcuts output (`sewing_thread_offcuts_output`)

Thread ends and trimmings separated at sewing are recorded as a distinct waste stream with their fibre composition and destination.

- Selected flow: Waste sewing thread offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured separated sewing-thread waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sewn garment-shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_records`
- Sources:

###### Rejected textile component output (`rejected_textile_components_output`)

Uncorrectable cut parts or sewn textile components rejected during assembly are kept separate from thread offcuts and recorded by measured mass and destination.

- Selected flow: Waste rejected woven textile garment components
- Flow property / unit: Mass / kg
- Amount rule: measured mass of rejected textile components leaving sewing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sewn garment-shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

### Process: Garment wet processing (`wet_processing`)

#### Inputs

##### Product flows

###### Sewn shell wet-process input (`sewn_shell_wet_input`)

The sewn garment shell enters the wet-processing process only when the declared production route includes garment washing, rinsing, dyeing, or softening.

- Selected flow: Sewn woven textile garment shell
- Flow property / unit: Mass / kg
- Amount rule: measured sewn garment-shell mass charged to wet-processing equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Wet-process water input (`wet_process_water_input`)

Process water supplied to garment washing, rinsing, or dyeing crosses the wet-processing boundary and is recorded from a dedicated meter or batch tank record.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured process-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Garment detergent input (`garment_detergent_input`)

The exact garment-washing detergent formulation dosed to the batch is recorded as one purchased formulation flow; its trade name or formulation reference must be disclosed.

- Selected flow: Garment-washing detergent formulation
- Flow property / unit: Mass / kg
- Amount rule: measured detergent formulation dose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Fabric softener input (`fabric_softener_input`)

The exact fabric-softener formulation dosed to the batch is recorded only when used; retain its trade name or formulation reference.

- Selected flow: Fabric-softener formulation
- Flow property / unit: Mass / kg
- Amount rule: measured fabric-softener formulation dose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Wet-processing electricity input (`wet_processing_electricity_input`)

Electricity supplied to washers, pumps, extractors, dryers, and directly assigned wet-processing equipment is metered separately from steam.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured wet-processing electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Wet-processing steam input (`wet_processing_steam_input`)

Purchased steam delivered to wet-processing equipment is recorded as its own utility exchange when used; disclose pressure, condensate treatment, and supplier basis.

- Selected flow: Steam, at factory gate
- Flow property / unit: Energy / MJ
- Amount rule: measured purchased steam delivered to wet processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-processed garment output (`wet_processed_garment_output`)

Accepted garment output after washing, rinsing, extraction, and applicable drying crosses to final finishing; record dry product mass at the declared conditioning state.

- Selected flow: Wet-processed woven textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured dry accepted garment mass after wet processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources:

##### Waste flows

###### Textile washing wastewater output (`textile_washing_wastewater_output`)

Wastewater discharged from garment washing or rinsing is recorded separately from solid textile waste and linked to its actual treatment route.

- Selected flow: Wastewater from garment washing
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater discharge mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

### Process: Pressing, finishing, and inspection (`finishing_inspection`)

#### Inputs

##### Product flows

###### Sewn shell finishing input (`sewn_shell_finishing_input`)

For a route without garment wet processing, the accepted sewn garment shell enters finishing directly and is recorded as a distinct conditional input.

- Selected flow: Sewn woven textile garment shell
- Flow property / unit: Mass / kg
- Amount rule: measured sewn garment-shell mass entering finishing when wet processing is not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Wet garment finishing input (`wet_garment_finishing_input`)

For a route with garment wet processing, the dry accepted wet-processed garment enters finishing and is recorded separately from the direct sewn-shell route.

- Selected flow: Wet-processed woven textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured wet-processed garment mass entering finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Finishing electricity input (`finishing_electricity_input`)

Electricity supplied to pressing controls, inspection lighting, trimming, and directly assigned finishing equipment is recorded separately from steam.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured finishing and inspection electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Finishing steam input (`finishing_steam_input`)

Purchased steam supplied to garment pressing equipment is recorded as one utility exchange when steam pressing is used.

- Selected flow: Steam, at factory gate
- Flow property / unit: Energy / MJ
- Amount rule: measured purchased steam delivered to pressing equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished garment output (`finished_garment_output`)

The quality-approved finished garment leaves inspection and enters packaging; record its conditioned mass without packaging.

- Selected flow: Finished woven textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured quality-approved finished garment mass excluding packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

##### Waste flows

###### Defective garment output (`defective_garment_output`)

Finished garments rejected as uncorrectable during final inspection are recorded as a distinct waste stream with measured mass and destination.

- Selected flow: Waste defective woven textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured mass of uncorrectable defective garments leaving inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

### Process: Product packaging (`packaging`)

#### Inputs

##### Product flows

###### Finished garment packaging input (`finished_garment_packaging_input`)

The accepted finished garment enters product packaging; its measured mass must match the finishing output for the same production batch after accounting for documented handling rejects.

- Selected flow: Finished woven textile garment
- Flow property / unit: Mass / kg
- Amount rule: measured finished garment mass released to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference garment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Polyethylene bag input (`polyethylene_bag_input`)

The low-density polyethylene bag immediately covering the garment is recorded as one packaging-material flow when used.

- Selected flow: Low-density polyethylene garment bag
- Flow property / unit: Mass / kg
- Amount rule: installed bag count multiplied by measured average bag mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference garment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Paperboard hangtag input (`paperboard_hangtag_input`)

The paperboard hangtag attached to or packed with the garment is recorded separately from the shipping carton.

- Selected flow: Paperboard garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: installed hangtag count multiplied by measured average hangtag mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference garment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Corrugated carton input (`corrugated_carton_input`)

The corrugated fibreboard carton used to group garments for shipment is recorded as one tertiary packaging flow and allocated by the measured number or mass of garments packed in the carton.

- Selected flow: Corrugated fibreboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: measured carton mass allocated by garment mass packed in that carton
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference garment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Packaging electricity input (`packaging_electricity_input`)

Electricity supplied to folding, bag sealing, labelling, carton sealing, and directly assigned packing equipment is recorded independently from other factory electricity.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured packaging-process electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference garment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference garment output (`reference_garment_output`)

The accepted garment is the declared reference product; the exchange amount is normalized to 1 kg of garment mass while all packaging remains in separate input rows.

- Selected flow: Men's or boys' shirts, singlets, underpants, pyjamas, dressing gowns and similar articles, of textile fabric, not knitted or crocheted `66e77e01-9118-4c94-a727-c8bbcf2d4eee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization from measured accepted garment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished garment excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `un-cpc-3-0-28232`

##### Waste flows

###### Waste polyethylene film output (`waste_polyethylene_film_output`)

Damaged or unused low-density polyethylene garment bags leaving packaging are recorded separately from paper-based packaging waste.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: measured waste polyethylene film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference garment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste paperboard output (`waste_paperboard_output`)

Rejected or unused paperboard hangtags leaving packaging are recorded as a distinct paperboard waste stream.

- Selected flow: Waste paperboard hangtags
- Flow property / unit: Mass / kg
- Amount rule: measured waste paperboard hangtag mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference garment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Waste corrugated board output (`waste_corrugated_board_output`)

Damaged or unused corrugated fibreboard cartons leaving packaging are recorded separately from hangtags and polymer film.

- Selected flow: Waste corrugated fibreboard
- Flow property / unit: Mass / kg
- Amount rule: measured waste corrugated fibreboard mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference garment output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | independently measurable garment processes or batches | Avoid allocation by subdividing cutting, sewing, wet processing, finishing, and packaging whenever meters, issue records, batch records, or production counts permit direct assignment. | `ec-pef-method-2021`; `afw-pefcr-v3-1-2025` |
| `allocation_shared_electricity` | shared factory electricity | Use product-specific metering first; when unavailable, allocate a documented shared-meter total by the mass of conforming production from the same equipment, site, and reporting interval. | `afw-pefcr-v3-1-2025` |
| `allocation_shared_steam` | shared purchased steam | Use product- or line-specific steam metering first; otherwise allocate measured delivered steam by a documented physical driver such as equipment operating time and verified load, then disclose the method. | `ec-pef-method-2021` |
| `allocation_textile_offcuts` | cutting offcuts and rejected garment material | Record offcuts and rejects as waste outputs with actual destinations; do not treat sales revenue or avoided disposal as a reason to remove their production burden from the foreground mass balance. | `afw-pefcr-v3-1-2025` |
| `allocation_no_undocumented_credit` | recycling, reuse, or energy-recovery claims | Keep any downstream credit outside this factory-gate foreground inventory unless the selected downstream LCA method explicitly requires it; disclose that method and all parameters. | `afw-pefcr-v3-1-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_records` | `cutting` | finished fabric, electricity, accepted panels, cutting offcuts | BOM, material issue and return log, batch scale record, meter record, waste ticket | batch_id; product_code; fabric_specification; issued_fabric_kg; returned_fabric_kg; accepted_panel_kg; offcut_kg; electricity_kWh; meter_id; timestamp | reconcile material issue and return records to calibrated batch scales and the cutting-area electricity meter | kg; kWh | each production batch with monthly meter reconciliation | at least 12 consecutive representative months or the full production campaign | all cutting lines producing the declared product | sum verified batch records and normalize by accepted finished garment mass | calibration certificate; signed issue and return log; meter photograph or export; waste receipt |
| `cp_sewing_records` | `sewing_assembly` | panels, thread, interlining, buttons, fasteners, electricity, sewn shells, sewing wastes | BOM, issue and return log, component counts, batch-average component weights, meter record, rejection log | batch_id; component_id; component_material; issued_kg; returned_kg; installed_count; average_component_kg; accepted_shell_kg; thread_waste_kg; rejected_component_kg; electricity_kWh | collect product-specific material issues and counts, weigh representative component batches, and reconcile to accepted shell mass | kg; count; kWh | each production batch | at least 12 consecutive representative months or the full production campaign | all sewing and assembly lines producing the declared product | sum batch inputs, outputs, and separated wastes; normalize by accepted shell mass and then by reference garment mass | approved BOM; calibrated scale record; line meter record; rejection disposition record |
| `cp_wet_processing_records` | `wet_processing` | garment charge, water, detergent, softener, electricity, steam, garment output, wastewater | batch sheet, dosing record, water meter, electricity meter, steam meter or invoice, wastewater meter | batch_id; garment_input_kg; water_kg; detergent_kg; softener_kg; electricity_kWh; steam_MJ; dry_output_kg; wastewater_kg; treatment_route | capture each wet batch from calibrated meters and dosing systems; reconcile water input, product retention, and wastewater discharge | kg; kWh; MJ | each wet-processing batch | at least 12 consecutive representative months or the full production campaign | on-site and subcontracted wet-processing facilities used for the declared product | sum complete batch records and normalize by dry accepted wet-processed garment mass | meter calibration; signed batch sheet; chemical issue record; wastewater discharge and treatment record |
| `cp_finishing_records` | `finishing_inspection` | garment input, electricity, steam, accepted garment, defective garment | production release, line meter, steam meter or invoice, final inspection log, calibrated scale record | batch_id; input_route; garment_input_kg; electricity_kWh; steam_MJ; accepted_garment_kg; defective_garment_kg; defect_code | measure route-specific input mass, directly assigned utilities, accepted output, and rejects for each finishing batch | kg; kWh; MJ | each production batch | at least 12 consecutive representative months or the full production campaign | all finishing and inspection lines producing the declared product | sum accepted and rejected mass by route; normalize utilities and wastes by accepted garment mass | line release; meter record; scale calibration; signed inspection and disposition log |
| `cp_packaging_records` | `packaging` | finished garment, polymer bag, hangtag, carton, electricity, reference garment, packaging wastes | packaging BOM, component count, average component weight, carton packing record, line meter, waste ticket | batch_id; garment_mass_kg; packaging_item_id; packaging_material; installed_count; average_item_kg; carton_mass_kg; packed_garment_mass_kg; electricity_kWh; packaging_waste_kg | weigh garment output separately from packaging, weigh representative packaging-item batches, and reconcile issued items to packed items and waste | kg; count; kWh | each packaging batch | at least 12 consecutive representative months or the full production campaign | all packaging lines and packing contractors for the declared product | sum packaging material and energy by batch; normalize to 1 kg garment mass excluding packaging | approved packaging specification; scale calibration; line meter record; waste receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | normalized amount = verified exchange amount / verified accepted garment mass in kg | exchange amount; accepted garment mass excluding packaging | exchange amount per 1 kg reference garment | `ec-pef-method-2021` |
| `calc_cutting_balance` | `cutting` | net fabric input = issued fabric - returned unused fabric; reconcile net input with accepted panels plus measured cutting offcuts and documented residual discrepancy | issued fabric mass; returned fabric mass; accepted panel mass; offcut mass | cutting mass-balance statement | `afw-pefcr-v3-1-2025` |
| `calc_component_mass` | counted buttons, fasteners, bags, and hangtags | component mass = installed count × measured average mass per component from the same specification and batch or a documented representative sample | installed count; average component mass | incorporated component mass | `afw-pefcr-v3-1-2025` |
| `calc_assembly_balance` | `sewing_assembly` | reconcile cut panels plus incorporated components with accepted sewn shells, separated thread offcuts, rejected textile components, and documented residual discrepancy | panel mass; component masses; accepted shell mass; separated waste masses | assembly mass-balance statement | `afw-pefcr-v3-1-2025` |
| `calc_wet_process_balance` | `wet_processing` | reconcile garment input, water, chemical formulations, dry garment output, wastewater, retained moisture, and documented evaporation without netting electricity or steam into the mass balance | garment input mass; water mass; chemical formulation masses; dry output mass; wastewater mass | wet-process mass-balance statement | `afw-pefcr-v3-1-2025` |
| `calc_shared_electricity` | shared electricity meter | allocated kWh = shared-meter kWh × conforming product mass / total conforming mass produced by the same metered equipment and period | shared-meter kWh; product conforming mass; total conforming mass | product-specific electricity kWh | `afw-pefcr-v3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain the approved specification showing garment type, men's or boys' designation, woven construction, fibre composition, reference size, finish, and product mass. | approved product specification and dated BOM |
| `dq_bom_coverage` | material inventory | Product-specific primary BOM data must cover at least 95% of product mass and 100% of the main fabric, lining, padding, metals, and electronic parts when present; disclose the uncovered share. | BOM coverage calculation and supplier specifications |
| `dq_temporal_coverage` | all foreground processes | Use at least 12 consecutive representative months unless the product is campaign-based; in that case use the complete campaign and disclose seasonality. | dated batch records and reporting-period reconciliation |
| `dq_metering` | electricity, steam, water, and wastewater | Identify each meter, calibration status, reading interval, process coverage, and any allocation from a shared meter. | calibration certificate, meter export, invoice reconciliation, and allocation worksheet |
| `dq_mass_balance` | cutting, sewing, wet processing, finishing, and packaging | Reconcile measured inputs, accepted outputs, separated wastes, moisture changes, and documented residual discrepancies at process level. | signed process mass-balance worksheets and scale calibration records |
| `dq_waste_destination` | every waste flow | Record waste composition, mass, date, receiving operator, treatment route, and evidence of transfer; do not combine textile, polymer, paperboard, wastewater, or defective garment wastes. | waste transfer note, treatment receipt, and waste register |
| `dq_representativeness` | linked upstream datasets | Document geographic, temporal, and technological representativeness and any proxy limitation for each linked fabric, component, utility, packaging, and waste-treatment dataset. | dataset metadata and data-quality assessment |
| `dq_uncertainty_disclosure` | reported results | Disclose data gaps, proxy use, shared-meter allocations, residual mass-balance differences, and uncertainty relevant to result interpretation. | data-quality report and verification record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference product UUID must equal `66e77e01-9118-4c94-a727-c8bbcf2d4eee`, resolve as a state-100 Product flow classified to CPC 28232, and use Mass `93a60a56-a3c8-11da-a746-0800200b9a66` with kg from Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. | `un-cpc-3-0-28232` |
| `validate_reference_amount` | reference flow | Accepted garment output must normalize to exactly 1 kg excluding packaging mass, and the unnormalized accepted mass must remain traceable. | `ec-pef-method-2021` |
| `validate_scope` | product identity | The declared product must be a men's or boys' garment made from textile fabric that is not knitted or crocheted and must not fall under an excluded product group. | `un-cpc-3-0-28232`; `afw-pefcr-v3-1-2025` |
| `validate_process_coverage` | foreground process map | Cutting, sewing and assembly, finishing and inspection, and packaging must be present; wet processing must be present whenever the production route includes garment washing, dyeing, rinsing, or softening. | `afw-pefcr-v3-1-2025`; `olugbemi-bolson-2026-shirt-carbon` |
| `validate_atomic_rows` | process inventory | Every inventory card must describe one specific exchange; electricity, steam, water, each component, each chemical formulation, each packaging item, and each waste stream must remain separate. | `ec-pef-method-2021` |
| `validate_uuid_evidence` | UUID-bearing rows | Store a Tiangong UUID only after hybrid-search candidate evidence and state-100 detail evidence agree on identity, flow type, classification where applicable, and reference property; otherwise leave the UUID absent and retain the manifest review item. |  |
| `validate_bom` | material inputs | BOM coverage and mass must satisfy `dq_bom_coverage`, and every incorporated component used by the declared product must be represented by an input row. | `afw-pefcr-v3-1-2025` |
| `validate_mass_balance` | foreground processes | Each process mass balance must identify accepted output, every separately measured waste, moisture change where relevant, and any residual discrepancy; unexplained netting is not conformant. | `afw-pefcr-v3-1-2025` |
| `validate_energy_allocation` | electricity and steam | Process-specific meter data must be used when available; every shared-meter allocation must state the metered boundary, period, physical driver, numerator, and denominator. | `afw-pefcr-v3-1-2025` |
| `validate_waste_routes` | waste outputs | Each waste row must have a recorded receiving treatment route and transfer evidence; a sale or recycling claim does not permit omission from the foreground inventory. | `afw-pefcr-v3-1-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; eligible for `background_dataset` use after methodology and data review |
| downstream_use | Foreground process and lifecyclemodel construction for factory-gate production of CPC 28232 garments |
| allowed_use | Product-specific factory-gate studies whose garment scope, production route, geography, time period, BOM, wet-processing applicability, and packaging configuration match the dataset |
| excluded_use | Knitted or crocheted apparel; other demographic or product categories; protective apparel; cradle-to-grave claims without downstream stages; comparative assertions without a separately applicable comparison method and review |
| required_metadata | canonical PCR id; product flow UUID; CPC reference; product specification; fibre composition; reference size; BOM coverage; wet-processing route; facility and subcontractor geography; reference year; allocation methods; packaging configuration; waste destinations; source ids |
| required_quality_disclosure | primary-data coverage; meter coverage and calibration; shared-resource allocations; process mass-balance residuals; data gaps; proxy datasets; geographic, temporal, and technological representativeness; uncertainty and verification status |
| update_trigger | Change in garment construction or BOM, main fabric or finish, production route, wet-processing technology, facility geography, electricity or steam supply, packaging configuration, waste treatment, reference-flow identity, applicable PEF method, or evidence that materially changes a rule |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-28232` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0, code 28232 classification detail and Draft CPC Ver. 3.0 Explanatory Notes, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/3/28232 and https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf, accessed 2026-08-13 | Product scope, exclusions, and classification identity |
| `afw-pefcr-v3-1-2025` | Standard (`standard`) | Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025, https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf, accessed 2026-08-13; European Commission status page: https://green-forum.ec.europa.eu/green-business/environmental-footprint-methods/pef-method_en | Apparel subcategories, functional-unit context, BOM coverage, process decomposition, manufacturing losses, utilities, packaging, allocation, data collection, and validation |
| `ec-pef-method-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng, accessed 2026-08-13 | Completeness, company-specific manufacturing data, inventory classification, allocation hierarchy, reporting, and verification |
| `olugbemi-bolson-2026-shirt-carbon` | Literature (`literature`) | Olugbemi, E. and Bolson, N.F. (2026), Uncertainty analysis of physical-based carbon accounting in cotton T-shirt manufacturing, Scientific Reports 16, 7586, https://doi.org/10.1038/s41598-026-38773-4 | Independent process-chain corroboration and data-quality dimensions; no case-study quantity is adopted as a PCR default |
