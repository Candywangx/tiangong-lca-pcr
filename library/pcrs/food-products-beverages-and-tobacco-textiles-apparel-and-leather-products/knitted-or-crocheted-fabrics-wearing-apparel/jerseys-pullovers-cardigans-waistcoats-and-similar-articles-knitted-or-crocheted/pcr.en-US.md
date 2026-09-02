---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.jerseys-pullovers-cardigans-waistcoats-and-similar-articles-knitted-or-crocheted
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Jerseys, pullovers, cardigans, waistcoats and similar articles, knitted or crocheted

## 1. Scope and Applicability

This PCR supports production of a gate-to-gate foreground data package for saleable knitted or crocheted jerseys, pullovers, cardigans, waistcoats, and similar upper-body garments. The declared boundary starts with purchased yarns and garment components received at the manufacturing site and ends with the net finished garment and its separately inventoried packaging at the factory gate.

The PCR covers flat-bed, circular, hand- or machine-crocheted, fully fashioned, cut-and-sew, and integral or seamless production when the resulting product remains within the semantic product boundary. Fibre composition, knitting technology, coloration route, accessory construction, quality requirements, and whether wet processing is on-site or supplied must be declared. Yarn production, fibre production, distribution, retail, consumer use, repair, reuse, and end of life are outside this foreground boundary and require linked upstream or downstream datasets when included in a lifecycle model.

The PCR excludes T-shirts and singlets; shirts and blouses; dresses, trousers, coats, jackets, underwear, hosiery, gloves, scarves, and other accessories; woven or non-textile upper-body garments; knitted fabric sold as fabric; and garment parts sold as independent products. It does not provide a comparative claim, a consumer-use functional unit, or default activity quantities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.jerseys-pullovers-cardigans-waistcoats-and-similar-articles-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28226 — Jerseys, pullovers, cardigans, waistcoats and similar articles, knitted or crocheted |
| covered_products | Finished knitted or crocheted jerseys, pullovers, cardigans, waistcoats, sweater vests, and semantically equivalent upper-body garments |
| excluded_products | T-shirts, singlets, shirts, blouses, dresses, trousers, coats, jackets, underwear, hosiery, gloves, scarves, other accessories, woven garments, fabric sold by length or area, and separately sold garment parts |
| representative_product | A saleable knitted pullover or cardigan made from a declared yarn bill of materials, with declared closures and labels, finished and quality-checked at the factory gate |
| production_route | Yarn receipt and batch issue; knitting or crocheting; conditional wet processing; linking, cutting and sewing or integral-garment completion; finishing, inspection and testing; packaging |
| market_state | New, dry, saleable finished garment at factory gate; net garment mass excludes removable distribution packaging and includes permanent labels, closures and trims |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of saleable knitted or crocheted upper-body garments within this PCR boundary |
| How much | 1 kg net mass of finished garments at the factory gate |
| How well | Conforms to the declared fibre composition, product subtype, knitting construction, size range, workmanship, care instructions, and declared pilling and dimensional-stability requirements |
| How long or cycle | One completed manufacturing batch; no consumer-use duration or number of wears is asserted by this gate-to-gate foreground data package |
| reference_flow_link | 1 kg net finished garment output from `p_packaging`, excluding removable distribution packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Jerseys, pullovers, cardigans, waistcoats and similar articles, knitted or crocheted `eccda6b6-0639-4a61-8af1-4bea892ac61c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; fibre composition by mass; recycled-content claim and evidence when applicable; yarn count or linear density; knitting or crocheting technology; machine gauge or declared hand-crochet specification; coloration route; size range; net garment mass; permanent accessory composition; wet-processing location; country and site; production period; care instruction; pilling test method and result; dimensional-change test method and result |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net mass from calibrated batch or item measurements after finishing and before removable distribution packaging; include permanent labels, closures and trims. |
| `item_to_mass_conversion` | Production records reported as garment count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert count to mass with a measured, product- and size-specific mean net garment mass from the same production period; retain item count, sample size, weighing record and conversion formula. |
| `moisture_state_consistency` | Yarns, workpieces, wastes and reference garment | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record whether mass is as-received, conditioned or oven-dry; do not mix moisture states in a mass balance without a documented conversion based on measured moisture or regain. |
| `utility_unit_preservation` | Electricity, steam, hot water, natural gas and diesel | Declared energy, mass or volume property | Declared source unit and converted SI unit | Retain the original meter or invoice unit, conversion factor, calorific-value basis where relevant, and converted amount; do not merge different utility carriers into one exchange. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground manufacturing data package | Include yarn issue, knitting or crocheting, applicable wet processing, garment assembly, finishing, inspection, quality testing and packaging through the factory gate. | `ec-pef-method-2021-2279`; `wiedemann-wool-garment-2020` |
| `boundary_complete_inventory` | every included process | Record all known product inputs, utilities, wastes and direct elementary emissions as separate atomic exchanges; document data gaps rather than hiding them in combined rows. | `ec-pef-method-2021-2279`; `eu-textiles-bat-2022-2508` |
| `boundary_wet_processing` | on-site or controlled wet processing | Include water, each energy carrier, each purchased chemical formulation, wastewater, sludge and monitored direct air or water emissions when washing, scouring, bleaching, dyeing or finishing is performed within the declared foreground boundary. | `eu-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `boundary_outsourced_operations` | outsourced knitting, wet processing, assembly, finishing or packaging | Keep the purchased intermediate product visible and link one supplier- or route-specific upstream dataset; do not represent an outsourced operation as zero burden. | `ec-pef-method-2021-2279` |
| `boundary_exclusions` | distribution and later life-cycle stages | Exclude distribution, retail, consumer washing and drying, repair, reuse, recycling and disposal from this foreground package; disclose the exclusion and add downstream datasets only in a lifecycle model with a separately declared goal and scope. | `ec-apparel-footwear-pefcr-2025`; `iso-14040-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased yarns, permanent components and auxiliaries received at the garment manufacturing site, with supplier identity, composition, quantity, moisture state and origin declared |
| starting_condition_role | Gate-to-gate foreground starting point; fibre, polymer, spinning and upstream coloration burdens remain in linked upstream datasets |
| product_classification_scope | The finished reference product must satisfy CPC 3.0 subclass 28226 and the semantic inclusions and exclusions in section 2 |
| recursive_input_rule | A purchased unfinished or finished garment within the same semantic category remains a visible product input with mass and supplier identity; link its upstream dataset and do not recursively recreate its manufacture inside this foreground package |
| upstream_dataset_requirement | Each purchased yarn, component, chemical, packaging item, utility and outsourced operation requires a geographically, temporally and technologically representative upstream dataset or an explicitly disclosed data gap |
| disclosure | Declare facility and countries, reporting period, product subtype, fibre composition, recycled content, knitting route, wet-processing route and location, net garment mass, allocation method, packaging boundary, excluded stages, data gaps and proxy datasets |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_knitting` | Knitting or crocheting | required | Always included for products within this PCR | Foreground formation of garment workpieces from yarn | kg accepted knitted workpiece |
| `p_wet_processing` | Wet processing and drying | conditional | Include when washing, scouring, bleaching, dyeing, softening, rinsing, hydro-extraction or controlled drying occurs within the foreground boundary | Foreground wet treatment and thermal drying | kg wet-processed knitted workpiece |
| `p_assembly` | Linking, cutting, sewing and component assembly | required | Always included; integral or seamless routes may have zero cutting and reduced linking or sewing, which must be documented | Foreground garment assembly | kg assembled garment |
| `p_finishing_quality` | Finishing, inspection and quality testing | required | Always included; individual steam, hot-water, spot-cleaning and refrigerant rows apply only when used | Foreground final conditioning and acceptance | kg accepted net finished garment |
| `p_packaging` | Packaging and factory-gate release | required | Always included; each packaging component applies only when used | Foreground packaging and reference-product release | 1 kg net finished garment, with packaging inventoried separately |

### Process: Knitting or crocheting (`p_knitting`)

#### Inputs

##### Product flows

###### Cotton yarn input (`yarn_cotton`)

Record cotton yarn issued to the batch when present in the declared bill of materials.

- Selected flow: Cotton yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground batch issue less verified unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `ec-pef-method-2021-2279`

###### Wool yarn input (`yarn_wool`)

Record wool yarn issued to the batch when present in the declared bill of materials.

- Selected flow: Wool yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground batch issue less verified unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `wiedemann-wool-garment-2020`

###### Polyester filament yarn input (`yarn_polyester`)

Record polyester filament yarn issued to the batch when present in the declared bill of materials.

- Selected flow: Polyester filament yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground batch issue less verified unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Polyacrylonitrile staple yarn input (`yarn_acrylic`)

Record acrylic staple yarn issued to the batch when present in the declared bill of materials.

- Selected flow: Polyacrylonitrile staple yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground batch issue less verified unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Viscose rayon yarn input (`yarn_viscose`)

Record viscose rayon yarn issued to the batch when present in the declared bill of materials.

- Selected flow: Viscose rayon yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground batch issue less verified unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `eu-textiles-bref-2023`

###### Elastane yarn input (`yarn_elastane`)

Record elastane yarn issued to the batch when present in the declared bill of materials.

- Selected flow: Elastane yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground batch issue less verified unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### White mineral knitting-machine oil (`knitting_oil`)

Record the single declared knitting-oil product consumed by the batch; additional formulations require separate atomic rows.

- Selected flow: White mineral knitting-machine oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground stock issue or metered make-up consumption attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted knitted workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `ec-pef-method-2021-2279`

###### Knitting electricity (`knitting_electricity`)

Record electricity consumed by knitting or crocheting equipment and directly attributable auxiliaries.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity; otherwise allocated from a documented machine-time and rated-load calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted knitted workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `ec-pef-method-2021-2279`; `wiedemann-waste-wool-sweater-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted knitted garment workpiece (`knitted_workpiece`)

Measure accepted panels, shaped pieces, crocheted components or integral garment blanks as one internal product exchange for the declared batch.

- Selected flow: Knitted garment workpiece
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated batch mass of accepted workpieces transferred forward
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per knitting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `wiedemann-wool-garment-2020`; `bartl-alpaca-sweater-2023`

##### Waste flows

###### Yarn scrap (`yarn_scrap`)

Record yarn ends, sweepings and unrecoverable cone remnants leaving the process as one waste exchange.

- Selected flow: Waste yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed batch waste after separating reusable yarn returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted knitted workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `ec-pef-method-2021-2279`

###### Rejected knitted workpiece (`knitted_reject`)

Record workpieces rejected from knitting inspection and not reworked within the batch.

- Selected flow: Rejected knitted garment workpiece
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected workpieces by documented disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted knitted workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_knitting_batch`
- Sources: `ec-pef-method-2021-2279`

##### Elementary flows

### Process: Wet processing and drying (`p_wet_processing`)

#### Inputs

##### Product flows

###### Knitted workpiece entering wet processing (`wet_workpiece_input`)

Record the dry or as-received knitted workpiece entering the declared wet-treatment batch.

- Selected flow: Knitted garment workpiece
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated batch input mass with moisture state recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per wet-processing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bref-2023`

###### Wet-processing water (`wet_water`)

Record process water crossing the wet-processing boundary.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered batch water, including make-up and rinsing water, net of separately measured internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Wet-processing electricity (`wet_electricity`)

Record electricity consumed by wet-processing and directly attributable drying equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered batch electricity or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Purchased steam (`wet_steam`)

Record purchased steam when it crosses the process boundary; do not combine it with hot water or fuel.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg or energy / MJ, matching the meter or invoice
- Amount rule: Metered or invoiced steam attributable to the wet-processing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Purchased hot water (`wet_hot_water`)

Record purchased hot water when it crosses the process boundary; retain supply and return temperatures.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg and thermal energy / MJ where metered
- Amount rule: Metered hot-water input attributable to the wet-processing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Natural gas for on-site process heat (`wet_natural_gas`)

Record natural gas separately when combusted on-site for the wet-processing batch.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ or volume / m3, with calorific-value conversion retained
- Amount rule: Metered or invoiced natural gas attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Diesel for on-site process heat or backup generation (`wet_diesel`)

Record diesel separately when consumed for process heat or backup electricity serving the batch.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg or volume / L, with density and calorific-value conversion retained
- Amount rule: Tank issue or purchase record attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Sodium chloride (`wet_sodium_chloride`)

Record sodium chloride consumed in the batch when the recipe uses it.

- Selected flow: Sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Recipe issue reconciled to stock withdrawal and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Sodium carbonate (`wet_sodium_carbonate`)

Record sodium carbonate consumed in the batch when the recipe uses it.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Recipe issue reconciled to stock withdrawal and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Hydrogen peroxide (`wet_hydrogen_peroxide`)

Record hydrogen peroxide formulation consumed in the batch when bleaching is performed.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Formulated-product mass from batch recipe and issue record; active concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bref-2023`

###### Acetic acid (`wet_acetic_acid`)

Record acetic acid formulation consumed in the batch when used for pH control or neutralisation.

- Selected flow: Acetic acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Formulated-product mass from batch recipe and issue record; active concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bref-2023`

###### Nonionic textile detergent formulation (`wet_detergent`)

This card represents one supplier formulation identified by trade name and SDS; any additional formulation requires its own atomic row.

- Selected flow: Nonionic textile detergent formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Formulated-product mass from batch issue record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bref-2023`

###### Declared textile dyestuff formulation (`wet_dyestuff`)

This card represents exactly one supplier dyestuff formulation identified by trade name, colour index when available, and SDS; additional formulations require separate atomic rows.

- Selected flow: Declared textile dyestuff formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Formulated-product mass from batch recipe and issue record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-processed knitted workpiece (`wet_workpiece_output`)

Record the accepted workpiece after wet treatment and drying at the declared moisture state.

- Selected flow: Wet-processed knitted garment workpiece
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated batch output mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per wet-processing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bref-2023`

##### Waste flows

###### Textile process wastewater (`wet_wastewater`)

Record wastewater transferred to on-site or external treatment before any assumed treatment credit.

- Selected flow: Textile process wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or mass-balanced wastewater volume converted with measured or justified density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

###### Textile wastewater-treatment sludge (`wet_sludge`)

Record dewatered sludge generated by treatment attributable to the batch, with dry-matter content and destination retained.

- Selected flow: Textile wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed wet sludge attributable to the batch; report dry-matter fraction separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

###### Fossil carbon dioxide to air (`wet_co2`)

Record direct fossil carbon dioxide from on-site natural-gas or diesel combustion serving the batch.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or fuel-specific calculation from foreground fuel records and a disclosed factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_emissions`
- Sources: `eu-textiles-bat-2022-2508`; `ec-pef-method-2021-2279`

###### Nitrogen oxides to air (`wet_nox`)

Record direct nitrogen-oxide emissions from on-site combustion serving the batch.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or fuel-specific calculation from foreground fuel records and a disclosed factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_emissions`
- Sources: `eu-textiles-bat-2022-2508`

###### Sulfur dioxide to air (`wet_so2`)

Record direct sulfur-dioxide emissions from sulfur-containing fuel used for the batch.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or fuel-sulfur calculation from foreground fuel records and a disclosed factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_emissions`
- Sources: `eu-textiles-bat-2022-2508`

###### Particulate matter below 2.5 micrometres to air (`wet_pm25`)

Record direct PM2.5 emissions from on-site combustion or drying when measured or calculated.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or source-specific calculation from foreground activity records and a disclosed factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_emissions`
- Sources: `eu-textiles-bat-2022-2508`

###### Non-methane volatile organic compounds to air (`wet_nmvoc`)

Record direct NMVOC emissions from drying or finishing formulations when monitored or calculated from product-specific composition.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or product-specific mass balance from foreground formulation records and a disclosed factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed workpiece
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_emissions`
- Sources: `eu-textiles-bat-2022-2508`

### Process: Linking, cutting, sewing and component assembly (`p_assembly`)

#### Inputs

##### Product flows

###### Knitted garment workpiece for assembly (`assembly_workpiece`)

Record the knitted workpiece entering assembly, whether transferred directly from knitting or from wet processing.

- Selected flow: Knitted garment workpiece
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated input mass by assembly batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `wiedemann-wool-garment-2020`

###### Polyester sewing thread (`assembly_polyester_thread`)

Record polyester sewing thread consumed by linking, seaming or attaching components when used.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Batch issue less verified reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `ec-pef-method-2021-2279`

###### Metal zipper (`assembly_zipper`)

Record metal zippers attached to cardigans or similar garments when present.

- Selected flow: Metal zipper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count issued multiplied by measured zipper mass for the declared style and size, with verification by batch mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Polyester button (`assembly_button`)

Record polyester buttons attached to the garment when present; other button materials require separate atomic rows.

- Selected flow: Polyester button
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count issued multiplied by measured button mass for the declared component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Woven polyester care label (`assembly_care_label`)

Record the permanent woven care label attached to each garment.

- Selected flow: Woven polyester care label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count attached multiplied by measured label mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `iso-6330-2021`

###### Assembly electricity (`assembly_electricity`)

Record electricity consumed by linking, cutting, sewing, pressing at assembly and directly attributable auxiliaries.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered batch electricity or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `wiedemann-waste-wool-sweater-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled knitted garment (`assembled_garment`)

Record garments that complete assembly and transfer to final finishing and quality control.

- Selected flow: Assembled knitted garment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated accepted output mass by assembly batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `wiedemann-wool-garment-2020`

##### Waste flows

###### Knitted textile offcuts (`assembly_offcuts`)

Record cut-and-sew offcuts separately; document zero generation for fully fashioned or integral routes only when verified.

- Selected flow: Knitted textile offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed offcuts by batch and documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `wiedemann-wool-garment-2020`

###### Waste polyester sewing thread (`assembly_thread_scrap`)

Record thread ends and unrecoverable sewing-thread waste separately from fabric offcuts.

- Selected flow: Waste polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed thread waste by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `ec-pef-method-2021-2279`

###### Rejected garment component (`assembly_reject`)

Record assembled components rejected without in-batch rework and retain the documented destination.

- Selected flow: Rejected garment component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected components by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_batch`
- Sources: `ec-pef-method-2021-2279`

##### Elementary flows

### Process: Finishing, inspection and quality testing (`p_finishing_quality`)

#### Inputs

##### Product flows

###### Assembled garment for finishing (`finish_assembled_garment`)

Record the assembled garment entering final conditioning, inspection and quality testing.

- Selected flow: Assembled knitted garment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated input mass by finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `wiedemann-wool-garment-2020`

###### Finishing electricity (`finish_electricity`)

Record electricity for pressing, inspection, testing, conditioning and directly attributable space conditioning.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered batch electricity or documented equipment-time and conditioned-area allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `ec-pef-method-2021-2279`

###### Finishing steam (`finish_steam`)

Record purchased steam used for pressing or conditioning separately from hot water.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg or energy / MJ, matching the meter or invoice
- Amount rule: Metered or invoiced steam attributable to the finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `eu-textiles-bref-2023`

###### Finishing hot water (`finish_hot_water`)

Record purchased hot water used in conditioning or spot treatment separately from steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg and thermal energy / MJ where metered
- Amount rule: Metered hot-water input attributable to the finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `eu-textiles-bref-2023`

###### Spot-cleaning detergent formulation (`finish_spot_cleaner`)

This card represents one supplier spot-cleaning formulation identified by trade name and SDS.

- Selected flow: Nonionic garment spot-cleaning detergent formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground product issue attributable to the finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `eu-textiles-bref-2023`

###### Refrigerant R-410A make-up (`finish_refrigerant_r410a`)

Record R-410A charged to equipment serving the finishing area when attributable leakage or make-up occurs.

- Selected flow: Refrigerant R-410A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Service-record make-up mass allocated to the reporting period and finishing area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `ec-pef-method-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished garment before packaging (`finished_garment`)

Record dry, saleable garments passing declared workmanship and quality checks before removable packaging.

- Selected flow: Finished knitted garment before packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated net mass of accepted garments at the declared conditioning state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `iso-6330-2021`; `iso-5077-2007`; `iso-12945-2-2020`

##### Waste flows

###### Rejected finished garment (`finish_reject`)

Record finished garments that fail inspection or testing and are not reworked within the batch.

- Selected flow: Rejected finished knitted garment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected garment mass by failure mode and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `iso-5077-2007`; `iso-12945-2-2020`

###### Garment finishing wastewater (`finish_wastewater`)

Record wastewater from spot treatment or final washing separately from wet-processing wastewater.

- Selected flow: Garment finishing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or mass-balanced wastewater attributable to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

###### Refrigerant R-410A to air (`finish_r410a_air`)

Record R-410A leakage from equipment serving finishing as an elementary emission, separate from refrigerant make-up input.

- Selected flow: Refrigerant R-410A to air
- Flow property / unit: Mass / kg
- Amount rule: Measured leak or mass balance from service records for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `ec-pef-method-2021-2279`

### Process: Packaging and factory-gate release (`p_packaging`)

#### Inputs

##### Product flows

###### Finished garment entering packaging (`pack_finished_garment`)

Record accepted net garments transferred into packaging.

- Selected flow: Finished knitted garment before packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated transferred net garment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `ec-pef-method-2021-2279`

###### Low-density polyethylene garment bag (`pack_ldpe_bag`)

Record single-garment or multi-garment LDPE bags used in the packaging batch.

- Selected flow: Low-density polyethylene garment bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count issued multiplied by measured bag mass, reconciled to remaining stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `ec-pef-method-2021-2279`

###### Corrugated paperboard shipping carton (`pack_carton`)

Record corrugated paperboard cartons used to ship the batch.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count used multiplied by measured carton mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `ec-pef-method-2021-2279`

###### Paper hangtag (`pack_hangtag`)

Record removable paper hangtags attached during packaging.

- Selected flow: Paper hangtag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count attached multiplied by measured hangtag mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `ec-pef-method-2021-2279`

###### Polypropylene strapping (`pack_pp_strap`)

Record polypropylene strapping used to unitise cartons or pallets.

- Selected flow: Polypropylene strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured issued length multiplied by measured linear mass or directly weighed consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `ec-pef-method-2021-2279`

###### Wooden pallet (`pack_wood_pallet`)

Record wooden pallets consumed or attributed to the shipment when not modelled as reusable capital packaging.

- Selected flow: Wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Pallet count multiplied by measured mass and allocated by documented reuse cycles when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `ec-pef-method-2021-2279`

###### Packaging electricity (`pack_electricity`)

Record electricity used by folding, bagging, sealing, labelling and unitising equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `ec-pef-method-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference finished garment (`reference_garment`)

This is the verified reference product flow. Its quantity is net garment mass; removable packaging is reported only in the separate packaging input rows.

- Selected flow: Jerseys, pullovers, cardigans, waistcoats and similar articles, knitted or crocheted `eccda6b6-0639-4a61-8af1-4bea892ac61c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg calibrated net finished garment output at factory gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-28226`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | separable products, batches and processes | First avoid allocation by separate batch records, sub-metering, equipment-time records and mass balances. | `ec-pef-method-2021-2279` |
| `allocation_shared_manufacturing` | shared knitting, wet-processing, assembly, finishing and packaging resources | If subdivision is not feasible, use the closest measured physical driver: machine time for equipment electricity, metered mass or energy for steam and hot water, recipe and batch mass for chemicals and water, and occupied conditioned area plus time for shared HVAC. Document the driver and calculation. | `ec-pef-method-2021-2279`; `eu-textiles-bat-2022-2508` |
| `allocation_rework` | in-batch rework | Keep all rework inputs, utilities and losses in the producing batch; do not count the reworked item as a co-product or a second reference output. | `ec-pef-method-2021-2279` |
| `allocation_scrap` | yarn scrap, textile offcuts, rejects and sludge | Report each material leaving the foreground boundary as its own waste flow with mass, composition and destination. Do not apply an avoided-burden credit inside this foreground package; downstream recycling or recovery is handled in the lifecycle model under its declared allocation method. | `ec-apparel-footwear-pefcr-2025`; `wiedemann-recycled-wool-sweater-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_knitting_batch` | `p_knitting` | yarns, oil, electricity, accepted workpiece and knitting wastes | batch issue, meter, production and waste records | batch_id; style; size mix; yarn SKU; fibre composition; issued mass; returned mass; oil issue; meter start/end; machine time; accepted mass; yarn scrap mass; rejected mass; moisture state | Calibrated scales, stock ledger, sub-meter or documented equipment-time allocation, and batch reconciliation | kg; kWh; h | Every batch | Representative production period, normally at least 12 consecutive months or all batches for a shorter campaign | All knitting or crocheting lines producing the declared product | Sum by atomic flow and divide by accepted net garment mass linked through the batch genealogy | Calibration certificates; yarn invoices; batch tickets; meter records; waste tickets; reconciliation sign-off |
| `cp_wet_batch` | `p_wet_processing` | water, utilities, each chemical, workpiece, wastewater and sludge | batch recipe, stock issue, meter, laboratory and treatment records | batch_id; input/output mass and moisture; water meter; electricity; steam; hot water; natural gas; diesel; chemical trade name; SDS; active concentration; issued mass; wastewater volume; sludge wet mass; sludge dry matter | Batch-level meters and recipe/stock reconciliation; retain original units and conversion factors | kg; m3; kWh; MJ; L | Every wet-processing batch | Representative production period covering seasonal and recipe variation | All controlled wet-processing and treatment units | Sum each atomic exchange by batch; normalize to accepted wet-processed workpiece and then to reference garment mass | Meter calibration; recipe approval; SDS; stock ledger; laboratory results; wastewater and sludge records |
| `cp_wet_emissions` | `p_wet_processing` | direct combustion and drying emissions | stack measurement, permit report or activity-and-factor calculation | source_id; batch linkage; fuel amount; fuel composition; factor source; monitoring period; pollutant mass; abatement status | Direct measurement preferred; otherwise calculate from foreground activity with a disclosed source-specific factor | kg pollutant | Per monitoring event and reporting period | Same period as foreground production | All on-site emission sources serving the included process | Attribute by measured fuel or heat demand; aggregate each pollutant separately | Monitoring report; instrument QA; fuel certificate; factor reference; calculation workbook |
| `cp_assembly_batch` | `p_assembly` | workpiece, thread, closures, labels, electricity, accepted garment and wastes | batch issue, count, weighing, meter and rejection records | batch_id; workpiece mass; component SKU/count/unit mass; electricity; accepted mass; offcut mass; thread waste mass; reject mass; destination | Calibrated scales, component issue reconciliation, sub-meter or equipment-time allocation | kg; count; kWh | Every assembly batch | Representative production period | All linking, cutting and sewing lines | Sum each atomic exchange and normalize to accepted assembled garment mass | Scale and meter calibration; component invoices; batch tickets; waste and reject records |
| `cp_finishing_batch` | `p_finishing_quality` | electricity, steam, hot water, cleaning formulation, refrigerant, accepted and rejected garments, wastewater | finishing batch, meter, quality, service and waste records | batch_id; input/output mass; electricity; steam; hot water; cleaner trade name and mass; refrigerant charge and make-up; reject mass and failure mode; wastewater; pilling and dimensional-change method/result | Calibrated meters and scales, chemical issue, equipment service log and controlled laboratory test | kg; kWh; MJ; test result | Every batch; refrigerant at each service event | Representative production period | All finishing, inspection, conditioning and test areas serving the product | Sum by atomic exchange; allocate shared conditioning by area and time only when sub-metering is unavailable | Calibration; service log; test report; method version; inspector sign-off; wastewater record |
| `cp_packaging_batch` | `p_packaging` | net garment, each packaging component, packaging electricity and reference output | packaging issue, count, weighing, meter and dispatch records | batch_id; garment count and net mass; packaging SKU; component count; unit mass; pallet reuse cycles; electricity; dispatch quantity | Calibrated scales, component issue reconciliation and sub-meter or equipment-time allocation | kg; count; kWh | Every packaging batch | Representative production period | All packaging lines and dispatch areas serving the product | Report each packaging material separately per kg net garment; exclude packaging mass from reference output | Scale calibration; packaging specification; purchase and issue records; dispatch record; pallet reuse log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | reference product | Sum calibrated net mass of accepted garments before removable packaging; include permanent labels, closures and trims. | accepted item mass or batch mass; tare; conditioning state | kg net finished garment | `ec-pef-method-2021-2279` |
| `calc_item_mass` | count-based component or garment records | Multiply count by measured mean unit mass for the same SKU, style and size; retain sample count and variation. | count; measured unit masses | kg component or garment | `ec-pef-method-2021-2279` |
| `calc_batch_normalization` | all inventory rows | Divide the atomic batch exchange by the linked accepted net finished garment mass; preserve the unnormalised batch record. | atomic exchange amount; batch genealogy; accepted net garment mass | exchange per 1 kg reference product | `ec-pef-method-2021-2279` |
| `calc_mass_balance` | knitting, wet processing, assembly and finishing | Reconcile input mass with accepted output, returned material, work in progress, measured waste, wastewater-borne material where quantified, and stock change; investigate rather than silently allocate unexplained loss. | input/output/waste/return/stock-change masses and moisture states | process mass-balance discrepancy | `eu-textiles-bat-2022-2508`; `ec-pef-method-2021-2279` |
| `calc_shared_resource` | shared meters | Allocate only after documenting why subdivision is unavailable, using the physical driver specified in section 7. | shared meter amount; machine time, batch mass, heat demand or area-time driver | allocated atomic utility amount | `ec-pef-method-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and all batch links | Match CPC 28226 semantic scope and declare product subtype, fibre composition, technology, coloration route, size range and permanent components. | Product specification, bill of materials, style sheet, batch genealogy and reference-flow identity |
| `dq_company_specific` | foreground manufacturing | Use company-specific data for the product bill of materials and controlled manufacturing processes; include all known inputs and outputs. | Batch records, invoices, meters, stock changes, waste records and direct-emission records; `ec-pef-method-2021-2279` |
| `dq_temporal` | all foreground rows | Use one coherent reporting period and disclose gaps, shutdowns, abnormal batches and seasonal recipe or HVAC variation. | Production calendar, meter coverage and batch population summary |
| `dq_measurement` | measured mass and utilities | Identify instrument, calibration status, original unit, conversion factor, sampling method and uncertainty or data limitation. | Calibration certificates, meter exports, weighing sheets and conversion workbook |
| `dq_chemical_identity` | every chemical row | Identify one supplier formulation per row with trade name, supplier, SDS revision, active concentration where applicable and issued formulated-product mass. | SDS, purchase specification, recipe and stock issue record; `eu-textiles-bat-2022-2508` |
| `dq_performance` | declared quality level | Retain the selected washing/drying procedure, dimensional-change method and pilling method with acceptance criteria and result; do not infer durability from fibre type alone. | ISO 6330:2021 procedure record, ISO 5077:2007 result and ISO 12945-2:2020 result or justified equivalent |
| `dq_completeness` | inventory and exclusions | Report missing UUIDs, missing activity data, proxy datasets, outsourced stages, excluded life-cycle stages and unresolved mass-balance discrepancies explicitly. | Data-gap register, supplier dataset register, validation report and manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm the product flow UUID, Product flow type, exact product name, CPC path 2 > 28 > 282 > 2822 > 28226, Mass property UUID, Units of mass UUID and kg reference unit. | `unsd-cpc-3-28226` |
| `validate_reference_mass` | reference quantity | Reference output equals 1 kg calibrated net garment mass and excludes removable distribution packaging. | `ec-pef-method-2021-2279` |
| `validate_required_qualifiers` | dataset metadata | Every required qualifier in section 3 is present and consistent with the bill of materials, process route and quality records. | `ec-apparel-footwear-pefcr-2025`; `iso-6330-2021`; `iso-5077-2007`; `iso-12945-2-2020` |
| `validate_atomic_inventory` | all process inventory rows | Each row represents one product, waste or elementary exchange; reject combined utilities, combined chemicals, combined packaging, combined wastes and selector labels. | `ec-pef-method-2021-2279` |
| `validate_foreground_evidence` | every amount | Each amount links to a collection protocol and a real foreground record or disclosed calculation; absence of a reliable quantity must remain an unresolved foreground requirement, not an AI-created range. | `ec-pef-method-2021-2279` |
| `validate_wet_processing` | conditional wet-processing process | If wet processing occurs, verify separate records for water, electricity, each heat carrier or fuel, every chemical formulation, wastewater, sludge and applicable direct emissions; if it does not occur, verify the upstream supplier dataset and exclusion statement. | `eu-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `validate_mass_balance` | knitting, wet processing, assembly and finishing | Investigate and disclose mass-balance discrepancies after harmonising moisture states; do not close a discrepancy by creating an unmeasured waste or emission. | `eu-textiles-bat-2022-2508`; `ec-pef-method-2021-2279` |
| `validate_allocation` | shared processes and rework | Confirm subdivision was attempted first and every remaining allocation uses the declared physical driver; rework stays in its originating batch and waste receives no foreground avoided-burden credit. | `ec-pef-method-2021-2279`; `wiedemann-recycled-wool-sweater-2022` |
| `validate_uuid_status` | UUID-bearing and unresolved rows | Accept only UUIDs confirmed by both exact hybrid retrieval and state-100 direct read; all other candidate flow UUIDs remain absent and are tracked by `row_id` in manifest review metadata. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific gate-to-gate foreground manufacturing dataset |
| downstream_use | `secondary_dataset`; `background_dataset` when independently reviewed and matched to the user's geography, technology, time and product specification |
| allowed_use | Foreground apparel production packages; supplier-specific manufacturing inventories; lifecycle models that explicitly link upstream yarns and downstream distribution, use and end-of-life stages |
| excluded_use | Direct comparison or environmental claim without a complete compatible lifecycle model; substitution for T-shirts, woven garments or other excluded products; use as an average yarn-production or consumer-use dataset |
| required_metadata | PCR id and version; product subtype; CPC reference; verified reference-flow identity; bill of materials; fibre and recycled-content evidence; technology and gauge; coloration and wet-processing route; facility and countries; reporting period; net mass method; allocation; packaging; test methods and results; source and UUID gaps |
| required_quality_disclosure | Company-specific data coverage; meter and scale calibration; batch population and representativeness; supplier dataset coverage; proxy datasets; mass-balance discrepancies; waste destinations; chemical SDS coverage; direct-emission method; unresolved UUIDs and quantities |
| update_trigger | Change in product specification, fibre or accessory composition, knitting technology, wet-processing recipe or site, energy system, allocation driver, packaging system, reference-flow identity, applicable law or BAT, quality method, or a material data-quality review finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-28226` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 and subclass 28226 structure, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-13) | Product scope, classification hierarchy and reference-flow identity validation |
| `ec-apparel-footwear-pefcr-2025` | official_guidance | Technical Secretariat for Apparel and Footwear, Product Environmental Footprint Category Rules for Apparel and Footwear, version 3.1, 29 April 2025, https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/; recognised by the European Commission at https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en (retrieved 2026-08-13) | Apparel lifecycle framing, material-neutral product qualification, bill-of-material and quality disclosures |
| `ec-pef-method-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279R(01) (retrieved 2026-08-13) | Company-specific inventory, complete inputs and outputs, boundary, allocation, data quality and validation |
| `eu-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry (retrieved 2026-08-13) | Wet-processing decomposition, fibre coverage, pretreatment, dyeing and finishing inclusion |
| `eu-textiles-bat-2022-2508` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2508 (retrieved 2026-08-13) | Input/output inventory, water and energy monitoring, chemical records, wastewater, emissions and process control |
| `iso-14040-2006` | standard | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework, https://www.iso.org/standard/37456.html (retrieved 2026-08-13) | Goal and scope, inventory and lifecycle-model separation |
| `iso-6330-2021` | standard | ISO 6330:2021, Textiles — Domestic washing and drying procedures for textile testing, https://www.iso.org/standard/75934.html (retrieved 2026-08-13) | Declared washing and drying procedure for performance testing |
| `iso-5077-2007` | standard | ISO 5077:2007, Textiles — Determination of dimensional change in washing and drying, https://www.iso.org/standard/41877.html (retrieved 2026-08-13) | Dimensional-stability test disclosure |
| `iso-12945-2-2020` | standard | ISO 12945-2:2020, Textiles — Determination of fabric propensity to surface pilling, fuzzing or matting — Part 2: Modified Martindale method, https://www.iso.org/standard/75375.html (retrieved 2026-08-13) | Pilling-performance test disclosure |
| `wiedemann-wool-garment-2020` | literature | Wiedemann et al., Environmental impacts associated with the production, use, and end-of-life of a woollen garment, International Journal of Life Cycle Assessment 25 (2020), https://doi.org/10.1007/s11367-020-01766-0 | Sweater process decomposition including spinning, dyeing, knitting, finishing and garment make-up |
| `wiedemann-waste-wool-sweater-2021` | literature | Environmental and social performance of valorizing waste wool for sweater production, Sustainable Production and Consumption 25 (2021), https://doi.org/10.1016/j.spc.2020.11.023 | Foreground processing and garment-assembly energy relevance |
| `wiedemann-recycled-wool-sweater-2022` | literature | Wiedemann et al., Reducing the Environmental Impacts of Garments through Industrially Scalable Closed-Loop Recycling, Sustainability 14 (2022) 1081, https://doi.org/10.3390/su14031081 | Separate recycling, knitting, finishing and garment make-up stages and scrap disposition |
| `bartl-alpaca-sweater-2023` | literature | Bartl et al., Cradle-to-grave environmental analysis of an alpaca fiber sweater produced in Peru, Science of the Total Environment 905 (2023) 167023, https://doi.org/10.1016/j.scitotenv.2023.167023 | Primary-data collection by interviews and questionnaires for spinning, dyeing, knitting and garment production stages |
