---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-leather-other-than-sports-footwear-footwear-incorporating-a-pro-ef9e7096
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other leather-upper footwear

## 1. Scope and Applicability

This PCR covers factory-gate foreground data production for whole, finished footwear whose upper is leather and that falls within CPC 3.0 code 29330. The product must protect or cover the foot and have an applied sole. It may be a shoe, boot, loafer, or comparable non-sports leather-upper footwear article.

Sports footwear, footwear incorporating a protective metal toe-cap, miscellaneous special footwear, footwear whose upper is not leather, toy footwear, single-use footwear, socks with an applied sole, electronic footwear, leather sheets, shoe uppers, soles, insoles, and other footwear parts are excluded. Upstream production of finished leather and purchased components is linked through separate datasets. Distribution, consumer use, repair, and end-of-life are outside this foreground production boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-leather-other-than-sports-footwear-footwear-incorporating-a-pro-ef9e7096 |
| classification_refs | CPC 3.0: 29330, exact |
| covered_products | Whole finished non-sports footwear with leather uppers, excluding protective metal toe-cap and miscellaneous special footwear |
| excluded_products | Sports footwear; protective metal toe-cap footwear; miscellaneous special footwear; non-leather-upper footwear; electronic, toy, or single-use footwear; socks with applied soles; footwear components and leather intermediates |
| representative_product | A finished consumer-market leather-upper shoe or boot with an applied sole |
| production_route | Receipt of finished leather and components; cutting and component preparation; upper stitching; lasting, sole attachment, final assembly and finishing; packaging |
| market_state | Finished whole footwear at the assembly-site gate; Tiangong consumer mix; the dataset declares model, size, counting convention, completion state, geography, and reference period |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one whole item of other leather-upper footwear that protects or covers the foot and has an applied sole |
| How much | 1 Item(s), with the dataset declaring whether the counted market unit is one physical shoe or one marketed pair |
| How well | Finished, saleable, and conforming to the declared model, size, leather-upper specification, outsole specification, and applicable durability requirements |
| How long or cycle | One factory-gate production cycle; distribution, use duration, repair, and end-of-life are not represented by this production reference flow |
| reference_flow_link | `final_other_leather_shoes` |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) |
| Reference product flow | Other Leather Shoes `985ca5fa-699a-411e-b304-0398fc7b4865` |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Number of items unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | counted market unit and number of physical shoes; product model and footwear type; size system and reference size; upper leather species and finish; lining material; outsole and midsole materials; assembly and finishing route; finished saleable condition; production geography; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Normalize every exchange to 1 Item(s) of conforming output and preserve the declared Tiangong counting convention. |
| `pair_record_conversion` | production or sales records reported per pair | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Retain pair count and physical-shoe count. Convert a pair record to Item(s) only after documenting whether one Tiangong Item(s) means one physical shoe or one marketed pair; do not assume the factor. |
| `material_mass_basis` | incorporated materials, chemicals, wastes, and direct emissions | Mass | kg | Record net incorporated mass, gross input mass, and separately identified loss or waste mass without netting one material against another. |
| `energy_carrier_basis` | electricity, steam, purchased heat, and fuel | Energy or net calorific value | kWh or MJ | Preserve each carrier as its own exchange, record the metered or invoiced unit, and document every conversion factor to the reported unit. |
| `water_basis` | process water and wastewater | Volume | m3 | Record supplied water and discharged wastewater separately; do not infer one from the other without a documented water balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished upper leather, finished lining material, outsole or sole material, and other purchased components are received at the first controlled footwear-manufacturing operation. |
| starting_condition_role | The declared starting condition separates footwear foreground manufacturing from upstream leather, polymer, textile, metal, chemical, and packaging production. |
| product_classification_scope | Whole finished leather-upper footwear within CPC 3.0 code 29330 only. |
| recursive_input_rule | A same-category whole footwear input remains a separate product input and must not be absorbed into the reference output; disclose its prior production stage and upstream dataset. |
| upstream_dataset_requirement | Each purchased material, component, utility, fuel, and treatment service must link to a geographically and technologically representative upstream dataset or carry a documented data gap. |
| disclosure | Declare supplied component state, outsourced operations, assembly and finishing technologies, upper leather species, sole construction, utility supply, solvent controls, waste destinations, output counting convention, geography, and reference period. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | controlled footwear manufacturing | Include cutting or forming, component preparation, upper stitching, lasting and sole attachment, final assembly, finishing when performed, packaging, directly attributable utilities, direct emissions, wastewater, rejects, and separately identified wastes. | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `boundary_purchased_inputs` | purchased leather, components, chemicals, packaging, utilities, fuels, and services | Record each purchased input as one atomic exchange and link its upstream production; do not bring upstream leather manufacture into the footwear foreground unless the same reporting organization controls and separately documents that process. | `rossi-et-al-2021-leather-shoe-lca`; `navarro-et-al-2020-leather-lca` |
| `boundary_downstream_exclusion` | distribution, use, repair, and end-of-life | Exclude downstream stages from this factory-gate production dataset and state that a downstream lifecycle model must add them when the study goal requires cradle-to-grave coverage. | `ec-pefcr-apparel-footwear-2025`; `iso-14044-2006` |
| `boundary_no_hidden_cutoff` | actual bill of materials and process records | Reconcile all actual incorporated materials, manufacturing losses, utilities, fuels, refrigerants, chemicals, packaging components, wastes, wastewater, and direct emissions; an unlisted actual exchange must be added as its own atomic row rather than hidden in a collection label. | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_cutting_preparation` | Component cutting and preparation | required | Always included for the controlled preparation of upper, lining, sole, and midsole components; purchased pre-cut components remain visible inputs and the avoided cutting step is disclosed. | foreground component preparation | Per 1 Item(s) conforming packaged output |
| `upper_stitching` | Upper stitching and subassembly | required | Always included; outsourced stitching is represented by a service-linked upstream dataset and the stitched upper remains an input to final assembly. | foreground upper production | Per 1 Item(s) conforming packaged output |
| `final_assembly_finishing` | Lasting, sole attachment, final assembly and finishing | required | Always includes assembly; each finishing operation and chemical is included only when used for the declared product. | foreground final manufacture | Per 1 Item(s) conforming packaged output |
| `packaging` | Product packaging | required | Include packaging supplied with or used to deliver the reference product from the assembly-site gate. | foreground packaging | Per 1 Item(s) conforming packaged output |

### Process: Component cutting and preparation (`component_cutting_preparation`)

#### Inputs

##### Product flows

###### Leather for footwear uppers (`upper_leather_input`)

Record the finished leather entering upper cutting. Declare animal species, tannage, finish, thickness, supplier, and upstream dataset.

- Selected flow: Finished leather for footwear uppers
- Flow property / unit: Mass / kg
- Amount rule: measured gross input mass from lot issue and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Leather for footwear lining (`lining_leather_input`)

Record finished lining leather only when used. Keep it separate from upper leather.

- Selected flow: Finished leather for footwear lining
- Flow property / unit: Mass / kg
- Amount rule: measured gross input mass from lot issue and return records; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Vulcanized rubber outsole (`rubber_outsole_input`)

Record the vulcanized rubber outsole or outsole blank when this construction is used.

- Selected flow: Vulcanized rubber outsole
- Flow property / unit: Mass / kg
- Amount rule: measured received and issued mass; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Polyurethane outsole (`polyurethane_outsole_input`)

Record the polyurethane outsole or outsole compound when this construction is used.

- Selected flow: Polyurethane outsole
- Flow property / unit: Mass / kg
- Amount rule: measured received and issued mass; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Thermoplastic polyurethane outsole (`tpu_outsole_input`)

Record the thermoplastic polyurethane outsole or compound when this construction is used.

- Selected flow: Thermoplastic polyurethane outsole
- Flow property / unit: Mass / kg
- Amount rule: measured received and issued mass; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Ethylene-vinyl acetate foam midsole (`eva_midsole_input`)

Record the ethylene-vinyl acetate foam midsole or sheet when used.

- Selected flow: Ethylene-vinyl acetate foam midsole
- Flow property / unit: Mass / kg
- Amount rule: measured received and issued mass; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Electricity for cutting and preparation (`cutting_electricity`)

Record metered grid electricity attributable to cutting, skiving, forming, and component preparation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated meter total for the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

#### Outputs

##### Product flows

###### Cut leather upper components (`cut_upper_components_output`)

Record the net mass of cut leather upper components transferred to stitching.

- Selected flow: Cut leather upper components
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to leather input and cutting offcuts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_yield_records`
- Sources:

##### Waste flows

###### Leather cutting offcuts (`leather_cutting_offcuts`)

Record leather offcuts leaving cutting as one waste stream, with destination and recycling status.

- Selected flow: Leather cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: weighed leather offcuts by product lot or reconciled production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Vulcanized rubber cutting offcuts (`rubber_cutting_offcuts`)

Record vulcanized rubber offcuts separately from other sole-material wastes.

- Selected flow: Vulcanized rubber cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: weighed waste; not applicable when no vulcanized rubber is cut
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Polyurethane outsole scrap (`polyurethane_cutting_scrap`)

Record polyurethane outsole scrap separately from other polymer wastes.

- Selected flow: Polyurethane outsole scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed waste; not applicable when no polyurethane outsole is prepared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Thermoplastic polyurethane outsole scrap (`tpu_cutting_scrap`)

Record thermoplastic polyurethane outsole scrap separately from other polymer wastes.

- Selected flow: Thermoplastic polyurethane outsole scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed waste; not applicable when no thermoplastic polyurethane outsole is prepared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Ethylene-vinyl acetate foam offcuts (`eva_cutting_offcuts`)

Record ethylene-vinyl acetate foam offcuts separately from other polymer wastes.

- Selected flow: Ethylene-vinyl acetate foam offcuts
- Flow property / unit: Mass / kg
- Amount rule: weighed waste; not applicable when no ethylene-vinyl acetate foam is prepared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

### Process: Upper stitching and subassembly (`upper_stitching`)

#### Inputs

##### Product flows

###### Cut leather upper components (`cut_upper_components_input`)

Record the cut leather upper components received from preparation.

- Selected flow: Cut leather upper components
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_yield_records`
- Sources:

###### Polyester sewing thread (`polyester_thread_input`)

Record polyester sewing thread used in the upper; other actual thread materials require separate atomic cards.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: issued mass less documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Electricity for upper stitching (`upper_stitching_electricity`)

Record metered grid electricity attributable to stitching and upper subassembly.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated meter total for the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

#### Outputs

##### Product flows

###### Stitched leather upper assembly (`stitched_upper_output`)

Record the stitched leather upper assembly transferred to final assembly.

- Selected flow: Stitched leather upper assembly
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass and accepted upper count
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_yield_records`
- Sources:

##### Waste flows

###### Polyester thread trimmings (`thread_trimmings`)

Record polyester thread trimmings separately from leather offcuts and rejected uppers.

- Selected flow: Polyester thread trimmings
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled thread trimmings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

### Process: Lasting, sole attachment, final assembly and finishing (`final_assembly_finishing`)

#### Inputs

##### Product flows

###### Stitched leather upper assembly (`stitched_upper_input`)

Record the stitched leather upper assembly entering lasting and final assembly.

- Selected flow: Stitched leather upper assembly
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass and accepted upper count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_yield_records`
- Sources:

###### Cellulose insole board (`cellulose_insole_board_input`)

Record cellulose insole board incorporated into the declared product.

- Selected flow: Cellulose insole board
- Flow property / unit: Mass / kg
- Amount rule: issued mass less documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Polyester shoelace (`polyester_shoelace_input`)

Record polyester shoelaces when fitted; other lace materials require separate atomic cards.

- Selected flow: Polyester shoelace
- Flow property / unit: Mass / kg
- Amount rule: issued quantity converted to mass using product-specific component records; not applicable for laceless models
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Steel footwear eyelet (`steel_eyelet_input`)

Record steel eyelets when fitted; other eyelet materials require separate atomic cards.

- Selected flow: Steel footwear eyelet
- Flow property / unit: Mass / kg
- Amount rule: issued count converted to mass using measured component mass; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Solvent-borne polyurethane footwear adhesive (`polyurethane_adhesive_input`)

Record solvent-borne polyurethane footwear adhesive when used and retain its formulation and safety data sheet.

- Selected flow: Solvent-borne polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: issued mass less returns and separately weighed residue; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources:

###### Water-borne polyurethane footwear adhesive (`waterborne_polyurethane_adhesive_input`)

Record water-borne polyurethane footwear adhesive separately from solvent-borne adhesive.

- Selected flow: Water-borne polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: issued mass less returns and separately weighed residue; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources:

###### Water-borne acrylic footwear finish (`waterborne_acrylic_finish_input`)

Record water-borne acrylic finish when applied to the assembled footwear.

- Selected flow: Water-borne acrylic footwear finish
- Flow property / unit: Mass / kg
- Amount rule: issued mass less returns and separately weighed residue; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources:

###### Process water (`assembly_process_water`)

Record process water used for cleaning or water-based finishing; do not combine it with wastewater.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: submetered or reconciled supplied volume; not applicable when no process water is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Electricity for final assembly and finishing (`assembly_electricity`)

Record grid electricity attributable to lasting, sole attachment, assembly, finishing, ventilation, and directly controlled conditioning.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated meter total for the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Purchased steam (`assembly_steam`)

Record purchased steam as its own carrier when supplied to the process.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy or mass converted with documented pressure and enthalpy; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Purchased heat (`assembly_purchased_heat`)

Record purchased heat separately from steam and fuels.

- Selected flow: Purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased heat; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Natural gas (`assembly_natural_gas`)

Record natural gas combusted on site separately from electricity, steam, and purchased heat.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or invoiced volume converted with supplier net calorific value; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### HFC-134a refrigerant (`assembly_hfc134a_input`)

Record HFC-134a charged to directly attributable cooling equipment; other refrigerants require separate cards.

- Selected flow: HFC-134a refrigerant
- Flow property / unit: Mass / kg
- Amount rule: service-record charge attributable to the declared process; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

#### Outputs

##### Product flows

###### Finished footwear before packaging (`finished_footwear_before_packaging`)

Record conforming whole other leather-upper footwear transferred to packaging.

- Selected flow: Finished other leather-upper footwear before packaging
- Flow property / unit: Number of items / Item(s)
- Amount rule: accepted output count before packaging, using the declared Item(s) convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_records`
- Sources:

##### Waste flows

###### Polyurethane adhesive residue (`adhesive_residue_waste`)

Record unused or cured polyurethane adhesive residue transferred as waste.

- Selected flow: Polyurethane adhesive residue
- Flow property / unit: Mass / kg
- Amount rule: weighed residue from containers, mixing, and application; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Rejected whole footwear (`rejected_footwear_waste`)

Record rejected whole leather-upper footwear separately from component offcuts.

- Selected flow: Rejected other leather-upper footwear
- Flow property / unit: Number of items / Item(s)
- Amount rule: rejected count using the same Item(s) convention as conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Footwear assembly wastewater (`assembly_wastewater`)

Record wastewater discharged from controlled cleaning or water-based finishing as one separately measured waste stream.

- Selected flow: Footwear assembly wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered or balance-derived discharge volume; not applicable when no process wastewater is generated
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater_records`
- Sources:

##### Elementary flows

###### Acetone emitted to air (`acetone_to_air`)

Record acetone released to air from adhesives or finishing when acetone is present; do not report total VOC in place of this compound.

- Selected flow: Acetone to air
- Flow property / unit: Mass / kg
- Amount rule: compound-specific measured release or calculation from formulation, use, capture, transfer, and retention records; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Ethyl acetate emitted to air (`ethyl_acetate_to_air`)

Record ethyl acetate released to air when present; keep it separate from acetone and toluene.

- Selected flow: Ethyl acetate to air
- Flow property / unit: Mass / kg
- Amount rule: compound-specific measured release or calculation from formulation, use, capture, transfer, and retention records; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Toluene emitted to air (`toluene_to_air`)

Record toluene released to air when present; keep it separate from acetone and ethyl acetate.

- Selected flow: Toluene to air
- Flow property / unit: Mass / kg
- Amount rule: compound-specific measured release or calculation from formulation, use, capture, transfer, and retention records; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-ecolabel-footwear-2016`

###### HFC-134a emitted to air (`hfc134a_to_air`)

Record HFC-134a leakage to air from directly attributable cooling equipment; other refrigerants require separate cards.

- Selected flow: HFC-134a to air
- Flow property / unit: Mass / kg
- Amount rule: charge minus recovered mass and documented stock change; not applicable when HFC-134a is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources:

### Process: Product packaging (`packaging`)

#### Inputs

##### Product flows

###### Finished footwear before packaging (`finished_footwear_packaging_input`)

Record the conforming whole footwear received from final assembly and finishing.

- Selected flow: Finished other leather-upper footwear before packaging
- Flow property / unit: Number of items / Item(s)
- Amount rule: accepted transfer count using the declared Item(s) convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_records`
- Sources:

###### Paperboard shoe box (`paperboard_shoebox_input`)

Record the paperboard shoe box supplied with the reference product.

- Selected flow: Paperboard shoe box
- Flow property / unit: Mass / kg
- Amount rule: issued count converted with measured empty-box mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Tissue paper (`tissue_paper_input`)

Record tissue paper used inside the shoe box.

- Selected flow: Tissue paper
- Flow property / unit: Mass / kg
- Amount rule: issued mass or count converted with measured sheet mass; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Corrugated board shipping carton (`corrugated_shipping_carton_input`)

Record the allocated corrugated board shipping carton mass for outbound grouping.

- Selected flow: Corrugated board shipping carton
- Flow property / unit: Mass / kg
- Amount rule: carton mass divided by the documented number of reference items packed in that carton
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Low-density polyethylene packaging film (`ldpe_film_input`)

Record low-density polyethylene film used in packaging separately from paper materials.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: issued mass less documented returns; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Electricity for packaging (`packaging_electricity`)

Record grid electricity attributable to packaging equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated meter total for the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

#### Outputs

##### Product flows

###### Packaged other leather-upper footwear (`final_other_leather_shoes`)

This is the whole packaged reference product and must not be replaced by a shoe part, leather intermediate, use service, or a narrower footwear type.

- Selected flow: Other Leather Shoes `985ca5fa-699a-411e-b304-0398fc7b4865`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: exactly 1 Item(s) of conforming packaged output after normalization, using the declared counting convention
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 Item(s) reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output_records`
- Sources:

##### Waste flows

###### Waste paperboard shoe box (`waste_paperboard_shoebox`)

Record damaged or rejected paperboard shoe boxes leaving packaging as waste.

- Selected flow: Waste paperboard shoe box
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected boxes or rejected count converted with measured box mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Waste low-density polyethylene film (`waste_ldpe_film`)

Record rejected low-density polyethylene film separately from paperboard waste.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: weighed waste film; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 Item(s) conforming packaged output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | product-specific lines, batches, and meters | Subdivide processes and use product-specific records before allocating shared burdens. | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |
| `allocation_cutting_and_forming` | shared cutting, forming, and sole-preparation records | Allocate residual shared burdens by the measured mass of material processed when subdivision is unavailable; preserve product-specific offcut mass and do not use final-product revenue. | `ec-pefcr-apparel-footwear-2025` |
| `allocation_stitching_and_assembly` | shared stitching, assembly, finishing, and packaging records | Allocate residual shared burdens by accepted Item(s) output for equivalent products; use documented machine time when products require materially different processing and disclose the selected physical driver. | `ec-pefcr-apparel-footwear-2025`; `iso-14044-2006` |
| `allocation_waste_and_recovered_material` | offcuts, rejects, residues, and recovered material | Keep every material-specific waste or recovered-material output visible with its measured mass and destination. Do not net sale proceeds, recycling credits, or avoided burdens into foreground inputs; downstream modelling must declare any substitution or end-of-life allocation. | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |
| `allocation_upstream_leather` | purchased finished leather datasets | Use the allocation already documented by the selected upstream leather dataset and disclose its animal-system and co-product treatment; do not invent or overwrite upstream allocation inside the footwear process. | `navarro-et-al-2020-leather-lca`; `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_material_records` | `component_cutting_preparation`; `upper_stitching`; `final_assembly_finishing` | incorporated material or component | BOM, purchase, issue, return, and stock records | material identity; supplier; lot; issued quantity; returned quantity; stock change; component count; measured unit mass | reconcile product BOM to stores and production records | kg and item count | each lot, aggregated monthly | full declared production period | all sites and contractors producing the declared item | gross issues minus returns and stock increase, normalized to conforming output | approved BOM; invoices; issue slips; scale calibration; supplier specification |
| `cp_component_yield_records` | `component_cutting_preparation`; `upper_stitching`; `final_assembly_finishing` | intermediate transfer and yield | batch transfer and acceptance records | input mass; transferred mass; accepted count; rejected count; work-in-progress change | reconcile each component stage by batch or production period | kg and item count | each batch, aggregated monthly | full declared production period | every controlled or outsourced component stage | transferred output plus specific waste and stock change reconciles to input | signed transfer records; batch traveller; acceptance record |
| `cp_utility_records` | `component_cutting_preparation`; `upper_stitching`; `final_assembly_finishing`; `packaging` | electricity, steam, purchased heat, fuel, or water | meters, invoices, and operating logs | carrier identity; meter start and end; invoice quantity; equipment hours; production count; conversion factor | read dedicated meters where available; otherwise allocate a reconciled shared meter using the applicable allocation rule | kWh, MJ, m3 | meter interval or invoice period, aggregated monthly | full declared production period | all included production and directly attributable support areas | carrier-specific total normalized to conforming output; no carrier netting | meter calibration; invoices; meter map; conversion record |
| `cp_chemical_records` | `final_assembly_finishing` | adhesive or finish | formulation, SDS, issue, return, and residue records | product name; supplier; formulation; density; issued mass; returned mass; residue mass | reconcile each chemical product separately | kg | each batch, aggregated monthly | full declared production period | all assembly and finishing sites | issued mass minus returns, with residue and emissions separately reported | current SDS; formulation statement; calibrated scale; issue record |
| `cp_refrigerant_records` | `final_assembly_finishing` | HFC-134a charge and release | equipment inventory and service records | equipment id; refrigerant identity; opening stock; charge; recovery; closing stock | equipment-level refrigerant balance | kg | each service event and annual reconciliation | full declared production period | directly attributable cooling equipment | charge minus recovery and stock increase equals calculated release, with discrepancy disclosed | service certificate; cylinder log; equipment register |
| `cp_waste_records` | all included processes | material-specific waste | weigh tickets and destination records | waste identity; process; mass or count; container tare; destination; treatment route | weigh each segregated stream or use documented count-to-mass conversion | kg or Item(s) | each shipment, aggregated monthly | full declared production period | all included sites and contractors | sum by row_id and destination, normalized to conforming output | calibrated scale; weigh ticket; waste transfer note |
| `cp_water_wastewater_records` | `final_assembly_finishing` | process water and wastewater | water meters, discharge meters, and treatment records | supplied volume; discharged volume; stock or evaporation adjustment; destination | separate supply and discharge measurements with a documented water balance | m3 | meter interval, aggregated monthly | full declared production period | assembly and finishing areas using water | normalize each stream separately to conforming output | meter calibration; discharge record; treatment invoice |
| `cp_direct_emission_records` | `final_assembly_finishing` | compound-specific air emission | SDS, formulation, use, capture, recovery, transfer, and monitoring records | compound identity; concentration; product use; captured mass; transferred mass; retained mass; measured exhaust concentration and flow when available | calculate or measure each emitted compound separately | kg | each formulation and monitoring period, aggregated monthly | full declared production period | all adhesive, cleaning, and finishing emission points | compound input minus captured, transferred, retained, and stock-change mass; reconcile with monitoring | SDS; formulation; monitoring report; capture and waste records |
| `cp_packaging_records` | `packaging` | packaging component | packaging specification, issue, and rejection records | packaging identity; component count; measured empty mass; items per carton; issued quantity; rejected quantity | component-specific count and mass reconciliation | kg and item count | each packaging lot, aggregated monthly | full declared production period | all packaging sites | net issued packaging normalized to conforming packaged output | packaging specification; scale record; issue and rejection log |
| `cp_product_output_records` | `final_assembly_finishing`; `packaging` | reference and intermediate footwear output | production, quality acceptance, and packaging records | accepted count; rejected count; physical-shoe count; marketed-pair count; Item(s) convention; model; size | reconcile assembly output, packaging input, and packaged output | Item(s) and physical-shoe count | each batch, aggregated monthly | full declared production period | all final assembly and packaging sites | accepted packaged output is the normalization denominator; discrepancies are investigated | production order; quality release; packaging record; counting-convention statement |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_item` | every inventory row | normalized amount = exchange quantity in the declared period / conforming packaged output in Item(s) for the same period | exchange quantity; conforming packaged output; Item(s) convention | exchange amount per 1 Item(s) | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |
| `convert_pair_records` | records reported per marketed pair | retain pair count and physical-shoe count; convert to Item(s) only with a documented Tiangong counting convention and state the factor used | pair count; physical-shoe count; Item(s) convention | Item(s) count with auditable conversion | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `reconcile_bom_and_losses` | each material or packaging component | gross input = incorporated transfer + material-specific waste + return + closing stock minus opening stock, within documented measurement uncertainty | issues; returns; opening and closing stock; incorporated transfer; specific waste | reconciled material balance and disclosed discrepancy | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `calculate_compound_air_release` | acetone, ethyl acetate, and toluene | emitted compound = compound entering in products minus compound captured, recovered, transferred in waste or wastewater, retained in product, and stock increase; use measured exhaust results when more representative | formulation; chemical use; capture; recovery; waste transfer; retention; stock change; monitoring | compound-specific emission to air | `eu-ecolabel-footwear-2016` |
| `calculate_hfc134a_release` | HFC-134a refrigerant | release = charge plus opening stock minus recovery minus closing stock, with unexplained imbalance disclosed | charge; recovery; opening and closing stock | HFC-134a emitted to air | `iso-14044-2006` |
| `allocate_shared_records` | shared utilities and operations | apply allocation rules in section 7 only after subdivision and direct measurement are exhausted; retain the driver and denominator in the data package | shared total; product-specific driver; total driver | product-attributed exchange amount | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference output | Demonstrate whole other leather-upper footwear identity, CPC 29330 scope, official Tiangong UUID, finished condition, model, size, upper leather, sole construction, and Item(s) convention. | product specification; photographs or technical drawing; BOM; quality release; Tiangong identity record |
| `dq_bom_reconciliation` | materials and packaging | Reconcile the declared BOM to gross inputs, incorporated transfers, specific wastes, returns, and stock changes; add an atomic row for every actual material not already listed. | approved BOM; issue and stock records; component and waste mass balances |
| `dq_temporal_alignment` | all foreground records | Use one declared production period and align material, utility, emission, waste, and output denominators; disclose shutdowns, start-ups, trials, and outsourced periods. | period ledger; meter dates; production calendar; contractor statements |
| `dq_atomic_carriers_and_emissions` | utilities, fuels, refrigerants, wastes, and emissions | Keep electricity, steam, purchased heat, natural gas, HFC-134a, each waste stream, and each emitted compound as separate exchanges; do not report an energy-carrier, VOC, waste, or packaging collection placeholder. | exchange register; invoices; SDS; waste transfer notes; emission calculation workbook |
| `dq_geography_technology` | upstream links and foreground processes | Match upstream datasets and foreground records to the declared geography, leather and sole technology, electricity supply, assembly route, and finishing controls or disclose the mismatch. | supplier declarations; dataset metadata; site process map; utility contract |
| `dq_outsourced_operations` | contractors | Retain outsourced cutting, stitching, component manufacture, finishing, or packaging as an explicit service or product input with transport and upstream dataset; do not treat missing contractor data as zero. | purchase order; contractor process statement; transfer and transport records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm UUID `985ca5fa-699a-411e-b304-0398fc7b4865`, Product flow type, CPC 29330, English baseName Other Leather Shoes, Chinese baseName 其他皮革鞋, flow property UUID `01846770-4cfe-4a25-8ad9-919d8d378345`, unit-group UUID `5beb6eed-33a9-47b8-9ede-1dfe8f679159`, and Item(s) unit; reject shoe parts, leather intermediates, services, sports footwear, protective metal toe-cap footwear, and narrower product types. | `unsd-cpc-3-2025` |
| `validate_counting_convention` | reference amount and all item-count rows | Require an explicit statement of whether one Item(s) is one physical shoe or one marketed pair and verify every pair-to-item conversion; absence of that statement is non-conforming. | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `validate_process_coverage` | process map and inventory | Confirm cutting or purchased pre-cut disclosure, upper stitching, lasting and sole attachment, final assembly, applicable finishing, packaging, utilities, direct emissions, wastewater, and material-specific wastes are represented for every controlled or outsourced stage. | `ec-pefcr-apparel-footwear-2025`; `rossi-et-al-2021-leather-shoe-lca`; `eu-ecolabel-footwear-2016` |
| `validate_bom_mass_balance` | materials, components, and wastes | Reconcile each actual material and packaging component across input, incorporated output, offcut or reject, return, and stock change; unexplained imbalance must be reported and cannot be hidden by netting materials. | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `validate_atomic_exchanges` | all inventory rows | Reject a collection or selector as Selected flow. Every actual electricity, steam, heat, fuel, refrigerant, chemical, material, packaging component, waste stream, wastewater stream, and emitted compound must have its own card and unit. | `ec-pefcr-apparel-footwear-2025`; `iso-14044-2006` |
| `validate_source_and_period` | foreground evidence | Verify that source records, calibration evidence, temporal coverage, site scope, allocation driver, outsourced-operation treatment, and upstream dataset links support the normalized amount for the same declared production period. | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |
| `validate_no_case_derived_range` | quantitative ranges | Confirm that no empirical range is authored from a single plant, product, scenario, or paper; this PCR intentionally provides no quantity ranges because two independent boundary-compatible original sources were not established for any inventory amount. | `iso-14044-2006`; `rossi-et-al-2021-leather-shoe-lca` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` representing factory-gate production of packaged other leather-upper footwear |
| downstream_use | Link as a production-stage dataset in a product system; add distribution, use, repair, and end-of-life in a separate lifecycle model when required |
| allowed_use | Product-specific or technology-matched modelling where CPC scope, upper material, sole construction, Item(s) convention, geography, reference period, and system boundary are compatible |
| excluded_use | Shoe components, leather production, sports footwear, protective metal toe-cap footwear, miscellaneous special footwear, non-leather-upper footwear, footwear use services, or comparisons that ignore counting and quality differences |
| required_metadata | PCR id and version state; reference UUID and Item(s) convention; model and size; upper leather and sole construction; geography; reference period; process route; allocation; upstream links; data sources |
| required_quality_disclosure | BOM and loss reconciliation; primary-data coverage; meter and scale quality; contractor coverage; solvent and refrigerant treatment; waste destinations; data gaps; assumptions; no source-backed ranges available |
| update_trigger | Change in product construction, upper leather, sole material, adhesive or finish, assembly technology, energy supply, refrigerant, packaging, geography, contractor network, Item(s) convention, allocation, upstream dataset, or material foreground evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, CPC 29330. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-23) | Official classification title and exclusion boundary used for reference-flow validation |
| `ec-pefcr-apparel-footwear-2025` | Official guidance (`official_guidance`) | Technical Secretariat, Product Environmental Footprint Category Rules for Apparel and Footwear, Version 3.1, 29 April 2025. https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf (retrieved 2026-08-23) | Footwear unit-of-analysis context, BOM and loss collection, manufacturing process decomposition, allocation, packaging, data quality, and partial-life-cycle disclosure |
| `eu-ecolabel-footwear-2016` | Official guidance (`official_guidance`) | European Commission, Commission Decision (EU) 2016/1349 establishing EU Ecolabel criteria for footwear, consolidated text. https://eur-lex.europa.eu/eli/dec/2016/1349/2026-01-06/eng (retrieved 2026-08-23) | Whole-footwear and component definitions, assembly-site boundary, final product and BOM evidence, VOC and chemical verification, durability, and packaging |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including Amendments 1:2017 and 2:2020. https://www.iso.org/standard/38498.html (retrieved 2026-08-23) | Goal and scope, inventory, allocation, reporting, review, and lifecycle interpretation rules |
| `rossi-et-al-2021-leather-shoe-lca` | Literature (`literature`) | Rossi, M.; Papetti, A.; Marconi, M.; Germani, M. Life cycle assessment of a leather shoe supply chain. International Journal of Sustainable Engineering 14(4), 686–703. https://doi.org/10.1080/19397038.2021.1920643 | Original full-text evidence for leather shoe component manufacture, upper cutting, shoe assembly, sole attachment, finishing, packaging inputs, supplier and contractor boundaries, and primary data collection; no case values used as ranges |
| `navarro-et-al-2020-leather-lca` | Literature (`literature`) | Navarro, D.; Wu, J.; Lin, W.; Fullana-i-Palmer, P.; Puig, R. Life cycle assessment and leather production. Journal of Leather Science and Engineering 2, 26. https://doi.org/10.1186/s42825-020-00035-y | Full-text review evidence for explicit leather system boundaries, upstream allocation disclosure, dataset transparency, and separation of footwear manufacture from leather production |
