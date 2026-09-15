---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.coaxial-cable-and-other-coaxial-electric-conductors
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Coaxial cable and other coaxial electric conductors

## 1. Scope and Applicability

This PCR governs foreground data packages for the manufacture of coaxial cable and other coaxial electric conductors in which an inner electrical conductor and an outer conductor or shield share a substantially common axis and are separated by a dielectric. It covers communication, radio-frequency, radiating, instrumentation, and comparable coaxial constructions delivered as cable at the manufacturing gate.

The representative route uses copper wire for the centre conductor and braid, polyethylene dielectric, an aluminium foil with a polyethylene-terephthalate backing layer, and a polyvinyl-chloride jacket. A producer shall replace or extend these material rows with separately identified atomic flows for the actual construction; the representative material set is not a default bill of materials.

The scope excludes non-coaxial insulated wire, balanced pair cable, optical-fibre cable without a coaxial electrical conductor, connectors and terminated cable assemblies, complete inter-array or other installed cable systems, distribution, installation, use, maintenance, and end-of-life. Dispatch reels, pallets, wrapping, and other delivery packaging are outside the declared reference-product boundary and their exclusion shall be disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.coaxial-cable-and-other-coaxial-electric-conductors |
| classification_refs | CPC 3.0: 46320, Coaxial cable and other coaxial electric conductors |
| covered_products | Un-terminated coaxial communication, radio-frequency, radiating, instrumentation, and comparable coaxial electric conductors supplied as cable |
| excluded_products | Non-coaxial insulated wire; balanced pair cable; optical-fibre-only cable; connectors; terminated cable assemblies; installed cable systems; direct-current power cable not constructed and declared as a coaxial electric conductor |
| representative_product | One continuous metre of un-terminated copper/PE/aluminium-PET/copper-braid/PVC coaxial cable |
| production_route | Integrated conductor preparation, dielectric extrusion, foil and braid shielding, jacket extrusion, marking, in-line testing, and take-up |
| market_state | Conforming finished cable at the manufacturing gate, before dispatch packaging, distribution, installation, and use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished coaxial electric conductor that provides the declared signal, radio-frequency, radiating, or instrumentation transmission function through concentric conductors |
| How much | 1 m of continuous conforming cable |
| How well | Meets the declared product specification for construction, characteristic impedance, attenuation at stated frequency, shielding design or coverage, and applicable electrical, mechanical, environmental, and fire-performance tests |
| How long or cycle | Manufacturing-gate output only; service life is outside this PCR and shall not be implied by the reference flow |
| reference_flow_link | One metre of the reference product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 m |
| Reference product flow | Cable `d698551c-0dbf-44d4-8045-c5797a1af141` |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | product and construction identifier; intended coaxial application; inner-conductor material, coating, and geometry; dielectric material and foamed or solid state; outer-conductor and shield materials and construction; jacket material; cable mass per metre; characteristic impedance; attenuation value and test frequency; shielding coverage or transfer-impedance declaration as applicable; rated voltage and remote-power function if applicable; radiating-cable status if applicable; manufacturing geography; production technology; data period; factory-gate state and dispatch-packaging exclusion |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, the product description, process notes, the reference-flow comment, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_length` | conforming finished cable output | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Measure saleable, conforming cable length after final testing and normalize all inventory exchanges to 1 m; exclude setup length, test cuts, and rejected cable from the reference output and report them as waste. |
| `mass_per_length` | finished cable and material mass balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the finished cable mass per metre for the declared construction and use the same moisture and conditioning state for product and material mass balance. |
| `material_mass` | metal and polymer inputs and solid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net mass crossing the foreground boundary; do not substitute nominal layer thickness or purchase value for measured or reconciled mass without a documented calculation rule. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter data in its original unit and convert kWh to MJ using 1 kWh = 3.6 MJ; state whether line-level or allocated facility electricity is used. |
| `natural_gas_volume` | natural gas used on site | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record gas at the supplier or meter reference conditions and disclose temperature, pressure, and higher- or lower-heating-value convention used for any energy or emission calculation. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | foreground product system | Include production and inbound transport of declared metal, polymer, and energy inputs through conductor preparation, dielectric extrusion, shielding, jacketing, marking, testing, take-up, directly controlled utilities, on-site emissions, and treatment or transfer of manufacturing wastes up to conforming cable at the manufacturing gate. | `iec-tr-62839-1-2025`; `siemens-iwlan-rcoax-epd-2024` |
| `boundary_actual_construction` | actual cable construction | Represent every material that remains in the cable and every manufacturing waste or direct emission as an atomic exchange. Add a separate row when the actual construction uses another conductor, dielectric, foil backing, braid, jacket, additive, or processing aid; do not relabel a representative row as a material family. | `us-epa-wire-cable-lca-2008`; `iec-61196-1-2005` |
| `boundary_exclusions` | excluded life-cycle stages | Exclude dispatch packaging, distribution, installation, use, maintenance, and end-of-life from the reference dataset. Disclose the packaging exclusion and do not combine this dataset with a source that includes packaging without boundary adjustment. | `siemens-iwlan-rcoax-epd-2024` |
| `boundary_cutoff` | foreground completeness | No mass, energy, waste, or direct-emission exchange may be omitted solely because it is small. Any omission shall be quantified where possible, justified, and included in the completeness disclosure. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased copper wire, aluminium foil, PET film, polyethylene resin, PVC resin or compound, and other declared constituent materials received at the manufacturing site |
| starting_condition_role | Upstream product inputs to the integrated foreground cable-manufacturing process |
| product_classification_scope | Coaxial cable and other coaxial electric conductors; the classification reference informs scope but does not replace construction qualifiers |
| recursive_input_rule | If purchased or internally transferred coaxial cable of this same category is used, record it as a visible product input at its received state and stop recursive foreground expansion at that transfer; never net it against finished output |
| upstream_dataset_requirement | Link every purchased material, electricity, and fuel flow to a geography-, technology-, grade-, and delivery-state-appropriate upstream dataset and disclose any proxy |
| disclosure | Declare construction and bill of materials, material grades and recycled content, supplier and manufacturing geography, production technology, data period, allocation, excluded dispatch packaging, cut-offs, proxy datasets, waste destinations, and whether on-site fuel combustion applies |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_coaxial_cable_manufacture` | Integrated coaxial cable manufacture | required | Always include for cable produced by the reporting site | Foreground conductor preparation, extrusion, shielding, jacketing, testing, take-up, and manufacturing-waste accounting | Per 1 m conforming finished cable |
| `onsite_fuel_combustion` | On-site fuel combustion | conditional | Include only when natural gas crosses the site boundary and is combusted for cable manufacture or directly supporting thermal operations | Foreground fuel use and direct fossil-carbon emission accounting | Per 1 m conforming finished cable |

### Process: Integrated coaxial cable manufacture (`integrated_coaxial_cable_manufacture`)

#### Inputs

##### Product flows

###### Copper centre-conductor and braid wire (`copper_wire_input`)

Copper wire crossing the manufacturing boundary is measured for the centre conductor and braided outer conductor. Coating or plating, alloy, recycled content, and wire geometry remain product-specific qualifiers.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net copper-wire input assigned to conforming and rejected production during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources:

###### Aluminium foil shield (`aluminium_foil_input`)

Aluminium foil is recorded as the metallic foil layer. Thickness, alloy, coating, and laminate configuration are declared for the actual construction.

- Selected flow: Aluminum foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured or reconciled aluminium-foil input assigned to the reporting-period cable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources:

###### Polyethylene dielectric resin (`polyethylene_dielectric_input`)

Polyethylene resin is recorded for the dielectric layer. Density grade, virgin or recycled content, foamed or solid state, and any separately purchased blowing agent shall be declared; a blowing agent, if used, is a separate atomic input.

- Selected flow: polyethylene `f4dfd1a4-b24e-471e-bd21-04ad7a45ea52`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured polyethylene-resin input assigned to conforming and rejected production during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources:

###### PET film backing layer (`pet_film_input`)

PET film is recorded separately from the aluminium foil in a laminated shield. Film thickness, coating, and recycled content are foreground qualifiers.

- Selected flow: Polyethylene terephthalate `1ce0d026-923b-4339-a8ca-31e228475c75`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured or bill-of-material-reconciled PET-film input assigned to the reporting-period cable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources:

###### PVC jacket material (`pvc_jacket_input`)

PVC resin or compound is recorded for the extruded outer jacket. Formulation, plasticizer, stabilizer, filler, flame-retardant system, and recycled content shall be declared; separately purchased additives are separate atomic inputs.

- Selected flow: Polyvinyl chloride, PVC `a3e4c5ed-ae25-5d3f-ba43-b6cae2f82f33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured PVC resin or compound input assigned to conforming and rejected production during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources:

###### Purchased electricity (`electricity_input`)

Electricity covers the directly metered or allocated energy for conductor preparation, extrusion, shielding, jacketing, marking, testing, take-up, and directly supporting equipment within the declared boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered line electricity, or documented facility electricity allocated to this product construction, converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming coaxial cable (`finished_coaxial_cable_output`)

Only cable passing the declared in-line and final acceptance tests is counted as reference product output. The directly read Tiangong Chinese name for this UUID is 电缆.

- Selected flow: Cable `d698551c-0dbf-44d4-8045-c5797a1af141`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m `838aaa22-0117-11db-92e3-0800200c9a66`
- Amount rule: measured conforming cable length normalized to exactly 1 m of reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_cable_output`
- Sources:

##### Waste flows

###### Segregated copper scrap (`copper_scrap_output`)

Record clean copper wire offcuts and conductor or braid scrap leaving the foreground process separately from composite cable rejects.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed segregated copper scrap leaving the process, without netting recycling revenue or avoided burden
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_waste_mass`
- Sources:

###### Segregated aluminium scrap (`aluminium_scrap_output`)

Record clean aluminium foil trim leaving the foreground process separately from composite laminate or cable rejects.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed segregated aluminium scrap leaving the process, without netting recycling revenue or avoided burden
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_waste_mass`
- Sources:

###### Mixed thermoplastic extrusion scrap (`mixed_thermoplastic_extrusion_scrap`)

Record the physically mixed PE/PET/PVC start-up purge, trim, and extrusion scrap only when the site manages it as one inseparable waste stream. The exact Tiangong waste UUID remains unresolved.

- Selected flow: Mixed thermoplastic extrusion scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed mixed thermoplastic extrusion scrap leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_waste_mass`
- Sources:

###### Off-specification coaxial cable scrap (`offspec_coaxial_cable_scrap`)

Record rejected composite cable, test cuts, and start-up length that retain the coaxial cable construction and leave the process without becoming conforming product. The exact Tiangong waste UUID remains unresolved.

- Selected flow: Off-specification coaxial cable scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed composite cable rejects leaving the process, with associated rejected length retained as supporting data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_waste_mass`
- Sources:

##### Elementary flows

### Process: On-site fuel combustion (`onsite_fuel_combustion`)

#### Inputs

##### Product flows

###### Natural gas consumed on site (`natural_gas_input`)

Include this row only when gaseous natural gas is combusted within the foreground boundary for annealing, thermal conditioning, space directly supporting production, or another declared cable-manufacturing operation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered or invoice-reconciled natural gas assigned to cable manufacture at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_natural_gas`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide to air (`fossil_carbon_dioxide_output`)

Include only direct fossil carbon dioxide released by the on-site combustion represented above. Do not include upstream electricity or fuel-supply emissions in this foreground elementary flow.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: calculated from collected natural-gas quantity, supplier composition or carbon content, oxidation evidence, and a documented calculation rule; use direct measurement when available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m conforming finished cable
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_natural_gas`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multiple products or constructions | Subdivide line, batch, construction, and reporting-period records before allocating shared burdens whenever separate metering or production records exist. |  |
| `allocation_shared_operations` | unavoidable shared electricity and utilities | If subdivision is not possible, allocate shared operational burdens using a causal parameter such as machine time or measured energy demand; use cable length or mass only when causality is demonstrated and disclose the sensitivity. |  |
| `allocation_scrap_outputs` | copper, aluminium, polymer, and composite cable scraps | Report gross scrap quantities and destinations. Do not subtract recycling revenue, recycled-material credit, or avoided primary production from foreground inputs or wastes; apply any downstream recycling method outside this inventory and disclose it. | `iec-tr-62839-1-2025` |
| `allocation_mass_balance` | internal recycling and rework | Internal scrap returned to the same process is not an output crossing the boundary; reconcile it in the material balance. Reworked cable that later passes acceptance is counted once in conforming output, while unrecovered loss remains a waste. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input_mass` | `integrated_coaxial_cable_manufacture` | constituent material input | scale, goods-receipt, batch, and bill-of-material records | material identity; supplier; grade; lot; gross and tare mass; returned material; product construction; line; timestamp | Reconcile calibrated scale or goods-receipt mass to material issue and return records by construction | kg | Each receipt and production issue; aggregate monthly | At least 12 consecutive representative months or the full campaign for campaign production | All foreground lines and sites in the dataset | Sum net material crossing the boundary by construction and divide by conforming output length; retain rejects in the denominator reconciliation, not the reference output | Scale calibration; supplier certificate; lot traceability; inventory reconciliation; bill-of-material revision |
| `cp_electricity_records` | `integrated_coaxial_cable_manufacture` | purchased electricity | interval meter and production-line records | meter id; start and end readings; interval energy; line state; product construction; conforming length; rejected length; downtime; allocation driver | Prefer line submetering; otherwise reconcile facility electricity and documented causal allocation to production | kWh and MJ | Interval or shift; aggregate monthly | Same period as material and output records | All included production and directly supporting equipment | Subtract documented out-of-boundary loads, allocate only unavoidable shared loads, convert kWh to MJ, and divide by conforming length | Meter calibration; utility invoices; allocation worksheet; completeness reconciliation |
| `cp_finished_cable_output` | `integrated_coaxial_cable_manufacture` | conforming reference product | length counter, test, mass, and release records | construction id; reel or batch id; length; sample mass and length; acceptance result; impedance; attenuation and frequency; shield test result; timestamp | Use calibrated line counter and final-release record; determine mass per metre from representative conditioned samples | m and kg/m | Each reel or production batch | Same period as all inputs and wastes | Every included line and construction | Sum only accepted released length; separately sum rejected and test-cut length; calculate weighted mass per metre by construction | Counter calibration; test certificates; release record; sample scale calibration |
| `cp_manufacturing_waste_mass` | `integrated_coaxial_cable_manufacture` | segregated and composite manufacturing wastes | waste-container scale, transfer, and destination records | waste identity; segregation state; gross and tare mass; construction; line; date; destination; internal return; external transfer | Weigh each container or verified transfer and reconcile against material inputs and product mass | kg | Each container or transfer; aggregate monthly | Same period as material and output records | All included foreground lines and waste storage points | Exclude documented internal return from boundary output; sum each atomic external waste stream and divide by conforming cable length | Scale calibration; transfer note; recycler receipt; material-balance reconciliation |
| `cp_onsite_natural_gas` | `onsite_fuel_combustion` | natural gas and direct fossil carbon dioxide | meter, invoice, composition, and stack records | gas volume; reference temperature and pressure; composition or carbon content; heating-value convention; oxidation evidence; equipment; operating period; allocation driver | Read dedicated meter where available; otherwise reconcile invoice volume and allocate with documented operating records; calculate direct fossil CO2 from collected carbon evidence | m3 and kg CO2 | Meter interval or invoice period; aggregate monthly | Same period as cable production | All combustion equipment included in the foreground boundary | Normalize assigned gas and calculated or measured fossil CO2 to conforming cable length; do not mix upstream supply emissions into the direct-emission row | Meter calibration; invoice; supplier gas-quality certificate; calculation worksheet; stack test where available |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | every inventory row | Normalized exchange = reporting-period exchange assigned to the declared construction / reporting-period conforming cable length for that construction. | assigned exchange; conforming cable length | exchange per 1 m conforming cable |  |
| `calc_mass_per_metre` | finished cable | Cable mass per metre = conditioned sample mass / sample length; use a production-weighted mean when multiple representative samples are combined. | sample mass; sample length; production weights | kg/m for the declared construction | `siemens-iwlan-rcoax-epd-2024` |
| `calc_material_balance` | integrated manufacture | Material-balance discrepancy = total constituent-material input mass - conforming cable mass - external manufacturing-waste mass - documented inventory change; investigate rather than forcing the balance to zero. | input masses; conforming length; mass per metre; external wastes; inventory change | absolute and percentage discrepancy |  |
| `calc_electricity_conversion` | purchased electricity | Electricity in MJ = metered electricity in kWh × 3.6. | metered kWh | MJ |  |
| `calc_fossil_co2` | on-site natural-gas combustion | Calculate fossil CO2 from assigned gas amount and supplier-specific composition or carbon content with the declared oxidation basis; preserve the factor source and all intermediate units. Do not use a default factor without disclosure. | gas volume; reference conditions; composition or carbon content; oxidation basis | kg fossil CO2 per 1 m conforming cable |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain the construction specification and release-test evidence for impedance, attenuation and frequency, shielding, dimensions, materials, and applicable safety or environmental performance. | Approved product specification, test method, calibration status, and release record consistent with IEC 61196 requirements or the declared applicable specification |
| `dq_temporal_alignment` | foreground records | Use one aligned reporting period for materials, energy, output, wastes, and fuel; justify any extrapolation or campaign substitution. | Period reconciliation showing record coverage and production representativeness |
| `dq_geography_technology` | upstream links and foreground site | Declare manufacturing site and technology and select upstream datasets matching supplier geography, material grade or recycled content, electricity mix, and fuel delivery state. | Supplier records, dataset metadata, and documented proxy assessment |
| `dq_completeness` | inventory completeness | Reconcile cable mass, constituent inputs, external wastes, internal returns, and inventory changes; investigate unexplained loss and disclose exclusions. | Signed material-balance worksheet and list of omitted exchanges with justification |
| `dq_measurement` | meters, counters, and scales | Use calibrated or verified devices; preserve raw readings, unit conversions, missing-data treatment, and allocation worksheets. | Calibration certificates, meter and counter logs, scale checks, and audit trail |
| `dq_uuid_identity` | Tiangong flow references | Confirm state-code 100 identity, flow type, property, unit group, classification, product state, and official Chinese baseName before publication; unresolved rows remain explicitly flagged. | Finalized hybrid-search receipts and direct-read identity records maintained outside PCR content |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | The output shall equal 1 m of conforming Cable and shall declare every required construction, performance, mass-per-length, geography, technology, period, and boundary qualifier. | `iec-61196-1-2005`; `iec-tr-62839-1-2025` |
| `validate_inventory_normalization` | all inventory rows | Every exchange shall be atomic, use the declared property and unit, link to a collection protocol when collected or calculated, and be normalized to the same conforming cable length. |  |
| `validate_material_balance` | integrated manufacture | Input material mass shall reconcile with conforming cable mass, separately reported external wastes, internal returns, and inventory change; disclose and investigate any residual. |  |
| `validate_energy_boundary` | electricity and fuel | Electricity shall state the metering or allocation basis and grid geography; natural gas and direct fossil CO2 shall either both be included with reference conditions and calculation evidence or both be demonstrably not applicable. |  |
| `validate_waste_and_allocation` | manufacturing wastes | Copper scrap, aluminium scrap, mixed polymer scrap, and off-spec cable shall be separately reported when generated, with destination and internal-return status; no recycling credit may be netted into foreground amounts. | `iec-tr-62839-1-2025` |
| `validate_external_comparability` | use of this dataset | A comparison or aggregation shall not combine this pre-dispatch-packaging factory-gate dataset with a dataset having a different product construction, reference unit, packaging treatment, life-cycle boundary, or allocation method without documented adjustment. | `siemens-iwlan-rcoax-epd-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-system dataset for one declared coaxial cable construction at the manufacturing gate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Construction-specific product footprinting, supply-chain modelling, cable-system studies, and downstream process or lifecyclemodel construction when the reference unit, construction, geography, technology, time, boundary, and allocation are compatible |
| excluded_use | Generic comparison of coaxial cable designs without functional and construction equivalence; use as an installed cable system; use for non-coaxial wire; unadjusted combination with datasets that include dispatch packaging, distribution, installation, use, or end-of-life |
| required_metadata | PCR id and version; product and construction identifier; complete layer materials and masses; cable mass per metre; impedance; attenuation and frequency; shielding declaration; rated voltage and remote-power function when applicable; radiating status when applicable; manufacturing geography and technology; reporting period; upstream dataset choices; allocation; dispatch-packaging exclusion; waste destinations; cut-offs; unresolved identities |
| required_quality_disclosure | Temporal and site coverage; sample and meter coverage; calibration; missing-data treatment; material-balance residual; allocation rationale; supplier and upstream proxy quality; recycled-content basis; construction representativeness; direct-emission calculation method; unresolved UUID and range-evidence needs |
| update_trigger | Change in conductor, dielectric, shield, jacket, additive, mass per metre, electrical performance class, manufacturing site, production technology, electricity or fuel supply, waste destination, allocation method, boundary, or data period that materially changes inventory results |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-04 | Official CPC 46320 category identity only |
| `iec-61196-1-2005` | Standard (`standard`) | IEC 61196-1:2005, Coaxial communication cables - Part 1: Generic specification - General, definitions and requirements, https://webstore.iec.ch/en/publication/4864, retrieved 2026-09-04 | Product scope, construction and performance qualifiers, and test-based product identity |
| `iec-tr-62839-1-2025` | Standard (`standard`) | IEC TR 62839-1:2025, Environmental declaration - Part 1: Communication wires and cables - Product specific rules, https://webstore.iec.ch/en/publication/84774, retrieved 2026-09-04 | Environmental-declaration scope for communication cables and explicit applicability to IEC 61196 coaxial metallic cables |
| `siemens-iwlan-rcoax-epd-2024` | Literature (`literature`) | Siemens AG, Environmental Product Declaration: IWLAN RCoax cable PE 1/2 inch 5 GHz, DI_PA_EPD20065.01, 14 February 2024, https://cache.industry.siemens.com/dl/files/907/109998907/att_1354257/v1/DI_PA_EPD20065.01_IWLAN_RCoax_cable_EPD.pdf, retrieved 2026-09-04 | One-metre functional-unit precedent, cable mass-per-length disclosure, manufacturing-gate boundary context, and comparability warning; not used as a generic quantitative range |
| `us-epa-wire-cable-lca-2008` | Official guidance (`official_guidance`) | United States Environmental Protection Agency, Wire and Cable Insulation and Jacketing: Life-Cycle Assessments for Selected Applications, June 2008, https://www.epa.gov/sites/default/files/2014-01/documents/wire_lca_full.pdf, retrieved 2026-09-04 | Cable material families, formulation specificity, material-input and manufacturing-waste accounting, and caution against generalizing one cable construction; not used as a generic quantitative range |
