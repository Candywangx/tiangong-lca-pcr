---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.parachutes
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Parachutes

## 1. Scope and Applicability

This PCR governs foreground manufacturing data packages for finished parachutes and factory-complete parachute assemblies classified as CPC 3.0 code 27170. It covers personnel, emergency, reserve, cargo, extraction, deceleration, and drogue configurations only when the data package declares the actual product type and configuration. The foreground starts with qualified purchased materials and components at the manufacturing site and ends with a released, packed factory-gate product.

The PCR does not cover paragliders, kites, sails, tents, parachute-operation services, repacking or maintenance services, or fabric, cord, webbing, harness, container, and hardware components sold under a separate product identity. It does not authorize averaging unlike parachute types or material systems without traceable production records.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.parachutes` |
| classification_refs | CPC 3.0 `27170` Parachutes |
| covered_products | Finished parachutes and factory-complete parachute assemblies, including personnel, emergency, reserve, cargo, extraction, deceleration, and drogue configurations when declared |
| excluded_products | Paragliders; kites; sails; tents; services; and fabric, cord, webbing, harness, container, or hardware components sold as separate products |
| representative_product | A factory-gate personnel ram-air parachute assembly with a declared canopy, suspension-line, harness/container, and deployment-system configuration |
| production_route | Receipt and inspection of qualified materials and components; layout and cutting; sewing; line, webbing, and hardware integration as applicable; final inspection and functional release; packing |
| market_state | Finished, inspected, and released parachute at the factory gate, with included accessories and packaging declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished parachute conforming to the declared type, design configuration, operating limitations, and release requirements |
| How much | 1 kg net unpackaged product mass |
| How well | Released against the declared specification, inspection plan, functional tests, and applicable certification or standard |
| How long or cycle | One released production lot normalized to 1 kg; declared service-life or removal limitations are metadata and do not change the reference amount |
| reference_flow_link | `reference_output` in `parachute_manufacturing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parachutes `887e7332-42b2-496b-aea3-0e9308ff8f17` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | parachute use class and type; canopy geometry and nominal size; canopy fibre, construction, coating, and finish; suspension-line material and type; line trim or declared line configuration; webbing material; included harness, container, deployment-device, and connector-hardware configuration; minimum and maximum operating mass where applicable; maximum pack-opening speed where applicable; applicable certification or standard; release inspections and functional tests; service-life or removal limits; included accessories; packaging inclusion and tare; manufacturing site; geography; production period; allocation basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Accepted finished-parachute output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net unpackaged accepted output or derive it from a controlled bill of materials verified by weighing; exclude rejected product, reusable transport items, and packaging tare. |
| `bom_mass` | Material, component, packaging, and solid-waste exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record actual lot quantities from receiving, issue/return, controlled BOM, or calibrated weighing records; do not infer amounts from a generic parachute design. |
| `energy_measurement` | Site electricity used by included operations | Energy | kWh | Use interval or submeter records for the same production period; document conversion and allocation when a meter covers more than the declared product. |
| `configuration_traceability` | Product and material records | Mass and configuration record | kg | Preserve product part number, lot, material specification, and configuration linkage so that recorded masses can be reconciled to the released product. |
| `measurement_period_alignment` | All foreground exchanges | Recorded property of the exchange | Recorded unit of the exchange | Use the same lot or a documented common production period for output, material, energy, packaging, and waste records; disclose any temporal mismatch. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified purchased fabrics, thread, webbing, suspension cord, connector hardware, deployment components, utilities, and packaging received at the parachute manufacturing site |
| starting_condition_role | Starting condition for the dry manufacturing foreground; upstream fibre, fabric, coating, finishing, metal-part, electricity-generation, and packaging production remain linked background processes unless performed at the reporting site |
| product_classification_scope | Finished parachutes and complete parachute assemblies under CPC 3.0 `27170`, separated by declared use class, canopy type, material system, and included component configuration |
| recursive_input_rule | A purchased finished parachute or same-category complete assembly remains one technosphere product input with its supplier dataset; do not recursively rebuild it inside this foreground process |
| upstream_dataset_requirement | Link supplier- or geography-representative datasets for every purchased material, component, utility, and packaging exchange; disclose textile pretreatment, dyeing, coating, and finishing routes where relevant |
| disclosure | Declare which operations are on site, which components are purchased complete, all omitted configuration elements, site and period, textile finish/coating route, release basis, packaging basis, and allocation method |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_foreground_operations` | Include receipt inspection, layout and cutting, sewing, suspension-line and webbing operations, connector-hardware and deployment-component integration when performed on site, final inspection, functional release, packing, direct electricity, and separately measured material losses and rejects. | `faa-parachute-rigger-handbook-2015` |
| `boundary_upstream_textiles` | Treat purchased fibre, fabric, thread, webbing, cord, dyeing, coating, and finishing as upstream background links unless the operation occurs at the reporting site; preserve the actual textile material and wet-processing route in supplier metadata. | `jrc-textiles-bref-2023` |
| `boundary_configuration_separation` | Keep personnel, cargo, extraction, deceleration, drogue, canopy-shape, fibre-system, coating/finish, and included-assembly configurations separate unless production-weighted foreground records support aggregation. | `faa-parachute-rigger-handbook-2015`; `eu-environmental-footprint-2021` |
| `boundary_downstream_exclusion` | Exclude transport after the factory gate, installation, packing for use, deployment, repacking, inspection during service, repair, and end-of-life from this manufacturing foreground; retain operating and service-life limitations as product metadata. | `faa-parachute-rigger-handbook-2015` |
| `boundary_same_category_input` | Record a purchased finished parachute or complete same-category assembly as a single technosphere input and disclose its included mass; do not count its internal materials again. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parachute_manufacturing` | Parachute manufacture, release, and packing | `required` | Always required for a factory-gate parachute dataset | Consolidated foreground manufacturing process | `reference_output` |

### Process: Parachute manufacture, release, and packing (`parachute_manufacturing`)

This process represents the site operations needed to convert qualified purchased materials and components into one declared released parachute configuration. Route-specific exchanges are recorded only when they physically cross this process boundary.

#### Inputs

##### Product flows

###### Polyamide 6.6 canopy fabric (`nylon66_canopy_fabric_input`)

Woven polyamide 6.6 parachute-canopy fabric crosses the boundary when issued to cutting for the declared product. Its quantity is the actual issued mass less controlled returns for the production lot.

- Selected flow: Woven polyamide 6.6 parachute-canopy fabric
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass minus returned unused fabric for the accepted production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `faa-parachute-rigger-handbook-2015`

###### Polyester canopy fabric (`polyester_canopy_fabric_input`)

Woven polyester parachute-canopy fabric crosses the boundary when it is the declared canopy material. Record it independently from polyamide fabric and only for the applicable configuration.

- Selected flow: Woven polyester parachute-canopy fabric
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass minus returned unused fabric for the accepted production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `faa-parachute-rigger-handbook-2015`

###### Polyester sewing thread (`polyester_sewing_thread_input`)

Polyester sewing thread crosses the boundary when issued to seam, reinforcement, and attachment operations. Its mass is obtained from controlled issue/return or verified spool-weight records.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Record issued thread mass minus unused returns for the accepted production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `faa-parachute-rigger-handbook-2015`

###### Polyamide 6.6 parachute webbing (`nylon66_webbing_input`)

Polyamide 6.6 parachute webbing crosses the boundary when cut and assembled into the declared load-bearing configuration. Use actual issued and returned mass, not a generic harness estimate.

- Selected flow: Polyamide 6.6 parachute webbing
- Flow property / unit: Mass / kg
- Amount rule: Record issued webbing mass minus unused returns for the accepted production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `faa-parachute-rigger-handbook-2015`

###### Polyester suspension cord (`polyester_suspension_cord_input`)

Braided polyester parachute suspension cord crosses the boundary when cut, trimmed, and attached for the declared line configuration. Keep this exchange separate from UHMWPE cord.

- Selected flow: Braided polyester parachute suspension cord
- Flow property / unit: Mass / kg
- Amount rule: Record issued cord mass minus unused returns for the accepted production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `faa-parachute-rigger-handbook-2015`

###### UHMWPE suspension cord (`uhmwpe_suspension_cord_input`)

Braided ultra-high-molecular-weight polyethylene parachute suspension cord crosses the boundary when it is used in the declared line configuration. Record it separately because its material identity differs from polyester cord.

- Selected flow: Braided ultra-high-molecular-weight polyethylene parachute suspension cord
- Flow property / unit: Mass / kg
- Amount rule: Record issued cord mass minus unused returns for the accepted production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `faa-parachute-rigger-handbook-2015`

###### Stainless-steel connector hardware (`stainless_steel_hardware_input`)

Finished stainless-steel parachute connector hardware crosses the boundary when installed in the declared configuration. Record the actual accepted hardware mass and part identity.

- Selected flow: Finished stainless-steel parachute connector hardware
- Flow property / unit: Mass / kg
- Amount rule: Record installed mass plus separately recorded rejected units from controlled issue and inspection records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `faa-parachute-rigger-handbook-2015`

###### Aluminium-alloy connector hardware (`aluminium_hardware_input`)

Finished aluminium-alloy parachute connector hardware crosses the boundary when installed in the declared configuration. Record it independently from stainless-steel hardware.

- Selected flow: Finished aluminium-alloy parachute connector hardware
- Flow property / unit: Mass / kg
- Amount rule: Record installed mass plus separately recorded rejected units from controlled issue and inspection records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `faa-parachute-rigger-handbook-2015`

###### Low-voltage alternating-current electricity (`low_voltage_electricity_input`)

Alternating-current electricity below 1 kV crosses the boundary through site meters for cutting, sewing, assembly, inspection, and packing. The data package must identify the actual supply mix and geography.

- Selected flow: Alternating-current electricity, below 1 kV, site consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity for included operations and allocate shared meters using `calc_shared_electricity`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Corrugated board box (`corrugated_board_box_input`)

Corrugated board boxes cross the boundary when consumed as sales packaging for the declared product. Record the actual packaging mass and exclude reusable transport packaging unless ownership transfers.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record consumed box mass for the released production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Polyethylene packaging film (`polyethylene_film_input`)

Polyethylene film crosses the boundary when consumed as an individual sales-packaging component for the declared product. Record film separately from the corrugated box.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Record consumed film mass for the released production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

No waste input is prescribed. If a specific externally generated waste is treated on site, add it as one atomic foreground exchange with its own identity review and records.

##### Elementary flows

No elementary input is prescribed. Record a directly measured elementary input only when it physically crosses the environment boundary at the reporting site.

#### Outputs

##### Product flows

###### Reference parachute output (`reference_output`)

The accepted finished parachute is the quantitative reference output after final inspection and functional release. Its fixed amount is the normalization denominator for all other exchanges.

- Selected flow: Parachutes `887e7332-42b2-496b-aea3-0e9308ff8f17`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed at 1 kg net unpackaged accepted parachute output.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Polyamide 6.6 canopy-fabric offcuts (`nylon66_fabric_offcuts_output`)

Polyamide 6.6 woven canopy-fabric offcuts leave the process when cutting losses are not internally reused in the same production period. Record their measured mass and actual destination.

- Selected flow: Polyamide 6.6 woven parachute-fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: Record segregated offcut mass leaving the process after subtracting documented internal reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Polyester canopy-fabric offcuts (`polyester_fabric_offcuts_output`)

Polyester woven canopy-fabric offcuts leave the process when cutting losses are not internally reused in the same production period. Keep this waste separate from polyamide offcuts.

- Selected flow: Polyester woven parachute-fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: Record segregated offcut mass leaving the process after subtracting documented internal reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Polyester sewing-thread offcuts (`polyester_thread_offcuts_output`)

Polyester sewing-thread ends and unusable remnants leave the process as a separate waste exchange. Their mass is determined by segregated weighing or a documented issue-return balance.

- Selected flow: Polyester sewing-thread offcuts
- Flow property / unit: Mass / kg
- Amount rule: Record segregated thread-waste mass leaving the process after subtracting documented internal reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Polyester suspension-cord offcuts (`polyester_cord_offcuts_output`)

Polyester suspension-cord cut ends and rejected trimmed lengths leave the process as a material-specific waste exchange. Do not combine them with fabric or thread waste.

- Selected flow: Polyester suspension-cord offcuts
- Flow property / unit: Mass / kg
- Amount rule: Record segregated cord-waste mass leaving the process after subtracting documented internal reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Rejected stainless-steel connector hardware (`rejected_stainless_hardware_output`)

Rejected stainless-steel parachute connector hardware leaves the process when inspection rejects cannot be returned to stock or supplier. Record its mass independently from aluminium hardware.

- Selected flow: Rejected stainless-steel parachute connector hardware
- Flow property / unit: Mass / kg
- Amount rule: Record weighed rejected hardware mass leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Rejected aluminium-alloy connector hardware (`rejected_aluminium_hardware_output`)

Rejected aluminium-alloy parachute connector hardware leaves the process when inspection rejects cannot be returned to stock or supplier. Record it as its own atomic waste exchange.

- Selected flow: Rejected aluminium-alloy parachute connector hardware
- Flow property / unit: Mass / kg
- Amount rule: Record weighed rejected hardware mass leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net unpackaged accepted parachute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

No default elementary output is prescribed for dry assembly. Report only directly measured site emissions that physically cross the environment boundary, each as a separate exchange with a reviewed identity.

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_avoid` | Prefer process subdivision, dedicated meters, and configuration-specific material records so that allocation is avoided. | `iso-14044-2006`; `eu-environmental-footprint-2021` |
| `allocation_shared_electricity` | Allocate a shared electricity meter by measured machine time, submetered load, or another documented causal driver; use output mass only when causality is demonstrated and report a sensitivity check for material shared loads. | `iso-14044-2006` |
| `allocation_configuration_families` | Allocate shared operations among configuration families using production records that preserve the declared product type and configuration; do not use an unweighted average across unlike parachutes. | `eu-environmental-footprint-2021` |
| `allocation_rework_and_scrap` | Internal rework returned to the same lot is not a second product. Record saleable co-products separately and allocate by a documented physical relationship where feasible; do not apply an avoided-burden credit inside the foreground inventory. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output_release` | `parachute_manufacturing` | `reference_output` | Release and weighing record | product type; part number; lot; configuration; accepted units; net mass; packaging tare; operating limits; inspection status; functional-test status | Calibrated weighing linked to the controlled release record | kg | Each released lot | Same lot or declared production period as inventory inputs | Reporting manufacturing site | Sum accepted net product mass only | Calibration record; release certificate; inspection and test record |
| `cp_material_bom` | `parachute_manufacturing` | Material and component inputs | BOM, receipt, issue, return, and inspection records | row_id; material or component name; specification; supplier; part number; lot; issued quantity and mass; return quantity and mass; rejected quantity and mass | Reconcile controlled BOM with warehouse issue/return and calibrated mass records | kg | Each production lot | Same lot or declared production period as output | Reporting manufacturing site | Issued minus unused return, retaining material-specific rows | Approved BOM; purchase/receipt record; scale calibration; lot traceability |
| `cp_energy_records` | `parachute_manufacturing` | `low_voltage_electricity_input` | Meter and operating record | meter id; opening and closing readings; interval; machine or area; machine time; allocation driver; supply mix; geography | Read dedicated or shared meters and document the causal allocation driver | kWh | Meter interval and each reporting period | Covers the same declared production period | Reporting manufacturing site | Sum included consumption, subtract documented non-production loads, then allocate by `calc_shared_electricity` | Meter calibration or utility statement; operating log; allocation worksheet |
| `cp_waste_records` | `parachute_manufacturing` | Waste outputs | Segregated weighing and disposition record | row_id; material identity; container tare; gross and net mass; lot; internal reuse; return to supplier; destination | Weigh each material-specific waste stream and reconcile internal reuse or returns | kg | Each waste collection event | Same lot or declared production period as output | Reporting manufacturing site | Sum net mass by row_id; exclude documented same-period internal reuse | Scale calibration; waste log; transfer or return record |
| `cp_packaging_records` | `parachute_manufacturing` | Packaging inputs | Packing and material issue record | row_id; packaging specification; quantity; unit mass; total mass; reusable status; ownership transfer; lot | Weigh representative components and reconcile consumed counts to released units | kg | Each released lot | Same lot or declared production period as output | Reporting manufacturing site | Sum packaging mass that transfers with the product; report reusable transport items separately | Packaging specification; scale calibration; packing record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every non-reference exchange | normalized amount = recorded amount attributed to the declared product divided by accepted net unpackaged output mass | Attributed exchange amount; accepted output mass from `cp_output_release` | Exchange amount per 1 kg reference output | `iso-14044-2006` |
| `calc_shared_electricity` | `low_voltage_electricity_input` | attributed electricity = total included meter consumption multiplied by the declared causal-driver share; document excluded loads and the driver denominator | Meter readings; operating logs; causal-driver totals | Attributed kWh before reference normalization | `iso-14044-2006` |
| `calc_material_balance` | Material and solid-waste exchanges | For each material family, reconcile issued mass with unused returns, accepted-product incorporation, internal reuse, and outgoing waste; investigate and disclose the residual | `cp_material_bom`; `cp_output_release`; `cp_waste_records` | Material-family balance and residual | `eu-environmental-footprint-2021` |
| `calc_packaging_normalization` | `corrugated_board_box_input`; `polyethylene_film_input` | packaging amount = transferred packaging mass divided by accepted net unpackaged output mass | `cp_packaging_records`; `cp_output_release` | kg packaging per kg reference output | `eu-environmental-footprint-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_configuration` | Reference output and all material rows | Preserve the released product identity, type, part number, material specifications, and included configuration; do not substitute a generic parachute profile. | Controlled specification; BOM; release record; product marking or equivalent traceability record |
| `dq_uuid_identity` | UUID-bearing rows | Use only UUIDs confirmed by hybrid search and state-100 direct read for the same semantic flow, flow type, reference property, and unit; leave all other UUIDs absent. | UUID enrichment audit in manifest review metadata |
| `dq_primary_data` | Foreground amounts | Use site records for the declared production period; disclose coverage, calibration, allocation, and any temporal mismatch. | Protocol records and quality evidence listed above |
| `dq_completeness` | Full process inventory | Include every material, component, utility, packaging component, waste, and direct site emission that crosses the declared boundary; explain genuinely absent route-specific exchanges. | Signed inventory completeness review; material and energy reconciliations |
| `dq_mass_balance` | Mass-bearing exchanges | Reconcile material-family inputs, accepted output, returns, internal reuse, and outgoing waste; investigate and disclose residuals without inventing balancing flows. | `calc_material_balance` worksheet |
| `dq_supplier_links` | Upstream textiles and components | Use supplier- or geography-representative upstream datasets and disclose fibre, textile construction, coating/finish, metal, and component production route where material. | Supplier declarations; dataset metadata; purchasing specification |

## 9. Validation Rules

| rule_id | Rule | severity |
| --- | --- | --- |
| `validate_reference_identity` | The reference output must be Product flow `887e7332-42b2-496b-aea3-0e9308ff8f17`, classified as CPC 27170, with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | error |
| `validate_reference_amount` | The quantitative reference must equal exactly 1 kg net unpackaged accepted parachute output. | error |
| `validate_required_qualifiers` | Every required qualifier in section 3 must be present or explicitly marked not applicable with a product-specific justification. | error |
| `validate_scope_and_configuration` | Product classification, use class, type, configuration, included components, and production route must match the declared data package; unlike configurations must not be silently averaged. | error |
| `validate_atomic_inventory` | Each inventory card must represent one concrete atomic exchange; collection labels, flow selectors, and combined alternatives are invalid. | error |
| `validate_foreground_records` | Every non-reference amount must be supported by the linked foreground collection protocol; no AI-authored range or generic default may replace a missing record. | error |
| `validate_boundary_links` | Every purchased material, component, utility, and packaging exchange must link to a suitable upstream dataset or carry an explicit unresolved dataset gap; on-site and off-site operations must not be double counted. | error |
| `validate_mass_balance` | Material-family balances must include issued mass, returns, accepted-product incorporation, internal reuse, and outgoing waste, with residuals investigated and disclosed. | error |
| `validate_energy_reconciliation` | Electricity must reconcile to meter records and any shared-meter allocation must state the causal driver and denominator. | error |
| `validate_release_evidence` | Accepted output must link to release, inspection, functional-test, mass, lot, and configuration evidence for the declared product. | error |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for one declared parachute configuration, manufacturing site, geography, and production period |
| downstream_use | Input to reviewed `process` and `lifecyclemodel` projections and to product LCI/LCA studies |
| allowed_use | Product-specific or configuration-family studies when scope, material system, operating limitations, geography, period, and allocation basis match the declared dataset |
| excluded_use | Unqualified category-wide averages; substitution across unlike parachute types or material systems; service, maintenance, use, or end-of-life claims outside the declared boundary |
| required_metadata | PCR id; CPC code; reference UUID; product type and configuration; material specifications; included components; operating and service-life limitations; certification or standard; inspection and test basis; site; geography; period; boundary; allocation; packaging basis |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; supplier dataset representativeness; UUID gaps; temporal mismatches; allocation shares; mass-balance residuals; excluded operations; route-specific absent exchanges |
| update_trigger | Change in product type, canopy geometry, material or coating system, suspension-line or hardware configuration, included assembly, manufacturing route, site, supply mix, certification basis, or production-period representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0—Explanatory Notes*, CPC 27170, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official category identity and separation from adjacent textile articles |
| `faa-parachute-rigger-handbook-2015` | `handbook` | U.S. Federal Aviation Administration, *Parachute Rigger Handbook*, FAA-H-8083-17, Change 1, 2015. https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/prh_change1_changes.pdf | Parachute construction, materials, component compatibility, operating-limit marking, inspection, testing, quality control, and release evidence |
| `jrc-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Textiles Industry*, 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry | Upstream textile pretreatment, dyeing, printing, coating, and finishing boundary disclosure |
| `iso-14044-2006` | `standard` | ISO 14044:2006, *Environmental management—Life cycle assessment—Requirements and guidelines*; reviewed and confirmed in 2022. https://www.iso.org/standard/38498.html | System boundary, allocation hierarchy, inventory calculation, and data-quality rules |
| `eu-environmental-footprint-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | Life-cycle data quality, supply-chain representativeness, category specificity, reconciliation, and reporting rules |
