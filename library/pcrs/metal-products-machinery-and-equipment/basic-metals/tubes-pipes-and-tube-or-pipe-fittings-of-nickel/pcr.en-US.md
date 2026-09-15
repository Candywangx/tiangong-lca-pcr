---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-nickel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tubes, pipes and tube or pipe fittings, of nickel

## 1. Scope and Applicability

This PCR applies to factory-made tubes, pipes, and wrought tube or pipe fittings whose declared material is nickel or a nickel alloy and that leave the manufacturing site as accepted saleable products. It covers seamless and welded tube or pipe routes and wrought fitting routes. The foreground boundary begins with prepared nickel or nickel-alloy feedstock at the manufacturing site and ends with accepted product at the factory gate.

Cast fittings, hose assemblies, valves, fabricated piping systems, installation, use, maintenance, and end-of-life are excluded. Stainless-steel products are excluded unless the declared product is marketed and classified as a nickel-alloy product. Upstream mining, refining, alloy production, and manufacture of purchased feedstock remain in linked background datasets rather than the foreground gate-to-gate inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-nickel |
| classification_refs | CPC 3.0: 41524, exact classification context |
| covered_products | Seamless or welded nickel and nickel-alloy tubes and pipes; factory-made wrought nickel and nickel-alloy tube or pipe fittings, including elbows, bends, caps, tees, reducers, couplings, sleeves, and stub ends when sold as fittings |
| excluded_products | Cast fittings; stainless-steel tubes, pipes, or fittings not declared as nickel-alloy products; hoses; valves; complete fabricated piping systems; installed piping service |
| representative_product | One accepted factory-gate lot of a declared nickel or nickel-alloy tube, pipe, or wrought fitting |
| production_route | Declared seamless tube or pipe, welded tube or pipe, or wrought fitting route, including the actual forming, heat-treatment, descaling, finishing, and testing operations used |
| market_state | Finished, inspected product at factory gate in the declared grade, dimensions, heat-treatment condition, surface condition, and test condition |

ASTM B161-25 identifies cold-worked seamless nickel pipe and tube and associated test conditions. ASTM B619/B619M-19(2023) identifies welded nickel-alloy pipe made from flat-rolled alloy, with welding, optional cold work, solution annealing, descaling, and testing. ASTM B366/B366M-25 identifies factory-made wrought nickel and nickel-alloy fittings, excludes cast fittings, and describes eligible feedstock forms and shaping routes.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an accepted nickel or nickel-alloy tube, pipe, or wrought tube or pipe fitting in the declared grade, geometry, and manufacturing condition at the factory gate |
| How much | 1,000 kg accepted product |
| How well | Conforms to the declared material, dimensional, heat-treatment, surface-condition, and inspection or test specification |
| How long or cycle | One production lot at the factory gate; no use-stage service duration is represented |
| reference_flow_link | The reference flow is the measured accepted-product mass normalized to 1,000 kg after rejects and fabrication scrap have been separated |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Tubes, pipes and tube or pipe fittings, of nickel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; nickel or nickel-alloy grade and material standard; seamless, welded, or wrought-fitting route; nominal dimensions and wall thickness; heat-treatment condition; surface and descaling condition; inspection or test standard; manufacturing geography; production technology; feedstock recycled-content claim; production period; accepted-product yield |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all solid nickel-bearing inputs or outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine mass from calibrated scales or traceable shipment and production records. Normalize all inventory amounts to 1,000 kg accepted product; do not substitute nominal length, piece count, or theoretical mass without a documented conversion and reconciliation to accepted mass. |
| `gas_volume_conditions` | gaseous natural gas and industrial argon | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State pressure, temperature, and dry/wet basis for gas volumes and convert all records to one declared reference condition before aggregation. |
| `electricity_energy` | purchased or on-site electrical energy crossing the foreground boundary | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered energy basis and document the conversion used when source records are in kWh; 1 kWh equals 3.6 MJ. Do not include upstream generation emissions as direct foreground emissions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared nickel or nickel-alloy billet, flat-rolled material, forging stock, or another individually identified feedstock is received at the manufacturing site with grade, form, mass, recycled-content claim, supplier, and upstream dataset recorded |
| starting_condition_role | Purchased product input to gate-to-gate tube, pipe, or fitting manufacture |
| product_classification_scope | Factory-made nickel and nickel-alloy tubes, pipes, and wrought tube or pipe fittings represented by the reviewed semantic boundary; CPC 3.0 code 41524 is classification context only |
| recursive_input_rule | A tube, pipe, or fitting from the same product category used as fitting feedstock is recorded once as an individually identified product input with its upstream dataset; its manufacture is not recursively expanded inside the foreground process |
| upstream_dataset_requirement | Every purchased nickel-bearing feedstock, utility, and ancillary product input must link to a geography-, technology-, and grade-appropriate upstream dataset or disclose the proxy and its limitation |
| disclosure | Declare product form, grade, route, feedstock forms, heat-treatment and descaling operations, testing method, site geography, technology, allocation, recycled-content accounting, exclusions, and any unlisted actual exchange added to the foreground inventory |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground system | Include receipt and preparation of declared feedstock, forming or shaping, welding where used, heat treatment, descaling or surface finishing, inspection or testing, internal handling, and management of generated scrap and process wastewater through the factory gate. Exclude upstream feedstock production, product installation, use, and end-of-life; link required upstream product inputs to background datasets. | `astm-b161-25`; `astm-b619-b619m-19r23`; `astm-b366-b366m-25` |
| `boundary_route_disclosure` | route selection | Model only the declared seamless, welded, or wrought-fitting route and the actual operations performed. Record controlled-atmosphere heat treatment, cold working, chemical or mechanical descaling, and hydrostatic or nondestructive testing as performed rather than assuming every route uses every operation. | `astm-b161-25`; `astm-b619-b619m-19r23`; `astm-b366-b366m-25` |
| `boundary_atomic_completeness` | foreground exchanges | Add every actual unlisted material, gas, chemical, lubricant, waste, and elementary emission as a separate chemically or physically specific exchange. Do not replace atomic exchanges with utility, chemical, packaging, waste, or emission groups. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_nickel_product_manufacture` | Integrated nickel tube, pipe, or fitting manufacture | required |  | Foreground receipt, forming or shaping, route-specific welding, heat treatment, descaling, finishing, testing, and acceptance | 1,000 kg accepted product |

The single integrated process prevents route variants from multiplying common utilities. Route-conditional rows remain atomic, and the data producer adds any actual exchange not represented below as another atomic row.

### Process: Integrated nickel tube, pipe, or fitting manufacture (`integrated_nickel_product_manufacture`)

#### Inputs

##### Product flows

###### Seamless-route billet feedstock (`nickel_alloy_billet`)

Record the mass of nickel or nickel-alloy billet that physically enters the process when the declared product follows a seamless extrusion, piercing, or drawing route.

- Selected flow: Nickel-alloy billet
- Flow property / unit: Mass / kg
- Amount rule: measured received mass consumed by the declared seamless production lot; use `not_applicable` only when the selected route does not use billet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Welded-route flat-rolled feedstock (`flat_rolled_nickel_material`)

Record the mass of flat-rolled nickel material that is formed and welded when the declared product follows a welded tube or pipe route.

- Selected flow: Flat-rolled nickel material
- Flow property / unit: Mass / kg
- Amount rule: measured flat-rolled feedstock mass consumed by the declared welded production lot; use `not_applicable` only when the selected route does not use flat-rolled feedstock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Fitting-route forging feedstock (`nickel_alloy_forging`)

Record the mass of nickel-alloy forging stock that is shaped into a wrought fitting when this feedstock form is used. Other actual fitting feedstock forms must be added as their own atomic rows.

- Selected flow: Nickel-alloy forging
- Flow property / unit: Mass / kg
- Amount rule: measured forging mass consumed by the declared fitting production lot; use `not_applicable` only when the selected route does not use forging stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Electrical energy (`electricity`)

Record metered electrical energy consumed by forming, welding, heat treatment, finishing, testing, ventilation, and directly attributable auxiliary equipment within the foreground boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated to the declared production lot and converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources:

###### Gaseous natural gas (`natural_gas`)

Record natural gas combusted on site for furnaces or other directly attributable heating. Use `not_applicable` when no natural gas crosses the foreground boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or purchase-reconciled gas volume at the declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_records`
- Sources:

###### Process water (`process_water`)

Record net process water supplied for cooling, rinsing, descaling, cleaning, or hydrostatic testing when it crosses the foreground boundary. Exclude recirculated water that does not cross the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water mass, or measured volume converted with documented density, less separately metered return leaving as product water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_records`
- Sources:

###### Argon shielding gas (`industrial_argon`)

Record industrial argon supplied to welding or protected-atmosphere operations when it physically crosses the foreground boundary. Do not combine it with carbon dioxide, helium, nitrogen, or another gas.

- Selected flow: Industrial argon
- Flow property / unit: Volume / m3
- Amount rule: metered, cylinder-stock-reconciled, or supplier-invoiced argon volume at the declared reference conditions; use `not_applicable` when argon is not used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_argon_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reference product (`reference_product`)

Record only product that has passed the declared dimensional, condition, and inspection or test requirements at the factory gate. Rejects and offcuts are not included in this output.

- Selected flow: Tubes, pipes and tube or pipe fittings, of nickel
- Flow property / unit: Mass / kg
- Amount rule: measured accepted-product mass normalized to exactly 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accepted_product_records`
- Sources:

##### Waste flows

###### Segregated nickel-alloy fabrication scrap (`nickel_alloy_fabrication_scrap`)

Record offcuts, chips, trimmings, rejected pieces, and other metallic fabrication scrap only when they are segregated as one nickel-alloy scrap stream with the declared grade family. Smelter slag is not this flow.

- Selected flow: Nickel-alloy fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the foreground process as segregated nickel-alloy fabrication scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_records`
- Sources:

###### Nickel-bearing process wastewater (`nickel_bearing_process_wastewater`)

Record aqueous waste from wet descaling, rinsing, cleaning, or hydrostatic-test water management only when it leaves the foreground process as a separately characterized nickel-bearing wastewater stream.

- Selected flow: Nickel-bearing process wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater volume leaving the foreground boundary; use `not_applicable` when no such wastewater stream leaves the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`carbon_dioxide_fossil`)

Calculate only the direct fossil carbon dioxide emitted from natural gas combusted inside the foreground boundary. Upstream fuel-supply and electricity-generation emissions remain in background datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: recorded natural-gas use multiplied by the documented site, supplier, or jurisdictional carbon content and oxidation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_natural_gas_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared operations | Prefer subdivision, separate metering, production-order records, or physically traceable consumption so the declared nickel product receives its measured inputs and outputs without allocation. |  |
| `allocation_shared_services` | unavoidable shared utilities and services | When subdivision is not practicable, allocate shared electricity, fuel, water, and common services using the causal physical driver documented for that operation, such as machine time, furnace occupancy, processed mass, or tested length. Disclose the driver and sensitivity. |  |
| `allocation_scrap` | nickel-alloy fabrication scrap | Record scrap mass and destination separately. Do not subtract scrap from feedstock input or credit avoided primary nickel inside the gate-to-gate inventory. If a study applies a recycling allocation or substitution credit, report it outside the uncredited foreground inventory and disclose the method. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `integrated_nickel_product_manufacture` | nickel-bearing feedstock | weighbridge, scale, goods-receipt, stock, and production-order records | material grade; product form; supplier; lot; gross mass; tare; returned mass; route | reconcile calibrated mass records to production orders and inventory movements | kg | each receipt and production lot | representative continuous 12-month period or all lots in a shorter declared campaign | all foreground manufacturing operations | sum net consumed mass by atomic feedstock row, then normalize by accepted-product mass | scale calibration; material certificates; purchase and stock reconciliation; lot traceability |
| `cp_electricity_records` | `integrated_nickel_product_manufacture` | electricity | submeter and facility meter records | meter id; opening and closing readings; kWh; production order; allocation driver | use submetered consumption first; reconcile to facility totals and document any allocation | kWh and MJ | each shift or production lot; monthly reconciliation | representative continuous 12-month period or declared campaign | all included equipment and attributable auxiliaries | convert kWh to MJ, allocate only unavoidable shared use, and normalize by accepted-product mass | meter calibration; invoices; reconciliation and allocation worksheet |
| `cp_natural_gas_records` | `integrated_nickel_product_manufacture` | natural gas and direct fossil CO2 | gas meter, invoice, fuel analysis, and production records | volume; pressure; temperature; dry or wet basis; carbon content or calorific value; oxidation basis; furnace; production order | reconcile meters and invoices; retain the factor source used for direct CO2 calculation | m3 and kg CO2 | each production lot or monthly with production-order allocation | representative continuous 12-month period or declared campaign | on-site combustion within the foreground boundary | correct volume to the declared condition, allocate by causal furnace driver, calculate direct CO2, and normalize by accepted-product mass | meter calibration; invoices; gas specification; factor document; calculation worksheet |
| `cp_process_water_records` | `integrated_nickel_product_manufacture` | process water | water meters, tank records, and operating logs | inlet volume or mass; return; discharge; density; operation; production order | meter make-up and separately metered return; document density conversion where used | kg and m3 | each shift or production lot; monthly reconciliation | representative continuous 12-month period or declared campaign | all included wet operations | calculate net boundary-crossing process water and normalize by accepted-product mass | meter calibration; water balance; density basis; operating log |
| `cp_argon_records` | `integrated_nickel_product_manufacture` | industrial argon | gas meter, cylinder stock, and invoice records | gas identity; purity; cylinder capacity; opening and closing stock; receipts; pressure; temperature; production order | meter or reconcile cylinder stock and purchases, excluding other shielding gases | m3 | each production lot; monthly reconciliation | representative continuous 12-month period or declared campaign | welding or protected-atmosphere operations that use argon | correct to the declared volume condition and normalize by accepted-product mass | gas certificate; meter calibration or cylinder reconciliation; invoices |
| `cp_accepted_product_records` | `integrated_nickel_product_manufacture` | accepted product | calibrated scale, production, inspection, and test records | product form; grade; dimensions; route; lot; measured mass; disposition; test status | sum only accepted saleable product mass linked to the declared lot | kg | each production lot | all represented lots | factory-gate accepted product | divide every included exchange by accepted mass and multiply by 1,000 kg | scale calibration; inspection release; test certificate; lot reconciliation |
| `cp_scrap_records` | `integrated_nickel_product_manufacture` | nickel-alloy fabrication scrap | scrap scales, bins, transfer notes, and disposition records | grade family; source operation; mass; destination; recovery status; lot | weigh segregated metallic scrap and prevent mixing with slag or non-nickel waste | kg | each bin transfer and production lot | representative continuous 12-month period or declared campaign | all included fabrication and finishing operations | sum segregated scrap by grade family and normalize by accepted-product mass | scale calibration; bin identification; transfer note; mass-balance reconciliation |
| `cp_wastewater_records` | `integrated_nickel_product_manufacture` | nickel-bearing process wastewater | discharge meter, tank, treatment, and laboratory records | volume; source operation; nickel concentration; other declared constituents; treatment; destination; lot | meter the separately characterized stream and retain representative analyses | m3 | each discharge or daily total; analysis at the documented compliance frequency | representative continuous 12-month period or declared campaign | wet operations within the foreground boundary | sum only the qualifying stream leaving the boundary and normalize by accepted-product mass | meter calibration; sampling plan; laboratory report; treatment and discharge record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = lot amount / accepted-product mass × 1,000 kg | atomic lot amount; measured accepted-product mass | amount per 1,000 kg accepted product |  |
| `calc_gas_volume` | natural gas and industrial argon | Convert recorded volume to the declared pressure, temperature, and moisture reference condition before aggregation; retain the conversion inputs and equation. | recorded volume; pressure; temperature; moisture basis; declared reference condition | corrected m3 |  |
| `calc_direct_fossil_co2` | direct fossil carbon dioxide | Multiply corrected natural-gas use by the documented carbon-content or emission factor and oxidation basis; exclude upstream supply emissions. | corrected gas use; factor and unit; oxidation basis | kg fossil CO2 per 1,000 kg accepted product |  |
| `calc_mass_reconciliation` | nickel-bearing material balance | Reconcile feedstock mass with accepted product, segregated scrap, returned material, documented stock change, and other individually recorded nickel-bearing outputs. Investigate and disclose unexplained differences. | feedstock; product; scrap; returns; stock change; other nickel-bearing outputs | lot-level mass-balance difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and nickel-bearing material rows | Preserve product form, grade or UNS designation, specification, dimensions, route, heat-treatment condition, and lot linkage; do not use a generic nickel proxy without disclosure. | material certificates; purchase records; production order; inspection release |
| `dq_measurement` | mass, energy, gas, and water records | Use calibrated meters or reconciled business records, retain unit conversions, and explain allocation of unavoidable shared records. | calibration records; invoices; meter reconciliation; conversion worksheet |
| `dq_temporal` | foreground dataset | Prefer a continuous representative 12-month period. A shorter campaign is allowed only when all represented lots are included and seasonality, maintenance, and start-up effects are disclosed. | dated production, utility, maintenance, and shutdown records |
| `dq_completeness` | foreground exchanges | Reconcile purchase, meter, stock, scrap, wastewater, and emission records. Add actual unlisted exchanges as separate atomic rows and document any cut-off with its quantitative significance. | mass and energy balances; waste manifests; discharge records; completeness checklist |
| `dq_source_match` | background datasets | Match feedstock grade family, product form, recycled-content claim, geography, technology, and delivery boundary; document every proxy and expected bias. | dataset metadata and proxy assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm that the accepted output is a nickel or nickel-alloy tube, pipe, or wrought tube or pipe fitting within the declared scope; verify that grade, form, route, dimensions, condition, test specification, and factory-gate state are present. | `unsd-cpc-3-0-structure-2025`; `astm-b161-25`; `astm-b619-b619m-19r23`; `astm-b366-b366m-25` |
| `validate_route` | process model | Confirm that only performed route operations are included and that seamless, welded, and wrought-fitting alternatives have not been combined into one fictitious production route. | `astm-b161-25`; `astm-b619-b619m-19r23`; `astm-b366-b366m-25` |
| `validate_reference_amount` | normalized inventory | Confirm that accepted-product output equals 1,000 kg after normalization and that every included exchange uses the same accepted-product denominator. |  |
| `validate_material_balance` | nickel-bearing inputs and outputs | Recalculate the lot-level mass balance and investigate unexplained differences between feedstock, accepted product, scrap, returns, stock changes, and other nickel-bearing outputs. |  |
| `validate_energy_emissions` | electricity, natural gas, and direct emissions | Confirm electricity is recorded as energy, gas reference conditions are declared, direct fossil CO2 is calculated only for on-site combustion, and upstream electricity and fuel-supply emissions are not duplicated as direct emissions. |  |
| `validate_atomic_inventory` | all inventory rows | Confirm every selected flow is one atomic physical, chemical, waste, or elementary exchange; verify all UUID-empty rows are explicitly unresolved and no generic utility, chemical, waste, or emission group substitutes for actual flows. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset eligible for downstream use as a secondary_dataset or background_dataset after review |
| downstream_use | Product LCAs, lifecycle models, procurement comparisons, and supply-chain inventories requiring a declared nickel tube, pipe, or fitting manufacturing dataset |
| allowed_use | Use when product form, grade family, route, dimensions, heat-treatment and surface condition, geography, technology, recycled-content basis, and factory-gate boundary are sufficiently matched and all unresolved flow identities are reviewed |
| excluded_use | Direct representation of upstream nickel production, cast fittings, stainless-steel products outside the nickel-alloy declaration, installed piping systems, use-stage service, maintenance, or end-of-life |
| required_metadata | PCR id; product form; grade and material standard; route; dimensions; heat-treatment and surface condition; test specification; site geography; technology; production period; accepted yield; feedstock forms and recycled-content basis; allocation; cut-offs; source dataset versions; unresolved identities |
| required_quality_disclosure | Meter coverage and calibration; record reconciliation; allocation drivers; mass-balance result; gas reference conditions; carbon-factor source; wastewater characterization; temporal representativeness; proxy choices; exclusions and known limitations |
| update_trigger | Change in grade family, product form, forming or welding route, heat-treatment or descaling technology, energy source, feedstock recycled-content basis, site geography, allocation method, or a material shift in accepted yield, scrap, water, fuel, or emissions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 41524 title and classification hierarchy; classification context only |
| `astm-b161-25` | Standard (`standard`) | ASTM International, ASTM B161-25, Standard Specification for Nickel Seamless Pipe and Tube, https://store.astm.org/b0161-25.html (retrieved 2026-09-04) | Seamless nickel pipe and tube boundary, cold-worked or agreed hot-worked condition, and inspection or test requirements |
| `astm-b619-b619m-19r23` | Standard (`standard`) | ASTM International, ASTM B619/B619M-19(2023), Standard Specification for Welded Nickel and Nickel-Cobalt Alloy Pipe, https://store.astm.org/b0619_b0619m-19r23.html (retrieved 2026-09-04) | Welded-pipe feedstock and process decomposition: flat-rolled alloy, automatic welding without filler, conditional cold work, solution annealing, descaling, and testing |
| `astm-b366-b366m-25` | Standard (`standard`) | ASTM International, ASTM B366/B366M-25, Standard Specification for Factory-Made Wrought Nickel and Nickel Alloy Fittings, https://store.astm.org/b0366_b0366m-25.html (retrieved 2026-09-04) | Wrought fitting scope and cast-fitting exclusion; eligible feedstock forms; shaping, heat treatment, and test requirements |
