---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.goat-fat-unrendered
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Goat fat, unrendered

## 1. Scope and Applicability

This PCR covers unrendered fatty tissue or unrendered fat raw material separated from goats after slaughter and/or cutting. The product remains recognizably animal tissue or a fatty raw material and has not undergone rendering, melting for fat recovery, refining, fractionation, hydrogenation, interesterification, or comparable conversion into a rendered fat or oil.

The default foreground starts with a declared lot of post-mortem-inspected goat carcass parts or cuts bearing fatty tissue at the separation or trimming gate. It covers separation and trimming, condition-dependent chilling or freezing, packaging, cold storage and dispatch, and transport only up to the declared contractual handover point. A foreground data package may start with already separated unrendered goat fat, but it shall then link a conforming upstream dataset and avoid recursively reproducing the same separation stage.

The PCR does not cover rendered animal fats in CPC 21521–21529, including tallow or other rendered goat fat; refined or chemically modified fats; fat from sheep, cattle, buffalo, pigs, poultry, fish, or mixed-species lots; or a whole slaughterhouse output with no distinct unrendered-goat-fat reference flow. Rendering and refining are downstream processes and are excluded from the default foreground even when the unrendered fat is destined for them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.goat-fat-unrendered |
| classification_refs | UNSD CPC 3.0: 21515, Goat fat, unrendered |
| covered_products | Separated or trimmed fat-bearing tissue from goats sold or transferred without rendering; edible-grade or technical-grade material when grade and disposition are declared; uncooled, chilled, or frozen lots when the actual state is declared |
| excluded_products | Rendered, melted, refined, fractionated, hydrogenated, interesterified, or re-esterified animal fats; tallow; marrow, bone or foot oils; mixed-species fat; sheep, cattle, buffalo, pig, poultry, fish, or other animal fat; whole carcasses or cuts not represented as a distinct fat output |
| representative_product | Net mass of goat fatty tissue separated after post-mortem inspection and trimming, transferred as an unrendered raw material at a declared temperature and handover gate |
| production_route | Post-mortem-inspected goat carcass part or cut → separation/trimming → condition-dependent chilling or freezing → condition-dependent packaging → storage/dispatch → declared handover; no rendering or refining |
| market_state | Unrendered fatty tissue or fat raw material; actual anatomical source, attached non-fat tissue, grade, uncooled/chilled/frozen state, packaging, temperature, storage duration, and handover point declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of goat fat as unrendered fatty tissue or unrendered fat raw material for further use |
| How much | 1 kg net mass excluding packaging, pallets, containers, ice, and other tare |
| How well | Goat-only material that has not been rendered or refined, with actual tissue source, attached non-fat tissue, grade, hygiene disposition, and cold-chain state declared |
| How long or cycle | One production and handover lot; any storage duration and delivery leg included before handover are declared |
| reference_flow_link | 1 kg net mass of conforming unrendered goat fat at the declared handover point |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | goat species identity; anatomical tissue source; degree of attached muscle and connective tissue and bone; edible or technical grade and disposition; post-mortem inspection status; unrendered treatment state; uncooled/chilled/frozen state; product temperature at handover; net-mass and tare method; packaging form; storage duration; dispatch origin and contractual handover point; included delivery leg if any |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent data-package fields. Missing qualifiers make the reference-flow definition incomplete. An unspecified “goat fat” description is not sufficient because tissue composition, hygiene disposition, and cold-chain state materially change the data-production boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference flow as 1 kg net unrendered goat fat. Convert source mass records to kg without changing the physical state represented. |
| `net_product_mass` | Packaged, iced, palletized, or containerized lots | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine product mass from verified net weighing or gross mass minus measured tare. Exclude packaging, containers, pallets, free ice, and transport equipment. |
| `treatment_state` | Product identity | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | A mass record is conforming only when the recorded material has not undergone rendering, melt recovery, refining, fractionation, or chemical modification. Do not relabel a rendered-fat mass as unrendered fat. |
| `cold_chain_state` | Chilling, freezing, storage, dispatch, and delivery | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured product temperature, state (uncooled/chilled/frozen), time stamp, and storage or transit duration. This PCR sets no universal temperature threshold; the applicable food-safety specification and actual control record govern. |
| `lot_mass_balance` | Separation/trimming and subsequent handling | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile input mass, unrendered-fat output, other co-products, waste, samples, drip or moisture loss, and inventory change for the same lot and gate. Disclose unexplained imbalance. |
| `transport_service` | Delivery included before the contractual handover | Mass-distance | t·km | Calculate tonne-kilometres from measured shipped product mass in tonnes and route-specific distance in kilometres; separately record refrigerated operation and return or repositioning assumptions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A traceable lot of post-mortem-inspected goat carcass parts or cuts bearing fat enters the separation/trimming gate; alternatively, already separated unrendered goat fat enters a later foreground step with a linked upstream dataset |
| starting_condition_role | Upstream product input to the foreground production of unrendered goat fat |
| product_classification_scope | Goat fat, unrendered; CPC 3.0 code 21515 is classification context, while anatomical tissue, grade, and cold-chain state remain mandatory foreground qualifiers |
| recursive_input_rule | When unrendered goat fat is received for further cooling, packing, storage, or delivery, record it once as a technosphere product input and link its upstream dataset; do not recreate separation burdens or treat the input as burden-free |
| upstream_dataset_requirement | Goat rearing, live-animal transport, slaughter, dressing, post-mortem inspection, and any shared cutting before the declared starting gate require traceable upstream datasets with species, geography, technology, co-product treatment, and allocation disclosed; sheep or cattle parameters shall not be silently substituted |
| disclosure | Declare anatomical source and actual tissue condition, attached muscle/connective tissue/bone, edible or technical disposition, inspection status, separation gate, chilling/freezing history, packaging, storage, dispatch origin, contractual handover, and whether transport is inside or outside the foreground |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_unrendered_identity` | Product and all foreground processes | Include only goat fatty tissue or fat raw material that remains unrendered. Rendering, melt recovery, refining, and rendered-fat production are outside the default foreground and shall not be reported as production steps for this reference flow. | `unsd-cpc-3-0-structure-2025`; `codex-cxs-211-1999` |
| `sb_actual_tissue_and_gate` | Starting condition and product identity | Identify the actual anatomical tissue source and attached non-fat material, and distinguish the post-mortem inspection/slaughter-dressing boundary from the later cutting or trimming boundary. A generic goat-fat label without these facts is incomplete. | `codex-cxc-58-2005` |
| `sb_cold_chain_and_handover` | Cooling, freezing, storage, dispatch, and delivery | Include the actual cold-chain processes controlled by the reporting operator through the declared handover. Record temperature-control and duration evidence; stop at the contractual handover unless an included delivery leg is explicitly declared. | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `sb_inventory_completeness` | Foreground resource and emission inventory | For each included process, inventory actual product inputs/outputs, water, energy, cleaning materials, packaging, waste water, wastes, direct emissions, refrigerant losses, and relevant transport. Apply the FDM BAT source only as a completeness and monitoring prompt, not as a legal applicability decision, emission limit, or performance benchmark. | `eu-fdm-bat-2019-2031` |
| `sb_exclusions_disclosed` | Dataset scope | Document and justify excluded life-cycle stages and processes, including upstream goat production, any shared slaughter process outside the starting gate, downstream rendering/refining, post-handover transport, use, and end of life. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fat_separation_and_trimming` | Goat fat separation and trimming | `required` | Always required unless the foreground starts with already separated unrendered goat fat and links a conforming upstream dataset | Establish the distinct unrendered-fat output and the co-product allocation gate | 1 kg net unrendered goat fat output |
| `cold_conditioning` | Chilling or freezing | `conditional` | Required when the declared product is chilled or frozen, or when temperature-controlled holding occurs before handover | Establish the actual cold-chain state without rendering the tissue | 1 kg conditioned unrendered goat fat output |
| `packaging` | Product packaging | `conditional` | Required when packaging, liners, containers, ice, or reusable transport items cross or support the foreground boundary | Protect and identify the product lot while keeping product mass separate from tare | 1 kg net packed product |
| `cold_storage_and_dispatch` | Cold storage and dispatch | `required` | Required for chilled or frozen market states; for immediate uncooled transfer, retain the dispatch and handover records and report zero storage duration | Maintain lot identity and declare the dispatch gate | 1 kg net product dispatched |
| `outbound_transport_to_handover` | Outbound transport to declared handover | `conditional` | Include only when seller-controlled delivery or another transport leg is inside the declared foreground | Carry the product to the contractual handover without extending the boundary beyond it | t·km and 1 kg net product handed over |

### Process: Goat fat separation and trimming (`fat_separation_and_trimming`)

#### Inputs

##### Product flows

###### Post-mortem-inspected goat carcass parts or cuts bearing fat (`goat_carcass_parts_input`)

Record the actual goat-only tissue entering the separation gate and link the upstream slaughter/cutting dataset. Do not substitute a sheep, cattle, or mixed-species input.

- Selected flow: Goat carcass parts or cuts bearing fatty tissue
- Flow property / unit: Mass / kg
- Amount rule: Measured net input mass by traceable lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unrendered goat fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tissue_lot_and_mass`
- Sources: `codex-cxc-58-2005`

###### Separation and sanitation electricity (`separation_electricity`)

Record metered or allocated electricity for cutting, trimming, ventilation, cleaning, and other operations within this process gate.

- Selected flow: Electricity supplied to separation and sanitation operations
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or a documented meter-based allocation to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unrendered goat fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources_and_emissions`
- Sources: `eu-fdm-bat-2019-2031`

###### Water and cleaning materials (`separation_water_cleaning_inputs`)

Record potable/process water and cleaning or sanitation products that cross the process boundary. Keep water and each material as separate dataset exchanges when their supplied flows differ.

- Selected flow: Water and cleaning materials supplied to the separation area
- Flow property / unit: Mass or volume / kg or m3 as measured
- Amount rule: Meter, batch, issue, or purchase records attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unrendered goat fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources_and_emissions`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unrendered goat fat at the separation gate (`unrendered_goat_fat_separated`)

This is the distinct fat-bearing tissue output before any rendering. Record anatomical source, attached non-fat tissue, grade, inspection disposition, and measured state.

- Selected flow: Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- Flow property / unit: Mass / kg
- Amount rule: Verified net mass of the lot leaving separation/trimming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per separation lot and normalized to 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_output_state`
- Sources: `unsd-cpc-3-0-structure-2025`; `codex-cxc-58-2005`

###### Other saleable or usable slaughter/cutting outputs (`other_coproducts`)

Record meat, edible offal, bone, hide/skin, or other outputs separately when they share burdens with fat separation. Their actual disposition determines whether they are co-products, residuals, or wastes.

- Selected flow: Facility-specific co-products from the same goat lot
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass and documented destination by output category
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per separation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_allocation`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Condemned, discarded, or non-product tissue (`condemned_discarded_tissue`)

Record material rejected or directed to waste management separately from saleable unrendered fat and other co-products, together with disposition and reason.

- Selected flow: Condemned or discarded goat tissue
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per separation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_allocation`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Separation and sanitation waste water (`separation_wastewater`)

Record waste-water quantity and the monitored parameters needed by the applicable facility programme. Do not infer pollutant concentrations or legal limits from this PCR.

- Selected flow: Waste water from separation and sanitation
- Flow property / unit: Volume / m3
- Amount rule: Metered, balanced, or otherwise documented discharge attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unrendered goat fat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources_and_emissions`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

### Process: Chilling or freezing (`cold_conditioning`)

#### Inputs

##### Product flows

###### Unrendered goat fat entering cold conditioning (`fat_to_cold_conditioning`)

Maintain the same lot identity and record the pre-conditioning temperature and state.

- Selected flow: Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass entering chilling or freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_energy_and_state`
- Sources: `codex-cxc-58-2005`

###### Refrigeration electricity (`cold_conditioning_electricity`)

Record actual electricity for chilling, freezing, fans, pumps, and associated controlled holding within the process gate.

- Selected flow: Electricity supplied to cold conditioning
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or a documented meter-based allocation for the lot and operating period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned unrendered goat fat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_energy_and_state`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### Refrigerant make-up (`refrigerant_makeup`)

Record refrigerant additions attributable to the reporting period and allocate them using documented equipment or service records.

- Selected flow: Facility-specific refrigerant make-up
- Flow property / unit: Mass / kg
- Amount rule: Service-record or inventory-based refrigerant addition attributable to included equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reporting-period output and normalized to 1 kg conditioned product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled or frozen unrendered goat fat (`conditioned_unrendered_goat_fat`)

Record net mass, measured temperature, state, start/end time, and any drip or inventory change. Cooling or freezing does not convert the tissue into rendered fat.

- Selected flow: Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- Flow property / unit: Mass / kg
- Amount rule: Verified net output mass with time-stamped temperature and state record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning lot and normalized to 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_energy_and_state`
- Sources: `codex-cxc-58-2005`

##### Waste flows

###### Drip, purge, or cold-conditioning loss (`cold_conditioning_loss`)

Record actual removed material or unexplained mass loss; do not apply a sheep, cattle, or generic meat default.

- Selected flow: Drip, purge, or discarded material from cold conditioning
- Flow property / unit: Mass / kg
- Amount rule: Measured collected mass or mass-balance difference, with the method disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_chain_energy_and_state`
- Sources:

##### Elementary flows

###### Refrigerant emitted to air (`refrigerant_emission_to_air`)

Record only a facility-specific refrigerant loss calculated from verified service and inventory records; identify the actual substance in the produced dataset.

- Selected flow: Facility-specific refrigerant emission to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance allocated to included equipment and reporting-period output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reporting-period output and normalized to 1 kg conditioned product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Product packaging (`packaging`)

#### Inputs

##### Product flows

###### Unrendered goat fat entering packaging (`fat_to_packaging`)

Maintain lot identity and actual cold-chain state through packaging.

- Selected flow: Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- Flow property / unit: Mass / kg
- Amount rule: Measured net product mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_tare`
- Sources:

###### Primary, secondary, and transport packaging (`packaging_materials`)

Record each material, liner, absorbent, label, container, pallet, or ice input separately with its mass and reuse status. Packaging is not part of reference product mass.

- Selected flow: Facility-specific packaging materials and reusable transport items
- Flow property / unit: Mass or count / kg or item with mass conversion
- Amount rule: Measured or purchasing-record quantity by material and lot; count records require documented item mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_tare`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged unrendered goat fat (`packaged_unrendered_goat_fat`)

Report net fat mass separately from tare and preserve the unrendered identity and state qualifiers.

- Selected flow: Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- Flow property / unit: Mass / kg
- Amount rule: Gross packaged mass minus measured packaging, container, pallet, and free-ice tare
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaged lot and normalized to 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_tare`
- Sources:

##### Waste flows

###### Packaging scrap and rejected packaging (`packaging_waste`)

Record actual packaging waste by material and destination.

- Selected flow: Facility-specific packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured or stock-balance quantity by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_tare`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

### Process: Cold storage and dispatch (`cold_storage_and_dispatch`)

#### Inputs

##### Product flows

###### Unrendered goat fat received into storage or dispatch (`fat_to_storage_dispatch`)

Record received net mass, state, temperature, time, and packaging. Immediate transfer shall have a zero-duration storage record rather than an assumed cold-storage burden.

- Selected flow: Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass received into the dispatch gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per dispatch lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_handover`
- Sources: `codex-cxc-58-2005`

###### Storage and dispatch electricity (`storage_dispatch_electricity`)

Record actual energy for refrigerated storage, fans, handling, and dispatch for the declared holding period.

- Selected flow: Electricity supplied to storage and dispatch
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity allocated by a documented time, volume, mass, or equipment-use driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net product dispatched
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch_handover`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unrendered goat fat at the dispatch handover (`reference_product_at_handover`)

This output realizes the reference flow when the contractual handover is the dispatch gate. Record net mass, temperature, state, packaging, dispatch time, and receiving party or next dataset link.

- Selected flow: Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- Flow property / unit: Mass / kg
- Amount rule: Verified net mass handed over at dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_handover`
- Sources: `codex-cxc-58-2005`

##### Waste flows

###### Rejected or spoiled stored product (`storage_rejects`)

Record rejected mass, reason, temperature history, and destination separately from saleable product.

- Selected flow: Rejected or spoiled unrendered goat fat
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected net mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per dispatch lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_handover`
- Sources: `codex-cxc-58-2005`

##### Elementary flows

###### Cold-storage refrigerant emitted to air (`storage_refrigerant_emission_to_air`)

Record only a site-specific refrigerant loss calculated from verified service and inventory records for the included storage equipment; identify the actual substance in the produced dataset.

- Selected flow: Facility-specific cold-storage refrigerant emission to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance allocated to included cold-storage equipment and reporting-period output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reporting-period dispatched output and normalized to 1 kg product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_records`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Outbound transport to declared handover (`outbound_transport_to_handover`)

#### Inputs

##### Product flows

###### Dispatched unrendered goat fat (`fat_to_outbound_transport`)

Include this input only when transport is inside the foreground and preserve lot, packaging, temperature, and state records.

- Selected flow: Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- Flow property / unit: Mass / kg
- Amount rule: Verified net shipped mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per delivery lot
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport_and_handover`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### Refrigerated transport service (`refrigerated_transport_service`)

Use the actual route, vehicle or carrier service, payload, refrigeration state, and included return/repositioning treatment. If fuel is modelled directly, do not also include an overlapping transport-service dataset.

- Selected flow: Route-specific refrigerated transport service
- Flow property / unit: Transport service / t·km
- Amount rule: Net shipped mass in tonnes multiplied by route-specific distance in kilometres
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net product delivered to the declared handover
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_and_handover`
- Sources: `codex-cxc-58-2005`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unrendered goat fat delivered at the contractual handover (`delivered_reference_product`)

When delivery is included, this output realizes the reference flow at the destination handover. Do not extend the foreground to later rendering, refining, use, or end of life.

- Selected flow: Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- Flow property / unit: Mass / kg
- Amount rule: Verified net mass accepted at the declared destination handover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport_and_handover`
- Sources: `codex-cxc-58-2005`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_define_outputs` | Slaughter, cutting, separation, and trimming gates | Identify unrendered goat fat, meat, edible offal, bone, hide/skin, other usable outputs, condemned material, and wastes as distinct outputs with mass and destination. Do not merge actual tissue states or dispositions into one generic co-product. | `eu-pef-2021-2279`; `codex-cxc-58-2005` |
| `alloc_direct_first` | Directly attributable foreground operations | Subdivide and directly assign separable trimming, chilling/freezing, packaging, storage, and transport inputs and emissions to the output that causes them before allocating any shared residual. | `eu-pef-2021-2279` |
| `alloc_shared_residual` | Shared slaughter or cutting burdens | When subdivision is not possible, document the selected allocation relationship, factor inputs, prices or physical drivers, geography, time period, and sensitivity. A PEF-conformant study shall apply the applicable PEF slaughterhouse rules; other studies shall justify their chosen method and shall not silently copy sheep or cattle factors into a generic goat-fat dataset. | `eu-pef-2021-2279` |
| `alloc_waste_or_product` | Outputs with uncertain status | Treat an output as waste only when its regulatory/contractual disposition and destination support that status. A saleable or usable unrendered-fat output shall not be burden-free merely because it is called a by-product. | `eu-pef-2021-2279` |
| `alloc_no_rendering_merge` | Downstream rendering or refining | Keep downstream rendering/refining outside this product system by default. If a wider study includes it, represent unrendered goat fat as the input to a separate downstream process and prevent double counting of shared slaughter or separation burdens. | `unsd-cpc-3-0-structure-2025`; `codex-cxs-211-1999`; `eu-pef-2021-2279` |
| `alloc_reconciliation` | Allocation result | Reconcile allocated burdens across all co-products and wastes to the complete shared-process inventory and disclose unallocated residuals, zero-burden outputs, and sensitivity to price or physical-driver changes. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tissue_lot_and_mass` | `fat_separation_and_trimming` | Goat carcass-part/cut input and tissue identity | Lot receipt, cutting, and inspection records | lot_id; goat species confirmation; animal/lot origin; post-mortem inspection and disposition; anatomical source; attached muscle/connective tissue/bone; gross_mass; tare_mass; net_mass; timestamp | Link scale tickets and inspection/cutting records to one lot; photograph or coded tissue description where available | kg | Every lot | Complete reporting period with no omitted production days | Every included slaughter or cutting site | Sum verified net input mass by lot; retain site and tissue category before any aggregation | Scale calibration; inspection/disposition record; lot genealogy; species declaration; completeness reconciliation |
| `cp_fat_output_state` | `fat_separation_and_trimming` | Unrendered-fat output mass and state | Lot output and product specification records | lot_id; output_mass; tare; anatomical_source; attached_nonfat_tissue; grade; unrendered_confirmation; product_temperature; state; timestamp | Verified net weighing and lot-linked product-state observation | kg and °C | Every lot and handoff | Complete reporting period | Every included production site | Sum only conforming goat-only unrendered-fat outputs; keep edible/technical grade and state separate | Scale calibration; product specification; time-stamped temperature; lot traceability |
| `cp_resources_and_emissions` | `fat_separation_and_trimming` | Water, energy, cleaning materials, waste water, wastes, and direct emissions | Meter, batch, stock, service, and monitoring records | meter_id; start/end readings; material_id; quantity; process_area; wastewater_volume; monitored_parameter; waste_mass; destination; reporting_period | Prefer submetering; otherwise use a documented causal allocation from facility totals and retain raw totals | Native meter or purchase unit, converted explicitly | Continuous or each batch/shift; aggregate monthly | At least one representative reporting year or all available production campaign days | Every included site and utility system | Sum by process and period, allocate only shared residuals with disclosed drivers, normalize to conforming output | Meter calibration; invoices; stock reconciliation; monitoring reports; production-day coverage |
| `cp_coproduct_waste_allocation` | `fat_separation_and_trimming` | Co-product and waste mass, disposition, and allocation inputs | Output, sales, transfer, waste, and price records | lot_id; output_category; mass; disposition; destination; revenue_or_price; currency; price_period; direct_resource_link; waste_status_basis | Link each output to mass and disposition; collect contemporaneous values only when allocation requires them | kg and declared currency/kg | Every lot; price series at the selected allocation period | Same period as shared-process inventory | Every included site and destination route | Direct attribution first; allocate only shared residual; reconcile factors to 100% of allocable burden | Scale records; contracts/invoices; waste transfer records; allocation workbook and sensitivity check |
| `cp_cold_chain_energy_and_state` | `cold_conditioning` | Chilling/freezing energy, time, temperature, and product mass | Meter, batch, equipment, and temperature records | lot_id; equipment_id; entry/exit_mass; entry/exit_temperature; state; start/end_time; electricity_reading; defrost_or_idle_allocation | Time-stamped product/room measurements plus submetering or documented equipment allocation | kg, °C, h, kWh | Every lot; energy at meter interval | Complete reporting period including start-up, idle, and defrost operation when attributable | Every included cold-conditioning system | Aggregate by equipment and lot, reconcile mass change, normalize to conditioned conforming output | Calibrated temperature devices; meter calibration; equipment log; alarm/deviation record |
| `cp_refrigerant_records` | `cold_conditioning` | Refrigerant make-up and emissions | Refrigerant inventory and service records | refrigerant_identity; equipment_id; opening_stock; purchases; additions; recoveries; closing_stock; service_date; leak_event | Annual or service-period mass balance for included equipment | kg refrigerant | Each service/leak event; annual reconciliation | Same reporting period as product output | Every included refrigeration system | Calculate loss by substance and allocate using documented equipment service and output driver | Certified service record; purchase/recovery evidence; inventory reconciliation |
| `cp_packaging_and_tare` | `packaging` | Packaging inputs, reuse, tare, and waste | Bill-of-materials, count, weighing, stock, and waste records | material_id; item_count; unit_mass; batch_mass; reuse_cycles; gross_pack_mass; tare_mass; free_ice_mass; waste_mass; destination | Weigh representative items and reconcile issued/returned stock to packaged lots | kg and item | Each packaging configuration and lot | Complete reporting period | Every included packing site | Sum by material; amortize reusable items over verified uses; keep all tare outside net product mass | Calibrated scale; supplier specification; stock reconciliation; reuse log; waste transfer record |
| `cp_storage_dispatch_handover` | `cold_storage_and_dispatch` | Storage energy, duration, dispatch mass, state, and rejects | Warehouse, meter, inventory, and dispatch records | lot_id; receipt/dispatch_mass; receipt/dispatch_temperature; state; receipt/dispatch_time; storage_zone; electricity; rejects; reject_reason; handover_party | Lot-linked warehouse management and meter records; zero-duration record for immediate transfer | kg, °C, h, kWh | Every receipt and dispatch; energy at meter interval | Complete reporting period | Every included store and dispatch gate | Allocate shared energy by documented causal driver; retain lot-level duration and state; reconcile opening/closing inventory | Meter calibration; warehouse log; dispatch acceptance; temperature record; inventory reconciliation |
| `cp_storage_refrigerant_records` | `cold_storage_and_dispatch` | Cold-storage refrigerant emissions | Refrigerant inventory and service records | refrigerant_identity; equipment_id; opening_stock; purchases; additions; recoveries; closing_stock; transfers; service_date; leak_event | Reporting-period mass balance for included cold-storage equipment | kg refrigerant | Each service/leak event; annual or campaign reconciliation | Same reporting period as dispatched product | Every included cold-storage refrigeration system | Calculate loss by substance and allocate only to included storage equipment using a documented output or equipment-use driver | Certified service record; purchase/recovery evidence; inventory reconciliation |
| `cp_transport_and_handover` | `outbound_transport_to_handover` | Included delivery service and acceptance at handover | Shipment, route, carrier, fuel/service, temperature, and acceptance records | shipment_id; lot_id; net_mass; origin; destination; contractual_handover; route_distance; vehicle_type; payload; empty_return; refrigeration; departure/arrival_time; temperatures; accepted_mass | Carrier record or telematics/route evidence linked to shipment and receiving acceptance | kg, km, t·km, °C, h | Every included shipment | Complete reporting period | Every included route and carrier mode | Calculate t·km from net tonnes × route km; treat return/repositioning and refrigeration consistently; normalize to accepted mass | Weighbridge/dispatch record; route evidence; carrier invoice; temperature log; signed acceptance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_mass` | All product and material lots | net_mass_kg = gross_mass_kg − measured_tare_kg − free_ice_kg; do not subtract attached goat tissue that is part of the declared product condition | gross_mass_kg; measured_tare_kg; free_ice_kg; tissue_condition | net_mass_kg |  |
| `calc_reference_normalization` | Every inventory exchange | normalized_exchange = exchange_quantity / conforming_reference_output_kg; use the output mass at the same declared gate and period | exchange_quantity; conforming_reference_output_kg | exchange per 1 kg unrendered goat fat | `eu-pef-2021-2279` |
| `calc_lot_mass_balance` | Separation, conditioning, packaging, storage, and delivery | input_mass + opening_inventory = reference_product + other_coproducts + wastes + samples + closing_inventory + measured_or_disclosed_loss; report the residual and its percentage of input | input/output masses; opening/closing inventory; samples; measured losses | lot mass-balance residual and completeness flag |  |
| `calc_refrigerant_loss` | Included refrigeration equipment | loss_by_substance = opening_stock + purchases − additions_to_other_systems − recovered − closing_stock, adjusted for documented transfers; allocate only to included equipment and output | stock, purchase, addition, recovery, transfer, and equipment-output records | kg refrigerant emitted by substance per 1 kg product |  |
| `calc_transport_service` | Included outbound delivery | transport_service_tkm = net_delivered_mass_kg / 1000 × route_distance_km; document treatment of empty return/repositioning and refrigeration | net_delivered_mass_kg; route_distance_km; vehicle and return records | t·km per delivered lot and per 1 kg accepted product | `eu-pef-2021-2279` |
| `calc_shared_allocation` | Shared slaughter or cutting residual | Apply the documented study-specific or applicable PEF allocation factors only after direct attribution; factor inputs shall match goat outputs, time, geography, tissue/disposition categories, and system gate, and allocated shares shall reconcile to the allocable total | shared residual inventory; output categories; mass/physical drivers or economic values; allocation factors | allocated burden by output plus reconciliation and sensitivity | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_and_tissue_identity` | All lots | Demonstrate goat-only species identity and declare actual anatomical tissue source and attached muscle/connective tissue/bone; mixed or unknown species lots are non-conforming. | Supplier/lot declaration, slaughter/cutting record, inspection record, and tissue description |
| `dq_unrendered_state` | Reference product | Demonstrate that no rendering, melt recovery, refining, fractionation, or chemical modification occurred before the declared handover. | Process flow, equipment/process records, product specification, and operator attestation |
| `dq_lot_traceability` | All foreground processes | Maintain one lot genealogy from input tissue through separation, conditioning, packaging, storage, dispatch, and included delivery. | Lot IDs, mass records, timestamps, warehouse/dispatch records, and acceptance record |
| `dq_cold_chain` | Chilled or frozen product | Retain measured temperature/state and duration records at conditioning exit, storage, dispatch, and included delivery handover; disclose deviations and their disposition. | Calibrated temperature logs, alarms, deviation records, and acceptance criteria |
| `dq_mass_and_allocation` | Multi-output gates | Reconcile lot mass and shared-burden allocation; disclose residuals, output status, zero-burden treatment, factor period, and sensitivity. | Mass-balance worksheet, allocation workbook, sales/disposition evidence, and reviewer check |
| `dq_resource_completeness` | Included foreground | Cover all production days/lots in the reporting period and reconcile water, energy, cleaning materials, packaging, waste water, wastes, refrigerants, and transport to facility totals or explain exclusions. | Meter/invoice/stock reconciliation and coverage matrix |
| `dq_representativeness` | Published dataset | State geography, technology, site count, reporting period, tissue/grade mix, cold-chain states, packaging configurations, and included handover routes; do not claim representativeness beyond them. | Dataset metadata and sampling/aggregation record |
| `dq_no_cross_species_defaults` | Quantitative values and ranges | Do not use sheep or cattle yields, tissue composition, energy, water, loss, or allocation parameters as undocumented goat defaults. Any proxy requires explicit source, applicability justification, uncertainty, and replacement trigger. | Source review, proxy justification, sensitivity analysis, and review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | The product-flow UUID shall be `40180a73-975d-407f-aa3e-63588b6bf076`, reference property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, reference unit kg, and reference amount 1 kg net product. |  |
| `val_product_scope` | Product identity | Reject a data package when species is not goat or is mixed/unknown, anatomical tissue and attached non-fat material are undisclosed, or rendering/refining occurred before handover. | `unsd-cpc-3-0-structure-2025`; `codex-cxs-211-1999` |
| `val_boundary_and_handover` | System boundary | Require the separation/start gate, post-mortem inspection/disposition, included cooling/freezing, packaging, storage, dispatch, contractual handover, and transport inclusion/exclusion to be explicit. | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `val_temperature_state` | Chilled or frozen lots | Require time-stamped temperature/state and storage/transit duration records at relevant gates. This validation checks record completeness against the declared specification and does not invent a universal temperature threshold. | `codex-cxc-58-2005` |
| `val_mass_balance` | Each lot and reporting period | Require mass-balance reconciliation across product, co-products, waste, samples, drip/loss, and inventory change; flag unexplained residuals rather than forcing them into the reference product. |  |
| `val_allocation` | Shared multi-output processes | Require direct attribution before allocation, complete output/disposition records, disclosed method/factors/period/geography, reconciliation, and sensitivity. Reject silent use of sheep or cattle parameters as generic goat-fat defaults. | `eu-pef-2021-2279` |
| `val_inventory_completeness` | Foreground inventory | Require coverage or an explicit exclusion for water, energy, cleaning materials, packaging, waste water, wastes, refrigerants/direct emissions, storage, and included transport. FDM BAT values or legal thresholds are not conformance criteria for this PCR. | `eu-fdm-bat-2019-2031` |
| `val_no_double_count` | Linked upstream and downstream datasets | When separated fat enters a later foreground process, require one upstream separation dataset and prevent recreation of its burdens; when rendering is modelled downstream, require a separate rendered-fat process and prevent merging it into this reference product. | `eu-pef-2021-2279`; `codex-cxs-211-1999` |
| `val_quantitative_evidence` | Defaults, ranges, and proxies | Require each non-foreground quantitative constraint to have an applicable source and declared tissue/state/technology/geography basis. No goat-specific default range is supplied by this candidate; site records take precedence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a distinct intermediate product: unrendered goat fat |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` for processes consuming unrendered goat fat, including a separately modelled rendering process |
| allowed_use | Use for goat-only unrendered fatty tissue matching the declared anatomical source, attached tissue, grade, cold-chain state, geography, technology, packaging, and handover gate |
| excluded_use | Rendered or refined fat; tallow; other or mixed animal species; unspecified fat tissue; datasets lacking post-mortem disposition, cold-chain state, co-product allocation, or handover boundary; comparative claims beyond demonstrated representativeness |
| required_metadata | PCR id; reference-flow UUID/property/unit group; CPC context; species; anatomical source; attached tissue; edible/technical grade; inspection/disposition; unrendered confirmation; site/geography; technology; reporting period; lot coverage; chilling/freezing state; packaging; storage; dispatch and handover; included transport; allocation method; upstream/downstream dataset links |
| required_quality_disclosure | Foreground versus secondary-data shares; meter and mass coverage; exclusions; mass-balance residuals; temperature deviations; co-product/waste dispositions; allocation factors and sensitivity; proxies and uncertainty; absence of goat-specific quantitative defaults |
| update_trigger | New reviewed goat-fat-specific evidence; change in product-flow/property/unit identity; new rendering/unrendered classification guidance; changed tissue/grade scope; materially changed separation, cold-chain, packaging, storage, transport, or allocation practice; improved foreground records that replace a proxy |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, structure only, 30 June 2025, official CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Official identity for CPC 21515 “Goat fat, unrendered” and separation from CPC 2152 rendered-animal-fat classes. Limitation: classification identity only; it supplies no LCA process quantities, tissue composition, temperature, yield, or allocation factor. |
| `codex-cxc-58-2005` | Standard (`standard`) | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005: https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B58-2005%2FCXC_058e.pdf (retrieved 2026-08-11) | Slaughter/cutting hygiene and inspection context, documented process control, separation/cross-contamination control, chilling/freezing, storage, and transport handover records. Limitation: food-hygiene/process-control context only; it is not a goat-fat LCA dataset and supplies no category-level inventory defaults. |
| `codex-cxs-211-1999` | Standard (`standard`) | Codex Alimentarius, Standard for Named Animal Fats, CXS 211-1999, amended through 2024: https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B211-1999%2FCXS_211e.pdf (retrieved 2026-08-11) | Confirms that named products such as rendered lard, premier jus, and edible tallow are defined through rendering and therefore are not this unrendered category. Limitation: its composition, quality, additive, and analytical provisions concern the named fats within its scope and are not extrapolated to unrendered goat fat or used as LCA values. |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method: https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | Declared-unit/reference-flow logic for an intermediate product, system-boundary and exclusion disclosure, co-product/waste identification, direct subdivision before residual allocation, transport data, and data-quality framing. Limitation: this PCR does not copy sheep/cattle composition or operating parameters; any PEF-specific slaughterhouse allocation is applied only when the study claims that scope and meets the method’s applicability conditions. |
| `eu-fdm-bat-2019-2031` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries: https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng (retrieved 2026-08-11) | Completeness prompt for inventories of water, energy, raw materials, waste-water/waste-gas streams, wastes, and relevant process monitoring. Limitation: used only where applicable for process-inventory and monitoring completeness; legal scope thresholds, BAT-AELs, and performance values are not generalized or used as PCR defaults. |
