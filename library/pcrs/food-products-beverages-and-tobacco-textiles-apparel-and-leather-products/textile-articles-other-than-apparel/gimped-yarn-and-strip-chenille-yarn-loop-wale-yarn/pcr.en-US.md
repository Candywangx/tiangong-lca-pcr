---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.gimped-yarn-and-strip-chenille-yarn-loop-wale-yarn
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gimped yarn and strip; chenille yarn; loop wale-yarn

## 1. Scope and Applicability

This PCR applies to factory-gate production of the specialty textile yarn products classified in CPC 3.0 code `27995`: gimped yarn and strip, chenille yarn, and loop wale-yarn. It covers products formed by controlled feeding, wrapping, looping, cutting where applicable, twisting or binding, winding, inspection, and factory packaging of declared yarn or strip components. Natural, regenerated-cellulosic, synthetic, mineral, metallic, and blended component routes are eligible when their exact composition and construction are declared.

The PCR excludes ordinary single, folded, cabled, textured, sewing, tyre-cord, and retail yarns whose classification belongs elsewhere; woven, knitted, tufted, or braided fabrics and articles made from the specialty yarn; fibre and polymer production; use; and end-of-life. Fibre preparation, conventional spinning of input yarns, and dyeing or wet finishing are upstream unless operated at the reporting site and explicitly added as separate processes with complete atomic inventories.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.gimped-yarn-and-strip-chenille-yarn-loop-wale-yarn` |
| classification_refs | CPC 3.0 `27995` — Gimped yarn and strip; chenille yarn; loop wale-yarn |
| covered_products | Gimped yarn or textile strip formed around a core; chenille yarn with cut pile held between core or lock yarns; loop wale-yarn with deliberately formed looped effects |
| excluded_products | Ordinary yarn and thread classified outside CPC 27995; yarn-derived fabrics and finished textile articles; unprocessed fibres, polymer, and upstream conventional yarn production |
| representative_product | One declared finished specialty yarn construction supplied on its commercial package |
| production_route | Declared component yarn or strip receipt; feeding and tension control; product-specific gimping, chenille formation, or loop formation; binding or final twist; winding; inspection; packaging |
| market_state | Finished manufactured specialty yarn or strip at the producing factory gate, excluding the mass of its package from the reference amount |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished gimped yarn or strip, chenille yarn, or loop wale-yarn that preserves the declared CPC 27995 construction and material composition |
| How much | `1 kg` net mass of accepted finished product at the factory gate |
| How well | Meets the declared component materials, component arrangement, linear density, twist or binding construction, effect or pile geometry, colour/finish state, and agreed acceptance tests |
| How long or cycle | One reporting-period factory-gate production output; use duration is not part of the mass reference |
| reference_flow_link | TianGong Product flow `b4b228c8-c8f8-4225-8e81-bebc83d9b8c8` — Gimped yarn and strip, chenille yarn, loop wale-yarn |

| Field | Value |
| --- | --- |
| Reference amount | `1` |
| Reference product flow | Gimped yarn and strip, chenille yarn, loop wale-yarn `b4b228c8-c8f8-4225-8e81-bebc83d9b8c8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | `kg` |
| Required qualifiers | Product subtype: gimped yarn, gimped strip, chenille yarn, or loop wale-yarn; core/lock, effect, pile, binder, and strip material composition and recycled content; component count and arrangement; linear density and test basis; twist direction and twist level or other binding construction; pile length, pile density, loop geometry, or gimp profile as applicable; colour and dyeing stage; applied finish; commercial package type and net mass; accepted/rejected product criteria; production technology, site, geography, and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Accepted finished specialty yarn | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or reconcile accepted net yarn mass after winding and inspection. Exclude tubes, cones, cartons, film, pallets, and rejected product from the 1 kg reference amount and record them separately. |
| `component_mass` | Core/lock, effect, pile, binder yarn and textile strip | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each declared component separately by received mass and inventory change. Do not merge unlike fibre compositions or component roles. |
| `linear_density` | Input components and finished specialty yarn | Linear density | tex or declared equivalent | Determine mass per unit length under the declared conditioning and preparation procedure; identify any conversion to tex. ISO 2060 may be used where its applicability limits are met. |
| `twist_measurement` | Twisted or bound products and components | Twist | turns/m | Record twist direction, test method, specimen conditioning, and turns per unit length. Use ISO 2061 only where its product and extensibility limitations are met; otherwise document the agreed method. |
| `energy_measurement` | Formation, twisting, winding, inspection, and packaging | Energy | kWh | Use submetered electricity or reconciled site meter records for the represented period. Shared energy may be allocated only under Section 7. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | All represented production routes | Include upstream datasets for purchased component yarns or strip, electricity, packaging and treatment services; include foreground feeding, formation, twisting or binding, winding, inspection, production losses, internal rework, and factory packaging through accepted factory-gate output. | `ec-pef-2021`, `eu-textiles-bat-2022` |
| `boundary_route_separation` | Gimped, chenille, and loop-wale routes | Preserve the actual route and component architecture. Do not use a chenille formation model as a proxy for gimped or loop-wale production, or combine materially different route results without production-weighted records. | `unsd-cpc-27995`, `ortlek-ulku-2004`, `wang-et-al-2025` |
| `boundary_wet_processing` | Dyeing, washing, chemical finishing, or heat treatment | Treat wet processing as upstream when purchased components already carry the declared colour and finish. When performed at the reporting site, add it as a separately metered process and record each chemical, water stream, energy carrier, wastewater stream, and direct emission individually. | `eu-textiles-bref-2023`, `eu-textiles-bat-2022` |
| `boundary_no_silent_cutoff` | Material, energy, waste, and emission records | Do not omit a known flow because its amount is small. Any unavailable record or excluded process must be named, justified, and assessed for possible significance. | `ec-pef-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Component yarns or textile strip delivered to the specialty-yarn production site in their declared fibre composition, colour, finish, package form, and market state, with linked upstream datasets |
| starting_condition_role | `supplier_gate_component_yarn_or_strip_inputs` |
| product_classification_scope | Finished CPC 3.0 `27995` gimped yarn and strip, chenille yarn, and loop wale-yarn only |
| recursive_input_rule | Purchased CPC 27995 specialty yarn used as a component is recorded as a same-category product input with its supplier dataset and declared mass; it is not silently decomposed or counted again as site production. |
| upstream_dataset_requirement | Link each purchased component, electricity supply, package, transport or treatment service to a dataset matching its material, construction, market state, geography, technology, and reference period as closely as available; disclose substitutions. |
| disclosure | Declare product subtype, bill of components, formation route, optional wet or thermal operations, site coverage, reporting period, allocation drivers, internal rework, losses, packaging, upstream data gaps, excluded processes, and whether results describe one construction or a production-weighted family. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | Component receipt, preparation, and feeding | `required` | Always | Foreground preparation of declared core/lock, effect, pile, binder yarn or strip | Per reporting-period mass issued to production |
| `specialty_yarn_formation` | Gimping, chenille formation, or loop formation and binding | `required` | Always; execute only the declared product route | Foreground formation of CPC 27995 product structure | Per reporting-period accepted and rejected formed yarn mass |
| `wet_or_thermal_finishing` | Site-operated wet or thermal finishing | `conditional` | Include only when dyeing, washing, chemical finishing, drying, or heat setting is operated inside the reporting boundary | Separately metered foreground finishing | Per mass treated by the declared operation |
| `winding_inspection_packaging` | Winding, inspection, and packaging | `required` | Always | Foreground release of accepted commercial packages | Per reporting-period accepted net product mass |

### Process: Component receipt, preparation, and feeding (`component_preparation`)

#### Inputs

##### Product flows

###### Core or lock yarn input (`core_yarn_input`)

Core or lock yarn is recorded as one product input when it crosses into production. Fibre composition, yarn construction, colour, finish, supplier, and component role remain attached to the record.

- Selected flow: Core yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: received mass issued to the represented production orders, adjusted for opening and closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished specialty yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_material_records`
- Sources: `ortlek-ulku-2004`, `wang-et-al-2025`

###### Effect yarn input (`effect_yarn_input`)

Effect yarn is the separately identified component wrapped, looped, or otherwise arranged to create the declared gimped or loop-wale structure.

- Selected flow: Effect yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: received mass issued to applicable gimped or loop-wale production orders, adjusted for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished specialty yarn for the applicable route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_material_records`
- Sources: `niscpr-fancy-yarn-2007`

###### Pile yarn input (`pile_yarn_input`)

Pile yarn is recorded separately for chenille production because it is cut into short lengths and held between core or lock yarns.

- Selected flow: Pile yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: received pile-yarn mass issued to chenille orders, adjusted for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished chenille yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_material_records`
- Sources: `ortlek-ulku-2004`, `wang-et-al-2025`

###### Textile strip input (`textile_strip_input`)

Textile strip is recorded only when a declared gimped-strip route uses strip rather than yarn as the effect component.

- Selected flow: Textile strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: received strip mass issued to applicable production orders, adjusted for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished gimped strip product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_material_records`
- Sources: `unsd-cpc-27995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Gimping, chenille formation, or loop formation and binding (`specialty_yarn_formation`)

#### Inputs

##### Product flows

###### Electricity for formation equipment (`electricity_input`)

Electricity is recorded for feeders, rotating heads, cutting systems, spindles, drives, local extraction, controls, and ancillary equipment inside this process.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or reconciled equipment and site meter consumption attributable to the represented formation orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished specialty yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`

#### Outputs

##### Product flows

###### Formed specialty yarn transferred to winding (`formed_specialty_yarn_output`)

The site records the product-specific mass leaving formation before final winding and inspection. This is an internal product output, not the public reference flow.

- Selected flow: Formed specialty yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured formed-yarn mass transferred to winding, including material later rejected there
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per formation batch or production order
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`
- Sources: `ortlek-ulku-2004`, `wang-et-al-2025`

##### Waste flows

###### Textile yarn offcuts (`textile_yarn_waste_output`)

Cuts, start-up losses, broken ends, trimmed pile, and unrecoverable off-spec yarn are recorded as one physically specific textile-yarn waste stream for each declared composition and destination.

- Selected flow: Textile yarn offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed waste removed from the represented production orders, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished specialty yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Site-operated wet or thermal finishing (`wet_or_thermal_finishing`)

#### Inputs

##### Product flows

The generic PCR does not pre-authorize collection rows for wet-processing inputs. If this conditional process applies, add a separate atomic card for each actual dyestuff, auxiliary, chemical, water supply, electricity supply, steam or purchased heat flow, and fuel before using this PCR for the data package.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

The generic PCR does not pre-authorize a combined wastewater or residue flow. Add one card for each actual wastewater and solid-waste stream with its treatment destination.

##### Elementary flows

Add one card for each measured or calculated direct emission released by the site-operated finishing process; do not use an aggregate air- or water-emission selector.

### Process: Winding, inspection, and packaging (`winding_inspection_packaging`)

#### Inputs

##### Product flows

###### Paper yarn tube (`paper_tube_input`)

Paper tubes or cones remaining with the commercial yarn package are recorded separately from net reference-product mass.

- Selected flow: Paper yarn tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or issued tube mass for accepted packages, adjusted for inventory change and reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished specialty yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-pef-2021`

###### Corrugated paperboard carton (`paperboard_carton_input`)

The actual corrugated paperboard shipping carton is recorded as a separate packaging input.

- Selected flow: Corrugated paperboard carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or issued carton mass for dispatched product, adjusted for inventory change and reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished specialty yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-pef-2021`

###### Polyethylene packaging film (`polyethylene_film_input`)

Polyethylene film used to protect finished packages is recorded separately by polymer grade and recycled-content declaration.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or issued film mass for dispatched product, adjusted for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished specialty yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-pef-2021`

#### Outputs

##### Product flows

###### Accepted finished CPC 27995 product (`reference_product_output`)

Accepted net yarn mass is the public reference product output after winding and inspection; package components are excluded from its mass.

- Selected flow: Gimped yarn and strip, chenille yarn, loop wale-yarn `b4b228c8-c8f8-4225-8e81-bebc83d9b8c8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted net product mass normalized to exactly 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished specialty yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`
- Sources: `unsd-cpc-27995`, `iso-2060-1994`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared formation, winding, inspection, and packaging operations | First subdivide meters, production orders, machine time, material issues, and waste records so each product construction carries its directly measured burden. | `ec-pef-2021` |
| `allocation_physical` | Residual shared inputs and outputs | When subdivision cannot eliminate a shared flow, use the physical driver that causes it: metered machine energy, machine-hours at documented operating state, processed mass, or package count and mass. Record the driver and all product totals. | `ec-pef-2021` |
| `allocation_economic_last_resort` | Multi-output operation lacking a defensible physical relation | Economic allocation is permitted only when no causal physical relation can be demonstrated; use contemporaneous factory-gate values, disclose the method, and test sensitivity. | `ec-pef-2021` |
| `allocation_internal_rework` | Recoverable start-up yarn, broken ends, and off-spec product | Return internally reused material to the originating process without credit and subtract it once from waste output. Do not count the same material as both avoided input and exported waste. | `eu-textiles-bat-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_material_records` | `component_preparation` | Core/lock, effect, pile yarn and textile strip inputs | Receiving, issue, BOM, lot and inventory records | component role; fibre composition; supplier; lot; received/issued mass; opening/closing inventory; colour/finish; recycled content; order | Reconcile purchase and store records to production-order issues and physical inventory | kg | Each receipt and issue; reconcile monthly or per campaign | Same period as represented production | Every included site and store | Sum issued mass plus inventory adjustment by row_id, material identity, lot, route and product order | Calibrated scales; signed receiving/issue records; BOM revision; lot traceability; inventory reconciliation |
| `cp_energy_records` | `specialty_yarn_formation` | Electricity input | Submeter, main meter, machine-hour and operating-state records | meter id; opening/closing reading; timestamp; machine; order; run/idle time; shared load | Prefer dedicated submetering; reconcile shared meters to documented causal drivers | kWh | Continuous or each shift/order; reconcile monthly | Representative continuous period including normal losses | Every included production area | Sum measured consumption; subtract separately metered excluded loads; allocate residual shared load under Section 7 | Meter calibration; bills; reading logs; downtime and production logs; reconciliation |
| `cp_production_output_records` | `specialty_yarn_formation`; `winding_inspection_packaging` | Formed, accepted, rejected, and reworked yarn | Batch/order, winding, scale, inspection and dispatch records | order; subtype; construction; gross/net mass; package/tare mass; accepted/rejected/reworked mass; date; machine; test result | Weigh output and tare; reconcile winding and inspection status by order | kg | Every batch, order, or package | Same period as inputs | Every included production and inspection line | Sum status-specific net mass; normalize inventory only to accepted net output | Scale calibration; tare checks; inspection record; dispatch reconciliation; yield mass balance |
| `cp_waste_records` | `specialty_yarn_formation` | Textile yarn offcuts | Container weighing, waste transfer and treatment records | composition; source order; gross/tare/net mass; internal reuse; destination; treatment | Weigh each composition-specific container and reconcile transfer documents | kg | Each container or shift; reconcile monthly | Same period as represented production | Every included machine and waste storage area | Sum net exported waste by composition and destination after documented internal reuse | Scale calibration; labels; transfer note; treatment receipt; mass-balance reconciliation |
| `cp_packaging_records` | `winding_inspection_packaging` | Tube, carton and film inputs | Purchase, issue, package specification and inventory records | package material; supplier; unit mass; count; issued/returned count; recycled content; product order | Weigh representative package units and reconcile issue counts and inventory | kg and count | Each lot or specification change; reconcile monthly | Same period as dispatched output | Every included packing line | Unit mass times net issued count, checked against purchased and inventory mass | Scale calibration; package specification; issue/return logs; invoice and inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | Divide the reporting-period row quantity by accepted net CPC 27995 product mass for the same represented orders and sites. | Row quantity; accepted net product mass | Quantity per 1 kg reference product | `ec-pef-2021` |
| `calc_component_mass_balance` | Component preparation and specialty-yarn formation | Reconcile component inputs = accepted product + exported waste + documented inventory change + other separately identified outputs; investigate unexplained difference rather than forcing balance. | Component issues; formed/accepted/rejected/reworked mass; waste; inventory changes | Mass-balance residual and completeness finding | `eu-textiles-bat-2022` |
| `calc_linear_density` | Yarn linear-density reporting | Apply the declared test procedure to conditioned specimen mass and length and report the result in tex; retain original observations and conversion. | Conditioned specimen mass; specimen length; conditioning and test method | Finished and component yarn linear density | `iso-2060-1994` |
| `calc_shared_energy` | Shared electricity | Allocate only residual shared metered consumption using a disclosed causal driver after subtracting directly metered excluded loads. | Shared meter total; direct meters; machine-hours/processed mass and operating state | Allocated kWh by represented order | `ec-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Reference product and component inputs | Preserve product subtype, component role, fibre composition, construction, colour/finish, supplier lot, route, and product-order linkage; do not infer composition from trade name alone. | Product specification, BOM, supplier declaration, receiving and order records |
| `dq_temporal_representativeness` | All foreground records | Use a continuous period representing normal production, start-up losses, product changes, maintenance, rework, and rejects; disclose gaps and exceptional events. | Dated meters, production logs, maintenance records, inventory and waste reconciliations |
| `dq_technical_representativeness` | Product family datasets | Weight only constructions actually produced in the reference period and retain route-specific component and energy records; disclose every weighting factor. | Order-level output mass, machine/route records, product specifications |
| `dq_measurement_control` | Mass, energy, linear density, twist, pile/loop geometry, and quality tests | Identify equipment, calibration status, sampling plan, conditioning, units, raw observations, and data transformations. | Calibration certificates, test reports, laboratory worksheets, meter and scale logs |
| `dq_completeness` | Inventory and boundary | Reconcile purchased/issued materials, accepted/rejected output, internal reuse, waste, packaging, and energy. Name every missing record and assess its possible significance. | Mass and energy balances, completeness checklist, source document index |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require state-code-100 Product flow `b4b228c8-c8f8-4225-8e81-bebc83d9b8c8`, exact CPC `27995` identity, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and exactly 1 kg accepted net product. | `unsd-cpc-27995` |
| `validate_route_and_qualifiers` | Product identity | Fail when subtype, component roles and compositions, linear density, twist/binding construction, applicable pile/loop/gimp geometry, colour/finish state, packaging basis, site, geography, or period is missing. | `unsd-cpc-27995`, `iso-2060-1994`, `iso-2061-2015`, `ortlek-ulku-2004` |
| `validate_atomic_inventory` | Process inventory | Require each recorded card to represent one concrete exchange. Reject collection labels, alternatives, unresolved selectors, combined utilities, combined packaging, combined waste, and combined emissions. | `eu-textiles-bat-2022` |
| `validate_foreground_evidence` | Inventory quantities | Require each amount to trace to its declared collection protocol and raw records. Reject unsupported fixed values, invented ranges, and quantities normalized to output from another site or period. | `ec-pef-2021` |
| `validate_balance_and_allocation` | Material, energy, output, waste, and shared operations | Require documented mass-balance residuals, meter reconciliation, subdivision attempts, allocation driver, and sensitivity where economic allocation is used. | `ec-pef-2021`, `eu-textiles-bat-2022` |
| `validate_conditional_finishing` | Site-operated wet or thermal process | If included, require a separately expanded process with one card for every actual chemical, water, energy, wastewater, waste, and direct-emission flow; otherwise the finishing route is incomplete. | `eu-textiles-bref-2023`, `eu-textiles-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate dataset for one declared CPC 27995 construction or a transparent production-weighted family |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` for textiles, floor coverings, furnishings, apparel details, craft articles, and other products that consume the declared specialty yarn |
| allowed_use | Cradle-to-factory-gate modelling when product subtype, component architecture, composition, route, colour/finish state, geography, technology, period, and packaging scope are compatible |
| excluded_use | Proxying ordinary yarn, fabric, tufting/weaving/knitting, fibre or polymer production, an undisclosed wet-processing route, another product subtype, or use/end-of-life without added scenario data |
| required_metadata | PCR id/version; CPC code; reference-flow UUID and unit; subtype; component roles, materials, recycled content and construction; linear density; twist/binding and effect geometry; colour/finish; route and equipment; site/geography/period; accepted output and packaging basis; allocations; upstream datasets; exclusions and data gaps |
| required_quality_disclosure | Foreground share; meter/scale/test coverage; conditioning and sampling; mass/energy reconciliation; reject, rework and waste treatment; temporal and technical representativeness; allocation and family weighting; UUID gaps and upstream substitutions |
| update_trigger | Change in product subtype or component construction, fibre composition or recycled content, formation technology, dyeing/finishing location, electricity supply, packaging, allocation, site, production mix, test specification, waste treatment, or reference period that can materially alter the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-27995` | `official_guidance` | United Nations Statistics Division, CPC detail and CPC Version 3.0 explanatory-note record for code 27995, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/27995 and https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf (retrieved 2026-08-13) | Product category name, hierarchy, inclusion, and classification identity |
| `ec-pef-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-13) | Functional/reference flow, boundary, company-specific data, allocation hierarchy, data quality, completeness, reporting, and validation |
| `eu-textiles-bref-2023` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://eippcb.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-13) | Textile preparation and conditional pretreatment, dyeing, and finishing process decomposition |
| `eu-textiles-bat-2022` | `standard` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-13) | Input/output inventory, resource monitoring, waste prevention, water/energy and emissions recording for conditional wet processing |
| `iso-2060-1994` | `standard` | ISO 2060:1994, Textiles — Yarn from packages — Determination of linear density (mass per unit length) by the skein method, https://www.iso.org/standard/6837.html (retrieved 2026-08-13) | Linear-density measurement and applicability disclosure |
| `iso-2061-2015` | `standard` | ISO 2061:2015, Textiles — Determination of twist in yarns — Direct counting method, https://www.iso.org/standard/65146.html (retrieved 2026-08-13) | Twist direction, turns per unit length, test method, and applicability disclosure |
| `ortlek-ulku-2004` | `literature` | H. G. Ortlek and S. Ulku, “Factors influencing the abrasion properties of chenille yarns,” Indian Journal of Fibre & Textile Research 29 (2004) 353–356, full text: https://nopr.niscpr.res.in/bitstream/123456789/24645/1/IJFTR%2029%283%29%20353-356.pdf (retrieved 2026-08-13) | Chenille core/lock and pile identities; wrapping, cutting, pressing, twisting; construction-dependent quality |
| `niscpr-fancy-yarn-2007` | `literature` | “Modelling the structure of fancy yarns,” Indian Journal of Fibre & Textile Research 32 (2007) 21–26, full text: https://nopr.niscpr.res.in/bitstream/123456789/399/1/FTR%2032%281%29%20%282007%29%2021-26.pdf (retrieved 2026-08-13) | Core, effect, and binder components; loops/waves/chenille effects; route-specific structural parameters |
| `wang-et-al-2025` | `literature` | “Sustainable Pattern Innovation in Chenille Tufted Carpets: A Spatial Color Mixing Approach Using Dope-Dyed Filament,” Fibers 13(9), 126, 2025, https://doi.org/10.3390/fib13090126 (retrieved 2026-08-13) | Open-access chenille formation sequence, component arrangement, cutting, twisting, and process-variable records |
