---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-producer-gas-or-water-gas-generators-parts-of-acetylene-gas-generators-and-sim-dfae5146
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for industrial gas generators, air-conditioning, refrigeration, heat pumps, and temperature-treatment machinery

## 1. Scope and Applicability

This PCR applies to finished parts made specifically for producer-gas or water-gas generators, acetylene and similar water-process gas generators, air-conditioning machines, refrigerating or freezing equipment, heat pumps, and machinery that treats materials through a change of temperature. It covers a declared representative part from receipt of purchased materials and components through material preparation, forming, machining, joining, cleaning, finishing, assembly, testing, and factory-gate release.

The category is parts-only. Complete machines, general-purpose fasteners or raw tubes sold independently of a machinery-part identity, household refrigerating appliances, compressors classified as complete machines, customer-site installation, use, maintenance, and end-of-life are excluded. A foreground data package shall identify the part family, drawing or specification, equipment application, bill of materials, manufacturing route, refrigerant state, and factory-gate product condition. The official CPC 3.0 description is the classification-identity basis (`un-cpc-3-0-structure-2025`); it does not supply inventory amounts or ranges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-producer-gas-or-water-gas-generators-parts-of-acetylene-gas-generators-and-sim-dfae5146 |
| classification_refs | CPC 3.0: 43941 (exact classification context; mapping acceptance remains a separate governance decision) |
| covered_products | Finished, separately supplied parts designed for the listed industrial gas-generation, air-conditioning, refrigeration, heat-pump, or temperature-treatment machinery |
| excluded_products | Complete equipment; household refrigerating appliances; generic materials and standard fasteners without a declared machinery-part identity; customer-site installation; use; maintenance; end-of-life |
| representative_product | One declared, quality-conforming finished machinery part at the manufacturer's factory gate |
| production_route | Purchased material and component receipt; route-specific cutting, forming, machining, joining, cleaning or finishing; assembly; inspection and release |
| market_state | Finished part, dry or with a declared retained refrigerant charge, packaged or unpackaged as specified at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a quality-conforming part ready for integration into or replacement within the declared covered machinery |
| How much | 1 kg of finished part |
| How well | Meets the declared drawing, material grade, dimensional tolerance, pressure or leak-test requirement, surface condition, cleanliness, and acceptance specification |
| How long or cycle | One factory-gate delivery of the part; service life is outside this cradle-to-gate reference |
| reference_flow_link | The measured mass of conforming `finished_machinery_part` output after inspection, excluding separately reported transport packaging unless the declared sale specification makes it integral |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts of producer gas or water gas generators, parts of acetylene gas generators and similar water process gas generators, parts for the goods of subclass 43912, parts of refrigerating and freezing equipment and heat pumps, parts of machinery for the treatment of materials by a process involving a change of temperature `cdee7105-36d3-4fd3-8418-f9498bf159bc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part family and function; applicable equipment family; drawing or specification identifier; principal materials and grades; finished-part mass; manufacturing route; joining and surface-treatment route; refrigerant type and retained charge or dry state; test method; geography; reference period; packaging inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-based rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh conforming finished output and normalize all reported exchanges to exactly 1 kg of that output; retain unrounded batch totals and the normalization factor. |
| `energy_measurement` | electricity rows | Net calorific value | MJ | Retain the original meter unit and time interval, convert to MJ with an explicitly documented exact unit conversion, and do not mix purchased electricity with fuel energy. |
| `gas_volume_conditions` | natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the metering temperature, pressure, dry or wet basis, and any conversion to supplier or site reference conditions. |
| `water_mass_conversion` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When a volume meter is used, document density and measurement conditions before converting to mass; do not assume water input equals wastewater output. |
| `refrigerant_mass_balance` | R404A input, retained charge, recovery, and release | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Close a batch balance for purchased or recovered refrigerant, retained charge, recovered return, and measured or calculated release; declare cylinders and circuits included. |

## 5. System Boundary

The foreground boundary begins when purchased materials, components, process chemicals, fuels, water, and electricity cross the manufacturing-site gate and ends when the conforming part is released at the factory gate. Supplier production is represented by upstream datasets. Include on-site material preparation, forming, machining, joining, cleaning, finishing, assembly, inspection, testing, rework, direct emissions, and generated wastes when they occur.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased, specification-matched plate, sheet, tubing, components, chemicals, utilities, and any refrigerant received at the manufacturing site |
| starting_condition_role | Auditable foreground starting point for part manufacture |
| product_classification_scope | Parts made specifically for the covered machinery; classification identity follows `un-cpc-3-0-structure-2025` |
| recursive_input_rule | Record a purchased finished part in the same category once as an external product input with its upstream dataset and mass; do not recursively reproduce its manufacture inside this foreground process |
| upstream_dataset_requirement | Prefer supplier-specific data; otherwise select geographically, technologically, materially, and temporally representative upstream datasets and disclose substitutions |
| disclosure | Declare site, period, part family, BOM, material grades, route steps, rejects, rework, refrigerant state, test boundary, packaging inclusion, excluded capital goods, and omitted transport |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_parts_only` | product scope | Include only factory-gate manufacture of a declared finished part for the enumerated equipment families; complete equipment remains outside this PCR. | un-cpc-3-0-structure-2025 |
| `boundary_route_steps` | foreground operations | Include every on-site operation that physically or chemically changes, joins, cleans, finishes, tests, or releases the part, together with direct wastes and emissions. |  |
| `boundary_upstream_inputs` | purchased inputs | Represent purchased materials, components, utilities, chemicals, fuels, and refrigerants with upstream datasets and avoid duplicating upstream processes in the foreground inventory. |  |
| `boundary_capital_transport` | exclusions | Exclude capital equipment and employee travel by default; include transport only when the study goal brings it into scope and disclose that extension. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | Material preparation, forming, and machining | required | Apply to all routes; individual material cards apply only when the named material is in the BOM | Transform purchased metal forms into part geometry | Exchanges per 1 kg conforming finished part |
| `joining_cleaning_finishing` | Joining, cleaning, and finishing | conditional | Include when welding, brazing, process heat, aqueous cleaning, or finishing occurs | Join and prepare the part surface | Route-specific exchanges per 1 kg conforming finished part |
| `assembly_testing_release` | Assembly, testing, inspection, and factory-gate release | required | Apply to the declared part; R404A cards apply only when R404A crosses the boundary | Final assembly, test, acceptance, and output | 1 kg conforming finished part |

### Process: Material preparation, forming, and machining (`material_preparation`)

#### Inputs

##### Product flows

###### Steel plate feedstock (`steel_plate_materials`)

Record when steel plate is cut, formed, or machined. The BOM and receiving records establish grade, dimensions, coating, supplier, and mass.

- Selected flow: Steel plate materials `818105f5-d33e-4dd8-bbc0-fc1ad29d9173`
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

###### Stainless-steel sheet feedstock (`stainless_steel_sheet`)

Record one chemically specified stainless-steel sheet exchange when present in the BOM. Keep the UUID unresolved until a mutually consistent exact state-100 identity is available.

- Selected flow: Stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

###### Primary aluminium-alloy sheet feedstock (`primary_aluminium_alloy_sheet`)

Record only when primary aluminium-alloy sheet is specified; do not use this row for secondary aluminium or foil.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

###### Copper tubing feedstock (`copper_tubing`)

Record when the part contains formed, expanded, brazed, or otherwise fabricated copper tube.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

###### Cutting fluid (`cutting_fluid`)

Record fresh cutting-fluid make-up for machining; state formulation, dilution basis, and internal recirculation.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh make-up mass charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

###### Machining and forming electricity (`electricity_machining`)

Record purchased electricity for cutting, forming, machining, extraction, and directly attributable auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented causal allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Scrap steel (`steel_scrap`)

Record separately collected ferrous scrap from the steel-plate route; exclude stainless scrap.

- Selected flow: Scrap steel `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the process as steel scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

###### Stainless-steel scrap (`stainless_steel_scrap`)

Record newly generated stainless-steel offcuts and chips separately from other steel. Do not use external-supply scrap identities for this output.

- Selected flow: Stainless steel scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving as newly generated stainless-steel scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

###### Aluminium scrap (`aluminium_scrap`)

Record separately collected aluminium offcuts and chips from the declared route.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving as aluminium scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

###### Copper scrap (`copper_scrap`)

Record separately collected copper-tube offcuts and chips from the declared route.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving as copper scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

###### Waste cutting oil (`waste_cutting_oil`)

Record spent cutting oil removed for off-site recovery, treatment, or disposal.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred out of the recirculating system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_waste_mass`

##### Elementary flows

### Process: Joining, cleaning, and finishing (`joining_cleaning_finishing`)

#### Inputs

##### Product flows

###### Joining and finishing electricity (`electricity_joining`)

Record purchased electricity for welding, brazing auxiliaries, cleaning, drying, and finishing.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented causal allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`

###### Carbon-dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Record purchased carbon dioxide only when used as welding shielding gas.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: supplier mass, cylinder mass difference, or mass converted from metered volume at declared conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gas`

###### Natural gas for process heat (`natural_gas`)

Record gaseous natural gas only when an on-site furnace, burner, dryer, or joining operation consumes it.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gas`

###### Process water (`process_water`)

Record water supplied to aqueous cleaning, rinsing, leak testing, or finishing; identify source and quality.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-recorded water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record active sodium-hydroxide mass when an alkaline cleaning bath uses it; distinguish fresh make-up from recirculated bath inventory.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured active sodium-hydroxide mass in fresh make-up
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_chemistry`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater (`wastewater`)

Record aqueous wastewater from cleaning, rinsing, or testing. Characterize oil, metal, detergent, pH, treatment state, and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured discharged or transferred wastewater mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`

##### Elementary flows

###### Direct fossil carbon dioxide (`carbon_dioxide_fossil`)

Record direct fossil carbon dioxide emitted to air from on-site natural-gas combustion; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission allocated to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission`

### Process: Assembly, testing, inspection, and factory-gate release (`assembly_testing_release`)

#### Inputs

##### Product flows

###### Assembly and testing electricity (`electricity_testing`)

Record purchased electricity for assembly tools, pressure or leak-test equipment, evacuation, charging, and inspection.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented causal allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`

###### R404A refrigerant (`refrigerant_r404a`)

Record R404A only when it crosses the site boundary for charging or testing. State purchased, recovered, retained, and returned quantities separately.

- Selected flow: Refrigerant, R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- Flow property / unit: Mass / kg
- Amount rule: measured R404A mass introduced to the in-scope system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished machinery part (`finished_machinery_part`)

Record only conforming output meeting the declared drawing and release criteria.

- Selected flow: Parts of producer gas or water gas generators, parts of acetylene gas generators and similar water process gas generators, parts for the goods of subclass 43912, parts of refrigerating and freezing equipment and heat pumps, parts of machinery for the treatment of materials by a process involving a change of temperature `cdee7105-36d3-4fd3-8418-f9498bf159bc`
- Flow property / unit: Mass / kg
- Amount rule: measured conforming finished-part mass normalized to exactly 1 kg reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_release`

##### Waste flows

##### Elementary flows

###### R404A released to air (`r404a_to_air`)

Record only R404A released from charging, recovery, or testing to air. Keep the UUID unresolved until an exact state-100 R404A-to-air identity is available.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus purchased plus recovered in, minus retained charge, recovered out, and closing inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | independently metered operations | Avoid allocation by directly assigning BOM materials, metered energy, chemicals, refrigerant, wastes, and emissions to the part family or batch. |  |
| `allocation_shared_operations` | shared utilities or equipment | When direct measurement is unavailable, use the physical driver that caused the exchange, such as machine time, treated area, weld length, bath make-up, or test duration; disclose the driver and sensitivity. |  |
| `allocation_scrap` | metal scrap outputs | Record each segregated scrap stream as waste at the foreground boundary. Do not subtract avoided-production credit; any recycling substitution belongs in a separately declared downstream scenario. |  |
| `allocation_rework` | rework and rejects | Assign rework inputs and rejects to the batch that generated them; do not remove their burdens from the conforming-output denominator. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_waste_mass` | `material_preparation` | named metal inputs, cutting fluid, and segregated wastes | BOM issue, return, scale, and transfer records | part_id; batch_id; material_grade; flow_name; issued_mass; returned_mass; waste_mass; disposition; timestamp | reconcile issues and returns with calibrated scale or transfer records for each flow | kg | each batch or order | representative continuous campaign | each site and route | sum by atomic flow and batch, then normalize to conforming output | BOM revision; certificate; scale calibration; transfer note; reconciliation |
| `cp_energy_metering` | all processes | electricity | submeter or shared-meter allocation record | meter_id; opening; closing; unit; interval; process_id; machine_time; batch_id | direct submetering preferred; otherwise causal allocation | original meter unit and MJ | each batch or shortest interval | same period as production | each site | subtract readings, remove non-production load, assign by process, convert, normalize | calibration; allocation worksheet; production log |
| `cp_process_gas` | `joining_cleaning_finishing` | natural gas and carbon dioxide | meter, cylinder, or supplier record | gas_identity; opening; closing; delivered; returned; temperature; pressure; moisture_basis; batch_id | meter difference or cylinder/supplier reconciliation | m3 or kg | each batch or delivery interval | same period as operation | each site | convert only with declared conditions, assign, normalize | calibration; supplier ticket; cylinder reconciliation |
| `cp_water_balance` | `joining_cleaning_finishing` | process water and wastewater | input, discharge, and transfer records | source; input; discharge; density; oil; metals; detergent; pH; treatment; destination; batch_id | separate input and discharge measurement with characterization | kg | each batch or day | same period as operation | each site | convert with documented density, sum separately, normalize | calibration; laboratory result; discharge record |
| `cp_cleaning_chemistry` | `joining_cleaning_finishing` | sodium hydroxide | purchase, concentration, and bath make-up record | product_mass; sodium_hydroxide_fraction; make_up_mass; returned_mass; bath_id; batch_id | calculate active mass from make-up and verified concentration | kg active | each make-up and batch | same period as cleaning | each line | sum active fresh make-up assigned to batch, normalize | supplier certificate; concentration test; scale; bath log |
| `cp_direct_emission` | `joining_cleaning_finishing` | fossil carbon dioxide | stack measurement record | period; concentration; exhaust_flow; temperature; pressure; moisture; operating_time; batch_id | site measurement at representative operation | kg | each representative test and batch | same period as combustion | each emission point | integrate mass, assign, normalize | sampling report; calibration; operating log |
| `cp_refrigerant_balance` | `assembly_testing_release` | R404A input, retained charge, recovery, inventory, release | cylinder and charging-system balance | identity; opening_inventory; purchased; recovered_in; retained; recovered_out; closing_inventory; batch_id | calibrated scale or charging-machine record over complete circuit | kg | each batch and cylinder change | same period as testing | each circuit | close by identity and batch; calculate release from reconciled difference | calibration; cylinder log; charging record; reconciliation |
| `cp_product_release` | `assembly_testing_release` | conforming output | release, inspection, and scale record | part_id; drawing_revision; batch_id; gross_mass; excluded_packaging_mass; conforming; reject; rework; release_time | weigh conforming output and reconcile rejects and rework | kg | each batch | same period as inputs | each site | sum conforming mass, subtract excluded packaging, normalize to 1 kg | calibration; inspection; release; reject and rework log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every exchange | normalized amount = batch exchange amount divided by conforming finished-part mass | exchange total; conforming output mass | amount per 1 kg finished part |  |
| `calc_sodium_hydroxide_active` | `sodium_hydroxide` | active mass = fresh solution make-up mass multiplied by verified sodium-hydroxide mass fraction | make-up mass; concentration | kg active sodium hydroxide |  |
| `calc_refrigerant_release` | `r404a_to_air` | release = opening inventory + purchased + recovered in - retained charge - recovered out - closing inventory; investigate negative or unexplained results | refrigerant balance fields | kg R404A released |  |
| `calc_material_reconciliation` | each metal route | Reconcile issued material with returns, product content, segregated scrap, work in process, and documented loss; do not force an unidentified remainder into a named flow. | BOM and mass records | route reconciliation and residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and flows | Preserve flow identity, grade, state, direction, and UUID status; do not merge dissimilar materials, wastes, utilities, or emissions. | BOM; certificate; state-100 audit; unresolved manifest entries |
| `dq_temporal` | foreground data | Use one coherent period and align energy, material, waste, emission, and output records. | dated records |
| `dq_measurement` | measured values | Retain calibration, original units, readings, conversion conditions, and allocation worksheets. | certificates; logs; worksheets |
| `dq_completeness` | route coverage | Reconcile the process map to the route and document non-applicable conditional processes and atomic rows. | route traveller; checklist; BOM |
| `dq_range_evidence` | important flows | Foreground collection remains mandatory; apply no external range until at least two independent, original, boundary-compatible sources support a reviewed synthesis. | manifest range-evidence needs and later review |
| `dq_classification` | product scope | Verify the output is specifically a part for a listed equipment family and is not a complete machine. | un-cpc-3-0-structure-2025; drawing; sales specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow | Confirm the denominator is exactly 1 kg measured conforming output and excluded packaging is not embedded in it. |  |
| `validate_part_scope` | product identity | Confirm the drawing ties the output to a covered equipment family and the output is a part rather than complete equipment. | un-cpc-3-0-structure-2025 |
| `validate_process_coverage` | system boundary | Compare the route with the process map; include every applicable operation and document why each conditional item is absent. |  |
| `validate_atomic_inventory` | process inventory | Reject merged material, energy, fuel, chemical, refrigerant, waste, or emission labels; each row preserves one flow identity. |  |
| `validate_mass_reconciliation` | material routes | Check each metal and refrigerant reconciliation; investigate residuals and disclose work in process, rework, rejects, recovery, and uncertainty. |  |
| `validate_uuid_state` | Tiangong references | Require public state_code=100 and property/unit compatibility for populated UUIDs; preserve unresolved rows without a proxy. |  |
| `validate_bilingual_identity` | Chinese rendering | Confirm row ids, UUIDs, controlled values, and order match English, and use exact Tiangong Chinese baseName values. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after review |
| downstream_use | Foreground data packages and downstream process or lifecyclemodel projections for manufacture of the declared part |
| allowed_use | Cradle-to-factory-gate modelling of representative parts with matching BOM, route, geography, period, test boundary, and refrigerant state |
| excluded_use | Complete equipment; household appliances; installation; use-phase performance or leakage; maintenance; end-of-life; unlike functions without functional-equivalence study |
| required_metadata | canonical PCR id; part family; equipment family; drawing; BOM and grades; finished mass; route; site; geography; period; allocation drivers; refrigerant state; test boundary; packaging and transport inclusion; upstream substitutions |
| required_quality_disclosure | UUID and range gaps; data age; meter coverage; allocation; material and refrigerant reconciliation; rework and rejects; wastewater characterization; omissions; uncertainty |
| update_trigger | Change in design, principal material, route, joining or cleaning technology, refrigerant, test, site, energy, allocation driver, upstream dataset, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official CPC 43941 English classification identity and listed equipment-part scope; not inventory quantities or ranges |
