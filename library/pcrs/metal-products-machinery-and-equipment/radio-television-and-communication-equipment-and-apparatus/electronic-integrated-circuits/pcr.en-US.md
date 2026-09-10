---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electronic-integrated-circuits
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Electronic integrated circuits

## 1. Scope and Applicability

This PCR applies to electronic integrated circuits delivered as saleable, electrically tested devices at the declared manufacturing gate. It covers general integrated-circuit families, including logic and micro devices, memory devices, analog devices, and mixed-signal devices assigned by their dominant function. A conforming dataset shall describe a representative product family and production mix; it shall not use one chip design, one wafer, or one narrowly specified device as an undeclared proxy for the full category.

The foreground boundary covers wafer fabrication from a declared incoming semiconductor substrate or wafer, wafer sort and dicing, assembly and packaging, final electrical test, and preparation of accepted product for delivery. Purchased substrate production, chemicals, gases, electricity, water, packaging materials, and waste-treatment services are represented by traceable upstream datasets unless they are collected as foreground operations. Product design, software, fabrication equipment manufacture, use in downstream equipment, distribution after the manufacturing gate, and end-of-life are outside the default foreground boundary and shall be disclosed if included.

Discrete semiconductor devices, photovoltaic cells, LEDs, bare semiconductor wafers without integrated circuitry, printed circuit boards, smart-card bodies, connector or leadframe parts sold separately, and complete electronic equipment are excluded. A bare die is in scope only when it is the electrically tested saleable delivery state and that state is explicitly declared; an untested wafer or intermediate die shall not stand in for a finished integrated circuit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electronic-integrated-circuits |
| classification_refs | CPC 3.0: 47160 Electronic integrated circuits (exact classification context; no accepted mapping edge is asserted by this PCR) |
| covered_products | Saleable electronic integrated circuits in logic and micro, memory, analog, and mixed-signal families; packaged monolithic, multi-die, chiplet, and wafer-level-package devices; electrically tested bare die only when declared as the finished delivery state |
| excluded_products | Unprocessed or processed wafers sold without a finished IC function; untested intermediate die; discrete diodes, transistors, sensors, LEDs and photovoltaic devices; separately sold leadframes, substrates, connectors and smart-card modules; printed circuit boards and complete equipment |
| representative_product | A declared production-weighted mix of accepted electronic integrated circuits within one stated family, technology-node range, substrate material, wafer diameter, die construction, package route, delivery state, geography, and reporting period |
| production_route | Semiconductor substrate or wafer supply; repeated deposition, lithography, etch, doping, cleaning, planarization and metallization; wafer sort and dicing; assembly and packaging; final electrical test; shipment preparation at the manufacturing gate |
| market_state | Saleable, electrically tested integrated circuit at the manufacturer gate; package form or tested bare-die delivery state explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Electronic integrated circuits meeting the declared identity, electrical acceptance criteria, and delivery-state specification |
| How much | 1 kg net mass of accepted finished integrated circuits |
| How well | Accepted by the declared final electrical test and outgoing quality criteria; family and dominant function, technology node, substrate, die area and count, package or bare-die form, and geography are declared |
| How long or cycle | One stated reporting period, normally 12 consecutive months or a justified production campaign covering representative wafer fabrication, assembly and test |
| reference_flow_link | Tiangong Product flow `bc98e461-2434-4229-8788-7ffb5c4b9a2e` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Electronic integrated circuit, unspecified `bc98e461-2434-4229-8788-7ffb5c4b9a2e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | IC family and dominant function (logic/micro, memory, analog, or mixed-signal); marketed device function and application class; technology node or process generation; semiconductor substrate material; wafer diameter; total active die area per delivered device; monolithic, multi-die or chiplet construction and die count; package type or tested bare-die delivery state; final-test acceptance criterion; fab, assembly and test geography; reporting period; electricity supply mix; fluorinated-gas and N2O abatement configuration |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass of accepted delivered ICs. Include die, encapsulant, package substrate or leadframe, interconnects, terminals, lids and integrated heat spreaders that are part of the delivered device; record transport packaging separately. |
| `count_to_mass` | unit-count production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert accepted device count to mass using lot- or product-family-specific measured net mass per accepted device. Do not use a single catalogue device mass for a multi-product production mix. |
| `wafer_area_traceability` | wafer fabrication and die yield | Area and Mass | m2 and kg | Retain wafer diameter, processed wafer area, gross die count, known-good die count, die area and sequential yields. Convert wafer-level records to the reference mass only through the traced accepted-output calculation. |
| `family_parameterization` | all foreground records | Not applicable | declared metadata | Stratify records at least by IC family or dominant function, technology node or process generation, substrate material, wafer diameter, die area, die count, package route and delivery state; aggregate only with production weights for the declared reporting period. |
| `energy_conversion` | electricity and fuels | Energy | kWh or MJ | Preserve the invoiced or metered unit. If conversion is required, use 1 kWh = 3.6 MJ, retain the original record, and avoid mixing electricity with thermal fuel energy. |
| `gas_and_liquid_conversion` | process gases, chemicals, water and wastewater | Mass or Volume | kg or m3 | Preserve measured mass or volume and physical state; where conversion is necessary, use batch-specific density and conditions and retain the original quantity and conversion basis. |
| `direct_emission_speciation` | fab and test direct emissions | Mass | kg per emitted substance | Record each fluorinated GHG, N2O, regulated hazardous air pollutant and fugitive heat-transfer fluid as a separate elementary flow. Do not report purchased gas as emitted gas without measured or method-based utilization, by-product and abatement treatment. |

## 5. System Boundary

The dataset is cradle-to-manufacturing-gate for the declared IC production mix. Foreground records shall include cleanroom and production-tool utilities, process materials and gases, yield losses, internal material transfers, direct emissions, wastewater, wastes, and on-site abatement or treatment. Upstream datasets shall cover every purchased product or service that crosses the boundary. Shipping from the manufacturing gate, downstream board assembly, device use, and end-of-life are excluded unless a wider study scope is explicitly declared.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Incoming semiconductor substrate or wafer and all purchased materials, utilities and services at the first foreground manufacturing gate, with supplier identity, physical state, production geography and upstream dataset reference declared |
| starting_condition_role | Traceable upstream input to wafer fabrication; substrate or wafer production may be foreground only when the reporting organization operates and measures that stage |
| product_classification_scope | Electronic integrated circuits across logic/micro, memory, analog and mixed-signal families; the concrete dataset is restricted to its declared family, process generation and delivery-state mix |
| recursive_input_rule | An internally transferred fabricated wafer, known-good die or packaged IC is recorded once as an intermediate product flow between foreground processes and carries no duplicated upstream burden. A purchased IC of the same category is an upstream product dataset and shall not be treated as self-produced reference output. |
| upstream_dataset_requirement | Require geographically and technologically appropriate datasets for semiconductor substrates or wafers, electricity, fuels, ultrapure-water supply, chemicals, bulk and specialty gases, packaging materials, transport to the first foreground gate, and external waste or wastewater treatment |
| disclosure | Declare included sites and operations; IC-family shares; process nodes; substrate and wafer diameter; package and tested-bare-die shares; yields; cut-offs; upstream dataset versions; allocation drivers; electricity mixes; abatement technologies, uptime and destruction or removal evidence; and any departure from this boundary |

### Normative Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_route` | foreground_process_chain | Include wafer fabrication, wafer sort and dicing, assembly and packaging, final electrical test, yield losses, direct emissions, and preparation of accepted product for delivery for every route represented in the reference product. | `us-epa-semiconductor-neshap`; `epd-international-pcr-2024-06` |
| `boundary_upstream_inputs` | purchased_inputs | Link every purchased substrate, wafer, chemical, gas, utility, packaging material and treatment service to an upstream dataset or a documented foreground operation; do not omit a major input because no generic IC quantity is available. | `iso-14044-2006`; `iec-63366-2025` |
| `boundary_family_strata` | category_mix | Keep logic/micro, memory, analog and mixed-signal strata and materially different node, substrate, die-area, package and geography routes separate until production-weighted aggregation. | `wsts-product-classification-2021`; `proske-et-al-2024-die-area` |
| `boundary_no_proxy` | representativeness | Do not use one device, one wafer, one package technology, one application, or one manufacturing route as an undeclared proxy for this broad category. | `wsts-product-classification-2021`; `proske-et-al-2024-die-area` |
| `boundary_direct_gases` | wafer_fabrication_and_test | Include fluorinated process gases, fluorinated heat-transfer fluids, N2O, their by-products, and abatement-system operation and downtime whenever applicable; preserve substance-level emissions. | `us-epa-semiconductor-industry`; `us-epa-ghgrp-subpart-i` |
| `boundary_excluded_stages` | downstream_and_capital | Exclude downstream board assembly, product use, distribution after the manufacturing gate and end-of-life from this dataset. Disclose and justify treatment of design, R&D, buildings and capital equipment, and include them only under an explicitly extended scope. | `epd-international-pcr-2024-06`; `iec-63366-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wafer_fabrication` | Wafer fabrication | required | Always included for integrated circuitry represented by the reference product; purchased finished die may be represented only as a traced upstream dataset for an assembly-only reporting organization | Foreground circuit formation and wafer processing | Processed wafer area and known-good-die output normalized to accepted reference-product mass |
| `wafer_sort_dicing` | Wafer sort and dicing | required | Always included or represented by a supplier dataset when tested die are purchased | Foreground wafer electrical sort, singulation and die acceptance | Known-good die mass and area transferred to assembly per accepted reference-product mass |
| `assembly_packaging` | Assembly and packaging | required | Included for packaged devices; for tested bare-die delivery, record an explicit not-applicable package route while retaining handling and final-test operations | Foreground die attach or bonding, interconnection, encapsulation or wafer-level packaging | Packaged-device output before final acceptance per accepted reference-product mass |
| `final_test_delivery` | Final test and delivery preparation | required | Always included for the saleable delivery state | Foreground burn-in when applicable, final electrical test, marking, accepted-output measurement and shipment preparation | 1 kg accepted electronic integrated circuits |

### Process: Wafer fabrication (`wafer_fabrication`)

#### Inputs

##### Product flows

###### Semiconductor substrate or incoming wafer (`fab_substrate`)

Record the substrate or wafer entering circuit fabrication, including material, diameter, thickness, supplier geography and upstream production dataset.

- Selected flow: Semiconductor substrate or wafer, specified by material and delivery state
- Flow property / unit: Mass / kg and area / m2
- Amount rule: measured received and issued mass and processed area attributable to the declared production strata
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product through traced sequential yield
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fab_materials`
- Sources:

###### Wafer-fabrication electricity (`fab_electricity`)

Record metered electricity for cleanroom systems and process tools serving deposition, lithography, etch, implant or diffusion, cleaning, planarization, metallization and supporting fab operations.

- Selected flow: Electricity supply, specified by voltage level and geographic market
- Flow property / unit: Energy / kWh
- Amount rule: metered fab electricity allocated to the declared production strata using documented causal drivers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fab_utilities`
- Sources:

###### Ultrapure and process water (`fab_water`)

Record make-up water entering ultrapure-water generation and other wafer-fabrication uses separately from recirculated water; retain withdrawal and discharge records.

- Selected flow: Water supply, specified by source and treatment state
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water attributable to the declared wafer-fabrication strata
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fab_utilities`
- Sources:

###### Process chemicals and patterning materials (`fab_process_chemicals`)

Record acids, bases, solvents, photoresists, developers, dopant sources, deposition precursors, cleaning agents, electroplating chemicals and planarization slurries by substance or purchased mixture.

- Selected flow: Each purchased process chemical or formulated material as a separate product flow
- Flow property / unit: Mass / kg
- Amount rule: inventory issue, purchase reconciliation or tool-delivery records attributable to the declared production strata
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fab_materials`
- Sources: `us-epa-semiconductor-neshap`

###### Bulk, specialty and fluorinated process gases (`fab_process_gases`)

Record each gas separately, including bulk gases, deposition and doping gases, fluorinated etch or chamber-clean gases, and N2O; retain cylinder, bulk-delivery, point-of-use and abatement routing records.

- Selected flow: Each purchased process gas as a separate product flow
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled gas consumption by gas and process type for the declared production strata
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fab_gases_emissions`
- Sources: `us-epa-semiconductor-industry`; `us-epa-ghgrp-subpart-i`

#### Outputs

##### Product flows

###### Fabricated wafer transferred to sort (`fabricated_wafer`)

Record wafer output after completion of the declared front-end and interconnect sequence, preserving wafer count, processed area, gross die count and route identity.

- Selected flow: Fabricated semiconductor wafer with integrated circuits, internal intermediate
- Flow property / unit: Mass / kg and area / m2
- Amount rule: calculated from completed-wafer records and traced to accepted output through sequential yield
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fab_output_yield`
- Sources: `proske-et-al-2024-die-area`

##### Waste flows

###### Wafer-fabrication wastes and wastewater (`fab_wastes`)

Record spent process baths, solvent and resist wastes, slurry, contaminated solids, off-spec wafers, wastewater and treatment residues by waste identity and destination.

- Selected flow: Each wafer-fabrication waste or wastewater stream as a separate waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment, treatment-system and wastewater records attributable to the declared production strata
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fab_waste`
- Sources:

##### Elementary flows

###### Direct fab air emissions (`fab_direct_air_emissions`)

Record emitted fluorinated GHGs, N2O, fluorinated heat-transfer fluids and regulated hazardous air pollutants separately after applicable utilization, by-product formation and abatement.

- Selected flow: Each emitted substance as its corresponding elementary flow
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or a documented substance- and process-specific calculation using measured gas input, utilization, by-product formation, abatement efficiency and downtime
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fab_gases_emissions`
- Sources: `us-epa-semiconductor-industry`; `us-epa-ghgrp-subpart-i`; `us-epa-semiconductor-neshap`

### Process: Wafer sort and dicing (`wafer_sort_dicing`)

#### Inputs

##### Product flows

###### Fabricated wafer received for sort (`sort_fabricated_wafer_input`)

Record the internal fabricated-wafer transfer without duplicating its upstream burden.

- Selected flow: Fabricated semiconductor wafer with integrated circuits, internal intermediate
- Flow property / unit: Mass / kg and area / m2
- Amount rule: equal to the traced fabricated-wafer output received by wafer sort
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort_yield`
- Sources: `proske-et-al-2024-die-area`

###### Sort and dicing utilities and consumables (`sort_utilities_consumables`)

Record electricity, test equipment utilities, dicing water, blades or wire, tapes, carriers and cleaning materials used in wafer sort and singulation.

- Selected flow: Each utility and consumable as a separate product flow
- Flow property / unit: Energy / kWh or Mass / kg
- Amount rule: metered, issued or purchased quantity attributable to the declared sort and dicing strata
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort_inputs`
- Sources:

#### Outputs

##### Product flows

###### Known-good die transferred to assembly (`known_good_die`)

Record accepted die count, area and mass by product family and route after wafer sort and dicing.

- Selected flow: Known-good integrated-circuit die, internal intermediate
- Flow property / unit: Mass / kg and area / m2
- Amount rule: calculated from accepted die count, measured or engineering-controlled die area and die mass, and traced sort yield
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort_yield`
- Sources: `proske-et-al-2024-die-area`

##### Waste flows

###### Sort and dicing rejects and residues (`sort_dicing_waste`)

Record electrically rejected die, edge and kerf losses, damaged wafers, dicing slurry or wastewater, used tape and other residues by treatment route.

- Selected flow: Each sort or dicing waste stream as a separate waste flow
- Flow property / unit: Mass / kg
- Amount rule: calculated rejected mass reconciled with measured waste and yield records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort_yield`
- Sources:

### Process: Assembly and packaging (`assembly_packaging`)

#### Inputs

##### Product flows

###### Known-good die received for assembly (`assembly_die_input`)

Record the internal known-good-die transfer by die count, total active die area and mass without duplicating wafer-fabrication burdens.

- Selected flow: Known-good integrated-circuit die, internal intermediate
- Flow property / unit: Mass / kg and area / m2
- Amount rule: equal to known-good die issued to the declared package routes, including assembly yield reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_materials_yield`
- Sources: `proske-et-al-2024-die-area`

###### Package and interconnect materials (`assembly_package_materials`)

Record package substrates or leadframes, interposers, bonding wire, bumps or solder, die attach, underfill, mold compound, lids, heat spreaders, terminals and other delivered-device materials by package route.

- Selected flow: Each package and interconnect material or component as a separate product flow
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material, issue or purchase records reconciled to assembled and accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials_yield`
- Sources:

###### Assembly energy, water and process consumables (`assembly_utilities`)

Record electricity, fuels, water, cleaning agents, plating chemicals, process gases and other utilities used for die attach, bonding, encapsulation, curing, plating and package singulation.

- Selected flow: Each assembly utility or process consumable as a separate product flow
- Flow property / unit: Energy / kWh or Mass / kg
- Amount rule: metered or issued quantity attributable to the declared package routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_utilities`
- Sources:

#### Outputs

##### Product flows

###### Packaged IC before final test (`packaged_ic_intermediate`)

Record assembled device output by package route before final electrical acceptance.

- Selected flow: Packaged electronic integrated circuit, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: calculated from assembled unit count and measured package-route net mass, reconciled with assembly yield
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_materials_yield`
- Sources:

##### Waste flows

###### Assembly rejects and material wastes (`assembly_waste`)

Record rejected die and packages, excess mold compound, substrate or leadframe trim, plating wastes, spent chemicals, wastewater and other assembly residues by destination.

- Selected flow: Each assembly waste or wastewater stream as a separate waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste and reject records reconciled with material input and assembly yield
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_materials_yield`
- Sources:

### Process: Final test and delivery preparation (`final_test_delivery`)

#### Inputs

##### Product flows

###### Packaged IC or tested-bare-die lot entering final acceptance (`test_device_input`)

Record the internal device transfer into burn-in and final electrical test; for bare-die delivery, identify the tested-die route explicitly.

- Selected flow: Packaged IC or known-good die, internal intermediate according to declared delivery state
- Flow property / unit: Mass / kg
- Amount rule: measured input mass and unit count reconciled with final-test acceptance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_test_output`
- Sources:

###### Final-test electricity and heat-transfer utilities (`test_utilities`)

Record electricity for test and burn-in and any fuels, cooling media or fluorinated heat-transfer fluids used during temperature control and test.

- Selected flow: Each final-test energy carrier and heat-transfer fluid as a separate product flow
- Flow property / unit: Energy / kWh or Mass / kg
- Amount rule: metered or issued quantity attributable to the declared test routes and accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_utilities_emissions`
- Sources: `us-epa-ghgrp-subpart-i`

###### Delivery packaging (`delivery_packaging`)

Record trays, reels, tubes, carriers, moisture-barrier bags, desiccants, labels and cartons supplied with accepted devices; keep their mass outside the reference-product net mass.

- Selected flow: Each delivery-packaging material or component as a separate product flow
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material or issue records attributable to accepted product deliveries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_packaging`
- Sources:

#### Outputs

##### Product flows

###### Accepted electronic integrated circuits (`accepted_integrated_circuit`)

Record only devices meeting the declared final electrical and outgoing quality criteria as reference-product output.

- Selected flow: Electronic integrated circuit, unspecified `bc98e461-2434-4229-8788-7ffb5c4b9a2e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net mass of accepted finished product after final-test reject reconciliation
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Final-test rejects and delivery-preparation waste (`test_delivery_waste`)

Record failed devices, burn-in rejects, damaged carriers, packaging scrap and other final-stage wastes by destination.

- Selected flow: Each final-test reject or delivery-preparation waste stream as a separate waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured reject and waste mass reconciled with input and accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_test_output`
- Sources:

##### Elementary flows

###### Fugitive final-test heat-transfer-fluid emissions (`test_htf_emissions`)

When fluorinated heat-transfer fluids are used, record substance-specific fugitive emissions from inventory change, purchases, recovery and disposition records.

- Selected flow: Each emitted heat-transfer-fluid substance as its corresponding elementary flow
- Flow property / unit: Mass / kg
- Amount rule: calculated substance-specific fugitive loss from collected inventory and disposition records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_utilities_emissions`
- Sources: `us-epa-ghgrp-subpart-i`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_manufacturing | First subdivide records by site, reporting period, IC family or dominant function, technology node or process generation, substrate and wafer diameter, die-area class, package route and delivery state whenever separately measured. | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `allocation_wafer_fab_driver` | shared_wafer_fabrication | Allocate shared wafer-fabrication inputs and emissions using a documented causal engineering driver such as processed wafer area combined with route-specific process steps, mask layers, tool time or measured chamber consumption. Do not allocate a broad fab mix from one wafer or one device. | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `allocation_assembly_test_driver` | shared_assembly_and_test | Allocate package, assembly and test burdens using route-specific measured material issue, equipment time, test time, energy or another demonstrated causal driver; accepted-unit count is allowed only for materially equivalent routes. | `iso-14044-2006` |
| `allocation_yield_losses` | sequential_yield | Assign substrate, materials, utilities, direct emissions and treatment burdens of rejected wafers, die and packages to the accepted outputs of the same production stratum through sequential yield reconciliation. | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `allocation_category_aggregation` | reference_product_mix | Aggregate strata only with accepted-output mass for the declared reporting period after each stratum is normalized. Report family shares and do not infer unrepresented families from a narrow product dataset. | `wsts-product-classification-2021`; `proske-et-al-2024-die-area` |
| `allocation_recovery` | recovered_materials_and_energy | Report recovered materials, exported energy and external recycling consistently with the declared LCA method; disclose the substitution or cut-off convention and prevent double counting between avoided burdens, waste treatment and co-product credit. | `iso-14044-2006`; `iec-63366-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fab_materials` | `wafer_fabrication` | substrate, chemicals and patterning materials | purchase, warehouse issue, recipe and tool-delivery records | material identity; supplier; lot; mass or volume; density and conditions; wafer material, diameter and count; process stratum | reconcile purchases, stock change, issues and returned material; preserve substance or mixture identity | kg, m3, m2, item | monthly and lot-level | full reporting period with opening and closing stock | every included fab | sum by material and production stratum, then normalize through sequential yield | purchase records, calibrated delivery systems, inventory reconciliation and recipe revision history |
| `cp_fab_utilities` | `wafer_fabrication` | electricity, fuels and water | utility meter and facility balance records | meter id; interval; electricity; fuel; make-up water; recirculated water; discharge; allocation driver | use submetered tool or area data where available; otherwise reconcile facility totals to documented cleanroom and process drivers | kWh, MJ, kg, m3 | at least monthly | full reporting period | every included fab and utility system | sum by utility and production stratum; do not net recirculated water against withdrawal without disclosure | meter calibration, invoices, facility balance and coverage log |
| `cp_fab_gases_emissions` | `wafer_fabrication` | process-gas input, by-products, direct emissions and abatement | gas delivery, point-of-use, recipe, stack test, abatement and downtime records | gas identity; input mass; process type; utilization; by-products; abatement connection; DRE; uptime; stack measurement; emission method | measure by substance where available; otherwise apply a documented regulatory or facility engineering model to measured inputs | kg per substance | batch or monthly; abatement downtime event-level | full reporting period | every included fab, process type and abatement system | calculate each gas and by-product separately and sum after abatement; retain controlled and uncontrolled periods | calibrated mass-flow or purchase reconciliation, stack-test report, abatement maintenance and downtime log |
| `cp_fab_output_yield` | `wafer_fabrication` | fabricated-wafer output and front-end yield | manufacturing execution and wafer genealogy records | wafer id; diameter; processed area; route; node; gross die count; completed wafer count; scrap; transfer destination | preserve wafer genealogy and link completed wafers to downstream accepted die and product | wafer, m2, kg, item | per wafer lot | full reporting period | every included fab and production stratum | calculate processed area and traced output per stratum before reference-flow normalization | MES extract, lot traveler, route revision and yield reconciliation |
| `cp_fab_waste` | `wafer_fabrication` | wastewater, spent chemicals, solids and off-spec wafers | waste manifests, treatment meters and laboratory records | waste identity; hazardous status; mass or volume; concentration where relevant; destination; treatment; recovery | reconcile on-site treatment inputs and outputs with external shipments and wastewater discharge | kg, m3 | monthly and shipment-level | full reporting period | every included fab and treatment system | sum separately by waste identity and destination; no netting against recovered output without allocation disclosure | manifests, scale tickets, discharge meters, laboratory analyses and treatment logs |
| `cp_sort_inputs` | `wafer_sort_dicing` | sort and dicing utilities and consumables | meters, purchase and issue records | electricity; water; blade or wire; tape; carrier; cleaning material; lot and route | reconcile meter and issued quantities to processed wafer lots | kWh, kg, item | lot-level or monthly | full reporting period | every included sort and dicing site | sum by route and normalize through accepted-die yield | meter records, issue logs, lot travelers and stock reconciliation |
| `cp_sort_yield` | `wafer_sort_dicing` | fabricated-wafer input, known-good die and rejects | wafer map, probe, dicing and die genealogy records | wafer id; gross dies; tested dies; known-good dies; die area; accepted die mass; reject class; kerf and residues | link wafer maps and singulation results to die transferred to assembly | item, mm2, kg | per wafer lot | full reporting period | every included sort and dicing site | calculate known-good die output and rejected mass by stratum; reconcile with fabricated-wafer input | wafer map, probe result, calibrated dimensional data and reject disposition |
| `cp_assembly_materials_yield` | `assembly_packaging` | die input, package materials, output and rejects | bill-of-material, issue, genealogy, equipment and reject records | die count and area; package route; each material mass; assembled units; accepted units; reject mass and cause | reconcile material issues and die genealogy to packaged output by route | kg, item, mm2 | per assembly lot | full reporting period | every included assembly site and route | calculate package-route material input, output and reject balance before reference-flow normalization | approved BOM, lot genealogy, scale records, MES yield and reject disposition |
| `cp_assembly_utilities` | `assembly_packaging` | assembly energy, water and consumables | meters, recipes, purchase and issue records | electricity; fuel; water; process gas; chemical; equipment time; package route | use submeters where available and document causal allocation where utilities are shared | kWh, MJ, kg, m3, h | lot-level or monthly | full reporting period | every included assembly site | sum by route and allocate with measured equipment time or other causal driver | meter calibration, invoices, recipe history and allocation workbook |
| `cp_final_test_output` | `final_test_delivery` | test input, accepted reference product and rejects | test-handler, burn-in, outgoing quality and mass records | input units; test route and duration; accepted units; reject class; measured net unit mass; delivery state; family qualifiers | reconcile test input to accepted and rejected output; determine net accepted mass by representative measurement | item, h, kg | per final-test lot | full reporting period | every included final-test site | sum accepted net product mass by stratum; normalize all strata to exactly 1 kg accepted output | test logs, calibration, sampling plan, outgoing release and mass reconciliation |
| `cp_test_utilities_emissions` | `final_test_delivery` | test electricity, cooling and heat-transfer-fluid emissions | meters, HTF inventory, purchase, recovery and disposition records | electricity; fuel; cooling; HTF identity; opening and closing stock; purchases; recovery; disposal; leaks | meter energy and calculate substance-specific HTF loss from complete inventory balance | kWh, MJ, kg | monthly and leak-event-level | full reporting period | every included final-test site | sum by test route; report each emitted HTF separately | meters, inventory ledger, maintenance, leak and disposal records |
| `cp_delivery_packaging` | `final_test_delivery` | delivery packaging | packaging BOM, issue and shipment records | material; component; mass; units per tray, reel or carton; accepted product mass | reconcile packaging issue to accepted shipments; exclude packaging from reference-product net mass | kg, item | shipment or monthly | full reporting period | every included delivery site | sum by material and normalize to accepted product mass | approved packaging specification, issue and shipment records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = stratum amount / accepted net reference-product mass for the same stratum; production-mix result = sum of normalized stratum amounts weighted by accepted stratum mass share | collected stratum amount; accepted net product mass; mass share | amount per 1 kg accepted IC | `iso-14044-2006` |
| `calc_count_to_mass` | accepted and intermediate device counts | mass = accepted or transferred device count multiplied by the measured representative net mass per device for the same product and delivery-state stratum | device count; sampling result for net unit mass | kg of devices |  |
| `calc_sequential_yield` | wafer, die, assembly and test genealogy | retain front-end completion, sort, assembly and final-test yields separately; input required per accepted output is calculated from actual genealogy and shall not be replaced by one overall generic yield | wafer starts; completed wafers; gross and known-good dies; assembled and tested units; accepted units | traced inputs, rejects and intermediate transfers per accepted output | `proske-et-al-2024-die-area` |
| `calc_direct_fgas` | fluorinated GHG and N2O emissions | calculate each input-gas and by-product emission from measured input, process-specific utilization and by-product formation, abatement connection, destruction or removal efficiency and downtime, or use validated stack measurement; identify the method and factor version | substance input; utilization; by-product factors; DRE; uptime; stack measurements | kg emitted per substance | `us-epa-ghgrp-subpart-i`; `us-epa-semiconductor-industry` |
| `calc_htf_inventory` | fluorinated heat-transfer-fluid emissions | fugitive emission = opening stock + purchases + other receipts - closing stock - quantities returned, recovered for reuse, destroyed or transferred off site, adjusted for documented inventory corrections | complete HTF inventory and disposition records | kg emitted per HTF substance | `us-epa-ghgrp-subpart-i` |
| `calc_mass_reconciliation` | each foreground process | reconcile product and material inputs with product outputs, separately identified wastes, wastewater, emissions and documented stock change; investigate rather than silently balancing unexplained differences | mass inputs; outputs; wastes; emissions; stock change | reconciliation difference and corrective explanation | `iso-14044-2006` |
| `calc_family_assignment` | IC family metadata | assign logic/micro, memory, analog or mixed-signal according to marketed function and dominant-function rules; document the decision for multifunction devices | product specification; dominant function; die-area or functional evidence | declared IC family stratum | `wsts-product-classification-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Preserve product-family definitions, dominant function, node or process generation, substrate, wafer diameter, die area and count, package route, delivery state, test criterion and Tiangong reference UUID. | product specifications, route records, test release and reference-flow review |
| `dq_temporal` | foreground data | Cover one representative reporting period and identify shutdown, ramp, qualification, abnormal-yield and abatement-downtime periods; justify any shorter campaign. | dated meters, MES, inventory and maintenance records |
| `dq_geography` | multi-site production | Identify fab, sort, assembly and test geography and the electricity and upstream market used at each site; do not label a global or national average without production weights. | site list, supplier records, electricity contracts and accepted-output mass shares |
| `dq_completeness` | material and emission inventory | Reconcile all major substrate, chemical, gas, water, energy, package-material, waste, wastewater and direct-emission records; record missing coverage and do not fill it with a narrow chip or wafer proxy. | purchase-to-stock balances, meters, waste manifests, emissions model and reconciliation report |
| `dq_yield` | sequential production | Preserve wafer, die, assembly and final-test genealogy and yields so rejected production burdens remain assigned to accepted output of the same stratum. | wafer maps, lot genealogy, assembly and test yield reports |
| `dq_direct_emissions` | fluorinated gases, N2O, HAPs and HTFs | Document substance identity, process type, calculation or measurement method, abatement routing, DRE evidence, uptime and by-product treatment; disclose any regulatory default factor and version. | stack tests, mass-flow or purchase records, abatement and method records |
| `dq_technology` | category aggregation | Demonstrate representation of every claimed IC family and materially different node, die-area, substrate, package and geography stratum; unrepresented families shall be excluded from the dataset claim. | production mix, product master, route matrix and coverage assessment |
| `dq_source_traceability` | external and upstream data | Retain source version, geography, technology, age, access date and substitution rationale for every upstream dataset and external method. | dataset registry and source log |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Reference output shall be exactly 1 kg of accepted `bc98e461-2434-4229-8788-7ffb5c4b9a2e` using Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validate_required_qualifiers` | dataset_metadata | Reject a package missing any required family, function, node, substrate, wafer, die, package or bare-die state, test, geography, reporting-period, electricity-mix or abatement qualifier. | `wsts-product-classification-2021`; `proske-et-al-2024-die-area` |
| `validate_delivery_state` | reference_product | Verify that reference output is a saleable electrically tested IC and that packaged or tested-bare-die delivery state is explicit; reject an untested wafer, intermediate die, smart-card module, leadframe, PCB or complete equipment proxy. | `us-epa-semiconductor-neshap`; `wsts-product-classification-2021` |
| `validate_no_narrow_proxy` | representativeness | Reject a category-average claim derived from one chip, one wafer, one family, one package, one application or one route unless the dataset claim is explicitly narrowed to that stratum. | `proske-et-al-2024-die-area`; `wsts-product-classification-2021` |
| `validate_process_coverage` | process_inventory | Verify route coverage for wafer fabrication, sort and dicing, assembly and packaging or declared tested-bare-die handling, final test, delivery preparation, wastes, wastewater and direct emissions. | `us-epa-semiconductor-neshap`; `epd-international-pcr-2024-06` |
| `validate_yield_and_mass` | calculation_results | Require sequential yield reconciliation and process mass reconciliation; investigate unexplained differences and prohibit zero-loss assumptions without measured evidence. | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `validate_direct_gases` | fab_and_test_emissions | When fluorinated gases, N2O or HTFs are used, require substance-specific input and emission records, by-product treatment, abatement DRE and downtime; reject purchased-gas-equals-emission shortcuts unless the cited method explicitly requires that conservative case. | `us-epa-semiconductor-industry`; `us-epa-ghgrp-subpart-i` |
| `validate_allocation` | shared_burdens | Require subdivision or a documented causal allocation driver for shared fab, assembly and test burdens and require accepted-output mass weights for final aggregation; reject an undocumented mass, revenue or single-wafer proxy. | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `validate_foreground_evidence` | quantitative_inventory | Require foreground records for all quantities in this PCR. Do not substitute uncited generic values or provisional estimates for missing product-family, node, site, yield, utility, material or emission data. | `iso-14044-2006`; `iec-63366-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-manufacturing-gate foreground data package that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Construction of process and lifecyclemodel inventories for computing, communications, power electronics, intelligent devices and other systems consuming electronic integrated circuits |
| allowed_use | Use for the declared IC family, node or process-generation range, substrate, wafer diameter, die construction, package or bare-die delivery state, geography, reporting period and production mix; aggregation is allowed only with compatible strata and explicit mass weights |
| excluded_use | Do not use as a proxy for semiconductor wafers, discrete devices, smart-card modules, printed circuit boards or complete equipment; do not support comparative claims across materially different performance, family, node, die-area, package, geography or abatement profiles without equivalence review |
| required_metadata | All reference-flow qualifiers; included sites and route shares; foreground and upstream boundary; sequential yields; allocation drivers; electricity mixes; abatement systems; dataset and source versions; cut-offs; data gaps; uncertainty and representativeness assessment |
| required_quality_disclosure | Coverage by family and production stratum; temporal and geographic coverage; measured versus calculated shares; material and yield reconciliation; direct-gas method and factor versions; abatement DRE and downtime evidence; unresolved flow UUIDs; excluded operations and missing data |
| update_trigger | Material change in family mix, technology node, substrate or wafer diameter, die area or chiplet construction, package route, site or electricity mix, process chemistry, yield, abatement configuration, allocation method, regulatory emissions method, or evidence older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, confirmed 2022, https://www.iso.org/standard/38498.html (retrieved 2026-08-09) | LCI scope, data quality, allocation, mass balance, reporting and review rules |
| `iec-63366-2025` | `standard` | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691 (retrieved 2026-08-09) | Horizontal EEPS PCR, complementary product-specific rules, scenarios and environmental-declaration context |
| `epd-international-pcr-2024-06` | `standard` | International EPD System PCR 2024:06, Electronic and electric equipment, and electronic components (non-construction), version 1.0.1, valid to 2029-10-28, https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f (retrieved 2026-08-09) | Electronics-sector scope, declared-unit use and manufacturing-gate dataset profile |
| `wsts-product-classification-2021` | `official_guidance` | World Semiconductor Trade Statistics, Product Classification 2021, Semiconductor Industry Association, https://www.semiconductors.org/wp-content/uploads/2021/02/Product_Classification_2021.pdf (retrieved 2026-08-09) | Logic/micro, memory, analog and dominant-function family parameterization and exclusions |
| `us-epa-semiconductor-neshap` | `official_guidance` | U.S. EPA, Semiconductor Manufacturing: National Emission Standards for Hazardous Air Pollutants, https://www.epa.gov/stationary-sources-air-pollution/semiconductor-manufacturing-national-emission-standards-hazardous (retrieved 2026-08-09) | Manufacturing boundary from wafer substrate through wafer fabrication, test and assembly; hazardous air pollutant inclusion |
| `us-epa-semiconductor-industry` | `official_guidance` | U.S. EPA, Semiconductor Industry, https://www.epa.gov/eps-partnership/semiconductor-industry (retrieved 2026-08-09) | Fluorinated-gas use, etch and chamber-clean processes, by-product and abatement variability |
| `us-epa-ghgrp-subpart-i` | `official_guidance` | U.S. EPA, Greenhouse Gas Reporting Program Subpart I Information Sheet, https://www.epa.gov/ghgreporting/subpart-i-information-sheet (retrieved 2026-08-09) | Substance-specific input, by-product, HTF, N2O, abatement, production-area and calculation data requirements |
| `proske-et-al-2024-die-area` | `literature` | Proske, M. et al. (2024), Investigation of Semiconductor Die Area as a Reference Variable for LCA, DOI: 10.23919/EGG62010.2024.10631237, https://doi.org/10.23919/EGG62010.2024.10631237 | Die area and technology node as representativeness, allocation and data-quality parameters |
