---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pumps-for-liquids-liquid-elevators
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pumps for liquids; liquid elevators

## 1. Scope and Applicability

This PCR applies to complete pumps that move liquids by mechanical or physical action and to complete liquid elevators placed on the market. It covers rotodynamic and positive-displacement pumps, hand or power-driven pumps, metering or dispensing pumps, and liquid elevators, provided that the foreground data package declares the pump principle, pumped-liquid compatibility, driver configuration, duty point, construction materials, and delivered market state.

The core dataset boundary is cradle-to-factory-gate production of a finished pump. It includes upstream production of purchased components, preparation or machining performed by the reporting manufacturer, assembly, production testing, packaging, and treatment of manufacturing wastes. Installation, distribution after the factory gate, maintenance, operational electricity, pumped-liquid losses during use, and end-of-life are outside this core boundary and require separate scenarios. The EU water-pump regulation demonstrates that operational energy can dominate life-cycle impacts for its covered clean-water rotodynamic subset; therefore a use-stage model must not be inferred from the manufacturing reference flow and must instead use declared duty, efficiency, load profile, and operating hours.

Separately supplied parts for pumps or liquid elevators, air or vacuum pumps, compressors, hydraulic or pneumatic power engines, valves, and lifting or conveying equipment that does not move a liquid are excluded. A pump integrated into another product is covered only when the pump itself is the declared foreground output and its mass and manufacturing exchanges can be separated from the host product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pumps-for-liquids-liquid-elevators |
| classification_refs | CPC 3.0: 43220, Pumps for liquids; liquid elevators |
| covered_products | Complete pumps for liquids and complete liquid elevators, including rotodynamic, positive-displacement, metering, dispensing, hand-operated, and power-driven designs |
| excluded_products | Separately supplied parts; air or vacuum pumps; gas compressors; hydraulic or pneumatic power engines; valves; host products containing a pump when the pump cannot be separated |
| representative_product | A finished pump for a declared liquid and rated duty point, supplied with or without a driver as explicitly declared |
| production_route | Supplier component production followed by site-specific component preparation, assembly, production testing, packaging, and factory-gate release |
| market_state | Finished, tested, saleable pump at the manufacturer gate; shipment packaging is reported separately from net pump mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished pump capable of moving the declared liquid at the declared rated duty point |
| How much | 1 kg net mass of finished pump at the manufacturer gate, excluding shipment packaging |
| How well | Pump principle, liquid compatibility, driver inclusion, rated flow and head or pressure, efficiency or performance-test basis, and material construction are declared |
| How long or cycle | One delivered pump; service life and operating cycles are excluded from the manufacturing reference flow and must be declared in any use-stage scenario |
| reference_flow_link | `pump_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished pump |
| Reference product flow | Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pump principle; pumped liquid and compatibility limits; driver included or excluded; rated flow; rated head or discharge pressure; rated speed; efficiency or test basis; wetted-part materials; seal arrangement; production geography; reporting period; net pump mass; shipment packaging mass |

When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | finished pump reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net finished-pump mass after production testing and before shipment packaging; normalize all inventory exchanges to 1 kg net pump. |
| `component_mass_conversion` | components recorded by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts to mass only from product-specific BOM or weighing records; retain count, measured or specified unit mass, and conversion evidence. |
| `electrical_energy_conversion` | purchased electricity used by foreground processes | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered kWh and convert to MJ using 1 kWh = 3.6 MJ; disclose allocation where a meter serves other products. |
| `test_water_mass_conversion` | production-test water and resulting wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer measured mass; when volume is metered, convert using measured density at stated conditions and retain volume, density, temperature, and conversion. Do not assume 1 kg/L without evidence. |
| `performance_test_basis` | regulated or standards-tested pumps | declared test property | declared test unit | Keep test medium, duty point, head or pressure, flow, speed, impeller or displacement setting, test duration, and applicable standard together. For the subset covered by Commission Regulation (EU) No 547/2012, retain its clean-cold-water and BEP/PL/OL test basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased pump-specific components and semi-finished parts at the reporting factory gate; raw materials replace those components only for fabrication performed inside the foreground boundary |
| starting_condition_role | Prevent double counting between purchased component datasets and on-site fabrication while preserving the real first foreground crossing |
| product_classification_scope | Complete products within CPC 43220; separately supplied pump parts remain upstream inputs or products outside this PCR identity |
| recursive_input_rule | A complete pump purchased for incorporation into a pump system is recorded once as an upstream product input with its own dataset and is not decomposed again in the receiving process; a part is recorded as the specific part or material at its actual crossing condition |
| upstream_dataset_requirement | Every purchased component, material, electricity, water, lubricant, and packaging flow requires a geographically and technologically appropriate upstream dataset; supplier-specific data are preferred for high-mass or high-impact inputs |
| disclosure | Declare vertical integration, purchased-versus-fabricated condition, included driver and controls, test-loop configuration, packaging boundary, cut-offs, waste destination, reporting period, site geography, and allocation choices |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | core foreground package | Include upstream component or material supply, inbound transport where the chosen upstream datasets do not already include it, on-site preparation, assembly, production testing, packaging, and treatment of manufacturing wastes through the factory gate. | `grundfos-magna3-epd-2024` |
| `boundary_no_component_double_count` | purchased and internally fabricated parts | Record each physical part at its first foreground crossing. Do not record both a purchased complete component and the raw materials already embodied in that component. |  |
| `boundary_use_stage_separate` | downstream use modelling | Exclude operational electricity and pumped-liquid service from the core manufacturing inventory. A separate use-stage scenario must declare duty, efficiency, load profile, operating hours, electricity mix, controls, and service life. | `eu-water-pump-regulation-547-2012` |
| `boundary_test_applicability` | production performance testing | Include the actual production-test energy and water crossing the factory boundary. Apply the clean-cold-water and BEP/PL/OL method only to pumps for which Commission Regulation (EU) No 547/2012 is applicable; otherwise use the declared applicable test method. | `eu-water-pump-regulation-547-2012` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | Component receipt and preparation | required | All finished pumps require identified incoming parts; record only the machining, cleaning, or preparation actually performed at the reporting site | foreground component preparation | accepted component mass and site exchanges per kg net finished pump |
| `pump_assembly` | Pump assembly | required | Always included; the electric-motor row applies only when the driver is included in the sold pump | foreground assembly | assembled pump mass before testing per kg net finished pump |
| `production_testing` | Production performance and leak testing | required | Record the actual release-test route; water rows apply only when water crosses the boundary as test medium | foreground quality test | accepted tested pump mass per kg net finished pump |
| `packaging_release` | Packaging and factory-gate release | required | Always include release; record corrugated cardboard only when used | foreground packaging and reference output | 1 kg net finished pump plus separately measured shipment packaging |

### Process: Component receipt and preparation (`component_preparation`)

#### Inputs

##### Product flows

###### Pump casing component (`pump_casing`)

Record the purchased or transferred casing at the condition in which it first enters the foreground process. Material grade, casting or fabrication route, finish, and wetted-surface specification remain product-specific qualifiers.

- Selected flow: Pump casing component
- Flow property / unit: Mass / kg
- Amount rule: measured accepted casing mass charged to pumps that reach factory-gate release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receiving`
- Sources: `grundfos-magna3-epd-2024`

###### Pump impeller component (`pump_impeller`)

Record each impeller embodied in the delivered pump as one aggregate mass exchange for the declared product configuration, without expanding by stage.

- Selected flow: Pump impeller component
- Flow property / unit: Mass / kg
- Amount rule: measured or product-specific BOM mass of accepted impellers embodied in released pumps
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receiving`

###### Pump shaft component (`pump_shaft`)

Record the shaft embodied in the delivered pump; do not substitute a wind-turbine or generic transmission-shaft dataset without semantic review.

- Selected flow: Pump shaft component
- Flow property / unit: Mass / kg
- Amount rule: measured or product-specific BOM mass of accepted pump shafts embodied in released pumps
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receiving`

###### Electricity for component preparation (`component_preparation_electricity`)

Record metered electricity for machining, cleaning equipment, material handling, and other preparation operations inside this process only.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered component-preparation electricity allocated to released pump output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foreground_electricity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel scrap sent for recycling (`steel_scrap_for_recycling`)

Record segregated ferrous machining chips, offcuts, and rejected ferrous parts only when transferred to a recycling route. Other metal or mixed wastes require separate atomic rows in the produced dataset.

- Selected flow: Steel scrap, for recycling `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- Flow property / unit: Mass / kg
- Amount rule: weighed ferrous scrap transferred to a verified recycling route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_records`

##### Elementary flows

### Process: Pump assembly (`pump_assembly`)

#### Inputs

##### Product flows

###### Electric motor included with the pump (`electric_motor`)

Record this row only when an electric motor is part of the saleable pump. Pumps sold bare-shaft or driven by another mechanism omit this row and disclose the driver boundary.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: measured or product-specific BOM mass of electric motors embodied in released pumps
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receiving`
- Sources: `grundfos-magna3-epd-2024`

###### Pump bearing (`pump_bearing`)

Record complete ball, roller, or plain bearings embodied in the pump; do not record a bearing cage as the complete bearing.

- Selected flow: Pump bearing
- Flow property / unit: Mass / kg
- Amount rule: measured or product-specific BOM mass of bearings embodied in released pumps
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receiving`

###### Mechanical shaft seal (`mechanical_shaft_seal`)

Record the complete mechanical shaft seal when present. Packed glands, magnetic couplings, diaphragms, and sealless constructions require their own specific rows rather than this seal identity.

- Selected flow: Mechanical shaft seal
- Flow property / unit: Mass / kg
- Amount rule: measured or product-specific BOM mass of mechanical shaft seals embodied in released pumps
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receiving`

###### Lubricant charged during assembly (`lubricant`)

Record only lubricant remaining in the delivered pump or consumed by the assembly operation. Separately identify metalworking fluids or test media when they cross the foreground boundary.

- Selected flow: lubricant `959f4657-43de-4558-988f-804bbb8c62a9`
- Flow property / unit: Mass / kg
- Amount rule: purchase-and-issue records reconciled to closing stock and pump production, plus measured fill where lubricant remains in product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable_records`

###### Electricity for pump assembly (`assembly_electricity`)

Record metered electricity for assembly tools, joining, handling, and assembly-line auxiliaries allocated to this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered pump-assembly electricity allocated to released pump output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foreground_electricity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Production performance and leak testing (`production_testing`)

#### Inputs

##### Product flows

###### Process water used as test medium (`test_process_water`)

Record make-up water crossing the site boundary for hydrostatic, leak, or performance testing. Recirculated water is not repeatedly counted; only make-up and final discharge cross the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered test-loop make-up water allocated to accepted tested pumps
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_water_balance`
- Sources: `eu-water-pump-regulation-547-2012`

###### Electricity used for production testing (`test_electricity`)

Record metered electricity supplied to the test rig, pump driver, instrumentation, and test-loop auxiliaries for production release tests.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered test electricity allocated to accepted tested pumps, net of separately measured recovered electricity if applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foreground_electricity`
- Sources: `eu-water-pump-regulation-547-2012`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater discharged from testing (`test_wastewater`)

Record test water when it leaves the foreground boundary for sewerage or treatment. Declare contamination and treatment route; do not classify a discharge as hazardous without analytical or regulatory evidence.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: metered or water-balance-derived test water discharged to the declared treatment route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_water_balance`

##### Elementary flows

### Process: Packaging and factory-gate release (`packaging_release`)

#### Inputs

##### Product flows

###### Corrugated cardboard shipment packaging (`corrugated_cardboard`)

Record corrugated cardboard crossing the boundary as shipment packaging. Wooden pallets, polymer film, foam, straps, and other packaging require separate atomic rows when used.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: purchase and packing records reconciled to packaged pump shipments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `grundfos-magna3-epd-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished pump at factory gate (`pump_product`)

The reference output is the net mass of saleable pumps that passed the declared release test. Shipment packaging is excluded from this output mass and reported as separate input flows.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net finished pump after normalization of accepted production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished pump
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_pump_mass`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared foreground operations | Subdivide meters, work centres, test rigs, and production lines where separately measured pump data are available before applying allocation. |  |
| `allocation_physical_driver` | remaining shared energy and consumables | Allocate by a documented physical driver that reflects causality, such as machine time, test duration, processed mass, or metered duty; do not use revenue when a causal physical driver is available. |  |
| `allocation_scrap_no_avoided_burden` | steel scrap sent for recycling | Report the scrap mass and treatment route at the point it leaves the foreground boundary. Do not subtract an avoided virgin-material burden inside the core inventory; any recycling credit belongs to an explicitly separate downstream method. | `grundfos-magna3-epd-2024` |
| `allocation_rejects` | rejected pumps and reworked components | Assign rework energy and material losses to the production batch that generated them. Pumps that do not become saleable reference output remain rejects or work in process and are excluded from the output denominator. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_receiving` | `component_preparation`; `pump_assembly` | casing, impeller, shaft, motor, bearing, and seal | BOM, goods receipt, weighing, production completion | part number; revision; supplier; quantity; unit mass; accepted mass; rejected mass; pump model; driver inclusion | reconcile controlled BOM to accepted receipts and released pump models; verify high-mass parts by scale | kg and item | each BOM revision and monthly reconciliation | same representative reporting period as output | all production sites in declared dataset | sum accepted component mass embodied in released pumps, then divide by net released pump mass | BOM approval, calibration record, receipt ledger, variance investigation |
| `cp_foreground_electricity` | `component_preparation`; `pump_assembly`; `production_testing` | process electricity | revenue meter, submeter, machine or test-rig log | opening and closing meter; kWh; process; machine time; test duration; allocation population; recovered electricity | use submeters where available; otherwise allocate a reconciled site meter using a causal physical driver | kWh, converted to MJ | continuous or each shift; aggregate monthly | at least 12 consecutive representative months or a justified production campaign | reporting factories only | subtract separately metered non-production loads and recovered electricity, allocate by process, convert to MJ, divide by net released pump mass | meter calibration, utility invoice reconciliation, allocation worksheet |
| `cp_scrap_records` | `component_preparation` | ferrous scrap for recycling | calibrated scale ticket and recycler transfer note | waste code; alloy family; gross and tare mass; contamination; destination; transfer date | weigh each outbound lot and verify destination against transfer documents | kg | each shipment | same representative reporting period as output | reporting factories only | sum qualifying ferrous scrap sent to recycling and divide by net released pump mass | scale calibration, transfer note, recycler acceptance |
| `cp_consumable_records` | `pump_assembly` | lubricant | purchase, issue, stock, and fill record | product code; formulation; opening stock; purchases; closing stock; other uses; measured fill; spills | mass balance purchases and inventory; segregate other products and non-pump uses | kg | monthly and each fill-setting change | same representative reporting period as output | reporting factories only | opening stock plus purchases minus closing stock minus verified other uses, divided by net released pump mass | inventory reconciliation, fill-equipment calibration, variance review |
| `cp_test_water_balance` | `production_testing` | test-water input and wastewater output | water meter, tank level, discharge meter, laboratory and maintenance record | make-up volume or mass; discharge volume or mass; density; temperature; retained inventory change; spills; treatment route; contamination | meter make-up and discharge; reconcile recirculating-loop inventory change; sample when contamination affects treatment identity | kg, with retained volume and density where converted | each test campaign or continuous; aggregate monthly | same representative reporting period as output | all production test loops in declared dataset | input equals discharge plus inventory change, evaporation or other separately evidenced losses; allocate to accepted pumps by causal test duration or duty | meter calibration, balance closure, sample result, treatment acceptance |
| `cp_packaging_records` | `packaging_release` | corrugated cardboard | packaging specification, purchase issue, packing and shipment record | packaging code; board grade; unit mass; quantity used; returned packaging; damaged packaging; pump model | reconcile packaging issues to packed, released pump shipments and verify unit mass | kg and item | each packaging design revision and monthly reconciliation | same representative reporting period as output | reporting packing sites | net cardboard consumed for shipped pumps divided by net released pump mass | controlled packaging specification, scale check, inventory reconciliation |
| `cp_finished_pump_mass` | `packaging_release` | net saleable pump output | calibrated scale, serial record, completion and release record | serial or lot; model; driver inclusion; net pump mass; packaging mass; pass/fail status; release date | weigh representative units or every unit as appropriate; reconcile released count and net mass to production ledger | kg and item | each released unit or statistically justified model lot | same representative reporting period as inputs | all release points in declared dataset | sum net mass of pumps passing release; exclude packaging, rejects, and work in process | scale calibration, release certificate, production ledger reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | component, lubricant, scrap, wastewater, and packaging rows | normalized amount = qualifying row mass / net released pump mass | collected row mass; net released pump mass | kg per kg net finished pump |  |
| `calc_normalize_electricity` | three foreground electricity rows | normalized electricity = allocated metered kWh × 3.6 / net released pump mass | metered kWh; allocation driver; net released pump mass | MJ per kg net finished pump |  |
| `calc_test_water_discharge` | `test_wastewater` | discharged mass = measured discharge mass; if unavailable, make-up mass minus verified loop inventory increase, evaporation, spills, and other separately measured destinations | make-up water; loop inventory change; evaporation or loss evidence; discharge measurements | kg wastewater per kg net finished pump |  |
| `calc_item_to_mass` | BOM components recorded by count | component mass = accepted item count × verified product-specific unit mass | accepted item count; controlled unit mass | kg component per kg net finished pump |  |
| `calc_reference_output` | `pump_product` | divide all qualifying exchanges by net released pump mass so the reference output equals exactly 1 kg | net mass of pumps passing release | 1 kg Pump |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and BOM | Identify pump model family, principle, pumped-liquid compatibility, driver boundary, duty point, wetted materials, seal arrangement, and market state; do not average configurations with materially different boundaries without a disclosed weighting method. | product specification, controlled BOM, release record, weighting worksheet |
| `dq_temporal_representativeness` | all foreground rows | Use at least 12 consecutive representative months unless production is campaign-based; explain shutdowns, abnormal tests, product-mix changes, and extrapolation. | reporting-period ledger and representativeness note |
| `dq_mass_balance` | components, output, scrap, and packaging | Reconcile incoming component and packaging mass, saleable pump mass, work in process, rejects, scrap, and documented stock change; investigate material residuals. | signed mass-balance worksheet and inventory records |
| `dq_meter_quality` | electricity and water | Use calibrated or legally controlled meters; state reading frequency, missing-data treatment, shared-meter allocation, conversion factors, and uncertainty. | calibration certificates, invoices, meter logs, gap-filling record |
| `dq_upstream_matching` | purchased products and waste treatment | Match geography, technology, product state, recycled content, and delivery boundary. Supplier-specific datasets are preferred for high-mass components; proxies require disclosure and sensitivity review. | dataset selection log and supplier evidence |
| `dq_completeness` | foreground inventory | Add separate atomic rows for every other material, component, chemical, energy carrier, packaging item, waste stream, and elementary emission that crosses the declared boundary; do not hide them under the rows in this PCR. | signed completeness checklist, purchase ledger, waste register, emissions permit reconciliation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm the reference output is exactly 1 kg net Pump, shipment packaging is excluded from pump mass, and all required qualifiers are present. |  |
| `validate_atomic_inventory` | all inventory exchanges | Reject collection labels or combined materials, utilities, wastes, and emissions. Every additional crossing must be represented by its own concrete flow row. |  |
| `validate_uuid_semantics` | UUID-bearing rows | Confirm public state, English and Chinese base names, flow type, classification, property, unit group, and product state remain semantically compatible with the foreground row. |  |
| `validate_mass_balance` | component preparation through release | Verify component, scrap, reject, work-in-process, net pump, and packaging balances close within the site's documented measurement uncertainty; unresolved residuals require correction or disclosure. |  |
| `validate_test_basis` | production testing | Verify test medium, test duty, duration, driver energy, water recirculation, and accepted-output denominator are declared. For the regulated clean-water rotodynamic subset, verify the applicable Commission Regulation (EU) No 547/2012 test basis. | `eu-water-pump-regulation-547-2012` |
| `validate_use_stage_separation` | downstream lifecycle model | Reject a use-stage result that derives operational electricity from pump mass alone. Require declared efficiency or measured power, duty/load profile, annual operating hours, electricity mix, controls, and service life. | `eu-water-pump-regulation-547-2012`; `grundfos-magna3-epd-2024` |
| `validate_unresolved_ranges` | important foreground flows | Treat the absence of independent, boundary-compatible empirical ranges as a review need, not as permission to invent bounds; retain foreground collection requirements until evidence is available. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-factory-gate foreground production package for a declared finished pump configuration |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product and project LCAs, supply-chain models, environmental declarations, procurement studies, and comparative work when product boundary, duty, driver inclusion, geography, technology, and data quality are compatible |
| excluded_use | Direct comparison of pump service efficiency from mass-based manufacturing data; automatic use-stage electricity estimation from pump mass; representing separately supplied parts as complete pumps; undisclosed mixing of bare-shaft and motor-integrated products |
| required_metadata | PCR id and version context; pump model family; pump principle; pumped liquid; rated flow and head or pressure; rated speed; efficiency/test basis; driver and controls included; wetted materials; seal arrangement; net pump mass; packaging mass; factory geography; reporting period; vertical integration; upstream dataset choices; allocation and cut-off decisions |
| required_quality_disclosure | Primary-data share; temporal coverage; meter and scale quality; BOM reconciliation; mass-balance closure; supplier-data coverage; proxy use; test-loop water balance; waste destinations; unresolved UUIDs; unresolved range evidence needs; uncertainty and data gaps |
| update_trigger | Material change in product construction, driver boundary, supplier route, manufacturing or test technology, packaging, factory energy mix, allocation method, reporting period, regulatory test basis, or newly verified UUID/range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 3.0 code and English product-category identity |
| `un-cpc-1-1-chinese-2008` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Official Chinese category terminology and confirmation that separately supplied parts are classified separately |
| `cn-nbs-product-classification-2010` | `official_guidance` | National Bureau of Statistics of China, Statistical Product Classification Catalogue, codes 351801-351803, https://www.stats.gov.cn/sj/tjbz/tjypflml/2010/35/3518.html (retrieved 2026-09-05) | Professional Chinese terminology distinguishing pumps, liquid elevators, and their parts |
| `eu-water-pump-regulation-547-2012` | `standard` | Commission Regulation (EU) No 547/2012 of 25 June 2012, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012R0547 (retrieved 2026-09-05) | Scope-limited clean-water rotodynamic pump definitions, performance-test basis, reproducibility, product information, use-stage significance, and disassembly information |
| `grundfos-magna3-epd-2024` | `dataset` | Grundfos Holding A/S and Institut Bauen und Umwelt e.V., Environmental Product Declaration EPD-GRU-20240273-CBA1-EN, 1 August 2024, https://www.rskdatabasen.se/infodocs/EPD/EPD_0000534.pdf (retrieved 2026-09-05) | Verified example of pump composition, manufacturing, assembly, packaging, factory data collection, reference-unit conversion, use electricity modelling, and end-of-life separation; not used to infer a cross-category numeric range |
