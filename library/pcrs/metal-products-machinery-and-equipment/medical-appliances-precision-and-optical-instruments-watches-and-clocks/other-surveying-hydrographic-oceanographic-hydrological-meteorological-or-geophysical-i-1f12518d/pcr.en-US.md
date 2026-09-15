---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-surveying-hydrographic-oceanographic-hydrological-meteorological-or-geophysical-i-1f12518d
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other surveying, hydrographic, oceanographic, hydrological, meteorological or geophysical instruments and appliances

## 1. Scope and Applicability

This PCR applies to the manufacture of finished surveying, hydrographic, oceanographic, hydrological, meteorological or geophysical instruments and appliances within the reviewed semantic scope of CPC 3.0 subclass 48219. It covers mechanical, electrical and electronic instruments that measure, observe, record or support the acquisition of spatial, water, ocean, weather or geophysical conditions when they are not more specifically classified elsewhere.

The foreground production boundary covers in-house component processing when performed, final instrument assembly, calibration or functional testing, and packaging up to the factory gate. Purchased materials, components, subassemblies, energy carriers, transport services and waste-treatment services cross the foreground boundary as product or waste flows and require upstream datasets.

This PCR excludes direction-finding compasses and other navigational instruments, rangefinders, theodolites, tachymeters and levels, radar and radio-navigation equipment, general-purpose instruments for measuring liquid or gas variables, laboratory analytical instruments, and services such as surveying, weather forecasting or geophysical consulting when those products or services belong to another category. Use, maintenance and end-of-life are not foreground manufacturing processes, but a downstream lifecycle model shall add them when they are material to the declared application. Electrical and electronic instruments shall disclose the applicable collection and treatment scenario.

The category is technologically diverse. No category-wide default bill of materials, yield, electricity use, water use, reject rate, lifetime or end-of-life fraction is prescribed. Those values shall be collected for the declared product and production route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-surveying-hydrographic-oceanographic-hydrological-meteorological-or-geophysical-i-1f12518d |
| classification_refs | CPC 3.0: 48219 — Other surveying, hydrographic, oceanographic, hydrological, meteorological or geophysical instruments and appliances |
| covered_products | Finished instruments and appliances for surveying, hydrographic, oceanographic, hydrological, meteorological or geophysical observation or measurement that are within CPC 48219 and are not more specifically classified elsewhere |
| excluded_products | Direction-finding compasses and other navigational instruments; rangefinders, theodolites, tachymeters and levels; radar or radio-navigation equipment; general-purpose liquid or gas variable instruments; analytical laboratory instruments; surveying, forecasting and geophysical services |
| representative_product | A finished, identified instrument or appliance that has passed the manufacturer's declared functional test or calibration requirement and is ready for sale at the factory gate |
| production_route | Product-specific bill of materials and purchased components; conditional in-house component processing; instrument assembly; calibration or functional testing; packaging |
| market_state | Finished product, manufactured; production mix at plant; net instrument mass reported separately from packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished surveying, hydrographic, oceanographic, hydrological, meteorological or geophysical instrument or appliance within the declared product scope |
| How much | 1 kg net mass of finished instrument, excluding transport and sales packaging |
| How well | Conforms to the declared model, measurement function, performance specification and applicable factory test or calibration acceptance criteria |
| How long or cycle | One completed manufacturing cycle to the factory gate; service life is declared separately for downstream use-stage modelling |
| reference_flow_link | Net mass of conforming factory-gate product output from `packaging_and_factory_gate`, normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other surveying, hydrographic, oceanographic, hydrological, meteorological or geophysical instruments and appliances `d2d1aeaf-da4d-4eab-835e-642ae764cdee` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument family and intended measurement function; manufacturer and model or product code; mechanical, electrical or electronic configuration; measurement range and accuracy or performance class where applicable; net mass per unit; production geography and reference period; bill-of-materials revision; battery type and mass if present; power supply and rated power if relevant; calibration or functional-test status; packaging excluded from reference mass |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground amounts to 1 kg net mass of conforming finished instrument. Exclude sales and transport packaging from the reference mass and record it as a separate input. |
| `item_to_mass_conversion` | products recorded by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass only with a product-model-specific measured or controlled net mass per unit and retain the count, sampled mass, sample size and conversion record. |
| `energy_preservation` | electricity and fuels | Energy property selected for the exact flow | kWh or MJ | Preserve metered units and conversion factors. Convert only with a documented factor and do not treat electricity and fuel energy as interchangeable flows. |
| `packaging_separation` | packaging inputs | Mass | kg | Report packaging by material and mass per reference flow; do not include packaging mass in the 1 kg reference product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified purchased materials, parts and subassemblies received for the declared product and bill-of-materials revision, plus any in-house starting stock entering component processing |
| starting_condition_role | Foreground manufacturing entry condition supported by procurement, warehouse and bill-of-materials records |
| product_classification_scope | Finished instruments and appliances within the reviewed semantic scope of CPC 3.0 subclass 48219; classification is context, not canonical PCR identity |
| recursive_input_rule | If an input is itself a finished or intermediate product in the same semantic category, record it once as a separate product input with an upstream dataset; do not recursively reproduce this PCR inside the foreground process |
| upstream_dataset_requirement | Every purchased material, component, energy carrier, transport service and treatment service shall be linked to a geographically, technologically and temporally representative upstream dataset or disclosed as an unresolved data gap |
| disclosure | Declare included sites and processes, in-house versus purchased component boundaries, bill-of-materials revision, net product mass, packaging boundary, calibration or test status, allocation decisions, excluded processes, and whether use and end-of-life scenarios are supplied downstream |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground manufacturing | Include all processes under the producer's control that transform received inputs into the conforming factory-gate instrument: conditional in-house component processing, assembly, calibration or functional testing, packaging, onsite utilities and onsite treatment where present. | `eu-pef-2021-annex-i` |
| `sb_upstream_completeness` | purchased inputs and services | Use the product-specific bill of materials and procurement records to identify all purchased materials, parts, subassemblies, batteries, energy carriers, packaging, inbound transport and treatment services, and link each included input to an upstream dataset. | `eu-pef-2021-annex-i` |
| `sb_downstream_separation` | use and end-of-life | Keep use, maintenance and end-of-life outside the foreground production dataset, but disclose the product attributes required for downstream modelling. For electrical or electronic instruments, the downstream scenario shall represent applicable separate collection, preparation for re-use, recycling, recovery and treatment requirements rather than assuming municipal disposal. | `eu-pef-2021-annex-i`; `eu-weee-2012-19-consolidated` |
| `sb_cutoff_disclosure` | exclusions | Do not omit a material, energy, waste or direct-emission flow solely because no generic dataset is available. Quantify it from foreground records, select a documented proxy, or disclose the unresolved gap and its expected significance. | `eu-pef-2021-annex-i` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `inhouse_component_processing` | In-house component processing and finishing | conditional | Include when metal, polymer, ceramic, glass, optical, sensor or electronic components are fabricated, machined, cleaned, coated or otherwise processed at the reporting site | foreground component production | kg of accepted components transferred to assembly |
| `instrument_assembly` | Instrument assembly and integration | required | Always | foreground product assembly | kg of assembled instrument transferred to testing |
| `calibration_and_testing` | Calibration and functional testing | required | Always perform and record the manufacturer's applicable acceptance test; include metrological calibration when required by the product specification | foreground quality assurance | kg of conforming instrument transferred to packaging |
| `packaging_and_factory_gate` | Packaging and factory-gate release | required | Always | foreground finalization | 1 kg net conforming finished instrument |

### Process: In-house component processing and finishing (`inhouse_component_processing`)

#### Inputs

##### Product flows

###### Materials and purchased blanks processed in-house (`component_materials`)

Record each metal, polymer, ceramic, glass, optical, sensor or electronic material or blank separately when it is transformed onsite.

- Selected flow: Material- and grade-specific Product flow selected for the declared bill of materials
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented returns, by material and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_materials`
- Sources: `eu-pef-2021-annex-i`

###### Electricity and other energy carriers for component processing (`component_energy`)

Record electricity and each fuel or supplied thermal-energy flow separately for machining, forming, moulding, cleaning, coating and related in-house operations.

- Selected flow: Geography- and technology-specific energy Product flow selected during dataset construction
- Flow property / unit: Energy / kWh for electricity; MJ or the native metered unit for fuels
- Amount rule: submetered consumption or allocated site meter consumption for included equipment and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `eu-pef-2021-annex-i`

###### Water and process consumables for component processing (`component_consumables`)

Record water, cleaning agents, lubricants, coolants, coating materials, process gases and other consumables separately when used onsite.

- Selected flow: Substance- and grade-specific Product flow selected during dataset construction
- Flow property / unit: Mass / kg or measured volume converted with a documented density; water may remain in its supported volume unit
- Amount rule: measured consumption or issued quantity minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_consumables`
- Sources: `eu-pef-2021-annex-i`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted in-house processed components (`accepted_components`)

Record accepted components transferred to instrument assembly, disaggregated by component family when useful for mass balance.

- Selected flow: Product-specific intermediate Product flow
- Flow property / unit: Mass / kg
- Amount rule: measured accepted component mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_yield`
- Sources:

##### Waste flows

###### Component-processing scrap, rejects and spent process materials (`component_waste`)

Record each waste stream separately by material, hazardous status and destination, including metal or plastic scrap, spent baths, used oils, contaminated wipes and wastewater sent to treatment.

- Selected flow: Waste-specific flow selected for the declared waste and treatment route
- Flow property / unit: Mass / kg; wastewater may use its supported volume unit
- Amount rule: measured waste shipment, container weight difference or treatment record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

##### Elementary flows

###### Direct releases from in-house component processing (`component_direct_releases`)

Create one pollutant-specific row for each measured, calculated or permit-reported direct release to air, water or soil. Do not place treatment-service outputs here.

- Selected flow: Pollutant- and compartment-specific Elementary flow selected during dataset construction
- Flow property / unit: Flow-specific property and supported unit
- Amount rule: measured or permit-method-calculated direct release for included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted components transferred to assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-pef-2021-annex-i`

### Process: Instrument assembly and integration (`instrument_assembly`)

#### Inputs

##### Product flows

###### Purchased and in-house components and subassemblies (`assembly_components`)

Record every bill-of-materials line or an auditable aggregation by material and component family, including enclosure, structure, fasteners, sensors, optics, printed circuit assemblies, displays, cables, connectors, batteries and power supplies when present.

- Selected flow: Component-specific Product flow selected for each bill-of-materials line or documented aggregation
- Flow property / unit: Mass / kg
- Amount rule: product-specific bill-of-materials quantity reconciled to issued and returned production records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of assembled instrument transferred to testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_and_materials`
- Sources: `eu-pef-2021-annex-i`

###### Assembly electricity and consumables (`assembly_energy_consumables`)

Record assembly electricity and product-specific adhesives, solder, wire, fasteners, cleaning agents, gases and other consumables separately.

- Selected flow: Exact energy or consumable Product flow selected during dataset construction
- Flow property / unit: Energy / kWh or MJ; materials / kg
- Amount rule: submetered energy and measured or issued consumable quantities minus returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of assembled instrument transferred to testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `eu-pef-2021-annex-i`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled instrument transferred to testing (`assembled_instrument`)

Record the net mass of assembled instruments transferred to calibration and functional testing.

- Selected flow: Product-specific intermediate Product flow
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of assembled instruments transferred
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of assembled instrument transferred to testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_yield`
- Sources:

##### Waste flows

###### Assembly scrap and rejected parts (`assembly_waste`)

Record rejected parts, solder dross, cut wire, offcuts, empty material containers and other assembly waste separately by material and destination.

- Selected flow: Waste-specific flow selected for the declared waste and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured waste and reject mass, net of documented rework returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of assembled instrument transferred to testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

##### Elementary flows

###### Direct assembly releases (`assembly_direct_releases`)

Create pollutant-specific rows for direct releases from soldering, curing, cleaning or other onsite assembly operations when they cross the environment boundary.

- Selected flow: Pollutant- and compartment-specific Elementary flow selected during dataset construction
- Flow property / unit: Flow-specific property and supported unit
- Amount rule: measured or documented method calculation for the included operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of assembled instrument transferred to testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-pef-2021-annex-i`

### Process: Calibration and functional testing (`calibration_and_testing`)

#### Inputs

##### Product flows

###### Assembled instruments for testing (`test_input_instrument`)

Record the mass and count of assembled instruments entering calibration or functional testing.

- Selected flow: Product-specific intermediate Product flow
- Flow property / unit: Mass / kg and supplementary item count
- Amount rule: measured transferred mass and production count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming instrument transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_and_testing`
- Sources:

###### Test energy, calibration services and consumables (`test_resources`)

Record electricity, reference materials, test gases or fluids, replaceable test fixtures and externally purchased calibration services that are attributable to the declared product.

- Selected flow: Exact Product flow or service flow matching each recorded test resource
- Flow property / unit: Energy / kWh; materials / kg or supported unit; service / supported quantitative reference
- Amount rule: metered, issued or invoice-supported quantity attributable to accepted and rejected units tested
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming instrument transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_and_testing`
- Sources: `eu-pef-2021-annex-i`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming instrument released to packaging (`conforming_instrument`)

Record instruments that meet the declared functional-test or calibration acceptance criteria.

- Selected flow: Product-specific intermediate Product flow
- Flow property / unit: Mass / kg and supplementary item count
- Amount rule: measured net mass and count of accepted units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming instrument transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_and_testing`
- Sources:

##### Waste flows

###### Test failures and consumed test materials (`test_rejects`)

Record irreparable failed units, replaced components and consumed calibration or test materials by final disposition; units returned to rework are internal transfers and shall not be counted as waste.

- Selected flow: Waste-specific flow selected for the declared failure material and treatment route
- Flow property / unit: Mass / kg or supported unit
- Amount rule: measured rejected mass and consumed quantity after subtracting rework returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming instrument transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_and_testing`
- Sources:

##### Elementary flows

### Process: Packaging and factory-gate release (`packaging_and_factory_gate`)

#### Inputs

##### Product flows

###### Conforming instruments for release (`packaging_input_instrument`)

Record the net mass of conforming instruments entering packaging and factory-gate release.

- Selected flow: Product-specific intermediate Product flow
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred from testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished instrument released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_yield`
- Sources:

###### Sales and transport packaging materials (`packaging_materials`)

Record packaging separately by material and component, including cartons, cushioning, films, pallets, manuals and protective cases supplied with the product.

- Selected flow: Material-specific packaging Product flow selected during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: measured or specification-controlled packaging mass issued per released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished instrument released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021-annex-i`

###### Packaging electricity and consumables (`packaging_energy_consumables`)

Record attributable packaging-line electricity, labels, inks, adhesives and other consumables.

- Selected flow: Exact energy or consumable Product flow selected during dataset construction
- Flow property / unit: Energy / kWh; materials / kg
- Amount rule: metered or production-record quantity attributable to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished instrument released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished instrument at factory gate (`reference_product`)

This is the quantitative reference output. The product shall satisfy the declared model and acceptance criteria, and its net mass excludes packaging.

- Selected flow: Other surveying, hydrographic, oceanographic, hydrological, meteorological or geophysical instruments and appliances `d2d1aeaf-da4d-4eab-835e-642ae764cdee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming finished instrument
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging losses and rejected packaging (`packaging_waste`)

Record offcuts, damaged packaging, liner waste and rejected labels separately by material and destination.

- Selected flow: Waste-specific flow selected for the declared packaging waste and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished instrument released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared manufacturing, utilities and treatment | Avoid allocation by submetering, time recording or otherwise subdividing the shared process so that product-specific activity data are directly attributable to the declared instrument. | `eu-pef-2021-annex-i` |
| `allocation_physical` | residual shared burdens | When subdivision or system expansion is not feasible, allocate using a documented physical relationship that reflects burden causality, such as machine time, energy demand, processed mass or treatment load. Do not default to product mass when it does not represent the causal relationship. | `eu-pef-2021-annex-i` |
| `allocation_economic_last_resort` | residual multifunctionality without a defensible physical relationship | Use economic allocation only as a last resort, based on a documented representative price period; disclose the affected processes, co-products, price source and sensitivity. | `eu-pef-2021-annex-i` |
| `rework_and_scrap` | rework, rejects and recyclable scrap | Treat internal rework as an internal loop. Report waste only when it leaves the foreground system. Apply any recycling or avoided-burden credit only in the downstream modelling framework and disclose the method; do not subtract scrap mass or revenue from foreground inputs by default. | `eu-pef-2021-annex-i` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_materials` | `inhouse_component_processing`; `instrument_assembly` | materials, parts, subassemblies and accepted components | controlled bill of materials, purchase and warehouse issue/return records | model; BOM revision; item and material identity; grade; supplier; quantity; unit; measured mass; issued mass; returned mass; accepted mass | reconcile the controlled BOM with procurement and production issue/return records; measure representative item mass when converting counts | kg and native purchase unit | each BOM revision and production batch; aggregate annually | declared production reference period | all included manufacturing sites and declared product variants | sum net issued quantities by exact material or component; normalize by net conforming output mass | approved BOM revision; supplier specification; calibrated scale record; reconciliation report |
| `cp_energy_and_utilities` | all included processes | electricity, fuels and supplied utilities | submeters, equipment logs, invoices and site meters | meter id; energy carrier; opening and closing readings; conversion factor; equipment or line; operating time; allocation driver; production output | prefer submetering; otherwise reconcile site totals and allocate with a documented causal driver | kWh, MJ and native metered unit | continuous or each batch; monthly reconciliation | declared production reference period | all included equipment and sites | sum by energy carrier and process; subtract documented non-production use; normalize by process output then reference output | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_process_consumables` | `inhouse_component_processing`; `instrument_assembly` | water, chemicals, gases, lubricants, adhesives and other consumables | issue/return logs, tank or cylinder readings, purchase and stock records | substance identity; grade; concentration; opening stock; purchases; closing stock; returns; measured volume or mass; density source | measure consumption or calculate stock balance separately for each substance | kg, L, m3 or supported native unit | each batch or monthly with annual reconciliation | declared production reference period | all included operations using consumables | opening stock plus purchases minus closing stock minus returns; normalize by accepted process output | inventory reconciliation; batch sheet; instrument calibration; density evidence |
| `cp_output_and_yield` | all included processes | intermediate transfers, conforming output, rework and yield | production, transfer, weighing and acceptance records | model; batch; input mass; output mass; item count; net mass per item; rework transfer; acceptance status | weigh outputs or apply a controlled model-specific item-to-mass conversion | kg and supplementary item count | every batch | declared production reference period | all included lines and sites | sum accepted net output; keep internal rework separate; normalize all burdens to 1 kg final accepted output | calibrated scale; batch traveller; acceptance release record |
| `cp_waste_and_emissions` | `inhouse_component_processing`; `instrument_assembly` | wastes, wastewater and direct releases | waste transfer notes, treatment records, emission monitoring and permit calculations | waste or pollutant identity; hazardous status; compartment; mass or volume; concentration; destination; treatment route; measurement method; calculation factor | weigh waste; pair wastewater volume with concentration where relevant; use validated monitoring or permit methods for direct releases | kg, m3 or flow-supported unit | each shipment or monitoring interval; annual reconciliation | declared production reference period | all included operations and onsite treatment | aggregate separately by waste identity, destination, pollutant and compartment; normalize by process and final output | weighbridge ticket; laboratory report; permit report; calculation sheet; treatment certificate |
| `cp_calibration_and_testing` | `calibration_and_testing` | test input, test resources, acceptance output, rework and rejects | test and calibration logs, equipment meters, material issue records and service invoices | model; serial or batch; test method; acceptance criterion; result; calibration status; input and output mass; test energy; consumables; service quantity; rework or reject disposition | link test records to production batch and collect attributable resources and outcomes | kg, item, kWh and resource-supported unit | every production batch or unit as specified | declared production reference period | all included test and calibration stations | sum resources for accepted, reworked and rejected units; divide by accepted net output mass while retaining reject totals | approved test method; instrument calibration certificate; test log; non-conformance record |
| `cp_packaging` | `packaging_and_factory_gate` | packaging materials, packaging energy and packaging waste | packaging specification, issue records, line meters and waste records | packaging component; material; unit mass; quantity issued; returned quantity; waste mass; product model; batch; energy | measure component masses or use controlled specifications verified by sampling; reconcile issues and waste | kg, item and kWh | each packaging specification revision and production batch | declared production reference period | all included packaging lines | sum packaging by material; normalize to 1 kg net released product; keep packaging outside reference mass | approved packaging specification; scale calibration; issue/waste reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground inventory rows | normalized amount = period or batch amount divided by net mass of conforming finished instruments released in the same period or batch | collected flow amount; accepted net output mass | amount per 1 kg reference product | `eu-pef-2021-annex-i` |
| `calc_bom_mass` | components recorded by count | component mass = accepted item count multiplied by controlled model-specific mean net mass per item; retain sampling evidence and do not reuse the factor across materially different variants | accepted item count; sampled item masses; model and BOM revision | kg of component per reference flow | `eu-pef-2021-annex-i` |
| `calc_stock_balance` | consumables without direct metering | consumption = opening stock plus receipts minus closing stock minus documented returns and transfers out | stock and transaction records | consumed amount per process and period | `eu-pef-2021-annex-i` |
| `calc_wastewater_release` | measured wastewater pollutant | pollutant release = discharged volume multiplied by representative measured concentration, with unit conversion and sampling coverage documented | discharge volume; concentration; unit conversion; sampling period | pollutant-specific elementary-flow amount | `eu-pef-2021-annex-i` |
| `calc_shared_resource` | shared meters or services | allocate only the residual shared amount after direct attribution, using the documented causal physical driver selected under `allocation_physical` | shared total; directly attributed amounts; physical driver by product | allocated product-specific amount | `eu-pef-2021-annex-i` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and reference flow | The dataset shall identify manufacturer, model or product code, instrument function, performance or accuracy class where applicable, configuration, net mass, BOM revision, production geography and reference period. | product specification; controlled BOM; release record; reference-flow metadata |
| `dq_temporal` | all foreground records | Use a continuous representative production period, normally 12 months. A shorter campaign is allowed only when it covers the complete declared route and variability is disclosed. | record coverage table; production calendar; justification for gaps |
| `dq_completeness` | bill of materials and inventory | Reconcile material inputs, accepted product, internal transfers, rework, wastes and stock changes. Record all energy carriers, process consumables, packaging and known direct releases; disclose unresolved gaps. | mass-balance and inventory reconciliation; meter and waste summaries |
| `dq_representativeness` | foreground and upstream data | Match technology, geography and time period to the declared product route. Document proxies and why they are the closest available representation. | site and technology description; dataset selection log; proxy justification |
| `dq_measurement` | measured and calculated data | Retain meter or scale identity, calibration or verification status, sampling frequency, calculation formulas, unit conversions and data lineage from raw record to normalized value. | calibration certificates; sampling plans; calculation workbook; audit trail |
| `dq_test_traceability` | calibration and functional testing | Link acceptance, rework and rejection records to the applicable model, production batch or serial-controlled population and to the declared test method. | test logs; calibration certificates where applicable; non-conformance and release records |
| `dq_downstream_attributes` | downstream lifecycle modelling | Declare rated power and duty cycle where relevant, expected service-life basis, battery identity, maintenance or consumable requirements, product dimensions, material composition needed for end-of-life modelling, and the jurisdiction of the end-of-life scenario. | product technical file; use instructions; BOM; service plan; regulatory applicability assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference product | Verify that the selected reference product flow UUID, Mass flow property UUID, Units of mass unit-group UUID and kg unit match Section 3, and that the output amount is exactly 1 kg net instrument mass. |  |
| `val_required_qualifiers` | dataset metadata | Fail validation when instrument function, model or product code, configuration, net mass, production geography or period, BOM revision, test or calibration status, or packaging exclusion is missing. | `unsd-cpc-3-0-48219` |
| `val_process_coverage` | process map and inventory | Require assembly, calibration or functional testing, and packaging. Require in-house component processing whenever the reporting site performs fabrication, machining, moulding, coating, cleaning or electronic-component processing. | `eu-pef-2021-annex-i` |
| `val_bom_reconciliation` | materials and components | Require the collected component and material inventory to reconcile with the controlled BOM and production issue/return records for the declared revision; disclose and justify every aggregation or gap. | `eu-pef-2021-annex-i` |
| `val_mass_and_waste_balance` | each foreground process | Check that recorded inputs, accepted transfers, stock changes, rework and waste are arithmetically consistent within the declared measurement uncertainty; do not force a false zero balance for evaporation or direct releases. | `eu-pef-2021-annex-i` |
| `val_allocation` | shared processes | Require the allocation hierarchy and supporting driver records. Fail validation when economic allocation is used without showing why subdivision and physical allocation were infeasible. | `eu-pef-2021-annex-i` |
| `val_packaging_separation` | reference and packaging | Verify that packaging is inventoried but excluded from the 1 kg net reference-product mass. | `eu-pef-2021-annex-i` |
| `val_electronic_end_of_life` | electrical or electronic instruments | Require downstream lifecycle-model metadata to identify the applicable collection and treatment jurisdiction and to avoid an undocumented municipal-waste assumption. | `eu-weee-2012-19-consolidated` |
| `val_data_quality` | foreground data package | Require evidence for temporal coverage, site and technology representativeness, measurement controls, calculations, data gaps and upstream dataset selection. | `eu-pef-2021-annex-i` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for a finished instrument at the factory gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA process and lifecyclemodel construction for the declared model or a demonstrably representative production mix when reference flow, qualifiers, scope, geography, technology and period match |
| excluded_use | Direct comparison of instrument functions, performance classes or service lives without a functionally equivalent use-stage model; substitution for navigation, radar, general-purpose liquid/gas measurement, laboratory analytical equipment or professional services; use of mass alone as proof of functional equivalence |
| required_metadata | canonical PCR id; reference-flow UUIDs; manufacturer and model or product code; instrument function; performance or accuracy specification where applicable; configuration; net mass per unit; BOM revision; production sites, geography and period; included and excluded processes; packaging specification; calibration or test method and status; allocation method; upstream dataset references; data-gap and proxy log |
| required_quality_disclosure | foreground temporal coverage; measured versus calculated shares; meter and scale controls; BOM and mass-balance reconciliation; site and technology representativeness; allocation drivers; proxy and unresolved data gaps; uncertainty or variability where available; whether use and end-of-life attributes are complete |
| update_trigger | Change in product model or function, BOM or mass by material, manufacturing route or site, sensor/electronic/battery configuration, energy supply, calibration or test method, packaging, allocation driver, regulation affecting end-of-life, upstream datasets, or any input materially affecting the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-48219` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, structure record 48219, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-10) | Product-category scope and classification identity |
| `eu-pef-2021-annex-i` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279, Annex I — Product Environmental Footprint Method, https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf (retrieved 2026-08-10) | Functional-unit structure, supply-chain boundary, bill of materials, company-specific manufacturing data, allocation hierarchy, data quality, validation and lifecycle-stage disclosure |
| `eu-weee-2012-19-consolidated` | `official_guidance` | Directive 2012/19/EU on waste electrical and electronic equipment, consolidated text current to 8 April 2024, CELEX 02012L0019-20240408, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02012L0019-20240408 (retrieved 2026-08-10) | Conditional scope and downstream collection, reuse, recycling, recovery and treatment requirements for electrical and electronic monitoring and control instruments |
