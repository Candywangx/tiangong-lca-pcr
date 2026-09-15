---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-copper
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wire of copper

## 1. Scope and Applicability

This PCR supports foreground data packages for uninsulated individual wire made from copper or copper alloy by drawing copper wire rod, with conditional intermediate or final annealing. It requires the producer to declare the copper or copper-alloy grade and purity or composition, nominal diameter or cross-sectional area, wire shape, individual-wire or pre-stranding state, hard-drawn or annealed temper, surface state, wire-rod source, drawing and annealing energy, lubricant and cleaning or pickling use, production yield, and internal copper-scrap return.

The representative product is uncoated bare wire at the factory gate. A metallic surface treatment may be represented only as a separately declared and inventoried variant that remains uninsulated. This PCR does not represent stranded or bunched conductors, insulated wire and cable, enamelled winding wire, winding assemblies, cable cores, photovoltaic cable, charging cable, downstream harnesses, or other finished electrical assemblies. Results for one grade, diameter, temper, or route shall not be extrapolated to the whole category without a documented representativeness assessment.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-copper |
| classification_refs | CPC 3.0 `41513`, Wire of copper |
| covered_products | Uninsulated individual round or profiled wire of copper or copper alloy, in hard-drawn, intermediate, annealed, or soft temper, before stranding or incorporation into a downstream component; metallic surface treatment only when explicitly declared and inventoried |
| excluded_products | Copper wire rod; stranded, bunched, roped, or cabled conductor; insulated or enamelled wire and cable; winding, cable-core, harness, busbar, photovoltaic-cable, charging-cable, and other downstream assemblies |
| representative_product | Uncoated bare individual copper wire produced from copper wire rod by drawing, with annealing included when required by the declared temper |
| production_route | Purchased or transferred copper/copper-alloy wire rod; conditional surface preparation; rod breakdown and intermediate or fine drawing; conditional annealing; cleaning, inspection, spooling, and packaging |
| market_state | Bare individual wire on coil, reel, or spool at the manufacturing factory gate, before stranding, insulation, or component assembly |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conforming uninsulated individual copper or copper-alloy wire with the declared grade, dimensions, temper, surface state, and manufacturing route |
| How much | 1,000 kg net mass of conforming wire at the factory gate, excluding reel, spool, and packaging mass |
| How well | Meets the declared product specification for composition or purity, dimensions and tolerances, temper, surface condition, and applicable electrical and mechanical properties |
| How long or cycle | Production during the declared reporting period; no use-phase service is included |
| reference_flow_link | Factory-gate output of `finishing_inspection_and_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | copper wire `4f197beb-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | copper or copper-alloy grade and governing specification; purity or composition; nominal diameter or cross-sectional area and tolerance; round or profiled shape; individual-wire or pre-stranding state; declared temper state (hard-drawn / intermediate / annealed / soft); bare surface and any metallic treatment; wire-rod source and production route; primary and recycled-content basis where claimed; production geography and reference period; declared conductivity or resistivity and mechanical-property basis where specified |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1,000 kg net conforming wire; exclude reel, spool, pallet, and packaging mass. |
| `metal_mass_balance` | Copper-bearing inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record gross wire-rod input, conforming wire, internal return, exported scrap, off-specification wire, residues, and unresolved variance on one dry-metal mass basis. |
| `diameter_area_basis` | Product dimensions | Declared geometric basis | mm or mm2 | Declare nominal diameter for round wire or cross-sectional dimensions and area for profiled wire, including the applicable tolerance and measurement method. |
| `electricity_measurement` | Drawing, annealing, preparation, and finishing electricity | Energy | kWh | Use submetered electricity where available; otherwise allocate a documented line or machine meter by measured operating time, machine load, or mass throughput. |
| `fuel_energy_measurement` | Direct thermal energy | Energy | MJ | Convert measured fuel quantities using a declared net calorific value and retain the original fuel quantity and conversion source. |
| `auxiliary_net_use` | Lubricant, emulsion, cleaning agent, pickling agent, process gas, and water | Mass or volume appropriate to the record | kg, L, or m3 | Report net foreground consumption from receipts, opening and closing inventory, recovery, recycle, and disposal records; do not report circulating charge as consumption. |

## 5. System Boundary

Rules:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_wire_rod` | Foreground starting condition | Start at receipt or internal transfer of copper or copper-alloy wire rod and disclose grade, source facility or supplier, production route, and primary/recycled-content basis where available. | `astm-b250-2026`; `asm-copper-wire-cable-1998` |
| `boundary_include_foreground_operations` | Foreground manufacturing | Include surface preparation when used, all drawing passes represented by the dataset, conditional annealing, cleaning, cooling, inspection, spooling, packaging, utilities, auxiliaries, yield losses, wastes, and onsite treatment attributable to the wire. | `bechem-wire-drawing`; `asm-copper-wire-cable-1998` |
| `boundary_recursive_wire_input` | Same-category input | If purchased or transferred drawn wire already classified in CPC 41513 is an input, record it as a disclosed product input and do not recursively reproduce its drawing operations in the receiving foreground process. | `unsd-cpc-3-0-2025` |
| `boundary_upstream_wire_rod` | Upstream supply | Link wire rod to an upstream dataset matching grade or composition, geography, technology, and declared primary/secondary route; do not substitute a narrow or contradictory identity merely to obtain a UUID. | `ica-copper-environmental-profile-2023`; `aoyama-copper-wire-annealing-1989` |
| `boundary_exclude_downstream_products` | Product-category end point | End at uninsulated individual wire before stranding, bunching, cabling, insulation, winding-component fabrication, cable-core manufacture, or harness assembly. Do not extrapolate a bare-wire dataset to these downstream products. | `unsd-cpc-3-0-2025`; `astm-b8-2023`; `iec-60228-2023` |
| `boundary_surface_variant` | Surface treatment | Treat uncoated bare wire as representative. Include metallic surface treatment only when explicitly declared and inventoried; exclude polymeric, enamel, or other electrical insulation. | `astm-b1-2018`; `astm-b3-2024` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | copper_or_copper_alloy_wire_rod_at_receipt_or_internal_transfer |
| starting_condition_role | disclosed_foreground_input_and_upstream_link |
| product_classification_scope | CPC 3.0 `41513`, individual wire of copper; ends before CPC `42942` stranded copper products and CPC group `463` insulated wire and cable |
| recursive_input_rule | A same-category drawn-wire input is recorded as a declared product input with supplier and product qualifiers; its prior drawing is represented only by the linked upstream dataset. |
| upstream_dataset_requirement | Match the rod's grade or composition, source geography, technology, primary/secondary route, and reference period; document any proxy and its expected direction of bias. |
| disclosure | Declare rod supplier or internal source, rod grade and dimensions, cathode/secondary route information where available, surface preparation, drawing sequence, annealing state, surface treatment, and the exact factory gate. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rod_receipt_and_preparation | Wire-rod receipt and surface preparation | required | Surface cleaning, mechanical descaling, or pickling flows are recorded when performed | foreground | prepared wire rod transferred to drawing |
| wire_drawing | Rod breakdown and wire drawing | required | Always included for wire made from rod | foreground | drawn individual wire transferred to the next stage |
| annealing | Intermediate or final annealing | conditional | Included when annealing is performed to achieve drawability or the declared temper | foreground | annealed wire transferred to finishing |
| finishing_inspection_and_packaging | Finishing, inspection, and packaging | required | Always included through the declared factory gate | foreground | 1,000 kg conforming copper wire output |

### Process: Wire-rod receipt and surface preparation (`rod_receipt_and_preparation`)

#### Inputs

##### Product flows

###### Copper or copper-alloy wire rod (`copper_wire_rod_input`)

Record the gross metal-bearing rod crossing the foreground boundary. No default UUID is assigned until an identity matching the declared grade, route, dimensions, and quantitative reference is confirmed.

- Selected flow: Copper or copper-alloy wire rod
- Flow property / unit: Mass / kg
- Amount rule: measured gross rod input on the declared metal-mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rod_input_records`
- Sources: `astm-b250-2026`; `asm-copper-wire-cable-1998`

###### Surface-preparation chemicals (`surface_preparation_chemicals`)

Record cleaning, descaling, or pickling agents only when consumed by the declared route, separated by substance or formulation.

- Selected flow: Surface-preparation chemical by substance or formulation
- Flow property / unit: Mass / kg
- Amount rule: net consumed mass from issue, inventory, return, and disposal records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `bechem-wire-drawing`

###### Surface-preparation water (`surface_preparation_water`)

Record freshwater or supplied process water used for cleaning, rinsing, or pickling and distinguish gross circulation from net intake.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured or balanced net water intake
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `bechem-wire-drawing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared wire rod (`prepared_wire_rod_output`)

Record the metal mass transferred to the first drawing pass after any surface preparation.

- Selected flow: Prepared copper or copper-alloy wire rod
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated mass balance from rod input and preparation losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_mass_balance_records`
- Sources: `asm-copper-wire-cable-1998`

##### Waste flows

###### Preparation residues and removed scale (`preparation_residue_output`)

Record collected oxide, scale, sludge, and copper-bearing cleaning residues by treatment destination.

- Selected flow: Copper-bearing preparation residue
- Flow property / unit: Mass / kg
- Amount rule: measured collected waste mass, including moisture-basis disclosure where material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery_records`
- Sources: `bechem-wire-drawing`

###### Spent preparation bath or rinse (`spent_preparation_bath_output`)

Record spent cleaning or pickling bath and rinse-water waste when discharged or sent to treatment.

- Selected flow: Spent preparation bath or rinse
- Flow property / unit: Mass / kg
- Amount rule: measured or balanced mass sent to onsite or offsite treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery_records`
- Sources: `bechem-wire-drawing`

##### Elementary flows

### Process: Rod breakdown and wire drawing (`wire_drawing`)

#### Inputs

##### Product flows

###### Prepared rod or prior-pass wire (`prepared_rod_to_drawing`)

Record the copper-bearing transfer entering the represented drawing sequence.

- Selected flow: Prepared copper or copper-alloy rod or prior-pass wire
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated stage balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_mass_balance_records`
- Sources: `asm-copper-wire-cable-1998`

###### Drawing electricity (`drawing_electricity`)

Include rod breakdown, intermediate and fine drawing, capstans, pumps, cooling, filtration, and line auxiliaries represented by the meter boundary.

- Selected flow: Electricity supplied to drawing
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drawing_energy_records`
- Sources: `bechem-wire-drawing`

###### Drawing lubricant or emulsion (`drawing_lubricant`)

Record each lubricant, emulsion concentrate, additive, and make-up component separately; do not count the circulating bath charge as consumed material.

- Selected flow: Drawing lubricant or emulsion component
- Flow property / unit: Mass / kg
- Amount rule: net consumed mass from issue, inventory, recovery, and disposal records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drawing_auxiliary_records`
- Sources: `bechem-wire-drawing`

###### Drawing cooling and process water (`drawing_process_water`)

Record make-up and discharged water for drawing cooling, emulsion preparation, and cleaning, excluding closed-loop recirculation.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured or balanced net water intake
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drawing_auxiliary_records`
- Sources: `bechem-wire-drawing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Drawn copper wire (`drawn_wire_output`)

Record wire leaving the represented drawing sequence before conditional annealing or finishing.

- Selected flow: Drawn copper or copper-alloy wire
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated stage balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_mass_balance_records`
- Sources: `astm-b1-2018`; `bechem-wire-drawing`

##### Waste flows

###### Drawing breaks and copper scrap (`drawing_copper_scrap`)

Record breaks, end cuts, start-up wire, and other copper-bearing drawing scrap, distinguishing internal return from offsite recovery.

- Selected flow: Copper-bearing drawing scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass by destination and internal-return status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery_records`
- Sources: `iso-14044-2006`

###### Spent drawing emulsion and wastewater (`spent_drawing_fluid`)

Record spent drawing fluid, filter residue, and wastewater by onsite or offsite treatment route.

- Selected flow: Spent drawing fluid and wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured or balanced mass leaving the drawing loop for treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery_records`
- Sources: `bechem-wire-drawing`

##### Elementary flows

### Process: Intermediate or final annealing (`annealing`)

#### Inputs

##### Product flows

###### Hard-drawn wire to annealing (`hard_drawn_wire_to_annealing`)

Record the wire mass entering batch, strand, resistance, induction, or other declared annealing equipment.

- Selected flow: Hard-drawn copper or copper-alloy wire
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated stage balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_mass_balance_records`
- Sources: `astm-b3-2024`; `aoyama-copper-wire-annealing-1989`

###### Annealing electricity (`annealing_electricity`)

Record electricity for heating, drives, protective-atmosphere equipment, cooling, drying, and included auxiliaries.

- Selected flow: Electricity supplied to annealing
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_energy_records`
- Sources: `bechem-wire-drawing`

###### Annealing fuel and process auxiliaries (`annealing_fuel_and_auxiliaries`)

Record direct fuel, protective atmosphere gas, cooling or annealing fluid, and make-up water as separate flows when used.

- Selected flow: Annealing fuel or process auxiliary by substance
- Flow property / unit: Mass or energy / kg or MJ
- Amount rule: measured net consumption by fuel, gas, fluid, or water type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_auxiliary_records`
- Sources: `bechem-wire-drawing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Annealed copper wire (`annealed_wire_output`)

Record wire transferred from annealing to finishing with the achieved temper and surface state declared.

- Selected flow: Annealed copper or copper-alloy wire
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated stage balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_mass_balance_records`
- Sources: `astm-b3-2024`; `aoyama-copper-wire-annealing-1989`

##### Waste flows

###### Annealing scrap and spent fluid (`annealing_waste_output`)

Record annealing rejects, copper scrap, spent fluid, and wastewater separately by material and destination.

- Selected flow: Annealing scrap or spent fluid by material
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material, treatment destination, and internal-return status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery_records`
- Sources: `bechem-wire-drawing`

##### Elementary flows

### Process: Finishing, inspection, and packaging (`finishing_inspection_and_packaging`)

#### Inputs

##### Product flows

###### Drawn or annealed wire to finishing (`wire_to_finishing`)

Record the wire mass entering cleaning, drying, dimensional and property inspection, spooling, and packing.

- Selected flow: Drawn or annealed copper or copper-alloy wire
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated stage balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_mass_balance_records`
- Sources: `astm-b1-2018`; `astm-b3-2024`; `astm-b250-2026`

###### Packaging materials (`packaging_materials`)

Record reels, spools, coils, liners, wraps, pallets, and other packaging separately from the reference-product mass.

- Selected flow: Packaging material by material and item type
- Flow property / unit: Mass / kg
- Amount rule: measured or purchasing-record mass supplied to conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming copper wire at factory gate (`conforming_copper_wire_output`)

This is the reference product. Record only uninsulated individual wire meeting the declared grade, dimensions, temper, surface state, and quality specification.

- Selected flow: copper wire `4f197beb-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming product mass excluding reel, spool, pallet, and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_output_and_quality_records`
- Sources: `unsd-cpc-3-0-2025`; `astm-b1-2018`; `astm-b3-2024`; `astm-b250-2026`

##### Waste flows

###### Off-specification wire and end cuts (`finishing_copper_scrap`)

Record rejected wire and end cuts separately from conforming output and distinguish rework, internal return, and offsite recovery.

- Selected flow: Off-specification copper wire and end cuts
- Flow property / unit: Mass / kg
- Amount rule: measured mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming copper wire output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery_records`
- Sources: `iso-14044-2006`

##### Elementary flows

## 7. Allocation and Co-product Handling

Rules:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Multi-product lines | Prefer submetering, batch records, and subdivision by drawing line, diameter family, alloy, and temper before applying allocation. | `iso-14044-2006` |
| `allocation_shared_utilities_physical` | Shared electricity, fuel, water, and auxiliaries | Allocate residual shared inputs by a documented physical driver that reflects consumption, such as machine operating time and load, metered line demand, or mass throughput; do not default to revenue. | `iso-14044-2006` |
| `allocation_internal_scrap_closed_loop` | Internal copper return | Track internally returned copper separately and do not count it as both an external waste output and a new external raw-material input. Include remelting or reprocessing utilities and losses when they occur inside the declared boundary. | `iso-14044-2006` |
| `allocation_exported_scrap_no_avoided_burden` | Copper scrap leaving the boundary | Report exported scrap by mass, composition, condition, and destination. Do not apply an avoided-burden credit by default; any alternative allocation shall be separately declared and sensitivity-tested. | `iso-14044-2006` |
| `allocation_rework` | Reworked off-specification wire | Assign the additional drawing, annealing, finishing, and handling inputs to the product system that generates the rework, using recorded rework mass and operations. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rod_input_records` | rod_receipt_and_preparation | Copper or copper-alloy wire rod | receiving or internal-transfer record | lot id; supplier or source; grade; composition or purity; diameter; mass; date; primary/recycled-content basis if claimed | calibrated scale or weighbridge reconciled to inventory | kg | per lot or transfer | full reporting period | all represented wire-production sites | sum matching lots; preserve grade and route strata; normalize by conforming output | scale calibration; lot certificate; supplier declaration; inventory reconciliation |
| `cp_surface_preparation_records` | rod_receipt_and_preparation | Surface-preparation chemicals and water | chemical issue, bath, and meter record | substance; concentration where relevant; opening stock; receipts; closing stock; recovery; disposal; water intake; batch or line | inventory balance and calibrated meter | kg; m3 | per batch with monthly reconciliation | full reporting period | each represented preparation line | calculate net consumption; separate circulation from make-up and discharge | stock reconciliation; meter calibration; bath log; waste manifest |
| `cp_drawing_energy_records` | wire_drawing | Drawing electricity | electricity meter and production log | meter id; opening and closing reading; line; machine state; operating time; wire mass; product family | line submeter or documented shared-meter allocation | kWh | continuous or per shift | full reporting period including representative operating states | each represented drawing line | subtract excluded loads; aggregate by product stratum; normalize by conforming output | meter calibration; energy bill reconciliation; allocation worksheet |
| `cp_drawing_auxiliary_records` | wire_drawing | Drawing lubricant, emulsion, and process water | issue, inventory, bath, and water-meter record | formulation; concentrate; additives; opening stock; receipts; closing stock; recovered quantity; disposal; water intake | inventory balance, purchase/issue record, and meter | kg; m3 | per issue or batch with monthly reconciliation | full reporting period | each represented drawing line | report net consumption; exclude circulating charge; normalize by conforming output | inventory reconciliation; formulation data; meter calibration; treatment record |
| `cp_annealing_energy_records` | annealing | Annealing electricity and fuel | meter, fuel, and production log | equipment; batch or run; electricity; fuel quantity; calorific value; operating time; wire mass; temper | equipment submeter, fuel meter, or documented shared-meter allocation | kWh; MJ | per batch or continuous run | full reporting period including start-up and normal operation | each represented annealing unit | aggregate by annealing route and temper; normalize by conforming output | meter calibration; fuel invoice; calorific-value source; allocation worksheet |
| `cp_annealing_auxiliary_records` | annealing | Protective gas, fluid, and water | issue, inventory, flow-meter, and treatment record | substance; quantity; opening and closing stock; recovery; discharge; batch or run | inventory balance and calibrated flow meter | kg; m3 | per batch or shift with monthly reconciliation | full reporting period | each represented annealing unit | report net consumption and discharge by substance; normalize by conforming output | inventory reconciliation; meter calibration; treatment record |
| `cp_stage_mass_balance_records` | rod_receipt_and_preparation; wire_drawing; annealing; finishing_inspection_and_packaging | Interstage copper-bearing transfers | production, coil, reel, and scale record | lot or coil id; input mass; output mass; breaks; end cuts; rejects; internal return; exported scrap; date | calibrated scale plus production tracking | kg | per lot, coil, or batch | full reporting period | all represented foreground stages | reconcile each stage and the total metal balance; preserve rework and internal-return loops | scale calibration; lot genealogy; production reconciliation |
| `cp_waste_and_recovery_records` | rod_receipt_and_preparation; wire_drawing; annealing; finishing_inspection_and_packaging | Copper scrap, residues, spent fluid, and wastewater | waste, recovery, and treatment record | material; mass; moisture basis where relevant; composition; internal return; rework; carrier; destination; treatment | calibrated scale, tank balance, manifest, and internal-return ledger | kg | per movement with monthly reconciliation | full reporting period | all represented foreground stages and onsite treatment | aggregate by material and destination; do not net internal return against exported waste | scale calibration; manifest; treatment invoice; internal-return reconciliation |
| `cp_packaging_records` | finishing_inspection_and_packaging | Packaging materials | bill of materials, issue, and purchasing record | material; item type; item mass; quantity; reuse status; product lot | measured item mass or supplier specification reconciled to issues | kg | per product lot with monthly reconciliation | full reporting period | represented packing operations | sum packaging by material; exclude from reference-product mass | bill of materials; supplier specification; issue reconciliation |
| `cp_final_output_and_quality_records` | finishing_inspection_and_packaging | Conforming copper wire | final scale, test, and release record | lot or coil id; net wire mass; grade; composition or purity evidence; diameter or area; tolerance; shape; temper; surface state; conductivity or resistivity where specified; mechanical tests where specified; disposition | calibrated scale and applicable product test methods | kg | per released lot or coil | full reporting period | all represented product families and sites | sum only conforming released mass matching declared qualifiers; retain strata | scale and test-equipment calibration; certificate of analysis; release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_output` | All inventory flows | normalized amount = reporting-period flow quantity / reporting-period conforming wire mass × 1,000 kg | relevant collection protocol; `cp_final_output_and_quality_records` | inventory amount per 1,000 kg conforming wire | `iso-14044-2006` |
| `calculate_total_metal_yield` | Total foreground metal balance | total yield = conforming wire mass / gross copper-bearing rod and same-category wire input mass | `cp_rod_input_records`; `cp_stage_mass_balance_records`; `cp_final_output_and_quality_records` | dimensionless yield with reporting-period basis | `iso-14044-2006` |
| `reconcile_copper_mass` | Each stage and total foreground system | input copper-bearing mass = conforming and intermediate output + exported scrap + treatment residue + inventory change + documented internal loop adjustment + unresolved variance | `cp_rod_input_records`; `cp_stage_mass_balance_records`; `cp_waste_and_recovery_records`; `cp_final_output_and_quality_records` | reconciled mass-balance table and variance | `iso-14044-2006` |
| `calculate_net_auxiliary_use` | Circulating lubricant, emulsion, bath, gas, and water systems | net use = opening inventory + receipts - closing inventory - recovered amount transferred out; report discharge separately and document the balance boundary | `cp_surface_preparation_records`; `cp_drawing_auxiliary_records`; `cp_annealing_auxiliary_records` | net auxiliary input and separately reported discharge | `bechem-wire-drawing` |
| `allocate_shared_energy` | Shared energy meter | allocated energy = shared-meter net energy × documented physical driver for the product stratum / total driver over the same meter period | `cp_drawing_energy_records`; `cp_annealing_energy_records` | allocated kWh or MJ by product stratum | `iso-14044-2006` |
| `separate_internal_copper_return` | Internal copper scrap loop | record the internal-return mass and associated onsite reprocessing once; exclude the same mass from external waste and external raw-material totals | `cp_stage_mass_balance_records`; `cp_waste_and_recovery_records` | internal-loop disclosure and non-double-counted inventory | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and represented strata | Grade, purity or composition, dimensions, shape, individual-wire state, temper, surface state, and governing specification shall be traceable to released lots. | certificates, lot genealogy, test records, and release records; `astm-b1-2018`; `astm-b3-2024`; `astm-b250-2026` |
| `dq_rod_provenance` | Wire-rod input | Supplier or internal source, grade, dimensions, geography, technology route, and primary/recycled-content basis where claimed shall be documented; proxy gaps shall be disclosed. | receiving records, certificates, supplier declarations, upstream dataset metadata; `ica-copper-environmental-profile-2023` |
| `dq_energy_separation` | Drawing and annealing | Drawing and annealing energy shall be reported separately. Shared-meter allocation shall retain meter coverage, driver, and reconciliation evidence. | meter records, calibration, production logs, and allocation worksheets |
| `dq_auxiliary_coverage` | Lubrication, cleaning, pickling, water, and process gas | Net consumption and discharge shall be supported by inventory or meter balances, with circulating charge distinguished from consumption. | stock, issue, bath, meter, recovery, and treatment records; `bechem-wire-drawing` |
| `dq_yield_and_scrap` | Copper mass balance | Conforming output, rework, internal return, exported scrap, residues, and unresolved variance shall be reported without double counting and by destination. | stage balances, scale calibration, manifests, and internal-return ledger |
| `dq_temporal_site_coverage` | Dataset reporting period | Data shall cover the declared period and all represented sites, product families, start-ups, and material operating states; exclusions and abnormal events shall be disclosed. | coverage matrix, production records, maintenance and event logs |
| `dq_no_category_extrapolation` | Representativeness claim | A dataset for one alloy, grade, diameter family, temper, or route shall identify its represented share and shall not claim the whole CPC category without a documented coverage assessment. | production mix and representativeness assessment |

## 9. Validation Rules

Rules:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm the Tiangong product-flow, Mass property, Units of mass group, and kg unit; verify all required product qualifiers and the uninsulated individual-wire state are declared. | `unsd-cpc-3-0-2025`; `astm-b1-2018`; `astm-b3-2024`; `astm-b250-2026` |
| `validate_reference_mass` | Reference amount | Confirm the reference output is exactly 1,000 kg net conforming wire and excludes reel, spool, pallet, and packaging mass. | `iso-14044-2006` |
| `validate_process_energy` | Drawing and conditional annealing | Confirm drawing energy is present and annealing energy is present when annealing occurs; check meter scope, allocation driver, and consistency with production records. | `bechem-wire-drawing` |
| `validate_yield_and_scrap` | Metal mass balance | Recalculate stage and total yield; confirm internal return, rework, exported scrap, residues, and unresolved variance are separately visible and not double counted. | `iso-14044-2006` |
| `validate_auxiliary_and_waste` | Lubrication, preparation, cooling, and annealing systems | Confirm lubricant or emulsion, cleaning or pickling agents when used, water, process gas when used, spent fluid, wastewater, and treatment routes are recorded on a net-consumption or discharge basis. | `bechem-wire-drawing` |
| `validate_boundary_exclusions` | Product scope | Reject use as a category-wide default for stranded or bunched conductor, insulated or enamelled wire and cable, winding components, cable cores, photovoltaic or charging cable, harnesses, and other downstream assemblies. | `unsd-cpc-3-0-2025`; `astm-b8-2023`; `iec-60228-2023` |
| `validate_upstream_rod` | Wire-rod dataset | Confirm the upstream rod dataset matches the declared grade/composition, source, geography, technology, and primary/secondary route or that each proxy limitation is disclosed. | `ica-copper-environmental-profile-2023`; `aoyama-copper-wire-annealing-1989` |
| `validate_temporal_completeness` | Foreground evidence | Confirm data cover the declared period, represented sites and product strata, and material operating states; flag unexplained omissions or unrepresentative sampling. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Uninsulated individual copper or copper-alloy wire datasets whose grade, composition, dimensions, shape, temper, surface state, rod route, geography, time period, and factory gate match the declared profile |
| excluded_use | Category-wide default without representativeness evidence; stranded or bunched conductors; insulated or enamelled wire and cable; windings; cable cores; photovoltaic or charging cable; harnesses; downstream assemblies |
| required_metadata | Reference-flow UUID and amount; grade and governing specification; purity or composition; diameter or area and tolerance; shape; individual-wire state; temper; surface state; rod source and route; primary/recycled-content claim basis; geography; reference period; process coverage; allocation; yield; internal scrap handling |
| required_quality_disclosure | Collection coverage; meter and scale calibration; shared-resource allocation; copper mass-balance variance; yield; rework and internal return; upstream rod proxy limitations; product-stratum representativeness; omitted and abnormal operations |
| update_trigger | Material change in grade or alloy family, rod source or route, product dimensions, temper, surface treatment, drawing or annealing technology, energy supply, lubricant or cleaning system, yield, scrap handling, site geography, reporting period, or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-08) | CPC 41513 identity and separation from stranded copper products and insulated wire/cable |
| `astm-b1-2018` | standard | ASTM International, ASTM B1-13(2018), *Standard Specification for Hard-Drawn Copper Wire*, https://doi.org/10.1520/B0001-13R18 (retrieved 2026-08-08) | Hard-drawn round bare copper-wire product identity, dimensions, mechanical properties, and resistivity context |
| `astm-b3-2024` | standard | ASTM International, ASTM B3-13(2024), *Standard Specification for Soft or Annealed Copper Wire*, https://doi.org/10.1520/B0003-13R24 (retrieved 2026-08-08) | Soft or annealed round bare copper-wire identity, purity, dimensions, surface, mechanical properties, and resistivity context |
| `astm-b250-2026` | standard | ASTM International, ASTM B250/B250M-26, *Standard Specification for General Requirements for Wrought Copper-Alloy Wire*, https://doi.org/10.1520/B0250_B0250M-26 (retrieved 2026-08-08) | Copper-alloy wire input, working and annealing route, composition, dimensions, mechanical and electrical property context |
| `astm-b8-2023` | standard | ASTM International, ASTM B8-23, *Standard Specification for Concentric-Lay-Stranded Copper Conductors, Hard, Medium-Hard, or Soft*, https://doi.org/10.1520/B0008-23 (retrieved 2026-08-08) | Identification of stranded conductor as a downstream product excluded from the representative wire boundary |
| `iec-60228-2023` | standard | IEC, IEC 60228:2023, *Conductors of insulated cables*, https://webstore.iec.ch/en/publication/71891 (retrieved 2026-08-08) | Finished-cable conductor context and exclusion from bare individual-wire product claims |
| `iso-14044-2006` | standard | ISO, ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, https://www.iso.org/standard/38498.html (current edition confirmed; retrieved 2026-08-08) | LCI boundary, allocation, mass-balance, data-quality, and validation method basis |
| `asm-copper-wire-cable-1998` | handbook | ASM International, *Copper Wire and Cable*, DOI 10.31399/asm.hb.mhde2.a0003133, https://dl.asminternational.org/handbooks/edited-volume/49/chapter-abstract/594856/Copper-Wire-and-Cable (retrieved 2026-08-08) | Wire-rod fabrication, surface preparation, drawing, annealing, and downstream insulation process decomposition |
| `bechem-wire-drawing` | extension_guidance | CARL BECHEM GmbH, *Lubrication solutions for wire drawing*, https://www.bechem.de/_Resources/Persistent/d/d/8/a/dd8ab883aa680d193e272b78e3dc7d0ca77920c0/BECHEM_Wire_Drawing_en.pdf (retrieved 2026-08-08) | Rod breakdown, drawing lubrication and cooling, cleaning, inline annealing, drying, and spooling flow identification; no quantitative default used |
| `aoyama-copper-wire-annealing-1989` | literature | Aoyama et al., “Effect of Heat Treatment on Mechanical Properties of Cold Drawn Copper Wire,” *Journal of the Japan Institute of Metals and Materials* 53(4), 1989, https://doi.org/10.2320/jinstmet1952.53.4_452 (retrieved 2026-08-08) | Relationship of rod impurities, cold drawing, annealing, microstructure, conductivity, and mechanical properties; no quantitative default used |
| `ica-copper-environmental-profile-2023` | dataset | International Copper Association, *Copper Environmental Profile*, 2023, https://copperalliance.org/wp-content/uploads/2023/05/ICA-LCI-GlobalSummary-202305-F.pdf (retrieved 2026-08-08) | Upstream copper supply and primary/secondary route metadata context; no numerical inventory copied |
