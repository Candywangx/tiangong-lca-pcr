---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.gas-turbines-other-than-turbo-jets-and-turbo-propellers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gas turbines other than turbo-jets and turbo-propellers

## 1. Scope and Applicability

This PCR covers cradle-to-factory-gate production of complete stationary, marine, and other non-aircraft gas turbines that convert fuel energy into mechanical shaft output. It includes purchased materials and components, directly controlled casting where performed, heat treatment, joining, machining, protective coating, assembly, inspection, and manufacturer acceptance testing when it occurs before the factory gate.

Turbo-jets, turbo-propellers, steam turbines, hydraulic turbines, generators, complete combined-cycle plants, site civil works, installation, distribution, use, maintenance, overhaul, and end-of-life are excluded. An aero-derivative unit is covered only when marketed as a non-aircraft mechanical-drive or power-generation gas turbine; the aircraft engine from which it derives is not covered. The product boundary is independently justified by the official CPC identity and by the distinct materials, manufacturing controls, and acceptance-test needs of industrial gas turbines.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.gas-turbines-other-than-turbo-jets-and-turbo-propellers |
| classification_refs | CPC 3.0: 43143, Gas turbines other than turbo-jets and turbo-propellers |
| covered_products | Complete open-cycle, closed-cycle, semi-closed-cycle, stationary, marine, mechanical-drive, power-generation, and non-aircraft aero-derivative gas turbines |
| excluded_products | Turbo-jets; turbo-propellers; steam turbines; hydraulic turbines and water wheels; generators sold separately; complete combined-cycle plants; parts sold separately; turbine manufacturing services on customer-owned inputs |
| representative_product | A complete industrial gas turbine comprising compressor, combustor, turbine section, shafting, casing, controls, and auxiliaries included in the declared supply scope |
| production_route | Purchased and/or in-house cast, forged, machined, joined, heat-treated, coated, assembled, inspected, and acceptance-tested components; each controlled step is declared |
| market_state | Complete gas turbine at the manufacturer's factory gate, unpackaged, with included auxiliaries and test status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a complete non-aircraft gas turbine capable of converting the declared fuel into mechanical shaft output |
| How much | 1 kg net mass of complete gas turbine in the declared factory-gate supply scope |
| How well | Meets the manufacturer's declared rated output, heat-rate or efficiency basis, fuel specification, emissions-control configuration, and acceptance criteria |
| How long or cycle | Production stage only; design service life and maintenance interval are declared metadata and no use-stage service is credited |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Gas turbine other than turbo-jets and turbo-propellers |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | rated shaft or electrical-equivalent output; simple/recuperated/closed/semi-closed cycle; stationary/marine/mechanical-drive application; fuel specification; dry net product mass; included compressor, combustor, turbine, controls, base, enclosure and auxiliaries; cooling method; coating system; factory-test status; production site; production year; recycled-content accounting method |

When constructing a foreground data package, every required qualifier shall be stated in metadata, process notes, the reference-flow comment, or an equivalent field. Product mass shall exclude transport packaging and separately supplied plant equipment.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use verified net dry product mass at the factory gate. Normalize each batch total by conforming product mass in the same declared supply scope. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 1 kWh = 3.6 MJ; do not convert electricity into fuel mass. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at the supplier or meter reference conditions and disclose temperature, pressure, and any conversion from standard volume. |
| `test_output_basis` | acceptance-test records | declared test units | declared test units | Retain measured fuel, electricity, duration, corrected power or shaft output, heat rate, exhaust flow, and test uncertainty in their native records; allocation to product mass shall use the tested serial-number scope. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased alloy, steel, aluminium, coating material, process chemical, energy carrier, water, and supplier-finished component at the receiving gate of the controlled manufacturing system |
| starting_condition_role | Cradle-to-gate upstream product inputs with supplier production outside the foreground; in-house transformation, assembly, and testing inside the foreground |
| product_classification_scope | Complete products within CPC 3.0 code 43143; parts, separate generators, and plant construction are outside this PCR identity |
| recursive_input_rule | A purchased complete gas turbine used as an input shall remain a separately modelled upstream product and shall not be re-expanded under this PCR; disclose its function and mass |
| upstream_dataset_requirement | Use geographically, technologically, temporally, compositionally, and product-state representative upstream datasets for every purchased input; proxies remain explicit data gaps |
| disclosure | Declare the controlled process list, purchased-versus-in-house component split, factory-test boundary, included auxiliaries, allocation, cut-offs, proxy use, recycled-content method, and packaging exclusion |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | foreground and upstream product system | Include upstream production of every recorded input and all directly controlled manufacturing, assembly, inspection, and applicable acceptance testing through the unpackaged factory-gate reference product. | `eu-pef-recommendation-2021-2279`; `us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles` |
| `boundary_no_silent_cutoff` | process and flow completeness | Do not omit a process or exchange merely because a UUID or preferred dataset is unavailable. Any applied cut-off shall be quantified, justified across material, energy, and environmental significance, and disclosed. | `eu-pef-recommendation-2021-2279` |
| `boundary_use_excluded` | downstream life cycle | Exclude installation, operation, maintenance, overhaul, and end-of-life from the reported cradle-to-gate inventory; report design-life and use assumptions only as metadata for downstream models. | `eu-pef-recommendation-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_manufacture` | Component manufacture, finishing, assembly, and inspection | required | Always include all directly controlled manufacturing and assembly steps; use zero only for an atomic exchange demonstrated absent | foreground production | 1 kg conforming complete gas turbine at factory gate |
| `acceptance_test` | Factory thermal performance acceptance test | conditional | Include when contractual, routine, or release testing consumes energy or causes emissions before the factory gate | foreground quality acceptance | Tested serial-number share allocated to 1 kg conforming product |

### Process: Component manufacture, finishing, assembly, and inspection (`integrated_manufacture`)

#### Inputs

##### Product flows

###### Nickel-base superalloy feedstock (`nickel_base_superalloy`)

Record purchased nickel-base superalloy entering cast or machined hot-gas-path components; alloy grade and incoming form are mandatory qualifiers.

- Selected flow: Nickel-base superalloy
- Flow property / unit: Mass / kg
- Amount rule: measured received mass minus returned unopened material, allocated to conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receipts`
- Sources: `us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### Alloy-steel feedstock (`alloy_steel`)

Record turbine-grade alloy steel used for shafts, discs, fasteners, casings, or other declared parts; keep each foreground grade traceable in the underlying bill of materials.

- Selected flow: Alloy steel
- Flow property / unit: Mass / kg
- Amount rule: measured received mass consumed in the declared product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receipts`
- Sources:

###### Carbon-steel feedstock (`carbon_steel`)

Record carbon steel for base, enclosure, casing, piping, and other declared parts by received mass.

- Selected flow: Carbon Steel `b3b18433-8fd1-4298-98f5-8af11eb64762`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass consumed in the declared product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receipts`
- Sources:

###### Aluminium-alloy feedstock (`aluminium_alloy`)

Record aluminium alloy only when it is present in the declared design; alloy family and product form remain foreground qualifiers.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass consumed when aluminium-alloy parts are present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receipts`
- Sources:

###### Yttria-stabilized zirconia coating material (`ysz_coating`)

Record yttria-stabilized zirconia powder when a ceramic thermal-barrier top coat is applied within the foreground.

- Selected flow: Yttria-stabilized zirconia coating material
- Flow property / unit: Mass / kg
- Amount rule: issued coating material minus documented recoverable return when a ceramic top coat is applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receipts`
- Sources: `us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### MCrAlY metallic bond-coat alloy powder (`mcraly_bond_coat`)

Record MCrAlY alloy powder when a metallic bond coat or overlay is applied within the foreground.

- Selected flow: MCrAlY metallic bond-coat alloy powder
- Flow property / unit: Mass / kg
- Amount rule: issued bond-coat powder minus documented recoverable return when the coating route applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receipts`
- Sources: `us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### Purchased electricity (`manufacturing_electricity`)

Record electricity metered for directly controlled casting, heat treatment, machining, joining, coating, assembly, inspection, and allocated facility support.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: metered electricity attributed to the production batch under the documented allocation rule
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_utilities`
- Sources:

###### Gaseous natural gas for manufacturing heat (`manufacturing_natural_gas`)

Record gaseous natural gas combusted in directly controlled furnaces or heat-treatment equipment; omit only when no such equipment serves the product.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered standard or actual volume allocated to the production batch with reference conditions disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_utilities`
- Sources:

###### Industrial oxygen (`industrial_oxygen`)

Record supplied industrial oxygen when oxy-fuel cutting, welding, or another declared foreground operation consumes it.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: supplier-metered volume attributed to the product batch when oxygen-consuming operations apply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_utilities`
- Sources:

###### Process water (`process_water`)

Record water crossing the foreground boundary for cleaning, aqueous machining, surface preparation, or pressure testing; cooling loops count only net make-up water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered net process-water input allocated to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_utilities`
- Sources:

###### Sodium hydroxide for surface treatment (`sodium_hydroxide`)

Record sodium hydroxide product mass when an alkaline cleaning or surface-treatment bath serving the product is directly controlled; disclose solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: pure-product-equivalent mass replenished to applicable baths and allocated to the product batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete gas turbine reference product (`reference_product`)

Record only conforming complete gas-turbine mass in the declared supply scope; rejected units remain work in process or waste and are not reference product.

- Selected flow: Gas turbine other than turbo-jets and turbo-propellers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: verified net dry mass of conforming complete product leaving the factory gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Segregated steel scrap (`steel_scrap`)

Record steel offcuts, turnings, and rejected steel parts leaving the foreground as one segregated waste exchange.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured steel scrap dispatched from the product batch, excluding internally remelted return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

###### Segregated nickel-alloy scrap (`nickel_alloy_scrap`)

Record nickel-alloy gates, risers, turnings, and rejected parts leaving the foreground; exclude internally remelted returns.

- Selected flow: Nickel-alloy scrap
- Flow property / unit: Mass / kg
- Amount rule: measured nickel-alloy scrap dispatched from the product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources: `us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### Spent investment-casting ceramic shell (`spent_ceramic_shell`)

Record broken ceramic mold and core material leaving the foreground when investment casting is directly controlled.

- Selected flow: Spent investment-casting ceramic shell
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass dispatched from applicable investment-casting operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources: `us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### Waste cutting oil (`waste_cutting_oil`)

Record spent oil-based cutting fluid leaving machining after subtracting recovered oil returned to the same foreground loop.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured dispatched mass attributable to machining for the product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from manufacturing heat (`manufacturing_carbon_dioxide`)

Record direct fossil carbon dioxide released from natural-gas combustion inside the integrated manufacturing boundary; upstream fuel emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured stack mass or site-approved fuel-carbon calculation allocated to the product batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete gas turbine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Factory thermal performance acceptance test (`acceptance_test`)

#### Inputs

##### Product flows

###### Test electricity (`test_electricity`)

Record electricity consumed by test auxiliaries, instrumentation, controls, pumps, and cooling equipment during applicable factory testing.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: test-meter electricity assigned to the tested serial numbers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: tested serial-number share per 1 kg conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_test`
- Sources: `asme-ptc-22-2023`

###### Gaseous natural gas for testing (`test_natural_gas`)

Record gaseous natural gas burned during factory testing when the tested configuration uses gas fuel.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: test-metered volume assigned to tested serial numbers with reference conditions disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: tested serial-number share per 1 kg conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_test`
- Sources: `asme-ptc-22-2023`

###### Diesel fuel for testing (`test_diesel`)

Record diesel mass only when the contractual or production test uses liquid diesel fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed or supplier-metered diesel consumed by applicable test runs and assigned to tested serial numbers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: tested serial-number share per 1 kg conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_test`
- Sources: `asme-ptc-22-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from testing (`test_carbon_dioxide`)

Record direct fossil carbon dioxide released by all declared fossil test fuels; upstream fuel-production emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured exhaust mass or site-approved fuel-carbon calculation assigned to tested serial numbers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: tested serial-number share per 1 kg conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_emissions`
- Sources:

###### Fossil carbon monoxide from testing (`test_carbon_monoxide`)

Record direct fossil carbon monoxide in test exhaust on the facility's declared measurement basis.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured exhaust concentration and dry or wet flow integrated over applicable test duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: tested serial-number share per 1 kg conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_emissions`
- Sources:

###### Fossil methane from testing (`test_methane`)

Record direct unburned fossil methane in test exhaust when gas fuel is used and the emission is measured or otherwise quantified.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured exhaust concentration and flow integrated over gas-fuel test duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: tested serial-number share per 1 kg conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_emissions`
- Sources:

###### Nitrogen oxides from testing (`test_nitrogen_oxides`)

Record aggregate combustion nitrogen oxides using the facility's explicitly declared reporting species and conversion basis; do not substitute nitrous oxide or nitrogen monoxide identity silently.

- Selected flow: Nitrogen oxides
- Flow property / unit: Mass / kg
- Amount rule: measured NOx concentration and exhaust flow integrated over applicable test duration, with reporting basis declared
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: tested serial-number share per 1 kg conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared manufacturing and test operations | First subdivide meters, work orders, test logs, and waste records by product family, batch, or serial number whenever physically possible. | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_causal` | inseparable shared operations | If subdivision is not possible, use a documented causal physical driver such as machine time, furnace occupancy, treated area, test duration, or measured product mass; demonstrate why it represents resource use. | `eu-pef-recommendation-2021-2279` |
| `allocation_economic_last_resort` | inseparable multi-product operations | Use economic allocation only when no defensible physical relationship exists; disclose prices, period, currency, volatility treatment, and sensitivity. | `eu-pef-recommendation-2021-2279` |
| `allocation_scrap` | metal scrap and recovered process material | Internally reused material does not cross the process boundary. Record material leaving the foreground as waste without avoided-burden credit; downstream recycling treatment belongs to the receiving system unless the study explicitly expands the boundary. | `eu-pef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_receipts` | `integrated_manufacture` | material inputs | ERP receipt, issue, return, and bill-of-material record | material identity; grade; form; supplier; received mass; issued mass; returned mass; batch; serial numbers | reconcile supplier weighing with controlled stores and product BOM | kg | each receipt and production issue | full representative production year or declared batch | all controlled sites supplying the reference product | net consumed mass by material and product batch divided by conforming product mass | calibrated scale records; supplier certificates; BOM revision; reconciliation sign-off |
| `cp_factory_utilities` | `integrated_manufacture` | electricity, fuel, oxygen, water, and process chemical | meter, invoice, tank, and bath-replenishment record | meter start/end; submeter; volume reference conditions; delivered mass or volume; concentration; operating hours; production driver | read calibrated submeters; reconcile to invoices; calculate pure sodium-hydroxide mass from solution concentration | MJ; m3; kg | each batch where available and at least monthly | full representative production year | all controlled manufacturing buildings | direct assignment, then documented causal allocation, divided by conforming product mass | calibration certificates; invoices; meter map; concentration analysis; allocation worksheet |
| `cp_product_release` | `integrated_manufacture` | reference product | serial-number release and weighing record | serial number; configuration; included auxiliaries; dry net mass; acceptance status; release date | calibrated final weighing or verified component mass roll-up | kg | each released unit | full declared batch or production year | final assembly and release site | sum conforming net dry mass in identical supply scope | scale calibration; signed release certificate; configuration baseline |
| `cp_waste_dispatch` | `integrated_manufacture` | segregated waste outputs | waste scale ticket and manifest | waste identity; source operation; gross/tare/net mass; contamination; destination; date; batch attribution | weigh each segregated dispatch and reconcile accumulation periods to work orders | kg | each dispatch | full representative production year | all controlled manufacturing buildings | direct batch attribution or causal allocation divided by conforming product mass | scale ticket; waste manifest; segregation audit; mass reconciliation |
| `cp_direct_emissions` | `integrated_manufacture` | manufacturing combustion emissions | continuous or periodic stack record and fuel record | pollutant; concentration; exhaust flow; moisture; oxygen correction; duration; fuel carbon; oxidation basis | integrate validated stack measurements or apply a site-approved fuel-carbon method | kg | each measured event and monthly fuel reconciliation | full representative production year | all directly controlled combustion units serving the product | allocate measured or calculated mass by documented causal driver to conforming product mass | instrument calibration; laboratory QA; fuel analysis; method approval |
| `cp_acceptance_test` | `acceptance_test` | test energy inputs | serial-number test log and calibrated meter record | serial number; configuration; fuel identity; fuel amount; electricity; duration; corrected output; heat rate; exhaust flow; uncertainty | follow the declared contractual test procedure and calibrated instrumentation plan | m3; kg; MJ; h; declared performance units | every applicable test run | all tests represented by the dataset | factory test stand | direct serial-number assignment divided by tested conforming product mass | approved procedure; meter calibration; uncertainty analysis; signed test report |
| `cp_test_emissions` | `acceptance_test` | test exhaust elementary flows | emissions test record | pollutant species; reporting basis; concentration; dry/wet flow; moisture; oxygen correction; duration; fuel identity; serial number | integrate calibrated concentration and exhaust-flow measurements; retain all conversions | kg | every emissions measurement used | all applicable test runs represented by the dataset | factory test stand | direct serial-number assignment divided by tested conforming product mass | instrument calibration; laboratory QA; calculation workbook; signed test report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_batch_normalization` | every batch inventory exchange | normalized exchange = exchange assigned to conforming batch / net dry mass of conforming complete turbines in the same supply scope | assigned exchange; conforming product mass | exchange per kg reference product |  |
| `calc_solution_mass` | sodium hydroxide solution | pure-product-equivalent mass = delivered solution mass × measured mass fraction; retain solution water separately when material | solution mass; concentration | kg sodium hydroxide |  |
| `calc_exhaust_mass` | test carbon monoxide, methane, and nitrogen oxides | pollutant mass = time integral of concentration × compatible dry or wet exhaust flow after documented reference-condition, moisture, and oxygen-basis conversions | concentration series; exhaust flow; duration; conversion data | kg pollutant | `asme-ptc-22-2023` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | Match serial number, configuration, material grade, supplier, product form, and included-auxiliary scope to the inventory period; do not use a generic flow to hide a known distinct material. | release record; BOM; supplier certificate; UUID audit |
| `dq_measurement` | meters, scales, and emissions instruments | Use calibrated instruments, retain raw readings and conversions, and quantify uncertainty for acceptance-test measurements. | calibration certificate; uncertainty analysis; test report |
| `dq_temporal` | annual or batch dataset | Cover a representative production year or disclose the exact batch/test window, shutdowns, prototypes, rework, and production-rate differences. | production calendar; work orders; test schedule |
| `dq_completeness` | all foreground processes | Reconcile material inputs to product, internal return, and dispatched waste; reconcile utilities to invoices; disclose excluded processes and environmental significance. | mass balance; invoice reconciliation; cut-off register |
| `dq_representativeness` | upstream datasets | Document geography, technology, time, alloy/product state, recycled-content model, fuel quality, electricity mix, and proxy limitations. | dataset metadata and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | reference product | Confirm the product is a complete non-aircraft gas turbine, not a turbo-jet, turbo-propeller, hydraulic or steam turbine, generator, separate part, plant, or manufacturing service. | `un-cpc-3-0-structure-2025` |
| `validate_reference_mass` | functional unit and reference flow | Confirm exactly 1 kg net dry conforming product in a consistent included-auxiliary scope and verify the output row links to `reference_product`. |  |
| `validate_atomic_inventory` | every inventory row | Confirm each selected flow is one atomic exchange with a compatible direction, flow type, property, unit, condition, and UUID decision; reject umbrella rows. |  |
| `validate_test_condition` | `acceptance_test` | Include test inputs and emissions only when testing occurs before the factory gate; link every value to tested serial numbers and a declared procedure. | `asme-ptc-22-2023` |
| `validate_completeness` | foreground inventory | Reconcile BOM receipts, product mass, metal scrap, other wastes, utilities, and direct combustion emissions; quantify and justify every cut-off or proxy. | `eu-pef-recommendation-2021-2279` |
| `validate_bilingual_uuid` | bilingual PCR | Confirm every UUID-bearing Chinese selected-flow name is the exact public Tiangong Chinese baseName and that ordered rule and row identifiers match English. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-factory-gate foreground production dataset for a complete non-aircraft gas turbine |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product carbon footprint, life-cycle inventory, turbine-system and power-plant models when product configuration, included auxiliaries, geography, technology, year, and factory-test status are compatible |
| excluded_use | Direct substitution for turbo-jets, turbo-propellers, steam or hydraulic turbines, separate components, generators, combined-cycle plants, installation, use, maintenance, overhaul, or end-of-life |
| required_metadata | PCR id; product model and serial/batch scope; rated output; cycle; application; fuel; dry net mass; included auxiliaries; coating/cooling configuration; production sites and year; controlled process list; supplier/in-house split; test procedure and status; allocation; cut-offs; proxies; recycled-content method |
| required_quality_disclosure | Temporal, geographic, and technological representativeness; mass and utility reconciliation; instrument calibration; test uncertainty; upstream dataset quality; unresolved UUIDs; missing independent range evidence; limitations |
| update_trigger | Material design or alloy change; coating or cooling route change; supplier or site change; new test procedure or fuel; material change in annual specific electricity, fuel, product yield, or major scrap rate; corrected UUID; or newly verified independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43143 product identity and exclusions encoded by the label |
| `us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles` | handbook | U.S. Department of Energy, National Energy Technology Laboratory, Gas Turbine Handbook, section 4.4.1, Buckets and Nozzles, https://www.netl.doe.gov/sites/default/files/gas-turbine-handbook/4-4-1.pdf (retrieved 2026-09-05) | Industrial gas-turbine hot-section materials; investment casting; heat treatment; joining; machining; coating; inspection; YSZ and MCrAlY process decomposition |
| `asme-ptc-22-2023` | standard | ASME PTC 22-2023, Gas Turbines, https://www.asme.org/codes-standards/find-codes-standards/gas-turbines (retrieved 2026-09-05) | Conditional factory thermal-performance testing, corrected performance and exhaust measurements, test planning, uncertainty, and reporting |
| `eu-pef-recommendation-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated 30 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-05) | Functional unit and reference flow, system boundary, company-specific data quality, cut-off disclosure, allocation hierarchy, and recycling modelling |
