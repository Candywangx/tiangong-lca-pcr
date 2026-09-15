---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-containing-85-or-more-by-weight-of-wool-not-put-up-for-retail-sale
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Yarn of wool, containing 85% or more by weight of wool, not put up for retail sale

## 1. Scope and Applicability

This PCR applies to gate-to-gate foreground data packages for industrial wool yarn containing at least 85% wool by mass and leaving the yarn mill not put up for retail sale. It covers woollen and worsted routes from a declared prepared-wool starting condition through fibre preparation, carding or route-specific combing and drawing, spinning, winding, final conditioning, and industrial packing.

The data package shall distinguish woollen and worsted routes and shall state whether scoured wool, wool top, or another specifically identified prepared wool input is the starting condition. Raw-wool scouring, fibre dyeing, yarn dyeing, weaving, knitting, garment manufacture, use, and end-of-life are outside the default foreground boundary. When any excluded activity is performed at the reporting site, its process and every atomic exchange shall be added explicitly rather than hidden in a yarn-spinning aggregate.

This PCR does not cover yarn with less than 85% wool by mass, retail yarn packages, sewing thread, yarn made principally from other animal hair, or finished textile fabric. Secondary fibres are permitted only within the category threshold and shall be identified and inventoried as separate product inputs in the foreground data package.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-containing-85-or-more-by-weight-of-wool-not-put-up-for-retail-sale |
| classification_refs | CPC 3.0: 26320, exact semantic reference |
| covered_products | Single, folded, or cabled industrial wool yarn containing at least 85% wool by mass, supplied in non-retail form |
| excluded_products | Yarn below 85% wool by mass; retail yarn packages; sewing thread; yarn principally of fine or coarse animal hair other than wool; woven, knitted, tufted, or otherwise finished fabric |
| representative_product | Finished bulk wool yarn containing at least 85% wool by mass, wound for industrial delivery |
| production_route | Declared woollen or worsted spinning route from prepared wool input through spinning, winding, conditioning, and industrial packing |
| market_state | Factory-gate industrial yarn, non-retail, with declared fibre composition, dye state, linear density, twist, ply count, winding form, and conditioning state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Industrial wool yarn suitable for the declared downstream weaving, knitting, or other textile conversion |
| How much | 1 kg of finished yarn at the declared conditioning state |
| How well | At least 85% wool by mass and conforming to the declared linear density, twist direction and level, ply count, dye state, winding form, and quality specification |
| How long or cycle | One completed production batch or campaign measured at the yarn-mill gate |
| reference_flow_link | wool_yarn_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Yarn of wool, containing 85% or more by weight of wool, not put up for retail sale `10c7de33-bef0-4310-98e7-734d8e2e4c9f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wool mass fraction; woollen or worsted route; virgin, recycled, or mixed wool feed; fibre source and supplier; dyed or undyed state; linear density in tex; twist direction and level; ply count; winding form; moisture or conditioning state; site; geography; production period |

When constructing a foreground data package, all required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | final reference yarn and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the accepted finished-yarn mass at the declared conditioning state and use that same state for batch normalization; disclose any moisture correction. |
| yarn_linear_density | final reference yarn | Linear density | tex | Report yarn linear density in tex or convert the declared count system to tex using a documented conversion consistent with ISO 1144. |
| packaged_product_separation | final yarn and industrial packing | Mass | kg | Report net yarn mass separately from paper cores, boxes, and any other individually identified packing components. |
| electricity_energy | electricity exchanges | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve metered electricity in kWh; if another energy unit is used, document the conversion and retain the verified less-than-1-kV user consumption-mix identity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Scoured wool, wool top, or another specifically named prepared wool input received at the yarn mill |
| starting_condition_role | Upstream product input whose previous farming, scouring, carbonising, dyeing, or top-making burdens are represented by a supplier or secondary dataset |
| product_classification_scope | Finished yarn matching CPC 3.0 code 26320; classification does not replace the declared physical product boundary |
| recursive_input_rule | Reprocessed yarn that already matches this category shall be recorded as one atomic yarn product input with its own upstream dataset and shall not be recursively expanded through this PCR inside the same foreground process |
| upstream_dataset_requirement | Each wool, secondary-fibre, chemical, utility, and packing input crossing the foreground boundary requires a geographically, technologically, and temporally appropriate upstream dataset or a documented data gap |
| disclosure | Declare starting material state, fibre composition, route, onsite versus outsourced steps, dye state, conditioning method, energy supply, waste fate, recovered co-products, packing form, geography, site, and production period |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_starting_condition | all foreground packages | Begin at the physically declared prepared-wool receipt point and include every onsite operation through accepted non-retail yarn at the factory gate. | `bianco-et-al-2023-wool-lca` |
| boundary_route_separation | woollen and worsted routes | Identify route-specific carding, gilling, combing, drawing, roving, spinning, and winding steps; do not average materially different routes without reporting their production-weighted shares. | `bianco-et-al-2023-wool-lca` |
| boundary_secondary_fibres | yarn containing less than 100% wool | Record every non-wool fibre as its own specifically named product input and verify that the final yarn contains at least 85% wool by mass. | `unsd-cpc-3-2025` |
| boundary_wet_processing | onsite scouring, dyeing, rinsing, or finishing | These activities are outside the default boundary; when onsite, add their water, energy, process chemicals, wastewater, waste gas, and waste as separate atomic exchanges and apply relevant textile BAT monitoring. | `ec-jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fibre_preparation | Fibre preparation, blending, and route-specific carding or combing | required | Include only operations performed at the reporting yarn mill; disclose purchased top or sliver operations as upstream when already embodied in the input | Foreground prepared-fibre production | kg prepared wool sliver transferred to spinning |
| spinning_and_winding | Spinning, optional plying, and winding | required | Plying is included only for folded or cabled yarn; all reported products require spinning and winding | Foreground yarn formation | kg unconditioned bulk wool yarn transferred to final conditioning and packing |
| conditioning_and_packing | Final conditioning and industrial packing | required | Direct water use is included only when water crosses the process boundary; every actual packing component is recorded separately | Foreground final-product preparation | kg accepted finished wool yarn at the declared conditioning state |

### Process: Fibre preparation, blending, and route-specific carding or combing (`fibre_preparation`)

#### Inputs

##### Product flows

###### Received scoured wool (`scoured_wool_input`)

Record scoured, degreased wool when it is the prepared-wool starting input to onsite opening, blending, or carding. Do not use this row for greasy raw wool.

- Selected flow: Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass reconciled to stock movements for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared wool sliver transferred to spinning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_materials`
- Sources: `bianco-et-al-2023-wool-lca`

###### Received wool top (`wool_top_input`)

Record purchased wool top only when it crosses the foreground boundary as a separately measured feedstock. Its UUID remains unresolved because the retrieved candidate carried an incompatible yarn classification.

- Selected flow: Wool top
- Flow property / unit: Mass / kg
- Amount rule: measured received mass reconciled to stock movements for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared wool sliver transferred to spinning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_materials`
- Sources: `bianco-et-al-2023-wool-lca`

###### Less-than-1-kV grid electricity for fibre preparation (`fibre_preparation_electricity_input`)

Record electricity consumed by opening, blending, carding, gilling, combing, drawing, roving, extraction, and directly attributable auxiliary equipment in this process.

- Selected flow: Alternating current; less than 1 kV; consumption mix at user; electricity mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: process-submeter reading or documented allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared wool sliver transferred to spinning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_energy`
- Sources: `bianco-et-al-2023-wool-lca`; `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared wool sliver transferred to spinning (`prepared_wool_sliver_output`)

Record the single prepared wool sliver intermediate leaving fibre preparation. Keep woollen and worsted route identity in the batch record.

- Selected flow: Prepared wool sliver
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass at the process hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared wool sliver transferred to spinning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_materials`
- Sources: `bianco-et-al-2023-wool-lca`

##### Waste flows

###### Wool fibre waste from fibre preparation (`fibre_preparation_waste_output`)

Record the measured wool fibre waste removed during opening, carding, combing, and related preparation. Disclose whether it is recycled, sold, treated, or disposed.

- Selected flow: Wool fibre preparation waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared wool sliver transferred to spinning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_waste`
- Sources: `bianco-et-al-2023-wool-lca`; `eu-textiles-bat-2022`

##### Elementary flows

###### PM10 emitted through an urban high stack (`fibre_preparation_pm10_output`)

Record PM10 only for channelled fibre-preparation emissions released to the verified urban-air high-stack compartment. Use a different atomic elementary flow when the actual receiving compartment differs.

- Selected flow: particles (PM10), emissions to urban air high stack `9fbb5096-ed5b-11e6-bc64-92361f002671`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured emission mass or a documented calculation from airflow and concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared wool sliver transferred to spinning
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibre_air_emissions`
- Sources: `eu-textiles-bat-2022`

### Process: Spinning, optional plying, and winding (`spinning_and_winding`)

#### Inputs

##### Product flows

###### Prepared wool sliver received from fibre preparation (`prepared_wool_sliver_input`)

Record the same physical prepared wool sliver transferred from the preceding foreground process.

- Selected flow: Prepared wool sliver
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with prepared_wool_sliver_output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unconditioned bulk wool yarn transferred to final conditioning and packing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_materials`
- Sources: `bianco-et-al-2023-wool-lca`

###### Less-than-1-kV grid electricity for spinning and winding (`spinning_electricity_input`)

Record electricity consumed by spinning, optional plying, winding, extraction, compressed-air generation attributable to this process, and directly attributable auxiliary equipment.

- Selected flow: Alternating current; less than 1 kV; consumption mix at user; electricity mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: process-submeter reading or documented allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unconditioned bulk wool yarn transferred to final conditioning and packing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_energy`
- Sources: `bianco-et-al-2023-wool-lca`; `eu-textiles-bat-2022`

###### Mineral-oil-based wool spinning lubricant (`spinning_lubricant_input`)

Record this lubricant only when a mineral-oil-based wool spinning lubricant is actually dosed. Other lubricants shall be added as their own atomic product flows rather than substituted into this row.

- Selected flow: Mineral-oil-based wool spinning lubricant
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented returned stock for the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unconditioned bulk wool yarn transferred to final conditioning and packing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_materials`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unconditioned bulk wool yarn transferred to final preparation (`unconditioned_wool_yarn_output`)

Record the single non-retail yarn intermediate before final conditioning and packing. It shall contain at least 85% wool by mass.

- Selected flow: Unconditioned bulk wool yarn containing at least 85% wool by mass
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass before final conditioning and industrial packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unconditioned bulk wool yarn transferred to final conditioning and packing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_materials`
- Sources: `bianco-et-al-2023-wool-lca`

##### Waste flows

###### Wool fibre waste from spinning and winding (`spinning_waste_output`)

Record the measured soft waste and hard waste leaving spinning and winding as this single wool-spinning-waste flow only when they share the same treatment route; otherwise split treatment-distinct wastes into separate atomic rows.

- Selected flow: wool spinning waste `db23708c-5c2f-4b7e-9098-910948275caa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unconditioned bulk wool yarn transferred to final conditioning and packing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_waste`
- Sources: `bianco-et-al-2023-wool-lca`; `eu-textiles-bat-2022`

##### Elementary flows

###### PM10 emitted through an urban high stack during spinning (`spinning_pm10_output`)

Record PM10 only for channelled spinning or winding emissions released to the verified urban-air high-stack compartment. Use a different atomic elementary flow when the actual receiving compartment differs.

- Selected flow: particles (PM10), emissions to urban air high stack `9fbb5096-ed5b-11e6-bc64-92361f002671`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured emission mass or a documented calculation from airflow and concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unconditioned bulk wool yarn transferred to final conditioning and packing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spinning_air_emissions`
- Sources: `eu-textiles-bat-2022`

### Process: Final conditioning and industrial packing (`conditioning_and_packing`)

#### Inputs

##### Product flows

###### Unconditioned bulk wool yarn received for final preparation (`unconditioned_wool_yarn_input`)

Record the same physical unconditioned yarn transferred from spinning and winding.

- Selected flow: Unconditioned bulk wool yarn containing at least 85% wool by mass
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with unconditioned_wool_yarn_output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished wool yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_materials`

###### Less-than-1-kV grid electricity for conditioning and packing (`conditioning_electricity_input`)

Record electricity consumed by conditioning equipment, final winding, inspection, extraction, and packing equipment.

- Selected flow: Alternating current; less than 1 kV; consumption mix at user; electricity mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: process-submeter reading or documented allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished wool yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_energy`
- Sources: `eu-textiles-bat-2022`

###### Process water used for direct yarn conditioning (`conditioning_process_water_input`)

Record process water only when it crosses the process boundary for direct yarn humidification or conditioning. Water used by an offsite utility remains in that utility dataset.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured water delivered to the conditioning operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished wool yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water`
- Sources: `eu-textiles-bat-2022`

###### Paperboard tube for yarn winding (`paperboard_tube_input`)

Record the paperboard tube or paper core incorporated into the industrial yarn delivery form.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or purchase-record mass of tubes consumed for accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished wool yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_materials`

###### Corrugated board box for industrial shipment (`corrugated_box_input`)

Record corrugated board boxes used for non-retail industrial delivery. Do not use this row for paper cores, plastic film, pallets, or other packing components.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or purchase-record mass of boxes consumed for accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished wool yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished non-retail wool yarn (`wool_yarn_output`)

Record the accepted finished yarn after final conditioning and industrial packing checks. Packing mass is excluded from the reference amount.

- Selected flow: Yarn of wool, containing 85% or more by weight of wool, not put up for retail sale `10c7de33-bef0-4310-98e7-734d8e2e4c9f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net accepted yarn mass at the declared conditioning state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished wool yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product`
- Sources: `unsd-cpc-3-2025`; `iso-2060-1994`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision_first | separately metered operations and products | Avoid allocation by subdividing fibre preparation, spinning, winding, conditioning, and packing wherever their inputs and outputs are independently recorded. | `iso-14044-2006`; `bianco-et-al-2023-wool-lca` |
| allocation_internal_recycling | wool waste returned to the same batch or process | Treat internally returned wool fibre as an internal loop, report the gross waste and returned amount, and do not create an avoided-product credit inside the same foreground process. | `bianco-et-al-2023-wool-lca` |
| allocation_exported_co_products | noils, recoverable fibre, or other valuable outputs leaving the system | Report each exported co-product separately; if subdivision or system expansion is not feasible, document and justify the chosen physical or economic allocation and provide a sensitivity result when it materially changes the yarn burden. | `iso-14044-2006`; `bianco-et-al-2023-wool-lca` |
| allocation_waste_treatment | waste sent to treatment | Assign collection and treatment burdens consistently with the declared waste-treatment dataset and disclose any cut-off, recycling, or substitution convention. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_fibre_materials | fibre_preparation | scoured_wool_input; wool_top_input; prepared_wool_sliver_output | weighbridge, scale, and stock records | batch_id, material_id, fibre_composition, opening_stock, received_mass, closing_stock, transfer_mass, moisture_state | calibrated scales plus stock reconciliation | kg | each batch | all batches in reporting period | each reporting mill | sum batch inputs and transfers, then normalize to prepared sliver output | calibration records, supplier specification, stock reconciliation |
| cp_fibre_energy | fibre_preparation | fibre_preparation_electricity_input | electricity meter | meter_id, start_reading, end_reading, shared_load_basis, batch_output | process submeter or documented site-meter allocation | kWh | each batch or shift | representative full reporting period | each reporting mill | net consumption allocated to fibre preparation and normalized to prepared sliver output | meter calibration and allocation worksheet |
| cp_fibre_waste | fibre_preparation | fibre_preparation_waste_output | waste scale and dispatch records | batch_id, waste_type, gross_mass, tare_mass, destination, returned_mass | weigh each waste container or reconcile dispatch records | kg | each batch and dispatch | all batches in reporting period | each reporting mill | sum net waste by destination and normalize to prepared sliver output | scale calibration, transfer note, destination evidence |
| cp_fibre_air_emissions | fibre_preparation | fibre_preparation_pm10_output | stack monitoring record | stack_id, airflow, PM10_concentration, operating_time, treated_output | direct measurement or calculation from measured airflow and concentration | kg | monitoring campaign and operating period | period representative of reported operation | each applicable emission point | calculate emitted mass and normalize to prepared sliver output | method, instrument calibration, sampling report |
| cp_spinning_materials | spinning_and_winding | prepared_wool_sliver_input; spinning_lubricant_input; unconditioned_wool_yarn_output | scales, issue records, and batch production log | batch_id, material_id, input_mass, lubricant_issued, lubricant_returned, yarn_transfer_mass, fibre_composition | calibrated scales and stores reconciliation | kg | each batch | all batches in reporting period | each reporting mill | sum net inputs and output by batch, then normalize to unconditioned yarn output | calibration records, issue vouchers, batch reconciliation |
| cp_spinning_energy | spinning_and_winding | spinning_electricity_input | electricity meter | meter_id, start_reading, end_reading, shared_load_basis, yarn_output | process submeter or documented site-meter allocation | kWh | each batch or shift | representative full reporting period | each reporting mill | net consumption allocated to spinning and winding and normalized to unconditioned yarn output | meter calibration and allocation worksheet |
| cp_spinning_waste | spinning_and_winding | spinning_waste_output | waste scale and dispatch records | batch_id, waste_type, gross_mass, tare_mass, destination, returned_mass | weigh each waste container or reconcile dispatch records | kg | each batch and dispatch | all batches in reporting period | each reporting mill | sum net waste by destination and normalize to unconditioned yarn output | scale calibration, transfer note, destination evidence |
| cp_spinning_air_emissions | spinning_and_winding | spinning_pm10_output | stack monitoring record | stack_id, airflow, PM10_concentration, operating_time, yarn_output | direct measurement or calculation from measured airflow and concentration | kg | monitoring campaign and operating period | period representative of reported operation | each applicable emission point | calculate emitted mass and normalize to unconditioned yarn output | method, instrument calibration, sampling report |
| cp_final_materials | conditioning_and_packing | unconditioned_wool_yarn_input | scale and transfer records | batch_id, input_mass, moisture_state, transfer_time | calibrated scale at process receipt | kg | each batch | all batches in reporting period | each reporting mill | sum process input and reconcile to upstream transfer | calibration and reconciliation record |
| cp_final_energy | conditioning_and_packing | conditioning_electricity_input | electricity meter | meter_id, start_reading, end_reading, shared_load_basis, accepted_yarn_mass | process submeter or documented site-meter allocation | kWh | each batch or shift | representative full reporting period | each reporting mill | net consumption allocated to final preparation and normalized to accepted yarn | meter calibration and allocation worksheet |
| cp_conditioning_water | conditioning_and_packing | conditioning_process_water_input | water meter | meter_id, start_reading, end_reading, operating_time, accepted_yarn_mass | direct process-water meter | kg | each batch or shift | representative full reporting period | each reporting mill | net direct conditioning water normalized to accepted yarn | meter calibration and water balance |
| cp_packing_materials | conditioning_and_packing | paperboard_tube_input; corrugated_box_input | purchase, issue, and mass records | component_id, component_mass, quantity_issued, quantity_returned, accepted_yarn_mass | weighed representative component plus issue reconciliation | kg | each packing batch | all batches in reporting period | each reporting mill | net component mass consumed and normalized to accepted yarn | scale calibration, purchase specification, issue record |
| cp_final_product | conditioning_and_packing | wool_yarn_output | final scale and quality-release record | batch_id, gross_mass, packing_mass, net_yarn_mass, moisture_state, wool_fraction, linear_density_tex, twist, ply_count, dye_state, winding_form, accepted_quantity | calibrated final-product scale plus laboratory or certificate checks | kg | each released batch | all released batches in reporting period | each reporting mill | sum accepted net yarn mass only | calibration, test report, release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_process_normalization | every process inventory row | Divide the batch or period exchange by the matched accepted output mass for that process; do not mix moisture states across numerator and denominator. | collected exchange, matched process output, declared moisture state | exchange per kg process output | `iso-14044-2006` |
| calc_net_packing_mass | final reference yarn | Net accepted yarn mass equals measured gross packed mass minus the separately measured mass of every packing component. | gross packed mass, paper-core mass, box mass, other individually recorded packing masses | net accepted yarn mass | `iso-2060-1994` |
| calc_pm10_mass | channelled PM10 rows | Calculate emitted mass from measured concentration, measured dry-gas flow, and operating time using compatible units; preserve sampling and averaging metadata. | PM10 concentration, airflow, operating time | PM10 emitted mass | `eu-textiles-bat-2022` |
| calc_route_weighting | aggregated multi-route dataset | Weight route-specific normalized inventories by accepted production mass and disclose every route share; retain route-specific results. | route inventories, accepted mass by route | production-weighted aggregate inventory | `bianco-et-al-2023-wool-lca` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_product_identity | reference yarn | Confirm at least 85% wool by mass, non-retail market state, and all required qualifiers for each released product family. | formulation or fibre test, product specification, release record |
| dq_mass_consistency | all material flows | Reconcile measured inputs, outputs, internal returns, stock change, and losses for each process and explain unresolved mass-balance differences. | batch mass balance and stock reconciliation |
| dq_metering | electricity, water, and channelled emissions | Use calibrated meters or documented allocation and monitoring methods; retain meter coverage and shared-load assumptions. | calibration certificate, meter map, monitoring report |
| dq_temporal_coverage | all foreground rows | Cover a representative reporting period, include seasonal or product-mix variation when material, and identify excluded downtime or abnormal operation. | production calendar and coverage assessment |
| dq_route_representation | woollen and worsted production | Keep route-specific records until any production-weighted aggregation is performed. | route-coded batch records and weighting worksheet |
| dq_source_traceability | all external and upstream data | Record supplier, geography, technology, time period, dataset version, and substitution rationale for every upstream dataset. | dataset registry and supplier evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference_identity | reference flow | The final output UUID shall be `10c7de33-bef0-4310-98e7-734d8e2e4c9f`, the flow type shall be Product flow, the CPC leaf shall be 26320, and the flow property shall be Mass. | `unsd-cpc-3-2025` |
| validate_wool_fraction | final yarn | Reject a package when the declared or tested wool mass fraction is below 85%. | `unsd-cpc-3-2025` |
| validate_reference_amount | final yarn | Confirm that the reference amount is 1 kg net accepted yarn at the declared conditioning state and excludes industrial packing mass. | `iso-2060-1994` |
| validate_required_qualifiers | final yarn | Reject an incomplete package when any required qualifier in the reference-flow definition is absent. | `iso-1144-2016`; `iso-2060-1994` |
| validate_required_processes | process map | Require fibre_preparation, spinning_and_winding, and conditioning_and_packing records, with explicit zero or not-applicable evidence only when a named operation or exchange is demonstrably absent. | `bianco-et-al-2023-wool-lca` |
| validate_atomic_inventory | every inventory row | Each exchange shall identify one product, waste, or elementary flow; combined carriers, combined packing materials, selector instructions, and plural catch-all flows are invalid. | `eu-textiles-bat-2022` |
| validate_flow_identity | UUID-bearing inventory rows | Confirm state code 100, the declared Product, Waste, or Elementary flow type, semantic name, reference property, and receiving compartment where applicable before use. |  |
| validate_unresolved_rows | rows without UUID | Require the exact row_id and selected single-flow name to match manifest unresolved_identity and prohibit publication until the identity gap is resolved or formally reviewed. |  |
| validate_mass_balance | each foreground process | Reconcile product and material inputs, product outputs, waste, internal return, stock change, and measured losses; report and justify residual imbalance. | `eu-textiles-bat-2022` |
| validate_allocation | multi-output process | Confirm subdivision priority and disclose any physical or economic allocation basis, data, and sensitivity result. | `iso-14044-2006`; `bianco-et-al-2023-wool-lca` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for non-retail wool yarn manufacture |
| downstream_use | secondary_dataset; background_dataset after review and publication |
| allowed_use | weaving, knitting, textile conversion, product LCA, supply-chain screening, and route-specific benchmarking that match the declared yarn and geography |
| excluded_use | yarn below 85% wool; retail yarn; other-animal-hair yarn; fabric or garment production; undisclosed route averages; wet processing not represented in the inventory |
| required_metadata | canonical PCR id, CPC 26320 reference, product UUID, wool fraction, woollen or worsted route, fibre origin, secondary fibres, dye state, tex, twist, ply, winding form, conditioning state, net mass, site, geography, period, upstream datasets, waste fate, allocation, and unresolved data gaps |
| required_quality_disclosure | measurement coverage, calibration, mass balance, route shares, supplier-data quality, temporal and geographic representativeness, allocation sensitivity, exclusions, and uncertainty |
| update_trigger | change in fibre composition, prepared-wool starting condition, route, equipment, energy supply, lubricant, conditioning, packing, waste fate, allocation, site, geography, or production period that materially changes the normalized inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-3-2025 | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes, code 26320, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-12 | category identity, wool-content threshold, non-retail market state |
| ec-jrc-textiles-bref-2023 | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, JRC131874, EUR 31392 EN, DOI 10.2760/355887, https://publications.jrc.ec.europa.eu/repository/handle/JRC131874, retrieved 2026-08-12 | fibre preparation and wet-processing boundary, input-output inventory, monitoring and quality controls |
| eu-textiles-bat-2022 | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022D2508, retrieved 2026-08-12 | materials, water, energy, chemicals, emissions, waste monitoring, and process-level record requirements |
| iso-1144-2016 | standard | ISO 1144:2016, Textiles — Universal system for designating linear density (Tex System), https://www.iso.org/standard/70774.html, retrieved 2026-08-12 | tex reporting and count-system conversion |
| iso-2060-1994 | standard | ISO 2060:1994, Textiles — Yarn from packages — Determination of linear density (mass per unit length) by the skein method, https://www.iso.org/standard/6837.html, retrieved 2026-08-12 | yarn mass and linear-density measurement context |
| iso-14044-2006 | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html, retrieved 2026-08-12 | LCI consistency, allocation, documentation, and interpretation |
| bianco-et-al-2023-wool-lca | literature | Bianco, I., Picerno, G., and Blengini, G.A. (2023), Life Cycle Assessment (LCA) of Worsted and Woollen processing in wool production: ReviWool noils and other wool co-products, Journal of Cleaner Production 415, 137877, DOI 10.1016/j.jclepro.2023.137877 | woollen and worsted process decomposition, intermediates, waste streams, electricity, route distinction, and allocation |
