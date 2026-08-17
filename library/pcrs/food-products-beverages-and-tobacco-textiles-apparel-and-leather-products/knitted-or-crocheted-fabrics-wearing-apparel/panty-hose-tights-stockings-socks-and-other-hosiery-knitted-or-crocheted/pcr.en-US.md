---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.panty-hose-tights-stockings-socks-and-other-hosiery-knitted-or-crocheted
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Panty hose, tights, stockings, socks and other hosiery, knitted or crocheted

## 1. Scope and Applicability

This PCR governs production of foreground data packages for finished knitted or crocheted panty hose, tights, stockings, socks, and other hosiery within CPC 3.0 class 28210. It applies to products for consumer, professional, medical-support, sport, school, or work use when the product is saleable at the manufacturing gate and its fibre composition, construction, size basis, pairing convention, finish, and packaging exclusion are declared.

The foreground boundary starts with identified yarns, sewing thread, components, process chemicals, packaging, and utilities delivered to the hosiery-manufacturing system. It covers knitting or crocheting, toe closing or seaming and assembly, conditional wet processing and boarding, inspection, pairing, labelling, packaging, manufacturing waste, and conditional on-site wastewater treatment. Fibre production, yarn spinning or texturing, production of chemicals and packaging, purchased energy, inbound transport, and off-site waste treatment are connected through traceable upstream datasets unless they occur under the declared foreground operator's control.

The PCR does not cover woven hosiery, compression products whose principal identity is a regulated medical device without an apparel product function, footwear, knitted fabric sold as an intermediate, gloves, leggings or trousers not classified as hosiery, or apparel made of leather, fur, or plastics as the principal product. Distribution, retail, consumer use and laundering, reuse, and end-of-life are outside this manufacturing foreground dataset and may be connected in a downstream lifecycle model.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.panty-hose-tights-stockings-socks-and-other-hosiery-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28210, exact classification context |
| covered_products | Finished knitted or crocheted panty hose, tights, stockings, socks, knee-highs, ankle socks, footlets, and comparable hosiery, including products sold as pairs or single articles |
| excluded_products | Woven hosiery; knitted or crocheted fabric sold as an intermediate; gloves; non-hosiery leggings or trousers; footwear; principally leather, fur, or plastics apparel; medical devices without an apparel product function |
| representative_product | A saleable pair of knitted socks of declared fibre composition, yarn construction, size, knit structure, colour, finish, individual and pair mass, and packaging configuration |
| production_route | Delivered yarns and components -> knitting or crocheting -> toe closing or seaming and assembly -> conditional dyeing, washing, finishing, drying, or boarding -> inspection, pairing, labelling, and packaging |
| market_state | Saleable finished hosiery at the manufacturing gate; reference-product mass excludes consumer and distribution packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished, saleable knitted or crocheted hosiery at the manufacturing gate |
| How much | 1 kg net finished hosiery mass, excluding packaging |
| How well | Conforming to the declared product specification and acceptance criteria for composition, dimensions, construction, elasticity or support level where claimed, colour, finish, and moisture condition |
| How long or cycle | One declared production period or batch; expected service life, number of wear days, pairing loss, and care scenario are separate downstream-use qualifiers |
| reference_flow_link | Mass-normalized manufacturing reference flow; conversion to one article, one pair, or one day of wear requires measured article or pair mass and a separately documented service-life and use scenario |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net accepted finished hosiery |
| Reference product flow | Panty hose, tights, stockings, socks and other hosiery, knitted or crocheted `c00d32b4-7e02-479b-8cae-d94b50ed1a7a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | hosiery type; single-article or pair convention; fibre composition and mass percentages; yarn count and construction where material; knit or crochet structure; size or production-weighted size mix; net mass per article or pair; colour and dyeing route; finishing and boarding route; elasticity, compression, thermal, protective, or medical-support claim where applicable; finished-product moisture condition; manufacturing site and geography; included production steps; reporting period; packaging exclusion; expected uses and care scenario when projected to a use-based functional unit |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all normalized results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net accepted hosiery after final conditioning and before packaging. Normalize every foreground amount to exactly 1 kg net accepted finished hosiery. |
| `pair_and_item_conversion` | Records expressed as single articles, pairs, dozens, or packs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using measured net mass for the same product, size stratum, pair convention, and reporting period; retain sample size, weighing method, mean, and variability. |
| `packaging_mass_separation` | Consumer and distribution packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure packaging separately by material and do not include it in the 1 kg reference product. |
| `composition_mass_closure` | Fibre, yarn, sewing thread, elastic component, finish add-on, and product declarations | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and mass % | Use one consistent conditioned mass basis and reconcile declared constituent masses to net accepted product mass, with moisture and finish add-on stated. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified yarns, sewing thread, product components, wet-processing chemicals, packaging, and utilities delivered to the first foreground hosiery-manufacturing operation |
| starting_condition_role | Traceable upstream product inputs to hosiery manufacturing; no delivered input is burden-free |
| product_classification_scope | The finished reference product is CPC 3.0 28210; yarns, chemicals, utilities, packaging, transport, and treatment services retain their own identities |
| recursive_input_rule | A purchased finished CPC 28210 article used for rework, pairing replacement, or assembly shall be recorded as an identified finished-hosiery input and shall not be recursively rebuilt inside this foreground package |
| upstream_dataset_requirement | Require representative upstream datasets for every material input, fibre and yarn production, yarn texturing or dyeing where applicable, process chemicals, packaging manufacture, purchased energy, inbound transport, and off-site waste or wastewater treatment |
| disclosure | Declare whether knitting, toe closing, seaming, assembly, dyeing, washing, finishing, drying, boarding, inspection, pairing, packaging, wastewater treatment, and waste treatment are inside or outside operator control; disclose site, geography, technology, reporting period, outsourced steps, and every generic or proxy dataset |

### Normative Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_foreground` | Hosiery manufacturing | Include knitting or crocheting, toe closing or seaming and assembly, inspection, pairing, labelling, packaging, and manufacturing wastes for the declared route. | `epd-international-pcr-2024-03-apparel` |
| `boundary_conditional_operations` | Wet finishing, boarding, and treatment | Include dyeing, washing, bleaching, finishing, drying, boarding, on-site steam or heat generation, direct emissions, and wastewater treatment whenever performed under foreground control; otherwise connect representative upstream or service datasets and prevent double counting. | `epd-international-pcr-2024-03-apparel` |
| `boundary_upstream_traceability` | Purchased materials and services | Do not treat yarn, thread, chemicals, packaging, electricity, steam, transport, or off-site treatment as burden-free; link each material exchange to a representative upstream dataset or disclose a data gap. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `boundary_inventory_completeness` | Product system | Account for at least 99% of product-content mass and energy use and assess exclusions for environmental relevance; document each cut-off and the evidence used to verify it. | `epd-international-pcr-2024-03-apparel` |
| `boundary_downstream_separation` | Dataset use | Keep distribution, retail, consumer care, reuse, and end-of-life outside this manufacturing foreground dataset while preserving metadata required to connect those stages in a lifecycle model. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `boundary_atomic_exchange` | Inventory construction | Represent each yarn, chemical, utility, packaging component, waste stream, and elementary emission as a separate exchange; do not use collection labels or selector instructions as flows. | `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hosiery_knitting` | Hosiery knitting or crocheting | required | Always | Converts declared yarns into knitted or crocheted hosiery bodies | kg accepted knitted hosiery bodies |
| `toe_closing_assembly` | Toe closing, seaming, and assembly | required | Always; operations may be integral to knitting when documented | Closes toes, forms seams, and attaches product-specific components | kg accepted assembled hosiery |
| `wet_finishing_boarding` | Wet finishing, drying, and boarding | conditional | Include every foreground-controlled washing, bleaching, dyeing, softening, heat-setting, drying, or boarding step | Applies declared colour, finish, dimensions, and shape | kg accepted wet-finished hosiery |
| `inspection_packaging` | Inspection, pairing, labelling, and packaging | required | Always | Verifies conformity, pairs articles where applicable, labels, packs, and releases product | 1 kg net accepted finished hosiery |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include when hosiery-manufacturing wastewater is treated on site | Treats measured wet-processing wastewater and reports residual emissions and sludge | m3 wastewater treated |

### Process: Hosiery knitting or crocheting (`hosiery_knitting`)

#### Inputs

##### Product flows

###### Cotton yarn (`cotton_yarn_input`)

Record cotton yarn only for products whose bill of materials contains cotton yarn, separating materially different counts, twist, colour, recycled content, and suppliers into separate dataset exchanges.

- Selected flow: Cotton yarn, ring-spun, with declared yarn count and fibre origin
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass adjusted for returned cones and opening and closing work-in-process stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted knitted hosiery bodies
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_balance`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Polyamide-6 continuous filament yarn (`polyamide6_yarn_input`)

Record polyamide-6 continuous filament yarn when present, with linear density, filament structure, texturing, colour, and recycled content declared.

- Selected flow: Polyamide 6 continuous filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass adjusted for returned cones and opening and closing work-in-process stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted knitted hosiery bodies
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_balance`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Polyester continuous filament yarn (`polyester_yarn_input`)

Record polyester continuous filament yarn when present, with linear density, filament structure, texturing, colour, and recycled content declared.

- Selected flow: Polyethylene terephthalate continuous filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass adjusted for returned cones and opening and closing work-in-process stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted knitted hosiery bodies
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_balance`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Elastane filament yarn (`elastane_yarn_input`)

Record elastane filament yarn when used for stretch, fit, support, or compression, with linear density, covering construction, and supplier specification retained.

- Selected flow: Elastane filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass adjusted for returned cones and opening and closing work-in-process stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted knitted hosiery bodies
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_balance`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Knitting electricity (`knitting_electricity`)

Record electricity consumed by knitting or crocheting machines and directly associated extraction or compressed-air equipment using the site supply identity and voltage level.

- Selected flow: Electricity, grid supply at the hosiery-manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or a documented equipment-meter allocation reconciled to the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted knitted hosiery bodies
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted knitted hosiery body (`knitted_hosiery_body_output`)

Record accepted knitted or crocheted bodies transferred to toe closing, seaming, or assembly, using the declared product construction and composition.

- Selected flow: Knitted hosiery body of the declared product composition and construction
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted knitted hosiery bodies
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_output_waste`
- Sources: `mass-balance-identity`

##### Waste flows

###### Cotton yarn waste (`cotton_yarn_waste`)

Record cotton yarn ends, unusable cone remnants, and cotton-dominant knitting rejects separately from synthetic yarn wastes, with actual destination documented.

- Selected flow: Cotton yarn waste
- Flow property / unit: Mass / kg
- Amount rule: measured cotton-yarn waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted knitted hosiery bodies
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_output_waste`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Polyamide-6 yarn waste (`polyamide6_yarn_waste`)

Record polyamide-6 yarn ends and unusable cone remnants separately from cotton and polyester wastes, with contamination and actual destination documented.

- Selected flow: Polyamide 6 filament yarn waste
- Flow property / unit: Mass / kg
- Amount rule: measured polyamide-6 yarn waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted knitted hosiery bodies
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_output_waste`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Polyester yarn waste (`polyester_yarn_waste`)

Record polyester yarn ends and unusable cone remnants separately from cotton and polyamide wastes, with contamination and actual destination documented.

- Selected flow: Polyethylene terephthalate filament yarn waste
- Flow property / unit: Mass / kg
- Amount rule: measured polyester-yarn waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted knitted hosiery bodies
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_output_waste`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Elementary flows

### Process: Toe closing, seaming, and assembly (`toe_closing_assembly`)

#### Inputs

##### Product flows

###### Knitted hosiery body (`knitted_body_input`)

Record the product-specific knitted body transferred from knitting and reconcile its mass with the upstream internal output and stock change.

- Selected flow: Knitted hosiery body of the declared product composition and construction
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `mass-balance-identity`

###### Polyester sewing thread (`polyester_sewing_thread_input`)

Record polyester sewing thread used for toe closing or seaming, with thread count, construction, colour, and supplier specification declared.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured issue less returns, reconciled to work orders and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Assembly electricity (`assembly_electricity`)

Record electricity consumed by linking, seaming, sewing, and directly associated equipment under the site supply identity.

- Selected flow: Electricity, grid supply at the hosiery-manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented equipment-meter allocation reconciled to the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted assembled hosiery (`assembled_hosiery_output`)

Record assembled hosiery accepted for finishing or inspection after toe closing, seaming, and component attachment.

- Selected flow: Assembled hosiery of the declared product composition and construction
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `mass-balance-identity`

##### Waste flows

###### Off-cut or rejected hosiery material (`offcut_hosiery_waste`)

Record clipped seam allowances, toe remnants, and rejected assembled articles as one product-composition-specific waste stream only when they share the same physical composition and treatment route.

- Selected flow: Hosiery production waste of the declared finished-product composition
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Elementary flows

### Process: Wet finishing, drying, and boarding (`wet_finishing_boarding`)

#### Inputs

##### Product flows

###### Assembled hosiery (`assembled_hosiery_input`)

Record assembled hosiery entering the declared wet-finishing or boarding route and reconcile it with the assembly output and stock change.

- Selected flow: Assembled hosiery of the declared product composition and construction
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `mass-balance-identity`

###### Process water (`process_water_input`)

Record metered water entering washing, dyeing, rinsing, softening, or steam generation, using the actual source and treatment state.

- Selected flow: Process water supplied to the hosiery wet-finishing line
- Flow property / unit: Volume / m3
- Amount rule: metered batch or line consumption reconciled to the site water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Wet-finishing electricity (`wet_finishing_electricity`)

Record electricity consumed by wet-processing machines, pumps, dryers, boarding machines, and directly associated controls.

- Selected flow: Electricity, grid supply at the hosiery-manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented equipment-meter allocation reconciled to the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Purchased steam (`purchased_steam_input`)

Record purchased steam only when it crosses the foreground boundary, with pressure, temperature, condensate return, and supplier route declared.

- Selected flow: Purchased saturated steam at declared pressure
- Flow property / unit: Energy / MJ
- Amount rule: metered steam delivery or supplier invoice reconciled to the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Reactive Black 5 dyestuff (`reactive_black5_input`)

Record Reactive Black 5 only for a declared recipe that actually uses this dyestuff; other dyestuffs shall be represented by separate chemical-specific cards and shall not be substituted into this row.

- Selected flow: Reactive Black 5 dyestuff, CAS 17095-24-8
- Flow property / unit: Mass / kg
- Amount rule: batch recipe issue reconciled to stock and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Sodium chloride (`sodium_chloride_input`)

Record sodium chloride only when the declared wet-processing recipe uses it and retain grade and concentration evidence.

- Selected flow: Sodium chloride, CAS 7647-14-5
- Flow property / unit: Mass / kg
- Amount rule: batch recipe issue reconciled to stock and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Sodium carbonate (`sodium_carbonate_input`)

Record sodium carbonate only when the declared wet-processing recipe uses it and retain grade and concentration evidence.

- Selected flow: Sodium carbonate, CAS 497-19-8
- Flow property / unit: Mass / kg
- Amount rule: batch recipe issue reconciled to stock and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Acetic acid (`acetic_acid_input`)

Record acetic acid only when the declared neutralization or finishing recipe uses it, retaining solution concentration and delivered mass.

- Selected flow: Acetic acid, CAS 64-19-7
- Flow property / unit: Mass / kg
- Amount rule: delivered solution mass multiplied by verified active concentration, reconciled to batch issue and stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted wet-finished hosiery (`wet_finished_hosiery_output`)

Record accepted hosiery after declared washing, dyeing, finishing, drying, and boarding, at the stated moisture condition.

- Selected flow: Wet-finished hosiery of the declared product composition, colour, finish, and moisture condition
- Flow property / unit: Mass / kg
- Amount rule: measured accepted conditioned output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `mass-balance-identity`

##### Waste flows

###### Wet-finishing wastewater (`wet_finishing_wastewater_output`)

Record the measured wastewater stream leaving the wet-finishing process for on-site or off-site treatment, with route, pH, temperature, and sampled composition declared.

- Selected flow: Hosiery wet-finishing wastewater with declared treatment route
- Flow property / unit: Volume / m3
- Amount rule: metered discharge volume matched to represented production batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted wet-finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Elementary flows

### Process: Inspection, pairing, labelling, and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Wet-finished or assembled hosiery (`wet_finished_hosiery_input`)

Record accepted hosiery entering inspection and packaging, using the actual route output and retaining the moisture condition.

- Selected flow: Finished hosiery intermediate of the declared product composition and route
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net accepted finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_records`
- Sources: `mass-balance-identity`

###### Packaging-line electricity (`packaging_electricity`)

Record electricity consumed by inspection, testing, pairing, labelling, and packaging equipment.

- Selected flow: Electricity, grid supply at the hosiery-manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented equipment-meter allocation reconciled to the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net accepted finished hosiery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Corrugated board box (`corrugated_box_input`)

Record corrugated board used for distribution boxes separately from film, labels, hangers, and pallets, with grade and recycled content declared.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: measured issue less unused returns, reconciled to packed output and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net accepted finished hosiery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Low-density polyethylene bag (`ldpe_bag_input`)

Record each low-density polyethylene consumer or grouping bag separately from other packaging polymers, with film thickness and recycled content declared.

- Selected flow: Low-density polyethylene film bag
- Flow property / unit: Mass / kg
- Amount rule: measured issue less unused returns, reconciled to packed output and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net accepted finished hosiery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Paper product label (`paper_label_input`)

Record paper labels or bands separately from polymer labels, adhesives, and boxes, with paper grade and printing route declared.

- Selected flow: Printed paper product label
- Flow property / unit: Mass / kg
- Amount rule: component count multiplied by verified unit mass and reconciled to issued stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net accepted finished hosiery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net accepted finished hosiery (`reference_hosiery_output`)

Record saleable finished hosiery after inspection and pairing, before packaging, using the verified public TianGong product-flow identity.

- Selected flow: Panty hose, tights, stockings, socks and other hosiery, knitted or crocheted `c00d32b4-7e02-479b-8cae-d94b50ed1a7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: net accepted conditioned product mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg net accepted finished hosiery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output_records`
- Sources: `mass-balance-identity`

##### Waste flows

###### Off-spec finished hosiery (`offspec_finished_hosiery_waste`)

Record inspected hosiery rejected from sale as a product-composition-specific waste stream and retain its actual reuse, recovery, or treatment destination.

- Selected flow: Off-spec finished hosiery of the declared product composition
- Flow property / unit: Mass / kg
- Amount rule: measured rejected net mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net accepted finished hosiery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Corrugated board packaging waste (`cardboard_packaging_waste`)

Record damaged and discarded corrugated board separately from paper labels and polymer film, with actual treatment route documented.

- Selected flow: Corrugated fibreboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured discarded corrugated-board mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net accepted finished hosiery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Low-density polyethylene packaging waste (`ldpe_packaging_waste`)

Record damaged and discarded low-density polyethylene film separately from other polymers, with contamination and actual treatment route documented.

- Selected flow: Low-density polyethylene film packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured discarded low-density polyethylene film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net accepted finished hosiery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Elementary flows

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wet-finishing wastewater received for treatment (`wastewater_treatment_input`)

Record the internal wastewater stream entering on-site treatment and reconcile its volume and sampled pollutant load with wet-finishing discharge records.

- Selected flow: Hosiery wet-finishing wastewater with declared composition
- Flow property / unit: Volume / m3
- Amount rule: metered influent volume matched to wet-finishing production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Wastewater-treatment electricity (`wastewater_treatment_electricity`)

Record electricity consumed by pumping, aeration, dosing, dewatering, and treatment controls under the site supply identity.

- Selected flow: Electricity, grid supply at the hosiery-manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered treatment-plant consumption reconciled to the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Record sodium hydroxide only when used for pH control or treatment, retaining delivered concentration and active mass.

- Selected flow: Sodium hydroxide, CAS 1310-73-2
- Flow property / unit: Mass / kg
- Amount rule: delivered solution mass multiplied by verified active concentration and reconciled to dosing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Dewatered wastewater-treatment sludge (`dewatered_sludge_output`)

Record dewatered sludge with wet mass, dry-matter fraction, hazardous status, and actual treatment destination.

- Selected flow: Dewatered textile wastewater-treatment sludge with declared dry-matter fraction
- Flow property / unit: Mass / kg
- Amount rule: measured wet sludge mass with measured dry-matter fraction reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Elementary flows

###### Chemical oxygen demand to freshwater (`cod_to_freshwater`)

Record chemical oxygen demand discharged to the declared freshwater compartment from matched effluent concentration and volume records.

- Selected flow: Chemical oxygen demand to freshwater
- Flow property / unit: Mass / kg
- Amount rule: matched-period effluent COD concentration multiplied by treated discharge volume with unit conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Total nitrogen to freshwater (`total_nitrogen_to_freshwater`)

Record total nitrogen discharged to the declared freshwater compartment from matched effluent concentration and volume records.

- Selected flow: Total nitrogen to freshwater
- Flow property / unit: Mass / kg
- Amount rule: matched-period effluent total-nitrogen concentration multiplied by treated discharge volume with unit conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Total phosphorus to freshwater (`total_phosphorus_to_freshwater`)

Record total phosphorus discharged to the declared freshwater compartment from matched effluent concentration and volume records.

- Selected flow: Total phosphorus to freshwater
- Flow property / unit: Mass / kg
- Amount rule: matched-period effluent total-phosphorus concentration multiplied by treated discharge volume with unit conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `epd-international-pcr-2024-03-apparel`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Shared operations and meters | First subdivide by process, line, batch, product, and reporting period and collect direct foreground data. Do not allocate directly measured amounts. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `allocation_physical` | Residual shared utilities or services | If subdivision is not feasible, allocate only the residual shared amount using a documented physical causal driver such as machine time, metered demand, treated volume, or mass throughput; reconcile allocated totals to the source record. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `allocation_economic_fallback` | Multi-output process without a defensible physical relationship | Use reporting-period economic allocation only as a documented fallback, retain price and quantity evidence, and test sensitivity to price variation. | `epd-international-pcr-2024-03-apparel` |
| `allocation_pairing_and_rework` | Pairing rejects, rework, and replacement articles | Assign rework inputs and losses to the product order that caused them when traceable; otherwise use a production-volume-weighted driver within the same hosiery type, size, composition, and period. | `mass-balance-identity` |
| `allocation_waste_status` | Yarn waste, off-spec hosiery, packaging waste, and sludge | Keep waste-treatment burdens with the generating product until documented end-of-waste criteria are met. A sale, recycling collection, or intended recovery alone does not establish a co-product credit. | `epd-international-pcr-2024-03-apparel` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_material_balance` | `hosiery_knitting` | each yarn input | bills of materials, receipts, cone issues and returns, stock counts, supplier specifications | product id; yarn id; polymer or fibre; count; construction; colour; recycled content; opening stock; receipts; issues; returns; closing stock; mass | calibrated scales and inventory reconciliation by yarn identity | kg | per lot and work order; monthly stock close | same representative period as knitting output | every knitting site and outsourced operation under control | opening + receipts - returns - closing, assigned through traceable work orders | scale calibration; supplier specification; stock reconciliation; variance log |
| `cp_knitting_output_waste` | `hosiery_knitting` | accepted bodies and each yarn-specific waste | machine, work-order, acceptance, reject, and waste records | machine; product; yarn lot; input mass; accepted body mass; waste mass by material; stock change | calibrated scales and machine-order reconciliation | kg | per work order or shift | representative production period | every knitting line in scope | reconcile yarn inputs to accepted bodies, material-specific wastes, and stock change | scale calibration; signed order close; material-balance residual |
| `cp_assembly_records` | `toe_closing_assembly` | knitted body, sewing thread, accepted assembly, and off-cuts | transfer, issue, work-order, output, and reject records | product; size; input mass; thread issue and return; accepted mass; waste mass; rework | calibrated scales and work-order records | kg; count | per work order | same period as knitting and product output | every assembly line in scope | reconcile input, thread, accepted output, waste, rework, and stock change | scale calibration; work-order trace; acceptance record |
| `cp_wet_finishing_records` | `wet_finishing_boarding` | hosiery input/output, water, and route condition | batch sheets, meters, recipes, dryer and boarding logs | batch; product; input and output mass; moisture; water; temperature; time; machine; finish route | batch records plus calibrated meters and scales | kg; m3; °C; h | per batch; monthly reconciliation | same period as accepted output | every wet-processing, drying, and boarding line in scope | aggregate declared batches and normalize to accepted conditioned output | meter and scale calibration; approved recipe; batch acceptance; water and mass balance |
| `cp_chemical_recipe_records` | `wet_finishing_boarding` | each chemical-specific input | approved recipe, issue, return, stock, and supplier records | chemical identity; CAS; concentration; active content; batch issue; return; opening and closing stock; supplier lot | weighed issue and stock reconciliation; active mass calculated only from verified concentration | kg | per batch; monthly stock close | same period as represented wet processing | every foreground wet-processing site | sum active or delivered mass consistently by chemical; never combine chemicals | approved recipe; SDS; certificate of analysis; scale calibration; stock reconciliation |
| `cp_energy_records` | all foreground processes | electricity and purchased steam | meters, invoices, equipment logs, production hours | meter; start and end reading; carrier; quantity; unit; equipment; product order; operating time | submetering preferred; residual shared use allocated by documented causal driver | kWh; MJ | continuous or per shift; monthly reconciliation | same period for all core processes | each site and relevant line | sum metered use; allocate only residual shared use; reconcile to site totals | meter calibration; invoice reconciliation; allocation worksheet; electricity supply evidence |
| `cp_packaging_records` | `inspection_packaging` | each packaging component and packaging waste | bills of material, issue and return logs, component counts, supplier specifications, waste logs | component id; material; grade; unit mass; recycled content; issue; return; packed count; waste mass | verified unit mass and inventory reconciliation by component | kg; count | per packaging order; monthly close | same period as packed output | every packing site | net issue by component normalized to net accepted product; reconcile packaging waste | scale calibration; supplier specification; stock and count reconciliation |
| `cp_product_output_records` | `inspection_packaging` | inspected, paired, accepted, rejected, and reworked hosiery | production, inspection, pairing, scale, and release records | product; hosiery type; size; single or pair convention; count; net mass; moisture; accepted; rejected; reworked; release date | calibrated scale and quality-system records | count; pair; kg | per batch or order | representative production period | all release sites | production-volume-weighted aggregation by product and size stratum; packaging excluded | scale calibration; acceptance criteria; pairing record; release authorization |
| `cp_wastewater_records` | `wet_finishing_boarding` | wastewater leaving wet finishing | discharge meters, sampling and route records | batch; volume; pH; temperature; COD; nitrogen; phosphorus; treatment destination; sampling time | calibrated flow meter and documented sampling | m3; concentration units | continuous volume; sampling at permit or process frequency | matched to represented wet-processing batches | every discharge point in scope | match discharge volume and samples to production periods; disclose unmatched coverage | meter calibration; laboratory report; chain of custody; route evidence |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | influent, electricity, sodium hydroxide, effluent emissions, and sludge | influent and effluent meters, laboratory results, chemical records, sludge tickets | volume; concentration; chemical solution mass and concentration; electricity; sludge wet mass and dry matter; discharge compartment | calibrated meters, laboratory testing, dosing records, and weighbridge tickets | m3; kg; kWh | continuous volume; permit sampling; per sludge movement | same period as wet-processing production | every on-site treatment unit | water and pollutant balance over matched periods; normalize to treated volume and reference product | meter calibration; laboratory QA; permit record; dosing reconciliation; sludge disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground amount | normalized amount = reporting-period attributable amount / reporting-period net accepted finished-hosiery mass | amount by atomic flow; net accepted product mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calc_material_consumption` | Each yarn, sewing thread, chemical, and packaging component | consumed mass = opening stock + receipts - supplier returns - closing stock; reconcile work-order issues and unexplained variance | stock and transaction records | consumed kg by atomic material identity | `mass-balance-identity` |
| `calc_item_pair_mass` | Count-only output records | net product mass = accepted count or pair count multiplied by measured mean net mass for the same product and size stratum | count; pairing convention; sample masses; production weights | kg net accepted finished hosiery | `mass-balance-identity` |
| `calc_process_mass_balance` | Knitting, assembly, wet finishing, and packaging | residual = inputs + opening work in process - accepted outputs - measured wastes - closing work in process; report moisture or finish add-on separately | measured mass records by atomic flow | process residual and reconciliation statement | `mass-balance-identity` |
| `calc_active_chemical_mass` | Delivered chemical solutions | active chemical mass = delivered solution mass multiplied by verified mass fraction; retain delivered solution amount separately | delivered mass; certificate concentration | kg active chemical | `mass-balance-identity` |
| `calc_shared_utility` | Residual shared meters | allocated utility = residual meter amount multiplied by product causal-driver share; allocated totals shall equal the residual meter amount | source meter; directly assigned amounts; causal driver by product | allocated utility by product | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `calc_effluent_load` | COD, total nitrogen, and total phosphorus | discharged load = matched-period concentration multiplied by treated discharge volume with explicit unit conversion | concentration; volume; sample coverage | kg pollutant to declared freshwater compartment | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain hosiery type, single or pair convention, composition percentages, yarn construction, knit structure, size or size mix, net mass, colour, finish, performance claim, moisture condition, route, site, geography, and reporting period. | approved specification; bill of materials; production order; scale and quality records |
| `dq_core_specific_data` | All foreground core processes | Use site-specific records for operations under foreground control and ensure all core data represent the same period; disclose and justify deviations. | meters; invoices; production, warehouse, recipe, quality, waste, and treatment records; `epd-international-pcr-2024-03-apparel` |
| `dq_upstream_representativeness` | Yarns, chemicals, packaging, energy, transport, and treatment datasets | Assess fibre or polymer, technology, geography, time, recycled content, and boundary fit; prefer supplier-specific data for main inputs and disclose generic and proxy shares. | supplier datasets; representativeness assessment; sensitivity analysis; `epd-international-pcr-2024-03-apparel` |
| `dq_completeness` | Product system | Demonstrate at least 99% product-content mass and energy coverage and assess all exclusions for environmental relevance. | material and energy reconciliation; exclusion register; sensitivity or expert review; `epd-international-pcr-2024-03-apparel` |
| `dq_measurement` | Mass, counts, energy, water, chemicals, wastes, and emissions | Identify instrument, calibration, unit, sampling frequency, detection limit where applicable, missing-data treatment, and aggregation method. | calibration certificates; laboratory QA; meter, scale, and sampling logs |
| `dq_atomic_identity` | Every inventory exchange | Retain one material or substance identity, specification, supplier or route where relevant, and Tiangong UUID only when publicly verified; never combine multiple chemicals, energy carriers, packaging materials, wastes, or emissions in one row. | bill of materials; SDS or specification; supplier record; UUID verification record |
| `dq_allocation` | Shared processes | Retain subdivision attempts, the physical causal relationship, driver values, allocated totals, and sensitivity evidence for economic fallback. | allocation worksheet; meter reconciliation; price evidence; sensitivity analysis; `epd-international-pcr-2024-03-apparel` |
| `dq_waste_route` | Every waste flow | Identify composition, mass basis, destination, treatment, carrier, and end-of-waste evidence; do not assume recycling from collection alone. | transfer note; weighbridge record; treatment receipt; end-of-waste evidence |
| `dq_uncertainty_and_gaps` | Published dataset | Disclose unresolved UUIDs, proxy data, missing periods, exclusions, material or energy imbalance, allocation, and sensitivity results; do not replace missing foreground amounts with AI-generated ranges. | quality disclosure and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Product identity | Fail if CPC 28210 context, hosiery type, knit or crochet construction, fibre composition, size basis, single or pair convention, net mass, colour or finish, route, site, or reporting period is missing. | `epd-international-pcr-2024-03-apparel` |
| `validate_reference_flow` | Quantitative reference | Fail unless the normalized output is exactly 1 kg net accepted finished hosiery using Product flow `c00d32b4-7e02-479b-8cae-d94b50ed1a7a`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `mass-balance-identity` |
| `validate_pair_item_conversion` | Count-based records | Fail if item, pair, dozen, or pack records are converted without a measured product- and size-specific net mass and declared pairing convention. | `mass-balance-identity` |
| `validate_packaging_separation` | Packaging | Fail if packaging mass is included in reference-product mass or if corrugated board, polyethylene film, paper labels, and any other packaging materials are not reported separately. | `epd-international-pcr-2024-03-apparel` |
| `validate_required_processes` | Process coverage | Fail if knitting or crocheting, toe closing or assembly, or inspection, pairing, labelling, and packaging is absent; require documented applicability decisions for wet finishing, boarding, and on-site wastewater treatment. | `epd-international-pcr-2024-03-apparel` |
| `validate_atomic_flows` | Inventory rows | Fail any row whose selected flow is a plural collection, a material or utility selector, or a combined waste or emission stream; every chemical and emission shall retain a specific identity and compartment. | `mass-balance-identity` |
| `validate_material_balance` | Mass-based processes | Fail if inputs, accepted outputs, wastes, rework, moisture or finish add-on, and stock changes do not reconcile within documented measurement uncertainty or if residuals are hidden by normalization. | `mass-balance-identity` |
| `validate_energy_water_chemicals` | Core utilities and wet-processing recipes | Fail if an included operation lacks foreground energy records, if water is unmetered without a documented reconciliation, or if recipe chemicals are aggregated rather than reported by chemical identity and active concentration. | `epd-international-pcr-2024-03-apparel` |
| `validate_wastewater_emissions` | Wet processing and on-site treatment | Fail if wastewater route, matched volume, sampling coverage, sludge destination, or applicable atomic pollutant loads are omitted or if incompatible environmental compartments are combined. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `validate_completeness` | Product system | Fail if the dataset cannot demonstrate 99% product-content mass and energy coverage or does not document and assess cut-offs. | `epd-international-pcr-2024-03-apparel` |
| `validate_allocation` | Shared processes | Fail if allocation bypasses subdivision without justification, lacks a defensible physical relationship, or uses economic allocation without reporting-period values and sensitivity analysis. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `validate_upstream_links` | Purchased inputs and services | Fail if yarns, main chemicals, packaging, energy, transport, or off-site treatment are burden-free or connected to an unassessed generic or proxy dataset. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `validate_uuid_evidence` | UUID-bearing references | Fail any inventory UUID that lacks both a relevant hybrid-search result and a direct public state_code=100 identity read; unresolved rows shall keep their UUID absent and remain disclosed by row_id. | `mass-balance-identity` |
| `validate_data_quality_disclosure` | Published foreground dataset | Fail if reporting period, geography, technology, supplier-specific or generic status, measurement methods, allocation, cut-offs, uncertainty, and unresolved identity references are not disclosed. | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for finished knitted or crocheted panty hose, tights, stockings, socks, and other hosiery |
| downstream_use | `secondary_dataset`; `background_dataset` for product systems requiring a hosiery-manufacturing stage; source for downstream `process` and `lifecyclemodel` projections |
| allowed_use | Hosiery-manufacturing LCI, supplier-specific or representative production modelling, hotspot analysis, and connection to separately modelled upstream yarn and downstream distribution, use, and end-of-life stages |
| excluded_use | Claiming a complete cradle-to-grave hosiery result without connected upstream and downstream stages; comparison across products with different function, compression or support, lifetime, pairing loss, size basis, composition, or care scenario without functional equivalence; use as a yarn-production dataset |
| required_metadata | PCR id and version state; product and flow identity; hosiery and pairing convention; composition; yarn and knit construction; size basis; net unit and pair mass; colour, finish, and claimed performance; included route; site and geography; reporting period; verified reference UUIDs; upstream dataset identities; allocation; cut-offs; data sources |
| required_quality_disclosure | specific, selected-generic, and proxy data shares; measurement and sampling methods; temporal, geographical, and technological representativeness; material and energy closure; chemical identity; wastewater and waste routes; assumptions; uncertainty; sensitivity; unresolved UUIDs; absence of default quantitative ranges |
| update_trigger | Change in product construction, composition, yarn supplier, knitting technology, site, energy supply, dye or finish recipe, boarding route, packaging, wastewater or waste treatment, allocation, or data period that materially changes an inventory amount or declared result; correction of errors or stale upstream datasets |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-28210` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, code 28210, "Panty hose, tights, stockings, socks and other hosiery, knitted or crocheted." https://unstats.un.org/unsd/classifications/Econ, accessed 2026-08-13. | Official classification identity and product-category scope |
| `epd-international-pcr-2024-03-apparel` | standard | International EPD System, PCR 2024:03, Apparel, except fur and leather apparel, version 1.0.0, 2024-05-28, valid to 2028-05-28. https://www.environdec.com/pcr-library/pcr_fe5934d8-029d-4c48-19ea-08db3f138c24 (official PDF: https://api.prod.environdec.com/api/v2/EPDLibrary/Files/e91dc7c8-2c6c-4f16-e74f-08dc7a67eb3e/Data), accessed 2026-08-13. | Explicit inclusion of CPC 2821 hosiery; functional-use qualifiers; upstream, core, and downstream process coverage; manufacturing, quality control, packaging, waste and wastewater treatment; 99% completeness; allocation hierarchy; site-specific core data and disclosure requirements |
| `ec-pef-method-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf, accessed 2026-08-13. | Functional unit, reference flow, lifecycle stages, company-specific and secondary data, allocation, data quality, verification, and connection of foreground data to full product footprints |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to measured foreground inputs, outputs, wastes, stock changes, active concentrations, and normalized product mass; no external numeric factor. | Reference normalization, material consumption, process reconciliation, active-chemical calculation, pollutant-load calculation, and validation |
