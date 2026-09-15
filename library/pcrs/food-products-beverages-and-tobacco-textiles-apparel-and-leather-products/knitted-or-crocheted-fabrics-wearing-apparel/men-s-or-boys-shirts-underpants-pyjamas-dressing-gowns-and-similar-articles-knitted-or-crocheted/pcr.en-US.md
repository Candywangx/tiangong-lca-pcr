---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-underpants-pyjamas-dressing-gowns-and-similar-articles-knitted-or-crocheted
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Men's or boys' shirts, underpants, pyjamas, dressing gowns and similar articles, knitted or crocheted

## 1. Scope and Applicability

This PCR supports foreground data production for saleable men's or boys' knitted or crocheted shirts, underpants, pyjamas, dressing gowns, and products with the same CPC 28222 function and construction. The product specification shall identify the garment subtype, knitted or crocheted construction, fibre composition, size basis, net mass, colour, finish, and manufacturing route.

The foreground boundary starts with knitted or crocheted fabric and separately identified components delivered to garment manufacture. It includes cutting, sewing and assembly, conditional garment wet finishing, final inspection, packaging, and the wastes and wastewater produced by those operations. Fibre, yarn, fabric production, fabric-stage wet processing, purchased utilities, packaging production, and off-site treatment remain linked upstream processes unless they are operated inside the declared foreground system.

Woven garments, T-shirts and singlets classified outside CPC 28222, sweaters, hosiery, babies' garments, track suits, swimwear, leather or fur apparel, distribution, retail, consumer care, and end-of-life are outside this foreground dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-underpants-pyjamas-dressing-gowns-and-similar-articles-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28222, exact classification context |
| covered_products | Men's or boys' shirts, underpants, pyjamas, dressing gowns, and similar articles that are knitted or crocheted |
| excluded_products | Woven apparel; T-shirts and singlets; suits, coats, jackets, trousers and shorts; sweaters; hosiery; babies' garments; track suits and swimwear; fur, leather, plastics-only, or non-textile apparel |
| representative_product | A saleable CPC 28222 garment with declared subtype, fibre composition, knit or crochet construction, size, net mass, colour, finish, and closure configuration |
| production_route | Delivered fabric and components -> cutting -> sewing and assembly -> conditional garment wet finishing -> inspection and packaging |
| market_state | Saleable finished garment at the manufacturing gate; reference-product mass excludes packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A conforming saleable men's or boys' shirt, underpant, pyjama, dressing gown, or similar CPC 28222 garment, knitted or crocheted |
| How much | 1 kg net finished garment, excluding packaging |
| How well | Meets the declared product and acceptance specification, including composition, construction, size, colour, finish, closures, and moisture condition |
| How long or cycle | One declared production batch or reporting period; garment lifetime and care cycles are downstream scenario qualifiers |
| reference_flow_link | Gate-level mass reference for foreground inventory; item-based or use-based results require measured item mass and separately documented use and lifetime assumptions |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished garment |
| Reference product flow | Men's or boys' shirts, underpants, pyjamas, dressing gowns and similar articles, knitted or crocheted `833dd94b-bf2a-4273-99a9-e6bb3c59dedc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment subtype; intended wearer category; fibre composition by mass; knit or crochet construction; size or production-weighted size mix; measured net item mass; colour; finishing route; closures and elastic components; moisture condition; manufacturing site and geography; reporting period; included and outsourced operations; packaging exclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted garment mass after final conditioning and before packaging; normalize the inventory to exactly 1 kg. |
| `packaging_separation` | Primary and distribution packaging | Mass | kg | Measure each packaging material separately and exclude it from net reference-product mass. |
| `item_mass_conversion` | Count-based production records | Mass | kg | Convert counts using measured net mass for the same garment subtype and size stratum in the reporting period; retain the weighing record. |
| `chemical_active_mass` | Supplied wet-finishing solutions | Mass | kg active substance | Preserve supplied solution mass and concentration; calculate active mass only from recorded concentration. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Knitted or crocheted body fabric, sewing thread, and separately identified garment components delivered to the first included garment-manufacturing operation |
| starting_condition_role | Upstream product inputs carrying representative production burdens |
| product_classification_scope | The reference output is exact CPC 28222; materials, utilities, packaging, transport, and treatment services retain their own identities |
| recursive_input_rule | A purchased finished CPC 28222 garment is recorded once as a reused or reworked product input with its existing upstream dataset; its history is not recursively rebuilt inside this foreground package |
| upstream_dataset_requirement | Link body fabric, sewing thread, elastic, buttons, slide fasteners, labels, utilities, packaging, transport, and off-site treatment to representative upstream datasets |
| disclosure | Declare operator control, included and outsourced operations, technology, geography, reporting period, wet-finishing applicability, treatment routes, and every missing or proxy upstream link |

### Normative Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | Garment manufacture | Include cutting, sewing and assembly, inspection, packaging, and the associated foreground wastes. | `epd-international-pcr-2024-03-apparel` |
| `boundary_rule_2` | Garment wet finishing | Include water, energy, each used process chemical, wastewater, and applicable treatment when washing, bleaching, dyeing, printing, coating, or comparable finishing occurs under foreground control. | `epd-international-pcr-2024-03-apparel`; `eu-textiles-bat-2022` |
| `boundary_rule_3` | Purchased inputs and services | Do not treat fabric, components, utilities, packaging, transport, or off-site treatment as burden-free; connect representative upstream datasets or disclose the gap. | `eu-pef-2021` |
| `boundary_rule_4` | Downstream stages | Keep distribution, retail, consumer care, reuse, and end-of-life outside this gate-level foreground package and identify them as separate lifecyclemodel stages. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `garment_cutting` | Fabric spreading and garment cutting | `required` | Always included | Convert body fabric into accepted garment components | kg accepted cut components |
| `garment_assembly` | Sewing and garment assembly | `required` | Always included | Join cut components and declared closures, elastic, and labels | kg accepted assembled garment |
| `garment_wet_finishing` | Garment wet finishing | `conditional` | Include only when a wet-finishing operation is performed under foreground control | Produce the declared washed, bleached, dyed, or chemically finished state | kg accepted wet-finished garment |
| `quality_packaging` | Final inspection and packaging | `required` | Always included | Verify, pack, and release the reference garment | 1 kg net accepted finished garment |

### Process: Fabric spreading and garment cutting (`garment_cutting`)

#### Inputs

##### Product flows

###### Knitted or crocheted body fabric (`knitted_body_fabric`)

Body fabric crosses the cutting boundary as one recorded material exchange for the declared construction and composition.

- Selected flow: Garment body fabric
- Flow property / unit: Mass / kg
- Amount rule: measured fabric mass issued to the cutting order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut garment components
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Cutting electricity (`cutting_electricity`)

Electricity crosses the boundary through spreading, cutting, extraction, and directly attributable controls.

- Selected flow: Electricity supplied to spreading and cutting equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity consumption for the cutting order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted cut garment components
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cut garment components (`cut_garment_components`)

Accepted panels and parts leave cutting as one internal foreground product exchange.

- Selected flow: Cut garment panel
- Flow property / unit: Mass / kg
- Amount rule: measured accepted component mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut garment components
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Waste flows

###### Cutting fabric waste (`cutting_fabric_waste`)

Off-cuts and rejected panels leave cutting as one measured waste exchange, with composition and destination retained.

- Selected flow: Body-fabric cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: measured cutting-waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cut garment components
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Elementary flows

### Process: Sewing and garment assembly (`garment_assembly`)

#### Inputs

##### Product flows

###### Cut garment components entering assembly (`assembly_cut_components`)

Accepted cut components cross into sewing as one internal product exchange.

- Selected flow: Cut garment panel
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Sewing thread (`sewing_thread`)

Sewing thread is recorded independently from fabric, elastic, fasteners, and labels.

- Selected flow: Sewing thread for garment assembly
- Flow property / unit: Mass / kg
- Amount rule: measured thread mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Elastic tape (`elastic_tape`)

Elastic tape crosses the assembly boundary only for garments whose bill of materials includes it.

- Selected flow: Garment elastic tape
- Flow property / unit: Mass / kg
- Amount rule: measured elastic-tape mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Garment buttons (`garment_buttons`)

Buttons are recorded as a separate closure exchange when present.

- Selected flow: Garment closure button
- Flow property / unit: Mass / kg
- Amount rule: measured button mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Slide fastener (`slide_fastener`)

The slide fastener is recorded independently from buttons and elastic when the declared garment uses it.

- Selected flow: Slide fastener for garment closure
- Flow property / unit: Mass / kg
- Amount rule: measured slide-fastener mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Care and identity label (`care_label`)

The textile label is recorded as its own product exchange and retains substrate and printing information.

- Selected flow: Textile care and identity label
- Flow property / unit: Mass / kg
- Amount rule: measured label mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Assembly electricity (`assembly_electricity`)

Electricity supplied to sewing, joining, pressing, and directly attributable extraction crosses this process boundary.

- Selected flow: Electricity supplied to sewing and garment-assembly equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity consumption for the assembly order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted assembled garment (`assembled_garment`)

The assembled CPC 28222 garment leaves sewing after the declared in-process acceptance check.

- Selected flow: Assembled CPC 28222 garment
- Flow property / unit: Mass / kg
- Amount rule: measured accepted assembled-garment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `un-cpc-3-0`

##### Waste flows

###### Sewing thread waste (`sewing_thread_waste`)

Thread ends and unused thread leave assembly as one separately weighed waste exchange.

- Selected flow: Waste sewing thread from garment assembly
- Flow property / unit: Mass / kg
- Amount rule: measured waste-thread mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Rejected assembled garment (`rejected_assembled_garment`)

Assembly rejects that leave the process are measured separately from thread waste and cutting waste.

- Selected flow: Rejected assembled CPC 28222 garment
- Flow property / unit: Mass / kg
- Amount rule: measured rejected assembled-garment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Elementary flows

### Process: Garment wet finishing (`garment_wet_finishing`)

#### Inputs

##### Product flows

###### Assembled garment entering wet finishing (`wet_finish_garment_input`)

The assembled garment enters this conditional process as one measured internal product exchange.

- Selected flow: Assembled CPC 28222 garment
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `eu-textiles-bat-2022`

###### Wet-finishing water (`wet_finish_water`)

Supplied process water is recorded separately from internally reused water and wastewater.

- Selected flow: Process water for garment wet finishing
- Flow property / unit: Volume / m3
- Amount rule: metered supplied-water volume for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted wet-finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `eu-textiles-bat-2022`

###### Wet-finishing electricity (`wet_finish_electricity`)

Electricity for washing, dosing, pumping, extraction, drying, and controls crosses as one energy exchange.

- Selected flow: Electricity supplied to garment wet-finishing equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity consumption for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted wet-finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `eu-textiles-bat-2022`

###### Purchased wet-finishing steam (`wet_finish_steam`)

Purchased steam is recorded only when it crosses the site boundary and is used by the declared batch.

- Selected flow: Purchased process steam for garment wet finishing
- Flow property / unit: Mass / kg
- Amount rule: metered supplied-steam mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted wet-finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `eu-textiles-bat-2022`

###### Sodium hydroxide (`sodium_hydroxide`)

Sodium hydroxide crosses separately only when it appears in the authorized wet-finishing recipe.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg active substance
- Amount rule: recorded supplied-solution mass and concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `eu-textiles-bat-2022`

###### Hydrogen peroxide (`hydrogen_peroxide`)

Hydrogen peroxide crosses separately only when it appears in the authorized bleaching recipe.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg active substance
- Amount rule: recorded supplied-solution mass and concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted wet-finished garment (`wet_finished_garment`)

The conditioned garment leaves wet finishing as one measured internal product exchange.

- Selected flow: Wet-finished CPC 28222 garment
- Flow property / unit: Mass / kg
- Amount rule: measured accepted batch output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted wet-finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

###### Garment wet-process wastewater (`garment_wet_process_wastewater`)

Wastewater leaving wet finishing is one measured waste exchange with destination and internal reuse disclosed.

- Selected flow: Wastewater from garment wet finishing
- Flow property / unit: Volume / m3
- Amount rule: metered discharge volume for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted wet-finished garment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Final inspection and packaging (`quality_packaging`)

#### Inputs

##### Product flows

###### Garment before final inspection (`garment_before_qc`)

The assembled or wet-finished garment enters final inspection as one measured internal product exchange.

- Selected flow: CPC 28222 garment before final quality control
- Flow property / unit: Mass / kg
- Amount rule: measured garment mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Polyethylene packaging bag (`polyethylene_packaging_bag`)

The primary polyethylene garment bag is weighed separately from paperboard packaging.

- Selected flow: Polyethylene garment packaging bag
- Flow property / unit: Mass / kg
- Amount rule: measured bag mass consumed by accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Corrugated shipping carton (`corrugated_carton`)

The corrugated paperboard carton is recorded as a distinct packaging exchange.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: measured carton mass consumed by accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Inspection and packaging electricity (`quality_packaging_electricity`)

Electricity for inspection, pressing, label verification, sealing, and packing crosses as one energy exchange.

- Selected flow: Electricity supplied to inspection and packaging equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity consumption for accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished CPC 28222 garment (`finished_cpc_28222_garment`)

Net accepted garment mass after final conditioning is the declared reference-product exchange.

- Selected flow: Men's or boys' shirts, underpants, pyjamas, dressing gowns and similar articles, knitted or crocheted `833dd94b-bf2a-4273-99a9-e6bb3c59dedc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net accepted finished-garment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_packaging_records`
- Sources: `un-cpc-3-0`

##### Waste flows

###### Polyethylene packaging scrap (`polyethylene_packaging_scrap`)

Unused and damaged polyethylene film leaves packaging as one separately weighed waste exchange.

- Selected flow: Waste polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured waste-film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Corrugated carton scrap (`corrugated_carton_scrap`)

Damaged carton and paperboard off-cuts leave packaging as one separately weighed waste exchange.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: measured waste-paperboard mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

###### Rejected finished garment (`rejected_finished_garment`)

Garments rejected at final inspection leave as one measured waste exchange with the disposition recorded.

- Selected flow: Rejected finished CPC 28222 garment
- Flow property / unit: Mass / kg
- Amount rule: measured rejected finished-garment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_packaging_records`
- Sources: `epd-international-pcr-2024-03-apparel`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Product-specific materials, utilities, wastes, and emissions | Use direct batch, order, line, or meter assignment before any allocation. | `eu-pef-2021` |
| `allocation_rule_2` | Shared equipment and meters | When subdivision is not possible, use a documented physical driver that represents actual use, such as machine time, metered energy, processed mass, or wet-process liquor volume. | `eu-pef-2021` |
| `allocation_rule_3` | Internal rework | Keep rework inside the foreground balance and count the accepted garment only once. | `eu-pef-2021` |
| `allocation_rule_4` | Exported waste or recovered material | Record measured output and actual destination; do not assign an avoided burden without an explicit downstream method and disclosed allocation. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_records` | `garment_cutting` | body fabric, electricity, cut components, cutting waste | cutting orders, issue slips, meters, scales, waste records | order_id; fabric_spec; issued_mass; meter_start; meter_end; accepted_component_mass; waste_mass; waste_destination | Read calibrated scales and electricity meters for each cutting order. | kg; kWh | Each order, reconciled monthly | Same period as reference production | Every included cutting line | Sum each atomic exchange and normalize to accepted cut-component mass. | Calibration records, order tickets, meter extracts, and waste transfer records |
| `cp_assembly_records` | `garment_assembly` | cut components, thread, elastic, buttons, slide fasteners, labels, electricity, assembled output, assembly waste | bills of materials, issue slips, counters, meters, scales, rejection records | order_id; component_id; component_mass; meter_start; meter_end; accepted_mass; thread_waste_mass; reject_mass; disposition | Record each component separately and reconcile issues to the assembly order. | kg; kWh | Each order, reconciled monthly | Same period as reference production | Every included assembly line | Sum each row without merging materials, then normalize to accepted assembled-garment mass. | Approved bill of materials, issue records, calibration, meter extracts, and rejection records |
| `cp_wet_finishing_records` | `garment_wet_finishing` | garment, water, electricity, steam, sodium hydroxide, hydrogen peroxide, finished garment, wastewater | batch sheets, recipe records, meters, scales, discharge records | batch_id; input_mass; output_mass; water_volume; electricity; steam_mass; chemical_name; solution_mass; active_fraction; wastewater_volume; destination | Use batch-linked meters and authorized recipes; retain each chemical as a separate row. | kg; m3; kWh | Each batch, reconciled monthly | Same period as reference production | Every included wet-finishing line | Sum each atomic exchange and normalize to accepted wet-finished garment mass. | Meter calibration, recipe authorization, dosing logs, laboratory or discharge records |
| `cp_quality_packaging_records` | `quality_packaging` | incoming garment, polyethylene bag, carton, electricity, accepted output, packaging waste, rejects | inspection records, packaging issues, meters, scales, waste records | order_id; incoming_mass; bag_mass; carton_mass; electricity; accepted_mass; film_waste_mass; carton_waste_mass; reject_mass; disposition | Weigh net garments and each packaging material separately after final conditioning. | kg; kWh | Each order, reconciled monthly | Same period as reference production | Every included inspection and packaging line | Sum each atomic exchange and normalize to net accepted finished-garment mass. | Scale and meter calibration, inspection release, packaging issue, and waste records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory exchange | reporting-period exchange amount / reporting-period net accepted reference-garment mass | measured exchange; measured accepted mass | exchange per 1 kg reference product | `eu-pef-2021` |
| `calc_item_mass` | Count-only garment records | accepted item count x measured mean net mass for the same subtype and size stratum | count; sample masses; stratum weights | kg accepted garment | `eu-pef-2021` |
| `calc_active_chemical` | Sodium hydroxide and hydrogen peroxide solutions | supplied solution mass x recorded active fraction | solution mass; active fraction | kg active substance | `eu-textiles-bat-2022` |
| `calc_shared_energy` | Shared electricity or steam meters | allocate the reconciled shared total using the disclosed physical driver after direct meters are removed | meter total; direct use; driver by product | allocated energy by product | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference garment | Retain exact CPC 28222 scope, garment subtype, construction, composition, size basis, item mass, colour, finish, closures, site, and period. | approved specification, bill of materials, production order, and scale record |
| `dq_atomic_inventory` | All foreground exchanges | Retain one record per material, utility, chemical, waste, or product exchange; no collection label or selector may replace an exchange. | row-level issue, meter, recipe, output, and waste records |
| `dq_temporal_scope` | Foreground records | Use one representative and internally consistent period and disclose shutdowns, missing intervals, and exceptional production. | production calendar and coverage reconciliation |
| `dq_measurement` | Mass, water, energy, chemicals, wastewater, and waste | Retain instrument, calibration, unit, frequency, aggregation, and missing-data treatment. | calibration certificate, meter export, scale ticket, recipe, and laboratory record |
| `dq_upstream_fit` | Purchased products and services | Assess composition, technology, geography, time, and boundary fit for every connected upstream dataset. | supplier specification and upstream dataset metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Reference identity | Fail unless the reference row is public Product flow `833dd94b-bf2a-4273-99a9-e6bb3c59dedc`, exact CPC path 2>28>282>2822>28222, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, and kg. | `un-cpc-3-0` |
| `validation_rule_2` | Product scope | Fail for a product outside men's or boys' CPC 28222 knitted or crocheted shirts, underpants, pyjamas, dressing gowns, and similar articles. | `un-cpc-3-0` |
| `validation_rule_3` | Required processes | Fail if cutting, assembly, or final inspection and packaging is absent; require an explicit applicability decision for garment wet finishing. | `epd-international-pcr-2024-03-apparel` |
| `validation_rule_4` | Atomic exchanges | Fail if a card combines materials, utilities, chemicals, packaging, wastes, or emissions, or if its selected flow is a selector instruction. | `eu-pef-2021`; `eu-textiles-bat-2022` |
| `validation_rule_5` | Quantities | Fail if any inventory amount is an AI estimate, unsupported default, or untraceable value instead of a foreground record or calculation from such records. | `eu-pef-2021` |
| `validation_rule_6` | Conditional wet finishing | When wet finishing applies, fail if supplied water, electricity, applicable steam, each used recipe chemical, garment output, or wastewater is missing. | `eu-textiles-bat-2022` |
| `validation_rule_7` | UUID control | Fail publication of any non-reference UUID unless that exact row has passed both hybrid discovery and state-100 deterministic direct read. | |
| `validation_rule_8` | Bilingual alignment | Fail if English and Chinese differ in ordered process_id, row_id, rule_id, source_id, controlled token, or UUID. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for an exact CPC 28222 knitted or crocheted garment |
| downstream_use | `secondary_dataset`; `background_dataset`; source for downstream `process` and `lifecyclemodel` projections |
| allowed_use | Studies matching the declared garment subtype, composition, construction, size basis, manufacturing route, technology, geography, period, and gate-level boundary |
| excluded_use | Woven or other apparel categories; complete cradle-to-grave claims without connected upstream and downstream stages; comparisons lacking functional, lifetime, and care equivalence |
| required_metadata | PCR id and state; CPC 28222; reference UUIDs; garment subtype; composition; construction; size basis; item mass; colour and finish; closure components; site; geography; period; included and outsourced operations; packaging exclusion; upstream links; allocation |
| required_quality_disclosure | record coverage; calibration; mass and utility reconciliation; wet-finishing applicability and recipe completeness; waste and wastewater destinations; upstream representativeness; allocation drivers; uncertainty; missing data; withheld UUIDs |
| update_trigger | Material change in product identity, bill of materials, construction, supplier route, technology, site, energy or water system, wet-finishing recipe, treatment, allocation, boundary, or reporting-period representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, CPC 28222 and hierarchy 2>28>282>2822>28222. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/3/28222 (accessed 2026-08-13). | Exact product identity, included garment types, exclusions, and classification validation |
| `epd-international-pcr-2024-03-apparel` | `standard` | International EPD System, PCR 2024:03, Apparel, except fur and leather apparel, version 1.0.0, registered 2024 and valid through 2028-05-28. https://www.environdec.com/pcr-library/pcr_fe5934d8-029d-4c48-19ea-08db3f138c24 (accessed 2026-08-13). | Apparel product-system scope, upstream/core/downstream separation, garment manufacture, packaging, waste, and data documentation |
| `eu-pef-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (accessed 2026-08-13). | Lifecycle boundary, inventory flows, allocation hierarchy, data quality, verification, and reporting |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj (accessed 2026-08-13). | Conditional textile wet-processing decomposition; process-level water, energy, chemical, wastewater, and monitoring records |
