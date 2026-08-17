---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-knitted-or-crocheted
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Babies' garments and clothing accessories, knitted or crocheted

## 1. Scope and Applicability

This PCR governs foreground data packages for factory production of saleable babies' garments and clothing accessories made by knitting or crocheting, or made up from knitted or crocheted fabric. It covers material preparation, marker planning, cutting, sewing and trim attachment, applicable decoration or garment wet finishing, inspection, pressing, folding, and primary and distribution packaging performed by the reporting facility.

The declared foreground boundary begins with finished knitted or crocheted fabric, thread, trims, labels, process chemicals, and packaging received at the manufacturing facility. Fibre production, spinning, fabric formation, and off-site textile wet processing are represented by upstream datasets when those materials are purchased. Distribution, retail, consumer use, reuse, and end-of-life are outside this foreground production dataset.

The PCR does not cover non-knitted babies' garments, footwear, toys, nappies or other absorbent hygiene products, disposable articles, electrically active garments, or garments whose principal identity is leather, fur, plastics, felt, nonwoven, coated or impregnated fabric rather than knitted or crocheted apparel. Product safety, fibre-content, care, durability, and market-conformity claims remain declared product specifications; this PCR does not certify those claims.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28227 — Babies' garments and clothing accessories, knitted or crocheted |
| covered_products | Babies' bodysuits, sleepsuits, rompers, shirts, trousers, dresses, cardigans, caps, mittens and comparable babies' clothing accessories whose defining construction is knitted or crocheted |
| excluded_products | Babies' garments of woven or other non-knitted textile fabric; hosiery classified separately; footwear; toys; disposable absorbent articles; leather, fur, plastics, felt, nonwoven, electrically active, coated or impregnated garments outside the category |
| representative_product | A packed, saleable babies' knitted garment manufactured from purchased finished knitted fabric by cutting, sewing, trim attachment, inspection and packaging, with declared optional decoration and wet-finishing routes |
| production_route | Cut-make-trim from knitted or crocheted fabric, with conditional embroidery, printing, garment washing, dyeing or softening at the reporting facility |
| market_state | Finished, inspected, dry, packed product at the manufacturing facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of a finished babies' garment or clothing accessory whose defining construction is knitted or crocheted and which meets the declared product specification |
| How much | 1 kg net mass of conforming packed saleable product, excluding distribution packaging mass |
| How well | Conforming to the declared style, infant age or size range, fibre composition, fabric construction, areal density, colour, finish, trim, care and market-quality specification |
| How long or cycle | One manufacturing batch or reporting period; service life is disclosed for downstream use-stage modelling but is not imposed by this gate-to-gate reference flow |
| reference_flow_link | The reference product output row `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Babies' garments and clothing accessories, knitted or crocheted `7a9f33f2-9426-425d-abcf-bc483460969b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment or accessory type; infant age or size range; fibre percentages; fabric knit or crochet construction; fabric mass per area; colour and finish; trims and fasteners; decoration route; wet-finishing route; production geography and period; net product mass; packaging configuration; conditioning state used for weighing |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net conforming product mass after final conditioning and before adding distribution packaging; report the conditioning procedure and whether consumer-unit packaging is included. |
| `material_mass` | Fabrics, thread, trims, chemicals and wastes | Mass | kg | Record purchased, issued, returned, recovered and discarded mass by distinct material identity; do not combine different fibres, chemicals, packaging materials or waste routes. |
| `electricity_measurement` | Electricity | Energy | kWh | Use submetered consumption where available; otherwise allocate a reconciled facility meter total using documented machine operating time or another physical driver. |
| `thermal_energy_measurement` | Steam, natural gas, diesel and hot water | Energy or mass/volume with conversion basis | MJ, kg, m3 or L | Keep every carrier separate and retain lower or higher heating value, steam state, hot-water temperature, density and conversion factors used. |
| `water_measurement` | Process water and wastewater | Volume or mass | m3 or kg | Reconcile intake, reuse, evaporation, product retention and discharged wastewater over the same reporting period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished knitted or crocheted fabric and separately purchased thread, trims, labels, chemicals and packaging are received at the reporting facility gate with composition, supplier and upstream-dataset references. |
| starting_condition_role | Gate-to-gate apparel manufacturing foreground boundary |
| product_classification_scope | Finished babies' garments and clothing accessories within CPC 3.0 code 28227 |
| recursive_input_rule | If a purchased or transferred input is itself a finished product in this same category, record it once as a separate product input with quantity, supplier, production stage and upstream dataset; do not recursively reproduce its manufacturing inventory inside this foreground package. |
| upstream_dataset_requirement | Every purchased fabric, trim, chemical, energy carrier and packaging input requires a geographically and technologically appropriate upstream dataset or an explicit documented data gap. |
| disclosure | Declare which fabric production, dyeing, printing, finishing, decoration, washing, heat generation, wastewater treatment and packaging operations occur on-site, off-site or are absent. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_materials` | Foreground starting boundary | Begin at receipt of finished knitted or crocheted fabric and separately purchased manufacturing inputs; represent upstream production through linked datasets rather than silently omitting it. | `ilo-garment-osh-2021`; `eu-pef-method-2021` |
| `boundary_on_site_operations` | Manufacturing operations | Include every operation performed by the reporting facility from material preparation through packed conforming output, including conditional decoration, washing, dyeing, drying, curing or on-site utility generation. | `ilo-garment-osh-2021`; `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014` |
| `boundary_known_exchanges` | Foreground inventory | Record all known material, energy, water, packaging, waste and direct-emission exchanges for included processes as atomic rows; do not apply an undocumented mass, cost or impact cut-off. | `eu-pef-method-2021` |
| `boundary_downstream_exclusion` | Downstream stages | Exclude distribution, retail, consumer use, reuse and end-of-life from this foreground production dataset and state that downstream models must add them where required. | `ec-apparel-footwear-pefcr-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | Material preparation, marker planning and cutting | required | Always for cut-and-sew production from knitted or crocheted fabric | Converts received fabric to controlled cut components and records marker efficiency and cutting waste | Per 1 kg reference product output |
| `assembly_trim` | Sewing, assembly and trim attachment | required | Always for cut-and-sew production | Assembles cut components and attaches declared thread, labels and fasteners | Per 1 kg reference product output |
| `decoration` | Embroidery or pigment printing | conditional | Include when performed by the reporting facility | Adds declared artwork or decorative features | Per 1 kg reference product output |
| `wet_finishing` | Garment washing, dyeing, softening, drying or curing | conditional | Include each operation performed by the reporting facility | Applies declared wet or thermal finish and records water, chemicals, energy, wastewater and direct emissions | Per 1 kg reference product output |
| `final_packaging` | Pressing, inspection, folding and packaging | required | Always for saleable packed product | Delivers inspected conforming output and records packaging | Per 1 kg reference product output |

### Process: Material preparation, marker planning and cutting (`material_cutting`)

#### Inputs

##### Product flows

###### Knitted or crocheted fabric (`knitted_fabric_input`)

Received finished fabric is the principal material input. Record each fibre composition, construction, colour and finish as a separate exchange.

- Selected flow: Knitted or crocheted textile fabric
- Flow property / unit: Mass / kg
- Amount rule: Weighed fabric issued to the target production orders, net of documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `ilo-garment-osh-2021`; `eu-ecolabel-textiles-2014`

###### Marker paper (`marker_paper_input`)

Paper consumed for full-size production markers crosses the process boundary when physical markers are used.

- Selected flow: Marker paper
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued marker-paper mass attributable to the target orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`

###### Cutting electricity (`cutting_electricity_input`)

Electricity powers spreading, cutting, lighting and directly attributable extraction equipment.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or reconciled allocation from machine operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`

##### Waste flows

No waste input is normally required.

##### Elementary flows

No direct elementary input is normally required.

#### Outputs

##### Product flows

###### Cut garment components (`cut_components_output`)

Matched cut panels transferred to sewing are weighed or calculated from controlled bundle records.

- Selected flow: Cut knitted or crocheted garment components
- Flow property / unit: Mass / kg
- Amount rule: Measured bundle mass or issued fabric minus separately weighed cutting scrap and stock return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`

##### Waste flows

###### Textile cutting scrap (`cutting_scrap_output`)

Offcuts and unusable cut pieces are recorded by fibre composition and destination.

- Selected flow: Knitted or crocheted textile cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap from the target production orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `enes-kipoz-cut-sew-waste-2020`

###### Waste marker paper (`waste_marker_paper_output`)

Discarded physical marker paper is recorded separately from textile scrap.

- Selected flow: Waste marker paper
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded marker paper
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`

##### Elementary flows

No direct elementary output is normally required.

### Process: Sewing, assembly and trim attachment (`assembly_trim`)

#### Inputs

##### Product flows

###### Cut garment components (`cut_components_assembly_input`)

Matched cut components enter sewing from the cutting process.

- Selected flow: Cut knitted or crocheted garment components
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `cut_components_output`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

###### Sewing thread (`sewing_thread_input`)

Record each sewing-thread fibre or polymer identity separately.

- Selected flow: Sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Issued thread mass minus documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

###### Elastic textile tape (`elastic_tape_input`)

Include only for styles containing elastic tape and declare its composition.

- Selected flow: Elastic textile tape
- Flow property / unit: Mass / kg
- Amount rule: Weighed or piece-count-derived mass fitted to conforming output plus recorded loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

###### Snap fastener (`snap_fastener_input`)

Include separately when snap fasteners are fitted.

- Selected flow: Snap fastener
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by verified unit mass, including recorded rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

###### Garment button (`button_input`)

Include separately when buttons are fitted and declare material.

- Selected flow: Garment button
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by verified unit mass, including recorded rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

###### Garment zipper (`zipper_input`)

Include separately when a zipper is fitted and declare tape, teeth and slider materials.

- Selected flow: Garment zipper
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by verified unit mass, including recorded rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

###### Textile care label (`care_label_input`)

Record care, fibre-content, brand and size labels as separate rows when their substrates differ; this card represents the textile care label only.

- Selected flow: Textile care label
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by verified unit mass, including recorded rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

###### Assembly electricity (`assembly_electricity_input`)

Electricity powers sewing, overlocking, buttoning, label attachment and directly attributable extraction.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or reconciled allocation from machine operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

##### Waste flows

No waste input is normally required.

##### Elementary flows

No direct elementary input is normally required.

#### Outputs

##### Product flows

###### Assembled unfinished garment (`assembled_garment_output`)

The assembled garment is transferred to applicable decoration, wet finishing or final finishing.

- Selected flow: Assembled unfinished babies' knitted or crocheted garment
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer mass or reconciled assembly mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

##### Waste flows

###### Waste sewing thread (`waste_sewing_thread_output`)

Thread ends and unusable thread are recorded separately by composition.

- Selected flow: Waste sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected waste or reconciled issued-minus-returned-minus-product thread mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

##### Elementary flows

No direct elementary output is normally required.

### Process: Embroidery or pigment printing (`decoration`)

#### Inputs

##### Product flows

###### Unfinished garment for decoration (`unfinished_garment_decoration_input`)

Only garments routed through on-site decoration enter this conditional process.

- Selected flow: Assembled unfinished babies' knitted or crocheted garment
- Flow property / unit: Mass / kg
- Amount rule: Weighed or counted transfer mass to decoration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decoration_records`

###### Embroidery thread (`embroidery_thread_input`)

Include for embroidered designs and record each thread composition separately.

- Selected flow: Embroidery thread
- Flow property / unit: Mass / kg
- Amount rule: Issued thread mass minus returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decoration_records`

###### Textile pigment printing paste (`textile_printing_paste_input`)

Include for pigment-printed designs; each distinct supplier formulation shall be a separate exchange in the produced dataset.

- Selected flow: Textile pigment printing paste
- Flow property / unit: Mass / kg
- Amount rule: Weighed paste issued minus returned unused paste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decoration_records`
- Sources: `eu-ecolabel-textiles-2014`; `eu-textiles-bref-2023`

###### Decoration electricity (`decoration_electricity_input`)

Electricity powers embroidery, printing, flash drying and curing equipment included in this process.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or reconciled allocation from equipment operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decoration_records`

##### Waste flows

No waste input is normally required.

##### Elementary flows

No direct elementary input is normally required.

#### Outputs

##### Product flows

###### Decorated unfinished garment (`decorated_garment_output`)

Decorated garments transfer to wet finishing or final finishing.

- Selected flow: Decorated unfinished babies' knitted or crocheted garment
- Flow property / unit: Mass / kg
- Amount rule: Weighed or counted conforming decorated transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decoration_records`

##### Waste flows

###### Waste embroidery thread (`waste_embroidery_thread_output`)

Thread ends and rejected embroidery thread are kept separate by composition.

- Selected flow: Waste embroidery thread
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected waste or reconciled material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decoration_records`

###### Waste textile pigment printing paste (`waste_printing_paste_output`)

Unused contaminated paste and cleaning residues managed as paste waste are recorded separately from wastewater.

- Selected flow: Waste textile pigment printing paste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste container difference or reconciled paste balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_decoration_records`

##### Elementary flows

Any measured direct air emission from the declared formulation shall be added as a separate chemically or analytically specific elementary exchange; do not use one combined “printing emissions” row.

### Process: Garment washing, dyeing, softening, drying or curing (`wet_finishing`)

#### Inputs

##### Product flows

###### Unfinished garment for wet finishing (`unfinished_garment_wet_input`)

Only garments routed through on-site wet or thermal finishing enter this conditional process.

- Selected flow: Assembled unfinished babies' knitted or crocheted garment
- Flow property / unit: Mass / kg
- Amount rule: Weighed or counted transfer mass to wet finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_material_records`

###### Process water (`process_water_input`)

Cold or ambient-temperature make-up water is recorded separately from hot water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered intake assigned to the declared production batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_material_records`
- Sources: `eu-textiles-bref-2023`

###### Hot process water (`hot_process_water_input`)

Hot water received as a utility input is separate from cold water and on-site fuel or steam.

- Selected flow: Hot process water
- Flow property / unit: Volume / m3
- Amount rule: Metered input with supply and return temperatures
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_material_records`

###### Sodium chloride (`sodium_chloride_input`)

Include only when the declared wet-finishing recipe uses sodium chloride.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Recipe issue mass reconciled with batch sheets and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_material_records`

###### Sodium carbonate (`sodium_carbonate_input`)

Include only when the declared wet-finishing recipe uses sodium carbonate.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Recipe issue mass reconciled with batch sheets and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_material_records`

###### Acetic acid (`acetic_acid_input`)

Include only when the declared wet-finishing recipe uses acetic acid and state concentration.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Active acid mass from weighed formulation quantity and verified concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_material_records`

###### Polydimethylsiloxane textile softener (`silicone_softener_input`)

Include only when this specific softener formulation is used and report active content.

- Selected flow: Polydimethylsiloxane textile softener formulation
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulation issue mass reconciled with batch sheets and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_material_records`

###### Wet-finishing electricity (`wet_finishing_electricity_input`)

Electricity powers washing, dosing, extraction, drying, curing, pumps and directly attributable treatment equipment.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or reconciled allocation from equipment operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_utility_records`
- Sources: `eu-ecolabel-textiles-2014`; `eu-textiles-bref-2023`

###### Purchased steam (`purchased_steam_input`)

Purchased steam is recorded separately from natural gas, diesel and hot water.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Metered steam with pressure, temperature and condensate-return state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_utility_records`

###### Natural gas (`natural_gas_input`)

Include only for on-site boilers, dryers or curing equipment consuming natural gas.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Metered consumption with stated heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_utility_records`

###### Diesel fuel (`diesel_fuel_input`)

Include only for directly attributable on-site heat or backup generation used during the reporting period.

- Selected flow: Diesel fuel
- Flow property / unit: Volume / L
- Amount rule: Metered or tank-difference consumption with density and heating value retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_utility_records`

###### Refrigerant R-410A make-up (`refrigerant_r410a_input`)

Include only for directly attributable equipment that uses R-410A; other refrigerants require their own atomic rows.

- Selected flow: Refrigerant R-410A
- Flow property / unit: Mass / kg
- Amount rule: Service-record make-up mass assigned to the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_utility_records`

##### Waste flows

No waste input is normally required.

##### Elementary flows

No direct elementary input is normally required.

#### Outputs

##### Product flows

###### Wet-finished garment (`wet_finished_garment_output`)

Conforming wet-finished and dried garments transfer to final finishing.

- Selected flow: Wet-finished babies' knitted or crocheted garment
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry conditioned transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_material_records`

##### Waste flows

###### Textile wet-processing wastewater (`textile_wastewater_output`)

Wastewater sent to on-site or off-site treatment is recorded separately from sludge.

- Selected flow: Textile wet-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge reconciled with water balance; attach COD, pH, temperature and other measured pollutant records where applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_emission_records`
- Sources: `eu-ecolabel-textiles-2014`; `eu-textiles-bref-2023`

###### Textile wastewater treatment sludge (`wastewater_sludge_output`)

Include when on-site treatment generates sludge and state moisture and hazardous classification.

- Selected flow: Textile wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet mass with dry-solids fraction and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_emission_records`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air_output`)

Include for on-site combustion and calculate only from recorded fuel with a cited, jurisdiction-appropriate factor or direct measurement.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or fuel-specific calculation from collected natural-gas or diesel records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_emission_records`
- Sources: `eu-pef-method-2021`

###### Nitrogen dioxide to air (`nitrogen_oxides_air_output`)

Include measured nitrogen dioxide from on-site combustion; measured nitric oxide or other nitrogen species require separate atomic rows.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Nitrogen-dioxide stack measurement or fuel-specific calculation reported as NO2 mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_emission_records`

###### Refrigerant R-410A to air (`refrigerant_r410a_air_output`)

Include only measured or service-record-derived losses from equipment using R-410A.

- Selected flow: Refrigerant R-410A, to air
- Flow property / unit: Mass / kg
- Amount rule: Opening charge plus additions minus closing charge and documented recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_emission_records`

### Process: Pressing, inspection, folding and packaging (`final_packaging`)

#### Inputs

##### Product flows

###### Finished garment before packing (`finished_garment_pack_input`)

Conforming assembled, decorated or wet-finished garments enter final inspection and packing.

- Selected flow: Finished unpacked babies' knitted or crocheted garment
- Flow property / unit: Mass / kg
- Amount rule: Weighed or counted transfer mass reconciled with final conforming output and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`

###### Final-finishing electricity (`final_finishing_electricity_input`)

Electricity powers inspection lighting, pressing, folding and packaging equipment.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or reconciled allocation from equipment operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`

###### Pressing steam (`pressing_steam_input`)

Purchased steam for pressing is kept separate from electricity and on-site fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Metered steam with pressure, temperature and condensate-return state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`

###### Paper hangtag (`paper_hangtag_input`)

The consumer-facing paper hangtag is recorded separately from cartons and film.

- Selected flow: Paper hangtag
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by verified unit mass, including recorded rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`

###### Low-density polyethylene garment bag (`ldpe_bag_input`)

The individual LDPE bag is recorded separately and includes declared recycled content and film thickness.

- Selected flow: Low-density polyethylene garment bag
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by verified unit mass, including recorded rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`

###### Corrugated paperboard shipping carton (`corrugated_carton_input`)

The distribution carton is recorded separately from consumer-unit packaging.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by verified unit mass and allocated by units packed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`

###### Polypropylene packing tape (`polypropylene_tape_input`)

Carton-sealing tape is recorded separately from paperboard and polyethylene film.

- Selected flow: Polypropylene packing tape
- Flow property / unit: Mass / kg
- Amount rule: Roll stock difference or length used multiplied by verified mass per length
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`

##### Waste flows

No waste input is normally required.

##### Elementary flows

No direct elementary input is normally required.

#### Outputs

##### Product flows

###### Reference product output (`reference_product_output`)

This is the conforming packed saleable output normalized to one kilogram net product mass.

- Selected flow: Babies' garments and clothing accessories, knitted or crocheted `7a9f33f2-9426-425d-abcf-bc483460969b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net conforming product output after conditioning, excluding distribution packaging mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_reference_output_records`

##### Waste flows

###### Waste corrugated paperboard (`waste_paperboard_output`)

Damaged cartons and paperboard packing offcuts are recorded separately from marker paper.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`

###### Waste low-density polyethylene film (`waste_ldpe_film_output`)

Rejected bags and film offcuts are recorded separately from paperboard waste.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`

##### Elementary flows

No direct elementary output is normally required.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared and multifunctional operations | Avoid allocation by submetering, separate batch records or subdivision so that inputs and outputs are directly attributable to the target garments. | `eu-pef-method-2021` |
| `allocation_physical` | Unavoidable shared utilities and services | When subdivision is not possible, allocate by a causal physical driver such as machine time, metered thermal demand, wastewater volume, production mass or units processed; document the driver and reconciliation total. | `eu-pef-method-2021` |
| `allocation_economic_last_resort` | Shared operations without defensible physical relation | Use economic allocation only as a last resort, disclose prices and period, and report a sensitivity check against a plausible physical driver. | `eu-pef-method-2021` |
| `allocation_scrap` | Textile and packaging scrap | Retain the upstream burden of all purchased material in the foreground product system, record scrap at the point it leaves the process, and do not apply an avoided-burden credit inside this gate-to-gate dataset. | `enes-kipoz-cut-sew-waste-2020`; `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_cutting_records` | `material_cutting` | Fabric, marker paper, electricity, cut components and cutting wastes | weigh tickets; issue and return records; marker files; meter readings | order_id; style; fabric_id; fibre_content; fabric_mass_issued; fabric_mass_returned; marker_area; cut_component_mass; scrap_mass; paper_mass; electricity_kWh | Weigh material streams and reconcile digital or physical marker and meter records by production order | kg; m2; kWh | Each order and monthly reconciliation | Representative continuous 12 months or complete shorter production campaign | All cutting lines producing the declared product | Sum target-order records, allocate shared electricity by machine time, normalize by conforming output mass | Calibrated scales; marker file; stock ledger; meter reconciliation; exception log |
| `cp_assembly_records` | `assembly_trim` | Cut components, thread, each trim, electricity, assembled output and thread waste | bundle tickets; issue and return records; component counts; unit-mass tests; meter readings | order_id; component_mass; material_id; count; unit_mass; issued_mass; returned_mass; waste_mass; machine_hours; electricity_kWh; assembled_mass | Record each material identity separately and reconcile issue, return, output and waste | kg; count; kWh | Each order and monthly reconciliation | Same period as reference output | All sewing lines producing the declared product | Sum target-order records and normalize by conforming output mass | Approved BoM; calibrated scale; stock ledger; production tickets; meter reconciliation |
| `cp_decoration_records` | `decoration` | Garment transfers, embroidery thread, printing paste, electricity and wastes | batch sheets; issue and return records; meter readings; waste tickets | order_id; artwork_id; formulation_id; input_mass; returned_mass; output_mass; waste_mass; equipment_hours; electricity_kWh | Record each artwork route and formulation separately | kg; kWh | Each decorated batch | Same period as reference output | All on-site decoration equipment used for the product | Sum route-specific batches and normalize by conforming output mass | Batch approval; SDS; stock ledger; calibrated scale; meter reconciliation |
| `cp_wet_finishing_material_records` | `wet_finishing` | Garment transfer, water, each chemical and finished output | batch recipe; dosing log; water meter; stock records; weigh tickets | batch_id; recipe_id; chemical_identity; concentration; issued_mass; water_m3; input_mass; output_mass; moisture_condition | Meter water, weigh each formulation, and reconcile recipes and stock change | kg; m3 | Each wet batch | Same period as reference output | All on-site wet-finishing lines used for the product | Sum included batches and normalize by conforming dry output mass | Recipe authorization; SDS; calibrated dosing and water meters; mass-balance review |
| `cp_wet_finishing_utility_records` | `wet_finishing` | Electricity, steam, natural gas, diesel, hot water and R-410A make-up | submeters; invoices; tank logs; service records | timestamp; equipment_id; kWh; steam_kg; pressure; temperature; hot_water_m3; gas_m3; diesel_L; heating_value; refrigerant_kg | Prefer submetering; reconcile utility totals and allocate only with documented physical drivers | kWh; kg; m3; L | Batch where metered and monthly reconciliation | Same period as reference output | Utility systems serving included operations | Subtract excluded uses, allocate shared totals by physical driver, normalize by conforming output mass | Meter calibration; invoices; fuel and refrigerant service logs; reconciliation worksheet |
| `cp_wet_finishing_emission_records` | `wet_finishing` | Wastewater, sludge, combustion emissions and refrigerant losses | discharge meter; laboratory reports; waste manifests; stack tests; fuel and service records | wastewater_m3; COD; pH; temperature; sludge_mass; dry_solids; destination; fuel_use; emission_factor; measured_emission; refrigerant_balance | Measure direct releases or calculate from collected activity data using cited factors | kg; m3; concentration units | Per discharge or test, aggregated monthly | Same period as reference output | All direct releases from included operations | Sum measured releases or documented calculations and normalize by conforming output mass | Accredited laboratory report where applicable; meter calibration; manifests; calculation file |
| `cp_final_packaging_records` | `final_packaging` | Garment transfer, electricity, steam, each packaging material and packaging waste | packing lists; component counts; unit-mass tests; meters; waste tickets | order_id; conforming_units; reject_units; unpacked_mass; packaging_id; count; unit_mass; electricity_kWh; steam_kg; waste_mass | Reconcile inspected units, packing material issue and final packed output | kg; count; kWh | Each order and monthly reconciliation | Same period as reference output | All final finishing and packing lines used for the product | Sum target-order records and normalize by net conforming product mass | Approved packaging specification; calibrated scale; packing list; meter reconciliation |
| `cp_reference_output_records` | `final_packaging` | Reference product output | final inspection and weighing records | order_id; style; size; conforming_units; net_product_mass; conditioning_method; packaging_exclusion | Weigh a representative sample or complete output using calibrated scales and reconcile to conforming count | kg | Each order | Same period as all input records | All declared production sites | Sum net conforming mass and set normalized reference amount to 1 kg | Calibration certificate; inspection release; sampling plan; signed reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | Every inventory row | normalized_amount = attributable_exchange_amount / net_conforming_product_mass | Attributable row amount; reference output mass from `cp_reference_output_records` | Row amount per 1 kg reference product | `eu-pef-method-2021` |
| `calc_material_balance` | Fabric and other mass-bearing production materials | opening_stock + receipts - closing_stock = conforming_product_content + separately recorded wastes + returns or transfers; investigate unreconciled difference | Stock, issue, return, output and waste masses | Reconciled material balance and unexplained variance | `eu-pef-method-2021`; `eu-ecolabel-textiles-2014` |
| `calc_shared_resource` | Shared electricity, heat, water and treatment | attributable_total = reconciled_shared_total × target_physical_driver / total_physical_driver | Meter total; excluded uses; target and total driver values | Attributable resource amount | `eu-pef-method-2021` |
| `calc_refrigerant_loss` | R-410A equipment | loss = opening_charge + additions - closing_charge - documented_recovery | Charge inventory and service records | R-410A emitted to air | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and BoM | Retain style, size range, fibre percentages, construction, finish, trims, suppliers and packaging specification for each represented product family. | Approved specification, BoM, supplier declarations and inspection release |
| `dq_temporal` | All foreground data | Use one consistent representative period, normally 12 continuous months or the complete campaign for seasonal production; disclose abnormal downtime and substitutions. | Dated meter, stock, production and maintenance records |
| `dq_coverage` | Included processes | Cover every declared production line, shift and included on-site operation or justify a documented representative sampling design. | Production routing, site map, sampling plan and reconciliation |
| `dq_measurement` | Mass, energy, water and emissions | Use calibrated instruments where material; retain unit conversions, detection limits, missing-data treatment and calculation factors. | Calibration certificates, laboratory reports and calculation workbook |
| `dq_completeness` | Inventory | Reconcile BoM and output mass, keep energy carriers and material identities separate, and record every known waste route and direct emission. | Mass balance, utility reconciliation, waste manifests and exception log |
| `dq_supplier_upstream` | Purchased inputs | Link each material and utility input to an appropriate upstream dataset or disclose the missing dataset, geography and technology mismatch. | Supplier record, dataset reference and data-gap register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Product scope | Fail if the reference product is not a babies' garment or clothing accessory whose defining construction is knitted or crocheted, or if required qualifiers are absent. | `un-cpc-3-2023` |
| `validate_reference` | Reference flow | Require product UUID `7a9f33f2-9426-425d-abcf-bc483460969b`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg and exactly 1 kg normalized output. |  |
| `validate_atomic_inventory` | Inventory rows | Fail any row that combines multiple flows, carriers, chemicals, packaging materials, wastes or emissions; each actual chemical formulation or emitted substance requires its own row. |  |
| `validate_route_completeness` | Process map | Require cutting, assembly and final packaging; require decoration or wet-finishing inventories whenever those routes are declared on-site, and prohibit their amounts when declared absent. | `ilo-garment-osh-2021`; `eu-textiles-bref-2023` |
| `validate_mass_balance` | Material flows | Require a documented fabric and product mass balance and investigation of material unexplained variance. | `eu-pef-method-2021` |
| `validate_wet_processing` | On-site wet finishing | Require separate water, hot water, each chemical, electricity, steam, each fuel, wastewater, sludge and measured direct-emission rows as applicable; require recipe, discharge and treatment-route evidence. | `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014` |
| `validate_allocation` | Shared resources | Require subdivision or a documented causal physical driver before economic allocation; all allocations must reconcile to the measured facility total. | `eu-pef-method-2021` |
| `validate_sources_and_quality` | Evidence and data quality | Require source ids for externally constrained rules, collection evidence for every `foreground_record`, and explicit disclosure of data gaps and proxy upstream datasets. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for packed babies' knitted or crocheted garments or clothing accessories at the factory gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product and portfolio LCA, supply-chain footprinting, eco-design, procurement and downstream lifecycle modelling when the declared product, geography, technology, period and boundary are representative |
| excluded_use | Claims about consumer safety, legal conformity, durability, use-stage performance or products outside CPC 28227; unqualified substitution for non-knitted apparel or materially different wet-finishing routes |
| required_metadata | PCR id and version; product UUID; style and size range; fibre and trim composition; fabric construction and mass per area; colour and finish; decoration and wet-finishing routes; site geography; technology; reporting period; allocation; packaging; upstream datasets |
| required_quality_disclosure | Primary-data share; meter and mass-balance coverage; sampling; allocation drivers; missing data; upstream proxies; laboratory methods; wastewater treatment route; uncertainty and review status |
| update_trigger | Change in style or fibre mix, fabric construction, supplier or upstream dataset, decoration or wet-finishing recipe, production site or equipment, utility mix, packaging, allocation driver, wastewater treatment, regulation, or a material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2023` | official_guidance | United Nations Statistics Division, Proposed CPC Version 3.0 Structure, 20 November 2023, https://unstats.un.org/unsd/classifications/CPC/Documents/3-Proposed-CPC-Ver3-Structure-20Nov2023.pdf | CPC 28227 identity and separation from adjacent apparel categories |
| `ilo-garment-osh-2021` | official_guidance | International Labour Organization, Occupational safety and health improvement in the garment industry: Drivers and constraints, 2021, https://vzf.ilo.org/wp-content/uploads/2021/09/OSH_improvement-Garment-_04Web.pdf | Garment supply-chain boundary; fabric, cutting, sewing, trims, ironing, embroidery, finishing and packaging process decomposition |
| `eu-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry | Pretreatment, dyeing, printing and finishing scope; water, energy, chemical, wastewater and emission inventory needs |
| `eu-ecolabel-textiles-2014` | standard | Commission Decision 2014/350/EU establishing ecological criteria for the award of the EU Ecolabel for textile products, consolidated criteria current through 2028, https://eur-lex.europa.eu/eli/dec/2014/350/oj/eng | Fibre and component composition, production recipes, process-site evidence, energy measurement, air and water emissions, product quality and 1 kg textile mass basis |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Company-specific BoM and manufacturing data, complete input/output collection, allocation hierarchy, data quality, verification and normalization |
| `ec-apparel-footwear-pefcr-2025` | official_guidance | European Commission Directorate-General for Environment, New EU rules for measuring environmental impact of clothes and shoes, 25 June 2025, https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en | Downstream lifecycle-stage context and consistent apparel footprint modelling |
| `enes-kipoz-cut-sew-waste-2020` | literature | Enes, E.; Kipöz, Ş. The role of fabric usage for minimization of cut-and-sew waste within the apparel production line. Journal of Cleaner Production 248 (2020) 119221. https://doi.org/10.1016/j.jclepro.2019.119221 | Marker planning and separate measurement of pre-consumer cutting waste |
| `munasinghe-clothing-lci-2021` | literature | Munasinghe, P.D.; Druckman, A.; Dissanayake, D.G.K. A systematic review of the life cycle inventory of clothing. Journal of Cleaner Production 320 (2021) 128852. https://doi.org/10.1016/j.jclepro.2021.128852 | Need for complete, stage-consistent clothing LCI evidence and explicit data-gap disclosure |
