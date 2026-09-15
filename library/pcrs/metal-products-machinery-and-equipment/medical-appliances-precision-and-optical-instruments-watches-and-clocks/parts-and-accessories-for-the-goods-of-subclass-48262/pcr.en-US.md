---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48262
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts and accessories for the goods of subclass 48262

## 1. Scope and Applicability

This PCR applies to separately supplied parts and accessories made specifically or principally for machines and appliances that test mechanical properties of materials. Covered examples include specimen grips and fixtures, force-application accessories, platens, load-sensing assemblies, extensometer systems, and dedicated electronic modules supplied as testing-machine parts or accessories. The foreground result is a cradle-to-gate data package for one declared product configuration at the manufacturer gate.

Complete machines and appliances for testing mechanical properties are excluded. General-purpose fasteners, generic machine tools, standalone computers, calibration services, test specimens, installation, customer-site use, maintenance, and end-of-life treatment are excluded unless the declared study explicitly expands its boundary. A component built into a complete testing machine is accounted for in the complete-machine product system; it is represented here only when supplied as a separate product.

The category spans materially different products. Comparison is allowed only between products having the same declared part or accessory function, compatible machine interface, performance class, and delivery state. The official CPC identity establishes the semantic boundary; ISO 7500-1 and ISO 9513 identify relevant verification and calibration functions for force-application accessories, force-measuring systems, and extensometer systems.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48262 |
| classification_refs | CPC 3.0:48285, exact mapping context; mapping acceptance remains governed outside this PCR |
| covered_products | Separately supplied grips, fixtures, platens, force-application accessories, load-sensing assemblies, extensometer systems, and dedicated electronic modules for mechanical-properties testing machines |
| excluded_products | Complete CPC 48262 testing machines; general-purpose fasteners and electronics; unrelated measuring-instrument parts; test specimens; calibration, installation, use, maintenance, and end-of-life services |
| representative_product | One specified separately supplied mechanical-properties testing-machine part or accessory |
| production_route | Purchased material and component preparation; conditional machining, forming, finishing, and cleaning; assembly; calibration or verification where applicable; inspection; packaging |
| market_state | Finished, inspected, separately supplied product at the manufacturer gate, with declared packaging and calibration or conformity documentation where applicable |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared mechanical interface, force application, force sensing, deformation measurement, specimen gripping, or dedicated control function for a compatible mechanical-properties testing machine |
| How much | 1 kg net mass of one specified separately supplied part or accessory, excluding packaging |
| How well | Meets the declared drawing or part number, compatible-machine interface, performance specification, and calibration or verification class where applicable |
| How long or cycle | Product delivered at the manufacturer gate; no service life or test-cycle count is assumed for this cradle-to-gate mass reference |
| reference_flow_link | 1 kg net mass of the conforming declared product configuration |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts and accessories for machines for testing mechanical properties of materials |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part or accessory type; manufacturer part number or drawing revision; compatible testing-machine model; function; material and component composition; manufacturing route; calibration or verification status and class where applicable; software or firmware state where applicable; net mass; packaging state; production geography; reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure conforming product mass without packaging. Normalize every inventory amount to exactly 1 kg net reference product. |
| `material_mass_basis` | material, component, waste, and wastewater rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured or reconciled mass. When purchase records use item counts or area, retain the measured conversion factor, dimensions, and moisture or coating basis used to obtain kg. |
| `electricity_energy_basis` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter readings and convert kWh to MJ using 1 kWh = 3.6 MJ; allocate only documented shared-meter consumption. |
| `water_mass_conversion` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer measured mass. If volume is metered, document temperature, density assumption or measured density, and the conversion to kg. |

## 5. System Boundary

The foreground boundary begins with purchased materials and components at the reporting manufacturer's gate and ends with the inspected, conforming, packaged product at that gate. It includes attributable preparation, machining or forming, finishing and cleaning, assembly, calibration or verification, inspection, rework, internal material movements, and packaging. Upstream production and delivery of every purchased input are represented by compatible upstream datasets rather than recreated as foreground operations.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components received at the reporting manufacturer gate, with supplier, product form, quantity, recycled-content claim where relevant, and inbound geography declared |
| starting_condition_role | Cradle-to-gate foreground collection starts at receipt; upstream burdens remain linked through supplier-specific or representative datasets |
| product_classification_scope | Separately supplied parts and accessories specifically or principally for CPC 48262 mechanical-properties testing machines; complete machines remain outside the reference product |
| recursive_input_rule | A separately purchased input that itself meets this PCR boundary is recorded as one upstream product exchange with its own compliant dataset; do not recursively reproduce its manufacturing inventory inside the receiving process |
| upstream_dataset_requirement | Use geographically and technologically representative datasets for each purchased material, component, electricity supply, water supply, and waste treatment route; disclose proxies and data gaps |
| disclosure | Declare product configuration, BOM coverage, manufacturing and finishing routes, outsourced operations, calibration or verification status, rework, packaging, allocation, cut-offs, geography, and reference period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_category_scope` | product identity | Include only a separately supplied part or accessory for a CPC 48262 mechanical-properties testing machine; reject a complete testing machine or a part for another instrument category. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |
| `boundary_foreground_operations` | foreground processes | Include all attributable on-site and outsourced preparation, fabrication, finishing, cleaning, assembly, calibration or verification, inspection, rework, and packaging needed to deliver the conforming reference product. |  |
| `boundary_upstream_and_waste` | purchased inputs and treatment | Link every purchased input and exported waste to an upstream supply or treatment dataset consistent with its declared state, geography, technology, and destination; do not treat upstream emissions as direct foreground exchanges. |  |
| `boundary_use_and_end_of_life` | downstream stages | Exclude installation, use, maintenance, replacement, and end-of-life from the default cradle-to-gate result and disclose any study-specific expansion separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Material preparation, fabrication, finishing, and cleaning | `conditional` | Include each operation actually performed by the reporting manufacturer or an attributable toll processor; omit only when the product is received fully fabricated | Foreground fabrication | 1 kg net conforming product output after yield and rework reconciliation |
| `assembly_calibration` | Assembly, calibration or verification, and final inspection | `required` | Always include final product release activities; calibration or verification applies only when required by the product function or declared specification | Foreground assembly and release | 1 kg net conforming product released to packaging |
| `packaging` | Sales packaging | `required` | Include the actual packaging configuration; individual packaging material rows apply only when that material is used | Foreground packaging | Packaging attributable to 1 kg net reference product |

### Process: Material preparation, fabrication, finishing, and cleaning (`fabrication`)

#### Inputs

##### Product flows

###### Stainless-steel input (`stainless_steel`)

Record purchased stainless steel only when it enters a fabricated product configuration.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass / kg
- Amount rule: measured received mass consumed, corrected for stock change and returned offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources:

###### Cold-worked carbon-steel bar input (`carbon_steel_bar`)

Record cold-worked carbon-steel bar only for product configurations made from that form.

- Selected flow: Carbon Steel `b3b18433-8fd1-4298-98f5-8af11eb64762`
- Flow property / unit: Mass / kg
- Amount rule: measured received bar mass consumed, corrected for stock change and returned offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources:

###### Primary aluminium-alloy sheet input (`aluminium_alloy_sheet`)

Record primary aluminium-alloy sheet only for product configurations fabricated from sheet.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass / kg
- Amount rule: measured received sheet mass consumed, corrected for stock change and returned offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources:

###### Cutting-fluid input (`cutting_fluid`)

Record cutting fluid only when machining uses it; separately record concentrate or ready-to-use product consistently with purchase state and make-up practice.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchased make-up mass consumed, corrected for opening and closing inventory and recovered fluid
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_utilities`
- Sources:

###### Fabrication electricity (`fabrication_electricity`)

Record electricity attributable to machining, forming, finishing, cleaning, extraction, and supporting equipment within the fabrication boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered use or documented allocation of facility-meter use to the fabrication batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_utilities`
- Sources:

###### Process-water input (`process_water`)

Record water entering cleaning, rinsing, coolant make-up, or other included fabrication operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-record water input converted to mass when necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Mixed machining-metal scrap (`mixed_metal_scrap`)

Record mixed metal offcuts, chips, and rejected metal pieces crossing the foreground boundary as one mixed waste only when they are not separately sorted by alloy.

- Selected flow: Mixed metal scrap `cc3ee2b1-7c5b-44a0-aa6a-559f1bc3ce36`
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched scrap mass attributed to the represented product, reconciled with stock and documented recycling or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`
- Sources:

###### Fabrication wastewater (`fabrication_wastewater`)

Record aqueous wastewater leaving metalworking or cleaning operations; declare composition, treatment state, and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured discharge mass or metered volume converted to mass, excluding internally recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`
- Sources:

##### Elementary flows

### Process: Assembly, calibration or verification, and final inspection (`assembly_calibration`)

#### Inputs

##### Product flows

###### Electronic-components and PCB-assembly input (`pcb_assembly`)

Record an electronic-components and PCB assembly only when it is incorporated into the declared part or accessory.

- Selected flow: Electronic components and PCB assemblies `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- Flow property / unit: Mass / kg
- Amount rule: measured installed mass plus attributable assembly rejects, reconciled to the product BOM
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Assembly and test electricity (`assembly_test_electricity`)

Record electricity attributable to assembly equipment, calibration or verification rigs, inspection, and rework.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered use or documented allocation of facility-meter use to the released batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Sales packaging (`packaging`)

#### Inputs

##### Product flows

###### Corrugated-cardboard packaging (`corrugated_cardboard`)

Record corrugated cardboard incorporated into the product's sales packaging.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass issued to conforming products, including attributable converting loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Polyethylene-film packaging (`polyethylene_film`)

Record polyethylene protective film only when it is used in the declared sales packaging; its Tiangong UUID remains unresolved.

- Selected flow: Polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: measured film mass issued to conforming products, including attributable converting loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released reference product (`reference_product`)

Record the net mass of the inspected and conforming separately supplied part or accessory; packaging is excluded from this mass.

- Selected flow: Parts and accessories for machines for testing mechanical properties of materials
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg after normalization from measured released net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_release`
- Sources: `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared fabrication, assembly, calibration, inspection, and packaging | Avoid allocation by product-specific metering, batch records, BOM issue records, machine time, or physically separated process steps wherever practicable. |  |
| `allocation_causal_driver` | remaining shared inputs and wastes | When subdivision is not practicable, allocate using a documented causal physical driver appropriate to the exchange, such as machine time for equipment electricity, measured mass throughput for material handling, or verified batch count for a batch-specific operation. |  |
| `allocation_scrap_treatment` | mixed metal scrap | Record scrap as a waste output with its actual destination. Do not credit avoided primary metal production inside the foreground inventory unless the selected study method explicitly requires and transparently reports substitution outside the attributional result. |  |
| `allocation_rework_and_rejects` | rework and rejected parts | Attribute rework inputs and rejected-part wastes to the represented conforming production during the reference period; disclose any exceptional campaign excluded from the representative result. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `fabrication` | stainless steel, cold-worked carbon-steel bar, and primary aluminium-alloy sheet | purchase, stock, issue, return, and BOM records | material identity; grade; form; supplier; opening stock; receipts; closing stock; returned offcuts; batch output | reconcile material consumption by product configuration and production batch | kg | each batch, aggregated monthly | representative period covering normal product and operating variation, or a complete documented campaign | reporting site and attributable toll processors | consumed mass = opening stock + receipts - closing stock - documented returns; normalize to released net product mass | invoices; weigh tickets; stock ledger; BOM revision; batch traveler |
| `cp_fabrication_utilities` | `fabrication` | cutting fluid, electricity, and process water | chemical issue, tank inventory, meter, and production records | product formulation; concentration; opening and closing stock; purchases; recovered fluid; electricity meter; water meter; operating hours; batch output | use dedicated meters where available; otherwise document allocation from measured totals | kg and MJ | each batch or monthly | same reference period as product output | reporting site and attributable fabrication route | subtract recovered or closing stock; convert electricity and water under section 4; normalize to released net product mass | calibrated meter records; invoices; tank logs; operating log; allocation worksheet |
| `cp_fabrication_wastes` | `fabrication` | mixed metal scrap and fabrication wastewater | waste transfer, weighbridge, wastewater meter, and treatment records | waste identity; mass or volume; composition; treatment state; destination; date; represented production | reconcile dispatched waste, internal recovery, and stock change | kg | each dispatch, aggregated monthly | same reference period as product output | reporting site and attributable toll processors | exported waste = opening waste stock + generated waste - closing waste stock - internal reuse; normalize to released net product mass | manifests; weighbridge tickets; meter calibration; laboratory analysis; treatment receipt |
| `cp_assembly_records` | `assembly_calibration` | PCB assembly and assembly/test electricity | BOM issue, reject, submeter, calibration, and inspection records | PCB identity and revision; installed mass; rejects; meter reading; batch; machine time; calibration or verification result; released mass | reconcile installed components and allocate measured energy to released conforming output | kg and MJ | each batch | same reference period as product output | reporting assembly and test site | installed input plus attributable rejects; energy by submeter or documented causal driver; normalize to released net product mass | BOM; issue record; reject log; meter record; calibration certificate; inspection release |
| `cp_packaging_records` | `packaging` | corrugated cardboard and polyethylene film | packaging specification, issue, purchase, and loss records | material identity; specification; issued mass; returned mass; converting loss; packaged net product mass | weigh representative packaging configurations and reconcile issues to packaged output | kg | each packaging configuration and monthly reconciliation | same reference period as product output | reporting packaging site | net packaging issued plus attributable loss divided by net reference product mass | packaging drawing; scale calibration; issue ledger; supplier declaration |
| `cp_product_release` | `packaging` | conforming reference product | final weighing, inspection, and release records | product type; part number; drawing revision; compatible machine; function; serial or lot; net mass; performance class; calibration status; release disposition | weigh product without packaging and retain final conformity evidence | kg | each released lot or item | same reference period as all input records | reporting manufacturer | sum released conforming net mass and normalize the linked inventory to exactly 1 kg | calibrated scale record; inspection report; calibration or verification certificate where applicable; release authorization |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributable exchange amount / released conforming net product mass | exchange amount; released conforming net product mass | exchange per 1 kg reference product |  |
| `calc_electricity_conversion` | electricity rows | electricity (MJ) = measured electricity (kWh) x 3.6 | electricity meter reading in kWh | electricity in MJ |  |
| `calc_material_reconciliation` | purchased materials and components | consumed mass = opening stock + receipts - closing stock - documented returns or transfers out | stock and transaction records by material identity | consumed material mass |  |
| `calc_waste_reconciliation` | scrap and wastewater | exported waste = opening waste stock + generated or collected waste - closing waste stock - documented internal reuse | waste stock, dispatch, meter, and reuse records | exported waste mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain part number or drawing revision, function, compatible machine, product configuration, net mass, and release status. | BOM, drawing, product specification, calibrated scale record, inspection release |
| `dq_temporal_alignment` | all foreground exchanges | Inputs, outputs, stock corrections, rejects, rework, and released product shall cover the same representative period; justify how the chosen period captures normal product and operating variation. | dated ledgers, meter records, production report, campaign rationale |
| `dq_bom_completeness` | purchased materials and components | Reconcile all purchased input mass to named atomic flows or explicitly document every residual mass by concrete substance or component and resolve its UUID before publication. | mass-based BOM reconciliation and unresolved-flow log |
| `dq_meter_quality` | electricity, water, wastewater, and product mass | Document meter or scale identity, calibration status, reading interval, missing-data treatment, and allocation method. | calibration record, meter log, estimation worksheet |
| `dq_calibration_traceability` | force-application, force-measuring, and extensometer accessories | Where the product claim depends on calibration or verification, retain the applicable procedure, equipment identity, result, uncertainty or class, and certificate traceability. | calibration or verification record; `iso-7500-1-2018`; `iso-9513-2012` |
| `dq_upstream_representativeness` | linked upstream datasets | Match material state, geography, technology, recycled content, electricity mix, water supply, and waste destination; disclose every proxy. | dataset metadata and proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_scope` | product identity | The output shall be a separately supplied part or accessory specifically or principally for a CPC 48262 mechanical-properties testing machine; a complete machine or unrelated instrument part fails category conformance. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_flow` | functional unit and reference flow | Confirm exactly 1 kg net conforming product without packaging and all required qualifiers, including product function, interface, configuration, manufacturing route, and calibration status where applicable. |  |
| `validate_inventory_atomicity` | process inventory | Every exchange shall be a concrete atomic flow with one direction, one flow type, one property, one unit, and one applicability condition; no utility, material, packaging, waste, or emission umbrella row is allowed. |  |
| `validate_inventory_reconciliation` | inputs, outputs, rework, and stock | Reconcile purchase, stock, BOM, meter, reject, rework, waste, and release records over the same period; investigate and disclose every unexplained material-balance gap. |  |
| `validate_uuid_status` | Tiangong references | Use only directly audited public state_code=100 UUIDs with matching semantics, classification, product state, flow type, property, and unit group. Keep the reference-product and polyethylene-film UUID fields unresolved until exact candidates are audited. |  |
| `validate_calibration_claim` | calibrated or verified accessories | A force-application accessory, force-measuring assembly, or extensometer carrying a calibration or performance claim shall retain applicable inspection, calibration or verification evidence and shall identify the static or dynamic application boundary. | `iso-7500-1-2018`; `iso-9513-2012` |
| `validate_boundary_and_allocation` | dataset model | Confirm all foreground and outsourced operations, upstream links, waste destinations, exclusions, cut-offs, proxies, and shared-process allocation drivers are disclosed and consistently applied. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after methodology and UUID review; this candidate PCR does not itself publish a dataset |
| downstream_use | Cradle-to-gate process datasets and lifecyclemodel components for a declared separately supplied mechanical-properties testing-machine part or accessory |
| allowed_use | Product-footprint and equipment-system studies when the product function, compatible-machine interface, material composition, manufacturing route, calibration status, geography, time, and packaging are representative |
| excluded_use | Comparison across different accessory functions or performance classes; complete-machine datasets; unqualified global averages; use-phase or end-of-life claims without added scenario data |
| required_metadata | canonical PCR id; product type; part number or drawing revision; compatible machine; function; net mass; BOM coverage; manufacturing and finishing routes; calibration or verification status; geography; reference period; packaging; allocation; cut-offs; data sources; UUID resolution status |
| required_quality_disclosure | temporal and geographic representativeness; primary-data share; meter and scale quality; BOM mass coverage; material-balance result; outsourced operations; proxies; uncertainty; unresolved UUIDs or range-evidence needs |
| update_trigger | material design or supplier change; manufacturing-route or site change; calibration-standard revision affecting claims; electricity or waste-treatment change; more representative foreground data; resolution of the reference-product or polyethylene-film UUID; new independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, *CPC Version 3.0 Structure*, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official product classification identity and hierarchy for CPC 48262 and 48285 |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, *CPC Version 3.0 Explanatory Notes*, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-07) | Original-text verification of the distinct complete-machine and separately supplied parts-and-accessories boundaries |
| `iso-7500-1-2018` | `standard` | ISO 7500-1:2018, *Metallic materials - Calibration and verification of static uniaxial testing machines - Part 1: Tension/compression testing machines - Calibration and verification of the force-measuring system*, official ISO abstract and status page, https://committee.iso.org/standard/72572.html?browse=tc (retrieved 2026-09-07) | General inspection including force-application accessories, force-measuring-system calibration, performance-class verification, and static-application limitation |
| `iso-9513-2012` | `standard` | ISO 9513:2012, *Metallic materials - Calibration of extensometer systems used in uniaxial testing*, official ISO abstract and status page, https://committee.iso.org/standard/41619.html?browse=tc (retrieved 2026-09-07) | Extensometer-system identity and static calibration scope for contacting and non-contacting systems |
