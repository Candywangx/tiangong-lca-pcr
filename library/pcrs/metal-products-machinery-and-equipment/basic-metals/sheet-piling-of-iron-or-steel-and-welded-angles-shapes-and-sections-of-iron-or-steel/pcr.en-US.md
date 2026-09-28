---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.sheet-piling-of-iron-or-steel-and-welded-angles-shapes-and-sections-of-iron-or-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sheet piling of iron or steel and welded angles, shapes and sections of iron or steel

## 1. Scope and Applicability

This rule covers accepted iron or steel sheet piling and welded iron or steel angles, shapes and sections at the manufacturing gate. Sheet piling may be hot rolled or cold formed from hot rolled coil; welded sections are cut and welded from plate. Each dataset declares one finished product and one route; do not pool unlike products into one inventory.

Installation, use, dismantling and end-of-life treatment are outside this foreground boundary. Connect upstream production of purchased billet, coil or plate through separate background datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.sheet-piling-of-iron-or-steel-and-welded-angles-shapes-and-sections-of-iron-or-steel |
| classification_refs | CPC 3.0: 41252 |
| covered_products | Iron or steel sheet piling; welded iron or steel angles, shapes and sections |
| excluded_products | Unwelded ordinary hot-rolled sections, railway track materials, welded pipe and installed structures |
| representative_product | Accepted hot-rolled steel sheet piling |
| production_route | Hot-rolled sheet piling, cold-formed sheet piling or welded plate section; model separately |
| market_state | Accepted, net-mass measured and ready at factory gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Iron or steel sheet piling or welded steel section |
| How much | 1 kg accepted finished product |
| How well | Declare steel grade, profile, length and route; meet order acceptance |
| How long or cycle | One factory-gate delivery; no service life prescribed |
| reference_flow_link | hot_sheet_pile_out |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished hot-rolled steel sheet piling |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Product form; hot-rolled/cold-formed/welded route; steel grade; cross-section and length; surface state; accepted net mass; production site and period |


The reference table uses hot-rolled sheet piling as the representative. For cold-formed sheet piling or welded sections, use the corresponding accepted output row as the reference product, retain the same per 1 kg net-mass basis and disclose the substituted row.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | hot_sheet_pile_out, cold_sheet_pile_out, welded_section_out | Mass | kg | Determine accepted net finished mass for the same batch using a calibrated scale or traceable weighing records; exclude transport packaging. |
| reference_basis | all inventory rows | Mass or energy | kg or MJ | Normalize each route to 1 kg accepted net finished product; retain MJ for electricity and natural gas rather than treating energy as mass. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased billet, hot-rolled coil or plate reaches the foreground gate |
| starting_condition_role | Upstream product input |
| product_classification_scope | Accepted steel sheet piling or welded steel angle, shape or section |
| recursive_input_rule | Link purchased materials and energy to upstream data; count steel production once |
| upstream_dataset_requirement | Match billet, coil, plate and energy datasets by grade, route, geography and time |
| disclosure | Disclose manufacturing and upstream boundary; report end-of-life recycling credit separately, outside this gate result |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | all routes | From receipt of purchased steel to accepted finished product at the factory gate, collect route-specific direct materials, energy and steel scrap. | worldsteel-sections-2023 |
| boundary_recycling | end_of_life | Keep end-of-life recycling credits separate from the factory-gate result. | worldsteel-sections-2023 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hot_rolling | Sheet-pile hot rolling | conditional | If the declared product is sheet piling hot rolled from billet | Foreground manufacturing | per 1 kg accepted hot-rolled sheet piling |
| cold_forming | Sheet-pile cold forming | conditional | If the declared product is sheet piling cold formed from hot-rolled coil | Foreground manufacturing | per 1 kg accepted cold-formed sheet piling |
| welded_fabrication | Welded section fabrication | conditional | If the declared product is an angle, shape or section cut and welded from plate | Foreground manufacturing | per 1 kg accepted welded section |


### Process: Sheet-pile hot rolling (`hot_rolling`)

#### Inputs

##### Product flows

###### Steel billet (`hot_billet_in`)

Collect this atomic exchange only for the `hot_rolling` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Billet `7de70586-42d8-40bb-a687-e0e0c05722e4`
- Flow property / unit: Mass / kg
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_hot_material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_material`
- Sources: `worldsteel-sections-2023`

###### Electricity (`hot_electricity_in`)

Collect this atomic exchange only for the `hot_rolling` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_hot_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_energy`
- Sources: `worldsteel-sections-2023`

###### Natural gas (`hot_gas_in`)

Collect this atomic exchange only for the `hot_rolling` route and normalize it to accepted net finished mass of the same batch. Include only when the gas-fired reheating furnace actually consumes natural gas.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_hot_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_energy`
- Sources: `worldsteel-sections-2023`

#### Outputs

##### Product flows

###### Finished hot-rolled steel sheet piling (`hot_sheet_pile_out`)

Collect this atomic exchange only for the `hot_rolling` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Finished hot-rolled steel sheet piling
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_output`
- Sources: `worldsteel-sections-2023`

##### Waste flows

###### Steel scrap (`hot_scrap_out`)

Collect this atomic exchange only for the `hot_rolling` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Steel scrap `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- Flow property / unit: Mass / kg
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_hot_scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_scrap`
- Sources: `worldsteel-sections-2023`

### Process: Sheet-pile cold forming (`cold_forming`)

#### Inputs

##### Product flows

###### Hot-rolled steel coil (`cold_coil_in`)

Collect this atomic exchange only for the `cold_forming` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: steel hot rolled coil `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_cold_material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_material`
- Sources: `arcelormittal-sheet-piling-routes`

###### Electricity (`cold_electricity_in`)

Collect this atomic exchange only for the `cold_forming` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_cold_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_energy`
- Sources: `arcelormittal-sheet-piling-routes`

#### Outputs

##### Product flows

###### Finished cold-formed steel sheet piling (`cold_sheet_pile_out`)

Collect this atomic exchange only for the `cold_forming` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Finished cold-formed steel sheet piling
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_output`
- Sources: `arcelormittal-sheet-piling-routes`

##### Waste flows

###### Steel scrap (`cold_scrap_out`)

Collect this atomic exchange only for the `cold_forming` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Steel scrap `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- Flow property / unit: Mass / kg
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_cold_scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_scrap`
- Sources: `arcelormittal-sheet-piling-routes`

### Process: Welded section fabrication (`welded_fabrication`)

#### Inputs

##### Product flows

###### Steel plate for welded sections (`weld_plate_in`)

Collect this atomic exchange only for the `welded_fabrication` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Steel plate for welded sections
- Flow property / unit: Mass / kg
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_weld_material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weld_material`
- Sources: `sci-welded-sections-ss052a`

###### Flux-cored welding wire (`weld_wire_in`)

Collect this atomic exchange only for the `welded_fabrication` route and normalize it to accepted net finished mass of the same batch. Include only when flux-cored wire is actually used; another filler requires its own specific atomic row in the data package.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_weld_material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weld_material`
- Sources: `sci-welded-sections-ss052a`

###### Electricity (`weld_electricity_in`)

Collect this atomic exchange only for the `welded_fabrication` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_weld_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weld_energy`
- Sources: `sci-welded-sections-ss052a`

#### Outputs

##### Product flows

###### Finished welded steel angle, shape or section (`welded_section_out`)

Collect this atomic exchange only for the `welded_fabrication` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Finished welded steel angle, shape or section
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weld_output`
- Sources: `sci-welded-sections-ss052a`

##### Waste flows

###### Steel scrap (`weld_scrap_out`)

Collect this atomic exchange only for the `welded_fabrication` route and normalize it to accepted net finished mass of the same batch.

- Selected flow: Steel scrap `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- Flow property / unit: Mass / kg
- Amount rule: Collect and report actual exchange per 1 kg reference flow using cp_weld_scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weld_scrap`
- Sources: `sci-welded-sections-ss052a`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_operations | Prefer measured process subdivision among hot rolling, cold forming and welded fabrication. | ghg-product-standard-2011 |
| allocation_residual | shared_operations | For inseparable shared burdens, allocate using a verified physical relationship; document the relationship, data and sensitivity. | ghg-product-standard-2011 |
| scrap_accounting | steel_scrap | Record mass and destination of exported or internally reused scrap; do not double count internal recirculation as external scrap input or end-of-life credit. | worldsteel-sections-2023 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_hot_material | hot_rolling | hot_billet_in | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_hot_energy | hot_rolling | hot_electricity_in, hot_gas_in | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg or MJ | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_hot_output | hot_rolling | hot_sheet_pile_out | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_hot_scrap | hot_rolling | hot_scrap_out | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_cold_material | cold_forming | cold_coil_in | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_cold_energy | cold_forming | cold_electricity_in | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg or MJ | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_cold_output | cold_forming | cold_sheet_pile_out | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_cold_scrap | cold_forming | cold_scrap_out | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_weld_material | welded_fabrication | weld_plate_in, weld_wire_in | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_weld_energy | welded_fabrication | weld_electricity_in | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg or MJ | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_weld_output | welded_fabrication | welded_section_out | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |
| cp_weld_scrap | welded_fabrication | weld_scrap_out | Batch production record | batch ID; exchange amount; accepted net finished mass; meter or invoice ID | Read batch ledger or calibrated meter and reconcile with production and acceptance records. | kg | each batch | representative production period | one manufacturing site | per 1 kg reference flow | scale/meter calibration and mass-balance reconciliation |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalization | all inventory rows | Divide attributable exchange amount for one batch by accepted net finished mass for that batch; calculate each route separately. | batch exchange amount; accepted net finished mass | amount per 1 kg reference flow |  |
| energy_conversion | hot_electricity_in, cold_electricity_in, weld_electricity_in | If meter records are in kWh, convert at 1 kWh = 3.6 MJ before reporting; do not mix net and gross calorific bases. | meter reading; unit | MJ |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all routes | Declare finished product profile, grade and route; match the process map and reference output row. | order and acceptance record |
| dq_mass | all routes | Use accepted net mass as denominator; reconcile material input, finished output and steel scrap. | calibration record and mass balance |
| dq_energy | all routes | Record electricity and natural gas separately; disclose electricity units and the gross-calorific gas basis. | meter, invoices and calorific-value record |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_route | all routes | Each dataset shall use only the manufacturing route and reference output row matching its declared finished product. | un-cpc-3-2025 |
| validate_balance | all routes | Reconcile same-batch steel input, finished output and steel scrap; explain differences without unsupported industry factors. |  |
| validate_uuid | all inventory rows | Resolve unfinished sheet-pile, welded-section and plate UUIDs before dataset publication; do not substitute generic steel flows. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset |
| downstream_use | Factory-gate inventory for process and lifecyclemodel projections of the declared steel product |
| allowed_use | Comparable form, grade, route, geography and period |
| excluded_use | Not for installation, use or end-of-life; no unlabelled average across hot-rolled, cold-formed and welded routes |
| required_metadata | product form; grade; profile and length; route; site; period; reference output row; net mass |
| required_quality_disclosure | unresolved UUIDs, missing data, allocation and background data choices |
| update_trigger | material change in process, grade, metering or background data |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product identity |
| worldsteel-sections-2023 | dataset | https://worldsteel.org/wp-content/uploads/Sections-Global-Construction.pdf | hot-rolled section route, declared unit, boundary and recycling separation |
| sci-welded-sections-ss052a | extension_guidance | https://steelconstruction.info/images/9/9b/SS052a.pdf | plate cutting and welded-section process decomposition |
| arcelormittal-sheet-piling-routes | extension_guidance | https://sheetpiling.arcelormittal.com/sites/default/files/2024-05/AMCRPS_Flyer-EPD-LCA-Public-procurement-infrastructure-en-2022-web%5B1%5D.pdf | hot-rolled and cold-formed sheet-pile route distinction |
| ghg-product-standard-2011 | standard | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | allocation hierarchy |
