---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.taps-cocks-valves-and-similar-appliances-for-pipes-boiler-shells-tanks-vats-or-the-like
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Taps, cocks, valves and similar appliances for pipes, boiler shells, tanks, vats or the like

## 1. Scope and Applicability

This PCR applies to factory-gate production of taps, cocks, valves and comparable mechanical appliances that control, isolate, reduce, relieve, check, or regulate fluid flow in pipes, boiler shells, tanks, vats, or similar equipment. It covers manually operated and automatically controlled mechanical appliances, including pressure-reducing and thermostatically controlled valves, when the declared finished product belongs to CPC 43240.

The representative reference product is a steel valve. The rules can guide other in-scope material variants only when the producer replaces material-specific flows with exact, audited flows and does not label a non-steel product as the TianGong `Steel valve` flow. The foreground boundary starts with received rough bodies, bonnets, trim components, fasteners, coatings, chemicals, water, and energy and ends with a conforming tested appliance at the factory gate.

Excluded are loose parts sold separately; pumps and compressors; hydraulic or pneumatic power engines; fire-extinguisher, aerosol, tyre, engine, refrigeration-compressor, or electronic-tube valves classified elsewhere; actuators sold separately; installation; distribution; use, leakage during use, maintenance, and end-of-life. Packaging is outside the default reference product and must be modelled as separate atomic exchanges when included by the study goal.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.taps-cocks-valves-and-similar-appliances-for-pipes-boiler-shells-tanks-vats-or-the-like |
| classification_refs | CPC 3.0: 43240 (exact classification context; mapping acceptance remains a separate governance decision) |
| covered_products | Finished taps, cocks, valves, and similar mechanical flow-control appliances for pipes, boiler shells, tanks, vats, or similar equipment, including pressure-reducing and thermostatically controlled valves when classified in CPC 43240 |
| excluded_products | Loose CPC 43254 parts; pumps; compressors; power engines; fire-extinguisher, tyre, engine, electronic-tube, or other valves classified outside CPC 43240; standalone actuators; installation and use services |
| representative_product | Steel valve with declared type, material grades, nominal size, pressure class, connection, sealing system, actuation, and test status |
| production_route | Machining and cleaning of received rough components, conditional surface treatment, assembly, and functional/leak or pressure testing |
| market_state | Conforming tested finished appliance at the manufacturing factory gate, excluding default packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Control, isolate, reduce, relieve, check, or regulate the flow of a declared fluid in a piping or vessel system |
| How much | 1 kg of conforming finished steel valve at the manufacturing factory gate |
| How well | Meets the declared valve type, nominal size, pressure class, body and trim material grades, end connection, seat/seal system, actuation, applicable product standard, and recorded acceptance test |
| How long or cycle | The declared design service life or duty-cycle basis; the factory-gate inventory itself is normalized to product mass and does not include use-stage operation |
| reference_flow_link | One kilogram of accepted finished output from `final_testing`, excluding packaging and rejected or reworked units |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Steel valve `3cb88a81-618f-4fa5-814e-46399b121622` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | valve type and function; controlled fluid; body, bonnet, stem, closure-member, seat and seal materials/grades; nominal size; pressure class or rated pressure; temperature rating; end connection; actuation; coating or plating route; applicable product and test standard; test medium, pressure, duration and acceptance result; factory geography and technology; reporting period; packaging inclusion; recycled-content and scrap treatment choices; product mass measurement basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | conforming tested steel-valve output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass on a calibrated scale after final test and drainage and before excluded packaging; normalize all exchanges to 1 kg of accepted output. |
| `mass_exchange_basis` | all mass-based material, component, waste, and water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured wet or as-supplied mass and disclose concentration, moisture, or retained-fluid basis where relevant; do not silently substitute dry matter, metal content, or item count. |
| `electricity_conversion` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain meter readings and convert kWh to MJ with the exact identity 1 kWh = 3.6 MJ; report grid geography, voltage, on-site generation treatment, and included losses. |
| `water_mass_conversion` | process and test water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass metering; if volume is measured, use a documented temperature-appropriate density and retain the original volume, temperature, density, and conversion. |
| `component_mass_reconciliation` | incorporated components and coatings | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile incorporated body, bonnet, trim, seat/seal, fastener, coating, and retained lubricant mass with accepted product mass, measured scrap, collected residues, and documented stock change. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Rough steel valve bodies and bonnets plus separately supplied stems, closure members, seats/seals, fasteners, coatings, process chemicals, water, and energy received at the manufacturing site |
| starting_condition_role | Foreground entry condition; upstream manufacture and delivery of each received product input remain linked upstream datasets |
| product_classification_scope | Finished mechanical flow-control appliances in CPC 43240; this PCR does not convert loose CPC 43254 parts into a finished-product identity |
| recursive_input_rule | If a finished CPC 43240 valve is consumed as an input, record that exact valve as a linked upstream product flow and disclose why it is consumed; do not recursively expand it through this PCR inside the same process. Internal unfinished bodies, bonnets, and assembled units use site-specific foreground intermediate flows. |
| upstream_dataset_requirement | Every purchased component, chemical, coating, water, electricity, and treatment service crossing the boundary requires a geographically and technologically representative upstream dataset or a disclosed data gap |
| disclosure | Declare purchased-versus-in-house component manufacture, machining operations, cleaning chemistry, coating/plating route, assembly configuration, testing method, rework loops, reject treatment, water recirculation, wastewater boundary, packaging inclusion, reporting period, geography, and allocation choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | foreground production | Start at the stated received-component condition. Treat upstream body casting, forging, bar production, elastomer production, fastener manufacture, coating manufacture, electricity, water, and chemical supply as linked inputs unless performed on site and explicitly added as separate atomic foreground processes. | `us-epa-mpm-2003` |
| `boundary_operations` | process inclusion | Include machining/cleaning, assembly, and acceptance testing when performed for the declared product. Include electroplating, powder coating, or other surface treatment only when performed for the product and identify each route-specific input and output separately. | `us-epa-mpm-2003`; `eu-jrc-stm-bref-2006` |
| `boundary_end` | factory-gate output | End with drained, accepted finished product at the factory gate. Exclude installation, distribution, use-stage actuation and leakage, maintenance, and end-of-life; state separately whether packaging is added. | `us-epa-mpm-2003` |
| `boundary_wastewater` | liquid outputs | Record cleaning, surface-treatment, and hydrostatic-test waters at the point they leave their generating process; link on-site treatment as a separate process or disclose transfer to an external treatment dataset without converting waste to an elementary emission. | `us-epa-mpm-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_machining_cleaning` | Component machining and cleaning | required | Apply to the machining and cleaning actually used for the declared steel-valve body and bonnet; disclose purchased-finished exceptions | foreground component preparation | Measured outputs and wastes normalized to 1 kg conforming tested steel valve |
| `surface_treatment` | Surface treatment | conditional | Include when body or bonnet is plated, chemically treated, or powder coated at the reporting site | foreground protection and finishing | Route-specific treated component mass per 1 kg conforming tested steel valve |
| `valve_assembly` | Valve assembly | required | Include final mechanical assembly and recorded rework loops for the declared product | foreground final assembly | Assembled untested product per 1 kg conforming tested steel valve |
| `final_testing` | Final functional and leak/pressure testing | required | Apply the declared acceptance-test method; hydrostatic water rows apply only when water is used | foreground quality acceptance | Exactly 1 kg accepted finished steel valve output |

### Process: Component machining and cleaning (`component_machining_cleaning`)

#### Inputs

##### Product flows

###### Rough steel valve body (`mc_rough_steel_body`)

Record the received, unfinished steel pressure-containing body entering machining. Keep supplier, steel grade, casting/forging route, heat number, and incoming mass with the record.

- Selected flow: Rough steel valve body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass allocated to the declared production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming tested steel valve
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Rough steel valve bonnet (`mc_rough_steel_bonnet`)

Record the received unfinished steel bonnet or cover that will retain pressure or close the body. Keep design revision, steel grade, heat number, and incoming mass.

- Selected flow: Rough steel valve bonnet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass allocated to the declared production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming tested steel valve
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Machining electricity (`mc_electricity`)

Record electricity delivered to machine tools, parts washers, pumps, filtration, and directly attributable auxiliaries in this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: process meter reading or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Cutting fluid (`mc_cutting_fluid`)

Record fresh cutting fluid concentrate and make-up delivered to the machining system; do not combine it with cleaning chemical or spent fluid.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued fresh mass minus documented unopened returns, with dilution water recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Machining and cleaning process water (`mc_process_water`)

Record water added to cutting-fluid dilution, parts washing, and aqueous rinsing in this process, net of separately measured reused water entering from another process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured make-up and rinse-water mass crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`mc_sodium_hydroxide`)

Include only when sodium hydroxide is actually charged to an alkaline cleaning bath; record as supplied mass and disclose solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-supplied replenishment attributable to the declared production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Machined steel valve body (`mc_machined_body`)

Record the accepted machined body transferred to surface treatment or assembly as one site-specific internal intermediate.

- Selected flow: Machined steel valve body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Machined steel valve bonnet (`mc_machined_bonnet`)

Record the accepted machined bonnet transferred to surface treatment or assembly as one site-specific internal intermediate.

- Selected flow: Machined steel valve bonnet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

##### Waste flows

###### Steel machining swarf (`mc_steel_swarf`)

Record steel chips and fines removed from the declared body and bonnet, after recovery of separately measured cutting fluid.

- Selected flow: Steel swarf `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-transferred waste mass, with retained-fluid basis disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Non-ferrous machining swarf (`mc_nonferrous_swarf`)

Include only when a separately identified non-ferrous trim or component is machined; keep alloy identity and do not combine this row with steel swarf.

- Selected flow: Non-ferrous metal machining swarf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-transferred alloy-specific waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Spent cutting fluid (`mc_spent_cutting_fluid`)

Record exhausted cutting fluid removed from the machining system for treatment or recovery; do not include fluid retained on swarf unless separately recovered and measured.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste mass leaving the machining-fluid system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

###### Component-cleaning wastewater (`mc_cleaning_wastewater`)

Record aqueous effluent from parts washing and rinsing at the point it enters on-site treatment or leaves the site for treatment.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wastewater mass, including declared bath dumps and rinses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg combined machined body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources:

##### Elementary flows

### Process: Surface treatment (`surface_treatment`)

#### Inputs

##### Product flows

###### Machined steel valve body entering surface treatment (`st_machined_body`)

Record the machined body transferred into the declared coating or plating route.

- Selected flow: Machined steel valve body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg surface-treated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

###### Machined steel valve bonnet entering surface treatment (`st_machined_bonnet`)

Record the machined bonnet transferred into the declared coating or plating route.

- Selected flow: Machined steel valve bonnet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg surface-treated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

###### Surface-treatment electricity (`st_electricity`)

Record electricity delivered to cleaning, rectification, spray, recovery, ventilation, curing, pumps, and directly attributable auxiliaries for the declared route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: route meter reading or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg surface-treated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

###### Surface-treatment process water (`st_process_water`)

Record water added to pretreatment, baths, rinses, and route-specific cleaning, net of measured recirculated water internal to the process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured make-up and rinse water crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg surface-treated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

###### Zinc metal for zinc coating (`st_zinc_metal`)

Include only for a declared zinc electroplating or equivalent metallic-zinc coating route; keep anode grade, purity, and replenishment records.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured zinc-metal replenishment attributable to the declared lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg zinc-coated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

###### Powder coating material (`st_powder_coating`)

Include only for the declared powder-coating route; record fresh powder issued net of unopened returns, with recovered powder remaining inside the process until purged.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fresh powder consumed by the declared lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg powder-coated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Surface-treated steel valve body (`st_surface_body`)

Record the accepted treated body transferred to assembly; identify the specific plating, conversion, or coating system.

- Selected flow: Surface-treated steel valve body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg surface-treated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

###### Surface-treated steel valve bonnet (`st_surface_bonnet`)

Record the accepted treated bonnet transferred to assembly; identify the specific plating, conversion, or coating system.

- Selected flow: Surface-treated steel valve bonnet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg surface-treated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

##### Waste flows

###### Surface-treatment wastewater (`st_wastewater`)

Record the route-specific bath dumps, rinses, scrubber water, and aqueous pretreatment effluent as one characterized wastewater stream only when they are actually combined before treatment; otherwise add separate atomic wastewater rows.

- Selected flow: Metal surface-treatment wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass at the treatment or transfer boundary with chemistry and contributing operations disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg surface-treated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

###### Powder-coating waste (`st_powder_waste`)

Include only for the powder-coating route and record unrecovered overspray or purged powder transferred as waste.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured dry or as-collected waste mass with basis disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg powder-coated body and bonnet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

##### Elementary flows

### Process: Valve assembly (`valve_assembly`)

#### Inputs

##### Product flows

###### Finished steel valve body (`as_finished_body`)

Record the machined or surface-treated body transferred into assembly, using the same foreground intermediate identity as the supplying process.

- Selected flow: Finished steel valve body for assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured body mass issued to accepted and rejected assemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Finished steel valve bonnet (`as_finished_bonnet`)

Record the machined or surface-treated bonnet transferred into assembly, using the same foreground intermediate identity as the supplying process.

- Selected flow: Finished steel valve bonnet for assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured bonnet mass issued to accepted and rejected assemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Steel valve stem (`as_valve_stem`)

Record the product-specific steel stem incorporated into the declared valve; keep steel grade, coating, supplier, and drawing revision.

- Selected flow: Steel valve stem
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: bill-of-material quantity reconciled to measured issued and returned mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Steel valve disc or closure member (`as_valve_disc`)

Record the product-specific steel disc, plug, ball, gate, needle, or other single declared closure-member design; do not combine multiple alternatives in one dataset.

- Selected flow: Steel valve disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: bill-of-material quantity for the declared disc design reconciled to issue and return records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Elastomer valve seat (`as_elastomer_seat`)

Include only when the declared valve uses an elastomer seat or seal and identify the exact elastomer formulation and component geometry.

- Selected flow: Elastomer valve seat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: bill-of-material quantity for the declared seat design reconciled to issue and return records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Steel fasteners (`as_steel_fasteners`)

Record steel bolts, nuts, screws, or studs incorporated in the declared valve as the audited fastener product flow; retain grade, coating, and item-to-mass calculation.

- Selected flow: Steel fasteners `ebfe08f5-42c8-484e-b39a-684a35981c24`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: item count multiplied by verified unit mass and reconciled to issue and return records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Valve assembly lubricating grease (`as_lubricating_grease`)

Include only grease retained in or consumed during assembly; identify product formulation and do not combine it with machining cutting fluid.

- Selected flow: Valve assembly lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured issue less recoverable returns, allocated to the declared assemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Assembly electricity (`as_electricity`)

Record electricity for assembly tools, presses, handling equipment, and directly attributable auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: process meter reading or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled untested steel valve (`as_assembled_valve`)

Record the assembled valve transferred to final testing before it has obtained accepted finished-product status.

- Selected flow: Assembled untested steel valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass including units subsequently reworked or rejected
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Waste flows

###### New steel scrap from rejected assemblies (`as_new_steel_scrap`)

Record only unrecoverable steel rejected during production after reusable trim, elastomers, fluids, and other separately managed materials have been removed; units sent to rework remain inside the foreground system.

- Selected flow: New steel scrap `bd11f214-0a1c-4d5d-ba77-c7f6a5780f33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured steel scrap mass transferred out of assembly after final reject disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled untested steel valve
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Elementary flows

### Process: Final functional and leak/pressure testing (`final_testing`)

#### Inputs

##### Product flows

###### Assembled untested valve entering final test (`te_assembled_valve`)

Record the same assembled intermediate received from `valve_assembly`, preserving product model and lot traceability.

- Selected flow: Assembled untested steel valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured test-lot input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming tested steel valve
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing_records`
- Sources:

###### Hydrostatic test water (`te_process_water`)

Include only when water is the declared test medium. Record fresh make-up crossing the test boundary and disclose recirculation, discharge frequency, additives, and drainage practice.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fresh make-up water for accepted, reworked, and rejected test cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming tested steel valve
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing_records`
- Sources:

###### Test-stand electricity (`te_electricity`)

Record electricity for pumps, compressors, controls, data acquisition, drying, and directly attributable test-stand auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: test-stand meter reading or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming tested steel valve
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming tested steel valve (`te_steel_valve`)

Record only drained units that pass the declared acceptance criteria. This is the single reference product output.

- Selected flow: Steel valve `3cb88a81-618f-4fa5-814e-46399b121622`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted net product mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg conforming tested steel valve
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_testing_records`
- Sources:

##### Waste flows

###### Hydrostatic test wastewater (`te_test_wastewater`)

Include only discarded test water leaving the test system. Keep additives, contamination, drainage destination, and whether water is treated on site with the record.

- Selected flow: Hydrostatic valve-test wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discharged test-water mass at the treatment or transfer boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming tested steel valve
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared manufacturing operations | First avoid allocation through submetering, lot-specific material issue, machine time, bath loading, test cycles, and direct waste measurement. | |
| `allocation_mass` | unavoidable shared operations | If physical subdivision is not practicable, allocate shared material and energy burdens by a documented causal parameter; use processed mass only when it reasonably represents machine, bath, or handling demand. | |
| `allocation_rework` | rework loops | Keep reworked units and all incremental machining, cleaning, coating, assembly, and testing exchanges inside the foreground system; allocate them to conforming output, not to a co-product. | |
| `allocation_scrap` | steel swarf and new steel scrap | Record waste mass and downstream recycling or treatment separately. Do not subtract avoided virgin-metal burdens from the foreground inventory unless the study applies and discloses a consistent recycling allocation method. | |
| `allocation_no_product_credit` | wastewater and coating waste | Treat spent fluid, wastewater, and powder-coating waste as wastes unless a documented marketable co-product meeting a specification leaves the site; disclose any departure and its allocation basis. | `us-epa-mpm-2003` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_records` | `component_machining_cleaning` | all inputs, intermediate outputs, swarf, spent cutting fluid, and cleaning wastewater | meter, scale, material issue/return, transfer, and waste manifest records | lot_id; product_model; component_id; supplier; material_grade; opening_stock; receipts; issues; returns; closing_stock; meter_start; meter_end; water_mass_or_volume; density; accepted_transfer_mass; waste_mass; retained_fluid_basis | calibrated meters and scales reconciled with inventory and transfer records | kg; MJ; original meter unit retained | per lot or shift, aggregated monthly | at least one representative production year or the full shorter campaign | all machines, washers, tanks, and waste points serving the declared product | sum net issues and measured exchanges; allocate shared meters by documented machine time or processed mass and normalize to accepted output | calibration status; invoices; issue/return records; lot travellers; scale tickets; meter logs; waste manifests; reconciliation sign-off |
| `cp_surface_treatment_records` | `surface_treatment` | route-specific components, electricity, water, zinc, powder coating, wastewater, and coating waste | bath, coating-line, meter, issue/return, transfer, and waste records | lot_id; route_id; bath_id; coating_product; opening_stock; issues; recovered_powder; returns; closing_stock; meter_start; meter_end; make_up_water; treated_input_mass; treated_output_mass; wastewater_mass; waste_mass; chemistry | calibrated meters/scales plus bath and coating inventory reconciliation | kg; MJ; original meter unit retained | per batch or shift, aggregated monthly | at least one representative production year or the full shorter campaign | each plating, pretreatment, powder, cure, rinse, and waste system in scope | keep electroplating and powder-coating routes separate; sum net consumption and outputs and normalize to treated output | calibration; batch sheets; bath analyses; coating issue/return logs; meter logs; waste manifests; route reconciliation |
| `cp_assembly_records` | `valve_assembly` | incorporated components, grease, electricity, assembled output, and new steel scrap | bill of materials, work order, issue/return, scale, meter, rework, and nonconformance records | product_model; drawing_revision; lot_id; component_id; item_count; verified_unit_mass; issues; returns; grease_issue; meter_start; meter_end; assembled_mass; rework_count; reject_disposition; scrap_mass | BOM calculation checked against calibrated mass and production records | kg; MJ; item(s) retained as raw field | per work order or shift, aggregated monthly | at least one representative production year or the full shorter campaign | all assembly cells and rework stations serving the declared product | calculate incorporated mass from count and verified unit mass; reconcile issues, returns, assembled output, rework, and scrap | controlled BOM; drawings; unit-mass verification; meter logs; rework travellers; nonconformance and scrap records |
| `cp_testing_records` | `final_testing` | assembled input, hydrostatic water, electricity, accepted product, and discarded test water | test record, meter, scale, water make-up, drainage, rework, and reject records | product_model; serial_or_lot; test_standard; medium; pressure; temperature; hold_time; acceptance_result; retest_count; input_mass; accepted_mass; water_make_up; water_discharge; meter_start; meter_end; drainage_state | calibrated test stand, meters, and final-product scale with retained acceptance record | kg; MJ; pressure and time in declared units | every acceptance test, aggregated monthly | at least one representative production year or the full shorter campaign | all final-test stands and linked water systems serving the declared product | sum accepted drained mass; include resources for pass, retest, and fail cycles; normalize all exchanges to accepted mass | calibration certificates; signed/electronic test records; meter logs; drainage records; traceability to work order |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory exchanges | normalized amount = reporting-period exchange / reporting-period drained accepted steel-valve mass | measured exchange; `te_steel_valve` accepted mass | exchange per 1 kg reference product | |
| `calc_net_material_issue` | cutting fluid, sodium hydroxide, zinc, powder coating, grease, and components | net consumption = opening stock + receipts - closing stock - unopened returns - separately measured transferred stock | stock, receipt, return, and transfer records | consumed product mass | |
| `calc_component_mass` | stems, discs, seats, and fasteners | incorporated mass = accepted-assembly item count × verified item mass, reconciled to net issue and return mass | controlled BOM; accepted count; verified item mass; issues; returns | incorporated component mass | |
| `calc_electricity_mj` | electricity rows | electricity in MJ = measured kWh × 3.6; retain the original kWh reading and meter boundary | meter start/end or allocated kWh | electricity in MJ | |
| `calc_water_mass` | water rows | water mass = measured volume × documented density when direct mass is unavailable; retain volume, temperature, density, and uncertainty | water volume; temperature; density | water mass in kg | |
| `calc_mass_reconciliation` | each process | compare inputs plus opening work-in-process with product outputs, wastes, measured losses, and closing work-in-process; investigate and disclose material residuals | all mass flows and stock change for the process | signed process mass-balance reconciliation | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve model, valve function/type, controlled fluid, material grades, size, pressure and temperature rating, connection, actuation, coating, test standard, and factory-gate state. | controlled drawing/BOM, product specification, nameplate or traveller, and accepted test record |
| `dq_temporal` | all foreground data | Use a representative continuous 12-month period when production is continuous; for shorter campaigns cover the whole campaign and disclose seasonality, start-up, shutdown, and abnormal exclusions. | reporting-period definition, production calendar, and exception log |
| `dq_completeness` | all four processes | Reconcile every mapped meter, issue point, intermediate transfer, rework loop, waste point, and test outcome; quantify excluded flows and justify cut-offs rather than hiding them in combined rows. | signed flow map, meter list, reconciliation, waste manifests, and exclusion register |
| `dq_measurement` | meters and scales | Use in-calibration instruments suitable for the measured range and retain original readings, conversions, allocation drivers, and uncertainty or resolution. | calibration and maintenance records, raw meter/scale logs, and calculation workbook |
| `dq_upstream` | purchased inputs and external treatment | Match geography, technology, material grade or chemistry, product state, and delivery boundary; disclose proxy use and do not substitute rejected TianGong UUID candidates. | supplier records, dataset metadata, UUID audit, and proxy register |
| `dq_route_separation` | surface treatment | Keep zinc and powder-coating routes separate and add separate atomic chemical, waste, and emission rows when the declared site uses additional chemistry or abatement. | route flow diagram, bath/coating records, and emission/waste inventory |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm that `te_steel_valve` is the only reference product output, uses UUID `3cb88a81-618f-4fa5-814e-46399b121622`, is measured by Mass in kg, and represents drained accepted steel valves rather than parts, untested units, packaging, or non-steel appliances. | `un-cpc-3-0-structure-2025` |
| `validate_inventory_completeness` | process inventory | Verify that all 37 defined rows have either the audited UUID shown here or an explicit unresolved identity in the manifest, and that added site-specific flows are atomic and route-specific. | |
| `validate_mass_balance` | each process and full foreground system | Reconcile measured inputs, internal transfers, accepted output, rework, wastes, stock change, and disclosed residuals. Investigate unexplained residuals before dataset release. | |
| `validate_route_condition` | conditional rows | Require zinc input only for a declared zinc-coating route, powder coating and powder waste only for a declared powder route, and hydrostatic water/wastewater only for a declared water-test route; do not average mutually exclusive routes. | `eu-jrc-stm-bref-2006` |
| `validate_testing` | final product acceptance | Verify traceability from accepted product mass to the applicable test standard, medium, pressure, temperature, hold time, result, retest, and reject records; exclude failed units from the reference output. | `us-epa-mpm-2003` |
| `validate_no_external_ranges` | quantity checks | Treat all quantities as foreground records or calculations from them. No external numeric range is authorized until at least two independent, original-text, system-boundary-compatible sources support it. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after review and publication |
| downstream_use | Cradle-to-factory-gate modelling of a declared steel valve in process datasets and lifecycle models |
| allowed_use | Use for the declared steel-valve model, material grades, size/pressure class, manufacturing route, test method, geography, period, and factory-gate state; use as background only when these qualifiers are sufficiently representative |
| excluded_use | Non-steel products labelled as `Steel valve`; loose parts; standalone actuators; installation; distribution; use-stage leakage or actuation energy; maintenance; end-of-life; packaging unless separately modelled; unqualified cross-technology or cross-geography substitution |
| required_metadata | all Reference Flow qualifiers; site and reporting period; process map; meter and allocation boundaries; purchased-versus-in-house component manufacture; coating route; test records; rework and reject treatment; wastewater destination; upstream dataset choices; unresolved UUIDs and range needs |
| required_quality_disclosure | foreground coverage; calibration and temporal representativeness; mass-balance residuals; shared-meter allocation; water conversion; route separation; supplier and upstream representativeness; proxy or data gaps; recycled-content and scrap allocation method |
| update_trigger | change in valve design or material grade, nominal size/pressure-class mix, component sourcing, machine technology, cleaning chemistry, surface-treatment route, test standard or medium, site or electricity supply, wastewater treatment, allocation method, reporting period, or resolution of an unresolved UUID or range-evidence need |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 structure, CPC 43240, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official classification identity and English product title; original CSV bytes verified by receipt `179c0d1b-a2ad-4a02-a96a-2c7e3c809e3f`, SHA-256 `sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` |
| `cn-product-specific-origin-rules-hs8481-2015` | Official guidance (`official_guidance`) | Part 2 Product Specific Rules of Origin, bilingual HS 84.81 entry (2015 government-hosted PDF). https://www.ks.gov.cn/kss/Upload_zwgk/ggxx2015122195763975384.pdf | Professional Chinese terminology for the product family; original page 160 text and rendering verified |
| `us-epa-mpm-2003` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency, Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products and Machinery Point Source Category, EPA-821-B-03-001, February 2003. https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf | Original-text process decomposition for machining, cleaning, surface preparation/deposition/finishing, assembly and leak testing, and wastewater boundary; pages 4-12 to 4-14 and Appendix D verified |
| `eu-jrc-stm-bref-2006` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Surface Treatment of Metals and Plastics BAT Reference Document, adopted August 2006. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics | Original official page verified for electrolytic and chemical metal-surface-treatment scope, water-based processes, and associated activities |
