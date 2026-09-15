---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-of-goods-of-subclass-48313
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of goods of subclass 48313

## 1. Scope and Applicability

This PCR applies to separately supplied parts of frames and mountings for spectacles, goggles, or similar eyewear. The part must be identifiable by its function in a frame or mounting, such as a temple, bridge, rim component, end piece, nose-pad arm, hinge component, or other unfinished or finished frame/mounting component. The official CPC 3.0 structure establishes the parent goods and the parts relationship (`un-cpc-3-0-structure-2025`).

The PCR covers gate-to-gate manufacture from purchased, specification-controlled material stock and consumables through forming, machining, joining when performed, cleaning, surface finishing when performed, inspection, and packaging at the manufacturing site. Material production, purchased component production, electricity generation, water supply, and off-site treatment remain upstream or downstream linked datasets.

Complete frames or mountings, complete spectacles or goggles, ophthalmic lenses, nose pads supplied as general rubber or plastics articles without a declared frame-part function, retail cases, repair services, and production equipment are excluded. A foreground data package for a material or technology not represented by an inventory card shall add its actual exchange as a new concrete atomic row; it shall not substitute an umbrella material or utility row.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-of-goods-of-subclass-48313 |
| classification_refs | CPC 3.0: 48352, Parts of goods of subclass 48313 |
| covered_products | Separately supplied components whose declared function is in a frame or mounting for spectacles, goggles, or similar eyewear |
| excluded_products | Complete frames or mountings; complete spectacles or goggles; optical lenses; cases; repair services; undifferentiated material stock |
| representative_product | A conforming finished temple, bridge, rim component, end piece, nose-pad arm, hinge component, or another declared frame/mounting part |
| production_route | Forming or machining of specification-controlled polymer or metal stock, with route-specific cleaning, joining, polishing, coating, inspection, and packaging |
| market_state | Finished or semi-finished, separately supplied frame/mounting part at the factory gate; net product mass excludes packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide conforming parts that perform the declared structural, connecting, positioning, or wearing function in a frame or mounting for spectacles, goggles, or similar eyewear |
| How much | 1 kg net mass of conforming finished parts at the factory gate |
| How well | Meets the declared drawing, dimensions and tolerances, material and grade, surface finish, coating specification when applicable, and inspection acceptance criteria |
| How long or cycle | One completed manufacturing lot; service life is not asserted and shall be declared only in a downstream assembled-product study |
| reference_flow_link | The output row `finished_frame_part` is the quantitative reference and equals 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Parts of frames and mountings for spectacles or goggles |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part type and frame function; material family, composition and grade; finished or semi-finished state; drawing or specification identifier; dimensions and tolerances; surface finish and coating; joining route; net mass and mass-determination method; manufacturing geography and technology; lot and time period; packaging inclusion status |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | `finished_frame_part` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine the net mass of accepted finished parts after all included finishing steps and before packaging; exclude boxes, separators, pallets, fixtures, and rejected parts. |
| `count_to_mass` | Product and packaging records reported by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using a contemporaneous, documented average mass from a representative weighed sample for the same part or packaging specification; retain counts, sample size, weighing result, and conversion. |
| `electricity_energy` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered kWh and convert to MJ using exactly 3.6 MJ per kWh; disclose the meter boundary and any allocation from a shared meter. |
| `water_mass` | `process_water` and `finishing_wastewater` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records; when volume is measured, convert with measured density at the recorded condition or a documented water-density assumption and retain the original volume. |
| `mass_normalization` | Every mass-based inventory row | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg per kg reference flow | Normalize the lot quantity to 1 kg of accepted `finished_frame_part`; do not include the mass of rejects or packaging in the denominator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased material stock, purchased components, chemicals, water, electricity, and packaging at the manufacturing-site receiving boundary, each identified by composition or specification and supply state |
| starting_condition_role | Foreground entry condition; upstream production and delivery are represented by linked datasets rather than repeated inside the foreground process |
| product_classification_scope | Parts of CPC 48313 frames and mountings; complete frames, complete eyewear, lenses, and unrelated generic articles are outside the product output scope |
| recursive_input_rule | A purchased part in the same product category that is incorporated into the output shall be recorded as its own concrete product input with supplier identity and an upstream dataset; it shall not be merged with the reference product or recursively re-manufactured in this foreground model |
| upstream_dataset_requirement | Link every purchased product input and energy input to a geography-, technology-, composition-, and supply-state-representative upstream dataset; disclose proxies and unmatched material grades |
| disclosure | Declare the part type, bill of materials, material grades, purchased-component content, included operations, surface-treatment and coating routes, site utilities, air and wastewater controls, scrap destinations, packaging, geography, technology, lot period, and any shared-facility allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_product_scope` | Product output identity | The reference output shall be a separately supplied part of a frame or mounting, not a complete frame, complete spectacles or goggles, or an optical lens. | `un-cpc-3-0-structure-2025` |
| `sb_gate_to_gate` | Foreground manufacturing boundary | Include all on-site forming, machining, joining, cleaning, polishing, surface finishing, inspection, rework, internal material handling, utility use, direct releases, waste generation, and packaging performed for the declared production lot. |  |
| `sb_upstream_links` | Purchased inputs | Exclude production of purchased materials, components, chemicals, electricity, water, and packaging from the foreground process and connect them through representative upstream datasets. |  |
| `sb_direct_releases` | Direct emissions and wastes | Record direct air emissions, aqueous waste, segregated offcuts, metal scrap, and rejected parts before off-site treatment; do not replace direct exchanges with an upstream electricity emission profile. |  |
| `sb_capital_goods` | Infrastructure and tooling | Exclude buildings, durable machinery, dies, moulds, and reusable fixtures unless the study goal explicitly includes them and separately reports the inclusion. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame_part_manufacturing` | Frame or mounting part manufacture | `required` | Always include operations performed from received stock through an unpacked conforming part; route-specific flow cards apply only when their named material or operation is used | Foreground forming, machining, cleaning, joining, polishing, and finishing | kg unpacked conforming part transferred to inspection and packaging |
| `inspection_packaging` | Final inspection and packaging | `required` | Always include final acceptance, recorded rework disposition, and packaging at the reporting site | Foreground product release and factory-gate packaging | 1 kg accepted finished part output |

### Process: Frame or mounting part manufacture (`frame_part_manufacturing`)

#### Inputs

##### Product flows

###### Cellulose acetate sheet stock (`cellulose_acetate_sheet`)

Record this exchange only for a route that cuts or machines cellulose acetate sheet into the declared frame or mounting part. Material composition, plasticizer system, colour, thickness, supplier, and recycled content shall be retained.

- Selected flow: Cellulose acetate sheet
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass minus verified returns of unchanged sheet stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_stock`

###### Stainless-steel wire stock (`stainless_steel_wire`)

Record this exchange only when the declared part is formed or machined from stainless-steel wire. Retain alloy grade, diameter, temper, supplier, and recycled-content claim; do not substitute non-alloy or low-alloy steel wire.

- Selected flow: Stainless-steel wire
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass minus verified returns of unchanged wire stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_stock`

###### Purchased electricity (`electricity`)

Record electricity delivered across the manufacturing meter boundary for forming, machining, joining, cleaning, polishing, finishing, ventilation, and attributable support equipment. Upstream electricity emissions are not direct elementary outputs of this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to the production lot, converted according to `electricity_energy`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`

###### Process water (`process_water`)

Record process water only when it crosses the manufacturing boundary for cleaning, rinsing, cooling, polishing, or bath make-up. Closed-loop recirculation is not repeatedly counted; only make-up water crosses the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured make-up water attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide only when it is introduced to an alkaline cleaning or surface-treatment bath used for the declared part. Retain product concentration and calculate dry sodium-hydroxide mass from solution mass and concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Dry sodium-hydroxide mass in bath make-up and replenishment attributable to the lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bath_chemicals`

###### Acrylic varnish coating (`acrylic_varnish`)

Record acrylic varnish only for parts coated with that specific product family. Retain formulation, non-volatile fraction, application and curing route, colour when relevant, supplier, and returned or recovered varnish.

- Selected flow: Acrylic varnish `56a0ef1c-80ef-4e0c-b690-c8aefb4c7e8e`
- Flow property / unit: Mass / kg
- Amount rule: Net varnish issued to the coating operation after verified returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_material`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unpacked conforming frame or mounting part (`unpacked_frame_part_output`)

Record the net mass of conforming parts transferred from manufacturing to final inspection and packaging. This is an internal foreground transfer and shall equal the corresponding input to `inspection_packaging` after any documented transfer loss.

- Selected flow: Unpacked conforming frame or mounting part
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass transferred to final inspection and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_transfer`

##### Waste flows

###### Cellulose acetate offcuts (`cellulose_acetate_offcuts`)

Record clean or contaminated cellulose acetate offcuts separately when the cellulose acetate route is used. Do not combine them with metal scrap, rejects, wastewater, or packaging waste.

- Selected flow: Cellulose acetate offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured offcut mass leaving the foreground manufacturing process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_measurements`

###### Stainless-steel manufacturing scrap (`stainless_steel_scrap`)

Record grade-segregated stainless-steel scrap when the stainless-steel route is used. Retain the alloy grade, contamination state, internal reuse quantity, and destination; do not mix this row with other metal scrap.

- Selected flow: Stainless-steel manufacturing scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured stainless-steel scrap leaving the foreground process after deducting verified internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_measurements`

###### Metal-finishing wastewater with suspended solids (`finishing_wastewater`)

Record this aqueous waste only when cleaning, rinsing, polishing, or metal finishing creates a wastewater stream that crosses the site boundary or enters on-site treatment. Retain water mass, suspended-solids concentration, dissolved-metal data when applicable, treatment route, and discharge or transfer point.

- Selected flow: Metal-finishing wastewater with suspended solids
- Flow property / unit: Mass / kg
- Amount rule: Measured wastewater mass transferred to on-site or off-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`nmvoc_to_air`)

Record direct NMVOC released from acrylic-varnish application and curing only when that route is used. Use site measurements or the documented solvent mass-balance calculation; exclude upstream electricity and coating-production emissions.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct NMVOC mass released to air, calculated from collected site measurements or coating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`

###### PM2.5 to air (`pm25_to_air`)

Record direct PM2.5 released from cutting, machining, or polishing only when those operations generate a measured or calculated release after abatement. Retain material composition, release point, control equipment, and measurement basis.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct PM2.5 mass released to air after abatement, calculated from collected measurements
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`

### Process: Final inspection and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Unpacked conforming frame or mounting part (`unpacked_frame_part_input`)

Record the net mass received from `frame_part_manufacturing`. This internal transfer shall match `unpacked_frame_part_output` after any separately documented transfer loss.

- Selected flow: Unpacked conforming frame or mounting part
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass entering final inspection and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_transfer`

###### Corrugated board boxes (`corrugated_board_boxes`)

Record corrugated board boxes that leave the factory with the reference product. Retain box grade, recycled content, dimensions, supplier, number of reuses if applicable, and measured or sampled mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured or count-converted mass of corrugated board boxes shipped with the lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished frame or mounting part (`finished_frame_part`)

This is the reference product leaving the factory gate after final acceptance. The product flow UUID remains unresolved because the audited public candidates represent complete frames or complete spectacles rather than component parts.

- Selected flow: Parts of frames and mountings for spectacles or goggles
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net mass of accepted finished parts for the normalized dataset
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg accepted finished frame or mounting part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_product`

##### Waste flows

###### Rejected frame or mounting part (`rejected_frame_part`)

Record parts rejected at final inspection that leave the foreground process for recycling, treatment, or disposal. Reworked parts returned to manufacturing are internal transfers and are not counted again as waste unless finally rejected.

- Selected flow: Rejected frame or mounting part
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of finally rejected parts leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted `finished_frame_part`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rejects`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared and multi-output operations | Avoid allocation by separately metering product-specific forming, finishing, inspection, rework, waste, and packaging operations whenever practicable. |  |
| `allocation_causal` | Unavoidable shared utility or process records | Use a documented physical driver that reflects causality, in this order when applicable: machine time and rated or measured demand, treated surface area, bath throughput, inspected count with verified part mass, then net accepted product mass. |  |
| `allocation_scrap` | Offcuts and metal scrap | Report scrap as a waste output at the point it leaves the foreground boundary. Do not subtract revenue or an avoided primary-material credit inside this gate-to-gate dataset; any recycling substitution belongs to the consistent downstream system model. |  |
| `allocation_rework` | Rework loops | Assign measured rework inputs and wastes to the lot that generated the nonconformity; do not count internally reworked mass as a second product output. |  |
| `allocation_documentation` | Every allocated row | Retain the shared total, allocation population, driver values, formula, resulting factor, and reconciliation to the original record. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_stock` | `frame_part_manufacturing` | `cellulose_acetate_sheet`; `stainless_steel_wire` | purchase, issue, return, and stock records | material identity; composition or grade; supplier; lot; opening stock; receipts; issues; unchanged returns; closing stock; mass | Reconcile lot-specific issues and returns to stock movement and production orders | kg | Each issue and lot close | Complete reporting lot and reconciliation period | All production lines making the declared part | Net consumed mass = issues minus unchanged returns, reconciled to stock; normalize by accepted product mass | invoices; material certificates; calibrated scale records; signed stock reconciliation |
| `cp_electricity` | `frame_part_manufacturing` | `electricity` | electricity meter and production-hour records | meter id; opening and closing reading; kWh; time; production order; shared loads; allocation driver | Read dedicated meters or allocate a reconciled shared meter with the declared causal driver | kWh and MJ | At least each shift and lot close | Complete lot plus shared-meter reconciliation period | Included manufacturing operations and attributable support equipment | Subtract documented non-production loads, allocate shared use, convert kWh to MJ, normalize by accepted mass | meter calibration; bills; reading logs; allocation worksheet |
| `cp_water` | `frame_part_manufacturing` | `process_water` | water meter, tank, or batch-make-up records | meter or vessel id; volume or mass; density basis; operation; lot; recirculation; make-up quantity | Measure only make-up water crossing the boundary; reconcile to bath and rinse records | kg or m3 | Each batch or daily, plus lot close | Complete reporting lot | Included cleaning, rinsing, cooling, polishing, and bath make-up | Convert volume to mass when needed, allocate shared use, normalize by accepted mass | meter or vessel calibration; batch sheets; density record; reconciliation |
| `cp_bath_chemicals` | `frame_part_manufacturing` | `sodium_hydroxide` | bath make-up, analysis, replenishment, issue, and return records | product identity; solution mass; concentration; bath id; make-up; replenishment; return; lot | Reconcile issued solution to bath records and calculate dry chemical mass | kg solution and mass fraction | Every make-up and replenishment | Complete bath campaigns overlapping the reporting lot | Baths used for the declared part | Dry NaOH mass = net solution mass multiplied by measured or supplier concentration; allocate by bath throughput when shared | supplier certificate; concentration test; calibrated scale; bath log |
| `cp_coating_material` | `frame_part_manufacturing` | `acrylic_varnish` | coating issue, return, formulation, and application records | product identity; batch; issued mass; returned mass; non-volatile fraction; application route; coated part lot | Weigh issued and returned varnish and reconcile to coating operation | kg | Each coating batch | Complete coating batches for the reporting lot | Coating lines used for the declared part | Net varnish input = issued minus verified unchanged return; normalize by accepted mass | supplier specification; scale calibration; batch sheet; issue-return reconciliation |
| `cp_production_transfer` | `frame_part_manufacturing`; `inspection_packaging` | `unpacked_frame_part_output`; `unpacked_frame_part_input` | production-order transfer records | part id; lot; accepted status at transfer; count; sampled average mass or direct mass; sending and receiving timestamps | Weigh the transfer directly or use count-to-mass conversion under `count_to_mass`; reconcile both processes | kg | Each transfer | Complete reporting lot | Manufacturing and inspection/packaging boundary | Sum transferred net mass and reconcile sending and receiving records | calibrated scale; sample record; signed transfer record; discrepancy investigation |
| `cp_waste_measurements` | `frame_part_manufacturing` | `cellulose_acetate_offcuts`; `stainless_steel_scrap` | segregated waste container and transfer records | waste identity; material or grade; contamination; container tare and gross mass; internal reuse; destination; lot | Weigh each segregated stream before it leaves the foreground process | kg | Each container transfer | Complete reporting lot | All included manufacturing operations | Sum net waste mass by atomic stream after deducting verified internal reuse; normalize by accepted mass | scale calibration; photos or labels; transfer notes; recycler receipt |
| `cp_wastewater` | `frame_part_manufacturing` | `finishing_wastewater` | tank, discharge, and transfer records | source operation; volume or mass; density; suspended solids; dissolved metals when applicable; treatment route; destination; date; lot | Measure wastewater crossing to on-site treatment, sewer, or off-site transfer without double counting recirculation | kg and concentration units | Each discharge or transfer | Complete reporting lot and overlapping bath campaign | Included wet operations | Convert to mass, allocate shared tanks by documented throughput, normalize by accepted mass | meter or tank calibration; laboratory results; manifest or discharge record; mass-balance reconciliation |
| `cp_air_emissions` | `frame_part_manufacturing` | `nmvoc_to_air`; `pm25_to_air` | stack or workplace exhaust tests and operation records, or documented material balance | pollutant; concentration; gas flow; duration; coating input and solvent fraction; capture and abatement efficiency; operating hours; lot | Prefer representative measured concentration and gas flow; use a documented coating or particulate mass balance only when measurement is unavailable | kg pollutant | Each representative test and every lot calculation | Tests representative of the reporting technology and full lot operating hours | All release points attributable to the declared part | Calculate pollutant mass by `calc_air_emissions`, reconcile controls and bypasses, normalize by accepted mass | laboratory report; instrument calibration; operating log; control-equipment records; calculation worksheet |
| `cp_packaging` | `inspection_packaging` | `corrugated_board_boxes` | packaging issue and shipment records | box specification; supplier; count; sampled or direct mass; reused count; lot | Weigh boxes or apply `count_to_mass` for the same box specification | kg | Each packaging lot | Complete reporting lot | Final packaging operation | Sum boxes shipped with the product, adjust documented reuse allocation, normalize by accepted mass | purchase record; box specification; calibrated scale; sample worksheet |
| `cp_finished_product` | `inspection_packaging` | `finished_frame_part` | final inspection and shipping release records | part id; lot; accepted count; net mass; specification; packaging tare; release status | Weigh accepted parts before packaging or use validated count-to-mass conversion | kg | Each released lot | Complete reporting lot | Final acceptance boundary | Sum accepted net product mass; set normalized reference output to exactly 1 kg | calibrated scale; acceptance record; sample worksheet; shipping release |
| `cp_rejects` | `inspection_packaging` | `rejected_frame_part` | inspection disposition and waste transfer records | part id; lot; reject reason; count; net mass; rework status; destination | Weigh finally rejected parts and reconcile reworked quantities to production records | kg | Each disposition and lot close | Complete reporting lot | Final inspection and any linked rework area | Sum final reject mass only; exclude successful rework; normalize by accepted mass | inspection record; scale calibration; rework reconciliation; transfer note |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | Every lot-level inventory amount | normalized amount = attributable lot amount / accepted net mass of `finished_frame_part` | attributable lot amount; accepted net product mass | kg, MJ, or pollutant kg per 1 kg reference flow |  |
| `calc_electricity_mj` | `electricity` | electricity MJ = metered electricity kWh × 3.6; then apply the documented shared-meter allocation before normalization | kWh; allocation driver and factor; accepted net product mass | MJ per 1 kg reference flow |  |
| `calc_water_mass` | `process_water`; `finishing_wastewater` | water-stream mass = measured volume × documented density when direct mass is unavailable | measured volume; density and condition | kg per 1 kg reference flow |  |
| `calc_dry_naoh` | `sodium_hydroxide` | dry NaOH mass = net solution mass × measured or supplier mass fraction of NaOH | issued solution mass; unchanged return; NaOH mass fraction | kg dry NaOH per 1 kg reference flow |  |
| `calc_air_emissions` | `nmvoc_to_air`; `pm25_to_air` | For measurement, released mass = concentration × actual exhaust volume over the operating period. For an accepted material balance, released mass = relevant material input minus mass retained in product, collected as waste, recovered, or destroyed, with every term measured or documented. | concentration; gas flow; duration; material input; retained, recovered, waste, and destroyed fractions; accepted net product mass | kg pollutant per 1 kg reference flow |  |
| `calc_mass_reconciliation` | Manufacturing lot | material inputs = accepted and rejected product mass + separately measured waste and direct mass releases + documented stock change, within the declared measurement uncertainty | atomic material inputs; products; wastes; mass emissions; stock change; uncertainty | reconciled mass-balance statement and unexplained difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Identify the part's frame/mounting function and demonstrate that it is not a complete frame, complete eyewear item, or lens. | drawing or specification; bill of materials; product photograph or catalogue; final inspection record |
| `dq_route_materials` | Bill of materials | Represent every material and purchased component crossing the boundary as its own atomic exchange. Add a concrete row for any route material not represented above; never map it to an umbrella material row. | reconciled bill of materials; purchase and issue records; supplier certificates |
| `dq_temporal` | All foreground rows | Use records covering the same reporting lot or a documented representative period; disclose substitutions, shutdowns, start-up losses, rework campaigns, and shared-facility periods. | lot genealogy; dated records; representativeness statement |
| `dq_completeness` | Mass and energy inventory | Reconcile material mass, accepted output, rejects, wastes, direct mass releases, electricity, and water against source records; investigate unexplained differences beyond declared instrument and sampling uncertainty. | reconciliation worksheet; uncertainty statement; corrective-action record |
| `dq_emission_identity` | Direct air emissions | Preserve pollutant identity, receiving compartment, particle size for PM2.5, release point, measurement method, control status, and test representativeness. | test report; calibration; stack or exhaust map; operating log |
| `dq_allocation` | Shared records | Use the allocation hierarchy in section 7 and retain the original total and driver population so a reviewer can reproduce every factor. | meter total; driver records; formula; reconciliation |
| `dq_uuid_status` | UUID-bearing and unresolved rows | Use only audited state-100 Tiangong UUIDs with matching semantics, flow type, property, and unit. Keep the reference product and other unresolved identities UUID-empty until an exact public record is verified. | UUID audit record; unresolved-item register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | Reference flow | Confirm `finished_frame_part` is exactly 1 kg net accepted part mass and excludes packaging, rejects, and complete frames or eyewear. |  |
| `validation_qualifiers` | Dataset metadata | Reject a data package that omits any required qualifier listed in section 3. |  |
| `validation_atomicity` | Process inventory | Confirm every exchange is one concrete product, waste, or elementary flow; reject umbrella materials, combined utilities, combined wastes, and unspecified emissions. |  |
| `validation_conditions` | Conditional routes | Confirm each conditional material, chemical, waste, and emission row is present when its named route occurs and absent or explicitly not applicable when that route demonstrably does not occur. |  |
| `validation_internal_transfer` | `unpacked_frame_part_output`; `unpacked_frame_part_input` | Reconcile the two internal-transfer amounts and explain any measured loss without counting the transfer as an external product input or output. |  |
| `validation_mass_balance` | Manufacturing lot | Recalculate `calc_mass_reconciliation`; report the unexplained difference and declared measurement uncertainty rather than forcing the balance. |  |
| `validation_emissions` | `nmvoc_to_air`; `pm25_to_air` | Confirm direct emissions are based on representative foreground measurements or a complete documented material balance and are not copied from upstream energy datasets. |  |
| `validation_allocation` | Shared process records | Reproduce each allocation from the original total, driver population, formula, and factor and confirm that allocated amounts sum to the original total. |  |
| `validation_sources` | Classification and external evidence | Confirm the cited official classification locator resolves to the declared CPC identities; treat all quantitative ranges as unresolved until the two-independent-source rule is met. | `un-cpc-3-0-structure-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground production dataset suitable for release as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Assembly models for spectacles, goggles, and similar eyewear; frame or mounting production models; supply-chain and product-footprint studies needing separately supplied component manufacture |
| allowed_use | Use for the declared part type, material grade, geometry, finish, technology, geography, and factory-gate boundary, or for an explicitly justified representative match |
| excluded_use | Complete frames, complete spectacles or goggles, lenses, retail cases, repair services, dissimilar material routes without added atomic exchanges, or use-phase and end-of-life claims not modelled here |
| required_metadata | Canonical PCR id; product and part identifiers; frame function; material composition and grade; drawing/specification; dimensions and tolerances; finish/coating; joining route; net-mass method; bill of materials; site and geography; technology; time and lot; upstream dataset matches; allocation; waste destinations; air and wastewater controls; packaging status; unresolved UUIDs |
| required_quality_disclosure | Primary-record coverage; meter and scale calibration; count-to-mass sampling; mass reconciliation and uncertainty; shared-resource allocation; emission measurement or mass-balance method; data gaps; proxies; route conditions; representativeness; review status |
| update_trigger | Change in part function, material family or grade, geometry, forming or joining technology, surface treatment or coating, abatement, site or grid geography, packaging, allocation driver, upstream dataset match, exact Tiangong flow identity, or evidence sufficient to establish a reviewed range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official English identity for CPC 48313 and CPC 48352 and the parent-product/parts relationship |
