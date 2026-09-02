---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.brassieres-girdles-corsets-braces-suspenders-garters-and-similar-articles-and-parts-the-6c54077f
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Brassieres, girdles, corsets, braces, suspenders, garters and similar articles and parts thereof, whether or not knitted or crocheted

## 1. Scope and Applicability

This PCR covers factory-gate production of brassieres, girdles, corsets, body-shaping braces, suspenders, garters, similar body-support articles, and identifiable parts thereof, whether knitted, crocheted, or made from other textile constructions. It applies to cutting, cup or component preparation, sewing, hardware attachment, conditional garment wet finishing, pressing, inspection, and sales-packaging operations performed for a declared product specification.

Production of fibres, yarns, fabrics, lace, elastic narrow fabrics, foam, metal hardware, plastics, chemicals, fuels, electricity, and packaging is represented by upstream datasets unless those processes are physically performed inside the reporting facility. Distribution beyond the factory gate, retail, consumer use and care, repair, and end-of-life are outside this foreground production boundary. General underwear, swimwear, hosiery, ordinary belts, medical devices with a regulated therapeutic function, and finished garments or accessories outside the CPC 28237 semantic boundary are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.brassieres-girdles-corsets-braces-suspenders-garters-and-similar-articles-and-parts-the-6c54077f |
| classification_refs | CPC 3.0: 28237 |
| covered_products | Brassieres; girdles; corsets; body-shaping braces; suspenders; garters; similar textile body-support articles; and identifiable parts thereof, whether or not knitted or crocheted |
| excluded_products | General underwear not meeting the body-support article scope; swimwear; hosiery; ordinary belts; regulated therapeutic medical devices; upstream textile materials sold as materials; distribution, use, and end-of-life services |
| representative_product | Factory-gate finished brassiere with declared textile composition, elastic components, closures, optional padding and optional underwire |
| production_route | Production-ready fabrics and components received at the garment factory; cutting and component preparation; sewing and hardware assembly; conditional wet finishing; inspection; pressing; and sales packaging |
| market_state | Quality-conforming finished article or identifiable finished part, packaged at the manufacturing plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and deliver at the factory gate a quality-conforming CPC 28237 body-support article or identifiable part that meets its declared fit, support, material, construction, and hardware specification |
| How much | 1 kg of finished reference product |
| How well | Conforming to the declared product specification and final quality inspection, with composition, size or fit designation, support construction, padding, underwire, closure, and finish disclosed as applicable |
| How long or cycle | One declared production batch; consumer service life and use cycles are not part of this foreground production reference |
| reference_flow_link | `finished_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Brassieres, girdles, corsets, braces, suspenders, garters and similar articles and parts thereof, whether or not knitted or crocheted `b1e1a830-20ee-40f3-a59d-87d1dc561706` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | article type; finished article or part; knitted, crocheted, or other textile construction; bill of materials and mass shares; reference size and sizing system; cup and band or equivalent fit designation when applicable; wired or non-wired; padded, moulded, or unpadded; closure and strap configuration; manufacturing site and geography; production period; wet-finishing route; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg of accepted finished product at the factory gate; exclude packaging mass from the reference-product mass and record packaging in separate rows. |
| `item_to_mass_conversion` | production or purchasing records stated per item | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts to mass using measured net product mass for the declared reference size and product specification; retain item count, measured sample size, mean mass, and conversion calculation. |
| `bom_mass_basis` | finished product bill of materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record component masses on a dry or as-received basis consistently, disclose the basis, and reconcile at least 95% by weight of the product BOM, including all main fabrics, lining, padding, metals, and declared hardware. |
| `energy_unit_conversion` | electricity and thermal-energy records | Energy | kWh and MJ | Preserve measured billing or meter units, report conversion factors, and convert only for aggregation; do not combine electricity, steam, hot water, natural gas, diesel, or LPG into one inventory exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Production-ready fabrics, lace, elastic narrow fabrics, thread, foam or padding, metal and polymer hardware, chemicals, and packaging arrive at the reporting facility with supplier identity, mass, composition, and upstream dataset references. |
| starting_condition_role | Gate-to-gate foreground starting condition for garment component preparation and assembly |
| product_classification_scope | CPC 3.0 subclass 28237 only; the category is independent of whether the textile construction is knitted or crocheted. |
| recursive_input_rule | When an externally supplied input is itself a CPC 28237 article or identifiable part, record it once as an upstream product input with its supplier dataset and do not recreate its production inside this foreground system. |
| upstream_dataset_requirement | Each purchased material, component, chemical, utility, fuel, and packaging input requires a geographically and technologically representative upstream dataset or an explicit documented data gap. |
| disclosure | Declare product specification, BOM coverage, reference size, production sites and period, included and excluded process steps, supplier geography, allocation basis, material and energy losses, wet-finishing route, rejected-product handling, packaging configuration, and all unresolved upstream data gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_product_system | Include receiving-to-factory-gate component preparation, cutting, sewing, hardware assembly, conditional wet processing, final inspection, pressing, and sales packaging when physically performed for the declared product. | `afw-pefcr-v3-1-2025` |
| `boundary_upstream_materials` | purchased_materials_and_components | Keep production of fibres, yarns, fabrics, lace, elastic, foam, hardware, chemicals, fuels, utilities, and packaging upstream unless the reporting facility physically performs that operation; connect each purchased input to an upstream dataset. | `afw-pefcr-v3-1-2025` |
| `boundary_wet_finishing_condition` | wet_finishing | Include garment washing, bleaching, dyeing, or finishing only when the declared route performs it at the reporting facility; otherwise mark the process and every associated atomic exchange not applicable and identify the upstream finished-fabric dataset. | `eu-jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025` |
| `boundary_losses_and_waste` | manufacturing_losses | Include cutting losses, component defects, sewing errors, rejected products, wastewater, sludge, packaging waste, and their actual treatment routes in the life-cycle stage where they occur. | `afw-pefcr-v3-1-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cutting_component_preparation` | Cutting and component preparation | required | Always included for factory assembly from production-ready materials; individual material rows apply only when present in the declared BOM. | Foreground cutting, cup or foam preparation, and component shaping | Per 1 kg accepted finished reference product |
| `sewing_hardware_assembly` | Sewing and hardware assembly | required | Always included; hardware rows apply only when the declared design contains that hardware. | Foreground sewing, elastic application, closure attachment, and article assembly | Per 1 kg accepted finished reference product |
| `wet_finishing` | Garment wet finishing | conditional | Included only when washing, bleaching, dyeing, rinsing, or chemical finishing occurs at the reporting facility. | Foreground wet treatment and wastewater generation | Per 1 kg accepted finished reference product |
| `inspection_packaging` | Final inspection, pressing, and packaging | required | Always include final quality inspection; pressing and each packaging row apply when used by the declared route. | Foreground final acceptance and factory-gate packaging | Per 1 kg accepted finished reference product |
| `facility_utilities` | Shared facility utilities and direct emissions | conditional | Included for fuels, backup generation, spot heating, refrigeration recharge, and direct emissions that serve the product but are not already metered to another process. | Shared foreground utility allocation and direct site emissions | Per 1 kg accepted finished reference product |

### Process: Cutting and component preparation (`cutting_component_preparation`)

#### Inputs

##### Product flows

###### Polyamide-elastane body fabric (`fabric_polyamide_elastane`)

Finished polyamide-elastane knitted fabric crosses the foreground boundary when it is issued to cutting for panels, wings, cups, or support sections in a BOM that specifies this construction.

- Selected flow: Finished polyamide-elastane knitted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the cutting order, net of separately recorded returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyester-elastane body fabric (`fabric_polyester_elastane`)

Finished polyester-elastane knitted fabric is recorded separately when the declared BOM uses it for body, cup, wing, or support panels.

- Selected flow: Finished polyester-elastane knitted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the cutting order, net of separately recorded returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Cotton-elastane body fabric (`fabric_cotton_elastane`)

Finished cotton-elastane knitted fabric is recorded only for products whose BOM declares that material and construction.

- Selected flow: Finished cotton-elastane knitted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the cutting order, net of separately recorded returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyamide lace fabric (`lace_polyamide`)

Finished polyamide lace fabric is recorded when lace is cut as an identifiable product component rather than being included in a generic fabric total.

- Selected flow: Finished polyamide lace fabric
- Flow property / unit: Mass / kg
- Amount rule: measured lace mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `munasinghe-et-al-2016-bra-lca`; `afw-pefcr-v3-1-2025`

###### Flexible polyurethane foam sheet (`foam_polyurethane`)

Flexible polyurethane foam sheet is recorded when foam is cut or moulded into cup, padding, or support components inside the foreground facility.

- Selected flow: Flexible polyurethane foam sheet
- Flow property / unit: Mass / kg
- Amount rule: measured foam sheet mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Thermoplastic polyurethane hot-melt adhesive film (`adhesive_polyurethane_hot_melt`)

Thermoplastic polyurethane hot-melt adhesive film is recorded only when bonded or seamless component construction consumes this supplied adhesive film.

- Selected flow: Thermoplastic polyurethane hot-melt adhesive film
- Flow property / unit: Mass / kg
- Amount rule: measured adhesive-film mass issued and consumed for the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity for cutting and moulding (`electricity_cutting`)

Metered electricity supplied to cutters, presses, moulding equipment, local extraction, and directly attributable auxiliaries is recorded as one electricity exchange for this process.

- Selected flow: Electricity, consumed at garment assembly site
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or allocated meter consumption for cutting and component preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_energy`
- Sources: `afw-pefcr-v3-1-2025`

###### Compressed air for cutting equipment (`compressed_air_cutting`)

Compressed air is recorded separately when pneumatic cutters, moulding fixtures, or material-handling devices consume a measured or calculated supply.

- Selected flow: Compressed air, supplied at garment assembly site
- Flow property / unit: Volume / m3
- Amount rule: measured compressed-air volume or calculated volume from equipment runtime and verified flow rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_energy`
- Sources:

#### Outputs

##### Waste flows

###### Polyamide-elastane cutting waste (`waste_polyamide_elastane`)

Segregated polyamide-elastane offcuts and unusable cut parts leave the process as this waste only when the composition is documented.

- Selected flow: Polyamide-elastane textile cutting waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared reuse, recycling, treatment, or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyester-elastane cutting waste (`waste_polyester_elastane`)

Segregated polyester-elastane offcuts and unusable cut parts are recorded independently from other textile wastes.

- Selected flow: Polyester-elastane textile cutting waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared reuse, recycling, treatment, or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Cotton-elastane cutting waste (`waste_cotton_elastane`)

Segregated cotton-elastane offcuts and unusable cut parts are recorded independently when that material occurs in the BOM.

- Selected flow: Cotton-elastane textile cutting waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared reuse, recycling, treatment, or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyurethane foam cutting waste (`waste_polyurethane_foam`)

Polyurethane foam offcuts and rejected moulded foam components are weighed as a separate waste exchange.

- Selected flow: Polyurethane foam cutting waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared reuse, recycling, treatment, or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_waste`
- Sources: `afw-pefcr-v3-1-2025`

### Process: Sewing and hardware assembly (`sewing_hardware_assembly`)

#### Inputs

##### Product flows

###### Polyester sewing thread (`thread_polyester`)

Polyester sewing thread crosses the process boundary when it is consumed in seams, edge finishing, component attachment, or reinforcement.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured thread issued minus verified return to stock, or calculated from seam records and verified linear mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyamide-elastane narrow elastic fabric (`elastic_narrow_fabric`)

Narrow elastic fabric is recorded separately for bands, straps, binding, garters, suspenders, or support sections listed in the BOM.

- Selected flow: Polyamide-elastane narrow elastic fabric
- Flow property / unit: Mass / kg
- Amount rule: measured elastic mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_materials`
- Sources: `munasinghe-et-al-2016-bra-lca`; `afw-pefcr-v3-1-2025`

###### Coated steel brassiere underwire (`underwire_steel`)

Coated steel underwire is recorded only for wired designs and must not be combined with hooks, eyes, rings, or sliders.

- Selected flow: Coated steel brassiere underwire
- Flow property / unit: Mass / kg
- Amount rule: measured mass or item count converted using the verified mass of the specified underwire
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Steel hook-and-eye garment fastener (`hook_eye_steel`)

Steel hook-and-eye fasteners are recorded as their own purchased component when used for closures or adjustment.

- Selected flow: Steel hook-and-eye garment fastener
- Flow property / unit: Mass / kg
- Amount rule: item count converted using measured mass of the specified fastener assembly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyoxymethylene garment strap ring (`strap_ring_pom`)

Polyoxymethylene strap rings are counted and converted to mass separately from strap sliders when present in the design.

- Selected flow: Polyoxymethylene garment strap ring
- Flow property / unit: Mass / kg
- Amount rule: item count converted using measured mass of the specified ring
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyoxymethylene garment strap slider (`strap_slider_pom`)

Polyoxymethylene strap sliders are counted and converted to mass as a distinct component exchange.

- Selected flow: Polyoxymethylene garment strap slider
- Flow property / unit: Mass / kg
- Amount rule: item count converted using measured mass of the specified slider
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sewing_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity for sewing and hardware attachment (`electricity_sewing`)

Electricity consumed by sewing machines, bar-tackers, bonding equipment, and hardware-attachment equipment is recorded for this process.

- Selected flow: Electricity, consumed at garment assembly site
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or allocated meter consumption for sewing and hardware assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sewing_energy`
- Sources: `afw-pefcr-v3-1-2025`

#### Outputs

##### Waste flows

###### Steel garment-hardware scrap (`scrap_steel_hardware`)

Clean rejected underwires, hooks, eyes, or other documented steel hardware are combined in this row only when the waste shipment is a single segregated steel scrap grade.

- Selected flow: Steel garment-hardware scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to the declared steel-scrap treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_scrap`
- Sources: `afw-pefcr-v3-1-2025`

### Process: Garment wet finishing (`wet_finishing`)

#### Inputs

##### Product flows

###### Process water for wet finishing (`process_water_wet`)

Process water is recorded when onsite washing, bleaching, dyeing, rinsing, or chemical finishing is included for the declared product route.

- Selected flow: Process water for garment wet finishing
- Flow property / unit: Mass / kg
- Amount rule: metered water entering the wet-finishing process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_inputs`
- Sources: `eu-jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025`

###### Electricity for wet-finishing equipment (`electricity_wet`)

Electricity used by wet-finishing machines, pumps, extraction, and directly attributable treatment equipment is recorded separately from thermal utilities.

- Selected flow: Electricity, consumed at garment assembly site
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or allocated meter consumption for wet finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_energy`
- Sources: `afw-pefcr-v3-1-2025`

###### Purchased process steam (`purchased_steam_wet`)

Purchased steam crossing the site or process boundary is recorded as its own thermal-utility exchange when used by wet finishing.

- Selected flow: Purchased process steam
- Flow property / unit: Energy / MJ
- Amount rule: measured steam mass converted with recorded supply conditions, or direct energy meter reading
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_energy`
- Sources: `eu-jrc-textiles-bref-2023`

###### Purchased process hot water (`purchased_hot_water_wet`)

Purchased hot water is recorded separately from steam and onsite-heated water when it crosses the wet-finishing process boundary.

- Selected flow: Purchased process hot water
- Flow property / unit: Energy / MJ
- Amount rule: measured hot-water mass and inlet temperature converted to delivered thermal energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_energy`
- Sources: `eu-jrc-textiles-bref-2023`

###### Sodium carbonate for wet finishing (`sodium_carbonate_wet`)

Sodium carbonate is recorded as a single chemical only when a documented wet-finishing recipe consumes it onsite.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: measured product mass dosed from batch and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_inputs`
- Sources: `eu-jrc-textiles-bref-2023`

###### Hydrogen peroxide for wet finishing (`hydrogen_peroxide_wet`)

Hydrogen peroxide is recorded as a single chemical when bleaching or an equivalent documented onsite recipe uses it; product concentration must be disclosed.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied solution mass dosed, with concentration retained in the raw record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_inputs`
- Sources: `eu-jrc-textiles-bref-2023`

#### Outputs

##### Waste flows

###### Garment wet-finishing wastewater (`wastewater_wet`)

Wastewater leaving onsite garment wet finishing is recorded before offsite treatment or at the transfer point to onsite treatment, with the boundary stated.

- Selected flow: Textile garment wet-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered discharge mass or volume converted using measured density, with treatment destination retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_outputs`
- Sources: `eu-jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025`

###### Wet-finishing wastewater-treatment sludge (`sludge_wet`)

Sludge is recorded only when onsite wastewater treatment generates a separately handled textile wet-finishing sludge.

- Selected flow: Textile wet-finishing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet sludge mass with solids content and treatment destination disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_outputs`
- Sources: `eu-jrc-textiles-bref-2023`

### Process: Final inspection, pressing, and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Electricity for inspection, pressing, and packaging (`electricity_packaging`)

Electricity used by inspection lighting, electric pressing equipment, labelling, sealing, and packing equipment is recorded for the final process.

- Selected flow: Electricity, consumed at garment assembly site
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or allocated meter consumption for final inspection, pressing, and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`
- Sources: `afw-pefcr-v3-1-2025`

###### Corrugated paperboard shipping carton (`carton_corrugated`)

Corrugated paperboard cartons used to ship the finished articles from the factory gate are recorded separately from primary bags and paper hangtags.

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

The low-density polyethylene bag directly containing an article is recorded as one plastic packaging exchange when used.

- Selected flow: Low-density polyethylene garment bag
- Flow property / unit: Mass / kg
- Amount rule: item count converted using measured mass of the specified garment bag
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `afw-pefcr-v3-1-2025`

###### Printed paper garment hangtag (`hangtag_paper`)

Printed paper hangtags are recorded independently from cartons, plastic bags, and textile care labels.

- Selected flow: Printed paper garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: item count converted using measured mass of the specified hangtag
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

The accepted factory-gate output is the exact CPC 28237 product flow used by the reference-flow definition and excludes packaging mass.

- Selected flow: Brassieres, girdles, corsets, braces, suspenders, garters and similar articles and parts thereof, whether or not knitted or crocheted `b1e1a830-20ee-40f3-a59d-87d1dc561706`
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

Damaged cartons and paperboard trim generated during onsite packaging are weighed as a segregated paperboard waste exchange.

- Selected flow: Corrugated paperboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared reuse, recycling, treatment, or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Low-density polyethylene film waste (`waste_ldpe`)

Damaged or unused LDPE garment bags and film trim are recorded separately from paperboard waste.

- Selected flow: Low-density polyethylene film waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared recycling, treatment, or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `afw-pefcr-v3-1-2025`

###### Rejected finished CPC 28237 article (`rejected_finished_product`)

Finished articles failing final inspection and leaving the foreground system as waste are recorded independently from recoverable in-process rework.

- Selected flow: Rejected CPC 28237 finished article
- Flow property / unit: Mass / kg
- Amount rule: measured mass assigned to the declared treatment route, excluding units successfully reworked into accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `afw-pefcr-v3-1-2025`

### Process: Shared facility utilities and direct emissions (`facility_utilities`)

#### Inputs

##### Product flows

###### Natural gas for onsite boiler (`natural_gas_facility`)

Natural gas consumed in an onsite boiler is recorded only when its steam or hot-water output serves included foreground processes and is not already represented as purchased steam or hot water.

- Selected flow: Natural gas, combusted in site boiler
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel energy or measured fuel quantity converted with the recorded net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_fuels`
- Sources: `afw-pefcr-v3-1-2025`

###### Diesel fuel for stationary backup generator (`diesel_backup_facility`)

Diesel consumed by a stationary backup generator is recorded separately from natural gas and LPG when generated electricity serves included production.

- Selected flow: Diesel fuel for stationary backup generator
- Flow property / unit: Energy / MJ
- Amount rule: measured diesel quantity converted with the recorded net calorific value and allocated to included production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_fuels`
- Sources: `afw-pefcr-v3-1-2025`

###### LPG for spot heating (`lpg_facility`)

Liquefied petroleum gas used for spot heating, flame treatment, or other declared garment-factory equipment is recorded as its own fuel exchange.

- Selected flow: Liquefied petroleum gas for garment-factory spot heating
- Flow property / unit: Energy / MJ
- Amount rule: measured LPG quantity converted with the recorded net calorific value and allocated to included production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_fuels`
- Sources: `afw-pefcr-v3-1-2025`

###### HFC-134a refrigerant recharge (`refrigerant_r134a_facility`)

HFC-134a added to included space-conditioning or process-cooling equipment is recorded from refrigerant inventory records; other refrigerants require separate rows.

- Selected flow: 1,1,1,2-tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: measured purchased and charged refrigerant mass assigned by equipment and reporting period
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

Fossil carbon dioxide from included onsite natural-gas, diesel, or LPG combustion is reported as a separate direct elementary emission.

- Selected flow: Carbon dioxide, fossil, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated from each measured fuel quantity using a disclosed facility- or jurisdiction-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Fossil methane to air (`methane_fossil_air`)

Fossil methane from included onsite fuel combustion is reported independently from carbon dioxide and nitrous oxide.

- Selected flow: Methane, fossil, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated from each measured fuel quantity using a disclosed facility- or jurisdiction-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Dinitrogen monoxide to air (`dinitrogen_monoxide_air`)

Dinitrogen monoxide from included onsite fuel combustion is reported as its own elementary emission.

- Selected flow: Dinitrogen monoxide, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated from each measured fuel quantity using a disclosed facility- or jurisdiction-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Nitrogen oxides to air (`nitrogen_oxides_air`)

Nitrogen oxides from included onsite combustion are reported separately when stack measurements or an approved calculation provide the quantity.

- Selected flow: Nitrogen oxides, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or calculated from each measured fuel quantity using a disclosed facility- or jurisdiction-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Sulfur dioxide to air (`sulfur_dioxide_air`)

Sulfur dioxide from included onsite combustion is reported independently when fuel sulfur or stack data support the calculation.

- Selected flow: Sulfur dioxide, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or calculated from measured fuel sulfur and fuel consumption using a disclosed factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### HFC-134a to air (`hfc134a_air`)

HFC-134a leakage is reported as a direct elementary emission using an equipment-level refrigerant mass balance; it must not be replaced by a generic refrigerant emission.

- Selected flow: 1,1,1,2-tetrafluoroethane (HFC-134a), emission to air
- Flow property / unit: Mass / kg
- Amount rule: calculated refrigerant loss from beginning inventory, purchases, charges, recovery, and ending inventory
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
| `allocation_assembly_unit` | shared_cutting_sewing_and_assembly | When subdivision is not possible, allocate shared assembly and sewing records by accepted production units for materially comparable articles, then convert allocated amounts to the 1 kg reference flow using measured unit mass; use another causal physical driver only when justified and disclosed. | `afw-pefcr-v3-1-2025` |
| `allocation_energy_mix` | multiple_sites_or_energy_sources | Build a production-weighted electricity mix for multiple sites and retain each consumed electricity mix in proportion to total measured kWh; do not assign a preferred mix to one product without physical metering or equivalent verified records. | `afw-pefcr-v3-1-2025` |
| `allocation_rework_and_waste` | rework_scrap_and_rejected_product | Return successful rework to the originating process without counting a second finished output; assign measured waste handling to the process that generated the waste and disclose any recycling credit method used downstream. | `afw-pefcr-v3-1-2025` |
| `allocation_no_unrecorded_coproduct` | saleable_by_products | Report every saleable by-product explicitly; if a true multifunctional output exists, document subdivision first and obtain methodology review before applying a non-physical allocation. | `afw-pefcr-v3-1-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `cutting_component_preparation` | issued body fabrics, lace, foam, and adhesive film | BOM, purchase specification, issue and return record | product_id; batch_id; material_id; composition; construction; issued_mass; returned_mass; moisture_basis | reconcile production-order issues and returns with the product BOM | kg | each production order | representative annual period and declared batch | every included assembly site | sum net issued mass by atomic material row and divide by accepted finished-product mass | signed BOM revision; calibrated scale record; supplier specification; stock reconciliation |
| `cp_cutting_energy` | `cutting_component_preparation` | electricity and compressed air | sub-meter, main meter, runtime, and equipment specification | meter_start; meter_end; equipment_id; runtime; verified_flow_rate; allocated_output | direct meter reading; for compressed air only, runtime multiplied by verified flow rate when no flow meter exists | kWh; m3 | each batch or meter period | representative annual period | each included cutting area | apply documented causal allocation, then divide by accepted output mass | meter calibration; equipment specification; allocation worksheet |
| `cp_cutting_waste` | `cutting_component_preparation` | composition-specific cutting waste | waste-bin and shipment record | material_composition; batch_id; gross_mass; tare_mass; destination; treatment_route | weigh segregated waste at transfer from process or shipment | kg | each batch or waste shipment | representative annual period | each included cutting area | sum net waste mass by composition and destination | scale calibration; waste transfer note; segregation audit |
| `cp_sewing_materials` | `sewing_hardware_assembly` | thread, elastic, underwire, fastener, ring, and slider | BOM, issue record, item count, and component mass sample | component_id; composition; issued_mass; item_count; sample_count; sample_mass; returned_mass | weigh bulk material or convert counted components using verified mean component mass | kg; item | each production order | representative annual period | each included assembly line | sum net component mass by atomic row | BOM revision; scale calibration; component specification; count reconciliation |
| `cp_sewing_energy` | `sewing_hardware_assembly` | sewing and hardware-attachment electricity | sub-meter or allocated main-meter record | meter_start; meter_end; line_id; operating_time; accepted_units; accepted_mass | direct meter reading or documented allocation from a shared meter | kWh | each batch or meter period | representative annual period | each included assembly line | allocate by accepted units for comparable articles and normalize by accepted mass | meter calibration; production report; allocation worksheet |
| `cp_hardware_scrap` | `sewing_hardware_assembly` | segregated steel hardware scrap | scrap-bin and shipment record | batch_id; gross_mass; tare_mass; material_grade; destination | weigh segregated clean steel hardware scrap | kg | each shipment | representative annual period | each included assembly site | sum net scrap mass and divide by accepted output mass | scale calibration; waste transfer note; grade declaration |
| `cp_wet_inputs` | `wet_finishing` | process water and named wet chemicals | water meter, recipe, dosing, and stock records | recipe_id; chemical_name; concentration; dose_mass; water_meter_start; water_meter_end; batch_mass | meter water and reconcile each named chemical dose with stock movement | kg | each wet-finishing batch | representative annual period | each included wet-finishing line | sum each atomic input separately and normalize by accepted output mass | meter calibration; recipe approval; safety data sheet; stock reconciliation |
| `cp_wet_energy` | `wet_finishing` | electricity, purchased steam, and purchased hot water | utility meters and invoices | utility_type; meter_start; meter_end; steam_mass; pressure; hot_water_mass; inlet_temperature; supplier | direct utility meter or supplier record; convert steam or hot water to energy with recorded conditions | kWh; MJ | each batch or billing period | representative annual period | each included wet-finishing line or site | retain each utility separately, allocate causally, and normalize by accepted output mass | meter calibration; invoice; conversion worksheet |
| `cp_wet_outputs` | `wet_finishing` | wastewater and sludge | effluent meter, treatment log, and waste shipment record | discharge_volume; density; sampling_time; treatment_boundary; sludge_wet_mass; solids_content; destination | meter effluent and weigh sludge at the declared boundary | kg | each batch or discharge period | representative annual period | each included treatment boundary | sum wastewater and sludge separately and normalize by accepted output mass | meter calibration; laboratory record; treatment log; transfer note |
| `cp_packaging_inputs` | `inspection_packaging` | carton, LDPE bag, and paper hangtag | packaging BOM, issue record, item count, and mass sample | packaging_id; material; item_count; sample_count; sample_mass; issued_mass; returned_mass | weigh bulk packaging or convert item counts with verified mean item mass | kg; item | each packing order | representative annual period | each included packing site | sum each packaging material separately and normalize by accepted product mass | packaging specification; scale calibration; stock reconciliation |
| `cp_packaging_energy` | `inspection_packaging` | final inspection, pressing, and packing electricity | sub-meter or allocated main-meter record | meter_start; meter_end; area_id; accepted_units; accepted_mass | direct meter reading or documented shared-meter allocation | kWh | each batch or meter period | representative annual period | each included final-processing area | allocate by accepted units for comparable articles and normalize by accepted mass | meter calibration; production report; allocation worksheet |
| `cp_packaging_waste` | `inspection_packaging` | paperboard waste, LDPE film waste, and rejected product | inspection disposition and waste transfer record | waste_id; material; gross_mass; tare_mass; reject_reason; rework_status; destination | weigh each segregated waste and exclude successfully reworked products | kg | each batch or shipment | representative annual period | each included packing site | sum each atomic waste by destination and divide by accepted output mass | scale calibration; final-inspection report; transfer note |
| `cp_facility_fuels` | `facility_utilities` | natural gas, diesel, and LPG | fuel meter, invoice, tank, and calorific-value record | fuel_name; quantity; unit; net_calorific_value; meter_start; meter_end; equipment_id; allocation_driver | meter or reconcile fuel purchases and stocks; convert each fuel separately to energy | MJ | each billing or inventory period | representative annual period | each included utility system | subtract stock change, allocate causally, and normalize by accepted output mass | calibrated meter; invoice; tank reconciliation; fuel certificate |
| `cp_refrigerant_balance` | `facility_utilities` | HFC-134a recharge and leakage | equipment-level refrigerant inventory | equipment_id; refrigerant_name; opening_stock; purchases; charges; recovery; closing_stock | reconcile refrigerant mass by equipment and reporting period | kg | each service event and annually | representative annual period | included cooling equipment only | calculate HFC-134a loss by mass balance and allocate by documented service driver | service log; cylinder weights; purchase invoice; technician record |
| `cp_direct_emissions` | `facility_utilities` | named combustion emissions | stack test, fuel use, fuel property, and factor record | pollutant_name; measured_concentration; exhaust_volume; fuel_quantity; factor_value; factor_source; equipment_id | use stack measurements when available; otherwise apply a disclosed approved factor to each measured fuel | kg | each test and reporting period | representative annual period | each included combustion source | calculate each pollutant separately, allocate causally, and normalize by accepted output mass | laboratory report; factor reference; fuel record; calculation worksheet |
| `cp_final_product_mass` | `inspection_packaging` | accepted finished reference product | final inspection, count, and mass record | product_id; specification_revision; reference_size; accepted_count; sample_count; net_sample_mass; accepted_net_mass | weigh accepted output net of packaging or convert count using verified mean net mass | kg | each production batch | representative annual period | every included final inspection point | sum accepted net product mass by specification | calibrated scale; inspection release; count reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | BOM and component rows | net material input = issued mass - verified return to stock | issued mass; returned mass | kg atomic material input per kg accepted product | `afw-pefcr-v3-1-2025` |
| `calc_item_component_mass` | counted hardware and packaging | component mass = item count x measured mean mass of the exact specified item | item count; sample count; sample mass | kg named component per kg accepted product | `afw-pefcr-v3-1-2025` |
| `calc_assembly_loss` | cutting, component, and rejected-product losses | assembly loss mass = BOM input mass - accepted product mass - documented returned material - separately reconciled retained work in progress; report each waste composition and destination separately | BOM inputs; accepted mass; returns; work in progress; measured wastes | kg loss and loss fraction by atomic waste row | `afw-pefcr-v3-1-2025` |
| `calc_energy_normalization` | electricity and thermal utilities | normalized energy = measured or causally allocated process energy / accepted net product mass | meter delta; allocation driver; accepted mass | kWh or MJ per kg accepted product | `afw-pefcr-v3-1-2025` |
| `calc_direct_combustion_emission` | named direct combustion emissions | emission = measured fuel quantity x disclosed factor, unless a representative stack measurement is used; calculate each fuel and pollutant independently | measured fuel; net calorific value when required; factor or stack result | kg named pollutant per kg accepted product |  |
| `calc_refrigerant_loss` | HFC-134a emission | loss = opening stock + purchases - closing stock - documented contained inventory increase - recovered mass; reconcile result to equipment service records | opening and closing stock; purchases; charges; recovery; equipment inventory | kg HFC-134a emitted per kg accepted product |  |
| `calc_mass_balance` | complete foreground system | reconcile named material and packaging inputs with accepted product, returned materials, work in progress, composition-specific wastes, wastewater constituents when quantified, and stock changes; explain every residual above the declared measurement uncertainty | all mass records and stock changes | batch mass-balance statement and residual | `afw-pefcr-v3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and BOM | Use the exact CPC 28237 Product flow for accepted output and retain a product specification that distinguishes article type, size or fit, composition, construction, padding, underwire, closure, finish, and packaging state. | state-100 Tiangong identity; approved product specification; BOM revision |
| `dq_bom_coverage` | material inputs | Cover at least 95% of the BOM by product weight and 100% of main fabrics, lining, padding, electronic parts if any, and metals; explain the uncovered share. | BOM coverage calculation and supplier specifications |
| `dq_measurement` | foreground amounts | Use calibrated meters or scales appropriate to the measured quantity; retain raw readings, unit conversions, sampling basis, and uncertainty or tolerance. | calibration certificates; raw meter and scale records; conversion worksheet |
| `dq_temporal` | all foreground records | Use a representative annual administrative period or justify a shorter campaign; identify abnormal shutdown, start-up, rework, and rejected-product periods. | production calendar; utility period; batch list; representativeness assessment |
| `dq_completeness` | process and atomic flows | Reconcile every included process against the route and record each applicable material, utility, chemical, packaging, waste, and direct emission as its own row; justify every not-applicable row. | route-to-inventory checklist; mass and energy reconciliation; exception log |
| `dq_supplier_geography` | upstream datasets | Match material, utility, fuel, and component datasets to supplier geography and manufacturing technology when known; document any proxy and data-quality consequence. | supplier declarations; invoices; dataset mapping log |
| `dq_uuid_status` | non-reference flow identities | Keep a UUID blank until hybrid search and a direct state-code-100 read confirm the same atomic identity; review manifest `inventory_uuid_review` before publication. | dual-verification review record or explicit manifest omission reason |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Fail if the reference product UUID, CPC 28237 classification, Product flow type, Mass UUID, Units of mass UUID, or kg reference unit differs from this PCR. | `un-cpc-3-2025` |
| `validate_reference_amount` | finished_reference_product | Require exactly 1 kg accepted net finished product; packaging mass must be outside the reference-product mass and present in separate packaging rows when used. | `afw-pefcr-v3-1-2025` |
| `validate_required_qualifiers` | foreground_data_package | Fail completeness if any applicable required qualifier, product specification revision, reference size, production site, period, or wet-finishing route is missing. | `afw-pefcr-v3-1-2025` |
| `validate_bom_and_losses` | material_mass_balance | Require at least 95% BOM coverage by weight, all main fabrics/lining/padding/metals, and reconciliation of assembly losses, returns, work in progress, and rejected product. | `afw-pefcr-v3-1-2025` |
| `validate_atomic_inventory` | process_inventory | Fail if a selected flow combines electricity with thermal energy, more than one fuel, more than one refrigerant, more than one chemical, more than one packaging material, more than one waste identity, or more than one elementary emission. |  |
| `validate_conditional_routes` | conditional_processes | Require every conditional process and row to be either supported by route records or marked not applicable with evidence; do not infer wet processing, fuel use, or refrigerant leakage from sector averages. | `eu-jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025` |
| `validate_uuid_dual_check` | non_reference_uuid | Fail if a non-reference UUID is populated without both a matching Tiangong hybrid-search result and a direct state-code-100 read for the same atomic flow. |  |
| `validate_no_invented_quantities` | foreground_amounts | Require foreground records or declared calculations for every amount; fail any uncited default, reasoned estimate, or AI-generated quantitative range. |  |
| `validate_bilingual_alignment` | localized_markdown | Require the same ordered process ids, row ids, selected flows, UUIDs, amount modes, basis kinds, evidence kinds, rule ids, source ids, and source records in English and Chinese. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared CPC 28237 article or identifiable part |
| downstream_use | `secondary_dataset`; `background_dataset` after review for representative product, geography, technology, period, and data quality |
| allowed_use | Product-specific process modelling, supply-chain LCA, lifecycle-model construction, product-footprint studies, and comparison only when functional unit, product specification, boundary, geography, technology, allocation, and data quality are equivalent |
| excluded_use | Consumer-use modelling without a separate use-phase model; medical-device claims; products outside CPC 28237; substitution for upstream textile or component production; unqualified product comparisons; use of candidate UUIDs as confirmed identities |
| required_metadata | PCR id and version; CPC code; article type; finished article or part; BOM and coverage; material composition; construction; size and fit; padding, underwire, closure, and strap configuration; site and geography; period; route; wet finishing; packaging; allocation; data sources; Tiangong identity status |
| required_quality_disclosure | Foreground versus upstream data share; meter and scale coverage; BOM coverage; temporal representativeness; supplier geography; allocation methods; mass-balance residual; rejected-product and waste destinations; conditional-row decisions; unresolved UUIDs and dataset proxies |
| update_trigger | Change in product specification, BOM, reference size, manufacturing route, site, supplier geography, energy system, wet-finishing chemistry, packaging, allocation method, treatment route, reference-flow identity, or evidence that materially changes the dataset |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division. Central Product Classification Version 3.0, Explanatory Notes, subclass 28237, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | Exact product-category scope and classification identity |
| `afw-pefcr-v3-1-2025` | official_guidance | Technical Secretariat of the Product Environmental Footprint Category Rules for Apparel and Footwear. Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025. https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (retrieved 2026-08-13) | Underwear and bra scope; functional-unit dimensions; BOM coverage; manufacturing process decomposition; assembly loss; packaging; energy, allocation, data-collection, quality, and verification rules |
| `eu-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, European Bureau for Research on Industrial Transformation and Emissions. Best Available Techniques Reference Document for the Textiles Industry, January 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf (retrieved 2026-08-13) | Conditional inclusion and separate recording of textile washing, bleaching, dyeing, finishing, water, chemicals, wastewater, and sludge when those operations occur onsite |
| `munasinghe-et-al-2016-bra-lca` | literature | Munasinghe, M.; Jayasinghe, P.; Ralapanawe, V.; Gajanayake, A. Supply/value chain analysis of carbon and energy footprint of garment manufacturing in Sri Lanka. Sustainable Production and Consumption 5 (2016) 51-64. https://doi.org/10.1016/j.spc.2015.12.001 | Product-specific evidence that a brassiere BOM includes multiple lace and elastic materials and that manufacturing energy and process efficiency are material foreground concerns |
