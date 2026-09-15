---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.automatic-regulating-or-controlling-instruments-and-apparatus-hydraulic-or-pneumatic
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Automatic regulating or controlling instruments and apparatus, hydraulic or pneumatic

## 1. Scope and Applicability

This PCR defines foreground data-production rules for the manufacture, factory testing, and factory-gate delivery of automatic regulating or controlling instruments and apparatus whose control output or actuation is hydraulic or pneumatic. Covered products include complete hydraulic or pneumatic regulators, controllers, control-valve positioners, pressure or flow controllers, and functionally equivalent automatic control apparatus delivered as finished manufactured products.

The PCR covers configurable analogue, electronic, electro-hydraulic, electro-pneumatic, and fluidic products when their declared primary function is automatic regulation or control through a hydraulic or pneumatic output or mechanism. Product-specific construction, controlled variable, input signal, output signal, pressure or flow range, materials, and test specification remain mandatory qualifiers.

The PCR excludes sensors or measuring-only instruments without automatic control action; hydraulic or pneumatic cylinders, motors, pumps, compressors, and power-transmission equipment; manually operated valves; electrical-only controllers without hydraulic or pneumatic control output; parts and accessories sold separately; and integrated machines for which the controller is not a separately declared product. Distribution, installation, use, maintenance, and end-of-life are outside the default factory-gate foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.automatic-regulating-or-controlling-instruments-and-apparatus-hydraulic-or-pneumatic |
| classification_refs | CPC 3.0: 48266 — Automatic regulating or controlling instruments and apparatus, hydraulic or pneumatic |
| covered_products | Finished hydraulic or pneumatic automatic regulators, controllers, control-valve positioners, and equivalent automatic control apparatus with a hydraulic or pneumatic output or mechanism |
| excluded_products | Measuring-only instruments; cylinders, motors, pumps and compressors; manually operated valves; electrical-only controllers; separately sold parts; controllers inseparable from a larger machine |
| representative_product | A factory-tested automatic regulator or controller supplied as a finished hydraulic, pneumatic, electro-hydraulic, or electro-pneumatic instrument |
| production_route | Purchased and/or internally prepared components → assembly → functional calibration and pressure/flow/leak testing → final finishing, identification and packaging |
| market_state | Finished manufactured product at the factory gate, with net product mass and packaging reported separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished automatic regulating or controlling instrument that performs the declared hydraulic or pneumatic control function |
| How much | 1 kg net mass of conforming finished instrument at the factory gate |
| How well | Meets the declared control function, signal interface, pressure or flow range, accuracy or performance class, and applicable factory acceptance test specification |
| How long or cycle | One completed production output at factory gate; service life and use-stage performance are not represented by this mass-based reference flow |
| reference_flow_link | The amount of the selected finished-product flow required to deliver 1 kg net conforming product output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Automatic regulating or controlling instruments and apparatus, hydraulic or pneumatic `2e112504-677d-408e-817c-751e1746af52` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | hydraulic or pneumatic route; controller or regulator type; controlled variable; input signal; output or actuation principle; rated pressure or flow range; accuracy or performance class; principal materials and electronics content; manufacturing geography; production route; factory-test specification; packaging inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every inventory amount to 1 kg net mass of conforming finished instrument. Include permanently installed components, integral fill fluids and factory-applied lubricants; exclude shipping packaging and separately supplied installation accessories from the reference mass and report them as separate inputs. |
| `packaging_mass_separation` | packaging | Mass | kg | Measure primary, secondary and tertiary packaging by material and keep it outside the net product reference mass. |
| `energy_carrier_preservation` | electricity, fuels and compressed-air supply | Energy or carrier-specific property | kWh, MJ, kg or m3 as metered | Preserve the meter or invoice unit and conversion factor; do not convert compressed-air consumption into electricity unless compressor energy and allocation are documented. |
| `test_medium_balance` | hydraulic fluids, water, gases and other factory-test media | Mass or volume | kg or m3 | Record charge, make-up, recovered/reused quantity, discharge, and closing inventory consistently so that net test-medium consumption and releases are auditable. |
| `production_mass_reconciliation` | material inputs, products, rejects and wastes | Mass | kg | Reconcile product and material masses over the declared production period, including inventory change and moisture or fluid additions where relevant; document the facility accounting tolerance and every unresolved difference. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and subassemblies received at the manufacturing site, plus internally transferred components entering the first included foreground operation |
| starting_condition_role | Factory-gate foreground start for product manufacture |
| product_classification_scope | Finished products matching the semantic scope of hydraulic or pneumatic automatic regulating or controlling instruments and apparatus; CPC 3.0 code 48266 is a classification reference, not the canonical identity |
| recursive_input_rule | When an unfinished or complete controller in the same product category enters an included process, record it once as a product input and use a separately identified upstream dataset; do not recursively reproduce its manufacturing inventory inside the receiving process |
| upstream_dataset_requirement | Every purchased material, component, energy carrier, packaging material, treatment service, and same-category input shall link to an appropriate upstream dataset or carry a documented data gap |
| disclosure | Declare the manufacturing site and period, hydraulic or pneumatic route, in-house versus outsourced operations, included tests, treatment of factory infrastructure, packaging boundary, and all deviations from the default process map |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate_manufacture` | all included foreground operations | Include material receipt and internal transfer, in-house component preparation, assembly, adjustment, calibration, pressure/flow/function/leak testing, final cleaning or finishing, identification, packaging, internal transport, utilities, consumables, manufacturing rejects, wastes and direct releases whenever they occur within the declared factory-gate production route. | `eu-pef-2021`; `iso-4413-2010`; `iso-4414-2010` |
| `boundary_purchased_inputs` | purchased materials, components and services | Quantify purchased inputs at the factory gate and connect them to upstream datasets. Supplier production is outside the foreground process map but not omitted from downstream life-cycle modelling. | `eu-pef-2021` |
| `boundary_test_and_calibration` | factory acceptance testing | Include the actual factory test programme and record electricity, compressed air, hydraulic fluid, water or other test media, recovery loops, failed units, replaced parts and direct releases. State whether the product was tested alone or with an actuator or test rig and cite the applicable test specification. | `iso-10770-hydraulic-control-valves`; `iec-61514-2026` |
| `boundary_no_unreviewed_cutoff` | foreground inputs and outputs | Do not omit a required foreground process or a material, energy, waste or direct-emission flow solely because its mass or cost is small. Any exclusion shall be identified, justified, and assessed for potential significance. | `eu-pef-2021` |
| `boundary_default_exclusions` | downstream and capital activities | Exclude distribution beyond the factory gate, installation, use, maintenance and end-of-life by default. Exclude capital equipment and buildings unless the study goal brings them into scope; disclose any inclusion. | `eu-pef-2021` |
| `boundary_recursive_product_input` | same-category inputs | Apply the Boundary Abstraction recursive input rule and retain the upstream dataset identity, amount and product-state qualifier for each same-category input. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | Component fabrication, cleaning and preparation | conditional | Include when machining, forming, cleaning, coating, circuit preparation, seal preparation, or comparable component work occurs at the reporting site | foreground component preparation | kg prepared components transferred to assembly |
| `product_assembly` | Product assembly and adjustment | required | Always include | foreground production | kg assembled instrument sent to factory testing |
| `functional_test_and_calibration` | Functional calibration, pressure/flow and leak testing | required | Always include the actual acceptance-test route used for conforming output | foreground quality assurance | kg conforming tested instrument |
| `finishing_and_packaging` | Final finishing, identification and packaging | required | Always include | foreground factory-gate completion | 1 kg net finished reference product |

### Process: Component fabrication, cleaning and preparation (`component_preparation`)

#### Inputs

##### Product flows

###### Materials and purchased components for in-house preparation (`prep_materials_components`)

Record BOM-resolved metals, polymers, elastomers, electronic parts, hydraulic or pneumatic parts, fasteners, housings and other purchased items that enter in-house component preparation.

- Selected flow: Product-specific material or component flow; no generic UUID is prescribed
- Flow property / unit: Mass / kg
- Amount rule: received or issued mass from purchase, warehouse and BOM records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_materials`

###### Preparation consumables (`prep_consumables`)

Record cleaners, machining fluids, surface-treatment chemicals, coatings, solders, adhesives and other process consumables actually used in component preparation.

- Selected flow: Substance- or product-specific consumable flow
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued quantity adjusted for inventory change and returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables_and_inventory`

###### Electricity and fuels for component preparation (`prep_energy`)

Record metered electricity and any fuel or heat consumed by included machining, forming, cleaning, drying, coating and local extraction equipment.

- Selected flow: Site-specific electricity, fuel or heat carrier
- Flow property / unit: Energy / kWh or MJ; carrier mass or volume where invoiced
- Amount rule: submetered consumption or allocated facility meter balance for included operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`

##### Waste flows

No waste enters this process by default. Record a waste input only when an externally generated waste is accepted and processed within the declared foreground operation.

##### Elementary flows

No elementary input is prescribed. Record direct withdrawals from the environment when they occur and are not represented by a supplied product flow.

#### Outputs

##### Product flows

###### Prepared components transferred to assembly (`prepared_components`)

Record the mass of conforming internally prepared components transferred to product assembly.

- Selected flow: Product-specific prepared component or subassembly
- Flow property / unit: Mass / kg
- Amount rule: transfer quantity from production and warehouse records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared component output and reconciled per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_and_quality`

##### Waste flows

###### Preparation scrap and spent process materials (`prep_waste`)

Record metal and polymer scrap, spent fluids, sludge, off-spec components, used filters and other preparation waste by treatment route and hazardous status.

- Selected flow: Waste-specific flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment, container or production-reject quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`

##### Elementary flows

###### Direct preparation emissions (`prep_direct_emissions`)

Record measured or permitted direct releases to air, water or soil from preparation, cleaning, coating or local treatment, without duplicating emissions already represented by an upstream energy or treatment dataset.

- Selected flow: Substance-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from collected activity data and an identified method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: Product assembly and adjustment (`product_assembly`)

#### Inputs

##### Product flows

###### Prepared and purchased components for assembly (`assembly_components`)

Record each internally prepared or purchased housing, valve body, diaphragm, bellows, spring, seal, nozzle, relay, actuator interface, sensor, circuit, connector, fastener and other BOM item entering final assembly.

- Selected flow: Product-specific component or subassembly flow
- Flow property / unit: Mass / kg
- Amount rule: BOM quantity reconciled with issue, return and inventory records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_and_materials`

###### Assembly consumables and integral fluids (`assembly_consumables`)

Record solder, adhesive, thread sealant, lubricant, hydraulic fill, grease, cleaning materials and other consumables; identify the fraction remaining in the finished product.

- Selected flow: Substance- or product-specific assembly consumable
- Flow property / unit: Mass / kg
- Amount rule: issued quantity adjusted for returns, inventory change and recovered material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables_and_inventory`

###### Assembly electricity and utilities (`assembly_energy`)

Record electricity, compressed air and other utilities used for assembly, joining, adjustment, cleaning and local environmental control.

- Selected flow: Site-specific electricity or utility carrier
- Flow property / unit: Energy / kWh or MJ; compressed-air volume / m3 where metered
- Amount rule: submetered use or allocated facility meter balance for the assembly line
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`

##### Waste flows

No waste input is prescribed for ordinary assembly.

##### Elementary flows

No elementary input is prescribed for ordinary assembly.

#### Outputs

##### Product flows

###### Assembled instrument sent to testing (`assembled_instrument`)

Record the mass and count of assembled instruments entering functional test and calibration.

- Selected flow: Product-specific assembled but not yet accepted instrument
- Flow property / unit: Mass / kg and supplementary item count
- Amount rule: production transfer record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled instrument output and reconciled per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_and_quality`

##### Waste flows

###### Assembly rejects and discarded consumables (`assembly_waste`)

Record rejected components, solder or adhesive residues, used wipes, replaced seals and other assembly wastes by treatment route.

- Selected flow: Waste-specific flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured reject and waste-handling records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`

##### Elementary flows

###### Direct assembly emissions (`assembly_direct_emissions`)

Record direct substance releases from soldering, bonding, cleaning or other assembly operations when site measurements or a documented calculation establish that they cross the environmental boundary.

- Selected flow: Substance-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from collected activity data and an identified method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: Functional calibration, pressure/flow and leak testing (`functional_test_and_calibration`)

#### Inputs

##### Product flows

###### Assembled instruments entering factory acceptance testing (`test_instruments`)

Record the assembled instrument mass and count entering the declared test and calibration programme.

- Selected flow: Product-specific assembled instrument
- Flow property / unit: Mass / kg and supplementary item count
- Amount rule: test-lot entry record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_and_calibration`

###### Test energy and compressed-air supply (`test_energy`)

Record electricity and compressed air consumed by pressure, flow, response, calibration, leak and endurance tests included in the production acceptance route.

- Selected flow: Site-specific electricity and compressed-air supply
- Flow property / unit: Energy / kWh or compressed-air volume / m3; retain compressor electricity separately when directly metered
- Amount rule: test-bench meter readings or allocated utility balance linked to test cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `iso-10770-hydraulic-control-valves`; `iec-61514-2026`

###### Hydraulic fluid, water, gas and other test media (`test_media`)

Record each test medium charged to the bench, including make-up quantities and media retained in the finished product; distinguish recovered and recirculated media.

- Selected flow: Medium-specific product flow
- Flow property / unit: Mass / kg or volume / m3
- Amount rule: opening inventory plus charged and make-up quantity minus recovered closing inventory, with discharged quantities reported separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_and_calibration`
- Sources: `iso-10770-hydraulic-control-valves`; `iec-61514-2026`

##### Waste flows

No waste enters factory acceptance testing by default.

##### Elementary flows

No elementary input is prescribed. Record any direct environmental withdrawal used as a test medium only when it is not represented as a supplied product flow.

#### Outputs

##### Product flows

###### Conforming tested instrument (`tested_instrument`)

Record the mass and count of instruments that pass the declared acceptance criteria and proceed to final finishing and packaging.

- Selected flow: Product-specific conforming tested instrument
- Flow property / unit: Mass / kg and supplementary item count
- Amount rule: passed quantity from signed test or calibration records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming tested output and reconciled per 1 kg net finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_and_calibration`
- Sources: `iso-10770-hydraulic-control-valves`; `iec-61514-2026`

###### Recovered test medium returned to the loop (`recovered_test_medium`)

Record recovered hydraulic fluid, water or other media returned to storage or a subsequent test cycle so that gross circulation is not reported as net consumption.

- Selected flow: Medium-specific recovered product flow
- Flow property / unit: Mass / kg or volume / m3
- Amount rule: measured recovered quantity returned to usable inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_and_calibration`

##### Waste flows

###### Failed units, replaced parts and spent test media (`test_waste`)

Record failed instruments or parts not returned to production, spent hydraulic fluid, filters, contaminated absorbents and other test waste by treatment route.

- Selected flow: Waste-specific flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: failed-unit disposition and waste shipment records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`

##### Elementary flows

###### Direct releases during testing (`test_direct_releases`)

Record test fluids, aerosols or other substances released directly to air, water or soil. Do not represent ordinary vented compressed air as a pollutant unless a substance-specific environmental flow is present.

- Selected flow: Substance-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or test-medium balance attributable to direct release
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: Final finishing, identification and packaging (`finishing_and_packaging`)

#### Inputs

##### Product flows

###### Conforming tested instruments for final completion (`finish_tested_instrument`)

Record conforming tested instruments entering final cleaning, identification and packaging.

- Selected flow: Product-specific conforming tested instrument
- Flow property / unit: Mass / kg
- Amount rule: production transfer record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_and_quality`

###### Packaging, labels and final-finishing materials (`packaging_materials`)

Record packaging by material and level, plus labels, protective caps, desiccants, final cleaners and preservation materials; identify separately supplied accessories.

- Selected flow: Material-specific packaging or finishing flow
- Flow property / unit: Mass / kg
- Amount rule: BOM or packing-list quantity reconciled with issue and inventory records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`

###### Finishing and packaging energy (`packaging_energy`)

Record electricity and other utilities used for final cleaning, marking, preservation and packaging.

- Selected flow: Site-specific electricity or utility carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: submetered use or allocated meter balance for included finishing and packaging operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`

##### Waste flows

No waste input is prescribed for final finishing and packaging.

##### Elementary flows

No elementary input is prescribed for final finishing and packaging.

#### Outputs

##### Product flows

###### Factory-gate reference product (`reference_product`)

The output is the conforming finished hydraulic or pneumatic automatic regulating or controlling instrument, excluding separately reported shipping packaging.

- Selected flow: Automatic regulating or controlling instruments and apparatus, hydraulic or pneumatic `2e112504-677d-408e-817c-751e1746af52`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming finished instrument output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging scraps, final rejects and discarded finishing materials (`packaging_waste`)

Record packaging offcuts, damaged packs, final rejected products, used cleaning materials and other finishing waste by treatment route.

- Selected flow: Waste-specific flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured waste and final-reject records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`

##### Elementary flows

###### Direct finishing emissions (`finishing_direct_emissions`)

Record substance-specific direct releases from final cleaning, marking, preservation or coating when they cross the environmental boundary.

- Selected flow: Substance-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from collected activity data and an identified method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | multi-product lines and shared processes | Prefer subdivision using product- or line-specific BOM, production, test, energy, waste and emission records. Keep separately measured operations separate rather than allocating them. | `eu-pef-2021` |
| `allocation_causal_driver` | unavoidable shared utilities and operations | Where subdivision is not feasible, allocate using a documented causal physical driver: measured energy, machine or test-bench time and rated power for utilities; processed mass or item count for handling; occupied test cycles for test equipment; and measured waste mass for treatment. | `eu-pef-2021` |
| `allocation_other_relationship` | residual multifunctionality | Use another relationship, including economic value, only when neither subdivision nor a defensible physical relationship is feasible. Record the reason, period, products, factor values and sensitivity of the result. | `eu-pef-2021` |
| `allocation_scrap_and_recovery` | recyclable scrap and recovered test media | Record recovered test media returned to the foreground loop as an internal return and report only net make-up consumption. Record scrap leaving the system by waste type and treatment route; do not apply an avoided-burden credit inside this factory-gate dataset unless a downstream modelling method explicitly requires and documents it. | `eu-pef-2021` |
| `allocation_rework` | reworked instruments and components | Keep rework materials, energy, testing and wastes in the foreground inventory of the conforming output. Do not treat rework as a co-product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_materials` | `component_preparation`; `product_assembly` | material and component inputs | BOM, purchase, warehouse issue/return and inventory records | item_id; description; supplier; material; quantity; unit_mass; issued_quantity; returned_quantity; opening_inventory; closing_inventory; lot; product_variant | Export controlled BOM and reconcile with warehouse movements and physical inventory | kg and item | each lot or monthly reconciliation | complete declared production period | all included lines and outsourced inputs received at the site | net consumed quantity = opening inventory + receipts/issues − returns − closing inventory; map to product variant and normalize to conforming net output | approved BOM revision, supplier record, inventory reconciliation, scale calibration |
| `cp_consumables_and_inventory` | `component_preparation`; `product_assembly` | chemicals, fluids, lubricants and consumables | purchase, issue, return, tank or container inventory records | substance_id; composition_or_grade; quantity; unit; opening_inventory; closing_inventory; returned_or_recovered_quantity; process; retained_in_product_fraction | Reconcile stores and process inventory; retain substance or grade identity | kg, L or m3 | monthly and at campaign close | complete declared production period | all included foreground processes | calculate net use by process and identify amount retained in product, emitted, recovered or discarded | invoices, SDS or specification, inventory log, calibrated tank/container measurement |
| `cp_energy_and_utilities` | all process ids | electricity, fuel, heat and compressed-air supply | submeters, facility meters, invoices and equipment operating logs | meter_id; carrier; opening_reading; closing_reading; unit; timestamp; line; machine_time; test_cycles; rated_power; compressor_output | Prefer submetering; otherwise reconcile facility balance and allocate by documented causal driver | kWh, MJ, kg, L or m3 | continuous or at least monthly | complete declared production period | reporting site and included lines | meter difference minus excluded loads, then allocate only the unresolved shared balance and normalize to conforming output | meter calibration, invoice reconciliation, allocation worksheet |
| `cp_production_and_quality` | all process ids | transfers, yields, rejects and conforming output | production orders, transfer records, count and mass records, nonconformance and rework logs | product_variant; started_count; started_mass; transfer_count; transfer_mass; passed_count; passed_mass; rejected_count; rejected_mass; reworked_count; timestamp | Reconcile each process transfer and quality disposition by product variant | kg and item | each batch or production order | complete declared production period | all included lines | aggregate conforming and rejected quantities, retain rework in the relevant operation, and normalize by net conforming output mass | signed batch record, calibrated scale, quality release and nonconformance records |
| `cp_test_and_calibration` | `functional_test_and_calibration` | test route, test media, results and recovery | test-bench logs, calibration certificates, medium inventories and failure records | unit_id; test_standard; test_configuration; controlled_variable; setpoint_range; pressure_or_flow_range; input_signal; output_signal; start_time; end_time; pass_fail; medium_charge; make_up; recovered; discharged; retained | Capture machine-readable test records and reconcile medium balance for each test configuration | test-specific units, kg or m3 | each tested unit or statistically justified lot | complete declared production period | every included test bench and outsourced acceptance test | aggregate test cycles, passes, failures and net media use by product variant; preserve the test specification and configuration | calibrated reference instruments, traceable calibration certificate, signed test record, medium inventory reconciliation |
| `cp_packaging_and_dispatch` | `finishing_and_packaging` | packaging and separately supplied accessories | packaging BOM, packing lists, material issue and dispatch records | packaging_item; material; level; unit_mass; quantity; returned_quantity; accessory_id; included_in_reference_mass; dispatch_lot | Reconcile packaging BOM and issued quantity with packed and dispatched units | kg and item | each packing lot or monthly | complete declared production period | all included packing lines | calculate packaging mass by material and level per kg net product; keep accessories and packaging outside reference mass unless permanently installed | approved packaging specification, packing list, scale record, dispatch reconciliation |
| `cp_waste_and_rejects` | all process ids | waste, scrap, rejected parts and spent media | waste manifests, container weights, treatment invoices and reject disposition records | waste_type; material; hazardous_status; source_process; gross_weight; tare; net_weight; treatment_route; destination; date; rejected_product_link | Weigh or otherwise quantify each waste shipment and reconcile production rejects | kg | each shipment and monthly reconciliation | complete declared production period | all included foreground processes | subtract tare, aggregate by source process and treatment route, reconcile rejected product mass and normalize to conforming output | calibrated scale, waste manifest, treatment certificate, nonconformance record |
| `cp_direct_emissions` | all process ids | direct releases to air, water and soil | continuous monitoring, sampling, permit reports or activity-factor calculations | substance; compartment; concentration; flow_rate; duration; activity_data; factor; method; uncertainty; control_efficiency | Prefer direct measurement; otherwise calculate from collected activity data using an identified method without duplicating upstream emissions | kg or method-specific unit | per monitoring plan and each abnormal event | complete declared production period | all on-site included release points | integrate measured concentration and flow or apply the documented calculation; subtract only measured recovery and normalize to conforming output | laboratory report, monitor calibration, permit return, calculation method and uncertainty record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory amount | normalized amount = period amount / period net mass of conforming finished instruments × 1 kg | period flow amount; conforming net output mass | amount per 1 kg reference product | `eu-pef-2021` |
| `calc_material_consumption` | BOM materials and consumables | net consumption = opening inventory + receipts or issues − returns − recovered usable material − closing inventory; reconcile with product, waste, emission and stock-change masses | inventory and movement records | net material consumption by item and process |  |
| `calc_energy_utility` | electricity, fuels, heat and compressed air | included utility = meter closing − opening − excluded loads; allocate only unresolved shared use with the selected causal driver | meters, invoices, excluded loads, driver values | utility consumption by process and product | `eu-pef-2021` |
| `calc_test_medium_balance` | hydraulic fluid, water, gas and other test media | net medium consumption = opening inventory + charge + make-up − recovered usable closing inventory − separately accounted discharge; separately report retained product fill, waste and direct release | test and inventory records | net medium input and reconciled output routes | `iso-10770-hydraulic-control-valves`; `iec-61514-2026` |
| `calc_process_yield` | each manufacturing process | yield = conforming transferred mass or count / started mass or count; retain rework inputs and final disposition in the inventory | production, transfer, pass, reject and rework records | process yield and reject fraction |  |
| `calc_mass_reconciliation` | complete foreground system | input mass = product mass + waste mass + direct mass releases + closing stock increase − opening stock increase, with moisture and fluid additions identified; investigate the residual against the declared accounting tolerance | all mass records | mass-balance residual and explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and product variants | Use the exact reference product UUID and declare every required qualifier, BOM revision, product variant and hydraulic or pneumatic route represented by the dataset. | Tiangong identity readback, controlled product specification, released BOM and dataset metadata |
| `dq_technology_representativeness` | process map and tests | The included component preparation, assembly and test route shall represent the technology actually used for the declared product; identify outsourced operations and omitted conditional processes. | process map, work instructions, supplier scope and test plan |
| `dq_time_representativeness` | all foreground records | Use one complete, internally consistent production period or campaign that captures normal production, rework and test activity; disclose start/end dates, shutdowns, abnormal events and any mixed-period source. | dated meter, production, inventory, waste and quality records |
| `dq_geographical_representativeness` | site and upstream links | Declare each manufacturing site and the geography of energy and major upstream datasets; do not silently combine sites with materially different routes. | site metadata, supplier records and dataset geography |
| `dq_precision_and_uncertainty` | measurements and calculations | Retain meter resolution, calibration status, sampling basis, allocation driver and known uncertainty for material flows, utilities, test media, waste and direct emissions. | calibration certificates, sampling plan, meter register and calculation worksheet |
| `dq_completeness` | required and applicable processes | Account for every required process, every applicable conditional process, all BOM materials, utilities, test media, packaging, rejects, wastes and direct releases; identify and justify each data gap or exclusion. | completeness matrix, BOM-to-inventory reconciliation, process map and exclusion log |
| `dq_test_traceability` | functional test and calibration | Preserve the applicable test specification, test configuration, reference-instrument calibration, pass/fail criterion and linkage from test record to product variant or lot. | test-bench record, calibration certificate and quality release |
| `dq_quality_rating_disclosure` | published dataset | Assess and disclose technological, geographical and time representativeness and precision, together with limitations affecting reuse. | data-quality assessment aligned with the PEF data-quality dimensions |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference product shall be `2e112504-677d-408e-817c-751e1746af52`, flow type Product, CPC 48266, `state_code=100`, with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg as the reference unit. |  |
| `validate_required_qualifiers` | reference product metadata | Fail completeness when any required qualifier is missing or when the declared product is measuring-only, manually operated, electrical-only, a power actuator, a separately sold part, or an inseparable machine component outside this PCR scope. | `unsd-cpc-3-0` |
| `validate_process_coverage` | process inventory | Product assembly, functional test and calibration, and finishing and packaging shall be present. Component preparation shall be present when performed at the site, or explicitly marked not applicable with the outsourced upstream dataset identified. | `eu-pef-2021`; `iso-4413-2010`; `iso-4414-2010` |
| `validate_test_route` | factory acceptance testing | The dataset shall identify the tested configuration, applicable specification, test conditions and acceptance result; test energy, media, failures and releases shall be inventoried for the actual route. | `iso-10770-hydraulic-control-valves`; `iec-61514-2026` |
| `validate_reference_mass` | normalization | The reference output shall equal 1 kg net conforming finished instrument. Packaging and separately supplied accessories shall not be included in that net mass. |  |
| `validate_mass_reconciliation` | foreground mass flows | Product, waste, direct release and inventory-change masses shall reconcile with material inputs within the declared facility accounting tolerance. Every residual outside that tolerance shall be investigated and disclosed. |  |
| `validate_energy_and_test_media` | utilities and testing | Energy carriers and test media shall retain their measured units and conversion factors. Gross circulation of recovered test medium shall not be reported as net consumption, and compressed-air volume shall not be converted to electricity without documented compressor energy and allocation. | `iso-10770-hydraulic-control-valves`; `iec-61514-2026` |
| `validate_no_unreviewed_cutoff` | foreground completeness | Every exclusion shall name the affected process or flow and justify its potential significance; an unreviewed mass- or cost-only cut-off fails completeness. | `eu-pef-2021` |
| `validate_allocation` | shared and multifunctional operations | Verify that subdivision was attempted first, that any physical driver is causal and period-consistent, and that every residual allocation factor and sensitivity is disclosed. | `eu-pef-2021` |
| `validate_data_quality` | foreground evidence | Verify record-period consistency, site and technology representativeness, calibration or quality evidence, test traceability, upstream dataset links and explicit disclosure of gaps and limitations. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_product_manufacturing_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Factory-gate modelling of a declared hydraulic or pneumatic automatic controller or regulator when product qualifiers, production route, geography, technology and period are compatible with the study |
| excluded_use | Measuring-only instruments, manually operated valves, hydraulic or pneumatic power actuators, electrical-only controllers, separately sold parts, use-stage energy or leakage, service-life comparison, and comparative assertions between products with different functions or performance qualifiers |
| required_metadata | canonical PCR id; reference flow UUID and unit chain; product name and variant; hydraulic or pneumatic route; controlled variable; input and output signals; rated pressure or flow range; performance or accuracy class; principal materials and electronics content; site and geography; production period; included and outsourced processes; test specification and configuration; allocation methods; packaging boundary |
| required_quality_disclosure | data sources and collection protocols; metering and allocation coverage; BOM and mass-balance reconciliation; test traceability; technological, geographical and time representativeness; precision and uncertainty; data gaps, exclusions and unresolved residuals |
| update_trigger | Material change to product function or qualifiers, BOM or integral fluid, manufacturing or test technology, supplier or site route, energy or utility system, allocation method, waste or emission control, applicable test standard, or evidence showing that the dataset no longer represents current production |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure and explanatory notes, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-09) | Classification scope and product-category identity for CPC 48266 |
| `eu-pef-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-08-09) | Functional-unit structure, reference-flow normalization, manufacturing boundary, foreground completeness, allocation hierarchy and data-quality dimensions |
| `iso-4413-2010` | standard | ISO 4413:2010, Hydraulic fluid power — General rules and safety requirements for systems and their components, https://www.iso.org/standard/44781.html (retrieved 2026-08-09) | Hydraulic product route scope and inclusion of assembly, adjustment, cleaning, reliable operation, energy and environmental considerations |
| `iso-4414-2010` | standard | ISO 4414:2010, Pneumatic fluid power — General rules and safety requirements for systems and their components, https://www.iso.org/standard/44790.html (retrieved 2026-08-09) | Pneumatic product route scope and inclusion of assembly, adjustment, cleaning, reliable operation, energy and environmental considerations |
| `iso-10770-hydraulic-control-valves` | standard | ISO 10770-2:2012, Hydraulic fluid power — Electrically modulated hydraulic control valves — Part 2: Test methods for three-port directional flow-control valves, https://www.iso.org/standard/55084.html; ISO 10770-3:2020, Part 3: Test methods for pressure control valves, https://www.iso.org/standard/73619.html (retrieved 2026-08-09) | Hydraulic controller performance-test scope, test-route declaration and foreground test-media/energy collection |
| `iec-61514-2026` | standard | IEC 61514:2026, Industrial-process control systems — Methods of evaluating the performance of valve positioners with pneumatic outputs, https://webstore.iec.ch/en/publication/69949 (retrieved 2026-08-09) | Pneumatic positioner test configurations, performance testing, test reporting and acceptance-record traceability |
