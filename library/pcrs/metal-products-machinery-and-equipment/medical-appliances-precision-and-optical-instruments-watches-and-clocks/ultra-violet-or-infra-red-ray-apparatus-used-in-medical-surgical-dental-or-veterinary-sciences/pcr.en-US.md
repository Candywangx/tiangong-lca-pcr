---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.ultra-violet-or-infra-red-ray-apparatus-used-in-medical-surgical-dental-or-veterinary-sciences
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ultra-violet or infra-red ray apparatus, used in medical, surgical, dental or veterinary sciences

## 1. Scope and Applicability

This PCR applies to complete apparatus whose declared intended medical, surgical, dental, or veterinary function is delivered by ultraviolet or infrared optical radiation. It covers non-laser ultraviolet or infrared treatment, diagnostic, monitoring, or procedure-support apparatus supplied as a complete market-ready product, including the installed source, controls, housing, optical parts, power connection, and supplied accessories needed for the declared function.

The product definition is determined by intended purpose and radiation function, not merely by the presence of a lamp or heater. General-purpose lighting, space heating, tanning, industrial curing, material testing, germicidal fixtures without the assigned medical, surgical, dental, or veterinary intended purpose, laser equipment, ionizing-radiation equipment, electro-diagnostic apparatus whose diagnostic function is not delivered by ultraviolet or infrared radiation, and separately marketed consumables or replacement lamps are outside this boundary. Product variants using ultraviolet, infrared, or both are represented by conditional atomic rows; they are not multiplied across every lifecycle stage.

The base foreground package covers component receipt, apparatus assembly, final test, and packaging through the factory gate. Distribution, use and maintenance, and end of life are conditional modules that become mandatory whenever the study claims those lifecycle stages or a cradle-to-grave result. Applicable legal or conformity obligations remain jurisdiction- and intended-use-specific; this PCR does not certify medical-device safety or regulatory compliance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.ultra-violet-or-infra-red-ray-apparatus-used-in-medical-surgical-dental-or-veterinary-sciences |
| classification_refs | CPC 3.0: 48122, exact classification context; the classification remains unmapped until separately accepted |
| covered_products | Complete ultraviolet or infrared apparatus specifically intended for medical, surgical, dental, or veterinary treatment, diagnosis, monitoring, or procedure support; non-laser light-source equipment within IEC 60601-2-57 is a representative technical subset |
| excluded_products | General-purpose lamps and luminaires; tanning and domestic heating appliances; industrial curing and testing equipment; general germicidal fixtures without the assigned intended purpose; laser equipment; X-ray, alpha, beta, or gamma apparatus; electro-diagnostic apparatus outside this radiation-function boundary; separately sold replacement sources and consumables |
| representative_product | Reusable electrically powered ultraviolet phototherapy or infrared therapeutic apparatus with source module, control electronics, enclosure, optical components, power cable, instructions, and sales packaging |
| production_route | Receipt of specified components and materials; mechanical and electrical assembly; software or control configuration where present; optical/radiometric and electrical final test; cleaning where applicable; packaging and release |
| market_state | Complete, factory-tested, calibrated where required, labelled, and packaged apparatus ready for professional or declared lay use; sterile state applies only when explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of the declared medical, surgical, dental, or veterinary function by ultraviolet or infrared radiation from one defined apparatus configuration |
| How much | Operation of one complete apparatus under the declared utilization profile |
| How well | At the declared wavelength band, radiant output or irradiance, treatment or diagnostic performance, exposure-control configuration, and applicable safety classification |
| How long or cycle | The declared reference service life, stated in years and operating hours or treatment cycles, including the declared maintenance and source-replacement regime |
| reference_flow_link | One market-ready apparatus, with lifecycle exchanges normalized to that apparatus and its declared reference service life |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) |
| Reference product flow | Market-ready ultra-violet or infra-red medical apparatus (Tiangong UUID unresolved) |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | ultraviolet, infrared, or combined source; intended medical/surgical/dental/veterinary purpose; wavelength band; source technology; rated radiant output or irradiance; exposure-control mode; mains or battery supply; apparatus model and configuration; installed source count; net and packaged mass; production geography and year; declared service life; utilization profile; cleaning/disinfection state; sterile state if any; supplied accessories; packaging configuration; end-of-life geography when included |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only complete released apparatus conforming to the declared configuration. Report net apparatus mass and packaged mass separately in kg per item; do not substitute lamp count for apparatus count. |
| `component_mass_basis` | component and packaging product inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the mass crossing the foreground boundary after incoming inspection, excluding returnable supplier transport packaging unless it is consumed by the product system. |
| `energy_conversion` | electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered kWh record and convert to MJ using the exact identity 1 kWh = 3.6 MJ. Do not combine electricity with heat or fuel. |
| `transport_mass_distance` | freight service inputs | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | kg*km | Calculate each mode separately as shipped mass multiplied by route distance; disclose vehicle or vessel class, load factor convention, and whether empty returns are included. |
| `optical_performance_disclosure` | reference apparatus and use scenario | declared wavelength and radiant-performance metric | manufacturer-declared unit | Preserve the manufacturer's wavelength band and the applicable radiant output, irradiance, radiant exposure, or treatment-control metric. Do not convert unlike optical performance metrics into one generic energy value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Components and materials accepted at the apparatus assembly site, with supplier identities, product states, masses, origins, and upstream dataset links declared |
| starting_condition_role | Foreground entry point for apparatus manufacturing; upstream component and material production remains represented by linked secondary or background datasets |
| product_classification_scope | The semantic ultraviolet/infrared medical-apparatus boundary described in sections 1 and 2; CPC 48122 is classification context rather than canonical identity authority |
| recursive_input_rule | A same-category apparatus or subassembly purchased for integration is recorded once as an incoming product flow with its upstream dataset; it is not recursively decomposed again inside the receiving process |
| upstream_dataset_requirement | Every purchased component, material, packaging item, electricity supply, water supply, and transport service must link to a geographically and technologically representative upstream dataset or carry a documented unresolved-data gap |
| disclosure | Declare assembly and packaging sites, included lifecycle modules, cut-offs, shared-facility treatment, product configuration, software/control content, sterilization or cleaning steps, supplier data coverage, electricity geography, distribution routes, use profile, maintenance, and end-of-life scenario |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_base_gate` | manufacturing foreground | Include accepted components and materials, assembly, configuration, final electrical and optical/radiometric testing, process utilities, cleaning where performed, packaging, rejects actually generated, and release to the factory gate. | `eu-pef-2021-2279`; `eu-mdr-2017-745` |
| `boundary_lifecycle_modules` | lifecycle claims | A cradle-to-grave or downstream claim must add distribution, installation if material, use electricity, cleaning or disinfection when prescribed, maintenance and source replacement, and end-of-life collection and treatment. A factory-gate dataset must state that these modules are excluded. | `eu-pef-2021-2279`; `eu-mdr-2017-745` |
| `boundary_configuration` | product variants | Model one declared apparatus configuration. Include ultraviolet and infrared source rows only when present; do not average incompatible source technologies, intended purposes, service lives, or sterile/reusable states without disclosed weighting. | `iec-60601-2-57-2023`; `eu-mdr-2017-745` |
| `boundary_upstream_links` | purchased inputs | Represent purchased inputs by specific product flows and representative upstream datasets. Do not replace a missing component identity with an umbrella material or utility flow. | `eu-pef-2021-2279` |
| `boundary_end_of_life` | discarded equipment | When end of life is included, keep the discarded apparatus and spent ultraviolet or infrared lamps as separate waste flows and apply jurisdiction-specific collection, contamination, dismantling, recovery, recycling, or disposal scenarios. | `eu-weee-2012-19`; `eu-mdr-2017-745` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `apparatus_assembly` | Apparatus assembly, configuration, and final test | `required` | Always included for a manufactured complete apparatus | Foreground manufacturing | Per accepted assembled apparatus |
| `packaging_release` | Packaging and market release | `required` | Always included for a market-ready apparatus | Foreground packaging | Per released packaged apparatus |
| `distribution` | Distribution to the first user | `conditional` | Include when distribution or any downstream lifecycle stage is claimed | Downstream transport | kg*km by transport mode per reference apparatus |
| `use_maintenance` | Use, cleaning, maintenance, and source replacement | `conditional` | Include when use stage or cradle-to-grave performance is claimed | Use-stage foreground scenario | Per reference service life and utilization profile |
| `end_of_life` | Collection and end-of-life transfer | `conditional` | Include when end of life or cradle-to-grave performance is claimed | End-of-life scenario | Per discarded reference apparatus |

### Process: Apparatus assembly, configuration, and final test (`apparatus_assembly`)

#### Inputs

##### Product flows

###### Ultraviolet light-source module (`uv_emitter_module`)

Record one ultraviolet emitter module when it is installed in the declared apparatus; omit this row only for an infrared-only configuration.

- Selected flow: Ultraviolet light-source module (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass of ultraviolet emitter modules installed in accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `iec-60601-2-57-2023`

###### Infrared light-source module (`infrared_emitter_module`)

Record one infrared emitter module when it is installed in the declared apparatus; omit this row only for an ultraviolet-only configuration.

- Selected flow: Infrared light-source module (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass of infrared emitter modules installed in accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `iec-60601-2-57-2023`

###### Printed wire board (`printed_wire_board`)

Record this input only when an unpopulated printed wire board crosses the assembly boundary; a purchased populated control assembly requires its own future exact flow identity.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured accepted mass of printed wire boards installed in accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Aluminium-alloy housing (`aluminium_alloy_housing`)

Record the finished aluminium-alloy housing when it crosses the boundary as one purchased apparatus component.

- Selected flow: Aluminium-alloy apparatus housing (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted housing mass installed in accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Stainless-steel housing (`stainless_steel_housing`)

Record the finished stainless-steel housing when it crosses the boundary as one purchased apparatus component.

- Selected flow: Stainless-steel apparatus housing (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted housing mass installed in accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Optical glass pressing blank (`optical_glass_pressing_blank`)

Record this input only when an optical glass pressing blank is processed at the assembly site; purchased finished optics require their own product identity.

- Selected flow: Optical Glass Pressing Blank `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured accepted mass of optical glass pressing blanks consumed in accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Power cable (`power_cable`)

Record the supplied mains power cable or internal power-cable assembly as one product input when present.

- Selected flow: Medical apparatus power cable (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass of power cables installed in or supplied with accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Assembly and final-test electricity (`assembly_electricity`)

Record metered electricity used for mechanical and electrical assembly, control configuration, burn-in, and final electrical and optical/radiometric testing.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or facility-submetered electricity attributable to accepted apparatus
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_utilities`
- Sources:

###### Assembly process water (`assembly_process_water`)

Record process water used for component or apparatus cleaning at the assembly site when it crosses the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or batch-record process-water mass attributable to accepted apparatus
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted assembled apparatus (`assembled_apparatus`)

Record complete apparatus that passed the declared electrical, optical/radiometric, software/control, and release tests before sales packaging.

- Selected flow: Assembled ultra-violet or infra-red medical apparatus (Tiangong UUID unresolved)
- Flow property / unit: Number of items / item
- Amount rule: Count of accepted assembled apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per apparatus assembly campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_units`
- Sources: `un-cpc-3-0-structure-2025`; `iec-60601-2-57-2023`

##### Waste flows

##### Elementary flows

### Process: Packaging and market release (`packaging_release`)

#### Inputs

##### Product flows

###### Corrugated-board boxes (`corrugated_board_boxes`)

Record corrugated-board sales and transit boxes consumed for the reference apparatus.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured box mass consumed for released packaged apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per released packaged apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources:

###### Polyethylene packaging film (`polyethylene_packaging_film`)

Record non-cellular polyethylene film consumed as bag, wrap, or protective film; retain film grade and thickness as foreground qualifiers.

- Selected flow: Polyethylene `1ff32f1d-77ac-4a6f-b91c-67b08b13e55a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured polyethylene film mass consumed for released packaged apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per released packaged apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources:

###### Packaging electricity (`packaging_electricity`)

Record electricity used by packaging equipment and final release operations when separately metered or allocated by a physical driver.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered packaging electricity attributable to released apparatus
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per released packaged apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Market-ready packaged apparatus (`packaged_apparatus`)

Record the released reference product with all included accessories, instructions, and sales packaging.

- Selected flow: Market-ready ultra-violet or infra-red medical apparatus (Tiangong UUID unresolved)
- Flow property / unit: Number of items / item
- Amount rule: Count of released packaged apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_units`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

### Process: Distribution to the first user (`distribution`)

#### Inputs

##### Product flows

###### Road freight transport (`road_freight`)

Record each road leg for the packaged apparatus using actual shipped mass and route distance.

- Selected flow: Road freight transport service `482c5e1a-bd9d-53d0-afeb-f2d3b56e8179`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km; unit group Unit of kg*km `3620148f-c5db-48ce-9065-a10092089aca`
- Amount rule: Shipped mass multiplied by road-route distance for each leg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per delivered reference apparatus
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distribution_routes`
- Sources: `eu-pef-2021-2279`

###### Container-ship sea freight (`sea_freight_container_ship`)

Record container-ship sea transport only when it occurs in the declared distribution route.

- Selected flow: Freight transport by sea, container ship `eb46993a-20d8-400e-81eb-66732ff4900b`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km; unit group Unit of kg*km `3620148f-c5db-48ce-9065-a10092089aca`
- Amount rule: Shipped mass multiplied by sea-route distance for each container-ship leg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per delivered reference apparatus
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distribution_routes`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Use, cleaning, maintenance, and source replacement (`use_maintenance`)

#### Inputs

##### Product flows

###### Use-stage electricity (`use_electricity`)

Record apparatus electricity over the declared utilization profile, including standby and prescribed warm-up or cooling modes.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Sum of metered electricity by operating mode over the reference service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per reference apparatus service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_logs`
- Sources: `eu-mdr-2017-745`; `eu-pef-2021-2279`

###### Cleaning process water (`cleaning_process_water`)

Record process water only when the validated instructions prescribe water-based cleaning or disinfection during the declared use scenario.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured water per cleaning event multiplied by recorded event count over the reference service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per reference apparatus service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_logs`
- Sources: `eu-mdr-2017-745`

###### Replacement ultraviolet emitter (`replacement_uv_emitter`)

Record one ultraviolet replacement-emitter product flow when the service log shows replacement within the reference service life.

- Selected flow: Replacement ultraviolet emitter module (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of replacement ultraviolet emitter modules installed over the reference service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference apparatus service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance_logs`
- Sources: `eu-mdr-2017-745`; `iec-60601-2-57-2023`

###### Replacement infrared emitter (`replacement_ir_emitter`)

Record one infrared replacement-emitter product flow when the service log shows replacement within the reference service life.

- Selected flow: Replacement infrared emitter module (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of replacement infrared emitter modules installed over the reference service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference apparatus service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance_logs`
- Sources: `eu-mdr-2017-745`; `iec-60601-2-57-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent ultraviolet lamp (`spent_uv_lamp`)

Record spent ultraviolet lamps separately from the apparatus and from infrared lamps; retain mercury or other hazardous-substance status in the waste description when applicable.

- Selected flow: Spent ultraviolet lamp (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of ultraviolet lamps removed over the reference service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference apparatus service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance_logs`
- Sources: `eu-weee-2012-19`; `eu-mdr-2017-745`

###### Spent infrared lamp (`spent_ir_lamp`)

Record spent infrared lamps separately from the apparatus and from ultraviolet lamps.

- Selected flow: Spent infrared lamp (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of infrared lamps removed over the reference service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference apparatus service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance_logs`
- Sources: `eu-weee-2012-19`; `eu-mdr-2017-745`

##### Elementary flows

### Process: Collection and end-of-life transfer (`end_of_life`)

#### Inputs

##### Product flows

##### Waste flows

###### Discarded ultraviolet or infrared medical apparatus (`discarded_apparatus`)

Record the complete discarded apparatus entering the declared collection or treatment route. Do not use an unspecified waste flow, and disclose whether contamination changes the legally available route.

- Selected flow: Discarded ultra-violet or infra-red medical apparatus (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of the discarded apparatus entering the declared end-of-life route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per discarded reference apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_records`
- Sources: `eu-weee-2012-19`; `eu-mdr-2017-745`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multi-product and shared processes | Avoid allocation by subdividing assembly, test, packaging, and utility records to the declared apparatus family whenever separate measurements or production records are available. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | residual shared burdens | When subdivision is not possible, allocate shared electricity, water, cleaning, and packaging operations using a documented causal physical driver such as machine time, test time, metered energy, processed mass, or accepted unit count. Economic allocation requires a documented reason that no causal physical relation is practicable. | `eu-pef-2021-2279` |
| `allocation_rejects` | rejected apparatus and components | Attribute burdens through the point of rejection using measured process participation; do not distribute post-rejection rework or treatment to accepted output unless the chosen physical driver causally requires it. | `eu-pef-2021-2279` |
| `allocation_recycling` | end-of-life recovery | State the recycled-content and end-of-life attribution convention, use it consistently for incoming and recovered materials, and prevent double credit between the apparatus system and downstream material systems. | `eu-pef-2021-2279`; `eu-weee-2012-19` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_assembly_bom` | `apparatus_assembly` | installed component input | approved BOM, goods receipt, and production issue | model; revision; component identity; supplier; batch; accepted mass; issued mass; return mass; accepted apparatus count | Reconcile approved BOM to warehouse issues and accepted build records | kg and item | each batch or campaign | representative continuous 12-month period or all production if shorter | every assembly site in scope | Net accepted component mass divided by accepted assembled apparatus; keep configuration-specific records separate | approved BOM revision, supplier specification, calibrated scale record, and reconciliation sign-off |
| `cp_assembly_utilities` | `apparatus_assembly`; `packaging_release` | electricity and process water | utility meter, submeter, and production log | meter start/end; kWh; water mass or volume; density assumption if converted; operating hours; apparatus count; allocation driver | Read dedicated meters where available; otherwise allocate a reconciled facility meter using a causal physical driver | kWh, MJ, kg, and h | monthly and each representative campaign | representative continuous 12-month period or all production if shorter | each assembly and packaging site | Subtract documented non-production loads, allocate by the declared driver, and divide by accepted output | meter calibration, invoice reconciliation, downtime log, and allocation worksheet |
| `cp_output_units` | `apparatus_assembly`; `packaging_release` | accepted output | release and test record | serial or lot; model; configuration; accepted count; rejected count; net mass; packaged mass; test status | Count only units passing the declared release tests and measure representative net and gross masses | item and kg | each batch | entire reporting period | every release site | Sum accepted units by configuration; do not net rejects into accepted output | signed release record, test result, and scale calibration |
| `cp_packaging_bom` | `packaging_release` | packaging input | packaging specification and issue record | packaging component identity; material; grade; unit mass; issued count; return or scrap count; released apparatus count | Reconcile packaging BOM to issued quantities and released units | kg and item | each packaging configuration and revision | reporting period | every packaging site | Net packaging mass divided by released apparatus; separate reusable transport packaging | approved packaging specification, supplier declaration, and issue reconciliation |
| `cp_distribution_routes` | `distribution` | freight service | shipment and route record | origin; destination; mode; vehicle or vessel class; shipped gross mass; distance; load factor convention; empty return; delivered units | Match carrier documents to geospatial or carrier distance records | kg, km, and kg*km | each shipment or representative route stratum | reporting period | all included distribution routes | Calculate each mode and leg separately, then divide by delivered reference apparatus | bill of lading, carrier invoice, route record, and mass reconciliation |
| `cp_use_logs` | `use_maintenance` | use electricity and cleaning water | meter, treatment log, and validated instructions | model; operating mode; power; duration; treatments; standby time; cleaning events; water per event; service-life basis | Meter representative apparatus or use validated mode-specific power data with recorded utilization | kWh, MJ, h, cycle, and kg water | per test campaign with annual utilization update | declared reference service life scenario | declared user geography and setting | Sum mode energy and event water over the declared utilization profile; keep user settings separate | calibrated meter, protocol, instructions for use, and scenario approval |
| `cp_maintenance_logs` | `use_maintenance` | replacement emitter and spent lamp | service and parts record | serial; date; emitter type; part number; installed mass; removed mass; failure mode; operating hours; treatment route | Reconcile service tickets, parts issues, and removed-component records | item, kg, and h | each maintenance event | declared reference service life | included installed base or representative service sample | Sum installed and removed mass by source technology per reference apparatus | service ticket, part specification, scale record, and waste consignment note |
| `cp_end_of_life_records` | `end_of_life` | discarded apparatus | collection and treatment record | model; net mass; contamination status; collection route; treatment facility; downstream dataset; geography | Match asset retirement to collection and treatment documentation | item and kg | each disposal event or representative scenario update | declared end-of-life scenario year | declared end-of-life geography | Keep collected, reused, treated, recovered, recycled, and disposed routes separate; normalize to one discarded apparatus | asset retirement record, waste transfer note, facility evidence, and scenario approval |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_component_per_item` | assembly and packaging material rows | (issued mass - returned unused mass) / accepted output count | component or packaging issue mass; return mass; accepted apparatus count | kg per apparatus |  |
| `calc_electricity_mj` | assembly, packaging, and use electricity | metered kWh × 3.6 MJ/kWh | metered kWh by process and mode | MJ per apparatus or service life |  |
| `calc_transport_service` | road and sea freight | shipped gross mass in kg × route distance in km / delivered apparatus count | shipped mass; leg distance; delivered count | kg*km per delivered apparatus | `eu-pef-2021-2279` |
| `calc_lifetime_use` | use electricity and cleaning water | Sum mode- or event-specific amount × event count over the declared reference service life | operating-mode power and hours; standby power and hours; cleaning water and event count | MJ electricity and kg process water per reference service life | `eu-mdr-2017-745`; `eu-pef-2021-2279` |
| `calc_replacement_balance` | replacement emitter and spent lamp rows | Sum installed replacement mass and removed spent-lamp mass separately by ultraviolet and infrared technology | service records; installed part mass; removed part mass | kg replacement product and kg spent lamp per reference service life | `eu-mdr-2017-745` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference apparatus | Preserve model, configuration revision, intended purpose, radiation type, wavelength band, source technology, installed source count, and market state; do not combine incompatible variants without weights. | product specification, technical documentation, release record, and `un-cpc-3-0-structure-2025`; `iec-60601-2-57-2023`; `eu-mdr-2017-745` |
| `dq_completeness` | manufacturing foreground | Reconcile BOM, accepted output, component issues, packaging, electricity, water, rejects, and any additional site-specific product, waste, or elementary flows. Explain every exclusion. | BOM reconciliation, utility reconciliation, release report, and `eu-pef-2021-2279` |
| `dq_temporal` | foreground records | Use a representative continuous 12-month period or all production when the product has been manufactured for less than 12 months; disclose exceptional campaigns, shutdowns, and substitutions. | reporting-period statement and production calendar |
| `dq_measurement` | measured and calculated rows | Retain meter and scale calibration, raw units, conversions, allocation drivers, and calculation workbooks so each normalized value is reproducible. | calibration certificates, raw records, and calculation review |
| `dq_use_scenario` | use and maintenance | Align operating modes, utilization, cleaning, maintenance, replacement, service life, and electricity geography to one internally consistent intended-use scenario. | instructions for use, measured test protocol, service plan, and scenario approval |
| `dq_end_of_life` | waste scenario | State jurisdiction, collection route, contamination status, lamp hazardous-substance status, downstream treatment datasets, and allocation convention. | waste records and `eu-weee-2012-19`; `eu-mdr-2017-745` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | Fail validation when intended purpose, ultraviolet/infrared configuration, wavelength band, source technology, model, service-life basis, or market state is missing. | `un-cpc-3-0-structure-2025`; `iec-60601-2-57-2023`; `eu-mdr-2017-745` |
| `validate_reference_count` | normalization | Require exactly one released apparatus as the reference amount and require net mass plus packaged mass as separate metadata; lamp count cannot replace apparatus count. |  |
| `validate_atomic_rows` | inventory | Reject combined utilities, combined ultraviolet/infrared emitter rows, unspecified packaging, unspecified waste, or any row that cannot resolve to one concrete exchange. |  |
| `validate_variant_conditions` | inventory applicability | Require ultraviolet rows only for ultraviolet-containing configurations and infrared rows only for infrared-containing configurations; require an explicit zero or not-applicable record for demonstrably absent conditional flows. | `iec-60601-2-57-2023` |
| `validate_energy` | electricity | Require kWh source records, the exact 3.6 MJ/kWh conversion, electricity geography, and separate manufacturing, packaging, and use-stage values. |  |
| `validate_transport` | distribution | Require mass, distance, mode, vehicle or vessel class, and route for each included transport leg; do not merge road and sea services. | `eu-pef-2021-2279` |
| `validate_lifecycle_claim` | system boundary | Reject a cradle-to-grave claim unless distribution, use/maintenance, replacement, and end-of-life modules are complete or each exclusion is justified as not applicable to the declared configuration. | `eu-pef-2021-2279`; `eu-mdr-2017-745`; `eu-weee-2012-19` |
| `validate_uuid_gaps` | unresolved flow identity | Keep every unresolved UUID explicit and prevent substitution of rejected broad, mismatched, or unspecified candidates. |  |
| `validate_no_external_ranges` | quantitative evidence | Treat all amounts as foreground collection or calculation requirements until at least two independent, original-text-verified, boundary-compatible sources or reviewed foreground datasets justify a range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground data package for one declared ultraviolet or infrared medical, surgical, dental, or veterinary apparatus configuration |
| downstream_use | `secondary_dataset` for a reviewed product study; `background_dataset` only after representativeness, review, and aggregation are documented |
| allowed_use | Configuration-specific manufacturing comparison at a common factory-gate boundary; lifecycle modelling when all claimed conditional modules use a consistent utilization and geography; hotspot and improvement assessment with disclosed unresolved identities |
| excluded_use | Safety or regulatory certification; comparison of unlike intended purposes or optical performance without functional equivalence; use of a factory-gate package as cradle-to-grave; substitution of rejected UUID candidates; generic claims across ultraviolet and infrared technologies without weighting |
| required_metadata | PCR id and version; product model and revision; intended purpose; radiation type; wavelength and radiant-performance metric; source technology; production sites and period; net and packaged mass; supplied accessories; packaging; included lifecycle modules; electricity geography; distribution route; utilization; cleaning; maintenance; replacement; service life; end-of-life geography; upstream dataset versions; allocation and cut-off decisions |
| required_quality_disclosure | Foreground coverage; BOM and output reconciliation; meter and scale calibration; supplier-data coverage; temporal, geographical, and technological representativeness; allocation drivers; assumptions; unresolved UUIDs; unresolved range evidence; scenario sensitivity; reviewer and review date |
| update_trigger | Change in intended purpose, radiation type, source technology, optical performance, product configuration or BOM, assembly or packaging site, firmware/control behavior affecting energy, cleaning or sterilization instructions, service life, replacement regime, distribution route, electricity mix, end-of-life route, or a material change in foreground data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, code 48122, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official classification title, hierarchy, and assigned product identity context |
| `iec-60601-2-57-2023` | `standard` | IEC 60601-2-57:2023, Medical electrical equipment — Part 2-57: Particular requirements for the basic safety and essential performance of non-laser light source equipment intended for therapeutic, diagnostic, monitoring, cosmetic and aesthetic use, https://webstore.iec.ch/en/publication/73147 (retrieved 2026-09-06) | Non-laser optical-radiation scope, intended-use distinction, wavelength and performance qualifiers, and ultraviolet/infrared configuration rules |
| `iec-62471-6-2022` | `standard` | IEC 62471-6:2022, Photobiological safety of lamps and lamp systems — Part 6: Ultraviolet lamp products, https://webstore.iec.ch/en/publication/59543 (retrieved 2026-09-06) | Ultraviolet lamp-product identity, source-technology breadth, risk-group and user-information context; no inventory range derived |
| `eu-mdr-2017-745` | `official_guidance` | Regulation (EU) 2017/745 on medical devices, Annexes I and II, https://op.europa.eu/o/opportal-service/download-handler?identifier=83bdc18f-315d-11e7-9412-01aa75ed71a1&format=xhtml&language=en&productionSystem=cellar&part= (retrieved 2026-09-07) | Intended-purpose and configuration records; installation, calibration, maintenance, cleaning/disinfection, consumable replacement, emitted-radiation, and safe-disposal disclosures |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-09-06) | Functional-unit structure, lifecycle stages, foreground data, transport calculation, allocation hierarchy, completeness, data quality, reporting, and validation |
| `eu-weee-2012-19` | `official_guidance` | Directive 2012/19/EU on waste electrical and electronic equipment, consolidated 8 April 2024, https://eur-lex.europa.eu/eli/dir/2012/19/2024-04-08/eng (retrieved 2026-09-06) | Conditional electrical-equipment end-of-life boundary, separate collection, contamination exception, treatment, and recovery/recycling records |
