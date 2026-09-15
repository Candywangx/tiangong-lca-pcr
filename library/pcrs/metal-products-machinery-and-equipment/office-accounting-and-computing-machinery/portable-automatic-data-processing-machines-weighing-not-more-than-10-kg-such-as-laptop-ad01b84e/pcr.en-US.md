---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.portable-automatic-data-processing-machines-weighing-not-more-than-10-kg-such-as-laptop-ad01b84e
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Portable automatic data processing machines weighing not more than 10 kg

## 1. Scope and Applicability

This PCR applies to complete portable automatic data processing machines with a net equipment mass not exceeding 10 kg, including laptops, notebooks, sub-notebooks, ruggedized notebooks, mobile workstations, mobile thin clients, and two-in-one notebooks when the keyboard and display portions are supplied as one integrated finished product. It supports model-specific, product-family, plant-average, and production-weighted foreground data packages, but every package must represent complete market-ready equipment rather than a bare board or one component.

The PCR covers the cradle-to-grave product system: material and component supply; inbound transport; final assembly, firmware loading, testing, rejects, packaging and distribution; operation in all relevant power modes; maintenance, repair, reuse or refurbishment when modelled; and collection, dismantling, recovery and disposal. It does not prescribe a single bill of materials, manufacturing location, service life, duty cycle, or end-of-life rate. Those quantities are product-, site-, market-, and scenario-specific and must be collected and disclosed.

Standalone tablets or slates without an integrated physical keyboard, desktop computers, integrated desktops, computer systems, servers, telephones, standalone displays, and automatic-data-processing units classified outside the reviewed portable-machine boundary are excluded. Motherboards, printed circuit board assemblies, displays, batteries, chargers, keyboards, storage devices, chassis, and other parts or accessories are inputs to a complete machine, not substitutes for its reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.portable-automatic-data-processing-machines-weighing-not-more-than-10-kg-such-as-laptop-ad01b84e |
| classification_refs | CPC 3.0 45220, exact scope reference |
| covered_products | Complete portable automatic data processing machines not exceeding 10 kg, including laptops, notebooks, sub-notebooks, ruggedized notebooks, mobile workstations, mobile thin clients, and two-in-one notebooks supplied as an integrated finished product |
| excluded_products | Individual models used as a proxy for the whole category; bare motherboards or PCBAs; displays, batteries, chargers, keyboards, storage units, chassis and other parts; standalone slates or tablets without an integrated physical keyboard; desktops, servers, computer systems, telephones and products classified outside CPC 45220 |
| representative_product | A declared model, product family, plant mix, or production-weighted market mix of complete portable computers; the represented configurations and weighting basis shall be disclosed |
| production_route | Raw-material and component production, component transport, final assembly and firmware loading, functional and safety testing, packaging, distribution, use and maintenance, and WEEE collection, dismantling, recovery and disposal |
| market_state | Finished, tested, packaged portable computer ready for sale or delivery, including only the accessories declared as part of the sold configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cradle-to-grave provision of complete portable automatic data processing equipment represented by the declared product configuration or production-weighted configuration mix |
| How much | 1 kg net mass of finished portable computer equipment at the manufacturer's last logistics platform, excluding distribution and consumer packaging |
| How well | Complete, functional, tested and market-ready equipment not exceeding 10 kg; component-only, bare-board and non-portable proxies are not conforming |
| How long or cycle | One declared reference service life and use profile; the RSL, annual operating-mode hours, market electricity mix, maintenance and end-of-life scenario shall be stated |
| reference_flow_link | All process inventories are normalized to 1 kg of the selected finished reference product flow; model- or unit-level records are converted with measured net equipment mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished equipment |
| Reference product flow | Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks `c4cb6070-944d-41be-a231-a0a2b9477174` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | represented model, family or configuration mix; production-volume weighting method; net equipment mass; included accessories and external power supply; display count, size and technology; CPU, GPU, memory and storage configuration; battery chemistry and rated capacity; manufacturing and final-assembly sites; production period; destination market; reference service life and product lifespan basis; default power-management settings; measured power modes and use-profile hours; maintenance and replacement assumptions; packaging composition; distribution routes; end-of-life geography and scenario |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product and every normalization denominator | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass of the complete configured equipment excluding distribution and consumer packaging; separately record included accessories and power supply, then normalize all results to 1 kg net finished equipment. |
| `unit_to_mass_conversion` | records collected per item, batch or sales unit | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item- or batch-based records using measured configuration-specific net mass and production-volume weighting; do not use a single model mass for a multi-configuration mix unless representativeness is demonstrated. |
| `bom_mass_reconciliation` | bill of materials, battery, PCBA, display, chassis and accessory records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile component and material mass to measured net equipment mass; record packaging separately and disclose stock change, moisture, adhesives, coatings and uncharacterized residuals. |
| `operational_energy_measurement` | active, short-idle, long-idle, sleep, alternative-low-power and off modes | Energy | kWh | Measure mode power with IEC 62623:2022 or an equally documented reproducible method, retain test configuration and default settings, and calculate lifetime energy from measured power, mode hours and declared RSL. |
| `transport_service_conversion` | inbound component and outbound product transport | Transport service | tkm | Calculate tonne-kilometres from shipment mass, actual distance and route; disclose transport mode, load factor, allocation and any air freight rather than using an unexplained generic distance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Complete market-ready portable equipment exiting final assembly and testing, anchored by a configuration-resolved BOM and net product mass; the product system nevertheless includes traced upstream materials and components and continues through use and end of life |
| starting_condition_role | The final assembly and test stage is the foreground mass-balance anchor, not a cradle-to-gate cut-off |
| product_classification_scope | Finished portable automatic data processing machines not exceeding 10 kg; standalone components and other computer classes remain distinct upstream or external product systems |
| recursive_input_rule | A purchased complete machine within the same product category shall remain an explicit upstream product input with its own conforming dataset; it shall not be disaggregated or relabelled as generic components solely to avoid recursion or double counting |
| upstream_dataset_requirement | Link all purchased materials, components, energy carriers, packaging and transport to representative upstream datasets. Batteries and accumulators, PCBA, electronic displays, microprocessors, copper and alloys, gold, silver, relevant rare earths and listed high-relevance electronic components shall never be removed by cut-off |
| disclosure | Declare configuration and production weighting, foreground sites, supplier-data coverage, electricity modelling, BOM completeness, excluded flows, allocation, distribution, RSL and use profile, repair and replacement assumptions, and end-of-life geography and treatment scenario |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_grave` | complete product system | Include material extraction and component production, transport, assembly and testing, packaging and distribution, use and maintenance, and end-of-life collection, dismantling, recovery and disposal. | `environdec-pcr-2024-06` |
| `boundary_component_completeness` | product BOM and upstream inventory | Include all batteries, PCBA, electronic displays, microprocessors and other high-relevance materials and components identified by the electronics PCR regardless of ordinary cut-off screening. | `environdec-pcr-2024-06` |
| `boundary_cutoff_disclosure` | any excluded inventory flow | Use all available data. Any cut-off requires sensitivity or conservative plausibility evidence, must not hide relevant burdens, and must preserve at least 95% coverage of energy use, product-content mass and environmental impact. | `environdec-pcr-2024-06` |
| `boundary_use_scenario` | operational energy, maintenance and replacement | Model delivered default settings and a declared use geography and profile; include all relevant power modes across RSL and separately disclose ICT-infrastructure energy if it is included. | `environdec-pcr-2024-06`; `iec-62623-2022`; `energy-star-computers-9-0` |
| `boundary_end_of_life` | discarded equipment and replaced parts | Keep separately collected WEEE visible through transport, depollution, dismantling, recovery and final disposal; document market-specific collection and treatment assumptions and do not assume recovery without evidence. | `environdec-pcr-2024-06`; `eu-weee-2012-19` |
| `boundary_capital_goods` | infrastructure and production equipment | Exclude ordinary capital goods unless made for one or few uses or inseparable from a selected generic dataset; disclose included infrastructure and test sensitivity when material. | `environdec-pcr-2024-06` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_supply` | Material and component supply | required | Always | Upstream materials, electronic components, battery, display, chassis, accessories and inbound logistics | Per 1 kg net finished equipment |
| `assembly_testing` | Final assembly, firmware loading and testing | required | Always | Foreground production and mass-balance anchor | 1 kg conforming finished equipment |
| `packaging_distribution` | Packaging and distribution | required | Always | Packaging production and delivery to declared market | Per 1 kg net finished equipment delivered |
| `use_maintenance` | Use, maintenance, repair and replacement | required | Always; repair, reuse and refurbishment sub-activities may be zero only with explicit scenario evidence | Operational energy and service-life scenario | Per declared RSL and use profile, normalized to 1 kg equipment |
| `end_of_life` | Collection and end-of-life treatment | required | Always | WEEE transport, depollution, dismantling, recovery and disposal | Per 1 kg equipment reaching the declared end-of-life scenario |

### Process: Material and component supply (`component_supply`)

#### Inputs

##### Product flows

###### Purchased materials, components and subassemblies (`purchased_components`)

Record the configuration-resolved BOM for semiconductors and microprocessors, PCB and PCBA, display modules, memory and storage, battery cells and pack, chassis and enclosure, keyboard and pointing device, wiring, cooling system, speakers, cameras, antennas, external power supply and declared accessories. Supplier datasets remain separate inputs; no component may replace the finished reference product.

- Selected flow: Product-specific purchased materials, components and subassemblies
- Flow property / unit: Mass / kg
- Amount rule: Supplier BOM mass entering the product system, including rejects and replacement inputs attributable to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_records`
- Sources: `environdec-pcr-2024-06`

###### Inbound component transport (`inbound_component_transport`)

Record actual supplier-to-assembly routes, shipment mass, distance, transport mode, fuel and load factor, retaining air freight as an explicit route.

- Selected flow: Inbound freight transport service
- Flow property / unit: Transport service / tkm
- Amount rule: Shipment mass multiplied by route distance, allocated to the represented configurations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply_chain_logistics`
- Sources: `environdec-pcr-2024-06`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified component set at assembly site (`qualified_component_set`)

Carry the complete received component set into final assembly with the same BOM identities and an explicit incoming-packaging balance.

- Selected flow: Qualified materials, components and subassemblies at assembly site
- Flow property / unit: Mass / kg
- Amount rule: Received component mass less documented incoming packaging and pre-assembly rejects, reconciled to inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_records`
- Sources: `environdec-pcr-2024-06`

##### Waste flows

###### Incoming packaging and rejected components (`incoming_supply_waste`)

Record all incoming packaging and rejected or damaged components by material, hazardous status and actual treatment route.

- Selected flow: Supplier packaging and rejected component waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled waste sent to each treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_operations_records`
- Sources: `environdec-pcr-2024-06`

##### Elementary flows

### Process: Final assembly, firmware loading and testing (`assembly_testing`)

#### Inputs

##### Product flows

###### Qualified materials and components (`assembly_components`)

Record the configuration-specific component set consumed in mechanical assembly, board integration, battery installation, firmware loading and testing.

- Selected flow: Qualified materials, components and subassemblies at assembly site
- Flow property / unit: Mass / kg
- Amount rule: Actual component withdrawals plus attributable replacement for assembly rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_records`
- Sources: `environdec-pcr-2024-06`

###### Assembly and test electricity (`assembly_electricity`)

Include electricity for assembly, clean-room or environmental controls attributable to production, firmware loading, burn-in and regular functional or safety testing.

- Selected flow: Site electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered assembly and test electricity allocated to conforming output after rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_operations_records`
- Sources: `environdec-pcr-2024-06`

###### Assembly auxiliaries and water (`assembly_auxiliaries`)

Record solder and flux, adhesives, cleaning agents, process gases, lubricants, compressed air, cooling and cleaning water, and other consumables that cross the foreground boundary.

- Selected flow: Site-specific assembly auxiliaries and water
- Flow property / unit: Mass, volume or energy / declared unit
- Amount rule: Metered, purchased or inventory-reconciled consumption by substance and use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_operations_records`
- Sources: `environdec-pcr-2024-06`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished portable automatic data processing machine (`finished_portable_computer`)

This is the only reference product output. It is a complete, tested and market-ready portable computer and not a single model proxy for the category unless the dataset explicitly declares a model-specific scope.

- Selected flow: Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks `c4cb6070-944d-41be-a231-a0a2b9477174`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net conforming finished equipment after assembly rejects
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Assembly rejects and production waste (`assembly_rejects`)

Record rejected finished units, defective components, solder dross, scrap, wastewater and other production waste by actual treatment route; include the inputs and energy consumed by rejected production.

- Selected flow: Assembly rejects and production waste by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste and reject records reconciled to BOM, purchases, output and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_operations_records`
- Sources: `environdec-pcr-2024-06`

##### Elementary flows

###### Direct site emissions (`assembly_direct_emissions`)

Record measured or permit-supported releases to air, water and soil from assembly and testing; do not duplicate elementary flows already contained in upstream datasets.

- Selected flow: Site-specific elementary emissions
- Flow property / unit: Substance-specific / declared unit
- Amount rule: Measured, monitored or mass-balance-derived direct emission by substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_operations_records`
- Sources:

### Process: Packaging and distribution (`packaging_distribution`)

#### Inputs

##### Product flows

###### Finished equipment entering packaging (`equipment_for_packaging`)

Carry the same finished product identity and net mass into packaging without adding packaging to the reference mass.

- Selected flow: Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks `c4cb6070-944d-41be-a231-a0a2b9477174`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net finished equipment
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

###### Distribution and consumer packaging (`product_packaging`)

Record every packaging layer by material and mass, including pallets or reusable transport packaging allocated to the shipment.

- Selected flow: Product-specific packaging materials
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass by material and allocation over reuse cycles where applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_distribution_records`
- Sources: `environdec-pcr-2024-06`

###### Outbound distribution transport (`outbound_distribution_transport`)

Represent transport from the manufacturer's last logistics platform to point of sale or use using actual routes or a sales-weighted market scenario.

- Selected flow: Outbound freight transport service
- Flow property / unit: Transport service / tkm
- Amount rule: Packaged shipment mass multiplied by route distance and allocated to the net equipment reference mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished equipment delivered
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_distribution_records`
- Sources: `environdec-pcr-2024-06`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Delivered portable computer (`delivered_portable_computer`)

Record delivery of the same complete equipment configuration to the declared market; packaging remains a separate flow.

- Selected flow: Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks `c4cb6070-944d-41be-a231-a0a2b9477174`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net finished equipment delivered to the use geography
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Packaging waste at point of use (`packaging_waste`)

Record collection and treatment of distribution and consumer packaging in the destination market.

- Selected flow: Packaging waste by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Packaging mass assigned to market-specific reuse, recycling, recovery and disposal routes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg net finished equipment delivered
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_distribution_records`
- Sources: `environdec-pcr-2024-06`

##### Elementary flows

### Process: Use, maintenance, repair and replacement (`use_maintenance`)

#### Inputs

##### Product flows

###### Delivered equipment (`equipment_in_use`)

Use the declared configuration or production-weighted mix, preserving the delivered default power-management settings and included accessories.

- Selected flow: Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks `c4cb6070-944d-41be-a231-a0a2b9477174`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net finished equipment entering the declared RSL
- Value mode: Fixed value (`fixed_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

###### Operational electricity (`use_electricity`)

Measure power in relevant modes and combine with mode hours, RSL and market electricity mixes. Do not substitute ENERGY STAR eligibility thresholds for measured activity data.

- Selected flow: Electricity supply in the declared use market
- Flow property / unit: Energy / kWh
- Amount rule: Sum of measured mode power multiplied by hours in each mode and RSL, including charging losses and declared external accessories
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared RSL and 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_profile_power_tests`
- Sources: `environdec-pcr-2024-06`; `iec-62623-2022`; `energy-star-computers-9-0`; `eu-reg-617-2013`

###### Maintenance and replacement inputs (`maintenance_replacements`)

Record actual or scenario-supported replacement batteries, external power supplies, storage devices, displays, keyboards and other service parts, plus service transport and energy.

- Selected flow: Product-specific maintenance and replacement inputs
- Flow property / unit: Mass, energy or transport service / declared unit
- Amount rule: Event count multiplied by measured part, energy and route amounts over RSL
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared RSL and 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_profile_power_tests`
- Sources: `environdec-pcr-2024-06`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Portable computing function over RSL (`portable_computing_function`)

Document that the declared product configurations provide the intended portable computing function for the stated RSL and use conditions; no universal performance score is inferred across the wide category.

- Selected flow: Declared portable computing function
- Flow property / unit: Service / declared RSL
- Amount rule: One declared RSL for the represented configuration mix
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_profile_power_tests`
- Sources: `environdec-pcr-2024-06`

##### Waste flows

###### Replaced parts and discarded equipment (`discarded_equipment_and_parts`)

Record the mass, timing and destination of every replaced part and the complete equipment leaving use, preserving battery and hazardous-component identity.

- Selected flow: Discarded portable equipment and replaced electronic parts
- Flow property / unit: Mass / kg
- Amount rule: Measured part mass and equipment mass assigned to documented collection routes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared RSL and 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `environdec-pcr-2024-06`; `eu-weee-2012-19`

##### Elementary flows

### Process: Collection and end-of-life treatment (`end_of_life`)

#### Inputs

##### Product flows

##### Waste flows

###### Collected WEEE and replaced parts (`collected_weee`)

Represent complete equipment and replaced parts collected separately for preparation for reuse or proper treatment; uncollected fractions remain explicitly assigned to the declared disposal scenario.

- Selected flow: Collected portable-computer WEEE and replaced parts
- Flow property / unit: Mass / kg
- Amount rule: Scenario fraction multiplied by discarded equipment and part mass, with collection geography and evidence retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared RSL and 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `environdec-pcr-2024-06`; `eu-weee-2012-19`

##### Elementary flows

#### Outputs

##### Product flows

###### Reusable components and recovered materials (`recovered_products`)

Record only components and materials that reach the documented point of substitution and meet technical, legal, market and environmental criteria; report potential substitution benefits separately.

- Selected flow: Reusable components and recovered materials by actual output category
- Flow property / unit: Mass / kg
- Amount rule: Measured treatment output reaching the point of substitution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg WEEE entering treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `environdec-pcr-2024-06`; `eu-weee-2012-19`

##### Waste flows

###### Treatment residues and final disposal (`eol_residues`)

Record depollution outputs, non-recovered fractions and residues sent to hazardous treatment, incineration without recovery or landfill.

- Selected flow: End-of-life treatment residues by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured or scenario-supported treatment mass balance after recovered outputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg WEEE entering treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `environdec-pcr-2024-06`; `eu-weee-2012-19`

##### Elementary flows

###### Direct treatment emissions (`eol_direct_emissions`)

Record direct releases from depollution, dismantling, thermal treatment and final disposal without duplicating emissions embedded in background treatment datasets.

- Selected flow: End-of-life elementary emissions
- Flow property / unit: Substance-specific / declared unit
- Amount rule: Facility measurement or representative treatment dataset amount by substance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg WEEE entering treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-weee-2012-19`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared manufacturing, assembly, testing and logistics | Avoid allocation by subdividing processes and collecting configuration-, line-, batch- or route-specific records whenever practicable. | `environdec-pcr-2024-06` |
| `allocation_physical` | inseparable shared processes with a causal physical relationship | Use a physical basis such as mass, machine time or energy only when it reflects how inputs and outputs change and revenue per mass or energy is not materially different. | `environdec-pcr-2024-06` |
| `allocation_economic` | inseparable shared processes without a justified physical relationship | Use representative economic values at the unit-process exit and report a sensitivity analysis; do not use price merely because mass data are inconvenient. | `environdec-pcr-2024-06` |
| `allocation_rejects` | defective components and rejected finished machines | Assign consumed materials, component burdens, energy and waste treatment for rejects to conforming output; do not allocate them away as a separate saleable product unless a documented recovered output reaches substitution. | `environdec-pcr-2024-06` |
| `allocation_waste_substitution` | reuse, recycling and energy recovery | Apply the point-of-substitution boundary: assign all treatment before substitution to the waste-generating system and later processing to the subsequent system; when substitution is uncertain, conservatively retain treatment in the studied product system. | `environdec-pcr-2024-06` |
| `allocation_mass_conservation` | all allocated processes | The sum of allocated inputs and outputs shall equal the measured process totals, with no double counting or omission; disclose the basis and allocation factors. | `environdec-pcr-2024-06` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_records` | `component_supply`; `assembly_testing` | component and net-product mass balance | engineering BOM, supplier declaration, weigh ticket, ERP issue and reject record | configuration id; production units; component id; supplier; material or component category; component mass; net unit mass; accessory inclusion; battery, PCBA and display identity; reject quantity; stock change | Controlled BOM export reconciled with calibrated unit and batch weighing and supplier composition evidence | kg and item | Per configuration revision and production batch; aggregate at least annually | At least one representative year; deviations justified | Every represented model, configuration and final assembly site | Production-volume-weight each configuration and normalize total attributable component mass to net conforming output mass | Approved BOM revision, calibration record, supplier declaration and signed reconciliation |
| `cp_supply_chain_logistics` | `component_supply` | inbound transport | purchase order, bill of lading, freight invoice and warehouse record | supplier and origin; receiving site; component mass; route legs; distance; mode; fuel; load factor; air-freight flag; warehouse energy if attributable | Join shipment documents to BOM receipts and calculate route-specific tkm | kg, km and tkm | Each shipment or representative lane updated annually | Same production period as represented output | Suppliers covering main parts and at least the supply-chain mass coverage declared by the dataset | Sum route-leg tkm by configuration and production-volume-weight to 1 kg output | Carrier document, route evidence, mass reconciliation and coverage report |
| `cp_site_operations_records` | `assembly_testing` | assembly inputs, energy, rejects, waste and direct emissions | meter, invoice, MES, maintenance, waste manifest and environmental monitoring record | line and site; production time; units and net mass; electricity; fuels; water; auxiliaries; test energy; reject reason and mass; waste type and destination; direct emission; stock change | Submeter where available; otherwise documented causal allocation from site totals, reconciled to production | kWh, MJ, kg, m3 and substance-specific units | Continuous or invoice period, aggregated monthly and annually | At least one representative year of normal operation | Every final assembly, firmware-loading and test site in the declared mix | Sum attributable operations, include rejects, production-volume-weight sites and normalize to 1 kg conforming output | Meter calibration, invoices, MES counts, permits, manifests and annual mass-energy balance |
| `cp_packaging_distribution_records` | `packaging_distribution` | packaging and outbound delivery | packaging specification, weigh record, sales shipment and freight record | packaging component and material; mass; reuse cycles; destination market; shipment mass; route distance; mode; load factor; repacking and packaging treatment | Weigh complete packaging set and link sales-weighted routes to shipped configurations | kg, km and tkm | Per packaging revision and shipment lane, reviewed annually | Representative sales year | All packaging suppliers and destination markets in scope | Allocate reusable packaging over documented cycles and sales-weight route results to 1 kg net equipment | Packaging drawing, scale calibration, freight evidence, sales weights and route coverage report |
| `cp_use_profile_power_tests` | `use_maintenance` | RSL, mode power, mode time, maintenance and replacements | accredited or controlled power test, default-settings record, field telemetry or survey, warranty and service record | configuration; OS and firmware; display setting; external power supply; battery state; active, short-idle, long-idle, sleep, alternative-low-power and off power; mode hours; RSL; market; electricity mix; service event and replacement part | Test representative configurations under IEC 62623:2022 or documented equivalent; use actual field profile when representative, otherwise a disclosed default scenario | W, h/year, kWh, years, item and kg | Per major hardware or firmware revision; use profile and RSL reviewed at dataset update | Test date and scenario period stated | Configurations and use markets represented by the dataset | Calculate configuration-level lifetime energy, then production- or sales-weight to 1 kg equipment; keep markets separate before weighting | Complete test report, instrument uncertainty, default-setting screenshots or records, weighting data and service evidence |
| `cp_end_of_life_scenario` | `use_maintenance`; `end_of_life` | collection, reuse, dismantling, recovery and disposal | producer take-back, recycler weighbridge, treatment report, market statistic and regulatory scenario record | geography; discarded and collected mass; route; preparation for reuse; depollution; dismantling input and output; recovered material; residue; hazardous destination; substitution evidence | Prefer operator mass balances; otherwise use current market-specific regulated scenario with explicit uncertainty and no invented recovery | kg, km and tkm | Annual operator data or scenario version | Current for declared destination market and compatible with RSL scenario | All destination markets in the sales-weighted scope | Conserve mass through collection and treatment; weight scenarios by sales or installed base and report recovery benefits separately | Recycler certificate, permits, weighbridge records, audited mass balance, regulation and scenario provenance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributable activity amount divided by net conforming finished-equipment mass in kg | activity amount; net conforming output mass; stock change; reject attribution | activity amount per 1 kg reference flow | `environdec-pcr-2024-06` |
| `calc_configuration_weighting` | product-family, plant-mix and market-mix datasets | Calculate each configuration first, then weight by conforming production units or sales units and measured net mass; preserve the weighting table and coverage | configuration activity; configuration units; unit mass; site or market share | production- or sales-weighted activity per 1 kg reference flow | `environdec-pcr-2024-06` |
| `calc_transport_service` | inbound and outbound logistics | tkm = shipped mass in tonnes multiplied by actual route distance in km, adjusted only by documented allocation or return-load convention | shipment mass; distance; mode; load factor; allocation | route-specific tkm per 1 kg reference flow | `environdec-pcr-2024-06` |
| `calc_lifetime_energy` | operational electricity | lifetime kWh = sum of measured mode power in kW multiplied by annual hours in that mode, multiplied by RSL; the annual mode hours shall be internally consistent and charging or external-power-supply losses shall follow the test boundary | measured mode power; mode hours; RSL; configuration and market weights | lifetime operational electricity per 1 kg reference flow | `environdec-pcr-2024-06`; `iec-62623-2022`; `energy-star-computers-9-0`; `eu-reg-617-2013` |
| `calc_mass_balance` | BOM, assembly, packaging and end-of-life treatment | inputs plus opening stock = products plus wastes plus direct releases plus closing stock; investigate and disclose any residual rather than silently scaling critical components | material and component inputs; product output; waste; releases; stock | reconciled mass balance and unexplained residual | `environdec-pcr-2024-06` |
| `calc_eol_scenario_weighting` | end-of-life geography mix | Weight collection and treatment routes by documented sales, installed-base or take-back shares; assign uncollected and unknown fractions conservatively and keep substitution benefits separate | market weights; collection fraction; treatment inputs and outputs; substitution evidence | WEEE route inventory per 1 kg discarded equipment | `environdec-pcr-2024-06`; `eu-weee-2012-19` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Demonstrate complete portable equipment, mass not exceeding 10 kg, exact product-flow UUID and Mass reference; reject component-only and wrong-CPC proxies | Product specification, scale record, configuration list and Tiangong identity reference |
| `dq_bom_completeness` | product content and packaging | Reconcile 100% gross content declaration for product and packaging where available and satisfy the PCR minimum 95% energy, mass and impact coverage; never cut off battery, PCBA, display, microprocessor or listed high-relevance materials | BOM reconciliation, supplier evidence, sensitivity assessment and excluded-flow register |
| `dq_specific_data` | directly controlled manufacturing and logistics | Use site-specific data for controlled processes, normally averaged over at least one representative year; production-weight multiple sites and confirm specific-data representativeness within five years | Meter and invoice records, production totals, confirmation date and weighting workbook |
| `dq_generic_data` | upstream and background datasets | Use attributional selected generic data that match technology, geography and time; use the latest database version where practicable, with reference year normally not older than ten years; identify proxy data and its contribution | Dataset metadata, version, representativeness assessment and proxy contribution report |
| `dq_use_measurement` | operational energy | Retain reproducible power-test configuration, uncertainty, default settings, mode definitions, mode hours, RSL and market electricity mix; do not treat certification limits as measured inventory | IEC 62623 or equivalent test report, ENERGY STAR 9.0 setup record, use-profile evidence and calculation workbook |
| `dq_market_and_route` | distribution, use and end of life | Make geographical coverage reflect actual sales and physical routes; preserve air freight, distinct electricity markets and regulated WEEE scenarios before weighting | Sales data, bills of lading, route evidence, electricity-mix provenance and EOL scenario records |
| `dq_hazardous_and_circularity` | product content and WEEE | Retain material declarations and identify batteries, hazardous substances and treatment destinations needed for safe depollution, reuse and recycling | RoHS declaration, supplier material declaration, treatment information and WEEE operator evidence |
| `dq_uncertainty_and_gaps` | all site-specific quantities | If reliable quantities are unavailable, require foreground collection or mark validation inconclusive; do not insert an unreferenced point value or a reasoned estimate into a publishable dataset | Gap register, collection request, uncertainty assessment and review decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_exact_reference_identity` | dataset reference flow | Require UUID `c4cb6070-944d-41be-a231-a0a2b9477174`, state-compatible Product flow semantics, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg; fail component, model-family-only or wrong-classification substitutions. | `unsd-cpc-3-0` |
| `validate_scope_and_qualifiers` | foreground package identity | Require complete portable equipment not exceeding 10 kg and every Required qualifier; a product-family or average dataset shall publish its configuration list, weighting and coverage. | `unsd-cpc-3-0`; `energy-star-computers-9-0`; `eu-reg-617-2013` |
| `validate_reference_mass` | normalization | Require measured net equipment mass and separate packaging mass; verify that all inventory results reproduce 1 kg reference output without counting packaging in the product mass. | `environdec-pcr-2024-06`; `eu-weee-2012-19` |
| `validate_lifecycle_completeness` | system boundary | Require material and component supply, assembly and testing, packaging and distribution, use and maintenance, and end-of-life stages; any zero or omitted activity requires evidence and a stated applicability decision. | `environdec-pcr-2024-06` |
| `validate_critical_components` | BOM and upstream linking | Require explicit battery, PCBA, display and microprocessor rows and evaluate copper, precious metals, relevant rare earths and listed electronic materials independently of cut-off. | `environdec-pcr-2024-06` |
| `validate_mass_balance` | component supply, assembly, packaging and EOL | Reconcile inputs, products, wastes, direct releases and stock changes; require investigation and disclosure of residuals and reject burdens. | `environdec-pcr-2024-06` |
| `validate_operational_energy` | use stage | Require measured mode power, internally consistent annual mode hours, RSL, default settings, test uncertainty and market electricity mix; fail any calculation that substitutes certification thresholds for product data. | `environdec-pcr-2024-06`; `iec-62623-2022`; `energy-star-computers-9-0`; `eu-reg-617-2013` |
| `validate_allocation` | shared processes and waste treatment | Require the allocation hierarchy, factors, conserved totals and economic-allocation sensitivity where used; require point-of-substitution evidence before recovered outputs cross the boundary. | `environdec-pcr-2024-06` |
| `validate_eol_traceability` | WEEE scenario | Require collection geography, discarded and collected mass, depollution and treatment routes, recovered outputs, residues and hazardous destinations; unknown recovery is not accepted as zero-burden recycling. | `environdec-pcr-2024-06`; `eu-weee-2012-19` |
| `validate_quantity_evidence` | all quantitative inventory | Accept collected records, calculations linked to collection, or cited external evidence; when reliable quantity evidence is missing, report the check as inconclusive and request foreground collection rather than fabricate a range. | `environdec-pcr-2024-06` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-, family-, plant- or production-weighted foreground dataset for complete portable automatic data processing equipment |
| downstream_use | `secondary_dataset`; `background_dataset` when configuration coverage, foreground evidence, allocation, use scenario and end-of-life scenario have been reviewed for the declared market |
| allowed_use | Model-specific product studies; supplier and corporate inventories; procurement comparisons between datasets with equivalent reference mass, configuration coverage, RSL, use profile, geography, system boundary and data quality; downstream process and lifecyclemodel construction |
| excluded_use | Component or bare-board modelling as a complete computer; representing the category with one narrow model without an explicit model-specific scope; comparisons across incompatible RSLs, performance/configuration mixes, markets or boundaries; claims of certification or regulatory compliance based only on this PCR |
| required_metadata | PCR id and version context; exact reference UUID; model or configuration list; production or sales weighting; net mass; included accessories; BOM and critical-component coverage; sites and period; electricity and logistics provenance; RSL and mode profile; maintenance; packaging; end-of-life geography; allocation; cut-offs; source and dataset versions |
| required_quality_disclosure | Specific, selected-generic and proxy data shares where calculated; temporal, geographical and technological representativeness; mass and energy reconciliation; excluded flows and sensitivity; measurement uncertainty; supplier coverage; use and EOL scenario uncertainty; unresolved data gaps |
| update_trigger | Hardware or BOM revision affecting represented mass or major components; new CPU, GPU, display or battery platform; changed assembly site or electricity supply; major firmware or default-power-management change; changed production or sales mix; material distribution, RSL, maintenance or WEEE scenario change; source, database or foreground data outside the stated representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, CPC code 45220 structure, https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml, retrieved 2026-08-09 | Product-category scope and classification boundary |
| `environdec-pcr-2024-06` | Standard (`standard`) | International EPD System, PCR 2024:06 Electronic and electric equipment, and electronic components (non-construction), version 1.0.1, valid to 2029-10-28, https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f, retrieved 2026-08-09 | Declared/reference unit, cradle-to-grave stages, manufacturing inventory, critical-component completeness, cut-off, allocation, data quality, electricity, use and end-of-life rules |
| `iec-62623-2022` | Standard (`standard`) | IEC 62623:2022, Desktop and notebook computers - Measurement of energy consumption, https://webstore.iec.ch/en/publication/65120, retrieved 2026-08-09 | Reproducible measurement of power modes and typical energy consumption |
| `energy-star-computers-9-0` | Official guidance (`official_guidance`) | U.S. EPA ENERGY STAR Program Requirements for Computers, Version 9.0, January 2025, https://www.energystar.gov/sites/default/files/2025-01/ENERGY%20STAR%20Computers%20Version%209.0%20Final%20Specification.pdf, retrieved 2026-08-09 | Notebook and related subtype definitions, delivered configuration, default settings, test configuration and mode-energy guidance |
| `eu-reg-617-2013` | Standard (`standard`) | Commission Regulation (EU) No 617/2013 on ecodesign requirements for computers and computer servers, https://eur-lex.europa.eu/eli/reg/2013/617/oj/eng, retrieved 2026-08-09 | Notebook product definition, technical disclosure and reliable, accurate, reproducible energy measurement |
| `eu-weee-2012-19` | Standard (`standard`) | Directive 2012/19/EU on waste electrical and electronic equipment, https://eur-lex.europa.eu/eli/dir/2012/19/oj/eng, retrieved 2026-08-09 | Separate collection, preparation for reuse, proper treatment, component and material information, recovery and disposal traceability |
| `eu-rohs-2011-65` | Standard (`standard`) | Directive 2011/65/EU on restriction of hazardous substances in electrical and electronic equipment, consolidated text, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02011L0065-20220701, retrieved 2026-08-09 | Hazardous-substance and supplier material-declaration quality evidence |
