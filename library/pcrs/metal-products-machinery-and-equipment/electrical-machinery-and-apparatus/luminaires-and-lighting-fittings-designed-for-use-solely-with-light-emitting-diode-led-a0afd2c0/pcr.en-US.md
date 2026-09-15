---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.luminaires-and-lighting-fittings-designed-for-use-solely-with-light-emitting-diode-led-a0afd2c0
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources

## 1. Scope and Applicability

This PCR applies to complete luminaires and lighting fittings that are designed to operate solely with LED light sources. A covered product distributes, filters, or transforms light and includes the structure and the parts needed to support, fix, protect, connect, thermally manage, and operate the LED light source. Integrated or manufacturer-specified control gear, LED modules, optical parts, wiring, seals, mounting parts, and supplied lighting-control accessories are included when required for the declared configuration.

The PCR covers indoor, outdoor, building, public-space, and road-lighting luminaires when the declared product is a complete marketable fitting. It excludes individual LED dies, packages, modules, lamps, drivers, power supplies, optics, housings, lamp parts, replacement components, non-LED or multi-technology luminaires, illuminated signs, portable self-powered lamps, vehicle lamps, and model-specific accessories sold independently. Emergency-lighting functions require additional applicable rules and must not be represented as ordinary lighting without disclosure.

The primary foreground result is a manufacturer-gate production dataset normalized to 1 kg of complete, tested, packaged-excluded luminaire product. Product count, outgoing luminous flux, on-mode power, assigned lifetime, replaceability, control configuration, and intended application are required qualifiers so that the production dataset can be converted into the lighting-service functional unit and combined with distribution, installation, use, maintenance, and end-of-life scenarios.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.luminaires-and-lighting-fittings-designed-for-use-solely-with-light-emitting-diode-led-a0afd2c0 |
| classification_refs | CPC 3.0 `46533`, exact |
| covered_products | Complete luminaires and lighting fittings designed solely for LED light sources, including fixed indoor luminaires, outdoor luminaires, building luminaires, street and road luminaires, and complete fittings with replaceable or non-replaceable LED light sources |
| excluded_products | LED dies, packages, modules, lamps, drivers or control gear sold alone; lamp parts; incomplete housings or optics; non-LED or mixed-light-source fittings; illuminated signs; portable self-powered lamps; vehicle lamps; specific commercial models represented as the whole category |
| representative_product | A complete grid-connected LED luminaire comprising structure or housing, thermal management, optical system, LED light source or module, driver or control gear, wiring and connectors, seals and fasteners, and any supplied control or mounting accessories |
| production_route | Component and subassembly supply or fabrication; luminaire assembly and wiring; functional, safety, electrical and photometric testing; final inspection and packaging at the manufacturer gate |
| market_state | Complete, functional, tested luminaire at the manufacturer gate; packaging is inventoried separately and is not part of the 1 kg reference product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce a complete and functional luminaire or lighting fitting designed solely for LED light sources at the manufacturer gate |
| How much | 1 kg of complete finished luminaire product, excluding packaging |
| How well | The declared configuration passes applicable luminaire safety and functional checks and has documented outgoing luminous flux, total on-mode power, assigned lifetime, LED replaceability, driver or control-gear configuration, and reference control settings |
| How long or cycle | One representative production period; retain the product data needed to convert the result to 1,000 lm of outgoing artificial luminous flux for 35,000 operating hours |
| reference_flow_link | `led_luminaire_finished_mass` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources `3253c9d6-cf81-41e6-8997-f59f437c3f2d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete luminaire configuration; product count per reference kg; net product mass excluding packaging; indoor, outdoor, building or road application; integrated or replaceable LED light source status; LED module identity; driver or control-gear identity and integration status; outgoing luminous flux in lm; total on-mode power in W at reference control settings; assigned lifetime in h and supporting method; correlated colour temperature; control and dimming functions; supply voltage; IP and IK ratings where applicable; manufacturing geography; manufacturer gate; production period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. A bare LED, LED module, driver, housing, optical part, or unspecified lighting product is not an acceptable reference product for this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | complete finished luminaire reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass of the complete functional luminaire excluding packaging. Calibrated weighing or reconciled component masses must support the value, and the product count represented by 1 kg must be retained. |
| `component_and_waste_mass` | material, component, packaging and waste records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record mass by material or component family and convert all production-period totals to kg per 1 kg finished luminaire. Do not merge packaging mass into product mass. |
| `outgoing_luminous_flux` | declared photometric performance | outgoing luminous flux | lm | Use luminaire output, not LED-package or LED-module flux. Record the test method, tested configuration, ambient and control settings, and test report identifier. |
| `luminaire_power` | complete luminaire in on mode | electrical power | W | Record total power of the complete declared lighting circuit, including integrated or required LED sources, driver or control gear, and operating control components, at declared reference control settings. |
| `assigned_lifetime` | declared complete luminaire configuration | operating time | h | Record assigned lifetime and its supporting test, projection, warranty, or technical declaration. Distinguish complete-luminaire lifetime from LED-module and driver lifetime and state replaceability. |
| `energy_records` | manufacturing and test electricity or fuel inputs | energy | kWh; MJ | Use metered energy or reconciled invoices and conversion factors. Keep electricity, thermal energy, and fuels separate before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | accepted_material_component_and_subassembly_lots |
| starting_condition_role | supplier-traceable inputs to complete LED-luminaire production |
| product_classification_scope | complete LED-only luminaires and lighting fittings; CPC 3.0 `46533` is classification context and does not include LED modules, drivers, lamp parts, or non-LED fittings |
| recursive_input_rule | A purchased input that is itself a complete CPC 46533 luminaire must be recorded as an upstream complete-luminaire dataset and disclosed; it must not be relabelled as an ordinary component or counted again as newly manufactured product |
| upstream_dataset_requirement | Supplier-specific or representative datasets are required for material and component production, inbound transport, and purchased subassemblies; dataset identity, geography, technology, recycled content claims, and data period must be retained |
| disclosure | Declare which parts are manufactured on site or purchased, the complete bill of materials, supplied accessories, integrated and replaceable elements, production sites, cut-offs, allocation, packaging, test rejects, and the downstream scenarios included or excluded |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_complete_product` | reference product and manufacturing boundary | Include the structure or housing, thermal and optical parts, LED light source or module, driver or control gear, wiring, connectors, seals, fasteners, and all accessories supplied or required for the declared complete configuration. A component-only system cannot conform. | `pep-ecopassport-psr-0014-2023`; `iec-60598-1-2024` |
| `sb_cradle_to_gate` | manufacturer-gate foreground dataset | Include upstream production and inbound transport of materials, components and subassemblies; on-site part preparation; assembly; wiring; finishing; testing; rework; production waste treatment; and primary and secondary packaging production. | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `sb_supplier_components` | purchased LED module, driver, control gear, PCB, optic, housing or other subassembly | Use upstream datasets for purchased components and do not replace a component inventory with only its delivered mass. Record supplier, technology, geography and recycled-content evidence when available. | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `sb_downstream_projection` | lifecyclemodel or cradle-to-grave result | When downstream stages are claimed, include distribution, installation items, electricity at declared power and control settings, maintenance and replacement of light sources and control gear, and end-of-life collection and treatment. Report manufacturing separately from use and end-of-life. | `pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources`; `eu-2012-19-weee` |
| `sb_cutoff_disclosure` | all foreground and upstream inventory | Do not omit a material, component, hazardous substance, energy input, direct release or waste stream merely because its mass is small when it may materially affect results, safety, toxicity, scarcity or end-of-life treatment. Every applied cut-off and its effect must be disclosed. | `pep-ecopassport-pcr-ed4-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_and_subassembly_supply` | Component and Subassembly Supply or Fabrication | required | Purchased items use supplier datasets; on-site fabrication uses site records | upstream and foreground component production | accepted component and subassembly output |
| `luminaire_assembly` | Luminaire Assembly, Wiring and Finishing | required | Always required for a complete luminaire | foreground manufacturing | assembled luminaire output |
| `functional_safety_photometric_testing` | Functional, Safety, Electrical and Photometric Testing | required | Always required; applicable tests depend on product and market | foreground quality assurance | conforming tested luminaire output |
| `final_packaging` | Final Inspection and Packaging | required | Always required for the manufacturer-gate dataset | foreground packaging | complete luminaire shipped from manufacturer gate |
| `distribution_installation_use_maintenance` | Distribution, Installation, Use and Maintenance Scenario | conditional | Required when a lifecyclemodel, lighting-service result, or downstream claim is produced | downstream scenario | declared complete-luminaire configuration over the scenario period |
| `end_of_life_treatment` | End-of-Life Collection and Treatment | conditional | Required when a cradle-to-grave or end-of-life result is produced | downstream scenario | used complete luminaire and replaced components entering treatment |

### Process: Component and Subassembly Supply or Fabrication (`component_and_subassembly_supply`)

#### Inputs

##### Product flows

###### Supplier-traceable bill of materials and component lots (`bom_component_inputs`)

Record each material and component family separately, including structure and housing materials, heat sinks, optical glass or polymers, reflectors and diffusers, LED modules or light sources, printed circuit assemblies, driver or control gear, wiring, connectors, seals, fasteners, sensors, controls, coatings, labels, and supplied mounting accessories.

- Selected flow: Supplier-specific material, component or subassembly flow matching the recorded item
- Flow property / unit: Mass / kg
- Amount rule: Received mass consumed in accepted production, corrected for returns and inventory change; component count must be converted with measured unit mass where mass invoices are unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted component and subassembly output and ultimately per 1 kg finished luminaire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_receipts`
- Sources: `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023`

###### Component fabrication energy (`component_fabrication_energy`)

Record metered electricity, fuel and purchased thermal energy for casting, forming, machining, moulding, coating, printed-circuit assembly, soldering, curing and other on-site component operations. Supplier operations represented by complete upstream datasets are not counted again.

- Selected flow: Site- and carrier-specific electricity, fuel or thermal-energy flow
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered process energy or an engineering allocation of reconciled facility energy to the declared production line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted component and subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `pep-ecopassport-pcr-ed4-2021`

#### Outputs

##### Product flows

###### Accepted component and subassembly set (`accepted_component_set`)

Record the accepted component and subassembly mass transferred to luminaire assembly, separated by the same families used in the bill of materials.

- Selected flow: Accepted luminaire component and subassembly set
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_output`
- Sources: `pep-ecopassport-psr-0014-2023`

##### Waste flows

###### Component fabrication scrap and rejects (`component_scrap_rejects`)

Record metal, polymer, glass, electronic, coating, solvent, sludge and mixed scrap separately by treatment route, including rejected purchased parts not returned to suppliers.

- Selected flow: Material- and treatment-specific manufacturing waste flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste dispatched from the process, reconciled with storage change and supplier returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted component and subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023`

##### Elementary flows

###### Direct component-fabrication releases (`component_direct_releases`)

Record measured or permit-reported direct emissions to air and water from on-site fabrication, finishing, coating, soldering, cleaning or wastewater treatment. Do not duplicate releases already included in purchased energy or supplier datasets.

- Selected flow: Substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: Stack, discharge, solvent-balance or permit record attributable to the declared process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted component and subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_releases`
- Sources: `pep-ecopassport-pcr-ed4-2021`

### Process: Luminaire Assembly, Wiring and Finishing (`luminaire_assembly`)

#### Inputs

##### Product flows

###### Accepted structure, optical, LED and control components (`assembly_component_inputs`)

Record the accepted component set entering assembly, including every item necessary to make the declared luminaire function as sold or specified.

- Selected flow: Accepted luminaire component and subassembly set
- Flow property / unit: Mass / kg
- Amount rule: Issued-to-production mass and count reconciled to accepted assembly output and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembled luminaire output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_material_issue`
- Sources: `pep-ecopassport-psr-0014-2023`

###### Assembly auxiliaries and consumables (`assembly_auxiliaries`)

Record solder, wire, connectors, thermal-interface materials, adhesives, sealants, lubricants, cleaning agents, coatings, labels and other consumables that cross the assembly boundary.

- Selected flow: Product-specific auxiliary-material flow
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued amount corrected for stock change, returns and separately recorded waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per assembled luminaire output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_materials`
- Sources: `pep-ecopassport-pcr-ed4-2021`

###### Assembly and finishing energy (`assembly_energy`)

Record electricity, fuel and thermal energy for assembly, wiring, fastening, sealing, curing, cleaning and finishing.

- Selected flow: Site- and carrier-specific electricity, fuel or thermal-energy flow
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered line energy or documented allocation of reconciled facility energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per assembled luminaire output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `pep-ecopassport-pcr-ed4-2021`

#### Outputs

##### Product flows

###### Assembled complete LED luminaire before final testing (`assembled_luminaire`)

Record the mass and count of complete assembled luminaires transferred to testing, including integrated or specified LED source and control gear.

- Selected flow: Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled assembled mass and accepted unit count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_output`
- Sources: `pep-ecopassport-psr-0014-2023`

##### Waste flows

###### Assembly scrap, rejects and cleaning waste (`assembly_waste`)

Record separated electronic, metal, polymer, glass, cable, solder, adhesive, solvent, wipe and mixed wastes, including rework losses that leave the process.

- Selected flow: Material- and treatment-specific assembly waste flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste and rejected-unit mass dispatched from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per assembled luminaire output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `pep-ecopassport-pcr-ed4-2021`

### Process: Functional, Safety, Electrical and Photometric Testing (`functional_safety_photometric_testing`)

#### Inputs

##### Product flows

###### Assembled luminaire entering test (`luminaire_entering_test`)

Record the mass and count of assembled complete luminaires submitted for functional, safety, electrical and photometric acceptance.

- Selected flow: Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- Flow property / unit: Mass / kg
- Amount rule: Tested mass and unit count from test-lot records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming tested luminaire output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_performance`
- Sources: `iec-60598-1-2024`; `pep-ecopassport-psr-0014-2023`

###### Test electricity (`test_electricity`)

Record electricity consumed during burn-in, safety, electrical, control-function and photometric tests that is not already included in facility allocation.

- Selected flow: Site-specific electricity supply flow
- Flow property / unit: Energy / kWh
- Amount rule: Metered test-bench electricity or tested power multiplied by recorded test duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conforming tested luminaire output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_performance`
- Sources: `iec-60598-1-2024`

#### Outputs

##### Product flows

###### Conforming tested complete LED luminaire (`conforming_tested_luminaire`)

Record the net product mass, accepted count, outgoing luminous flux, total on-mode power, control settings, assigned lifetime evidence and applicable safety or conformity report identifiers for the exact declared configuration.

- Selected flow: Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- Flow property / unit: Mass / kg
- Amount rule: Accepted tested net mass excluding packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_performance`
- Sources: `iec-60598-1-2024`; `pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources`

##### Waste flows

###### Test rejects and failed components (`test_rejects`)

Record rejected luminaires and failed LED modules, drivers, control gear and other replaced parts by mass and treatment route; units successfully reworked remain in the product balance and their added materials and energy are recorded.

- Selected flow: Product- and treatment-specific electronic equipment waste flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed failed units and parts leaving the test or rework system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conforming tested luminaire output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `pep-ecopassport-pcr-ed4-2021`

### Process: Final Inspection and Packaging (`final_packaging`)

#### Inputs

##### Product flows

###### Conforming tested luminaire entering packaging (`tested_luminaire_for_packaging`)

Record the complete conforming luminaire mass and count transferred to final inspection and packaging.

- Selected flow: Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- Flow property / unit: Mass / kg
- Amount rule: Transferred net product mass and count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finished luminaire at manufacturer gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `pep-ecopassport-psr-0014-2023`

###### Primary and secondary packaging (`packaging_materials`)

Record boxes, paper and plastic protection, films, foams, pallets, labels and manuals by material and mass; document reusable packaging cycles separately.

- Selected flow: Material-specific packaging flow
- Flow property / unit: Mass / kg
- Amount rule: Packaging issued per packed product, corrected for reuse and packaging scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finished luminaire at manufacturer gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023`

#### Outputs

##### Product flows

###### Complete finished LED luminaire at manufacturer gate (`finished_led_luminaire`)

This output is the reference product. Packaging is inventoried with the product system but excluded from the 1 kg product mass.

- Selected flow: Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output of 1 kg net complete luminaire, with product count retained
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

###### Packaging operation waste (`packaging_waste`)

Record damaged and trimmed cardboard, paper, film, foam, wood and other packaging waste by mass and treatment route.

- Selected flow: Material- and treatment-specific packaging waste flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed packaging waste from the declared packing operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per finished luminaire at manufacturer gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rejects`
- Sources: `pep-ecopassport-pcr-ed4-2021`

### Process: Distribution, Installation, Use and Maintenance Scenario (`distribution_installation_use_maintenance`)

#### Inputs

##### Product flows

###### Finished luminaire and installation items (`installed_luminaire_inputs`)

For a lifecycle projection, record the finished luminaire, actual distribution, remote power supply, fixing elements, connectors, mounting accessories and other manufacturer-required installation items not already delivered with the product.

- Selected flow: Finished complete LED luminaire and item-specific installation flows
- Flow property / unit: Mass / kg
- Amount rule: Scenario quantity derived from product mass, shipment and installation records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared complete-luminaire configuration or service reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distribution_installation`
- Sources: `pep-ecopassport-psr-0014-2023`

###### Use electricity and replacement components (`use_electricity_replacements`)

Record electricity for the complete luminaire at declared reference control settings and actual operating schedule, plus replacement LED light sources, drivers, control gear and other required maintenance items over the declared scenario.

- Selected flow: Geography- and voltage-specific electricity flow and exact replacement-component flows
- Flow property / unit: Energy / kWh; Mass / kg
- Amount rule: Calculate from recorded power, operating and standby hours, control schedule and component replacement records; do not use generic savings assumptions as foreground facts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared complete-luminaire configuration or service reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_maintenance`
- Sources: `pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources`

#### Outputs

##### Product flows

###### Documented lighting service and used luminaire (`lighting_service_and_used_luminaire`)

Retain the delivered outgoing luminous flux, operating time, power and control scenario together with the used luminaire mass transferred to end-of-life. This is a scenario output and does not replace the complete-luminaire product identity.

- Selected flow: Documented lighting-service record and complete used luminaire
- Flow property / unit: luminous flux / lm; operating time / h; Mass / kg
- Amount rule: Recorded or calculated service performance and used-product mass for the declared scenario
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared complete-luminaire configuration or service reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_maintenance`
- Sources: `pep-ecopassport-psr-0014-2023`

##### Waste flows

###### Installation and maintenance wastes (`installation_maintenance_waste`)

Record installation packaging, replaced LED sources or modules, drivers, control gear and other maintenance wastes by mass and actual treatment route.

- Selected flow: Material- and treatment-specific packaging or WEEE flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed or component-mass-derived waste from installation and maintenance records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared complete-luminaire configuration or service reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_use_maintenance`
- Sources: `pep-ecopassport-psr-0014-2023`; `eu-2012-19-weee`

### Process: End-of-Life Collection and Treatment (`end_of_life_treatment`)

#### Inputs

##### Waste flows

###### Used complete luminaire and replaced electrical parts (`used_luminaire_weee_input`)

Record the complete used luminaire and separately accumulated LED sources or modules, drivers, control gear and other electrical parts entering the actual collection and treatment system.

- Selected flow: Treatment-specific waste electrical and electronic equipment flow for luminaires and parts
- Flow property / unit: Mass / kg
- Amount rule: Scenario mass reconciled to installed product and maintenance replacements
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared complete-luminaire configuration or service reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life`
- Sources: `pep-ecopassport-psr-0014-2023`; `eu-2012-19-weee`

#### Outputs

##### Product flows

###### Recovered material outputs (`recovered_material_outputs`)

Record only material outputs that meet the declared end-of-waste boundary, separated by material and supported by treatment records. Keep optional substitution benefits outside the product-system inventory and report them separately.

- Selected flow: Material-specific recovered product flow
- Flow property / unit: Mass / kg
- Amount rule: Measured or operator-reported recovered mass after treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per treated used-luminaire mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life`
- Sources: `pep-ecopassport-pcr-ed4-2021`; `eu-2012-19-weee`

##### Waste flows

###### Final treatment residues (`end_of_life_residues`)

Record residues to recycling, energy recovery, incineration and landfill without using unverified generic rates in place of actual scenario evidence.

- Selected flow: Material- and treatment-specific final residue flow
- Flow property / unit: Mass / kg
- Amount rule: Treatment-operator mass balance by route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per treated used-luminaire mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life`
- Sources: `pep-ecopassport-psr-0014-2023`; `eu-2012-19-weee`

##### Elementary flows

###### Direct treatment releases (`end_of_life_direct_releases`)

Record treatment-facility direct emissions to air, water and soil when they are not already represented in the selected treatment datasets.

- Selected flow: Substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: Treatment-operator measurement, permit report or verified facility inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per treated used-luminaire mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life`
- Sources: `eu-2012-19-weee`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_where_possible` | multi-output foreground operations | Subdivide processes or use direct metering and physical tracking before applying allocation. Document the unallocated inventory and the reason subdivision is not feasible. | `pep-ecopassport-pcr-ed4-2021` |
| `alloc_coproduct_mass` | process that produces more than one valuable co-product | Allocate residual shared burdens by the mass of output co-products when direct assignment or subdivision is not feasible, and disclose output masses and the calculation. | `pep-ecopassport-psr-0014-2023` |
| `alloc_recycling_boundary` | production scrap and end-of-life recovery | Assign collection and treatment to the stage that generates the waste through the declared end-of-waste point. Do not subtract avoided virgin-material or energy burdens from the foreground inventory; report optional benefits beyond the boundary separately. | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `alloc_rework_and_rejects` | reworked and rejected luminaires or components | Assign added materials, energy and treatment to the production that generated the rework or reject. Returned supplier parts must be reconciled and must not be counted both as consumed input and on-site waste. | `pep-ecopassport-pcr-ed4-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_receipts` | `component_and_subassembly_supply` | material, component and subassembly inputs | ERP purchase, goods-receipt, BOM and supplier record | item id; supplier; site; quantity; unit; unit mass; material family; recycled content; returned quantity; opening and closing stock; upstream dataset ref | reconcile BOM issues, receipts, returns and stock change; verify representative unit masses | kg; item | per lot or receipt | representative production period, normally at least 12 consecutive months | every production and subcontracting site in scope | aggregate by item and site, then normalize to accepted component output and 1 kg finished product | approved BOM; invoice or receipt; calibrated scale record; supplier declaration; upstream dataset identity |
| `cp_process_energy` | `component_and_subassembly_supply`; `luminaire_assembly` | fabrication, assembly and finishing energy | meter, fuel delivery and utility invoice | meter id; carrier; start and end reading; fuel amount; conversion factor; line runtime; facility total; allocation driver | prefer submetering; otherwise reconcile invoices and allocate using documented causal driver | kWh; MJ | monthly and per campaign where available | same period as production output | each included site and line | sum by carrier and site, subtract excluded loads, allocate and normalize to process output | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_component_output` | `component_and_subassembly_supply` | accepted components and subassemblies | production and quality record | item id; accepted mass; accepted count; reject mass; date; destination | calibrated weighing or accepted count multiplied by verified unit mass | kg; item | per lot | representative production period | each included fabrication or supplier site | sum accepted output by family and reconcile to inputs and waste | scale calibration; quality-release record; unit-mass study |
| `cp_waste_and_rejects` | `component_and_subassembly_supply`; `luminaire_assembly`; `functional_safety_photometric_testing`; `final_packaging` | scrap, rejects and process waste | waste ticket, reject log and storage record | waste type; material; mass; treatment route; haulier; receiver; rejected item count; returned-to-supplier quantity; opening and closing storage | weigh dispatched waste and reconcile reject logs, returns and storage change | kg | per shipment and monthly | same period as production output | all included sites | aggregate by process, material and treatment route; normalize to accepted output | calibrated weighbridge; waste transfer note; receiver certificate; reject disposition record |
| `cp_direct_releases` | `component_and_subassembly_supply` | direct releases to air, water and soil | stack, discharge, solvent-balance and permit record | substance; compartment; measured concentration; flow; duration; calculated mass; method; detection limit | use facility monitoring or documented mass balance and isolate the declared process contribution | kg | as monitored and at least annually | same period as production output | every emitting site in scope | calculate mass by substance and allocate only with documented causal driver | laboratory report; permit report; monitoring calibration; mass-balance worksheet |
| `cp_assembly_material_issue` | `luminaire_assembly` | components issued and assembled product | work order, material issue and return record | work order; product configuration; item id; issued quantity; returned quantity; accepted unit count; product mass | reconcile issued and returned items to accepted assembly output | kg; item | per work order | representative production period | each assembly site | aggregate by configuration and site, then normalize to assembled output | controlled BOM; work-order closeout; scale record |
| `cp_auxiliary_materials` | `luminaire_assembly` | solder, adhesives, sealants, cleaning and other auxiliaries | purchase, issue and stock record | material id; amount; unit; stock change; returned amount; waste amount | reconcile purchases or issues with stock change and waste | kg | monthly or per campaign | representative production period | each assembly site | aggregate by material and normalize to assembled output | invoice; material issue; inventory reconciliation; safety data sheet |
| `cp_assembly_output` | `luminaire_assembly` | assembled complete luminaire | production completion record | configuration; accepted count; net unit mass; rework count; date | accepted count multiplied by verified unit mass or total calibrated weighing | kg; item | per lot | representative production period | each assembly site | sum accepted mass and count; reconcile to component inputs and waste | scale calibration; final assembly record; BOM reconciliation |
| `cp_test_performance` | `functional_safety_photometric_testing` | tested product, test electricity and declared performance | test-lot record and accredited or controlled test report | configuration; serial or lot id; tested count; pass/fail; test duration; power; outgoing luminous flux; control setting; supply voltage; CCT; IP/IK where applicable; lifetime evidence; report id | apply the relevant luminaire test method to the complete declared configuration; link results to production lots | kg; item; h; W; kWh; lm; K | per qualification and routine test plan | current product design and production period | each tested configuration and responsible laboratory | aggregate routine test energy and rejects; retain configuration-specific performance without averaging incompatible variants | laboratory accreditation or competence evidence; test method; equipment calibration; signed report; conformity record |
| `cp_packaging_records` | `final_packaging` | product and packaging at manufacturer gate | packaging BOM, issue, reuse and shipment record | packaging item; material; mass; units per product; reuse cycles; product count; net product mass; shipment date | weigh representative packaging items and reconcile issues to packed output | kg; item; reuse cycle | per packaging design and shipment period | representative production period | each packing site | aggregate by material, divide reusable packaging by documented uses, and normalize to 1 kg net product | packaging specification; scale record; issue record; reuse log |
| `cp_distribution_installation` | `distribution_installation_use_maintenance` | distribution and installation scenario | shipment and installation record | origin; destination; mode; distance; load factor; product and packaging mass; remote power supply; fixing and connector items; installation waste | use actual logistics and installation records or a separately identified justified scenario | kg; km; tkm | per route or project | declared scenario period | declared market and installation sites | calculate transport work and installed-item inventory per declared configuration | bill of lading; route evidence; installation specification; project record |
| `cp_use_maintenance` | `distribution_installation_use_maintenance` | use electricity, service and replacements | power test, operating schedule, control log and maintenance record | on-mode power; standby power; control setting; operating hours; outgoing luminous flux; assigned lifetime; component lifetime; replacement date and mass; electricity geography | combine complete-luminaire power at reference settings with recorded or explicitly scenario-defined operating hours; use actual maintenance records where available | W; kWh; h; lm; kg | continuous or per operating and maintenance event | declared service scenario | declared application and geography | calculate energy and replacements per configuration and service reference; keep measured facts separate from scenario assumptions | power and photometric test report; control-system log; maintenance order; component declaration |
| `cp_end_of_life` | `end_of_life_treatment` | collection, sorting, recovery and final residues | take-back, recycler and treatment record | collected mass; component or material category; transport; treatment route; recovered output; residue; destination; operator and permit | use actual scheme or operator mass balance; identify any separately modelled scenario | kg; km; tkm | per batch or reporting year | declared end-of-life scenario | declared market and treatment system | reconcile input mass to recovered outputs and residues and normalize to treated product | transfer note; treatment certificate; operator mass balance; permit; producer-responsibility evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_inventory_to_kg_product` | manufacturing inventory rows | normalized amount = attributable production-period amount / net accepted complete-luminaire mass in the same period | protocol records for input, output, waste or release; `cp_assembly_output`; `cp_packaging_records` | flow amount per 1 kg complete finished luminaire | `pep-ecopassport-pcr-ed4-2021` |
| `reconcile_product_mass` | complete product and packaging | reconcile component and auxiliary inputs to net product, production wastes, direct mass releases, returns and inventory change; packaging is reconciled separately and excluded from product mass | `cp_bom_component_receipts`; `cp_auxiliary_materials`; `cp_waste_and_rejects`; `cp_direct_releases`; `cp_packaging_records` | documented product and packaging mass balances | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `calculate_test_electricity` | testing process | test electricity (kWh) = complete-luminaire electrical power (kW) x energized test duration (h), plus separately metered test-bench auxiliaries | `cp_test_performance` | kWh test electricity per conforming output | `iec-60598-1-2024` |
| `convert_to_lighting_service_reference` | downstream comparative service result | service-equivalent product mass = product mass per declared configuration x (1,000 lm / outgoing luminaire flux in lm) x (35,000 h / assigned luminaire lifetime in h); apply stage-specific inventories without mixing manufacturing, use and end-of-life | `cp_test_performance`; `cp_packaging_records`; `cp_use_maintenance` | product quantity and stage inventories per 1,000 lm for 35,000 h | `pep-ecopassport-psr-0014-2023` |
| `calculate_use_electricity` | downstream use scenario | use electricity = sum over operating modes of complete-luminaire power (kW) x recorded or declared hours in that mode; include required driver, control gear and control components and state reference control settings | `cp_test_performance`; `cp_use_maintenance` | kWh per declared configuration or service reference | `pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources` |
| `calculate_replacements` | downstream maintenance scenario | calculate replacement quantities from documented component lifetimes, replaceability and scenario duration; round physical replacement counts to whole events and exclude a replacement where the complete product is retired first | `cp_test_performance`; `cp_use_maintenance` | replacement component counts, masses and associated inventories | `pep-ecopassport-psr-0014-2023` |
| `reconcile_end_of_life` | end-of-life process | collected input mass = recovered product outputs + treatment residues + measured direct mass releases, adjusted only for documented storage change | `cp_end_of_life` | mass-balanced treatment inventory | `pep-ecopassport-pcr-ed4-2021`; `eu-2012-19-weee` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Evidence must show that the dataset represents a complete LED-only luminaire, not a source, module, driver, part, non-LED fitting or individual model standing in for an undeclared family. | controlled product specification; configuration BOM; CPC scope check; TianGong reference-flow UUID |
| `dq_bom_completeness` | bill of materials | The BOM must cover the complete structure, optical, thermal, LED, electronic, wiring, fastening, sealing, control and supplied-accessory configuration and reconcile with net product mass and waste. | approved BOM; component receipts; unit-mass study; mass-balance worksheet |
| `dq_primary_data` | foreground manufacturing | Use records from the actual sites producing the declared product. Report temporal coverage, production volume coverage, missing records, allocations and subcontracted operations. | site list; metering coverage; ERP extracts; production ledger; supplier records |
| `dq_performance_configuration` | photometric, power and lifetime data | Test and technical evidence must refer to the complete declared configuration and reference control settings. LED-package values cannot substitute for luminaire output or power. | signed test report; test method; calibration; configuration cross-reference; lifetime evidence |
| `dq_upstream_data` | materials and purchased components | Match datasets to material or component technology, supplier or region, production route and time period. Disclose proxies and do not present an unverified recycled-content or supplier claim as measured fact. | upstream dataset metadata; supplier declaration; data-quality assessment; proxy register |
| `dq_mass_energy_waste_balance` | each foreground process | Reconcile inputs, accepted outputs, waste, returns, stock change, energy and direct releases for the same period. Investigate and disclose material residuals or inconsistent meters before publication. | signed reconciliation; calibration evidence; invoice cross-check; waste transfer records |
| `dq_downstream_scenarios` | lifecycle projections | Identify geography, transport, installation items, operating schedule, grid dataset, controls, maintenance, component replacements and end-of-life system. Keep scenario assumptions distinct from foreground observations. | scenario register; shipment and project records; power and control logs; recycler evidence |
| `dq_no_unsupported_estimates` | all quantitative inventory | Foreground collection is required when no reliable category-generic quantity exists. Any temporary modelled estimate must be explicitly labelled, replaceable, sensitivity-tested and excluded from claims of measured or reviewed performance. | estimate register; sensitivity result; replacement plan; reviewer disposition |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | The reference product flow UUID must be `3253c9d6-cf81-41e6-8997-f59f437c3f2d`, flow type Product flow, CPC 46533, state code 100, with Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |  |
| `val_complete_luminaire` | product identity and BOM | Reject datasets for a single LED die, package, module, lamp, driver, power supply, optical part, housing, generic lamp part, non-LED fitting, or an incomplete configuration. | `pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources` |
| `val_reference_amount` | reference output | The normalized output must equal 1 kg net complete luminaire excluding packaging, and the corresponding product count must be declared. | `pep-ecopassport-pcr-ed4-2021` |
| `val_required_qualifiers` | dataset metadata | All required qualifiers in the reference-flow table must be present and traceable to the declared product configuration and production period. | `pep-ecopassport-psr-0014-2023` |
| `val_process_coverage` | manufacturer-gate dataset | Component and subassembly supply or fabrication, assembly and finishing, testing and rework, final packaging, production wastes, direct releases and upstream datasets must be covered or explicitly documented as not applicable without hiding a supplied component. | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `val_performance_evidence` | outgoing flux, power and lifetime | Outgoing flux and power must be for the complete luminaire at recorded reference control settings; lifetime and replaceability must be supported and must distinguish luminaire, LED source and control gear. | `pep-ecopassport-psr-0014-2023`; `iec-60598-1-2024`; `eu-2019-2020-light-sources` |
| `val_mass_balance` | product, component, packaging and waste records | Product and packaging mass balances must reconcile for aligned periods. Packaging must not be included in the product reference mass, and supplier returns or rework must not be double counted. | `pep-ecopassport-pcr-ed4-2021` |
| `val_allocation` | shared facilities and co-products | Every allocated flow must identify the unallocated total, allocation driver and receiving outputs. Residual co-product allocation must use output mass unless a reviewed direct assignment or subdivision is documented. | `pep-ecopassport-psr-0014-2023` |
| `val_lifecycle_claim` | lifecyclemodel or lighting-service result | A claim covering the lighting service or cradle-to-grave result must include distribution, installation, use electricity, maintenance and replacements, and end-of-life; it must not present the 1 kg manufacturer-gate dataset alone as a full lifecycle result. | `pep-ecopassport-psr-0014-2023`; `eu-2012-19-weee` |
| `val_evidence_and_estimates` | quantitative and source records | Reject unsupported fixed values, unlabelled estimates, missing source references for external rules, or reasoned estimates presented as final evidence. | `pep-ecopassport-pcr-ed4-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | manufacturer-gate foreground unit process for a complete LED-only luminaire; optional input to a declared lifecyclemodel |
| downstream_use | `secondary_dataset`; `background_dataset`; lifecyclemodel component for building, road, public-space and other declared lighting applications |
| allowed_use | Production datasets and downstream scenarios for complete CPC 46533 LED-only luminaires with matching configuration, geography, technology, performance, control, lifetime and data-quality disclosures |
| excluded_use | Individual LED sources, modules, drivers, parts or non-LED fittings; automatic substitution across incompatible luminaire configurations or applications; claims about use-phase energy or full life cycle based only on the manufacturer-gate dataset |
| required_metadata | canonical PCR id; reference-flow UUID and mass property; product count per kg; net product and packaging mass; complete BOM; supplied and integrated components; production sites and period; geography; outgoing luminous flux; total power and reference control settings; lifetime and replaceability; CCT; supply voltage; IP and IK where applicable; process coverage; upstream datasets; allocation and cut-offs |
| required_quality_disclosure | Primary-data temporal and site coverage; BOM and mass-balance completeness; meter and test calibration; photometric and lifetime evidence; upstream data quality and proxies; allocation; waste routes; excluded processes; modelled estimates; uncertainty and sensitivity; downstream scenario assumptions when applicable |
| update_trigger | Change to product boundary, LED or driver technology, BOM or material share, supplier or manufacturing geography, production route, power or outgoing flux, control setting, lifetime or replaceability, packaging, allocation, upstream dataset, energy mix, waste route, regulation, test method, or material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `pep-ecopassport-pcr-ed4-2021` | standard | PEP Ecopassport, Product Category Rules for Electrical, Electronic and HVAC-R Products, PCR-ed4-EN-2021 09 06, https://register.pep-ecopassport.org/documents (retrieved 2026-08-09) | cradle-to-gate and lifecycle boundary; component, transport, assembly, packaging and waste coverage; functional and declared units; data quality and allocation framework |
| `pep-ecopassport-psr-0014-2023` | standard | PEP Ecopassport, PSR-0014-ed2.0-EN-2023 07 13, Specific Rules for Luminaires, https://register.pep-ecopassport.org/documents/public/PSR-0014-EN (retrieved 2026-08-09) | luminaire definition and exclusions; complete-component configuration; 1,000 lm for 35,000 h service reference; system boundary; testing and performance metadata; use, maintenance and end-of-life rules; mass allocation |
| `iec-60598-1-2024` | standard | IEC 60598-1:2024, Luminaires - Part 1: General requirements and tests, https://webstore.iec.ch/en/publication/66620 (retrieved 2026-08-09) | complete-luminaire safety, marking, mechanical and electrical construction, and test-evidence boundary |
| `eu-2019-2020-light-sources` | standard | Commission Regulation (EU) 2019/2020 on ecodesign requirements for light sources and separate control gears, consolidated text, https://eur-lex.europa.eu/eli/reg/2019/2020/2021-09-01/eng (retrieved 2026-08-09) | distinction among luminaire containing product, LED light source and control gear; complete-product reference control settings, power and replaceability context |
| `eu-2012-19-weee` | standard | Directive 2012/19/EU on waste electrical and electronic equipment (WEEE), https://eur-lex.europa.eu/eli/dir/2012/19/oj/eng (retrieved 2026-08-09) | separate collection, recovery, recycling, treatment and evidence requirements for lighting-equipment end-of-life scenarios |
