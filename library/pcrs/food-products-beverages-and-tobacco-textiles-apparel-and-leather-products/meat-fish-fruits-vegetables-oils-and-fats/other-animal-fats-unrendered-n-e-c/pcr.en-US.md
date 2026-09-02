---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-animal-fats-unrendered-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other animal fats, unrendered, n.e.c.

## 1. Scope and Applicability

This PCR covers animal-derived fat tissue or raw fatty material that remains **unrendered** at the declared handover and is not classified in a more specific animal-fat category. The normal route is physical recovery or separation after slaughter, dressing, cutting, or an analogous animal-processing step. Crude wool grease is also in scope because UNSD CPC 3.0 expressly includes it; its wool-scouring recovery route must be modelled separately from slaughter-derived tissue routes. Limited trimming, draining, washing, non-thermal physical separation, chilling, freezing, packing, storage, and dispatch preparation may be included when performed before the declared handover. Edible status is not assumed and must be declared.

Use this residual category only after an inclusion/exclusion gate. It excludes unrendered pig and poultry, cattle, buffalo, sheep, and goat fats in CPC 21511-21515; every form of rendered animal fat and the rendered-fat subclasses 21521-21529; fish-liver oils, other fish oils, marine-mammal oils, other extracted animal oils and their fractions; lanolin, wool alcohols, wool grease olein or stearin; hydrogenated, inter-esterified, re-esterified, elaidinised, refined, blended, or otherwise specifically classified fat products. Rendering, fat melting, extraction that produces an oil or fraction, refining, and downstream manufacture are outside the default foreground boundary.

Examples within the official residual scope include crude wool grease and unrendered fat from animals not elsewhere classified, such as bear, horse, hippopotamus, crab, mollusc, rabbit, and turtle. These are examples, not a common formulation or a licence to aggregate unlike species or material states. If the species or source material is unknown, if the material may overlap CPC 21511-21515 or a rendered/oil category, or if the physical state does not establish that it is unrendered, classification is `manual_review` and this PCR must not be auto-selected.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-animal-fats-unrendered-n-e-c |
| classification_refs | UNSD CPC 3.0: 21519, Other animal fats, unrendered, n.e.c. |
| covered_products | Unrendered animal fat tissue or raw fatty material not elsewhere classified; crude wool grease; route- and species-declared unrendered residual fats that pass the inclusion gate |
| excluded_products | CPC 21511-21515; rendered fats in CPC 21521-21529; fish, marine-mammal, and other extracted animal oils or fractions; lanolin and processed wool-grease fractions; modified, refined, blended, or otherwise specifically classified fat products |
| representative_product | One declared lot of physically separated unrendered fat tissue or raw fatty material from one identified species/taxon and recovery route |
| production_route | Route A: post-slaughter, dressing, cutting, or analogous physical separation and trimming; Route B: non-rendering recovery of crude wool grease from wool scouring; followed, when applicable, by draining or washing, chilling or freezing, packing, storage, and dispatch handover |
| market_state | Bulk or packed; ambient, chilled, or frozen as declared; unrendered; edible, feed, technical, or other intended grade as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of other animal fat, unrendered, n.e.c., at the declared dispatch or delivery handover |
| How much | 1 kg net mass of qualifying product, excluding packaging and free drainage not sold as product |
| How well | Species/taxon, source tissue or material, recovery route, unrendered state, intended grade, physical state, temperature condition, and relevant moisture or extraneous-material basis are declared and do not overlap an excluded category |
| How long or cycle | One production lot at the declared handover; any chilling, freezing, or storage duration included in the foreground inventory is declared |
| reference_flow_link | The functional unit is fulfilled by 1 kg of the Tiangong product flow identified below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or taxon; source tissue or source material; slaughter-derived tissue route or crude-wool-grease route; confirmation that no rendering, fat melting, oil extraction, or refining occurred; intended grade/use; bulk or packed state; ambient, chilled, or frozen state and handover temperature; net-mass and moisture/free-drainage basis; production geography and period; dispatch or delivery handover point; classification-review outcome |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete. Multiple species, source materials, grades, or recovery routes must be inventoried as separate datasets or separately calculated strata; a mixed aggregate is permitted only when each stratum and the aggregation weights are disclosed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass on a calibrated mass basis by subtracting tare, packaging, and separately removed free drainage. Record whether the reported mass is at dispatch or delivery and whether it is ambient, chilled, or frozen. |
| `same_mass_identity` | All mass conversions used for the reference flow | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve the stated Tiangong mass property and Units of mass UUID. Convert recorded mass units to kg with documented factors; do not substitute a volume, lipid-content, dry-matter, or energy basis for the reference flow. |
| `conditioned_mass_basis` | Product after chilling, freezing, draining, or washing | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the mass at the declared handover condition. Measure and report separately any removed drainage, ice or added water, moisture change, and rejected non-fat tissue when material to the mass balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified, accepted animal-derived fat tissue or raw fatty material enters physical recovery/separation after the upstream slaughter, dressing, cutting, or analogous animal-processing decision; for crude wool grease, identified greasy wool or a separately measured scouring stream enters non-rendering grease recovery |
| starting_condition_role | Foreground entry condition for route-specific physical recovery; upstream animal production, slaughter, fishing/aquaculture, wool production, and prior processing remain linked upstream systems unless demonstrably included in the same measured facility system |
| product_classification_scope | Residual CPC 21519 scope only after exclusion of CPC 21511-21515, CPC 21521-21529, fish or marine-mammal oils, other extracted oils/fractions, and other specifically classified products |
| recursive_input_rule | Purchased or transferred CPC 21519 material is an explicit same-category input with its own upstream dataset and is excluded from newly recovered output when calculating facility yield; internal transfers between mapped foreground processes are not counted twice |
| upstream_dataset_requirement | Provide compatible upstream datasets for source animal material and other purchased inputs. At a shared slaughter, cutting, animal-processing, or wool-scouring boundary, the upstream dataset must disclose subdivision or the allocation method and factor applied at the point where the qualifying material becomes a distinct output |
| disclosure | Declare species/taxon, source material, route, included operations, rendering/refining exclusion, product grade, physical and temperature state, packaging, storage duration, handover point, upstream boundary, co-products, allocation method and factors, and any excluded flow with justification |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_unrendered_gate` | Product and foreground process boundary | The qualifying product must remain unrendered through the declared handover. Rendering, fat melting, extraction producing an animal oil or fraction, refining, and chemical modification are excluded and require another product category and process system. | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `boundary_route_start` | Foreground start | Start at the measured entry of accepted source material to physical recovery/separation. Include only route-specific operations and resource or emission flows actually controlled within the declared foreground system; link rather than erase upstream burdens. | `eu-pef-2021` |
| `boundary_conditioning` | Chilling, freezing, washing, trimming, storage, and packing | Include these operations when performed before the declared handover and record their actual water, energy, auxiliary, packaging, waste, wastewater, refrigerant, and direct-emission flows. Applicable meat-hygiene controls govern only slaughter/meat routes and do not define composition or LCA values for aquatic or wool-grease routes. | `codex-cxc-58-2005`; `eu-fdm-bat-2019` |
| `boundary_handover` | Distribution boundary | The default foreground ends when the qualifying product is weighed and transferred at the declared dispatch gate. Outbound transport is outside unless the declared delivery handover includes it; if included, record route, distance, mode, load, temperature control, and allocation separately. | `eu-pef-2021` |
| `boundary_no_silent_cutoff` | Inventory completeness | Identify all environmentally relevant material and energy flows, co-products, wastes, wastewater, and direct releases. Any exclusion must be explicit, justified, and assessed for significance; this candidate PCR sets no category-specific numerical cut-off. | `eu-pef-2021`; `eu-fdm-bat-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `physical_recovery_separation` | Physical recovery and separation | required | Always; use one declared route and separately stratify unlike species or materials | Foreground recovery of unrendered fat tissue/raw fatty material without rendering or refining | kg qualifying intermediate and co-products per measured kg source material |
| `conditioning_storage` | Non-rendering conditioning and storage | conditional | Include when trimming, draining, washing, chilling, freezing, or storage occurs before handover | Foreground condition control without rendering | kg conditioned unrendered product |
| `packing_dispatch_handover` | Packing, dispatch, and handover | required | Always; packaging input may be zero only for documented unpackaged bulk transfer | Final weighing, packing where applicable, storage release, and transfer of custody | 1 kg net reference product at declared handover |

### Process: Physical recovery and separation (`physical_recovery_separation`)

#### Inputs

##### Product flows

###### Identified animal-derived source material (`source_animal_material`)

Record the measured animal-derived tissue, raw fatty material, greasy wool, or segregated scouring stream entering the declared physical recovery route. Species/taxon, source material, upstream dataset, and acceptance decision are mandatory.

- Selected flow: Route-specific animal-derived source material; Tiangong UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net mass entering the recovery lot, excluding tare and separately measured recirculated internal material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg final qualifying reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_identity_mass`

- Range: Provisional route-specific source-to-product screen; not a species or category default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1000
  - Unit: kg source material/kg qualifying product
  - Basis: Broad screen to flag missing co-product, reject, drainage, or yield records; replace after reviewed route- and species-specific batch evidence is available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water (`recovery_water`)

Record water crossing the foreground boundary for washing, scouring, separation, sanitation allocated to the lot, or other product-contact and process uses. Do not infer a common requirement across slaughter, aquatic, and wool-grease routes.

- Selected flow: Process water; Tiangong UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Metered or allocated water supplied to the lot; zero only when the operation is documented as dry and sanitation water is outside the measured process allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per 1 kg final qualifying reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resource_use`
- Sources: `eu-fdm-bat-2019`

- Range: Provisional water-use screening range; not a category default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg water/kg qualifying product
  - Basis: Broad route-specific screen; replace when metered lot or facility data establish a reviewed range for the declared operation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity and purchased energy (`recovery_energy`)

Record electricity, heat, fuel, compressed air, or purchased utility services used by physical separation, pumping, trimming equipment, scouring recovery, and allocated sanitation.

- Selected flow: Route-specific electricity and purchased energy carriers; Tiangong UUIDs unresolved and must be selected for the concrete dataset
- Flow property / unit: Energy carrier-specific property and unit; preserve original meter units before conversion
- Amount rule: Metered use or a documented equipment-time allocation to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg final qualifying reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resource_use`
- Sources: `eu-fdm-bat-2019`

- Range: Provisional purchased-energy screening range; not a category default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg qualifying product
  - Basis: Broad combined-energy screen for non-rendering recovery only; replace with reviewed technology- and route-specific metering and never use it to justify thermal rendering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and separation auxiliaries (`recovery_auxiliaries`)

Record detergents, separation aids, or other auxiliaries that cross the process boundary. Their use must not change the product into a rendered, refined, chemically modified, or otherwise excluded fat.

- Selected flow: Route-specific auxiliary material; Tiangong UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Supplier and dosing records allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per 1 kg final qualifying reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resource_use`

##### Waste flows

No waste input is prescribed category-wide. Reworked internal material must be identified as an internal transfer and not counted as new source material.

##### Elementary flows

No elementary input is prescribed category-wide. Site-specific resources from nature must be recorded when they cross the foreground boundary.

#### Outputs

##### Product flows

###### Qualifying unrendered fat intermediate (`unrendered_fat_intermediate`)

Record the measured output that passes the category gate before optional conditioning and final handover. The output must retain its route/species stratum.

- Selected flow: Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net measured qualifying output; calculate by lot and do not merge excluded or ambiguous material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per recovery lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_co_product_waste`
- Sources: `unsd-cpc-3-0-2025`

###### Other saleable co-products (`recovery_co_products`)

Record meat, hide, bone, other tissues, wool, recovered non-fat materials, or other saleable outputs at the shared process boundary. Co-products must not be hidden to make the qualifying fat appear burden-free.

- Selected flow: Co-product-specific Tiangong flow; UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Mass / kg, or another justified co-product reference property
- Amount rule: Measured saleable output by co-product and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per shared recovery or upstream production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_co_product_waste`

##### Waste flows

###### Rejected tissue, solids, and non-product residues (`recovery_rejects`)

Record material rejected by classification, quality, hygiene, or physical-separation controls and its destination. Do not relabel rendered or oil-like output as a reject to retain this PCR.

- Selected flow: Route-specific waste or residual material; Tiangong UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass by type and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per recovery lot and per 1 kg final qualifying reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_co_product_waste`

- Range: Provisional reject-fraction screen; not a species or route default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg measured source material
  - Basis: Physical mass-fraction screen; replace with reviewed batch evidence and investigate values outside the interval as a boundary or unit error
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater and separated aqueous streams (`recovery_wastewater`)

Record wastewater and aqueous residual streams generated by washing, sanitation, scouring, or physical separation, including destination and measured characteristics when available.

- Selected flow: Wastewater, route-specific; Tiangong UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Mass or volume with documented density conversion / kg or m3
- Amount rule: Metered discharge or documented water-balance calculation by lot or reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final qualifying reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_wastewater`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Direct releases from recovery (`recovery_direct_releases`)

Record measured site-specific releases to air, water, or soil that cross the environment boundary, including refrigerants or combustion emissions when relevant. Do not insert generic emission factors without a cited method and declared activity data.

- Selected flow: Elementary-flow-specific Tiangong flow; UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Flow-specific property and unit
- Amount rule: Measured release or calculation from collected activity data using a cited factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final qualifying reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_wastewater`
- Sources: `eu-fdm-bat-2019`

### Process: Non-rendering conditioning and storage (`conditioning_storage`)

#### Inputs

##### Product flows

###### Unrendered fat intermediate (`conditioning_product_input`)

Record the internal transfer from physical recovery or a purchased same-category input with a separate upstream dataset. The product must remain unrendered.

- Selected flow: Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net mass entering the conditioning step, identified as internal or purchased
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_storage`

###### Conditioning electricity and utilities (`conditioning_energy`)

Record refrigeration, freezing, pumping, ventilation, and storage energy for the actual duration and temperature condition.

- Selected flow: Route-specific electricity and energy carriers; Tiangong UUIDs unresolved and must be selected for the concrete dataset
- Flow property / unit: Energy carrier-specific property and unit
- Amount rule: Metered use or documented equipment-load and operating-time calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg conditioned product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_storage`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019`

- Range: Provisional conditioning-energy screen; not a species or category default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg conditioned product
  - Basis: Broad screen across declared chilling, freezing, and storage duration; replace with reviewed metering stratified by temperature and time
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed category-wide.

##### Elementary flows

No elementary input is prescribed category-wide.

#### Outputs

##### Product flows

###### Conditioned unrendered fat (`conditioned_unrendered_fat`)

Record net product mass after trimming, draining, washing, chilling, freezing, or storage, preserving the declared species/material stratum and unrendered state.

- Selected flow: Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net measured conditioned output at the declared temperature and moisture/free-drainage basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_storage`

##### Waste flows

###### Conditioning rejects and drainage (`conditioning_rejects_drainage`)

Record removed tissue, drainage, melt loss, washing residuals, damaged product, and other conditioning losses by destination.

- Selected flow: Route-specific waste or drainage; Tiangong UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-derived loss by type
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per conditioning lot and per 1 kg final qualifying reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_storage`

##### Elementary flows

###### Refrigerant and direct utility releases (`conditioning_direct_releases`)

Record refrigerant losses and direct releases from site-controlled conditioning equipment when they occur.

- Selected flow: Elementary-flow-specific Tiangong flow; UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Flow-specific property and unit
- Amount rule: Maintenance record, measured loss, or inventory-balance calculation by reporting period allocated to the lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg conditioned product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_storage`

### Process: Packing, dispatch, and handover (`packing_dispatch_handover`)

#### Inputs

##### Product flows

###### Unpacked or conditioned qualifying product (`dispatch_product_input`)

Record the internal qualifying product transferred to final weighing and dispatch. Purchased same-category material must retain a separate upstream dataset and cannot be counted as newly recovered output.

- Selected flow: Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net product mass entering dispatch preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per dispatch lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_dispatch`

###### Primary, secondary, and transport packaging (`packaging_materials`)

Record each packaging material actually supplied before handover. A zero value requires documented unpackaged bulk transfer.

- Selected flow: Material-specific packaging flow; Tiangong UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued packaging mass minus returned unused packaging, allocated by packed units or measured lot mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_dispatch`

- Range: Provisional packaging-mass screen; not a packaging specification or category default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg packaging/kg net product
  - Basis: Broad bulk-to-small-pack screen; replace with reviewed bill-of-material and lot evidence for the declared package format
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dispatch energy and utilities (`dispatch_energy`)

Record final weighing, packing, cold-room staging, and loading energy before custody transfer.

- Selected flow: Route-specific electricity and energy carriers; Tiangong UUIDs unresolved and must be selected for the concrete dataset
- Flow property / unit: Energy carrier-specific property and unit
- Amount rule: Metered use or documented equipment-time allocation to the dispatch lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_dispatch`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

No waste input is prescribed category-wide.

##### Elementary flows

No elementary input is prescribed category-wide.

#### Outputs

##### Product flows

###### Reference product at declared handover (`reference_product_output`)

Record exactly 1 kg net qualifying product at the declared dispatch or delivery condition after all included foreground operations.

- Selected flow: Other animal fats, unrendered, n.e.c. `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net product after tare and packaging subtraction; normalize all foreground inventory to this output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging waste and dispatch rejects (`dispatch_waste`)

Record damaged, unused, or discarded packaging and product rejected during final inspection, with treatment destination.

- Selected flow: Waste-specific Tiangong flow; UUID unresolved and must be selected for the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured waste by type and dispatch lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_dispatch`

##### Elementary flows

No category-wide elementary output is assumed. Record site-specific loading or cold-storage releases when they cross the environment boundary.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared slaughter, dressing, cutting, recovery, scouring, conditioning, and utility processes | Avoid allocation first by separately metering or otherwise subdividing operations directly attributable to the qualifying fat, other products, co-products, and wastes. Internal transfers are not co-products. | `eu-pef-2021` |
| `allocation_physical_second` | Multifunctional process that cannot be subdivided | Use a demonstrated, quantifiable physical relationship only when it represents how the shared inputs and outputs provide the functions of the co-products. Record the relationship, measurements, period, and factor; mass alone is not automatically relevant. | `eu-pef-2021` |
| `allocation_other_relationship_last` | Multifunctional process with no defensible subdivision or physical relationship | Use another justified relationship, normally economic allocation at the point the co-products become distinct, with contemporaneous route-, species-, grade-, and market-specific quantities and prices. Explain why earlier hierarchy steps failed and test sensitivity where the allocation materially affects results. | `eu-pef-2021` |
| `allocation_no_cross_species_default` | n.e.c. source material and co-products | Do not apply a unified allocation factor across animal species, tissue states, crude wool grease, aquatic invertebrate material, or other recovery routes. PEF slaughterhouse default factors for cattle, pigs, sheep, and goats are outside this residual category and must not be imported as defaults. | `unsd-cpc-3-0-2025`; `eu-pef-2021` |
| `allocation_upstream_transfer` | Purchased or transferred source material and same-category input | A zero-burden or waste designation is not automatic. Retain the supplier/upstream treatment of burdens, co-product status, and allocation at the transfer point; reconcile it with the foreground method to avoid omission or double counting. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_identity_mass` | `physical_recovery_separation` | Source identity and incoming mass | Receiving, supplier, classification, scale, and lot records | lot_id; supplier; species_or_taxon; source_tissue_or_material; route; intended_grade; rendered_or_extracted_indicator; acceptance_decision; gross_mass; tare_mass; net_mass; scale_id; timestamp | Verify documentary identity and physical state at receipt; calibrated weighing; retain classification review for residual-category acceptance | kg and declared descriptors | Each lot | All lots in the representative period | Every included site and supplier route | Keep species/material/route strata separate; sum only accepted net masses with disclosed weights | Supplier records; photographs or specifications where used; classification review; calibration certificate; receiving log |
| `cp_resource_use` | `physical_recovery_separation` | Water, energy, and auxiliaries | Meters, invoices, dosing logs, and equipment records | meter_start; meter_end; fuel_or_energy_type; water_use; auxiliary_name; auxiliary_mass; equipment_time; allocation_driver; lot_id; reporting_period | Prefer submetering; otherwise allocate reporting-period use with a documented causal driver and reconcile to invoices | kg; m3; kWh; MJ; carrier-specific units | Per lot or meter interval | Representative operation including seasonal/throughput variation | Each foreground site | Sum by resource and stratum; normalize to accepted net reference output; report allocation share | Meter calibration; invoices; stock reconciliation; equipment log; allocation worksheet |
| `cp_output_co_product_waste` | `physical_recovery_separation` | Product, co-product, reject, and waste mass | Scale, yield, dispatch, and waste records | lot_id; output_type; species_or_taxon; material_state; gross_mass; tare_mass; net_mass; destination; saleable_status; handover_point | Calibrated weighing of each output class; retain route and classification strata | kg and declared descriptors | Each lot | All lots in the representative period | Each foreground site | Reconcile input, product, co-products, drainage, wastewater, stock change, and wastes before normalization | Calibration certificate; lot yield sheet; waste transfer note; dispatch record; inventory reconciliation |
| `cp_emissions_wastewater` | `physical_recovery_separation` | Wastewater and direct releases | Flow meters, sampling, maintenance, fuel, and emission records | stream_id; flow; pH; temperature; pollutant_or_release; concentration_or_mass; sampling_time; method; refrigerant_addition; fuel_use; destination | Monitor relevant streams at declared locations; calculate loads only from recorded flow/activity and documented factors | m3; kg; concentration and flow-specific units | Per discharge, sample, event, or reporting period | Representative period with abnormal events identified | Each foreground site and relevant discharge point | Sum measured loads by stream; allocate shared reporting-period loads with disclosed causal driver | Laboratory report; meter calibration; maintenance log; factor reference; discharge record |
| `cp_conditioning_storage` | `conditioning_storage` | Product condition, duration, energy, losses, and direct releases | Scale, temperature, time, meter, stock, and maintenance records | lot_id; input_mass; output_mass; temperature_profile; start_time; end_time; storage_volume_or_mass; energy_use; refrigerant_addition; drainage; reject_mass | Calibrated weighing and temperature logging; submetering or documented load-time calculation; inventory balance for refrigerant | kg; °C; hour or day; kWh; refrigerant-specific unit | Each lot with continuous or periodic temperature records | Full included conditioning/storage duration | Each included cold room, freezer, or conditioning line | Normalize product and losses by lot; allocate shared energy by documented mass-time, volume-time, or measured load driver | Scale and temperature calibration; meter data; stock reconciliation; maintenance record |
| `cp_packing_dispatch` | `packing_dispatch_handover` | Packaging, final mass, dispatch utilities, waste, and custody transfer | Bills of material, issue/return logs, scales, meters, and dispatch documents | lot_id; package_format; material; issued_mass; returned_mass; packed_units; gross_mass; tare_mass; net_product_mass; dispatch_energy; reject_mass; handover_location; handover_time; temperature | Reconcile packaging issues and returns; calibrated final weighing; document custody transfer and temperature condition | kg; item count; kWh; °C; timestamp | Each dispatch lot | All dispatches in representative period | Every packing and dispatch site | Calculate packaging by material and net product; normalize site utilities and waste with disclosed driver | Packaging bill of material; purchase/stock record; calibration; dispatch note; meter record |
| `cp_allocation_evidence` | `physical_recovery_separation` | Shared-process allocation | Submeter, physical-driver, quantity, and price records | shared_process; co_product; direct_metered_use; physical_driver; co_product_quantity; price_basis; price_period; currency; allocation_factor; hierarchy_step; justification | Test subdivision first, then relevant physical relationship, then another justified relationship; retain factor calculation and sensitivity inputs | Driver-specific units; kg; currency per declared unit | Each allocation period and whenever route or market changes | Same period as foreground inventory or justified representative period | Each shared facility and route/species stratum | Calculate factors within one coherent multifunctional boundary; factors sum to one for allocated burdens | Metering evidence; production ledger; invoices or market records; signed allocation worksheet; sensitivity check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Final product mass | net product mass = gross measured mass - tare - packaging mass - separately removed free drainage; normalize inventory by net qualifying mass at handover | gross_mass; tare_mass; packaging_mass; free_drainage_mass; classification acceptance | kg qualifying product and normalization factor | `eu-pef-2021` |
| `calc_lot_mass_balance` | Each recovery and conditioning lot | Reconcile measured source inputs and additions with qualifying product, co-products, wastes, wastewater or drainage, direct mass releases, and stock change. Investigate rather than force-close unexplained imbalance | all measured mass inputs and outputs; stock change; moisture/free-drainage notes | disclosed mass-balance residual and completeness finding | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_shared_resource_use` | Shared water, energy, auxiliary, and dispatch records | normalized use = total recorded use × documented foreground allocation share ÷ net qualifying product mass; the share must use a causal meter or activity driver and remain separate by route/species stratum | meter or invoice total; allocation driver; allocation share; net product mass | resource use per kg reference product | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_co_product_allocation` | Multifunctional upstream or foreground process | Apply the ordered hierarchy: subdivision; relevant physical relationship; then another justified relationship. Record factors and verify allocated shares sum to one within the shared burden pool | direct measurements; driver data; quantities; prices; period; burden pool | allocated inputs, outputs, and emissions by co-product | `eu-pef-2021` |
| `calc_reasoned_estimate_replacement` | Provisional QA ranges | Reasoned-estimate ranges are screening flags only and never substitute for foreground amounts. Replace a range when reviewed batch, metering, bill-of-material, route, storage, or allocation evidence is available, or when the species/material/technology/boundary changes | provisional range; new foreground evidence; change trigger | retained, revised, or removed QA range with review record |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_classification` | Every product and source-material stratum | Demonstrate residual-category eligibility, species/taxon, source material, unrendered state, route, grade, and non-overlap with exclusions. Ambiguity requires manual classification review before use. | Receiving and supplier records; physical-state evidence; CPC review |
| `dq_measurement` | Mass, resource, temperature, time, and release records | Use calibrated or verified instruments where applicable; preserve raw units, conversions, meter coverage, sampling methods, and allocation drivers. | Calibration and verification records; raw meter/sample files; conversion worksheet |
| `dq_temporal_geographic_technology` | Representative dataset | State geography, sites, technologies, throughput, seasonality, production period, and storage profile. Explain gaps and why the period represents the declared product stratum. | Production calendar; facility description; coverage statistics; PEF DQR disclosure |
| `dq_completeness` | Foreground inventory | Include or explicitly justify exclusion of relevant material, energy, co-product, waste, wastewater, packaging, refrigerant, and direct-release flows; report the mass-balance residual and omitted-flow assessment. | Process-flow diagram; BAT-style inventory where applicable; mass balance; exclusion register |
| `dq_allocation` | Shared processes | Retain hierarchy step, boundary, factors, period, species/route stratum, and evidence; do not transplant factors from another animal category or tissue state. | Allocation worksheet; meter/driver/price evidence; sensitivity result |
| `dq_hygiene_condition` | Edible slaughter/meat-derived routes | Retain applicable process-control, post-mortem acceptance, time-temperature, wrapping/packing, refrigeration, and custody records. CXC 58 is contextual and does not establish a product composition or LCA amount. | Applicable establishment control records; temperature log; inspection/acceptance and dispatch documentation |
| `dq_source_limits` | Use of external evidence | Preserve each source's declared use and limitation. Do not convert Codex composition tables, BAT applicability thresholds/performance levels, or PEF species-specific defaults into category-wide values for CPC 21519. | Source-use review and dataset-method note |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_gate` | Product identity | Pass only when species/taxon, source material, route, and unrendered state establish CPC 21519 residual scope. Unknown species or possible overlap with CPC 21511-21515, rendered fats, animal oils/fractions, or another explicit category produces a manual-review finding and no automatic PCR selection. | `unsd-cpc-3-0-2025` |
| `validate_reference_uuid` | Reference flow identity | Require product flow `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and a 1 kg net reference amount. |  |
| `validate_unrendered_process` | Process route | Fail conformity if rendering, fat melting, oil/fraction extraction, refining, or chemical modification occurs before handover, or if rendered/oil output is represented with this reference flow. | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `validate_strata` | Species, source material, and route aggregation | Require separate inventory strata for unlike species/materials/routes or disclosed weights and stratum-specific calculations. A single undifferentiated default for slaughter-derived tissue, crude wool grease, or other animal sources is non-conforming. | `unsd-cpc-3-0-2025` |
| `validate_boundary_handover` | Included operations | Require declared foreground start, included trimming/washing/conditioning/storage/packing, dispatch or delivery handover, and treatment of outbound transport. Rendering/refining must remain excluded. | `eu-pef-2021` |
| `validate_inventory_completeness` | Process inventory | Require measured or explicitly not-applicable treatment of source material, product, co-products, water, energy, auxiliaries, rejects, wastewater/drainage, packaging, refrigerants/direct releases, and stock changes; justify every exclusion. | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `validate_mass_balance` | Recovery, conditioning, and dispatch lots | Require raw measurements and a disclosed mass-balance residual. Do not force an unexplained residual to zero or use a reasoned-estimate range as the recorded amount. | `eu-fdm-bat-2019` |
| `validate_allocation` | Multifunctional burdens | Require evidence that subdivision was tested first, followed by a relevant physical relationship and only then another justified relationship; factors must be route- and period-specific and reconcile within the shared burden pool. | `eu-pef-2021` |
| `validate_estimate_replacement` | Reasoned-estimate ranges | Confirm that every `reasoned_estimate` is labelled provisional, is used only as a QA screen, has no invented source, and states replacement triggers. Foreground values remain mandatory. |  |
| `validate_source_limitations` | External-source use | Reject use of CXS 211 composition values as an unrendered-fat recipe or LCA value, CXC 58 outside applicable slaughter/meat hygiene context, or FDM BAT thresholds/performance values as universal requirements. | `codex-cxs-211-1999`; `codex-cxc-58-2005`; `eu-fdm-bat-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-system dataset for one declared species/material/recovery-route stratum, suitable after review for publication as a secondary_dataset and/or background_dataset |
| downstream_use | LCA process and lifecyclemodel projections requiring 1 kg of other animal fat, unrendered, n.e.c., at a specified dispatch or delivery condition |
| allowed_use | Studies matching the declared species/taxon, material, route, grade, geography, technology, period, temperature state, handover, upstream-boundary treatment, and allocation method |
| excluded_use | Rendered/refined/modified fats or oils; CPC 21511-21515; rendered fats 21521-21529; fish or marine-mammal oils; unknown or mixed source identity without stratification; substitution across materially different species, wool-grease and tissue routes, or handover states without review |
| required_metadata | PCR id/version; product and all three reference UUIDs; species/taxon; source tissue/material; route; residual-category review; intended grade/use; physical and temperature state; moisture/free-drainage and net-mass basis; geography; period; technology; included operations; packaging; storage duration; handover; upstream datasets; co-products; allocation; data sources |
| required_quality_disclosure | Raw-data coverage; calibration; temporal/geographic/technological representativeness; mass-balance residual; water/energy/emission coverage; exclusions; allocation factors and sensitivity; use and replacement status of reasoned estimates; source limitations; unresolved flow UUIDs selected in the concrete dataset |
| update_trigger | New CPC or official scope guidance; corrected Tiangong identity; reviewed route/species evidence; changed recovery, conditioning, packaging, or handover technology; new foreground ranges; changed co-product markets/allocation; source revision; evidence that a product belongs to a more specific category |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, subclass 21519, updated 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Authoritative residual-category inclusion/exclusion gate. It defines classification scope only and supplies no process recipe, allocation factor, or LCA quantity. |
| `codex-cxc-58-2005` | standard | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005. https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf (retrieved 2026-08-11) | Applicable slaughter/meat-route context for process control, post-mortem acceptance, time-temperature control, immediate wrapping/packing and refrigeration. It is not applied to aquatic-invertebrate or crude-wool-grease routes and supplies no category-wide LCA values. |
| `codex-cxs-211-1999` | standard | Codex Alimentarius, Standard for Named Animal Fats, CXS 211-1999, amended 2024. https://openknowledge.fao.org/handle/20.500.14283/ce0093en (retrieved 2026-08-11) | Boundary contrast: its named fats are presented for human consumption and include rendered products such as lard, rendered pork fat, premier jus, and tallow. It is not used as an unrendered-fat composition specification, recipe, or source of LCA quantities. |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Functional-unit/reference-flow structure; system-boundary and inventory completeness; data-quality disclosure; multi-functionality hierarchy. Species-specific PEF slaughter/farm defaults for cattle, pigs, sheep, and goats are not adopted for this n.e.c. PCR. |
| `eu-fdm-bat-2019` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-11) | Process-flow, water/energy/raw-material, wastewater/waste-gas inventory and monitoring completeness where relevant. Legal applicability, capacity thresholds, emission levels, and performance values are not generalized; the decision notes that slaughterhouse/animal-by-product activities may be covered by other BAT conclusions. |
