---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.optical-fibres-and-optical-fibre-bundles-optical-fibre-cables-except-those-made-up-of-i-e43568b5
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Optical fibres, polarizing material, and worked optical elements

## 1. Scope and Applicability

This PCR covers factory-gate production of optical fibres and fibre bundles; optical-fibre cables other than cables made up of individually sheathed fibres; sheets and plates of polarizing material; and optically worked lenses, prisms, mirrors, and other optical elements, mounted or unmounted. It excludes unworked glass elements and optical elements for cameras, projectors, and photographic enlargers or reducers. Connectors, complete optical instruments, installation, use, and end-of-life are outside the default boundary.

One product-family route shall be declared for each foreground data package. The common mass reference permits comparison only after product function, optical performance, geometry, composition, coating or lamination, and mounting state have also been matched.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.optical-fibres-and-optical-fibre-bundles-optical-fibre-cables-except-those-made-up-of-i-e43568b5 |
| classification_refs | CPC 3.0: 48311 (mapping context only) |
| covered_products | Coated optical fibre; optical-fibre bundle; optical-fibre cable not made up of individually sheathed fibres; polarizing-material sheet or plate; optically worked lens, prism, mirror, or other optical element, mounted or unmounted |
| excluded_products | Individually sheathed-fibre cable; unworked glass element; camera, projector, photographic enlarger, or photographic reducer optical element; connector; complete optical instrument |
| representative_product | Coated silica optical fibre at the producing factory gate |
| production_route | Declare exactly one primary family route: fibre drawing and coating; fibre bundling or cabling; polarizer-film fabrication; or worked optical-element fabrication |
| market_state | Unpackaged saleable product at factory gate, after route-specific inspection and before downstream installation or use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of an unpackaged saleable optical product within the covered boundary |
| How much | 1 kg net saleable product |
| How well | Meets the declared geometry, composition, optical-performance, coating or lamination, mounting, and acceptance specifications |
| How long or cycle | One factory-gate production output; use-stage service life is outside scope |
| reference_flow_link | Instantiate the applicable route output row; `fibre_saleable_product` is the representative link |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable product |
| Reference product flow | Coated silica optical fibre |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family and exact product name; glass, polymer, crystal, or metal composition and grade; dimensions and net mass conversion; optical attenuation, transmission, reflection, polarization, refractive-index, wavefront, or surface-quality specification as applicable; coating, lamination, buffer, jacket, and mounting state; production technology; geography; reference period; factory-gate acceptance yield |

When constructing a foreground data package, all Required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A non-fibre product shall replace the representative display name with its exact route output identity while retaining the mass property and all applicable qualifiers; this does not create an additional PCR reference-flow object.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net saleable mass excluding transport packaging, rejected pieces, removable carriers, and test coupons. |
| `length_to_mass` | optical fibre, bundle, or cable reported by length | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert measured length using product-specific measured mass per length from the same lot; retain the original length, sampling record, and conversion factor. |
| `area_to_mass` | polarizing sheet or plate reported by area | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert measured area using product-specific measured areal mass from the same construction and lot; retain area and areal-mass evidence. |
| `count_to_mass` | worked optical elements reported by item | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use full-lot mass or a documented representative weighing plan; retain item count, sampled mass, and extrapolation. |
| `electricity_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter kWh and convert to MJ using 1 kWh = 3.6 MJ; do not add upstream generation emissions as foreground elementary flows. |

## 5. System Boundary

The foreground boundary begins with receipt of the declared route precursors and ends with accepted unpackaged product at the factory gate. It includes route-specific forming or drawing, coating or lamination, finishing, in-process testing, rejects, and waste preparation at the producing site. Upstream precursor production and off-site waste treatment require linked datasets and are not folded into foreground measurements.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received, specification-conforming preform, coated fibre, polymer film, optical blank, process chemical, water, and purchased electricity at the producing-site gate, as applicable to the selected route |
| starting_condition_role | Foreground entry point for route-specific conversion; upstream production remains in linked supplier or representative datasets |
| product_classification_scope | Semantic product boundary above; CPC 3.0:48311 is mapping evidence and does not independently define PCR identity |
| recursive_input_rule | When coated optical fibre or another covered product enters bundling, cabling, or assembly, record it once as a product input with an upstream dataset; do not recursively reproduce its production inside the consuming process |
| upstream_dataset_requirement | Link each purchased material, chemical, water, and electricity input to a geography-, technology-, grade-, and state-appropriate upstream dataset and disclose proxies |
| disclosure | Declare selected route, precursor state, included operations, outsourced operations, coating or lamination system, mounting state, acceptance criteria, cut-off decisions, allocation, geography, technology, and reference period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | all datasets | Select at least one and normally exactly one primary product-family route; do not average unrelated product families into one reference flow. | `un-cpc-3-0-structure-2025` |
| `boundary_fibre_and_cable` | fibre or cable route | Include drawing, protective coating and curing, testing, and—when applicable—buffering, bundling, and jacketing performed by the reporting site. | `foa-optical-fiber-manufacturing`, `foa-fiber-optic-cables` |
| `boundary_polarizer` | polarizer route | Include PVA-film conditioning, dyeing, crosslinking, stretching, drying, protective-film lamination, finishing, and inspection performed by the reporting site. | `yan-et-al-2026-pva-dye-films` |
| `boundary_optical_element` | worked optical-element route | Include blank shaping, generating, grinding, polishing, centering or edging, cleaning, optional coating or bonding, and inspection performed by the reporting site. | `anderson-burge-optical-fabrication` |
| `boundary_outsourcing` | outsourced operations | Report an outsourced included operation as a linked product input and disclose the excluded foreground operation; never omit its burden without disclosure. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fibre_drawing` | Optical-fibre drawing, coating, curing, and test | `conditional` | Declared product is coated optical fibre, optical-fibre bundle, or optical-fibre cable and drawing occurs within the reporting boundary | foreground production | accepted coated fibre mass |
| `fibre_cabling` | Fibre bundling or cable buffering and jacketing | `conditional` | Declared product is an optical-fibre bundle or a cable not made up of individually sheathed fibres | foreground production | accepted bundle and cable mass, reported separately |
| `polarizer_fabrication` | Polarizer-film treatment and lamination | `conditional` | Declared product is a sheet or plate of polarizing material | foreground production | accepted polarizing product mass |
| `optical_element_fabrication` | Worked optical-element fabrication | `conditional` | Declared product is a covered worked lens, prism, mirror, or other optical element | foreground production | accepted worked-element mass |

### Process: Optical-fibre drawing, coating, curing, and test (`fibre_drawing`)

#### Inputs

##### Product flows

###### High-purity fused-silica optical-fibre preform (`fibre_silica_preform`)

Record the preform mass charged to drawing, including measured remnant change.

- Selected flow: High-purity fused-silica optical-fibre preform
- Flow property / unit: Mass / kg
- Amount rule: measured preform consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted coated optical fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_drawing_records`
- Sources: `foa-optical-fiber-manufacturing`

###### UV-curable acrylate optical-fibre coating resin (`fibre_uv_coating`)

Record each resin formulation as a separate instantiated exchange when formulations differ; this row represents the declared coating resin.

- Selected flow: UV-curable acrylate optical-fibre coating resin
- Flow property / unit: Mass / kg
- Amount rule: measured resin issued less recoverable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted coated optical fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_drawing_records`
- Sources: `foa-optical-fiber-manufacturing`

###### Purchased electricity for fibre drawing (`fibre_electricity`)

Record metered electricity for furnace, cooling, coating cure, winding, and in-line testing within this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: allocated metered electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted coated optical fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_drawing_records`
- Sources: `foa-optical-fiber-manufacturing`

#### Outputs

##### Product flows

###### Accepted coated silica optical fibre (`fibre_saleable_product`)

Record only fibre passing declared optical, geometry, and proof-test acceptance criteria.

- Selected flow: Coated silica optical fibre
- Flow property / unit: Mass / kg
- Amount rule: measured accepted saleable output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_drawing_records`
- Sources: `foa-optical-fiber-manufacturing`

##### Waste flows

###### Optical-fibre drawing and cured-coating scrap (`fibre_scrap`)

Record rejected or start-up fibre leaving the process as the declared composite scrap.

- Selected flow: Optical-fibre drawing and cured-coating scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap transferred from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted coated optical fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_drawing_records`
- Sources: `foa-optical-fiber-manufacturing`

### Process: Fibre bundling or cable buffering and jacketing (`fibre_cabling`)

#### Inputs

##### Product flows

###### Coated optical fibre supplied to bundling or cabling (`cable_optical_fibre_input`)

Record received coated fibre once as a technosphere input under the recursive-input rule.

- Selected flow: Coated silica optical fibre
- Flow property / unit: Mass / kg
- Amount rule: measured coated-fibre consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted bundle or cable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_cabling_records`
- Sources: `foa-fiber-optic-cables`

###### Polyethylene optical-fibre cable jacket compound (`cable_polyethylene_jacket`)

Record the declared polyethylene jacket compound only when jacketing is performed; exclude it for an unjacketed bundle.

- Selected flow: Polyethylene optical-fibre cable jacket compound
- Flow property / unit: Mass / kg
- Amount rule: measured compound issued less recoverable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted jacketed cable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_cabling_records`
- Sources: `foa-fiber-optic-cables`

###### Purchased electricity for bundling or cabling (`cable_electricity`)

Record metered electricity for buffering, grouping, extrusion, take-up, and test operations in the selected route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: allocated metered electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted bundle or cable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_cabling_records`
- Sources: `foa-fiber-optic-cables`

#### Outputs

##### Product flows

###### Accepted optical-fibre bundle (`fibre_bundle_saleable_product`)

Record accepted bundle mass only when the declared output is an optical-fibre bundle.

- Selected flow: Optical-fibre bundle
- Flow property / unit: Mass / kg
- Amount rule: measured accepted bundle output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg bundle reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_cabling_records`
- Sources: `foa-fiber-optic-cables`

###### Accepted optical-fibre cable without individually sheathed fibres (`cable_saleable_product`)

Record accepted cable mass only when its construction satisfies the stated exclusion.

- Selected flow: Optical-fibre cable without individually sheathed fibres
- Flow property / unit: Mass / kg
- Amount rule: measured accepted cable output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cable reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_cabling_records`
- Sources: `un-cpc-3-0-structure-2025`, `foa-fiber-optic-cables`

##### Waste flows

###### Optical-fibre cable jacket trim (`cable_trim`)

Record measured polyethylene-rich jacket trim leaving the cabling process.

- Selected flow: Optical-fibre cable jacket trim
- Flow property / unit: Mass / kg
- Amount rule: measured jacket trim transferred from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted jacketed cable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_cabling_records`
- Sources: `foa-fiber-optic-cables`

### Process: Polarizer-film treatment and lamination (`polarizer_fabrication`)

#### Inputs

##### Product flows

###### Polyvinyl-alcohol polarizer film (`polarizer_pva_film`)

Record the PVA film charged to swelling, dyeing, crosslinking, and stretching.

- Selected flow: Polyvinyl-alcohol polarizer film
- Flow property / unit: Mass / kg
- Amount rule: measured PVA film consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted polarizing product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polarizer_records`
- Sources: `yan-et-al-2026-pva-dye-films`

###### Elemental iodine for polarizer dyeing (`polarizer_iodine`)

Record elemental iodine charged to the declared dye bath; other dichroic dyes require separate instantiated exchanges.

- Selected flow: Elemental iodine
- Flow property / unit: Mass / kg
- Amount rule: measured iodine make-up consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted polarizing product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polarizer_records`
- Sources: `yan-et-al-2026-pva-dye-films`

###### Anhydrous boric acid powder for crosslinking (`polarizer_boric_acid`)

Record boric-acid product mass before solution preparation and disclose bath concentration.

- Selected flow: Boric acid, anhydrous, powder `c3db6e91-34b8-4748-993b-3dec963167fe`
- Flow property / unit: Mass / kg
- Amount rule: measured boric-acid make-up consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted polarizing product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polarizer_records`
- Sources: `yan-et-al-2026-pva-dye-films`

###### Triacetyl-cellulose protective film (`polarizer_tac_film`)

Record TAC protective film laminated to the PVA polarizing layer.

- Selected flow: Triacetyl-cellulose protective film
- Flow property / unit: Mass / kg
- Amount rule: measured TAC film consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted polarizing product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polarizer_records`
- Sources: `yan-et-al-2026-pva-dye-films`

###### Process water for polarizer treatment (`polarizer_process_water`)

Record fresh process water entering swelling, bath make-up, washing, and cleaning.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted polarizing product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polarizer_records`
- Sources: `yan-et-al-2026-pva-dye-films`

###### Purchased electricity for polarizer fabrication (`polarizer_electricity`)

Record metered electricity for film transport, stretching, drying, lamination, and inspection.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: allocated metered electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted polarizing product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polarizer_records`
- Sources: `yan-et-al-2026-pva-dye-films`

#### Outputs

##### Product flows

###### Accepted polarizing-material sheet or plate (`polarizer_saleable_product`)

Record accepted net product mass after trimming and release-carrier exclusion.

- Selected flow: Polarizing-material sheet or plate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted saleable output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polarizer_records`
- Sources: `un-cpc-3-0-structure-2025`, `yan-et-al-2026-pva-dye-films`

##### Waste flows

###### Iodine-bearing polarizer-process wastewater (`polarizer_iodine_wastewater`)

Record the aqueous waste stream containing iodine-bearing bath and rinse losses before on-site treatment.

- Selected flow: Iodine-bearing polarizer-process wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater transferred from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted polarizing product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polarizer_records`
- Sources: `yan-et-al-2026-pva-dye-films`

###### PVA/TAC polarizer-film trim (`polarizer_trim`)

Record composite film trim and rejected laminate separately from packaging waste.

- Selected flow: PVA/TAC polarizer-film trim
- Flow property / unit: Mass / kg
- Amount rule: measured film trim transferred from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted polarizing product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polarizer_records`
- Sources: `yan-et-al-2026-pva-dye-films`

### Process: Worked optical-element fabrication (`optical_element_fabrication`)

#### Inputs

##### Product flows

###### Optical glass pressing blank (`optical_glass_blank`)

Record the mass of optical glass pressing blanks entering shaping or generating.

- Selected flow: Optical Glass Pressing Blank `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- Flow property / unit: Mass / kg
- Amount rule: measured blank consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted worked optical element
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_records`
- Sources: `anderson-burge-optical-fabrication`

###### Cerium oxide polishing compound (`optical_cerium_oxide`)

Record cerium-oxide product mass used to prepare or replenish polishing slurry.

- Selected flow: Cerium oxide `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- Flow property / unit: Mass / kg
- Amount rule: measured cerium-oxide consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted worked optical element
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_records`
- Sources: `anderson-burge-optical-fabrication`

###### Magnesium fluoride optical coating material (`optical_magnesium_fluoride`)

Record magnesium fluoride only when the declared coating recipe uses it.

- Selected flow: Magnesium fluoride `93bc64cc-df82-4a13-aa0f-9f05cb4b40c9`
- Flow property / unit: Mass / kg
- Amount rule: measured coating-material consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted coated optical element
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_records`
- Sources: `anderson-burge-optical-fabrication`

###### High-purity aluminium mirror-coating evaporation material (`optical_aluminium`)

Record high-purity aluminium only for a declared reflective-coating route.

- Selected flow: High-purity aluminium mirror-coating evaporation material
- Flow property / unit: Mass / kg
- Amount rule: measured evaporation-material consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted coated mirror output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_records`
- Sources: `anderson-burge-optical-fabrication`

###### Process water for optical grinding and polishing (`optical_process_water`)

Record fresh process water entering grinding, slurry preparation, rinsing, and cleaning.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted worked optical element
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_records`
- Sources: `anderson-burge-optical-fabrication`

###### Purchased electricity for optical fabrication (`optical_electricity`)

Record metered electricity for shaping, grinding, polishing, cleaning, coating, bonding, and inspection within the selected route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: allocated metered electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted worked optical element
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_records`
- Sources: `anderson-burge-optical-fabrication`

#### Outputs

##### Product flows

###### Accepted worked optical element (`optical_saleable_product`)

Record the exact accepted lens, prism, mirror, or other worked element; disclose material, coating, bonding, and mounting state.

- Selected flow: Worked optical lens, prism, mirror, or other optical element
- Flow property / unit: Mass / kg
- Amount rule: measured accepted saleable output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_records`
- Sources: `un-cpc-3-0-structure-2025`, `anderson-burge-optical-fabrication`

##### Waste flows

###### Optical-glass grinding and polishing sludge (`optical_polishing_sludge`)

Record the aqueous slurry waste containing glass particles and spent polishing compound before on-site treatment.

- Selected flow: Optical-glass grinding and polishing sludge
- Flow property / unit: Mass / kg
- Amount rule: measured sludge transferred from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted worked optical element
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_records`
- Sources: `anderson-burge-optical-fabrication`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | all routes | Subdivide route lines and directly meter material, electricity, water, output, and waste before applying allocation. |  |
| `allocation_shared_utilities` | shared utilities and equipment | Allocate residual shared quantities using a documented causal driver such as metered machine energy, operating time at comparable load, or processed mass; disclose driver values. |  |
| `allocation_multiple_products` | multiple saleable products from one campaign | Prefer separate measured output records; when inseparable, allocate by a documented physical relationship that reflects the causal process and report each product mass. |  |
| `allocation_waste_treatment` | waste and recycling | Report waste leaving the foreground and any on-site treatment separately; do not embed avoided-burden credits in the foreground exchange amount. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fibre_drawing_records` | `fibre_drawing` | all listed fibre-drawing exchanges | purchase and issue records; electricity meters; production and reject logs; waste transfer records | preform mass; resin issue and return; kWh; accepted length and mass; scrap mass; lot and specification | reconcile calibrated meters, scales, inventory issues, and lot records | kg; m; kWh; MJ | each lot or continuous meter with monthly reconciliation | representative 12 consecutive months or full shorter campaign | all in-scope drawing lines at the reporting site | sum by product specification, convert to mass, allocate shared quantities, divide by accepted output kg | calibration records; invoices; stock reconciliation; acceptance and waste tickets |
| `cp_fibre_cabling_records` | `fibre_cabling` | all listed bundling and cabling exchanges | material issues; electricity meters; production logs; waste transfer records | fibre mass; jacket-compound issue and return; kWh; accepted bundle mass; accepted cable mass; trim mass; construction | reconcile material and energy records by construction and line | kg; m; kWh; MJ | each lot or continuous meter with monthly reconciliation | representative 12 consecutive months or full shorter campaign | all in-scope bundling and cabling lines | keep bundle and cable outputs separate, allocate shared quantities, divide by applicable accepted output kg | calibration; inventory reconciliation; construction record; acceptance and waste tickets |
| `cp_polarizer_records` | `polarizer_fabrication` | all listed polarizer exchanges | film issues; bath make-up logs; water and electricity meters; production, wastewater, and trim records | PVA, iodine, boric acid, TAC, water, kWh, accepted area and mass, wastewater mass, trim mass, construction | reconcile roll, bath, meter, scale, and waste records | kg; m2; kWh; MJ | each roll or bath; meters monthly | representative 12 consecutive months or full shorter campaign | all in-scope polarizer lines | convert accepted area to mass by same-construction lot evidence, allocate shared quantities, divide by accepted kg | roll genealogy; bath logs; meter calibration; acceptance and waste records |
| `cp_optical_element_records` | `optical_element_fabrication` | all listed optical-element exchanges | blank and compound issues; water and electricity meters; production, inspection, and sludge records | blank mass; polishing and coating material; water; kWh; accepted count and mass; sludge mass; optical specification | reconcile lot travellers, material issues, meters, scales, and inspection release | kg; item; kWh; MJ | each lot; continuous meters monthly | representative 12 consecutive months or full shorter campaign | all in-scope fabrication cells | convert count to mass using full-lot or documented sample weighing, allocate shared quantities, divide by accepted kg | lot genealogy; calibration; material reconciliation; optical inspection and waste records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | every inventory row | normalized amount = in-scope period exchange × documented allocation fraction ÷ accepted route-output mass | exchange record; allocation driver; accepted output kg | exchange amount per kg accepted product |  |
| `calc_electricity_mj` | electricity rows | MJ = metered kWh × 3.6 | metered kWh | purchased electricity in MJ |  |
| `calc_length_mass` | fibre, bundle, and cable outputs | kg = measured length × same-lot measured mass per length; reconcile to scale totals | length; kg/m; scale total | accepted mass |  |
| `calc_area_mass` | polarizing product | kg = accepted area × same-construction measured areal mass; reconcile to roll mass | accepted m2; kg/m2; roll mass | accepted mass |  |
| `calc_count_mass` | worked optical elements | kg = accepted item count × representative accepted-item mass, unless full-lot mass is available | count; sampling plan; item mass or full-lot mass | accepted mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | Record exact product family, composition, construction, optical specification, coating or lamination, mounting, and supplier product state. | specifications; lot genealogy; supplier declarations |
| `dq_temporal` | all foreground rows | Cover 12 consecutive representative months or the entire shorter campaign and explain shutdowns, start-ups, and atypical lots. | dated meters, production logs, and reconciliation period |
| `dq_completeness` | each selected route | Reconcile all listed atomic exchanges; document a demonstrable zero or inapplicability rather than silently omitting a row. | material, energy, water, output, and waste reconciliation |
| `dq_measurement` | converted length, area, count, and electricity | Retain original units, calibration, sampling, conversion factors, and calculation versions. | calibration certificates; weighing and conversion workpapers |
| `dq_upstream` | linked product inputs | Match geography, technology, grade, purity, water quality, electricity mix, and delivery state; disclose every proxy. | upstream dataset metadata and proxy justification |
| `dq_uncertainty` | allocated or sampled values | Quantify or qualitatively rank uncertainty from allocation, sampling, missing periods, and unresolved flow identity. | uncertainty record and sensitivity results |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope_identity` | reference product | Reject a dataset that does not identify one covered product-family route or that includes an explicitly excluded product. | `un-cpc-3-0-structure-2025` |
| `validation_reference_mass` | reference flow | Confirm 1 kg accepted net saleable mass and verify any length-, area-, or count-to-mass conversion against retained lot evidence. |  |
| `validation_inventory_accounting` | selected route | Require a value, documented zero, or justified inapplicability for every applicable atomic row and reconcile outputs, rejects, and inventory changes. |  |
| `validation_uuid_and_unit` | UUID-bearing rows | Confirm UUID, public state, English and Chinese baseName, flow type, property, unit group, and unit; unresolved rows shall remain without a proxy UUID. |  |
| `validation_recursive_input` | fibre bundling or cabling | Confirm that covered fibre input is linked once to an upstream dataset and is not recursively reproduced or omitted. | `foa-fiber-optic-cables` |
| `validation_source_use` | quantitative interpretation | Treat the listed sources as identity and process-decomposition evidence only; do not infer numeric defaults or ranges from them. | `foa-optical-fiber-manufacturing`, `foa-fiber-optic-cables`, `yan-et-al-2026-pva-dye-films`, `anderson-burge-optical-fabrication` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product-system dataset |
| downstream_use | `secondary_dataset`; `background_dataset` when route, geography, technology, and product qualifiers match |
| allowed_use | Cradle-to-factory-gate modelling of the exact declared optical product and manufacturing route; contribution analysis within matched product systems |
| excluded_use | Comparison across unmatched product families or optical performance; use-stage service claims; individually sheathed-fibre cables; unworked glass; excluded photographic or projection optics; substitution of unresolved UUIDs with proxies |
| required_metadata | PCR id and version; exact product identity; selected route; functional and optical specifications; composition and construction; coating, lamination, and mounting state; factory and geography; technology; reference period; net-mass conversion; boundary; allocation; upstream proxies; data quality |
| required_quality_disclosure | Coverage and reconciliation; meter and scale quality; sampling and conversions; acceptance yield; allocation; missing data; unresolved flow UUIDs and range-evidence needs; uncertainty |
| update_trigger | Material change in product construction, precursor, coating or lamination chemistry, optical specification, route technology, site, electricity supply, allocation, acceptance yield, or data older than the reporting programme permits |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Exact classification wording, inclusions, and exclusions used as mapping and boundary evidence |
| `foa-optical-fiber-manufacturing` | extension_guidance | The Fiber Optic Association, Manufacturing optical fiber. https://www.thefoa.org/tech/fibr-mfg.htm (retrieved 2026-09-07) | Fibre preform, drawing, coating, UV curing, testing, and transition to cabling |
| `foa-fiber-optic-cables` | extension_guidance | The Fiber Optic Association, Fiber Optic Cables. https://www.thefoa.org/tech/ref/basic/cable.html (retrieved 2026-09-07) | Cable buffering, strength, grouping, and jacketing process scope |
| `yan-et-al-2026-pva-dye-films` | literature | Yan et al., Next-Generation PVA–Dye Complex Film with Advanced Properties for Optical Applications, Polymers 18(7), 876. https://doi.org/10.3390/polym18070876 | Polarizer layer identity and swelling, dyeing, crosslinking, stretching, coating, and lamination process decomposition |
| `anderson-burge-optical-fabrication` | handbook | David Anderson and Jim Burge, Optical Fabrication, The Handbook of Optical Engineering. https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Anderson-and-Burge.doc (retrieved 2026-09-07) | Optical-element blank shaping, generating, grinding, polishing, edging, cleaning, bonding, and coating preparation |
