---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cattle-fat-unrendered
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cattle fat, unrendered

## 1. Scope and Applicability

This PCR covers unrendered fatty tissue or fat-bearing raw material separated from cattle after slaughter, dressing, deboning, or cutting and handed over without a rendering step. The material may be intended for food, for a prescribed treatment before food use, for feed or pet-food use, or for another declared non-food use, but its actual eligibility and disposition must be stated from competent-person or competent-authority records. A food-use claim is not implied merely by the product name.

The default foreground begins when an identified cattle fat-bearing stream is separated from an inspected carcass or cutting stream. It includes stream-specific trimming and sorting and, when performed before the declared handoff, chilling or freezing, packing, on-site storage, and delivery. Shared cattle-production and slaughterhouse burdens enter through linked upstream datasets and the declared co-product method; they are not silently reassigned to the trimming operation.

Rendering, low-temperature rendering, melting, extraction, fractionation, refining, bleaching, deodorisation, hydrogenation, or formulation is excluded by default. Rendered cattle fats such as premier jus, edible tallow, greaves fat, marrow oil, bone oil, foot oil, and their fractions are outside this category. CXS 211-1999 describes named fats obtained by rendering and therefore supplies only a boundary contrast and possible downstream-use context; its composition and quality values are not specifications or LCA defaults for this unrendered product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cattle-fat-unrendered |
| classification_refs | UNSD CPC Version 3.0 subclass 21512, Cattle fat, unrendered, exact scope reference |
| covered_products | Unrendered fat from cattle; discrete slaughter, dressing, deboning, cutting, or trimming fatty-tissue streams; chilled or frozen material remains covered when no rendering or refining has occurred |
| excluded_products | Fat from non-cattle species; mixed-species fat without separately measured cattle output; rendered cattle fat and tallow under CPC 21523; greaves fat; marrow, bone, or foot oils and fractions under CPC 21529; formulated or refined fat products; material whose cattle origin or disposition cannot be demonstrated |
| representative_product | 1 kg net mass of an identified cattle fatty-tissue or trimming stream, unrendered, with declared anatomical or process origin, eligibility, temperature state, packaging state, and handoff point |
| production_route | Separation during or after cattle dressing or cutting; stream-specific trimming and sorting; optional chilling or freezing; optional packaging and storage; handoff before rendering or refining |
| market_state | Unrendered cattle fat-bearing tissue or raw fat material, loose or packed, ambient only where permitted or otherwise chilled or frozen; food eligibility, prescribed-treatment status, feed or pet-food eligibility, or non-food disposition explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Unrendered cattle fatty tissue or fat raw material at the declared handoff point |
| How much | 1 kg net mass, excluding packaging and transport equipment |
| How well | Cattle origin, tissue or trimming stream, unrendered status, eligibility or disposition, physical condition, temperature state, and contamination-control status declared |
| How long or cycle | One production or delivery lot at handoff; no storage life or downstream rendering service is credited |
| reference_flow_link | The functional unit is realised by exactly 1 kg of the reference product flow at the declared handoff condition |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cattle category if known; slaughter or cutting establishment and lot; anatomical or process tissue stream; edible, edible subject to prescribed treatment, feed or pet-food, other non-food, condemned, or pending disposition; evidence for disposition; unrendered assertion; included muscle, blood, connective tissue, bone, skin, and moisture condition; trimming and sorting specification; ambient, chilled, or frozen state and handoff temperature; packaging and tare basis; handoff location; intended next use; time period and geography |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Different cattle tissue streams, eligibility classes, or temperature states must not be pooled into one default product without separate masses and a documented aggregation purpose.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net as-received mass of unrendered cattle fat at handoff. Subtract packaging, pallets, bins, ice not sold with the product, and transport equipment by measured or verified tare. |
| `as_received_state` | all mass flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record masses in their actual wet or frozen condition. Do not convert to dry fat, lipid content, or rendered-fat equivalent unless a separately identified analytical result and calculation are reported outside the reference amount. |
| `stream_separation` | cattle fat inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate each cattle tissue stream and each eligibility class separately. No cattle value may be inferred from pig, poultry, buffalo, sheep, goat, mixed-species, rendered-fat, or refined-fat data. |
| `mass_balance_basis` | separation, conditioning, and packing processes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Close the recorded mass balance using input fat-bearing material, reference product, separately designated co-products, wastes, retained stock, and measured changes in ice, water, or other added or removed material. Report the unexplained balance rather than forcing closure. |
| `temperature_not_conversion` | chilled or frozen product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Chilling or freezing changes the required qualifier, not the reference unit. Record handoff temperature and any retained surface ice or added water separately. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified cattle carcass, edible part, or cutting stream has completed the applicable slaughter or post-mortem disposition step, and an unrendered fat-bearing stream is separated with lot and eligibility linkage intact |
| starting_condition_role | Upstream co-product handoff from cattle production and slaughter or cutting into foreground fat separation, trimming, conditioning, and dispatch |
| product_classification_scope | Cattle-only unrendered fat corresponding exactly to CPC 3.0 subclass 21512; rendered and extracted cattle fats remain outside the scope |
| recursive_input_rule | If the same unrendered cattle-fat product category enters a foreground process, record its mass, stream qualifiers, origin dataset, and prior boundary separately; do not recursively recreate cattle production or slaughter burdens inside the receiving process |
| upstream_dataset_requirement | Link representative cattle-production and slaughter or cutting datasets when cradle-to-handoff results are produced. Preserve the allocation method, co-product set, prices or physical drivers when used, geography, period, and eligibility classes of the upstream handoff |
| disclosure | Declare the exact start and end gates, cattle and tissue identity, disposition, included conditioning and packing, storage duration, transport handoff, excluded rendering or refining, allocation approach, known cut-offs, and any unresolved product-flow UUIDs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_unrendered_identity` | product scope and end gate | The reference product must remain unrendered. Stop the default foreground before any rendering, melting for fat recovery, extraction, fractionation, or refining operation, and do not relabel a rendered output as this product. | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `boundary_cattle_disposition` | start gate and product qualification | Maintain cattle-lot linkage and the competent disposition of the relevant parts. Separate material safe and suitable for food, material requiring a prescribed treatment, non-food eligible material, condemned material, and material pending judgement. | `codex-cxc-58-2005` |
| `boundary_conditioning_handoff` | trimming, cooling, packing, storage, and delivery | Include only the trimming, sorting, chilling or freezing, packaging, storage, and delivery activities performed before the declared handoff. Record temperature-control and cold-chain interruptions where applicable. | `codex-cxc-58-2005` |
| `boundary_shared_slaughter` | cattle-production and slaughter burdens | Treat the unrendered cattle-fat stream as an output related to slaughter or cutting. Directly attributable recovery loads belong to the fat foreground; shared livestock and slaughter loads require an explicit upstream dataset and co-product treatment. | `eu-pef-2021-2279` |
| `boundary_inventory_completeness` | every included foreground process | Inventory all known material, energy, water, product, co-product, waste, wastewater, waste-gas, and direct elementary flows at the most appropriate process level. FDM BAT is used only as a completeness and monitoring checklist, not as a legal applicability claim or a source of universal performance values. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_transport_gate` | transport | Exclude transport after a dispatch-gate handoff. Include route-specific transport only when the declared reference handoff is after delivery, and disclose distance, mode, load, empty return treatment, refrigeration, and responsibility transfer. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fat_separation_trimming` | Cattle fat separation, stream sorting, and trimming | required | Always required to establish the CPC 21512 output and its relation to the slaughter or cutting stream | foreground production and co-product handoff | 1 kg net unrendered cattle fat output |
| `temperature_conditioning` | Chilling or freezing and conditioned storage | conditional | Include when active cooling, freezing, frozen storage, or temperature-controlled holding occurs before the reference handoff | conditioning and storage | 1 kg conditioned unrendered cattle fat output |
| `packing_dispatch` | Packaging, dispatch storage, and site-gate handoff | required | Packaging inputs are conditional, but the dispatch condition and tare determination are always recorded | packing and handoff | 1 kg net unrendered cattle fat handed off |
| `delivery_handoff` | Delivery to customer or downstream facility | conditional | Include only when the declared reference handoff occurs after transport rather than at the production-site dispatch gate | delivery | 1 tonne-kilometre service and 1 kg delivered reference product |
| `rendering_refining` | Rendering or refining | excluded_by_default | May appear only in a separate downstream system beyond this PCR reference handoff | downstream transformation | not part of the reference product foreground |

### Process: Cattle fat separation, stream sorting, and trimming (`fat_separation_trimming`)

#### Inputs

##### Product flows

###### Identified cattle fat-bearing tissue stream (`cattle_fat_bearing_input`)

Record the actual slaughter, dressing, deboning, cutting, or trimming stream entering foreground recovery. Preserve cattle lot, anatomical or process origin, disposition, physical state, and all non-fat tissue specifications rather than assuming a standard composition.

- Selected flow: Identified cattle fat-bearing tissue stream; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net input mass by separately qualified stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_identity_mass`
- Sources: `unsd-cpc-3-0-2025`; `codex-cxc-58-2005`

###### Purchased electricity for separation and trimming (`separation_electricity`)

Record metered electricity used by trimming, sorting, conveying, local cold holding, and directly attributable sanitation equipment. If only a shared meter exists, retain the allocation driver and uncertainty.

- Selected flow: Electricity supply; Tiangong flow UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoice-reconciled electricity attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_emissions`
- Sources: `eu-fdm-bat-2019-2031`

###### Process and sanitation water (`separation_water`)

Record water crossing the process boundary for product-contact handling or attributable sanitation. Do not assume washing occurs; distinguish supplied water from direct abstraction and record wastewater separately.

- Selected flow: Process water; Tiangong flow UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered, submetered, or documented allocated water use when water is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_emissions`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unrendered cattle fat output (`unrendered_cattle_fat_output`)

This is the net reference product after stream-specific separation and trimming and before any rendering or refining. Output eligibility and intended next use are declared independently from the flow name.

- Selected flow: Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net output as the quantitative reference
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-2025`

###### Separately designated valuable trimming outputs (`other_valuable_outputs`)

Record meat trims, connective tissue, bone-bearing material, hide or skin material, and other valuable streams only when they actually leave as separately designated products. Do not combine food-eligible and non-food streams.

- Selected flow: Site-specific co-product flow or flows; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by output identity and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance_disposition`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected or condemned material (`rejected_condemned_material`)

Record each rejected, condemned, or otherwise non-product stream with its judgement, legal or operational destination, and mass. A zero quantity must be an observed result, not a default.

- Selected flow: Site-specific rejected or condemned animal material; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by disposition and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance_disposition`
- Sources: `codex-cxc-58-2005`

###### Wastewater from handling and sanitation (`separation_wastewater`)

Record wastewater volume and known relevant characteristics when water use produces a wastewater stream. Keep wastewater treatment outside the foreground when supplied as a separate downstream service.

- Selected flow: Wastewater; Tiangong flow UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered, estimated from a documented water balance, or treatment-record volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_emissions`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Direct releases from separation and sanitation (`separation_direct_releases`)

Record only releases that cross directly to air, water, or soil from the included foreground. Do not duplicate releases already represented in purchased-energy, water-supply, or wastewater-treatment datasets.

- Selected flow: Site-specific direct elementary flow or flows; Tiangong flow UUID unresolved
- Flow property / unit: flow-specific property and unit
- Amount rule: measured release or calculation from collected activity data and a cited applicable factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_emissions`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

### Process: Chilling or freezing and conditioned storage (`temperature_conditioning`)

#### Inputs

##### Product flows

###### Unconditioned unrendered cattle fat (`unconditioned_fat_input`)

Record the same-category input with its preceding dataset and qualifiers; this recursive input does not create a second cattle-production or slaughter burden.

- Selected flow: Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass entering temperature conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `codex-cxc-58-2005`

###### Cooling or freezing energy (`conditioning_energy`)

Record electricity, fuel, or purchased cooling separately by energy carrier. Attribute shared refrigeration using a documented driver that reflects the conditioned load and storage duty.

- Selected flow: Site-specific electricity, fuel, or cooling service; Tiangong flow UUID unresolved
- Flow property / unit: Energy / kWh or MJ as recorded
- Amount rule: metered or calculated from collected equipment and operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### Refrigerant make-up (`refrigerant_makeup`)

Include refrigerant make-up only when attributable leakage occurs in equipment inside the foreground boundary.

- Selected flow: Site-specific refrigerant; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: service-record make-up mass allocated to included equipment and period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned unrendered cattle fat (`conditioned_fat_output`)

Record net output mass, actual temperature, chilled or frozen state, storage time, and any measurable water or ice change without converting the product to rendered-fat equivalent.

- Selected flow: Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net conditioned output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `codex-cxc-58-2005`

##### Waste flows

##### Elementary flows

###### Refrigerant released to air (`refrigerant_release_air`)

Record the refrigerant species and calculated or measured loss to air for included equipment; do not record the make-up flow again as an elementary release without the loss calculation.

- Selected flow: Refrigerant emission to air; Tiangong elementary-flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: attributable refrigerant make-up adjusted for stock change and documented recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned unrendered cattle fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `eu-pef-2021-2279`

### Process: Packaging, dispatch storage, and site-gate handoff (`packing_dispatch`)

#### Inputs

##### Product flows

###### Unrendered cattle fat entering dispatch (`dispatch_fat_input`)

Record the qualified loose, chilled, or frozen input mass from the preceding process without changing product identity.

- Selected flow: Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass entering packing and dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net product handed off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_handoff`
- Sources: `codex-cxc-58-2005`

###### Primary and secondary packaging (`packaging_inputs`)

Record each packaging material, reusable container cycle, liner, label, pallet, and ice or coolant supplied with the shipment separately. Packaging is not part of reference net mass.

- Selected flow: Site-specific packaging material or reusable transport item; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg or item count with measured mass conversion
- Amount rule: purchased or issued mass, or item count multiplied by verified item mass and divided by documented reuse cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net product handed off
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_handoff`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product at dispatch handoff (`reference_product_handoff`)

Record the net unrendered cattle-fat mass and all required qualifiers at transfer of control. For a delivered handoff, this output becomes the input to `delivery_handoff`.

- Selected flow: Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net reference product at the declared dispatch condition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-2025`; `codex-cxc-58-2005`

##### Waste flows

###### Packaging and dispatch rejects (`packing_rejects`)

Record damaged packaging, product losses, and rejected lots separately with destination and eligibility; do not net them silently from purchased packaging or product output.

- Selected flow: Site-specific packaging or product waste; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net product handed off
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_handoff`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

##### Elementary flows

### Process: Delivery to customer or downstream facility (`delivery_handoff`)

#### Inputs

##### Product flows

###### Dispatched unrendered cattle fat (`delivered_fat_input`)

Use the dispatch output as a same-category input and preserve its complete qualifiers and packaging basis.

- Selected flow: Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net shipped mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport_handoff`
- Sources: `codex-cxc-58-2005`

###### Transport and refrigerated transport service (`transport_service`)

Record actual mode, route distance, load factor, empty return treatment, and refrigeration energy where delivery precedes handoff. Do not add this row for a dispatch-gate reference flow.

- Selected flow: Route-specific freight transport service; Tiangong flow UUID unresolved
- Flow property / unit: Transport service / tkm
- Amount rule: shipped net tonnes multiplied by actual one-way route kilometres, with empty return and refrigeration modelled separately when applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg delivered reference product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_handoff`
- Sources: `eu-pef-2021-2279`; `codex-cxc-58-2005`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product at delivered handoff (`delivered_reference_product`)

Record delivered net mass, receipt temperature, packaging condition, losses, and the time and location of responsibility transfer.

- Selected flow: Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net delivered reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate_direct_loads` | fat separation, conditioning, packing, and delivery | First subdivide and assign directly measured inputs, emissions, wastes, and services to the process and output that caused them. Do not allocate a fat-specific trimming or cooling load across unrelated carcass outputs. | `eu-pef-2021-2279` |
| `allocation_shared_hierarchy` | multifunctional processes outside a prescribed PEF slaughterhouse rule | Where direct subdivision is not possible, investigate system expansion; otherwise use a relevant quantifiable physical relationship. Use another relationship such as economic allocation only after documenting why the earlier steps are not practicable and why the selected driver represents the shared process. | `eu-pef-2021-2279` |
| `allocation_cattle_slaughter_pef` | PEF-conformant cradle-to-handoff studies including cattle slaughter | Apply the cattle slaughterhouse method in Recommendation (EU) 2021/2279 section 4.5.1.6 to upstream burdens and outputs leaving the slaughterhouse. Preserve its output classes and applicability; do not reinterpret its European-average mass fractions, prices, economic shares, or allocation ratios as universal cattle-fat composition, yield, or market values. | `eu-pef-2021-2279` |
| `allocation_non_pef_slaughter` | studies not claiming PEF conformity | Report the shared slaughter boundary, full co-product set, direct-load subdivision, selected allocation or system-expansion method, data period, geography, masses, prices or physical driver, and sensitivity result. Do not silently copy PEF default factors into a different market or time period. | `eu-pef-2021-2279` |
| `allocation_disposition_separation` | edible, prescribed-treatment, feed, non-food, condemned, and pending streams | Keep masses and destinations separate. A condemned or waste stream must not be merged with a valuable co-product merely to change the allocated burden, and a food claim must follow the recorded judgement. | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `allocation_mass_balance` | every allocation model | Allocation changes burden shares, not physical mass. Preserve the unallocated process mass balance and require allocated fractions to reconcile to the declared shared burden without double counting. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_identity_mass` | `fat_separation_trimming` | incoming cattle fat-bearing stream and reference output | lot receipt, production, scale, and disposition records | cattle lot; establishment; date and time; tissue or process stream; anatomical description; eligibility class and decision evidence; gross mass; tare; net mass; temperature; physical state; included non-fat tissues; intended next use | calibrated scale record joined to slaughter or cutting lot and competent disposition record | kg and °C | each lot or batch | all lots represented by the dataset period | each establishment and line in scope | sum net mass only within identical declared product strata; report any aggregation across strata | scale calibration; lot trace; inspection or disposition record; operator sign-off |
| `cp_mass_balance_disposition` | `fat_separation_trimming` | product, co-product, waste, stock change, and unexplained balance | batch mass-balance and destination records | input mass; reference product mass; each co-product mass; each waste mass; retained stock; added or removed water or ice; destination; eligibility; measurement time | reconciled calibrated scale records and inventory change | kg | each batch, reconciled for each reporting period | full dataset period | each process line before site aggregation | calculate by stream and eligibility first; aggregate only after retaining strata | scale calibration; reconciliation report; destination ticket; exception log |
| `cp_utilities_emissions` | `fat_separation_trimming` | electricity, fuel, water, cleaning inputs, wastewater, wastes, and direct releases | meter, invoice, material issue, monitoring, and treatment records | meter start and end; invoice quantity; equipment or area; operating hours; allocation driver; water source; wastewater volume; measured parameter; waste mass; emission value; factor and source when calculated | direct meter preferred; otherwise invoice reconciliation and documented process-level allocation | flow-specific unit | meter interval or each production campaign; at least each dataset reporting period | representative operating period stated by the data producer | each included site; process-level where material | normalize after reconciling facility totals; retain shared allocation and uncertainty | meter calibration; invoices; laboratory report; factor citation; mass and water balance |
| `cp_temperature_conditioning` | `temperature_conditioning` | product mass and temperature, cooling energy, storage duty, refrigerant | conditioning lot, meter, logger, and maintenance records | input and output mass; timestamps; product temperature; storage duration; electricity or fuel; equipment; refrigerant make-up; recovered refrigerant; stock change; allocation driver | calibrated scale and temperature logger; submeter or equipment record; maintenance log | kg; °C; h; kWh or MJ; kg refrigerant | each lot for mass and temperature; meter interval for energy; each service event for refrigerant | complete conditioning and storage period represented | each cooling or freezing system in scope | allocate shared duty by documented mass-time or another justified physical driver; keep chilled and frozen strata separate | logger calibration; meter data; maintenance and recovery records; cold-chain deviation log |
| `cp_packaging_handoff` | `packing_dispatch` | packaging, net mass, tare, dispatch, and rejects | packaging issue, weighing, dispatch, and rejection records | package material; item count; item mass; reusable cycles; gross mass; tare; net mass; dispatch temperature; storage time; rejected mass and destination; handoff time and place | issue records and package specifications reconciled to calibrated gross and tare weights | kg; item; °C; h | each packaging specification and lot; each handoff | all dispatched lots represented | each packing and dispatch site | calculate packaging per net kg by material; do not include tare in product mass | supplier specification; weigh check; reuse log; dispatch and rejection records |
| `cp_transport_handoff` | `delivery_handoff` | freight service, refrigeration, loss, and receipt condition | shipment, carrier, energy, temperature, and receipt records | origin; destination; actual distance; mode; vehicle; net load; capacity; load factor; empty return; refrigeration energy or fuel; dispatch and receipt time and temperature; delivered mass; loss; handoff point | carrier document, route record, fuel or electricity record, and receiver proof | km; kg or t; tkm; kWh or fuel unit; °C | each shipment or representative route stratum | all deliveries represented by a delivered-handoff dataset | each route and transport mode | calculate tkm by shipment; aggregate by route and mode weighted by delivered mass | bill of lading; route evidence; fuel or energy record; temperature log; proof of delivery |
| `cp_shared_slaughter_allocation` | `fat_separation_trimming` | upstream cattle and slaughter co-product allocation | slaughter campaign output, direct-load, price, and method record | cattle live-weight basis; upstream dataset; each slaughter output class; mass; disposition; directly attributable load; shared burden; price at common production stage if used; physical driver; allocation factor; method; geography; period | reconcile slaughter output ledger and direct process records; apply the declared hierarchy or applicable PEF rule | kg; currency/kg; dimensionless factor; flow-specific units | each representative campaign and each material price period | same period as upstream slaughter dataset or justified alignment | each slaughter establishment and output point represented | calculate factors at the common co-product point; factors must cover the declared co-product set and reconcile to the shared burden | output ledger; price evidence; method version; calculation workbook; sensitivity result |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | all reference outputs | net product mass = gross loaded mass - verified packaging and equipment tare - separately measured ice or coolant not sold as product | gross mass; tare; excluded ice or coolant mass | kg net unrendered cattle fat |  |
| `calc_normalized_inventory` | every inventory row | normalized amount = attributable flow amount / net reference-product kg at the same handoff | attributable flow amount; net output mass | flow unit per kg reference product | `eu-pef-2021-2279` |
| `calc_mass_balance` | each foreground process | unexplained balance = total mass inputs + opening stock - total mass outputs - closing stock; added or removed water, ice, and packaging are explicit flows | stream-specific input, output, waste, stock, water, ice, and packaging masses | kg and percent of total measured input, reported without forced adjustment | `eu-fdm-bat-2019-2031` |
| `calc_transport_service` | `delivery_handoff` | tkm = net shipped mass in tonnes × actual one-way route km; empty return and refrigeration are separate model parameters | net shipped mass; distance; mode; empty return; refrigeration record | tkm and separate refrigeration inventory | `eu-pef-2021-2279` |
| `calc_shared_allocation` | shared cattle-production or slaughter burden | Apply direct subdivision first. If a shared factor is required, calculate it from the documented method and common-stage data; for a PEF-conformant cattle slaughter model use section 4.5.1.6 without converting its values into a product yield claim | shared burden; full co-product set; direct loads; method; physical or economic driver; PEF applicability | allocated burden by output plus reconciliation and sensitivity record | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all same-category inputs | Demonstrate cattle origin, unrendered state, stream identity, lot, eligibility or disposition, temperature state, packaging basis, handoff, geography, and period. Missing stream or disposition qualifiers make the dataset incomplete. | lot trace, product specification, inspection or disposition record, photographs or process declaration where useful |
| `dq_no_cross_stream_default` | yield, loss, utility, packaging, transport, and allocation values | Do not create a single default by pooling different animal species, anatomical streams, tissue conditions, eligibility classes, chilled and frozen routes, or rendered and unrendered products. Stratify or report the unresolved representativeness limitation. | retained strata, aggregation rationale, sensitivity or separate datasets |
| `dq_completeness` | included foreground processes | Reconcile all known product, co-product, material, water, energy, waste, wastewater, waste-gas, and direct elementary flows. Identify exclusions and avoid double counting with upstream supply or downstream treatment datasets. | process flow diagram, mass and water balances, meter and waste records, cut-off register |
| `dq_representativeness` | foreground and linked upstream data | State technological, geographical, temporal, and product-stream representativeness and precision. Align cattle-production, slaughter, separation, conditioning, and dispatch periods or document the mismatch. | dataset metadata, DQR or equivalent assessment, data-source dates, uncertainty disclosure |
| `dq_reasoned_estimates` | candidate-stage values lacking product-specific evidence | A temporary scenario value may be labelled `reasoned_estimate` only when its formula, input assumptions, tissue stream, eligibility class, route, geography, and uncertainty are explicit. It is not an allowed range or a category default, cannot support a comparative assertion, and must be replaced when the first representative site, lot, meter, supplier, route, or price records become available. No numeric reasoned-estimate range is prescribed by this PCR. | estimate worksheet, assumption owner and date, replacement trigger, validation finding kept open until replacement |
| `dq_source_limits` | use of external standards and guidance | Use CPC for category identity, CXC 58-2005 for meat-hygiene process and disposition context, CXS 211-1999 only to distinguish rendered named fats, PEF for LCA boundary and multifunctionality, and FDM BAT only for inventory and monitoring completeness. Do not promote source-specific legal thresholds or rendered-fat composition values into universal PCR defaults. | source-use matrix and reviewer check |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Require product flow UUID `f41d4291-946e-4a03-91f4-f55731e84062`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg net reference amount. |  |
| `validation_unrendered_boundary` | product and process list | Fail if rendering, melting for fat recovery, extraction, refining, or a rendered-fat output is included before the reference handoff or is presented as CPC 21512. | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `validation_cattle_and_stream` | identity and inventory | Require cattle-only origin and separately reported tissue or trimming stream, eligibility, physical state, and temperature state. Fail a generic default derived by merging other species, rendered fats, or materially different tissue streams. | `unsd-cpc-3-0-2025`; `codex-cxc-58-2005` |
| `validation_disposition` | edible and non-food claims | Require evidence of safe and suitable, prescribed-treatment, non-food, condemned, or pending disposition. Fail any food-use claim inferred solely from the flow title or from CXS 211-1999 rendered-fat descriptions. | `codex-cxc-58-2005`; `codex-cxs-211-1999` |
| `validation_mass_balance` | each included foreground process | Require measured input, product, co-product, waste, stock, water or ice change, and unexplained balance. Report material imbalance as a finding; do not correct it through allocation. | `eu-fdm-bat-2019-2031` |
| `validation_conditionals` | conditioning, packaging, storage, and delivery | When any conditional process is included, require its collection protocol fields and inventory. When excluded, require an explicit handoff and route statement that supports exclusion. | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validation_allocation` | shared cattle-production and slaughter burdens | Require direct-load subdivision, full co-product set, method hierarchy, factors, common-stage data, reconciliation, period, geography, and sensitivity. For a PEF claim, verify section 4.5.1.6 applicability and method separately. | `eu-pef-2021-2279` |
| `validation_inventory_completeness` | foreground data package | Require known inputs and outputs, including resource use, products, co-products, emissions, and wastes, plus disclosed exclusions. FDM BAT values must not be used as generic cattle-fat performance thresholds. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validation_estimate_replacement` | reasoned estimates | Flag every `reasoned_estimate` with its assumptions and replacement trigger. A final comparative or reviewed background dataset is inconclusive while a material estimate lacks representative foreground or reviewed external evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product data package for unrendered cattle fat and its process-level projection; may become a reviewed secondary_dataset or background_dataset after evidence and allocation review |
| downstream_use | LCA process or lifecyclemodel construction for an explicitly qualified cattle-fat stream at the declared pre-rendering handoff |
| allowed_use | Stream-specific cattle-fat production, supply-chain modelling, downstream rendering input, food or feed pathway modelling where eligibility evidence supports it, and route-specific chilled or frozen delivery scenarios |
| excluded_use | Rendered tallow or named animal-fat composition modelling; cross-species default; whole-animal or slaughterhouse average without the declared allocation model; nutritional or legal food-compliance claim; comparative assertion based on unresolved material estimates |
| required_metadata | canonical PCR id; CPC reference; all reference-flow qualifiers; cattle and lot origin; tissue stream; disposition; start and end gates; included processes; upstream datasets; co-product method; time; geography; technology; net and tare basis; storage and transport handoff; data owners; source and estimate status |
| required_quality_disclosure | data completeness; mass-balance result; direct versus shared loads; allocation factors and sensitivity; technological, geographical, temporal, and stream representativeness; UUID gaps; cut-offs; conditional-process exclusions; unresolved estimates and their replacement triggers |
| update_trigger | New or corrected Tiangong identities; change in CPC scope; revised relevant Codex or PEF rules; new product-stream evidence; changed eligibility regime; changed conditioning, packaging, handoff, or allocation method; representative foreground data replacing an estimate; material mass-balance or validation finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | standard | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0 Explanatory Notes, subclass 21512, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Exact cattle and unrendered category identity; exclusion of tallow, greaves fat, and marrow, bone, or foot oil. It supplies no product composition, yield, utility, emission, or allocation value. |
| `codex-cxc-58-2005` | standard | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005. https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf (retrieved 2026-08-11) | Dressing and separation context; edible and inedible parts; post-mortem judgement; handling, chilling, freezing, packaging, storage, transport, and temperature-control records. It is hygiene and process-control guidance, not an LCA factor source or a universal legal temperature threshold. |
| `codex-cxs-211-1999` | standard | Codex Alimentarius, Standard for Named Animal Fats, CXS 211-1999, amended through 2024. https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf (retrieved 2026-08-11) | Boundary contrast: premier jus and edible tallow are obtained by rendering cattle tissues. The standard applies to named animal fats presented for human consumption; its rendered-fat definitions, composition ranges, and quality factors are not unrendered-fat category specifications or LCA defaults. |
| `eu-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annex I sections 4.5 and 4.5.1, including cattle slaughterhouse allocation. http://data.europa.eu/eli/reco/2021/2279/2021-12-30 (retrieved 2026-08-11) | Functional-unit linkage, life-cycle inventory completeness, direct-load subdivision, multifunctionality hierarchy, cattle slaughterhouse co-product method, data quality, transport, and disclosure. PEF cattle default factors represent the prescribed PEF context and are not adopted here as universal composition, yield, price, or allocation defaults. |
| `eu-fdm-bat-2019-2031` | official_guidance | European Commission, Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, especially BAT 2 inventory and monitoring provisions. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32019D2031 (retrieved 2026-08-11) | Checklist for process-level water, energy, raw materials, wastewater, waste gas, residues, and monitoring records where applicable to included food-processing operations. It is not used to assert legal applicability or to transfer BAT-AELs or performance levels into this PCR. |
