---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-knitte-ab1a1a9a
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, knitted or crocheted

## 1. Scope and Applicability

This PCR governs factory-gate foreground data packages for manufacturing women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts, and like garments whose garment-forming textile is knitted or crocheted. It covers pattern cutting, sewing and assembly, any garment-level wet finishing performed by the reporting facility, pressing, inspection, and sale packaging. It applies to the declared product style and bill of materials rather than to an unspecified market-average garment.

Production of fibres, yarn, knitted or crocheted fabric, trims, chemicals, energy carriers, and packaging materials is represented by separate upstream datasets. Distribution, retail, consumer use, repair, reuse, and end-of-life are outside the foreground manufacturing package, but the package is designed to support a downstream apparel life-cycle model. Non-knitted or non-crocheted garments, hosiery, shirts and underwear classified outside CPC 28223, babies' garments, sportswear subclasses, fur apparel, leather apparel, and footwear are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-knitte-ab1a1a9a |
| classification_refs | CPC 3.0: 28223 (exact scope reference) |
| covered_products | Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts, and like garments, knitted or crocheted |
| excluded_products | Non-knitted or non-crocheted garments; hosiery; blouses, shirts, underwear, nightwear, and dressing gowns; T-shirts and vests; jerseys and pullovers; babies' garments; track suits, ski suits, swimwear, and other separately classified garments; accessories; fur, leather, plastic, felt, or nonwoven apparel; footwear |
| representative_product | A factory-gate, sale-packaged knitted or crocheted women's or girls' garment made to one declared style, size assortment, fibre composition, and trim specification |
| production_route | Receipt of finished knitted or crocheted fabric and trims; pattern cutting; sewing and assembly; conditional garment-level wet finishing; pressing and inspection; sale packaging |
| market_state | Finished, inspected, and sale-packaged garment at the manufacturing facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished knitted or crocheted women's or girls' garment within CPC 28223, with declared style, fibre composition, trim bill, finishing route, and packaging configuration |
| How much | 1 kg net mass of conforming finished garments, with sale packaging reported separately and included in the foreground inventory |
| How well | Meets the declared product specification, size assortment, workmanship and inspection criteria, fibre-content declaration, colour/finish specification, and sale-packaging specification |
| How long or cycle | One factory-gate production and delivery event; consumer service life is not represented by this foreground reference flow |
| reference_flow_link | The reference product output `final_packaged_garment` is normalized to 1 kg net finished-garment mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished-garment mass |
| Reference product flow | Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, knitted or crocheted `06ca6094-ac7b-482e-a629-0def31609f23` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment type and style code; women's or girls' designation; knitted or crocheted construction; fibre composition by mass; size assortment; net garment mass; trim and accessory bill; dyeing and finishing route; wet-finishing applicability; production geography and period; sale-packaging configuration; recycled-content claims; quality acceptance criteria |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all textile material, trim, chemical, packaging, waste, and direct-emission mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize exchanges to 1 kg net mass of accepted finished garments. Weigh sale packaging separately and do not include it in the reference mass. |
| `electricity_measurement` | Each process-specific electricity row | Energy | kWh | Record meter, submeter, or allocated invoice energy for the declared production period and normalize by accepted finished-garment mass. Do not combine electricity with steam or fuel. |
| `steam_measurement` | Each purchased-steam row | Energy or steam mass with declared conversion basis | MJ or kg steam | Retain the metered quantity, pressure/enthalpy basis, and any conversion used. Do not combine steam with natural gas or electricity. |
| `fuel_measurement` | Natural gas combusted on site | Energy or standard volume with declared conversion basis | MJ or m3 | Record the purchased or metered fuel quantity, lower or higher heating-value basis, and conversion to the model unit. |
| `water_measurement` | Wet-finishing process water and wastewater | Volume and mass where needed for balance | m3 and kg | Meter intake and discharge separately; retain batch count, recipe, and any density conversion used for mass-based reporting. |
| `component_count_to_mass` | Buttons, zippers, care labels, and other count-managed components | Mass | kg | Convert accepted and rejected component counts to mass using representative measured unit mass for the same component specification and production period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished knitted or crocheted fabric, sewing thread, product-specific trims, process chemicals, utilities, and packaging materials received at the garment manufacturing facility |
| starting_condition_role | These incoming products are upstream dataset interfaces; their production is not recreated inside the garment foreground package |
| product_classification_scope | Finished women's or girls' CPC 28223 garments only; intermediate fabric and trim inputs retain their own product identities |
| recursive_input_rule | If a CPC 28223 garment is used as an input for rework or remanufacturing, record it as a separately identified incoming product with origin, condition, and mass; do not expand it recursively as new garment production |
| upstream_dataset_requirement | Link each fabric, trim, chemical, electricity, steam, natural-gas, water, and packaging input to a geographically and technologically representative upstream dataset; disclose any proxy |
| disclosure | Declare facility geography, reporting period, included sites, style and size mix, fibre and trim composition, wet-finishing route, utility supply, waste routes, sale packaging, data gaps, and allocation choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | All foreground packages | Include pattern cutting, sewing and assembly, pressing, inspection, and sale packaging when performed by or for the reporting facility; include garment-level wet finishing only when it occurs for the declared product. | `ec-apparel-footwear-pefcr-2025`; `ijlc-lyocell-dress-2026` |
| `boundary_input_output_inventory` | Each included process | Record the quantity and characteristics of textile materials, process chemicals, water, energy, wastewater, direct emissions, and each waste type crossing the process boundary. | `eu-textiles-bat-2022-2508` |
| `boundary_upstream_separation` | Fabric, trims, chemicals, utilities, and packaging | Keep upstream production in linked datasets and retain the actual supplier, geography, technology, and recycled-content attributes needed to select them. | `eu-ef-recommendation-2021` |
| `boundary_downstream_exclusion` | Distribution, retail, use, and end-of-life | Exclude these stages from the foreground factory-gate package and disclose that a complete apparel life-cycle assessment must connect them downstream. | `ec-apparel-footwear-pefcr-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p01_pattern_cutting` | Pattern layout and cutting | `required` | Included for all cut-and-sew garments | Converts incoming knitted or crocheted fabric into cut garment panels and segregated cutting scrap | Per 1 kg net accepted finished garment |
| `p02_sewing_assembly` | Sewing and garment assembly | `required` | Included for all covered garments | Joins panels and product-specific trims into an assembled garment | Per 1 kg net accepted finished garment |
| `p03_wet_finishing` | Garment-level wet finishing | `conditional` | Included when garment washing, garment dyeing, softening, or another wet finish occurs after assembly | Applies the declared wet recipe and records water, chemicals, energy, wastewater, sludge, and direct fuel emissions | Per 1 kg net accepted finished garment receiving the route |
| `p04_pressing_inspection` | Pressing, final finishing, and inspection | `required` | Included for all covered garments; zero steam is permitted only when a documented steam-free route is used | Produces accepted unpacked garments and records rejected output separately through the applicable waste row | Per 1 kg net accepted finished garment |
| `p05_packaging` | Sale packaging | `required` | Included for all factory-gate products | Combines the accepted garment with its declared sale and shipping packaging | Per 1 kg net accepted finished garment |

### Process: Pattern layout and cutting (`p01_pattern_cutting`)

#### Inputs

##### Product flows

###### Knitted or crocheted garment fabric (`cutting_fabric`)

The finished fabric received for the declared style crosses the cutting boundary. Its fibre composition, fabric mass, recycled content, width, and supplier lot are retained.

- Selected flow: Knitted or crocheted textile fabric for the declared garment composition
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled fabric issued to cutting for the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_material_balance`
- Sources: `eu-textiles-bat-2022-2508`

###### Electricity for cutting (`cutting_electricity`)

Electricity used by spreading, cutting, extraction, and directly associated cutting equipment is recorded separately from all thermal energy.

- Selected flow: Electricity supplied to garment cutting equipment at the declared voltage and geography
- Flow property / unit: Energy / kWh
- Amount rule: Process submeter reading or documented causal allocation from a facility meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_energy`
- Sources: `eu-ef-recommendation-2021`; `ijlc-lyocell-dress-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut garment panels (`cut_panels`)

Accepted panels leaving cutting are weighed or calculated from controlled bundle records and reconciled to fabric input and scrap.

- Selected flow: Cut knitted garment panels
- Flow property / unit: Mass / kg
- Amount rule: Accepted panel mass transferred to sewing and assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_material_balance`
- Sources: `ijlc-lyocell-dress-2026`

##### Waste flows

###### Knitted textile cutting scrap (`cutting_textile_waste`)

Offcuts and rejected panels generated by cutting are recorded as one composition-specific waste stream and kept separate from sewing waste.

- Selected flow: Knitted textile cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap by fibre composition and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_material_balance`
- Sources: `eu-textiles-bat-2022-2508`; `ijlc-lyocell-dress-2026`

##### Elementary flows

### Process: Sewing and garment assembly (`p02_sewing_assembly`)

#### Inputs

##### Product flows

###### Cut garment panels entering assembly (`assembly_panels`)

Accepted panels transferred from cutting are recorded at the assembly boundary.

- Selected flow: Cut knitted garment panels
- Flow property / unit: Mass / kg
- Amount rule: Transferred panel mass reconciled to `cut_panels`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_material_balance`
- Sources: `ijlc-lyocell-dress-2026`

###### Sewing thread (`sewing_thread`)

Thread issued to the declared style is recorded by its actual fibre composition and specification.

- Selected flow: Sewing thread of the declared fibre composition
- Flow property / unit: Mass / kg
- Amount rule: Issued mass less returned unused mass for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_material_balance`
- Sources: `eu-textiles-bat-2022-2508`

###### Garment button (`garment_button`)

Buttons are included only for styles that use them and are recorded for the declared material and component specification.

- Selected flow: Garment button of the declared material
- Flow property / unit: Mass / kg
- Amount rule: Accepted component count multiplied by measured unit mass, plus recorded assembly losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_components`
- Sources: `eu-textiles-bat-2022-2508`

###### Garment zipper (`garment_zipper`)

Zippers are included only for styles that use them and are recorded for the declared material, length, and construction.

- Selected flow: Garment zipper of the declared material and length
- Flow property / unit: Mass / kg
- Amount rule: Accepted component count multiplied by measured unit mass, plus recorded assembly losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_components`
- Sources: `eu-textiles-bat-2022-2508`

###### Textile interfacing (`garment_interfacing`)

Interfacing is included only when present in the declared bill of materials and is recorded by composition and adhesive system.

- Selected flow: Textile interfacing of the declared composition
- Flow property / unit: Mass / kg
- Amount rule: Issued mass less returned unused mass for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_material_balance`
- Sources: `eu-textiles-bat-2022-2508`

###### Printed textile care label (`garment_care_label`)

The sewn-in care or composition label is recorded separately from the paper hangtag used in packaging.

- Selected flow: Printed textile care label
- Flow property / unit: Mass / kg
- Amount rule: Accepted label count multiplied by measured unit mass, plus recorded assembly losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_components`
- Sources: `eu-textiles-bat-2022-2508`

###### Electricity for sewing and assembly (`assembly_electricity`)

Electricity used by sewing, overlocking, seam sealing when applicable, and directly associated assembly equipment is recorded as one process-specific electricity exchange.

- Selected flow: Electricity supplied to sewing equipment at the declared voltage and geography
- Flow property / unit: Energy / kWh
- Amount rule: Process submeter reading or documented causal allocation from a facility meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources: `eu-ef-recommendation-2021`; `ijlc-lyocell-dress-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled garment (`assembled_garment`)

The garment transferred from assembly is recorded before any garment-level wet finishing or pressing.

- Selected flow: Assembled knitted or crocheted garment before wet finishing or pressing
- Flow property / unit: Mass / kg
- Amount rule: Weighed or statistically controlled assembled-garment mass transferred from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_material_balance`
- Sources: `ijlc-lyocell-dress-2026`

##### Waste flows

###### Sewing-stage textile scrap (`sewing_textile_waste`)

Thread ends, seam-trimming scrap, and rejected textile components are collected as one composition-specific sewing-stage textile waste stream, separate from cutting scrap.

- Selected flow: Sewing-stage knitted textile scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed sewing-stage textile waste by declared fibre composition and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_material_balance`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

### Process: Garment-level wet finishing (`p03_wet_finishing`)

#### Inputs

##### Product flows

###### Assembled garment for wet finishing (`wet_finish_garment_input`)

This intermediate product is recorded only when the declared garment receives washing, dyeing, softening, or another wet finish after assembly.

- Selected flow: Assembled knitted or crocheted garment for wet finishing
- Flow property / unit: Mass / kg
- Amount rule: Batch load mass reconciled to the assembly transfer record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving wet finishing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Process water for wet finishing (`wet_finish_water`)

Water entering the garment wet-finishing equipment is metered separately from discharged wastewater.

- Selected flow: Process water for garment wet finishing
- Flow property / unit: Volume / m3
- Amount rule: Metered batch or period water intake allocated to the declared wet-finishing batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving wet finishing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Non-ionic textile washing detergent (`wet_finish_detergent`)

The actual detergent formulation used by the wet-finishing recipe is recorded as a separate chemical input.

- Selected flow: Non-ionic textile washing detergent
- Flow property / unit: Mass / kg
- Amount rule: Recipe issue record reconciled to stock change and returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving the detergent route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_chemicals`
- Sources: `eu-textiles-bat-2022-2508`

###### Textile dye (`wet_finish_dye`)

Dye is included only for garment-dyed routes and must be identified by the actual recipe chemical or commercial preparation.

- Selected flow: Textile dye used in the declared garment-dyeing recipe
- Flow property / unit: Mass / kg
- Amount rule: Recipe issue record reconciled to stock change and returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving garment dyeing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_chemicals`
- Sources: `eu-textiles-bat-2022-2508`

###### Textile softening agent (`wet_finish_softener`)

Softener is included only when specified by the garment-finishing recipe and is kept separate from detergent and dye.

- Selected flow: Textile softening agent used in the declared finishing recipe
- Flow property / unit: Mass / kg
- Amount rule: Recipe issue record reconciled to stock change and returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving softening
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_chemicals`
- Sources: `eu-textiles-bat-2022-2508`

###### Electricity for wet finishing (`wet_finish_electricity`)

Electricity used by washers, dyeing machines, pumps, centrifuges, dryers, and directly associated controls is recorded separately from steam and natural gas.

- Selected flow: Electricity supplied to wet-finishing equipment at the declared voltage and geography
- Flow property / unit: Energy / kWh
- Amount rule: Process submeter reading or documented causal allocation from a facility meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving wet finishing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_energy`
- Sources: `eu-textiles-bat-2022-2508`

###### Purchased steam for wet finishing (`wet_finish_steam`)

Purchased steam crossing the facility or process boundary is recorded separately. Steam generated on site is represented by its boiler fuel and the documented steam allocation, not both as purchased steam and fuel for the same heat.

- Selected flow: Purchased steam supplied to garment wet finishing
- Flow property / unit: Mass or energy / kg steam or MJ
- Amount rule: Metered steam assigned to declared wet-finishing batches with pressure or enthalpy basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving purchased steam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_energy`
- Sources: `eu-textiles-bat-2022-2508`

###### Natural gas for direct wet-finishing heat (`wet_finish_natural_gas`)

Natural gas is included only when combusted on site for the declared wet-finishing or drying route and is kept separate from purchased steam and electricity.

- Selected flow: Natural gas combusted in wet-finishing equipment
- Flow property / unit: Energy or standard volume / MJ or m3
- Amount rule: Metered or invoice-reconciled fuel assigned to the declared wet-finishing batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving direct natural-gas heat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_fuel`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-finished garment (`wet_finished_garment`)

The garment leaving wet finishing is weighed after the declared conditioning state and transferred to pressing and inspection.

- Selected flow: Wet-finished knitted or crocheted garment
- Flow property / unit: Mass / kg
- Amount rule: Accepted conditioned garment mass transferred from wet finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving wet finishing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_batch`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

###### Wet-finishing wastewater (`wet_finish_wastewater`)

Wastewater leaving the wet-finishing process is recorded before off-site discharge or transfer to treatment, with recipe and relevant quality parameters retained.

- Selected flow: Wastewater from garment wet finishing
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge assigned to declared wet-finishing batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving wet finishing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_wastewater`
- Sources: `eu-textiles-bat-2022-2508`

###### Wet-finishing wastewater treatment sludge (`wet_finish_sludge`)

Sludge is included only when generated by on-site treatment of the declared wet-finishing wastewater and is recorded separately from wastewater.

- Selected flow: Textile wet-finishing wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge with dry-matter content and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment whose wastewater generated the sludge
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finish_wastewater`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

###### Direct fossil carbon dioxide (`direct_fossil_co2`)

Direct fossil carbon dioxide is calculated only for natural gas combusted inside the foreground boundary; upstream fuel-supply emissions remain in the linked fuel dataset.

- Selected flow: Carbon dioxide, fossil, emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected natural-gas use, verified carbon content or applicable emission factor, oxidation factor, and molecular-mass conversion under `calc_direct_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving direct natural-gas heat
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_finish_fuel`
- Sources: `eu-textiles-bat-2022-2508`

### Process: Pressing, final finishing, and inspection (`p04_pressing_inspection`)

#### Inputs

##### Product flows

###### Garment ready for pressing (`pressing_garment_input`)

The assembled garment or, where applicable, the wet-finished garment enters pressing under one declared route state.

- Selected flow: Knitted or crocheted garment ready for pressing
- Flow property / unit: Mass / kg
- Amount rule: Transferred garment mass reconciled to the preceding route output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_output`
- Sources: `ijlc-lyocell-dress-2026`

###### Electricity for pressing and inspection (`pressing_electricity`)

Electricity used by pressing, inspection lighting, metal detection when applicable, and directly associated equipment is recorded separately from steam.

- Selected flow: Electricity supplied to garment pressing equipment at the declared voltage and geography
- Flow property / unit: Energy / kWh
- Amount rule: Process submeter reading or documented causal allocation from a facility meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_energy`
- Sources: `eu-ef-recommendation-2021`

###### Purchased steam for pressing (`pressing_steam`)

Purchased steam used by irons, presses, or finishing cabinets is recorded as a separate exchange. A documented steam-free route may report this row as not applicable.

- Selected flow: Purchased steam supplied to garment pressing
- Flow property / unit: Mass or energy / kg steam or MJ
- Amount rule: Metered steam assigned to the declared product with pressure or enthalpy basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment receiving purchased steam
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_energy`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished unpacked garment (`finished_unpacked_garment`)

Only garments accepted against the declared final inspection criteria proceed to sale packaging.

- Selected flow: Finished knitted or crocheted garment before sale packaging
- Flow property / unit: Mass / kg
- Amount rule: Weighed or statistically controlled accepted output mass; rejected garments are separately disclosed and not included in the reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_output`
- Sources: `eu-ef-recommendation-2021`

##### Waste flows

##### Elementary flows

### Process: Sale packaging (`p05_packaging`)

#### Inputs

##### Product flows

###### Finished garment entering packaging (`packaging_garment_input`)

The accepted unpacked garment enters the packaging process without changing its net reference mass.

- Selected flow: Finished knitted or crocheted garment before sale packaging
- Flow property / unit: Mass / kg
- Amount rule: Accepted garment mass reconciled to `finished_unpacked_garment`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_balance`
- Sources: `eu-ef-recommendation-2021`

###### Corrugated fibreboard shipping carton (`corrugated_carton`)

The actual corrugated carton mass is recorded separately from the garment bag and paper hangtag.

- Selected flow: Corrugated fibreboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Issued carton count multiplied by measured unit mass and reconciled to inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_balance`
- Sources: `eu-ef-recommendation-2021`

###### Low-density polyethylene garment bag (`ldpe_bag`)

The actual garment bag is recorded by polymer, film thickness, recycled content, and measured unit mass.

- Selected flow: Low-density polyethylene garment bag
- Flow property / unit: Mass / kg
- Amount rule: Issued bag count multiplied by measured unit mass and reconciled to inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_balance`
- Sources: `eu-ef-recommendation-2021`

###### Printed paper garment hangtag (`paper_hangtag`)

The paper hangtag is recorded separately from the sewn-in textile care label.

- Selected flow: Printed paper garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: Issued hangtag count multiplied by measured unit mass and reconciled to inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_material_balance`
- Sources: `eu-ef-recommendation-2021`

###### Electricity for packaging (`packaging_electricity`)

Electricity used by sealing, labelling, weighing, and directly associated packaging equipment is recorded separately.

- Selected flow: Electricity supplied to garment packaging equipment at the declared voltage and geography
- Flow property / unit: Energy / kWh
- Amount rule: Process submeter reading or documented causal allocation from a facility meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`
- Sources: `eu-ef-recommendation-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sale-packaged finished garment (`final_packaged_garment`)

This is the reference product output. Its amount is normalized to 1 kg net garment mass, while packaging materials remain separately quantified inputs.

- Selected flow: Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, knitted or crocheted `06ca6094-ac7b-482e-a629-0def31609f23`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Accepted net finished-garment mass normalized to exactly 1 kg; sale-packaging mass is excluded from this amount
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_output`
- Sources: `unsd-cpc-v3-2025`

##### Waste flows

###### Corrugated fibreboard packaging waste (`packaging_cardboard_waste`)

Damaged cartons and carton offcuts arising at packaging are recorded separately from plastic film waste.

- Selected flow: Corrugated fibreboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste assigned to the declared production period and disposal or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_balance`
- Sources: `eu-textiles-bat-2022-2508`

###### Low-density polyethylene packaging waste (`packaging_polyethylene_waste`)

Rejected garment bags and polyethylene film scrap arising at packaging are recorded as a separate polymer-specific waste stream.

- Selected flow: Low-density polyethylene film packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste assigned to the declared production period and disposal or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_balance`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared production lines, utilities, and treatment systems | Avoid allocation through subdivision, process-specific metering, batch records, and separate waste measurement wherever practicable. | `eu-ef-recommendation-2021`; `eu-textiles-bat-2022-2508` |
| `allocation_causal_driver` | Shared inputs and outputs that cannot be subdivided | Use a documented causal driver: machine operating time or metered load for electricity, metered steam or heat demand for steam, batch load and recipe for wet-finishing inputs and wastewater, and measured output or waste mass for material balances. Mass allocation is allowed only when the affected products use the shared operation in materially equivalent ways and this is demonstrated. | `eu-ef-recommendation-2021` |
| `allocation_scrap` | Textile and packaging wastes sent for recycling or recovery | Report the waste mass and destination at the foreground boundary. Do not credit avoided production inside this factory-gate package; any recycling benefit or burden is modelled transparently in the downstream life-cycle scenario. | `eu-ef-recommendation-2021` |
| `allocation_rework` | Rework that returns within the same reporting period | Keep internal rework inside the process balance and count only unrecovered rejected material as waste. Disclose rework rates and prevent double counting of intermediate garment mass. | `eu-textiles-bat-2022-2508` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_material_balance` | `p01_pattern_cutting` | Fabric input, accepted panels, and cutting scrap | Weighing records, issue/return records, and waste tickets | style_code; fabric_lot; fibre_composition; fabric_input_kg; panels_output_kg; scrap_kg; scrap_destination; timestamp | Calibrated scales reconciled to stores and cutting bundle records | kg | Each production lot, aggregated monthly | Complete declared reporting period | Every included cutting site | Sum by style and fibre composition; reconcile input to panels, scrap, and documented stock change | Scale calibration; signed issue records; waste transfer evidence; reconciliation variance |
| `cp_cutting_energy` | `p01_pattern_cutting` | Cutting electricity | Meter or submeter log | meter_id; start_kwh; end_kwh; production_lot; machine_hours; allocation_driver | Direct submeter; otherwise facility meter allocated by documented machine load and operating time | kWh | Meter interval no longer than one month | Complete declared reporting period | Every included cutting site | Sum direct readings or causal allocation; normalize by accepted output mass | Meter identifier; calibration or utility invoice; allocation worksheet |
| `cp_assembly_material_balance` | `p02_sewing_assembly` | Panels, thread, interfacing, assembled garment, and sewing scrap | Issue/return, transfer, weighing, and waste records | style_code; panel_input_kg; thread_issued_kg; thread_returned_kg; interfacing_kg; assembled_output_kg; sewing_scrap_kg; destination | Controlled stores records and calibrated scales | kg | Each production lot, aggregated monthly | Complete declared reporting period | Every included assembly site | Sum by style; reconcile material input, output, scrap, rework, and stock change | Stores reconciliation; scale calibration; transfer sign-off; waste ticket |
| `cp_assembly_components` | `p02_sewing_assembly` | Buttons, zippers, and care labels | Bill of materials, issue/return records, and unit-mass sample | component_id; material; count_issued; count_returned; count_rejected; sample_count; sample_mass_kg | Controlled count with representative unit-mass measurement for the same specification | count and kg | Each component lot and style | Complete declared reporting period | Every included assembly site | Net count multiplied by measured unit mass; include recorded losses | Approved bill of materials; component specification; scale calibration; sample record |
| `cp_assembly_energy` | `p02_sewing_assembly` | Sewing electricity | Meter or submeter log | meter_id; start_kwh; end_kwh; machine_hours; style_code; allocation_driver | Direct submeter; otherwise causal allocation by equipment load and operating time | kWh | Meter interval no longer than one month | Complete declared reporting period | Every included assembly site | Sum or allocate to style, then normalize by accepted output mass | Meter identifier; utility invoice; equipment list; allocation worksheet |
| `cp_wet_finish_batch` | `p03_wet_finishing` | Garment load, water, and wet-finished output | Batch ticket, meter record, and scale record | recipe_id; batch_id; garment_input_kg; water_m3; garment_output_kg; start_time; end_time; conditioning_state | Batch-level controlled records, water meter, and calibrated scales | kg and m3 | Each wet-finishing batch | Complete declared reporting period | Every included wet-finishing site | Sum by recipe and style; normalize by accepted finished-garment mass receiving the route | Approved recipe; meter identifier; scale calibration; batch release record |
| `cp_wet_finish_chemicals` | `p03_wet_finishing` | Detergent, dye, and softener | Recipe issue and inventory records | chemical_id; commercial_name; function; batch_id; issued_kg; returned_kg; stock_change_kg; safety_data_sheet | Controlled chemical dispensing reconciled to stock | kg | Each wet-finishing batch | Complete declared reporting period | Every included wet-finishing site | Net issued mass by chemical identity and recipe | Approved recipe; dispensing calibration; stock reconciliation; safety data sheet |
| `cp_wet_finish_energy` | `p03_wet_finishing` | Electricity and purchased steam | Electricity and steam meter logs | meter_id; electricity_kwh; steam_kg_or_mj; pressure; enthalpy_basis; batch_id; allocation_driver | Direct process meters; otherwise causal batch allocation | kWh, kg steam, or MJ | Each batch or meter interval no longer than one month | Complete declared reporting period | Every included wet-finishing site | Keep electricity and steam separate; allocate by metered load, batch duration, and heat demand | Meter records; supplier invoice; conversion worksheet; batch log |
| `cp_wet_finish_fuel` | `p03_wet_finishing` | Natural gas and direct fossil carbon dioxide | Fuel meter, invoice, and verified factor record | meter_id; natural_gas_m3_or_mj; heating_value_basis; carbon_content_or_factor; oxidation_factor; batch_id | Direct fuel meter or invoice reconciliation; calculate direct CO2 with the applicable verified factor | m3 or MJ fuel; kg CO2 | Meter interval no longer than one month | Complete declared reporting period | Every included direct-fired wet-finishing site | Assign fuel causally to wet-finishing batches and calculate direct fossil CO2 under `calc_direct_fossil_co2` | Meter and invoice; factor provenance; calculation worksheet; combustion equipment record |
| `cp_wet_finish_wastewater` | `p03_wet_finishing` | Wastewater and treatment sludge | Discharge meter, laboratory, sludge weighing, and transfer records | wastewater_m3; pH; temperature; COD_or_TOC; colour; relevant_recipe_parameters; sludge_wet_kg; sludge_dry_matter; destination | Metered discharge, representative sampling, accredited analysis where applicable, and calibrated scales | m3, kg, and declared concentration units | Each batch for flow; analytical frequency justified by permit and recipe risk | Complete declared reporting period | Every included wet-finishing and on-site treatment site | Sum flow and mass by recipe; retain concentration and dry-matter basis; do not merge wastewater with sludge | Meter identifier; sampling chain; laboratory report; scale calibration; waste transfer note |
| `cp_pressing_energy` | `p04_pressing_inspection` | Pressing electricity and purchased steam | Meter or submeter log | electricity_kwh; steam_kg_or_mj; pressure; enthalpy_basis; operating_hours; style_code; allocation_driver | Direct meters; otherwise causal allocation by equipment load and operating time | kWh, kg steam, or MJ | Meter interval no longer than one month | Complete declared reporting period | Every included pressing site | Keep electricity and steam separate; normalize by accepted output mass | Meter identifier; utility or steam invoice; equipment list; allocation worksheet |
| `cp_pressing_output` | `p04_pressing_inspection` | Garment input, accepted output, rejection, and rework | Transfer, inspection, and weighing records | style_code; input_kg; accepted_count; accepted_kg; rejected_count; rejected_kg; rework_count; defect_code | Controlled transfer and inspection records with representative mass checks | count and kg | Each production lot | Complete declared reporting period | Every included final-inspection site | Exclude rejected output from reference mass; reconcile rework without double counting | Approved inspection criteria; signed release; scale calibration; defect log |
| `cp_packaging_material_balance` | `p05_packaging` | Carton, garment bag, hangtag, garment input, and packaging wastes | Bill of materials, issue/return, unit-mass, and waste records | packaging_item_id; material; recycled_content; count_issued; count_returned; sample_count; sample_mass_kg; waste_kg; destination; garment_input_kg | Controlled count and representative unit-mass measurement, reconciled to inventory and waste | count and kg | Each packaging lot and style | Complete declared reporting period | Every included packaging site | Calculate each packaging material separately and reconcile issued, returned, packed, and wasted quantities | Approved packaging specification; scale calibration; sample record; waste transfer note |
| `cp_packaging_energy` | `p05_packaging` | Packaging electricity | Meter or submeter log | meter_id; start_kwh; end_kwh; equipment_hours; packed_units; allocation_driver | Direct meter; otherwise causal allocation by equipment load and operating time | kWh | Meter interval no longer than one month | Complete declared reporting period | Every included packaging site | Sum or allocate, then normalize by accepted net garment mass | Meter identifier; utility invoice; equipment list; allocation worksheet |
| `cp_final_output` | `p05_packaging` | Reference product output | Final release, count, and mass records | style_code; size; accepted_count; net_garment_mass_kg; sale_packaging_mass_kg; release_date | Calibrated weighing of representative or complete accepted output with separate packaging tare | kg | Each production lot | Complete declared reporting period | Every included packaging site | Sum accepted net garment mass; divide all normalized exchanges by this mass; retain packaging separately | Scale calibration; tare procedure; final release record; lot reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | Every inventory row | Normalized amount = period or lot exchange amount / accepted net finished-garment mass for the same scope | Atomic exchange record; `cp_final_output.net_garment_mass_kg` | Exchange amount per 1 kg net accepted finished garment | `eu-ef-recommendation-2021` |
| `calc_component_mass` | `garment_button`, `garment_zipper`, `garment_care_label`, `corrugated_carton`, `ldpe_bag`, `paper_hangtag` | Component mass = net issued component count × measured unit mass for the same specification | Count issued; count returned; count rejected; sample mass; sample count | kg of the named component | `eu-textiles-bat-2022-2508` |
| `calc_material_balance` | Cutting, assembly, wet finishing, pressing, and packaging | Reconcile measured inputs = accepted outputs + waste outputs + net stock change + quantified process loss; investigate and disclose material residuals | Process input, output, waste, rework, and stock records | Process mass-balance residual and completeness flag | `eu-textiles-bat-2022-2508` |
| `calc_direct_fossil_co2` | `direct_fossil_co2` | Direct fossil CO2 = collected fuel quantity × verified carbon content or applicable CO2 factor × documented oxidation/conversion terms; never substitute an uncited default factor | Natural-gas record; heating-value basis; factor provenance; oxidation factor | kg fossil CO2 emitted to air | `eu-textiles-bat-2022-2508` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and all product inputs | Retain style, size assortment, fibre composition, fabric construction, trim specification, chemical identity, packaging specification, supplier, geography, and production period sufficient to select one real upstream flow for each exchange. | Approved bill of materials; supplier specifications; batch and lot records; `unsd-cpc-v3-2025` |
| `dq_primary_manufacturing` | All foreground processes | Use company-specific measurements and records for manufacturing exchanges. A proxy or modelled value must be separately identified, justified, and excluded from a claim of complete primary coverage. | Meter logs; invoices; issue/return records; batch tickets; `eu-ef-recommendation-2021` |
| `dq_temporal` | All records | Cover a continuous period representative of normal production, normally at least twelve months when available; disclose start/end dates, shutdowns, abnormal operations, and style-mix changes. | Reporting-period register; production calendar; exception log |
| `dq_completeness` | Inputs, outputs, wastewater, waste, and direct emissions | Demonstrate process-level input/output reconciliation and account separately for each material, chemical, energy carrier, waste type, and relevant direct emission. | Mass and energy balance; waste tickets; emission calculations; `eu-textiles-bat-2022-2508` |
| `dq_measurement` | Metered, weighed, counted, and laboratory data | Retain instrument identity, calibration or verification evidence, sampling method, unit conversion, and any count-to-mass sample basis. | Calibration certificates; laboratory reports; sampling and conversion worksheets |
| `dq_route_disclosure` | Conditional wet finishing and steam/fuel routes | State whether each conditional route occurred. Do not report zero as measured use when the correct state is not applicable. | Route declaration; recipe register; equipment and utility records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference product | Require exact product flow UUID `06ca6094-ac7b-482e-a629-0def31609f23`, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, kg unit, CPC 28223 scope, and all required qualifiers. | `unsd-cpc-v3-2025` |
| `validate_reference_mass` | Reference output and packaging | Require normalized reference output of exactly 1 kg net accepted garment mass and verify that sale-packaging mass is reported separately. | `eu-ef-recommendation-2021` |
| `validate_atomic_inventory` | All inventory cards | Reject a card that combines more than one material, chemical, energy carrier, waste stream, or elementary emission; electricity, steam, and natural gas must remain distinct. | `eu-textiles-bat-2022-2508` |
| `validate_process_coverage` | Foreground process map | Require cutting, assembly, pressing/inspection, and packaging records; require wet-finishing records when the declared route includes washing, dyeing, softening, or another wet process. | `ec-apparel-footwear-pefcr-2025`; `ijlc-lyocell-dress-2026` |
| `validate_material_balance` | Each process and reporting period | Require a documented input/output balance and investigate unexplained residuals before the package is considered complete. | `eu-textiles-bat-2022-2508` |
| `validate_uuid_evidence` | Every UUID-bearing inventory row | Accept a Tiangong UUID only when the selected record has exact semantic identity and direct public state100 confirmation; otherwise require the UUID to be absent and the identity gap to remain in manifest review metadata. |  |
| `validate_allocation` | Shared facility data | Require subdivision or a documented causal allocation driver and reject undocumented mass allocation or unallocated shared utilities. | `eu-ef-recommendation-2021` |
| `validate_data_quality` | Foreground package | Require source period, site scope, meter and scale evidence, component conversion records, wastewater evidence where applicable, waste destinations, route disclosure, and explicit data gaps. | `eu-textiles-bat-2022-2508`; `eu-ef-recommendation-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground manufacturing dataset for one declared CPC 28223 garment product or defensible production mix |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and publication controls |
| allowed_use | Product LCA, apparel life-cycle modelling, product-footprint studies, supply-chain inventory, hotspot analysis, and comparison only when functional equivalence, product specification, geography, period, and data quality are compatible |
| excluded_use | Consumer-use or service-life claims without downstream use-stage modelling; representation of non-knitted or non-crocheted garments; substitution across materially different fibre, trim, wet-finishing, packaging, geography, or technology profiles without disclosed scenario analysis |
| required_metadata | Canonical PCR id; reference UUIDs; CPC coordinate; style and size mix; fibre and trim composition; production route; facility geography; reporting period; net garment mass; sale packaging; recycled content; wet-finishing applicability; utility supply; waste destinations; allocation method; source ids |
| required_quality_disclosure | Primary-data share; meter and scale coverage; sampling and conversion methods; material-balance residuals; missing UUIDs; upstream proxies; conditional-route coverage; temporal and geographic representativeness; allocation drivers; verification status |
| update_trigger | Material change in product specification, fibre or trim composition, wet-finishing recipe, facility or equipment, energy or steam supply, waste route, packaging, allocation method, source evidence, reference UUID, or a reporting period no longer representative of current production |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division, *CPC Version 3.0 Explanatory Notes*, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | Official CPC 28223 scope and exclusions from adjacent apparel subclasses |
| `eu-ef-recommendation-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, ELI http://data.europa.eu/eli/reco/2021/2279/2021-12-30 (retrieved 2026-08-13) | Functional unit and reference flow, system boundary, company-specific manufacturing data, transparent reporting, packaging, and allocation hierarchy |
| `eu-textiles-bat-2022-2508` | `standard` | European Commission, Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-13) | Process input/output inventory; textile materials and chemicals; water, energy, wastewater, waste and direct-emission monitoring; process-level collection and quality evidence |
| `ec-apparel-footwear-pefcr-2025` | `official_guidance` | European Commission Directorate-General for Environment, *New EU rules for measuring environmental impact of clothes and shoes*, 25 June 2025, https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en (retrieved 2026-08-13) | Apparel category-rule context and connection of manufacturing foreground data to raw materials, logistics, use, and end-of-life stages |
| `ijlc-lyocell-dress-2026` | `literature` | *Time-explicit life cycle assessment of a lyocell dress using bw_timex with biogenic carbon accounting*, The International Journal of Life Cycle Assessment (2026), DOI 10.1007/s11367-026-02616-1 | Garment production decomposition, cutting and sewing as the final garment-production step, material loss accounting, and separate electricity and thermal-energy inputs |
