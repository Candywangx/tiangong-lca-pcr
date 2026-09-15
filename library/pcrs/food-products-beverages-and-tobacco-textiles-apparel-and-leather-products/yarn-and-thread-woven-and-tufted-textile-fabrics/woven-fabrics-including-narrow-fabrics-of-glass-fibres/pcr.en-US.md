---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-including-narrow-fabrics-of-glass-fibres
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven fabrics (including narrow fabrics) of glass fibres

## 1. Scope and Applicability

This PCR governs foreground data packages for manufacturing woven glass-fibre fabrics, including woven narrow fabrics, from purchased glass continuous-filament yarn or roving. It covers warping, on-site warp sizing when performed, loom weaving, inspection, slitting or edge trimming, rolling, and packaging to the plant gate.

The category includes greige woven glass cloth, woven roving, woven open-mesh glass-fibre fabric, tapes and other narrow woven glass-fibre constructions when their defining formation method is interlacing warp and weft on a loom. The producer must declare weave architecture, nominal width, nominal areal mass, glass type, yarn or roving specification, sizing or finish state, and whether the product is broad or narrow fabric.

The category excludes glass slivers, rovings and yarn sold before weaving; chopped strand or continuous-filament mats; veils, tissues and nonwovens; knitted, stitched or multiaxial non-crimp fabrics; glass wool; polymer-impregnated or coated fabric classified by the coating or composite state; and fabricated glass-fibre-reinforced plastic articles. Glass batch preparation, melting, fibre drawing and upstream yarn manufacture are outside the foreground boundary and require linked upstream datasets. Wet finishing, coating, impregnation, heat cleaning and coupling-agent treatment after weaving are excluded unless a later product-specific PCR explicitly brings them into scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-including-narrow-fabrics-of-glass-fibres` |
| classification_refs | CPC 3.0 `26890`, exact |
| covered_products | Woven glass-fibre cloth, woven roving, woven open-mesh fabric, woven tapes and narrow woven glass-fibre fabrics |
| excluded_products | Glass yarn and roving sold as such; mats, veils, tissues, nonwovens, knitted or stitched multiaxial fabrics, glass wool, coated or impregnated fabrics, composites and fabricated articles |
| representative_product | Saleable greige woven glass-fibre fabric wound on a core and ready at the producing plant gate |
| production_route | Purchased continuous-filament glass yarn or roving; warping; conditional on-site sizing; loom weaving; inspection or slitting; rolling and packaging |
| market_state | Conforming fabric at plant gate, with weave, width, areal mass, glass type and sizing or finish state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conforming woven glass-fibre fabric within the declared construction and specification |
| How much | 1 kg net fabric mass, excluding removable transport packaging |
| How well | Meets the producer's declared weave, nominal width, nominal areal mass, glass type, yarn specification, sizing or finish state and acceptance criteria |
| How long or cycle | One production campaign or another declared representative production period at the plant gate |
| reference_flow_link | The functional unit is realized by the UUID-backed reference product flow below and normalized to its Mass property in kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming product |
| Reference product flow | Woven fabrics (including narrow fabrics) of glass fibres `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | weave architecture; broad or narrow construction; nominal width; nominal areal mass; glass type; warp and weft yarn or roving specification; sizing or finish state; plant geography; production period; plant-gate state |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net conforming fabric mass on calibrated scales; exclude removable cores, film, pallets and other transport packaging. |
| `mass_conversion` | Yarn, fabric, chemicals and solid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert all mass records to kg and retain the original unit, conversion factor and moisture or solids basis where relevant. |
| `water_mass` | Process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert metered volume using measured density when material; otherwise document the water-density convention used. |
| `electricity_measurement` | Electricity consumed by each foreground process | Net calorific value | kWh | Use submetered consumption where available; otherwise derive consumption from a documented meter difference or defensible equipment-time allocation. |
| `areal_mass_check` | Reference product consistency | Mass per area | g/m2 | Record nominal and measured areal mass as product qualifiers; do not substitute area for the kg reference amount. |
| `dry_solids_basis` | Sizing agents and sizing wastewater | Mass | kg | Record supplied solution mass and dry-solids fraction separately so retained size and discharged solids can be reconciled. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased glass continuous-filament yarn or roving received at the weaving plant, including inherited sizing state |
| starting_condition_role | Upstream material input and physical starting condition for foreground fabric formation |
| product_classification_scope | Woven glass-fibre fabrics within CPC 3.0 code 26890 |
| recursive_input_rule | A purchased CPC 26890 fabric used only for inspection, slitting or repacking is recorded as an explicit background product input and must not be recursively represented as yarn-to-fabric manufacture |
| upstream_dataset_requirement | Link geographically and technologically representative datasets for glass raw-material preparation, melting, fibre drawing, yarn or roving manufacture, purchased sizing chemicals, electricity, water and packaging |
| disclosure | Declare plant geography, production period, loom technology, product construction, inherited and on-site sizing, included finishing, cut-off decisions, utility supply and treatment routes |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_yarn` | foreground_system_boundary | Start foreground collection when purchased glass continuous-filament yarn or roving crosses the weaving-plant gate; upstream glass melting, fibre drawing and yarn manufacture remain linked upstream datasets. | `un-cpc-3-2025`, `ec-jrc-glass-bref-2013`, `ec-jrc-textiles-bref-2023` |
| `boundary_required_operations` | foreground_system_boundary | Include warping, loom weaving, inspection, slitting or edge trimming, rolling, packaging, internal material handling, directly attributable utilities, process wastes and direct emissions. | `ec-jrc-textiles-bref-2023` |
| `boundary_conditional_sizing` | foreground_system_boundary | Include on-site warp sizing, preparation and associated wastewater only when performed; otherwise declare the inherited yarn sizing state and keep upstream sizing in the yarn dataset. | `ec-jrc-textiles-bref-2023` |
| `boundary_excluded_finishing` | foreground_system_boundary | Exclude post-weaving coating, polymer impregnation, wet finishing, heat cleaning and coupling-agent treatment unless explicitly included and the resulting product still satisfies the declared CPC 26890 scope. | `un-cpc-3-2025`, `ec-jrc-textiles-bref-2023` |
| `boundary_downstream` | foreground_system_boundary | Exclude distribution beyond the plant gate, fabrication into composite parts, use, maintenance and end of life from this gate-to-gate foreground package. | `ec-jrc-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `warping` | Yarn receipt and warping | required | Always for yarn-to-woven-fabric production | Foreground yarn preparation | kg warped glass-fibre yarn delivered on beam |
| `sizing` | On-site warp sizing | conditional | Include only when size is prepared or applied at the weaving plant | Foreground yarn conditioning | kg sized warp delivered on beam |
| `weaving` | Loom weaving | required | Always for products in scope | Foreground fabric formation | kg greige woven glass-fibre fabric |
| `inspection_packaging` | Inspection, slitting, rolling and packaging | required | Always for the plant-gate reference product | Foreground product finishing without coating | kg net conforming woven glass-fibre fabric |

### Process: Yarn receipt and warping (`warping`)

#### Inputs

##### Product flows

###### Glass-fibre warp yarn (`warping_glass_warp_yarn`)

Purchased continuous-filament glass yarn or roving crosses the plant boundary and is assembled into the warp. The receipt mass, returned material and opening stock must be traceable to supplier and warehouse records.

- Selected flow: Glass fiber yarn `52480783-8003-4f68-9f65-0c61335127d8`
- Flow property / unit: Mass / kg
- Amount rule: Record accepted input mass consumed by the warping campaign after stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg warped glass-fibre yarn delivered on beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warping_mass_balance`
- Sources: `ec-jrc-glass-bref-2013`, `ec-jrc-textiles-bref-2023`

###### Warping electricity (`warping_electricity`)

Electricity drives creels, tension control, warpers and directly attributable material handling. Its final UUID must match the site's geography, voltage and supply mix.

- Selected flow: Alternating current supplied to the warping line
- Flow property / unit: Net calorific value / kWh
- Amount rule: Record submetered consumption or documented meter difference attributable to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg warped glass-fibre yarn delivered on beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warping_electricity`
- Sources: `ec-jrc-textiles-bref-2023`, `toffe-et-al-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Warped glass-fibre yarn on beam (`warped_glass_warp_on_beam`)

This intermediate is the measured warp output transferred to sizing or directly to weaving. It is not the finished product and therefore remains a separate foreground intermediate.

- Selected flow: Warped glass-fibre yarn on beam
- Flow property / unit: Mass / kg
- Amount rule: Record net beam mass less the verified empty-beam tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per warping campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warping_mass_balance`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

###### Warping glass-yarn waste (`warping_glass_yarn_waste`)

Broken ends, tangled yarn and unrecoverable warp losses leaving the process are recorded separately from internally reused material.

- Selected flow: Waste glass-fibre yarn from warping
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected waste by destination and reconcile it with yarn input, output and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg warped glass-fibre yarn delivered on beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warping_mass_balance`
- Sources: `ec-jrc-textiles-bref-2023`

##### Elementary flows

### Process: On-site warp sizing (`sizing`)

#### Inputs

##### Product flows

###### Warped glass-fibre yarn entering sizing (`sizing_warped_glass_yarn`)

Warped yarn enters this conditional process only when the plant prepares or applies size. Purchased pre-sized yarn bypasses this process and its inherited size is disclosed upstream.

- Selected flow: Warped glass-fibre yarn on beam entering sizing
- Flow property / unit: Mass / kg
- Amount rule: Record net beam mass entering the sizing campaign after empty-beam tare correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sized glass-fibre warp delivered on beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_mass_balance`
- Sources: `ec-jrc-textiles-bref-2023`

###### Sizing process water (`sizing_process_water`)

Water used to prepare or dilute the sizing bath crosses the process boundary as one atomic input. Cleaning water is added as a separate atomic card when it is attributable to the sizing campaign.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Record metered or batch-recipe water charged to the sizing preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sized glass-fibre warp delivered on beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_mass_balance`
- Sources: `ec-jrc-textiles-bref-2023`

###### Polyvinyl-alcohol sizing agent (`sizing_polyvinyl_alcohol`)

Polyvinyl alcohol is recorded only when it is present in the site formulation. Every other starch, polymer, lubricant, antistatic agent or additive actually used must be added as its own atomic exchange.

- Selected flow: Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- Flow property / unit: Mass / kg
- Amount rule: Record supplied product mass and dry-solids fraction from batch sheets and supplier specifications
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sized glass-fibre warp delivered on beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_mass_balance`
- Sources: `ec-jrc-textiles-bref-2023`

###### Sizing electricity (`sizing_electricity`)

Electricity drives preparation, pumping, application and drying equipment used by the sizing operation. Its UUID remains site-dependent.

- Selected flow: Alternating current supplied to the sizing line
- Flow property / unit: Net calorific value / kWh
- Amount rule: Record submetered consumption or documented meter difference attributable to the sizing campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sized glass-fibre warp delivered on beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_electricity`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sized glass-fibre warp on beam (`sized_glass_warp_on_beam`)

This intermediate contains the measured glass-fibre warp plus retained size and proceeds to the loom. The retained dry size must be supported by a mass balance or product test.

- Selected flow: Sized glass-fibre warp on beam
- Flow property / unit: Mass / kg
- Amount rule: Record net output-beam mass and retained size state for the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per sizing campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_mass_balance`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

###### Sizing wastewater (`sizing_wastewater`)

Wastewater discharged from bath preparation, application or attributable cleaning is recorded with its destination and measured solids or pollutant data. Recirculated water remains internal until discharged.

- Selected flow: Wastewater from glass-fibre warp sizing
- Flow property / unit: Mass / kg
- Amount rule: Record metered discharge or reconciled batch volume and retain measured dry solids, COD and treatment route as separate attributes or exchanges
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sized glass-fibre warp delivered on beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_wastewater`
- Sources: `ec-jrc-textiles-bref-2023`

##### Elementary flows

### Process: Loom weaving (`weaving`)

#### Inputs

##### Product flows

###### Glass-fibre warp on loom beam (`weaving_warp_yarn_on_beam`)

The actual warped input to the loom is recorded with its sized or unsized state. This single intermediate must not be replaced by the finished-fabric reference flow.

- Selected flow: Glass-fibre warp yarn on loom beam
- Flow property / unit: Mass / kg
- Amount rule: Record net beam mass consumed, correcting for returned warp and verified empty-beam tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige woven glass-fibre fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_mass_balance`
- Sources: `ec-jrc-textiles-bref-2023`

###### Glass-fibre weft yarn (`weaving_glass_weft_yarn`)

Continuous-filament glass yarn or roving inserted as weft crosses the loom boundary separately from warp. Warehouse issues and returned packages support the consumed mass.

- Selected flow: Glass fiber yarn `52480783-8003-4f68-9f65-0c61335127d8`
- Flow property / unit: Mass / kg
- Amount rule: Record accepted weft mass issued to and consumed by the weaving campaign after stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige woven glass-fibre fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_mass_balance`
- Sources: `ec-jrc-glass-bref-2013`, `ec-jrc-textiles-bref-2023`

###### Weaving electricity (`weaving_electricity`)

Electricity powers the loom, controls, local extraction and directly attributable handling. Campaign metering must separate productive, idle and excluded finishing loads where material.

- Selected flow: Alternating current supplied to the weaving line
- Flow property / unit: Net calorific value / kWh
- Amount rule: Record loom-line submeter data or documented meter differences over the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige woven glass-fibre fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_electricity`
- Sources: `ec-jrc-textiles-bref-2023`, `toffe-et-al-2019`

###### Loom lubricating oil (`weaving_loom_lubricating_oil`)

Make-up lubricating oil consumed by the loom is recorded as one specific product input after the site declares the actual grade. Oil remaining in durable equipment is not treated as consumed inventory.

- Selected flow: Lubricating oil consumed by the glass-fibre weaving loom
- Flow property / unit: Mass / kg
- Amount rule: Record issued make-up mass less returned usable oil for the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige woven glass-fibre fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_lubricant`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven glass-fibre fabric (`greige_woven_glass_fabric`)

The loom output is weighed before inspection losses and removable packaging. Its construction and sizing state must match the campaign record.

- Selected flow: Greige woven glass-fibre fabric
- Flow property / unit: Mass / kg
- Amount rule: Record net greige roll mass after tare correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per weaving campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_mass_balance`
- Sources: `ec-jrc-textiles-bref-2023`, `techfab-pwc-glass-fabric-2025`

##### Waste flows

###### Weaving glass-fabric waste (`weaving_glass_fabric_waste`)

Start-up strips, damaged selvedges and rejected loom material leaving the process are weighed separately by management destination. Internally reused material is recorded as an internal loop, not a waste output.

- Selected flow: Waste woven glass-fibre fabric from weaving
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected loom waste and reconcile it with warp, weft, retained size, output and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige woven glass-fibre fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_mass_balance`
- Sources: `ec-jrc-textiles-bref-2023`

##### Elementary flows

###### Glass-fibre dust to air (`weaving_glass_fibre_dust_to_air`)

Direct glass-fibre particulate released beyond capture equipment is included only from measured or permitted emission records. Captured dust sent to waste management is a separate waste flow.

- Selected flow: Glass-fibre dust emitted to air from weaving
- Flow property / unit: Mass / kg
- Amount rule: Record measured stack or workplace-extraction discharge attributable to the campaign; do not infer a release from handled mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige woven glass-fibre fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_air_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

### Process: Inspection, slitting, rolling and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Greige woven glass-fibre fabric entering inspection (`packaging_greige_glass_fabric`)

Greige roll mass enters inspection and any required edge trimming or slitting. If material comes from another site, record it as a purchased background input and disclose that the dataset does not represent yarn-to-fabric manufacture.

- Selected flow: Greige woven glass-fibre fabric entering inspection
- Flow property / unit: Mass / kg
- Amount rule: Record net incoming roll mass after core and packaging tare correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming woven glass-fibre fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_balance`
- Sources: `techfab-pwc-glass-fabric-2025`

###### Inspection and packaging electricity (`packaging_electricity`)

Electricity powers inspection frames, slitters, winders and directly attributable packaging equipment. The identity depends on site supply conditions.

- Selected flow: Alternating current supplied to inspection and packaging
- Flow property / unit: Net calorific value / kWh
- Amount rule: Record submetered consumption or documented allocated meter difference for the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming woven glass-fibre fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_electricity`
- Sources: `techfab-pwc-glass-fabric-2025`

###### Paperboard winding core (`packaging_paperboard_core`)

The paperboard core shipped with the finished roll is recorded separately from plastic film and any pallet. Core mass is excluded from reference-product net mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Record purchased or weighed core mass shipped with conforming rolls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming woven glass-fibre fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_balance`
- Sources: `techfab-pwc-glass-fabric-2025`

###### Polyethylene packaging film (`packaging_polyethylene_film`)

Polyethylene film applied to the roll is one packaging input. The producer must declare polymer type and recycled content; straps, labels and pallets are added as separate atomic exchanges when used.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Record purchased or issued film mass consumed by the packaged campaign after stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming woven glass-fibre fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_balance`
- Sources: `techfab-pwc-glass-fabric-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Woven glass-fibre fabric reference product (`woven_glass_fabric_reference`)

The conforming net fabric output realizes the reference flow. Removable cores, film, pallets and other transport packaging are recorded separately and excluded from this mass.

- Selected flow: Woven fabrics (including narrow fabrics) of glass fibres `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f`
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net conforming fabric mass and normalize the data package to 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_balance`
- Sources: `un-cpc-3-2025`, `techfab-pwc-glass-fabric-2025`

##### Waste flows

###### Off-spec woven glass-fibre fabric (`packaging_offspec_glass_fabric`)

Fabric rejected during inspection or generated by slitting is recorded by actual waste-management destination. Saleable downgraded product is a co-product and is not recorded as waste.

- Selected flow: Off-spec woven glass-fibre fabric sent to waste management
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fabric and reconcile it with incoming greige mass, conforming output and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming woven glass-fibre fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_balance`
- Sources: `techfab-pwc-glass-fabric-2025`

###### Paperboard packaging waste (`packaging_paperboard_waste`)

Damaged cores and other paperboard packaging discarded at the plant are recorded separately from shipped cores and from plastic packaging waste.

- Selected flow: Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile paperboard packaging discarded during the campaign by management destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming woven glass-fibre fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_balance`
- Sources: `techfab-pwc-glass-fabric-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground_burden_allocation | First avoid allocation through submetering, campaign-specific material records, subdivision by loom line and explicit internal-loop accounting. | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `allocation_shared_energy` | shared utilities and equipment | Allocate unmetered shared electricity by recorded equipment operating time or loom-hours when these represent the causal driver; disclose idle-load treatment and test material alternatives. | `iso-14044-2006`, `toffe-et-al-2019` |
| `allocation_shared_materials` | shared materials and wastes | Allocate shared yarn, sizing, packaging and solid-waste records by measured mass attributable to each product campaign unless a more causal physical parameter is demonstrated. | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `allocation_internal_rework` | internal rework | Treat material returned to the same foreground production system as an internal loop with no co-product credit and prevent double counting of its mass and burdens. | `iso-14044-2006` |
| `allocation_saleable_downgrade` | saleable downgraded fabric | Treat saleable downgraded fabric as a co-product; use a documented physical relationship where defensible and use economic allocation only when physical relationships cannot be justified, with sensitivity disclosure. | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `allocation_waste_recovery` | waste sent to recovery | Keep collection and pre-treatment within the foreground boundary; apply recycling or substitution credits only in an explicitly declared downstream method and never as an undocumented negative waste amount. | `ec-jrc-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_warping_mass_balance` | `warping` | warp yarn, warped beam and yarn waste | Warehouse issue, scale ticket and campaign log | item id, glass type, yarn specification, lot, opening stock, issued mass, returned mass, beam gross mass, beam tare, waste mass, destination | Reconcile calibrated weights and stock movements by campaign | kg | Each campaign | Representative production period | All included warping lines | Sum accepted records; keep internal reuse separate; normalize only after mass reconciliation | Calibration certificate, warehouse ledger, campaign log, waste ticket |
| `cp_warping_electricity` | `warping` | electricity | Submeter or main-meter interval record | meter id, start, end, kWh, line state, campaign id, included auxiliaries | Submeter difference; otherwise documented allocation from coincident main-meter data | kWh | Each campaign or interval | Representative production period | All included warping lines | Sum productive and attributable auxiliary intervals; disclose idle treatment | Meter register, interval export, allocation worksheet |
| `cp_sizing_mass_balance` | `sizing` | warped yarn, water, PVA, other formulation components and sized output | Batch sheet, recipe, meter and scale record | batch id, input beam mass, water, chemical product mass, dry solids, output beam mass, returns, residues | Reconcile batch inputs, retained size and outputs | kg | Each sizing batch | Representative production period | All included sizing lines | Sum valid batches by product; retain supplied and dry-solids bases | Approved recipe, supplier specification, scale and meter records |
| `cp_sizing_electricity` | `sizing` | electricity | Submeter or main-meter interval record | meter id, start, end, kWh, batch id, dryer and pump state | Submeter difference; otherwise documented equipment-time allocation | kWh | Each batch or interval | Representative production period | All included sizing lines | Sum attributable intervals by batch | Meter register, interval export, allocation worksheet |
| `cp_sizing_wastewater` | `sizing` | wastewater | Effluent meter, batch balance and laboratory record | discharge mass or volume, density basis, COD, dry solids, treatment route, sample time, batch id | Use effluent meter and representative sampling; reconcile with batch water | kg | Each batch with periodic analysis | Representative production period | All included sizing discharges | Aggregate volume-weighted analytical results and retain treatment routing | Meter calibration, laboratory report, discharge manifest |
| `cp_weaving_mass_balance` | `weaving` | warp, weft, greige output and loom waste | Beam record, warehouse issue, roll scale and waste ticket | campaign id, product code, warp input, weft issue and return, greige roll gross mass, tare, waste mass, stock change | Reconcile calibrated masses for each loom campaign | kg | Each campaign | Representative production period | All included looms | Sum accepted campaigns after mass-balance review | Scale calibration, loom ticket, warehouse ledger, waste ticket |
| `cp_weaving_electricity` | `weaving` | electricity | Loom-line submeter or interval record | meter id, loom id, start, end, kWh, operating time, idle time, campaign id | Submeter by campaign; otherwise allocate coincident interval use by recorded loom-hours | kWh | Each campaign or interval | Representative production period | All included looms and direct extraction | Sum attributable intervals; disclose allocation and idle load | Meter register, machine log, allocation worksheet |
| `cp_weaving_lubricant` | `weaving` | lubricating oil | Stores issue and maintenance record | product id, grade, issued mass, returned mass, machine id, date, campaign | Reconcile make-up oil issued and returned | kg | Each issue, aggregated by campaign | Representative production period | All included looms | Sum net consumed make-up oil by machine campaign | Safety data sheet, stores ledger, maintenance record |
| `cp_weaving_air_emissions` | `weaving` | glass-fibre dust to air | Stack test, extraction record or permit report | source id, sampling method, concentration, gas flow, operating time, capture status, campaign | Calculate released mass only from measured source data aligned to production | kg | Each valid measurement period | Representative operating condition | All relevant direct release points | Integrate concentration and flow over aligned time; no unsupported inference | Accredited test report, permit record, operating log |
| `cp_packaging_mass_balance` | `inspection_packaging` | greige input, reference output, rejects, cores, film and paperboard waste | Roll ticket, scale, packaging issue and waste record | roll id, incoming gross and tare, conforming net mass, reject mass, core mass, film issue, other packaging, waste mass, destination | Reconcile calibrated roll and packaging masses by campaign | kg | Each roll or campaign | Representative production period | All included inspection and packaging lines | Sum accepted rolls and packaging issues; exclude removable packaging from product mass | Scale calibration, roll ticket, bill of materials, waste ticket |
| `cp_packaging_electricity` | `inspection_packaging` | electricity | Submeter or interval record | meter id, start, end, kWh, equipment state, campaign id | Submeter difference; otherwise documented equipment-time allocation | kWh | Each campaign or interval | Representative production period | All included inspection and packaging equipment | Sum attributable intervals by campaign | Meter register, equipment log, allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_roll_mass` | Greige and conforming rolls | Net fabric mass equals gross roll mass minus verified core, wrapper and other removable tare mass. | Gross scale mass; core tare; wrapper tare; other removable tare | Net fabric mass in kg | `techfab-pwc-glass-fabric-2025` |
| `calc_process_intensity` | Every foreground exchange | Normalized exchange equals accepted campaign exchange divided by accepted net output mass for the applicable process or reference product. | Accepted exchange; accepted process output or reference mass | Exchange per kg basis | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `calc_mass_balance` | Each material-processing stage | Reconcile opening stock plus inputs with outputs, closing stock, internal returns and waste; investigate rather than force-close unexplained differences. | Opening stock; inputs; product and intermediate outputs; returns; waste; closing stock | Documented mass-balance difference | `iso-14044-2006`, `techfab-pwc-glass-fabric-2025` |
| `calc_dry_size` | Sizing formulation and discharge | Dry sizing-agent mass equals supplied product mass multiplied by supplier or measured dry-solids fraction; keep water mass separate. | Supplied product mass; dry-solids fraction | Dry sizing-agent mass in kg | `ec-jrc-textiles-bref-2023` |
| `calc_measured_dust` | Direct glass-fibre dust release | Released mass equals measured concentration multiplied by aligned dry gas volume or flow-time integral, with unit conversions documented. | Measured concentration; gas flow or volume; aligned operating time | Released particulate mass in kg | `ec-jrc-textiles-bref-2023` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technology` | Product and process route | Identify loom type, weave architecture, glass type, yarn specifications, sizing state, nominal width and areal mass for every aggregated product family. | Product specification, bill of materials and campaign routing |
| `dq_temporal` | Foreground activity data | Use a declared representative period that covers normal operation, start-up, rejects and maintenance effects; identify exclusions and abnormal campaigns. | Production calendar, campaign register and exclusion log |
| `dq_geography` | Utilities and upstream datasets | Match plant country or grid region and disclose the geography of significant yarn, chemical and packaging suppliers. | Site record, supplier declaration and dataset metadata |
| `dq_completeness` | Inventory | Reconcile material mass and account separately for each used utility, sizing component, packaging component, waste stream and measured direct emission; do not collapse them into collection labels. | Mass balance, utility register, formulation, packaging bill and waste register |
| `dq_measurement` | Meters and scales | Use in-calibration instruments and retain raw readings, taring records, data treatment and uncertainty or precision evidence. | Calibration certificates, raw exports and calculation worksheet |
| `dq_uuid_identity` | Tiangong references | Before publication, resolve every used UUID by direct state100 read and confirm name, flow type, property and required qualifiers; unresolved identities remain review blockers. | Tiangong direct-read evidence and reviewer sign-off |
| `dq_source_traceability` | Method rules | Retain the exact cited report, standard or full-text article edition used for each boundary, calculation or quality rule. | Controlled source register and retrieval date |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | foreground_dataset_conformance | Confirm the reference product is a woven glass-fibre fabric within CPC 26890 and that excluded nonwoven, knitted, coated, impregnated or composite products are absent. | `un-cpc-3-2025` |
| `validate_reference` | foreground_dataset_conformance | Confirm the reference output uses UUID 59caf1b9-5a05-4eef-8ba2-bc94aa28f43f, Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass UUID 93a60a57-a4c8-11da-a746-0800200c9a66 and kg net product mass. | `un-cpc-3-2025` |
| `validate_qualifiers` | foreground_dataset_conformance | Reject an incomplete reference definition unless all required product, process, geography and period qualifiers are declared. | `iso-ts-14027-2017`, `iso-14025-2006` |
| `validate_boundary` | foreground_dataset_conformance | Confirm warping, weaving, inspection and packaging are present, on-site sizing is included when performed, upstream yarn production is linked, and excluded finishing and downstream stages are not silently mixed into the foreground package. | `ec-jrc-glass-bref-2013`, `ec-jrc-textiles-bref-2023` |
| `validate_atomic_inventory` | foreground_dataset_conformance | Confirm each inventory card represents one concrete exchange and that every actual electricity supply, chemical, packaging material, waste and direct emission is separately represented. | `ec-jrc-textiles-bref-2023` |
| `validate_mass_balance` | foreground_dataset_conformance | Confirm stage and overall material balances reconcile within documented measurement precision and that unexplained differences are investigated rather than assigned to an invented flow. | `iso-14044-2006`, `techfab-pwc-glass-fabric-2025` |
| `validate_foreground_values` | foreground_dataset_conformance | Confirm inventory amounts come from collected foreground records or calculations from those records; reject unsupported generic or AI-authored numerical ranges. | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `validate_allocation` | foreground_dataset_conformance | Confirm allocation is first avoided, any remaining physical or economic allocation is documented and sensitivity is disclosed where method choice could materially affect results. | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `validate_uuid_state` | foreground_dataset_conformance | Confirm every UUID stored in the data package resolves at public state100 with exact semantic identity; fail publication on unresolved or mismatched UUIDs. | `iso-14044-2006` |
| `validate_bilingual_alignment` | foreground_dataset_conformance | Confirm English and Chinese machine fields, rule order, process order, row order and UUIDs remain aligned. | `iso-ts-14027-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or plant-average cradle-from-yarn-to-gate foreground unit-process package for woven glass-fibre fabric manufacture |
| downstream_use | Publication as a process dataset and use in lifecyclemodel projections with linked upstream yarn, utility, chemical, packaging and waste-treatment datasets |
| allowed_use | Products and routes satisfying the declared CPC 26890 boundary, qualifiers, site geography and production period |
| excluded_use | Nonwoven, knitted, stitched multiaxial, coated, impregnated or composite products; glass melting or fibre drawing; unsupported market averages; downstream fabrication or use |
| required_metadata | PCR id and version; reference UUIDs; CPC code; plant geography; period; product construction; glass and yarn specifications; sizing state; process map; allocation; cut-offs; upstream links; UUID review state |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; mass-balance differences; shared-utility allocation; data gaps; unresolved identities; representativeness and uncertainty |
| update_trigger | Product construction or route change; sizing or finishing change; major loom or utility change; supplier or geography change; newer representative period; source or Tiangong identity revision |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 26890, 2025. <https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf> | Official product identity, included woven-fabric scope and classification boundary; retrieved 2026-08-12 |
| `ec-jrc-glass-bref-2013` | Official guidance (`official_guidance`) | European Commission JRC, Best Available Techniques Reference Document for the Manufacture of Glass, 2013, DOI 10.2791/69502. <https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/GLS_Adopted_03_2012_0.pdf> | Upstream continuous-filament glass-fibre and sizing context, upstream dataset requirements and emissions awareness; retrieved 2026-08-12 |
| `ec-jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, 2023. <https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf> | Warping, sizing and weaving process decomposition, utilities, oils, water, wastewater and inventory completeness; retrieved 2026-08-12 |
| `ec-jrc-pef-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods. <https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32021H2279> | Functional unit, system boundary, allocation, inventory, data quality and recycling-method rules; retrieved 2026-08-12 |
| `iso-14040-2006` | Standard (`standard`) | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework. <https://www.iso.org/standard/37456.html> | LCA goal, scope and inventory framework; retrieved 2026-08-12 |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. <https://www.iso.org/standard/38498.html> | Boundary, allocation, inventory calculation, quality and validation rules; retrieved 2026-08-12 |
| `iso-14025-2006` | Standard (`standard`) | ISO 14025:2006, Environmental labels and declarations — Type III environmental declarations — Principles and procedures. <https://www.iso.org/standard/38131.html> | PCR and disclosure context; retrieved 2026-08-12 |
| `iso-ts-14027-2017` | Standard (`standard`) | ISO/TS 14027:2017, Environmental labels and declarations — Development of product category rules. <https://www.iso.org/standard/66123.html> | PCR content and communication alignment; retrieved 2026-08-12 |
| `iso-14067-2018` | Standard (`standard`) | ISO 14067:2018, Greenhouse gases — Carbon footprint of products. <https://www.iso.org/standard/71206.html> | Product carbon-footprint application context; retrieved 2026-08-12 |
| `techfab-pwc-glass-fabric-2025` | Literature (`literature`) | Tech-Fab Europe and PwC, Life Cycle Assessment report for glass fibre fabrics, January 2025. <https://www.solidian-kelteks.com/images/downloads/250127_LCA_Tech_Fab_report__Open_mesh_Jan_2025.pdf> | Product context, 1 kg gate reference, primary-data fields, packaging, mass balance and product-family limitations; retrieved 2026-08-12 |
| `toffe-et-al-2019` | Literature (`literature`) | Toffe et al., A Scale-up of Energy-Cycle Analysis on Processing Non-Woven Flax/PLA Tape and Triaxial Glass Fibre Fabric for Composites, Journal of Manufacturing and Materials Processing 3(4):92, 2019, DOI 10.3390/jmmp3040092. <https://eprints.bournemouth.ac.uk/32952/7/jmmp-03-00092.pdf> | Peer-reviewed full-text evidence for batch-specific machine electricity measurement and production-output normalization; not used to define woven process identity; retrieved 2026-08-12 |
