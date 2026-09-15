---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-except-cathode-ray-oscilloscopes-and-oscillographs-for-teleco-d7f424f3
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Instruments and apparatus (except cathode-ray oscilloscopes and oscillographs) for telecommunications

## 1. Scope and Applicability

This PCR applies to factory-gate production of instruments and apparatus specially designed to measure, check, analyse, or test telecommunications signals, channels, networks, or transmission performance. Representative products include cross-talk meters, gain-measuring instruments, distortion-factor meters, psophometers, telecommunications network analysers, and comparable telecommunications test instruments.

It excludes cathode-ray oscilloscopes and cathode-ray oscillographs; general-purpose electrical measuring instruments not specially designed for telecommunications; telecommunications transmission or reception equipment whose primary function is communication rather than measurement or testing; stand-alone test fixtures; services; and parts sold separately. The representative route covers purchased electronic assemblies and mechanical parts, final electronic/mechanical assembly, conditional soldering and cleaning, firmware configuration, calibration and functional testing, and final packaging. Upstream manufacture of purchased components and materials is represented by linked supplier datasets, not recreated in the foreground.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-except-cathode-ray-oscilloscopes-and-oscillographs-for-teleco-d7f424f3 |
| classification_refs | CPC 3.0: 48244 (exact classification context) |
| covered_products | Instruments and apparatus specially designed for telecommunications measurement, checking, analysis, or test functions |
| excluded_products | Cathode-ray oscilloscopes and oscillographs; general-purpose electrical meters; communication equipment whose primary function is transmission or reception; services; test fixtures; separately sold parts |
| representative_product | Factory-calibrated telecommunications network or signal test instrument |
| production_route | Purchased populated boards, enclosure and optional display; final assembly with conditional soldering and cleaning; firmware configuration; calibration and functional test; packaging |
| market_state | New, complete, calibrated instrument at the manufacturer gate; net instrument mass excludes transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete instrument that performs the declared telecommunications measurement or test function |
| How much | 1 kg net mass of finished instrument at the manufacturer gate |
| How well | Configured for the declared signal, channel, network or transmission test; passed the manufacturer's calibration and functional acceptance criteria |
| How long or cycle | One production batch normalized to 1 kg net finished output; use-stage duration is outside this cradle-to-gate reference |
| reference_flow_link | Net mass of accepted finished-product output in `finished_telecommunications_instrument` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Instruments and apparatus (except cathode-ray oscilloscopes and oscillographs) for telecommunications `c867c593-71b0-499b-8f6f-3e606cfee4e9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | declared telecommunications test function; measured parameter and frequency or data-rate range; accuracy and calibration status; model and hardware configuration; included display, power supply, cables and accessories; net product mass; packaging configuration; manufacturing site and period; production technology; factory-gate boundary |

The required qualifiers shall be declared in dataset metadata, process documentation, the reference-flow comment, the product description, or equivalent data-package fields. A data package missing these qualifiers has an incomplete reference-flow definition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory to 1 kg of accepted finished instrument, excluding transport packaging from reference-product mass. |
| `component_mass_consistency` | product and waste flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert component, chemical and waste records to kg using measured mass or documented supplier mass; disclose any count-to-mass conversion. |
| `electricity_energy_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Convert metered kWh to MJ using 1 kWh = 3.6 MJ; retain the original meter unit, grid geography, voltage and allocation basis. |
| `solvent_mass_balance` | isopropanol cleaning | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile isopropanol input with recovered solvent, spent solvent, retained inventory and quantified air release over the same period; document any residual and uncertainty. |

## 5. System Boundary

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | foreground production | Include receipt of purchased assemblies and parts, final assembly, conditional soldering and cleaning, firmware loading, calibration, functional testing, rework and rejects, and final packaging through the manufacturer gate. | `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995` |
| `boundary_purchased_components` | upstream supply | Link purchased printed boards, displays, enclosures, chemicals, packaging and other parts to upstream datasets with matching product state, geography and technology; do not recreate their manufacture inside final assembly. |  |
| `boundary_conditional_routes` | cleaning and optional hardware | Include LCD modules only when installed; include solder and flux only for on-site soldering or rework; include isopropanol input, spent solvent and air release only when solvent cleaning occurs. | `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995` |
| `boundary_exclusions` | downstream stages | Exclude distribution after the manufacturer gate, instrument use, maintenance, calibration during use, and end-of-life treatment; disclose if any is added by study scope. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased populated printed wiring boards, fabricated enclosure, optional display module, chemicals and packaging received at the final instrument manufacturing site |
| starting_condition_role | Supplier-gate inputs to foreground final assembly |
| product_classification_scope | Telecommunications measuring, checking, analysis and test instruments within the declared semantic boundary, independent of any one classification mapping |
| recursive_input_rule | If a purchased input is itself a CPC 48244 instrument, record it as a separate upstream product input and link its supplier dataset; do not merge its manufacture with the reference output. |
| upstream_dataset_requirement | Use product-state-, technology- and geography-matched supplier or secondary datasets; document proxy use and coverage gaps. |
| disclosure | Declare product configuration, included accessories, net mass, packaging mass, assembly and cleaning route, calibration/test basis, manufacturing geography and period, and whether any downstream stage is added. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_assembly` | Electronic and mechanical final assembly | required | Always include for final instrument manufacture; individual soldering, cleaning and display rows are conditional. | Converts purchased assemblies and parts into a complete pre-calibration instrument. | Per kg assembled instrument transferred to calibration |
| `calibration_test` | Firmware configuration, calibration and functional testing | required | Always include; combine only when records cannot distinguish configuration, calibration and acceptance testing. | Establishes declared telecommunications test function and acceptance status. | Per kg accepted calibrated instrument |
| `final_packaging` | Final packaging | required | Include packaging placed on the market with the instrument. | Packs the accepted instrument for shipment and produces the reference output. | Per kg net finished instrument |

### Process: Electronic and mechanical final assembly (`final_assembly`)

#### Inputs

##### Product flows

###### Populated printed wiring board (`populated_printed_wiring_board`)

Purchased populated boards cross the foreground boundary as complete electronic assemblies. Record their mass from receiving or bill-of-material records.

- Selected flow: Populated printed wiring board
- Flow property / unit: Mass / kg
- Amount rule: Foreground mass installed in accepted and rejected assemblies, net of returned supplier packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_material_mass`
- Sources:

###### Aluminium instrument enclosure (`aluminium_instrument_enclosure`)

Record the mass of the fabricated aluminium enclosure installed in the instrument; do not substitute unwrought aluminium.

- Selected flow: Aluminium instrument enclosure
- Flow property / unit: Mass / kg
- Amount rule: Foreground mass installed in accepted and rejected assemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_material_mass`
- Sources:

###### LCD display module (`lcd_display_module`)

Include only when an LCD display module is installed in the declared configuration.

- Selected flow: LCD display module `264605c6-41b8-4baa-82b0-e27e815063a0`
- Flow property / unit: Mass / kg
- Amount rule: Foreground installed module mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_material_mass`
- Sources:

###### Lead-free solder with flux (`lead_free_solder_flux`)

Include only for on-site soldering or rework. Record issued material minus unopened returns.

- Selected flow: Lead-free solder + flux `4fbe5177-aa26-4ea6-b034-b59ad19f587e`
- Flow property / unit: Mass / kg
- Amount rule: Net foreground material issued to soldering and rework
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solder_material_balance`
- Sources: `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995`

###### Isopropanol cleaning solvent (`isopropanol_input`)

Include only when isopropanol is used for post-solder or precision cleaning.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Purchased plus opening inventory minus closing inventory and transfers out
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_mass_balance`
- Sources: `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995`

###### Purchased electricity for assembly (`electricity_assembly`)

Record electricity attributable to final assembly, soldering, cleaning, local extraction and rework.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy or documented allocation from the assembly-area meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_by_process`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled instrument before calibration (`assembled_instrument_output`)

This internal intermediate carries the same physical assembly into calibration without representing a market product.

- Selected flow: Assembled telecommunications test instrument before calibration
- Flow property / unit: Mass / kg
- Amount rule: Measured mass transferred to calibration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_transfer_mass`
- Sources:

##### Waste flows

###### Waste populated printed wiring board (`waste_populated_printed_wiring_board`)

Record populated boards rejected and leaving the foreground for recycling or treatment; disclose destination and hazardous classification.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or manifested waste leaving the assembly process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_manifest`
- Sources: `us-epa-electronics-sector-1995`

###### Solder dross (`solder_dross`)

Include only when molten solder operations or rework generate separately collected dross.

- Selected flow: Solder dross
- Flow property / unit: Mass / kg
- Amount rule: Weighed dross transferred to recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_manifest`
- Sources: `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995`

###### Spent isopropanol cleaning solvent (`spent_isopropanol`)

Include only when spent isopropanol leaves the foreground as a separately managed waste.

- Selected flow: Spent isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Weighed or manifested spent solvent sent to recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_mass_balance`
- Sources: `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995`

##### Elementary flows

###### Isopropanol released to air (`isopropanol_to_air`)

Include uncaptured isopropanol evaporation from cleaning. Do not report captured solvent both as an air emission and as spent solvent.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or solvent mass-balance residual assigned to air after documented recovery and waste transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_mass_balance`
- Sources: `oecd-electronics-chemicals-2014`

### Process: Firmware configuration, calibration and functional testing (`calibration_test`)

#### Inputs

##### Product flows

###### Assembled instrument before calibration (`assembled_instrument_input`)

Use the same dataset-specific internal flow as the output from final assembly.

- Selected flow: Assembled telecommunications test instrument before calibration
- Flow property / unit: Mass / kg
- Amount rule: Equal to the linked `assembled_instrument_output` transfer after reconciling work in progress
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted calibrated instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_transfer_mass`
- Sources:

###### Purchased electricity for calibration and test (`electricity_calibration`)

Record test-bench, firmware-loading, calibration and environmental-conditioning electricity attributable to the batch.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy or documented allocation from the test-area meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted calibrated instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_by_process`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Calibrated instrument before packaging (`calibrated_instrument_output`)

Record accepted net instrument mass transferred to packaging; failed units remain in rework or are recorded in the applicable waste row.

- Selected flow: Calibrated telecommunications test instrument before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted calibrated instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_transfer_mass`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Final packaging (`final_packaging`)

#### Inputs

##### Product flows

###### Calibrated instrument before packaging (`calibrated_instrument_input`)

Use the same dataset-specific internal flow as the accepted output from calibration and testing.

- Selected flow: Calibrated telecommunications test instrument before packaging
- Flow property / unit: Mass / kg
- Amount rule: Equal to linked `calibrated_instrument_output` after reconciling work in progress
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_transfer_mass`
- Sources:

###### Corrugated board box (`corrugated_board_box`)

Record the mass of corrugated board boxes placed on the market with the product.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Foreground packaging specification or weighed packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources:

###### Paper instruction manual insert (`paper_manual_insert`)

Include printed instruction-manual inserts supplied with the product.

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass / kg
- Amount rule: Foreground packaging specification or weighed insert mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished telecommunications instrument (`finished_telecommunications_instrument`)

The reference output is the accepted instrument at the manufacturer gate; packaging mass is inventoried separately and excluded from the net reference mass.

- Selected flow: Instruments and apparatus (except cathode-ray oscilloscopes and oscillographs) for telecommunications `c867c593-71b0-499b-8f6f-3e606cfee4e9`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net accepted finished instrument
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared assembly and test operations | Subdivide or meter product families and process areas before allocation whenever records permit. |  |
| `allocation_mass_or_time` | residual shared burdens | Allocate residual material-handling burdens by net accepted product mass and equipment or test-bench electricity by measured operating time or energy; disclose the selected driver and sensitivity. |  |
| `allocation_rework` | rework and rejects | Assign rework materials, energy and waste to the production batch that generated them; do not credit rejected product as accepted output. |  |
| `allocation_recovery` | recyclable solder and electronic waste | Report the physical waste leaving the foreground and its destination. Apply recycling credits only in a downstream model with the chosen modelling convention disclosed; do not subtract unverified credits from foreground inventory. | `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_material_mass` | `final_assembly` | purchased components | receiving and bill-of-material records | part number; installed quantity; unit mass; rejects; returns | Reconcile approved bill of materials with receiving and production records; verify representative unit masses. | kg | per model and batch | representative consecutive production period, normally at least one complete reporting year when available | all final-assembly lines in scope | Sum installed and rejected mass by part, then normalize to assembled output. | controlled BOM revision; scale record or supplier mass; reconciliation |
| `cp_solder_material_balance` | `final_assembly` | solder input and dross | material issue, return and waste records | opening stock; receipts; issues; returns; closing stock; dross mass | Reconcile material inventory over the reporting period and cross-check dross manifests. | kg | monthly and reporting-period total | same period as output | all soldering and rework stations in scope | Net solder use = opening + receipts - closing - transfers out; report dross separately. | inventory ledger; calibrated scale; waste manifest |
| `cp_solvent_mass_balance` | `final_assembly` | isopropanol input, spent waste and air release | purchase, stock, recovery, waste and emission records | opening stock; receipts; closing stock; transfers; recovered solvent; spent solvent; measured air release | Reconcile all isopropanol pathways over one consistent period; quantify or explain residual uncertainty. | kg | monthly and reporting-period total | same period as output | all cleaning stations, storage and abatement in scope | Input = recovery + spent waste + air release + inventory change + documented residual. | inventory ledger; waste manifest; abatement record; measurement or balance calculation |
| `cp_electricity_by_process` | `final_assembly`; `calibration_test` | electricity | meter and equipment runtime records | meter start/end; kWh; equipment; runtime; standby; batch output | Prefer submetering; otherwise allocate a documented area meter using measured equipment power and runtime. | kWh and MJ | per batch with monthly reconciliation | same period as output | assembly and test areas in scope | Convert kWh to MJ and normalize separately for assembly and calibration/test outputs. | meter identifier; calibration status; runtime log; allocation worksheet |
| `cp_intermediate_transfer_mass` | `final_assembly`; `calibration_test`; `final_packaging` | internal intermediates | production transfer and work-in-progress records | quantity; unit mass; transfer status; rejects; opening/closing WIP | Reconcile transfers between processes without counting the same physical instrument twice. | kg | per batch | same period as output | all included process steps | Output of the sending process equals input to the receiving process after WIP reconciliation. | transfer record; scale or approved unit mass; WIP reconciliation |
| `cp_waste_manifest` | `final_assembly` | electronic and solder waste | waste weighing and shipment records | waste type; gross/tare/net mass; date; destination; treatment; hazardous code | Segregate each waste type and retain transporter or treatment records. | kg | each shipment with reporting-period total | same period as output | all included assembly and rework stations | Sum net mass by atomic waste flow and destination; do not merge waste types. | calibrated scale; manifest; recycler receipt |
| `cp_packaging_mass` | `final_packaging` | packaging inputs | packaging specification and issue records | component; material; unit mass; issued quantity; returns; packed output | Verify each packaging component mass and reconcile issues to packed output. | kg | per configuration and batch | same period as output | all packaging lines in scope | Sum each packaging component separately and normalize to net finished instrument mass. | approved packaging specification; scale record; issue reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all foreground rows | Normalized amount = reporting-period flow amount / reporting-period net accepted finished-instrument mass. | flow amount; net accepted finished-instrument mass | amount per 1 kg reference flow |  |
| `calc_electricity_mj` | electricity rows | Electricity (MJ) = metered electricity (kWh) × 3.6. | kWh | MJ |  |
| `calc_solvent_balance` | isopropanol pathways | Air release = reconciled isopropanol input - recovered solvent - spent solvent - closing inventory increase - other documented transfers; do not report a negative result and investigate material residuals. | input; recovery; waste; inventory change; transfers | isopropanol to air and balance residual | `oecd-electronics-chemicals-2014` |
| `calc_internal_transfer` | internal intermediates | Receiving-process input = sending-process output adjusted only for documented work-in-progress movement; any loss must be assigned to a concrete waste or emission. | transfer mass; opening/closing WIP | linked intermediate input |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and component identity | Record model, revision, test function, hardware configuration, included accessories and supplier part numbers; distinguish optional display and on-site solder/clean routes. | controlled product configuration and BOM |
| `dq_completeness` | mass, electricity, chemicals and wastes | Reconcile all included lines and batches; document missing meters, unquantified residuals and excluded low-volume flows without replacing atomic flows with umbrella labels. | mass/energy balance and completeness statement |
| `dq_temporal` | foreground activity data | Use one consistent representative production period and disclose start/end dates, shutdowns, engineering runs and atypical rework. | reporting-period record and production log |
| `dq_geography_technology` | linked upstream datasets | Match supplier state, geography and technology where possible; identify each proxy and its expected direction of bias. | supplier metadata and dataset selection record |
| `dq_measurement` | meters and scales | Retain instrument identifier, unit, calibration or verification status, reading frequency and count-to-mass conversion evidence. | calibration certificate, meter log or approved supplier mass |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | finished output | Confirm exactly 1 kg net accepted CPC 48244 instrument output, excluding transport packaging, with all required qualifiers disclosed. | `un-cpc-3-0-structure-2025` |
| `validate_product_exclusions` | product identity | Reject datasets whose primary product is a cathode-ray oscilloscope/oscillograph, general-purpose electrical meter, communications service, transmission/reception apparatus, test fixture or separately sold part. | `un-cpc-3-0-structure-2025` |
| `validate_transfer_balance` | internal intermediates | Confirm sending-process output and receiving-process input agree after documented work-in-progress reconciliation. |  |
| `validate_solvent_balance` | conditional isopropanol route | When cleaning occurs, require input, recovery, spent-waste and air-release records on one period and explain any material balance residual. | `oecd-electronics-chemicals-2014` |
| `validate_waste_atomicity` | waste outputs | Confirm populated-board waste, solder dross and spent solvent are reported separately with treatment destinations and no collection-label waste row. | `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995` |
| `validate_range_provenance` | quantitative QA ranges | Do not apply an external range unless at least two mutually independent original-text sources have compatible boundary, functional unit and product state. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared telecommunications measuring or test instrument configuration |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Cradle-to-gate product footprints, supply-chain modelling and lifecycle models when product function, configuration, geography, technology and packaging are compatible |
| excluded_use | Direct representation of cathode-ray oscilloscopes/oscillographs, general-purpose electrical meters, communications services, use-stage performance, maintenance, or end-of-life without added processes |
| required_metadata | PCR id; CPC context; product model and revision; test function and measured parameter; frequency or data-rate range; accuracy and calibration status; included accessories; net and packaging mass; assembly/cleaning route; site; geography; technology; reporting period; allocation; upstream dataset choices |
| required_quality_disclosure | Foreground coverage; meter and scale status; BOM reconciliation; internal-transfer balance; solvent balance when applicable; rejects and rework; waste destinations; proxies; exclusions; uncertainty and unresolved UUID/range evidence |
| update_trigger | Material change in product configuration, supplier BOM, enclosure/display/power architecture, solder or cleaning technology, manufacturing site, calibration/test sequence, packaging, allocation method, or representative production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 48244 identity and explicit excluded cathode-ray product class |
| `oecd-electronics-chemicals-2014` | Official guidance (`official_guidance`) | OECD, Chemicals Used in the Electronics Industry, Series on Emission Scenario Documents No. 25, https://www.oecd.org/content/dam/oecd/en/publications/reports/2014/09/chemicals-used-in-the-electronics-industry_g1g48552/9789264221062-en.pdf (DOI: 10.1787/9789264221062-en) | PCB soldering, flux, optional post-solder cleaning, solvent release pathways, solder waste and spent-cleaning-waste decomposition |
| `us-epa-electronics-sector-1995` | Official guidance (`official_guidance`) | US EPA, Profile of the Electronics and Computer Industry, Sector Notebook Project, September 1995, https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/elecmpsn-2.pdf | Electronic assembly, soldering, electrical/mechanical testing, packaging, scrap boards, solder dross and spent-solvent waste |
