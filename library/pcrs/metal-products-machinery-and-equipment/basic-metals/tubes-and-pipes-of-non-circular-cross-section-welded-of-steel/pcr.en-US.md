---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-and-pipes-of-non-circular-cross-section-welded-of-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tubes and pipes, of non-circular cross-section, welded, of steel

## 1. Scope and Applicability

This PCR applies to unfabricated steel tubes and pipes whose finished cross-section is non-circular and whose longitudinal closure is welded. Square, rectangular, and other declared non-circular closed sections are covered when delivered as tube or pipe at the manufacturer's gate. The representative route starts with purchased hot-rolled steel coil, slits it where needed, cold-forms it directly to the final section or first to a round, closes the longitudinal seam by welding, sizes it, cuts it to sale length, and inspects the product.

The PCR excludes seamless tube, circular welded tube, open-seam or riveted tube, cast tube, tube fittings, oil- or gas-specific line pipe and casing when governed by their specific product identity, and project-specific fabrication such as coping, drilling, connection welding, coating, installation, use, and end-of-life. Post-production heat treatment is included only when it is part of the declared sale state. The foreground data package must identify departures from the representative coil-fed cold-forming route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-and-pipes-of-non-circular-cross-section-welded-of-steel |
| classification_refs | CPC 3.0 `41288`, Tubes and pipes, of non-circular cross-section, welded, of steel |
| covered_products | welded steel tube or pipe delivered with a square, rectangular, elliptical, or other declared non-circular closed cross-section |
| excluded_products | seamless tube; circular welded tube; open-seam or riveted tube; cast tube; tube fittings; product-specific oil and gas line pipe or casing; project-fabricated members |
| representative_product | unfabricated rectangular welded steel tube made from hot-rolled non-alloy steel coil |
| production_route | coil receiving and slitting; direct-forming or continuous-forming; longitudinal welding; sizing; cut-to-length; inspection; conditional post-production heat treatment |
| market_state | as-delivered dry tube at the manufacturer's gate, before project-specific fabrication, coating, installation, use, or end-of-life |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provide an unfabricated welded steel tube or pipe with a declared non-circular closed cross-section and declared mechanical and dimensional performance |
| How much | 1 kg of accepted product |
| How well | conforms to the declared grade or specification, section geometry, dimensions and tolerances, seam-weld method and acceptance criteria, surface and heat-treatment state |
| How long or cycle | one production batch at the manufacturer's gate; no service life is represented |
| reference_flow_link | `5b36ddd4-adb1-41da-9456-33e69e0f141c` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tubes and pipes, of non-circular cross-section, welded, of steel `5b36ddd4-adb1-41da-9456-33e69e0f141c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel grade and alloy family; section shape and dimensions; wall thickness; product specification; direct-forming or continuous-forming route; weld technology; weld acceptance basis; heat-treatment state; coating and residual-oil state; accepted-product mass basis; manufacturing geography; data period; manufacturer's gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh only accepted tube in its declared sale state. State whether residual mill oil, temporary protection, bundled accessories, and any included coating are inside the reported product mass. |
| `process_mass_balance` | steel coil, internal steel intermediates, accepted tube, and steel scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile dry steel-bearing inputs, internal transfers, accepted output, measured scrap, and documented stock change for the same reporting period without counting internal transfers as external inputs or outputs. |
| `electricity_energy_conversion` | alternating-current meter records | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh and convert to MJ with the exact identity 1 kWh = 3.6 MJ; disclose voltage level, grid or supplier mix, geography, and whether on-site generation is included. |
| `gas_volume_conditions` | natural-gas records | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record meter reference temperature, pressure, dry or wet basis, and conversion method. Do not combine volume measured at incompatible reference conditions. |
| `water_mass_basis` | process-water records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain supplied mass or document the measured volume, density basis, make-up versus recirculated distinction, and conversion used to report kg of new water crossing the boundary. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_start_at_coil_gate` | foreground starting condition | Start foreground collection when purchased steel coil crosses the tube-manufacturing site gate; link its production and inbound transport to separately identified upstream datasets rather than recreating steelmaking inside this foreground system. | `sti-hss-sustainability-guide`; `worldsteel-lci-methodology-2017` |
| `sb_include_tube_manufacture` | foreground controlled operations | Include coil receiving and slitting, forming, longitudinal welding, weld-flash removal when performed, sizing, cut-to-length, inspection, internal material transfers, directly controlled utilities, direct releases, and on-site waste handling through accepted product at the manufacturer's gate. | `sti-hss-seam-welds`; `sti-hss-sustainability-guide` |
| `sb_route_disclosure` | forming and finishing route | Declare whether the tube is direct-formed or formed round then reshaped; include post-production heat treatment only when it is part of the sale state and identify on-site versus third-party treatment. | `sti-hss-seam-welds`; `sti-hss-heat-treating-2017` |
| `sb_exclude_downstream_fabrication` | downstream operations | Exclude project-specific cutting, coping, drilling, connection welding, coating, installation, use, and end-of-life; model them in downstream datasets when required by the study. | `sti-hss-sustainability-guide` |
| `sb_no_embedded_recycling_credit` | manufacturing scrap | Report post-industrial steel scrap as a physical waste output and disclose its destination. Do not embed avoided primary steel or end-of-life recycling credit in the gate-to-gate tube inventory; report any recycling method separately and consistently. | `worldsteel-lci-methodology-2017` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | purchased hot-rolled steel coil received at the tube-manufacturing site |
| starting_condition_role | externally supplied steel feedstock carrying upstream steel-production burdens |
| product_classification_scope | welded steel tubes and pipes with a declared non-circular closed cross-section; CPC 3.0 `41288` is the accepted classification context |
| recursive_input_rule | a purchased input already meeting this PCR product boundary remains an explicit product input and links to a separate upstream dataset; do not recursively reproduce its manufacturing inventory in the current dataset |
| upstream_dataset_requirement | use separately identified, geographically and technologically appropriate datasets for steel coil, electricity, natural gas, process water, and other purchased products; disclose supplier-specific or market-average status |
| disclosure | report feedstock grade and coil state, forming route, weld technology, site and geography, data period, heat-treatment state, product acceptance basis, included finishing, and gate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| coil_preparation_and_slitting | Coil preparation and slitting | required |  | foreground feedstock preparation | kg slit steel strip transferred to forming |
| cold_forming_and_welding | Cold forming and longitudinal welding | required |  | foreground tube formation | kg as-welded non-circular tube transferred to finishing |
| sizing_finishing_and_inspection | Sizing, cut-to-length, conditional heat treatment, and inspection | required |  | foreground final manufacture | 1 kg accepted welded non-circular steel tube |

### Process: Coil preparation and slitting (`coil_preparation_and_slitting`)

#### Inputs

##### Product flows

###### Hot-rolled steel coil feedstock (`hot_rolled_steel_coil`)

Purchased hot-rolled non-alloy steel coil is the declared representative steel feedstock. Record its received dry mass and the supplier dataset that carries upstream steelmaking burdens.

- Selected flow: steel hot rolled coil `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured received mass consumed, adjusted for verified stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coil_receiving`
- Sources: `sti-hss-sustainability-guide`

###### Alternating-current electricity for coil preparation and slitting (`slitting_ac_electricity`)

Record the electricity delivered to coil handling and slitting equipment. Keep voltage, supplier or grid mix, geography, and any shared-meter allocation explicit; the flow UUID remains under manual review.

- Selected flow: alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered consumption or documented allocation from a calibrated shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slitting_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Slit hot-rolled steel strip transferred to forming (`slit_steel_strip_output`)

Record the batch-specific internal steel strip leaving slitting. This internal transfer preserves grade, width, thickness, and mass identity and is not an external co-product.

- Selected flow: slit hot-rolled steel strip, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slit_strip_transfer`
- Sources: `sti-hss-seam-welds`

##### Waste flows

###### Post-industrial steel edge-trim scrap (`postindustrial_steel_scrap_edge_trim`)

Record edge trim and rejected strip that leaves this process as manufacturing scrap. Internal return to the same operation is a loop, not an output crossing the foreground boundary.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass by destination, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edge_trim_scrap`
- Sources:

##### Elementary flows

### Process: Cold forming and longitudinal welding (`cold_forming_and_welding`)

#### Inputs

##### Product flows

###### Slit hot-rolled steel strip received from preparation (`slit_steel_strip_input`)

Record the internal steel strip entering the forming line with the same batch identity and mass basis used at the preceding process output.

- Selected flow: slit hot-rolled steel strip, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass reconciled to `slit_steel_strip_output`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_strip_transfer`
- Sources: `sti-hss-seam-welds`

###### Alternating-current electricity for forming and welding (`forming_welding_ac_electricity`)

Record electricity delivered to roll-forming, induction or resistance welding, weld-flash removal, and directly associated controls. The flow UUID remains under manual review.

- Selected flow: alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered consumption or documented allocation from a calibrated shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_welding_electricity`
- Sources: `sti-hss-seam-welds`

###### Process water supplied to the welding cooling loop (`process_water_for_welding_cooling`)

Record only new process water crossing the site boundary into the welding cooling loop. Recirculated water remains internal; record zero only with evidence that no make-up water was supplied.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water supplied to the cooling loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_cooling_water`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### As-welded non-circular steel tube transferred to finishing (`welded_non_circular_tube_intermediate_output`)

Record the internal as-welded tube after longitudinal seam closure and any in-line reshaping, before final sizing, cut-to-length, heat treatment, and acceptance.

- Selected flow: as-welded non-circular steel tube, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welded_tube_transfer`
- Sources: `sti-hss-seam-welds`

##### Waste flows

###### Post-industrial steel weld-flash scrap (`postindustrial_steel_scrap_weld_flash`)

Record externally removed weld flash and related ferrous trim as manufacturing scrap when it leaves the foreground system.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured collected weld-flash scrap mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weld_flash_scrap`
- Sources: `sti-hss-seam-welds`

###### Metalworking wastewater from forming and welding (`metalworking_wastewater`)

Record the measured aqueous waste stream discharged from forming and welding equipment, including its treatment state and destination. Do not combine sanitary water, stormwater, or alkaline-cleaning wastewater into this row.

- Selected flow: metalworking wastewater from steel tube forming and welding
- Flow property / unit: Mass / kg
- Amount rule: measured discharged mass after subtracting documented recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metalworking_wastewater`
- Sources:

##### Elementary flows

### Process: Sizing, cut-to-length, conditional heat treatment, and inspection (`sizing_finishing_and_inspection`)

#### Inputs

##### Product flows

###### As-welded tube received for sizing and finishing (`welded_non_circular_tube_intermediate_input`)

Record the internal as-welded tube entering the final manufacturing stage with the same batch identity and mass basis as the preceding process output.

- Selected flow: as-welded non-circular steel tube, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass reconciled to `welded_non_circular_tube_intermediate_output`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_tube_transfer`
- Sources: `sti-hss-seam-welds`

###### Alternating-current electricity for sizing, cutting, and inspection (`finishing_ac_electricity`)

Record electricity delivered to sizing, straightening, cut-to-length, inspection, and material-handling equipment. The flow UUID remains under manual review.

- Selected flow: alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered consumption or documented allocation from a calibrated shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_electricity`
- Sources:

###### Gaseous natural gas for direct-fired post-production heat treatment (`natural_gas_for_direct_fired_heat_treatment`)

Record this input only when post-production heat treatment is part of the declared sale state and a directly fired natural-gas system supplies the heat. Electrically heated or third-party treatment must not be represented by this row.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted heat-treated welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_natural_gas`
- Sources: `sti-hss-heat-treating-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted welded non-circular steel tube (`reference_welded_non_circular_steel_tube`)

Record only tube accepted against the declared grade, geometry, dimensions, weld acceptance basis, surface state, and heat-treatment state. This row realizes the PCR reference flow.

- Selected flow: Tubes and pipes, of non-circular cross-section, welded, of steel `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accepted_product_mass`
- Sources: `unsd-cpc-3-0-structure-2025`; `sti-hss-sustainability-guide`

##### Waste flows

###### Post-industrial steel cut-off and rejected-tube scrap (`postindustrial_steel_scrap_cutoff`)

Record cut-off ends and rejected tube that leave the foreground system as manufacturing scrap, separated by destination where treatment differs.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass by destination, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutoff_reject_scrap`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from direct-fired natural-gas heat treatment (`fossil_co2_from_natural_gas`)

Record direct fossil carbon dioxide released to air only when the natural-gas heat-treatment row applies. Exclude upstream electricity and fuel-supply emissions, which belong to linked upstream datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or calculation from collected fuel volume, verified gas composition or carbon content, oxidation basis, and declared reference conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted heat-treated welded non-circular steel tube
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_fossil_co2`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | separately measurable lines, batches, and finishing routes | Subdivide direct-forming and continuous-forming campaigns, heat-treated and non-heat-treated products, and separately metered operations before allocating shared burdens. |  |
| `allocation_internal_transfers` | slit strip and as-welded tube intermediates | Treat internal intermediates as mass-balanced transfers between foreground processes; do not assign an upstream credit, market value, or second external burden to them. |  |
| `allocation_shared_utilities` | unavoidable shared electricity, water, and site services | Where subdivision or direct metering is not practicable, allocate by a documented causal driver such as equipment time and measured power, water draw, or accepted throughput; mass allocation may be used only when it approximates the physical driver and is sensitivity-tested for material shared burdens. |  |
| `allocation_manufacturing_scrap` | post-industrial steel scrap | Report physical scrap mass and destination separately. Keep any recycling credit, substitution factor, or end-of-life benefit outside the gate-to-gate inventory and disclose the separately selected recycling method consistently for scrap inputs and outputs. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coil_receiving` | coil_preparation_and_slitting | hot-rolled steel coil feedstock | receiving and stock record | coil id; supplier; grade; width; thickness; gross mass; tare; receipt date; opening and closing stock | calibrated weighbridge or coil scale plus inventory reconciliation | kg | per coil and reporting period | representative continuous production period covering declared seasonal and operating variability | all coil inputs to the declared line and site | consumed mass = receipts + opening stock - closing stock - documented returns; normalize to accepted product | calibration, supplier certificate, weigh ticket, and stock reconciliation |
| `cp_slitting_electricity` | coil_preparation_and_slitting | slitting electricity | electricity meter record | meter id; start and end reading; kWh; voltage; supplier or source; allocation driver; timestamps | dedicated submeter or calibrated shared meter | kWh and MJ | continuous reading aggregated monthly | same period as product output | coil handling and slitting equipment at the declared site | subtract idle or unrelated loads where documented; convert kWh to MJ and normalize to accepted product | meter calibration, interval export, and allocation worksheet |
| `cp_slit_strip_transfer` | coil_preparation_and_slitting | slit strip transfer | internal batch transfer record | batch id; grade; width; thickness; mass; timestamp; destination line | calibrated scale or mass-balance transfer ticket | kg | per batch | same period as product output | transfer from slitting to forming | sum verified transfers and reconcile with coil input, scrap, and stock change | scale calibration and matched transfer tickets |
| `cp_edge_trim_scrap` | coil_preparation_and_slitting | edge-trim scrap | scrap weigh ticket | container id; scrap description; mass; destination; internal return flag; date | calibrated scale and destination record | kg | per container or shipment | same period as product output | slitting operation | sum only net boundary-crossing scrap by destination and normalize to accepted product | scale calibration, weigh tickets, and buyer or treatment record |
| `cp_forming_strip_transfer` | cold_forming_and_welding | slit strip input | internal batch receipt | batch id; grade; width; thickness; mass; timestamp; source process | matched internal transfer ticket | kg | per batch | same period as product output | forming line receipt point | reconcile one-to-one or by controlled batch aggregation with `cp_slit_strip_transfer` | matched source and receipt tickets |
| `cp_forming_welding_electricity` | cold_forming_and_welding | forming and welding electricity | electricity meter record | meter id; readings; kWh; voltage; weld technology; operating hours; allocation driver; timestamps | dedicated submeter or calibrated shared meter | kWh and MJ | continuous reading aggregated monthly | same period as product output | forming, welding, weld-flash removal, and associated controls | allocate only documented shared loads; convert kWh to MJ and normalize to accepted product | meter calibration, interval export, and line log |
| `cp_welding_cooling_water` | cold_forming_and_welding | welding cooling make-up water | water meter record | meter id; readings; water source; make-up volume or mass; purge; recirculation status; timestamps | dedicated meter or reconciled tank record | kg, with original m3 retained when metered by volume | per reading aggregated monthly | same period as product output | welding cooling loop | count new boundary-crossing make-up water only; document density conversion and normalize to accepted product | meter calibration, water invoice, and loop balance |
| `cp_welded_tube_transfer` | cold_forming_and_welding | as-welded tube transfer | internal batch transfer record | batch id; section; grade; wall thickness; weld technology; mass; timestamp | calibrated scale or reconciled mass-balance ticket | kg | per batch | same period as product output | transfer from welding to final sizing and finishing | sum transfers and reconcile with strip input, weld-flash scrap, wastewater solids where material, and stock change | scale calibration and matched transfer tickets |
| `cp_weld_flash_scrap` | cold_forming_and_welding | weld-flash scrap | scrap weigh ticket | container id; mass; grade; destination; date | calibrated scale and destination record | kg | per container or shipment | same period as product output | weld-flash removal point | sum net boundary-crossing scrap by destination and normalize to accepted product | scale calibration, weigh tickets, and destination record |
| `cp_metalworking_wastewater` | cold_forming_and_welding | metalworking wastewater | discharge and treatment record | stream id; mass or volume; density basis; source equipment; treatment state; oil and suspended-solids characterization; destination; date | dedicated meter or calibrated tank level with representative sampling | kg, with original m3 retained when metered by volume | per discharge aggregated monthly | same period as product output | forming and welding wastewater only | subtract documented recirculation; keep incompatible streams separate; normalize discharged mass to accepted product | meter calibration, sampling report, discharge log, and treatment receipt |
| `cp_finishing_tube_transfer` | sizing_finishing_and_inspection | as-welded tube input | internal batch receipt | batch id; section; grade; wall thickness; heat-treatment requirement; mass; timestamp | matched internal transfer ticket | kg | per batch | same period as product output | final manufacturing stage receipt point | reconcile with `cp_welded_tube_transfer` and documented stock change | matched source and receipt tickets |
| `cp_finishing_electricity` | sizing_finishing_and_inspection | sizing, cutting, and inspection electricity | electricity meter record | meter id; readings; kWh; voltage; equipment scope; operating hours; allocation driver; timestamps | dedicated submeter or calibrated shared meter | kWh and MJ | continuous reading aggregated monthly | same period as product output | sizing, straightening, cutting, inspection, and handling equipment | allocate only documented shared loads; convert kWh to MJ and normalize to accepted product | meter calibration, interval export, and equipment log |
| `cp_heat_treatment_natural_gas` | sizing_finishing_and_inspection | direct-fired heat-treatment natural gas | fuel meter and furnace campaign record | meter id; volume; temperature; pressure; dry or wet basis; gas composition or calorific record; furnace id; product batch; timestamps | calibrated gas meter linked to heat-treatment campaigns | m3 | per campaign and reporting period | same period as heat-treated product output | direct-fired post-production heat treatment included in sale state | allocate campaign fuel by measured furnace load or another documented causal driver and normalize to accepted heat-treated product | meter calibration, gas invoice, gas-quality record, and furnace log |
| `cp_accepted_product_mass` | sizing_finishing_and_inspection | accepted reference product | production and quality-release record | batch id; product flow id; grade; section; dimensions; weld method; heat-treatment state; coating state; accepted mass; rejection mass; release date | calibrated final scale linked to quality release | kg | per accepted batch | same period as all inventory records | all accepted reference product at the declared site gate | sum only quality-released mass in the declared sale state and use it as normalization denominator | scale calibration, inspection record, and certificate of conformity |
| `cp_cutoff_reject_scrap` | sizing_finishing_and_inspection | cut-off and rejected-tube scrap | scrap weigh ticket and rejection record | container or batch id; reason; mass; destination; internal return flag; date | calibrated scale linked to rejection record | kg | per container, batch, or shipment | same period as product output | final sizing, cutting, and inspection | sum only net boundary-crossing scrap by destination and normalize to accepted product | scale calibration, rejection log, weigh ticket, and destination record |
| `cp_direct_fossil_co2` | sizing_finishing_and_inspection | fossil carbon dioxide from direct-fired heat treatment | stack record or fuel-carbon calculation record | linked gas volume; reference conditions; gas composition or carbon content; oxidation basis; stack concentration and flow when measured; campaign id | calibrated stack measurement or documented carbon-balance calculation from `cp_heat_treatment_natural_gas` | kg CO2 | per monitored campaign or calculation period | same period as direct-fired heat-treated output | direct furnace stack only | calculate or aggregate direct fossil CO2, exclude upstream fuel and electricity emissions, and normalize to accepted heat-treated product | analyzer calibration or fuel-quality certificate, formula worksheet, and campaign link |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_flow` | all external inventory rows | normalized amount = boundary-crossing amount attributable to the declared product / accepted reference-product mass | applicable collection protocol; `cp_accepted_product_mass` | amount per 1 kg accepted product |  |
| `calc_reconcile_internal_strip` | slit steel strip transfer | opening strip stock + output from slitting - input to forming - closing strip stock = documented transfer variance; investigate material variance before release | `cp_slit_strip_transfer`; `cp_forming_strip_transfer` | reconciled internal strip transfer |  |
| `calc_reconcile_internal_welded_tube` | as-welded tube transfer | opening intermediate stock + output from welding - input to finishing - closing intermediate stock = documented transfer variance; investigate material variance before release | `cp_welded_tube_transfer`; `cp_finishing_tube_transfer` | reconciled internal welded-tube transfer |  |
| `calc_steel_mass_balance` | steel-bearing flows | consumed coil mass = accepted tube mass + net steel scrap mass + documented steel-bearing loss + closing stock increase - opening stock increase; disclose and investigate any residual | `cp_coil_receiving`; transfer protocols; `cp_edge_trim_scrap`; `cp_weld_flash_scrap`; `cp_cutoff_reject_scrap`; `cp_accepted_product_mass` | period steel mass-balance residual |  |
| `calc_direct_fossil_co2` | direct-fired heat treatment | calculate fossil CO2 from collected gas volume at declared conditions and verified composition or carbon content with the declared oxidation basis, or aggregate calibrated stack mass flow; do not add upstream combustion emissions | `cp_heat_treatment_natural_gas`; `cp_direct_fossil_co2` | kg fossil CO2 per 1 kg accepted heat-treated product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and feedstock identity | Each reported batch shall link grade, alloy family, section geometry, dimensions, wall thickness, forming route, weld technology, heat-treatment state, coating state, and applicable specification to the reference flow and coil input. | product certificate, coil certificate, route sheet, and inspection release |
| `dq_temporal_alignment` | all foreground records | Inventory numerator records and accepted-product denominator records shall cover the same representative period; gaps, shutdowns, trial runs, and exceptional campaigns shall be identified. | period reconciliation and coverage table |
| `dq_measurement` | mass, electricity, water, gas, and emissions | Retain instrument id, calibration status, reading frequency, missing-data treatment, unit conversion, and uncertainty or accuracy information for material measurements. | calibration certificates, meter exports, weigh tickets, and calculation worksheets |
| `dq_completeness` | all process rows | Report each applicable row, document evidence-based zero or non-applicability, reconcile internal transfers, and explain excluded minor exchanges rather than placing them in an unspecified aggregate flow. | row-completeness matrix and mass/energy reconciliation |
| `dq_upstream_representativeness` | purchased coil, electricity, gas, and water | Identify upstream dataset provider, geography, technology, reference year, supplier-specific or market-average status, and mismatch from the foreground supply. | supplier records and upstream dataset metadata |
| `dq_waste_destination` | steel scrap and wastewater | Identify receiving facility or buyer, treatment or recycling route, transport link, and whether end-of-waste status has been reached; do not assume recycling solely from positive value. | transfer note, buyer receipt, permit or treatment record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Confirm the reference product is welded steel tube or pipe with a declared non-circular closed cross-section and that its UUID, Mass property, kg unit, product state, and required qualifiers are present. | `unsd-cpc-3-0-structure-2025` |
| `val_scope_gate` | system boundary | Confirm the dataset starts with purchased coil and ends with accepted unfabricated tube at the manufacturer's gate; separately identify upstream supply, downstream fabrication, coating, installation, use, and end-of-life. | `sti-hss-sustainability-guide` |
| `val_route` | process map | Confirm the declared direct-forming or continuous-forming route, weld technology, weld-flash removal practice, and conditional heat-treatment state match the represented inventory. | `sti-hss-seam-welds`; `sti-hss-heat-treating-2017` |
| `val_reference_normalization` | inventory amounts | Confirm every external amount is normalized to the same measured accepted-product mass and that internal transfers are excluded from aggregated external inputs and outputs. |  |
| `val_steel_mass_balance` | steel-bearing flows | Confirm coil input, internal steel transfers, accepted product, each post-industrial steel-scrap stream, stock change, and any documented steel-bearing loss reconcile for the reporting period. |  |
| `val_energy_water` | electricity, gas, and water | Confirm meters, voltage and supply mix, gas reference conditions, water make-up versus recirculation, conversions, route applicability, and allocation drivers are disclosed. |  |
| `val_direct_co2` | fossil carbon dioxide | When direct-fired heat treatment applies, confirm direct fossil CO2 is linked to the same gas campaigns and excludes upstream electricity and fuel-supply emissions; otherwise require documented non-applicability for both rows. |  |
| `val_scrap_recycling` | manufacturing scrap | Confirm each scrap row reports physical mass and destination and that any recycling credit or end-of-life benefit is outside this gate-to-gate inventory and disclosed separately. | `worldsteel-lci-methodology-2017` |
| `val_data_quality` | dataset release | Confirm temporal alignment, calibration evidence, missing-data treatment, upstream dataset representativeness, row completeness, and wastewater characterization are sufficient for the declared dataset role. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | datasets for welded non-circular steel tubes or pipes with matching feedstock, forming route, weld technology, section, grade, heat-treatment and coating state, geography, period, and manufacturer's gate |
| excluded_use | seamless or circular tube; cast or open-seam tube; fittings; product-specific oil and gas pipe; project fabrication; coated or heat-treated states not represented by the foreground data; installation, use, or end-of-life |
| required_metadata | reference flow UUID and qualifiers; site and geography; data period; coil supplier and upstream dataset; forming and weld route; heat-treatment and coating state; process coverage; allocation; scrap and wastewater destination; data-quality rating |
| required_quality_disclosure | measured versus allocated shares; meter and scale coverage; internal-transfer and steel mass-balance residuals; missing-data treatment; upstream dataset mismatches; uncertainty; unresolved UUIDs and range-evidence needs |
| update_trigger | material change in feedstock grade or supplier mix, forming or welding technology, section family, heat treatment, coating inclusion, energy or water system, scrap or wastewater route, site, geography, data period, or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | official CPC 3.0 product identity and exact wording for code 41288 |
| `sti-hss-seam-welds` | literature | https://steeltubeinstitute.org/resources/hss-seam-welds/ | direct-forming and continuous-forming process decomposition, longitudinal welding, and weld-flash removal |
| `sti-hss-sustainability-guide` | extension_guidance | https://steeltubeinstitute.org/resources/practical-guide-to-hss-sustainability-documentation-and-submittals/ | steel-coil input, tube-forming boundary, and separation of unfabricated tube manufacture from downstream fabrication |
| `sti-hss-heat-treating-2017` | literature | https://steeltubeinstitute.org/resources/heat-treating-hss/ | welded HSS forming routes and conditional post-production heat treatment |
| `worldsteel-lci-methodology-2017` | method_factor | https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf | cradle-to-gate steel LCI framing and transparent, consistent treatment of steel scrap and recycling |
