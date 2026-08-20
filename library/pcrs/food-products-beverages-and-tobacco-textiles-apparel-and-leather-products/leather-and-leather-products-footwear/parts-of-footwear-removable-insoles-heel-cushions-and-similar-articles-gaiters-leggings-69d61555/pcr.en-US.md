---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.parts-of-footwear-removable-insoles-heel-cushions-and-similar-articles-gaiters-leggings-69d61555
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of footwear; removable insoles, heel cushions and similar articles; gaiters, leggings and similar articles, and parts thereof

## 1. Scope and Applicability

This PCR applies to factory-gate production of one explicitly declared CPC 3.0 subclass 29600 product: a footwear component, removable insole, heel cushion or similar article, gaiter, legging or a part of such an article. It covers the route actually used for that declared product, including material preparation, die-cutting or converting, polymer compound forming and moulding, sewing or bonding, finishing, inspection, and packaging when those operations occur.

It does not cover complete footwear, orthopaedic appliances, skating boots, upstream production of purchased leather, textiles, polymers, compounds, boards, chemicals, electricity or packaging, distribution, use, repair, or end-of-life of the sold article. Because CPC 29600 contains materially different products, a foreground package shall represent one named part family, construction, formulation, size or size mix, and manufacturing route; it shall not average unrelated uppers, soles, insoles, heel cushions, gaiters, and leggings into one result.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.parts-of-footwear-removable-insoles-heel-cushions-and-similar-articles-gaiters-leggings-69d61555 |
| classification_refs | CPC 3.0: 29600, exact scope reference |
| covered_products | Footwear uppers and other footwear parts; removable insoles; heel cushions and similar articles; gaiters, leggings and similar articles; and parts thereof, when sold or transferred as finished manufactured products |
| excluded_products | Complete footwear; orthopaedic appliances; skating boots; raw leather, textile, polymer, rubber, foam or board materials not yet made into a declared CPC 29600 article; distribution, use and end-of-life services |
| representative_product | One specified finished manufactured CPC 29600 part family and model, conforming to its declared specification and ready for transfer at factory gate |
| production_route | Product-specific selection of sheet or board preparation and die-cutting; polymer compound forming and moulding; sewing or bonding; finishing; inspection; and packaging |
| market_state | Finished manufactured footwear part or related article at factory gate, with sale packaging separately quantified |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared fit, cushioning, structural, covering, protective, or assembly function of one specified CPC 29600 footwear part or related article |
| How much | 1 kg net mass of the declared conforming finished product at factory gate |
| How well | Meeting the declared part-family, material, construction, size, performance, and quality specification |
| How long or cycle | Declare the intended service-life or use-cycle relationship to the footwear or protective article; no cross-category default lifetime is imposed |
| reference_flow_link | The net mass of the one declared finished product needed to provide its stated function; packaging is outside the 1 kg reference amount and is inventoried separately |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts of footwear, removable insoles, heel cushions and similar articles, gaiters, leggings and similar articles, and parts thereof `13caecd4-f313-436a-8ab4-2abfbab600bb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact product family and model; intended function; CPC 29600 scope justification; material and formulation; construction and manufacturing route; size or production-weighted size mix; performance specification; net mass; bill of materials by mass; incorporated recycled content; packaging configuration; factory geography; reporting period; included sites and subcontractors |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | declared finished product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure conforming finished product without sale or transport packaging and normalize foreground exchanges to exactly 1 kg net product. |
| `item_to_mass` | records kept by item or pair | Mass | kg | Convert counts using measured mass for the same model and size or the documented production-weighted size mix; retain count, weighing records, sample coverage, and conversion. |
| `bom_mass_balance` | materials, intermediates, products and wastes | Mass | kg | Reconcile accepted input, returned material, incorporated mass, process loss, reject mass, and conforming output for each process and reporting period. |
| `electricity_measurement` | electrically driven processes | Energy | kWh | Use submetered consumption or documented equipment power multiplied by operating time and load factor; identify the site electricity supply and do not combine electricity with heat or fuel. |
| `packaging_separation` | sale packaging | Mass | kg | Measure corrugated paperboard and LDPE packaging as separate inputs outside net product mass; count-to-mass conversions require component-specific measured mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted purchased materials or semi-finished components at the first factory or subcontractor gate included in the declared product route |
| starting_condition_role | Foreground manufacturing start; upstream production is represented by traceable product datasets |
| product_classification_scope | One explicitly declared finished CPC 29600 part family and model, not a pooled average of dissimilar part families |
| recursive_input_rule | A purchased product already within CPC 29600 is recorded once as an upstream product input with its own dataset and is not recursively decomposed inside the foreground package. |
| upstream_dataset_requirement | Use traceable upstream datasets for each purchased leather, textile, foam, polymer compound, board, thread, adhesive, release agent, electricity, and packaging input; disclose proxies and missing datasets. |
| disclosure | Declare the exact product, route, sites and subcontractors, bill of materials, loss and reject routes, electricity supply, packaging, allocation, geography, reporting period, data gaps, and any excluded operation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground system | Include every process in the actual product route from accepted purchased input through conforming packaged product at factory gate, including subcontracted component manufacturing. | `af-pefcr-3-1-2025`; `eu-pef-method-2021` |
| `boundary_route_specific` | CPC 29600 product diversity | Include only the route applicable to the declared product, but cover the complete preparation and manufacturing chain for that route; do not substitute an unrelated footwear-part route. | `af-pefcr-3-1-2025` |
| `boundary_upstream_products` | purchased inputs | Keep product-specific purchase quantities in foreground data and represent their production with upstream datasets rather than recreating upstream manufacture inside this boundary. | `eu-pef-method-2021`; `af-pefcr-3-1-2025` |
| `boundary_classification` | product identity | Require the finished output to remain within CPC 29600 and exclude complete footwear and raw materials. | `un-cpc-3-2025` |

## 6. Process Inventory Structure

The following cards are atomic route exemplars supported by the target evidence. A dataset shall instantiate the cards applicable to its declared route and add every other actual BOM material, carrier, packaging component, waste stream, and direct emission as its own equally specific exchange. An absent route is marked not applicable with evidence; it is not represented by a zero-valued aggregate placeholder.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sheet_part_converting` | Sheet, board, leather or textile preparation and die-cutting | `conditional` | Required for products converted from sheet, board, leather or textile stock | Foreground component manufacturing | kg accepted cut part per batch |
| `eva_part_moulding` | EVA compound forming and injection moulding | `conditional` | Required for moulded EVA soles, insoles, heel cushions or similar parts | Foreground polymer component manufacturing | kg conforming moulded EVA part per batch |
| `sewn_part_assembly` | Sewing and bonding of upper, gaiter or legging parts | `conditional` | Required for sewn or bonded multi-piece products | Foreground component consolidation | kg conforming assembled article per batch |
| `finishing_packaging` | Finishing, inspection and packaging | `required` | Always included for the declared finished product | Foreground completion | 1 kg conforming net finished product |

### Process: Sheet, board, leather or textile preparation and die-cutting (`sheet_part_converting`)

#### Inputs

##### Product flows

###### Expanded EVA foam sheet (`eva_foam_sheet`)

Record the exact EVA sheet grade only when it is converted into the declared insole, heel cushion, sole layer or similar part.

- Selected flow: Expanded ethylene-vinyl acetate foam sheet
- Flow property / unit: Mass / kg
- Amount rule: Accepted sheet mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut EVA part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `af-pefcr-3-1-2025`

###### Finished bovine upper leather (`bovine_upper_leather`)

Record finished bovine leather separately when cutting a declared footwear upper or another leather footwear part.

- Selected flow: Finished bovine upper leather
- Flow property / unit: Mass / kg
- Amount rule: Accepted leather mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut leather part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `rossi-leather-shoe-lca-2021`; `footwear-manufacturing-4-0-2021`

###### Polyester woven fabric (`polyester_woven_fabric`)

Record the declared woven polyester construction separately when it is cut for a gaiter, legging or footwear upper.

- Selected flow: Polyester woven fabric, declared construction
- Flow property / unit: Mass / kg
- Amount rule: Accepted fabric mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut polyester part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `af-pefcr-3-1-2025`

###### Cellulose insole board (`cellulose_insole_board`)

Record cellulose board separately when it becomes the structural layer of the declared insole, heel cushion or other part.

- Selected flow: Cellulose insole board
- Flow property / unit: Mass / kg
- Amount rule: Accepted board mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cut cellulose-board part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `rossi-leather-shoe-lca-2021`

###### Electricity for die-cutting (`electricity_die_cutting`)

Record electricity for cutting, splitting, skiving, punching, extraction, conveyors and associated preparation equipment in this process.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or equipment power multiplied by operating time and documented load factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cut part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `af-pefcr-3-1-2025`; `footwear-manufacturing-4-0-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Die-cut EVA removable-insole blank (`die_cut_eva_insole_blank`)

This product output crosses the converting-process boundary after cutting; determine its quantity from the measured mass of conforming EVA blanks.

- Selected flow: Die-cut EVA removable-insole blank
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted blank mass transferred to finishing or further assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per converting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `af-pefcr-3-1-2025`

###### Cut bovine-leather footwear upper panel (`cut_leather_upper_panel`)

This product output crosses the converting-process boundary after cutting; determine its quantity from the measured mass of conforming bovine-leather panels.

- Selected flow: Cut bovine-leather footwear upper panel
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted panel mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per converting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `footwear-manufacturing-4-0-2021`

###### Cut polyester gaiter panel (`cut_polyester_gaiter_panel`)

This product output crosses the converting-process boundary after cutting; determine its quantity from the measured mass of conforming polyester panels.

- Selected flow: Cut polyester gaiter panel
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted panel mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per converting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `af-pefcr-3-1-2025`

###### Cut cellulose heel-cushion blank (`cut_cellulose_heel_cushion_blank`)

This product output crosses the converting-process boundary after cutting; determine its quantity from the measured mass of conforming cellulose blanks.

- Selected flow: Cut cellulose heel-cushion blank
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted blank mass transferred to finishing or further assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per converting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `rossi-leather-shoe-lca-2021`

##### Waste flows

###### EVA foam cutting offcuts (`eva_cutting_offcuts`)

This waste crosses the converting-process boundary as separately identified EVA cutting scrap; weigh it by the declared recovery or treatment route.

- Selected flow: EVA foam cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured offcut mass by declared recycling, recovery or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cut EVA part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `af-pefcr-3-1-2025`

###### Bovine upper-leather cutting offcuts (`leather_cutting_offcuts`)

This waste crosses the converting-process boundary as separately identified bovine-leather cutting scrap; weigh it by the declared recovery or treatment route.

- Selected flow: Bovine upper-leather cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured offcut mass by declared recycling, recovery or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cut leather part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `footwear-manufacturing-4-0-2021`

###### Polyester fabric cutting offcuts (`polyester_cutting_offcuts`)

This waste crosses the converting-process boundary as separately identified polyester cutting scrap; weigh it by the declared recovery or treatment route.

- Selected flow: Polyester fabric cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured offcut mass by declared recycling, recovery or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cut polyester part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `af-pefcr-3-1-2025`

###### Cellulose insole-board cutting offcuts (`cellulose_board_offcuts`)

This waste crosses the converting-process boundary as separately identified cellulose-board cutting scrap; weigh it by the declared recovery or treatment route.

- Selected flow: Cellulose insole-board cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured offcut mass by declared recycling, recovery or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cut cellulose-board part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_part_converting`
- Sources: `af-pefcr-3-1-2025`

##### Elementary flows

### Process: EVA compound forming and injection moulding (`eva_part_moulding`)

#### Inputs

##### Product flows

###### Expandable EVA footwear compound (`expandable_eva_compound`)

This compound crosses the moulding-process boundary as the declared polymer feed; determine its quantity from batch issue and return records reconciled to measured mass.

- Selected flow: Expandable ethylene-vinyl acetate footwear compound
- Flow property / unit: Mass / kg
- Amount rule: Accepted compound mass fed to the moulding machine minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming moulded EVA part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eva_part_moulding`
- Sources: `bianchi-recycled-eva-footwear-2023`

###### Silicone-based mould release agent (`silicone_mould_release_agent`)

This agent crosses the moulding-process boundary when applied to the mould; determine its quantity from batch issue records or calibrated dispensing records.

- Selected flow: Silicone-based mould release agent
- Flow property / unit: Mass / kg
- Amount rule: Measured agent issued to moulding minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming moulded EVA part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eva_part_moulding`
- Sources: `bianchi-recycled-eva-footwear-2023`

###### Electricity for EVA moulding (`electricity_eva_moulding`)

This electricity crosses the moulding-process boundary to operate heating, injection, compression, cooling and auxiliary equipment; meter or allocate it from a documented submeter.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered injection-moulding, temperature-control, grinding and auxiliary electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming moulded EVA part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eva_part_moulding`
- Sources: `bianchi-recycled-eva-footwear-2023`; `af-pefcr-3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Moulded EVA footwear outsole (`moulded_eva_footwear_part`)

This product output crosses the moulding-process boundary after trimming and inspection; determine its quantity from the measured mass of conforming EVA outsoles.

- Selected flow: Moulded EVA footwear outsole
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming part mass after gate, runner and excess-material removal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per moulding batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eva_part_moulding`
- Sources: `bianchi-recycled-eva-footwear-2023`

##### Waste flows

###### Crosslinked EVA injection-moulding gates (`crosslinked_eva_gates`)

This waste crosses the moulding-process boundary as separately removed crosslinked EVA gates; weigh it by the declared internal-recovery or off-site-treatment route.

- Selected flow: Crosslinked EVA injection-moulding gates
- Flow property / unit: Mass / kg
- Amount rule: Measured gate mass by declared internal recovery or off-site treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming moulded EVA part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eva_part_moulding`
- Sources: `bianchi-recycled-eva-footwear-2023`

###### Crosslinked EVA injection-moulding runners (`crosslinked_eva_runners`)

This waste crosses the moulding-process boundary as separately removed crosslinked EVA runners; weigh it by the declared internal-recovery or off-site-treatment route.

- Selected flow: Crosslinked EVA injection-moulding runners
- Flow property / unit: Mass / kg
- Amount rule: Measured runner mass by declared internal recovery or off-site treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming moulded EVA part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eva_part_moulding`
- Sources: `bianchi-recycled-eva-footwear-2023`

###### Defective moulded EVA footwear part (`defective_moulded_eva_part`)

This waste crosses the moulding-process boundary after inspection rejects a moulded part; weigh it by the declared internal-recovery or off-site-treatment route.

- Selected flow: Defective moulded EVA footwear part
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected part mass by declared internal recovery or off-site treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming moulded EVA part
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eva_part_moulding`
- Sources: `bianchi-recycled-eva-footwear-2023`

##### Elementary flows

### Process: Sewing and bonding of upper, gaiter or legging parts (`sewn_part_assembly`)

#### Inputs

##### Product flows

###### Cut leather upper panel input (`cut_leather_upper_input`)

This cut panel crosses into sewn assembly as a product input; determine its quantity from issued and returned panel mass reconciled to the declared model.

- Selected flow: Cut bovine-leather footwear upper panel
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted panel mass received from cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewn_part_assembly`
- Sources: `footwear-manufacturing-4-0-2021`

###### Cut polyester gaiter panel input (`cut_polyester_gaiter_input`)

This cut panel crosses into sewn assembly as a product input; determine its quantity from issued and returned panel mass reconciled to the declared model.

- Selected flow: Cut polyester gaiter panel
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted panel mass received from cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewn_part_assembly`
- Sources: `af-pefcr-3-1-2025`

###### Polyester sewing thread (`polyester_sewing_thread`)

This thread crosses into sewn assembly as a material input; determine its quantity from issued and returned mass or a validated length-to-mass conversion.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Measured thread issued minus returned spool mass and unused thread
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming assembled article
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewn_part_assembly`
- Sources: `footwear-manufacturing-4-0-2021`

###### Polyurethane footwear adhesive (`polyurethane_footwear_adhesive`)

This adhesive crosses into sewn assembly when bonding the declared part; determine its quantity from issue-and-return records or calibrated dispensing records.

- Selected flow: Polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated adhesive issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming bonded article
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewn_part_assembly`
- Sources: `footwear-manufacturing-4-0-2021`

###### Electricity for sewn assembly (`electricity_sewn_assembly`)

This electricity crosses the assembly-process boundary to operate stitching, adhesive application, pressing and auxiliary equipment; meter or allocate it from a documented submeter.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered sewing, adhesive application, pressing, extraction and conveyor electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming assembled article
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewn_part_assembly`
- Sources: `af-pefcr-3-1-2025`; `footwear-manufacturing-4-0-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled footwear upper (`assembled_footwear_upper`)

This product output crosses the assembly-process boundary after stitching and bonding; determine its quantity from the measured mass of conforming declared-model uppers.

- Selected flow: Assembled footwear upper
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming upper mass transferred to finishing or footwear assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewn_part_assembly`
- Sources: `footwear-manufacturing-4-0-2021`

###### Assembled textile gaiter (`assembled_textile_gaiter`)

This product output crosses the assembly-process boundary after stitching and bonding; determine its quantity from the measured mass of conforming declared-model gaiters.

- Selected flow: Assembled textile gaiter
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming gaiter mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewn_part_assembly`
- Sources: `af-pefcr-3-1-2025`

##### Waste flows

###### Cured polyurethane adhesive residue (`cured_adhesive_residue`)

This waste crosses the assembly-process boundary as separately collected cured adhesive residue; weigh it by the declared treatment route.

- Selected flow: Cured polyurethane adhesive residue
- Flow property / unit: Mass / kg
- Amount rule: Measured cured residue sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming bonded article
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewn_part_assembly`
- Sources: `footwear-manufacturing-4-0-2021`

##### Elementary flows

### Process: Finishing, inspection and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Unboxed declared footwear part (`unboxed_declared_part`)

This is the one specific conforming part from the applicable upstream route, not a mixture of part families.

- Selected flow: Unboxed declared CPC 29600 footwear part
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass received from the applicable manufacturing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `af-pefcr-3-1-2025`

###### Electricity for finishing and packaging (`electricity_finishing_packaging`)

This electricity crosses the finishing-process boundary to operate inspection, trimming, marking and packaging equipment; meter or allocate it from a documented submeter.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered finishing, inspection, testing and packaging electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `af-pefcr-3-1-2025`

###### Corrugated paperboard box (`corrugated_paperboard_box`)

This box crosses the finishing-process boundary as a packaging input for the declared sale or shipment configuration; determine its quantity from the packaging bill of materials and measured unit mass.

- Selected flow: Corrugated paperboard box
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by measured mass of the exact box specification
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `af-pefcr-3-1-2025`

###### LDPE packaging bag (`ldpe_packaging_bag`)

This bag crosses the finishing-process boundary as a packaging input for the declared sale or shipment configuration; determine its quantity from the packaging bill of materials and measured unit mass.

- Selected flow: Low-density polyethylene packaging bag
- Flow property / unit: Mass / kg
- Amount rule: Count multiplied by measured mass of the exact bag specification
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `af-pefcr-3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished CPC 29600 product (`reference_product_output`)

This is the conforming declared product that crosses the factory gate; weigh net finished-product mass excluding packaging and normalize the dataset to 1 kg.

- Selected flow: Parts of footwear, removable insoles, heel cushions and similar articles, gaiters, leggings and similar articles, and parts thereof `13caecd4-f313-436a-8ab4-2abfbab600bb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net conforming finished product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Rejected finished footwear part (`rejected_finished_footwear_part`)

This waste crosses the finishing-process boundary when final inspection rejects the declared product; weigh it separately by the declared recovery or treatment route.

- Selected flow: Rejected finished footwear part
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by exact material composition and declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `af-pefcr-3-1-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared processes | Prefer submetering, batch records, line time and material issue records to subdivide the actual route before allocation. | `eu-pef-method-2021` |
| `allocation_mass_operations` | compound forming, die-cutting, insole production, stockfitting and finishing | When subdivision is not possible, allocate shared inputs and outputs by measured product mass for the same reporting period. | `af-pefcr-3-1-2025` |
| `allocation_unit_operations` | sewing and assembly | When subdivision is not possible, allocate shared sewing or assembly burdens by processed units, then convert the represented model and size mix to the 1 kg reference flow using measured mass. | `af-pefcr-3-1-2025` |
| `allocation_recycled_scrap` | internally recovered EVA or other process scrap | Record scrap generation, recovery input and substitution explicitly; prevent double counting of avoided virgin material or waste treatment and disclose the selected recycling allocation method. | `eu-pef-method-2021`; `bianchi-recycled-eva-footwear-2023` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_sheet_part_converting` | `sheet_part_converting` | material, electricity, accepted part and offcut exchanges | purchase, issue/return, scale, meter and waste-dispatch records | material id; lot; issued mass; returned mass; accepted cut mass; offcut mass; treatment route; kWh; machine time; output model and size | Reconcile signed material movements and calibrated weighing with stage electricity records | kg; kWh | Each batch with monthly reconciliation | At least one representative production year or the full shorter campaign | Every included cutting site and subcontractor | Sum by atomic flow and treatment route, allocate only under section 7, normalize to accepted cut output and reference product | Calibration; invoices; issue/return slips; cutting plan; production log; waste transfer record |
| `cp_eva_part_moulding` | `eva_part_moulding` | EVA compound, release agent, electricity, product, gate/runner and reject exchanges | batch recipe, hopper issue, scale, meter, machine and waste records | compound lot and formulation; virgin and recovered mass; release-agent mass; kWh; conforming part mass; gate/runner mass; reject mass; recovery or disposal route | Reconcile each moulding batch and retain machine-cycle and recovery records | kg; kWh | Each batch with monthly reconciliation | At least one representative production year or the full shorter campaign | Every included moulding site and subcontractor | Sum by atomic flow and waste route; separately report internally recovered material; normalize to conforming moulded output and reference product | Calibrated scales/meters; recipe; machine log; reject log; waste transfer record |
| `cp_sewn_part_assembly` | `sewn_part_assembly` | panels, thread, adhesive, electricity, assembled article and residue exchanges | issue/return, scale, meter, sewing, bonding and waste records | panel mass; thread mass; adhesive formulation and mass; kWh; conforming output mass and units; residue mass; reject mass | Reconcile material issue and return with accepted output and residue for each model and size mix | kg; kWh; item | Each batch with monthly reconciliation | At least one representative production year or the full shorter campaign | Every included sewing or bonding site and subcontractor | Sum by atomic flow; use unit allocation only under section 7; normalize using measured output mass | Scale/meter calibration; bill of materials; work order; adhesive record; inspection and waste record |
| `cp_finishing_packaging` | `finishing_packaging` | unboxed product, electricity, paperboard box, LDPE bag, conforming output and reject exchanges | receipt, scale, meter, packaging issue and inspection records | incoming mass; kWh; box count and unit mass; bag count and unit mass; conforming net mass; reject mass and treatment route | Reconcile accepted incoming part, packaging issued, conforming net output and rejects | kg; kWh; item | Each batch with monthly reconciliation | At least one representative production year or the full shorter campaign | Every included finishing and packaging site | Sum by atomic flow; keep packaging outside net product; normalize to 1 kg conforming net output | Calibrated scales/meters; packaging specification; inspection log; production and waste records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory exchanges | normalized amount = reporting-period exchange amount / reporting-period conforming net product mass | atomic exchange amount; conforming net product mass | amount per 1 kg reference product | `eu-pef-method-2021` |
| `calc_process_loss` | each material process | loss rate = (accepted input - returned input - conforming transferred output) / accepted input; reconcile the resulting mass with separately measured waste and inventory change | accepted input; return; output; waste; opening and closing stock | process-specific loss rate and mass-balance finding | `af-pefcr-3-1-2025` |
| `calc_item_mass` | item-based part and packaging records | mass = item count multiplied by measured mean mass for the identical specification and documented sample | count; sample masses; specification and size mix | kg of part or packaging component | `af-pefcr-3-1-2025` |
| `calc_shared_electricity` | shared electrical equipment | allocated kWh = metered kWh multiplied by the documented allocation share from machine time, processed mass or processed units consistent with section 7 | metered kWh; machine time; processed mass or units | process electricity by declared product | `af-pefcr-3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain product specification, photo or drawing, part family, model, material/formulation, construction, size or size mix, performance requirement and CPC 29600 justification. | Controlled specification; bill of materials; inspection record; product drawing or photo |
| `dq_primary_coverage` | foreground route | Use primary records for every included factory and subcontractor; document the reporting period, production volume and exclusions. | Site and supplier records; coverage reconciliation; signed data return |
| `dq_bom_completeness` | material inventory | Cover at least 95% of product BOM mass and 100% of declared main structural, cushioning, covering and fastening materials; disclose every omitted atomic input. | Mass-based BOM completeness calculation and omission register |
| `dq_mass_balance` | each process | Reconcile inputs, returns, outputs, wastes and stock change; investigate unexplained imbalance rather than assigning it to an aggregate waste flow. | Process mass-balance worksheet and corrective-action record |
| `dq_energy` | electricity | Retain meters, calculation inputs, allocation basis and site supply evidence; do not merge electricity with heat or fuel. | Meter record; equipment log; supply invoice or contract; allocation worksheet |
| `dq_waste_route` | each waste flow | Record the exact material, hazardous status where applicable, receiver and treatment route; do not combine EVA, leather, polyester, cellulose, adhesive or product rejects. | Waste manifest, receiver evidence and material reconciliation |
| `dq_source_and_proxy` | upstream datasets | Record dataset identity, geography, technology, time, version and proxy justification for every upstream input. | Dataset register and proxy assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require state-100 Product flow UUID `13caecd4-f313-436a-8ab4-2abfbab600bb`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and reference amount 1. |  |
| `validate_scope` | product identity | Require one named CPC 29600 part family and model; reject complete footwear, raw materials, and pooled results that mix unrelated part families or routes. | `un-cpc-3-2025` |
| `validate_route_completeness` | process map | Require finishing and packaging plus every conditional process and subcontractor operation actually used; require evidence for every not-applicable route. | `af-pefcr-3-1-2025` |
| `validate_atomic_inventory` | inventory rows | Require separate exchanges for each material, electricity input, packaging component, waste material and direct emission; reject collection labels or combined carriers. | `af-pefcr-3-1-2025`; `eu-pef-method-2021` |
| `validate_mass_balance` | each included process | Require accepted input, returns, conforming output, measured waste and stock change to reconcile within the declared measurement uncertainty. | `af-pefcr-3-1-2025` |
| `validate_no_case_range` | quantitative screening | Reject any lower-equals-upper range or empirical interval derived from one plant, product or paper; require two independent boundary-compatible original sources and a documented synthesis before accepting a cross-category empirical range. |  |
| `validate_bilingual_alignment` | localized PCR | Require identical ordered rule ids, process ids, row ids, UUIDs, controlled tokens and source ids in English and Chinese, with the exact Tiangong Chinese baseName for the UUID-bearing reference product. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate `secondary_dataset` or `background_dataset` for one specified CPC 29600 product |
| downstream_use | Upstream component input to footwear or protective-article process datasets and lifecycle models; product-specific footprinting; supplier and factory improvement analysis |
| allowed_use | Use when product family, model, material/formulation, construction, route, size mix, geography, period, packaging and data quality match the study |
| excluded_use | Complete-footwear reference product; generic proxy across unrelated footwear-part families; consumer-use or end-of-life modelling; unsupported comparative claims; substitution for missing product-specific route data |
| required_metadata | canonical PCR id; reference UUID and Mass/unit support; exact part family and model; function; CPC scope justification; material/formulation; BOM and coverage; construction and route; size or size mix; net mass; sites and subcontractors; reporting period; electricity supply; packaging; wastes and treatment routes; allocation; upstream datasets; proxies; cut-offs and data gaps |
| required_quality_disclosure | foreground record coverage; measurement and calibration; mass-balance results; BOM completeness; allocation; supplier coverage; upstream dataset quality; proxy use; missing UUIDs; uncertainty and unresolved range evidence |
| update_trigger | Change in product family, formulation, construction, manufacturing route, main supplier, site, electricity supply, packaging, allocation, waste treatment, performance specification, or a material data-quality improvement |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | United Nations Statistics Division. *Central Product Classification (CPC), Version 3.0, Explanatory Notes*, code 29600, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-20). | Exact product-category scope and exclusions |
| `eu-pef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-20). | Life-cycle boundary, inventory, allocation, data quality and disclosure principles |
| `af-pefcr-3-1-2025` | `official_guidance` | Apparel and Footwear Technical Secretariat. *Product Environmental Footprint Category Rules: Apparel and Footwear*, Version 3.1, 29 April 2025. https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf (retrieved 2026-08-20); listed by the European Commission at https://green-forum.ec.europa.eu/green-business/environmental-footprint-methods/pef-method_en. | Footwear component manufacturing routes; BOM and primary-data rules; losses; packaging; allocation and electricity modelling |
| `rossi-leather-shoe-lca-2021` | `literature` | Rossi, M.; Papetti, A.; Marconi, M.; Germani, M. “Life cycle assessment of a leather shoe supply chain.” *International Journal of Sustainable Engineering* (2021). https://doi.org/10.1080/19397038.2021.1920643. | Full-chain component specialization, insole and sole construction, primary-data collection and factory process decomposition |
| `footwear-manufacturing-4-0-2021` | `literature` | Oliver, G.; Gil, P.; Gomez, J. F.; Torres, F. “Towards footwear manufacturing 4.0: shoe sole robotic grasping in assembling operations.” *The International Journal of Advanced Manufacturing Technology* 114, 811–827 (2021). https://doi.org/10.1007/s00170-021-06697-0. | Open-access full-text process sequence for cutting, stitching, adhesive application, assembly, pressing and finishing |
| `bianchi-recycled-eva-footwear-2023` | `literature` | Bianchi, I.; Forcellese, A.; Simoncini, M.; Vita, A. “Mechanical characterization and sustainability assessment of recycled EVA for footwears.” *The International Journal of Advanced Manufacturing Technology* 126, 3149–3160 (2023). https://doi.org/10.1007/s00170-023-11332-1. | Open-access full-text EVA injection-moulding route, release agent, energy and consumable inventory, gate/runner and reject waste, recovery and treatment accounting |
