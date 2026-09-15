---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.telephones-for-cellular-networks-or-for-other-wireless-networks
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Telephones for cellular networks or for other wireless networks

## 1. Scope and Applicability

This PCR applies to foreground manufacturing data packages for new, complete telephones whose product identity is a finished terminal for two-way voice communication over a cellular, satellite, or other wireless network. It covers smartphones, non-smart mobile phones, satellite telephones, and other complete wireless-network telephone terminals when they are delivered as finished, configured, and functionally tested products. It is deliberately technology-neutral and must represent the declared production mix rather than a named model.

The default reporting gate is the manufacturing-site dispatch gate. The reference product is the net finished telephone, including an installed battery and other integral parts when supplied as part of the device. Sales packaging, separately bundled accessories, external chargers, and cables are inventoried and disclosed separately and are not included in reference-product mass.

This PCR excludes line telephone sets with cordless handsets; wired telephone and intercom apparatus; base stations, routers, switches, gateways, modems, and other network equipment; parts, housings, displays, printed circuit board assemblies, batteries, or other subassemblies sold separately; tablets, cameras, wearables, and peripherals that are not complete telephones; named-model proxies; repair or refurbishment routes; network operation; use; and end-of-life treatment. A study that extends beyond the manufacturing gate must add separately governed use and end-of-life scenarios and must not present this manufacturing data package as a complete cradle-to-grave result.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.telephones-for-cellular-networks-or-for-other-wireless-networks |
| classification_refs | CPC 3.0:47222 (exact) |
| covered_products | New complete smartphones, non-smart mobile phones, satellite telephones, and other complete finished telephone terminals designed for cellular or other wireless networks |
| excluded_products | Cordless line telephones; wired telephone and intercom apparatus; network infrastructure and data-communications equipment; separately sold handset parts and subassemblies; tablets, wearables, cameras, and peripherals without the covered telephone function; repaired or refurbished devices |
| representative_product | Mass-weighted manufacturing mix of new complete finished wireless-network telephones; no named device, component, material family, or network apparatus is representative of the category |
| production_route | Purchased materials, parts, and subassemblies receiving and kitting; PCBA and module assembly where controlled; final mechanical and electrical assembly; firmware or operating-system loading and configuration; functional and radio testing; packaging, warehousing, and dispatch |
| market_state | New, finished, manufactured product; production mix, at plant; net device mass with packaging and separately bundled accessories disclosed outside the reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery at the manufacturing-site dispatch gate of complete finished telephones capable of two-way voice communication over a cellular, satellite, or other wireless network |
| How much | 1 kg net finished telephone product |
| How well | New, fully assembled, configured, and functionally tested; installed battery and integral parts included; sales packaging and separately bundled accessories excluded from net product mass and reported separately |
| How long or cycle | One declared production batch or reporting period, normalized by its total net mass of conforming finished telephone output; device count and product-mix weighting declared |
| reference_flow_link | `finished_wireless_telephone_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Telephones for cellular networks or for other wireless networks `1fdb2343-534a-4818-814d-5dc99b291ac1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | device family and model-mix definition; cellular, satellite, or other supported wireless-network technology; manufacturing site and geography; reporting period or batch; new-manufacture route; finished and tested gate; installed-battery inclusion; net device mass method; device count per kg; included integral parts; excluded or included sales packaging; separately bundled accessories and external charger or cable; owned and outsourced production steps |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or an equivalent package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | conforming finished telephone output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net good-product mass after final functional testing with calibrated scales. Include installed batteries and integral parts; exclude sales packaging and separately bundled accessories. |
| `count_to_mass` | device-count production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass using verified net masses for each model or homogeneous product family, then mass-weight the declared production mix. Retain counts, sampled masses, model shares, and the calculation. |
| `input_and_waste_mass` | purchased parts, consumables, rejects, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert invoices, issue records, counts, and container quantities to kg with traceable item-specific factors; do not infer generic component masses from a named telephone model. |

## 5. System Boundary

The foreground collection boundary begins with purchased materials, parts, and subassemblies received at the manufacturing site and ends with conforming finished telephone products packaged as declared and released for dispatch. Supplier production and inbound transport remain visible upstream product inputs. Manufacturing-site electricity, fuels, water, consumables, direct releases, rejects, rework, packaging, and shared support burdens are included when they serve the declared production.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, parts, and subassemblies received at the manufacturing site with supplier, lot, quantity, mass, and acceptance status identified |
| starting_condition_role | Foreground collection boundary for manufacturer-controlled receiving, assembly, configuration, testing, packaging, warehousing, and dispatch; upstream production remains linked through supplier or representative datasets |
| product_classification_scope | Complete finished telephones within CPC 3.0:47222; not components, fixed cordless line phones, wired apparatus, or network equipment |
| recursive_input_rule | A complete CPC 47222 telephone received as an input remains a separately quantified product input with its upstream dataset and declared purpose; it shall not be decomposed into invented raw-material quantities or silently merged with the reference output |
| upstream_dataset_requirement | Use supplier-specific or technically representative upstream datasets for applicable battery cells and packs, PCBAs, integrated circuits, displays, electromechanical parts, enclosures, cables and connectors, cameras and audio modules, other BOM items, packaging materials, and inbound transport; disclose substitutions and missing supplier coverage |
| disclosure | Declare product mix, device count, net mass, installed battery and integral-part treatment, packaging and accessory treatment, owned and outsourced steps, site, geography, period, yield, rework, allocation, cut-offs, upstream dataset choices, and any boundary extension |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `include_applicable_parts_and_assembly` | product composition and production stage | Define the applicable part types and their amounts from the actual BOM. Include or link applicable part production and include PCBA or module assembly, final assembly, warehousing, and packaging; an outsourced step requires an upstream dataset rather than omission. | `etsi-es-203-199-v1-4-1-2025` |
| `foreground_control_boundary` | manufacturer-controlled processes | Collect primary activity data for operations under the reporting manufacturer's operational control and link purchased inputs to supplier-specific or technically representative upstream datasets. | `etsi-es-203-199-v1-4-1-2025` |
| `cutoff_significance` | all processes and flows in scope | Avoid cut-off. A process or flow may be excluded only after mass, energy, and environmental significance have all been assessed, cumulative exclusions have been checked, and the exclusion and sensitivity are documented. | `etsi-es-203-199-v1-4-1-2025` |
| `software_and_configuration_boundary` | software-related production activities | Include plant-side firmware or operating-system loading, configuration, and testing. Include software-development support burdens only when the declared study scope does so explicitly and report their allocation separately. | `etsi-es-203-199-v1-4-1-2025` |
| `manufacturing_only_profile` | published foreground data package | Keep network operation, product use, repair, refurbishment, and end-of-life outside this manufacturing profile. Any extension shall be a separately documented module and shall not change the CPC 47222 finished-product identity. | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parts_and_subassemblies_supply` | Parts, subassemblies, receiving, and kitting | `required` | Always; model supplier production through upstream datasets and collect site receiving and kitting records | BOM completeness, purchased-input identity, inbound acceptance, and upstream-link boundary | Per kg conforming finished telephone output |
| `pcba_module_assembly` | PCBA and module assembly | `required` | Model as foreground where controlled; otherwise retain the purchased PCBA or module as an input with a supplier-specific upstream dataset | Electronics and module production stage | Per kg conforming assembled module output and per kg conforming finished telephone output |
| `final_assembly_configuration_test` | Final assembly, configuration, and functional testing | `required` | Always | Mechanical and electrical assembly, software loading, configuration, radio and functional test, rework, and release | Per kg conforming tested telephone output |
| `packaging_warehousing_dispatch` | Packaging, warehousing, and dispatch release | `required` | Always; declare zero sales packaging when the product is dispatched unpackaged | Sales packaging and bundled-accessory inventory, storage energy, and final reference-product release | Per kg net conforming finished telephone output |

### Process: Parts, subassemblies, receiving, and kitting (`parts_and_subassemblies_supply`)

#### Inputs

##### Product flows

###### Battery cells, packs, and battery-system parts (`battery_system_input`)

Record every purchased battery cell, pack, battery-management assembly, housing, connection, and thermal-interface item that is part of the declared product mix. This is an inventory input and shall never be used as the finished-telephone reference proxy.

- Selected flow: Supplier- and product-specific battery product flows; resolve each Tiangong UUID at foreground-package construction
- Flow property / unit: Mass / kg; retain count and rated energy as supporting fields where applicable
- Amount rule: Accepted quantity and mass from BOM, purchase, receiving, and lot records, adjusted for stock change and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_purchased_parts`
- Sources: `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

###### Electronic assemblies and components (`electronics_and_pcba_inputs`)

Record purchased PCBAs, printed circuit boards, integrated circuits, memory, radio-frequency modules, antennas, connectors, cables, and other electronic parts by actual BOM line and supplier dataset.

- Selected flow: Supplier- and product-specific electronic assembly and component flows; resolve each Tiangong UUID at foreground-package construction
- Flow property / unit: Mass / kg; retain piece count, PCB area, and IC die area when available
- Amount rule: Accepted BOM quantity and mass from purchase and receiving records, including outsourced PCBA or module production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_purchased_parts`
- Sources: `etsi-es-203-199-v1-4-1-2025`

###### Display, camera, audio, and user-interface modules (`display_camera_audio_inputs`)

Record actual display assemblies, camera assemblies, microphones, speakers, buttons, ports, and related modules present in the declared product mix; absent categories are declared absent rather than assigned a default quantity.

- Selected flow: Supplier- and product-specific module flows; resolve each Tiangong UUID at foreground-package construction
- Flow property / unit: Mass / kg; retain piece count and display area where available
- Amount rule: Accepted BOM quantity and mass from purchase and receiving records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_purchased_parts`
- Sources: `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

###### Enclosures, mechanical parts, and remaining BOM items (`mechanical_and_other_bom_inputs`)

Record enclosures, frames, covers, fasteners, seals, thermal parts, labels, and every other integral BOM item not already captured. Do not use a generic smartphone composition to fill missing site records.

- Selected flow: Supplier- and product-specific mechanical-part and remaining BOM flows; resolve each Tiangong UUID at foreground-package construction
- Flow property / unit: Mass / kg; retain piece count and material declaration where available
- Amount rule: Accepted BOM quantity and mass from purchase and receiving records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_purchased_parts`
- Sources: `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

##### Waste flows

###### Incoming rejected parts and receiving waste (`incoming_rejects`)

Record rejected parts, damaged inbound items, and receiving or kitting waste by material and documented destination. Supplier returns remain product returns and are not counted as site waste unless ownership and treatment cross the reporting boundary.

- Selected flow: Waste-specific Tiangong flow resolved for each actual reject or waste stream
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected or discarded mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_records`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Elementary flows

No generic elementary-flow amount is assigned. Add each measured direct release as an individual elementary flow when receiving or kitting creates one.

#### Outputs

##### Product flows

###### Accepted and kitted parts and subassemblies (`accepted_component_kits`)

This internal intermediate output transfers accepted BOM items to controlled assembly without changing their upstream identity.

- Selected flow: Product-specific internal intermediate flow; no canonical finished-product UUID assigned
- Flow property / unit: Mass / kg
- Amount rule: Accepted input mass adjusted for documented stock change and incoming rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_purchased_parts`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Waste flows

No additional waste output beyond individually recorded incoming rejects.

##### Elementary flows

No default elementary-flow output is prescribed.

### Process: PCBA and module assembly (`pcba_module_assembly`)

#### Inputs

##### Product flows

###### Parts and subassemblies entering controlled module assembly (`module_assembly_parts`)

Record the actual boards, electronic parts, battery elements, cables, connectors, and modules assembled in the reporting facility. Purchased completed modules remain separately linked upstream inputs.

- Selected flow: Product-specific purchased or internal part flows with Tiangong UUIDs resolved per selected flow
- Flow property / unit: Mass / kg
- Amount rule: Material issue quantity and mass reconciled to BOM, work orders, returns, and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming assembled module output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_records`
- Sources: `etsi-es-203-199-v1-4-1-2025`

###### Electricity for PCBA and module assembly (`module_assembly_electricity`)

Record metered electricity for controlled printing, placement, reflow, curing, inspection, cleaning, and module assembly. Shared electricity is allocated under section 7.

- Selected flow: Site- and market-specific electricity product flow with Tiangong UUID resolved at foreground-package construction
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity consumption for the declared work orders and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming assembled module output and then per kg conforming finished telephone output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_utilities`
- Sources: `etsi-es-203-199-v1-4-1-2025`

###### Assembly consumables and process utilities (`module_assembly_consumables`)

Record solder, paste, flux, adhesives, cleaners, protective gases, water, compressed air, and other consumables only when actually used, each as a separate selected product flow.

- Selected flow: Actual consumable or utility flow resolved individually in Tiangong
- Flow property / unit: Flow-appropriate property and unit; retain mass, volume, or energy without unsupported conversion
- Amount rule: Meter, issue, purchase, or batch-recipe record allocated to conforming module output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming assembled module output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_records`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Waste flows

###### PCBA and module assembly scrap (`module_assembly_scrap`)

Record failed boards, component losses, solder residues, spent chemicals, wastewater, and other wastes as separate waste flows with measured quantities and destinations.

- Selected flow: Waste-specific Tiangong flow resolved for each actual waste stream
- Flow property / unit: Flow-appropriate property and unit, normally Mass / kg
- Amount rule: Measured waste output reconciled to work orders, manifests, returns, and recovery records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming assembled module output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_records`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Elementary flows

Add each monitored direct air or water release as an individual selected elementary flow; no category-wide default emission factor is permitted.

#### Outputs

##### Product flows

###### Conforming assembled PCBAs and modules (`assembled_modules_output`)

Record good assembled module mass transferred to final assembly, including reworked units only after they pass acceptance.

- Selected flow: Product-specific internal PCBA or module flow; no finished-telephone UUID assigned
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated good output mass from accepted count by product family and verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming assembled module output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_yield_rework`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Waste flows

No additional generic waste output is prescribed beyond the individually reported assembly waste streams.

##### Elementary flows

No default elementary-flow output is prescribed.

### Process: Final assembly, configuration, and functional testing (`final_assembly_configuration_test`)

#### Inputs

##### Product flows

###### Accepted components and assembled modules (`final_assembly_parts`)

Record all accepted internal and purchased parts entering final assembly, including the battery, enclosure, display, electronics, cameras, audio parts, antennas, connectors, and model-specific integral items.

- Selected flow: Product-specific internal and purchased flows with Tiangong UUIDs resolved per selected flow
- Flow property / unit: Mass / kg
- Amount rule: Material issue quantity and mass reconciled to work orders, BOM, returns, and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming tested telephone output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_records`
- Sources: `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

###### Electricity for assembly, configuration, and testing (`final_assembly_electricity`)

Record electricity for mechanical and electrical assembly, firmware or operating-system loading, charging for test, functional and radio test, burn-in when used, repair stations, and line handling.

- Selected flow: Site- and market-specific electricity product flow with Tiangong UUID resolved at foreground-package construction
- Flow property / unit: Energy / kWh
- Amount rule: Metered or physically allocated electricity for the declared lines, work orders, and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming tested telephone output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_utilities`
- Sources: `etsi-es-203-199-v1-4-1-2025`

###### Final-assembly consumables and utilities (`final_assembly_consumables`)

Record adhesives, fasteners, labels, cleaners, protective films used as integral production items, compressed air, water, and other actual consumables as separate selected flows.

- Selected flow: Actual consumable or utility flow resolved individually in Tiangong
- Flow property / unit: Flow-appropriate property and unit
- Amount rule: Meter, issue, purchase, or batch-recipe record allocated to conforming tested output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming tested telephone output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_records`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Waste flows

###### Final-test rejects, rework losses, and assembly waste (`final_assembly_rejects`)

Record failed devices routed to rework, scrapped devices, removed parts, consumable waste, and other losses separately so that rework is counted once and final scrap has a documented destination.

- Selected flow: Internal rework product flow or waste-specific Tiangong flow resolved for each actual stream
- Flow property / unit: Mass / kg and device count where applicable
- Amount rule: Test, repair, rejection, scrap, and waste-manifest records reconciled to production orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming tested telephone output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_yield_rework`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Elementary flows

Add each monitored direct release as an individual selected elementary flow; no generic device-level emissions are assumed.

#### Outputs

##### Product flows

###### Conforming tested wireless telephones (`tested_telephone_output`)

Record the net mass and count of complete devices that have passed the declared functional and radio tests and are released to packaging.

- Selected flow: Telephones for cellular networks or for other wireless networks `1fdb2343-534a-4818-814d-5dc99b291ac1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Good-device count by model multiplied by verified net device mass, or direct calibrated-scale measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming tested telephone output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_yield_rework`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Waste flows

No additional generic waste output is prescribed beyond the separately reported reject and waste streams.

##### Elementary flows

No default elementary-flow output is prescribed.

### Process: Packaging, warehousing, and dispatch release (`packaging_warehousing_dispatch`)

#### Inputs

##### Product flows

###### Conforming tested telephones entering packaging (`tested_telephone_input`)

Transfer tested devices without changing the finished-product identity or net mass basis.

- Selected flow: Telephones for cellular networks or for other wireless networks `1fdb2343-534a-4818-814d-5dc99b291ac1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net good-device mass released from final testing and accepted into packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished telephone output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_accessories`
- Sources: `etsi-es-203-199-v1-4-1-2025`

###### Sales packaging and separately bundled accessories (`packaging_accessory_inputs`)

Record packaging materials, external chargers, cables, documentation, and other bundled accessories separately by actual sales configuration. They receive attributable production burdens but are excluded from net reference-product mass.

- Selected flow: Product-specific packaging material and accessory flows with Tiangong UUIDs resolved individually
- Flow property / unit: Mass / kg; retain piece count and flow-appropriate properties where needed
- Amount rule: Packaging BOM, purchase, issue, and packed-unit records by sales configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_accessories`
- Sources: `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

###### Packaging and warehouse electricity (`packaging_warehouse_electricity`)

Record packaging-line, finished-goods storage, and dispatch-release electricity attributable to the declared products and period.

- Selected flow: Site- and market-specific electricity product flow with Tiangong UUID resolved at foreground-package construction
- Flow property / unit: Energy / kWh
- Amount rule: Metered or physically allocated packaging and warehouse electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_utilities`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Waste flows

###### Packaging losses and warehouse waste (`packaging_waste`)

Record damaged packaging, trim, rejected packed units, pallets, films, cartons, and other packaging-stage waste by actual material and destination.

- Selected flow: Waste-specific Tiangong flow resolved for each actual packaging waste stream
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass from packaging records and waste manifests
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_records`
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Elementary flows

Add each monitored direct release as an individual selected elementary flow; no default is assigned.

#### Outputs

##### Product flows

###### Finished wireless telephone reference output (`finished_wireless_telephone_output`)

This is the sole reference product: complete, configured, tested, and dispatch-released telephones. Packaging and separately bundled accessories remain separate inventory inputs and do not increase reference mass.

- Selected flow: Telephones for cellular networks or for other wireless networks `1fdb2343-534a-4818-814d-5dc99b291ac1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed normalization to 1 kg net conforming finished telephone output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg net conforming finished telephone output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `etsi-es-203-199-v1-4-1-2025`

##### Waste flows

No additional generic waste output is prescribed beyond separately reported packaging and rejected-product streams.

##### Elementary flows

No default elementary-flow output is prescribed.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide_before_allocation` | separable production lines, work orders, and process steps | Use direct measurement and process subdivision before allocation. Preserve model-family or homogeneous-product work orders when materially different products share a site. | `etsi-es-203-199-v1-4-1-2025` |
| `physical_allocation_priority` | shared production and facility data | Allocate shared burdens using the most relevant physical driver: measured line time or equipment energy where available, PCB area for board production, good die area for integrated circuits, and mass for other components or outputs. Apply one consistent method to all environmental loads from the common process. | `etsi-es-203-199-v1-4-1-2025` |
| `economic_allocation_fallback` | shared processes lacking defensible physical data | Use economic allocation only when relevant physical data are insufficient; disclose the affected process, products, price basis, period, calculation, and sensitivity. | `etsi-es-203-199-v1-4-1-2025` |
| `rework_and_scrap_accounting` | rework, rejects, and recovered materials | Keep rework burdens with the production that caused them and count a reworked unit only after final acceptance. Report recyclable scrap as a waste output with destination; do not apply an avoided-burden credit inside this foreground package unless a separately declared downstream method requires it. | `etsi-es-203-199-v1-4-1-2025` |
| `packaging_and_accessory_separation` | sales packaging and bundled accessories | Assign attributable packaging and accessory burdens to the declared production mix but report their masses and flows separately from the 1 kg net telephone reference product. | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_purchased_parts` | `parts_and_subassemblies_supply` | purchased BOM items and accepted component kits | BOM, purchase order, supplier declaration, goods receipt, inspection, stock ledger | product family; model; part id; part category; supplier; lot; quantity; unit; verified unit mass; accepted quantity; rejected quantity; stock change; upstream dataset id | Reconcile engineering BOM to purchasing, receiving, quality, and inventory records; resolve each selected upstream flow identity | kg and piece; battery energy or display/PCB area retained when relevant | Per lot and production order; aggregate for the reporting period | Full declared representative production period | Every manufacturing site and outsourced supplier step represented by the dataset | Sum accepted inputs plus stock change by product family; normalize to net conforming output mass | Approved BOM revision, supplier record, receiving record, scale calibration, reconciliation log |
| `cp_process_energy_utilities` | `pcba_module_assembly`; `final_assembly_configuration_test`; `packaging_warehousing_dispatch` | electricity, fuel, heat, compressed air, and metered utilities | Submeter, equipment meter, utility invoice, runtime and rated-load record | meter id; start and end; unit; timestamp; line; equipment; work order; product family; allocation driver; downtime | Prefer dedicated submeters; otherwise allocate shared totals by a documented physical driver | kWh, MJ, m3, or native metered unit | Continuous, shift, batch, or invoice period | Same period as production output, including normal operating variation | All controlled lines and shared utilities serving them | Subtract documented non-production loads, allocate shared use physically, then normalize to conforming output | Meter calibration, invoice reconciliation, runtime record, allocation worksheet |
| `cp_material_waste_records` | all process ids | consumables, rejects, scrap, and wastes | Material issue and return, batch recipe, stock ledger, scale ticket, waste manifest | flow identity; supplier; lot; issued amount; returned amount; reject amount; waste amount; unit; destination; hazardous status; work order | Reconcile purchased, issued, returned, recovered, stock-change, and manifested quantities | Flow-appropriate unit, normally kg | Per batch, lot, and waste shipment | Same period as production output | All controlled processes and waste destinations | Net consumed equals issued minus returned and recovered stock; wastes aggregated by flow and destination | Calibrated scale, inventory reconciliation, waste manifest, treatment receipt |
| `cp_output_yield_rework` | `pcba_module_assembly`; `final_assembly_configuration_test` | conforming output, yield, test failure, rework, and final scrap | Production order, test system, repair log, quality release, scale record | product family; model; work order; input count; good count; failed count; reworked count; scrapped count; verified net unit mass; output mass | Reconcile automated test and production records to quality release and calibrated mass measurements | kg and piece | Per work order and shift | Full declared representative production period | Every final and module assembly line represented | Count reworked units once at final disposition; calculate net good mass by homogeneous product family | Test-system audit trail, quality release, scale calibration, yield reconciliation |
| `cp_packaging_accessories` | `packaging_warehousing_dispatch` | sales packaging, bundled accessories, and dispatch-released net product | Packaging BOM, accessory BOM, pack-out instruction, material issue, packed-unit and dispatch record | sales configuration; packaging item; accessory item; quantity; unit mass; included/excluded reference mass; device count; net device mass; packed mass | Reconcile packaging and accessory issues to packed and dispatched units; weigh representative configurations | kg and piece | Per sales configuration and production order | Same period as reference output | Every packaging site and sales configuration in scope | Sum packaging and accessory mass separately; normalize each to net device kg | Approved pack-out specification, scale calibration, issue and dispatch reconciliation |
| `cp_direct_releases` | all process ids | water use and direct elementary releases | Water meter, emissions monitor, laboratory result, permit report | flow identity; compartment; amount; unit; timestamp; source point; process; treatment; detection limit; allocation driver | Use calibrated meters or validated monitoring methods; create one inventory row per actual elementary flow | Flow-appropriate unit | Monitoring or permit frequency | Same period as production output | Every controlled emission point and water source serving the included production | Aggregate by flow and compartment, allocate physically, normalize to conforming output | Calibration, laboratory QA/QC, permit report, mass-balance cross-check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | every inventory amount | normalized amount = attributable reporting-period amount / net kg of conforming finished telephone output | Attributable flow amount; net conforming output mass from `cp_output_yield_rework` | Flow amount per 1 kg net finished telephone | `etsi-es-203-199-v1-4-1-2025` |
| `calculate_net_output_mass` | count-based output records | net output mass = sum over homogeneous product families of accepted device count × verified net unit mass; do not include packaging or separately bundled accessories | Accepted count; verified net unit mass; model or family share | Net kg conforming finished telephone output and device count per kg | `eu-regulation-2023-1670-consolidated` |
| `reconcile_component_mass` | BOM parts, intermediate outputs, rejects, and stock | Reconcile accepted input mass with conforming output, documented stock change, returned material, rework inventory, and waste; investigate rather than force-close unexplained differences | BOM and receiving mass; issue and return; output mass; stock change; reject and waste mass | Mass-balance reconciliation and unexplained difference | `etsi-es-203-199-v1-4-1-2025` |
| `allocate_shared_facility_data` | shared energy, utilities, and facility burdens | Subdivide first; otherwise allocate by relevant physical driver. Use economic allocation only when physical data are insufficient and perform a sensitivity check. | Shared total; product-system driver values; output identities; price data only for fallback | Attributable shared amount by product system | `etsi-es-203-199-v1-4-1-2025` |
| `separate_packaging_and_accessories` | packed sales configurations | Report device net mass, packaging mass, and bundled-accessory mass separately; normalize packaging and accessory amounts by net device kg without adding them to reference mass | Packaging BOM; accessory BOM; net device mass; packed count | Separate kg packaging/kg device and kg accessory/kg device | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and product mix | Demonstrate complete-telephone CPC 47222 identity and the exact Tiangong reference flow; retain model-family composition without using a named model as the generic proxy. | Product specifications, approved product list, model-mix and sales-configuration records, reference-flow UUID check |
| `dq_bom_completeness` | applicable parts and upstream links | Account for all actual BOM lines and applicable part categories; record masses or relevant physical parameters and document missing supplier datasets and substitutions. | Approved BOM, supplier declarations, receiving reconciliation, upstream dataset register |
| `dq_primary_data` | controlled foreground processes | Use measured or recorded primary activity data for controlled assembly, configuration, testing, packaging, utilities, yield, rework, and waste. | Meters, production and test systems, invoices, issue records, waste manifests, calibration records |
| `dq_temporal_representativeness` | all foreground records | Use one consistent declared period that covers normal production, product-mix changes, downtime, rework, and packaging activity; justify exclusions or shorter campaigns. | Reporting-period register, production calendar, downtime and changeover records |
| `dq_technology_and_geography` | foreground and upstream datasets | Match manufacturing technology, supplier route, plant geography, electricity market, product generation, and reporting period as closely as practicable; disclose proxy datasets. | Dataset metadata, supplier and site records, representativeness assessment |
| `dq_cutoff_and_completeness` | system boundary | Assess mass, energy, and environmental significance before excluding any flow, evaluate cumulative exclusions, and retain a cut-off and sensitivity log. | BOM and energy coverage checks, emissions screening, cut-off register, sensitivity results |
| `dq_allocation_consistency` | shared processes and facilities | Apply the same documented allocation method to all environmental loads from a common process and reconcile allocated totals to the unallocated source total. | Allocation worksheet, driver records, total reconciliation, sensitivity check |
| `dq_uncertainty_and_traceability` | published dataset | Describe completeness, uncertainty, acquisition method, supplier independence, geography, technology, age, methodological consistency, and all unresolved data gaps. | Data-quality assessment and source-to-inventory audit trail |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_exact_reference_identity` | reference flow | The reference product flow shall be `1fdb2343-534a-4818-814d-5dc99b291ac1`, a complete CPC 47222 Product flow with Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`; reject component, named-model, fixed-telephone, wired-apparatus, or network-equipment proxies. | `unsd-cpc-3-0`; `eu-regulation-2023-1670-consolidated` |
| `validate_reference_normalization` | reference amount | The dataset shall normalize to exactly 1 kg net conforming finished telephone output after final testing and shall disclose device count per kg and product-mix weighting. | `etsi-es-203-199-v1-4-1-2025` |
| `validate_required_qualifiers` | dataset identity | Every required qualifier in section 3 shall be present and internally consistent across product description, process records, and flow comments. | `iec-63366-2025`; `etsi-es-203-199-v1-4-1-2025` |
| `validate_bom_and_part_coverage` | purchased inputs | The actual BOM and applicable battery, electronic, display, electromechanical, enclosure, cable, camera, audio, and remaining part categories shall be quantified or explicitly declared absent; upstream datasets and substitutions shall be listed. | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |
| `validate_process_coverage` | production stage | Parts production links, PCBA or module assembly, final assembly, configuration and test, packaging, warehousing, and dispatch shall be represented; outsourcing changes data source, not inclusion. | `etsi-es-203-199-v1-4-1-2025` |
| `validate_foreground_records` | controlled production quantities | Required energy, material, utility, yield, rework, reject, packaging, waste, and direct-release quantities shall come from declared foreground records or calculations linked to collection protocols; no generic named-model quantity may substitute for them. | `etsi-es-203-199-v1-4-1-2025` |
| `validate_mass_and_yield_reconciliation` | each production period | Purchased and issued mass, internal transfers, net good output, stock change, returns, rework, and waste shall reconcile; unexplained differences shall be reported and investigated. | `etsi-es-203-199-v1-4-1-2025` |
| `validate_allocation_and_cutoff` | shared burdens and exclusions | Allocation shall follow section 7, allocated totals shall reconcile, and every cut-off shall pass mass, energy, environmental, cumulative, and sensitivity checks. | `etsi-es-203-199-v1-4-1-2025` |
| `validate_packaging_accessory_separation` | reference mass and inventory | Sales packaging and separately bundled accessories shall be inventoried and disclosed separately and shall not be counted in the 1 kg net telephone reference mass. | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |
| `validate_inventory_flow_identity` | concrete foreground package | Each concrete product, waste, and elementary flow shall have a semantically exact Tiangong identity and flow-appropriate property and unit before publication; unresolved role descriptions in this candidate PCR are not permission to invent UUIDs. | `iec-63366-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for complete new wireless-network telephones; after review it may be published as a `secondary_dataset` and/or `background_dataset` |
| downstream_use | Supply-chain and cradle-to-gate modelling of complete telephone manufacture; upstream production module for a separately specified full life-cycle `process` or `lifecyclemodel` |
| allowed_use | Use for the declared product mix, sites, period, manufacturing route, net-mass basis, packaging configuration, allocation method, and data-quality level; adaptation requires explicit representativeness review |
| excluded_use | Direct proxy for a named device model, telephone component, fixed cordless or wired telephone, network equipment, tablet or wearable; use-stage or network-operation dataset; complete cradle-to-grave result; comparative public claim without equivalent function, boundary, data quality, allocation, and cut-off assumptions |
| required_metadata | Canonical PCR id; CPC coordinate; exact reference-flow, property, and unit-group UUIDs; product families and mass-weighted mix; network technologies; site and geography; period; device count and net mass; battery and integral-part treatment; packaging, accessory, and charger treatment; owned and outsourced steps; BOM and upstream datasets; yield and rework; allocation and cut-off methods |
| required_quality_disclosure | Foreground measurement coverage; BOM and supplier-data coverage; representativeness by time, geography, and technology; meter and scale quality; allocation and mass-balance reconciliation; upstream substitutions; cut-offs; uncertainty; direct-release screening; unresolved data and numeric-range gaps |
| update_trigger | Material change in product scope, component architecture, battery or display technology, model mix, manufacturing or outsourcing route, site or electricity supply, packaging or accessories, allocation driver, supplier datasets, reference-flow identity, governing standard, or data-quality evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, official structure and classification resources, https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml (retrieved 2026-08-09) | CPC 47222 classification coordinate and classification-independent scope control |
| `iec-63366-2025` | `standard` | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691 (retrieved 2026-08-09) | EEPS PCR framework, complementary product-specific rules, functional-unit and reporting context |
| `etsi-es-203-199-v1-4-1-2025` | `standard` | ETSI ES 203 199 V1.4.1 (2025-01), Methodology for environmental Life Cycle Assessment (LCA) of Information and Communication Technology (ICT) goods, networks and services, https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.04.01_60/es_203199v010401p.pdf (retrieved 2026-08-09) | ICT product composition, mandatory applicable parts, PCBA and final assembly, warehousing and packaging, system boundary, cut-off, foreground data, physical allocation, data quality, and validation |
| `eu-regulation-2023-1670-consolidated` | `standard` | Consolidated Commission Regulation (EU) 2023/1670 on ecodesign requirements for smartphones, mobile phones other than smartphones, cordless phones and slate tablets, https://eur-lex.europa.eu/eli/reg/2023/1670/2025-06-20/eng (retrieved 2026-08-09) | Distinguishing mobile and smartphone products from cordless line phones, and official terminology for batteries, displays, cameras, audio parts, ports, and accessories; not used to narrow CPC 47222 to EU-regulated products |
