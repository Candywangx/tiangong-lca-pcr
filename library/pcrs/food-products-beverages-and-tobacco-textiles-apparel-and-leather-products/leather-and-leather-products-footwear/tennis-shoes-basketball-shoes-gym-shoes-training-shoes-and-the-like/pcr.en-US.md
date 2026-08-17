---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.tennis-shoes-basketball-shoes-gym-shoes-training-shoes-and-the-like
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tennis shoes, basketball shoes, gym shoes, training shoes and the like

## 1. Scope and Applicability

This PCR applies to foreground manufacture of finished tennis shoes, basketball shoes, gym shoes, training shoes, and similar athletic footwear classified as CPC 29420. It covers product-specific BOM preparation, component cutting, upper stitching and subassembly, conditional sole molding, lasting, adhesive bonding, finishing, inspection, and packaging at the manufacturing site.

The foreground boundary begins with purchased footwear materials or components at the factory gate and ends with the net finished and packaged sports shoe product at the factory gate. Upstream production of textiles, leather, coated textiles, polymers, rubber compounds, metals, adhesives, chemicals, utilities, refrigerants, and packaging is represented by matching supplier or background datasets.

This PCR excludes general-purpose footwear outside CPC 29420, protective or safety footwear, ski boots and skates, raw footwear materials sold separately, distribution, retail, consumer use, repair, and end-of-life. The declared dataset shall identify sport or intended activity, size range, pair count per kilogram, upper construction, midsole and outsole materials, closure, bonding route, and packaging configuration.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.tennis-shoes-basketball-shoes-gym-shoes-training-shoes-and-the-like` |
| classification_refs | CPC 3.0: 29420, Tennis shoes, basketball shoes, gym shoes, training shoes and the like |
| covered_products | Finished athletic footwear designed for tennis, basketball, gym, training, or a similar sporting activity |
| excluded_products | Footwear outside CPC 29420; protective or safety footwear; ski boots; skating footwear with blades or wheels; unfinished materials or components sold separately |
| representative_product | A finished pair of training shoes with a declared product-specific BOM and packaging configuration |
| production_route | Product-specific material cutting; upper stitching and subassembly; conditional on-site sole molding; lasting, bonding, finishing, inspection, and packaging |
| market_state | Finished and packaged sports shoes at factory gate, reported by net product mass with pair count and size range disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished tennis, basketball, gym, training, or similar athletic footwear providing the declared fit and sporting function |
| How much | 1 kg net finished and packaged sports shoes at the factory gate |
| How well | Meets the producer's declared sport, size, fit, upper, midsole, outsole, closure, durability, quality-grade, and packaging specification |
| How long or cycle | One completed manufacturing lot at factory gate; no use-life or wear-cycle claim is represented |
| reference_flow_link | `reference_sports_shoe_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tennis shoes, basketball shoes, gym shoes, training shoes and the like `3fb395b7-1901-4a81-8b89-b8300bd9134e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | intended sport or activity; adult or child sizing system and size range; pairs and individual shoes per kg; upper material and construction; lining; midsole material; outsole material; sockliner; closure; bonding system; on-site or supplier-made sole components; colourway; quality grade; net product mass; packaging configuration; plant and geography |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net sports shoes, excluding removable transport packaging; disclose pair count, individual-shoe count, and size range represented by that mass. |
| `bom_mass` | Materials and components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile product-specific BOM issue, return, output, scrap, rejects, and stock change without merging materials of different composition. |
| `chemical_mass` | Adhesive resin, dispersion, primer, and solvents | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain commercial product mass, active content when available, chemical identity, batch, and process use; do not combine adhesive, primer, or solvent rows. |
| `energy_carrier_separation` | Electricity, purchased steam, supplied hot water, natural gas, and LPG | Energy | kWh or MJ | Record every carrier separately and retain meter, invoice, steam-state, hot-water temperature, lower-heating-value, and allocation evidence used for conversion. |
| `packaging_mass` | Tissue, shoe box, shipping carton, LDPE bag, and paper label | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging material separately and exclude its mass from the net reference-product mass. |
| `waste_mass` | Material offcuts, molding scrap, chemical residues, rejects, and packaging waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record composition, wet or dry basis where relevant, hazardous status, and treatment destination for each waste exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased footwear materials and components at the sports-shoe manufacturing factory gate |
| starting_condition_role | Foreground entry condition for product-specific component conversion and final shoe assembly |
| product_classification_scope | CPC 29420 tennis, basketball, gym, training, and similar athletic footwear |
| recursive_input_rule | When a purchased input is already a CPC 29420 shoe or contract-manufactured subassembly carrying the same product function, record it once with its supplier dataset and omit only the operations demonstrably covered upstream; do not recreate the same product category recursively |
| upstream_dataset_requirement | Supplier datasets shall cover production of every textile, leather, coated textile, polymer, rubber compound, metal component, adhesive, solvent, utility, refrigerant, and packaging material, and each purchased midsole, outsole, upper, or sockliner |
| disclosure | Declare the product-specific BOM, supplier-made versus on-site components, process inclusion, material and chemical identities, energy carriers, refrigerant, direct air emissions, waste destinations, packaging, plant, geography, and production period |

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `boundary_cpc_scope` | Product identity | Include only finished athletic footwear within CPC 29420 and disclose the intended sport or equivalent training function. | `un-cpc-v3-2025` |
| `boundary_factory_gate` | Foreground system | Include all on-site material preparation, upper assembly, included sole molding, lasting, bonding, finishing, inspection, and packaging from purchased inputs to factory-gate product. | `af-pefcr-2025`; `eu-pef-2021` |
| `boundary_complete_lci` | Inventory | Include product-specific raw material and component inputs, each energy carrier, products, wastes, and individual emissions to air, water, or soil associated with included manufacturing processes. | `eu-pef-2021` |
| `boundary_supplier_components` | Purchased components | Link each purchased upper, midsole, outsole, sockliner, or other finished component to a supplier dataset and omit on-site production only for the exact operations covered by that dataset. | `af-pefcr-2025`; `eu-pef-2021` |
| `boundary_packaging` | Packaging | Include retail and transport packaging applied before the factory-gate reference point and record each packaging material and waste stream separately. | `af-pefcr-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_cutting` | Component cutting and preparation | `required` | Required when upper and support materials are cut on site; supplier-produced components require matching upstream datasets. | Convert declared BOM sheet and roll materials into a traceable upper component set. | kg cut upper component set |
| `upper_stitching` | Upper stitching and subassembly | `required` | Required for upper subassembly; thread and eyelet rows are conditional on the declared design. | Join upper components and attach lacing components. | kg stitched upper |
| `sole_molding` | Sole molding and preparation | `conditional` | Include each molded material route performed on site; purchased midsoles and outsoles require supplier datasets and skip only the corresponding molding rows. | Mold and prepare discrete midsole, outsole, and support components. | kg accepted sole components |
| `lasting_bonding_finishing` | Lasting, bonding, and finishing | `required` | Required for assembly of upper, sole, sockliner, and declared finishing steps. | Form the upper on the last, bond sole components, finish, and inspect the sports shoe. | kg finished sports shoe before packaging |
| `final_packaging` | Final inspection and packaging | `required` | Required for the factory-gate reference product; each packaging-material row applies only when used. | Pack and release the declared CPC 29420 product. | 1 kg net reference product |

### Process: Component cutting and preparation (`component_cutting`)

#### Inputs

##### Product flows

###### Polyester knitted mesh upper fabric (`polyester_mesh_upper_input`)

This product input records only Polyester knitted mesh fabric for sports shoe uppers at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Polyester knitted mesh fabric for sports shoe uppers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Cow leather upper material (`cow_leather_upper_input`)

This product input records only Finished cow leather for sports shoe uppers at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Finished cow leather for sports shoe uppers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Polyurethane-coated textile upper material (`pu_coated_textile_upper_input`)

This product input records only Polyurethane-coated polyester textile for sports shoe uppers at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Polyurethane-coated polyester textile for sports shoe uppers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Polyester lining fabric (`polyester_lining_input`)

This product input records only Polyester knitted lining fabric for sports shoes at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Polyester knitted lining fabric for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Thermoplastic polyurethane support sheet (`tpu_sheet_input`)

This product input records only Thermoplastic polyurethane sheet for sports shoe supports at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Thermoplastic polyurethane sheet for sports shoe supports
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Polyurethane foam sheet (`pu_foam_sheet_input`)

This product input records only Flexible polyurethane foam sheet for sports shoe collars and tongues at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Flexible polyurethane foam sheet for sports shoe collars and tongues
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Electricity for component cutting (`cutting_electricity_input`)

This product input records only Electricity supplied to sports shoe cutting equipment at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Electricity supplied to sports shoe cutting equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or equipment electricity allocated from operating hours and measured or rated demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut sports shoe upper components (`cut_upper_components_output`)

This product output records only Cut upper components for sports shoes at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Cut sports shoe upper component set
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass reconciled to component inputs, process waste, rejects, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

##### Waste flows

###### Polyester textile cutting offcuts (`polyester_textile_offcuts_output`)

This waste output records only Polyester textile cutting offcuts from sports shoe uppers at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Polyester textile cutting offcuts from sports shoe uppers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Cow leather cutting offcuts (`cow_leather_offcuts_output`)

This waste output records only Cow leather cutting offcuts from sports shoe uppers at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Cow leather cutting offcuts from sports shoe uppers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Polyurethane-coated textile offcuts (`pu_coated_textile_offcuts_output`)

This waste output records only Polyurethane-coated polyester textile cutting offcuts at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Polyurethane-coated polyester textile cutting offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Thermoplastic polyurethane sheet offcuts (`tpu_sheet_offcuts_output`)

This waste output records only Thermoplastic polyurethane sheet cutting offcuts at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Thermoplastic polyurethane sheet cutting offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

###### Polyurethane foam cutting offcuts (`pu_foam_offcuts_output`)

This waste output records only Flexible polyurethane foam cutting offcuts at the component cutting and preparation boundary; it is not combined with any other exchange.

- Selected flow: Flexible polyurethane foam cutting offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_cutting`
- Sources: `af-pefcr-2025`

##### Elementary flows

### Process: Upper stitching and subassembly (`upper_stitching`)

#### Inputs

##### Product flows

###### Cut sports shoe upper components (`cut_upper_components_input`)

This product input records only Cut upper components for sports shoes at the upper stitching and subassembly boundary; it is not combined with any other exchange.

- Selected flow: Cut sports shoe upper component set
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass transferred from component cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_stitching`

###### Polyester sewing thread (`polyester_sewing_thread_input`)

This product input records only Polyester sewing thread for sports shoe uppers at the upper stitching and subassembly boundary; it is not combined with any other exchange.

- Selected flow: Polyester sewing thread for sports shoe uppers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_stitching`
- Sources: `af-pefcr-2025`

###### Polyester shoelace (`polyester_shoelace_input`)

This product input records only Polyester shoelace for sports shoes at the upper stitching and subassembly boundary; it is not combined with any other exchange.

- Selected flow: Polyester shoelace for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_upper_stitching`
- Sources: `af-pefcr-2025`

###### Steel shoe eyelet (`steel_eyelet_input`)

This product input records only Steel eyelet for sports shoe lacing at the upper stitching and subassembly boundary; it is not combined with any other exchange.

- Selected flow: Steel eyelet for sports shoe lacing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_upper_stitching`
- Sources: `af-pefcr-2025`

###### Electricity for upper stitching (`stitching_electricity_input`)

This product input records only Electricity supplied to sports shoe upper stitching equipment at the upper stitching and subassembly boundary; it is not combined with any other exchange.

- Selected flow: Electricity supplied to sports shoe upper stitching equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or equipment electricity allocated from operating hours and measured or rated demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_stitching`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stitched sports shoe upper (`stitched_upper_output`)

This product output records only Stitched upper for sports shoes at the upper stitching and subassembly boundary; it is not combined with any other exchange.

- Selected flow: Stitched upper for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass reconciled to component inputs, process waste, rejects, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_upper_stitching`
- Sources: `af-pefcr-2025`

##### Waste flows

###### Polyester sewing thread offcuts (`polyester_thread_offcuts_output`)

This waste output records only Polyester sewing thread offcuts from sports shoe upper stitching at the upper stitching and subassembly boundary; it is not combined with any other exchange.

- Selected flow: Polyester sewing thread offcuts from sports shoe upper stitching
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_stitching`
- Sources: `af-pefcr-2025`

###### Defective stitched sports shoe upper (`defective_stitched_upper_output`)

This waste output records only Defective stitched upper for sports shoes at the upper stitching and subassembly boundary; it is not combined with any other exchange.

- Selected flow: Defective stitched upper for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed rejected upper mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg stitched upper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_stitching`
- Sources: `af-pefcr-2025`

##### Elementary flows

### Process: Sole molding and preparation (`sole_molding`)

#### Inputs

##### Product flows

###### Ethylene-vinyl acetate foam compound (`eva_compound_input`)

This product input records only Ethylene-vinyl acetate compound for sports shoe midsoles at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Ethylene-vinyl acetate compound for sports shoe midsoles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Natural rubber outsole compound (`natural_rubber_compound_input`)

This product input records only Natural rubber compound for sports shoe outsoles at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Natural rubber compound for sports shoe outsoles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Styrene-butadiene rubber outsole compound (`sbr_compound_input`)

This product input records only Styrene-butadiene rubber compound for sports shoe outsoles at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Styrene-butadiene rubber compound for sports shoe outsoles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Thermoplastic polyurethane granules (`tpu_granules_input`)

This product input records only Thermoplastic polyurethane granules for sports shoe sole components at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Thermoplastic polyurethane granules for sports shoe sole components
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Electricity for sole molding (`sole_molding_electricity_input`)

This product input records only Electricity supplied to sports shoe sole molding equipment at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Electricity supplied to sports shoe sole molding equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or equipment electricity allocated from operating hours and measured or rated demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### Purchased steam for sole molding (`sole_molding_steam_input`)

This product input records only Purchased steam supplied to sports shoe sole molding at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Purchased steam supplied to sports shoe sole molding
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy or carrier mass converted with documented thermodynamic or lower-heating-value data; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### Supplied hot water for sole molding (`sole_molding_hot_water_input`)

This product input records only Hot water supplied as a heat carrier to sports shoe sole molding at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Hot water supplied as a heat carrier to sports shoe sole molding
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy or carrier mass converted with documented thermodynamic or lower-heating-value data; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### Natural gas for sole molding heat (`sole_molding_natural_gas_input`)

This product input records only Natural gas combusted on site for sports shoe sole molding at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Natural gas combusted on site for sports shoe sole molding
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy or carrier mass converted with documented thermodynamic or lower-heating-value data; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### LPG for sole molding heat (`sole_molding_lpg_input`)

This product input records only Liquefied petroleum gas combusted on site for sports shoe sole molding at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Liquefied petroleum gas combusted on site for sports shoe sole molding
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy or carrier mass converted with documented thermodynamic or lower-heating-value data; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### R-134a refrigerant make-up (`r134a_refrigerant_makeup_input`)

This product input records only 1,1,1,2-Tetrafluoroethane refrigerant (R-134a) at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured R-134a make-up allocated to the sole-molding chiller; not applicable when no R-134a system is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molded EVA midsole (`eva_midsole_output`)

This product output records only Molded ethylene-vinyl acetate midsole for sports shoes at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Molded ethylene-vinyl acetate midsole for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass reconciled to component inputs, process waste, rejects, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Molded natural rubber outsole (`natural_rubber_outsole_output`)

This product output records only Molded natural rubber outsole for sports shoes at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Molded natural rubber outsole for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass reconciled to component inputs, process waste, rejects, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Molded styrene-butadiene rubber outsole (`sbr_outsole_output`)

This product output records only Molded styrene-butadiene rubber outsole for sports shoes at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Molded styrene-butadiene rubber outsole for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass reconciled to component inputs, process waste, rejects, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Molded thermoplastic polyurethane sole component (`tpu_sole_component_output`)

This product output records only Molded thermoplastic polyurethane sole component for sports shoes at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Molded thermoplastic polyurethane sole component for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass reconciled to component inputs, process waste, rejects, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

##### Waste flows

###### EVA molding scrap (`eva_molding_scrap_output`)

This waste output records only Ethylene-vinyl acetate molding scrap from sports shoe midsoles at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Ethylene-vinyl acetate molding scrap from sports shoe midsoles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Natural rubber molding scrap (`natural_rubber_molding_scrap_output`)

This waste output records only Natural rubber molding scrap from sports shoe outsoles at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Natural rubber molding scrap from sports shoe outsoles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Styrene-butadiene rubber molding scrap (`sbr_molding_scrap_output`)

This waste output records only Styrene-butadiene rubber molding scrap from sports shoe outsoles at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Styrene-butadiene rubber molding scrap from sports shoe outsoles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

###### Thermoplastic polyurethane molding scrap (`tpu_molding_scrap_output`)

This waste output records only Thermoplastic polyurethane molding scrap from sports shoe sole components at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Thermoplastic polyurethane molding scrap from sports shoe sole components
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_molding`
- Sources: `af-pefcr-2025`

##### Elementary flows

###### R-134a emitted to air (`r134a_to_air_output`)

This elementary output records only 1,1,1,2-Tetrafluoroethane (R-134a), to air at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a), to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Refrigerant charge balance using opening charge, make-up, closing charge, recovery, and documented transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_molding`

###### Fossil carbon dioxide from sole-molding natural gas (`sole_molding_natural_gas_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from natural gas combustion for sports shoe sole molding at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Carbon dioxide, fossil, to air from natural gas combustion for sports shoe sole molding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Natural-gas energy multiplied by a documented site or supplier carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_molding`

###### Fossil carbon dioxide from sole-molding LPG (`sole_molding_lpg_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from LPG combustion for sports shoe sole molding at the sole molding and preparation boundary; it is not combined with any other exchange.

- Selected flow: Carbon dioxide, fossil, to air from LPG combustion for sports shoe sole molding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: LPG energy multiplied by a documented site or supplier carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted sole component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_molding`

### Process: Lasting, bonding, and finishing (`lasting_bonding_finishing`)

#### Inputs

##### Product flows

###### Stitched sports shoe upper (`stitched_upper_input`)

This product input records only Stitched upper for sports shoes at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Stitched upper for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass transferred from upper stitching
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`

###### Molded EVA midsole (`eva_midsole_input`)

This product input records only Molded ethylene-vinyl acetate midsole for sports shoes at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Molded ethylene-vinyl acetate midsole for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lasting_bonding`

###### Molded natural rubber outsole (`natural_rubber_outsole_input`)

This product input records only Molded natural rubber outsole for sports shoes at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Molded natural rubber outsole for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lasting_bonding`

###### Molded styrene-butadiene rubber outsole (`sbr_outsole_input`)

This product input records only Molded styrene-butadiene rubber outsole for sports shoes at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Molded styrene-butadiene rubber outsole for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lasting_bonding`

###### Molded thermoplastic polyurethane sole component (`tpu_sole_component_input`)

This product input records only Molded thermoplastic polyurethane sole component for sports shoes at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Molded thermoplastic polyurethane sole component for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lasting_bonding`

###### Polyurethane foam sockliner (`pu_foam_sockliner_input`)

This product input records only Flexible polyurethane foam sockliner for sports shoes at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Flexible polyurethane foam sockliner for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

###### Waterborne polyurethane adhesive (`waterborne_pu_adhesive_input`)

This product input records only Waterborne polyurethane dispersion adhesive for sports shoe bonding at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Waterborne polyurethane dispersion adhesive for sports shoe bonding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

###### Polyurethane adhesive resin (`polyurethane_adhesive_resin_input`)

This product input records only Polyurethane adhesive resin for sports shoe bonding at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Polyurethane adhesive resin for sports shoe bonding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

###### Ethyl acetate adhesive solvent (`ethyl_acetate_input`)

This product input records only Ethyl acetate for sports shoe adhesive preparation at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Ethyl acetate for sports shoe adhesive preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

###### Chlorinated polyolefin primer (`chlorinated_polyolefin_primer_input`)

This product input records only Chlorinated polyolefin primer for sports shoe sole bonding at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Chlorinated polyolefin primer for sports shoe sole bonding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

###### Acetone cleaning solvent (`acetone_cleaning_solvent_input`)

This product input records only Acetone used for sports shoe bonding-equipment cleaning at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Acetone used for sports shoe bonding-equipment cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

###### Electricity for lasting and bonding (`lasting_electricity_input`)

This product input records only Electricity supplied to sports shoe lasting and bonding equipment at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Electricity supplied to sports shoe lasting and bonding equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or equipment electricity allocated from operating hours and measured or rated demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### Purchased steam for upper conditioning (`lasting_steam_input`)

This product input records only Purchased steam supplied to sports shoe upper conditioning at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Purchased steam supplied to sports shoe upper conditioning
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy or carrier mass converted with documented thermodynamic or lower-heating-value data; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### Supplied hot water for bonding (`lasting_hot_water_input`)

This product input records only Hot water supplied as a heat carrier to sports shoe bonding at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Hot water supplied as a heat carrier to sports shoe bonding
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy or carrier mass converted with documented thermodynamic or lower-heating-value data; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### Natural gas for adhesive activation (`lasting_natural_gas_input`)

This product input records only Natural gas combusted on site for sports shoe adhesive activation at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Natural gas combusted on site for sports shoe adhesive activation
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy or carrier mass converted with documented thermodynamic or lower-heating-value data; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

###### LPG for adhesive activation (`lasting_lpg_input`)

This product input records only Liquefied petroleum gas combusted on site for sports shoe adhesive activation at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Liquefied petroleum gas combusted on site for sports shoe adhesive activation
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy or carrier mass converted with documented thermodynamic or lower-heating-value data; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished sports shoe before packaging (`finished_sports_shoe_output`)

This product output records only Finished sports shoe before packaging at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Finished sports shoe before packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass reconciled to component inputs, process waste, rejects, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

##### Waste flows

###### Polyurethane adhesive residue (`polyurethane_adhesive_residue_output`)

This waste output records only Waste polyurethane adhesive residue from sports shoe bonding at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Waste polyurethane adhesive residue from sports shoe bonding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

###### Chlorinated polyolefin primer residue (`chlorinated_polyolefin_primer_residue_output`)

This waste output records only Waste chlorinated polyolefin primer from sports shoe bonding at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Waste chlorinated polyolefin primer from sports shoe bonding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

###### Waste acetone cleaning solvent (`waste_acetone_output`)

This waste output records only Waste acetone from sports shoe bonding-equipment cleaning at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Waste acetone from sports shoe bonding-equipment cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

###### Defective finished sports shoe (`defective_sports_shoe_output`)

This waste output records only Defective finished sports shoe at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Defective finished sports shoe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed rejected shoe mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `af-pefcr-2025`

##### Elementary flows

###### Ethyl acetate emitted to air (`ethyl_acetate_to_air_output`)

This elementary output records only Ethyl acetate, to air from sports shoe bonding at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Ethyl acetate, to air from sports shoe bonding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Ethyl acetate input minus recovered solvent, solvent retained in products and wastes, and closing stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `eu-pef-2021`

###### Acetone emitted to air (`acetone_to_air_output`)

This elementary output records only Acetone, to air from sports shoe equipment cleaning at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Acetone, to air from sports shoe equipment cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Acetone input minus recovered solvent, solvent retained in wastes, and closing stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_lasting_bonding`
- Sources: `eu-pef-2021`

###### Fossil carbon dioxide from bonding natural gas (`lasting_natural_gas_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from natural gas combustion for sports shoe bonding at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Carbon dioxide, fossil, to air from natural gas combustion for sports shoe bonding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Natural-gas energy multiplied by a documented site or supplier carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lasting_bonding`

###### Fossil carbon dioxide from bonding LPG (`lasting_lpg_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from LPG combustion for sports shoe bonding at the lasting, bonding, and finishing boundary; it is not combined with any other exchange.

- Selected flow: Carbon dioxide, fossil, to air from LPG combustion for sports shoe bonding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: LPG energy multiplied by a documented site or supplier carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished sports shoe output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lasting_bonding`

### Process: Final inspection and packaging (`final_packaging`)

#### Inputs

##### Product flows

###### Finished sports shoe for packaging (`finished_sports_shoe_packaging_input`)

This product input records only Finished sports shoe before packaging at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Finished sports shoe before packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass from final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`

###### Shoe wrapping tissue paper (`tissue_paper_input`)

This product input records only Tissue paper for wrapping sports shoes at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Tissue paper for wrapping sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`
- Sources: `af-pefcr-2025`

###### Paperboard shoe box (`paperboard_shoebox_input`)

This product input records only Paperboard retail box for sports shoes at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Paperboard retail box for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_packaging`
- Sources: `af-pefcr-2025`

###### Corrugated cardboard shipping carton (`corrugated_carton_input`)

This product input records only Corrugated cardboard shipping carton for sports shoes at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Corrugated cardboard shipping carton for sports shoes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_packaging`
- Sources: `af-pefcr-2025`

###### Low-density polyethylene packaging bag (`ldpe_bag_input`)

This product input records only Low-density polyethylene bag for sports shoe packaging at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Low-density polyethylene bag for sports shoe packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass issued to the process less returned usable stock; not applicable when the declared product does not use this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`
- Sources: `af-pefcr-2025`

###### Paper packaging label (`paper_label_input`)

This product input records only Paper label for sports shoe packaging at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Paper label for sports shoe packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Component count multiplied by measured or supplier-declared mass per component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_packaging`
- Sources: `af-pefcr-2025`

###### Electricity for sports shoe packaging (`packaging_electricity_input`)

This product input records only Electricity supplied to sports shoe packaging equipment at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Electricity supplied to sports shoe packaging equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or equipment electricity allocated from operating hours and measured or rated demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`
- Sources: `eu-pef-2021`; `af-pefcr-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference sports shoe product (`reference_sports_shoe_output`)

This product output records only Tennis shoes, basketball shoes, gym shoes, training shoes and the like at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Tennis shoes, basketball shoes, gym shoes, training shoes and the like `3fb395b7-1901-4a81-8b89-b8300bd9134e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net finished and packaged sports shoes
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per functional unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-v3-2025`

##### Waste flows

###### Waste shoe wrapping tissue paper (`waste_tissue_paper_output`)

This waste output records only Waste tissue paper from sports shoe packaging at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Waste tissue paper from sports shoe packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`

###### Waste paperboard shoe boxes (`waste_paperboard_shoebox_output`)

This waste output records only Waste paperboard shoe boxes from sports shoe packaging at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Waste paperboard from sports shoe boxes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`

###### Waste corrugated cardboard (`waste_corrugated_cardboard_output`)

This waste output records only Waste corrugated cardboard from sports shoe packaging at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Waste corrugated cardboard from sports shoe packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`

###### Waste low-density polyethylene bags (`waste_ldpe_bag_output`)

This waste output records only Waste low-density polyethylene bags from sports shoe packaging at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Waste low-density polyethylene film from sports shoe bags
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`

###### Waste paper packaging labels (`waste_paper_label_output`)

This waste output records only Waste paper labels from sports shoe packaging at the final inspection and packaging boundary; it is not combined with any other exchange.

- Selected flow: Waste paper from sports shoe packaging labels
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste mass recorded separately by material identity and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `allocation_avoidance` | Shared foreground operations | Prefer product subdivision, product-specific BOMs, batch records, separate meters, and direct waste weighing before any allocation is applied. | `eu-pef-2021`; `af-pefcr-2025` |
| `allocation_shared_equipment` | Shared cutting, stitching, molding, lasting, bonding, finishing, and packaging equipment | When direct measurement is unavailable, allocate with a documented causal driver such as machine time multiplied by measured demand, processed component mass, mold cycles, pairs processed, or packed units. | `eu-pef-2021` |
| `allocation_energy_carriers` | Shared electricity, steam, hot water, natural gas, LPG, and refrigeration | Allocate each carrier separately using its own meter and causal driver; never allocate all utilities through one undifferentiated energy total. | `eu-pef-2021` |
| `allocation_scrap` | Material scrap transferred for recycling | First apply product subdivision and measured scrap; when scrap receives a credit or bears further burdens, disclose the adopted recycling model and do not treat disposal as a co-product. | `af-pefcr-2025`; `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_cutting` | `component_cutting` | Product-specific sheet and roll materials, cutting electricity, component output, and material-specific offcuts | BOM, purchase, issue, return, scale, machine, meter, and waste records | SKU; material identity; supplier; issued and returned mass; output mass; electricity; each offcut mass; reject; stock change | Calibrated scales and process meter reconciled to the product-specific BOM and cutting plan | kg; kWh | Per production lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included cutting and preparation equipment | Sum each material and waste separately by SKU, reconcile mass, then normalize to cut component output | Approved BOM, cutting plan, purchase and issue records, scale and meter calibration, and mass-balance sign-off |
| `cp_upper_stitching` | `upper_stitching` | Cut component set, thread, laces, eyelets, electricity, stitched upper, thread waste, and rejects | BOM, count, issue, return, machine, meter, scale, and inspection records | component mass; thread issue and return; lace and eyelet count and unit mass; electricity; upper output; thread waste; rejects | Component transfer record, count-to-mass measurement, calibrated scales, and equipment meter | kg; item; kWh | Per production lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included stitching and upper-subassembly equipment | Calculate count-to-mass components, sum atomic flows, reconcile upper mass, then normalize to stitched upper output | BOM, component specification, meter record, inspection report, and mass-balance sign-off |
| `cp_sole_molding` | `sole_molding` | Each polymer or rubber compound, electricity, steam, hot water, fuel, R-134a, sole components, material-specific scrap, and direct emissions | Recipe, purchase, issue, return, mold-cycle, meter, fuel, chiller-service, scale, and waste records | compound identity and mass; cycles; electricity; steam; hot water; natural gas; LPG; R-134a charge, make-up and recovery; component outputs; each scrap; carbon factor | Weighed compound dosing, calibrated utility meters, mold-cycle logs, chiller balance, and waste weighing | kg; kWh; MJ | Per molding lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included sole molding, heating, cooling, and trimming equipment | Sum by compound and component route, calculate refrigerant and fuel emissions separately, reconcile mass, then normalize to accepted sole-component output | Recipe, supplier specification, meters, fuel invoices, refrigerant service logs, scale calibration, and mass-balance sign-off |
| `cp_lasting_bonding` | `lasting_bonding_finishing` | Upper and sole components, sockliner, each adhesive or chemical, electricity, steam, hot water, fuels, finished shoe, residues, rejects, VOCs, and combustion CO2 | BOM, issue, return, recipe, count, meter, fuel, solvent, scale, inspection, and waste records | each component; adhesive dispersion; resin; ethyl acetate; primer; acetone; electricity; steam; hot water; natural gas; LPG; output; residues; rejects; recovered solvent; stock; carbon factor | Product-specific BOM and recipe, calibrated meters and scales, solvent balance, and inspection record | kg; item; kWh; MJ | Per assembly lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included lasting, bonding, activation, finishing, and inspection equipment | Sum each exchange, calculate count-to-mass components and solvent or fuel emissions separately, reconcile mass, then normalize to finished shoe output | Approved BOM and recipe, SDS, supplier assays, meters, fuel invoices, solvent recovery, waste manifests, and inspection sign-off |
| `cp_final_packaging` | `final_packaging` | Finished shoes, tissue, shoe box, carton, LDPE bag, paper label, electricity, reference output, and each packaging waste | Packaging specification, purchase, issue, return, count, scale, meter, dispatch, and waste records | net product mass; pairs; shoe count; size; tissue mass; box, carton and label counts and unit masses; LDPE issue and return; electricity; each waste | Calibrated product scale, count-to-mass measurement, stock records, and packaging-equipment meter | kg; item; kWh | Per packed lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included final-inspection and packaging equipment | Sum each packaging exchange separately, exclude removable packaging from net product mass, and normalize to exactly 1 kg reference product | Packaging specification, purchase and issue records, scale and meter calibration, dispatch record, and waste reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_bom_mass_balance` | Each manufacturing process | Reconcile opening stock plus issued material with returned stock, conforming output, each material-specific waste, rejects, and closing stock; investigate rather than invent unexplained differences. | Product-specific BOM, issue and return, output, waste, reject, and stock records | Signed mass balance by process and SKU | `af-pefcr-2025` |
| `calc_count_to_mass` | Laces, eyelets, sole components, sockliners, boxes, cartons, and labels | Component mass equals the product-specific count multiplied by measured or supplier-declared unit mass. | Count and unit mass | kg of one component or packaging item | `af-pefcr-2025` |
| `calc_shared_energy` | Shared manufacturing utilities | Allocate electricity, steam, hot water, natural gas, and LPG separately using carrier-specific meters and causal drivers. | Meter total; equipment demand or thermal data; operating time or cycles; process output | kWh or MJ assigned to one process | `eu-pef-2021` |
| `calc_refrigerant_emission` | R-134a sole-molding chiller | R-134a emitted equals opening charge plus make-up minus closing charge minus recovered refrigerant, adjusted only for documented transfers. | Opening and closing charge; make-up; recovery; transfers | kg R-134a to air |  |
| `calc_solvent_emission` | Ethyl acetate or acetone | Calculate each solvent independently as input plus opening stock minus recovery, amount retained in product and wastes, closing stock, and documented transfers; do not combine VOC species. | Solvent-specific purchase, issue, return, recovery, waste analysis, and stock | kg of one solvent emitted to air | `eu-pef-2021` |
| `calc_combustion_co2` | Natural gas or LPG | Calculate fossil CO2 separately for each fuel from measured lower-heating-value energy and a documented site or supplier carbon factor. | Fuel-specific energy and carbon factor | kg fossil CO2 to air by fuel and process |  |
| `calc_reference_normalization` | Complete foreground inventory | Divide every included exchange by net conforming sports-shoe mass, excluding removable packaging, so the reference output equals exactly 1 kg. | Included exchange totals and net reference-product mass | Exchange amount per 1 kg reference product | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Record intended sport, sizing system and range, pairs and shoes per kg, colourway, upper, lining, midsole, outsole, sockliner, closure, bonding system, grade, and packaging. | Approved product specification, BOM, inspection, and dispatch records |
| `dq_bom_specificity` | Materials and components | Use the BOM for the exact SKU or colourway; retain supplier, composition, unit mass, recycled content when claimed, issue, return, and loss evidence for every material and component. | Approved BOM, supplier specification, purchase, issue, and return records |
| `dq_chemical_identity` | Adhesives, primer, and solvents | Preserve commercial product, active substance or resin, carrier solvent, concentration, supplier, lot, SDS, and process use; prohibit a generic chemicals row. | Purchase document, SDS, supplier assay, and signed recipe |
| `dq_metering` | Water and energy carriers | Use calibrated process meters where available and disclose carrier-specific allocation from shared meters with the driver and uncertainty. | Calibration certificate, meter log, invoice, and allocation worksheet |
| `dq_temporal` | Foreground activity data | Cover a representative continuous 12-month period or the complete production campaign and disclose shutdowns, atypical lots, and data gaps. | Production calendar and completeness review |
| `dq_completeness` | Inventory | Demonstrate coverage of product-specific BOM materials, components, each adhesive or chemical, electricity by stage, steam, hot water, each fuel, each refrigerant, packaging, material-specific wastes, and each direct emission without aggregate selector flows. | Signed completeness checklist reconciled to BOM, purchasing, utility, production, maintenance, solvent, and waste ledgers |
| `dq_transparency` | Dataset | Disclose exclusions, supplier-made components, shared-meter allocation, missing foreground records, calculations, waste destinations, direct-emission balances, and limitations. | Dataset report and reviewer checklist |

## 9. Validation Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Reject a dataset unless the output is exactly 1 kg, uses flow `3fb395b7-1901-4a81-8b89-b8300bd9134e`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and all required qualifiers are declared. | `un-cpc-v3-2025` |
| `validate_scope` | Product identity | Reject footwear outside CPC 29420 or without a declared tennis, basketball, gym, training, or similar athletic function. | `un-cpc-v3-2025` |
| `validate_atomic_inventory` | Inventory rows | Reject any row combining materials, components, chemicals, energy carriers, refrigerants, packaging, wastes, or emissions; every selected flow shall denote one specific exchange. | `eu-pef-2021` |
| `validate_bom_loss` | Materials and components | Require product-specific BOM mass, returned stock, conforming output, material-specific loss, rejects, and stock change to reconcile for every included process. | `af-pefcr-2025` |
| `validate_adhesives_and_solvents` | Bonding | Require waterborne polyurethane dispersion, polyurethane resin, ethyl acetate, chlorinated polyolefin primer, acetone, residues, and solvent emissions as separate rows when used; add a separate atomic row for any other actual formulation or substance. | `af-pefcr-2025`; `eu-pef-2021` |
| `validate_energy_routes` | Manufacturing energy | Require stage-specific electricity and separate purchased steam, supplied hot water, natural gas, and LPG rows whenever used; prohibit a combined heat or fuel exchange. | `eu-pef-2021` |
| `validate_refrigerants` | Cooling systems | Require separate product-input and air-emission rows for every refrigerant actually present; R-134a rows may be not applicable only with equipment and service-log evidence. | `eu-pef-2021` |
| `validate_direct_emissions` | Air emissions | Require ethyl acetate, acetone, R-134a, natural-gas fossil CO2, and LPG fossil CO2 as separate species and process rows when applicable. | `eu-pef-2021` |
| `validate_packaging` | Packaging | Require tissue paper, shoe box, shipping carton, LDPE bag, paper label, and their material-specific wastes as separate rows when used, and exclude removable packaging from net reference mass. | `af-pefcr-2025` |
| `validate_supplier_components` | Purchased components | Require a matching supplier dataset for each purchased upper, midsole, outsole, sockliner, or molded component and omit only the exact on-site operation covered upstream. | `af-pefcr-2025`; `eu-pef-2021` |
| `validate_no_reasoned_ranges` | Amounts | Reject undocumented default quantities and AI-generated numeric ranges; use foreground records or documented calculations. | `eu-pef-2021` |
| `validate_sources_and_protocols` | Evidence links | Require every source id and collection protocol referenced by an inventory row or rule to resolve to a declared source or protocol. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for CPC 29420 sports shoes |
| downstream_use | Secondary dataset or background dataset for product systems requiring a matching finished sports-shoe input |
| allowed_use | Products matching intended sport, size range, pairs per kg, upper, midsole, outsole, sockliner, closure, bonding system, colourway, quality grade, plant technology, geography, period, and packaging |
| excluded_use | Footwear outside CPC 29420, safety or protective footwear, ski boots, skates, materially different BOMs or production routes, or products with undisclosed reference qualifiers |
| required_metadata | PCR id; CPC code; reference-flow UUID; intended sport; sizing system and range; pair and shoe count; net mass; product-specific BOM; supplier-made components; process inclusion; adhesives and solvents; energy routes; refrigerants; colourway; grade; packaging; plant; geography; period; allocation; waste destinations |
| required_quality_disclosure | Foreground coverage; missing or calculated records; BOM version; scale and meter calibration; chemical identity; solvent and refrigerant balances; mass reconciliation; shared-utility allocation; upstream dataset identities; uncertainty and limitations |
| update_trigger | Reassess after a material change in SKU or BOM, supplier, material composition, component construction, molding route, adhesive or solvent, equipment, refrigerant, energy mix, packaging, waste destination, allocation, geography, or production performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 official classification entry and CPC_Ver_3.0_Structure_30Jun2025.csv, https://unstats.un.org/unsd/classifications/Econ/CPC | CPC 29420 scope and title |
| `eu-pef-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific BOM, company-specific manufacturing data, LCI completeness, allocation, transparency, and data quality |
| `af-pefcr-2025` | Official guidance (`official_guidance`) | Apparel and Footwear Product Environmental Footprint Category Rules v3.1, 29 April 2025, https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf | Footwear BOM, manufacturing loss, packaging, and process-data structure |
