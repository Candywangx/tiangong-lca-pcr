---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48263-and-48264
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts and accessories for the goods of subclasses 48263 and 48264

## 1. Scope and Applicability

This PCR applies to separately marketed original-equipment or replacement parts and accessories made specifically for gas, liquid or electricity supply or production meters, and for revolution or production counters, taximeters, mileometers, pedometers, speed indicators, tachometers and stroboscopes. It covers a declared finished part or accessory at the factory gate, including its directly controlled fabrication, cleaning, conditional electronics integration and calibration, final inspection, assembly and primary packing.

Complete measuring instruments, generic raw materials not yet transformed into identifiable parts, parts for other measuring or medical instruments, distribution after the factory gate, installation, use, maintenance and end-of-life are excluded. A data package must identify the host-instrument family, part function, material composition, manufacturing route, electronics content, calibration requirement and sale condition. The official CPC source establishes the category identity and its linkage to subclasses 48263 and 48264; it does not supply inventory amounts or performance ranges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48263-and-48264 |
| classification_refs | CPC 3.0: 48283, exact classification reference |
| covered_products | Separately marketed housings, frames, plates, rotors, gears, register or counter mechanisms, printed-wire-board-bearing modules, brackets, shafts, couplings, bezels and other dedicated parts or accessories for goods of CPC 48263 and 48264 |
| excluded_products | Complete meters, counters, indicators, tachometers or stroboscopes; generic sheet, resin or electronic components before conversion into an identifiable dedicated part; parts for goods outside CPC 48263 and 48264 |
| representative_product | One saleable finished meter or counter part/accessory, represented on a net mass basis |
| production_route | Material forming or machining, optional moulding and surface cleaning, conditional electronics integration or calibration, final assembly, inspection and packing |
| market_state | Conforming new part or accessory supplied at the factory gate, packed when primary packaging is used |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A conforming dedicated part or accessory that enables assembly, replacement or operation of a good in CPC 48263 or 48264 |
| How much | 1 kg net mass of saleable finished parts or accessories, excluding primary packaging |
| How well | Meets the declared drawing, material specification, dimensional tolerance, compatibility and functional inspection criteria for the named host-instrument family |
| How long or cycle | One production lot released at the factory gate; no service-life equivalence is claimed |
| reference_flow_link | The net mass of conforming finished output in row `finished_meter_part` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts and accessories for the goods of subclasses 48263 and 48264 (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | host-instrument subclass and family; part/accessory name and function; drawing or model identifier; principal material and grade; electronics content; manufacturing route; calibration or test requirement; net mass; primary packaging status; manufacturing geography; production period |

When constructing a foreground data package, every required qualifier must be declared in metadata, product description, reference-flow comment or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and normalization | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate the net mass of conforming saleable parts after removal of primary packaging; normalize all inventory values to 1 kg net finished output. |
| `packaging_separation` | Primary packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record packaging as a separate input and never include its mass in the reference amount. |
| `energy_preservation` | Electricity and fuels | Net calorific value or volume as defined by the selected flow | MJ for electricity; m3 for gaseous fuel | Preserve source-meter units and documented conversion factors; do not convert volume to mass without declared reference conditions and density. |
| `mass_balance_basis` | Material inputs, product and segregated wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile incorporated material, recoverable production scrap, other material losses and net finished output for each declared material route. |

## 5. System Boundary

The foreground boundary shall apply these rules:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate_operations` | Manufacturer-controlled production | Include material preparation, forming, machining, moulding, cleaning, conditional electronics integration or calibration, assembly, inspection, rework attributable to the lot and primary packing performed under the reporting organization's control. |  |
| `boundary_purchased_inputs` | Purchased materials, components, utilities and packaging | Record every purchased input as a separate product flow and link it to an upstream dataset that matches material grade, product state, supplier geography and technology where available. |  |
| `boundary_direct_outputs` | Wastes and elementary emissions | Record segregated production wastes, wastewater and direct elementary emissions generated by included operations; do not include emissions already represented in upstream electricity or material datasets. |  |
| `boundary_exclusions` | Activities outside the factory gate | Exclude capital goods unless required by the study goal, employee commuting, downstream distribution, installation, use, maintenance and end-of-life; disclose any study-specific inclusion. |  |
| `boundary_product_identity` | Category classification | Exclude production of complete CPC 48263 or 48264 instruments from the reference product and retain only separately marketed CPC 48283 parts or accessories. | `un-cpc-3-0-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased constituent material, dedicated component and primary-packaging input received at the manufacturing site |
| starting_condition_role | Upstream production remains represented by linked supplier or background datasets; the foreground begins at receipt into manufacturer-controlled conversion and assembly operations |
| product_classification_scope | Dedicated separately marketed parts and accessories for the goods of CPC 48263 and 48264 |
| recursive_input_rule | A purchased input that itself meets this PCR category remains an explicit same-category product input with its supplier dataset; do not recursively absorb it into the foreground output |
| upstream_dataset_requirement | Each purchased product input requires a compatible upstream dataset or an explicitly disclosed data gap; geography, technology, material grade and product state must be matched |
| disclosure | Declare the host instrument, part function, starting material or component state, included operations, outsourced operations, electronics route, calibration media, scrap destinations and primary-packaging status |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_fabrication` | Part fabrication and surface cleaning | required | Applies to manufacturer-controlled conversion of at least one declared material into the dedicated part; conditionally include only the atomic route-specific exchanges that occur | foreground production | Gross material input and released intermediate-part mass for the production lot |
| `electronics_calibration` | Electronics integration and calibration | conditional | Include when the part contains a printed wire board or when methane or carbon dioxide is consumed as a calibration medium | electronics integration and functional calibration | Accepted electronic/calibrated intermediate-part mass |
| `final_assembly_packing` | Final assembly, inspection and packing | required | Applies to every conforming saleable part or accessory | final production and factory-gate release | Net conforming finished output mass |

### Process: Part fabrication and surface cleaning (`part_fabrication`)

#### Inputs

##### Product flows

###### Stainless-steel sheet for formed parts (`stainless_steel_sheet`)

Include only when stainless-steel sheet is cut or formed into the declared part; record the purchased grade and thickness.

- Selected flow: Stainless-steel sheet (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`

###### Primary aluminium-alloy sheet for formed parts (`primary_aluminium_alloy_sheet`)

Include only when primary aluminium-alloy sheet is used; disclose alloy, thickness and recycled-content claim.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`

###### Brass plate and strip for machined or formed parts (`brass_plate_strip`)

Include only when brass plate or strip is converted into the declared part; disclose alloy and form.

- Selected flow: Brass plate and strip `54cfcc10-ca05-4e3e-8332-08665781eba0`
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`

###### ABS granulate for moulded parts (`abs_granulate`)

Include only when ABS is moulded at the reporting site; disclose grade, additives and recycled content.

- Selected flow: Acrylonitrile butadiene styrene (ABS) granulate `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- Flow property / unit: Mass / kg
- Amount rule: Measured ABS granulate issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`

###### Electricity for fabrication and cleaning (`fabrication_electricity`)

Record purchased electricity consumed by forming, machining, moulding, cleaning and associated directly controlled support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to the production lot, with shared use allocated by documented machine time or submeter data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_energy`

###### Process water for aqueous cleaning (`process_water`)

Include only when process water crosses the boundary for washing, rinsing or solution preparation; exclude recirculated internal water until make-up or discharge crosses the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded make-up water supplied to included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Include only when sodium hydroxide is consumed in an alkaline cleaning bath; record the mass of pure sodium hydroxide equivalent and solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Purchased solution mass multiplied by documented sodium-hydroxide mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`

###### Natural gas for direct process heat (`natural_gas`)

Include only when gaseous natural gas is burned on site for heat treatment, drying or process heat attributable to the lot.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_energy`

###### Industrial oxygen for oxygen-assisted cutting (`industrial_oxygen`)

Include only when industrial oxygen is supplied to an on-site oxygen-assisted cutting operation for the declared lot.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered cylinder or bulk-supply volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Site-generated stainless-steel fabrication scrap (`stainless_steel_scrap`)

Include only for the stainless-sheet route; record segregated offcuts and rejected pieces leaving the process.

- Selected flow: Stainless-steel scrap (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated stainless-steel scrap mass leaving the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`

###### Aluminium fabrication scrap (`aluminium_scrap`)

Include only for the aluminium route; record segregated offcuts and rejected pieces before recycling or disposal.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated aluminium scrap mass leaving the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`

###### ABS moulding and trimming scrap (`abs_production_scrap`)

Include only for on-site ABS moulding; keep clean regrind internally recirculated out of gross output until it leaves the boundary.

- Selected flow: ABS plastic production scrap (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured ABS runners, trimming scrap and rejected mouldings leaving the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`

###### Wastewater from aqueous cleaning (`wastewater`)

Include when spent bath, rinse water or other aqueous cleaning effluent leaves the process; disclose treatment state and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge mass, or measured volume converted using documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`fossil_carbon_dioxide`)

Include only the direct fossil carbon dioxide released by on-site combustion of the natural gas recorded in `natural_gas`; exclude upstream grid and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Natural-gas quantity multiplied by a documented site or jurisdiction combustion factor and oxidation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`

### Process: Electronics integration and calibration (`electronics_calibration`)

#### Inputs

##### Product flows

###### Printed wire board incorporated into the part (`printed_wire_board`)

Include only when a printed wire board is physically incorporated into the saleable part; disclose board design and supplier.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared board mass incorporated into accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics_records`

###### Electricity for electronics integration and calibration (`electronics_electricity`)

Include electricity for soldering, programming, calibration benches and functional tests attributable to the part.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or documented equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics_records`

###### Methane calibration gas (`methane_calibration_gas`)

Include only when purchased methane is consumed as a calibration medium and crosses the foreground boundary.

- Selected flow: Methane `59aebe7f-6f66-41b4-aa71-49bea068dc7b`
- Flow property / unit: Mass / kg
- Amount rule: Supplier record or cylinder mass balance for methane consumed by the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_media`

###### Carbon-dioxide calibration gas (`carbon_dioxide_calibration_gas`)

Include only when purchased carbon dioxide is consumed as a calibration medium; do not confuse it with the direct elementary emission row.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Supplier record or cylinder mass balance for carbon dioxide consumed by the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_media`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Final assembly, inspection and packing (`final_assembly_packing`)

#### Inputs

##### Product flows

###### Electricity for final assembly, inspection and packing (`final_assembly_electricity`)

Record purchased electricity for assembly tools, inspection equipment and packing operations attributable to the released lot.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or documented equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

###### Corrugated board boxes used as primary packaging (`corrugated_board_boxes`)

Include only when corrugated board boxes are supplied with the factory-gate product; keep box mass outside the reference amount.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-record box mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished meter or counter part/accessory (`finished_meter_part`)

This is the reference-product output. Record only saleable dedicated parts or accessories that satisfy the declared release criteria; keep packaging mass separate.

- Selected flow: Parts and accessories for the goods of subclasses 48263 and 48264 (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of conforming released parts, excluding primary packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished part output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Separately metered products, routes and production lots | Subdivide processes and use lot, machine or line records before allocating shared burdens. |  |
| `allocation_shared_operations` | Shared electricity, water and support operations | Allocate only the residual shared quantity using a documented causal driver such as machine time, batch time or measured throughput; mass allocation is a fallback and must be justified. |  |
| `allocation_scrap` | Recoverable production scrap | Record scrap as an explicit waste output; do not subtract an avoided virgin-material credit inside the foreground inventory. Apply recycling or substitution only in the downstream modelling system and disclose it. |  |
| `allocation_no_complete_instrument_credit` | Parts incorporated into complete instruments at the same site | Keep the part-production dataset separate from complete-instrument assembly and do not assign complete-instrument revenue or function to the part reference flow. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `part_fabrication` | material inputs | receiving, stores issue and BOM records | material identity; grade; form; supplier; received mass; issued mass; returned mass; lot id | Reconcile calibrated scale records, stores transactions and production BOM | kg | each lot | representative production period, normally at least 12 months or all lots for shorter campaigns | each reporting site and outsourced conversion step | Sum net issued mass by atomic material flow and normalize to conforming output | purchase specification, scale calibration, BOM revision and stock reconciliation |
| `cp_fabrication_energy` | `part_fabrication` | electricity, natural gas and industrial oxygen | meters, invoices, cylinder records and equipment logs | meter start/end; energy or gas quantity; reference conditions; equipment hours; lot id | Submeter where available; otherwise reconcile invoice totals to documented causal drivers | MJ or m3 | monthly and each lot allocation | same period as output records | each reporting site | Subtract unrelated use, allocate residual shared use by documented driver and normalize to conforming output | meter calibration, invoice reconciliation and allocation workbook |
| `cp_cleaning_records` | `part_fabrication` | process water, sodium hydroxide and wastewater | bath make-up, chemical issue, water meter and discharge records | water quantity; solution quantity; NaOH fraction; bath changes; discharge quantity; density; treatment state | Record each bath make-up and discharge; reconcile with site water balance | kg | each bath change and monthly reconciliation | same period as output records | each reporting site | Convert solution to pure NaOH equivalent, sum make-up and discharge, normalize to conforming output | chemical certificate, meter/scale calibration and water-balance check |
| `cp_fabrication_wastes` | `part_fabrication` | segregated material scrap | scrap-bin weights, rejection logs and shipment records | material identity; grade; gross and tare mass; internal regrind; destination; lot id | Weigh segregated outputs and exclude internal recirculation until it crosses the boundary | kg | each shipment with lot allocation | same period as output records | each reporting site | Sum net outward scrap by atomic material and normalize to conforming output | calibrated scale, rejection record and waste transfer record |
| `cp_combustion_emissions` | `part_fabrication` | direct fossil carbon dioxide | fuel meter and emission-factor record | gas volume; reference conditions; factor; factor unit; oxidation basis; fossil fraction | Apply `calc_direct_fossil_co2` to collected natural-gas use | kg | each reporting period | same period as gas records | each reporting site with direct combustion | Calculate, sum and normalize to conforming output | factor source retained in dataset, unit check and independent recalculation |
| `cp_electronics_records` | `electronics_calibration` | printed wire board and electricity | supplier BOM, scale, equipment log and submeter | board identity; board mass; supplier; accepted quantity; electricity; operating time; lot id | Reconcile incorporated board mass and electronics-line electricity to accepted parts | kg and MJ | each lot | same period as output records | each applicable line and site | Sum accepted incorporated board mass and attributable electricity, then normalize | supplier declaration, BOM revision, scale/meter calibration and yield reconciliation |
| `cp_calibration_media` | `electronics_calibration` | methane and carbon-dioxide calibration gases | cylinder receipt, pressure or mass record and calibration log | gas identity; purity; cylinder start/end mass or pressure; reference conditions; vent/recovery status; lot id | Use cylinder mass balance or calibrated gas-flow measurement | kg | each cylinder change and lot | same period as calibration records | each calibration line | Subtract returned or recovered quantity, assign consumed quantity to calibrated accepted parts and normalize | supplier certificate, cylinder record, instrument calibration and leak check |
| `cp_final_release` | `final_assembly_packing` | assembly electricity, corrugated boxes and reference product | submeter/equipment log, packaging issue, scale and release records | electricity; box mass; conforming product net mass; rejects; drawing/model; release status; lot id | Reconcile final-operation inputs with calibrated net product weights and quality release | MJ and kg | each lot | same period as all input records | each reporting site | Sum released net product mass, keep packaging separate, allocate final electricity and normalize all values | scale/meter calibration, packing specification, release certificate and mass-balance review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | Every inventory row | Normalized amount = lot amount / conforming finished-part net mass; report per 1 kg reference product. | lot flow amount; `finished_meter_part` net mass | normalized inventory amount |  |
| `calc_pure_naoh` | `sodium_hydroxide` | Pure NaOH equivalent = purchased solution mass × supplier-declared NaOH mass fraction. | solution mass; NaOH mass fraction | kg sodium hydroxide |  |
| `calc_direct_fossil_co2` | `fossil_carbon_dioxide` | Direct fossil CO2 = natural-gas quantity × documented combustion factor × oxidation factor × fossil fraction, with compatible units and reference conditions. | `natural_gas`; factor; oxidation factor; fossil fraction | kg direct fossil carbon dioxide |  |
| `calc_material_balance` | Material-route validation | For each material, reconcile gross input = incorporated material + outward segregated scrap + measured other losses ± inventory change; investigate unexplained residuals. | material input; product composition; scrap; other loss; stock change | material-balance residual and completeness finding |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Host-instrument family, part name/function, drawing or model, principal material, route and release criteria must be traceable to the reported lot. | approved drawing, BOM, specification and release record |
| `dq_temporal_alignment` | All foreground rows | Inputs, outputs and allocation drivers must cover the same representative production period; shorter campaigns must include all produced lots and disclose the period. | period reconciliation and lot register |
| `dq_measurement_control` | Metered and weighed rows | Use calibrated instruments or disclose estimation; preserve source units, reference conditions and conversion factors. | calibration certificates, raw meter/scale records and conversion workbook |
| `dq_completeness` | Process map and inventory | Declare each process and atomic row as included, not applicable or unresolved; reconcile material, water and energy records to site or line totals. | completeness matrix, mass balances and invoice reconciliation |
| `dq_supplier_matching` | Purchased inputs | Match upstream datasets to material grade, product state, supplier geography and technology; document proxies as data-quality limitations. | supplier specification and dataset selection record |
| `dq_uncertainty_disclosure` | Rows without external ranges | Retain foreground variability statistics when multiple lots exist and disclose that this PCR provides no external quantitative range. | lot-level dataset, summary statistics and review note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | Product and reference flow | Confirm that output is a separately marketed part/accessory for a declared CPC 48263 or 48264 host good, that complete instruments are excluded and that results are normalized to 1 kg net conforming output. | `un-cpc-3-0-2025` |
| `validate_atomic_inventory` | Process inventory | Confirm every selected flow is one atomic physical, chemical, waste, energy or elementary exchange and every conditional row states its route applicability. |  |
| `validate_uuid_and_units` | UUID-bearing rows | Confirm UUID, public state 100 identity, flow type, property, unit group and Chinese baseName; leave unresolved identities blank rather than substituting proxies. |  |
| `validate_process_coverage` | Process map | Confirm both required processes are represented and the conditional electronics/calibration process is included exactly when its condition applies. |  |
| `validate_balances` | Materials, water and fuel | Review material-balance residuals, water input versus wastewater and retained/evaporated water, and natural-gas use versus direct fossil CO2 calculation; explain material residuals rather than forcing closure. |  |
| `validate_allocation_and_boundary` | Shared operations and system boundary | Confirm shared burdens use documented causal drivers, upstream purchased-input datasets are linked, downstream life-cycle stages are excluded and no avoided-recycling credit is embedded in foreground amounts. |  |
| `validate_range_disclosure` | Quantitative QA | Confirm that foreground values are not presented as source-backed external ranges and that unresolved important-flow range evidence needs remain disclosed until two independent compatible original sources are reviewed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared dedicated meter/counter part or accessory at the factory gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review for representativeness and aggregation |
| allowed_use | Product-specific or supplier/site-specific LCA of parts and host instruments when identity, route, geography, technology, time and allocation are compatible |
| excluded_use | Complete instruments; unrelated precision-instrument parts; service-life or functional-equivalence comparisons without additional performance evidence; generic substitution across materially different parts |
| required_metadata | canonical PCR id; CPC reference; host-instrument family; part function and drawing/model; material grades; manufacturing route; electronics and calibration status; geography; period; net reference mass; packaging status; upstream dataset matches; allocation drivers; unresolved UUIDs |
| required_quality_disclosure | Primary-data share; measurement and estimation methods; temporal coverage; material/water/energy balance findings; supplier-data gaps; allocation; scrap destination; wastewater treatment state; unresolved range evidence; uncertainty and variability |
| update_trigger | Change in host-instrument compatibility, drawing or BOM, principal material, electronics design, fabrication technology, calibration medium, supplier geography, energy mix, allocation method, packaging, or a material change in measured foreground performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved and hash-verified 2026-09-07) | Official CPC 48283 product identity and scope linkage to goods of subclasses 48263 and 48264; not used for inventory amounts or ranges |
