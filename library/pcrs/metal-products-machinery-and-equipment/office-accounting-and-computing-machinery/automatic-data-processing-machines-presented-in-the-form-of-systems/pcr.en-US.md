---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.automatic-data-processing-machines-presented-in-the-form-of-systems
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Automatic data processing machines presented in the form of systems

## 1. Scope and Applicability

This PCR applies to complete automatic data processing (ADP) systems that are configured, integrated, tested, and released as one finished factory-gate delivery. A covered system may combine compute nodes, storage, network and control units, input/output units, chassis or racks, power conversion or distribution, integrated thermal-management hardware, cabling, and other hardware supplied under one configuration and delivery boundary.

The PCR is configuration-specific. It does not permit a single server, desktop computer, portable computer, standalone storage unit, monitor, printer, network card, or other peripheral to represent the complete system. Hardware sold separately remains outside the reference product unless the sales configuration, bill of materials (BOM), and acceptance record show that it is delivered as part of the integrated system.

The foreground boundary covers component and subassembly receipt, system integration and assembly, configuration or firmware loading, factory acceptance and burn-in testing, rework attributable to accepted production, delivery packaging when supplied, and release of the finished system at the manufacturing plant. Upstream production of purchased hardware and materials is represented by product-specific upstream datasets. Distribution after the factory gate, installation at the data centre or customer site, facility construction and shared facility infrastructure, operation, maintenance, refurbishment, and end-of-life are excluded from this production dataset unless separately modelled downstream. A rack, power-distribution unit, or cooling unit is included only when it is part of the contracted delivered ADP system; general data-centre infrastructure is not.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.automatic-data-processing-machines-presented-in-the-form-of-systems |
| classification_refs | CPC 3.0: 45240 — Automatic data processing machines presented in the form of systems |
| covered_products | Complete multi-unit ADP systems delivered under one configuration, including enterprise computing systems, data-centre computing systems, integrated compute-and-storage systems, blade or multi-node systems with their delivered chassis, and other configured combinations of ADP units. |
| excluded_products | A single server or computer; portable or desktop computers; a single-housing ADP machine; separately sold storage, input, output, display, printing, networking, controller, accelerator, or peripheral units; loose parts; software-only products; data-centre buildings and facility infrastructure not included in the contracted system. |
| representative_product | A production-weighted, explicitly documented configuration of a complete enterprise or data-centre ADP system; no one server or peripheral is a representative product for the category. |
| production_route | Configuration-specific receipt of hardware and subassemblies; system integration and assembly; software or firmware configuration; factory acceptance or burn-in testing; rework and waste handling; delivery packaging where applicable; factory-gate release. |
| market_state | Finished, configured, tested ADP system at the manufacturing plant, with included hardware and packaging boundary declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate delivery of a complete ADP system in its actual configured, integrated, and acceptance-tested hardware configuration. |
| How much | 1 kg net mass of the finished system hardware; separately supplied transport packaging is excluded from net product mass and inventoried separately. |
| How well | The delivered hardware set is complete against the configuration-controlled BOM and factory acceptance record, and every included compute, storage, network/control, I/O, chassis/rack, power, thermal-management, cabling, and bundled peripheral class is disclosed. |
| How long or cycle | One accepted production lot or configuration release at the factory gate; this mass reference is not a use-year or computing-service functional unit. |
| reference_flow_link | One-to-one with the accepted reference product output exchange, normalized from the measured net mass of the delivered configuration to 1 kg. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Automatic data processing machines presented in the form of systems `5476c8d0-2b87-4bb4-8024-ec5c7e3213b4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | system configuration ID and BOM revision; product family or model range; number and type of compute, storage, network/control, and I/O units; installed processor/socket, accelerator, memory, and storage configuration; chassis/rack, power-supply/distribution, thermal-management, cabling, and bundled-peripheral inclusion; net hardware mass; packaging inclusion and mass; factory-gate geography; production period; acceptance-test basis |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing configuration, BOM, or delivered-hardware disclosure makes the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the accepted system output to 1 kg of measured net finished-system hardware. Record packaging separately and do not include non-delivered factory fixtures or general data-centre infrastructure. |
| `configuration_mass_reconciliation` | configuration-controlled BOM and finished output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile BOM-line masses, incorporated consumables, accepted output, rejects, and other material losses for the same configuration and production lot. Investigate and disclose unexplained imbalance rather than scaling an incomplete BOM. |
| `count_to_mass_conversion` | BOM lines recorded by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts to mass only with configuration-specific measured piece mass, supplier mass data, or a documented engineering BOM value; retain count, conversion factor, and source record. |
| `family_weighting` | product-family or production-mix datasets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calculate a family result from configuration-level inventories and actual production or shipment weights. Preserve each configuration ID and weighting record; do not substitute one low-end, typical, high-end, or single-server configuration for the family. |
| `mass_is_not_service_equivalence` | interpretation and comparison | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The kg reference normalizes the production inventory only. Comparisons between systems require a separately defined equivalent computing or storage function, capacity, performance, utilisation profile, and lifetime. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt at the integration boundary of the actual configuration-controlled hardware, subassemblies, consumables, and packaging, each with quantity and upstream dataset identity; technology-specific in-house component processes are linked upstream when applicable. |
| starting_condition_role | Cradle-to-factory-gate foreground production start for system integration, testing, and release; purchased hardware carries upstream production burdens. |
| product_classification_scope | Complete ADP systems delivered as configured combinations of units. CPC 45240 is mapping context, not authority to include a single machine, standalone unit, part, or peripheral. |
| recursive_input_rule | If an input is already a complete ADP system in this same semantic category, record it once with its upstream system dataset and model only the additional foreground integration or modification. Do not recursively explode or reapply this PCR to the same system input. |
| upstream_dataset_requirement | Every materially distinct BOM line or disclosed aggregation shall use a product-, technology-, geography-, and time-representative upstream dataset. A generic single-server, desktop, or peripheral dataset cannot stand in for the complete system or for unrelated BOM classes. |
| disclosure | Declare configuration ID, BOM revision, included and excluded delivered hardware, net product and packaging masses, production site and period, upstream-data coverage, in-house versus purchased component treatment, test profile, allocation basis, cut-offs, and any downstream stages excluded. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_system_delivery` | reference product and foreground boundary | Include the actual delivered configuration through integration, configuration, acceptance testing, attributable rework, packaging where supplied, and factory-gate release. The output is the complete system, not one constituent unit. | `unsd-cpc-45240`; `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023` |
| `boundary_no_single_device_proxy` | category coverage | Reject a dataset that uses one server, desktop, storage unit, display, printer, network unit, or other peripheral as the reference or inventory proxy for the complete ADP system. | `unsd-cpc-45240`; `energy-star-computer-servers-v4-2023`; `smith-mann-lal-2026` |
| `boundary_component_and_assembly_coverage` | purchased and in-house hardware | Consider raw-material acquisition, component or parts production, and assembly for every applicable hardware class. Represent purchased items with upstream datasets and separately model technology-specific in-house production. | `itu-t-l1410-2024`; `eu-2019-424-consolidated` |
| `boundary_included_hardware_test` | rack, power, cooling, I/O, and peripherals | Include hardware only when the configuration-controlled BOM and delivery contract place it inside the finished system. Exclude general customer-site or data-centre infrastructure and separately sold peripherals. | `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated` |
| `boundary_downstream_stages` | distribution, installation, use, maintenance, refurbishment, and end-of-life | Exclude post-factory-gate stages from this production dataset and add them as separate downstream processes with system-specific service, lifetime, utilisation, energy, maintenance, and end-of-life scenarios. | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `boundary_cutoff_disclosure` | all foreground and upstream flows | Avoid cut-offs where practicable. Any excluded process or flow shall be identified, justified for mass, energy, and environmental significance, and tested for cumulative and configuration-dependent effects. | `itu-t-l1410-2024`; `ec-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `system_integration_test_and_factory_release` | System integration, configuration, testing, and factory-gate release | required | Always required for a covered finished system. Packaging, cooling media, and direct emissions are recorded when applicable to the declared delivery and test route. | Foreground production and delivery-boundary process | 1 kg accepted net finished-system hardware at factory gate |

### Process: System integration, configuration, testing, and factory-gate release (`system_integration_test_and_factory_release`)

#### Inputs

##### Product flows

###### Compute hardware in the delivered configuration (`compute_hardware_input`)

Record every compute node, processor board, blade, accelerator-bearing unit, mainframe unit, or other compute assembly included in the delivered configuration. Retain BOM-line identity and do not collapse the system to one server proxy.

- Selected flow: Configuration-specific compute hardware product flow(s); select an exact Tiangong UUID for each materially distinct BOM line or disclosed homogeneous aggregation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured or supplier-documented mass of each included compute-hardware BOM line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_bom`
- Sources: `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`

###### Memory and storage hardware (`memory_storage_hardware_input`)

Record installed memory modules, storage devices, storage enclosures, controllers, and other storage assemblies supplied within the configuration, separated when technology or upstream dataset differs.

- Selected flow: Configuration-specific memory and storage product flow(s); select exact Tiangong UUIDs during data-package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: BOM-line quantity multiplied by measured or supplier-documented unit mass, reconciled to installed configuration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_bom`
- Sources: `itu-t-l1410-2024`; `eu-2019-424-consolidated`; `energy-star-computer-servers-v4-2023`

###### Network, control, and input/output hardware (`network_control_io_hardware_input`)

Record switches, network interfaces, control units, I/O units, interconnect modules, cables, and bundled user I/O hardware only when included in the contracted system delivery.

- Selected flow: Configuration-specific network, control, I/O, and interconnect product flow(s); select exact Tiangong UUIDs during data-package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Configuration-controlled BOM mass for each included hardware class
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_bom`
- Sources: `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`

###### Chassis, rack, power, and integrated thermal-management hardware (`chassis_power_thermal_hardware_input`)

Record chassis, racks or frames, enclosures, power supplies, power-distribution hardware, fans, cold plates, heat exchangers, pumps, or other thermal hardware when included in the delivered configuration. Do not include shared facility power or cooling plant unless sold as part of the system.

- Selected flow: Configuration-specific chassis, rack, power, and integrated thermal-management product flow(s); select exact Tiangong UUIDs during data-package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Configuration-controlled BOM mass for hardware within the contracted delivery boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_bom`
- Sources: `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated`

###### Assembly consumables and incorporated ancillary materials (`assembly_consumables_input`)

Record fasteners, brackets, adhesives, solder or joining materials, labels, and other consumables incorporated in the system or consumed by integration and attributable to accepted output.

- Selected flow: Material-specific product flow(s); select exact Tiangong UUIDs by material and supply state during data-package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Material issues to the production lot minus documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_packaging_and_utilities`
- Sources: `itu-t-l1410-2024`

###### Delivery packaging (`delivery_packaging_input`)

Record primary, secondary, and reusable packaging supplied with the finished system, separated by material and reuse status. Packaging mass is not included in the 1 kg net product reference.

- Selected flow: Material-specific packaging product flow(s); select exact Tiangong UUIDs during data-package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Packaging BOM or measured packaging issued per accepted delivery configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_packaging_and_utilities`
- Sources: `itu-t-l1410-2024`; `ec-pef-2021-2279`

###### Integration and assembly electricity (`integration_electricity_input`)

Record metered electricity for mechanical assembly, cabling, firmware or software loading, internal material handling, and other integration activities. Keep it separate from acceptance-test electricity where meters or production controls permit.

- Selected flow: Geography-, voltage-, and supplier-specific electricity product flow; select an exact Tiangong UUID during data-package construction
- Flow property / unit: Energy / kWh
- Amount rule: Metered integration-stage electricity minus documented non-production baseline, allocated to accepted output by causal stage records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_energy`
- Sources: `itu-t-l1410-2024`; `ec-pef-2021-2279`

###### Factory acceptance and burn-in electricity (`acceptance_test_electricity_input`)

Record electricity consumed by configuration-specific diagnostics, functional tests, burn-in, and retest. Retain test duration, load profile, and the tested configuration.

- Selected flow: Geography-, voltage-, and supplier-specific electricity product flow; select an exact Tiangong UUID during data-package construction
- Flow property / unit: Energy / kWh
- Amount rule: Test-bench or system meter reading for the accepted lot, including attributable retest and excluding unrelated laboratory loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_energy`
- Sources: `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`

###### Water, coolant, and refrigerant make-up used in integration or testing (`test_media_input`)

Record only media consumed by foreground integration, leak testing, thermal validation, or factory acceptance. Hardware fill retained in the product is also represented in the BOM mass balance.

- Selected flow: Medium-specific water, coolant, or refrigerant product flow; select an exact Tiangong UUID during data-package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter, issue, and return records for the declared configuration and production lot; zero only with documented non-applicability
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_packaging_and_utilities`
- Sources: `itu-t-l1410-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete ADP system at factory gate (`finished_adp_system_output`)

The output is the complete configured and acceptance-tested system represented by the exact generic CPC 45240 product flow. Packaging is inventoried separately from net product mass.

- Selected flow: Automatic data processing machines presented in the form of systems `5476c8d0-2b87-4bb4-8024-ec5c7e3213b4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed reference output after normalization from measured accepted net system mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_output_and_acceptance`
- Sources:

##### Waste flows

###### Rejected electronic hardware and assembly scrap (`electronic_hardware_scrap_output`)

Record rejected boards, modules, drives, cables, metal or plastic hardware, and destructive-test items by material or treatment route. Reworked items returned to the accepted product are not waste.

- Selected flow: Treatment-route-specific electronic or material waste flow; select exact Tiangong UUIDs during data-package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste-transfer and production-reject records attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_acceptance`
- Sources: `itu-t-l1410-2024`

###### Packaging, consumable, and test-media wastes (`factory_waste_output`)

Record incoming packaging waste, spent consumables, wastewater, and spent coolant or refrigerant by physical state and treatment route without netting recycling revenue against inventory quantities.

- Selected flow: Treatment-route-specific waste flow(s); select exact Tiangong UUIDs during data-package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste manifests, service records, or measured discharge quantities attributable to the accepted lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_acceptance`
- Sources: `itu-t-l1410-2024`; `ec-pef-2021-2279`

##### Elementary flows

###### Direct foreground air and water emissions (`direct_factory_emissions_output`)

Record measured or permit-calculated refrigerant releases, volatile compounds, particulate releases, and direct water emissions caused by integration, testing, cleaning, or rework. Do not duplicate emissions already embedded in electricity, material, or waste-treatment datasets.

- Selected flow: Substance- and compartment-specific elementary flow(s); select exact Tiangong UUIDs during data-package construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered, mass-balance, or permit-calculated direct release for the production lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net finished-system hardware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_acceptance`
- Sources: `itu-t-l1410-2024`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared integration, testing, rework, and packaging operations | Prefer separate meters, production orders, test-bench logs, and material issues for each configuration or homogeneous production lot so allocation is avoided. | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `allocation_causal_shared_resources` | unavoidable shared factory inputs and emissions | When subdivision is not possible, use a documented physical driver that causes the burden, such as test-bench time and measured power, machine time, handled mass, or packaging count. Economic allocation is allowed only when no defensible physical relationship exists and its effect is disclosed. | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `allocation_rework_and_rejects` | rework, retest, rejects, and scrap | Assign rework and retest to the configuration and lot that caused them. Allocate common scrap handling by measured waste mass and treatment route; do not credit recycling revenue inside the foreground production quantity. | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `allocation_family_configuration_mix` | product-family or production-mix result | Build the result from separate configuration inventories weighted by actual accepted production or shipments for the declared period. A single server or one representative configuration cannot absorb the burdens of the family. | `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated`; `smith-mann-lal-2026` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_configuration_bom` | `system_integration_test_and_factory_release` | Delivered hardware and subassembly inputs | Configuration-controlled BOM, supplier specification, receiving record, and measured mass | configuration_id; bom_revision; bom_line_id; component_class; supplier_model; quantity; unit_mass_kg; mass_source; upstream_dataset_uuid; integrated_or_bundled; production_lot | Export the released as-built BOM; verify quantities against receiving and build records; use calibrated weighing or supplier mass; map each material class to an upstream dataset. | item and kg | Every configuration revision and production lot | Full declared reporting period; retain the BOM effective dates | Every integration site in scope | Sum line mass as quantity × unit mass within configuration and lot; aggregate only homogeneous lines with the same technology and upstream dataset. | Approved BOM; engineering change record; supplier specification; scale calibration; receiving/build record; upstream-dataset mapping |
| `cp_materials_packaging_and_utilities` | `system_integration_test_and_factory_release` | Consumables, packaging, water, coolant, and refrigerant | Material issue/return record, packaging BOM, meter, purchase record, and service log | configuration_id; lot_id; material_id; material_state; issued_quantity; returned_quantity; incorporated_quantity; packaging_level; reusable_cycles; meter_start; meter_end; refill_or_recovery_mass | Reconcile stores issues and returns; weigh packaging; read dedicated meters where present; reconcile coolant and refrigerant issues, recovery, and retained fill. | kg and m3 where the source record uses volume | Each lot, delivery, meter interval, or service event | Full declared reporting period | Every integration and test site in scope | Net issues = issued − returned; convert volume to mass only with measured or documented density and conditions; normalize to accepted net system mass. | Stores ledger; packaging specification; calibrated meter/scale; purchase invoice; refrigerant or coolant service log |
| `cp_stage_energy` | `system_integration_test_and_factory_release` | Integration and acceptance-test electricity | Meter interval, equipment log, test-bench log, and production schedule | site_id; meter_id; stage_code; start_time; end_time; meter_start_kwh; meter_end_kwh; baseline_kwh; configuration_id; lot_id; test_profile; accepted_output_kg | Use dedicated stage or equipment meters where available; otherwise reconcile facility submeter data to production and test logs with a documented causal allocation driver. | kWh | Every production or test interval | Full declared reporting period, including representative operating conditions | Every integration and test site in scope | Net stage energy = end reading − start reading − documented non-production baseline; assign by measured equipment power and time or another causal physical driver. | Meter calibration; timestamped readings; test report; production schedule; baseline study |
| `cp_output_and_acceptance` | `system_integration_test_and_factory_release` | Accepted system output, rejects, wastes, and direct releases | Factory acceptance record, calibrated net-mass record, reject/rework log, waste manifest, and emission or service record | configuration_id; bom_revision; lot_id; accepted_units; net_system_mass_kg; packaging_mass_kg; acceptance_test_id; reject_id; rework_action; waste_type; waste_mass_kg; treatment_route; substance; compartment; released_mass_kg | Weigh accepted net hardware separately from packaging; link each unit or lot to acceptance tests; reconcile rejects and rework; collect waste and direct-release records by route and substance. | item and kg | Every accepted lot, reject, waste shipment, and release event | Full declared reporting period | Every integration and test site in scope | Sum accepted net mass by configuration; keep packaging separate; assign rejects, rework, waste, and releases to the causing lot before normalization. | Scale calibration; signed acceptance report; serial/lot trace; reject disposition; waste transfer note; permit or service calculation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_configuration_bom_mass` | configuration hardware inputs | For each BOM line, mass = quantity × configuration-specific unit mass; sum separately by compute, memory/storage, network/control/I/O, chassis/rack/power/thermal, cabling, and bundled-peripheral classes. | BOM quantity; unit mass; configuration and dataset mapping | kg of each hardware class per kg accepted net system | `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated` |
| `calc_stage_energy` | integration and test electricity | Net kWh = end meter − start meter − documented baseline. Allocate only residual shared energy by measured equipment power × time or another causal physical driver, then divide by accepted net output mass. | Meter readings; baseline; equipment power; stage time; accepted output kg | kWh per kg accepted net system | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `calc_configuration_mass_balance` | product, incorporated materials, rejects, and waste | Reconcile configuration hardware plus incorporated materials with accepted output plus rejects, waste, direct material releases, and documented stock returns. Record and investigate the residual; do not force balance by changing the reference product. | BOM mass; consumables; stock returns; output mass; reject and waste mass; releases | mass-balance residual and completeness finding | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `calc_family_weighted_mix` | declared product-family result | Family inventory = sum over configurations of configuration inventory × actual accepted-production or shipment share for the reporting period. Report the share and inventory of every included configuration or a justified homogeneous stratum. | Configuration inventories; accepted production or shipment counts/mass; reporting period | production-weighted family inventory with traceable strata | `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated`; `smith-mann-lal-2026` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration_identity` | reference product and all inventory rows | Every record shall resolve to the same configuration ID, BOM revision, production lot, and acceptance boundary; substitutions and engineering changes are separately traced. | Released BOM, engineering change records, serial/lot trace, and acceptance report |
| `dq_completeness` | hardware BOM and foreground operations | Demonstrate coverage of every applicable delivered hardware class and all integration, testing, rework, packaging, waste, and direct-emission activities; disclose and justify cut-offs cumulatively. | BOM coverage report, process map, mass balance, cutoff register, and sensitivity check |
| `dq_technological_representativeness` | upstream datasets and foreground records | Match processor/board generation, storage technology, memory, chassis/form factor, power and cooling design, assembly route, and test profile to the declared configuration; do not use unrelated single-device proxies. | Supplier model/specification, dataset technology description, configuration mapping, and test profile |
| `dq_geographical_temporal_representativeness` | electricity, materials, upstream hardware, and factory data | Use geography- and period-representative data for each production site and supplier route. Record data year, geography, and any extrapolation across rapidly changing hardware generations. | Site and supplier geography, reporting dates, electricity contract or grid source, and representativeness assessment |
| `dq_precision_and_measurement` | mass, energy, utilities, waste, and direct emissions | Retain calibration, sampling, calculation, and uncertainty evidence. Prefer measured foreground data; identify modelled or secondary values and test material assumptions. | Calibration certificates, meter and scale logs, calculation workpapers, uncertainty record, and source hierarchy |
| `dq_upstream_dataset_coverage` | purchased hardware, materials, energy, packaging, and waste treatment | Map every materially distinct flow to an upstream dataset with identity and quality metadata. Missing data remain an explicit gap and cannot be hidden by a complete-system or single-server proxy. | Flow-to-dataset mapping, dataset UUIDs, quality metadata, and gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow_identity` | reference output | The product flow UUID shall be `5476c8d0-2b87-4bb4-8024-ec5c7e3213b4`, a state-code-100 Product flow classified to CPC 45240, with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. | `unsd-cpc-45240` |
| `validate_complete_configuration` | reference product metadata | Fail if configuration ID, BOM revision, required hardware-class disclosure, net hardware mass, packaging boundary, factory-gate geography, production period, or acceptance-test basis is missing. | `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated` |
| `validate_no_single_device_proxy` | product scope and inventory | Fail if one server, desktop, storage unit, monitor, printer, network unit, or peripheral is used to represent the entire delivered ADP system or if a system-family result lacks configuration weighting. | `unsd-cpc-45240`; `energy-star-computer-servers-v4-2023`; `smith-mann-lal-2026` |
| `validate_bom_and_mass_balance` | hardware inputs and accepted output | Fail if the delivered BOM is not reconciled by hardware class to accepted net output, rejects, waste, returns, and direct material releases, or if an unexplained residual is silently scaled away. | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `validate_upstream_coverage` | purchased inputs | Fail if a materially distinct BOM class lacks an upstream dataset or explicit gap, or if an unrelated generic device dataset substitutes for configuration-specific hardware. | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `validate_stage_energy_and_test_profile` | integration and acceptance testing | Fail if energy records cannot be linked to site, time interval, configuration, accepted output, and test profile, or if shared energy lacks a documented causal allocation. | `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023` |
| `validate_boundary_and_cutoffs` | foreground and downstream scope | Fail if included delivery hardware, in-house component processes, packaging, downstream exclusions, or cut-offs are undisclosed; flag cumulative or environmentally significant exclusions for review. | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `validate_mass_not_functional_comparison` | interpretation | Fail any claim of cross-system environmental superiority based only on kg-normalized results unless equivalent service, capacity, performance, utilisation, and lifetime are separately established. | `itu-t-l1410-2024`; `smith-mann-lal-2026` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-resolved foreground production dataset for a complete ADP system at the manufacturing plant. |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Component-resolved cradle-to-factory-gate modelling of the declared system configuration; production-weighted family modelling when configuration strata and weights are retained; connection to separately modelled distribution, installation, operation, maintenance, refurbishment, and end-of-life scenarios. |
| excluded_use | Proxy for a single server, desktop, or peripheral; proxy for an undisclosed product family; use-phase or computing-service comparison based only on kg; data-centre facility model unless facility hardware is explicitly within the delivered system boundary. |
| required_metadata | PCR id and version; exact reference flow/property/unit UUIDs; system configuration ID; BOM revision and hardware-class breakdown; product family and weighting basis; processor/accelerator, memory, storage, network/I/O, chassis/rack, power and thermal configuration; bundled peripherals; net and packaging mass; integration/test site and period; acceptance profile; upstream dataset map; allocation and cutoff rules. |
| required_quality_disclosure | BOM and mass-balance completeness; measured versus calculated values; technological, geographical, and temporal representativeness; meter and scale calibration; uncertainty; supplier coverage; configuration weighting; data gaps, proxies, cut-offs, and sensitivity findings. |
| update_trigger | New or materially changed BOM/configuration, processor or accelerator generation, memory/storage technology, chassis/rack, power or thermal design, bundled hardware boundary, assembly/test route, production site, electricity supply, supplier dataset, allocation driver, configuration mix, or evidence that changes a rule. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-45240` | dataset | United Nations Statistics Division, CPC detail 45240, “Automatic data processing machines presented in the form of systems”, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/45240 (retrieved 2026-08-09) | Official category identity and correspondence context; supports exclusion of adjacent single-unit and peripheral categories. |
| `itu-t-l1410-2024` | standard | ITU-T Recommendation L.1410 (11/2024), “Methodology for environmental life cycle assessments of information and communication technology goods, networks and services”, https://handle.itu.int/11.1002/1000/16010 (retrieved 2026-08-09) | ICT life-cycle boundary, mandatory parts production and assembly, reference-flow interpretation, cut-off, foreground collection, allocation, and data-quality rules. |
| `energy-star-computer-servers-v4-2023` | standard | U.S. EPA ENERGY STAR Program Requirements, Product Specification for Computer Servers, Eligibility Criteria, Version 4.0, 12 April 2023, https://www.energystar.gov/sites/default/files/asset/document/ENERGY%20STAR%20Version%204.0%20Computer%20Servers%20Final%20Specification.pdf (retrieved 2026-08-09) | Product-family configuration heterogeneity, system form factors and components, representative configurations, system characteristics, and acceptance-test metadata. |
| `eu-2019-424-consolidated` | official_guidance | Commission Regulation (EU) 2019/424, consolidated text of 1 May 2021, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02019R0424-20210501 (retrieved 2026-08-09) | Server and storage product definitions; configuration-specific component, power, material, disassembly, and low/high product-family disclosure. |
| `ec-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, OJ L 471, 30 December 2021, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-09) | Complete life-cycle perspective, system boundary, allocation hierarchy, cutoff disclosure, dataset hierarchy, and completeness/representativeness/precision quality requirements. |
| `smith-mann-lal-2026` | literature | Smith, M.; Mann, M.; Lal, P. (2026), “Carbon Accounting and Beyond: An Evidence-Based Life Cycle Assessment of the Environmental Impacts of Data Center IT Equipment”, Sustainability 18(11), 5671, https://doi.org/10.3390/su18115671 | Peer-reviewed evidence that data-centre equipment inventories are multi-asset and that server types are not interchangeable without performance-, service-, and storage-capacity-normalized comparison. |
