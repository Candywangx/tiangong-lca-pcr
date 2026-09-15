---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-portable-electric-lamps-designed-to-function-by-their-own-source-of-energy-exc-21bad56b
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Parts of portable electric lamps designed to function by their own source of energy (except those of cycles or motor vehicles); parts n.e.c. of lamps and lighting fittings; parts n.e.c. of illuminated signs, illuminated name-plates and the like

## 1. Scope and Applicability

This PCR covers factory-gate production of discrete metal or metal-and-minor-component parts whose dedicated function is incorporation into portable self-powered electric lamps, lamps and lighting fittings, illuminated signs, illuminated name-plates, or similar illuminated articles within the boundary represented by CPC 46542. It applies to finished replacement parts and production parts supplied as saleable parts, including formed housings, brackets, reflectors, covers, frames, contact-supporting metal pieces, and comparable non-light-source parts when their product identity is documented.

The representative route is an aluminium-sheet part formed or machined, conditionally alkaline-cleaned and powder-coated, inspected, and released at the factory gate. A concrete data package shall declare the actual part number, host product, material and alloy, forming technology, surface treatment, coating, electrical content, dimensions, saleable condition, geography, and production period. Alternative metal stocks or finishing systems shall be instantiated as separate atomic flows and technology-specific processes; they are not to be combined with the representative flows.

Complete lamps and lighting fittings, lamps for cycles or motor vehicles, electric filament or discharge lamps, arc lamps, LED light sources or modules sold as such, glass-only parts, plastics-only parts, upstream production of purchased materials, distribution, installation, use, maintenance, and end-of-life are outside this foreground gate-to-gate rule. These may be linked as separate datasets when required by the study goal. `un-cpc-3-0-structure-2025` establishes the classification identity; `us-epa-mpm-development-document-2003` and `eu-jrc-stm-bref-2006` support the representative operation sequence and conditional surface-treatment boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-portable-electric-lamps-designed-to-function-by-their-own-source-of-energy-exc-21bad56b |
| classification_refs | CPC 3.0: 46542 (`exact`) |
| covered_products | Saleable metal or metal-and-minor-component parts dedicated to portable self-powered electric lamps, lamps and lighting fittings, illuminated signs, illuminated name-plates, and like illuminated articles, when not classified as a complete lamp, light source, glass-only part, or plastics-only part |
| excluded_products | Complete lamps and fittings; cycle or motor-vehicle lighting parts; filament, discharge, arc, or LED light sources sold as such; glass-only parts; plastics-only parts; generic metal articles without a documented lighting-equipment function |
| representative_product | Powder-coated fabricated aluminium housing, bracket, reflector, frame, or comparable metal part for a lighting fitting, supplied as one saleable part |
| production_route | Receipt of aluminium sheet; cutting, stamping and/or machining; optional cutting-fluid use; conditional alkaline cleaning and rinsing; conditional powder coating and electric curing; inspection and factory-gate release |
| market_state | Finished, dry, inspected saleable part at the manufacturing factory gate; not installed in a complete lamp or sign |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a finished part that performs its declared mechanical, optical-support, protective, mounting, contact-support, or enclosure function in the specified lighting or illuminated-sign product |
| How much | 1 kg net mass of saleable parts, excluding transport packaging |
| How well | Conforms to the declared drawing, material/alloy, dimensions and tolerances, finish/coating, host-product interface, electrical-content declaration, and release inspection criteria |
| How long or cycle | One factory-gate delivery; no use-stage service duration is credited at part level, and any required durability or cycle rating shall be declared as a product qualifier |
| reference_flow_link | One kilogram of finished lighting-equipment part output `finished_lighting_part` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished lighting-equipment part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number and function; host lamp, fitting, sign or name-plate type; material and alloy; net mass; dimensions and tolerances; forming and machining route; surface preparation; coating or uncoated state; electrical content; factory-gate geography; production period; recycled-content claim and method if reported; release criteria; transport-packaging exclusion |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent field. Missing required qualifiers make the reference flow incomplete for that data package.

Tiangong audit receipt `fd0dd520-46b8-49d5-b2e6-427dc6c94d03` directly read five public state-100 candidates and found no exact reference-product flow. Its highest-ranked candidate was rejected with `classification_mismatch` because: The public flow is aluminium/alloy bars, rods and profiles (CPC 41532), not a finished lighting-equipment part in the assigned category. The other candidates were likewise upstream aluminium materials or unrelated aluminium products, so `finished_lighting_part` remains explicitly unresolved.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to the measured net mass of accepted saleable parts at factory-gate release. Exclude pallets, cartons, protective film, and other transport packaging from the reference mass. |
| `batch_to_reference_mass` | Batch records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg reference flow | Divide each batch exchange by accepted net product mass from the same batch or a documented representative aggregation period. Keep reject and rework mass separate from accepted output. |
| `electricity_energy_conversion` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 1 kWh = 3.6 MJ. Do not convert electricity to a mass basis. |
| `water_mass_conversion` | Process-water and cleaning-wastewater rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass measurement. If volume is metered, record temperature and density source and document the volume-to-mass conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased aluminium sheet and other declared process inputs received at the part-manufacturing site |
| starting_condition_role | Factory-gate input to foreground part fabrication; upstream production is represented by linked datasets |
| product_classification_scope | Lighting-equipment parts with the semantic boundary stated in section 1; CPC 46542 is classification context and does not replace the declared product qualifiers |
| recursive_input_rule | If an input is itself a saleable part within this PCR boundary, record that concrete part as a purchased product input with its supplier dataset; do not recreate its fabrication inside the consuming process or aggregate it with other parts |
| upstream_dataset_requirement | Link geography-, technology-, material-state-, recycled-content-, and supplier-appropriate upstream datasets for aluminium sheet, electricity, water, chemicals, coating, cutting fluid, and treatment services |
| disclosure | Declare included operations, omitted conditional operations, outsourced steps, allocation, scrap ownership and destination, wastewater treatment, powder recovery, electricity mix, geography, period, and all substitutions from the representative route |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground production | Include material receipt, cutting/stamping/machining, associated cleaning, conditional surface preparation and coating, inspection, internal transfers, saleable output, aluminium scrap, spent coolant, cleaning wastewater, and powder-coating waste through factory-gate release. | `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006` |
| `boundary_conditional_finish` | Surface preparation and coating | Include `surface_preparation_and_coating` only when alkaline cleaning and powder coating are performed for the declared product. If omitted or replaced, identify the actual finish route and author separate atomic inputs and outputs for it. | `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006` |
| `boundary_upstream_linkage` | Purchased inputs and outsourced operations | Keep upstream production and outsourced operations outside the foreground unit process but require traceable linked datasets with consistent geography, technology and product state; no purchased input may disappear under a cut-off solely because its UUID is unresolved. | `eu-pef-recommendation-2021-2279` |
| `boundary_exclusions` | Downstream and infrastructure | Exclude transport packaging from the reference mass and exclude distribution, installation, complete-lamp assembly, use, maintenance, end-of-life, buildings, capital equipment and employee travel unless the study goal explicitly includes and reports them as separate processes. | `eu-pef-recommendation-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_part_fabrication` | Metal-part cutting, forming and machining | `required` | Always include for the representative fabricated aluminium part; adapt the atomic stock input and operations to the declared part | Foreground material shaping | Mass of fabricated parts awaiting the next applicable operation |
| `surface_preparation_and_coating` | Alkaline surface preparation and powder coating | `conditional` | Include only when the declared part is alkaline-cleaned/rinsed and powder-coated; use a separately declared technology-specific process for another finish | Foreground cleaning and organic coating | Mass of coated parts awaiting release inspection |
| `inspection_and_release` | Final inspection and factory-gate release | `required` | Always include; identify the applicable fabricated-part input from the preceding route | Foreground quality release | 1 kg accepted saleable part |

The detailed rows below describe one representative aluminium-sheet/powder-coating route without multiplying product variants by material and finishing choices. Other product constructions shall replace or extend the representative route with concrete atomic rows while preserving the same reference-flow and data-quality rules.

### Process: Metal-part cutting, forming and machining (`metal_part_fabrication`)

#### Inputs

##### Product flows

###### Aluminium sheet stock (`aluminium_sheet_input`)

Purchased aluminium sheet crosses the site boundary as the representative metal stock. The state-100 identity is sheet above 0.2 mm; alloy, temper, thickness, recycled content and supplier state remain foreground qualifiers.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record delivered sheet mass charged to the production batch, net of stock returned unused to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `us-epa-mpm-development-document-2003`

###### Forming and machining electricity (`forming_electricity`)

Metered electricity for cutting, stamping, forming, machining and local extraction crosses the process boundary as electrical energy.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record submetered electricity or allocate a reconciled production-area meter by documented machine time for the declared batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `us-epa-mpm-development-document-2003`

###### Cutting fluid (`cutting_fluid_input`)

Cutting fluid is recorded when machining uses a supplied coolant or lubricant. Formulation, dilution and recirculation shall be disclosed.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record fresh concentrate plus make-up fluid charged to the batch, excluding internally recirculated fluid
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_fluid_records`
- Sources: `us-epa-mpm-development-document-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fabricated part awaiting the next operation (`formed_part_release_output`)

The shaped part leaves fabrication for the declared next operation. This is a product-specific internal flow and shall receive a foreground flow identity rather than a proxy public UUID.

- Selected flow: Fabricated lighting part awaiting next operation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record measured conforming and nonconforming part mass transferred out of fabrication; tag the accepted transfer separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_transfer_records`
- Sources: `us-epa-mpm-development-document-2003`

##### Waste flows

###### Segregated aluminium fabrication scrap (`aluminium_scrap_output`)

Aluminium offcuts, punchings and separated chips leaving fabrication as scrap are recorded independently from the finished part and other wastes.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record weighed aluminium scrap leaving the process, net of clean material returned directly to the same batch; disclose contamination and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_waste_records`
- Sources: `us-epa-mpm-development-document-2003`

###### Spent cutting coolant (`spent_coolant_output`)

Spent coolant removed from the recirculating system or batch is recorded when it leaves the process for recovery or treatment.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record mass removed from service and transferred off process, excluding coolant retained in active recirculation inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_waste_records`
- Sources: `us-epa-mpm-development-document-2003`

##### Elementary flows

### Process: Alkaline surface preparation and powder coating (`surface_preparation_and_coating`)

#### Inputs

##### Product flows

###### Fabricated part entering surface treatment (`formed_part_surface_input`)

The product-specific fabricated part enters the conditional surface process as an internal product flow.

- Selected flow: Fabricated lighting part awaiting surface treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record measured part mass accepted into the surface-treatment batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_transfer_records`
- Sources: `us-epa-mpm-development-document-2003`

###### Alkaline-cleaning process water (`process_water_input`)

Water supplied to cleaning baths, rinses and make-up crosses the process boundary as a product input; internally recycled water is not counted again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record metered fresh and make-up process water entering the surface-treatment process, excluding recirculated internal water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_material_records`
- Sources: `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006`

###### Sodium hydroxide cleaner (`sodium_hydroxide_input`)

Sodium hydroxide is recorded as one concrete alkaline-cleaning chemical when used in the declared bath; concentration and solution mass basis shall be disclosed.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record 100% sodium-hydroxide-equivalent mass added to the bath from purchase and replenishment records; separately retain supplied solution mass and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_material_records`
- Sources: `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006`

###### Powder coating material (`powder_coating_input`)

Fresh powder coating crossing into the booth is recorded separately from recovered internal overspray.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record fresh powder charged from inventory, excluding recovered powder recirculated within the same foreground process; disclose resin and pigment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_material_records`
- Sources: `us-epa-mpm-development-document-2003`

###### Surface-treatment and coating electricity (`surface_electricity`)

Electricity for pumps, ventilation, drying, powder application, recovery equipment and electric curing is recorded for the conditional process.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record submetered electricity or allocate a reconciled line meter by documented operating time and throughput
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Coated part awaiting release inspection (`finished_part_surface_output`)

The coated product leaves the conditional surface process as a product-specific internal flow.

- Selected flow: Powder-coated lighting part awaiting release inspection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record dry part mass transferred from the coating line after cure and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_transfer_records`
- Sources: `us-epa-mpm-development-document-2003`

##### Waste flows

###### Cleaning and rinse wastewater (`cleaning_wastewater_output`)

Wastewater leaving alkaline cleaning and rinsing is recorded as one concrete process-wastewater flow before on-site or off-site treatment. Bath dumps and rinses may be tracked separately in raw records but are aggregated only when composition and destination are compatible.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record measured wastewater mass leaving the process after internal reuse, with pH, dissolved-metal information and treatment destination retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_output_records`
- Sources: `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006`

###### Powder-coating waste (`powder_coating_waste_output`)

Unrecovered overspray and booth clean-out powder leaving the process is recorded separately from internally recovered powder.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record weighed powder-coating waste transferred for treatment or disposal, net of powder returned to the coating feed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_output_records`
- Sources: `us-epa-mpm-development-document-2003`

##### Elementary flows

### Process: Final inspection and factory-gate release (`inspection_and_release`)

#### Inputs

##### Product flows

###### Fabricated part awaiting release (`finished_part_inspection_input`)

The last applicable fabrication or finishing step supplies the product-specific part to release inspection.

- Selected flow: Fabricated lighting part awaiting release inspection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record net dry mass entering final inspection and reconcile it to accepted, rework and rejected outcomes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`
- Sources: `us-epa-mpm-development-document-2003`

###### Inspection electricity (`inspection_electricity`)

Electricity for dimensional, optical, coating, continuity or other declared release equipment is recorded separately from fabrication electricity.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Record submetered inspection electricity or allocate a reconciled test-area meter by documented inspection time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `us-epa-mpm-development-document-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished lighting-equipment part (`finished_lighting_part`)

Accepted parts leave the foreground system at factory gate. No exact public state-100 reference-product UUID was confirmed, so the final dataset shall create or resolve the product-specific flow before publication.

- Selected flow: Finished lighting-equipment part
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Exactly 1 kg accepted net product mass as the reference-flow normalization output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished lighting-equipment part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared fabrication, finishing and inspection processes | First subdivide meters, batch records and waste records by process, line, batch or part family so that the declared product receives directly measured burdens wherever technically feasible. | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_driver` | Residual shared foreground burdens | When subdivision is not feasible, allocate electricity by machine or line time and rated/measured load, cleaning and coating burdens by treated surface area or bath throughput, and other mass-driven burdens by accepted plus rejected processed mass. Document the causal driver and sensitivity. | `eu-pef-recommendation-2021-2279` |
| `allocation_scrap_and_recovery` | Aluminium scrap, recovered powder and internally recirculated fluids | Record quantities, ownership and destinations. Do not count internal recirculation as a new input or assign an avoided-primary-material credit inside this gate-to-gate process. Apply any recycling or substitution credit only in the downstream lifecycle model under its declared method. | `eu-pef-recommendation-2021-2279` |
| `allocation_economic_last_resort` | Multi-product operations without a defensible physical driver | Use economic allocation only when subdivision and a causal physical relationship are demonstrably unavailable; use contemporaneous net prices, report the allocation share, and test sensitivity to price variability. | `eu-pef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `metal_part_fabrication` | aluminium sheet input | purchase receipt plus batch issue/return record | material UUID; alloy; temper; thickness; recycled-content basis; supplier; issued mass; returned mass; batch id; timestamp | Reconcile calibrated receiving or inventory scales with production issue and return records | kg | Each receipt and production batch | At least 12 representative months or the full campaign when shorter | Each manufacturing site and declared part family | Sum net issued mass for accepted reference-product batches, then normalize by accepted net output mass | Scale calibration; material certificate; supplier lot; inventory reconciliation; exception log |
| `cp_energy_records` | `metal_part_fabrication`; `surface_preparation_and_coating`; `inspection_and_release` | electricity inputs | production electricity meter and allocation records | meter id; opening and closing reading; multiplier; operating time; line state; batch id; electricity supplier and grid geography | Prefer submetering; otherwise reconcile the site meter and allocate with documented machine/line/test time and load | kWh and MJ | Each batch or shift; meter reconciliation monthly | At least 12 representative months or the full campaign when shorter | Each site and process area | Subtract idle/non-production loads when measured, allocate only residual shared load, convert kWh to MJ, normalize by accepted mass | Meter calibration; invoices; meter reconciliation; downtime log; allocation worksheet |
| `cp_cutting_fluid_records` | `metal_part_fabrication` | cutting-fluid input | purchase, issue and inventory records | product identity; concentrate mass; make-up mass; dilution water; opening and closing inventory; recirculation status; batch id | Reconcile purchase, issue and inventory records; exclude fluid still in internal circulation | kg | Each charge and disposal event | At least 12 representative months or the full campaign when shorter | Each machining system | Net fresh fluid charged divided by accepted reference-product mass | Product safety/technical sheet; inventory reconciliation; batch log |
| `cp_intermediate_transfer_records` | `metal_part_fabrication`; `surface_preparation_and_coating` | internal part outputs and inputs | transfer tickets and work-order records | part id; source process; destination process; accepted mass; rejected mass; rework mass; timestamp | Weigh or count with a validated count-to-mass conversion at every process transfer | kg | Each batch transfer | Full production campaign | Each foreground process boundary | Reconcile source output to destination input and explain timing or inventory differences | Scale calibration; transfer ticket; work-order reconciliation; rework log |
| `cp_fabrication_waste_records` | `metal_part_fabrication` | aluminium scrap and spent coolant | dispatch, manifest and storage records | waste UUID; container tare/gross/net mass; alloy/contamination; coolant type; destination; manifest/receipt; batch link | Weigh each dispatched container and reconcile temporary storage change | kg | Each container movement and monthly stocktake | At least 12 representative months or the full campaign when shorter | Each site and waste destination | Opening stock plus generation minus closing stock and returns, normalized by accepted product mass | Scale calibration; waste manifest; recycler/treatment receipt; storage reconciliation |
| `cp_surface_material_records` | `surface_preparation_and_coating` | process water, sodium hydroxide, powder coating | meter, purchase, issue and bath records | meter readings; chemical product mass; active concentration; powder issue/return; recovered powder; bath id; batch id | Meter water and reconcile chemical/coating purchase, issue, return and bath records | kg and concentration fraction | Each batch or bath addition; water meter each shift | At least 12 representative months or the full campaign when shorter | Each treatment and coating line | Count only fresh boundary inputs; calculate active NaOH mass as supplied solution mass times verified mass fraction; normalize by accepted output mass | Meter/scale calibration; chemical certificate; concentration test; inventory and bath logs |
| `cp_surface_output_records` | `surface_preparation_and_coating` | cleaning wastewater and powder-coating waste | discharge, waste transfer and recovery records | wastewater mass/volume; density; pH; dissolved-metal indicator; treatment destination; powder waste net mass; recovered powder; batch/date | Meter wastewater or document tank transfer; weigh powder waste; reconcile internal reuse and recovery | kg | Each discharge or waste transfer; reconcile monthly | At least 12 representative months or the full campaign when shorter | Each line, treatment route and destination | Net external waste output after internal reuse/recovery, normalized by accepted output mass | Meter/scale calibration; laboratory result; waste manifest; treatment receipt; recovery reconciliation |
| `cp_release_records` | `inspection_and_release` | inspection input and accepted reference product | production and release-inspection records | part id; input mass/count; inspected count; accepted count/mass; rework; reject; drawing revision; inspection criteria; timestamp | Use calibrated scales or validated count-to-mass conversion and controlled inspection records | kg and item count | Each production batch | Full production campaign | Each site and part number | Reconcile input to accepted, rework and rejected outcomes; normalize all exchanges by accepted net mass | Scale calibration; inspection plan; signed release record; nonconformance and rework log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground exchange | normalized amount = period- or batch-matched exchange / accepted net mass of `finished_lighting_part`; preserve the raw amount and common time/batch boundary | Exchange record; accepted net product mass | Exchange per 1 kg reference flow | `eu-pef-recommendation-2021-2279` |
| `calc_net_material_input` | `aluminium_sheet_input` | net sheet input = issued sheet mass - unused sheet returned to inventory; do not subtract generated scrap | Issued mass; returned unused mass | Net aluminium sheet input | `us-epa-mpm-development-document-2003` |
| `calc_active_naoh` | `sodium_hydroxide_input` | 100% NaOH-equivalent mass = supplied cleaning-solution mass × verified NaOH mass fraction | Supplied solution mass; certificate or measured mass fraction | Active sodium hydroxide mass | `eu-jrc-stm-bref-2006` |
| `calc_electricity_mj` | All electricity rows | electricity (MJ) = metered electricity (kWh) × 3.6 | Metered or allocated kWh | Electricity in MJ |  |
| `calc_mass_reconciliation` | Fabrication, surface process and inspection | input part/material mass shall reconcile to accepted output, internal transfer, scrap/waste, retained inventory and documented mass change over the same boundary; investigate rather than force-close unexplained differences | Material and intermediate inputs; accepted outputs; wastes; inventory change | Mass-balance residual and completeness finding | `us-epa-mpm-development-document-2003` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and material flows | Preserve part number, host-product function, drawing revision, material/alloy, dimensions, finish, UUID decision, and product state; do not use the representative aluminium route for an undeclared alternative material. | Product drawing and bill of materials; material certificate; Tiangong state-100 direct-read audit |
| `dq_measurement` | Meters and scales | Use calibrated meters/scales or document a validated conversion; retain raw readings, multipliers, density/concentration data, downtime and allocation worksheets. | Calibration certificates; meter logs; weigh tickets; laboratory or supplier certificates |
| `dq_temporal` | Foreground annual or campaign data | Cover at least 12 representative months unless the production campaign is shorter; disclose campaign dates, shutdowns, abnormal batches and representativeness. | Production calendar; batch register; exception log |
| `dq_completeness` | All required and applicable conditional processes | Reconcile inputs, internal transfers, accepted outputs, rejects, wastes and inventory change. Report zero only when the exchange is demonstrably absent, not when the UUID or meter is missing. | Mass and energy reconciliation; applicability checklist; unresolved-flow register |
| `dq_geography_technology` | Foreground and linked upstream datasets | Match site geography, electricity supply, material state, finishing technology, waste treatment and reference period; document any proxy and its effect. | Dataset metadata; supplier records; process specification; data-quality assessment following `eu-pef-recommendation-2021-2279` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | Product identity and reference flow | Fail validation if the canonical PCR id, part function, host product, material/alloy, finish, net reference mass, factory-gate state or required qualifiers are missing or internally inconsistent. | `un-cpc-3-0-structure-2025`; `eu-pef-recommendation-2021-2279` |
| `validate_process_applicability` | Process map | Require both required processes and evaluate the conditional surface process against the declared route. If another finishing route is used, require a technology-specific process with concrete atomic flows and disclose the substitution. | `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006` |
| `validate_atomic_inventory` | Inventory rows | Require one physical, chemical, waste or energy exchange per row; require a verified state-100 UUID or the matching manifest unresolved entry; reject combined utilities, materials, wastes, emissions or route-choice labels. |  |
| `validate_units_and_normalization` | Amounts and units | Require mass rows in kg, electricity in MJ, documented conversions, one common accepted-product denominator, and collection protocols for every collected or calculated foreground row. | `eu-pef-recommendation-2021-2279` |
| `validate_reconciliation` | Material, intermediate, waste and energy records | Report accepted checks, skipped checks and residuals; fail when batch/time boundaries differ without reconciliation or when unexplained material losses, double-counted recirculation, or missing waste destinations make completeness inconclusive. | `us-epa-mpm-development-document-2003` |
| `validate_range_evidence` | Quantitative QA ranges | Treat all external range needs in the manifest as unresolved until at least two independent original-text sources with compatible boundary, functional unit and product state support a reasoned synthesis. Do not create a range from a single case, repeated value or regulatory limit. |  |
| `validate_allocation` | Shared burdens and recovery | Require subdivision first, a documented causal physical driver for residual allocation, separate recovery quantities and destinations, and sensitivity evidence for any last-resort economic allocation. | `eu-pef-recommendation-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared lighting-equipment part |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Link into complete lamp, lighting fitting, illuminated-sign, construction-product or other lifecycle models when the part function, material, finish, geography, technology, time and factory-gate boundary are compatible |
| excluded_use | Direct comparison of unlike parts; use as a complete lamp or lighting fitting; substitution for a glass-only, plastics-only, vehicle-lighting or light-source dataset; use when material or finish is unknown; use as a published default while UUID or range-evidence blockers remain unresolved |
| required_metadata | PCR id and version; part number/function; host product; drawing revision; material/alloy; net mass; dimensions; forming and finishing route; coating; electrical content; included/outsourced processes; site/geography; period; electricity supply; recycled content method; allocation; scrap and waste destinations; UUID status |
| required_quality_disclosure | Primary-data share; measurement and calibration methods; temporal coverage; missing data and proxies; process applicability; material/energy reconciliation; allocation sensitivity; unresolved UUIDs; unresolved external range evidence; representativeness and reviewer status |
| update_trigger | Change in part design or material, mass by more than the study significance threshold, forming or finishing technology, coating chemistry, supplier/recycled-content basis, electricity supply, site/geography, waste treatment, allocation method, or availability of exact Tiangong UUID/range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0 Structure*, 30 June 2025, [official CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv) | Exact CPC 46542 classification identity and English title; source bytes verified against SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` |
| `us-epa-mpm-development-document-2003` | `official_guidance` | US Environmental Protection Agency, *Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products & Machinery Point Source Category*, EPA-821-B-03-001, 2003, [official PDF](https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf) | Original pages 4-12 to 4-14 verified for shaping, machining, cleaning, surface preparation, organic coating, assembly/inspection, process ordering, wastes and wastewater |
| `eu-jrc-stm-bref-2006` | `official_guidance` | European Commission Joint Research Centre, *Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*, adopted August 2006, [official BREF page](https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics) | Original official page verified for aqueous electrolytic/chemical surface treatment and associated activities; supports the conditional surface-treatment boundary and collection focus |
| `eu-pef-recommendation-2021-2279` | `official_guidance` | European Commission, *Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods*, [official consolidated text](https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng) | Original official text verified for functional unit/reference flow, system boundary, multifunctionality hierarchy, company-specific data, data quality, normalization and validation principles |
