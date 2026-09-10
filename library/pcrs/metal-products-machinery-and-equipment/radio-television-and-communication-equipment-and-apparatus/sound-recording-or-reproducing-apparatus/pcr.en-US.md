---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.sound-recording-or-reproducing-apparatus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sound recording or reproducing apparatus

## 1. Scope and Applicability

This PCR governs foreground data packages for finished apparatus whose primary function is recording sound, reproducing recorded sound, or both. It covers consumer electronics, professional audio apparatus, and digital-content apparatus within CPC 3.0 class 47321. A dataset shall identify its actual product configuration; a single model, technology, or media format shall not be used as an unqualified proxy for the full category.

The required subtype declaration distinguishes recording, playback, or combined function; portable or fixed installation; analog, digital, or hybrid signal architecture; and internal storage, removable media, both, or an external/streamed source without recording storage. The bill of materials and power profile shall separately disclose audio electronics, drive or media-handling and storage hardware, display and control hardware, battery and power subsystem, and enclosure. Zero or not-applicable entries shall be explicit.

Standalone loudspeakers, headphones, microphones, audio-frequency amplifiers, mobile phones, tablets, general-purpose computers, video recording or reproducing apparatus, radio-broadcast receivers, parts, blank or recorded media, and sound-recording services are outside this PCR unless they are integral components crossing the boundary of a covered apparatus. Regulatory sources cited here apply only in their jurisdictions; they do not redefine the global CPC product boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.sound-recording-or-reproducing-apparatus |
| classification_refs | CPC 3.0: 47321, Sound recording or reproducing apparatus (exact) |
| covered_products | Finished consumer, professional, or digital-content apparatus whose primary function is sound recording, sound reproduction, or both, including portable and fixed, analog, digital, and hybrid variants using internal storage, removable media, or an external/streamed source. |
| excluded_products | Standalone loudspeakers, headphones, microphones, amplifiers, mobile phones, tablets, general computers, video apparatus, broadcast receivers, parts, media, services, and a single narrow player model used as a proxy for the category. |
| representative_product | The actual declared apparatus or production-weighted family satisfying CPC 47321; no default model represents the category. |
| production_route | Purchased materials, components, and subassemblies; electronics and mechanical integration; firmware or control configuration where present; functional and electrical testing; finishing and packaging. |
| market_state | Finished conforming apparatus at the producer gate; new, refurbished, or remanufactured market state shall be declared and shall not be mixed without separate results. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished sound recording or reproducing apparatus with the declared product subtype and included components. |
| How much | 1 kg net mass of conforming finished apparatus at the producer gate. |
| How well | Passes the manufacturer's declared recording and/or playback function and applicable electrical, acoustic, storage/media, control, and safety acceptance tests; the tested functions and acceptance criteria are disclosed. |
| How long or cycle | One producer-gate delivery of finished apparatus; design life, warranty, expected service life, duty cycle, and replacement assumptions are declared separately when use or life-cycle results are reported. |
| reference_flow_link | Output row `finished_apparatus` of process `final_test_packaging`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sound recording or reproducing apparatus `cf3287f1-47c4-472c-86ab-a9e5ac93a858` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | primary function: recording, playback, or both; portability: portable or fixed; signal architecture: analog, digital, or hybrid; media/storage configuration: internal storage, removable media, both, or external/streamed source without recording storage; consumer or professional intended use; power architecture: mains, external power supply, replaceable battery, integrated rechargeable battery, or combination; audio electronics mass; drive/media-handling mass; storage hardware mass; display/control mass; battery mass and chemistry or explicit not applicable; power-supply mass and type; enclosure mass and material; other included component mass; net product mass; included accessories; recording/playback/idle/standby/auto-power-down modes available; measured mode power and test conditions; production geography, technology, and reference period. |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The net apparatus mass includes installed components, including an integrated battery, but excludes separate transport packaging and optional detachable accessories not necessary for the declared normal function. Any included cable, external power supply, remote control, removable battery, or bundled medium shall be identified and its treatment in the reference mass stated.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the conforming net finished output to exactly 1 kg. Retain measured unit count and average mass per unit so unit-based product records can be reconciled to mass. |
| `component_mass` | Audio electronics, drive/storage, display/control, battery/power, enclosure, other components, scrap, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet or as-received mass consistently. Do not infer missing component-group masses from a single model; measure or obtain BOM and supplier records, and declare exclusions. |
| `electrical_energy` | Manufacturing and use-stage electricity | Energy | kWh | Derive energy from calibrated meters or power integrated over time. Record voltage, frequency, meter boundary, test load or signal, duration, mode, and external-power-supply treatment. |
| `operating_power` | Recording, playback/decoding, idle, standby, and auto-power-down modes | Power | W | Measure only modes supported by the declared subtype, using documented stable conditions and IEC 62087-6 procedures where applicable. Never substitute rated input power for measured operating power without labeling it as such and excluding it from calculated use energy. |
| `service_time` | Optional use-stage profile | Time | h | Report hours by mode and reference period. Do not combine mode power with an undisclosed duty cycle or lifetime. |

## 5. System Boundary

The required foreground boundary is cradle-to-producer-gate for the finished apparatus. Purchased materials, electronic parts, drives, storage devices, displays, controls, batteries, power supplies, enclosures, cables, and other subassemblies cross the starting boundary as product inputs. The foreground includes assembly and integration, software or firmware loading when part of production, functional and electrical tests, rework and yield losses, on-site utilities, direct releases, and packaging. Upstream production of purchased inputs is linked through supplier-specific or fit-for-purpose secondary datasets rather than silently absorbed into a generic apparatus proxy.

Use and end-of-life modules are conditional and shall be added for cradle-to-grave claims or comparisons affected by operational energy, lifetime, repair, battery replacement, storage/media replacement, or treatment route. Their assumptions and results remain separately visible from producer-gate manufacturing.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, named components and subassemblies, energy, water, consumables, and packaging delivered to the declared manufacturing sites. |
| starting_condition_role | Upstream product inputs to foreground assembly, integration, test, finishing, and packaging. |
| product_classification_scope | CPC 3.0 code 47321 only, constrained by primary sound recording/reproduction function and the required subtype qualifiers. |
| recursive_input_rule | If a same-category apparatus or intermediate audio-equipment unit is used as an input, keep its supplied identity, mass, function, and upstream dataset link explicit; do not relabel it as the study output or recursively apply this PCR without a separately justified boundary. |
| upstream_dataset_requirement | Prefer supplier-specific component data. Otherwise select secondary data matching component technology, material, geography, time, and production route, and disclose every mismatch and cut-off. |
| disclosure | Declare sites, assembly depth, purchased-versus-made component groups, product subtype, included accessories, BOM coverage, test boundary, packaging, yield, allocation, use profile if any, end-of-life scenario if any, and data gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | Required manufacturing profile | Include raw-material and component supply links plus foreground assembly, integration, testing, rework, utilities, direct releases, waste, and packaging up to the producer gate. Keep purchased-input production distinguishable from foreground operations. | `eu-pef-2021`; `itu-l-1410-2024` |
| `sb_component_groups` | Product composition | Report audio electronics, drive/media-handling, storage, display/control, battery, power supply, enclosure, and other included components as separate groups, including explicit zero or not-applicable values. | `iec-62474-2018` |
| `sb_test_and_rework` | Manufacturing sites | Include functional test, electrical test, firmware/configuration operations, calibration where relevant, rework, reject handling, and associated energy and materials. | `eu-pef-2021` |
| `sb_use_profile` | Cradle-to-grave or use-sensitive study | Model supported recording, playback/decoding, idle, standby, and auto-power-down modes separately with measured power, hours, lifetime, and electricity mix; do not impose unsupported modes. | `iec-62087-6`; `itu-l-1410-2024` |
| `sb_end_of_life` | Cradle-to-grave study | Keep collection, preparation for reuse or repair, dismantling, battery removal, treatment, recycling, recovery, and final disposal assumptions explicit and region-specific. | `itu-l-1410-2024`; `eu-weee-2012`; `eu-batteries-2023` |
| `sb_no_proxy_collapse` | Dataset selection and interpretation | Do not use a standalone speaker, amplifier, phone, general computer, video apparatus, intermediate audio-equipment unit, or one narrow player model as a proxy for the full CPC 47321 category. | `unsd-cpc-3` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_supply_bom` | Component supply and BOM control | required | Always; zero and not-applicable component groups remain declared | Establish category configuration and upstream component inputs | 1 kg released component set for finished-output normalization |
| `apparatus_assembly` | Electronics and mechanical assembly | required | Always | Integrate audio electronics, drive/storage, display/control, power, and enclosure systems | kg assembled apparatus transferred to final test |
| `final_test_packaging` | Configuration, final test, finishing, and packaging | required | Always | Produce conforming finished reference product and record rejects | 1 kg conforming net finished apparatus |
| `use_power_profile` | Use-stage power profile | conditional | Required for cradle-to-grave results or claims materially affected by operational energy | Convert measured mode power and declared duty cycle to use electricity | declared apparatus service hours per reference period and lifetime |
| `end_of_life` | End-of-life treatment scenario | conditional | Required for cradle-to-grave results | Model region- and composition-specific treatment without hiding recycling assumptions | 1 kg discarded apparatus entering the declared collection route |

### Process: Component supply and BOM control (`component_supply_bom`)

#### Inputs

##### Product flows

###### Audio electronics (`audio_electronics`)

Record populated and bare circuit boards, integrated circuits, signal converters, audio processors, connectors, passive parts, and other audio-electronic content crossing the site boundary. Quantity comes from the product BOM, part weights, receipts, or supplier declarations.

- Selected flow: Product-specific audio-electronics component or subassembly flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum verified quantity times part mass for audio-electronics items attributable to the declared product output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `iec-62474-2018`

###### Drive and media-handling hardware (`drive_media_hardware`)

Record motors, transports, optical or magnetic heads, decks, trays, mechanical media interfaces, and related hardware. Enter zero or not applicable for designs without such hardware.

- Selected flow: Product-specific drive or media-handling component flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum verified BOM quantities and part masses assigned to drive and media-handling hardware.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `iec-62474-2018`

###### Internal storage hardware (`storage_hardware`)

Record installed flash, solid-state, magnetic, or other storage hardware separately from signal-processing electronics. Enter zero or not applicable when content is only received from removable or external media.

- Selected flow: Product-specific storage-hardware flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum verified BOM quantities and part masses assigned to internal storage hardware.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `iec-62474-2018`

###### Display and control hardware (`display_control_hardware`)

Record displays, touch panels, switches, keys, knobs, indicators, control boards, remote controls included in the reference product, and their mechanical support.

- Selected flow: Product-specific display and control component flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum verified BOM quantities and part masses assigned to display and control hardware.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `iec-62474-2018`

###### Battery subsystem (`battery_subsystem`)

Record installed or included batteries, cells, battery-management hardware, holders, and packs; declare chemistry, capacity, mass, removability, and replacement assumption. Enter zero or not applicable for apparatus without a battery.

- Selected flow: Product-specific battery or battery-pack flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured or supplier-declared mass of included battery subsystem attributable to the reference output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `iec-62474-2018`; `eu-batteries-2023`

###### Power-supply subsystem (`power_supply_subsystem`)

Record internal power supplies, included external adapters, chargers, converters, transformers, power cords, and power-management hardware; state whether each item is included in reference mass.

- Selected flow: Product-specific power-supply component or subassembly flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum verified masses of included power-supply hardware attributable to the reference output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `iec-62474-2018`

###### Enclosure and structural hardware (`enclosure_hardware`)

Record housing panels, frames, fasteners, feet, seals, heat sinks, acoustic or vibration treatments, and other structural parts by material where records permit.

- Selected flow: Product-specific enclosure and structural-component flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum verified BOM quantities and masses assigned to enclosure and structural hardware.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `iec-62474-2018`

###### Other included components and accessories (`other_components`)

Record included cables, antennas, internal transducers, integrated speakers or amplifiers, manuals, and required accessories not assigned above. Integrated audio-output hardware remains a component of the covered apparatus and shall not be treated as a standalone category proxy.

- Selected flow: Product-specific other component or included-accessory flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum verified BOM quantities and masses for all other items included in the declared reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `iec-62474-2018`

##### Waste flows

###### Incoming packaging waste (`incoming_packaging_waste`)

Record packaging removed from purchased components and its measured treatment destination.

- Selected flow: Site-specific segregated packaging waste flow by material and treatment route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured incoming packaging waste leaving BOM-control and kitting operations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-2021`

##### Elementary flows

#### Outputs

##### Product flows

###### Released component set (`released_component_set`)

This intermediate output transfers the reconciled component set to assembly without creating a second finished-product identity.

- Selected flow: Product-specific released component-set intermediate flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum accepted component-group masses after incoming rejects and packaging are excluded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Electronics and mechanical assembly (`apparatus_assembly`)

#### Inputs

##### Product flows

###### Released components (`assembly_components`)

Record the released component set consumed in electronics, mechanical, drive, storage, display/control, battery/power, and enclosure integration.

- Selected flow: Product-specific released component-set intermediate flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass from `released_component_set`, adjusted only for documented inventory changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `mass-balance-identity`

###### Assembly electricity (`assembly_electricity`)

Record metered electricity for board assembly when in scope, mechanical integration, cleaning, firmware loading, compressed-air generation allocated to the line, and supporting equipment.

- Selected flow: Electricity supply matching the declared site, voltage level, geography, and reference period
- Flow property / unit: Energy / kWh
- Amount rule: Metered line electricity minus documented non-product loads, allocated under section 7 and divided by accepted assembled output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_energy_output`
- Sources: `eu-pef-2021`

###### Assembly consumables (`assembly_consumables`)

Record solders, adhesives, coatings, cleaning agents, lubricants, fasteners, process gases, and other consumables from purchase and issue records; do not hide material process losses in the finished BOM.

- Selected flow: Substance- or product-specific assembly consumable flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus documented return to stock, normalized to accepted assembled output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_materials`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled apparatus (`assembled_apparatus`)

Record the mass of assembled apparatus transferred to configuration and final test, before final rejects and packaging.

- Selected flow: Product-specific assembled-apparatus intermediate flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted transfer mass at the assembly-to-test handoff.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_yield`
- Sources: `mass-balance-identity`

##### Waste flows

###### Assembly scrap and rejects (`assembly_scrap`)

Record board, component, metal, plastic, cable, battery, mixed electronic, and hazardous waste separately by measured mass and destination.

- Selected flow: Site-specific assembly waste flow by material, hazard class, and treatment route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured scrap and reject mass generated during the reporting period, net of documented reuse in the same process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-2021`

##### Elementary flows

###### Direct site emissions (`assembly_direct_emissions`)

Record measured or permitted releases from soldering, cleaning, coating, or other in-scope assembly operations by substance and compartment. Do not report upstream emissions from purchased electricity or materials as direct foreground releases.

- Selected flow: Substance-specific elementary flow to air, water, or soil
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented engineering calculation for the reporting period, normalized to accepted assembled output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021`

### Process: Configuration, final test, finishing, and packaging (`final_test_packaging`)

#### Inputs

##### Product flows

###### Assembled apparatus input (`test_input_apparatus`)

Record assembled apparatus entering software or firmware configuration, calibration where relevant, final functional test, finishing, and packing.

- Selected flow: Product-specific assembled-apparatus intermediate flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass received from `assembled_apparatus`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_yield`
- Sources: `mass-balance-identity`

###### Test and finishing electricity (`test_finishing_electricity`)

Record metered electricity for configuration, recording/playback tests, display/control tests, charging, burn-in when used, finishing, and packaging equipment.

- Selected flow: Electricity supply matching the declared site, voltage level, geography, and reference period
- Flow property / unit: Energy / kWh
- Amount rule: Metered test and finishing electricity allocated under section 7 and divided by conforming net finished output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_energy_output`
- Sources: `eu-pef-2021`

###### Outgoing packaging materials (`outgoing_packaging`)

Record primary, secondary, and tertiary packaging by material and mass. Packaging is outside the net reference mass but remains an inventory input when supplied with the product.

- Selected flow: Material-specific packaging product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued packaging quantity times measured or supplier-declared item mass, reconciled to packed output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished sound recording or reproducing apparatus (`finished_apparatus`)

This is the conforming reference product after declared recording and/or playback, control, storage/media, power, and safety acceptance tests.

- Selected flow: Sound recording or reproducing apparatus `cf3287f1-47c4-472c-86ab-a9e5ac93a858`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure conforming net output and normalize the published reference output to exactly 1 kg; retain unit count, average unit mass, subtype, and test pass records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_yield`
- Sources:

##### Waste flows

###### Final-test rejects and rework losses (`test_rejects`)

Record failed units, replaced parts, spent test media, battery rejects, and finishing or packaging waste by disposition. Returned-to-process rework is not a waste output unless it leaves the modeled process.

- Selected flow: Site-specific reject or waste flow by material, hazard class, and treatment route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured outbound reject and waste mass after subtracting documented same-process rework returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-2021`

##### Elementary flows

### Process: Use-stage power profile (`use_power_profile`)

#### Inputs

##### Product flows

###### Electricity during declared use (`use_electricity`)

Record electricity calculated separately for each supported operating mode from measured power and declared hours. Use the applicable regional electricity supply and include charging and external power supply losses inside the measured boundary when relevant.

- Selected flow: Electricity supply matching the declared use geography, voltage level, and reference period
- Flow property / unit: Energy / kWh
- Amount rule: Sum measured mode power times declared hours, divided by 1,000, over the declared reference period and lifetime; avoid double counting overlapping modes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared service profile of the apparatus represented by 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mode_power_service`
- Sources: `iec-62087-6`; `itu-l-1410-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Declared recording or playback service (`audio_service`)

Report the service as separate recording and/or playback hours with declared signal, media, load, volume or output condition, connectivity, and product availability assumptions. This service output does not replace the mass reference flow.

- Selected flow: Study-specific sound recording or playback service flow
- Flow property / unit: Time / h
- Amount rule: Declared hours by supported mode and reference period, linked to the measured mode-power record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared reference period and apparatus lifetime
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mode_power_service`
- Sources: `iec-62087-6`; `itu-l-1410-2024`

##### Waste flows

##### Elementary flows

### Process: End-of-life treatment scenario (`end_of_life`)

#### Inputs

##### Product flows

##### Waste flows

###### Discarded apparatus entering collection (`discarded_apparatus`)

Record the discarded product mass reaching the declared collection route after explicit lifetime, repair, reuse, storage, and collection-rate assumptions.

- Selected flow: Waste sound recording or reproducing apparatus, linked to the declared product composition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reference-product mass reaching the treatment system under the declared regional collection and lifetime scenario.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus placed on the market
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `itu-l-1410-2024`; `eu-weee-2012`; `eu-batteries-2023`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered materials and components (`recovered_outputs`)

Record verified outputs prepared for reuse, component recovery, recycling, or energy recovery separately. Potential recyclability is not a recovered output.

- Selected flow: Material- or component-specific recovered product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured treatment output or region- and technology-specific scenario amount, before application of the declared recycling allocation rule.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg discarded apparatus entering treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-weee-2012`

##### Waste flows

###### Residual treatment waste (`treatment_residuals`)

Record residual fractions sent to further treatment, incineration, or disposal, including separately removed batteries, circuit boards, hazardous components, and fluids where applicable.

- Selected flow: Treatment-specific residual waste flow by material and destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured or scenario-specific residual output mass reconciled with recovered outputs and direct releases.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg discarded apparatus entering treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-weee-2012`; `eu-batteries-2023`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | All multi-output or shared operations | First subdivide meters, BOM issues, labor or machine time, lines, test stations, and waste records by product or process. Use system expansion only when the substituted function and dataset are explicitly justified. | `eu-pef-2021` |
| `alloc_shared_line` | Shared assembly, test, building services, compressed air, and packaging operations | After subdivision is exhausted, allocate using a documented physical driver causally related to resource use, such as machine time, test time, metered energy, processed mass, or accepted units. Revenue allocation requires evidence that no physical relationship is defensible and shall be disclosed. | `eu-pef-2021` |
| `alloc_rework_scrap` | Rework, rejects, scrap, and yield loss | Attribute resources and waste to the product batch that caused them. Credit neither internal same-process recycling nor rework return as an avoided product; reconcile gross input, accepted output, internal return, and outbound waste. | `mass-balance-identity` |
| `alloc_recycling` | End-of-life recovery and recycled inputs | State the selected cut-off, recycled-content, end-of-life, substitution, or other allocation approach and apply it consistently. Report collection, sorting, treatment yields, substitution quality, and burdens or credits separately; do not claim credit from theoretical recyclability. | `eu-pef-2021`; `eu-weee-2012` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_mass` | `component_supply_bom` | All required component groups and released component set | BOM, part master, supplier declaration, receipt, and weighing record | product model/family; subtype qualifiers; part number; component group; material class; quantity; part mass; included accessory flag; battery chemistry/capacity/removability; supplier; origin; evidence revision | Reconcile engineering BOM to production BOM and procurement receipts; weigh missing high-mass parts; record explicit zero or not applicable by group | kg and unit count | Each material BOM revision and at least each reporting period | Same models and production period as output | All sites supplying or assembling included components | Sum quantity times verified part mass by component group; production-weight model variants only with disclosed production shares | Approved BOM revision, scale calibration, supplier declaration, receipt reconciliation, and unresolved-mass log |
| `cp_assembly_materials` | `apparatus_assembly` | Released components and assembly consumables | Material issue, return, inventory, recipe, and transfer records | material/part id; opening stock; issued amount; returned amount; closing stock; batch; line; output mass; date | Use mass balance over the shortest complete production period; distinguish installed material, process loss, and returned stock | kg | Per batch or monthly, whichever gives reliable reconciliation | Representative continuous production period, normally at least one month | Each included assembly site and line | Net issue = opening stock + receipts - closing stock - documented return; normalize to accepted output | Inventory ledger, issue tickets, transfer records, scales, and reconciliation residual |
| `cp_site_energy_output` | `apparatus_assembly`; `final_test_packaging` | Assembly, test, finishing, and packaging electricity | Submeter, equipment meter, runtime, and accepted-output records | meter id; start/end reading; interval; voltage; electricity source; line; machine hours; test hours; non-product load; accepted/rejected output mass | Prefer dedicated submeters; otherwise combine rated or measured equipment power with logged runtime and validate against site meter | kWh; h; kg | Meter interval or batch; aggregate monthly | Same period as material and output records | Each included site and shared utility system | Subtract documented out-of-scope loads; subdivide or allocate using section 7; divide by accepted output | Meter calibration, photos/export, runtime logs, site-bill reconciliation, and allocation worksheet |
| `cp_product_output_yield` | `apparatus_assembly`; `final_test_packaging` | Assembled transfer, conforming output, rejects, and rework | Production, weighing, serial, test, rework, and shipment records | product id; subtype; unit count; gross and net mass; accepted/rejected status; test result; rework loop; date; line | Reconcile unit counts and measured masses across assembly, test, rework, reject, and shipment records | kg and unit count | Per batch; aggregate monthly | Same period as inputs and energy | Each included site and final-test route | Sum only conforming net product in denominator; keep rework returns and outbound rejects separate | Calibrated scales, test logs, serial traceability, shipment record, and yield reconciliation |
| `cp_waste_records` | `component_supply_bom`; `apparatus_assembly`; `final_test_packaging` | Packaging waste, assembly scrap, rejects, and treatment route | Waste scale ticket, internal collection log, manifest, and contractor statement | waste type; component group; hazard class; gross/tare/net mass; destination; recovery/disposal route; date; site | Weigh segregated waste; for mixed waste use documented sorting study and disclose sampling uncertainty | kg | Each shipment, aggregated over reporting period | Same period as production | Each included site and contracted first destination | Sum net mass by waste type and destination; subtract documented same-process returns only | Scale tickets, legal manifests where applicable, contractor certificates, and mass reconciliation |
| `cp_direct_emissions` | `apparatus_assembly` | Direct releases | Continuous/periodic measurement, permit report, or engineering calculation | substance; compartment; concentration; flow; duration; method; detection limit; control efficiency; date | Use measured site releases where available; document equations and source parameters for engineering calculations | kg by substance | Per permit or measurement frequency, aligned to reporting period | Same production period or justified representative period | Each included emitting operation and site | Sum by substance and compartment; subdivide or allocate under section 7 | Laboratory report, instrument calibration, permit filing, and calculation record |
| `cp_packaging_records` | `final_test_packaging` | Outgoing packaging | Packaging BOM, purchase, issue, and weighing records | packaging id; material; quantity; item mass; recycled content; product model; shipment configuration | Reconcile packaging BOM with issues and packed-unit counts; weigh representative items where supplier mass is absent | kg and unit count | Each packaging revision and reporting period | Same shipped-product period | All included final packing sites | Sum quantity times item mass by material and packaging level | Packaging specification, scale record, issue ledger, and shipment reconciliation |
| `cp_mode_power_service` | `use_power_profile` | Mode power, service hours, charging, and lifetime | Laboratory measurement and declared scenario record | exact model/variant; firmware; input voltage/frequency; power supply; battery state; mode; signal/source/media; load/output setting; connectivity; display state; measured W; stabilization; duration; auto-power-down time; hours/year; years | Measure supported modes under documented stable conditions; use IEC 62087-6 procedures where applicable; construct transparent scenario from mode hours | W; h; kWh | Each power-relevant hardware/firmware revision and each scenario revision | Current product configuration and stated use reference period | Tested variants and declared use geography | Use production-weighted variants only with disclosed weights; compute each mode separately and sum without overlap | Accredited or controlled test report, calibrated meter, raw time series, firmware id, scenario source, and sensitivity analysis |
| `cp_end_of_life_scenario` | `end_of_life` | Collection, reuse, dismantling, recovery, and residuals | Regional statistics, treatment records, composition/BOM, and scenario assumptions | geography; year; lifetime; collection rate; reuse/repair share; battery removal; component removal; treatment route; material yield; recovered output; residual; substitution quality | Link treatment routes to declared composition; use measured operator data where available and otherwise disclose secondary-data representativeness | kg and fraction | Each scenario or major treatment/composition revision | Scenario year and product cohort stated | Declared market and treatment geography | Reconcile inputs to recovered outputs, residual waste, direct releases, and stock change; show allocation separately | Treatment operator record or official statistics, scenario citation, mass balance, and uncertainty/sensitivity record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_bom_group_mass` | Required component-group disclosures | For group g, m_g = sum(quantity_i × verified part_mass_i); normalize m_g by conforming net product mass. Keep unassigned BOM mass as an explicit unresolved group until corrected. | BOM quantity, part mass, included flag, conforming output mass | kg component group per kg reference product and BOM coverage | `iec-62474-2018`; `mass-balance-identity` |
| `calc_energy_intensity` | Assembly and final-test electricity | E_intensity = (metered electricity - documented out-of-scope electricity) × allocation share / conforming process output mass. | Meter readings, out-of-scope loads, allocation driver, accepted output | kWh per kg process output | `eu-pef-2021` |
| `calc_yield` | Assembly and final test | Yield = conforming output mass / gross input mass relevant to that stage. Report unit-count yield separately when average unit mass varies. | Gross relevant input, accepted output, rejects, rework returns | Mass yield and unit-count yield | `mass-balance-identity` |
| `calc_use_energy` | Optional use profile | E = sum(P_mode × h_mode) / 1,000, with P in W and h in hours; add separately measured charging or external-power losses only when not already inside mode measurements. | Measured power by supported mode, hours by mode, reference period, lifetime | kWh per reference period and lifetime | `iec-62087-6`; `itu-l-1410-2024` |
| `calc_mass_reconciliation` | Manufacturing and end-of-life processes | Residual = total mass inputs - product outputs - waste outputs - measured elementary mass outputs - documented stock change. Investigate rather than force residual to zero. | All mass-bearing inputs/outputs and stock change | Absolute and percentage mass-balance residual | `mass-balance-identity` |
| `calc_variant_weighting` | Product-family dataset | Weighted result = sum(production share_v × result_v); shares sum to 1 and each variant meets the category and qualifier requirements. Do not average different market states. | Variant-specific inventory and actual production shares | Production-weighted family result plus variant spread | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_completeness` | BOM, energy, output, waste, direct releases, use and end-of-life modules | State coverage for each required component group and process. Record explicit zero/not applicable, cut-offs, unresolved BOM mass, unmetered utilities, and omitted routes; absence of a record is not zero. | Coverage matrix, unresolved-item log, and mass/energy reconciliation |
| `dq_precision` | Measured and calculated foreground quantities | Retain instrument resolution, calibration, sampling approach, variability, allocation uncertainty, and calculation precision. Material discrepancies shall trigger correction or a documented limitation. | Calibration certificates, raw records, uncertainty or sensitivity calculation |
| `dq_temporal` | All datasets | Align inputs, energy, output, and waste to one declared representative period. Disclose older supplier, electricity, use, or treatment data and justify continued representativeness. | Dated source records, reporting-period statement, revision log |
| `dq_geographical` | Supply chain, manufacturing, use electricity, and end of life | Match each dataset to the actual or declared geography. Do not apply an EU regulatory or treatment scenario globally without a jurisdiction-specific assumption. | Site and supplier locations, electricity region, market/treatment geography, mismatch log |
| `dq_technological` | Product subtype and manufacturing route | Match recording/playback function, portability, signal architecture, storage/media, battery/power, display/control, and production technology. A single model may represent only itself unless production weighting is documented. | Configuration record, BOM revision, process route, variant weights, and test report |
| `dq_source_traceability` | Secondary and supplier data | Preserve source title, issuer, version/date, URL or dataset identifier, access date, dataset geography/technology, and transformation. Search snippets are not evidence. | Source register and calculation workbook |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference product | Confirm UUID `cf3287f1-47c4-472c-86ab-a9e5ac93a858`, state code 100, Product flow type, CPC 3.0 code 47321 semantics, Mass property UUID, Units of mass UUID, and kg reference unit. | `unsd-cpc-3` |
| `val_subtype_matrix` | Product metadata | Require recording/playback/both, portable/fixed, analog/digital/hybrid, internal/removable/both/external-or-streamed media configuration, consumer/professional use, and power architecture; reject undisclosed subtype values. | `unsd-cpc-3` |
| `val_component_groups` | BOM and inventory | Require separate audio electronics, drive/media, storage, display/control, battery, power supply, enclosure, and other component masses with evidence, explicit zero/not applicable, and included-accessory treatment. | `iec-62474-2018`; `eu-batteries-2023` |
| `val_mass_balance` | Each manufacturing and treatment stage | Reconcile mass inputs, product outputs, waste, measured direct releases, and stock change. Flag unexplained residuals; do not repair them with invented component amounts or category averages. | `mass-balance-identity` |
| `val_power_profile` | Use-sensitive dataset | Require exact tested variant, firmware, input conditions, mode definitions, signal/media/load, external-power boundary, measured W, mode hours, lifetime, and non-overlapping energy calculation. Rated input alone is insufficient. | `iec-62087-6`; `itu-l-1410-2024` |
| `val_functional_output` | Final product | Confirm the declared recording and/or playback functions and applicable storage/media, control, power, acoustic/electrical, and safety acceptance tests passed for the output denominator. | `iec-62087-6` |
| `val_no_category_proxy` | Dataset selection and family averaging | Reject standalone speakers, amplifiers, phones, general computers, video equipment, intermediate audio units, parts, or a narrow player model as an unqualified proxy for CPC 47321. | `unsd-cpc-3` |
| `val_allocation_and_recycling` | Shared operations, scrap, and end of life | Verify subdivision attempts, causal allocation drivers, yield attribution, and explicit recycling approach. Reject credits based solely on theoretical recyclability. | `eu-pef-2021`; `eu-weee-2012` |
| `val_source_quality` | All external and secondary evidence | Verify authoritative full-text source, stable reference, applicability, time/geography/technology fit, and explicit transformations. Treat unsupported quantities and search snippets as unavailable. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or transparently production-weighted foreground dataset for manufacturing a CPC 47321 sound recording or reproducing apparatus, with optional separate use and end-of-life modules. |
| downstream_use | Foreground data package supporting Tiangong `process` and `lifecyclemodel` projections, product LCAs, design comparisons within the same declared function, and supply-chain studies. |
| allowed_use | Use for the exact declared subtype, model, family, production route, geography, period, and market state after all required qualifiers, component groups, power facts, allocation, and quality limitations are disclosed. |
| excluded_use | Generic proxy for all audio equipment; proxy for a speaker, amplifier, phone, computer, video apparatus, intermediate unit, part, media, service, or an unrelated player model; comparative assertion with mismatched function, lifetime, service level, or system boundary. |
| required_metadata | Canonical PCR id; reference-flow UUID and unit chain; CPC reference; all subtype qualifiers; model/family and production shares; net and unit mass; included accessories; component-group masses; battery/power information; sites and period; manufacturing boundary; test criteria; packaging; yield; allocation; use and end-of-life scenario identifiers where present. |
| required_quality_disclosure | Primary-versus-secondary data shares; BOM coverage and unresolved mass; meter and output coverage; cut-offs; allocation drivers; temporal, geographical, and technological mismatches; variability and uncertainty; unsupported numerical values omitted; limitations of any use or treatment scenario. |
| update_trigger | Product architecture or function change; BOM, battery, power supply, display/control, drive/storage, enclosure, firmware power behavior, production route/site, energy source, packaging, allocation, use profile, lifetime, regulation, treatment route, or authoritative source revision that can materially change results or interpretation. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, current classification and structure, https://unstats.un.org/unsd/classifications/Econ/CPC | CPC 47321 identity and separation from video apparatus, standalone loudspeakers/amplifiers, parts, media, and services. |
| `iec-62087-6` | standard | IEC 62087-6:2015, Audio, video, and related equipment — Determination of power consumption — Part 6: Audio equipment, https://webstore.iec.ch/en/publication/22586 | Applicable audio-equipment power modes, stable measurement conditions, decoding/playback, idle, and auto-power-down testing. No numerical default is taken from the abstract. |
| `itu-l-1410-2024` | method_factor | ITU-T Recommendation L.1410 (11/2024), Methodology for environmental life cycle assessments of information and communication technology goods, networks and services, https://www.itu.int/epublications/zh/publication/itu-t-l-1410-2024-11-methodology-for-environmental-life-cycle-assessments-of-information-and-communication-technology-goods-networks-and-services | Life-cycle stages, realistic use scenario, service time, ICT-relevant digital/network-capable variants, manufacturing and end-of-life transparency. It is not used to classify non-ICT apparatus. |
| `eu-pef-2021` | method_factor | European Commission Recommendation on the use of Environmental Footprint methods, Annex I, https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf | Functional-unit dimensions, life-cycle boundary, company-specific BOM/energy/activity data, allocation hierarchy, data-quality criteria, and transparent calculation rules. |
| `iec-62474-2018` | standard | IEC 62474:2018, Material declaration for products of and for the electrotechnical industry, https://webstore.iec.ch/en/publication/29857 | BOM/material declaration structure and traceability for electronic component groups; not used as a quantitative inventory factor. |
| `eu-weee-2012` | official_guidance | Directive 2012/19/EU on waste electrical and electronic equipment, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012L0019 | EU-applicable consumer/professional EEE treatment, component/material identification, selective treatment, and separate handling of relevant components. |
| `eu-batteries-2023` | official_guidance | Regulation (EU) 2023/1542 concerning batteries and waste batteries, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32023R1542 | EU-applicable battery identification, removability/replacement information, and end-of-life separation; not applied outside its jurisdiction without disclosure. |
| `mass-balance-identity` | method_factor | Conservation-of-mass accounting identity; no external quantitative factor | BOM, process, yield, and treatment reconciliation. It supplies no category-average amount or QA threshold. |
