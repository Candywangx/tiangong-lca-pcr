---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.ball-or-roller-bearings
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ball or roller bearings

## 1. Scope and Applicability

This PCR applies to complete ball or roller bearings supplied as finished products. It covers radial and thrust configurations and conventional bearing variants that use balls or rollers between raceways, with cages, seals, shields, lubricant, or preservation treatment when those features are part of the sold bearing. It supports a cradle-to-factory-gate foreground data package normalized to net bearing mass.

Loose bearing parts, balls or rollers sold separately, bearing housings and plain shaft bearings, gears and gearboxes, ball or roller screws, magnetic bearings, fluid-film bearings, maintenance services, remanufacturing services, and use-phase performance are outside this PCR. A bearing unit is included only when its sold product is classified and reported as a complete ball or roller bearing; otherwise use the PCR for its actual product category. The CPC identity is supported by `un-cpc-3-0-structure-2025`, and the category boundary is consistent with `international-epd-pcr-2023-03`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.ball-or-roller-bearings |
| classification_refs | CPC 3.0: 43310, Ball or roller bearings (`un-cpc-3-0-structure-2025`) |
| covered_products | Complete finished bearings in which balls or rollers roll between bearing raceways; radial or thrust types; open, shielded, or sealed variants; lubricated or preservative-coated variants when sold in that state |
| excluded_products | Loose parts and rolling elements; bearing housings and plain bearings; gears, gearboxes, screws, couplings, and drives; magnetic or fluid-film bearings; services; downstream application equipment |
| representative_product | A finished, inspected ball or roller bearing with declared type, dimensions, mass, material specification, accuracy, internal clearance, load rating, sealing, and lubrication state |
| production_route | Forming and turning; heat treatment; grinding and honing or superfinishing; cleaning; assembly; lubrication or preservation as applicable; inspection; packaging, with outsourced steps represented by specific upstream datasets |
| market_state | Conforming finished bearing at the manufacturer factory gate, preserved and packaged as sold; packaging mass is reported separately from net bearing mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished ball or roller bearings at the manufacturer factory gate |
| How much | 1 kg net mass of conforming bearing product, excluding separately reported packaging |
| How well | Meets the declared product specification and has passed applicable dimensional, internal-clearance, surface, visual, free-running, vibration or noise, and marking inspections |
| How long or cycle | Factory-gate declared unit; no service-life cycle is represented. If a downstream study models use, it must separately declare application, load, speed, lubrication, environment, maintenance, and service-life assumptions. |
| reference_flow_link | The output row `final_bearing_output` is the reference flow and is normalized to exactly 1 kg. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer and site geography; reporting period; product designation; ball or roller type and subtype; radial or thrust arrangement; bore, outside diameter, and width; net bearing mass; ring and rolling-element material grades; cage material and presence; seal or shield state; lubricant type and fill; preservation state; accuracy and internal-clearance classes; basic load ratings or declared performance specification; integrated and outsourced manufacturing steps; allocation method; packaging composition and mass |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | Reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate net conforming bearing mass after final inspection and before adding separately reported packaging. Normalize every inventory exchange to 1 kg net bearing output. |
| `measurement_electricity` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the Tiangong energy property. Convert measured kWh to MJ by multiplying by 3.6 and retain the original meter records, meter boundary, and electricity supply mix. |
| `measurement_gas_volume` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at declared reference temperature and pressure. If records use mass or energy, use supplier- or meter-specific conversion data and disclose the conversion basis; do not apply an undocumented generic factor. |
| `measurement_water_mass` | Process water and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records. When meters report volume, convert using measured or documented site-specific density and preserve volume, density, temperature, and conversion records. |
| `measurement_material_balance` | Steel input, bearing output, steel chips, and steel swarf | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile received steel, work in progress, conforming output, rejects, chips, swarf, and stock change over the reporting period. Record oil, water, and abrasive retained in waste separately or disclose their inclusion in measured waste mass. |

## 5. System Boundary

The foreground boundary begins when steel, purchased parts, auxiliaries, energy, water, and packaging are received at the reporting manufacturing site or at a contracted operation attributed to the product. It ends with the conforming, preserved, inspected, and packaged bearing leaving the factory gate. The operation sequence and inspection stages follow the bearing-manufacturing descriptions in `skf-insert-bearings-18033`; material, auxiliary, energy, cleaning, packaging, and residual-product relevance follows `skf-green-bearings`.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered bearing-grade steel and any purchased bearing parts, auxiliaries, energy, process water, and packaging at the reporting site gate, with supplier, material grade, product state, recycled content when known, and upstream dataset identified |
| starting_condition_role | Foreground manufacturing input; extraction and production of purchased goods and energy are represented by linked upstream datasets rather than repeated inside the foreground process |
| product_classification_scope | Complete ball or roller bearings; loose parts and other power-transmission products remain outside the reference-product identity |
| recursive_input_rule | A purchased complete ball or roller bearing used as a component must be recorded once as an upstream product input with its own dataset and must not be recursively decomposed under this PCR unless the study intentionally replaces that supplier dataset with primary component records |
| upstream_dataset_requirement | Use supplier-specific datasets where available for bearing steel, purchased components, lubricant, preservation oil, packaging, electricity, natural gas, and water; otherwise use geographically, technologically, temporally, and materially representative datasets and disclose substitutions |
| disclosure | Declare which operations are on-site or outsourced, the incoming state of steel and parts, furnace and finishing technologies, cleaning route, lubrication and preservation state, rejects and rework, waste destinations, packaging, site geography, reporting period, and exclusions |

### System Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_operations | Include forming and turning, heat treatment, grinding and honing or superfinishing, cleaning, assembly, lubrication or sealing when applicable, inspection, preservation, and packaging when they are performed under the producer's control or attributed contract manufacturing. | `skf-insert-bearings-18033`; `skf-green-bearings` |
| `boundary_rule_2` | purchased_inputs | Link cradle-to-gate upstream datasets for every purchased material, component, auxiliary, energy carrier, water supply, and packaging input; do not treat the reporting-site gate as a zero-burden origin. | `skf-green-bearings`; `eu-recommendation-2021-2279` |
| `boundary_rule_3` | outsourced_steps | Represent an outsourced manufacturing step once, either as a supplier-specific process or within a purchased-component dataset. Do not also count the same energy, auxiliary, waste, or emission in the reporting-site inventory. | `skf-insert-bearings-18033` |
| `boundary_rule_4` | downstream_stages | Exclude distribution after the factory gate, mounting, operation, maintenance, replacement, remanufacturing, and end of life from this declared unit. A downstream model may add them only with separately declared application and scenario data. | `international-epd-pcr-2023-03` |
| `boundary_rule_5` | capital_goods_and_minor_flows | Do not apply an automatic mass or cost cut-off. Include measured production exchanges and disclose any excluded capital good or minor flow with a documented significance check for the intended study. | `eu-recommendation-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming_and_turning` | Component forming and turning | `required` | Model on-site records when rings or rolling elements are formed or turned by the reporting producer; otherwise link the supplier-specific component process and record no duplicate on-site burden. | Foreground material conversion and machining | Per 1 kg conforming finished bearing output |
| `heat_treatment` | Heat treatment | `required` | Model the actual electric, gas-fired, or outsourced route; the natural-gas and direct-combustion rows apply only to gas-fired equipment within the foreground boundary. | Foreground hardening and stabilization | Per 1 kg conforming finished bearing output |
| `grinding_honing_cleaning` | Grinding, honing, superfinishing, and cleaning | `required` | Model actual wet or dry finishing and aqueous or non-aqueous cleaning; the water and wastewater rows apply only when process water crosses the boundary. | Foreground precision finishing and cleaning | Per 1 kg conforming finished bearing output |
| `assembly_lubrication_preservation` | Assembly, lubrication, sealing, and preservation | `required` | Grease and preservation-oil rows apply only when those products are added within the foreground boundary; declare open, shielded, or sealed product state. | Foreground final assembly and protection | Per 1 kg conforming finished bearing output |
| `inspection_packaging` | Final inspection and packaging | `required` | Model the inspections required by the declared product specification and each packaging component actually used; the corrugated-box row applies only when used. | Foreground conformity release and factory-gate output | Per 1 kg conforming finished bearing output |

### Process: Component forming and turning (`forming_and_turning`)

#### Inputs

##### Product flows

###### Bearing-grade high-carbon chromium steel input (`bearing_steel_input`)

Record the mass of bearing-grade steel bar, tube, wire, forging, or other declared feedstock entering producer-controlled forming and turning. Keep alloy grade, metallurgical state, product form, supplier, recycled content when known, and upstream dataset with the foreground record.

- Selected flow: Bearing-grade high-carbon chromium steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured received mass less documented returns and reporting-period stock increase, attributed to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `skf-green-bearings`

###### Electricity for forming and turning (`forming_electricity`)

Record purchased or self-generated electricity delivered to forging, cold forming, turning, material handling, and directly attributable support equipment for this stage.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: measured stage electricity converted to MJ and attributed to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `skf-green-bearings`

##### Waste flows

No default waste input crosses this process boundary.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

Internal work-in-progress transfers are not external inventory exchanges; preserve them in the site mass balance and do not double count them as purchased products.

##### Waste flows

###### Steel machining chips from turning (`steel_machining_chips`)

Record segregated ferrous chips generated by turning and other chip-forming operations. Declare alloy grade, cutting-fluid contamination, on-site recovery, and destination.

- Selected flow: Steel machining chips `69609b56-5e59-4f7d-9847-2eae3ea031b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wet or dry chip mass, with measurement state declared, leaving the process for internal recovery or external treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `skf-green-bearings`

##### Elementary flows

Record any measured direct dust or other elementary emission as a separate species-specific row in the foreground data package; no category-generic default is imposed here.

### Process: Heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Electricity for heat treatment (`heat_treatment_electricity`)

Record electricity supplied to furnaces, quench circulation, washing, controls, and directly attributable heat-treatment support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: measured heat-treatment electricity converted to MJ and attributed to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `skf-insert-bearings-18033`

###### Gaseous natural gas for heat treatment (`natural_gas_heat_treatment`)

Record natural gas only when it is combusted in producer-controlled heat-treatment or directly attributable thermal equipment. Declare reference conditions, supplier, composition or calorific-value record, and furnace technology.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered gas volume at declared reference conditions; record zero and not-applicable evidence for a fully electric or outsourced route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas`
- Sources: `skf-insert-bearings-18033`

##### Waste flows

No default waste input crosses this process boundary. Spent quench oil, salt, or bath media must be added as separate chemically specific rows when used.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

Internal heat-treated work in progress is tracked in production records and is not duplicated as an external product flow.

##### Waste flows

Add each spent quench medium, furnace residue, or rejected heat-treated component as a separate concrete waste row when applicable.

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`fossil_co2_heat_treatment`)

Record only direct fossil carbon dioxide crossing to air from natural gas combusted within the foreground boundary. Do not copy upstream electricity or fuel-supply emissions into this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured stack mass or calculated fossil CO2 from metered fuel and supplier-specific carbon content according to `calc_direct_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion`
- Sources: `skf-green-bearings`

### Process: Grinding, honing, superfinishing, and cleaning (`grinding_honing_cleaning`)

#### Inputs

##### Product flows

###### Electricity for grinding, honing, superfinishing, and cleaning (`grinding_electricity`)

Record electricity for grinding, honing or superfinishing, coolant circulation, aqueous cleaning, filtration, and directly attributable support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: measured stage electricity converted to MJ and attributed to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `skf-insert-bearings-18033`; `skf-green-bearings`

###### Process water for aqueous cleaning (`process_water_cleaning`)

Record process water delivered to aqueous cleaning only when this route is operated within the foreground boundary. Declare water source, quality, recirculation, make-up versus total circulation, and delivery boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured make-up water crossing the site or process boundary; do not report recirculated water repeatedly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `skf-green-bearings`

##### Waste flows

No default waste input crosses this process boundary.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

Internal finished components are tracked in production records and are not duplicated as external product flows.

##### Waste flows

###### Steel swarf from grinding (`steel_grinding_swarf`)

Record fine steel swarf removed during grinding, honing, or superfinishing. Declare whether the measured mass includes grinding fluid, abrasive, water, or filter media and record its treatment destination.

- Selected flow: Steel swarf `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured swarf mass in the declared wet or dry state leaving the process for recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `skf-green-bearings`

###### Wastewater from aqueous cleaning (`cleaning_wastewater`)

Record cleaning wastewater transferred to on-site treatment, sewer, or an external waste handler. Declare cleaning chemistry, contaminant load, internal recycling, treatment boundary, and destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wastewater mass crossing the selected treatment boundary, net of documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `skf-green-bearings`

##### Elementary flows

Report measured releases from cleaning or finishing as separate substance- and compartment-specific elementary rows; do not use an umbrella emissions row.

### Process: Assembly, lubrication, sealing, and preservation (`assembly_lubrication_preservation`)

#### Inputs

##### Product flows

###### Rolling-bearing lubricating grease (`bearing_lubricating_grease`)

Record the grease placed in the bearing only for grease-lubricated products. Declare manufacturer and grade, base oil, thickener, consistency or specification, fill mass, and whether the bearing is sealed for life.

- Selected flow: Rolling-bearing lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured grease issued to conforming bearings less documented recoverable return and reporting-period stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_mass`
- Sources: `skf-insert-bearings-18033`; `skf-green-bearings`

###### Bearing rust-preventive oil (`bearing_rust_preventive_oil`)

Record the rust-preventive oil applied to the finished bearing only when preservation is part of the factory-gate product state. Declare formulation or grade, application method, retained mass, and volatile fraction when relevant.

- Selected flow: Bearing rust-preventive oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured oil issued less documented return, with retained and waste fractions reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished bearing output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_mass`
- Sources: `skf-insert-bearings-18033`; `skf-green-bearings`

##### Waste flows

Add each used lubricant, spent preservation bath, rejected seal, cage, ring, or rolling element as a separate concrete waste row when it crosses the selected boundary.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

The assembled bearing proceeds to final inspection and packaging as internal work in progress and is not duplicated as an external product flow.

##### Waste flows

No category-generic assembly waste is prescribed; use actual species- or material-specific records.

##### Elementary flows

Report measured volatile or other direct releases as separate substance- and compartment-specific rows when applicable.

### Process: Final inspection and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Corrugated board boxes (`packaging_corrugated_boxes`)

Record corrugated board boxes only when they are used to deliver the reference bearing. Declare box specification, mass, supplier, recycled content when known, and whether additional packaging components are separately recorded.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured box mass issued to packaged conforming bearing output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished bearing output; packaging excluded from net reference-product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `skf-green-bearings`

##### Waste flows

No default waste input crosses this process boundary.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Conforming finished bearing at factory gate (`final_bearing_output`)

Record only conforming released product after applicable clearance, free-running, vibration or noise, visual, dimensional, marking, preservation, and packaging checks. Packaging mass is not part of the 1 kg net bearing output.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg net conforming bearing output by definition of the reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

Record each rejected bearing or rejected component separately by its physical identity and actual treatment route; do not merge rejects with chips or swarf.

##### Elementary flows

No default direct elementary output is prescribed for inspection and packaging.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared_processes | Avoid allocation by subdividing production lines, batches, meters, furnaces, and waste records so inputs and outputs directly attributable to the declared bearing are collected separately. | `eu-recommendation-2021-2279` |
| `allocation_rule_2` | unavoidable_shared_burdens | When subdivision is not possible, use a causal physical relationship such as machine time, furnace occupancy, metered energy, processed mass, surface area, or batch time. Document the driver, numerator, denominator, affected products, and sensitivity. | `eu-recommendation-2021-2279` |
| `allocation_rule_3` | non_physical_allocation | Use economic or another non-physical relationship only after documenting why subdivision and a relevant physical relationship are infeasible. Record prices, period, geography, co-product status, and sensitivity. | `eu-recommendation-2021-2279` |
| `allocation_rule_4` | recycled_metal_and_waste | Keep the burdens of collecting, conditioning, and treating chips, swarf, wastewater, and other wastes on the generating system until the declared treatment or end-of-waste boundary. Report any recycling credit or substitution scenario separately; do not subtract it invisibly from foreground quantities. | `eu-recommendation-2021-2279` |
| `allocation_rule_5` | rework_and_internal_recycling | Track internal rework and recirculated material without creating a second product output. Count only net external inputs and outputs while retaining gross process records for audit and mass-balance checks. | `skf-green-bearings` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `forming_and_turning` | `bearing_steel_input` | scale and stock records | alloy grade; delivered form; gross and tare mass; opening and closing stock; returns; work in progress | Weigh steel charged by alloy and route and reconcile stock, returns, chips, and work in progress. | kg | each receipt and production batch | representative reporting period | reporting site and attributed contracted forming | net attributable mass divided by conforming output mass | scale identity, calibration status, stock reconciliation, supplier record |
| `cp_stage_electricity` | `forming_and_turning`; `heat_treatment`; `grinding_honing_cleaning` | `forming_electricity`; `heat_treatment_electricity`; `grinding_electricity` | electricity meter records | meter reading; timestamp; meter boundary; stage; batch; shared-load driver | Collect separate stage meters; allocate shared meters only with documented machine time, checked rated load, or furnace occupancy. | kWh and MJ | continuous or each batch | same period as output | each included site and outsourced operation | stage total converted to MJ and divided by conforming output mass | meter identity, calibration, allocation worksheet, energy invoice reconciliation |
| `cp_waste_mass` | `forming_and_turning`; `grinding_honing_cleaning` | `steel_machining_chips`; `steel_grinding_swarf` | waste scale and dispatch records | gross mass; tare; wet or dry state; alloy; retained fluid; destination; end-of-waste status | Weigh each stream separately at removal and correct for documented container tare. | kg | each removal | same period as output | each generating operation | net stream mass divided by conforming output mass | weigh ticket, tare record, waste transfer record, moisture or retained-fluid note |
| `cp_natural_gas` | `heat_treatment` | `natural_gas_heat_treatment` | gas meter or reconciled billing record | volume; temperature; pressure; timestamp; furnace; composition or calorific value | Read the heat-treatment meter or reconcile billed volume to furnace operation and state reference conditions. | m3 | continuous or each furnace batch | same period as heat-treated output | gas-fired heat treatment within foreground boundary | attributable reference-condition volume divided by conforming output mass | meter identity, calibration, bill reconciliation, supplier specification |
| `cp_direct_combustion` | `heat_treatment` | `fossil_co2_heat_treatment` | stack result or fuel-carbon calculation | stack mass or fuel quantity; carbon content or emission factor; oxidation fraction; unit conversion | Prefer site stack or fuel-carbon records; otherwise calculate from metered gas with a documented supplier factor and oxidation assumption. | kg | each monitored period or furnace batch | same period as fuel record | foreground gas-fired equipment only | direct fossil CO2 divided by conforming output mass | stack report or complete factor provenance and calculation sheet |
| `cp_process_water` | `grinding_honing_cleaning` | `process_water_cleaning` | water meter or scale record | make-up quantity; source; quality; temperature; density; recirculation boundary | Meter or weigh net make-up process water delivered to cleaning; exclude gross recirculating flow. | kg | continuous or each cleaning batch | same period as cleaned output | foreground aqueous-cleaning system | net make-up mass divided by conforming output mass | meter identity, calibration, density conversion, water balance |
| `cp_cleaning_wastewater` | `grinding_honing_cleaning` | `cleaning_wastewater` | effluent meter, scale, and dispatch record | quantity; temperature; density; destination; contaminant characterization | Meter or weigh wastewater leaving the foreground boundary and reconcile it to water input, retention, and evaporation. | kg | continuous or each discharge | same period as cleaning input | foreground aqueous-cleaning system | boundary-crossing wastewater mass divided by conforming output mass | meter or weigh ticket, density conversion, water balance, treatment record |
| `cp_auxiliary_mass` | `assembly_lubrication_preservation` | `bearing_lubricating_grease`; `bearing_rust_preventive_oil` | scale, purchase, and stock records | product name; grade; supplier; lot; gross and tare mass; opening and closing stock | Weigh or reconcile each separately specified auxiliary actually used or retained on the bearing. | kg | each batch and reporting period | same period as assembled output | assembly and preservation operations | net attributable product mass divided by conforming output mass | scale calibration, purchase and stock reconciliation, product specification or safety-data identifier |
| `cp_packaging_mass` | `inspection_packaging` | `packaging_corrugated_boxes` | packaging scale and issue record | box specification; gross and tare mass; issued, unused, and returned quantities; recycled content | Weigh boxes issued to declared output, net of unused stock and returns, outside net bearing mass. | kg | each packaging batch | same period as packaged output | final packaging operation | box mass divided by net conforming bearing mass | scale calibration, packaging issue reconciliation, supplier specification |
| `cp_output_mass` | `inspection_packaging` | `final_bearing_output` | release scale and production record | product designation; net mass; accepted quantity; rejects; work in progress; shipment | Weigh net conforming bearings after release inspection and before transport packaging; reconcile production and shipment. | kg | each released batch | representative reporting period | all included bearing production sites | conforming net mass is denominator and normalized to 1 kg | scale calibration, inspection release, production and shipment reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Divide each reporting-period exchange assigned to conforming bearings by net conforming bearing mass from the same period and boundary. | attributable exchange quantity; conforming output mass | exchange per 1 kg reference flow | `eu-recommendation-2021-2279` |
| `calc_electricity_conversion` | stage electricity rows | Multiply metered kWh by 3.6 while preserving the meter record and factor. | electricity in kWh | electricity in MJ |  |
| `calc_water_mass` | water rows | Multiply measured volume by a stated density appropriate to measured temperature and composition. | volume; temperature; water composition; density | water mass in kg |  |
| `calc_direct_fossil_co2` | `fossil_co2_heat_treatment` | Multiply metered fuel quantity by documented fossil-carbon or supplier emission factor and oxidation fraction; exclude upstream emissions. | fuel quantity; factor; oxidation fraction; unit conversions | direct fossil CO2 mass | `eu-recommendation-2021-2279` |
| `calc_metal_balance` | forming, turning, grinding, and final output | Reconcile alloy-specific steel input with conforming product, chips, swarf, rejects, retained work in progress, and documented stock change; investigate material imbalance. | alloy-specific material records | documented metal balance and discrepancy | `skf-green-bearings` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Record bearing family, rolling-element type, principal dimensions, applicable load or tolerance class, seal or shield state, cage and ring materials, heat-treatment route, lubrication, and packaging state. | product specification, drawing, inspection and release record |
| `dq_measurement` | all measured rows | Prefer calibrated direct measurement and record instrument identity, resolution, calibration status, interval, missing-data treatment, and uncertainty. | calibration certificate, meter log, scale record, uncertainty note |
| `dq_temporal` | all foreground rows | Use a representative continuous 12-month period where available or justify a shorter campaign capturing batch and operating variability; align numerator and denominator periods. | reporting-period statement and representativeness assessment |
| `dq_site_scope` | all processes | Identify each included site and outsourced operation; do not omit a material step because it occurs off site. | site and supplier process map, contracts, purchasing records |
| `dq_completeness` | all inventory rows | Reconcile purchased materials, site records, wastes, direct emissions, and conforming output; identify and quantitatively justify every exclusion. | mass and energy reconciliations, exclusion register |
| `dq_technology` | all processes | Describe forming, machining, heat-treatment atmosphere and furnace, grinding and honing, cleaning, assembly, lubrication, preservation, inspection, and packaging technologies sufficiently to distinguish routes. | process specifications, equipment list, production instructions |
| `dq_upstream_data` | all purchased inputs | Match datasets to actual alloy, auxiliary grade, energy supply, water source, packaging, geography, technology, product state, and delivery boundary; document proxies and sensitivity. | dataset-selection log and sensitivity assessment |

No external numeric inventory range is prescribed. Each row remains a foreground collection requirement until two mutually independent, original-text-verified sources with compatible product state, functional unit, and system boundary support a defensible empirical range.

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| `validation_rule_1` | Confirm that the declared product is a complete ball or roller bearing under the stated boundary and not a bearing housing, plain bearing, loose ball, loose roller, bearing unit, or spare part. |
| `validation_rule_2` | Confirm that the reference product is exactly 1 kg net conforming finished bearing at the factory gate and that packaging mass is excluded from that net mass. |
| `validation_rule_3` | Confirm that all five required manufacturing stages are represented, including outsourced stages, and that exclusions or non-applicable steps are explicitly justified. |
| `validation_rule_4` | Confirm that every inventory row is an atomic physical, chemical, waste, energy, or elementary exchange and that no umbrella utility, fuel, packaging, chemical, wastewater, residue, or emission row is used. |
| `validation_rule_5` | Confirm that forming, heat-treatment, and grinding electricity are collected and reported separately, even where an allocation procedure uses a shared meter. |
| `validation_rule_6` | Confirm that machining chips and grinding swarf remain separate waste flows and are not netted against bearing-steel input or combined with rejected bearings. |
| `validation_rule_7` | Confirm that direct fossil carbon dioxide represents only foreground gaseous-natural-gas combustion and excludes upstream energy-system emissions. |
| `validation_rule_8` | Confirm that the metal balance and the cleaning-water balance have been performed and that material discrepancies are documented. |
| `validation_rule_9` | Confirm that UUID-bearing rows match the audited TianGong English and Chinese base names, flow type, classification, flow property, unit group, and public state; unresolved rows must retain empty UUIDs and manifest review records. |
| `validation_rule_10` | Confirm that no externally inferred range is used unless at least two independent, original-text-verified sources have compatible boundaries, reference flow, product state, and units. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-factory-gate foreground data package for one declared complete ball or roller bearing product, normalized to net conforming mass |
| downstream_use | Linked product flow, unit-process dataset, manufacturer product footprint, EPD-supporting model, or life-cycle model whose downstream stages and scenarios are added separately |
| allowed_use | Comparison or aggregation only when product function, declared bearing specification, reference flow, geography, technology, reporting period, system boundary, allocation, and data quality are compatible |
| excluded_use | Direct representation of loose parts, bearing housings, plain bearings, bearing units outside the declared identity, use-phase performance, maintenance, remanufacturing, or end-of-life scenarios |
| required_metadata | Production geography and sites; reporting period; product designation and design; mass and dimensions; materials; manufacturing and outsourced routes; lubrication and preservation state; inspection basis; allocation; packaging; upstream dataset choices |
| required_quality_disclosure | Primary-data share and coverage; meter and scale evidence; missing data; exclusions; allocation drivers; mass, water, and energy reconciliations; proxy datasets; uncertainty; representativeness; unresolved UUIDs and range evidence |
| update_trigger | Material change in bearing design, mass, alloy, supplier route, manufacturing site or technology, furnace fuel, electricity supply, cleaning system, lubricant or preservation product, packaging, allocation, data coverage, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Original CSV row verified for CPC 43310 product classification identity. |
| `un-cpc-1-1-chinese-2002` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition. https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | Original Chinese classification text verified for the professional title “滚珠轴承或滚柱轴承”. |
| `international-epd-pcr-2023-03` | standard | International EPD System, PCR 2023:03 Bearings, bearing units and parts. https://www.environdec.com/pcr-library/pcr_c8639225-b509-4a82-6b78-08d9caad768c | Official original landing page verified for category correspondence to UN CPC 4331 and the distinction of bearing production from downstream life-cycle stages. |
| `skf-insert-bearings-18033` | handbook | SKF, Insert bearings, publication 18033 EN. https://cdn.skfmediahub.skf.com/api/public/0901d196807f0c2f/pdf_preview_medium/Insert_bearings_booklet_-_18033_EN_pdf_preview_medium.pdf | Original PDF pages verified for heat treatment, grinding, honing, assembly, greasing or sealing, inspection, preservation, marking, and packaging operations. |
| `skf-green-bearings` | literature | SKF Evolution, Green bearings. https://cdn.skfmediahub.skf.com/api/public/0901d1968031d53b/pdf_preview_medium/0901d1968031d53b_pdf_preview_medium.pdf | Original full PDF verified for steel and auxiliary inputs, energy, water-based cleaning, lubrication, packaging, chips, grinding swarf, used oil, and waste handling. |
| `eu-recommendation-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Official original legal text verified for functional-unit definition, allocation hierarchy, data quality, and foreground inventory rules. |
