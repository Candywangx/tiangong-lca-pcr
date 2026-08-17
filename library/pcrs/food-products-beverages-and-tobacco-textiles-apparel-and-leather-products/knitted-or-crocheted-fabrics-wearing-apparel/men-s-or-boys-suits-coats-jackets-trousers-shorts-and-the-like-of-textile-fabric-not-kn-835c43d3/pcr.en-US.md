---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-suits-coats-jackets-trousers-shorts-and-the-like-of-textile-fabric-not-kn-835c43d3
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Men's or boys' suits, coats, jackets, trousers, shorts and the like, of textile fabric, not knitted or crocheted

## 1. Scope and Applicability

This PCR applies to foreground production of finished men's or boys' suits, coats, jackets, trousers, shorts, and similar outer or tailored garments made from textile fabric that is not knitted or crocheted. It covers cut-and-sew manufacture from received woven shell fabric and declared garment components through cutting, sewing, conditional garment wet processing, pressing, inspection, and sale packaging at the manufacturing gate.

The data package shall distinguish garment type, intended wearer group, reference size or size mix, fibre composition of every textile component, fabric construction and finish, lining and interlining, trim set, garment wet-processing route, production geography, and whether sale packaging is included. Upstream fibre, yarn, weaving, fabric dyeing, and fabric finishing remain upstream datasets unless performed inside the reporting facility; distribution, retail, consumer care, repair, reuse, and end of life are outside this foreground manufacturing dataset.

Products knitted or crocheted, fur apparel, women's or girls' garments, shirts and underwear, apparel accessories, footwear, and separately sold textile fabric are excluded. Protective garments may use this PCR only when their specialised protective performance and conformity requirements are represented by additional product-specific rules.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-suits-coats-jackets-trousers-shorts-and-the-like-of-textile-fabric-not-kn-835c43d3 |
| classification_refs | CPC 3.0: 28231 |
| covered_products | Men's or boys' suits, coats, jackets, trousers, shorts, and similar garments made from textile fabric that is not knitted or crocheted |
| excluded_products | Knitted or crocheted garments; fur apparel; women's or girls' garments; shirts, underwear, nightwear, accessories, footwear, and textile fabric sold as material |
| representative_product | A finished, sale-ready men's or boys' woven-fabric garment produced by cutting, sewing, finishing, inspection, and packing |
| production_route | Receipt of woven fabric and components; fabric preparation and cutting; sewing and assembly; conditional garment wet processing; pressing, inspection, and sale packaging |
| market_state | Finished product, manufactured; production mix, at plant |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished men's or boys' non-knitted, non-crocheted textile-fabric garment at the manufacturing gate |
| How much | 1 kg net mass of conforming finished garment |
| How well | Sale-ready and conforming to the declared style, size specification, bill of materials, construction, finish, performance requirements, and final quality-control criteria |
| How long or cycle | One completed manufacturing batch; consumer service life and care cycles are not included in this foreground production reference |
| reference_flow_link | The functional unit is realised by the single reference product flow below, normalised to 1 kg net finished-garment mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Men's or boys' suits, coats, jackets, trousers, shorts and the like, of textile fabric, not knitted or crocheted `039191b4-8865-4c2e-83b4-afd3f17435c3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment type; men's or boys' designation; reference size or production size mix; net finished mass; shell fibre composition; shell fabric construction and finish; lining, interlining, pocketing and trim composition; colour; garment wet-processing route; facility and country; production period; sale-packaging inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net mass after all declared finishing and conditioning and before sale packaging unless packaging is explicitly part of the studied product; normalise all foreground exchanges to 1 kg conforming product. |
| `bom_mass_basis` | Shell, lining, interlining, pocketing, thread, fasteners, labels, and bonding inputs | Mass | kg | Use issue, return, and stock-change records by atomic BOM item. Report fibre or material composition separately; do not replace BOM mass with nominal fabric area without a documented area-to-mass conversion. |
| `packaging_mass_basis` | Each sale-packaging component | Mass | kg | Weigh or calculate each packaging material separately per packed output; do not combine polybag, carton, hangtag, or tape into one packaging flow. |
| `energy_measurement` | Electricity | Energy | kWh | Use process submeter readings where available; otherwise allocate facility meter consumption using documented machine operating time and rated-load evidence for the reporting period. |
| `thermal_measurement` | Purchased steam and hot water | Energy | MJ | Preserve measured supplier units and convert to MJ using documented enthalpy, temperature, pressure, or meter factors; keep steam and hot water as separate exchanges. |
| `fuel_measurement` | Natural gas and diesel fuel | Energy or mass | MJ or kg | Record each fuel separately from invoices, tank or meter records, and stock changes; do not combine fuels into an energy-carrier total. |
| `water_measurement` | Process water | Mass | kg | Use inlet meter readings or batch records and disclose water source and treatment grade. |
| `refrigerant_balance` | Refrigerant R-410A | Mass | kg | Calculate charged or emitted refrigerant from opening stock plus purchases minus closing stock and recovered quantities; do not substitute equipment charge capacity for measured annual loss. |
| `production_period` | All foreground exchanges | Time | reporting period | Use one internally consistent production period, reconcile output, rework, rejects, and inventory change, then normalise only after reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Woven shell fabric and each declared lining, interlining, pocketing, thread, fastener, label, bonding, chemical, utility, and packaging input are received at the garment-manufacturing facility with supplier and BOM identity available. |
| starting_condition_role | Gate-to-gate foreground starting condition for cut-and-sew garment manufacture; upstream burdens arrive through linked product datasets. |
| product_classification_scope | Finished men's or boys' suits, coats, jackets, trousers, shorts, and similar garments of textile fabric that is not knitted or crocheted. |
| recursive_input_rule | If an input is itself a finished garment within this category, record it as a separate input with its own upstream dataset and disclose the operation performed; do not recursively treat it as newly manufactured reference output. |
| upstream_dataset_requirement | Provide traceable upstream datasets for every material, chemical, fuel, electricity, steam, hot-water, refrigerant, and packaging input, matched to composition, geography, technology, and time as closely as available. |
| disclosure | Declare integrated versus outsourced operations, wet-processing recipes, fuel and utility sources, allocation methods, rejected and reworked output, waste destinations, direct emissions, packaging inclusion, and all data gaps or proxies. |

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | foreground_start_and_end | Start at receipt of woven fabric and declared components and end with conforming sale-ready product at the manufacturing gate; include all on-site cutting, sewing, finishing, inspection, rework, waste handling, utilities, packaging, and direct emissions. | `afw-pefcr-2025`; `lindkvist-2024-circular-garment-lca` |
| `boundary_02` | integrated_operations | Include weaving, dyeing, printing, embroidery, washing, coating, or other treatment inside this dataset only when performed within the reporting facility and period; otherwise link a separate upstream or outsourced process dataset. | `afw-pefcr-2025` |
| `boundary_03` | excluded_life_cycle_stages | Exclude outbound distribution, retail, consumer transport, use, repair, reuse, and end of life from this manufacturing dataset; retain metadata needed for a downstream full-life-cycle model. | `ec-pef-method-2021`; `afw-pefcr-2025` |
| `boundary_04` | capital_goods | Exclude buildings and production equipment unless the study goal explicitly requires them; disclose the exclusion consistently for all compared datasets. | `daystar-2024-cotton-apparel-dlca` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabric_preparation_cutting` | Fabric preparation, marker making, spreading, and cutting | required | Always | Foreground conversion of received woven fabric into cut garment panels | kg cut panel output |
| `sewing_assembly` | Sewing and garment assembly | required | Always | Foreground assembly of panels, thread, fasteners, trims, and bonded parts | kg assembled unfinished garment |
| `garment_wet_processing` | Garment wet processing | conditional | Include when the assembled garment is washed, dyed, bleached, softened, rinsed, or otherwise wet-treated by or for the reporting facility | Foreground wet processing of assembled garments | kg wet-processed garment |
| `pressing_inspection_packaging` | Pressing, final inspection, rework, and sale packaging | required | Always; steam, hot water, diesel, refrigerant, and individual packaging rows apply only when used | Final foreground conversion and reference-product release | 1 kg conforming finished garment |

### Process: Fabric preparation, marker making, spreading, and cutting (`fabric_preparation_cutting`)

#### Inputs

##### Product flows

###### Woven outer-shell textile fabric (`shell_fabric_input`)

Record the issued woven shell fabric for the declared style, fibre composition, construction, colour, and finish.

- Selected flow: Woven outer-shell textile fabric
- Flow property / unit: Mass / kg
- Amount rule: Foreground issue minus return and closing stock for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_batch_records`
- Sources: `afw-pefcr-2025`

###### Woven lining textile fabric (`lining_fabric_input`)

Record lining only when included in the BOM; preserve its fibre composition and finish.

- Selected flow: Woven lining textile fabric
- Flow property / unit: Mass / kg
- Amount rule: Foreground issue minus return and closing stock for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_batch_records`
- Sources: `afw-pefcr-2025`

###### Fusible interlining textile sheet (`interlining_input`)

Record fusible interlining as its own BOM exchange when used.

- Selected flow: Fusible interlining textile sheet
- Flow property / unit: Mass / kg
- Amount rule: Foreground issue minus return and closing stock for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_batch_records`
- Sources: `afw-pefcr-2025`

###### Woven pocketing textile fabric (`pocketing_fabric_input`)

Record pocketing fabric separately when the garment contains pockets.

- Selected flow: Woven pocketing textile fabric
- Flow property / unit: Mass / kg
- Amount rule: Foreground issue minus return and closing stock for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_batch_records`
- Sources: `afw-pefcr-2025`

###### Kraft paper marker sheet (`marker_paper_input`)

Record physical marker paper when it is consumed; omit this row for paperless digital cutting.

- Selected flow: Kraft paper marker sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured paper issued to completed markers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cut panel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_batch_records`
- Sources: `afw-pefcr-2025`

###### Electricity used for cutting (`cutting_electricity_input`)

Record electricity for relaxation equipment, spreading, cutting, extraction, and local handling.

- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Amount rule: Submeter reading or documented machine-time allocation for this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cut panel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_batch_records`
- Sources: `afw-pefcr-2025`

##### Waste flows

No waste input is prescribed. Record any returned material entering for reuse as a new atomic product or waste exchange with its own identity.

##### Elementary flows

No routine elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Cut garment panel (`cut_panel_output`)

Record the mass of accepted cut panels transferred to assembly.

- Selected flow: Cut garment panel
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass of accepted cut panels
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut panel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_batch_records`
- Sources: `lindkvist-2024-circular-garment-lca`

##### Waste flows

###### Woven textile cutting offcut (`textile_cutting_offcut_output`)

Record cutting offcuts by actual fibre composition and destination; this row is not a credit.

- Selected flow: Woven textile cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: Weighed offcuts plus reconciled unreturned remnants for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut panel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_batch_records`
- Sources: `afw-pefcr-2025`; `lindkvist-2024-circular-garment-lca`

###### Waste kraft paper (`waste_marker_paper_output`)

Record discarded marker paper separately from textile offcuts.

- Selected flow: Waste kraft paper
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded marker paper
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cut panel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_batch_records`
- Sources: `afw-pefcr-2025`

##### Elementary flows

No routine direct elementary output is prescribed; disclose dust extraction or direct emissions as separate measured atomic rows when present.

### Process: Sewing and garment assembly (`sewing_assembly`)

#### Inputs

##### Product flows

###### Cut garment panel (`cut_panel_input`)

Record accepted cut panels transferred from cutting.

- Selected flow: Cut garment panel
- Flow property / unit: Mass / kg
- Amount rule: Measured mass transferred into sewing and assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `lindkvist-2024-circular-garment-lca`

###### Sewing thread (`sewing_thread_input`)

Record thread by declared fibre composition and linear density.

- Selected flow: Sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Spool issue minus return and closing stock for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `lindkvist-2024-circular-garment-lca`

###### Garment button (`button_input`)

Record button mass separately when buttons are present.

- Selected flow: Garment button
- Flow property / unit: Mass / kg
- Amount rule: Count used multiplied by measured or supplier-declared mass per button, reconciled to issue and return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `afw-pefcr-2025`

###### Slide fastener (`zipper_input`)

Record zipper mass separately when present.

- Selected flow: Slide fastener
- Flow property / unit: Mass / kg
- Amount rule: Count used multiplied by measured or supplier-declared mass per fastener
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `afw-pefcr-2025`

###### Hook-and-eye fastener (`hook_eye_input`)

Record hook-and-eye fastener mass separately when present.

- Selected flow: Hook-and-eye fastener
- Flow property / unit: Mass / kg
- Amount rule: Count used multiplied by measured or supplier-declared mass per fastener
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `afw-pefcr-2025`

###### Thermoplastic fusible bonding tape (`fusible_tape_input`)

Record bonding tape separately when used for seams or reinforcement.

- Selected flow: Thermoplastic fusible bonding tape
- Flow property / unit: Mass / kg
- Amount rule: Roll issue minus return and closing stock for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `afw-pefcr-2025`

###### Electricity used for sewing (`sewing_electricity_input`)

Record electricity for sewing machines, fusing presses, local lighting, and assembly handling assigned to this process.

- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Amount rule: Submeter reading or documented machine-time allocation for this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `afw-pefcr-2025`; `daystar-2024-cotton-apparel-dlca`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No routine elementary input is prescribed.

#### Outputs

##### Product flows

###### Assembled unfinished garment (`assembled_garment_output`)

Record assembled garments transferred to wet processing or final finishing.

- Selected flow: Assembled unfinished garment
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass of accepted assembled garments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `lindkvist-2024-circular-garment-lca`

##### Waste flows

###### Waste sewing thread (`thread_offcut_output`)

Record thread offcuts and unusable thread separately from textile panel waste.

- Selected flow: Waste sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected thread waste or reconciled issue-minus-use balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `afw-pefcr-2025`

###### Rejected sewn garment component (`rejected_component_output`)

Record irreparable rejected sewn components separately from rework returned to production.

- Selected flow: Rejected sewn garment component
- Flow property / unit: Mass / kg
- Amount rule: Weighed irreparable rejected component mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unfinished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_batch_records`
- Sources: `afw-pefcr-2025`

##### Elementary flows

No routine direct elementary output is prescribed; report measured adhesive or solvent emissions as separate chemical-specific rows when applicable.

### Process: Garment wet processing (`garment_wet_processing`)

#### Inputs

##### Product flows

###### Assembled unfinished garment (`assembled_garment_wet_input`)

Record the assembled garment entering the declared wet-processing recipe.

- Selected flow: Assembled unfinished garment
- Flow property / unit: Mass / kg
- Amount rule: Measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

###### Process water (`process_water_input`)

Record total fresh or treated process water entering wet processing.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Inlet meter or recipe batch record, reconciled for recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

###### Hot water (`hot_water_input`)

Record purchased or separately supplied hot water independently from cold process water and steam.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Heat meter reading or water mass multiplied by documented inlet and reference enthalpy difference
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

###### Electricity used for wet processing (`wet_electricity_input`)

Record electricity for washers, pumps, hydro-extraction, dryers, and controls.

- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Amount rule: Submeter reading or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

###### Natural gas (`natural_gas_input`)

Record natural gas consumed for on-site wet-processing heat separately from electricity, steam, and other fuels.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Process meter or reconciled invoice and boiler-load allocation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

###### Non-ionic surfactant (`nonionic_surfactant_input`)

Record the non-ionic surfactant as one chemical input when present in the approved recipe.

- Selected flow: Non-ionic surfactant
- Flow property / unit: Mass / kg
- Amount rule: Actual formulated product mass dosed from batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

###### Sodium carbonate (`sodium_carbonate_input`)

Record sodium carbonate separately when the recipe uses it.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Actual chemical mass dosed from batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

###### Acetic acid (`acetic_acid_input`)

Record acetic acid separately when the recipe uses it; retain solution concentration.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Actual solution mass dosed and declared concentration from batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

###### Purchased steam (`wet_steam_input`)

Record purchased steam separately when supplied across the process boundary.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Steam meter reading converted with documented pressure and enthalpy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No routine elementary input is prescribed.

#### Outputs

##### Product flows

###### Wet-processed garment (`wet_processed_garment_output`)

Record accepted garments after wet processing and documented conditioning.

- Selected flow: Wet-processed garment
- Flow property / unit: Mass / kg
- Amount rule: Conditioned batch output mass transferred to final finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

##### Waste flows

###### Industrial wastewater from garment wet processing (`industrial_wastewater_output`)

Record wastewater sent to on-site or off-site treatment and retain destination and measured quality data.

- Selected flow: Industrial wastewater from garment wet processing
- Flow property / unit: Mass / kg
- Amount rule: Effluent meter or reconciled water balance for the wet-processing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

###### Wastewater-treatment sludge from garment wet processing (`wastewater_sludge_output`)

Record dewatered sludge separately when generated by on-site treatment.

- Selected flow: Wastewater-treatment sludge from garment wet processing
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched sludge with measured dry-solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `afw-pefcr-2025`

##### Elementary flows

###### Fossil carbon dioxide from wet-processing heat (`wet_co2_fossil_output`)

Record direct fossil carbon dioxide from on-site natural-gas combustion; omit when heat is entirely purchased.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel quantity multiplied by a disclosed, jurisdiction-appropriate factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `ec-pef-method-2021`

###### Fossil methane from wet-processing heat (`wet_methane_fossil_output`)

Record direct fossil methane from on-site natural-gas combustion as a separate elementary exchange.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel quantity multiplied by a disclosed, jurisdiction-appropriate factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `ec-pef-method-2021`

###### Dinitrogen monoxide from wet-processing heat (`wet_n2o_output`)

Record direct dinitrogen monoxide from on-site combustion as a separate elementary exchange.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel quantity multiplied by a disclosed, jurisdiction-appropriate factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `ec-pef-method-2021`

###### Nitrogen oxides from wet-processing heat (`wet_nox_output`)

Record measured or permitted nitrogen oxides from on-site combustion separately from greenhouse gases.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel quantity multiplied by a disclosed, jurisdiction-appropriate factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `ec-pef-method-2021`

### Process: Pressing, final inspection, rework, and sale packaging (`pressing_inspection_packaging`)

#### Inputs

##### Product flows

###### Garment entering final finishing (`finish_garment_input`)

Record the assembled or wet-processed garment entering pressing and final inspection.

- Selected flow: Garment entering final finishing
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass into final finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `lindkvist-2024-circular-garment-lca`

###### Electricity used for pressing and packing (`pressing_electricity_input`)

Record electricity for pressing, inspection, rework equipment, conveyors, and packing assigned to this process.

- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Amount rule: Submeter reading or documented machine-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `afw-pefcr-2025`; `daystar-2024-cotton-apparel-dlca`

###### Purchased steam used for pressing (`pressing_steam_input`)

Record purchased pressing steam separately from electricity and hot water.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Steam meter reading converted with documented pressure and enthalpy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `afw-pefcr-2025`

###### Diesel fuel for backup generation (`diesel_input`)

Record diesel used by backup generation or dedicated process equipment only when consumed during the reporting period.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Tank opening stock plus purchases minus closing stock, allocated from generator operating records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `ec-pef-method-2021`

###### Refrigerant R-410A makeup (`r410a_refrigerant_input`)

Record R-410A added to cooling equipment serving the foreground process; other refrigerants require separate atomic rows.

- Selected flow: Refrigerant R-410A
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus purchases minus closing stock and recovered quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `ec-pef-method-2021`

###### Low-density polyethylene garment polybag (`ldpe_polybag_input`)

Record each LDPE garment polybag as a separate packaging-material exchange.

- Selected flow: Low-density polyethylene garment polybag
- Flow property / unit: Mass / kg
- Amount rule: Packed-unit count multiplied by measured bag mass, reconciled to issue and return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `afw-pefcr-2025`

###### Corrugated fibreboard shipping carton (`corrugated_carton_input`)

Record corrugated cartons separately from bags, tags, and tape.

- Selected flow: Corrugated fibreboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Carton count multiplied by measured carton mass and allocated to packed garments by actual contents
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `afw-pefcr-2025`

###### Paper garment hangtag (`paper_hangtag_input`)

Record the paper hangtag separately when supplied with the garment.

- Selected flow: Paper garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: Tag count multiplied by measured tag mass, reconciled to issue and return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `afw-pefcr-2025`

###### Polypropylene pressure-sensitive packaging tape (`polypropylene_tape_input`)

Record polypropylene packing tape separately from the carton.

- Selected flow: Polypropylene pressure-sensitive packaging tape
- Flow property / unit: Mass / kg
- Amount rule: Roll issue minus return and closing stock for packed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `afw-pefcr-2025`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No routine elementary input is prescribed.

#### Outputs

##### Product flows

###### Conforming finished garment (`finished_garment_output`)

This is the reference product released after final quality control and net-mass determination.

- Selected flow: Men's or boys' suits, coats, jackets, trousers, shorts and the like, of textile fabric, not knitted or crocheted `039191b4-8865-4c2e-83b4-afd3f17435c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured conforming net finished-garment mass, normalised to 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `unsd-cpc-3-28231`

##### Waste flows

###### Rejected finished garment (`rejected_garment_output`)

Record irreparable rejected finished garments separately from reworked products.

- Selected flow: Rejected finished garment
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of irreparable rejected garments dispatched to a declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `afw-pefcr-2025`

###### Waste corrugated fibreboard (`waste_corrugated_board_output`)

Record damaged or unused corrugated fibreboard separately.

- Selected flow: Waste corrugated fibreboard
- Flow property / unit: Mass / kg
- Amount rule: Weighed corrugated-board waste from the packing area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `afw-pefcr-2025`

###### Waste low-density polyethylene film (`waste_ldpe_film_output`)

Record damaged or unused LDPE film separately from paper packaging waste.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Weighed LDPE film waste from the packing area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `afw-pefcr-2025`

##### Elementary flows

###### Fossil carbon dioxide from diesel combustion (`finish_co2_fossil_output`)

Record direct fossil carbon dioxide from diesel consumed inside the foreground boundary.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or collected diesel quantity multiplied by a disclosed, jurisdiction-appropriate factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `ec-pef-method-2021`

###### Nitrogen oxides from diesel combustion (`finish_nox_output`)

Record nitrogen oxides from diesel combustion separately from carbon dioxide.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or collected diesel quantity multiplied by a disclosed, jurisdiction-appropriate factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `ec-pef-method-2021`

###### Particulate matter below 2.5 micrometres from diesel combustion (`finish_pm25_output`)

Record fine particulate emissions from diesel combustion as a separate elementary exchange.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or collected diesel quantity multiplied by a disclosed, jurisdiction-appropriate factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `ec-pef-method-2021`

###### Non-methane volatile organic compounds from finishing (`finish_nmvoc_output`)

Record measured NMVOC released from adhesive, stain-removal, printing, or finishing products used inside this process.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Stack or workplace-exhaust measurement, or chemical mass balance using disclosed volatile fraction and capture efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `ec-pef-method-2021`

###### Refrigerant R-410A emitted to air (`r410a_emission_output`)

Record the inventory-balance loss of R-410A to air; other refrigerants require separate atomic rows.

- Selected flow: Refrigerant R-410A to air
- Flow property / unit: Mass / kg
- Amount rule: R-410A makeup minus recovered or transferred quantity, reconciled to equipment service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_pack_batch_records`
- Sources: `ec-pef-method-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | independently_meterable_processes | Avoid allocation by subdividing cutting, sewing, wet processing, pressing, inspection, rework, and packing wherever separate material or utility records are available. | `ec-pef-method-2021`; `afw-pefcr-2025` |
| `allocation_02` | shared_materials | Assign shell, lining, interlining, pocketing, thread, fasteners, labels, bonding media, chemicals, and packaging using style-specific issue, return, and stock-change records; do not allocate a combined material total. | `afw-pefcr-2025` |
| `allocation_03` | shared_electricity | Use submetered kWh; if unavailable, allocate only the shared electricity remainder by documented machine operating time multiplied by rated or measured load, then disclose the unmetered share. | `afw-pefcr-2025` |
| `allocation_04` | shared_thermal_energy | Allocate steam or hot-water energy by process heat meters or measured batch demand; if unavailable, use documented equipment time and thermal duty, keeping steam and hot water separate. | `afw-pefcr-2025` |
| `allocation_05` | rework_and_rejects | Retain burdens of rework and irreparable rejects in the reporting period denominator and normalise them over conforming output; report reject mass and destination separately and do not treat rejects as co-products. | `afw-pefcr-2025` |
| `allocation_06` | cutting_offcuts | Report textile cutting offcuts as waste output by composition and destination. Do not grant an avoided-product credit inside this foreground dataset; any recycling benefit or burden belongs to the declared downstream treatment model. | `ec-pef-method-2021`; `afw-pefcr-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_batch_records` | `fabric_preparation_cutting` | fabric, marker paper, electricity, cut panels, cutting offcuts | BOM issue/return, scale ticket, cutting plan, meter or machine log | style_id; batch_id; component_id; material_specification; opening_stock; issued_mass; returned_mass; closing_stock; cut_panel_mass; offcut_mass; marker_paper_mass; kWh; operating_time | Reconcile warehouse, cutting-room, scale, and meter records to the same batch | kg; kWh; h | Each batch, aggregated monthly | At least 12 consecutive months or the full campaign if shorter | All cutting lines producing the declared product | Sum atomic exchanges by row_id and divide by accepted cut-panel mass, retaining batch variation | Calibrated scale and meter certificates; signed issue/return records; marker plan; batch reconciliation |
| `cp_sewing_batch_records` | `sewing_assembly` | panels, thread, fasteners, bonding tape, electricity, assembled output, sewing waste | BOM issue/return, piece count, scale ticket, meter or machine log, rejection log | style_id; batch_id; component_id; count; mass_per_item; issued_mass; returned_mass; closing_stock; assembled_mass; rejected_mass; kWh; operating_time | Reconcile each BOM item and utility record to accepted assembled output | kg; count; kWh; h | Each batch, aggregated monthly | At least 12 consecutive months or the full campaign if shorter | All sewing and assembly lines producing the declared product | Convert counted items to mass using measured or supplier mass per item; sum by row_id and divide by accepted assembled mass | BOM revision; calibrated scales; component specifications; meter records; rejection and rework logs |
| `cp_wet_processing_batch_records` | `garment_wet_processing` | garment input, water, hot water, electricity, gas, chemicals, steam, garment output, wastewater, sludge, combustion emissions | Recipe, dosing log, inlet/effluent meter, utility meter, fuel invoice, batch scale, effluent test, sludge ticket | recipe_id; batch_id; input_mass; output_mass; water_mass; hot_water_energy; kWh; gas_MJ; chemical_name; concentration; dosed_mass; steam_mass; steam_pressure; wastewater_mass; sludge_mass; dry_solids; emission_factor_reference | Collect each recipe batch and reconcile water, material, fuel, and energy records; calculate emissions only from collected activity data and disclosed factors | kg; kWh; MJ | Each batch; emissions and sludge at least monthly | At least 12 consecutive months or the full campaign if shorter | All on-site wet-processing and associated treatment equipment | Sum by atomic row_id, subtract internal recirculation, and divide by conditioned accepted output mass | Calibrated meters; recipe approval; safety data sheet; laboratory report; fuel invoice; factor provenance; treatment manifest |
| `cp_finish_pack_batch_records` | `pressing_inspection_packaging` | garment input, electricity, steam, diesel, refrigerant, packaging, finished output, rejects, packaging waste, direct emissions | Transfer record, meter, fuel and refrigerant inventory, packing BOM, count, scale ticket, inspection and waste log | style_id; batch_id; input_mass; conforming_output_mass; reject_mass; rework_mass; kWh; steam_energy; diesel_mass; refrigerant_opening; refrigerant_purchase; refrigerant_closing; refrigerant_recovered; packaging_component; component_count; mass_per_component; packaging_waste_mass; emission_factor_reference | Reconcile input, conforming output, rejects, rework, packaging, fuel, and refrigerant service records to the same production period | kg; count; kWh; MJ | Each batch, aggregated monthly | At least 12 consecutive months or the full campaign if shorter | All final finishing, inspection, rework, and packing operations serving the declared product | Sum each atomic exchange by row_id and divide by conforming net finished mass; keep sale packaging outside net product mass unless explicitly included | Calibrated scales and meters; inspection record; packaging specification; fuel invoice; refrigerant service log; waste manifest; factor provenance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | reference normalisation | Normalised exchange = reconciled exchange amount / conforming net finished-garment mass. | Atomic exchange amount; conforming output mass | Exchange per 1 kg reference product | `afw-pefcr-2025` |
| `calc_02` | material mass balance | For each material identity: opening stock + receipts - closing stock = conforming product content + recoverable return + waste + documented stock adjustment. Investigate rather than hide an unexplained residual. | Stock, receipt, return, product, and waste mass by material | Reconciled atomic material input and residual | `afw-pefcr-2025` |
| `calc_03` | counted component mass | Component mass = installed count × measured or supplier-declared mass per item; reconcile against issue and return records. | Count; mass per item; issue; return | kg of one fastener, label, or packaging component | `afw-pefcr-2025` |
| `calc_04` | shared electricity | Allocated kWh = shared-meter kWh × process machine-load-weighted operating time / total machine-load-weighted operating time; report the shared-meter fraction. | Meter kWh; machine time; rated or measured load | Process electricity by atomic row | `afw-pefcr-2025` |
| `calc_05` | purchased steam or hot water | Thermal energy is calculated from metered mass or volume and documented supply/return enthalpy; steam and hot water remain separate outputs of the calculation. | Meter reading; temperature; pressure; enthalpy factor | MJ of purchased steam or hot water | `afw-pefcr-2025` |
| `calc_06` | refrigerant loss | Refrigerant emitted = opening stock + purchases - closing stock - quantity recovered - quantity transferred to verified equipment inventory. | Refrigerant inventory and service records | kg R-410A emitted | `ec-pef-method-2021` |
| `calc_07` | direct combustion emission | Emission = collected fuel quantity × disclosed factor for the specific fuel, combustion technology, pollutant, and jurisdiction; create one output row per pollutant. | Fuel record; factor reference; control efficiency | kg of one elementary emission | `ec-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01` | product identity | The dataset shall identify garment type, wearer group, style, reference size or size mix, net mass, BOM revision, textile composition and construction, finish, colour, trim set, wet-processing route, and packaging inclusion. | Approved product specification, BOM, care label, and batch record |
| `dq_02` | completeness | Cover all required processes and every material or energy exchange contributing to the reconciled batch; account explicitly for rejects, rework, cutting offcuts, packaging waste, wastewater, sludge, and direct emissions when applicable. | Process map, mass and energy balance, waste manifests, and exception log |
| `dq_03` | temporal representativeness | Use at least 12 consecutive months unless production is campaign-based; for a shorter campaign, use the full campaign and disclose seasonality and idle-period treatment. | Meter dates, invoices, production calendar, and aggregation workbook |
| `dq_04` | geographical and technological representativeness | Identify every manufacturing and outsourced location, equipment route, electricity basis, heat supply, treatment route, and upstream dataset geography. | Facility list, supplier declaration, meter contract, and dataset metadata |
| `dq_05` | measurement quality | Scales and meters shall have in-date calibration or verification; calculated values shall retain raw records, formula, factor source, and reviewer. | Calibration certificate, raw log, calculation file, and approval record |
| `dq_06` | uncertainty and gaps | Report data coverage, proxy use, allocation share, missing UUIDs, missing meters, estimated factors, and sensitivity-relevant choices; do not replace missing foreground amounts with uncited AI ranges. | Data-quality register and unresolved-item log |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference_flow | The reference output shall use UUID `039191b4-8865-4c2e-83b4-afd3f17435c3`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, with every required qualifier declared. | `unsd-cpc-3-28231` |
| `validation_02` | product_scope | Reject datasets for knitted or crocheted garments, fur apparel, women's or girls' garments, shirts or underwear, accessories, footwear, or fabric sold as material. | `unsd-cpc-3-28231` |
| `validation_03` | atomic_inventory | Every inventory card shall contain one selected exchange. Reject combined utilities, fuels, chemicals, packaging, waste, or emission labels and require a separate row for each actual exchange. | `afw-pefcr-2025` |
| `validation_04` | mass_balance | Require reconciled style- and batch-specific material balance. Investigate unexplained residuals and verify that conforming output, rework, rejects, cutting offcuts, and stock changes are not double counted. | `afw-pefcr-2025` |
| `validation_05` | conditional_processes | If garment washing, dyeing, bleaching, softening, rinsing, printing, embroidery, coating, or dry treatment occurs, require the corresponding process, atomic input, waste, and emission records or an explicitly linked outsourced dataset. | `afw-pefcr-2025`; `lindkvist-2024-circular-garment-lca` |
| `validation_06` | energy_and_fuels | Require electricity, purchased steam, hot water, natural gas, and diesel to remain separate, with location and supply basis disclosed and no double counting of on-site fuel and purchased heat. | `ec-pef-method-2021`; `afw-pefcr-2025` |
| `validation_07` | packaging | Require LDPE polybag, corrugated carton, paper hangtag, polypropylene tape, and any additional packaging actually used to be recorded as separate atomic rows; verify whether packaging is excluded from net product mass. | `afw-pefcr-2025` |
| `validation_08` | direct_emissions | Where fuel combustion, volatile chemicals, wastewater treatment, or refrigerant servicing occurs, require pollutant-specific direct emissions calculated from collected activity data or measured directly, with factor provenance and compartment disclosed. | `ec-pef-method-2021` |
| `validation_09` | data_quality | Fail completeness when temporal coverage, facility coverage, calibration evidence, BOM coverage, allocation basis, proxy disclosure, or waste destination is missing. | `afw-pefcr-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for non-knitted, non-crocheted men's or boys' garment manufacture |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Construction of product-system inventories and lifecycle models when product type, BOM, geography, technology, time, boundary, and packaging convention are compatible |
| excluded_use | Direct consumer-service comparison, use-phase claims, durability claims, knitted apparel, fur apparel, other wearer/product categories, or a fabric-production proxy without additional rules |
| required_metadata | PCR id and version; reference UUIDs; garment type; style and size basis; net mass; full BOM; component composition; route; facility geography; reporting period; integrated and outsourced steps; utility basis; allocation; waste destinations; packaging convention |
| required_quality_disclosure | Primary-data coverage; meter and scale quality; temporal, geographical and technological representativeness; allocation shares; proxy datasets; missing UUIDs; emission-factor provenance; mass-balance residuals; uncertainty and exclusions |
| update_trigger | Change in garment construction or BOM, production or wet-processing route, facility or country, utility supply, refrigerant, packaging system, allocation method, waste destination, reference-flow identity, or governing evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-28231` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 28231, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/28231 (retrieved 2026-08-13) | Product-category boundary and classification identity |
| `afw-pefcr-2025` | standard | Technical Secretariat of the PEFCR for Apparel and Footwear, Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025, https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (retrieved 2026-08-13) | Functional-unit concepts, BOM and primary-data requirements, manufacturing process decomposition, losses, packaging, electricity, allocation, and data quality |
| `ec-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-13) | System-boundary, allocation, electricity, direct-emission, dataset quality, and downstream life-cycle modelling rules |
| `lindkvist-2024-circular-garment-lca` | literature | Lindkvist et al., Life cycle assessment of a circular textile value chain: the case of a garment made from chemically recycled cotton, The International Journal of Life Cycle Assessment, 2024, https://doi.org/10.1007/s11367-024-02346-2 | Garment-production sequence including cutting, sewing, trim attachment, ironing, printing/drying, quality control, packaging, and waste handling |
| `daystar-2024-cotton-apparel-dlca` | literature | Daystar et al., Evaluating cotton apparel with dynamic life cycle assessment: the climate benefits of temporary biogenic carbon storage, BioResources 19(3), 2024, https://doi.org/10.15376/biores.19.3.5074-5095 | Woven-pants manufacturing boundary, cut-and-sew process, transport context, consumer care, and end-of-life separation |
