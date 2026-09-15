---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48314
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts and accessories for the goods of subclass 48314

## 1. Scope and Applicability

This PCR covers finished parts and accessories specifically identifiable for binoculars, monoculars, optical telescopes, non-radio astronomical instruments, and compound optical microscopes. It supports foreground production datasets for mechanical housings, mounts, stages, focusing or alignment mechanisms, structural supports, and other non-optical parts or accessories supplied at the factory gate. The representative route is precision machining of primary aluminium-alloy sheet, cleaning where required, dry assembly, inspection, and packaging.

Complete instruments, radio-astronomy instruments, separately classified lenses, prisms, mirrors and other optical elements, generic fasteners or materials without a documented target-instrument relationship, use, maintenance, and end-of-life are outside this PCR. A producer using another material or manufacturing route shall retain the category identity and reference-flow rules but replace the representative-route inventory with atomic, route-specific foreground exchanges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48314 |
| classification_refs | CPC 3.0: 48351, Parts and accessories for the goods of subclass 48314 |
| covered_products | Finished non-optical parts and accessories specifically designed or documented for binoculars, monoculars, optical telescopes, non-radio astronomical instruments, or compound optical microscopes |
| excluded_products | Complete CPC 48314 instruments; radio-astronomy instruments; lenses, prisms, mirrors and other separately classified optical elements; generic materials and hardware without a target-instrument relationship |
| representative_product | A finished, inspected and packaged precision-machined aluminium-alloy mechanical part or accessory for a declared CPC 48314 parent instrument |
| production_route | Receipt of primary aluminium-alloy sheet; precision machining and finishing; conditional aqueous alkaline cleaning; dry assembly and dimensional or functional inspection; protective packaging |
| market_state | Saleable finished part or accessory at the manufacturing site gate, including packaging declared by the producer |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a mechanical support, positioning, focusing, alignment, enclosure, or mounting function for the declared CPC 48314 parent instrument |
| How much | 1 kg net mass of saleable finished parts or accessories, excluding packaging mass |
| How well | Conforms to the declared drawing revision, material specification, dimensional tolerances, surface condition, cleanliness requirement, and acceptance test |
| How long or cycle | One delivered production lot at the factory gate; service life is reported separately and is not part of the mass-based reference amount |
| reference_flow_link | The reference product output `finished_optical_instrument_part` normalized to 1 kg net finished-product mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished-product mass |
| Reference product flow | Finished optical-instrument part or accessory (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number and drawing revision; parent-instrument type and model; part or accessory function; principal material and grade; manufacturing route; surface treatment and cleanliness state; net product mass; packaging inclusion; site and geography; production period; acceptance criteria and test result |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and accepted output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net conforming product mass after final inspection; report packaging separately and normalize all inventory exchanges to 1 kg net finished product. |
| `material_mass_balance` | Aluminium input, product, internal transfers, scrap and rejects | Mass or Aluminium content as identified by the selected flow | kg | Use one consistent dry or as-received basis per flow and reconcile input aluminium with aluminium in accepted product, internal work in progress, scrap, rejects and documented losses. |
| `electricity_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter readings and conversion factors; when source records are in kWh, convert using 1 kWh = 3.6 MJ and do not mix electricity with fuel or purchased heat. |
| `solution_mass` | Cutting fluid, process water, sodium hydroxide and spent liquid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered or discharged mass; if volume is measured, retain temperature, density source and concentration used for conversion. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | Start at receipt of semi-finished material, process chemicals and purchased components; include precision fabrication, applicable cleaning or finishing, assembly, inspection, internal rework and packaging through saleable product at the manufacturing site gate. | `us-epa-2003-mpm-development` |
| `boundary_upstream_inputs` | upstream_datasets | Represent production and delivery of every purchased material, chemical, electricity and packaging flow with a geographically and technologically appropriate upstream dataset; do not absorb these burdens into an unspecified material input. | `eu-2021-2279-pef` |
| `boundary_conditional_operations` | route_specific_operations | Include aqueous cleaning, sodium-hydroxide use, cutting-oil discharge and each packaging material only when records show that the operation or exchange occurred; declare not-applicable rows rather than substituting a combined utility, chemical, waste or packaging label. | `ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development` |
| `boundary_exclusions` | excluded_life_cycle_stages | Exclude parent-instrument assembly after the part leaves the site, distribution beyond the factory gate, use, maintenance and end-of-life unless the study explicitly expands the boundary and reports those stages separately. | `un-cpc-3-0-structure-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Semi-finished material, process chemicals, purchased components and packaging received at the foreground manufacturing site |
| starting_condition_role | `received_input` |
| product_classification_scope | Finished parts and accessories specifically for the CPC 48314 instruments identified by CPC 3.0 code 48351 |
| recursive_input_rule | A purchased input already within this PCR category is recorded once as a product input with its own upstream dataset and declared completion state; do not recursively reapply this foreground route to that same input. |
| upstream_dataset_requirement | Each purchased input requires a supplier-specific dataset where available, otherwise a documented regional and technological proxy whose product state and delivery boundary match the received input. |
| disclosure | Declare material grade, received form, parent-instrument relationship, fabrication route, outsourced operations, cleaning or surface treatment, packaging, geography, production period, recycled-content claims and any expanded life-cycle stages. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `precision_fabrication` | Precision machining, finishing and cleaning | required | Cleaning exchanges apply only when aqueous alkaline cleaning occurs; the representative route otherwise retains machining exchanges and records cleaning rows as not applicable. | Foreground shaping and surface preparation | Mass of machined and cleaned component transferred to final assembly and inspection |
| `finalization` | Assembly, inspection and packaging | required | Assembly records may be zero for a single-piece part; each packaging row applies only when that material is delivered with the product. | Foreground completion, quality acceptance and factory-gate preparation | 1 kg net accepted finished product |

### Process: Precision machining, finishing and cleaning (`precision_fabrication`)

#### Inputs

##### Product flows

###### Primary aluminium-alloy sheet (`primary_aluminium_alloy_sheet`)

Primary aluminium-alloy sheet crosses the site boundary as the representative-route workpiece stock. Grade, temper, thickness, supplier and received mass are retained with the batch record.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass / kg
- Amount rule: measured sheet mass issued to the production lot minus documented unused sheet returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources: `us-epa-2003-mpm-development`

###### Purchased electricity for precision fabrication (`fabrication_electricity`)

Electricity powers machining, finishing, cleaning and directly attributable support equipment in this process. Facility electricity is allocated only under the rules in section 7.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured process electricity plus a documented allocation of shared electricity, converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `ec-jrc-2006-stm-bref`

###### Cutting fluid (`cutting_fluid`)

Cutting fluid is recorded when supplied to machining, including make-up fluid but excluding fluid recovered and reused within the same foreground process loop.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus purchases and make-up minus closing inventory and unused transfers, net of onsite closed-loop reuse
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_chemicals`
- Sources: `us-epa-2003-mpm-development`

###### Process water for aqueous cleaning (`process_water`)

Process water is recorded only when aqueous rinsing or cleaning occurs. Water recirculated within the same process loop is disclosed but is not counted again as a boundary input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance make-up water crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product; not applicable when no aqueous cleaning occurs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Sodium hydroxide is recorded only when it is added as a discrete alkaline-cleaning chemical. Report purchased solution mass and concentration so active chemical mass can be distinguished from carrier water.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured sodium-hydroxide product added to the cleaning bath, net of unopened material returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product; not applicable when sodium-hydroxide cleaning is absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Machined and cleaned optical-instrument component (`machined_cleaned_component_output`)

This internal intermediate is the measured component transferred from fabrication to final assembly and inspection. Its foreground flow identity must preserve drawing, material, surface and cleanliness state.

- Selected flow: Machined and cleaned optical-instrument component (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass released from fabrication to finalization, including pieces later rejected in final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot and normalized per 1 kg net accepted finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfer`
- Sources: `us-epa-2003-mpm-development`

##### Waste flows

###### Aluminium-alloy machining chips and swarf (`metal_machining_scrap`)

Chips and swarf removed from the declared aluminium-alloy stock are recorded at the point they leave controlled onsite reuse. Fluid contamination and recovery destination are reported separately.

- Selected flow: Metal machining scrap `beebbc0a-d5fe-44aa-a686-2cf0756973b1`
- Flow property / unit: Aluminium content / kg
- Amount rule: measured aluminium content of machining scrap dispatched offsite or transferred to a separately modelled recovery process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes_and_rejects`
- Sources: `us-epa-2003-mpm-development`

###### Waste cutting oil (`waste_cutting_oil`)

Waste cutting oil is recorded only for an oil-based cutting-fluid route when spent oil crosses the process boundary. Aqueous coolant waste requires its own specific flow and is not combined with this row.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: measured spent cutting oil shipped for treatment or recovery, net of oil recovered and returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product; not applicable when no oil-based cutting fluid is discarded
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes_and_rejects`
- Sources: `us-epa-2003-mpm-development`

###### Waste alkaline liquor (`waste_alkaline_liquor`)

Waste alkaline liquor is recorded only when a spent sodium-hydroxide cleaning bath leaves the foreground process. Rinse water and externally neutralized waste are not merged into this flow.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of spent alkaline bath solution dispatched to onsite treatment or an offsite recipient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted finished product; not applicable when no alkaline bath is discharged
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes_and_rejects`
- Sources: `ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development`

##### Elementary flows

### Process: Assembly, inspection and packaging (`finalization`)

#### Inputs

##### Product flows

###### Machined and cleaned optical-instrument component (`machined_cleaned_component_input`)

This is the same site-specific internal intermediate released by `precision_fabrication`; quantity and identity shall reconcile exactly between the two processes.

- Selected flow: Machined and cleaned optical-instrument component (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass received from fabrication, including pieces subsequently rejected
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot and normalized per 1 kg net accepted finished product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfer`
- Sources: `us-epa-2003-mpm-development`

###### Purchased electricity for assembly and inspection (`final_assembly_electricity`)

Electricity powers assembly tools, dimensional or functional inspection and directly attributable packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured process electricity plus a documented allocation of shared electricity, converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `us-epa-2003-mpm-development`

###### Corrugated-board box (`corrugated_board_boxes`)

Corrugated-board boxes are recorded when delivered with the saleable product. Their mass is excluded from net reference-product mass and reported as a separate exchange.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured box mass issued to accepted product shipments, net of unused boxes returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product; not applicable when no corrugated-board box is supplied
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources:

###### Low-density polyethylene protective film (`ldpe_protective_film`)

Low-density polyethylene foil is recorded when used as a discrete protective wrap or bag delivered with the product. It is not combined with other plastics or cushioning.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: measured PE-LD film mass issued to accepted product shipments, net of unused film returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product; not applicable when no PE-LD film is supplied
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished optical-instrument part or accessory (`finished_optical_instrument_part`)

This is the conforming, saleable reference product after assembly where applicable, inspection and packaging. The UUID remains unresolved because no exact public state-100 target-category flow was found.

- Selected flow: Finished optical-instrument part or accessory (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: fixed at 1 kg net accepted finished-product mass for the reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_output`
- Sources:

##### Waste flows

###### Rejected optical-instrument part (`rejected_optical_instrument_part`)

A finished or near-finished target-category part failing documented acceptance criteria is recorded as this discrete waste output when it leaves controlled rework. Material-specific recycling fractions are disclosed separately.

- Selected flow: Rejected optical-instrument part (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected-part mass leaving controlled rework, calculated from reject disposition records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_rejects`
- Sources: `us-epa-2003-mpm-development`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared_processes | First avoid allocation by subdividing meters, material issues, work orders and waste records to the product lot; use system expansion only when the additional function and expanded result are explicitly reported. | `eu-2021-2279-pef` |
| `allocation_physical` | unavoidable_shared_burdens | When subdivision is not feasible, allocate shared machine electricity by metered operating time or machine time, cleaning burdens by treated surface area or bath loading, and other shared burdens by a documented causal physical relationship; justify and disclose the selected driver. | `eu-2021-2279-pef` |
| `allocation_scrap` | machining_scrap_and_rejects | Report scrap and rejected parts as waste outputs at the point they leave controlled rework; do not subtract an avoided-material credit inside the foreground process unless an explicitly expanded recycling model is supplied and reported separately. | `eu-2021-2279-pef` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging` | precision_fabrication; finalization | Aluminium stock and discrete packaging inputs | Purchase, receiving, bill-of-material and issue/return records | material identity; grade; supplier; received mass; issued mass; returned mass; packaging component; lot | Reconcile calibrated scale records and inventory transactions to production lots | kg | Each receipt and production lot | At least one representative continuous 12-month period or the full campaign for campaign production | All foreground production and packaging operations at the declared site | Sum net issues by flow and divide by net accepted product mass | Scale calibration, supplier specification, transaction trace and lot reconciliation |
| `cp_energy` | precision_fabrication; finalization | Purchased electricity | Submeter, machine controller and facility meter records | meter id; opening and closing reading; unit; timestamp; machine time; allocation driver; conversion factor | Prefer process submetering; otherwise reconcile machine-level records to the facility meter and document allocation | kWh and MJ | Per lot or shift, aggregated monthly | Same period as production output | All directly attributable equipment plus disclosed shared services | Convert kWh to MJ and divide attributable energy by net accepted product mass | Meter calibration or utility invoice reconciliation and allocation worksheet |
| `cp_process_chemicals` | precision_fabrication | Cutting fluid and sodium hydroxide | Purchase, batch make-up, replenishment, recovery and inventory records | product identity; formulation; concentration; opening stock; additions; recovery; closing stock | Mass balance each chemical over the production period | kg | Each addition and month-end inventory | Same period as production output | Machining and alkaline-cleaning systems serving the declared product | Net boundary input divided by net accepted product mass | Supplier specification, calibrated scale or delivery record, and signed bath log |
| `cp_water` | precision_fabrication | Process water | Submeter or tank-balance records | meter id; readings; make-up; recirculation; discharge; density; timestamp | Meter make-up water or calculate a reconciled tank balance without double-counting recirculation | kg | Per lot or daily, aggregated monthly | Same period as production output | Aqueous cleaning and rinse operations for the declared product | Net make-up water divided by net accepted product mass | Meter calibration, tank-volume check and water-balance reconciliation |
| `cp_internal_transfer` | precision_fabrication; finalization | Machined and cleaned component transfer | Traveller, work-order and scale records | part id; drawing revision; material; surface state; cleanliness state; piece count; transfer mass; timestamp | Record release from fabrication and receipt by finalization under the same transfer id | kg | Each transfer lot | Same period as production output | Inter-process transfers within the foreground site | Reconcile output and input transfer mass exactly before normalization | Signed traveller and calibrated scale record |
| `cp_wastes_and_rejects` | precision_fabrication; finalization | Machining scrap, spent liquids and rejected parts | Waste container, shipment, treatment and reject-disposition records | waste identity; source operation; gross and tare mass; aluminium content where applicable; contamination; recovery; destination; reject reason | Weigh each dispatched waste or controlled internal treatment transfer and reconcile rejects to inspection records | kg | Each container or shipment and each reject disposition | Same period as production output | All foreground waste and reject points for the declared product | Sum net waste mass by atomic flow and divide by net accepted product mass | Scale calibration, waste manifest, treatment receipt and nonconformance record |
| `cp_finished_output` | finalization | Accepted reference product | Final inspection, packing and shipment records | part id; parent instrument; drawing revision; accepted count; net mass; packaging mass; test result; shipment id | Weigh accepted product separately from packaging and link acceptance records to shipment | kg | Each lot and shipment | Same period as inventory inputs | All final inspection and packing stations for the declared product | Sum net accepted mass and use it as the normalization denominator | Calibrated scale, signed inspection report and shipment reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | primary_aluminium_alloy_sheet; cutting_fluid; sodium_hydroxide; packaging | Net boundary input = opening stock + receipts + make-up - closing stock - unused material returned outside the lot - material recovered and reused within the same foreground loop. | inventory records; receipts; issue and return records; recovery records | net input mass by atomic flow per kg reference product | `us-epa-2003-mpm-development` |
| `calc_electricity` | fabrication_electricity; final_assembly_electricity | Attributable electricity in MJ = metered kWh × 3.6; where only a shared meter exists, multiply by the disclosed causal allocation share before normalization. | meter readings; machine time or other approved physical driver; net accepted product mass | MJ electricity per kg reference product | `eu-2021-2279-pef` |
| `calc_scrap_balance` | metal_machining_scrap | Reconcile aluminium issued = aluminium in accepted product + aluminium in internal work in progress + aluminium content of scrap + aluminium in rejected parts + quantified residual difference. Investigate and disclose any material residual. | material issues; accepted product; internal transfer; scrap aluminium content; rejects | reconciled aluminium mass balance | `us-epa-2003-mpm-development` |
| `calc_reference_normalization` | all_inventory_rows | Normalized exchange = attributable exchange amount during the period / net mass of accepted finished parts during the same period. | attributable exchange amount; accepted net product mass | exchange per 1 kg net finished product | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and every inventory flow | Preserve part number, drawing revision, parent-instrument relationship, material grade, process state, selected Tiangong UUID when confirmed, and explicit unresolved status otherwise. | Drawing, bill of materials, traveller, supplier specification and UUID audit |
| `dq_temporal` | All foreground records | Inputs, outputs and allocation drivers shall cover the same representative period; explain shutdowns, prototypes, abnormal rework and campaign boundaries. | Period reconciliation and production log |
| `dq_completeness` | Material, energy, water, chemicals, wastes and rejects | Reconcile purchase, inventory, meter, production and waste records; do not replace missing atomic exchanges with umbrella labels. | Mass, energy and record-completeness checks |
| `dq_measurement` | Mass, electricity and liquid conversions | Retain calibration status, original unit, conversion factor, density and concentration where applicable, and the person or system responsible for the record. | Calibration certificates, meter records and conversion worksheet |
| `dq_technology_geography` | Upstream datasets and foreground route | Match product state, material grade, electricity geography, supplier route and treatment destination; document each proxy and its effect on representativeness. | Supplier dataset, geography and technology comparison |
| `dq_source_traceability` | External rules and source-based process choices | Retain the exact source title, stable locator, retrieval date and the rule or process choice supported; do not treat search snippets as final evidence. | Source register and archived original document reference |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_product | Fail if the dataset does not identify the finished part or accessory, its CPC 48314 parent instrument, drawing revision, function, material, completion state and net reference mass, or if it substitutes a complete instrument or separately classified optical element. | `un-cpc-3-0-structure-2025` |
| `validate_inventory_atomicity` | process_inventory | Fail if electricity is combined with fuels or heat, chemicals are combined, packaging materials are combined, wastes are combined, or a row is a selector rather than one physical exchange. | |
| `validate_internal_transfer` | machined_cleaned_component_output; machined_cleaned_component_input | Fail unless the internal intermediate has the same identity and reconciled mass at release and receipt, subject only to a separately recorded and explained loss. | |
| `validate_mass_balance` | aluminium_and_output_balance | Fail if aluminium input, accepted output, machining scrap, rejected parts, work in progress and quantified residual are not reconciled for the same period. | `us-epa-2003-mpm-development` |
| `validate_energy` | electricity | Fail if kWh-to-MJ conversion, meter scope, shared-energy allocation or double counting between the two foreground processes is absent or inconsistent. | `eu-2021-2279-pef` |
| `validate_conditionals` | cleaning_wastes_and_packaging | Fail if a conditional row has a positive amount without evidence that the operation or material occurred, or is omitted without an explicit not-applicable declaration. | `ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development` |
| `validate_uuid_and_sources` | identity_and_evidence | Fail if an unresolved UUID is presented as confirmed, if a UUID-bearing Chinese selected-flow name differs from the direct-read TianGong Chinese baseName, or if a source-backed rule cannot be traced to verified original text. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for finished CPC 48351 parts and accessories at the manufacturing site gate |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and replacement or acceptance of unresolved identities and range evidence needs |
| allowed_use | Product carbon footprint and LCA modelling of a declared finished optical-instrument part or accessory when material, route, parent instrument, geography, period, allocation and packaging are representative |
| excluded_use | Complete instruments; optical elements; radio-astronomy equipment; generic metal parts without a parent-instrument relationship; use-stage performance or end-of-life without explicit boundary expansion |
| required_metadata | PCR id and version; part number and drawing revision; parent-instrument type and model; function; principal material and grade; site and geography; production period; route and outsourced operations; surface and cleanliness state; net product mass; packaging; electricity mix; allocation; waste destinations; UUID status |
| required_quality_disclosure | Foreground-versus-proxy share, data age, meter and scale coverage, allocation drivers, mass-balance residual, reject and rework treatment, density and concentration conversions, unresolved UUIDs, missing range evidence and source verification status |
| update_trigger | Change in part design or material, manufacturing or cleaning route, site, electricity supply, packaging, allocation driver, waste destination, acceptance criteria, representative period, or resolution of a UUID or evidence need |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | CPC 48351 identity, its relationship to CPC 48314, and exclusions of complete parent instruments from the parts reference product |
| `us-epa-2003-mpm-development` | Official guidance (`official_guidance`) | U.S. EPA, Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products & Machinery Point Source Category, EPA-821-B-03-001, February 2003, https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf (retrieved 2026-09-07) | Machining, cleaning, assembly and testing process decomposition; cutting-fluid, chip, spent-fluid and rinse-water record requirements |
| `ec-jrc-2006-stm-bref` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-07) | Conditional surface preparation and treatment; separate water, electricity, acid, alkali, rinse and spent-solution tracking |
| `eu-2021-2279-pef` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, consolidated 30 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-07) | Upstream dataset completeness, allocation hierarchy, subdivision, physical allocation and recycling disclosure |
