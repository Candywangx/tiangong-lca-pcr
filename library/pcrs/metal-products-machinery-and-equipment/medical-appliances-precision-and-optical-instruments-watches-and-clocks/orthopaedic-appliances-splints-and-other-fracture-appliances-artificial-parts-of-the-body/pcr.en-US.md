---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.orthopaedic-appliances-splints-and-other-fracture-appliances-artificial-parts-of-the-body
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Orthopaedic appliances; splints and other fracture appliances; artificial parts of the body

## 1. Scope and Applicability

This PCR covers gate-to-gate manufacture of finished orthopaedic appliances, splints and other fracture appliances, and artificial parts of the body. Covered products include external orthoses and fracture supports, prosthetic limbs and components, artificial joints, and other implantable or non-implantable artificial body parts, including standard-sized and patient-matched devices. The foreground boundary begins with qualified purchased materials, components and packaging at the manufacturing-site gate and ends with the quality-released packaged product at the factory gate.

Hearing aids and separately classified compensating devices, biological tissues or cells, medicines, generic raw-material production, clinical fitting and surgery, use, maintenance and end-of-life are excluded. A data package shall identify the exact device family and include only route modules and atomic exchanges that actually apply. Mass normalization does not establish clinical equivalence between unlike devices.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.orthopaedic-appliances-splints-and-other-fracture-appliances-artificial-parts-of-the-body |
| classification_refs | CPC 3.0: 48171 — Orthopaedic appliances; splints and other fracture appliances; artificial parts of the body |
| covered_products | External orthoses and splints; fracture-fixation appliances; prosthetic limbs and components; artificial joints; implantable and non-implantable artificial body parts; standard-sized and patient-matched devices |
| excluded_products | Hearing aids and separately classified compensating devices; biological tissues and cells; medicines; raw materials sold as such; clinical fitting and surgery; use, maintenance and end-of-life services |
| representative_product | One quality-released finished orthopaedic appliance, fracture appliance or artificial body part belonging to a declared device family |
| production_route | Conventional forming or machining, additive manufacturing, polymer molding or lay-up, cleaning, assembly, optional thermal processing, optional validated sterilization, final inspection and packaging, as applicable |
| market_state | Finished, quality-released and packaged; sterile or non-sterile state declared; standard-sized or patient-matched state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared orthopaedic support, fracture stabilization, anatomical replacement or prosthetic function of one specified device family |
| How much | 1 kg net mass of quality-released finished product, excluding transport packaging but including components that remain in the device |
| How well | Meets declared design, material, dimensional, mechanical, biocompatibility, cleanliness and, when applicable, validated sterile-state specifications for intended use |
| How long or cycle | Declared design life, implantation period, reuse cycles or single-use status; duration is a required qualifier and is not silently normalized |
| reference_flow_link | `finished_appliance` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Orthopaedic appliances, splints and other fracture appliances, artificial parts of the body `5ce1d551-f011-4400-8717-bdde251252f7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | device family and intended function; model or patient-matched identifier; implantable or external state; standard-sized or patient-matched state; complete material composition and net product mass; manufacturing technology and included route modules; sterile state and sterilization method; reusable or single-use status; design life or use cycles; packaging configuration; site, geography and reference year |

Every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, product description or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and normalization | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net finished-product mass after quality release and before transport packaging; normalize foreground exchanges to exactly 1 kg accepted product. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity by process; convert kWh with 1 kWh = 3.6 MJ and disclose voltage, grid geography and loss boundary. |
| `gas_volume` | gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record supplier or meter volume and disclose pressure, temperature or billing reference conditions; do not mix standard and actual volumes. |
| `chemical_mass` | sodium hydroxide and ethylene oxide | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report pure-substance mass; for solutions multiply delivered solution mass by measured or certified mass fraction and retain raw fields. |
| `waste_mass` | solid scrap and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report wet wastewater mass and as-dispatched mass for each chemically distinct scrap stream; disclose moisture or entrained liquid when material. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified purchased materials, components, chemicals, energy carriers and packaging have crossed the site gate with supplier identity and incoming quantity records available |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | Finished orthopaedic appliances, fracture appliances and artificial body parts within the reviewed semantic boundary; classification does not replace the declared device family |
| recursive_input_rule | A purchased item meeting this same product-category boundary is recorded once as a product input with an upstream dataset and is not recursively decomposed inside the receiving process |
| upstream_dataset_requirement | Link upstream datasets for every purchased material, component, chemical, energy input and outsourced in-boundary process; disclose supplier, geography, technology and recycled content where relevant |
| disclosure | Declare site and year; device family and model; included modules; material and packaging composition; net mass; reject and scrap treatment; sterile state and sterilization location; allocation; cut-offs; outsourced operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground manufacturing system | Include transformation, post-processing, cleaning, assembly, inspection and packaging under declared manufacturing responsibility; exclude raw-material production, clinical use and end-of-life while linking required upstream datasets. | `fda-am-medical-devices-2017`; `fda-qmsr-2026` |
| `boundary_route_condition` | conditional modules | Include additive manufacturing, thermal processing and sterilization only when performed for the declared product; identify each step, parameter set and output specification. | `fda-am-medical-devices-2017` |
| `boundary_sterile_state` | sterile and non-sterile products | If supplied sterile, include controlled packaging and validated sterilization whether on-site or represented by an upstream contracted-process dataset; otherwise declare non-sterile state and packaging cleanliness controls. | `eu-mdr-2017-745` |
| `boundary_no_silent_cutoff` | material, waste and emission completeness | Do not omit a small-mass exchange when it can affect biocompatibility, cleanliness, sterile-state assurance, hazardous emissions or regulated waste classification. | `eu-mdr-2017-745`; `fda-am-medical-devices-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_transformation` | Material preparation and transformation | `conditional` | Include when cutting, machining, molding, lay-up or additive fabrication occurs within the foreground boundary. | Convert qualified feedstock to device components. | Accepted component mass entering cleaning and assembly |
| `cleaning_assembly` | Post-processing, cleaning and assembly | `required` | Always include; record zero chemical use only when documented. | Remove residues, finish surfaces and assemble the device. | Accepted assembled-device mass |
| `thermal_processing` | Thermal processing | `conditional` | Include when furnaces, ovens, annealing, curing or hot isostatic pressing are controlled within the boundary. | Achieve specified material properties. | Accepted processed component mass |
| `sterilization` | Sterilization | `conditional` | Include for products supplied sterile when ethylene-oxide sterilization is in the foreground boundary; other technologies need their own atomic exchanges. | Establish validated sterile state. | Released sterilization-load mass |
| `packaging_release` | Final inspection, packaging and quality release | `required` | Always include. | Verify, package and release conforming product. | 1 kg net accepted finished product |

### Process: Material preparation and transformation (`material_transformation`)

#### Inputs

##### Product flows

###### Titanium plate feedstock (`titanium_plate`)

Record only when titanium plate is transformed for the device; retain alloy and medical grade.

- Selected flow: Titanium Plate `f32fc628-252f-40fe-8f8d-fd0efb955e92`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted plate mass issued to production, net of returned unopened stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources:

###### Stainless-steel feedstock (`stainless_steel`)

Record only when stainless steel enters the device bill of materials; retain grade and form.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted stainless-steel mass issued to production, net of returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources:

###### UHMWPE molding or machining stock (`uhmwpe_molding_stock`)

Record medical-grade ultra-high-molecular-weight polyethylene stock only when retained in a component; UUID unresolved.

- Selected flow: Ultra-high-molecular-weight polyethylene molding stock
- Flow property / unit: Mass / kg
- Amount rule: measured accepted UHMWPE stock mass issued to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources:

###### Medical-grade silicone rubber (`medical_grade_silicone_rubber`)

Record only when silicone becomes a retained liner, interface or prosthetic component; UUID unresolved.

- Selected flow: Medical-grade silicone rubber
- Flow property / unit: Mass / kg
- Amount rule: measured accepted silicone-rubber mass issued to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources:

###### Electricity for material transformation (`material_transformation_electricity`)

Record energy for cutting, machining, molding, additive fabrication and local extraction.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or verified equipment demand integrated over allocated operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

###### Industrial oxygen for cutting (`industrial_oxygen`)

Record only for oxygen-assisted cutting when supplied oxygen crosses the site boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: supplier or process-meter volume allocated to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Titanium machining scrap (`titanium_machining_scrap`)

Record segregated titanium chips and offcuts; UUID unresolved.

- Selected flow: Titanium machining scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed as-dispatched scrap corrected for documented coolant carryover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Stainless-steel machining scrap (`stainless_steel_machining_scrap`)

Record segregated stainless-steel chips and offcuts; UUID unresolved.

- Selected flow: Stainless-steel machining scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed as-dispatched scrap corrected for documented coolant carryover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### UHMWPE scrap (`uhmwpe_scrap`)

Record segregated UHMWPE sprues, chips and offcuts; UUID unresolved.

- Selected flow: Ultra-high-molecular-weight polyethylene scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed as-dispatched UHMWPE scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Silicone-rubber scrap (`silicone_rubber_scrap`)

Record segregated cured or uncured silicone trimmings; UUID unresolved.

- Selected flow: Silicone rubber scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed as-dispatched silicone-rubber scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

### Process: Post-processing, cleaning and assembly (`cleaning_assembly`)

#### Inputs

##### Product flows

###### Process water for cleaning (`process_water`)

Record process water for rinsing or cleaning accepted parts and assemblies.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured water mass; volume conversion requires documented measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources:

###### Sodium hydroxide cleaning chemical (`sodium_hydroxide`)

Record pure sodium-hydroxide mass only when used by the declared cleaning route.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: net solution mass multiplied by recorded NaOH mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources:

###### Electricity for cleaning and assembly (`cleaning_assembly_electricity`)

Record energy for finishing, cleaning, drying and assembly equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or verified equipment demand integrated over allocated operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

Record aqueous cleaning waste crossing to treatment; retain composition, hazard status and destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass or documented water-and-chemical mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

### Process: Thermal processing (`thermal_processing`)

#### Inputs

##### Product flows

###### Gaseous natural gas (`natural_gas`)

Record only when directly combusted in foreground furnaces, ovens or thermal oxidizers.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or invoiced volume allocated to accepted production at declared conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

###### Electricity for thermal processing (`thermal_processing_electricity`)

Record electricity for thermal equipment and dedicated controls.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or verified equipment demand integrated over allocated time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_carbon_dioxide`)

Record only direct fossil CO2 from foreground natural-gas combustion, not upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or gas use multiplied by a documented applicable fossil-carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

### Process: Sterilization (`sterilization`)

#### Inputs

##### Product flows

###### Ethylene oxide sterilant (`ethylene_oxide`)

Record only for validated ethylene-oxide sterilization; retain concentration and load.

- Selected flow: Ethylene Oxide `a460460e-055f-4b74-9c6f-c1a0b315f31a`
- Flow property / unit: Mass / kg
- Amount rule: batch dosing mass allocated to released sterilization-load product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released sterilization-load product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sterilization_records`
- Sources: `eu-mdr-2017-745`

###### Electricity for sterilization (`sterilization_electricity`)

Record energy for chamber, aeration and dedicated abatement equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity allocated by released load mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released sterilization-load product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `eu-mdr-2017-745`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Ethylene oxide emitted to air (`ethylene_oxide_to_air`)

Record residual ethylene oxide released to unspecified air after controls.

- Selected flow: ethylene oxide `fe0acd60-3ddc-11dd-a488-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: monitored emission or validated batch mass balance after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released sterilization-load product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sterilization_records`
- Sources: `eu-mdr-2017-745`

### Process: Final inspection, packaging and quality release (`packaging_release`)

#### Inputs

##### Product flows

###### Low-density polyethylene film (`ldpe_film`)

Record PE-LD film remaining in declared unit or sterile-barrier packaging.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: packaging BOM mass verified by counts or receipt reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-mdr-2017-745`

###### Corrugated board box (`corrugated_box`)

Record the corrugated box in the declared sales or distribution packaging.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: packaging BOM mass verified by box counts and measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-mdr-2017-745`

###### Electricity for packaging and release (`packaging_release_electricity`)

Record energy for inspection, packaging, labeling and dedicated controlled environment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or verified equipment demand integrated over allocated time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Quality-released finished appliance (`finished_appliance`)

This is the quantitative reference; packaging mass is reported separately.

- Selected flow: Orthopaedic appliances, splints and other fracture appliances, artificial parts of the body `5ce1d551-f011-4400-8717-bdde251252f7`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net quality-released finished product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow of 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared equipment and lines | Prefer subdivision, batch records and submetering so burdens are assigned to the device family causing them. |  |
| `allocation_batch_driver` | shared batch processes | Allocate first by a causal driver such as occupied chamber capacity or validated machine time; use released mass only when no better measured driver exists. |  |
| `allocation_recycling` | segregated scrap | Report each scrap flow and destination without an avoided-virgin credit inside the foreground process unless a consistently declared background recycling model supplies it. |  |
| `allocation_disclosure` | residual allocation | Disclose process, products, driver, numerator, denominator, factor and sensitivity; factors sharing a burden shall sum to one. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `material_transformation` | material and gas inputs | receipt, issue and inventory record | identity; grade; form; supplier; lot; stock; receipt; issue; return; mass or volume; reference conditions | Reconcile qualified warehouse and production issues to declared lots. | kg or m3 | each receipt and issue | continuous 12 months or complete shorter campaign | all production sites in scope | sum net issued amount and allocate by lot or causal driver | certificate; lot traceability; calibrated scale or meter; reconciliation |
| `cp_energy_meters` | all included processes | electricity and natural gas | meter, invoice and run log | meter id; readings; unit; conditions; equipment; run time; lot; accepted output | Prefer submeters; otherwise integrate verified demand over logged time and reconcile to invoices. | MJ, kWh or m3 | batch or month | continuous 12 months or complete shorter campaign | all in-scope locations | difference readings, convert, causally allocate and normalize | calibration; invoice; run log; allocation worksheet |
| `cp_cleaning_records` | `cleaning_assembly` | water and NaOH | meter, recipe and issue record | water; density; solution mass; NaOH fraction; return; batch; output | Meter water and reconcile chemicals to controlled recipes. | kg, m3 and mass fraction | cleaning batch | same production period | all cleaning lines | calculate pure NaOH, aggregate accepted batches and normalize | calibration; concentration certificate; recipe; batch record |
| `cp_waste_records` | `material_transformation`; `cleaning_assembly` | scrap and wastewater | scale ticket, manifest and effluent meter | identity; composition; wet mass; carryover; destination; treatment; batch; wastewater | Weigh segregated dispatches and meter wastewater; reconcile stocks. | kg or m3 | dispatch or discharge period | same production period | all generation points | opening stock plus generation minus closing stock and returns | calibration; manifest; treatment receipt; composition record |
| `cp_combustion_emissions` | `thermal_processing` | fossil CO2 | stack monitor or fuel-carbon record | fuel; conditions; carbon factor; oxidation; measured CO2; period | Prefer calibrated monitoring; otherwise calculate from metered fuel and documented applicable factor. | kg CO2 | monitored period or fuel batch | same thermal period | all combustion units | aggregate and causally allocate by furnace load | calibration; fuel certificate; factor record; balance check |
| `cp_sterilization_records` | `sterilization` | ethylene oxide and emission | chamber, dose, aeration and abatement record | dose; concentration; released load; chamber; cycle; destroyed mass; emission; status | Reconcile dosing to released loads and measured or validated emissions. | kg | cycle | all cycles in period | each in-scope chamber and control | released loads only; allocate by validated load driver | validated cycle; calibration; release; monitor or mass balance |
| `cp_packaging_records` | `packaging_release` | packaging and finished product | BOM, count, unit-mass and release record | material; unit mass; count; model; net product mass; reject; sterile state; status | Verify BOM by counts and unit masses; weigh product separately. | kg and count | lot | continuous 12 months or complete shorter campaign | all packaging sites | sum released product and associated packaging, normalize to 1 kg | BOM; calibration; count reconciliation; release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every row | normalized amount = amount assigned to accepted product / net accepted product mass in kg | assigned amount; accepted mass | amount per 1 kg product |  |
| `calc_electricity_mj` | electricity | MJ = metered kWh × 3.6 | kWh | MJ |  |
| `calc_naoh_pure_mass` | `sodium_hydroxide` | pure NaOH = net solution mass × NaOH mass fraction | solution mass; fraction; return | kg NaOH |  |
| `calc_waste_stock_balance` | solid scrap | generated waste = dispatches + closing stock − opening stock − externally received waste, adjusted for returns | dispatch, stock and return | kg generated scrap |  |
| `calc_combustion_co2` | `fossil_carbon_dioxide` | use calibrated measurement; otherwise multiply metered gas by documented applicable fossil-carbon factor and oxidation treatment | gas; factor; oxidation | kg direct fossil CO2 |  |
| `calc_allocation_check` | shared processes | sum of allocation factors sharing a burden = 1 | factors and total | reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve family, model, function, sterile state, composition, net mass and release status. | specification, BOM and release record |
| `dq_process_traceability` | all processes | Link lots from qualified input through parameters, rejects, sterilization when applicable and release. | traveller, batch record, equipment log and QMS record |
| `dq_measurement` | meters and scales | Use calibrated equipment; document conversions, reference conditions, gaps and estimates. | calibration, meter log and worksheet |
| `dq_temporal` | annual or campaign inventory | Use continuous 12 months or a complete shorter campaign and explain shutdowns, validation builds and atypical rejects. | calendar, coverage and review |
| `dq_mass_balance` | materials, product and wastes | Reconcile major inputs to accepted product, rejects, wastes and stock changes by material family. | signed balance and stock reconciliation |
| `dq_sterile_packaging` | sterile products | Link sterilization and packaging records to released sterile state and configuration. | validated cycle, package-integrity and release evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | identity and reference flow | Fail if family, function, model or patient match, net mass, sterile state, life or cycles, route, site or year is missing. | `un-cpc-3-0-2025`; `fda-am-medical-devices-2017` |
| `validate_reference_mass` | reference product | Confirm `finished_appliance` is exactly 1 kg net accepted product and packaging is excluded from net mass. |  |
| `validate_route_inventory` | process map and inventory | Confirm each declared module has atomic material, energy, waste and direct-emission exchanges; reject combined labels. | `fda-am-medical-devices-2017` |
| `validate_mass_balance` | transformation and packaging | Reconcile major inputs, accepted product, rejects, wastes and stocks; investigate residuals. | `fda-qmsr-2026` |
| `validate_no_double_count` | energy and emissions | Confirm direct combustion and sterilization emissions are not counted again upstream. |  |
| `validate_sterility` | sterile products | Confirm validated sterilization, controlled packaging and release evidence cover product and period. | `eu-mdr-2017-745`; `fda-qmsr-2026` |
| `validate_allocation` | shared processes | Confirm driver and worksheet are disclosed and factors sharing a burden sum to one. |  |
| `validate_unresolved` | UUID and range evidence | Keep unresolved identities and unsupported ranges explicit; do not substitute proxies or invented ranges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset eligible as `secondary_dataset` or `background_dataset` after review |
| downstream_use | product carbon footprints, compatible within-family LCA, hotspot analysis, `process` datasets and `lifecyclemodel` projections |
| allowed_use | Use when identity, performance, life, composition, sterile state, packaging, modules, geography, year and allocation are compatible. |
| excluded_use | Do not compare unlike functions on mass alone or represent clinical fitting, surgery, patient outcomes, use, maintenance or end-of-life without added processes. |
| required_metadata | PCR id and version; family and model; function; standard or patient-matched state; implantable or external state; net mass; composition; modules; sterile state and sterilization; packaging; site; geography; year; technology; allocation; upstream datasets; cut-offs |
| required_quality_disclosure | source shares; meter coverage; temporal coverage; supplier specificity; allocation; mass-balance residual; reject treatment; missing data; unresolved UUIDs; range gaps; sterilization and packaging validation |
| update_trigger | Update after material design, technology, sterilization, packaging, sterile state, site, supplier or allocation changes; data-age failure; or resolution of identity and range gaps. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 48171 identity and wording |
| `china-mof-tariff-concordance-2021-2022` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, 2021–2022 tariff conversion table, Part I, p. 114. https://m.mof.gov.cn/zcfb/202112/P020211231585098397303.pdf | Professional Chinese terminology for orthopaedic appliances, fracture appliances and artificial body parts |
| `fda-am-medical-devices-2017` | Official guidance (`official_guidance`) | U.S. FDA, Technical Considerations for Additive Manufactured Medical Devices, December 2017, docket FDA-2016-D-1210. https://www.fda.gov/media/97633/download | Route, material control, post-processing, cleaning, sterilization, packaging, testing and quality data |
| `eu-mdr-2017-745` | Standard (`standard`) | Regulation (EU) 2017/745 on medical devices, Annex I. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745 | Contamination, sterilization, packaging and sterile-state rules |
| `fda-qmsr-2026` | Official guidance (`official_guidance`) | U.S. FDA, Quality Management System Regulation, updated 2 February 2026. https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr | Current finished-device QMS, records and traceability context |
