---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-parts-non-electrical-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machinery parts, non-electrical n.e.c.

## 1. Scope and Applicability

This PCR applies to finished, non-electrical parts for general-purpose machinery that fall within the residual product boundary of CPC 3.0 subclass 43949. It covers factory-gate manufacture of one declared part from purchased material or a purchased near-net precursor through the operations actually performed, including forming or cutting, machining, joining, heat treatment, cleaning, surface treatment, inspection, and final acceptance.

The data package shall identify one concrete part and one actual manufacturing route. The representative route is a machined non-alloy steel part; it does not authorize substitution of an umbrella material flow for the actual alloy, form, consumable, waste, or emission. Electrical parts, complete machines, parts specifically assigned to CPC 43941-43944, special-purpose machinery parts, installation and repair services, packaging, distribution after the factory gate, use, and end-of-life are outside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-parts-non-electrical-n-e-c |
| classification_refs | CPC 3.0: 43949, Machinery parts, non-electrical n.e.c. |
| covered_products | Finished non-electrical parts for the goods of CPC classes 4391-4393 that are not separately described in CPC 43941-43944; standard or customized parts are covered when the concrete product and route are declared. |
| excluded_products | Electrical machinery parts; parts classified in CPC 43941-43944; special-purpose machinery parts; complete machinery; maintenance services; packaging; use-stage and end-of-life activities. |
| representative_product | One quality-accepted machined non-alloy steel mechanical part with declared drawing, grade, dimensions, tolerances, and surface condition. |
| production_route | Purchased concrete material or near-net precursor; operation-specific forming/cutting, machining, joining, heat treatment, cleaning or surface treatment; inspection and acceptance. Operations not performed are excluded and disclosed. |
| market_state | Finished, cleaned, quality-accepted, unpackaged part at the manufacturer's factory gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished non-electrical machinery part that provides the declared mechanical fit, support, motion-transfer, sealing, housing, or load-bearing function in general-purpose machinery. |
| How much | 1 kg net mass of accepted finished part, excluding packaging. |
| How well | Conforms to the declared drawing or purchase specification for material grade, geometry, tolerances, heat-treatment state, surface condition, and acceptance criteria. |
| How long or cycle | One delivered factory-gate part; no service-life performance is claimed unless a study adds and substantiates it. |
| reference_flow_link | finished_machinery_part |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Standard mechanical components `823b5c17-40c2-4039-91ac-0a648ef9b910` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part name and drawing/revision; CPC applicability; material grade and input form; net part mass; dimensions and tolerance class; manufacturing operations; heat-treatment state; surface-treatment state; accepted/rejected quantity; factory-gate geography; reference period; allocation method |

When constructing a foreground data package, every required qualifier shall be declared in metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted part mass after all declared manufacturing and cleaning operations and before packaging; exclude fixtures, reusable carriers, temporary protective media, and packaging. |
| `material_mass_basis` | solid material inputs and solid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use batch issue, return, stock-change, and waste records on a consistent as-received basis; record alloy grade and physical form separately. |
| `electricity_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the meter reading and convert kWh to MJ using 1 kWh = 3.6 MJ; disclose the allocation of shared meters to the part route. |
| `gas_volume_conditions` | oxygen, carbon dioxide product gas, and natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record each gas separately and declare reference temperature, pressure, composition or grade, and meter or supplier basis; never aggregate gas species. |
| `batch_normalization` | all inventory exchanges | row-specific property | row-specific unit | Normalize batch totals by accepted finished-part mass. Keep the unnormalized batch quantity, accepted mass, reject mass, and calculation trace. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground manufacturing | Start with concrete purchased materials or near-net precursors entering the manufacturing boundary and end with the finished, cleaned, accepted, unpackaged part at the factory gate. Include only operations actually performed and identify forming/cutting, machining, joining, heat treatment, cleaning, surface treatment, inspection, and internal handling separately in source records. | `un-cpc-3-0-structure-2025`; `eu-commission-2021-2053-fabricated-metal-products` |
| `boundary_direct_exchanges` | foreground inventory | Include every direct material, electricity, fuel, process-water, process-chemical, gas, waste, wastewater, and elementary-emission exchange attributable to the declared route. Shared utilities may be allocated only under Section 7. | `eu-commission-2021-2053-fabricated-metal-products` |
| `boundary_upstream_links` | purchased inputs | Link each purchased input to an upstream dataset matching material or chemical identity, grade or concentration, product state, geography, technology, and delivery boundary; do not replace a concrete input with an unspecified umbrella flow. | `eu-commission-2021-2053-fabricated-metal-products` |
| `boundary_exclusions` | downstream and capital activities | Exclude packaging, distribution after the factory gate, use, maintenance, end-of-life, employee travel, and capital equipment unless the study goal explicitly expands the boundary and reports the expansion separately. | `un-cpc-3-0-structure-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Concrete purchased material or purchased near-net precursor received at the manufacturing site, with supplier identity, grade, form, mass, and delivery boundary declared. |
| starting_condition_role | Upstream-linked product input to the foreground manufacturing unit process. |
| product_classification_scope | Residual non-electrical machinery parts in CPC 3.0 subclass 43949; one concrete part is modelled per data package. |
| recursive_input_rule | A purchased input already within the same product category remains an explicit product input with its own supplier dataset and starting condition; do not recursively apply this PCR or absorb it into the reference output. |
| upstream_dataset_requirement | Use an upstream dataset matching the concrete material or part identity, grade, state, geography, technology, and supplier gate. Proxy use requires explicit justification and uncertainty disclosure. |
| disclosure | Declare the part drawing/revision, material and precursor state, operations included or absent, facility and period, supplier-data coverage, shared-meter allocation, waste destinations, and every boundary expansion. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| part_manufacturing | Manufacture and acceptance of non-electrical machinery part | required | Always; the unit process contains only the route operations actually performed, and each absent operation is disclosed. | Foreground conversion of concrete material or near-net precursor into the accepted factory-gate part. | 1 kg accepted finished unpackaged part |

### Process: Manufacture and acceptance of non-electrical machinery part (`part_manufacturing`)

#### Inputs

##### Product flows

###### Cold-drawn non-alloy steel bar for the representative machining route (`steel_bar_stock`)

Record this row only when the declared part is manufactured from cold-drawn non-alloy steel bar. Other material routes shall add separate cards for each concrete material and form; this row shall never stand for mixed or unspecified materials.

- Selected flow: Cold-drawn non-alloy steel bar
- Flow property / unit: Mass / kg
- Amount rule: measured bar mass issued to the batch minus unused bar returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

###### Purchased electrical energy (`electricity`)

Record metered electrical energy for the declared route, including attributable machine tools, pumps, extraction, compressed-air generation, cleaning and inspection equipment; allocate shared meters under Section 7.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or defensibly allocated electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

###### Process water (`process_water`)

Record process water that crosses the boundary for metalworking-fluid make-up, washing, rinsing, or declared surface treatment. Exclude closed-loop recirculation from repeated input accounting and disclose make-up and purge separately.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance make-up water used by the declared operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

###### Water-miscible metalworking-fluid concentrate (`metalworking_fluid_concentrate`)

Record the concrete concentrate only when used for cutting, grinding, or forming. Declare product name, supplier, concentration, density, and whether the amount is concentrate or prepared emulsion.

- Selected flow: Water-miscible metalworking-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued concentrate mass corrected for stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

###### Industrial oxygen for cutting or joining (`industrial_oxygen`)

Record industrial oxygen only when consumed by the declared thermal cutting or joining operation. Purity, supply state, pressure, reference conditions, and on-site generation boundary shall be declared.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered delivered volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

###### Carbon dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Record carbon dioxide product gas only when used as welding shielding gas. Declare grade, supplier, pressure, reference conditions, and fossil or biogenic origin.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: supplier-delivered mass or cylinder inventory change attributable to the declared joining operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

###### Gaseous natural gas for thermal operations (`natural_gas`)

Record natural gas only when burned in a declared furnace, oven, dryer, or other directly controlled thermal operation. Declare composition, net calorific value, meter reference conditions, and delivery boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered delivered volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_gas`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

###### Sodium hydroxide for alkaline cleaning or surface treatment (`sodium_hydroxide`)

Record sodium hydroxide only when a declared alkaline cleaning or surface-treatment bath consumes it. Report pure NaOH-equivalent mass and retain solution concentration and supplied mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: supplied solution mass multiplied by measured or supplier-certified NaOH mass fraction, corrected for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished non-electrical machinery part (`finished_machinery_part`)

This is the reference product after the declared manufacturing, cleaning, inspection, and acceptance operations and before packaging.

- Selected flow: Standard mechanical components `823b5c17-40c2-4039-91ac-0a648ef9b910`
- Flow property / unit: Mass / kg
- Amount rule: normalize accepted net product mass to exactly 1 kg; retain measured batch output and reject mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Segregated steel swarf from machining (`steel_swarf`)

Record steel swarf removed by machining as a waste output. Declare alloy family, coolant or oil carryover, weighing basis, storage moisture, and receiving treatment or recycling route.

- Selected flow: Steel swarf `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- Flow property / unit: Mass / kg
- Amount rule: measured net swarf mass leaving the process after documented drainage condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

###### Spent metalworking fluid sent to treatment (`waste_metalworking_fluid`)

Record spent metalworking fluid only when it leaves the foreground process for treatment or disposal. Declare fluid family, water and oil content, contaminants, drainage basis, and destination.

- Selected flow: Waste metalworking fluid `2468f4c0-46fa-4a8b-8075-686cf7391b00`
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass corrected for container tare and retained reusable fluid
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

###### Metal surface-treatment wastewater (`surface_treatment_wastewater`)

Record this wastewater only when aqueous cleaning or surface treatment produces a separately managed discharge. Declare source operation, pH, principal dissolved metals or treatment chemicals, suspended solids, water content, and destination.

- Selected flow: Metal surface-treatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or tank-balance mass leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`fossil_carbon_dioxide`)

Record only direct fossil carbon dioxide released by foreground fuel combustion or vented fossil carbon dioxide shielding gas. Upstream electricity emissions are excluded from this row and belong to the electricity supply dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct release or calculation from foreground fuel/gas quantity, documented carbon content, oxidation, and fossil fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_co2`
- Sources: `eu-commission-2021-2053-fabricated-metal-products`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | separable products, routes, batches, and operations | Avoid allocation by collecting product-, batch-, route-, and operation-specific records or by subdividing independently measurable processes. | `eu-recommendation-2021-2279-environmental-footprint` |
| `allocation_physical` | unavoidable shared inputs and emissions | When subdivision is not possible, use a documented causal physical relationship such as metered energy, machine time, treatment area, gas use, or bath loading that represents the driver of the shared exchange; do not default to mass merely because the reference flow is mass-based. | `eu-recommendation-2021-2279-environmental-footprint` |
| `allocation_other` | no defensible physical relationship | Use another relationship, including economic allocation, only after documenting why subdivision and causal physical allocation are infeasible; retain product-specific quantities, prices, period, currency, and sensitivity results. | `eu-recommendation-2021-2279-environmental-footprint` |
| `allocation_waste` | steel swarf, spent fluid, and wastewater | Keep these outputs as waste flows at the foreground gate. Do not subtract an avoided-product credit inside this unit process unless the declared downstream methodology explicitly requires it and the alternative result is reported transparently. | `eu-recommendation-2021-2279-environmental-footprint` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | part_manufacturing | concrete solid material input | purchase, issue, return and stock record | material identity; grade; form; supplier; batch; issued mass; returned mass; opening and closing stock | calibrated scale and inventory reconciliation | kg | each batch, reconciled monthly | representative continuous 12-month period or disclosed campaign | all included production lines | issued minus returned material, normalized by accepted product mass | scale calibration; stock reconciliation; supplier certificate; batch trace |
| `cp_electricity` | part_manufacturing | purchased electricity | meter and machine log | meter id; start/end readings; machine state; operation; batch; shared-load basis | dedicated meter preferred; otherwise documented submeter or engineering allocation | kWh and MJ | each batch or interval no longer than one month | same period as product output | all included machines and attributable auxiliaries | sum attributable kWh, convert to MJ, normalize by accepted product mass | meter calibration; tariff or utility reconciliation; allocation trace |
| `cp_process_water` | part_manufacturing | process-water make-up | meter, tank and batch record | source; meter readings; tank changes; operation; recirculation; purge; batch | dedicated meter or tank balance | kg or m3 with density | each batch or monthly | same period as product output | all included water-using operations | count boundary-crossing make-up once; normalize by accepted product mass | meter calibration; tank balance; density basis |
| `cp_process_chemicals` | part_manufacturing | metalworking fluid and sodium hydroxide | purchase, issue, concentration and stock record | product; supplier; lot; supplied mass; concentration; density; opening/closing stock; returned mass; operation | weighed issue and stock reconciliation; laboratory or supplier concentration | kg | each batch, reconciled monthly | same period as product output | all included chemical-using operations | calculate concrete product or pure-substance mass, normalize by accepted product mass | scale calibration; certificate of analysis; concentration test; stock reconciliation |
| `cp_process_gases` | part_manufacturing | oxygen and carbon-dioxide process gas | flowmeter or cylinder inventory | gas identity; grade; supplier; pressure; temperature; start/end cylinder mass or volume; operation; batch | calibrated flowmeter or cylinder mass balance | m3 or kg | each batch | same period as product output | all included cutting and joining operations | aggregate each gas separately at declared reference conditions, normalize by accepted product mass | meter calibration; supplier certificate; cylinder reconciliation |
| `cp_fuel_gas` | part_manufacturing | gaseous natural gas | meter and supplier record | meter readings; temperature; pressure; composition; net calorific value; operation; batch | calibrated dedicated meter or documented allocation from site meter | m3 | each batch or monthly | same period as product output | all included thermal operations | normalize reference-condition volume by accepted product mass | meter calibration; supplier statement; allocation trace |
| `cp_product_output` | part_manufacturing | accepted reference product | production and quality record | part id; drawing revision; batch; produced count; accepted count; reject count; net mass; rework status | calibrated scale linked to quality acceptance | kg and item | each batch | same period as all inputs | all included products and rejects | sum accepted net mass; normalize inventory to 1 kg | scale calibration; inspection record; batch genealogy |
| `cp_waste_mass` | part_manufacturing | steel swarf and spent metalworking fluid | waste transfer and scale record | waste identity; source operation; gross/tare/net mass; moisture or water/oil content; destination; date; batch | calibrated scale or verified waste contractor ticket | kg | each transfer, assigned to batches or period | same period as product output | all included waste collection points | subtract tare and retained reusable material, normalize by accepted product mass | scale calibration; transfer note; composition or drainage record |
| `cp_wastewater` | part_manufacturing | metal surface-treatment wastewater | discharge meter, tank and analytical record | source operation; volume or mass; density; pH; principal dissolved metals; suspended solids; treatment; destination; batch | calibrated meter or tank balance plus representative analysis | kg or m3 with density | each discharge and representative analysis | same period as product output | all included aqueous treatment discharges | aggregate only the concrete wastewater stream, normalize by accepted product mass | meter calibration; laboratory report; discharge or transfer record |
| `cp_direct_co2` | part_manufacturing | direct fossil carbon dioxide | stack measurement or fuel/gas calculation record | source operation; measured CO2; fuel/gas amount; carbon content; oxidation; fossil fraction; calculation version | direct measurement preferred; otherwise transparent stoichiometric calculation from foreground records | kg | each batch or monthly | same period as product output | all direct combustion and shielding-gas releases | sum direct fossil CO2 only, normalize by accepted product mass | instrument calibration or supplier composition; calculation audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | every inventory row | normalized exchange = attributable batch exchange / accepted net batch product mass | attributable exchange; accepted net product mass | row quantity per 1 kg accepted finished part | `eu-commission-2021-2053-fabricated-metal-products` |
| `calc_naoh_pure_mass` | sodium_hydroxide | pure NaOH-equivalent mass = supplied solution mass × measured or supplier-certified NaOH mass fraction | solution mass; NaOH mass fraction | kg Sodium hydroxide |  |
| `calc_fossil_co2` | fossil_carbon_dioxide | direct fossil CO2 = measured direct fossil CO2; if calculated, sum carbon-bearing foreground gas or fuel × documented carbon content × oxidation fraction × fossil fraction × 44/12, using mutually consistent mass units | gas/fuel quantity; carbon content; oxidation fraction; fossil fraction; direct measurement when available | kg carbon dioxide (fossil) |  |
| `calc_material_balance` | solid material route | reconcile concrete solid material input with accepted product, rejects, swarf, other separately named solid wastes, stock change, and measured process losses; investigate and disclose any residual rather than creating an unspecified waste row | issued/returned material; accepted product; rejects; each solid waste; stock change | material-balance residual and completeness finding | `eu-commission-2021-2053-fabricated-metal-products` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and material inputs | Use one concrete part identity and one concrete flow per material, consumable, waste, and emission; retain drawing revision, material certificate, supplier and batch trace. | product specification; material certificate; UUID audit or documented unresolved identity |
| `dq_measurement` | all measured exchanges | Use calibrated meters or scales and retain raw readings, units, conversions, allocation keys, zero/negative-value explanations, and reconciliation to invoices or transfer records. | calibration certificates; raw logs; reconciliation and calculation files |
| `dq_temporal` | foreground dataset | Use a continuous representative 12-month period where available; a shorter campaign shall state dates, production volume, operating modes, abnormal events, and representativeness limits. | dated production, meter, stock and waste records |
| `dq_completeness` | declared manufacturing route | Cover every operation actually performed and every direct atomic exchange; separately name additional materials, chemicals, fuels, wastes, wastewater streams, and elementary emissions not represented by the minimum inventory above. | route map; mass and energy reconciliation; completeness review |
| `dq_supplier_data` | upstream-linked inputs | Document supplier dataset identity, geography, technology, product state, time period, delivery boundary, substitutions, and uncertainty. | supplier declaration; dataset metadata; proxy justification |
| `dq_range_gap` | all important flows | Foreground records remain mandatory because no externally inferred empirical range met the two-independent-source requirement. Do not treat absence of a range as permission to use a default amount. | manifest range-evidence needs; collection-protocol records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product category and reference flow | Confirm CPC 43949 applicability, exclusion of electrical and separately classified parts, exact canonical PCR id, 1 kg accepted unpackaged output, and all required product qualifiers. | `un-cpc-3-0-structure-2025` |
| `validate_route` | process map and boundary | Confirm that each performed operation is disclosed, each absent operation is excluded, and each purchased input has a matching upstream dataset or documented proxy. | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_atomic_inventory` | process inventory | Reject umbrella or combined selected flows. Electricity, water, each gas, each chemical, each waste stream, each wastewater stream, and each elementary emission shall remain separate atomic rows with route conditions. | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_normalization` | quantities and units | Recalculate every normalized row from retained batch data; verify the kWh-to-MJ conversion, gas reference conditions, concentration calculations, accepted output mass, and no double counting of recirculated water or fluid. | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_mass_balance` | solid material route | Reconcile concrete material input, accepted product, rejects, swarf, each other solid waste, stock change, and measured losses; unresolved residuals are findings, not unnamed waste flows. | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_emissions` | direct fossil carbon dioxide | Confirm that only direct foreground fossil CO2 is recorded, the measured or calculation basis is retained, fossil fraction is declared, and upstream electricity emissions are excluded. | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_allocation` | shared and multifunctional operations | Confirm that subdivision was attempted first and that every remaining allocation key follows a documented causal physical relationship or a justified last-resort relationship with sensitivity information. | `eu-recommendation-2021-2279-environmental-footprint` |
| `validate_uuid_status` | inventory identity | Confirm each stored UUID by public state-100 direct read. Keep unresolved rows blank and visible; never substitute a rejected, narrower, broader, wrong-state, wrong-classification, or bilingual-conflicted candidate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit_process dataset for manufacture and acceptance of one declared non-electrical machinery part |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Attributional cradle-to-gate modelling of a matching finished non-electrical general-purpose machinery part with compatible drawing, material, route, geography, technology, period, boundary, and allocation. |
| excluded_use | Electrical parts; parts in CPC 43941-43944; special-purpose machinery parts; complete machines; service-life comparisons without functional equivalence; packaged product; downstream distribution, use, maintenance, and end-of-life. |
| required_metadata | canonical PCR id; CPC applicability; part and drawing/revision; material grade and form; net mass; route operations; heat and surface state; facility geography; period; meter and allocation coverage; accepted/reject mass; upstream datasets; waste destinations; unresolved UUIDs |
| required_quality_disclosure | primary-data share; metering and scale coverage; calibration; temporal representativeness; supplier-data quality; proxy use; mass-balance residual; shared-meter allocation; direct-emission method; missing range evidence; uncertainty and data gaps |
| update_trigger | Change in part drawing or material grade; route, machine, heat treatment or surface treatment; supplier mix; energy or gas source; facility or geography; allocation method; direct-emission method; waste destination; or a newly confirmed UUID or compatible independent range evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Product-category identity, residual hierarchy, and exclusions by classification. |
| `eu-commission-2021-2053-fabricated-metal-products` | official_guidance | Commission Decision (EU) 2021/2053 of 8 November 2021 on the sectoral reference document for the fabricated metal products manufacturing sector. https://publications.europa.eu/resource/cellar/1b58f2a1-4d96-11ec-91ac-01aa75ed71a1.0006.03/DOC_1 (retrieved 2026-09-06) | Operation-dependent manufacturing process decomposition; monitoring of energy, material, metalworking-fluid, water, waste, and related environmental performance. |
| `eu-recommendation-2021-2279-environmental-footprint` | official_guidance | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods. https://publications.europa.eu/resource/cellar/af96b549-6912-11ec-9136-01aa75ed71a1.0006.01/DOC_1 (retrieved 2026-09-06) | Multi-functionality hierarchy: subdivision or system expansion, physical relationship, then another justified relationship. |
