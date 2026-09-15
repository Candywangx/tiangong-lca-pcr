---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43143
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclass 43143

## 1. Scope and Applicability

This PCR covers discrete finished parts designed solely or principally for gas turbines other than turbo-jets and turbo-propellers. It applies to industrial, marine, vehicular, and power-generation gas-turbine parts supplied as accepted factory-gate goods, including cast, forged, machined, heat-treated, cleaned, and coated variants when those operations are performed by or for the reporting manufacturer.

Complete gas turbines, turbo-jets, turbo-propellers, their parts, repair or overhaul services, and general-purpose goods classified in their own right are outside scope. Examples of the latter include separately traded bearings, standard fasteners, valves, electrical controls, and generic transmission shafts. Transport packaging, installation, use, maintenance, remanufacture, and end-of-life are outside the reference flow. A dataset shall identify the exact part or part family, drawing or specification revision, material grade, manufacturing route, coating state, and acceptance state; category-average substitution without those qualifiers is not allowed.

The CPC reference establishes classification context only. The canonical PCR boundary is the engineering meaning above, which is independently useful for foreground data production.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43143 |
| classification_refs | CPC 3.0: 43156, Parts for the goods of subclass 43143 |
| covered_products | Discrete finished parts designed solely or principally for gas turbines other than turbo-jets and turbo-propellers, such as accepted blades, vanes, combustor parts, casings, shrouds, rotors, stators, and purpose-designed structural parts |
| excluded_products | Complete turbines; turbo-jets and turbo-propellers and their parts; reaction engines; general-purpose bearings, fasteners, valves, controls, and shafts classified in their own right; repair services; transport packaging |
| representative_product | One accepted nickel-based-superalloy or stainless-steel gas-turbine part manufactured by shaping, machining, heat treatment, optional surface engineering, and final inspection |
| production_route | Route-specific combination of externally supplied or in-house cast/forged stock preparation, precision machining, heat treatment, optional cleaning or thermal-barrier coating, and final inspection |
| market_state | New, finished, quality-accepted part at the manufacturing-site gate, before transport packaging and installation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished gas-turbine part that performs the declared mechanical, hot-gas-path, containment, support, or flow-guidance function in a gas turbine other than a turbo-jet or turbo-propeller |
| How much | 1 kg net mass of accepted finished part |
| How well | Conforms to the declared drawing/specification revision, alloy grade, heat-treatment condition, coating state, dimensional tolerances, non-destructive examination class, and acceptance criteria |
| How long or cycle | One completed manufacturing and acceptance cycle; no service-life equivalence is implied |
| reference_flow_link | 1 kg accepted finished gas-turbine part at the factory gate, excluding transport packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished gas turbine part other than a turbo-jet or turbo-propeller part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part name and function; drawing/specification revision; material grade and product state; cast/forged/additive or purchased-blank route; heat-treatment condition; coating type and state; net accepted mass; inspection and acceptance class; manufacturing site and geography; reference year; recycled-content claim where used; treatment and recovery destinations; excluded transport packaging |

The exact reference-product UUID remains unresolved under inventory row `output_finished_gas_turbine_part`. When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net part mass after all included manufacturing operations; exclude detachable shipping protection and transport packaging. |
| `material_mass_basis` | metal, chemical, coating, chip, coolant-waste, and spent-bath rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use weighed or inventory-balanced mass. State moisture, solution concentration, retained coolant, and coating-powder recovery conventions where relevant. |
| `electricity_energy_basis` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using the exact identity 1 kWh = 3.6 MJ; do not include upstream grid emissions as direct elementary flows. |
| `gas_volume_basis` | gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare pressure, temperature, dry/wet basis, composition where used, and meter location. Convert volume to mass or energy only with documented reference conditions and factors. |
| `water_mass_basis` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use metered mass or convert measured volume with a documented density and temperature; distinguish make-up water from recirculated internal water. |
| `metal_balance_check` | metal stock, accepted product, and segregated metal chips | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile opening inventory plus receipts against accepted output, segregated chips, rejects, transfers, and closing inventory for the declared lot or period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified alloy stock or a qualified near-net-shape blank enters the reporting manufacturing boundary with its material grade, form, mass, supplier, and upstream dataset identified. |
| starting_condition_role | Gate-to-gate foreground starting condition linked to cradle-to-gate upstream datasets for every purchased material, energy carrier, and externally processed blank. |
| product_classification_scope | Discrete parts solely or principally for gas turbines other than turbo-jets and turbo-propellers; the CPC 3.0 43156 reference is mapping context, not canonical identity. |
| recursive_input_rule | A purchased part already within this PCR category is recorded once as a supplier product input with its own upstream dataset and is not recursively re-expanded inside the receiving process. |
| upstream_dataset_requirement | Each purchased stock, blank, chemical, gas, electricity supply, and off-site treatment shall use a geographically, technologically, temporally, and product-state representative upstream dataset. |
| disclosure | Declare whether shaping, heat treatment, machining, surface engineering, inspection, and waste treatment are on-site, subcontracted but controlled, represented by supplier data, or excluded; disclose all cut-offs and packaging exclusion. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_start | Begin at receipt of qualified stock or blank and include all controlled operations needed to produce an accepted finished part at the site gate. | `eu-jrc-sf-bref-2024`; `eu-pef-recommendation-2021` |
| `boundary_rule_2` | external_operations | Include subcontracted shaping, heat treatment, machining, cleaning, coating, and inspection through supplier-specific activity data or representative upstream datasets when they are required to reach the declared market state. | `eu-pef-recommendation-2021` |
| `boundary_rule_3` | direct_emissions | Report direct elementary emissions only for foreground combustion, treatment, or release points; do not duplicate emissions already embodied in purchased electricity or upstream materials. | `eu-pef-recommendation-2021`; `eu-jrc-stm-bref-2006` |
| `boundary_rule_4` | excluded_stages | Exclude transport packaging, distribution, installation, turbine operation, maintenance, repair, remanufacture, and end-of-life from this factory-gate reference flow. | `eu-pef-recommendation-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| primary_shaping_heat_treatment | Primary shaping and heat treatment | conditional | Include when casting, forging, hot forming, or thermal treatment occurs inside the reporting boundary; otherwise represent the purchased blank upstream. | foreground shaping and thermal processing | kg qualified stock or blank processed per kg accepted finished part |
| precision_machining | Precision machining and finishing | required | Always include all machining, grinding, deburring, and part washing controlled by the reporting manufacturer. | foreground dimensioning and finishing | kg accepted finished part |
| surface_engineering | Surface preparation and thermal-barrier coating | conditional | Include each performed cleaning, chemical treatment, grit preparation, bond-coat, or ceramic-coat operation; omit only when the accepted part is supplied without such treatment. | foreground surface function | m2 treated surface and kg accepted finished part |
| inspection_release | Final inspection and release | required | Always include final dimensional and non-destructive inspection, acceptance, and product release. | foreground quality release | kg accepted finished part |

### Process: Primary shaping and heat treatment (`primary_shaping_heat_treatment`)

#### Inputs

##### Product flows

###### Nickel-based superalloy stock (`input_nickel_superalloy_stock`)

Record qualified nickel-based superalloy ingot, billet, forging stock, casting charge, or purchased near-net-shape blank when it crosses the foreground boundary. Preserve exact alloy designation and supplied form.

- Selected flow: Nickel-based superalloy stock
- Flow property / unit: Mass / kg
- Amount rule: weighed receipts adjusted for opening inventory, closing inventory, and transfers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-sf-bref-2024`

###### Stainless-steel stock (`input_stainless_steel_stock`)

Record qualified stainless-steel billet, bar, forging stock, casting charge, or purchased near-net-shape blank only for a declared stainless-steel route. Preserve exact grade and supplied form.

- Selected flow: Stainless steel billet or bar stock
- Flow property / unit: Mass / kg
- Amount rule: weighed receipts adjusted for opening inventory, closing inventory, and transfers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-sf-bref-2024`

###### Electricity for shaping and heat treatment (`input_primary_electricity`)

Record purchased electrical energy delivered to furnaces, presses, handling equipment, and route-specific auxiliaries in the included shaping and heat-treatment cells.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered cell electricity allocated to the declared part or lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Natural gas for thermal operations (`input_natural_gas`)

Record gaseous natural gas combusted in included furnaces or heaters. Omit this atomic exchange only when the declared route demonstrably uses no natural gas.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered delivered volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-sf-bref-2024`

###### Industrial oxygen for oxy-fuel or melting operations (`input_process_oxygen`)

Record industrial oxygen only when it is purchased and consumed by an included oxy-fuel heating, cutting, or melting step.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-invoiced volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-sf-bref-2024`

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide from on-site gas combustion (`output_fossil_co2`)

Report only direct fossil carbon dioxide from included natural-gas combustion; upstream supply-chain emissions remain in the gas dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated fuel-carbon balance from collected gas composition and oxidation data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

###### Nitrogen oxides from on-site thermal equipment (`output_nitrogen_oxides`)

Report nitrogen oxides emitted to air from included furnaces and heaters as the declared measured species basis; do not substitute nitrous oxide.

- Selected flow: Nitrogen oxides to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or site-approved calculation tied to operating hours, fuel use, controls, and declared NOx species basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

### Process: Precision machining and finishing (`precision_machining`)

#### Inputs

##### Product flows

###### Electricity for machining (`input_machining_electricity`)

Record electrical energy for machining, grinding, coolant circulation, extraction, washing, and local auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: machine- or cell-metered electricity allocated to the declared part or lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `us-epa-mpm-effluent-guidelines-2003`

###### Process water for machining and part washing (`input_machining_water`)

Record purchased or withdrawn process water added to coolant systems or used to wash machined parts; exclude internally recirculated water from repeated boundary counting.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up and washing-water mass net of separately metered internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `us-epa-mpm-effluent-guidelines-2003`

###### Water-miscible metalworking-fluid concentrate (`input_water_miscible_mwf`)

Record the specific formulated concentrate added to the machining coolant system. Preserve product name, supplier, formulation class, and concentration separately from process water.

- Selected flow: Water-miscible metalworking fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: purchased additions plus opening inventory minus closing inventory and documented transfers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `us-epa-mpm-effluent-guidelines-2003`

#### Outputs

##### Waste flows

###### Nickel-based superalloy machining chips (`output_nickel_superalloy_chips`)

Record nickel-based superalloy chips separately when that alloy route applies. Retain alloy grade, coolant contamination, and recovery destination.

- Selected flow: Nickel-based superalloy machining chips
- Flow property / unit: Mass / kg
- Amount rule: weighed segregated chips corrected for retained coolant where material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-mpm-effluent-guidelines-2003`

###### Steel machining chips (`output_steel_chips`)

Record steel chips separately for the stainless-steel route. Preserve steel grade, coolant contamination, segregation, and recovery destination.

- Selected flow: Steel chips `bcb2604e-4735-4b7d-88ab-03de8ff5930b`
- Flow property / unit: Mass / kg
- Amount rule: weighed segregated chips corrected for retained coolant where material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-mpm-effluent-guidelines-2003`

###### Spent machining coolant (`output_spent_coolant`)

Record spent water-miscible coolant when it leaves the foreground boundary for treatment or disposal; retain water fraction, oil contamination, and destination.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: weighed shipment or tank-level inventory balance for spent coolant leaving the site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-mpm-effluent-guidelines-2003`

### Process: Surface preparation and thermal-barrier coating (`surface_engineering`)

#### Inputs

##### Product flows

###### Electricity for surface engineering (`input_surface_electricity`)

Record electrical energy used by cleaning, pumping, extraction, drying, grit preparation, and plasma-spray equipment for the included surface route.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: equipment- or cell-metered electricity allocated to coated accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-stm-bref-2006`; `nasa-tp-1425-1979`

###### Process water for aqueous surface preparation (`input_surface_water`)

Record make-up and rinse water entering included aqueous cleaning or chemical-treatment stages.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered incoming process-water mass net of internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide for aqueous cleaning (`input_sodium_hydroxide`)

Record sodium hydroxide as supplied only when it is added to an included alkaline cleaning bath; preserve solution concentration and active-mass convention.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: supplier mass issued to the bath, reported on declared as-supplied and active-mass bases
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Yttria-stabilized zirconia coating powder (`input_ysz_powder`)

Record the declared yttria-stabilized zirconia powder only when a ceramic thermal-barrier coat is applied. Preserve yttria fraction, powder grade, feed mass, recovered powder, and coating specification.

- Selected flow: Yttria-stabilized zirconia ceramic powder
- Flow property / unit: Mass / kg
- Amount rule: powder issued to the coating cell minus weighed reusable recovered powder returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_route_records`
- Sources: `nasa-tp-1425-1979`

#### Outputs

##### Waste flows

###### Spent sodium-hydroxide cleaning solution (`output_spent_caustic_solution`)

Record the spent sodium-hydroxide cleaning solution leaving the site as one distinct waste. Retain bath composition, dissolved metals, dilution, and treatment destination.

- Selected flow: Spent sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: weighed or tank-level-balanced mass transferred to treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-stm-bref-2006`

### Process: Final inspection and release (`inspection_release`)

#### Inputs

##### Product flows

###### Electricity for final inspection (`input_inspection_electricity`)

Record electrical energy for included dimensional inspection, non-destructive examination, cleaning, and release equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered inspection-cell electricity allocated to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

#### Outputs

##### Product flows

###### Accepted finished gas-turbine part (`output_finished_gas_turbine_part`)

Record only parts that passed the declared final acceptance criteria. Rejects and rework remain in the foreground balance until accepted or leave through a specific waste or product flow.

- Selected flow: Finished gas turbine part other than a turbo-jet or turbo-propeller part
- Flow property / unit: Mass / kg
- Amount rule: accepted net mass normalized to exactly 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_release`
- Sources: `un-cpc-3-0-structure-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | foreground_processes | Avoid allocation by subdividing meters, material issues, machine logs, baths, lots, and waste records to the specific part or part family wherever technically feasible. | `eu-pef-recommendation-2021` |
| `allocation_rule_2` | shared_resources | When subdivision is infeasible, use a documented physical driver causally related to the burden, such as machine time, measured energy, treated surface area, bath loading, or processed mass; do not default to revenue. | `eu-pef-recommendation-2021` |
| `allocation_rule_3` | rejects_and_rework | Assign rework energy, materials, and losses to the production that generated the reject until the item becomes accepted output or leaves through a declared flow. | `eu-jrc-stm-bref-2006` |
| `allocation_rule_4` | metal_scrap | Report segregated chips and scrap as waste outputs at the foreground gate and disclose any revenue, recovery route, recycled-content accounting, and downstream credit method; do not embed an undocumented avoided-burden credit. | `eu-pef-recommendation-2021` |
| `allocation_rule_5` | sensitivity | Report the allocation driver and factor for every shared process and test a materially plausible alternative when allocation changes the result or a comparative claim. | `eu-pef-recommendation-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | primary_shaping_heat_treatment | qualified stock and process gas inputs | receiving, issue, inventory, and supplier records | item id; alloy/chemical grade; supplied form; gross and net mass or volume; opening and closing inventory; transfers; supplier; lot; reference conditions | calibrated scale, tank meter, gas meter, and ERP reconciliation | kg or m3 | each receipt and issue; monthly reconciliation | representative production period, normally at least 12 consecutive months or the full campaign | all controlled sites and included subcontractors | receipts + opening inventory - closing inventory - transfers, allocated to accepted lots | calibration record, certificate of analysis, invoice, inventory reconciliation |
| `cp_energy_records` | all listed processes | electricity and natural gas | meter and invoice records | meter id; start/end reading; unit; timestamp; process cell; operating hours; allocation driver; gas reference conditions | dedicated meter preferred; otherwise reconciled submeter and invoice | MJ, kWh, or m3 | continuous or each billing interval | same period as product output | all included foreground operations | convert to required unit, subtract excluded loads, allocate with declared physical driver, normalize to accepted mass | meter calibration, invoice, load map, reconciliation |
| `cp_combustion_emissions` | primary_shaping_heat_treatment | direct fossil carbon dioxide and nitrogen oxides | stack test, continuous monitor, fuel, and control records | emission species basis; concentration; flow; operating time; fuel volume; fuel carbon/composition; oxidation factor; control status | calibrated CEMS or stack test; documented fuel-carbon calculation where direct measurement is unavailable | kg | continuous, campaign test, or each calculation period | covers all included firing hours in the product period | each included combustion unit | integrate measured mass or calculate from collected fuel data, allocate by causal heat demand, normalize to accepted mass | calibration, laboratory report, calculation workbook, control log |
| `cp_water_chemical_records` | precision_machining; surface_engineering | water, coolant concentrate, and sodium hydroxide | meter, purchase, batch, and bath records | material id; concentration; gross mass; active mass; water meter; bath additions; bath level; opening/closing stock; transfers | calibrated meter, scale, ERP issue, and bath log | kg | each addition and monthly balance | same period as treated output | each included machining and surface line | net external input, excluding internal recirculation, allocated to accepted output | certificate of analysis, calibration, purchase record, bath log |
| `cp_waste_records` | precision_machining; surface_engineering | chips, spent coolant, and spent caustic solution | container scale, manifest, tank, and shipment records | waste id; composition; alloy grade; contamination; wet/dry basis; container tare; destination; treatment; opening/closing inventory | calibrated scale or tank balance reconciled to transfer documents | kg | each container or shipment; monthly reconciliation | same period as product output | all included foreground waste points | net waste leaving boundary plus closing-minus-opening storage, allocated to generating process | scale calibration, waste manifest, recycler receipt, laboratory analysis |
| `cp_surface_route_records` | surface_engineering | coating material input | powder issue, recovery, and coating traveler | powder id; yttria fraction; supplier lot; issued mass; reusable recovered mass; treated area; coating specification; accepted/rejected area | calibrated scale and route traveler | kg and m2 | each coating batch | full declared coating campaign | each included coating cell and subcontractor | issued mass - reusable powder returned to inventory, allocated to accepted coated output | certificate of analysis, scale calibration, traveler, inspection result |
| `cp_product_release` | inspection_release | accepted finished product | traveler, scale, inspection, and release records | part id; drawing revision; material grade; route; coating; net mass; accepted/rejected status; rework; date | calibrated scale and controlled acceptance record | kg | each part or accepted lot | same period as all inputs and wastes | all accepted output from included sites | sum accepted net mass only; normalize inventory to 1 kg accepted mass | calibration, inspection report, nonconformance and release records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | inventory_normalization | normalized amount = allocated period amount / accepted net product mass | allocated row amount; accepted net mass from `cp_product_release` | row amount per 1 kg accepted finished part | `eu-pef-recommendation-2021` |
| `calc_rule_2` | electricity_conversion | MJ = kWh × 3.6 | metered kWh | electrical energy in MJ |  |
| `calc_rule_3` | metal_yield | metal reconciliation difference = opening stock + receipts - closing stock - transfers - accepted output - segregated chips - declared rejects | `cp_material_balance`; `cp_waste_records`; `cp_product_release` | unreconciled metal mass and yield disclosure |  |
| `calc_rule_4` | fossil_co2 | direct fossil CO2 mass = measured integrated stack mass or documented fuel volume × reference-condition conversion × carbon fraction × oxidation fraction × 44/12 | `cp_combustion_emissions` fields | kg fossil CO2 |  |
| `calc_rule_5` | shared_process_allocation | allocated row amount = shared measured amount × declared causal physical share | shared record; physical driver totals; target-part driver | part-allocated foreground amount | `eu-pef-recommendation-2021` |
| `calc_rule_6` | coating_powder | net coating-powder input = issued powder - reusable recovered powder returned to inventory | `cp_surface_route_records` | kg YSZ powder consumed per accepted output | `nasa-tp-1425-1979` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and material inputs | Preserve part identifier, drawing revision, function, material grade, supplied state, heat treatment, coating, and acceptance class; do not aggregate unlike parts without a documented representative-product model. | controlled traveler, bill of materials, certificate of analysis, release record |
| `dq_temporal` | foreground records | Use one common representative period for inputs, outputs, emissions, and accepted mass; explain shutdowns, campaigns, abnormal production, and incomplete months. | period reconciliation and production calendar |
| `dq_metering` | energy, gas, water, and mass | Use calibrated meters or reconciled records; document meter boundary, unit conversion, reference conditions, estimation fraction, and allocation driver. | calibration certificates, invoices, meter map, calculation workbook |
| `dq_completeness` | process inventory | Account for every included process, purchased blank, major material, energy input, direct emission, chip stream, spent fluid, and spent bath; document zero and not-applicable conclusions. | signed process-flow review and completeness reconciliation |
| `dq_mass_balance` | metal and coating material | Investigate unexplained metal or coating-powder balance differences and retain corrections, rejected lots, rework, internal recycling, and inventory changes. | balance worksheet and corrective-action record |
| `dq_representativeness` | upstream datasets | Record geographical, technological, temporal, and product-state representativeness for each upstream dataset and disclose proxies. | dataset metadata and representativeness assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | Confirm the output is a discrete part for a non-turbo-jet/non-turbo-propeller gas turbine and that all required qualifiers and the 1 kg accepted net-mass basis are present. | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | process_coverage | Confirm every required process is represented and every conditional process has an evidence-backed included or not-applicable determination. | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006` |
| `validation_rule_3` | inventory_atomicity | Confirm every inventory row is one concrete exchange and that no row combines fuels, utilities, chemicals, wastes, packaging, or emission groups. |  |
| `validation_rule_4` | uuid_identity | Confirm each populated UUID is public state 100 and semantically matches flow name, flow type, classification, property, and unit; keep unresolved product-specific identities explicit. |  |
| `validation_rule_5` | evidence_traceability | Confirm each collected or calculated row links to an implemented collection protocol and that external source ids support only the stated method or boundary role. | `eu-pef-recommendation-2021` |
| `validation_rule_6` | energy_emissions | Reconcile natural-gas use with included direct fossil CO2 and nitrogen-oxides records, and confirm purchased-electricity upstream emissions are not duplicated as direct site emissions. |  |
| `validation_rule_7` | material_balance | Reconcile qualified metal stock, accepted output, segregated chips, rejects, transfers, and inventory changes; investigate every material unexplained difference. | `us-epa-mpm-effluent-guidelines-2003` |
| `validation_rule_8` | allocation_and_disclosure | Confirm shared-process allocation uses a documented causal physical driver and that subcontracting, recovery routes, credits, cut-offs, and transport-packaging exclusion are disclosed. | `eu-pef-recommendation-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for an identified finished gas-turbine part |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-specific supply-chain modelling when the part identity, function, material grade, route, coating state, geography, time, acceptance criteria, allocation, and packaging exclusion are compatible |
| excluded_use | Complete gas turbines; turbo-jets or turbo-propellers and their parts; repair or overhaul; use-phase performance; unqualified category averages; comparative assertions across materially different part functions, alloys, routes, or coating states |
| required_metadata | PCR id and version; part and drawing identity; function; material grade and state; route and subcontracting; heat treatment; coating; net mass; site and geography; reference period; meters and allocation; upstream datasets; emissions; wastes and destinations; cut-offs; unresolved UUIDs |
| required_quality_disclosure | Primary-data coverage; estimated share; calibration and reconciliation results; metal-balance difference; representativeness of upstream datasets; allocation sensitivity; rejected lots and rework; uncertainty; unresolved range evidence and UUID gaps |
| update_trigger | Drawing, material grade, supplied blank state, manufacturing route, coating specification, inspection class, supplier, site, energy system, emission control, allocation driver, or foreground data changes that materially affect the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure and explanatory notes, 2025. https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf (retrieved 2026-09-05) | Official CPC 43143/43156 identity and exclusion of turbo-jets and turbo-propellers |
| `eu-jrc-sf-bref-2024` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, 2024. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry (retrieved 2026-09-05) | Shaping, forging, casting, machining, finishing, and heat-treatment process decomposition |
| `us-epa-mpm-effluent-guidelines-2003` | `official_guidance` | U.S. EPA, Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products & Machinery Point Source Category, 2003. https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf (retrieved 2026-09-05) | Machining-fluid use, chip and spent-fluid outputs, water records, and monitoring fields |
| `eu-jrc-stm-bref-2006` | `official_guidance` | European Commission, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-05) | Surface preparation, water, energy, chemical, wastewater, waste, and process-control requirements |
| `eu-pef-recommendation-2021` | `standard` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, 15 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-09-05) | Functional unit, system boundary, allocation hierarchy, data quality, validation, and reporting |
| `nasa-tp-1425-1979` | `literature` | C. H. Liebert and F. S. Stepka, Industry Tests of NASA Ceramic Thermal Barrier Coating, NASA Technical Paper 1425, June 1979. https://ntrs.nasa.gov/api/citations/19790016852/downloads/19790016852.pdf?attachment=true (retrieved 2026-09-05) | Yttria-stabilized zirconia and NiCrAlY thermal-barrier-coating route for gas-turbine parts |
