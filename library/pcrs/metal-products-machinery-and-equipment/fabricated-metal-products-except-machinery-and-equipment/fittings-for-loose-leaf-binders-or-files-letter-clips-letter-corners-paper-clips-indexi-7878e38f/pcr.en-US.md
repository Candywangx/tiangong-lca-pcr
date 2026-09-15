---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.fittings-for-loose-leaf-binders-or-files-letter-clips-letter-corners-paper-clips-indexi-7878e38f
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fittings for loose-leaf binders or files; letter clips, letter corners, paper clips, indexing tags and similar office articles, of base metal; staples in strips, of base metal

## 1. Scope and Applicability

This PCR applies to factory-gate production of loose-leaf binder or file fittings, letter clips, letter corners, paper clips, indexing tags and similar office articles whose defining article is of base metal, and to base-metal staples supplied in strips. It covers a declared product SKU or homogeneous production family from purchased metal wire or strip and auxiliary materials through forming, cutting, conditional surface finishing, conditional staple-strip assembly, inspection and packaging.

Production of purchased wire, strip, chemicals, energy and packaging is represented by upstream datasets. The foreground boundary includes only operations controlled by the reporting facility. Use, maintenance and end-of-life are outside the default boundary. The verified CPC source establishes category identity; historical patent full text establishes the physical wire-forming and staple-strip process branches; the JRC ferrous-metals-processing BREF supports conditional treatment, coating and wastewater prompts without imposing its industrial-capacity thresholds on this PCR.

Products made wholly of plastic, office furniture, filing cabinets, stapling machines, binder bodies not represented by their base-metal fittings, loose individual staples not supplied in strips, and general construction fasteners are excluded. A non-steel base-metal variant may use this PCR only when every actual metal stock and route-specific exchange is added as its own atomic row; the steel wire/strip rows below are not proxies for another metal.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.fittings-for-loose-leaf-binders-or-files-letter-clips-letter-corners-paper-clips-indexi-7878e38f |
| classification_refs | CPC 3.0: 42995 (exact category reference) |
| covered_products | Base-metal loose-leaf binder and file fittings; letter clips; letter corners; paper clips; indexing tags; similar base-metal office articles; base-metal staples supplied in strips |
| excluded_products | Plastic-only office articles; office furniture and filing cabinets; stapling machines; loose staples not supplied in strips; construction fasteners; upstream production of purchased metal stock |
| representative_product | One homogeneous market-ready SKU or production family, represented by a steel wire paper clip; the staple-strip branch is declared separately when applicable |
| production_route | Purchased steel wire or cold-rolled steel strip -> forming and cutting -> conditional surface finishing -> conditional staple-strip assembly -> inspection and packaging |
| market_state | Dry, finished, inspected and packaged article at the manufacturing-site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared base-metal office article capable of its specified paper-fastening, filing or indexing function |
| How much | 1 kg of market-ready articles, including the packaging that is included in the declared sales unit only as a separately inventoried input |
| How well | Conforming to the declared SKU, dimensions or wire gauge, metal grade, coating, article count per pack and applicable purchaser specification |
| How long or cycle | One factory-gate supply event; product service life is disclosed when relevant but does not change the mass reference |
| reference_flow_link | One kilogram of the market-ready CPC 42995 product output described below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fittings for loose-leaf binders or files, letter clips, letter corners, paper clips, indexing tags and similar office articles, of base metal, staples in strips, of base metal `336f70f3-7cc0-429e-9cde-b5df1fa7d4fd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype and SKU; article dimensions or wire gauge; base-metal grade; wire or strip starting form; coating or surface finish; staple-strip adhesive and tissue-strip status when applicable; articles per sales unit and count-to-mass factor; included packaging; facility geography; production period; factory-gate boundary |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Market-ready reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net article mass on calibrated scales; report packaging as its own input and state whether any packaging mass is included in a commercial gross-mass record. |
| `count_to_mass_conversion` | Records available only as article or pack counts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert count to mass with a contemporaneous measured mean mass for the same SKU and lot; retain sample count, scale result and uncertainty. |
| `material_mass_basis` | Metal stock, chemicals, adhesive, paper strip, box, scrap, sludge and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record mass as supplied. Do not silently convert solution mass to active-substance mass or use metal-content mass as total product mass. |
| `zinc_content_basis` | Special High Grade zinc metal | Zinc content `7c367337-54f2-4fe9-8ee3-3f42681b0792` | kg | Report kg of zinc content for the selected SHG zinc flow and separately retain supplier grade and total supplied-product mass when they differ. |
| `electricity_energy_basis` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered kWh record and convert to MJ using 1 kWh = 3.6 MJ; declare voltage, grid geography and meter boundary. |
| `gas_volume_basis` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report supplier-metered volume and declare reference temperature, pressure and whether the meter reports standard or operating volume. |
| `direct_emission_mass_basis` | Direct fossil carbon dioxide | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured emissions or a documented calculation from foreground fuel records and a validated site factor; do not include upstream electricity emissions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel wire, cold-rolled steel strip or another explicitly identified base-metal stock delivered to the reporting facility, together with separately identified auxiliary materials |
| starting_condition_role | Upstream product inputs to foreground forming; upstream production burdens remain in supplier or background datasets |
| product_classification_scope | Office articles and staples in strips within CPC 3.0 code 42995; the canonical PCR identity remains independent of CPC |
| recursive_input_rule | If a purchased CPC 42995 article is assembled into another covered product, record it once as a purchased product input with its own upstream dataset and do not recursively recreate its manufacturing inventory inside the receiving process |
| upstream_dataset_requirement | Every purchased product or energy input requires a geographically and technologically appropriate upstream dataset or an explicit documented data gap |
| disclosure | Declare facility, period, product SKU or family, starting stock form and grade, forming technology, surface-treatment route, staple-strip route, packaging configuration, excluded operations and any outsourced process |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | Include controlled forming, cutting, conditional surface finishing, conditional staple-strip assembly, inspection and packaging through the manufacturing-site gate. | `un-cpc-3-0-2025` |
| `boundary_upstream_inputs` | purchased_inputs | Represent production of purchased metal stock, chemicals, energy and packaging with upstream datasets; do not duplicate those upstream processes in the foreground inventory. |  |
| `boundary_conditional_finishing` | surface_finishing | Include cleaning, pickling, coating, drying and associated wastewater treatment only when performed under facility control; otherwise model the purchased prefinished stock and disclose the outsourced route. | `ec-jrc-ferrous-metals-processing-bref-2022` |
| `boundary_staple_strip_branch` | staple_strip_assembly | Include adhesive, any tissue-paper carrier and assembly energy only for products supplied as staples in strips; do not apply this branch to paper clips or binder fittings. | `us-1665051-staple-strip-1928` |
| `boundary_downstream_exclusion` | downstream_life_cycle | Exclude distribution beyond the factory gate, use, maintenance and end-of-life from the default dataset; add them only in a separately declared downstream study. |  |
| `boundary_direct_emissions` | controlled_emissions_and_wastes | Record each direct elementary emission and each waste crossing the facility boundary separately; never place upstream electricity emissions in the foreground. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_forming` | Metal stock forming and cutting | required | Always include for manufacturing from purchased wire or strip; if finished articles are only repacked, document the deviation and purchased-article input. | foreground production | Per 1 kg market-ready reference product |
| `surface_finishing` | Cleaning and surface finishing | conditional | Include when cleaning, pickling, metallic coating, electroplating or thermal drying is controlled by the reporting facility. | foreground conditioning | Per 1 kg market-ready reference product |
| `staple_strip_assembly` | Staple-strip assembly | conditional | Include only for staples supplied in strips. | foreground assembly | Per 1 kg market-ready reference product |
| `inspection_packaging` | Inspection and packaging | required | Include inspection and all packaging performed before the factory-gate reference product is released. | foreground finishing | Per 1 kg market-ready reference product |

### Process: Metal stock forming and cutting (`metal_forming`)

#### Inputs

##### Product flows

###### Non-alloy steel wire stock (`steel_wire_input`)

Include purchased wire only for the wire-forming route and measure receipts attributable to the declared product.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Measured steel-wire mass issued to eligible production lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_mass_balance`
- Sources: `us-1355587-paper-clip-machine-1920`

###### Cold-rolled carbon-steel strip stock (`cold_rolled_steel_strip_input`)

Include this specific strip input only for stamped or bent strip routes; its Tiangong UUID remains unresolved.

- Selected flow: Cold-rolled carbon-steel strip
- Flow property / unit: Mass / kg
- Amount rule: Measured strip mass issued to eligible production lots; record not applicable with the declared wire route when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_mass_balance`
- Sources:

###### Forming lubricating oil (`forming_lubricating_oil`)

Include lubricating oil only when it is consumed in bending, stamping or cutting and is not fully recirculated outside the reporting period.

- Selected flow: Metal-forming lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured oil make-up plus net inventory decrease allocated to eligible lots; document recovery and disposal separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_mass_balance`
- Sources:

###### Forming electricity (`forming_electricity`)

Record electricity crossing the forming-cell meter boundary for feeding, bending, stamping, cutting and local extraction.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered forming electricity, with justified allocation for shared equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_electricity`
- Sources:

#### Outputs

##### Product flows

###### Formed office-article intermediate (`formed_article_intermediate`)

Measure the formed and cut intermediate transferred to the next controlled process; this foreground intermediate has no public Tiangong UUID.

- Selected flow: Formed base-metal office-article intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured or batch-mass-balanced output accepted after forming and cutting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_mass_balance`
- Sources: `us-1355587-paper-clip-machine-1920`

###### Segregated recyclable steel scrap (`steel_scrap_output`)

Record ferrous offcuts and rejected steel physically leaving forming for recycling as an output product; do not combine non-ferrous metal or waste batteries.

- Selected flow: Scrap Steel `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated steel scrap leaving the forming process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_mass_balance`
- Sources:

### Process: Cleaning and surface finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Finishing process water (`finishing_process_water`)

Include supplied process water used in cleaning, rinsing, bath make-up or controlled finishing operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balance water entering eligible finishing lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_water`
- Sources: `ec-jrc-ferrous-metals-processing-bref-2022`

###### Sodium hydroxide cleaner (`finishing_sodium_hydroxide`)

Include sodium hydroxide only when consumed as supplied in an alkaline cleaning or treatment bath.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Supplier mass plus bath make-up records attributable to eligible lots; retain supplied concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_mass_balance`
- Sources: `ec-jrc-ferrous-metals-processing-bref-2022`

###### Hydrochloric acid solution, 30% (`finishing_hydrochloric_acid_30pct`)

Include the 30% solution only when it is the purchased pickling or bath-adjustment product; do not substitute another concentration without a separate flow identity.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass / kg
- Amount rule: Measured delivered-solution mass charged or made up to eligible finishing lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_mass_balance`
- Sources: `ec-jrc-ferrous-metals-processing-bref-2022`

###### Special High Grade zinc metal (`finishing_shg_zinc_metal`)

Include SHG zinc only for a metallic-zinc coating route controlled by the facility.

- Selected flow: Special High Grade (SHG) zinc metal `4719799f-8e90-4dce-83f6-55d932702228`
- Flow property / unit: Zinc content / kg
- Amount rule: Zinc-content mass charged plus net bath inventory decrease attributable to eligible product, less recovered metallic zinc documented separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_mass_balance`
- Sources: `ec-jrc-ferrous-metals-processing-bref-2022`

###### Nickel metal for electroplating (`finishing_nickel_metal`)

Include refined nickel metal only when metallic nickel anodes are consumed; the exact Tiangong UUID remains unresolved and nickel salts must be separate rows if used.

- Selected flow: Refined nickel metal
- Flow property / unit: Mass / kg
- Amount rule: Measured nickel-anode mass consumed by eligible electroplating lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_mass_balance`
- Sources: `ec-jrc-ferrous-metals-processing-bref-2022`

###### Finishing electricity (`finishing_electricity`)

Include electricity for pumps, rectifiers, ventilation, treatment and drying within the finishing boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered finishing electricity, including shared-load allocation documented by operating hours or submetering.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_electricity`
- Sources: `ec-jrc-ferrous-metals-processing-bref-2022`

###### Natural gas for finishing heat (`finishing_natural_gas`)

Include gaseous natural gas only when combusted onsite for bath heating, curing or drying.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume attributable to eligible finishing lots, at declared reference conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_natural_gas`
- Sources:

#### Outputs

##### Product flows

###### Surface-finished office-article intermediate (`finished_surface_intermediate`)

Measure accepted surface-finished articles transferred to staple assembly or packaging; this internal state has no public Tiangong UUID.

- Selected flow: Surface-finished base-metal office-article intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output after finishing, before staple-strip assembly or packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_mass_balance`
- Sources:

##### Waste flows

###### Metal-finishing wastewater (`metal_finishing_wastewater`)

Record the aqueous waste crossing the finishing boundary before offsite treatment; do not use condensate as a proxy.

- Selected flow: Metal-finishing wastewater containing dissolved metals
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge volume converted with measured density or directly weighed mass, with composition and destination retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste`
- Sources: `ec-jrc-ferrous-metals-processing-bref-2022`

###### Metal-bearing wastewater-treatment sludge (`metal_bearing_sludge`)

Record dewatered sludge from treatment of finishing wastewater separately from municipal or biological return sludge.

- Selected flow: Metal-bearing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge leaving the facility, with dry-solids fraction, metals analysis and destination retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste`
- Sources: `ec-jrc-ferrous-metals-processing-bref-2022`

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`finishing_fossil_co2`)

Include only direct fossil carbon dioxide released by controlled natural-gas combustion; exclude upstream fuel and electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured emission or calculated value from foreground fuel volume and a documented validated site emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_emissions`
- Sources:

### Process: Staple-strip assembly (`staple_strip_assembly`)

#### Inputs

##### Product flows

###### Formed individual staple intermediate (`formed_staple_intermediate`)

Record formed staples transferred to the strip-assembly operation; this internal product state has no public Tiangong UUID.

- Selected flow: Formed individual base-metal staple
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of accepted formed staples issued to strip assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_mass_balance`
- Sources: `us-1665051-staple-strip-1928`

###### Water-based staple-strip adhesive (`water_based_adhesive`)

Include only the water-based adhesive applied to hold staples in a separable strip; another adhesive family requires its own row.

- Selected flow: Water-based adhesive `9857328f-8b47-4ee5-99a6-e6c95b4d8dd0`
- Flow property / unit: Mass / kg
- Amount rule: Measured adhesive make-up plus net container and line inventory change attributable to eligible staple strips.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_mass_balance`
- Sources: `us-1665051-staple-strip-1928`

###### Tissue-paper assembly strip (`tissue_paper_strip`)

Include a cut tissue-paper carrier only when it remains part of the separable staple strip; its exact Tiangong UUID remains unresolved.

- Selected flow: Cut tissue-paper staple assembly strip
- Flow property / unit: Mass / kg
- Amount rule: Measured tissue-paper strip mass issued to eligible staple strips; record not applicable when the adhesive-only route is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_mass_balance`
- Sources: `us-1665051-staple-strip-1928`

###### Staple-strip assembly electricity (`assembly_electricity`)

Record electricity for alignment, adhesive application, drying, cutting and transfer within the assembly cell.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or justified shared-load electricity attributable to eligible staple-strip lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_electricity`
- Sources:

#### Outputs

##### Product flows

###### Staples in strips (`staple_strip_output`)

Record accepted base-metal staples supplied in separable strips as a covered product output.

- Selected flow: Fittings for loose-leaf binders or files, letter clips, letter corners, paper clips, indexing tags and similar office articles, of base metal, staples in strips, of base metal `336f70f3-7cc0-429e-9cde-b5df1fa7d4fd`
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted staple-strip output before final packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_mass_balance`
- Sources: `us-1665051-staple-strip-1928`

### Process: Inspection and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Inspected unpacked office article (`packable_article_intermediate`)

Record accepted unpacked articles transferred to final packing; this internal state has no public Tiangong UUID.

- Selected flow: Inspected unpacked base-metal office article
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted unpacked article mass issued to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_balance`
- Sources:

###### Paperboard sales box (`paper_box_input`)

Record each paper box used as the declared sales package by mass; other packaging components require separate atomic rows.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: Supplier or sampled net box mass multiplied by boxes consumed for eligible production, adjusted for documented packing rejects.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_balance`
- Sources:

###### Packaging electricity (`packaging_electricity`)

Record electricity for counting, inspection, box forming, sealing and packing within the packaging-cell boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or justified shared-load packaging electricity attributable to eligible product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_electricity`
- Sources:

#### Outputs

##### Product flows

###### Market-ready reference office article (`reference_office_article_output`)

This output realizes the reference flow after inspection and packaging.

- Selected flow: Fittings for loose-leaf binders or files, letter clips, letter corners, paper clips, indexing tags and similar office articles, of base metal, staples in strips, of base metal `336f70f3-7cc0-429e-9cde-b5df1fa7d4fd`
- Flow property / unit: Mass / kg
- Amount rule: Measured market-ready net article mass normalized to exactly 1 kg of reference product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Exactly 1 kg market-ready reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass_balance`
- Sources: `un-cpc-3-0-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_operations | Avoid allocation by separately metering or batch-recording forming, finishing, assembly and packaging for the declared product family. |  |
| `allocation_internal_intermediates` | internal_intermediates | Internal intermediate transfers carry their measured burdens forward and receive no separate co-product credit or allocation. |  |
| `allocation_recycled_scrap` | recyclable_steel_scrap | Report segregated steel scrap as a separate product output. Do not apply avoided virgin-metal credit inside the foreground inventory; disclose the downstream recycling method used by any lifecycle model. |  |
| `allocation_multi_product_shared_loads` | shared_energy_and_materials | When subdivision is impracticable, allocate shared loads by a documented causal driver such as machine time, metered operating hours, bath throughput or treated surface area; use mass only when no better physical driver is available. |  |
| `allocation_economic_last_resort` | valuable_co_products | Use economic allocation only when physical subdivision or causal allocation cannot be supported; disclose prices, currency, period, geography and sensitivity. |  |
| `allocation_internal_rework` | internally_reworked_rejects | Material returned to the same production system is an internal loop, not a boundary output; count its additional energy and material use and prevent double counting of its mass. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_mass_balance` | `metal_forming` | Metal stock, lubricant, accepted intermediate and steel scrap | Weigh tickets, ERP issue/return records and batch traveller | lot_id; SKU; stock_grade; opening_inventory; issued_mass; returned_mass; accepted_output_mass; scrap_mass; oil_makeup_mass | Reconcile calibrated scales and inventory movements by eligible lot | kg | Each lot; monthly reconciliation | Representative continuous 12-month period or declared campaign | All forming lines producing the declared product | Sum eligible net inputs and outputs, reconcile mass balance, then divide by market-ready reference output mass | Scale calibration; signed weigh tickets; inventory reconciliation; unexplained mass-balance difference |
| `cp_forming_electricity` | `metal_forming` | Forming electricity | Submeter or equipment power log | meter_id; opening_reading; closing_reading; eligible_runtime; shared_load_driver | Submeter preferred; otherwise allocate measured cell load by documented operating time | kWh | Each lot or shift; monthly reconciliation | Same period as product output | Forming cell and local extraction only | Convert net kWh to MJ and divide by reference output mass | Meter calibration; coverage check; shared-load allocation record |
| `cp_finishing_mass_balance` | `surface_finishing` | Chemicals, coating metals and accepted finished intermediate | Supplier tickets, bath logs, tank inventory and batch traveller | lot_id; chemical_identity; concentration; opening_inventory; additions; recoveries; closing_inventory; accepted_output_mass | Reconcile each atomic chemical or metal separately across eligible finishing lots | kg | Each addition and lot; monthly reconciliation | Same period as finished output | Controlled finishing lines only | Net consumption equals opening plus additions minus closing, recovery and documented return; normalize by reference output mass | Supplier certificate; bath log; calibrated scale; recovery record |
| `cp_finishing_water` | `surface_finishing` | Process water | Water submeter and tank log | meter_id; opening_reading; closing_reading; tank_change; density; eligible_lots | Submeter direct use; convert volume to mass only with documented density | kg | Daily or each lot; monthly reconciliation | Same period as finished output | Finishing and rinsing boundary only | Net input minus returned water, divided by reference output mass | Meter calibration; density record; leak and recirculation check |
| `cp_finishing_electricity` | `surface_finishing` | Finishing electricity | Submeter, rectifier and equipment log | meter_id; readings; rectifier_kWh; eligible_runtime; shared_load_driver | Sum metered finishing loads and allocate shared loads causally | kWh | Each shift or lot; monthly reconciliation | Same period as finished output | Finishing, ventilation and controlled treatment equipment | Convert net kWh to MJ and divide by reference output mass | Meter calibration; operating log; allocation record |
| `cp_finishing_natural_gas` | `surface_finishing` | Natural gas | Supplier meter and burner log | meter_id; opening_volume; closing_volume; temperature; pressure; standard_condition; eligible_runtime | Read dedicated meter or allocate shared burner fuel by measured thermal duty or runtime | m3 | Each shift or lot; monthly reconciliation | Same period as finished output | Controlled finishing heat only | Normalize declared-condition volume by reference output mass | Meter calibration; supplier statement; reference-condition record |
| `cp_finishing_waste` | `surface_finishing` | Wastewater and metal-bearing sludge, recorded as separate exchanges | Discharge meter, waste manifest and laboratory report | stream_id; mass_or_volume; density; dry_solids; metals_analysis; treatment_destination; date | Meter wastewater; weigh sludge; retain composition and destination for each stream | kg | Each discharge or shipment; monthly reconciliation | Same period as finished output | All controlled finishing discharges | Sum each atomic stream separately and divide by reference output mass | Meter or scale calibration; waste manifest; laboratory chain of custody |
| `cp_finishing_emissions` | `surface_finishing` | Direct fossil carbon dioxide | Stack measurement or fuel-based calculation record | fuel_volume; reference_condition; emission_factor; factor_source; measured_co2; oxidation_basis; eligible_output_mass | Prefer compliant stack measurement; otherwise multiply collected fuel activity by a validated documented site factor | kg | Each reporting period; reconcile monthly | Same period as finished output | Onsite controlled natural-gas combustion only | Use measured CO2 or fuel activity multiplied by the validated factor; divide by reference output mass | Measurement QA; factor approval; fuel-to-emission reconciliation |
| `cp_assembly_mass_balance` | `staple_strip_assembly` | Formed staples, water-based adhesive, tissue strip and accepted staple strips | Batch traveller, scale, adhesive container log and paper issue record | lot_id; staple_mass; adhesive_opening; adhesive_additions; adhesive_closing; tissue_mass; accepted_strip_mass; rejects | Weigh each atomic input and accepted output by staple-strip lot | kg | Each lot; monthly reconciliation | Same period as staple-strip output | All assembly lines for the declared staple SKU | Net input or output divided by market-ready reference output mass | Scale calibration; material issue record; line-cleanout and reject record |
| `cp_assembly_electricity` | `staple_strip_assembly` | Assembly electricity | Cell submeter or runtime log | meter_id; readings; eligible_runtime; shared_load_driver | Submeter preferred; otherwise allocate measured cell load by runtime | kWh | Each lot or shift; monthly reconciliation | Same period as staple-strip output | Alignment, adhesive application, drying and cutting cell | Convert kWh to MJ and divide by reference output mass | Meter calibration; runtime log; allocation record |
| `cp_packaging_mass_balance` | `inspection_packaging` | Unpacked article, paper box and market-ready output | Packaging BOM, supplier specification, count record and calibrated scale | SKU; article_count; unpacked_mass; box_count; sampled_box_mass; packing_rejects; market_ready_net_mass | Weigh representative same-SKU samples and reconcile packaging BOM and counts | kg | Each packaging lot; monthly reconciliation | Same period as reference product output | All factory-gate sales packaging for declared product | Sum paper-box mass and normalize all eligible flows by measured market-ready net article mass | Scale calibration; BOM revision; sampling record; count-to-mass check |
| `cp_packaging_electricity` | `inspection_packaging` | Packaging electricity | Cell submeter or runtime log | meter_id; readings; eligible_runtime; shared_load_driver | Submeter preferred; otherwise allocate measured packaging-cell load by runtime | kWh | Each lot or shift; monthly reconciliation | Same period as reference product output | Inspection and packaging cell | Convert kWh to MJ and divide by reference output mass | Meter calibration; runtime log; allocation record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = eligible exchange quantity / measured market-ready net article output mass | eligible exchange quantity; market-ready net article output mass | Exchange per 1 kg reference product |  |
| `calc_count_to_mass` | Count-only product or packaging records | mass_kg = eligible count x contemporaneous mean same-SKU item mass_kg | eligible count; sampled item masses; sample size | kg of article or paper box |  |
| `calc_electricity_conversion` | Electricity rows | energy_MJ = metered_kWh x 3.6 | metered kWh | MJ electricity |  |
| `calc_forming_mass_balance` | Forming process | unexplained difference = net metal stock input - accepted intermediate output - segregated scrap output - documented internal inventory change | metal stock; accepted output; scrap; inventory change | Forming mass-balance difference |  |
| `calc_finishing_consumption` | Bath chemicals and coating metals | net consumption = opening inventory + additions - closing inventory - documented recovery - documented return | opening inventory; additions; closing inventory; recovery; return | Net consumed mass by atomic material | `ec-jrc-ferrous-metals-processing-bref-2022` |
| `calc_direct_fossil_co2` | Natural-gas combustion | direct fossil CO2 = measured stack CO2 or declared-condition fuel volume x validated documented site emission factor | measured CO2; fuel volume; reference condition; site emission factor | kg direct fossil CO2 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain SKU, product subtype, dimensions or gauge, metal grade, coating, count per sales unit, staple-strip status and packaging configuration. | Approved specification, drawing, label and batch traveller |
| `dq_temporal_representativeness` | Foreground inventory | Use a representative continuous 12-month period or a declared campaign that covers normal operating modes; disclose shutdowns, start-ups and excluded abnormal events. | Production calendar, meter coverage and campaign rationale |
| `dq_meter_quality` | Mass, water, gas and electricity | Use calibrated instruments with traceable units and document estimates used to bridge data gaps. | Calibration certificates, meter register and gap log |
| `dq_completeness` | All controlled processes | Reconcile purchased inputs, internal transfers, accepted output, scrap, wastewater, sludge and direct emissions; explain every excluded material exchange. | Signed mass-balance review and completeness checklist |
| `dq_route_specificity` | Conditional finishing and staple assembly | Mark every conditional process and flow applicable or not applicable and retain evidence for the route decision. | Process flow diagram, work instructions and supplier finish declaration |
| `dq_upstream_matching` | Purchased inputs | Match upstream datasets to actual flow identity, product state, geography and technology; disclose proxies. | Supplier records and upstream dataset mapping table |
| `dq_uncertainty_and_ranges` | Important flows | Do not treat this PCR as supplying empirical consumption ranges; report foreground variability and uncertainty and flag missing range evidence. | Lot-level statistics, uncertainty method and unresolved-evidence register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference_product | Confirm exactly 1 kg net market-ready article output, the adopted CPC 42995 product UUID and all required qualifiers. | `un-cpc-3-0-2025` |
| `validation_atomic_inventory` | process_inventory | Confirm every row is one atomic exchange; reject collection labels, mixed materials, combined utilities and combined wastes. |  |
| `validation_process_map` | process_inventory | Confirm every required process has a detailed inventory and every conditional process and row carries an evidenced applicability decision. |  |
| `validation_uuid_semantics` | uuid_bearing_flows | Confirm each UUID remains public state 100 and that English and Chinese baseNames, flow type, classification, property and unit match the selected row. |  |
| `validation_mass_balance` | foreground_mass_balance | Reconcile metal input with accepted internal and final product, steel scrap, rejects and inventory changes; investigate unexplained differences. |  |
| `validation_energy_boundary` | electricity_and_natural_gas | Confirm electricity and gas are separately metered or causally allocated, use declared units, and exclude upstream emissions from direct foreground emissions. |  |
| `validation_finishing_waste` | surface_finishing | When finishing applies, require separate records for each chemical, metal, wastewater, sludge and direct emission and retain treatment destinations. | `ec-jrc-ferrous-metals-processing-bref-2022` |
| `validation_staple_strip` | staple_strip_assembly | For staples in strips, require separate formed-staple, adhesive, optional tissue-strip, assembly-energy and accepted-strip records; mark the tissue route not applicable when absent. | `us-1665051-staple-strip-1928` |
| `validation_bilingual_alignment` | bilingual_pcr | Confirm the English and Chinese files contain the same ordered rule ids, process ids, row ids, UUIDs, controlled values and sources. |  |
| `validation_range_disclosure` | quantitative_guidance | Confirm no unsupported empirical range or default is inferred from the process sources; disclose the four unresolved range-evidence groups and use foreground values. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate product manufacturing dataset |
| downstream_use | May be published as a secondary_dataset or background_dataset after review and used in process and lifecyclemodel projections |
| allowed_use | Comparative or attributional modelling of the declared base-metal office-article SKU or homogeneous family when reference-flow qualifiers, routes and geography match |
| excluded_use | Direct use for plastic-only office articles, stapling machines, office furniture, loose staples, construction fasteners, another metal represented by steel proxies, or cradle-to-grave claims without additional stages |
| required_metadata | PCR id and version state; product SKU and subtype; dimensions or gauge; metal grade and stock form; coating; route decisions; count-to-mass factor; packaging; facility geography; period; allocation; upstream dataset mapping; unresolved UUIDs |
| required_quality_disclosure | Temporal coverage; instrument calibration; shared-load allocation; mass-balance difference; data gaps; proxies; foreground variability; conditional-process applicability; wastewater and waste destinations; range-evidence limitations |
| update_trigger | Change in product family, metal grade or form, forming technology, coating or adhesive route, facility, packaging configuration, allocation method, upstream dataset identity, public UUID state, or evidence sufficient to replace unresolved ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, CPC 42995; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official product-category identity and explicit inclusion of staples in strips |
| `us-1355587-paper-clip-machine-1920` | Literature (`literature`) | United States Patent US1355587A, Machine for making paper-clips, published 12 October 1920; https://patents.google.com/patent/US1355587A/en (retrieved 2026-09-05) | Original full-text evidence that wire is continuously shaped, cut and delivered in paper-clip manufacture |
| `us-1665051-staple-strip-1928` | Literature (`literature`) | United States Patent US1665051A, Method of packaging staples or the like and package produced thereby, published 3 April 1928; https://patents.google.com/patent/US1665051A/en (retrieved 2026-09-05) | Original full-text process evidence for contiguous staple alignment, adhesive application, optional tissue strip, drying and separable strip output |
| `ec-jrc-ferrous-metals-processing-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, 2022, doi:10.2760/196475; https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 (retrieved 2026-09-05) | Official process evidence for conditional protective coating, electrolytic or chemical surface treatment and associated wastewater treatment; not used as empirical amount-range evidence |
