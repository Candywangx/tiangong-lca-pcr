---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.zinc-bars-rods-profiles-and-wire-zinc-plates-sheets-strip-and-foil
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Zinc bars, rods, profiles and wire; zinc plates, sheets, strip and foil

## 1. Scope and Applicability

This PCR applies to uncoated zinc or zinc-alloy semi-finished products manufactured as bars, rods, profiles, wire, plates, sheets, strip or foil and reported at the fabrication-facility gate. It covers receipt of zinc-bearing feed, route-specific alloy additions, melting and alloying when performed, casting or equivalent stock preparation, rolling, extrusion or drawing, thermal conditioning, slitting, cutting and collection of process scrap through conforming product output.

It excludes primary zinc mining, concentration, smelting and refining except through upstream datasets; zinc dust, powders and flakes; zinc tubes, pipes and fittings; zinc waste and scrap as the reference product; zinc coatings on another substrate; fabricated finished articles; use; installation; maintenance; transport after the declared factory gate; and end-of-life. Packaging materials are excluded from the reference product mass and from the core boundary; include them only in a separately declared expanded study boundary.

The foreground package shall select one product form and one production route. It shall not combine product forms, alloy recipes or routes into an unlabelled average.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.zinc-bars-rods-profiles-and-wire-zinc-plates-sheets-strip-and-foil |
| classification_refs | CPC 3.0: 41545, exact mapping context |
| covered_products | Uncoated zinc or zinc-alloy bars, rods, profiles, wire, plates, sheets, strip and foil supplied as semi-finished metal products |
| excluded_products | Unwrought zinc; zinc dust, powders and flakes; zinc tubes, pipes and fittings; zinc waste and scrap; zinc-coated products whose substrate is another material; finished zinc articles |
| representative_product | One declared, specification-conforming zinc or zinc-alloy semi-finished product at the fabrication-facility gate |
| production_route | Melting and casting followed by the declared combination of rolling, extrusion, drawing, thermal conditioning, slitting and cutting; direct forming of purchased intermediate stock is allowed when declared |
| market_state | Bare semi-finished metal in the declared form, alloy grade, dimensions, temper and surface condition; packaging excluded from reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a declared zinc or zinc-alloy semi-finished product meeting the specified form, chemistry, dimensions, temper and surface condition |
| How much | 1 kg net mass of conforming product, excluding packaging |
| How well | Meets the declared product specification and quality acceptance criteria with nonconforming output excluded from product mass |
| How long or cycle | One production batch or reporting-period share delivered at the fabrication-facility gate; no use duration is assigned |
| reference_flow_link | `out_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming product |
| Reference product flow | Zinc bars, rods, profiles and wire, zinc plates, sheets, strip and foil `e638d7e2-b3f5-4c1f-a5b2-da12d75d89d2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Product form; zinc or zinc-alloy designation and composition; dimensions including thickness or diameter; temper or mechanical condition; surface condition; production route; facility geography; technology; recycled-content accounting method; factory-gate definition; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry mass of conforming bare semi-product. Exclude packaging, pallets, rejected output and internal recirculation from the reference amount. |
| `zinc_feed_property` | Special High Grade zinc input | Zinc content `7c367337-54f2-4fe9-8ee3-3f42681b0792` | kg Zn | Record both received gross mass and supplier-certified zinc fraction; convert to kg zinc content without treating alloying elements as zinc. |
| `fuel_energy_conversion` | Natural gas inputs | Net calorific value | MJ | Preserve metered gas volume and reference conditions, then convert to MJ using the facility or supplier net calorific value for the reporting period. |
| `water_consumption` | Process water input | Mass | kg | Record net make-up or consumed process water crossing the boundary; do not count recirculated internal volume repeatedly. Document any volume-to-mass density conversion. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground system | Include operations from receipt of purchased zinc-bearing and alloying inputs through conforming bare semi-product at the declared fabrication-facility gate. | `iza-zinc-sheet-environmental-profile` |
| `boundary_route_selection` | Process inclusion | Include only the casting, rolling, extrusion, drawing, thermal-conditioning, slitting and cutting operations actually used for the declared product route; disclose purchased intermediate stock and omitted operations. | `iza-zinc-sheet-environmental-profile`; `nist-circular-395-zinc-and-alloys`; `unido-techmart-91-zinc-wire` |
| `boundary_upstream_inputs` | Purchased products and energy | Model primary zinc production, purchased recycled material preparation, electricity, natural gas, water and alloying-material production with upstream datasets rather than inside the foreground fabrication process. | `iza-zinc-sheet-environmental-profile` |
| `boundary_internal_recycling` | Internal zinc returns | Track internal scrap recirculation as an internal transfer and do not count it as both an external input and an exported waste. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased unwrought zinc, accepted external zinc scrap, or purchased cast/formed zinc intermediate at the facility receiving point, with form, composition, supplier and upstream dataset declared |
| starting_condition_role | Foreground fabrication input whose upstream production is represented by a separate supplier-specific or representative dataset |
| product_classification_scope | Fabricated semi-finished zinc and zinc-alloy bars, rods, profiles, wire, plates, sheets, strip and foil corresponding to CPC 3.0 code 41545 |
| recursive_input_rule | When a purchased input is itself within this product category, record it once as a purchased same-category input with its own upstream dataset and do not recursively reproduce its fabrication inventory inside the receiving process |
| upstream_dataset_requirement | Use a geographically, technologically, temporally and compositionally representative upstream dataset for every purchased metal, alloying addition, fuel, electricity and water input |
| disclosure | Declare product form, alloy, input starting form, purchased-intermediate share, recycled-content accounting, included route steps, internal recycling, allocation, factory-gate location and reporting period |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `melting_casting` | Feed preparation, melting, alloying and casting | conditional | Include when the facility melts zinc-bearing feed or produces cast stock; omit only when purchased intermediate stock enters directly at forming | Foreground stock preparation | kg cast zinc stock transferred to forming |
| `forming_finishing` | Rolling, extrusion, drawing and dimensional finishing | required | Select and declare the operations actually used for the product form; do not average unrelated routes without separate product shares | Foreground semi-product manufacture | 1 kg net conforming reference product |

### Process: Feed preparation, melting, alloying and casting (`melting_casting`)

#### Inputs

##### Product flows

###### Special High Grade zinc metal (`in_shg_zinc`)

Specification-conforming unwrought zinc metal is recorded when it is purchased and melted as the principal primary zinc feed.

- Selected flow: Special High Grade (SHG) zinc metal `4719799f-8e90-4dce-83f6-55d932702228`
- Flow property / unit: Zinc content / kg Zn
- Amount rule: Supplier-certified zinc content in accepted feed charged to the declared product batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources: `iza-zinc-sheet-environmental-profile`

###### Copper alloying addition (`in_copper_alloying_addition`)

Copper metal or a declared copper-bearing master alloy is recorded only when the product recipe requires copper. The selected exchange shall be one supplier product with its composition stated.

- Selected flow: Copper metal alloying addition
- Flow property / unit: Mass / kg
- Amount rule: Accepted copper-bearing material charged, with elemental copper content retained separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `iza-zinc-sheet-environmental-profile`

###### Titanium alloying addition (`in_titanium_alloying_addition`)

Titanium metal or a declared titanium-bearing master alloy is recorded only when the product recipe requires titanium. The selected exchange shall be one supplier product with its composition stated.

- Selected flow: Titanium metal alloying addition
- Flow property / unit: Mass / kg
- Amount rule: Accepted titanium-bearing material charged, with elemental titanium content retained separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `iza-zinc-sheet-environmental-profile`

###### Aluminium alloying addition (`in_aluminium_alloying_addition`)

Aluminium metal or a declared aluminium-bearing master alloy is recorded only when the product recipe requires aluminium. The selected exchange shall be one supplier product with its composition stated.

- Selected flow: Aluminium metal alloying addition
- Flow property / unit: Mass / kg
- Amount rule: Accepted aluminium-bearing material charged, with elemental aluminium content retained separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `iza-zinc-sheet-environmental-profile`

###### Electricity for melting and casting (`in_electricity_melting`)

Delivered electricity used by melting, holding, casting and associated local controls is recorded from process or defensibly allocated facility meters.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered delivered electricity assigned to melting and casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast zinc stock output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `iza-zinc-sheet-environmental-profile`

###### Natural gas for melting and casting (`in_natural_gas_melting`)

Gaseous natural gas combusted for melting, holding or casting is recorded separately from electricity.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas volume at documented reference conditions assigned to melting and casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast zinc stock output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `iza-zinc-sheet-environmental-profile`

##### Waste flows

###### Accepted recycled zinc scrap input (`in_recycled_zinc_scrap`)

Externally supplied zinc scrap entering the melting process as waste is recorded separately from internally recirculated returns.

- Selected flow: zinc scrap `b1629e09-83ea-4027-aab4-3a02406fac02`
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted external zinc scrap charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `iza-zinc-sheet-environmental-profile`

##### Elementary flows

No elementary input is prescribed for this process. Record additional site-specific elementary inputs as separate exchanges when they cross the foreground boundary.

#### Outputs

##### Product flows

###### Internal cast zinc stock (`out_cast_zinc_stock`)

Cast slab, billet, rod or strip transferred to forming is an internal product flow. Its form and alloy shall match the downstream route.

- Selected flow: Cast zinc intermediate stock
- Flow property / unit: Mass / kg
- Amount rule: Weighed or production-system recorded cast stock released to forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cast zinc stock output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_stock_transfer`
- Sources: `iza-zinc-sheet-environmental-profile`; `unido-techmart-91-zinc-wire`

##### Waste flows

###### Zinc dross from melting (`out_zinc_dross`)

Zinc-bearing dross removed from melting or holding equipment is recorded as a separate waste output and is not combined with clean offcuts.

- Selected flow: Zinc dross from melting
- Flow property / unit: Mass / kg
- Amount rule: Weighed zinc dross leaving the process, with moisture and zinc content documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cast zinc stock output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iza-zinc-sheet-environmental-profile`

##### Elementary flows

###### Fossil carbon dioxide from onsite natural-gas combustion (`out_fossil_carbon_dioxide`)

Direct fossil carbon dioxide is recorded only for fuel combusted inside the foreground boundary; upstream electricity emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Facility-recorded direct fossil carbon dioxide assigned to melting and casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast zinc stock output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `iza-zinc-sheet-environmental-profile`

### Process: Rolling, extrusion, drawing and dimensional finishing (`forming_finishing`)

#### Inputs

##### Product flows

###### Internal cast zinc stock (`in_cast_zinc_stock`)

The internal cast stock from `melting_casting` is recorded once on entry to the declared rolling, extrusion or drawing route. Purchased intermediate stock is recorded here instead and identified as purchased.

- Selected flow: Cast zinc intermediate stock
- Flow property / unit: Mass / kg
- Amount rule: Weighed or production-system recorded stock accepted into forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_stock_transfer`
- Sources: `iza-zinc-sheet-environmental-profile`; `nist-circular-395-zinc-and-alloys`; `unido-techmart-91-zinc-wire`

###### Electricity for forming and finishing (`in_electricity_forming`)

Delivered electricity for the selected rolling, extrusion, drawing, cooling, slitting and cutting equipment is recorded from route-specific or defensibly allocated meters.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered delivered electricity assigned to the declared forming and finishing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `iza-zinc-sheet-environmental-profile`; `nist-circular-395-zinc-and-alloys`; `unido-techmart-91-zinc-wire`

###### Natural gas for thermal conditioning (`in_natural_gas_forming`)

Gaseous natural gas used for route-specific stock heating or thermal conditioning is recorded when combusted inside the forming boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas volume at documented reference conditions assigned to the declared forming route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `nist-circular-395-zinc-and-alloys`

###### Process water make-up (`in_process_water`)

Process-water make-up is recorded when water is consumed by route-specific cooling or conditioning. Recirculated internal water is not counted repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water crossing the forming-process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `iza-zinc-sheet-environmental-profile`

##### Waste flows

No waste input is prescribed for this process. Record any externally treated material entering as waste as a separate, specifically identified exchange.

##### Elementary flows

No elementary input is prescribed for this process. Record additional site-specific elementary inputs as separate exchanges when they cross the foreground boundary.

#### Outputs

##### Product flows

###### Conforming zinc semi-finished product (`out_reference_product`)

The net accepted output is the selected reference product after the declared forming and finishing operations.

- Selected flow: Zinc bars, rods, profiles and wire, zinc plates, sheets, strip and foil `e638d7e2-b3f5-4c1f-a5b2-da12d75d89d2`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net mass of conforming bare semi-product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow amount
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Zinc offcuts and trimming scrap (`out_zinc_scrap`)

Clean zinc or zinc-alloy offcuts and trimming scrap leaving the foreground system are recorded separately from zinc dross and internal recirculation.

- Selected flow: zinc scrap `b1629e09-83ea-4027-aab4-3a02406fac02`
- Flow property / unit: Mass / kg
- Amount rule: Weighed zinc scrap exported from the facility, net of internally recirculated returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iza-zinc-sheet-environmental-profile`

##### Elementary flows

###### Fossil carbon dioxide from forming-stage natural-gas combustion (`out_fossil_carbon_dioxide_forming`)

Direct fossil carbon dioxide is recorded when natural gas is combusted for stock heating or thermal conditioning in the forming process.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Facility-recorded direct fossil carbon dioxide assigned to forming and thermal conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `nist-circular-395-zinc-and-alloys`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | Multiple product forms or routes | Prefer subdivision by production line, batch, route and product form. Do not combine rolling, extrusion and drawing into an unlabelled average. |  |
| `allocation_internal_scrap` | Internally recirculated zinc | Treat internal returns as transfers inside the foreground system: retain their mass in the zinc balance but assign no new upstream zinc burden and no exported-waste credit. |  |
| `allocation_exported_scrap` | Zinc scrap and dross leaving the boundary | Report physical output and destination separately. Apply substitution, avoided burden or end-of-life credit only when required by the declared LCA method, and disclose the method, quality loss and substituted product. |  |
| `allocation_shared_energy` | Shared meters and services | Allocate shared electricity, natural gas and water using measured sub-metering where available; otherwise use a documented causal driver such as equipment operating time, throughput and rated load, and test materiality. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `melting_casting` | Purchased SHG zinc, external zinc scrap and alloying additions | Weighbridge, batch scale, goods receipt, recipe and certificate record | material identity; supplier; received mass; accepted mass; charge mass; zinc, copper, titanium and aluminium fractions; moisture; contamination; batch id | Reconcile accepted receipts and batch charges to inventory movement and supplier certificates | kg; mass fraction | Each receipt and batch | Complete reporting period with opening and closing stock | All zinc-semi-product lines inside the facility boundary | Sum accepted and charged quantities by material and product batch; calculate elemental content without merging supplier products | Scale calibration; certificates of analysis; goods receipts; stock reconciliation |
| `cp_energy_meters` | `melting_casting`; `forming_finishing` | Electricity and natural gas | Revenue meter, process sub-meter and fuel invoice | meter id; opening and closing reading; interval use; gas reference conditions; net calorific value; process assignment; operating hours | Prefer process sub-meters; reconcile to facility invoices and allocate residual shared use causally | MJ; m3 | Continuous or monthly | Complete reporting period | All included equipment and shared services | Sum by process and route; convert gas to MJ separately; normalize after reconciliation | Meter calibration; invoices; allocation workbook; energy balance |
| `cp_internal_stock_transfer` | `melting_casting`; `forming_finishing` | Internal cast-stock output and input | Production execution and calibrated scale record | batch id; alloy; stock form; transfer mass; timestamp; origin process; receiving process; opening and closing work in progress | Match each released cast-stock record to a receiving forming record and reconcile work-in-progress changes | kg | Each transfer | Complete reporting period | All included cast and forming lines | Sum matched transfers by batch; output minus input shall equal documented work-in-progress change and measured loss | Scale calibration; batch genealogy; work-in-progress reconciliation |
| `cp_waste_records` | `melting_casting`; `forming_finishing` | Zinc dross and exported zinc scrap | Calibrated scale, waste manifest and composition test | waste identity; batch; gross and tare mass; net mass; moisture; zinc content; contamination; destination; internal or external disposition | Weigh each outgoing stream and keep dross, clean scrap and internal returns separate | kg | Each movement | Complete reporting period | All included lines and storage points | Sum net dry mass by waste identity, alloy and destination; exclude internal returns from exported waste | Scale calibration; manifests; laboratory result; receiver record |
| `cp_direct_emissions` | `melting_casting`; `forming_finishing` | Direct fossil carbon dioxide | Facility emissions register supported by monitoring or accepted fuel-carbon balance | source id; fuel use; carbon content or emission factor; oxidation basis; measured emissions; method; period | Use regulated facility method or direct monitoring and assign only onsite-combustion emissions to the applicable foreground process | kg CO2 | Monthly or regulatory reporting interval | Complete reporting period | All included onsite combustion sources | Sum direct fossil CO2 by source and allocate shared sources causally | Monitoring QA record; method approval; fuel reconciliation |
| `cp_process_water` | `forming_finishing` | Process-water make-up | Calibrated make-up meter and water balance | meter id; intake; discharge; recirculation; blowdown; stock change; density; route assignment | Meter water crossing the process boundary and reconcile the recirculating system balance | kg; m3 | Continuous or monthly | Complete reporting period | Included cooling and conditioning systems | Net consumption equals intake minus returned discharge adjusted for stock change; do not sum internal recirculation | Meter calibration; water balance; discharge record |
| `cp_finished_product` | `forming_finishing` | Conforming reference product | Calibrated product scale, production and quality release records | product id; form; alloy; dimensions; temper; surface; gross mass; packaging tare; rejected mass; accepted net mass; batch id | Weigh accepted bare product or subtract verified packaging tare and reconcile to quality release | kg | Each batch | Complete reporting period | All included finishing lines | Sum accepted net product mass by declared product; normalize all inventory to 1 kg | Scale calibration; quality release; tare check; production reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory amount | Normalized amount = reconciled reporting-period amount / net conforming product mass | Process or facility amount; accepted net product mass from `cp_finished_product` | Amount per 1 kg reference product |  |
| `calc_zinc_content` | `in_shg_zinc` | Zinc content = accepted dry feed mass × supplier-certified zinc mass fraction | Accepted mass; moisture; zinc fraction | kg Zn input |  |
| `calc_natural_gas_energy` | Natural gas rows | Energy = corrected gas volume × reporting-period net calorific value; preserve the original m3 record and reference conditions | Metered gas volume; pressure and temperature basis; net calorific value | MJ and m3 natural gas by process |  |
| `calc_zinc_mass_balance` | Zinc-bearing inputs and outputs | Opening stock + zinc in purchased feed + zinc in accepted external scrap = zinc in conforming product + zinc in exported scrap + zinc in dross + closing stock + quantified loss | Zinc content of feed, product, wastes and stocks | Reconciled zinc balance and unexplained difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Declare one product form, alloy designation and composition, dimensions, temper, surface condition and applicable specification; exclude nonconforming and packaged mass | Product specification, certificate and quality release |
| `dq_route_identity` | Process map | Identify whether feed is melted onsite or purchased as intermediate and identify every included rolling, extrusion, drawing, thermal-conditioning, slitting and cutting step | Process flow diagram, batch genealogy and equipment list |
| `dq_mass_balance` | Zinc-bearing flows | Reconcile zinc-bearing inputs, outputs, internal returns and work-in-progress; investigate and disclose material unexplained differences | `calc_zinc_mass_balance`, stock records and reconciliation |
| `dq_energy_water` | Electricity, natural gas and water | Reconcile process quantities to facility totals and document meter coverage, shared-service allocation, gas reference conditions, calorific value and water recirculation treatment | Meter register, invoices, calibration and allocation workbook |
| `dq_temporal_geography` | All foreground records | Use one complete representative reporting period, identify abnormal shutdowns or campaigns, and state facility geography and technology | Reporting-period register and representativeness review |
| `dq_completeness` | All boundary exchanges | Compare purchase, production, waste, emissions and discharge registers against the inventory; disclose excluded flows and quantified cut-offs | Register-to-inventory checklist and cut-off statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Reference product | Confirm that exactly 1 kg net conforming bare product is the reference output and that every required qualifier is present. | `un-cpc-3-0-structure-2025` |
| `validate_route_boundary` | Process map and inventory | Confirm that included processes match the declared form and route, purchased intermediates are disclosed, and no omitted onsite operation is hidden in an upstream dataset. | `iza-zinc-sheet-environmental-profile`; `nist-circular-395-zinc-and-alloys`; `unido-techmart-91-zinc-wire` |
| `validate_atomic_flows` | Process inventory | Confirm that each row is one physical, chemical, waste, energy or elementary exchange and that internal transfers, dross and clean scrap are not combined. |  |
| `validate_zinc_balance` | Zinc-bearing flows | Run `calc_zinc_mass_balance`; any unexplained difference above the facility's documented measurement uncertainty requires correction or explicit disclosure. |  |
| `validate_energy_emissions` | Energy and direct emissions | Reconcile electricity and natural gas to meters and invoices; ensure direct fossil carbon dioxide includes only onsite combustion and excludes upstream electricity emissions. | `iza-zinc-sheet-environmental-profile` |
| `validate_allocation` | Shared operations and exported materials | Confirm subdivision was attempted first and that every remaining causal allocation or external recycling credit is documented and reproducible. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground fabrication dataset for one declared zinc or zinc-alloy semi-finished product and route |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product LCAs and lifecycle models requiring a factory-gate dataset for a compositionally, technologically and geographically representative zinc semi-product |
| excluded_use | Unqualified substitution among product forms, alloys or routes; representation of unwrought zinc production, zinc powder, coated substrates, finished articles, use or end-of-life; comparative assertions without full study review |
| required_metadata | PCR id and version; product form; alloy and composition; dimensions; temper; surface condition; specification; feed starting form; route; facility geography and technology; reporting period; recycled-content method; upstream datasets; allocation; cut-offs; data quality |
| required_quality_disclosure | Meter and scale coverage; supplier-certificate coverage; route subdivision; shared-service allocation; zinc mass-balance result; internal versus exported recycling; temporal, geographical and technological representativeness; unresolved identities; exclusions and uncertainty |
| update_trigger | Change in product form or alloy, feed starting state, furnace or forming route, facility or grid geography, fuel, recycled-content method, allocation method, upstream dataset, reporting period, or a material shift in zinc yield, energy, water, waste or direct emissions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | dataset | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 41545 classification identity and distinction from adjacent zinc products |
| `iza-zinc-sheet-environmental-profile` | literature | International Zinc Association, *Zinc Sheet Environmental Profile*. https://beta.zinc.org/wp-content/uploads/sites/30/2015/04/pdf_Zinc_Sheet_environ_profile.pdf | Factory-gate zinc-sheet boundary; melting, alloying, casting, rolling and slitting sequence; electricity, natural gas, alloying additions and scrap relevance |
| `nist-circular-395-zinc-and-alloys` | official_guidance | U.S. Bureau of Standards, *Circular No. 395: Zinc and Its Alloys*. https://www.govinfo.gov/content/pkg/GOVPUB-C13-0c7e0740debaa74ea7b39bf1d7dfed55/pdf/GOVPUB-C13-0c7e0740debaa74ea7b39bf1d7dfed55.pdf | Wrought-zinc routes including rolling, extrusion and drawing; sheet and strip forming distinctions |
| `unido-techmart-91-zinc-wire` | official_guidance | United Nations Industrial Development Organization, *TECHMART 91: A Catalogue of Technology Opportunities for Manufacturing Industry*. https://downloads.unido.org/ot/48/20/4820628/15001-20000_19293.pdf | Zinc-wire route from liquid zinc through continuous casting and drawing |
