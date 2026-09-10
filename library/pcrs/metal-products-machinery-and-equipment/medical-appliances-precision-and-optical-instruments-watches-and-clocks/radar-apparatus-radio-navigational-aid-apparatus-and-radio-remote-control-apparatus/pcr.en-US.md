---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.radar-apparatus-radio-navigational-aid-apparatus-and-radio-remote-control-apparatus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Radar apparatus, radio navigational aid apparatus and radio remote control apparatus

## 1. Scope and Applicability

This PCR guides foreground data production for finished radar apparatus, radio navigational aid apparatus, and radio remote control apparatus. It covers fixed, mobile, vehicle-mounted, marine, aviation, industrial, and other apparatus when the delivered product performs radar detection, radio-navigation assistance, or radio remote-control functions and is supplied as a manufactured product.

The category includes complete apparatus and configured systems delivered with the electronic, radio-frequency, antenna, power, control, mechanical, cooling, cabling, software or firmware, and packaging elements required by the declared product configuration. Product-specific options and customer-furnished items are included only when they are part of the declared reference product.

This PCR excludes stand-alone general-purpose computers, telecommunication terminals, bare electronic components, cables sold separately, generic power supplies, vehicles or platforms carrying the apparatus, installation civil works, and spare parts supplied independently. It also excludes use, maintenance, and end-of-life burdens from the foreground manufacturing dataset; those stages require separately declared operating profiles, service lives, maintenance schedules, installation conditions, and end-of-life scenarios in downstream models.

Because performance, configuration, mass, duty cycle, and manufacturing route vary widely across this category, this PCR prescribes no category-wide material, energy, yield, or emission defaults. Producers shall collect configuration- and site-specific foreground records. A concrete data package shall select exact Tiangong identities for its purchased inputs, energy carriers, wastes, and elementary flows after declaring the apparatus subtype and manufacturing geography.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.radar-apparatus-radio-navigational-aid-apparatus-and-radio-remote-control-apparatus` |
| classification_refs | CPC 3.0: 48220, Radar apparatus, radio navigational aid apparatus and radio remote control apparatus, exact scope reference |
| covered_products | Finished radar apparatus; radio navigational aid apparatus; radio remote control apparatus; configured systems whose principal delivered function is radar detection, radio-navigation assistance, or radio remote control |
| excluded_products | Separately sold generic electronic components, computers, cables, power supplies, vehicles or host platforms, installation civil works, independent spare parts, and apparatus outside CPC 48220 |
| representative_product | One finished, accepted apparatus in the declared subtype, model, configuration, and delivery state |
| production_route | Supplier component and material provision; inbound logistics; conditional electronic and radio-frequency assembly; final mechanical/system integration; testing and calibration; packaging and dispatch |
| market_state | Finished manufactured product at the manufacturer's final logistics platform, accepted for delivery, with net product mass and packaging reported separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished radar apparatus, radio navigational aid apparatus, or radio remote control apparatus in its declared accepted configuration |
| How much | 1 kg net mass of conforming finished apparatus, excluding delivery packaging |
| How well | Passed the declared product-specific functional, safety, radio-frequency, navigation, remote-control, environmental, and customer acceptance requirements that apply to the selected apparatus |
| How long or cycle | One completed manufacturing accounting period or production campaign; service life is not part of this mass-declared manufacturing reference |
| reference_flow_link | Output `finished_apparatus` from `packaging_and_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Radar apparatus, radio navigational aid apparatus and radio remote control apparatus `1423adf5-00aa-48ab-a228-5935b58a21ed` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | apparatus subtype; model and configuration; intended application; manufacturer and production geography; production period; assembly route and ownership boundary; net product mass; PCB and electronic configuration; radio-frequency, antenna, waveguide, transceiver, or receiver configuration as applicable; power-supply, cooling, and battery presence; software or firmware configuration affecting hardware or testing; acceptance-test protocol; packaging exclusion and separately reported packaging mass; reference service life and operating profile when used downstream |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent data-package fields. Missing required qualifiers make the reference-flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg of accepted net apparatus mass. Exclude delivery packaging from the reference amount and inventory packaging separately. |
| `configuration_mass_reconciliation` | product configuration and bill of materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile the accepted net product mass to the configured bill of materials, subassemblies, incorporated consumables, and explicitly documented mass gaps; do not infer unreported component composition from a different radar or electronics product. |
| `energy_measurement` | electricity, fuels, compressed air, thermal energy, and test energy | energy property selected for the exact carrier | kWh, MJ, or carrier-specific unit | Preserve measured carrier and unit, document conversion factors, and avoid combining electricity, fuel, compressed-air, and thermal-energy records before conversion to a common reported energy basis. |
| `transport_measurement` | inbound component and material transport | transport-service property selected for the exact mode | tkm or mode-specific service unit | Calculate transport service from shipped mass and route distance for each mode; retain load, return-trip, and allocation assumptions. |
| `accepted_output_basis` | production yield, rejects, and rework | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net output mass as the normalization denominator. Record rejected units, scrapped parts, recovered components, and rework loops separately rather than inflating accepted output. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_manufacturing_inventory` | reference-product manufacturing | Include and quantify all assessable materials, components, packaging, manufacturing and assembly processes, energy, water, inbound transport, direct emissions, production losses, rejects, rework, and waste treatment needed to deliver the accepted apparatus to the manufacturer's final logistics platform. Distinguish directly collected foreground operations from referenced upstream datasets. | `pep-ecopassport-pcr-ed4-2021`; `international-epd-pcr-2024-06` |
| `boundary_product_specific_routes` | apparatus subtype and configuration | Model only the electronic, radio-frequency, antenna, waveguide, transceiver, receiver, power, cooling, mechanical, cabling, software-dependent test, and packaging activities that apply to the declared configuration. Identify and justify every omission or approximation. | `iec-63366-2025`; `chalmers-active-safety-radar-2023`; `chalmers-surface-radar-2023` |
| `boundary_upstream_datasets` | purchased components and materials | Link purchased materials, parts, printed circuit boards or assemblies, integrated circuits, radio-frequency modules, batteries, cables, enclosures, antennas, and other supplier products to upstream datasets representing their declared technologies and geographies. Do not treat the receiving or assembly site as the origin of those upstream burdens. | `pep-ecopassport-pcr-ed4-2021` |
| `boundary_downstream_separation` | installation, use, maintenance, and end-of-life | Keep downstream stages outside the foreground manufacturing dataset unless the study explicitly adds them as separately reported modules with product-specific service life, duty cycle, operating energy, maintenance, installation, and end-of-life scenarios. | `iec-63366-2025`; `pep-ecopassport-pcr-ed4-2021` |
| `boundary_no_hidden_significant_flows` | exclusions and cut-off decisions | Do not use a mass or energy threshold to hide small-mass but potentially significant electronics, precious or critical materials, batteries, regulated substances, direct emissions, or hazardous wastes. Quantify and justify known exclusions and disclose unresolved composition. | `pep-ecopassport-pcr-ed4-2021`; `chalmers-surface-radar-2023` |
| `boundary_same_category_input` | complete or partly complete apparatus used as an input | Record a supplied complete or partly complete CPC 48220 apparatus as a visible upstream product input with its own dataset. Do not recursively re-author its internal production in this foreground process unless the reporting organization directly controls and measures that production. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented supplier-gate or receiving-gate quantities and identities for all purchased materials, components, subassemblies, packaging, energy carriers, and inbound transport services used by the declared apparatus configuration |
| starting_condition_role | Foreground manufacturing input gate with explicit upstream dataset links |
| product_classification_scope | Radar apparatus, radio navigational aid apparatus and radio remote control apparatus corresponding to CPC 3.0 code 48220 |
| recursive_input_rule | Keep supplied complete or partly complete apparatus from the same category as an external product input; disclose its mass share, supplier state, and upstream dataset, and do not expand it recursively unless its production is directly controlled and measured |
| upstream_dataset_requirement | Upstream datasets shall represent material extraction, component and subassembly production, supplier energy and technology, and inbound logistics not directly measured within the foreground system; geography, technology, age, and substitution shall be disclosed |
| disclosure | Declare apparatus subtype, model, configuration, sites, production period, ownership boundary, supplier-data coverage, assembly and test route, output mass, packaging boundary, excluded operations, unresolved composition, allocation methods, and downstream stages excluded from the manufacturing dataset |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `supplier_inputs_and_inbound_logistics` | Supplier inputs and inbound logistics | required | Always include purchased input quantities, upstream dataset links, and inbound transport to the first controlled manufacturing site | Upstream input definition and receiving-gate preparation | Per 1 kg accepted net apparatus |
| `electronic_and_rf_assembly` | Electronic and radio-frequency assembly | conditional | Include when PCB, electronic, antenna, waveguide, transceiver, receiver, radio-frequency, power, cooling, or related subassemblies are fabricated or assembled within the reporting boundary; otherwise represent them as purchased inputs | Foreground subassembly production | Per kg accepted subassembly transferred to final assembly, then normalized per 1 kg apparatus |
| `final_assembly_testing_and_calibration` | Final assembly, testing and calibration | required | Always include configuration-specific mechanical/system integration and the acceptance activities required before release | Foreground finished-apparatus production and quality acceptance | Per 1 kg accepted unpacked apparatus |
| `packaging_and_dispatch` | Packaging and dispatch | required | Always include delivery packaging and dispatch preparation to the manufacturer's final logistics platform | Foreground packaging and reference-product output | Per 1 kg accepted net apparatus |

### Process: Supplier inputs and inbound logistics (`supplier_inputs_and_inbound_logistics`)

#### Inputs

##### Product flows

###### Purchased components, materials, and subassemblies (`purchased_components_materials`)

Record every purchased material, electronic component, PCB or PCBA, integrated circuit, radio-frequency module, antenna, waveguide, transceiver or receiver element, cable, connector, enclosure, fastener, power unit, battery, cooling component, and other configured input crossing the supplier or receiving gate.

- Selected flow: Select exact Tiangong Product flows for the declared configuration; do not use a generic or approximate electronics flow
- Flow property / unit: Mass / kg, plus item count where needed for traceability
- Amount rule: measured purchased or received quantity corrected for inventory change and attributable to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_supplier_inputs`
- Sources: `pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`; `chalmers-surface-radar-2023`

###### Inbound transport service (`inbound_transport_service`)

Record transport of purchased materials, components, subassemblies, and delivery packaging from supplier dispatch points to the first controlled manufacturing or receiving site by mode.

- Selected flow: Select exact Tiangong transport-service Product flows for each declared mode and geography
- Flow property / unit: Transport service / tkm or mode-specific service unit
- Amount rule: shipped mass multiplied by documented route distance, adjusted for the declared load and return-trip assumptions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inbound_logistics`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Received and released manufacturing inputs (`received_inputs`)

Record the measured quantity of accepted inputs released from receiving inspection to the declared manufacturing route, preserving configuration and supplier traceability.

- Selected flow: Internal intermediate flow linked to the exact purchased-input identities
- Flow property / unit: Mass / kg
- Amount rule: measured accepted received mass by configured input role
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_supplier_inputs`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

###### Incoming packaging and receiving rejects (`incoming_packaging_waste`)

Record supplier packaging removed at receiving and components or materials rejected before release to production, separated by waste type and treatment route.

- Selected flow: Select exact Tiangong Waste flows after material and treatment routes are declared
- Flow property / unit: Mass / kg
- Amount rule: measured receiving waste and rejected-input mass sent to each treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rework_and_treatment`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Elementary flows

### Process: Electronic and radio-frequency assembly (`electronic_and_rf_assembly`)

#### Inputs

##### Product flows

###### Electronic and radio-frequency parts (`electronic_rf_parts`)

Record bare boards, electronic components, integrated circuits, solders, radio-frequency components, antennas, waveguides, transceivers, receivers, power electronics, cables, connectors, and configured parts entering controlled subassembly operations.

- Selected flow: Select exact Tiangong Product flows for the declared subassembly bill of materials
- Flow property / unit: Mass / kg, plus item count where required
- Amount rule: measured issue-to-production quantity corrected for returns and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted subassembly transferred to final assembly and normalized per 1 kg apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_subassembly_materials`
- Sources: `chalmers-active-safety-radar-2023`; `chalmers-surface-radar-2023`

###### Electronic and radio-frequency assembly energy (`electronic_rf_assembly_energy`)

Record metered or allocated electricity, compressed air, thermal energy, and fuels used by PCB, electronic, radio-frequency, antenna, waveguide, transceiver, receiver, soldering, coating, cleaning, curing, and subassembly stations.

- Selected flow: Select exact Tiangong energy-carrier Product flows for the site and period
- Flow property / unit: Energy / kWh, MJ, or carrier-specific unit
- Amount rule: measured station energy or justified allocation of metered shared energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted subassembly transferred to final assembly and normalized per 1 kg apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`

###### Assembly consumables and process chemicals (`electronic_rf_assembly_consumables`)

Record solder and paste not already represented in the bill of materials, fluxes, cleaning agents, coatings, adhesives, gases, water, filters, protective materials, and other consumed process supplies.

- Selected flow: Select exact Tiangong Product flows after the process chemistry and material identity are confirmed
- Flow property / unit: Mass or volume / kg, L, or substance-specific unit
- Amount rule: measured issue, purchase, or tank balance attributable to the declared subassembly output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted subassembly transferred to final assembly and normalized per 1 kg apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_consumables`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted electronic and radio-frequency subassemblies (`accepted_electronic_rf_subassemblies`)

Record accepted PCBAs and other electronic or radio-frequency subassemblies transferred to final assembly, by configuration and measured mass.

- Selected flow: Internal intermediate Product flow linked to the declared subassembly configuration
- Flow property / unit: Mass / kg
- Amount rule: measured accepted subassembly mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted subassembly and normalized per 1 kg apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_subassembly_output_and_yield`
- Sources: `chalmers-active-safety-radar-2023`

##### Waste flows

###### Subassembly rejects and process waste (`electronic_rf_assembly_waste`)

Record rejected boards and components, solder dross, offcuts, spent chemicals, wastewater, filters, wipes, packaging, and other waste by material, hazard classification, and treatment route.

- Selected flow: Select exact Tiangong Waste flows after waste identity and treatment are declared
- Flow property / unit: Mass or volume / kg, L, or treatment-specific unit
- Amount rule: measured waste transferred to each documented treatment route, excluding material returned to controlled rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted subassembly and normalized per 1 kg apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rework_and_treatment`
- Sources: `pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`

##### Elementary flows

###### Direct subassembly emissions (`electronic_rf_direct_emissions`)

Record measured or permit-reported releases to air, water, or soil from soldering, cleaning, coating, curing, machining, or other controlled subassembly operations; do not duplicate emissions already represented in upstream energy or treatment datasets.

- Selected flow: Select exact Tiangong Elementary flows for each measured substance and compartment
- Flow property / unit: Substance mass / kg or reported emission unit
- Amount rule: measured or permit-calculated direct release attributable to the declared subassembly output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted subassembly and normalized per 1 kg apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `pep-ecopassport-pcr-ed4-2021`

### Process: Final assembly, testing and calibration (`final_assembly_testing_and_calibration`)

#### Inputs

##### Product flows

###### Subassemblies and mechanical system parts (`final_assembly_inputs`)

Record accepted electronic, radio-frequency, antenna, waveguide, transceiver, receiver, power, cooling, cable, control, enclosure, mounting, mechanical, and customer-specific configured inputs entering final integration.

- Selected flow: Select exact Tiangong Product flows or traceable internal intermediate flows for the declared configuration
- Flow property / unit: Mass / kg, plus item count where required
- Amount rule: measured issue-to-assembly quantity corrected for returns and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_inputs`
- Sources: `chalmers-active-safety-radar-2023`; `chalmers-surface-radar-2023`

###### Final assembly, test, and calibration energy (`final_assembly_test_energy`)

Record metered or allocated electricity, compressed air, thermal energy, and fuels for mechanical integration, wiring, firmware loading that controls hardware operation, alignment, calibration, burn-in, functional testing, environmental testing, and customer acceptance testing.

- Selected flow: Select exact Tiangong energy-carrier Product flows for the site and period
- Flow property / unit: Energy / kWh, MJ, or carrier-specific unit
- Amount rule: measured equipment and station energy or justified allocation of metered shared energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`

###### Final assembly and test consumables (`final_assembly_test_consumables`)

Record fasteners not included in the bill of materials, adhesives, sealants, cleaning agents, calibration gases or targets, cooling media, temporary protective materials, and other consumables used during integration and acceptance.

- Selected flow: Select exact Tiangong Product flows after material and process identities are confirmed
- Flow property / unit: Mass, volume, or service unit / kg, L, item, or protocol-specific unit
- Amount rule: measured issue, purchase, or stock balance attributable to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_consumables`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming unpacked apparatus (`conforming_unpacked_apparatus`)

Record apparatus that passed the declared acceptance protocol, by subtype, configuration, unit count, and measured net mass before delivery packaging.

- Selected flow: Radar apparatus, radio navigational aid apparatus and radio remote control apparatus `1423adf5-00aa-48ab-a228-5935b58a21ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted net apparatus mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_acceptance_and_mass`
- Sources: `international-epd-pcr-2024-06`

##### Waste flows

###### Nonconforming units, replaced parts, and final-assembly waste (`final_assembly_rejects_waste`)

Record scrapped units and parts, replaced components, cable and mechanical offcuts, spent test consumables, and other final-assembly waste by destination. Keep controlled rework loops separate from waste sent off site.

- Selected flow: Select exact Tiangong Waste flows after waste identity and treatment are declared
- Flow property / unit: Mass or volume / kg, L, or treatment-specific unit
- Amount rule: measured waste sent to each treatment route after subtracting materials returned to controlled rework or inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rework_and_treatment`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Elementary flows

###### Direct final-assembly and test emissions (`final_assembly_test_direct_emissions`)

Record measured or permit-reported direct releases from final integration, calibration, burn-in, environmental testing, or acceptance testing; do not duplicate upstream electricity, fuel, or waste-treatment emissions.

- Selected flow: Select exact Tiangong Elementary flows for each measured substance and compartment
- Flow property / unit: Substance mass / kg or reported emission unit
- Amount rule: measured or permit-calculated direct release attributable to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `pep-ecopassport-pcr-ed4-2021`

### Process: Packaging and dispatch (`packaging_and_dispatch`)

#### Inputs

##### Product flows

###### Delivery packaging and protective materials (`delivery_packaging_materials`)

Record cartons, crates, pallets, films, foams, desiccants, protective caps, documentation, reusable transport packaging, and other packaging used to deliver the accepted apparatus.

- Selected flow: Select exact Tiangong Product flows for each packaging material and reusable packaging service
- Flow property / unit: Mass / kg, plus item count or reuse cycles where applicable
- Amount rule: measured packaging issued to dispatched accepted products, net of returned reusable packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources: `pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`

###### Packaging and dispatch energy (`packaging_dispatch_energy`)

Record metered or allocated energy used for packaging, preservation, labelling, and dispatch preparation through the final logistics platform.

- Selected flow: Select exact Tiangong energy-carrier Product flows for the site and period
- Flow property / unit: Energy / kWh, MJ, or carrier-specific unit
- Amount rule: measured packaging-line energy or justified allocation of metered shared energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished apparatus at the final logistics platform (`finished_apparatus`)

This is the PCR reference output. The packaging accompanies delivery but is not included in the 1 kg net apparatus reference amount.

- Selected flow: Radar apparatus, radio navigational aid apparatus and radio remote control apparatus `1423adf5-00aa-48ab-a228-5935b58a21ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg after normalizing the measured accepted net apparatus mass dispatched during the accounting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted net apparatus excluding delivery packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_acceptance_and_mass`
- Sources: `international-epd-pcr-2024-06`; `iec-63366-2025`

##### Waste flows

###### Packaging-line waste (`packaging_dispatch_waste`)

Record packaging offcuts, damaged packaging, temporary protective materials, and other dispatch waste sent to each treatment route.

- Selected flow: Select exact Tiangong Waste flows after material and treatment routes are declared
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste transferred to each treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rework_and_treatment`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared manufacturing, assembly, test, and packaging operations | First avoid allocation by separate metering, batch records, station time, equipment cycles, material issues, and waste records for the declared configuration. | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_physical_driver` | shared operations that cannot be subdivided | Use the physical driver that best represents resource causation, such as measured station energy, processing time, equipment cycles, treated mass, occupied test time, or accepted unit count. Do not default to product mass when it does not represent the operation. | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_economic_fallback` | shared operation lacking a defensible physical driver | Economic allocation may be used only when subdivision and a causal physical driver are not feasible; disclose the values, period, products, sensitivity, and reason. | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_rework_and_rejects` | rework, rejects, recovered components, and production scrap | Attribute rework energy and replacement inputs to accepted output; keep recovered materials or components as visible flows; record waste treatment without credit unless the downstream modelling method explicitly defines and reports a separate recycling allocation. | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_documentation` | every allocated input or output | Document the allocation population, numerator, denominator, accounting period, data source, resulting factor, and affected rows so the allocation can be reproduced. | `pep-ecopassport-pcr-ed4-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_supplier_inputs` | `supplier_inputs_and_inbound_logistics` | purchased components and materials; received inputs | approved bill of materials, purchase receipt, goods issue, supplier declaration, inventory record | part id; description; supplier; country; Tiangong flow id; quantity; unit; measured mass; configuration; lot; receipt date; opening and closing inventory | reconcile approved configuration BOM to receipts, inventory movements, and production issues; retain supplier evidence for composition and upstream dataset choice | kg and item | each lot with accounting-period reconciliation | complete production accounting period, normally a representative year or full campaign | every manufacturing site and supplier route in scope | attributable received or issued quantity divided by accepted net apparatus mass | approved BOM revision, receipts, weighing records, inventory reconciliation, supplier declarations, and unresolved-composition log |
| `cp_inbound_logistics` | `supplier_inputs_and_inbound_logistics` | inbound transport service | shipment, carrier, route, and freight record | origin; destination; mode; distance; shipped mass; load factor; return trip; allocation basis; shipment date | calculate service separately by route and mode from documented shipment mass and distance | tkm or mode-specific service unit | each shipment or representative route sample | same period as production inputs | every material supplier route and receiving site in scope | sum attributable transport service by mode and divide by accepted net apparatus mass | bills of lading, carrier records, route evidence, and documented assumptions |
| `cp_subassembly_materials` | `electronic_and_rf_assembly` | electronic and radio-frequency parts | material issue, pick list, machine feed, return, and inventory record | part id; subassembly id; lot; issued quantity; returned quantity; measured mass; configuration; site; date | reconcile material issued to the accepted subassembly configuration, returns, rejects, and inventory change | kg and item | each lot or batch | full production period for each included route | each controlled electronic or radio-frequency assembly site | net issued quantity divided by accepted subassembly mass and then by accepted apparatus mass | controlled recipe or BOM, issue and return records, and mass reconciliation |
| `cp_process_energy` | `electronic_and_rf_assembly`; `final_assembly_testing_and_calibration`; `packaging_and_dispatch` | process energy | meter, equipment log, fuel invoice, compressed-air or thermal-energy record | carrier; meter id; start and end readings; equipment or station; operating time; batch; site; period; allocation driver | use direct meters where available; otherwise allocate a reconciled site or line meter with the documented causal driver | kWh, MJ, or carrier-specific unit | continuous, each batch, or monthly according to metering | full production period, with seasonal and campaign coverage where relevant | every included manufacturing, test, and packaging site | attributable carrier quantity divided by accepted process output and normalized to accepted net apparatus mass | calibrated meters, invoices, equipment logs, reconciliation to site totals, and allocation worksheet |
| `cp_process_consumables` | `electronic_and_rf_assembly`; `final_assembly_testing_and_calibration` | consumables and process chemicals | purchase, issue, tank, recipe, or stock record | material identity; CAS or specification where applicable; quantity; unit; opening and closing stock; returned quantity; waste quantity; process; batch | reconcile net consumption from issue or stock balance and map to the exact process chemistry | kg, L, item, or protocol-specific unit | each batch or monthly | full production period | every included assembly and test site | net attributable consumption divided by accepted process output and normalized to accepted net apparatus mass | purchase and issue records, recipes, tank measurements, SDS or specification, and stock reconciliation |
| `cp_subassembly_output_and_yield` | `electronic_and_rf_assembly` | accepted subassembly output and yield | production count, test result, transfer, and weighing record | subassembly id; configuration; input count and mass; accepted count and mass; reject count and mass; rework count; transfer date | reconcile accepted transfer mass, rejects, rework, and inventory change for each subassembly route | kg and item | each batch | full production period | each included subassembly site and line | accepted transferred mass divided by total accepted apparatus mass using configuration linkage | calibrated scales, production and test records, rework log, and mass balance |
| `cp_final_assembly_inputs` | `final_assembly_testing_and_calibration` | final assembly inputs | assembly BOM, pick list, serial genealogy, issue, return, and inventory record | apparatus serial or batch; configuration; part or subassembly id; quantity; measured mass; issue and return; site; date | reconcile serial or batch genealogy and net material issues to accepted output | kg and item | each unit or batch | full production period | every final assembly site | net attributable input divided by accepted net apparatus mass | approved configuration BOM, serial genealogy, issue and return records, and mass reconciliation |
| `cp_output_acceptance_and_mass` | `final_assembly_testing_and_calibration`; `packaging_and_dispatch` | accepted reference output | calibrated weighing, production release, acceptance-test, serial, and dispatch record | apparatus subtype; model; configuration; serial or batch; net mass; packaging mass; acceptance result; test protocol; release date; dispatch date | sum the net mass of products passing the declared acceptance protocol; keep packaging mass separate | kg and item | each released apparatus or batch | full production period | every final assembly and final logistics site | all attributable inputs and outputs divided by accepted net apparatus mass; final reference output equals 1 kg | calibrated scale certificate, acceptance and calibration reports, release authorization, dispatch record, and rejected-unit log |
| `cp_waste_rework_and_treatment` | all included processes | receiving waste, process waste, rejects, rework, and treatment | waste ticket, internal scrap, rework, recovery, and treatment record | waste identity; hazard class; source process; mass or volume; rework status; recovered quantity; destination; treatment; date | reconcile generated waste, controlled rework, internal recovery, off-site transfer, and inventory change without double counting | kg, L, item, or treatment-specific unit | each transfer with monthly or batch reconciliation | full production period | every included site and treatment route | attributable quantity divided by accepted process output and normalized to accepted net apparatus mass | calibrated weighbridge or scale records, waste manifests, rework genealogy, treatment certificates, and mass balance |
| `cp_direct_emissions` | `electronic_and_rf_assembly`; `final_assembly_testing_and_calibration` | direct emissions to air, water, and soil | stack or discharge measurement, continuous monitor, laboratory analysis, permit calculation | substance; compartment; concentration; flow rate; duration; calculation factor; process; site; date; detection limit | use measured releases or documented permit calculation; subtract neither upstream nor treatment emissions already represented elsewhere | kg or reported emission unit | monitoring or permit frequency | full production period including representative operating states | every emitting operation in scope | attributable direct release divided by accepted process output and normalized to accepted net apparatus mass | calibration, laboratory report, permit method, detection-limit treatment, and duplicate-check against background datasets |
| `cp_packaging_and_dispatch` | `packaging_and_dispatch` | delivery packaging and dispatch | packaging BOM, issue, return, reuse-cycle, weighing, and dispatch record | packaging material; item; mass; reusable identifier; use count; return rate; apparatus configuration; dispatch date | reconcile packaging issued to dispatched accepted products, reusable packaging cycles, returns, and packaging waste | kg and item or reuse cycle | each shipment or batch | full production period | every packaging and final logistics site | attributable packaging quantity divided by accepted net apparatus mass | packaging specification, calibrated weighing, issue and return records, and dispatch reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass_normalization` | all inventory rows | normalized amount = attributable amount during the accounting period / accepted net apparatus mass during the same period | attributable row amount; accepted net apparatus mass | amount per 1 kg accepted net apparatus | `international-epd-pcr-2024-06`; `pep-ecopassport-pcr-ed4-2021` |
| `calc_net_material_input` | purchased and issued materials | net attributable input = receipts or issues + opening inventory - closing inventory - documented returns to supplier or stores | purchase or issue records; inventory; returns | net material or component input | `pep-ecopassport-pcr-ed4-2021` |
| `calc_transport_service` | inbound transport | transport service by mode = attributable shipped mass in tonnes × route distance in kilometres, with declared load and return-trip treatment | shipment mass; distance; mode; allocation assumptions | tkm or mode-specific transport service | `pep-ecopassport-pcr-ed4-2021` |
| `calc_shared_operation_allocation` | shared energy, materials, water, emissions, and wastes | attributable amount = measured shared amount × declared causal-driver share; use subdivision or direct metering before allocation | shared meter or record; physical driver; production population | allocated foreground amount and allocation factor | `pep-ecopassport-pcr-ed4-2021` |
| `calc_yield_rework_reconciliation` | subassembly and final assembly | reconcile input, accepted output, controlled rework, rejects, waste, returned material, and inventory change; disclose residual imbalance | material issues; outputs; rework; rejects; waste; returns; inventory | yield, waste, rework, and mass-balance residual | `chalmers-active-safety-radar-2023`; `pep-ecopassport-pcr-ed4-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and all configuration-dependent records | Maintain one consistent apparatus subtype, model, configuration, BOM revision, acceptance protocol, and exact reference-flow UUID across all process records. | configuration baseline, approved BOM, serial or batch genealogy, acceptance report, and UUID readback |
| `dq_temporal_representativeness` | foreground records | Use a complete and current production accounting period representative of the declared technology; identify campaign gaps, idle periods, prototypes, and non-routine test loads. | production calendar, meter coverage, accounting-period reconciliation, and deviation log |
| `dq_geographical_technological_representativeness` | foreground sites and upstream datasets | Represent every included site, supplier route, assembly technology, test route, and energy geography; document substitutions and their effect on representativeness. | site and supplier list, route map, technology record, dataset metadata, and substitution assessment |
| `dq_completeness_and_mass_balance` | BOM, materials, outputs, wastes, and inventory change | Reconcile accepted net product mass and known configuration inputs. Small-mass electronics, precious or critical materials, batteries, regulated substances, hazardous wastes, and direct emissions shall not be excluded solely because their mass is small. | BOM-to-scale reconciliation, material declarations, waste manifests, emission records, unresolved-composition log, and mass-balance residual |
| `dq_primary_secondary_separation` | owned operations and purchased inputs | Use direct foreground records for controlled manufacturing, assembly, testing, calibration, packaging, and waste operations. Identify supplier-specific and secondary datasets separately with time, geography, technology, and quality metadata. | meters and operational records, supplier declarations, dataset metadata, and data-quality assessment |
| `dq_allocation_reproducibility` | shared operations | Every allocation shall be reproducible from retained totals, drivers, population, period, and formula, with sensitivity disclosed when the choice can materially change results. | allocation worksheet, meter total, driver records, and sensitivity result |
| `dq_confidential_configuration_gaps` | restricted or customer-specific components | Confidentiality does not justify silently omitting mass or burden. Aggregate restricted components only to the level necessary for disclosure, retain auditable evidence, and report unresolved composition or dataset substitutions. | controlled evidence register, aggregated mass record, reviewer access statement, and unresolved-data declaration |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm that the selected reference product flow is `1423adf5-00aa-48ab-a228-5935b58a21ed`, its type is Product flow, its CPC classification is 48220, its reference property is Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, and the reference unit group and unit are Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and kg. |  |
| `validate_required_qualifiers` | foreground data package | Fail conformance when apparatus subtype, model/configuration, manufacturing geography and period, net mass, assembly route, acceptance protocol, or applicable electronic, radio-frequency, power, cooling, battery, packaging, service-life, and operating-profile qualifiers are missing. | `iec-63366-2025`; `international-epd-pcr-2024-06` |
| `validate_reference_mass` | normalized inventory | Confirm that the reference output equals 1 kg accepted net apparatus, packaging is reported separately, and all attributable input and output records use the same accepted-output denominator. | `international-epd-pcr-2024-06`; `pep-ecopassport-pcr-ed4-2021` |
| `validate_process_coverage` | system boundary and process map | Confirm that supplier inputs and inbound logistics, applicable electronic and radio-frequency assembly, final assembly/testing/calibration, packaging, production losses, rejects, rework, waste treatment, and direct emissions are included or explicitly justified as not applicable. | `pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023` |
| `validate_exact_flow_selection` | non-reference inventory identities | Treat site-specific component, energy, transport, waste, and elementary-flow rows without exact reviewed Tiangong identities as unresolved; do not silently substitute a semantically approximate hybrid-search candidate. |  |
| `validate_allocation_and_reconciliation` | shared burdens, mass balance, yield, and rework | Confirm that direct metering or subdivision was attempted first, every remaining allocation is reproducible, and input-output-rework-waste-inventory reconciliation has a disclosed residual. | `pep-ecopassport-pcr-ed4-2021` |
| `validate_data_quality_disclosure` | publication readiness | Confirm temporal, geographical, technological, completeness, precision, consistency, supplier-data coverage, exclusions, unresolved composition, and downstream-stage exclusions are documented; an inconclusive or materially incomplete check fails by default. | `pep-ecopassport-pcr-ed4-2021`; `chalmers-surface-radar-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | Foreground manufacturing data packages and their process or lifecyclemodel projections for a declared radar, radio navigational aid, or radio remote control apparatus configuration |
| allowed_use | Product- and site-specific manufacturing LCI normalized to 1 kg accepted net apparatus; upstream supply-chain linking; contribution analysis; downstream models that separately add declared installation, use, maintenance, service-life, and end-of-life scenarios |
| excluded_use | Direct comparison of unlike apparatus subtypes or performance classes; use-phase or full-life-cycle claims without a declared duty cycle, energy profile, service life, maintenance, installation, and end-of-life scenario; substitution of undisclosed generic electronics for configuration-specific inputs; claims of CPC mapping acceptance |
| required_metadata | PCR id and version state; apparatus subtype; model and configuration; intended application; manufacturer and geography; production period; BOM and supplier-data coverage; assembly, test, and calibration route; net product mass; PCB/electronic and radio-frequency configuration; power, cooling, and battery presence; acceptance protocol; exact flow identities; allocation; packaging; exclusions; unresolved data; downstream stages included or excluded |
| required_quality_disclosure | Foreground measurement coverage; temporal, geographical, and technological representativeness; completeness and mass balance; supplier and secondary dataset quality; allocation and sensitivity; waste and emission coverage; restricted-data aggregation; unresolved UUID or composition gaps; validation checks performed and skipped |
| update_trigger | Change in apparatus subtype or configuration, BOM, PCB or radio-frequency architecture, manufacturing or supplier site, assembly/test technology, acceptance protocol, energy or transport geography, packaging, allocation driver, data source, production period, or any change that materially affects the normalized inventory or its representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-63366-2025` | `standard` | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691, retrieved 2026-08-10 | Horizontal EEPS PCR context, product-specific qualifiers and scenarios, and separation of generic PCR from product-specific rules |
| `international-epd-pcr-2024-06` | `standard` | International EPD System PCR 2024:06, Electronic and electric equipment, and electronic components (non-construction), version 1.0.1, https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f, retrieved 2026-08-10 | Sector scope covering UN CPC divisions 43-48 and declared-unit basis for non-construction electronic and electric equipment |
| `pep-ecopassport-pcr-ed4-2021` | `standard` | PEP ecopassport PCR edition 4, Product Category Rules for Electrical, Electronic and HVAC-R Products, 2021-09-06, https://register.pep-ecopassport.org/documents/public/PCR-4-EN, retrieved 2026-08-10 | Manufacturing-stage boundary, complete material/component/process inventory, transport and waste treatment, allocation, primary and secondary data, and data-quality rules |
| `chalmers-active-safety-radar-2023` | `literature` | Almroth, A. and Rehnberg, I. (2023), Life Cycle Assessment of an Active Safety Radar System, Chalmers University of Technology report E2023:044, https://odr.chalmers.se/bitstreams/a3062731-f2b2-4e85-b0c2-0ba4201ce2d5/download, retrieved 2026-08-10 | Radar-specific PCB and bulk-component structure, supplier manufacturing, PCB assembly, final assembly, process energy, packaging waste, use-stage separation, and lifecycle decomposition |
| `chalmers-surface-radar-2023` | `literature` | Schmidt, F. and Johansson, M. (2023), Environmental Life Cycle Assessment of a Surface Radar System, Chalmers University of Technology report E2023:080, https://odr.chalmers.se/bitstreams/e4fa6931-e6aa-46b9-a52c-edea16efd800/download, retrieved 2026-08-10 | Large radar-system configuration breadth, bill-of-materials and supplier-data collection, temporal and completeness limitations, and restricted or incomplete component disclosure |
