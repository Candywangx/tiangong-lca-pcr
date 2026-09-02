---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.clothing-accessories-of-leather-or-of-composition-leather-except-sports-gloves
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Clothing accessories of leather or of composition leather, except sports gloves

## 1. Scope and Applicability

This PCR covers factory-gate production of clothing accessories whose essential character is supplied by leather or composition leather, including belts, bandoliers worn as clothing accessories, suspenders or braces, leather ties, wrist straps, protective clothing sleeves, and non-sports gloves, mittens, or mitts. It applies to pattern preparation, material selection, cutting or clicking, splitting or skiving, folding, sewing, hardware attachment, conditional edge coating or polishing, inspection, and sales packaging for a declared accessory specification.

Sports gloves are excluded. Leather garments, footwear, luggage, handbags, wallets, purses, general-purpose straps, saddlery, headgear, articles of furskin or artificial fur, accessories whose essential character is textile or plastic, and regulated protective equipment outside the declared clothing-accessory function are also excluded. Tanning and finishing hides into supplied finished leather, producing composition-leather sheet, textiles, polymers, metal hardware, chemicals, electricity, fuels, and packaging remain upstream unless physically performed inside the reporting facility.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.clothing-accessories-of-leather-or-of-composition-leather-except-sports-gloves |
| classification_refs | CPC 3.0: 28242 |
| covered_products | Belts; clothing bandoliers; suspenders or braces; leather ties; wrist straps; protective clothing sleeves; non-sports gloves, mittens and mitts; and similar clothing accessories whose essential character is leather or composition leather |
| excluded_products | Sports gloves; leather garments; footwear; luggage, handbags, wallets and purses; general-purpose straps; saddlery; headgear; furskin or artificial-fur articles; textile- or plastic-character accessories; regulated protective equipment outside the declared clothing-accessory function |
| representative_product | Factory-gate finished leather belt with declared leather species and finish, lining if present, buckle material, edge construction, size, and sales packaging |
| production_route | Finished leather or composition leather and components received at the accessory factory; pattern cutting; splitting or skiving; folding; sewing and hardware setting; conditional edge finishing; final inspection; sales packaging |
| market_state | Quality-conforming finished clothing accessory, net of sales packaging, at the manufacturing plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and deliver at the factory gate a quality-conforming CPC 28242 clothing accessory whose essential character is leather or composition leather and that meets its declared fit, fastening, construction, appearance, and durability specification |
| How much | 1 kg of accepted finished reference product |
| How well | Conforming to the declared product specification and final inspection, with accessory type, material identity, size, construction, hardware, edge finish, and performance requirements disclosed |
| How long or cycle | One declared production batch; consumer service life, maintenance, repair, and use cycles are outside this foreground production reference |
| reference_flow_link | `finished_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Clothing accessories of leather or of composition leather, except sports gloves `7b7924ae-e421-4da5-851e-51ab4012cfc8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | accessory type; leather or composition-leather identity; animal species when applicable; tanning and surface finish; material thickness; lining and reinforcement; reference size and sizing system; hardware material and coating; folding and seam construction; edge-finishing route; sports-glove exclusion; production site and geography; production period; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg of accepted finished product at the factory gate; exclude sales-packaging mass from reference-product mass and record each packaging material separately. |
| `item_to_mass_conversion` | hardware and packaging recorded by item | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using a measured mean mass for the exact component specification; retain item count, sample count, sample mass, mean mass, and calculation. |
| `bom_mass_basis` | product bill of materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use a consistent dry or as-received basis, disclose that basis, and reconcile at least 95% of product weight plus 100% of leather, composition leather, lining, reinforcement, and metals. |
| `leather_area_to_mass` | leather purchasing or cutting records stated by area | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert measured area to mass only with the batch-specific measured area and mass of the exact supplied leather; retain species, finish, thickness, moisture basis, sampled area, and sampled mass. |
| `energy_unit_conversion` | electricity and fuel records | Energy | kWh and MJ | Preserve measured units and conversion factors; do not combine electricity, natural gas, diesel, LPG, or compressed air into one exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished leather, composition-leather sheet, lining, thread, named polymers, hardware, and packaging arrive at the reporting facility with supplier, composition, finish, mass, and upstream dataset references. |
| starting_condition_role | Gate-to-gate foreground starting condition for leather-accessory component preparation and assembly |
| product_classification_scope | CPC 3.0 subclass 28242 only; sports gloves and products classified as garments, bags, footwear, headgear, saddlery, or miscellaneous leather articles are outside scope. |
| recursive_input_rule | If a purchased input is itself a CPC 28242 accessory or identifiable part, record it once as an upstream product input and do not recreate its production inside this foreground system. |
| upstream_dataset_requirement | Every supplied material, component, chemical, utility, fuel, refrigerant, and packaging input requires a geographically and technologically representative upstream dataset or a documented data gap. |
| disclosure | Declare product specification, BOM coverage, leather species and finish, composition-leather formulation when known, size, sites and period, included processes, subcontracting, supplier geography, allocation basis, cutting and assembly losses, edge-finishing route, rejected-product handling, packaging, and unresolved UUID or dataset gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_product_system | Include receiving-to-factory-gate pattern preparation, cutting or clicking, splitting or skiving, folding, sewing, hardware setting, applicable finishing, inspection, and sales packaging physically performed for the declared product. | `csir-clri-leather-goods-2016`; `unido-leather-products-1982`; `afw-pefcr-v3-1-2025` |
| `boundary_supplied_leather` | finished_leather_and_composition_leather | Model tanning and manufacture of supplied finished leather or composition-leather sheet upstream unless the reporting facility physically performs those operations; identify the exact material and supplier dataset. | `afw-pefcr-v3-1-2025` |
| `boundary_conditional_finishing` | edge_and_surface_finishing | Include each actual edge coating, polishing material, cleaning input, wastewater, sludge, and associated energy only when that route occurs onsite; otherwise mark the process and rows not applicable. | `csir-clri-leather-goods-2016`; `unido-leather-products-1982` |
| `boundary_losses_and_waste` | manufacturing_losses | Include composition-specific cutting waste, unusable parts, hardware scrap, finishing residues, rejected products, packaging waste, and actual treatment routes in the process where they arise. | `afw-pefcr-v3-1-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_cutting` | Material selection, cutting, and skiving | required | Always included; each material row applies only when present in the declared BOM. | Foreground pattern preparation, cutting, splitting, skiving, and component preparation | Per 1 kg accepted finished reference product |
| `assembly_hardware_setting` | Folding, sewing, assembly, and hardware setting | required | Always included; adhesive and hardware rows apply only to the declared construction. | Foreground component joining and fastening | Per 1 kg accepted finished reference product |
| `edge_surface_finishing` | Edge and surface finishing | conditional | Included only when aqueous edge coating, polishing, or associated equipment cleaning occurs onsite. | Foreground finishing and residue generation | Per 1 kg accepted finished reference product |
| `inspection_packaging` | Final inspection and sales packaging | required | Always include final quality inspection; each packaging row applies when used. | Foreground acceptance and factory-gate packaging | Per 1 kg accepted finished reference product |
| `facility_utilities` | Shared facility thermal utilities, fuels, refrigeration, and direct emissions | conditional | Included when purchased steam, purchased hot water, named fuels, refrigerant recharge, or direct emissions serve the product and are not already metered to another process. | Shared foreground utility allocation and direct site emissions | Per 1 kg accepted finished reference product |

### Process: Material selection, cutting, and skiving (`material_preparation_cutting`)

#### Inputs

##### Product flows

###### Finished bovine leather (`leather_bovine_finished`)

Finished bovine leather crosses the foreground boundary when the declared BOM issues it to pattern cutting for the accessory body, strap, reinforcement, or facing.

- Selected flow: Finished bovine leather
- Flow property / unit: Mass / kg
- Amount rule: measured net mass issued to the cutting order after verified returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue`
- Sources: `afw-pefcr-v3-1-2025`

###### Finished sheepskin leather without wool (`leather_sheepskin_finished`)

Finished sheepskin leather without wool is recorded separately when it provides an accessory panel, glove component, lining, or facing in the declared BOM.

- Selected flow: Finished sheepskin leather without wool
- Flow property / unit: Mass / kg
- Amount rule: measured net mass issued to the cutting order after verified returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue`
- Sources: `afw-pefcr-v3-1-2025`

###### Composition leather sheet (`composition_leather_sheet`)

Composition leather sheet is recorded only when the declared product uses leather-fibre sheet as a component with its formulation and thickness documented.

- Selected flow: Composition leather sheet
- Flow property / unit: Mass / kg
- Amount rule: measured net sheet mass issued to the cutting order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue`
- Sources: `afw-pefcr-v3-1-2025`

###### Finished woven polyester lining fabric (`lining_polyester_woven`)

Finished woven polyester lining fabric crosses the process boundary when it is cut as a separately specified lining or reinforcement layer.

- Selected flow: Finished woven polyester lining fabric
- Flow property / unit: Mass / kg
- Amount rule: measured net lining mass issued to the cutting order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity for cutting and skiving (`electricity_cutting`)

Metered electricity supplied to cutting presses, skiving or splitting machines, extraction, and directly attributable auxiliaries is recorded for this process.

- Selected flow: Electricity, consumed at leather-accessory assembly site
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or causally allocated meter consumption for cutting and skiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_energy`
- Sources: `afw-pefcr-v3-1-2025`

###### Compressed air for cutting equipment (`compressed_air_cutting`)

Compressed air is recorded separately when pneumatic cutting, skiving, or handling equipment consumes a measured or calculated supply.

- Selected flow: Compressed air, supplied at leather-accessory assembly site
- Flow property / unit: Volume / m3
- Amount rule: measured volume or equipment runtime multiplied by a verified operating flow rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_energy`
- Sources:

#### Outputs

##### Waste flows

###### Finished bovine leather cutting waste (`waste_leather_bovine_cutting`)

Segregated bovine-leather offcuts and unusable cut components leave this process under the documented treatment route.

- Selected flow: Finished bovine leather cutting waste
- Flow property / unit: Mass / kg
- Amount rule: measured net waste mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Finished sheepskin leather cutting waste (`waste_leather_sheepskin_cutting`)

Segregated sheepskin-leather offcuts and unusable cut components are recorded independently from other leather waste.

- Selected flow: Finished sheepskin leather cutting waste
- Flow property / unit: Mass / kg
- Amount rule: measured net waste mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Composition leather cutting waste (`waste_composition_leather_cutting`)

Composition-leather sheet offcuts are kept separate from natural-leather waste when their formulation and destination are documented.

- Selected flow: Composition leather cutting waste
- Flow property / unit: Mass / kg
- Amount rule: measured net waste mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyester lining cutting waste (`waste_polyester_lining_cutting`)

Polyester lining offcuts and unusable lining components are recorded as a distinct textile waste exchange.

- Selected flow: Polyester lining fabric cutting waste
- Flow property / unit: Mass / kg
- Amount rule: measured net waste mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste`
- Sources: `afw-pefcr-v3-1-2025`

### Process: Folding, sewing, assembly, and hardware setting (`assembly_hardware_setting`)

#### Inputs

##### Product flows

###### Polyester sewing thread (`thread_polyester`)

Polyester sewing thread enters the process when consumed in seams, folded edges, reinforcement, or hardware attachment.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: net issued mass or length multiplied by verified linear mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_materials`
- Sources: `csir-clri-leather-goods-2016`

###### Aqueous polyurethane dispersion for adhesive bonding (`polyurethane_dispersion_adhesive`)

Aqueous polyurethane dispersion is recorded only when the declared construction uses it as the named adhesive binder before folding or stitching.

- Selected flow: Polyurethane dispersion, aqueous
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied mass dispensed to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `csir-clri-leather-goods-2016`

###### Steel garment belt buckle (`buckle_steel`)

A steel buckle is recorded as a separate finished hardware component for belt or strap constructions that specify it.

- Selected flow: Steel garment belt buckle
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured mean mass of the exact buckle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_hardware`
- Sources: `afw-pefcr-v3-1-2025`

###### Brass garment snap fastener (`snap_fastener_brass`)

A brass snap fastener is counted and converted to mass separately when used in the declared accessory construction.

- Selected flow: Brass garment snap fastener
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured mean mass of the exact fastener assembly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_hardware`
- Sources: `afw-pefcr-v3-1-2025`

###### Steel garment eyelet (`eyelet_steel`)

A steel eyelet is recorded independently from buckles and snap fasteners when installed for adjustment or reinforcement.

- Selected flow: Steel garment eyelet
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured mean mass of the exact eyelet
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_hardware`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyoxymethylene garment strap adjuster (`adjuster_pom`)

A polyoxymethylene adjuster is recorded as a distinct polymer component when present on suspenders, braces, or adjustable straps.

- Selected flow: Polyoxymethylene garment strap adjuster
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured mean mass of the exact adjuster
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_hardware`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity for sewing and hardware setting (`electricity_assembly`)

Electricity used by sewing, folding, pressing, riveting, eyelet, and buckle-setting equipment is recorded for this process.

- Selected flow: Electricity, consumed at leather-accessory assembly site
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or causally allocated meter consumption for assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources: `afw-pefcr-v3-1-2025`; `unido-leather-products-1982`

#### Outputs

##### Waste flows

###### Steel garment-hardware scrap (`scrap_steel_hardware`)

Rejected steel buckles, eyelets, and clean steel setting scrap are recorded together only when transferred as one documented segregated steel grade.

- Selected flow: Steel garment-hardware scrap
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_scrap`
- Sources: `afw-pefcr-v3-1-2025`

###### Brass garment-hardware scrap (`scrap_brass_hardware`)

Rejected brass snap fasteners and clean brass setting scrap are weighed independently from steel scrap.

- Selected flow: Brass garment-hardware scrap
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_scrap`
- Sources: `afw-pefcr-v3-1-2025`

### Process: Edge and surface finishing (`edge_surface_finishing`)

#### Inputs

##### Product flows

###### Electricity for edge and surface finishing (`electricity_edge_finishing`)

Electricity consumed by edge-coating, drying, polishing, local extraction, and directly attributable cleaning equipment is recorded separately.

- Selected flow: Electricity, consumed at leather-accessory assembly site
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or causally allocated meter consumption for finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources: `afw-pefcr-v3-1-2025`

###### Aqueous acrylic dispersion for edge coating (`acrylic_dispersion_edge_coating`)

Aqueous acrylic polymer dispersion is recorded only when the declared edge-finishing recipe applies this named binder onsite; pigments and other chemicals require their own rows.

- Selected flow: Acrylic polymer dispersion, aqueous
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied mass dispensed to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `csir-clri-leather-goods-2016`

###### Beeswax for edge polishing (`beeswax_polishing`)

Beeswax crosses the process boundary when the declared route uses it as the named polishing material after edge finishing.

- Selected flow: Beeswax
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued and consumed for the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `csir-clri-leather-goods-2016`

###### Process water for finishing-equipment cleaning (`process_water_finishing`)

Process water is recorded when onsite cleaning of waterborne edge-coating equipment consumes a metered supply.

- Selected flow: Process water for leather-accessory finishing
- Flow property / unit: Mass / kg
- Amount rule: metered cleaning water entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_water`
- Sources:

#### Outputs

##### Waste flows

###### Waterborne-finishing wastewater (`wastewater_finishing`)

Wastewater from cleaning aqueous edge-coating equipment is recorded at the transfer point to onsite or offsite treatment.

- Selected flow: Leather-accessory waterborne-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered mass or volume converted with measured density, with treatment destination retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_outputs`
- Sources:

###### Acrylic edge-coating treatment sludge (`sludge_edge_coating`)

Sludge is recorded only when onsite treatment or solids separation generates a separately handled residue from acrylic edge-coating wastewater.

- Selected flow: Acrylic edge-coating treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet sludge mass with solids content and treatment destination disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources:

### Process: Final inspection and sales packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Electricity for inspection and packaging (`electricity_packaging`)

Electricity used by inspection lighting, labelling, sealing, and packing equipment is recorded for final processing.

- Selected flow: Electricity, consumed at leather-accessory assembly site
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or causally allocated meter consumption for inspection and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`
- Sources: `afw-pefcr-v3-1-2025`

###### Corrugated paperboard shipping carton (`carton_corrugated`)

Corrugated cartons used for factory-gate shipment are recorded separately from primary bags and paper hangtags.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: measured carton mass consumed for the declared packed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `afw-pefcr-v3-1-2025`

###### Low-density polyethylene garment bag (`bag_ldpe`)

An LDPE bag directly containing the accessory is recorded as one plastic packaging exchange when used.

- Selected flow: Low-density polyethylene garment bag
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured mean mass of the exact bag
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `afw-pefcr-v3-1-2025`

###### Printed paper garment hangtag (`hangtag_paper`)

Printed paper hangtags are recorded independently from cartons, bags, and permanent product labels.

- Selected flow: Printed paper garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured mean mass of the exact hangtag
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `afw-pefcr-v3-1-2025`

#### Outputs

##### Product flows

###### Accepted finished reference product (`finished_reference_product`)

The accepted factory-gate output uses the exact CPC 28242 Product flow and excludes sales-packaging mass.

- Selected flow: Clothing accessories of leather or of composition leather, except sports gloves `7b7924ae-e421-4da5-851e-51ab4012cfc8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg accepted finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Corrugated paperboard packaging waste (`waste_corrugated`)

Damaged cartons and paperboard trim generated during onsite packaging are recorded as segregated paperboard waste.

- Selected flow: Corrugated paperboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured net mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Low-density polyethylene film waste (`waste_ldpe`)

Damaged or unused LDPE bags and film trim are recorded separately from paperboard waste.

- Selected flow: Low-density polyethylene film waste
- Flow property / unit: Mass / kg
- Amount rule: measured net mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Rejected finished CPC 28242 accessory (`rejected_finished_accessory`)

Finished accessories failing final inspection and leaving the system as waste are recorded independently from items successfully reworked into accepted output.

- Selected flow: Rejected CPC 28242 finished leather clothing accessory
- Flow property / unit: Mass / kg
- Amount rule: measured rejected-product mass by treatment destination, excluding successful rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `afw-pefcr-v3-1-2025`

### Process: Shared facility thermal utilities, fuels, refrigeration, and direct emissions (`facility_utilities`)

#### Inputs

##### Product flows

###### Purchased steam for facility thermal demand (`purchased_steam_facility`)

Purchased steam is recorded as a distinct utility only when it crosses the facility boundary for an included process; steam generated onsite from a recorded fuel is not counted again.

- Selected flow: Steam, purchased at leather-accessory assembly site
- Flow property / unit: Energy / MJ
- Amount rule: measured purchased-steam energy at the facility boundary and causally allocated to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_thermal_utilities`
- Sources: `afw-pefcr-v3-1-2025`

###### Purchased hot water for facility thermal demand (`purchased_hot_water_facility`)

Purchased hot water is recorded separately when it crosses the facility boundary for included cleaning, conditioning, or other documented thermal demand; internally heated water is not double counted.

- Selected flow: Hot water, purchased at leather-accessory assembly site
- Flow property / unit: Energy / MJ
- Amount rule: measured purchased-hot-water energy at the facility boundary and causally allocated to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_thermal_utilities`
- Sources: `afw-pefcr-v3-1-2025`

###### Natural gas for onsite boiler (`natural_gas_facility`)

Natural gas is recorded only when an onsite boiler supplies included processes and its useful energy is not already represented as a purchased utility.

- Selected flow: Natural gas, combusted in site boiler
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted using the recorded net calorific value and causally allocated
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_fuels`
- Sources: `afw-pefcr-v3-1-2025`

###### Diesel fuel for stationary backup generator (`diesel_backup_facility`)

Diesel consumed by a stationary backup generator is recorded separately when its electricity serves included production.

- Selected flow: Diesel fuel for stationary backup generator
- Flow property / unit: Energy / MJ
- Amount rule: measured diesel quantity converted using the recorded net calorific value and causally allocated
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_fuels`
- Sources: `afw-pefcr-v3-1-2025`

###### LPG for leather-goods spot heating (`lpg_facility`)

Liquefied petroleum gas used for declared spot heating or finishing equipment is recorded as its own fuel exchange.

- Selected flow: Liquefied petroleum gas for leather-goods spot heating
- Flow property / unit: Energy / MJ
- Amount rule: measured LPG quantity converted using the recorded net calorific value and causally allocated
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_fuels`
- Sources: `afw-pefcr-v3-1-2025`

###### HFC-134a refrigerant recharge (`refrigerant_r134a_facility`)

HFC-134a added to included cooling equipment is recorded from equipment-level service and inventory records; other refrigerants require separate rows.

- Selected flow: 1,1,1,2-tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: measured purchased and charged refrigerant mass by equipment and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources:

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide to air (`carbon_dioxide_fossil_air`)

Fossil carbon dioxide from included onsite fuel combustion is reported as a separate direct elementary emission.

- Selected flow: Carbon dioxide, fossil, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated independently from each measured fuel using a disclosed approved factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Fossil methane to air (`methane_fossil_air`)

Fossil methane from included onsite combustion is reported independently from carbon dioxide and dinitrogen monoxide.

- Selected flow: Methane, fossil, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated independently from each measured fuel using a disclosed approved factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Dinitrogen monoxide to air (`dinitrogen_monoxide_air`)

Dinitrogen monoxide from included onsite combustion is reported as its own elementary emission.

- Selected flow: Dinitrogen monoxide, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated independently from each measured fuel using a disclosed approved factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Nitrogen oxides to air (`nitrogen_oxides_air`)

Nitrogen oxides from included onsite combustion are reported separately when stack measurements or an approved calculation provide the amount.

- Selected flow: Nitrogen oxides, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or calculated independently from each measured fuel using a disclosed approved factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Sulfur dioxide to air (`sulfur_dioxide_air`)

Sulfur dioxide from included onsite combustion is reported independently when measured fuel sulfur or stack data support the amount.

- Selected flow: Sulfur dioxide, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or calculation from measured fuel sulfur and fuel consumption using a disclosed factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### HFC-134a to air (`hfc134a_air`)

HFC-134a leakage is reported using an equipment-level refrigerant mass balance and is not replaced by a generic refrigerant emission.

- Selected flow: 1,1,1,2-tetrafluoroethane (HFC-134a), emission to air
- Flow property / unit: Mass / kg
- Amount rule: calculated loss from opening inventory, purchases, charges, recovery, and closing inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_processes | Use product-line or process sub-metering and subdivision before allocation whenever records distinguish the declared product. | `afw-pefcr-v3-1-2025` |
| `allocation_comparable_units` | shared_cutting_and_assembly | When subdivision is unavailable, allocate shared records by accepted units only for materially and technologically comparable accessories, then convert to the 1 kg reference flow using measured unit mass; otherwise use a documented causal driver. | `afw-pefcr-v3-1-2025` |
| `allocation_energy_mix` | multiple_sites_or_energy_sources | Build a production-weighted electricity mix from measured kWh and production mass; do not assign a preferred mix to one product without physical metering or equivalent records. | `afw-pefcr-v3-1-2025` |
| `allocation_rework_and_waste` | rework_and_rejected_product | Return successful rework to its originating process without counting another finished output; assign waste treatment to the generating process and disclose downstream recycling-credit treatment. | `afw-pefcr-v3-1-2025` |
| `allocation_no_unrecorded_coproduct` | saleable_offcuts_or_by_products | Report every saleable offcut or by-product explicitly; attempt subdivision first and obtain methodology review before applying non-physical allocation. | `afw-pefcr-v3-1-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issue` | `material_preparation_cutting` | named leather, composition leather, and lining | BOM, supplier specification, issue and return record | product_id; batch_id; material_id; species; composition; tanning_route; finish; thickness; issued_mass; returned_mass; moisture_basis | reconcile production-order issues and returns against the approved BOM | kg | each production order | representative annual period and declared batch | every included cutting site | sum net issued mass separately by atomic material row and divide by accepted product mass | signed BOM; supplier specification; calibrated scale; stock reconciliation |
| `cp_cutting_energy` | `material_preparation_cutting` | electricity and compressed air | sub-meter, main meter, runtime, and equipment specification | meter_start; meter_end; equipment_id; runtime; verified_flow_rate; allocated_output | direct meter reading; for compressed air only, runtime multiplied by verified flow rate when no meter exists | kWh; m3 | each batch or meter period | representative annual period | each included cutting area | causally allocate each utility separately and normalize by accepted product mass | meter calibration; equipment specification; allocation worksheet |
| `cp_cutting_waste` | `material_preparation_cutting` | composition-specific cutting waste | waste-bin and shipment record | material_id; composition; batch_id; gross_mass; tare_mass; destination; treatment_route | weigh segregated waste at process transfer or shipment | kg | each batch or waste shipment | representative annual period | each included cutting area | sum each waste composition and destination separately | scale calibration; waste transfer note; segregation audit |
| `cp_assembly_materials` | `assembly_hardware_setting` | sewing thread and polyurethane dispersion | issue, return, length, dosing, and stock record | material_id; batch_id; issued_mass; returned_mass; length; linear_mass; dose_mass; solids_content | weigh net issued material or calculate thread mass from verified length and linear mass | kg; m | each production order | representative annual period | each included assembly line | aggregate each atomic material separately and normalize by accepted product mass | BOM; scale calibration; technical data sheet; stock reconciliation |
| `cp_assembly_hardware` | `assembly_hardware_setting` | named buckle, fastener, eyelet, and adjuster | component issue, count, and mass sample | component_id; material; coating; item_count; sample_count; sample_mass; returned_count | count exact components and measure representative component mass | kg; item | each production order | representative annual period | each included assembly line | convert each component count separately and normalize by accepted product mass | component specification; calibrated scale; count reconciliation |
| `cp_assembly_energy` | `assembly_hardware_setting` | assembly electricity | sub-meter or allocated main-meter record | meter_start; meter_end; line_id; accepted_units; accepted_mass | direct meter reading or documented causal allocation | kWh | each batch or meter period | representative annual period | each included assembly line | allocate by comparable accepted units or another causal driver, then normalize by accepted mass | meter calibration; production report; allocation worksheet |
| `cp_hardware_scrap` | `assembly_hardware_setting` | segregated steel and brass scrap | scrap-bin and shipment record | material; grade; gross_mass; tare_mass; destination | weigh each segregated metal grade | kg | each shipment | representative annual period | each included assembly site | sum each metal grade and destination separately | scale calibration; waste transfer note; grade declaration |
| `cp_finishing_materials` | `edge_surface_finishing` | acrylic dispersion and beeswax | recipe, dosing, issue, return, and stock record | material_id; recipe_id; solids_content; dose_mass; issued_mass; returned_mass; batch_mass | reconcile each named material against the approved finishing recipe and stock movement | kg | each finishing batch | representative annual period | each included finishing line | sum each atomic material separately and normalize by accepted mass | recipe approval; technical data sheet; scale calibration; stock reconciliation |
| `cp_finishing_energy` | `edge_surface_finishing` | finishing electricity | sub-meter or allocated main-meter record | meter_start; meter_end; line_id; batch_id; accepted_mass | direct meter reading or documented causal allocation | kWh | each batch or meter period | representative annual period | each included finishing line | allocate and normalize by accepted product mass | meter calibration; production report; allocation worksheet |
| `cp_finishing_water` | `edge_surface_finishing` | equipment-cleaning water | water meter and cleaning log | meter_start; meter_end; cleaning_event; equipment_id; batch_id | meter water at the finishing line or use a verified container-volume record | kg | each cleaning event | representative annual period | each included finishing line | aggregate cleaning water and normalize by accepted mass | meter calibration; cleaning log; container calibration |
| `cp_finishing_outputs` | `edge_surface_finishing` | wastewater and acrylic sludge | discharge meter, treatment log, and waste shipment record | discharge_volume; density; treatment_boundary; sludge_wet_mass; solids_content; destination | meter discharge and weigh sludge at the declared treatment boundary | kg | each discharge or shipment | representative annual period | each included treatment boundary | aggregate wastewater and sludge separately and normalize by accepted mass | meter calibration; treatment log; laboratory record; transfer note |
| `cp_packaging_inputs` | `inspection_packaging` | carton, LDPE bag, and paper hangtag | packaging BOM, issue, count, and mass sample | packaging_id; material; item_count; sample_count; sample_mass; issued_mass; returned_mass | weigh bulk packaging or convert exact item counts using measured mean mass | kg; item | each packing order | representative annual period | each included packing site | sum each packaging material separately and normalize by accepted product mass | packaging specification; scale calibration; stock reconciliation |
| `cp_packaging_energy` | `inspection_packaging` | inspection and packaging electricity | sub-meter or allocated main-meter record | meter_start; meter_end; area_id; accepted_units; accepted_mass | direct meter reading or documented causal allocation | kWh | each batch or meter period | representative annual period | each included final-processing area | allocate and normalize by accepted product mass | meter calibration; production report; allocation worksheet |
| `cp_packaging_waste` | `inspection_packaging` | paperboard waste, LDPE waste, and rejected accessory | inspection disposition and waste transfer record | waste_id; material; gross_mass; tare_mass; reject_reason; rework_status; destination | weigh each segregated waste and exclude successfully reworked product | kg | each batch or shipment | representative annual period | each included packing site | sum each atomic waste by destination and normalize by accepted mass | scale calibration; final-inspection report; transfer note |
| `cp_facility_thermal_utilities` | `facility_utilities` | purchased steam and purchased hot water | supplier meter, invoice, and utility-condition record | utility_name; meter_start; meter_end; supplied_pressure; supplied_temperature; energy_quantity; allocation_driver | read each purchased thermal utility separately at the facility boundary | MJ | each billing or meter period | representative annual period | each included purchased-utility connection | allocate each thermal utility causally and normalize by accepted product mass; exclude thermal energy generated from already recorded onsite fuels | meter calibration; invoice; supplier condition statement; allocation worksheet |
| `cp_facility_fuels` | `facility_utilities` | natural gas, diesel, and LPG | meter, invoice, stock, tank, and calorific-value record | fuel_name; quantity; unit; net_calorific_value; opening_stock; purchases; closing_stock; equipment_id; allocation_driver | meter or reconcile purchases and stocks; convert each fuel separately | MJ | each billing or inventory period | representative annual period | each included utility system | subtract stock change, allocate causally, and normalize by accepted mass | meter calibration; invoice; tank reconciliation; fuel certificate |
| `cp_refrigerant_balance` | `facility_utilities` | HFC-134a recharge and leakage | equipment-level refrigerant inventory | equipment_id; refrigerant_name; opening_stock; purchases; charges; recovery; closing_stock | reconcile refrigerant mass by equipment and period | kg | each service event and annually | representative annual period | included cooling equipment | calculate HFC-134a loss by mass balance and allocate causally | service log; cylinder weights; purchase invoice; technician record |
| `cp_direct_emissions` | `facility_utilities` | named combustion emissions | stack test, fuel record, property, and factor record | pollutant_name; measured_concentration; exhaust_volume; fuel_quantity; factor_value; factor_source; equipment_id | use representative stack measurements where available; otherwise apply a disclosed approved factor to each measured fuel | kg | each test and reporting period | representative annual period | each included combustion source | calculate each pollutant independently, allocate causally, and normalize by accepted mass | laboratory report; factor reference; fuel record; calculation worksheet |
| `cp_final_product_mass` | `inspection_packaging` | accepted finished reference product | inspection, count, and net-mass record | product_id; specification_revision; reference_size; accepted_count; sample_count; net_sample_mass; accepted_net_mass | weigh accepted output net of packaging or convert counts using verified mean net mass | kg | each production batch | representative annual period | every final inspection point | sum accepted net product mass by specification | calibrated scale; inspection release; count reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | material and chemical rows | net material input = issued mass - verified return to stock | issued mass; returned mass | kg named input per kg accepted product | `afw-pefcr-v3-1-2025` |
| `calc_area_to_mass` | leather records stated by area | leather mass = sampled area x batch-specific measured areal mass; do not use a generic leather conversion | sampled area; sampled mass; issued area | kg exact leather per kg accepted product |  |
| `calc_item_component_mass` | counted hardware and packaging | component mass = item count x measured mean mass of the exact specified item | item count; sample count; sample mass | kg named component per kg accepted product | `afw-pefcr-v3-1-2025` |
| `calc_assembly_loss` | cutting and rejected-product losses | reconcile BOM input with accepted product, verified returns, retained work in progress, and each measured composition-specific waste; report each residual above measurement uncertainty | BOM inputs; accepted mass; returns; work in progress; measured wastes | kg loss and residual by atomic waste row | `afw-pefcr-v3-1-2025` |
| `calc_energy_normalization` | electricity and fuels | normalized energy = measured or causally allocated energy / accepted net product mass | meter delta or fuel energy; allocation driver; accepted mass | kWh or MJ per kg accepted product | `afw-pefcr-v3-1-2025` |
| `calc_direct_combustion_emission` | named direct combustion emissions | emission = measured fuel quantity x disclosed approved factor unless a representative stack measurement is used; calculate each fuel and pollutant independently | measured fuel; net calorific value if required; factor or stack result | kg named pollutant per kg accepted product |  |
| `calc_refrigerant_loss` | HFC-134a emission | loss = opening stock + purchases - closing stock - documented contained-inventory increase - recovered mass | opening and closing stock; purchases; charges; recovery; equipment inventory | kg HFC-134a emitted per kg accepted product |  |
| `calc_mass_balance` | complete foreground system | reconcile named inputs with accepted product, returns, work in progress, composition-specific wastes, measured wastewater and sludge, and stock changes; explain residual above declared uncertainty | all mass records and stock changes | batch mass-balance statement and residual | `afw-pefcr-v3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Use the exact CPC 28242 Product flow and retain a specification proving the item is a leather or composition-leather clothing accessory and not a sports glove or excluded product. | state-100 Tiangong identity; approved product specification; classification record |
| `dq_bom_coverage` | material inputs | Cover at least 95% of product weight and 100% of leather, composition leather, lining, reinforcement, and metals; explain every uncovered share. | BOM coverage calculation; supplier specifications |
| `dq_leather_traceability` | leather inputs | Record animal species, tanning route when known, surface finish, thickness, supplier, origin, and upstream dataset; never substitute furskin for leather without changing scope. | supplier declaration; purchase specification; traceability record |
| `dq_measurement` | foreground amounts | Use calibrated instruments; retain raw readings, conversions, sampling basis, and measurement uncertainty or tolerance. | calibration certificates; raw meter and scale records; conversion worksheet |
| `dq_temporal` | foreground records | Use a representative annual administrative period or justify a shorter campaign; identify shutdown, start-up, rework, and abnormal rejection periods. | production calendar; utility period; batch list; representativeness assessment |
| `dq_completeness` | process and atomic flows | Reconcile every included process and record each applicable material, utility, chemical, packaging item, waste, refrigerant, and emission separately; justify each not-applicable row. | route-to-inventory checklist; mass and energy reconciliation; exception log |
| `dq_supplier_geography` | upstream datasets | Match materials, electricity, fuels, components, and packaging to supplier geography and technology when known; document proxies and consequences. | supplier declarations; invoices; dataset mapping log |
| `dq_uuid_status` | non-reference identities | Leave a UUID blank until hybrid search and a direct state-code-100 read confirm the same atomic identity; review manifest `inventory_uuid_review` before publication. | dual-verification record or manifest omission reason |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Fail if the reference UUID, exact CPC 28242 classification, Product flow type, Mass UUID, Units of mass UUID, or kg unit differs from this PCR. | `un-cpc-3-2025` |
| `validate_scope_exclusions` | product_identity | Fail if the product is a sports glove, leather garment, footwear, bag, wallet, purse, general-purpose strap, saddlery, headgear, furskin article, or accessory whose essential character is not leather or composition leather. | `un-cpc-3-2025`; `ec-access2markets-leather-classification` |
| `validate_reference_amount` | finished_reference_product | Require exactly 1 kg accepted net finished product; exclude packaging mass and retain packaging in separate rows when used. | `afw-pefcr-v3-1-2025` |
| `validate_required_qualifiers` | foreground_data_package | Fail completeness if an applicable required qualifier, specification revision, size, production site, period, edge-finishing route, or sports-glove exclusion is missing. | `afw-pefcr-v3-1-2025` |
| `validate_bom_and_losses` | material_mass_balance | Require at least 95% BOM coverage, all leather/composition leather/lining/reinforcement/metals, and reconciliation of returns, work in progress, cutting waste, hardware scrap, finishing residue, and rejected product. | `afw-pefcr-v3-1-2025` |
| `validate_atomic_inventory` | process_inventory | Fail if a selected flow combines multiple materials, electricity with another utility, multiple fuels, multiple refrigerants, multiple chemicals, multiple packaging materials, multiple waste identities, or multiple elementary emissions. |  |
| `validate_conditional_routes` | conditional_processes | Require route records or a documented not-applicable decision for finishing, each fuel, refrigerant, wastewater, sludge, and direct emission; do not infer their use from sector averages. | `csir-clri-leather-goods-2016`; `afw-pefcr-v3-1-2025` |
| `validate_uuid_dual_check` | non_reference_uuid | Fail if a non-reference UUID is populated without both a matching hybrid-search result and direct state-code-100 read for the same atomic flow. |  |
| `validate_no_invented_quantities` | foreground_amounts | Require collected foreground records or declared calculations; fail uncited defaults, reasoned estimates, AI-generated values, and unsupported ranges. |  |
| `validate_bilingual_alignment` | localized_markdown | Require identical ordered process ids, row ids, selected flows, UUIDs, controlled amount fields, rule ids, source ids, and source records in English and Chinese. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared CPC 28242 leather or composition-leather clothing accessory |
| downstream_use | `secondary_dataset`; `background_dataset` after review of product, geography, technology, period, and data quality |
| allowed_use | Product-specific process modelling, supply-chain LCA, lifecycle-model construction, and product-footprint studies; comparison only for equivalent function, accessory type, material, boundary, geography, technology, allocation, and data quality |
| excluded_use | Consumer-use or maintenance modelling without a separate use-stage model; sports gloves; excluded leather products; substitution for tanning or composition-leather production; unqualified comparisons; treating candidate UUIDs as confirmed |
| required_metadata | PCR id and version; CPC code; accessory type; leather or composition-leather identity; species; tanning and finish; thickness; BOM and coverage; size; hardware; construction; edge finish; site and geography; period; route; packaging; allocation; sources; Tiangong identity status |
| required_quality_disclosure | Foreground versus upstream data share; meter and scale coverage; BOM coverage; leather traceability; temporal representativeness; supplier geography; allocations; mass-balance residual; waste destinations; conditional-row decisions; unresolved UUIDs and dataset proxies |
| update_trigger | Change in product scope, material identity, leather species or finish, BOM, size, construction, manufacturing route, site, suppliers, energy system, finishing chemistry, packaging, allocation, treatment route, reference-flow identity, or material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division. Central Product Classification Version 3.0, Explanatory Notes, subclass 28242, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | Exact CPC 28242 identity and category boundary |
| `ec-access2markets-leather-classification` | official_guidance | European Commission, Access2Markets. Classifying leather: clothing and accessories. https://webgate.acceptance.ec.europa.eu/portal9/en/content/classifying-leather (retrieved 2026-08-13) | Distinguishing leather clothing accessories such as belts, bandoliers, ties, wrist straps, sleeves and braces from bags, miscellaneous articles, fur articles and other classifications |
| `afw-pefcr-v3-1-2025` | official_guidance | Technical Secretariat of the Product Environmental Footprint Category Rules for Apparel and Footwear. Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025. https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (retrieved 2026-08-13) | Apparel-accessory scope; BOM coverage; manufacturing boundary; cutting and assembly losses; packaging; energy, allocation, collection, data-quality and verification rules |
| `csir-clri-leather-goods-2016` | extension_guidance | CSIR-Central Leather Research Institute. Designing and Making of Leather Goods e-Learning Course and Executive Training Programme in Leather Goods Manufacture. https://clri.org/elearn/ and https://clri.org/ScriptPictures/CLAD/ETPGoods.pdf (retrieved 2026-08-13) | Leather-goods process decomposition covering pattern making, cutting, table operations, assembly, stitching, finishing, and product quality control |
| `unido-leather-products-1982` | official_guidance | United Nations Industrial Development Organization. UNIDO Technical Assistance Activities in the Field of Leather and Leather Products as at End September 1982, report 12396.en. https://downloads.unido.org/ot/47/94/4794486/10001-15000_12396.pdf | Institutional technical evidence for leather-goods component selection, cutting, skiving, sewing, assembly, finishing, equipment, production management and quality operations |
