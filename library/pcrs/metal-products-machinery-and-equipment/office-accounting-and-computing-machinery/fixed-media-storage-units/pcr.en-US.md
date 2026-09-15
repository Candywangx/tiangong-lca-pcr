---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.fixed-media-storage-units
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fixed media storage units

## 1. Scope and Applicability

This PCR applies to finished, fixed-media data storage units placed on the market for installation in automatic data
processing equipment, enterprise systems, or data centres. It covers hard disk drives (HDDs); assembled fixed
solid-state drives or flash storage units in which the non-volatile medium, controller, and read/write interface form
one delivered storage unit; hybrid HDD/solid-state units; and populated storage arrays or enclosures delivered as one
fixed-media storage product with their included drives, controllers, backplanes, power supplies, cooling devices,
embedded network elements, firmware, and internal connections.

The foreground data package ends at the manufacturer's gate after route-specific device manufacture or procurement,
mechanical and electronic assembly, populated-array or enclosure integration when applicable, firmware loading,
configuration, functional and power testing, quality release, and packaging. A dataset shall distinguish standalone
HDD, standalone fixed SSD or flash unit, hybrid device, and populated array or enclosure delivery. It shall declare
capacity, interface, medium, controller, redundancy, drive count, power-supply and cooling configuration,
manufacturing route, firmware or configuration state, and measured power characteristics.

Bare semiconductor dies or packaged NAND components; flash memory cards or other single solid-state media classified
as CPC 47550; removable disks, tapes, optical media and their drives; empty unpopulated enclosures; external storage
area network infrastructure; computer servers; removable consumer storage products; and data-centre building,
cooling, uninterruptible-power, network, installation, operation, maintenance, and end-of-life stages are excluded.
An assembled fixed SSD is included only as a complete read/write storage unit; evidence for a bare chip, package,
card, or other CPC 47550 medium shall never be extrapolated to the whole CPC 45271 leaf.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.fixed-media-storage-units |
| classification_refs | CPC 3.0: 45271, exact mapping context |
| covered_products | HDDs; assembled fixed SSD or flash storage units with controller and interface; hybrid fixed-media drives; populated arrays or enclosures delivered with included drives, controllers, internal interconnects, power supplies, cooling, firmware, and declared redundancy |
| excluded_products | Bare dies and packaged memory components; flash cards and single solid-state media under CPC 47550; removable magnetic, tape, optical, or flash media and their removable-media drives; empty enclosures; external SAN infrastructure; computer servers; consumer removable storage; use and end-of-life services |
| representative_product | A tested, saleable fixed-media storage unit at the manufacturer gate in one declared delivery configuration: standalone HDD, standalone fixed SSD or flash unit, hybrid drive, or populated array or enclosure |
| production_route | Route-specific media and electronic component supply; HDD or fixed-SSD device manufacture or purchased-device qualification; populated array or enclosure integration when applicable; firmware loading; configuration; functional and power testing; quality release; packaging |
| market_state | Finished and packaged at the manufacturer gate, with declared raw and usable capacity, interface, medium, controller, redundancy, drive count, power supplies, cooling, firmware, manufacturing route, and tested power state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished fixed-media storage unit capable of non-volatile data storage and read/write access in its declared delivery configuration |
| How much | 1 kg net finished storage unit at the manufacturer gate, excluding detachable transport packaging |
| How well | Passes the declared functional, capacity, interface, firmware, data-protection, redundancy, safety, quality, and power tests for the exact delivered model and configuration |
| How long or cycle | One completed production lot ending at manufacturer-gate release; the represented production period and any burn-in duration are declared; service life is not implied |
| reference_flow_link | The reference flow is the released output of `final_configuration_test_packaging`, normalized to 1 kg net finished storage unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fixed media storage units `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | delivery configuration: standalone HDD, standalone fixed SSD or flash unit, hybrid device, or populated array or enclosure; manufacturer and model; form factor; medium technology; raw and formatted usable capacity with decimal or binary convention; interface and transfer protocol; controller model and count; drive count and per-drive capacity; cache; redundancy or data-protection configuration; included chassis, backplane, power supplies, fans and network elements; AC or DC input; active, ready-idle and supported deep-idle power with test configuration and workload; firmware and capacity-optimizing features; manufacturing route and site; production period; burn-in or test duration; net product mass and excluded packaging |

When constructing a foreground data package, every applicable item in `Required qualifiers` must be declared in
dataset metadata, process notes, reference-flow comment, product description, or an equivalent data package field.
Missing qualifiers make the reference flow incomplete. Equal mass does not establish functional equivalence between
different capacities, storage media, interfaces, controllers, redundancy levels, performance classes, or delivery
configurations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Final reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize inventory to 1 kg net finished unit. Include every component delivered as part of the configured storage unit, including installed drives, controller, chassis, backplane, internal cabling, power supplies, and cooling; exclude detachable transport packaging and record it separately. |
| `capacity_declaration` | Storage capacity | Digital information capacity | byte, MB or MiB, GB or GiB, TB or TiB | Declare raw addressable capacity and formatted usable capacity separately, identify decimal or binary prefixes, and disclose space reserved for parity, checksums, spares, remapping, cache, snapshots, and system use. Do not compare products using an undeclared capacity convention. |
| `component_count_and_mass` | Drives, controllers, power supplies, fans, boards, and other count-based components | Mass and number of items | kg and item | Record component count and measured or supplier-specific mass for the same bill of materials. Do not apply a generic count-to-mass factor across models or routes. |
| `power_state_measurement` | Active, ready-idle, and supported deep-idle states | Power | W | Measure input power for the complete declared unit and configuration. Record input voltage and frequency, AC or DC supply, PSU count and redundancy, installed drives and controllers, firmware, ambient conditions, workload, averaging period, meter accuracy, and whether power-saving features are enabled. |
| `test_energy_calculation` | Burn-in, conditioning, functional testing, and power testing | Energy | kWh | Calculate test electricity from metered energy or from time-resolved power as kWh = sum(W × hours) / 1000. Keep factory test electricity separate from reported product operating-power attributes. |
| `energy_carrier_preservation` | Manufacturing electricity, fuels, heat, and supplied cooling | Energy or carrier-specific property | kWh or MJ; native fuel unit retained | Preserve quantities by carrier and site. Convert 1 kWh to 3.6 MJ only when needed and do not merge electricity, heat, fuel, or supplied cooling into one undifferentiated amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Route-specific purchased media, semiconductor and electronic components, mechanical parts, subassemblies, or complete fixed-media devices as received at the reporting manufacturer's boundary |
| starting_condition_role | Upstream product inputs entering device manufacture, same-category device supply, or populated array and enclosure integration |
| product_classification_scope | Finished fixed-media storage units within the semantic boundary of CPC 3.0 code 45271; CPC is mapping context and does not authorize inclusion of CPC 47550 bare or single solid-state media |
| recursive_input_rule | A purchased HDD, assembled fixed SSD, or other complete fixed-media unit used in a populated array or enclosure is recorded once as a same-category upstream product input. Do not recursively reconstruct its manufacture inside the integrator process when an upstream dataset already carries those burdens. |
| upstream_dataset_requirement | Use supplier-specific or representative upstream datasets for storage media, semiconductor packages, controllers, printed circuit boards, motors, heads, platters, enclosures, power supplies, cooling, cables, packaging, chemicals, utilities, and purchased fixed-media devices; disclose proxies and geography, technology, capacity, and date mismatches. |
| disclosure | Declare delivery configuration, system boundary, device-manufacture versus purchased-device route, HDD or SSD or hybrid medium, capacity convention, interface, controller and redundancy, included hardware and firmware, manufacturing and integration sites, burn-in and power-test conditions, excluded infrastructure and downstream stages, and same-category inputs handled by the recursive rule. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_delivered_unit` | All datasets | Include every component and subsystem integral to the delivered storage-unit architecture. For populated arrays or enclosures include installed drives, controllers, backplanes, internal network elements, chassis, power supplies, fans, cables, firmware, and integration; exclude external SAN and data-centre infrastructure. | `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign` |
| `boundary_route_distinction` | HDD, fixed SSD, hybrid, and array or enclosure routes | Keep HDD media, head, motor and enclosure manufacture distinct from fixed-SSD NAND package, controller, board and enclosure manufacture. Keep purchased-drive array integration distinct from in-house drive manufacture and prevent double counting through the recursive input rule. | `unsd-cpc-3-2025`; `epa-energy-star-storage-2-1-2022`; `seagate-enterprise-hdd-2016` |
| `boundary_foreground_operations` | Reporting manufacturer | Include route-specific assembly, cleaning, joining, firmware loading, formatting, configuration, functional testing, burn-in, power testing, quality release, internal handling, manufacturing utilities, process wastes, wastewater, direct emissions, and packaging when performed by or for the reporting manufacturer. | `eu-2019-424-storage-ecodesign`; `seagate-enterprise-hdd-2016` |
| `boundary_power_attribute_only` | Product power data | Record active, ready-idle, and supported deep-idle power as mandatory product attributes under the declared configuration and test. Do not add customer use-phase electricity, data-centre cooling, UPS, or external network energy to the manufacturer-gate foreground inventory. | `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign` |
| `boundary_exclusions` | Out-of-scope products and stages | Exclude bare chips and packages, flash cards and single CPC 47550 media, removable-media products, empty enclosures, servers, external SAN equipment, installation, operation, maintenance, refurbishment, and end-of-life unless an expanded study reports them separately without changing this producer-gate result. | `unsd-cpc-3-2025`; `epa-energy-star-storage-2-1-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fixed_media_device_supply` | Fixed-media device manufacture or purchased-device supply | required | Always required; select in-house HDD, in-house fixed-SSD or hybrid manufacture, purchased complete-device supply, or a disclosed combination | Establish route-specific fixed-media devices and prevent double counting of purchased same-category units | Qualified fixed-media device set entering final release or system integration |
| `array_enclosure_integration` | Populated array or enclosure integration | conditional | Required only when the delivered reference product includes multiple drives, a controller, chassis or enclosure, backplane, power supplies, cooling, internal network elements, or configured redundancy | Integrate qualified drives and system hardware into the declared delivery configuration | Integrated storage unit entering final configuration and testing |
| `final_configuration_test_packaging` | Final configuration, testing, quality release, and packaging | required | Always required | Load firmware, configure capacity and redundancy, conduct functional, burn-in and power tests, release quality, measure net mass, and package the product | 1 kg net finished fixed-media storage unit at the manufacturer gate |

### Process: Fixed-media device manufacture or purchased-device supply (`fixed_media_device_supply`)

#### Inputs

##### Product flows

###### Route-specific storage media and electronic components (`media_electronics_components`)

Record components entering in-house device manufacture. For HDD routes this includes declared platters, heads,
spindle motor, magnets, controller electronics and boards; for fixed SSD routes it includes assembled NAND packages,
controller, memory, printed circuit board and interface components. Bare memory evidence does not represent the
finished storage unit.

- Selected flow: Route-specific storage media and electronic components; select verified Tiangong product flows during dataset construction
- Flow property / unit: Mass / kg; component count retained
- Amount rule: Measured receiving, bill-of-materials, and production-issue quantities by component, supplier, model, and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per qualified fixed-media device set
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components_bom`
- Sources: `seagate-enterprise-hdd-2016`

###### Mechanical parts, enclosure, and joining materials (`mechanical_enclosure_inputs`)

Record route-specific housings, covers, bases, fasteners, seals, adhesives, internal cables, connectors, thermal
materials, labels, and other mechanical inputs used in a standalone device.

- Selected flow: Mechanical and enclosure inputs; select material- and geography-specific Tiangong flows during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured bill-of-materials and production-issue mass by material and part
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per qualified fixed-media device set
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components_bom`
- Sources: `seagate-enterprise-hdd-2016`

###### Purchased complete fixed-media devices (`purchased_fixed_media_devices`)

Record purchased HDDs, assembled fixed SSDs, or hybrid drives when the reporting site qualifies or integrates complete
devices rather than manufacturing them. Link each input to an upstream dataset and apply the recursive input rule.

- Selected flow: Fixed media storage units `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured received net mass and count by supplier, model, medium, capacity, interface, and destination configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per qualified fixed-media device set
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components_bom`
- Sources: `epa-energy-star-storage-2-1-2022`

###### Device-manufacturing utilities and process materials (`device_process_inputs`)

Record electricity, fuel, heat, supplied cooling, water, cleaning agents, process chemicals, gases, lubricants and
other consumables actually used for in-house component preparation, assembly, cleaning, joining and device testing.

- Selected flow: Route- and site-specific utilities and process materials; select verified Tiangong flows during dataset construction
- Flow property / unit: Carrier- or material-specific property / kWh, MJ, m3, kg, or native unit
- Amount rule: Metered use or reconciled purchase and stock records assigned to the represented route and production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per qualified fixed-media device set
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_process_materials`

##### Waste flows

#### Outputs

##### Product flows

###### Qualified fixed-media device set (`qualified_device_set`)

Record the measured net output mass and count of qualified standalone devices transferred to final release or to array
and enclosure integration, retaining medium, capacity, interface, controller, and route identity.

- Selected flow: Qualified fixed-media devices; internal product flow
- Flow property / unit: Mass / kg; item count retained
- Amount rule: Measured transfer mass and count for the same production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fixed-media device supply lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_quality`

##### Waste flows

###### Device-manufacturing rejects and wastes (`device_rejects_waste`)

Record rejected components, defective devices, metal, glass, electronic, chemical and packaging wastes gross by type
and destination; do not net recycling proceeds or recovered material against inputs.

- Selected flow: Route-specific manufacturing waste; select verified Tiangong waste flows during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented gross waste by source lot, waste type, treatment, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per qualified fixed-media device set
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`

##### Elementary flows

###### Direct device-manufacturing emissions and discharges (`device_direct_emissions`)

Record measured direct air emissions, wastewater substances, and other elementary flows from in-house manufacture by
substance and compartment. Do not infer emissions solely from purchased-material quantities.

- Selected flow: Substance- and compartment-specific elementary flows; select verified Tiangong flows during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated value from matched flow and concentration records under `calc_discharge_emission`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per qualified fixed-media device set
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`

### Process: Populated array or enclosure integration (`array_enclosure_integration`)

#### Inputs

##### Product flows

###### Qualified or purchased fixed-media devices (`integration_device_inputs`)

Record the exact drive count, mass, medium, model, capacity, interface and upstream dataset for devices installed in
the delivered array or enclosure.

- Selected flow: Fixed media storage units `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured installed net mass and count from configuration and bill-of-materials records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per integrated storage unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_configuration`
- Sources: `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign`

###### Controller, chassis, power, cooling, and interconnect hardware (`integration_system_hardware`)

Record included storage controllers, cache, boards, backplanes, chassis, power supplies, fans, internal network
elements, cables, fasteners, thermal materials and firmware-bearing hardware by exact configuration.

- Selected flow: Configuration-specific system hardware; select verified Tiangong flows during dataset construction
- Flow property / unit: Mass / kg; item count retained
- Amount rule: Measured bill-of-materials mass and count for the delivered configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per integrated storage unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_configuration`
- Sources: `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign`

###### Integration electricity and consumables (`integration_inputs`)

Record metered or reconciled electricity, cleaning agents, joining materials and other consumables for mechanical and
electrical integration.

- Selected flow: Site-specific electricity and integration consumables; select verified Tiangong flows during dataset construction
- Flow property / unit: Energy or material-specific property / kWh or kg
- Amount rule: Metered or reconciled use assigned to the integration lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per integrated storage unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_process_materials`

##### Waste flows

#### Outputs

##### Product flows

###### Integrated storage unit (`integrated_storage_unit`)

Record the integrated unit transferred to final configuration and testing, with all installed hardware, firmware,
capacity, controller, power-supply, cooling and redundancy configuration retained.

- Selected flow: Integrated fixed-media storage unit; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass and count by exact configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per array or enclosure integration lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_quality`

##### Waste flows

###### Integration rejects and waste (`integration_rejects_waste`)

Record rejected hardware, replaced parts, cut-offs, electronic waste and other integration waste gross by type and
destination.

- Selected flow: Configuration-specific integration waste; select verified Tiangong waste flows during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented gross waste by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per integrated storage unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`

##### Elementary flows

### Process: Final configuration, testing, quality release, and packaging (`final_configuration_test_packaging`)

#### Inputs

##### Product flows

###### Device or integrated unit entering final release (`final_unit_input`)

Record the qualified standalone device or integrated storage unit entering firmware loading, final configuration,
testing, release, mass measurement and packaging.

- Selected flow: Fixed-media device or integrated storage unit; internal product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured input mass and count reconciled to the same release lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per released fixed-media storage unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_quality`

###### Test electricity and release consumables (`test_release_inputs`)

Record electricity for conditioning, formatting, firmware loading, functional tests, burn-in and power tests, plus
consumables used for final quality release.

- Selected flow: Site-specific electricity and release consumables; select verified Tiangong flows during dataset construction
- Flow property / unit: Energy or material-specific property / kWh or kg
- Amount rule: Metered electricity or time-resolved power calculated under `calc_test_energy`, plus measured consumable issues
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per released fixed-media storage unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_power_functional_test`
- Sources: `epa-energy-star-storage-2-1-2022`

###### Product and transport packaging (`product_packaging`)

Record cartons, cushioning, films, bags, pallets, labels, manuals and other packaging separately from net reference
product mass.

- Selected flow: Material-specific packaging; select verified Tiangong product flows during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Verified mass per packaging article multiplied by issued count, reconciled to the release lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per released fixed-media storage unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `seagate-enterprise-hdd-2016`

##### Waste flows

#### Outputs

##### Product flows

###### Released fixed-media storage unit (`reference_product`)

Record the net finished mass and count of units passing declared capacity, interface, firmware, functional,
data-protection, redundancy, safety, quality and power tests at the manufacturer gate.

- Selected flow: Fixed media storage units `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net released fixed-media storage unit, derived from measured release-lot mass excluding detachable packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Final-test rejects and packaging waste (`final_rejects_waste`)

Record failed units, replaced parts, test consumables and packaging waste gross by type, cause, rework status and
destination.

- Selected flow: Test- and packaging-specific waste; select verified Tiangong waste flows during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented gross waste and rejects from the release lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared lines, equipment, utilities, tests, and sites | Subdivide by product route, model, lot, process, and site and use direct meters, bills of materials, production issues, equipment logs, or test records before allocation. Keep HDD, fixed SSD, hybrid, and array or enclosure routes separate where records permit. | `eu-pef-2021-2279` |
| `allocation_causal_driver` | Unmetered shared burdens | When subdivision is not feasible, use the closest documented causal driver, such as machine time, test-bay time, measured power-time, clean-room area-time, line throughput, component count, or processed mass. Report shares and confirm that they sum to one. | `eu-pef-2021-2279` |
| `allocation_multi_model_output` | Multiple saleable models or configurations | Prefer lot- or model-specific records. If a shared burden cannot be physically separated, allocate using a demonstrated physical relation; use economic allocation only when no defensible physical relation exists and disclose price basis, period, currency, shares, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_rejects_rework` | Rejected units, rework, recovered parts, and scrap | Assign rework and reject burdens to the process and model that caused them. Treat outputs without an intended product function or revenue as waste and do not silently net recycling revenue, recovered material, or avoided burdens against gross inputs. | `eu-pef-2021-2279` |
| `allocation_same_category_inputs` | Purchased fixed-media devices installed in arrays or enclosures | Carry the upstream dataset once for each purchased complete device and add only the integrator's foreground burdens. Do not re-add device-manufacturing burdens already represented upstream. | `epa-energy-star-storage-2-1-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_components_bom` | `fixed_media_device_supply` | Storage media, electronics, mechanical parts, enclosure, and purchased devices | Approved bill of materials, supplier receipt, production issue, and return record | part number; supplier; material or component description; HDD or SSD route; capacity; interface; controller; quantity; measured or supplier mass; opening stock; receipts; returns; closing stock; destination lot; upstream dataset | Reconcile approved bill of materials and stock movement to issued and returned quantities for each homogeneous lot | kg; item | Every bill-of-material revision and production lot | Full represented production period | All receiving and device-manufacturing sites in scope | Sum by part, supplier, route and lot; keep purchased complete devices separate from components | Approved BOM, supplier specification, receiving record, scale record, stock reconciliation, and upstream dataset link |
| `cp_utilities_process_materials` | `fixed_media_device_supply`; `array_enclosure_integration` | Electricity, fuel, heat, cooling, water, chemicals, gases, lubricants, cleaning and joining materials | Meter, invoice, stock, batch, equipment, and line log | carrier or material; quantity; unit; meter interval; equipment; line; route; lot; operating time; production output; allocation driver | Use dedicated meters and batch issues first; otherwise reconcile site totals and document a causal allocation | kWh; MJ; m3; kg; native carrier unit | Meter interval and every material issue; reconcile at least monthly | Full represented production period | All included production and integration sites | Preserve carriers and materials; sum by process, route and lot; report allocation shares | Meter calibration, invoice, stock balance, batch sheet, equipment log, and allocation workbook |
| `cp_integration_configuration` | `array_enclosure_integration` | Installed drives, controller, chassis, backplane, power supplies, cooling, cables, network elements, firmware, and redundancy | Configuration BOM, assembly traveller, firmware and test configuration record | SKU; installed drive model and count; per-drive capacity; controller model and count; cache; backplane; chassis; PSU model, count and redundancy; fan count; internal network elements; cables; firmware; RAID or data-protection mode; mass; serials | Reconcile configuration BOM, serial scan, assembly and test records for each unit or homogeneous lot | kg; item; byte | Every integrated unit or homogeneous configuration lot | Full represented production period | All included integration sites | Aggregate only identical configurations; preserve component counts and capacity conventions | Approved configuration, serial record, scale result, firmware record, assembly sign-off, and test report |
| `cp_power_functional_test` | `final_configuration_test_packaging` | Functional, capacity, burn-in, active, ready-idle, and deep-idle testing | Automated test log, calibrated power-meter file, test-bay meter, and release record | model; serial or lot; installed configuration; firmware; capacity result and convention; interface; workload; input voltage and frequency; PSU count and mode; ambient temperature; power samples; averaging period; active, ready-idle and deep-idle power; test duration; defects; disposition | Use calibrated true-RMS power measurement or dedicated test-bay metering; link all results to the exact tested configuration | W; kWh; hour; byte | Every released configuration; sampling only with declared plan and coverage | Full represented production period and complete burn-in or test cycle | All final-test and burn-in areas | Calculate configuration-specific averages; sum test energy separately; do not merge product power attributes with factory energy | Calibration certificate, raw time series, test method, configuration export, release sign-off, and sampling plan |
| `cp_output_quality` | all processes | Internal transfers, released product mass, count, capacity, configuration, quality, and yield | Transfer, scale, serial, test, release, and packing record | input mass; output mass; unit count; serials; model; configuration; raw and usable capacity; passed tests; rejects; rework; stock change; packaging mass; date | Weigh and reconcile the same lot or unit boundary and link to test and configuration records | kg; item; byte | Every production and release lot | Full represented production period | All included production, integration, test, and release sites | Sum only homogeneous products; calculate yields and residuals by process and lot | Calibrated scale, serial genealogy, transfer record, release report, and mass-balance review |
| `cp_packaging` | `final_configuration_test_packaging` | Product and transport packaging | Packaging BOM, supplier specification, sample weighing, issue and return record | article; material; supplier; mass per item; item count; recycled content; reusable trips; returns; losses; destination lot | Weigh representative articles and reconcile issued, returned, and scrapped counts | kg; item; trip | Every packaging specification and release lot | Full represented production period | All packaging and dispatch points in scope | Multiply verified mass per article by net issued count; divide reusable packaging only by documented completed trips | Supplier specification, sample weighing, packaging BOM, stock reconciliation, and return log |
| `cp_waste_emissions` | all processes | Rejects, scrap, wastewater, direct emissions, treatment, and destination | Waste ticket, scale, treatment log, discharge meter, laboratory sample, and emission record | process; lot; waste or substance identity; gross mass or volume; compartment; concentration; treatment; destination; recovery; date; calculation method | Weigh waste transfers; meter discharges; pair samples with matching flows and operating states; retain gross quantities | kg; m3; kg substance | Every transfer or treatment batch; sampling at declared frequency | Full represented production period | All included waste, discharge, and direct-emission points | Sum gross outputs by type, process, compartment and destination; never net credits against inputs | Scale ticket, licensed transfer record, treatment certificate, meter data, laboratory result, and mass or water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | Released reference product | Net reference mass = gross packed shipment mass - detachable product and transport packaging mass. Include all installed components integral to the delivered configuration. | `cp_output_quality`; `cp_packaging` | kg net finished storage unit | `epa-energy-star-storage-2-1-2022` |
| `calc_inventory_normalization` | Every inventory row | Normalized amount = gross amount assigned to the homogeneous product, lot, route, or configuration / net released reference mass from the same represented boundary. | Applicable collection protocol; `cp_output_quality` | amount per kg reference product |  |
| `calc_test_energy` | Conditioning, burn-in and test electricity | Test electricity = metered kWh or sum of time-resolved input power in W multiplied by interval hours and divided by 1000. Preserve the tested configuration, meter uncertainty, and test duration. | `cp_power_functional_test` | kWh per released unit and kWh/kg reference product | `epa-energy-star-storage-2-1-2022` |
| `calc_power_state` | Product power attributes | For each declared state and workload, report the arithmetic or time-weighted mean of valid input-power samples over the declared stable averaging period; retain configuration and uncertainty. Do not convert W to kWh without a declared scenario duration. | `cp_power_functional_test` | W by state, workload, and configuration | `epa-energy-star-storage-2-1-2022` |
| `calc_mass_balance` | Each manufacturing, integration, and release lot | Reconcile opening stock + received inputs = transferred or released products + rejects + waste + closing stock + documented residual, using consistent product and packaging boundaries. | `cp_components_bom`; `cp_integration_configuration`; `cp_output_quality`; `cp_packaging`; `cp_waste_emissions` | kg and residual percentage by process and lot |  |
| `calc_discharge_emission` | Measured wastewater or air substances | Emitted mass = matched discharge or exhaust flow × representative measured concentration after unit conversion. Do not apply a sample from another route or operating state without representativeness evidence. | `cp_waste_emissions` | kg substance by compartment |  |
| `calc_shared_burden` | Unmetered shared operations | Allocated amount = gross shared amount × declared causal share. Shares must use the hierarchy in Section 7 and sum to one for the shared amount. | Applicable collection protocol; production, machine, time, area, throughput, or price records | Allocated amount and allocation share | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_configuration` | Product and reference flow | Every result shall identify delivery configuration, model, medium, raw and usable capacity convention, interface, controller, drive count, redundancy, included hardware, firmware, manufacturing route, site, power configuration, and net-mass boundary. | Approved specification, configuration BOM, serial genealogy, firmware export, test report, and scale record |
| `dq_measurement` | Mass, count, capacity, utilities, power, test energy, wastes, and emissions | Use calibrated or verified instruments suitable for the measured range. Retain raw readings, conversions, sampling design, allocation, uncertainty where available, and reconciliation residuals. | Calibration certificate, raw meter file, scale check, test method, sample plan, and calculation workbook |
| `dq_temporal` | Foreground inventory | Cover the complete represented production and test cycles for every route and configuration. Continuous operations shall use a representative period of at least 12 months or disclose and justify a shorter campaign, start-up, or product-launch period. | Dated production, meter, purchase, stock, test, waste, release, and sales records |
| `dq_completeness` | Foreground boundary | Include all applicable processes and material storage media, electronics, mechanical parts, same-category device inputs, system hardware, utilities, process materials, packaging, yields, rejects, wastewater, and direct emissions; quantify or justify every omission. | Process map, BOM reconciliation, mass and energy balances, omission register, and reviewer sign-off |
| `dq_upstream_representativeness` | Upstream datasets | Match medium technology, component type, capacity, model generation, interface, controller, geography, electricity system, supplier, and time as closely as available. Disclose each proxy and expected direction of bias. | Supplier data, upstream dataset metadata, technology comparison, and proxy assessment |
| `dq_power_test_configuration` | Product power attributes | Power values shall be traceable to the exact delivered or explicitly representative configuration, workload, active or idle state, input supply, firmware, power-saving settings, ambient conditions, averaging period, and calibrated meter. | Test configuration export, raw time series, calibration record, test report, and representativeness justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_product_scope` | Product identity | Fail when the product is a bare chip or package, flash card or other single CPC 47550 medium, removable-media unit, empty enclosure, server, external SAN device, or another excluded product; fail when an assembled fixed SSD is not demonstrably a complete controller-and-interface read/write unit. | `unsd-cpc-3-2025`; `epa-energy-star-storage-2-1-2022` |
| `validation_reference_identity` | Reference flow | Fail when product flow UUID `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg are not used for the generic reference identity, or when the product classification does not resolve to CPC 3.0 45271. |  |
| `validation_configuration` | Required qualifiers | Fail when delivery configuration, medium, raw and usable capacity convention, interface, controller, drive count, redundancy, included hardware, firmware, manufacturing route, net mass, and power-test configuration are missing or internally inconsistent. | `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign` |
| `validation_process_coverage` | Process inventory | Fail when `fixed_media_device_supply` or `final_configuration_test_packaging` is missing, when `array_enclosure_integration` applies but is omitted, or when in-house device manufacturing and purchased-device upstream burdens are double counted. | `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign` |
| `validation_mass_balance` | Components, products, packaging, rejects, and waste | Fail when process and lot mass balances are not reconciled, when packaging is included in net reference-product mass, when installed integral components are excluded from it, or when recycling and treatment credits are silently netted. | `seagate-enterprise-hdd-2016` |
| `validation_power` | Product power and factory test energy | Fail when reported W lacks state, workload and exact configuration; when factory test energy and customer use-phase energy are mixed; or when W is converted to kWh without a declared duration. | `epa-energy-star-storage-2-1-2022` |
| `validation_capacity` | Capacity and redundancy | Fail when raw and usable capacity are conflated, decimal and binary units are mixed without conversion, or parity, spares, checksums, cache, remapping, snapshots and system-reserved space materially affecting usable capacity are undisclosed. | `epa-energy-star-storage-2-1-2022` |
| `validation_allocation` | Shared and multi-output operations | Fail when subdivision was feasible but not attempted, the allocation driver lacks a causal or documented relationship, shares do not sum to one, or economic allocation lacks price basis, period, currency and sensitivity. | `eu-pef-2021-2279` |
| `validation_no_media_extrapolation` | Interpretation and comparison | Fail any use of bare NAND, packaged memory, flash-card, or other CPC 47550 evidence as a whole-product inventory for CPC 45271; fail claims that equal kg or equal nominal capacity alone establishes equivalence across HDD, SSD, hybrid, or array configurations. | `unsd-cpc-3-2025`; `epa-energy-star-storage-2-1-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturer-gate data package for one homogeneous fixed-media storage-unit model, route, site, and delivery configuration |
| downstream_use | May be published after review as a `secondary_dataset` or `background_dataset` for equipment, enterprise-system, and data-centre product models and may support downstream `process` and `lifecyclemodel` projections |
| allowed_use | Product-footprint, supply-chain inventory, procurement, manufacturing-improvement, and background modelling where capacity, medium, interface, controller, redundancy, hardware, firmware, power, geography, technology, route, time, and mass qualifiers are representative |
| excluded_use | Bare-chip or CPC 47550 extrapolation; removable-media modelling; functional equivalence based only on kg or nominal capacity; use-phase electricity without a declared workload and duration; data-centre infrastructure claims; another model, route, capacity, redundancy level, or array configuration without representativeness evidence |
| required_metadata | PCR id and version; manufacturer and model; delivery configuration; HDD, fixed SSD, hybrid or array route; raw and usable capacity and unit convention; interface and protocol; controller; drive count; cache; redundancy and data-protection mode; included chassis, backplane, PSU, cooling and network elements; firmware; power states and test conditions; manufacturing and integration sites; reference period; net-mass and packaging boundary; allocation; upstream proxies; Tiangong identities |
| required_quality_disclosure | Primary-data share; temporal, geographic and technological representativeness; BOM and serial coverage; calibration and test evidence; mass and energy-balance residuals; power-test configuration and uncertainty; waste and emission completeness; allocation; supplier and upstream-data gaps; proxy limitations; unresolved route-specific quantitative evidence |
| update_trigger | Change in medium technology, model generation, capacity, interface, controller, drive count, redundancy, chassis, power supply, cooling, firmware, manufacturing route or site, supplier BOM, test procedure, power-management setting, allocation, packaging, upstream dataset, or Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-09) | CPC 45271 identity and exclusions; separation of fixed-media storage units from removable media and CPC 47550 single solid-state media |
| `epa-energy-star-storage-2-1-2022` | standard | U.S. Environmental Protection Agency, *ENERGY STAR Program Requirements for Data Center Storage, Eligibility Criteria Version 2.1*, 19 January 2022, https://www.energystar.gov/sites/default/files/asset/document/ENERGY%20STAR%20Data%20Center%20Storage%20Version%202.1%20Final%20Specification_0.pdf (retrieved 2026-08-09) | Complete storage-product boundary, storage device and controller distinctions, HDD/SSD and array configurations, raw and usable capacity, redundancy, power states, test configuration, and reporting fields |
| `eu-2019-424-storage-ecodesign` | standard | European Commission, *Commission Regulation (EU) 2019/424 of 15 March 2019 laying down ecodesign requirements for servers and data storage products*, CELEX 32019R0424, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019R0424 (retrieved 2026-08-09) | Data storage product architecture, HDD and SSD definitions, integral versus external infrastructure boundary, power supplies, resource efficiency, repairability and product-information requirements |
| `eu-pef-2021-2279` | official_guidance | European Commission, *Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods*, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32021H2279 (retrieved 2026-08-09) | Allocation hierarchy: subdivision or system expansion first, then physical relationship, with other relationships only when necessary; data quality and disclosure design |
| `seagate-enterprise-hdd-2016` | dataset | Seagate Technology, *Enterprise Performance 10K HDD Sustainability Report*, DS1663.4-0911GB, March 2016, https://www.seagate.com/gb/en/global-citizenship/product-sustainability/enterprise-performance-10k-hdd-sustainability-report/ (retrieved 2026-08-09) | HDD bill-of-material grouping into enclosure, media, electronics, other parts and packaging; capacity-qualified product reporting; corroboration that component and packaging mass must remain configuration-specific |
