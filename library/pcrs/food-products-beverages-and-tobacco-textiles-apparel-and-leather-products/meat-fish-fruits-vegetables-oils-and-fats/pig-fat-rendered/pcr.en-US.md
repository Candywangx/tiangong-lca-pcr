---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-fat-rendered
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pig fat, rendered

## 1. Scope and Applicability

This PCR governs foreground data packages for fat and grease rendered from pigs, including lard when the declared raw-material restrictions for lard are met. It covers receipt and preparation of eligible pig tissues, rendering and separation, and any declared on-site conditioning, refining, storage, or packaging up to the factory gate. The product designation, intended use or grade, raw-material composition, rendering route, post-render treatment, physical state, and packaging state shall be declared.

The category does not cover unrendered pig fat; lard oil or lard stearin as separately marketed fractions; partly or wholly hydrogenated, inter-esterified, re-esterified, or elaidinised animal fats; fats from non-pig species; or downstream formulated foods and oleochemical products. A food-grade or CXS 211-1999 conformity claim is conditional and shall not be inferred from the CPC identity alone.

No category-wide energy demand, water demand, additive rate, emission factor, or rendering yield is prescribed. These values depend on the facility, raw material, process technology, product designation, and quality grade and shall be collected as foreground data.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-fat-rendered |
| classification_refs | CPC 3.0: 21521, Pig fat, rendered (exact mapping context) |
| covered_products | Pig fat and grease obtained by rendering pig tissues; lard when its declared raw-material boundary meets the applicable product designation; refined rendered pig fat only when it remains rendered pig fat rather than a separately classified fraction or chemically modified fat |
| excluded_products | Unrendered pig fat; lard oil; lard stearin; hydrogenated, inter-esterified, re-esterified, or elaidinised animal fats; poultry fat; tallow; fish or marine-mammal oils; formulated foods and oleochemical derivatives |
| representative_product | Rendered pig fat supplied in bulk at the rendering facility gate |
| production_route | Receipt and preparation of eligible pig raw material, thermal rendering and phase separation, followed by declared conditional filtration, refining, cooling, storage, or packaging |
| market_state | Bulk or packaged rendered pig fat at the factory gate; product designation, intended use or grade, post-render treatment, physical state, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Rendered pig fat meeting the declared product designation and intended-use or grade specification |
| How much | 1 kg net rendered pig fat |
| How well | Product designation, intended use or grade, raw-material composition, rendering route, post-render treatment, physical state, quality specification, and packaging state are declared and supported by batch records |
| How long or cycle | One production batch or an explicitly declared averaging period; no use-phase service duration |
| reference_flow_link | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-fat-rendered |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product at the declared factory gate |
| Reference product flow | Pig fat, rendered `940c22ad-d154-42ac-9988-374cbfeb86b4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Unit group for Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product designation: lard or rendered pork fat; intended use or grade; pig raw-material tissue categories and fitness status; rendering route; post-render treatment including any refining or fractionation; physical state and reference temperature when relevant; quality specification and conformity claim; bulk or packaged state; factory-gate location; production batch or averaging period |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net rendered pig fat, excluding packaging mass. State the weighing point, physical state, and reference temperature when these affect the mass determination. |
| `mass_basis_consistency` | Pig raw materials, intermediate fat, final product, co-products, and wastes | Mass | kg | Use measured net mass on a declared as-received basis. If dry-matter or composition-corrected values are also used, retain the original measured mass and document the conversion basis and result. |
| `energy_accounting` | Electricity, fuels, and purchased heat or steam | Energy or mass/volume with documented conversion | kWh, MJ, kg, or m3 as recorded | Record each carrier separately from meters, invoices, or operating logs; convert only with a documented factor and do not substitute a category-wide default. |
| `composition_and_quality_basis` | Product tests used for designation or grade | Declared analytical property | Method-specific unit | Record the sampled batch, method, result, unit, and conformity decision. CXS 211-1999 appendix characteristics are supplementary unless the declared specification or applicable rule makes them binding. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Eligible pig fatty tissues and, when allowed by the declared product designation, cleaned bones, detached skin, head skin, ears, tails, or other pig tissues arrive at the rendering facility; supplier, species, tissue categories, mass, fitness or grade status, and prior treatment are known |
| starting_condition_role | Foreground gate-to-gate starting condition for rendering; upstream pig production, slaughter, and supplier-side preparation are represented by linked upstream datasets |
| product_classification_scope | Rendered pig fat under CPC 3.0 subclass 21521, with lard and rendered pork fat distinguished by declared raw-material and product-designation facts |
| recursive_input_rule | Purchased rendered pig fat in the same category shall be recorded as a separate product input with quantity and upstream dataset; its prior production shall not be recreated inside this foreground system, and blending or reprocessing shall be disclosed |
| upstream_dataset_requirement | Link representative upstream datasets for pig raw materials, electricity, fuels or purchased heat, water, auxiliaries, packaging, transport when included, and off-site waste or wastewater treatment; disclose allocation inherited from slaughter or supplier datasets |
| disclosure | Declare facility and geography, technology and operating mode, batch or averaging period, raw-material tissue categories, intended use or grade, product designation, post-render treatment, co-products and wastes, allocation method, cut-offs, storage and packaging scope, and all data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground rendering system | Include receipt and preparation of eligible pig raw material, rendering and separation, directly attributable utilities and emissions, and any on-site conditioning required to deliver the declared factory-gate reference product. Link rather than recreate upstream production and downstream use. | `unsd-cpc-3-0-explanatory-notes-2025`; `eu-pef-2021-2279` |
| `boundary_product_designation` | Lard or rendered pork fat designation | For lard, enforce the declared CXS 211-1999 tissue restrictions. For rendered pork fat, disclose any permitted bones, skin, ears, tails, or other tissues. Do not infer one designation from the other. | `codex-cxs-211-1999` |
| `boundary_scope_exclusions` | Category boundary | Exclude unrendered pig fat, separately marketed lard oil or lard stearin, chemically modified animal fats, and non-pig fats. Route such outputs to the appropriate product or waste identity instead of the reference product. | `unsd-cpc-3-0-explanatory-notes-2025`; `codex-cxs-211-1999` |
| `boundary_conditional_operations` | Refining, conditioning, storage, and packaging | Include each operation only when performed within the declared facility gate and needed for the delivered product state; otherwise exclude it and state the transfer point. Clearly label post-render processing where the declared food specification requires it. | `codex-cxs-211-1999`; `eu-pef-2021-2279` |
| `boundary_fdm_bat_scope` | Environmental performance evidence | Do not use energy, water, or emission performance levels from the EU Food, Drink and Milk BAT conclusions as rendering defaults because that source explicitly excludes primary rendering and fat melting; use site records and applicable rendering-specific requirements instead. | `eu-fdm-bat-2019-2031` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt_preparation` | Raw-material receipt and preparation | required | Always; individual cleaning, size-reduction, or dewatering steps are included only when performed | Establish eligible pig raw-material identity and measured feed to rendering | Per 1 kg final rendered pig fat |
| `rendering_separation` | Rendering and phase separation | required | Always; technology and operating mode shall be declared | Convert eligible pig material into rendered fat and separate co-products or wastes | Per 1 kg final rendered pig fat |
| `conditioning_dispatch` | Conditioning, refining, storage, and dispatch | conditional | Include only the operations performed before the declared factory gate | Deliver the declared grade, physical state, storage condition, and bulk or packaged state | Per 1 kg final rendered pig fat |

### Process: Raw-material receipt and preparation (`raw_material_receipt_preparation`)

#### Inputs

##### Product flows

###### Eligible pig raw material (`pig_raw_material_input`)

Pig tissues cross the foreground gate as the material from which the fat is rendered. The recorded tissue categories and fitness status shall support the declared product designation.

- Selected flow: Pig fatty tissues and declared eligible pig tissues or cleaned bones
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass received and charged to the preparation or rendering batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_product_mass`
- Sources: `codex-cxs-211-1999`; `unsd-cpc-3-0-explanatory-notes-2025`

###### Preparation water (`preparation_water_input`)

Record water only when washing, cleaning, or another preparation operation occurs within the foreground gate.

- Selected flow: Water supplied to raw-material preparation
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: Metered or otherwise reconciled water attributable to the batch or averaging period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_water`
- Sources: `eu-pef-2021-2279`

###### Preparation electricity (`preparation_electricity_input`)

Record electricity used by receiving, conveying, grinding, pumping, or other preparation equipment when these operations are performed.

- Selected flow: Electricity supplied to raw-material receipt and preparation
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared pig material (`prepared_pig_material_output`)

Prepared material is an internal intermediate transferred to rendering; its mass and stock change support the foreground mass balance.

- Selected flow: Prepared pig fat-bearing material
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass or mass calculated from receipt, removal, and stock-change records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_product_mass`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Rejected or removed material (`preparation_rejects_output`)

Record foreign material, ineligible tissue, spoilage, or other removed matter under its actual waste or co-product identity and destination.

- Selected flow: Preparation rejects or removed material
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by disposition route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_records`
- Sources: `codex-cxs-211-1999`; `eu-pef-2021-2279`

###### Preparation wastewater (`preparation_wastewater_output`)

Record wastewater when preparation water becomes an effluent; link on-site or off-site treatment and retain measured discharge and monitored pollutant data where available.

- Selected flow: Wastewater from raw-material preparation
- Flow property / unit: Volume / m3
- Amount rule: Metered or reconciled discharge attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_effluent_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

### Process: Rendering and phase separation (`rendering_separation`)

#### Inputs

##### Product flows

###### Prepared pig material feed (`prepared_pig_material_input`)

Prepared pig material enters the rendering operation as the internal process feed.

- Selected flow: Prepared pig fat-bearing material
- Flow property / unit: Mass / kg
- Amount rule: Same transferred amount as `prepared_pig_material_output`, adjusted only for documented intermediate stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_product_mass`
- Sources: `eu-pef-2021-2279`

###### Rendering thermal energy (`rendering_thermal_energy_input`)

Record each fuel or purchased heat or steam carrier separately. No default energy intensity applies.

- Selected flow: Fuel, purchased heat, or steam supplied to rendering
- Flow property / unit: Energy, Mass, or Volume / MJ, kWh, kg, or m3 as recorded
- Amount rule: Metered, invoiced, or batch-log quantity with documented conversion and shared-utility allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-2021-2279`

###### Rendering electricity (`rendering_electricity_input`)

Record electricity for vessels, agitation, pumping, separation, controls, and directly attributable auxiliary systems.

- Selected flow: Electricity supplied to rendering and separation
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rendered pig fat intermediate (`rendered_pig_fat_intermediate_output`)

Record the mass of rendered pig fat leaving separation before any included conditioning or dispatch operations.

- Selected flow: Pig fat, rendered `940c22ad-d154-42ac-9988-374cbfeb86b4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net mass transferred from rendering and separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_product_mass`
- Sources: `codex-cxs-211-1999`; `unsd-cpc-3-0-explanatory-notes-2025`

###### Separated co-products (`rendering_coproducts_output`)

Record separated solids, proteinaceous material, or other marketable outputs individually under their actual identity; do not label lard oil, lard stearin, or chemically modified fat as the reference product.

- Selected flow: Actual separated co-product identity
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass by co-product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_records`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`; `eu-pef-2021-2279`

##### Waste flows

###### Rendering residues and wastewater (`rendering_waste_output`)

Record non-marketable solids, sludges, condensate, and wastewater separately where records allow and link each treatment route.

- Selected flow: Rendering residue, sludge, condensate, or wastewater by actual identity
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Measured quantity by waste type and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Direct rendering emissions (`rendering_direct_emissions_output`)

Record direct releases from on-site combustion, vents, leaks, and wastewater discharge when they cross the environment boundary; use measured values or calculations from collected activity data and documented factors.

- Selected flow: Actual elementary flow to air, water, or soil
- Flow property / unit: Mass / kg or method-specific unit
- Amount rule: Measured emission or calculated amount from foreground activity and documented factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_effluent_records`
- Sources: `eu-pef-2021-2279`

### Process: Conditioning, refining, storage, and dispatch (`conditioning_dispatch`)

#### Inputs

##### Product flows

###### Rendered fat for conditioning (`rendered_pig_fat_conditioning_input`)

Record the internal transfer only when conditioning, refining, storage, or packaging is included before the declared factory gate.

- Selected flow: Pig fat, rendered `940c22ad-d154-42ac-9988-374cbfeb86b4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same amount as the intermediate output, adjusted for documented intermediate stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_product_mass`
- Sources: `codex-cxs-211-1999`

###### Conditioning utilities and auxiliaries (`conditioning_inputs`)

Record water, electricity, heat, filtration aids, approved additives, and packaging as separate flows when used; retain the applicable product specification and supplier dataset.

- Selected flow: Actual utility, auxiliary, additive, or packaging material
- Flow property / unit: Applicable property / recorded unit
- Amount rule: Metered, invoiced, formulation, or issue-record quantity by input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_packaging_records`
- Sources: `codex-cxs-211-1999`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Final rendered pig fat (`final_rendered_pig_fat_output`)

This is the reference product at the declared factory gate. The output record shall carry every required qualifier and the applicable batch disposition.

- Selected flow: Pig fat, rendered `940c22ad-d154-42ac-9988-374cbfeb86b4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed reference output of 1 kg after normalizing measured conforming product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_material_product_mass`
- Sources: `codex-cxs-211-1999`; `unsd-cpc-3-0-explanatory-notes-2025`

###### Conditioning co-products or fractions (`conditioning_coproducts_output`)

Record any separately marketed fraction under its actual product identity and classification; it is not additional reference product output.

- Selected flow: Actual co-product or fraction identity
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass by product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_records`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`; `eu-pef-2021-2279`

##### Waste flows

###### Conditioning and packaging waste (`conditioning_waste_output`)

Record spent filtration media, sludge, rejected product, wastewater, and packaging scrap by actual identity and treatment destination.

- Selected flow: Actual conditioning or packaging waste identity
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Measured quantity by waste type and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Direct conditioning emissions (`conditioning_direct_emissions_output`)

Record direct air, water, or soil releases only when they occur within the included operations.

- Selected flow: Actual elementary flow to air, water, or soil
- Flow property / unit: Mass / kg or method-specific unit
- Amount rule: Measured emission or calculated amount from foreground activity and documented factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg final rendered pig fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_effluent_records`
- Sources: `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Rendering, separation, conditioning, and shared utilities | First subdivide the process and directly assign measured inputs, outputs, emissions, and waste treatment to the output that causes them whenever technically feasible. | `eu-pef-2021-2279` |
| `allocation_residual_shared_flows` | Residual multifunctional burdens after subdivision | If subdivision cannot resolve shared flows, allocate the residual shared burden among marketable outputs using economic allocation based on documented, contemporaneous net revenues at the same gate and averaging period. Report quantities, prices, currency, period, calculation, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_waste_status` | Outputs without a marketable product function | Treat an output as waste only when its legal and economic status and destination support that treatment; assign its handling and treatment burdens to the foreground system and do not give it a co-product credit without documented substitution or another governing method. | `eu-pef-2021-2279` |
| `allocation_upstream_inheritance` | Pig raw material and other purchased inputs | Use the upstream burden and allocation already documented by the representative supplier dataset; do not reallocate the supplier process inside this gate-to-gate system. Disclose when the raw material has zero upstream burden and the rule that authorizes that choice. | `eu-pef-2021-2279` |
| `allocation_governing_method_override` | Studies governed by a programme-specific method | When a declared study method such as PEF prescribes fixed allocation factors or another mandatory rule, apply that method and disclose the departure from the generic residual-flow rule above. Do not mix allocation systems without reconciliation. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_product_mass` | `raw_material_receipt_preparation`; `rendering_separation`; `conditioning_dispatch` | Raw material, internal intermediate, final product, and stock change | Weighbridge, scale, batch, tank-gauge, and inventory records | timestamp; batch_id; supplier; species; tissue_categories; fitness_or_grade_status; product_designation; gross_mass; tare_mass; net_mass; opening_stock; closing_stock; physical_state; reference_temperature; disposition | Calibrated weighing or tank gauging reconciled to batch and inventory records | kg | Each receipt, transfer, and dispatch; stock at each averaging-period boundary | Complete declared batch or representative continuous-production averaging period | All included lines and storage vessels at the declared facility | Sum net flows by batch or period; reconcile internal transfers and stock changes; normalize to conforming final output | Calibration records; batch genealogy; supplier documents; inventory reconciliation; operator sign-off |
| `cp_energy_records` | `raw_material_receipt_preparation`; `rendering_separation`; `conditioning_dispatch` | Electricity, fuels, purchased heat, and steam | Submeter, utility invoice, fuel issue, and operating-hour records | carrier; meter_id; opening_reading; closing_reading; invoice_quantity; unit; conversion_factor; conversion_source; equipment_or_process; operating_hours; allocation_driver | Direct metering preferred; otherwise reconcile invoices and allocate shared use with a documented causal driver | kWh, MJ, kg, or m3 | Continuous or each batch; reconcile at least monthly | Same period as product mass records | All included energy-using equipment and directly attributable auxiliaries | Sum by carrier and process; subtract excluded uses; convert with documented factors; normalize to final output | Meter calibration; invoices; fuel specifications; allocation worksheet; reconciliation residual |
| `cp_utilities_water` | `raw_material_receipt_preparation`; `conditioning_dispatch` | Water withdrawal, supplied water, and wastewater | Water meters, invoices, tank records, and effluent meters | source; meter_id; opening_reading; closing_reading; quantity; unit; process; discharge_route; recycled_quantity | Meter or reconcile water balance for included operations | m3 or kg | Continuous or each batch; reconcile at least monthly | Same period as product mass records | Included water users and discharge points | Sum by source and destination; avoid double counting recycled water; normalize to final output | Meter calibration; invoice; water-balance reconciliation; discharge record |
| `cp_coproduct_waste_records` | `raw_material_receipt_preparation`; `rendering_separation`; `conditioning_dispatch` | Co-products, rejects, residues, sludges, and packaging waste | Scale tickets, batch records, sales records, waste manifests, and treatment receipts | flow_identity; legal_status; economic_status; mass_or_volume; unit; destination; price; currency; period; treatment_route; hazardous_status | Measure each output and retain evidence for product, co-product, or waste classification | kg or m3 | Each batch or shipment | Complete declared batch or averaging period | All included output and waste dispatch points | Sum separately by identity and destination; normalize to final output; preserve values used for allocation | Scale calibration; invoices; manifests; treatment certificates; classification rationale |
| `cp_emission_effluent_records` | `rendering_separation`; `conditioning_dispatch` | Direct emissions and effluent pollutants | Continuous monitoring, sampling, laboratory reports, fuel records, and permit calculations | flow_name; compartment; source_point; measured_concentration; flow_rate; duration; activity_data; factor; factor_source; result; unit; sampling_method; detection_limit | Prefer direct monitoring; otherwise calculate from collected activity using a documented applicable factor | kg or method-specific unit | As required by permit and operating variability; align with production period | Representative of the declared technology and production period | All included direct release points | Integrate measured load or calculate activity times factor; normalize to final output; retain non-detect treatment | Instrument calibration; accredited laboratory report; permit report; calculation sheet; factor reference |
| `cp_conditioning_packaging_records` | `conditioning_dispatch` | Refining inputs, additives, filtration aids, packaging, storage, and dispatch | Formula, batch issue, packaging, warehouse, and dispatch records | material_identity; specification; supplier; quantity; unit; batch_id; operation; storage_duration; storage_condition; package_type; package_mass; dispatch_mass | Collect actual material issues and dispatch records for operations inside the declared gate | Applicable recorded unit | Each batch or dispatch | Complete declared batch or averaging period | Included conditioning, storage, and packaging operations | Sum by material and operation; reconcile packaging and dispatch mass; normalize to final output | Supplier specification; formulation approval; issue record; warehouse log; dispatch record |
| `cp_quality_designation_records` | `raw_material_receipt_preparation`; `conditioning_dispatch` | Product designation, intended use or grade, labelling, and conformity | Supplier declarations, batch specifications, sampling plans, laboratory results, labels, and release decisions | designation; intended_use_or_grade; raw_material_eligibility; test_method; sample_id; result; unit; specification_limit; conformity_decision; label_claim; reviewer | Verify each declared designation and claim against the applicable specification and batch evidence | Method-specific | Each batch or according to a justified sampling plan | Same production period as inventory data | All product included in the data package | Keep batch-level results; aggregate only with traceability and no masking of nonconforming lots | Approved specification; chain of custody; laboratory competence; release authorization; label copy |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_flow` | Every quantified foreground flow | normalized amount = attributable flow quantity / net conforming final rendered pig fat output | Collected flow quantity; net final product mass | Flow amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_internal_transfer` | Prepared material and rendered-fat intermediate | transferred amount = measured transfer + opening stock - closing stock for the corresponding intermediate and period; use the same corrected amount on the sending and receiving processes | Transfer measurements; opening and closing stock | Reconciled internal intermediate amount | `eu-pef-2021-2279` |
| `calc_energy_conversion` | Fuel, steam, and purchased heat records | converted energy = recorded carrier quantity × documented carrier-specific conversion factor; retain original quantity, factor, source, and converted result | Carrier quantity; conversion factor | Energy by carrier and process | `eu-pef-2021-2279` |
| `calc_mass_balance` | Complete foreground system | mass balance residual = total mass inputs + opening stock - total product, co-product, waste, measured emission outputs - closing stock; investigate and disclose the residual rather than forcing it to zero | All mass flows and stock changes on a consistent basis | Mass-balance residual and reconciliation statement | `eu-pef-2021-2279` |
| `calc_economic_allocation` | Residual shared burden after subdivision | allocation factor_i = net revenue_i / sum of net revenues for all marketable outputs at the same gate and period; allocated burden_i = shared burden × allocation factor_i | Output quantities; contemporaneous net prices; shared burden | Allocation factors and allocated residual burdens | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Raw material and final product | Trace each included batch from pig species and tissue categories through product designation, intended use or grade, post-render treatment, and dispatch. | Batch genealogy, supplier declaration, specification, release and dispatch records; `codex-cxs-211-1999` |
| `dq_measurement` | Mass, energy, water, emissions, and quality tests | Use calibrated instruments or reconciled records; retain original readings, units, conversions, sampling methods, detection limits, and verification status. | Calibration certificates, invoices, logs, laboratory reports, and reconciliation worksheets; `eu-pef-2021-2279` |
| `dq_temporal_coverage` | All foreground data | Use one complete batch or a period representative of normal operation; include start/end stocks, shutdowns, cleaning, rework, and abnormal events or disclose exclusions. | Timestamped records, production calendar, event log, and stock reconciliation |
| `dq_completeness` | Foreground process inventory | Include all known material, energy, water, product, co-product, waste, and direct elementary flows for included processes; identify and justify any cut-off or unavailable record. | Completed flow checklist, mass and utility balances, cut-off register; `eu-pef-2021-2279` |
| `dq_representativeness` | Dataset metadata and linked background datasets | Document technology, geography, time period, precision, supplier coverage, and why each background dataset represents the actual input or treatment route. | Data-quality assessment and dataset-selection record; `eu-pef-2021-2279` |
| `dq_no_generic_performance_values` | Energy, water, yield, and emissions | Do not fill missing foreground values with values from the EU FDM BAT source or uncited category defaults. Mark the gap and replace it with site records or applicable rendering-specific evidence before review. | Data-gap register, source applicability review, replacement record; `eu-fdm-bat-2019-2031` |
| `dq_conditional_codex_claim` | Food-grade or CXS 211-1999 claims | Verify the applicable lard or rendered pork fat definition, composition and quality provisions, additives, contaminants, hygiene, labelling, and analysis requirements. Treat appendix factors as supplementary unless adopted by the declared specification. | Specification crosswalk, test reports, label, release decision; `codex-cxs-211-1999` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference product UUID shall be `940c22ad-d154-42ac-9988-374cbfeb86b4`, the reference property UUID shall be `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit-group UUID shall be `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference unit shall be kg. |  |
| `validate_required_qualifiers` | Dataset identity | Fail completeness when any required qualifier is absent, including product designation, intended use or grade, raw-material tissue categories, rendering route, post-render treatment, physical state, quality specification, packaging state, factory gate, or batch/period. | `codex-cxs-211-1999`; `unsd-cpc-3-0-explanatory-notes-2025` |
| `validate_category_scope` | Product and co-product identities | Reject unrendered pig fat, lard oil, lard stearin, chemically modified fats, and non-pig fats as the reference product; record them under their actual identity when present. | `unsd-cpc-3-0-explanatory-notes-2025` |
| `validate_process_coverage` | Process map | Require raw-material receipt/preparation and rendering/separation; require conditioning/dispatch only when performed before the declared gate, with included and excluded operations disclosed. | `eu-pef-2021-2279` |
| `validate_foreground_amounts` | Material, energy, water, auxiliaries, products, wastes, and emissions | Require measured or calculated-from-collection amounts, collection protocol links, period alignment, and normalization to 1 kg final product. Reject uncited default energy, water, emission, or yield values. | `eu-pef-2021-2279` |
| `validate_mass_balance` | Complete foreground system | Require a documented mass balance including stock changes, co-products, wastes, wastewater, and measured mass emissions; investigate and disclose material residuals. | `eu-pef-2021-2279` |
| `validate_allocation` | Multifunctional processes | Require evidence of subdivision first and complete documentation of any residual allocation, output status, quantities, prices, period, and governing method. | `eu-pef-2021-2279` |
| `validate_codex_claim` | Food-grade or CXS 211-1999 conformity claim | When such a claim is made, require a designation-specific crosswalk and batch evidence; do not treat CPC 21521 identity or supplementary appendix values alone as proof of conformity. | `codex-cxs-211-1999` |
| `validate_source_applicability` | External evidence | Require each source to support the rule for which it is cited. Record that EU FDM BAT excludes primary rendering and fat melting and therefore supplies no rendering performance default. | `eu-fdm-bat-2019-2031` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for rendered pig fat |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA of rendered pig fat and downstream products when product designation, grade, geography, technology, allocation, gate, and data quality match the study |
| excluded_use | Unrendered pig fat, separate lard oil or stearin, chemically modified fat, non-pig fat, undisclosed mixtures, or claims of food/Codex conformity without supporting evidence |
| required_metadata | Canonical PCR id; reference UUIDs; CPC mapping context; facility geography; technology and operating mode; product designation; intended use or grade; raw-material tissue categories; rendering route; post-render treatment; physical and packaging state; batch or averaging period; foreground gate; co-products and wastes; allocation method; linked upstream datasets; cut-offs and data gaps |
| required_quality_disclosure | Measurement and calibration basis; mass and utility reconciliation; temporal, technological, and geographical representativeness; completeness; uncertainty and mass-balance residual; source applicability; laboratory and conformity evidence where claimed |
| update_trigger | Change in raw-material eligibility, product designation or grade, technology, facility or geography, energy system, refining or packaging scope, co-product status or prices, allocation rule, applicable legal or Codex requirement, reference UUID, or availability of better rendering-specific evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, subclass 21521, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Category inclusion of rendered pig fat and lard; exclusion of unrendered pig fat, lard oil, and lard stearin |
| `codex-cxs-211-1999` | `standard` | Codex Alimentarius, *Standard for Named Animal Fats*, CXS 211-1999, amended 2024. https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf (retrieved 2026-08-12) | Lard and rendered pork fat definitions, eligible raw-material distinctions, conditional post-render processing and labelling, quality and conformity evidence |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint method. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Functional unit, foreground company-specific data, inventory completeness, system-boundary disclosure, subdivision and residual allocation, data quality |
| `eu-fdm-bat-2019-2031` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-12) | Applicability limitation: primary rendering and fat melting are excluded, so its performance levels are not used as rendering defaults |
