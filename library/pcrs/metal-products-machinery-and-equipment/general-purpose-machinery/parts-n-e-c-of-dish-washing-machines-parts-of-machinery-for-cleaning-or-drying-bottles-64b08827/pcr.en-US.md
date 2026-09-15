---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-n-e-c-of-dish-washing-machines-parts-of-machinery-for-cleaning-or-drying-bottles-64b08827
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of dishwashing, container-handling, beverage-aerating, packing and wrapping machinery

## 1. Scope and Applicability

This PCR covers saleable replacement parts, components and purpose-built subassemblies whose designed function is specific to dishwashing machinery or to machinery for cleaning, drying, filling, closing, sealing, capsuling, labelling or otherwise handling containers, aerating beverages, packing or wrapping. It applies to a mass-based, cradle-to-factory-gate foreground dataset for one declared part design and manufacturing route.

The PCR excludes complete machines, generic fasteners and standard articles sold independently of the covered machinery application, packaging services, installation, maintenance, distribution, machine use and end-of-life. A producer shall identify the covered equipment family, part number, design revision, material composition, manufacturing route, plant, geography and whether the product is a single component or an assembled part.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-n-e-c-of-dish-washing-machines-parts-of-machinery-for-cleaning-or-drying-bottles-64b08827 |
| classification_refs | CPC 3.0: 43944 (`un-cpc-3-0-structure-2025`) |
| covered_products | Purpose-built parts and subassemblies for dishwashing, container cleaning or drying, container filling/closing/sealing/capsuling/labelling, beverage aerating, packing and wrapping machinery |
| excluded_products | Complete machines; generic fasteners and independently marketed standard articles; parts assigned to another specific machinery-parts category; services; distribution packaging; installation, use and end-of-life |
| representative_product | One finished, inspected, unpackaged machinery part or subassembly conforming to the declared drawing and acceptance specification |
| production_route | Declared bill-of-material receipt followed by the applicable forming, machining, moulding, joining, cleaning, finishing, assembly and inspection operations at the reporting site |
| market_state | Finished and accepted at the factory gate, unpackaged for distribution, with design revision and material state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished machinery part or subassembly with the declared fit, material, geometry and functional interface for the stated covered equipment family |
| How much | 1 kg of accepted finished part output |
| How well | Conforms to the declared drawing revision, material specification, dimensional tolerances, surface condition and factory acceptance criteria |
| How long or cycle | At factory-gate release for the declared production period; service life is reported separately and is not the reference-flow duration |
| reference_flow_link | Net accepted output mass from `part_manufacturing` normalized to 1 kg, excluding rejected parts and production scrap |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished CPC 43944 machinery part or subassembly |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | covered equipment family; part number and drawing revision; single component or subassembly; material composition and grades; finished mass; manufacturing technologies; surface treatment; plant and geography; reporting period; acceptance specification; recycled content; treatment of internal rework; factory-gate unpackaged state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of accepted finished parts. Exclude distribution packaging, rejected parts and production scrap from reference output mass. |
| `mu_material_mass` | material inputs and waste outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert purchasing, issue and waste records to dry or as-received mass consistently; disclose moisture, coatings or contamination when material. |
| `mu_electricity` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 1 kWh = 3.6 MJ; do not mix upstream generation losses into foreground metered use. |
| `mu_gas_volume_to_mass` | carbon dioxide shielding gas | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer supplier mass records. A volume-to-mass conversion requires documented gas composition, pressure, temperature and reference conditions. |

## 5. System Boundary

The foreground boundary starts when specified materials and consumables are received by the reporting site and ends when the declared part is accepted in the unpackaged factory-gate state. Include on-site forming, machining, moulding, joining, cleaning, finishing, assembly, inspection, internal material handling, metered utilities, direct emissions and all production wastes. Upstream production of purchased inputs shall be represented by separate datasets. Distribution packaging, outbound transport, installation, use, maintenance and end-of-life are outside this PCR.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, consumables and externally manufactured components at receiving, with supplier, grade, form, recycled content and delivery boundary declared |
| starting_condition_role | Upstream product inputs to the foreground part-manufacturing process |
| product_classification_scope | Finished products are restricted to the semantic boundary of CPC 3.0 subclass 43944; complete machines and other machinery-parts subclasses are excluded (`un-cpc-3-0-structure-2025`) |
| recursive_input_rule | A purchased part already within this same product category is recorded once as an upstream product input with its own dataset; do not recursively reopen its manufacturing inventory inside this foreground process |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise use geographically and technologically representative datasets and disclose substitutions, recycled-content basis and allocation model |
| disclosure | Declare equipment family, part identity, bill of materials, material grades, included technologies, internal rework, scrap destinations, cleaning route, surface treatment, energy boundary, factory-gate unpackaged state and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_semantic_scope` | product identity | The reference product shall be a finished part or subassembly within CPC 43944, not a complete machine or a generic fabricated-metal product. | `un-cpc-3-0-structure-2025` |
| `sb_foreground_gate` | foreground process | Include all operations controlled by the reporting site that transform or assemble inputs into the accepted part, together with their direct utilities, wastes and elementary emissions. |  |
| `sb_route_condition` | conditional operations | Include only forming, machining, moulding, joining, cleaning, finishing and assembly operations actually used by the declared part route; explicitly mark other route-specific flow rows not applicable. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_manufacturing` | Part fabrication, joining, cleaning, finishing and inspection | `required` | Always; individual route-specific exchanges apply only when the declared bill of materials and route use them | Foreground production of the accepted factory-gate part | 1 kg accepted finished unpackaged part |

### Process: Part fabrication, joining, cleaning, finishing and inspection (`part_manufacturing`)

#### Inputs

##### Product flows

###### Stainless steel sheet (`stainless_steel_sheet`)

Record separately when stainless sheet is issued to forming or machining for the declared part.

- Selected flow: Stainless steel sheet (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass minus documented unused material returned unchanged to controlled inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources:

###### Primary aluminum alloy sheet (`primary_aluminum_alloy_sheet`)

Record separately when primary aluminium-alloy sheet is issued; do not use this flow for secondary aluminium or foil.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass minus documented unused sheet returned unchanged to controlled inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources:

###### Polyamide 6 granulate (`pa6_granulate`)

Record separately when PA6 granulate crosses the boundary for moulded parts; declare virgin/recycled content, grade, additives and returned regrind.

- Selected flow: Polyamide 6 (PA6) granulate `55be6cb7-2fb9-4c6f-b37f-08c849c72cf5`
- Flow property / unit: Mass / kg
- Amount rule: Net dry-equivalent issued mass after subtracting documented unopened returns and internally returned regrind
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources:

###### Purchased electricity (`electricity`)

Record metered electricity consumed by the included production operations and allocated facility loads.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered process electricity plus consistently allocated shared-site electricity, converted under `mu_electricity`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Process water (`process_water`)

Record when process water is supplied for aqueous cleaning, rinsing or water-based machining; exclude sanitary water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-balanced process-water input attributable to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Solid steel welding wire (`solid_steel_welding_wire`)

Record only when a solid steel wire consumable is used for joining; flux-cored wire and electrodes require separate foreground rows.

- Selected flow: Solid steel welding wire (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Issued wire mass less documented unused wire returned to controlled inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_records`
- Sources:

###### Carbon dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Record only when carbon dioxide is purchased as welding shielding gas; mixture gases require separate atomic flow rows.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Delivered mass plus opening inventory minus closing inventory, returned cylinders and measured recovered gas
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_welding_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished machinery part (`reference_product`)

Record only accepted output conforming to the declared drawing and factory acceptance specification.

- Selected flow: Finished CPC 43944 machinery part or subassembly
- Flow property / unit: Mass / kg
- Amount rule: Measured net accepted finished output mass, excluding distribution packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_records`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### On-site generated stainless steel scrap (`stainless_steel_scrap`)

Record segregated stainless offcuts, chips and rejected stainless workpieces leaving the foreground process as waste.

- Selected flow: On-site generated stainless steel scrap (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed stainless scrap sent to external treatment, net of documented internal closed-loop return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Aluminium scrap (`aluminum_scrap`)

Record segregated aluminium offcuts, chips and rejected aluminium workpieces leaving the foreground process as waste.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed aluminium scrap sent to external treatment, net of documented internal closed-loop return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Polyamide 6 production scrap (`pa6_scrap`)

Record PA6 runners, purge, trimmings and rejected mouldings leaving the foreground process as waste.

- Selected flow: Polyamide 6 production scrap (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed PA6 waste sent to external treatment, net of documented regrind returned within the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Spent coolant (`spent_coolant`)

Record water-miscible machining coolant removed from service and sent to external treatment.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented transfer mass of spent coolant leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Wastewater from cleaning (`cleaning_wastewater`)

Record wastewater generated by aqueous part cleaning or rinsing that leaves the foreground system for treatment or discharge.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass or water-balance result after subtracting measured evaporation and internal recirculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide emitted to air (`fossil_co2_to_air`)

Record direct fossil carbon dioxide released from the purchased shielding-gas input; exclude upstream electricity emissions and captured or returned gas.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculated purchased shielding-gas consumption minus measured capture or return; zero when the carbon-dioxide shielding route is not used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished unpackaged part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_welding_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | multi-product production | Prefer direct metering, bill-of-material tracing and process subdivision by part family and route before allocation. |  |
| `al_shared_operations` | shared utilities and operations | Allocate unavoidable shared utilities and operations using a documented physical driver that represents causality, such as machine time, metered energy, processed mass or production time; do not default to revenue. |  |
| `al_scrap` | production scrap | Report scrap as a separate waste output and disclose internal closed-loop return. Do not subtract an avoided-primary-material credit inside the foreground inventory unless the study's declared allocation model requires it. |  |
| `al_rework` | internal rework | Keep rework energy and material losses inside the foreground system and count only finally accepted output in the reference flow. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_records` | `part_manufacturing` | stainless sheet, primary aluminium-alloy sheet and PA6 input | purchase, warehouse issue and bill-of-material records | part number; material flow row; grade; form; supplier; virgin/recycled state; opening stock; receipts; issues; unchanged returns; closing stock; mass | Reconcile material ledger to the declared part and production order | kg | Each production order; monthly reconciliation | At least 12 consecutive representative months or the full campaign | Reporting site and declared part family | Sum net issues by atomic material flow, then divide by accepted output mass | Approved bill of materials; supplier certificate; calibrated scale records; stock reconciliation |
| `cp_utility_records` | `part_manufacturing` | electricity, process water and cleaning wastewater | meters, invoices and water balance | meter id; opening/closing reading; unit; process allocation; recirculation; evaporation; wastewater discharge | Read dedicated meters where available; otherwise document a causal allocation and water balance | MJ for electricity; kg for water | Monthly and at route change | Same period as product output | Reporting site; included equipment and shared-load boundary declared | Convert units, subtract excluded loads, and normalize to accepted output mass | Meter calibration; invoice reconciliation; allocation worksheet; water-balance closure |
| `cp_welding_records` | `part_manufacturing` | solid wire, carbon dioxide input and direct carbon dioxide release | issue, cylinder and capture records | wire issue/return mass; cylinder deliveries/returns; opening/closing gas stock; gas composition; captured gas | Reconcile consumable issues and cylinder inventory to welding orders | kg | Each welding order; monthly reconciliation | Same period as welded product output | Reporting site and declared welding cells | Net wire issue and gas consumption divided by accepted output; direct release by `calc_co2_release` | Supplier delivery records; inventory reconciliation; gas composition; capture meter if used |
| `cp_product_output_records` | `part_manufacturing` | accepted finished part | production and inspection records | part number; drawing revision; produced count; accepted count; rejected count; net unit mass; total accepted mass | Weigh representative units or production lots and reconcile to inspection release | kg | Each lot | Full reporting period | Reporting site and declared part | Sum accepted unpackaged mass only | Calibrated scale; inspection release; nonconformance log |
| `cp_waste_records` | `part_manufacturing` | stainless scrap, aluminium scrap, PA6 scrap and spent coolant | waste container, transfer and treatment records | waste row; material grade; gross/tare mass; internal return; destination; treatment route; date | Weigh segregated waste or use verified transfer-document mass | kg | Each shipment; monthly reconciliation | Same period as product output | Reporting site | Sum external waste by atomic flow net of documented internal return, then normalize | Scale calibration; transfer note; waste classification; recycler receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | normalized amount = period flow amount / period accepted finished unpackaged product mass | period atomic flow amount; accepted output mass | amount per 1 kg reference product |  |
| `calc_electricity` | electricity | MJ = metered kWh × 3.6 | metered kWh | electricity in MJ |  |
| `calc_cleaning_wastewater` | cleaning wastewater | wastewater mass = process-water input + water in cleaning solutions − measured evaporation − retained water − internally recirculated water | water input; solution water; evaporation; retention; recirculation | cleaning wastewater in kg |  |
| `calc_co2_release` | shielding carbon dioxide | direct fossil CO2 release = net purchased CO2 consumption − measured capture − documented return | deliveries; opening/closing inventory; returns; captured gas | fossil CO2 to air in kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Preserve part number, drawing revision, equipment family, acceptance specification and unit mass for every aggregated product family. | Drawing control and inspection-release records |
| `dq_completeness` | process inventory | Reconcile atomic material inputs, accepted output, rejects, scrap, internal returns and stock change; explain material mass-balance gaps. | Signed reconciliation worksheet and inventory records |
| `dq_temporal` | all foreground data | Use one consistent representative period and document shutdowns, trials, abnormal batches and route changes. | Reporting-period register and production log |
| `dq_technology` | route-specific exchanges | Identify actual forming, machining, moulding, joining, cleaning and finishing technologies and mark non-applicable atomic rows explicitly. | Route sheet, equipment list and process-flow review |
| `dq_uuid` | unresolved identities | Retain semantic flow names and do not substitute proxy UUIDs for the unresolved reference product, stainless sheet, solid welding wire, stainless scrap or PA6 scrap. | UUID review metadata and finalized search receipts |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | reference product | Confirm that exactly 1 kg of accepted, unpackaged finished output is the reference flow and that product qualifiers are complete. | `un-cpc-3-0-structure-2025` |
| `val_atomic_rows` | inventory | Reject combined material, utility, waste or emission labels; each reported exchange shall retain one physical or chemical identity. |  |
| `val_route_consistency` | conditional flows | Confirm that each material, welding, water, waste and direct-emission row is used only when its declared route applies and is otherwise explicitly not applicable. |  |
| `val_mass_balance` | material conversion | Reconcile net material inputs with accepted product, wastes, internal returns and stock changes; investigate unexplained gaps before publication. |  |
| `val_no_double_count` | energy and emissions | Exclude upstream electricity emissions from direct elementary outputs and do not count internally recirculated water, regrind or scrap as a second external input or output. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after methodological review and representative aggregation |
| downstream_use | Cradle-to-factory-gate modelling of declared CPC 43944 machinery parts in equipment manufacture, maintenance or replacement-part supply chains |
| allowed_use | Use for the declared part design, material mix, production route, plant geography, technology and time period; extrapolation requires documented representativeness review |
| excluded_use | Complete machinery, generic fabricated-metal products, other machinery-parts classes, distribution packaging, installation, machine use, maintenance service and end-of-life |
| required_metadata | PCR id and version; part number; drawing revision; covered equipment family; product mass; bill of materials; material grades and recycled content; route technologies; plant/geography; reporting period; allocation; upstream datasets; waste destinations; unresolved UUIDs |
| required_quality_disclosure | Meter coverage; material and waste mass-balance closure; shared-load allocation; supplier-data share; temporal coverage; abnormal operations; internal rework; water recirculation; gas capture; data gaps and proxy datasets |
| update_trigger | Drawing or material change; route or equipment change; surface-treatment change; plant/geography change; supplier or recycled-content change; allocation change; material shift in annual energy, water, yield or waste performance; exact UUID resolution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-06-23; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | Official CPC 43944 identity, inclusion wording and separation from adjacent machinery-parts categories |
