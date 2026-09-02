---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.line-telephone-sets-with-cordless-handsets
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Line telephone sets with cordless handsets

## 1. Scope and Applicability

This PCR applies to a complete fixed-line cordless telephone configuration placed on the market as one set: a base station connected to a landline telecommunications network, one or more radio-linked cordless handsets, the rechargeable batteries installed or supplied for those handsets, and all power supplies, charging cradles, cables and accessories supplied as necessary for normal operation. It covers household, office and public-communication applications and analogue, VoIP or hybrid landline network interfaces when the product remains a cordless line telephone set.

The declared configuration shall identify the base-station and handset count, radio standard and actual operating frequency band for the intended market, network interface, power-supply and charging arrangement, battery chemistry, capacity, standardized physical size and end-user replaceability, display, keypad, printed circuit boards, housings, acoustic components, cables, accessories and packaging. Packaging is inside the life-cycle boundary but outside the reference product mass.

This PCR excludes cellular or satellite mobile phones, corded-only telephone sets, Wi-Fi-only handsets without a landline-connected base station, independent base stations, independent charging cradles, separately sold additional handsets, network routers and switching equipment, and component-only products. A product with cellular connectivity is not included merely because it can relay a cellular call through a cordless base.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.line-telephone-sets-with-cordless-handsets |
| classification_refs | CPC 3.0: 47221, Line telephone sets with cordless handsets, exact semantic reference |
| covered_products | Complete base-station and cordless-handset sets for fixed landline voice communication, including multi-handset configurations and supplied charging equipment |
| excluded_products | Cellular or satellite phones; corded-only phones; Wi-Fi-only handsets; independent base stations, chargers or handsets; routers, switches and component-only products |
| representative_product | One market-ready fixed-line cordless telephone set with one declared base station, the declared handset count, replaceable rechargeable batteries, supplied power and charging equipment, and retail packaging |
| production_route | Supplier production of electronic and mechanical components; PCB assembly; housing, display, keypad and acoustic subassembly production; battery and power-supply production; final assembly, programming, testing and packaging |
| market_state | Finished, tested and packaged set ready for distribution; configuration, target market and network interface declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fixed-line voice communication provided by a complete cordless telephone set whose handset communicates by radio with the included landline-connected base station |
| How much | The service associated with 1 kg of complete reference product mass for the declared configuration |
| How well | The declared base and handset count, radio standard and band, network interface, charging arrangement, battery specification and replaceability, display/keypad functions and supplied accessories are preserved |
| How long or cycle | One declared reference service life and use profile; manufacturing, distribution, use and end-of-life results are normalized to 1 kg of reference product mass |
| reference_flow_link | 1 kg of Line telephone sets with cordless handsets `ec74af79-0aac-4d55-bf93-f30369e74bfb` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Line telephone sets with cordless handsets `ec74af79-0aac-4d55-bf93-f30369e74bfb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | base-station count; handset count; analogue, VoIP or hybrid landline interface; radio standard and operating frequency band; target market; external power-supply and charging-cradle configuration; rechargeable battery chemistry, capacity, standardized physical size, count and replaceability; display and keypad configuration; PCB count; housing materials; supplied cables and accessories; unpackaged product mass; packaging materials and masses; standby, call and charging power; reference service life and use profile |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every inventory result to 1 kg of complete unpackaged product. Include the base station, declared handsets, installed or supplied batteries, required power supplies, charging cradles, cables and supplied operating accessories; exclude packaging mass and record it separately. |
| `configuration_mass_reconciliation` | bill of materials and finished product | Mass | kg | Measure the accepted finished configuration and reconcile component and subassembly masses to the unpackaged set mass. Preserve the native measured masses before normalization and explain all residual mass. |
| `standby_power_measurement` | base station and every charging cradle | Power | W | Record factory-default average power separately for the base station with the charged handset on and off the base, and for every separate charging cradle with the charged handset on and, where measured, off the cradle. Record voltage, frequency, test method, stabilization and averaging interval. |
| `call_power_measurement` | base station, handset charging path and supplied power equipment | Power | W | Record average active call power for the declared connection and radio configuration, separately from standby and charging. Record whether the handset is on or off the cradle, call function, display state, audio mode and battery state. |
| `use_energy_conversion` | use-stage electricity | Energy | kWh | Calculate electricity as the sum over declared modes of measured power in W multiplied by mode duration in h and divided by 1,000. Keep base standby, separate-cradle standby, call operation and charging terms identifiable. |
| `packaging_mass_separation` | primary, secondary and transport packaging | Mass | kg | Record each packaging material and mass separately; do not add packaging to the 1 kg reference product mass. |

## 5. System Boundary

The required boundary is cradle-to-grave for the declared complete set. It includes raw-material and component production, PCB assembly, housing and keypad manufacture, display and acoustic subassemblies, rechargeable batteries, external power supplies and charging equipment, final assembly and testing, packaging, distribution, electricity during standby, calling and charging over the declared service life, replacement batteries and other declared replacement parts, collection, dismantling, recycling, recovery and final treatment.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified materials and supplier components at their production origin, with final-manufacturing-site records for assembly, testing and packaging |
| starting_condition_role | Cradle-to-grave electronic product system with primary foreground assembly data and traceable upstream component datasets |
| product_classification_scope | Complete fixed-line cordless telephone sets semantically equivalent to CPC 3.0 code 47221; classification is context, not canonical PCR identity |
| recursive_input_rule | If a complete same-category cordless telephone set crosses the boundary as an input, record it once as a traceable upstream product dataset and do not recursively expand the same PCR inside that dataset |
| upstream_dataset_requirement | Supplier-specific or technologically representative cradle-to-gate datasets are required for PCBs, display, keypad, housings, acoustic parts, batteries, power supplies, chargers, cables and packaging; identity, geography, technology and time shall be disclosed |
| disclosure | Declare configuration, included and excluded accessories, production sites, supplier-data substitutions, transport, radio and network interface, power modes and durations, service life, repairs and battery replacements, packaging and end-of-life scenario |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_lifecycle` | declared_product_system | Include manufacturing, distribution, installation where material, use and end-of-life stages; report any optional benefits and loads beyond the system boundary separately. | `pep-pcr-ed4-electrical-electronic`; `itu-t-l1410-2024` |
| `boundary_configuration_integrity` | reference_configuration | Model one internally consistent base-and-handset configuration. Do not combine a cordless set with cellular phones, corded-only phones or an independent base station. | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3` |
| `boundary_component_completeness` | manufacturing | Include the declared PCB, display, keypad, housing, acoustic, battery, power-supply, charging, cable, accessory and packaging inventories; justify any missing supplier dataset and retain its mass in the completeness check. | `pep-pcr-ed4-electrical-electronic`; `eu-2023-1670-cordless-phones`; `eu-weee-2012-19-annex-vii` |
| `boundary_use_modes` | use_stage | Include measured base and cradle standby, active call and battery charging electricity for the declared configuration and use profile; do not substitute a certification limit for measured foreground power. | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic` |
| `boundary_end_of_life` | end_of_life | Include separate handling of batteries, relevant circuit boards, displays, external cables and other regulated components before downstream recycling, recovery or disposal. | `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_assembly_and_packaging` | Component supply, final assembly, testing and packaging | required | Always | Foreground manufacturing with traceable upstream component production | 1 kg accepted unpackaged set |
| `distribution` | Distribution of the packaged set | required | Always; actual route or a disclosed scenario | Product distribution | tonne-km and packaging losses normalized to 1 kg product |
| `use_and_charging` | Standby, call operation, charging and replacement parts | required | Always over the declared service life | Use-stage electricity and maintenance | kWh and replacement-part mass per 1 kg product |
| `end_of_life` | Collection, dismantling and treatment | required | Always using the declared geographic scenario | End-of-life treatment | 1 kg discarded product plus replacement wastes |

### Process: Component supply, final assembly, testing and packaging (`final_assembly_and_packaging`)

#### Inputs

##### Product flows

###### Base-station and handset printed circuit board assemblies (`pcb_assemblies`)

Record every populated PCB assembly supplied to the base station and handsets, including board identity, count, mass, supplier process and production geography.

- Selected flow: Supplier-specific populated printed circuit board assemblies for the declared base station and handsets
- Flow property / unit: Mass / kg
- Amount rule: measured supplier and incoming-inspection mass by PCB assembly type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_bom`
- Sources: `pep-pcr-ed4-electrical-electronic`; `eu-weee-2012-19-annex-vii`

###### Display, keypad and acoustic subassemblies (`user_interface_subassemblies`)

Record the display, keypad or mechanical buttons, microphones, loudspeakers and associated flex circuits by base and handset location.

- Selected flow: Supplier-specific display, keypad, microphone and loudspeaker subassemblies
- Flow property / unit: Mass / kg
- Amount rule: measured bill-of-material and supplier mass for each included subassembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_bom`
- Sources: `eu-2023-1670-cordless-phones`; `pep-pcr-ed4-electrical-electronic`; `eu-weee-2012-19-annex-vii`

###### Plastic and other housings (`housings`)

Record base-station, handset and charging-cradle housings by polymer, filler, flame-retardant declaration, colour and manufacturing route; record metallic housing parts separately.

- Selected flow: Supplier-specific moulded housing parts and other enclosure materials
- Flow property / unit: Mass / kg
- Amount rule: measured incoming mass by material and part family
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_bom`
- Sources: `pep-pcr-ed4-electrical-electronic`; `eu-weee-2012-19-annex-vii`

###### Rechargeable handset batteries (`rechargeable_batteries`)

Record battery count, chemistry, nominal voltage, capacity, standardized physical size, mass, supplier and whether the battery is replaceable by the end-user with the stated tools.

- Selected flow: Supplier-specific rechargeable batteries for the declared cordless handsets
- Flow property / unit: Mass / kg
- Amount rule: measured supplied battery mass by chemistry and battery type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_bom`
- Sources: `eu-2023-1670-cordless-phones`; `eu-2023-1542-batteries`; `pep-pcr-ed4-electrical-electronic`

###### Power supplies, charging cradles, cables and supplied accessories (`power_and_accessories`)

Record each external power supply, integrated or separate charging cradle, line cord, network cable and supplied operating accessory for the declared configuration.

- Selected flow: Supplier-specific power, charging, cable and accessory components supplied with the set
- Flow property / unit: Mass / kg
- Amount rule: measured bill-of-material mass by component and configuration count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_bom`
- Sources: `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic`

###### Assembly and test electricity (`assembly_electricity`)

Record metered electricity for assembly, programming, functional testing, charging during test and packaging operations at the foreground site.

- Selected flow: Electricity supplied to the final manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: allocated metered electricity for normal production divided by accepted unpackaged product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_energy_and_waste`
- Sources: `pep-pcr-ed4-electrical-electronic`

###### Product packaging (`product_packaging`)

Record primary, secondary and transport packaging, inserts, labels and manuals by material and mass without adding them to the reference product mass.

- Selected flow: Configuration-specific packaging materials
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass by material for the packaged reference configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_bom`
- Sources: `pep-pcr-ed4-electrical-electronic`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted line telephone set with cordless handsets (`reference_product_output`)

The accepted unpackaged set is the quantitative reference output. Packaging is reported as a separate input and downstream waste.

- Selected flow: Line telephone sets with cordless handsets `ec74af79-0aac-4d55-bf93-f30369e74bfb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Assembly rejects and production waste (`assembly_rejects`)

Record rejected electronics, housings, batteries, cables and packaging scrap separately by material and treatment destination.

- Selected flow: Site-specific separated manufacturing waste streams
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by waste stream, net of documented rework returned to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy_and_waste`
- Sources: `pep-pcr-ed4-electrical-electronic`

##### Elementary flows

### Process: Distribution of the packaged set (`distribution`)

#### Inputs

##### Product flows

###### Distribution transport service (`distribution_transport`)

Record each actual transport leg for the packaged set from the final logistics platform to the place of use.

- Selected flow: Mode-specific freight transport service
- Flow property / unit: Transport service / tonne-km
- Amount rule: packaged shipment mass in tonnes multiplied by route distance in km for each transport leg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distribution_records`
- Sources: `pep-pcr-ed4-electrical-electronic`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Packaging discarded at delivery or installation (`distribution_packaging_waste`)

Record the destination and treatment of packaging discarded before product use.

- Selected flow: Separated packaging waste by material
- Flow property / unit: Mass / kg
- Amount rule: packaging input mass less documented reusable or returned packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg accepted unpackaged set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distribution_records`
- Sources: `pep-pcr-ed4-electrical-electronic`

##### Elementary flows

### Process: Standby, call operation, charging and replacement parts (`use_and_charging`)

#### Inputs

##### Product flows

###### Base-station networked standby electricity (`base_station_standby_electricity`)

Calculate electricity from measured base-station standby power and the declared hours in each standby configuration over the reference service life.

- Selected flow: Market-specific electricity supplied during base-station standby
- Flow property / unit: Energy / kWh
- Amount rule: sum of measured base standby power multiplied by hours in each handset-on-base and handset-off-base state, divided by 1,000
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: declared reference service life per 1 kg product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_power_mode_records`
- Sources: `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic`
- Range: EU networked-standby conformity screen for a shipped base station
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: W
  - Basis: average base-station networked standby power for an EU-regulated product, with or without a charged handset on the base
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-2023-1670-cordless-phones`

###### Separate charging-cradle standby electricity (`charging_cradle_standby_electricity`)

For every separate cradle without base-station functionality, calculate electricity from measured standby power and declared occupied and unoccupied hours.

- Selected flow: Market-specific electricity supplied during separate-cradle standby
- Flow property / unit: Energy / kWh
- Amount rule: sum over every cradle of measured standby power multiplied by hours in each charged-handset-on and handset-off state, divided by 1,000
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: declared reference service life per 1 kg product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_power_mode_records`
- Sources: `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic`
- Range: EU standby conformity screen for a separate cradle with a charged handset
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 0.6
  - Unit: W
  - Basis: average standby power per EU-regulated separate charging cradle with the charged handset on the cradle
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-2023-1670-cordless-phones`

###### Active call and battery-charging electricity (`call_and_charging_electricity`)

Record active call power and charging power separately and calculate their electricity from the declared call and charging durations. Do not infer these values from standby limits.

- Selected flow: Market-specific electricity supplied during calls and battery charging
- Flow property / unit: Energy / kWh
- Amount rule: sum of measured active-call and charging power multiplied by corresponding hours, divided by 1,000
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: declared reference service life per 1 kg product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_power_mode_records`
- Sources: `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic`

###### Replacement rechargeable batteries (`replacement_batteries`)

Include replacement batteries required by the declared service-life scenario and retain chemistry, capacity, standardized size and replacement evidence.

- Selected flow: Supplier-specific compatible replacement rechargeable battery
- Flow property / unit: Mass / kg
- Amount rule: measured battery mass multiplied by the documented number of replacements in the service-life scenario
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: declared reference service life per 1 kg product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_repair_and_replacement_records`
- Sources: `eu-2023-1670-cordless-phones`; `eu-2023-1542-batteries`; `pep-pcr-ed4-electrical-electronic`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent rechargeable batteries and replaced parts (`use_stage_replaced_waste`)

Record spent batteries and other replaced parts by type, mass, collection route and treatment destination.

- Selected flow: Spent batteries and replaced electronic parts by declared waste type
- Flow property / unit: Mass / kg
- Amount rule: measured replacement waste mass corresponding to the declared replacement inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: declared reference service life per 1 kg product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_repair_and_replacement_records`
- Sources: `eu-2023-1542-batteries`; `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic`

##### Elementary flows

### Process: Collection, dismantling and treatment (`end_of_life`)

#### Inputs

##### Product flows

###### End-of-life collection transport (`eol_collection_transport`)

Record transport from the collection point to dismantling and final treatment using the declared geography and routes.

- Selected flow: Mode-specific waste collection transport service
- Flow property / unit: Transport service / tonne-km
- Amount rule: transported waste mass in tonnes multiplied by route distance in km
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg discarded reference product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `pep-pcr-ed4-electrical-electronic`

##### Waste flows

###### Discarded cordless telephone set (`discarded_telephone_set`)

Record the complete discarded set entering treatment, net of parts documented as reused before waste treatment.

- Selected flow: Discarded line telephone set with cordless handsets
- Flow property / unit: Mass / kg
- Amount rule: 1 kg reference product less documented reuse, with replacement wastes linked separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg product placed on the market
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered material fractions (`recovered_material_fractions`)

Record recovered metal, plastic, glass and other material outputs after dismantling and treatment; report credits beyond the system boundary separately.

- Selected flow: Scenario-specific recovered material fractions
- Flow property / unit: Mass / kg
- Amount rule: measured or documented treatment yield by material fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg discarded reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic`

##### Waste flows

###### Batteries, circuit boards, displays, cables and regulated residuals (`regulated_eol_fractions`)

Record separately removed batteries, relevant PCBs, displays, external cables, brominated-flame-retardant plastics and final residues by mass and destination.

- Selected flow: Separately treated regulated electronic waste fractions
- Flow property / unit: Mass / kg
- Amount rule: measured dismantling output mass by regulated fraction and final treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg discarded reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground_manufacturing | Avoid allocation by separately metering assembly, test, packaging and waste processes for the declared product configuration wherever feasible. | `pep-pcr-ed4-electrical-electronic` |
| `allocation_physical` | shared_processes | When allocation cannot be avoided, use a physical relationship that represents the shared process, such as accepted product mass, board area, machine time or units produced, and document the choice. | `pep-pcr-ed4-electrical-electronic` |
| `allocation_economic_fallback` | shared_processes | Use economic allocation only when no defensible physical relationship exists; disclose the prices, period, currency and sensitivity of the result. | `pep-pcr-ed4-electrical-electronic` |
| `allocation_recycling` | end_of_life | Keep treatment burdens inside the declared end-of-life boundary and report benefits or loads from recovered materials beyond the system boundary separately; do not double count avoided production. | `pep-pcr-ed4-electrical-electronic` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_configuration_bom` | `final_assembly_and_packaging` | configuration, components and packaging | controlled BOM, supplier declaration and measured mass record | model and revision; base count; handset count; component and material identity; part and supplier; PCB count and mass; display/keypad/acoustic parts; housing material; battery chemistry, capacity, size, count and replaceability; power and charging equipment; cable/accessory count; product mass; packaging material and mass | Freeze one saleable configuration, verify against teardown or incoming inspection, weigh product and packaging separately, and reconcile the BOM | kg, count, V, Ah or Wh as applicable | each model revision and representative production batch | declared representative production period | every final assembly site and material supplier represented | normalize each mass to accepted unpackaged product kg; keep site and supplier strata before aggregation | signed BOM revision, scale calibration, supplier specification, teardown or incoming-inspection record and mass reconciliation |
| `cp_assembly_energy_and_waste` | `final_assembly_and_packaging` | assembly electricity and waste | meter, invoice, production and waste records | meter start and end; production quantity and mass; accepted output; rejects; rework; waste stream and destination | Submeter where feasible; otherwise allocate documented site records using the approved allocation rule | kWh, kg | each production reporting period | declared period representative of normal production | every final assembly and test site represented | subtract documented non-product loads where separately metered, allocate shared loads, and divide by accepted product mass | meter and scale calibration, invoice reconciliation, production logs and waste transfer records |
| `cp_distribution_records` | `distribution` | routes and packaging fate | shipment and logistics records | packaged mass; origin; destination; mode; distance; load factor; returned or reusable packaging; packaging treatment | Use actual shipment records; identify every leg and packaging handoff | kg, km, tonne-km | representative shipments and whenever routes change | declared sales and distribution period | target-market routes represented | calculate each leg separately and sum after normalization to unpackaged product kg | freight documents, route source, mass record and packaging return evidence |
| `cp_power_mode_records` | `use_and_charging` | standby, call and charging electricity | laboratory power test and use-profile record | base and cradle count; firmware and factory settings; landline interface; radio standard and frequency band; supply voltage and frequency; handset position; battery state; display/audio mode; standby, call and charging power; stabilization and averaging interval; hours by mode; service life; electricity geography | Measure the saleable configuration with calibrated instruments and retain separate results for base standby with handset on and off, each separate cradle, active call and charging | W, h, kWh | each hardware, firmware, power-supply or configuration revision | test date plus declared service-life use scenario | each target-market electrical and radio configuration represented | calculate mode electricity separately, sum over the service life, and divide by unpackaged product mass | test report, instrument calibration, configuration photographs, firmware record and use-scenario source |
| `cp_repair_and_replacement_records` | `use_and_charging` | batteries and replacement parts | service, warranty, supplier and scenario records | part type; battery chemistry, size, capacity and mass; replacement cause; replacement count; service-life timing; replaced-part destination | Use observed service records when available; otherwise declare the reviewed replacement scenario without presenting it as an observed rate | kg, count | each model and service-life scenario update | declared service life | target market and repair channel represented | multiply part mass by documented replacements and keep batteries separate from other parts | service logs, warranty summary, spare-part specification and scenario approval |
| `cp_end_of_life_scenario` | `end_of_life` | collection, dismantling and treatment | operator mass balance and route record | collection rate; transport; reuse; battery, PCB, display, cable and plastic separation; recovered fractions; residual treatment; geography | Prefer operator-specific data; otherwise use a documented geographically representative treatment scenario and disclose substitutions | kg, km, tonne-km | each treatment scenario or operator update | declared scenario reference period | market-specific collection and treatment system | reconcile incoming discarded mass with reuse, recovered outputs, regulated fractions, emissions and final residues | operator report, weighing records, permits, chain-of-custody documents and mass balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_component_normalization` | component and packaging rows | normalized amount = measured row amount divided by accepted unpackaged product mass; packaging remains a separate row | component mass, packaging mass, accepted product mass | kg per kg reference product | `pep-pcr-ed4-electrical-electronic` |
| `calc_assembly_energy` | assembly electricity | normalized electricity = allocated assembly, test and packaging electricity divided by accepted unpackaged product mass | metered kWh, allocation driver, accepted product mass | kWh per kg reference product | `pep-pcr-ed4-electrical-electronic` |
| `calc_distribution_service` | distribution transport | transport service = sum of packaged shipment mass in tonnes multiplied by route distance in km, divided by unpackaged product mass in kg | packaged mass, route distances and modes, unpackaged product mass | tonne-km per kg reference product | `pep-pcr-ed4-electrical-electronic` |
| `calc_use_electricity` | standby, call and charging electricity | lifetime kWh = sum over modes and devices of measured power in W multiplied by mode hours and divided by 1,000; report each term before summing | measured power by mode, device count, mode hours, service life, unpackaged product mass | kWh per kg reference product over the declared service life | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic` |
| `calc_eol_mass_balance` | end-of-life treatment | incoming discarded mass = reuse plus recovered products plus separately treated regulated fractions plus final residues, adjusted only for documented process additions or emissions | operator or scenario mass records | reconciled kg per kg discarded product | `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Freeze one model revision and saleable configuration; verify the exact product-flow UUID and all required qualifiers. | product label, BOM revision, configuration record and Tiangong identity reference |
| `dq_completeness` | manufacturing inventory | Account for every declared PCB, display, keypad, housing, acoustic part, battery, power supply, charger, cable, accessory and packaging item; identify missing supplier datasets without dropping their mass. | BOM-to-scale reconciliation, supplier dataset register and missing-data log |
| `dq_measurement` | mass, energy and power records | Use calibrated instruments, preserve native readings and units, and document conversions, sampling and allocation. | calibration certificates, raw readings and calculation workbook |
| `dq_temporal` | all foreground data | State the collection dates and demonstrate that the period represents normal production and operation; identify abnormal periods and substitutions. | dated production, test, shipment and treatment records |
| `dq_geography_technology` | upstream and scenario data | Match component technology, production geography, electricity market, radio variant, distribution and end-of-life system to the declared product and market. | supplier metadata, test configuration, route records and dataset metadata |
| `dq_use_scenario` | use stage | Keep measured power separate from assumed mode hours and service life; disclose the source and uncertainty of every use-profile term. | power test report, scenario approval and sensitivity record |
| `dq_eol` | end-of-life | Demonstrate mass balance and separate handling of batteries, relevant PCBs, displays, cables and regulated materials; avoid unsubstantiated recycling credits. | operator mass balance, chain of custody and treatment documentation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_configuration` | dataset_identity | Fail if the dataset mixes cellular phones, corded-only phones, independent base stations, independent cradles or separately sold handsets with the complete cordless line telephone set. | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3` |
| `validate_reference_flow` | reference_flow | Require product flow `ec74af79-0aac-4d55-bf93-f30369e74bfb`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and kg, with exactly 1 kg after normalization. |  |
| `validate_radio_and_network` | required_qualifiers | Require the base and handset count, landline interface, radio standard, operating frequency band and target market; reject a generic DECT label without the actual market band. | `etsi-en-300-175-1`; `eu-2023-1670-cordless-phones` |
| `validate_component_and_packaging_inventory` | manufacturing_inventory | Require explicit rows or traceable upstream datasets for PCB assemblies, display, keypad/buttons, housings, acoustic parts, batteries, power supplies, charging equipment, cables and packaging, with packaging mass separate from product mass. | `pep-pcr-ed4-electrical-electronic`; `eu-2023-1670-cordless-phones`; `eu-weee-2012-19-annex-vii` |
| `validate_power_modes` | use_stage | Require measured base standby, separate-cradle standby where present, active call and charging power, plus mode hours and service life; fail if standby limits or brochure values are substituted for measured lifetime electricity without disclosure. | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic` |
| `validate_eu_standby_limits` | eu_market_claim | For products declared compliant with Regulation (EU) 2023/1670, require base-station networked standby at or below 1 W and separate-cradle standby with a charged handset at or below 0.6 W; also retain the required test settings. | `eu-2023-1670-cordless-phones` |
| `validate_battery_replaceability` | battery_inventory | Require rechargeable battery chemistry, capacity, standardized physical size, count, mass and replacement method. For applicable EU market claims, verify the relevant end-user replacement and spare-part requirements rather than assuming compliance. | `eu-2023-1670-cordless-phones`; `eu-2023-1542-batteries` |
| `validate_eol_separation` | end_of_life | Require an end-of-life mass balance and separate treatment records for batteries, relevant PCBs, displays, external cables and any brominated-flame-retardant plastics or other regulated fractions present. | `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-specific foreground product-system dataset for a complete line telephone set with cordless handset or handsets |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA of household, office or public fixed-line cordless telephone configurations whose base, handset count, radio and network interface, power and charging arrangement, battery, components, packaging, service life and geography match the dataset |
| excluded_use | Cellular or satellite phones, corded-only phones, Wi-Fi-only handsets, independent base stations or cradles, separately sold additional handsets, routers, switches, component-only products, or configurations with materially different handset count, radio band, charging or battery design without adjustment |
| required_metadata | PCR id and version context; product-flow UUID; model and revision; base and handset count; network interface; radio standard and operating band; target market; power supplies and cradles; battery chemistry, capacity, size and replaceability; display, keypad, PCB and housing configuration; product and packaging mass; production sites; use profile; service life; replacements; transport and end-of-life scenario |
| required_quality_disclosure | Primary versus secondary data share; supplier dataset gaps; mass reconciliation; meter and scale calibration; allocation; temporal, geographic and technological representativeness; power test method; scenario sources; uncertainty and sensitivity; end-of-life mass balance |
| update_trigger | Change to hardware revision, base or handset count, PCB, display, keypad, housing, battery, power supply, charging arrangement, radio standard or band, firmware affecting power, packaging, production site, supplier dataset, use profile, service life, regulation, or end-of-life route |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-2023-1670-cordless-phones` | official_guidance | European Commission, consolidated Commission Regulation (EU) 2023/1670, ecodesign requirements for smartphones, other mobile phones, cordless phones and slate tablets, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:02023R1670-20250620, retrieved 2026-08-09 | Cordless-phone, base-station and charging-cradle scope; exclusions from cellular devices; standby limits and test settings; display, buttons, acoustic parts, batteries, chargers and cradles; standardized replaceable rechargeable batteries |
| `eu-2023-1542-batteries` | official_guidance | European Parliament and Council, Regulation (EU) 2023/1542 concerning batteries and waste batteries, Article 11, https://eur-lex.europa.eu/eli/reg/2023/1542/oj, retrieved 2026-08-09 | Portable-battery removability, replaceability, instructions and spare-part disclosure where applicable |
| `energy-star-telephony-v3` | official_guidance | U.S. EPA ENERGY STAR, Final Version 3.0 Telephony Program Requirements and Final Test Method, December 2013, https://www.energystar.gov/sites/default/files/specs/Telephony%20V3%20ENERGY%20STAR%20Program%20Requirements.pdf, retrieved 2026-08-09 | Base-and-handset configuration, additional-handset distinction, corded and cellular exclusions, standby and active-call mode definitions, representative configuration and power-test documentation |
| `etsi-en-300-175-1` | standard | ETSI EN 300 175-1 V2.5.1, Digital Enhanced Cordless Telecommunications Common Interface, Part 1: Overview, August 2013, https://www.etsi.org/deliver/etsi_en/300100_300199/30017501/02.05.01_60/en_30017501v020501p.pdf, retrieved 2026-08-09 | DECT radio-interface identity and the need to declare the actual regional operating frequency band rather than assume one universal band |
| `pep-pcr-ed4-electrical-electronic` | standard | PEP Ecopassport Program, PCR edition 4 for Electrical, Electronic and HVAC-R Products, 6 September 2021, https://pep-ecopassport.org/site/wp-content/uploads/2026/06/PCR-4-ed4-EN-2021-09-06-PCR-edition-4.pdf, retrieved 2026-08-09 | Cradle-to-grave stages, component and packaging coverage, use electricity, distribution, end-of-life, primary data, cut-off control, allocation, normalization and reporting |
| `eu-weee-2012-19-annex-vii` | official_guidance | European Parliament and Council, consolidated Directive 2012/19/EU on waste electrical and electronic equipment, Annex VII, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:02012L0019-20240408, retrieved 2026-08-09 | Separate end-of-life handling of batteries, relevant printed circuit boards, displays, external cables, brominated-flame-retardant plastics and other regulated fractions |
| `itu-t-l1410-2024` | standard | ITU-T Recommendation L.1410, Methodology for environmental life cycle assessments of information and communication technology goods, networks and services, November 2024, https://www.itu.int/rec/T-REC-L.1410-202411-I, retrieved 2026-08-09 | ICT-specific LCA framing, life-cycle inventory, data quality, uncertainty and reporting |
