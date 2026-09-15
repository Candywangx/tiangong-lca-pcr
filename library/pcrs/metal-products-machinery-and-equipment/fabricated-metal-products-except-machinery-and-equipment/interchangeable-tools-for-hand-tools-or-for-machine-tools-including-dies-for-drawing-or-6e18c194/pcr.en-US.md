---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.interchangeable-tools-for-hand-tools-or-for-machine-tools-including-dies-for-drawing-or-6e18c194
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Interchangeable tools for hand tools or for machine tools, including dies for drawing or extruding metal, and rock drilling or earth boring tools; knives for machines; plates, sticks, tips and the like for tools, unmounted, of sintered metal carbides or cermets

## 1. Scope and Applicability

This PCR governs cradle-to-gate foreground data packages for finished products in the semantic boundary of CPC 42922. It covers interchangeable cutting, forming, drilling, boring, and similar tools; dies for drawing or extruding metal; machine knives; and unmounted plates, sticks, tips, and similar tool articles of sintered metal carbide or cermet. The rule accommodates steel, cemented-carbide, and cermet routes through declared route conditions rather than treating each material and tool geometry as a separate PCR.

The foreground boundary starts with traceable steel bar, plate, near-net blank, or separately specified hardmetal/cermet powders received at the manufacturing site and ends with conforming finished product and its sales packaging at the factory gate. Upstream material production is represented by supplier-specific or technologically and geographically representative background datasets. Capital equipment, customer use, tool wear during use, resharpening, and end-of-life treatment are outside the default boundary. A study may extend beyond the gate, but must report those stages separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.interchangeable-tools-for-hand-tools-or-for-machine-tools-including-dies-for-drawing-or-6e18c194 |
| classification_refs | CPC 3.0: 42922 |
| covered_products | Interchangeable tools for hand tools or machine tools; metal drawing and extrusion dies; rock-drilling and earth-boring tools; machine knives; unmounted sintered-metal-carbide or cermet plates, sticks, tips, and similar tool articles. |
| excluded_products | Complete hand tools classified separately from their interchangeable working tools; tool holders without the working tool; complete machine tools; general-purpose fasteners or wear parts without a tool function. |
| representative_product | A declared conforming finished tool item or homogeneous batch, normalized by net finished-product mass. |
| production_route | Route-specific steel blank machining and heat treatment, or hardmetal/cermet powder preparation, pressing and sintering, followed by grinding/finishing; CVD coating is conditional; inspection and sales packaging are included. |
| market_state | Finished, inspected, saleable tool product at the manufacturing factory gate, with coating and packaging state declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A conforming finished interchangeable tool, die, machine knife, drilling/boring tool, or unmounted carbide/cermet tool article that performs its declared cutting, forming, drilling, or wear-resistant tool function. |
| How much | 1 kg net finished-product mass, excluding sales packaging. |
| How well | Meets the declared drawing, grade, dimensions, tolerances, hardness or other specified performance properties, surface treatment, and acceptance criteria. |
| How long or cycle | One factory-gate production output; service life is not asserted and must be modelled separately when use performance is compared. |
| reference_flow_link | The measured net mass of conforming finished output represented by `out_finished_interchangeable_tool`, normalized to 1 kg. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Finished CPC 42922 interchangeable tool product |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | tool family and geometry; drawing or product standard; substrate material and grade; recycled-powder content where applicable; heat-treatment or sintering route; coating chemistry and technology or uncoated state; hardness and acceptance criteria; net product mass; packaging state; manufacturing site and geography; data period |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete. The unresolved broad product-flow UUID must not be replaced by a narrower cutting-insert or carbide-only UUID when the data package represents another covered family.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and final output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure conforming finished product after all included finishing and coating operations but before sales packaging; exclude packaging, rejected output, fixtures, and reusable carriers. |
| `item_to_mass` | Piece-count production records | Mass | kg | Convert item counts using measured batch net mass or a verified product-specific unit mass; disclose the count, measured mass, product geometry, and conversion source. |
| `electricity_energy` | Electricity inputs | Net calorific value | MJ | Preserve the directly metered energy basis; when meters report kWh, convert using exactly 1 kWh = 3.6 MJ and retain the original meter value. |
| `gas_reference_conditions` | Gaseous fuel and coating inputs | Volume or Mass as assigned to the selected flow | m3 or kg | State reference temperature and pressure for every volume record and do not mix standard and actual cubic metres without a documented conversion. |
| `mass_balance_basis` | Material, intermediate, product, scrap, and sludge rows | Mass | kg | Use one moisture and stock-change convention within a campaign and reconcile input mass to product, internal carry-over, recoverable scrap, waste, and measured losses. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable tool-steel bar, plate, or near-net blank, or separately specified carbide/cermet powders and recycled powder, received at the foreground manufacturing site. |
| starting_condition_role | The physical entry point for site foreground collection; upstream production and delivery of each purchased input require linked background datasets. |
| product_classification_scope | Finished products within the semantic boundary of CPC 42922, independent of the classification used by a supplier dataset. |
| recursive_input_rule | A purchased semi-finished or finished CPC 42922 tool article is recorded as one product input with its own upstream dataset; its production is not recreated inside the same foreground package. |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise select technology-, material-grade-, recycled-content-, geography-, and delivery-state-representative background datasets and disclose substitutions. |
| disclosure | Declare product family, substrate route, purchased-input state, recycled content, coating route, packaging state, site geography, data period, outsourced operations, and every excluded or added life-cycle stage. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include received-material preparation, route-applicable thermal consolidation or heat treatment, machining/grinding, route-applicable coating, inspection, and sales packaging through the factory gate. | `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca` |
| `boundary_atomic_actuals` | all included processes | Record every actual purchased material, gas, utility, waste, and direct elementary emission as a separate atomic exchange; confidential recipes may withhold quantities but not the existence and chemical identity needed for a complete model. | `hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref` |
| `boundary_outsourced_steps` | outsourced heat treatment, coating, or finishing | Keep an outsourced operation inside the cradle-to-gate product system and link the transported intermediate to a supplier process dataset; disclose transport and the supplier technology. | `loglisci-priarone-settineri-2013-tool-manufacturing` |
| `boundary_internal_recycling` | rework and recovered hardmetal | Treat internal rework as an internal loop without a second product credit; separately measure purchased or externally recovered powder and disclose its source and recycled content. | `hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | Material receipt, powder/blend preparation, and blank forming | required | Include the product-specific steel or powder inputs actually used; omit non-applicable route rows with documented zero use. | Foreground material preparation | kg prepared blank per measured campaign |
| `thermal_consolidation` | Route-specific heat treatment or powder pressing and sintering | conditional | Include when the manufacturing site or an in-scope supplier performs heat treatment, pressing, sintering, or an equivalent thermal consolidation step. | Foreground thermal processing | kg treated or sintered blank per batch |
| `machining_grinding` | Machining, grinding, honing, and dimensional finishing | required | Include the actual machining and abrasive-finishing sequence for the declared tool family. | Foreground shape and edge generation | kg conforming machined output per campaign |
| `cvd_coating` | Chemical-vapour-deposition coating | conditional | Include only when CVD coating is applied; add every recipe-specific precursor as its own atomic row if it is not already listed. | Foreground surface treatment | kg coated output and coating batches |
| `inspection_packaging` | Final inspection, marking, and sales packaging | required | Include final acceptance, marking, and the actual sales packaging configuration; record zero packaging only for a documented bulk-unpackaged product. | Foreground finalization | kg net conforming finished output |

### Process: Material receipt, powder/blend preparation, and blank forming (`material_preparation`)

#### Inputs

##### Product flows

###### High-speed tool-steel round bar (`in_tool_steel_bar`)

Record the received high-speed or other declared tool-steel bar used for the steel route. This row is not applicable to a powder-only hardmetal/cermet route.

- Selected flow: High-speed tool-steel round bar
- Flow property / unit: Mass / kg
- Amount rule: measured received mass consumed, adjusted for opening and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`

###### Tungsten carbide powder (`in_tungsten_carbide_powder`)

Record separately specified tungsten carbide powder consumed in hardmetal or cermet preparation; recycled content and supplier powder route are required qualifiers.

- Selected flow: Tungsten carbide powder `e2c47d47-229c-44f3-9ed0-e74fbbf0176f`
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of verified return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref`

###### Cobalt powder (`in_cobalt_powder`)

Record cobalt binder powder separately when it is added to the powder blend; use cobalt-content mass consistently with the selected flow property.

- Selected flow: Cobalt powder `abe5e361-25a1-4258-a481-589bf66e3b13`
- Flow property / unit: Cobalt content / kg
- Amount rule: measured cobalt-content mass issued to the declared powder recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `hsu-2024-turning-insert-lca`

###### Electricity for material preparation (`in_prep_electricity`)

Record electricity delivered to mixing, pressing or blank-forming equipment and directly attributable auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered energy or campaign operating hours multiplied by verified load, including attributable idle and auxiliary demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

#### Outputs

##### Product flows

###### Prepared tool blank (`out_prepared_tool_blank`)

Record the route-specific prepared blank transferred to thermal processing or machining as an internal intermediate.

- Selected flow: Prepared tool blank
- Flow property / unit: Mass / kg
- Amount rule: measured mass of accepted prepared blanks leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_outputs`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

### Process: Route-specific heat treatment or powder pressing and sintering (`thermal_consolidation`)

#### Inputs

##### Product flows

###### Electricity for thermal consolidation (`in_thermal_electricity`)

Record electricity for electric furnaces, powder pressing, vacuum systems, cooling systems, and directly attributable auxiliaries used by the declared route.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured batch energy allocated to conforming treated output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `hsu-2024-turning-insert-lca`

###### Natural gas for furnace heating (`in_thermal_natural_gas`)

Record gaseous natural gas only when directly combusted for an in-scope furnace; otherwise document zero use for this row.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered delivered gas at declared reference conditions, allocated to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_combustion`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`

###### Process Water for thermal equipment (`in_thermal_process_water`)

Record make-up water crossing the foreground boundary for cooling or thermal equipment; do not record recirculated internal water again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance make-up water net of documented return outside the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meters`
- Sources: `hsu-2024-turning-insert-lca`

#### Outputs

##### Product flows

###### Heat-treated or sintered tool blank (`out_treated_tool_blank`)

Record conforming treated or sintered blanks transferred to machining as an internal intermediate.

- Selected flow: Heat-treated or sintered tool blank
- Flow property / unit: Mass / kg
- Amount rule: measured conforming blank mass after thermal processing and before machining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_outputs`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

##### Elementary flows

###### Direct fossil carbon dioxide from furnace combustion (`out_furnace_co2_fossil`)

Record only direct on-site fossil carbon dioxide from fuel combustion; upstream electricity emissions remain in the electricity dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct emission or calculated from metered fuel, documented carbon fraction, documented oxidation fraction, and the 44/12 molecular-mass ratio
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_combustion`
- Sources:

### Process: Machining, grinding, honing, and dimensional finishing (`machining_grinding`)

#### Inputs

##### Product flows

###### Electricity for machining and grinding (`in_machining_electricity`)

Record electricity for machine tools, grinders, filtration, pumps, coolant conditioning, and directly attributable auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered campaign energy including production, run-time, idle, filtration, cooling, and pumping demand attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

###### Cutting Fluid (`in_cutting_fluid`)

Record the actual mineral cutting oil or formulated grinding coolant make-up crossing the boundary; disclose formulation, water content, recirculation, and stock change.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchases plus opening stock minus closing stock minus documented transfer, allocated to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

###### Vitrified aluminium-oxide grinding wheel (`in_alumina_grinding_wheel`)

Record consumed vitrified aluminium-oxide grinding-wheel mass from issue, dressing, and replacement records; do not substitute loose alumina or bauxite flows.

- Selected flow: Vitrified aluminium-oxide grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: opening wheel mass plus issued wheel mass minus closing reusable wheel mass, allocated to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`

###### Process Water for machining and honing (`in_machining_process_water`)

Record process-water make-up used in water-based coolant, honing, or wet finishing; document zero use for an oil-only dry-of-water route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up water or documented batch preparation mass net of recirculated internal water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meters`
- Sources: `hsu-2024-turning-insert-lca`

#### Outputs

##### Product flows

###### Machined and honed tool before coating (`out_machined_tool`)

Record conforming machined output before optional coating as an internal intermediate.

- Selected flow: Machined and honed tool before coating
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass after machining and honing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_outputs`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

##### Waste flows

###### Post-industrial steel machining scrap (`out_postindustrial_steel_scrap`)

Record segregated steel chips, bar ends, and offcuts leaving the foreground boundary for recovery or treatment.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: weighed dispatched mass, corrected for documented coolant carry-over
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfers`
- Sources: `loglisci-priarone-settineri-2013-tool-manufacturing`

###### Metal-bearing grinding sludge (`out_metal_grinding_sludge`)

Record the dewatered metal-, abrasive-, and coolant-bearing grinding sludge leaving the site as one physically distinct waste stream; state dry matter and residual liquid basis.

- Selected flow: Metal-bearing grinding sludge
- Flow property / unit: Mass / kg
- Amount rule: weighed dispatched wet mass with measured or documented dry-matter fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfers`
- Sources: `hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref`

### Process: Chemical-vapour-deposition coating (`cvd_coating`)

#### Inputs

##### Product flows

###### Electricity for CVD coating (`in_cvd_electricity`)

Record electricity for charging, heating, vacuum, coating, post-cleaning, and directly attributable auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured coating-batch energy allocated to conforming coated output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `hsu-2024-turning-insert-lca`

###### Nitrogen gas for CVD coating (`in_cvd_nitrogen`)

Record gaseous nitrogen delivered to the declared CVD recipe at stated reference conditions.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Amount rule: recipe controller or gas-meter volume allocated by conforming coated mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_recipe`
- Sources: `hsu-2024-turning-insert-lca`

###### Hydrogen gas for CVD coating (`in_cvd_hydrogen`)

Record industrial hydrogen gas delivered to the declared CVD recipe; do not substitute hydrogen-bearing acids or mixed process gases.

- Selected flow: Hydrogen gas
- Flow property / unit: Volume / m3
- Amount rule: recipe controller or gas-meter volume allocated by conforming coated mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_recipe`
- Sources: `hsu-2024-turning-insert-lca`

###### Methane (`in_cvd_methane`)

Record methane consumed as a CVD precursor separately from natural gas used as fuel.

- Selected flow: Methane `59aebe7f-6f66-41b4-aa71-49bea068dc7b`
- Flow property / unit: Mass / kg
- Amount rule: metered or recipe-controller methane mass, with any volume-to-mass conversion conditions documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_recipe`
- Sources: `hsu-2024-turning-insert-lca`

###### Carbon dioxide gas for CVD coating (`in_cvd_carbon_dioxide`)

Record gaseous carbon dioxide consumed in the declared CVD recipe as a product input; do not use the fossil elementary-emission identity for this row.

- Selected flow: Carbon dioxide gas for CVD coating
- Flow property / unit: Volume / m3
- Amount rule: recipe controller or gas-meter volume allocated by conforming coated mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_recipe`
- Sources: `hsu-2024-turning-insert-lca`

#### Outputs

##### Product flows

###### CVD-coated tool (`out_coated_tool`)

Record conforming coated tools transferred to final inspection as an internal intermediate.

- Selected flow: CVD-coated tool
- Flow property / unit: Mass / kg
- Amount rule: measured conforming coated mass leaving the coating batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_outputs`
- Sources: `hsu-2024-turning-insert-lca`

### Process: Final inspection, marking, and sales packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Electricity for inspection, marking, and packaging (`in_packaging_electricity`)

Record electricity for inspection equipment, laser marking, packaging machines, and directly attributable auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured or operating-time-derived energy allocated to conforming dispatched output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `hsu-2024-turning-insert-lca`

###### Paper box (`in_paper_box`)

Record the total mass of paper boxes crossing the factory gate with the reference product; state whether each box is folding boxboard or corrugated board.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: packaging bill-of-material mass reconciled to dispatched sale units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `hsu-2024-turning-insert-lca`

###### Polypropylene insert tray (`in_polypropylene_tray`)

Record the mass of polypropylene trays dispatched with the product; do not substitute a generic plastic-container UUID without material and form confirmation.

- Selected flow: Polypropylene insert tray
- Flow property / unit: Mass / kg
- Amount rule: packaging bill-of-material mass reconciled to dispatched sale units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `hsu-2024-turning-insert-lca`

#### Outputs

##### Product flows

###### Finished CPC 42922 interchangeable tool product (`out_finished_interchangeable_tool`)

Record only conforming saleable product net mass. The reference-product UUID remains unresolved because no directly read candidate covers the complete product boundary without narrowing by material, function, or form.

- Selected flow: Finished CPC 42922 interchangeable tool product
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg after normalization from measured conforming net batch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_outputs`
- Sources: `unsd-cpc-3-0-structure-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multi-product manufacturing | Subdivide processes and use product-, line-, batch-, or recipe-specific measurements before applying allocation. | `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca` |
| `allocation_shared_batch` | shared furnace, pressing, coating, and packaging batches | Allocate shared measured inputs by a documented causal driver; use conforming output mass when no stronger causal relation is demonstrated, and disclose the batch population, rejects, and driver. | `hsu-2024-turning-insert-lca` |
| `allocation_scrap_boundary` | metal scrap and recovered hardmetal leaving the foreground | Record the measured waste or recovered-material flow at the factory boundary without avoided-production credit in the foreground inventory; model downstream recycling consistently in a separately declared scenario. | `ec-2001-non-ferrous-metals-bref` |
| `allocation_internal_rework` | in-process rejects and returned material | Keep material returned to the same production system as an internal loop; include the additional energy and consumables and count only material that exits the boundary as waste. | `hsu-2024-turning-insert-lca` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `material_preparation` | steel and powder inputs | purchase, issue, return, and stock records | material identity; grade; supplier; lot; recycled content; opening stock; receipts; issues; returns; closing stock; mass | reconcile traceable warehouse and recipe records | kg | each lot and campaign | representative production period, normally at least 12 months or a complete disclosed campaign | all in-scope production and storage locations | opening + receipts - closing - documented transfers, allocated to conforming campaign output | supplier certificates, calibrated scales, stock reconciliation, recipe release |
| `cp_energy_meters` | all process ids | electricity input | meter and equipment log | meter id; start/end reading; unit; process; operating state; batch; product output; allocation driver | calibrated submeter; otherwise verified load multiplied by logged time | kWh and MJ | each batch or monthly with batch linkage | same period as production output | all in-scope lines and attributable auxiliaries | subtract non-production baseload when separately measured, then allocate by causal driver | calibration record, meter photographs/export, operating log, conversion record |
| `cp_fuel_combustion` | `thermal_consolidation` | furnace fuel and direct carbon dioxide | fuel meter, invoice, composition, and emissions record | gas volume; reference conditions; carbon fraction; oxidation fraction; batch; furnace; direct emission measurement | calibrated meter or reconciled invoice; approved site calculation for CO2 | m3 and kg | each batch or monthly with furnace linkage | same period as treated output | all in-scope direct combustion sources | allocate metered fuel to batch; calculate CO2 only from documented composition and oxidation | meter calibration, supplier gas specification, calculation workbook, monitoring record |
| `cp_water_meters` | `thermal_consolidation`; `machining_grinding` | process-water make-up | meter, tank, and batch record | source; meter readings; make-up mass/volume; density; recirculation; discharge; batch | calibrated meter or tank mass balance | kg | batch or monthly with line linkage | same period as production output | all in-scope water systems | count only water crossing the foreground boundary and allocate by measured use or batch driver | meter calibration, tank log, density conversion, water-system diagram |
| `cp_consumables` | `machining_grinding` | cutting fluid and grinding wheel | purchase, issue, replacement, dressing, and stock record | product identity; formulation; opening stock; receipts; additions; returns; closing stock; wheel initial/residual mass; batch | stock-change reconciliation with replacement and dressing logs | kg | each addition or replacement; aggregate by campaign | same period as machined output | all in-scope machine tools and coolant systems | opening + receipts - closing - transfers, allocated to conforming machined output | invoices, safety data sheet, issue log, scale record, wheel-change log |
| `cp_waste_transfers` | `machining_grinding` | steel scrap and grinding sludge | container scale and waste transfer record | waste identity; container tare/gross mass; destination; recovery/disposal route; dry matter; coolant carry-over; batch link | calibrated scale and legally or operationally controlled transfer note | kg | each shipment | same period as production output | all in-scope waste collection points | sum net dispatched mass and allocate to linked campaigns; report dry-matter correction separately | scale calibration, transfer note, laboratory dry-matter result, destination receipt |
| `cp_coating_recipe` | `cvd_coating` | coating gases | recipe controller, gas meter, and cylinder stock record | chemical identity; purity; recipe; flow/consumption; reference conditions; opening/closing cylinder mass; batch; conforming coated mass | controller export or gas-meter/cylinder mass balance | m3 or kg | every coating batch | all in-scope coating batches in the data period | all in-scope coating equipment, gas supply points, and batches | allocate each atomic gas separately to conforming coated mass using the disclosed batch driver | recipe approval, controller export, meter calibration, cylinder reconciliation |
| `cp_packaging_dispatch` | `inspection_packaging` | sales packaging | bill of materials, packaging issue, and dispatch record | component identity; material; unit mass; issued count; returned count; dispatched product mass; packaging configuration | verified component weighing and dispatch reconciliation | kg | each packaging configuration and dispatch batch | same period as finished output | all in-scope sales packaging | net component count × verified unit mass, normalized by dispatched net product mass | packaging specification, calibrated scale, issue record, dispatch record |
| `cp_batch_outputs` | all process ids | intermediate and final outputs | batch traveller, acceptance, reject, rework, and mass record | batch id; product id; route; input mass; intermediate mass; conforming mass; reject mass; rework return; item count; unit mass | calibrated weighing linked to quality release | kg | every batch | all batches represented by the dataset | all in-scope production lines, outsourced steps, and acceptance points | sum conforming net mass; keep rework internal; normalize final output to 1 kg | scale calibration, batch traveller, quality release, reject/rework log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = campaign amount / conforming finished-product net mass | campaign exchange amount; conforming net output mass | exchange per 1 kg net finished product |  |
| `calc_shared_batch_allocation` | shared thermal, coating, or packaging batch | allocated amount = measured batch amount × declared causal share; when mass is used, causal share = product conforming mass / total conforming batch mass | measured batch amount; product and total conforming output; declared driver | product-attributed batch exchange | `hsu-2024-turning-insert-lca` |
| `calc_furnace_co2` | `out_furnace_co2_fossil` | fossil CO2 mass = fuel mass × fossil carbon mass fraction × oxidation fraction × 44/12; if fuel is metered by volume, first apply the supplier density at declared conditions | metered fuel; density; fossil carbon fraction; oxidation fraction | kg direct fossil CO2 |  |
| `calc_material_balance` | each production campaign | unexplained difference = total material inputs - conforming output - measured internal carry-over - outputs leaving as scrap or waste - documented stock change | material, product, intermediate, waste, and stock records on one basis | mass-balance residual and percentage |  |
| `calc_packaging_mass` | paper box and polypropylene tray | packaging mass = net dispatched component count × verified component unit mass | issue/return count; dispatched count; unit mass | kg packaging per 1 kg net product | `hsu-2024-turning-insert-lca` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all material flows | Preserve product drawing, grade, chemical or commercial identity, supplier, lot, delivery state, coating state, and selected TianGong identity; document every unresolved UUID without substituting a proxy. | product specification, certificate, invoice, lot record, UUID audit |
| `dq_temporal` | foreground activity data | Cover a representative continuous period, normally at least 12 months; a shorter campaign is allowed only when it captures a complete disclosed production campaign and seasonality or load variation is immaterial. | meter period, batch list, production schedule, representativeness statement |
| `dq_completeness` | process inventory | Reconcile all process stages and actual atomic inputs, direct emissions, waste transfers, outsourced steps, rework loops, and packaging against production and purchasing records. | completeness checklist, ledgers, batch travellers, transfer notes |
| `dq_measurement` | meters, scales, and controller data | Use calibrated instruments and retain raw readings, reference conditions, conversions, and data-gap treatment. | calibration certificates, raw exports, conversion workbook |
| `dq_allocation` | shared processes | Demonstrate subdivision attempts and retain the causal basis, batch population, conforming mass, rejects, and sensitivity to the selected allocation driver. | process map, meter assignment, allocation workbook, sensitivity record |
| `dq_geography_technology` | upstream datasets | Match material grade, recycled content, production technology, geography, and delivery state; disclose and assess every proxy. | supplier dataset, technology note, geographic match review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | reference product | Fail validation if the product is outside the covered CPC 42922 semantic boundary or if tool family, material/grade, geometry, route, coating state, factory-gate state, and net mass are not declared. | `unsd-cpc-3-0-structure-2025` |
| `validate_reference_mass` | reference flow | Require exactly 1 kg normalized conforming net finished-product mass and verify that packaging, rejects, fixtures, and reusable carriers are excluded. |  |
| `validate_route_processes` | process map | Require material preparation, machining/grinding, and final inspection/packaging; require thermal consolidation and CVD coating only when their declared route conditions apply, and require disclosure of outsourced steps. | `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca` |
| `validate_atomic_inventory` | all inventory rows | Fail if a selected flow combines multiple chemicals, utilities, fuels, materials, wastes, or emissions, or if an actual recipe component is hidden under an umbrella row. |  |
| `validate_uuid_semantics` | UUID-bearing rows | Require public state-100 identity, correct flow type, property and unit group, exact semantic fit, and the official TianGong Chinese baseName; reject narrower or proxy UUIDs. |  |
| `validate_mass_balance` | campaign inventory | Investigate and disclose the mass-balance residual; validation is inconclusive when stock changes, internal rework, coolant carry-over, or missing waste streams prevent reconciliation. |  |
| `validate_energy_and_gases` | energy, fuel, and coating gases | Verify kWh-to-MJ conversion, gas reference conditions, separation of methane precursor from natural-gas fuel, and separation of product carbon dioxide from elementary fossil CO2. |  |
| `validate_allocation` | shared batches and scrap | Require documented subdivision, causal allocation driver, batch population, reject treatment, and consistent no-credit treatment for foreground scrap. | `hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref` |
| `validate_unresolved_evidence` | unresolved UUIDs and ranges | Keep unresolved identity and range-evidence needs visible; do not invent UUIDs, proxies, single-value ranges, or source-backed ranges without two compatible independent original sources. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-manufacturing data package for a declared CPC 42922 tool product and route. |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness and unresolved items |
| allowed_use | Cradle-to-gate product footprints, supply-chain inventories, process improvement, and downstream process or lifecyclemodel projections for matching tool family, grade, route, coating, geography, and period. |
| excluded_use | Comparative claims about tool service life or machining performance without a performance-equivalent functional unit; substitution across unlike tool families or grades; use as a generic proxy while reference-product or material identities remain unresolved. |
| required_metadata | PCR id and version; product drawing/family; net mass; material and grade; recycled content; route and equipment; coating chemistry/state; packaging state; site/geography; data period; upstream dataset choices; allocation; outsourced steps; unresolved items. |
| required_quality_disclosure | Measurement coverage and calibration; stock changes; mass-balance residual; allocation drivers; reject and rework treatment; waste destinations; gas reference conditions; data gaps; UUID and range-evidence status. |
| update_trigger | Change in product geometry or grade, material or recycled content, thermal/coating route, major equipment or energy supply, packaging, supplier geography, allocation method, or a material shift in normalized inventory. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Current CPC 42922 identity and English product boundary. |
| `unsd-cpc-1-1-chinese-2007` | official_guidance | United Nations, 产品总分类版本1.1, official Chinese publication. https://digitallibrary.un.org/record/536544/files/M_77ver1_1c.pdf | Verified professional Chinese title and continuity of CPC 42922 scope. |
| `loglisci-priarone-settineri-2013-tool-manufacturing` | literature | Loglisci, G.; Priarone, P. C.; Settineri, L. (2013). Cutting tool manufacturing: a sustainability perspective. Proceedings of the 11th Global Conference on Sustainable Manufacturing, ISBN 978-3-7983-2609-5. https://d-nb.info/1078666539/34 | Steel tap route, machining/grinding inputs, metering, scrap, and process allocation. |
| `hsu-2024-turning-insert-lca` | literature | Hsu, E. H.-W. (2024). Enabling emission tracking in tool manufacturing: Life cycle assessment of turning insert production. KTH. https://www.diva-portal.org/smash/get/diva2:1894895/FULLTEXT01.pdf | WC-Co insert route, pressing/sintering, grinding, CVD gases, packaging, waste, batch allocation, and foreground collection. |
| `ec-2001-non-ferrous-metals-bref` | official_guidance | European Commission (2001). Reference Document on Best Available Techniques in the Non Ferrous Metals Industries. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-03/superseded_nfm_bref_1201.pdf | Tungsten carbide production context, hardmetal inputs and residues, and recycled-hardmetal disclosure. |
