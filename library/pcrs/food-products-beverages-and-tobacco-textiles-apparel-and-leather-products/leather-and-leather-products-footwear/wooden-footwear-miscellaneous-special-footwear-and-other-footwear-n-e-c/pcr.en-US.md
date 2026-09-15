---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.wooden-footwear-miscellaneous-special-footwear-and-other-footwear-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wooden footwear, miscellaneous special footwear and other footwear n.e.c.

## 1. Scope and Applicability

This PCR applies to finished wooden footwear, footwear combining a wooden body or sole with a leather, textile, or plastic upper or strap, miscellaneous special footwear, and other finished footwear not elsewhere classified within CPC 3.0 subclass 29520. It supports factory-gate foreground data packages for declared product-specific routes; it does not assume that every route uses wood, an upper, a separately formed sole, adhesive, sewing, or thermal conditioning.

The PCR excludes footwear assigned to CPC 293 or 294, protective-metal-toe-cap footwear in CPC 29510, asbestos footwear, orthopaedic footwear, skating boots, footwear parts and removable accessories in CPC 29600, and repair, distribution, use, or end-of-life services. A producer shall document why an n.e.c. or special product belongs in CPC 29520 before applying this PCR.

The foreground boundary begins with accepted materials, components, and packaging at the manufacturing site or controlled subcontractor and ends with one kilogram of conforming finished footwear at factory gate. Upstream production of wood, leather, textiles, plastics, rubber compounds, chemicals, energy carriers, and packaging is represented by traceable upstream datasets rather than recreated inside the foreground inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.wooden-footwear-miscellaneous-special-footwear-and-other-footwear-n-e-c |
| classification_refs | CPC 3.0: 29520, exact classification context |
| covered_products | finished all-wood footwear; wooden-soled or wooden-bodied footwear with leather, textile, or plastic upper/strap; miscellaneous special footwear and other footwear n.e.c. that passes the documented CPC 29520 classification check |
| excluded_products | CPC 293 footwear; CPC 294 sports footwear; CPC 29510 protective-metal-toe-cap footwear; asbestos footwear; orthopaedic footwear; skating boots; CPC 29600 footwear parts and removable accessories; repair and downstream service activities |
| representative_product | one declared model of conforming finished footwear manufactured through a documented wooden, hybrid wooden, or other special-footwear route |
| production_route | product-specific combination of component receipt, wood-body or sole machining when applicable, flexible upper/strap preparation when applicable, non-wood bottom forming when applicable, stockfitting/final assembly, finishing, inspection, and packaging |
| market_state | finished manufactured product, production mix at plant, net product mass reported separately from packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Protect, support, and accommodate the foot and provide the declared walking, occupational, ceremonial, indoor, or other special-footwear function of the specified model |
| How much | 1 kg of conforming finished footwear at factory gate, excluding packaging |
| How well | Conforming to the declared model, intended use, size range, material construction, route, applicable performance specification, and quality grade |
| How long or cycle | Declared intended service life or use-cycle basis; no default lifetime is imposed without product-specific evidence |
| reference_flow_link | Net mass of conforming finished CPC 29520 footwear required to provide the declared function; this factory-gate declared unit is 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Wooden footwear, miscellaneous special footwear and other footwear n.e.c. `e377f482-0635-4972-8954-9279707bfd7e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 29520 inclusion rationale; footwear model and intended function; construction route; all-wood, wooden-hybrid, or non-wood special-footwear route; wood species and moisture state when wood is used; upper/strap material; sole, midsole, and insole materials; fastening and bonding route; size range and size mix; net product mass; bill of materials by mass; applicable durability or safety specification; packaging configuration; factory-gate geography; production period; included sites and subcontractors |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg of accepted net footwear output, excluding every packaging component; retain gross packed mass as a separate record if used. |
| `pair_to_mass` | production records held by pair or item | Mass | kg | Convert counts using measured net mass for the same model, reference size or documented size mix, and batch; retain count, sampled masses, and sampling basis. |
| `wood_moisture_basis` | solid or laminated wood inputs and outputs | Mass | kg | Record as-received mass and moisture content or declared conditioning state; use the same stated moisture basis when comparing wood input, product incorporation, offcuts, and sawdust. |
| `bom_mass_consistency` | materials and components | Mass | kg | Reconcile issued, returned, incorporated, reworked, scrapped, and stored masses for the reporting batch without combining different materials. |
| `energy_carrier_separation` | electricity, steam, and purchased heat | Energy | kWh or MJ | Preserve meter or invoice units and conversion factors; record electricity, steam, and purchased heat as separate exchanges. |
| `chemical_formulation_basis` | adhesives, cleaners, and finishes | Mass | kg | Record each purchased formulated product separately and retain supplier formulation or VOC-content evidence needed to calculate chemically specific emissions and residues. |
| `packaging_separation` | packaging | Mass | kg | Measure corrugated cardboard, tissue paper, LDPE film, paper labels, and any additional packaging component separately from net footwear output. |

## 5. System Boundary

The foreground system includes the product-specific manufacturing steps that transform received materials and components into packaged, conforming footwear: wood cutting, carving or machining, drilling, sanding, conditioning and finishing when a wooden body or sole is made; die-cutting and sewing when flexible upper or strap components are made; compound forming, insole or sole production when a non-wood bottom is made; stockfitting, mechanical fastening, adhesive bonding, finishing, inspection, rework, and packaging when applicable. Each material, energy carrier, water flow, waste stream, and direct elementary emission crosses the boundary as its own exchange.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted wood blanks, leather, textile, plastic sheet, rubber or polymer compounds, thread, fasteners, adhesives, cleaners, finishes, and packaging are received with supplier, composition, mass, moisture or formulation, and lot records as applicable. |
| starting_condition_role | Received materials and components are upstream product inputs; the foreground system performs footwear component conversion and final manufacturing. |
| product_classification_scope | Finished footwear within CPC 3.0 subclass 29520 after explicit exclusion checks against other footwear subclasses and CPC 29600 parts. |
| recursive_input_rule | Purchased finished or semi-finished footwear already within CPC 29520 is recorded as one upstream product input with its own dataset and is not recursively decomposed as if made by the reporting foreground site. |
| upstream_dataset_requirement | Use traceable upstream datasets for each received material, compound, chemical, electricity or thermal carrier, water supply, and packaging component; disclose every proxy and its representativeness. |
| disclosure | Declare the classification rationale, model, route, complete bill of materials, material and chemical specifications, wood moisture state, included facilities and subcontractors, process energy and water, wastes, direct emissions, rework, packaging, geography, period, and allocation decisions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground production | Include all controlled and subcontracted component manufacturing, consolidation, final assembly, finishing, inspection, rework, and packaging required to produce the declared factory-gate output. | `af-pefcr-v3-1-2025`; `eu-pef-2021` |
| `boundary_route_specificity` | process selection | Include only processes actually used by the declared model, while preserving complete coverage of the applicable wooden, flexible-component, non-wood-bottom, assembly, and packaging route. | `af-pefcr-v3-1-2025`; `fao-forest-handicrafts-clogs` |
| `boundary_upstream_materials` | purchased products | Keep supplier production upstream and retain the product-specific foreground bill of materials, processing losses, energy, chemicals, water, and packaging quantities. | `af-pefcr-v3-1-2025`; `rusu-et-al-footwear-lca-2024` |
| `boundary_scope_exclusions` | product identity | Reject the PCR if the product belongs to another footwear subclass, is only a footwear part or removable accessory, or lacks a documented CPC 29520 inclusion rationale. | `un-cpc-v3-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wood_component_manufacturing` | Wooden body or sole component manufacturing | `conditional` | Include when solid or laminated wood is cut, carved, machined, drilled, sanded, conditioned, or finished for this footwear | Foreground wooden-component conversion | kg accepted shaped wooden component |
| `flexible_component_preparation` | Flexible upper or strap component preparation | `conditional` | Include when leather, textile, plastic sheet, or sewing thread is cut or sewn at the reporting site | Foreground upper/strap preparation | kg accepted prepared flexible component |
| `nonwood_bottom_forming` | Non-wood sole, midsole, or insole forming | `conditional` | Include when rubber, EVA, polyurethane, or another declared non-wood bottom component is formed at the reporting site | Foreground bottom-component conversion | kg accepted formed bottom component |
| `final_assembly_finishing` | Stockfitting, final assembly, finishing, and inspection | `required` | Always include; mark route-specific input rows not applicable only with evidence that the declared model does not use them | Foreground footwear completion | kg accepted unboxed finished footwear |
| `packaging` | Product packaging and factory-gate release | `required` | Always include | Foreground packaging and reference-product release | 1 kg accepted net footwear output |

### Process: Wooden body or sole component manufacturing (`wood_component_manufacturing`)

#### Inputs

##### Product flows

###### Solid wood block (`solid_wood_block`)

Record each accepted solid-wood species and lot used to make a wooden body, sole, or heel as a specific product input.

- Selected flow: Solid wood block for footwear components
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted as-received mass issued to the batch, with moisture state recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Laminated wood blank (`laminated_wood_blank`)

Record laminated veneer or other laminated wood only when it is the declared wooden construction route; do not combine it with solid wood.

- Selected flow: Laminated wood blank for footwear components
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Electricity for wood machining (`wood_machining_electricity`)

Electricity for cutting, copying, carving, milling, drilling, sanding, extraction, and associated wood-component equipment is recorded independently.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or equipment power multiplied by verified operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped wooden component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `rusu-et-al-footwear-lca-2024`

###### Purchased heat for wood conditioning (`wood_drying_purchased_heat`)

Purchased heat is recorded only when externally supplied thermal energy conditions or dries the wooden component.

- Selected flow: Purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced purchased heat attributable to wood conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted conditioned wooden component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `rusu-et-al-footwear-lca-2024`

###### Waterborne wood varnish (`waterborne_wood_varnish`)

Waterborne varnish is a distinct formulated input when applied to the wooden component.

- Selected flow: Waterborne wood varnish
- Flow property / unit: Mass / kg
- Amount rule: Formulated product mass issued minus returned unused varnish
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted finished wooden component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `fao-forest-handicrafts-clogs`; `eu-ecolabel-footwear-2016`

###### Solventborne wood varnish (`solventborne_wood_varnish`)

Solventborne varnish is recorded separately and only when used; retain its supplier VOC composition.

- Selected flow: Solventborne wood varnish
- Flow property / unit: Mass / kg
- Amount rule: Formulated product mass issued minus returned unused varnish
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted finished wooden component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `fao-forest-handicrafts-clogs`; `eu-ecolabel-footwear-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Shaped solid-wood footwear component (`shaped_solid_wood_component`)

The accepted solid-wood body, sole, or heel is weighed after machining and any declared conditioning or finishing.

- Selected flow: Shaped solid-wood footwear component
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted component mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per wood-component batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Shaped laminated-wood footwear component (`shaped_laminated_wood_component`)

The accepted laminated-wood body, sole, or heel is kept separate from solid-wood components.

- Selected flow: Shaped laminated-wood footwear component
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted component mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per wood-component batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `fao-forest-handicrafts-clogs`

##### Waste flows

###### Solid-wood cutting offcuts (`solid_wood_offcuts`)

Reusable pieces retained in stock are not waste; only solid-wood offcuts leaving the process for the declared route are recorded here.

- Selected flow: Solid-wood footwear-component offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured solid-wood offcut mass sent to the documented recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped solid-wood component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Laminated-wood cutting offcuts (`laminated_wood_offcuts`)

Laminated-wood offcuts are measured separately because adhesive-containing material may follow a different treatment route.

- Selected flow: Laminated-wood footwear-component offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured laminated-wood offcut mass sent to the documented recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped laminated-wood component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Wood sawdust (`wood_sawdust`)

Collected sawdust and sanding residue leaving as a waste flow are weighed independently from airborne wood dust.

- Selected flow: Wood sawdust from footwear-component machining
- Flow property / unit: Mass / kg
- Amount rule: Measured collected sawdust and sanding residue sent to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped wooden component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Waste waterborne varnish (`waste_waterborne_varnish`)

Unusable waterborne varnish and captured residue are recorded as their own waste stream.

- Selected flow: Waste waterborne wood varnish
- Flow property / unit: Mass / kg
- Amount rule: Measured residue mass transferred to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished wooden component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Waste solventborne varnish (`waste_solventborne_varnish`)

Unusable solventborne varnish and captured residue are not combined with waterborne-varnish waste.

- Selected flow: Waste solventborne wood varnish
- Flow property / unit: Mass / kg
- Amount rule: Measured residue mass transferred to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished wooden component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_component_records`
- Sources: `eu-ecolabel-footwear-2016`

##### Elementary flows

###### Wood dust released to air (`wood_dust_to_air`)

Wood dust not captured as solid waste is quantified as an elementary emission using measurements or an approved site-specific balance.

- Selected flow: Wood dust, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured uncaptured wood-dust emission or calculated value from collected dust and capture records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped wooden component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wood_component_records`
- Sources: `eu-sts-bref-2020`

### Process: Flexible upper or strap component preparation (`flexible_component_preparation`)

#### Inputs

##### Product flows

###### Finished leather component material (`finished_leather_component_material`)

Finished leather used for an upper or strap is recorded by species, finish, thickness, area, supplier lot, and measured mass.

- Selected flow: Finished footwear leather
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted leather mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `fao-forest-handicrafts-clogs`; `af-pefcr-v3-1-2025`

###### Woven textile component material (`woven_textile_component_material`)

The declared woven textile used for an upper or lining is recorded independently from leather and plastic sheet.

- Selected flow: Woven textile fabric for footwear uppers
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted textile mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `af-pefcr-v3-1-2025`

###### Plastic strap sheet (`plastic_strap_sheet`)

Plastic sheet used to cut a strap or upper component is recorded as its declared polymer formulation.

- Selected flow: Plastic sheet for footwear straps
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted sheet mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Polyester sewing thread (`polyester_sewing_thread`)

Polyester thread is recorded only when used and is not combined with fabric or other fastening materials.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Spool mass issued minus return and separately measured thread waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted sewn component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `af-pefcr-v3-1-2025`

###### Electricity for flexible-component preparation (`flexible_component_electricity`)

Electricity for die-cutting, skiving, sewing, and extraction is recorded for this process only.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or equipment power multiplied by verified operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted prepared flexible component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `af-pefcr-v3-1-2025`; `rusu-et-al-footwear-lca-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared leather upper or strap component (`prepared_leather_upper_or_strap`)

Accepted leather components are weighed after cutting and sewing and retain their batch identity.

- Selected flow: Prepared leather footwear component
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted leather-component mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per flexible-component batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `fao-forest-handicrafts-clogs`; `af-pefcr-v3-1-2025`

###### Prepared textile upper (`prepared_textile_upper`)

The accepted textile upper is weighed independently from leather or plastic components.

- Selected flow: Prepared woven-textile footwear upper
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted textile-upper mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per flexible-component batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `af-pefcr-v3-1-2025`

###### Prepared plastic strap (`prepared_plastic_strap`)

The accepted plastic strap is weighed independently from other upper components.

- Selected flow: Prepared plastic footwear strap
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted plastic-strap mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per flexible-component batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `fao-forest-handicrafts-clogs`

##### Waste flows

###### Leather cutting offcuts (`leather_cutting_offcuts`)

Leather cutting offcuts is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Footwear leather cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured leather offcut mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted prepared leather component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `af-pefcr-v3-1-2025`

###### Textile cutting offcuts (`textile_cutting_offcuts`)

Textile cutting offcuts is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Woven-textile footwear cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured textile offcut mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted prepared textile component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `af-pefcr-v3-1-2025`

###### Plastic sheet offcuts (`plastic_sheet_offcuts`)

Plastic sheet offcuts is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Plastic footwear-strap sheet offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured plastic offcut mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted prepared plastic component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Sewing thread offcuts (`sewing_thread_offcuts`)

Sewing thread offcuts is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Polyester sewing-thread offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured thread offcut and unusable-thread mass sent to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted sewn component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flexible_component_records`
- Sources: `af-pefcr-v3-1-2025`

##### Elementary flows

### Process: Non-wood sole, midsole, or insole forming (`nonwood_bottom_forming`)

#### Inputs

##### Product flows

###### Natural rubber compound (`natural_rubber_compound`)

Natural rubber compound is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Natural-rubber footwear compound
- Flow property / unit: Mass / kg
- Amount rule: Measured compound mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `af-pefcr-v3-1-2025`

###### Ethylene-vinyl acetate compound (`eva_compound`)

Ethylene-vinyl acetate compound is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Ethylene-vinyl acetate footwear compound
- Flow property / unit: Mass / kg
- Amount rule: Measured compound mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `af-pefcr-v3-1-2025`

###### Polyurethane sole system (`polyurethane_sole_system`)

Record the declared two-component or formulated polyurethane sole system as supplied and retain its formulation components in supporting records.

- Selected flow: Polyurethane footwear-sole system
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-system mass charged minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `af-pefcr-v3-1-2025`; `rusu-et-al-footwear-lca-2024`

###### Electricity for bottom forming (`bottom_forming_electricity`)

Electricity for bottom forming is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered forming-process consumption or equipment power multiplied by verified operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed bottom component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `rusu-et-al-footwear-lca-2024`

###### Purchased steam for bottom forming (`bottom_forming_steam`)

Purchased steam for bottom forming is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced steam attributable to bottom forming and curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted formed bottom component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `rusu-et-al-footwear-lca-2024`

###### Cooling water for bottom forming (`bottom_forming_cooling_water`)

Cooling water for bottom forming is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Process cooling water
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water entering the foreground process, excluding recirculated internal water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed bottom component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `rusu-et-al-footwear-lca-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed natural-rubber outsole (`formed_rubber_outsole`)

Formed natural-rubber outsole is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Formed natural-rubber footwear outsole
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted outsole mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bottom-forming batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `af-pefcr-v3-1-2025`

###### Formed EVA midsole (`formed_eva_midsole`)

Formed EVA midsole is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Formed ethylene-vinyl acetate footwear midsole
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted midsole mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bottom-forming batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `af-pefcr-v3-1-2025`

###### Formed polyurethane sole (`formed_polyurethane_sole`)

Formed polyurethane sole is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Formed polyurethane footwear sole
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted sole mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bottom-forming batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `af-pefcr-v3-1-2025`; `rusu-et-al-footwear-lca-2024`

##### Waste flows

###### Natural-rubber forming scrap (`rubber_forming_scrap`)

Natural-rubber forming scrap is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Natural-rubber footwear forming scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured scrap mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed natural-rubber outsole
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `af-pefcr-v3-1-2025`

###### EVA forming scrap (`eva_forming_scrap`)

EVA forming scrap is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Ethylene-vinyl acetate footwear forming scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured scrap mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed EVA midsole
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `af-pefcr-v3-1-2025`

###### Polyurethane forming scrap (`polyurethane_forming_scrap`)

Polyurethane forming scrap is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Polyurethane footwear-sole forming scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured scrap mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed polyurethane sole
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `af-pefcr-v3-1-2025`

###### Bottom-forming wastewater (`bottom_forming_wastewater`)

Bottom-forming wastewater is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Wastewater from footwear bottom forming
- Flow property / unit: Mass / kg
- Amount rule: Metered wastewater discharged to the declared treatment route, excluding internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed bottom component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bottom_forming_records`
- Sources: `rusu-et-al-footwear-lca-2024`

##### Elementary flows

### Process: Stockfitting, final assembly, finishing, and inspection (`final_assembly_finishing`)

#### Inputs

##### Product flows

###### Shaped solid-wood component for assembly (`assembly_shaped_solid_wood_component`)

Shaped solid-wood component for assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Shaped solid-wood footwear component
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from wood-component manufacturing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Shaped laminated-wood component for assembly (`assembly_shaped_laminated_wood_component`)

Shaped laminated-wood component for assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Shaped laminated-wood footwear component
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from wood-component manufacturing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Prepared leather component for assembly (`assembly_prepared_leather_component`)

Prepared leather component for assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Prepared leather footwear component
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from flexible-component preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `fao-forest-handicrafts-clogs`; `af-pefcr-v3-1-2025`

###### Prepared textile upper for assembly (`assembly_prepared_textile_upper`)

Prepared textile upper for assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Prepared woven-textile footwear upper
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from flexible-component preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `af-pefcr-v3-1-2025`

###### Prepared plastic strap for assembly (`assembly_prepared_plastic_strap`)

Prepared plastic strap for assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Prepared plastic footwear strap
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from flexible-component preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Formed natural-rubber outsole for assembly (`assembly_formed_rubber_outsole`)

Formed natural-rubber outsole for assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Formed natural-rubber footwear outsole
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from bottom forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `af-pefcr-v3-1-2025`

###### Formed EVA midsole for assembly (`assembly_formed_eva_midsole`)

Formed EVA midsole for assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Formed ethylene-vinyl acetate footwear midsole
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from bottom forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `af-pefcr-v3-1-2025`

###### Formed polyurethane sole for assembly (`assembly_formed_polyurethane_sole`)

Formed polyurethane sole for assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Formed polyurethane footwear sole
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from bottom forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `af-pefcr-v3-1-2025`

###### Steel footwear nails (`steel_footwear_nails`)

Steel nails are recorded separately when used to fasten a strap or upper to a wooden component.

- Selected flow: Steel nails for footwear assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured fastener mass incorporated in accepted footwear
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `fao-forest-handicrafts-clogs`

###### Waterborne polyurethane adhesive (`waterborne_polyurethane_adhesive`)

Waterborne polyurethane adhesive is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Waterborne polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Formulated adhesive mass issued minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Solventborne polyurethane adhesive (`solventborne_polyurethane_adhesive`)

Solventborne polyurethane adhesive is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Solventborne polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Formulated adhesive mass issued minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Acetone cleaner (`acetone_cleaner`)

Acetone cleaner is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Acetone
- Flow property / unit: Mass / kg
- Amount rule: Measured acetone input from issue, return, and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Ethyl acetate cleaner (`ethyl_acetate_cleaner`)

Ethyl acetate cleaner is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Ethyl acetate
- Flow property / unit: Mass / kg
- Amount rule: Measured ethyl acetate input from issue, return, and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Electricity for final assembly (`assembly_electricity`)

Electricity for final assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered stockfitting, fastening, bonding, finishing, extraction, inspection, and rework electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `rusu-et-al-footwear-lca-2024`

###### Purchased heat for final assembly (`assembly_purchased_heat`)

Purchased heat for final assembly is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced externally supplied heat for conditioning, adhesive activation, or curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `rusu-et-al-footwear-lca-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unboxed finished footwear (`unboxed_finished_footwear`)

Accepted unboxed footwear is weighed after inspection and rework before packaging.

- Selected flow: Unboxed finished CPC 29520 footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted net mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final-assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output_records`
- Sources: `un-cpc-v3-2025`; `af-pefcr-v3-1-2025`

##### Waste flows

###### Waste waterborne polyurethane adhesive (`waste_waterborne_polyurethane_adhesive`)

Waste waterborne polyurethane adhesive is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Waste waterborne polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured unusable adhesive and captured residue transferred to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Waste solventborne polyurethane adhesive (`waste_solventborne_polyurethane_adhesive`)

Waste solventborne polyurethane adhesive is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Waste solventborne polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured unusable adhesive and captured residue transferred to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Waste acetone (`waste_acetone`)

Waste acetone is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Waste acetone
- Flow property / unit: Mass / kg
- Amount rule: Measured collected acetone transferred for recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Waste ethyl acetate (`waste_ethyl_acetate`)

Waste ethyl acetate is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Waste ethyl acetate
- Flow property / unit: Mass / kg
- Amount rule: Measured collected ethyl acetate transferred for recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Defective finished footwear (`defective_finished_footwear`)

Defective finished footwear is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Defective finished CPC 29520 footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected product mass leaving rework for the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output_records`
- Sources: `af-pefcr-v3-1-2025`

##### Elementary flows

###### Acetone released to air (`acetone_to_air`)

Acetone released to air is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Acetone, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated acetone input minus returned, recovered, captured, incorporated, and waste acetone, reconciled with emission measurements when available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_voc_records`
- Sources: `eu-ecolabel-footwear-2016`

###### Ethyl acetate released to air (`ethyl_acetate_to_air`)

Ethyl acetate released to air is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Ethyl acetate, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated ethyl acetate input minus returned, recovered, captured, incorporated, and waste ethyl acetate, reconciled with emission measurements when available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted unboxed footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_voc_records`
- Sources: `eu-ecolabel-footwear-2016`

### Process: Product packaging and factory-gate release (`packaging`)

#### Inputs

##### Product flows

###### Unboxed finished footwear for packaging (`packaging_unboxed_finished_footwear`)

Unboxed finished footwear for packaging is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Unboxed finished CPC 29520 footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted net mass received from final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `af-pefcr-v3-1-2025`

###### Corrugated cardboard shoebox (`corrugated_cardboard_shoebox`)

Corrugated cardboard shoebox is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Corrugated cardboard footwear box
- Flow property / unit: Mass / kg
- Amount rule: Measured box mass consumed, adjusted for documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `af-pefcr-v3-1-2025`

###### Cellulose tissue paper (`cellulose_tissue_paper`)

Cellulose tissue paper is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Cellulose tissue paper for footwear packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured tissue-paper mass consumed, adjusted for documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `af-pefcr-v3-1-2025`

###### LDPE packaging film (`ldpe_packaging_film`)

LDPE packaging film is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Low-density polyethylene footwear-packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured film mass consumed, adjusted for documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `af-pefcr-v3-1-2025`

###### Paper product label (`paper_product_label`)

Paper product label is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Paper label for footwear packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured paper-label mass consumed, adjusted for documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `af-pefcr-v3-1-2025`

###### Electricity for packaging (`packaging_electricity`)

Electricity for packaging is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered or calculated packaging-line electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `rusu-et-al-footwear-lca-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished reference footwear (`reference_finished_footwear`)

This is the only UUID-bearing inventory output. Its reported mass excludes all packaging even though packaging components are modelled in the same foreground data package.

- Selected flow: Wooden footwear, miscellaneous special footwear and other footwear n.e.c. `e377f482-0635-4972-8954-9279707bfd7e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: exactly 1 kg accepted net finished footwear after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-v3-2025`

##### Waste flows

###### Corrugated-cardboard packaging waste (`cardboard_packaging_waste`)

Corrugated-cardboard packaging waste is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Corrugated cardboard footwear-packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured box trim and rejected-box mass sent to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `af-pefcr-v3-1-2025`

###### Tissue-paper packaging waste (`tissue_paper_waste`)

Tissue-paper packaging waste is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Cellulose tissue-paper packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured tissue-paper trim and rejected-paper mass sent to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `af-pefcr-v3-1-2025`

###### LDPE film packaging waste (`ldpe_film_waste`)

LDPE film packaging waste is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Low-density polyethylene footwear-packaging film waste
- Flow property / unit: Mass / kg
- Amount rule: Measured film trim and rejected-film mass sent to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `af-pefcr-v3-1-2025`

###### Paper-label waste (`paper_label_waste`)

Paper-label waste is recorded as one atomic exchange for the declared route and measured using the stated amount rule.

- Selected flow: Paper footwear-label waste
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected-label mass sent to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `af-pefcr-v3-1-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared foreground operations | Avoid allocation by subdividing meters, batches, and process records whenever the declared footwear model can be measured separately. | `eu-pef-2021` |
| `allocation_physical` | unavoidable shared operations | When subdivision is not possible, use a documented causal physical driver such as machine time, metered energy, processed mass, or occupied production time; do not use output mass merely because it is available. | `eu-pef-2021` |
| `allocation_economic_fallback` | shared operations lacking a defensible physical relationship | Use economic allocation only as a disclosed fallback, retain price period and source, and test sensitivity to the most plausible physical alternative. | `eu-pef-2021` |
| `allocation_internal_rework` | rework and returned intermediate components | Treat same-batch internal rework as an internal loop; count additional energy, materials, chemicals, emissions, and final reject waste without creating a co-product credit. | `af-pefcr-v3-1-2025` |
| `allocation_recovery` | offcuts, sawdust, scrap, and packaging waste leaving for recovery | Record the measured waste stream and destination without subtracting an assumed recycling credit from the foreground process; apply the chosen downstream recycling convention consistently outside this foreground inventory and disclose it. | `eu-pef-2021`; `af-pefcr-v3-1-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_wood_component_records` | `wood_component_manufacturing` | wood, electricity, purchased heat, varnish, accepted component, waste, and dust | meter, issue-return ledger, scale, moisture record, waste transfer note, emission measurement | batch_id; material_id; species; laminate_type; supplier_lot; issued_mass; returned_mass; moisture_content; accepted_output_mass; electricity; purchased_heat; varnish_id; varnish_mass; waste_mass; dust_measurement; destination | Calibrated scales and meters reconciled to production and waste records | kg; kWh; MJ | each batch, meter period, or transfer | representative production period covering declared seasonal operation | every included wood-component site and controlled subcontractor | Sum by atomic flow and normalize to accepted shaped-component mass and then reference output | calibration records; supplier specifications; moisture records; meter coverage; waste receipts; capture-system records |
| `cp_flexible_component_records` | `flexible_component_preparation` | leather, textile, plastic sheet, thread, electricity, accepted components, and offcuts | issue-return ledger, scale, meter, cutting and sewing log | batch_id; material_id; supplier_lot; issued_mass; returned_mass; accepted_component_mass; offcut_mass; thread_mass; electricity; destination | Batch reconciliation using calibrated scales and submeter or verified equipment runtime | kg; kWh | each batch | representative production period | every included cutting and sewing site | Sum each material separately and normalize to accepted component and reference output | supplier composition; scale calibration; meter coverage; cutting plan; waste receipts |
| `cp_bottom_forming_records` | `nonwood_bottom_forming` | rubber, EVA, polyurethane system, electricity, steam, cooling water, accepted components, scrap, and wastewater | formulation and charge sheet, scale, meter, water balance, wastewater transfer record | batch_id; formulation_id; charge_mass; returned_mass; accepted_output_mass; scrap_mass; electricity; steam; make_up_water; wastewater_mass; destination | Batch charge and output reconciliation with calibrated utilities meters | kg; kWh; MJ | each batch and utility meter period | representative production period | every included forming site | Keep each compound and carrier separate; normalize to accepted component and reference output | formulation certificate; calibration; meter coverage; wastewater and waste receipts |
| `cp_final_assembly_records` | `final_assembly_finishing` | intermediate components, nails, adhesives, cleaners, electricity, heat, accepted output, residues, and rejects | bill of materials, issue-return ledger, scale, meter, chemical inventory, inspection and rework log | batch_id; model; component_id; component_mass; fastener_mass; chemical_id; issued_mass; returned_mass; residue_mass; electricity; heat; accepted_output_mass; reject_mass | Batch-level material and utility reconciliation from controlled records | kg; kWh; MJ | each batch | representative production period | every included assembly and finishing site | Sum each atomic exchange, allocate shared utilities by documented causal driver, and normalize to accepted unboxed output | BOM; supplier SDS and VOC content; calibration; meter coverage; inspection and waste records |
| `cp_voc_records` | `wood_component_manufacturing`; `final_assembly_finishing` | varnish, cleaner, and adhesive VOC emissions | supplier formulation, chemical ledger, capture/recovery record, stack or workplace exhaust measurement | chemical_id; chemical_mass; voc_species; voc_fraction; returned_mass; recovered_mass; waste_mass; retained_mass; captured_mass; emitted_mass; measurement_method | Species-level mass balance reconciled to measurement; a dataset shall add one atomic elementary-flow row for every emitted named VOC and shall not use a generic VOC or NMVOC row | kg | each chemical lot and reporting period | same period as chemical consumption | every emitting site and controlled subcontractor | Calculate each named VOC separately and prevent overlap between chemically specific emissions | SDS; EN 14602-aligned calculation documentation when applicable; instrument records; capture and waste receipts |
| `cp_reference_output_records` | `final_assembly_finishing`; `packaging` | accepted and rejected footwear output | calibrated scale, production count, inspection and rework record | batch_id; model; size; count; sampled_net_mass; total_net_mass; accepted_mass; rejected_mass; rework_mass; packaging_mass | Weigh accepted net footwear separately from packaging; reconcile pair count to mass | kg; pair; item | each batch | full reporting period | all final-assembly and packaging sites | Sum accepted net product and normalize to exactly 1 kg; keep packaging outside product mass | scale calibration; inspection release; count-to-mass sample record; rework log |
| `cp_packaging_records` | `packaging` | box, tissue paper, LDPE film, paper label, electricity, and packaging wastes | packaging BOM, issue-return ledger, scale, meter, waste transfer note | batch_id; packaging_component_id; issued_mass; returned_mass; incorporated_mass; waste_mass; electricity; packed_count; destination | Component-level mass reconciliation and metered or calculated packaging-line electricity | kg; kWh | each packaging batch | representative production period | all packaging sites | Normalize each packaging component and its waste separately to 1 kg net footwear | packaging specifications; scale calibration; meter coverage; waste receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | accepted reference output | normalized output = accepted net footwear mass / accepted net footwear mass; scale all inventory rows so reference output equals exactly 1 kg | accepted net footwear mass; inventory totals | each exchange per 1 kg reference footwear | `eu-pef-2021` |
| `calc_pair_to_mass` | pair or item records | total net mass = sum(count by size × measured mean net mass for matching model and size or documented size mix) | count; model; size; sampled masses | kg net footwear |  |
| `calc_material_incorporation` | material and chemical inputs | consumed mass = issued mass − returned unused mass; reconcile consumed mass to incorporation, emissions, recovered mass, captured residue, and waste | issue; return; output; emission; recovery; residue; waste | kg of each atomic material exchange | `af-pefcr-v3-1-2025`; `eu-ecolabel-footwear-2016` |
| `calc_processing_loss` | each manufacturing material | processing loss fraction = measured material-specific waste / measured accepted material input on the same moisture and formulation basis; report the observed value, not an external default | accepted input; material-specific waste | observed loss fraction and waste mass | `af-pefcr-v3-1-2025` |
| `calc_energy_attribution` | shared electricity or thermal meters | attributed energy = metered period energy × documented causal driver for the batch / total driver over the same period | meter total; machine time, submeter share, or processed mass driver | kWh or MJ assigned to process and batch | `eu-pef-2021` |
| `calc_voc_mass_balance` | each VOC-bearing formulated product | named VOC emission = chemical input × supplier mass fraction − named VOC in unused return, product retention, captured material, recovered material, and waste; reconcile against direct measurement | chemical issue and return; formulation; retained, captured, recovered, waste, and measured emission mass | kg of each named VOC to air in a separate atomic row | `eu-ecolabel-footwear-2016`; `eu-sts-bref-2020` |
| `calc_mass_balance` | each process and reporting period | input mass + opening in-process stock = accepted product + returned material + closing stock + each waste output + each measured mass emission; investigate material-specific imbalance before release | atomic material inputs and outputs; stock; emissions | reconciliation difference and documented resolution | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and reference flow | Retain the CPC 29520 rationale, model specification, route, required qualifiers, reference UUID, Mass property, Units of mass group, and kg unit. | product specification; classification record; Tiangong identity fields |
| `dq_bom` | materials and components | Cover at least 95% of the product BOM by mass and 100% of principal upper, body, sole, lining, and metal parts; identify the residual share without aggregating it into an inventory flow. | signed BOM; supplier specifications; mass reconciliation; `af-pefcr-v3-1-2025` |
| `dq_route` | process selection | Demonstrate which conditional processes and route-specific rows apply; a zero or omitted row requires evidence of non-use, not a generic assumption. | routing sheet; work instructions; equipment and subcontractor list |
| `dq_temporal` | all foreground records | Use one coherent production period and document downtime, start-up, changeover, seasonal conditioning, and abnormal events that materially affect results. | production calendar; meter periods; exception log |
| `dq_chemical` | adhesives, cleaners, and finishes | Retain formulation identity, VOC fraction, issued and returned mass, captured or recovered mass, waste mass, and emission calculation for each product. | SDS; supplier formulation; chemical ledger; emission and capture records; `eu-ecolabel-footwear-2016` |
| `dq_waste_destination` | all waste flows | Record measured mass, waste identity, transfer date, destination, and treatment or recovery route; do not infer recycling from container labels. | waste transfer note; contractor receipt; mass record |
| `dq_proxy` | upstream datasets | Disclose geography, technology, time, and material mismatches for every proxy and explain why it is the closest available dataset. | dataset metadata; proxy register; `eu-pef-2021` |
| `dq_range_evidence` | amount ranges | Do not infer an empirical range from one product or facility. A source-backed empirical range requires at least two independent, boundary-compatible originals and an explicit synthesis; otherwise retain foreground collection without a range. | source review record; range synthesis when applicable |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Reject unless the output is exactly 1 kg net finished footwear excluding packaging and uses product flow `e377f482-0635-4972-8954-9279707bfd7e`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `un-cpc-v3-2025` |
| `validate_classification` | product identity | Reject unless the dataset documents why the model belongs in CPC 29520 and records exclusion checks against CPC 293, 294, 29510, and 29600 and the parent-category exclusions. | `un-cpc-v3-2025` |
| `validate_route_completeness` | process map | Reject if an applicable wooden, flexible-component, non-wood-bottom, assembly, finishing, inspection, rework, or packaging operation is omitted or if a conditional process is marked not applicable without route evidence. | `af-pefcr-v3-1-2025`; `fao-forest-handicrafts-clogs` |
| `validate_atomic_flows` | process inventory | Reject any selected flow that combines materials, electricity with thermal carriers, alternative fuels, packaging components, waste streams, or elementary emissions; each row must remain one physically or chemically specific exchange. |  |
| `validate_bom_coverage` | bill of materials | Reject if BOM coverage is below 95% by product mass, a principal part is omitted, or unclassified residual mass is represented as a plural or generic inventory flow. | `af-pefcr-v3-1-2025` |
| `validate_mass_balance` | material conversion | Reject unexplained material-specific imbalance after accounting for returned inputs, accepted output, stock change, every waste stream, and measured mass emissions on consistent moisture and formulation bases. | `eu-pef-2021` |
| `validate_energy_separation` | energy inventory | Reject if electricity, steam, or purchased heat is combined or if conversions cannot be traced to original meters, invoices, and conversion factors. | `eu-pef-2021`; `rusu-et-al-footwear-lca-2024` |
| `validate_voc_accounting` | adhesives, cleaners, varnishes, and air emissions | Reject generic VOC or NMVOC emission rows and double counting among acetone, ethyl acetate, and other named VOCs; require input, return, retention, capture, recovery, waste, and emission reconciliation for each chemical. | `eu-ecolabel-footwear-2016`; `eu-sts-bref-2020` |
| `validate_packaging` | packaging | Reject if footwear net mass includes packaging or if corrugated cardboard, tissue paper, LDPE film, paper labels, and additional actual packaging components are combined. | `af-pefcr-v3-1-2025` |
| `validate_ranges` | amount ranges | Reject any lower-equals-upper pseudo-range or empirical range copied from a single case; require the declared evidence tier and source synthesis for every authored range. |  |
| `validate_allocation` | shared operations and recovery | Reject undocumented allocation, arbitrary mass allocation without a causal basis, and foreground recycling credits that are inconsistent with the declared downstream convention. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | product-specific factory-gate foreground data package for CPC 29520 footwear production |
| downstream_use | `secondary_dataset`; `background_dataset` when route, geography, time, and material composition are sufficiently representative and disclosed |
| allowed_use | construction of process and lifecyclemodel datasets for the same declared product route; supplier-specific or scenario studies with explicit representativeness review |
| excluded_use | automatic use for footwear in other CPC subclasses; comparison of unlike functions, performance, lifetimes, or routes; use-stage or end-of-life claims not modelled by this factory-gate dataset; substitution for primary records when site data are required |
| required_metadata | canonical PCR id; CPC rationale; model and intended function; route; required qualifiers; sites and subcontractors; period; geography; BOM coverage; wood species and moisture state; chemical formulations; allocation; waste destinations; upstream dataset versions and proxies; packaging configuration |
| required_quality_disclosure | foreground coverage; meter and scale coverage; count-to-mass sampling; BOM residual share; conditional-process decisions; data gaps; proxy representativeness; mass-balance residuals; VOC calculation basis; unresolved UUIDs; range-evidence gaps; reviewer status |
| update_trigger | material, supplier, formulation, process route, equipment, energy source, subcontractor, packaging, geography, regulation, Tiangong identity, or evidence change that materially affects the inventory or its interpretation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory notes, CPC 29520, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-20) | exact product-category identity, hierarchy, scope exclusions, and reference-product validation |
| `af-pefcr-v3-1-2025` | `standard` | Technical Secretariat, Product Environmental Footprint Category Rules (PEFCR): Apparel and Footwear, Version 3.1, 29 April 2025, https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (retrieved 2026-08-20) | footwear component-manufacturing and assembly decomposition, route variability, BOM and assembly-loss data, manufacturing waste, packaging differentiation, and data quality |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-20) | system boundary, company-specific data, data quality, allocation hierarchy, cut-off discipline, and recovery convention |
| `eu-ecolabel-footwear-2016` | `standard` | Commission Decision (EU) 2016/1349 establishing ecological criteria for the award of the EU Ecolabel for footwear, http://data.europa.eu/eli/dec/2016/1349/oj (retrieved 2026-08-20) | footwear-assembly definition, purchased leather/adhesive/finish records, chemical formulation evidence, VOC inventory and verification |
| `fao-forest-handicrafts-clogs` | `official_guidance` | FAO, Forest-based Small-scale Enterprises in Asia: Case Study Three, Forest-based Handicrafts in Indonesia, section 5.4.2.3 Umbrellas and Clogs, https://www.fao.org/4/x5860e/x5860e06.htm (retrieved 2026-08-20) | wooden-clog process decomposition: wood-block cutting, carving, sanding, varnishing, leather/plastic strap, nails, glue, and final assembly |
| `eu-sts-bref-2020` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document on Surface Treatment Using Organic Solvents including Preservation of Wood and Wood Products with Chemicals, 2020, https://eippcb.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation (retrieved 2026-08-20) | solvent coating boundary, air emissions, water and energy records, capture and material-balance requirements |
| `rusu-et-al-footwear-lca-2024` | `literature` | Rusu et al., Environmental Impact of Footwear Using Life Cycle Assessment—Case Study of Professional Footwear, Sustainability 16(14), 6094, 2024, https://doi.org/10.3390/su16146094 | peer-reviewed full-text support for material preparation, component processing, assembly, electricity, thermal energy, water, air emissions, wastewater, production waste, and packaging process decomposition; not used for amount ranges |
