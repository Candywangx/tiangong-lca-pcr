---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.mechano-therapy-appliances-massage-apparatus-psychological-aptitude-testing-apparatus-o-0c93c769
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Mechano-therapy, massage, aptitude-testing, therapeutic respiration and breathing apparatus, and gas masks

## 1. Scope and Applicability

This PCR applies to the manufacture of finished mechano-therapy appliances, massage apparatus, psychological aptitude-testing apparatus, ozone-therapy, oxygen-therapy and aerosol-therapy apparatus, artificial-respiration and other therapeutic-respiration apparatus, other breathing appliances, and gas masks. It covers mechanically complete apparatus and the integral accessories supplied in the declared product configuration. The foreground data package is model- and route-specific because this category contains materially different electrical, pneumatic, mechanical, reusable, single-use, sterile, non-sterile, filtered-air and externally supplied-air products.

The PCR excludes protective masks having neither mechanical parts nor replaceable filters, stand-alone medicinal or industrial gases, stand-alone gas cylinders, separately marketed replacement filters or generic components, and medical, surgical or diagnostic equipment outside the stated product boundary. A component or replacement item delivered with the reference apparatus remains an input or included accessory of that apparatus and must not be reported as a second reference product.

The default dataset boundary is cradle-to-factory-gate: purchased materials and components enter with linked upstream datasets; actual foreground manufacture, assembly, treatment, testing and packaging are recorded through the point at which a conforming product is ready to leave the manufacturing site. Distribution, installation, use, maintenance and end-of-life are excluded from this foreground dataset and must be added explicitly by a downstream study when relevant.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.mechano-therapy-appliances-massage-apparatus-psychological-aptitude-testing-apparatus-o-0c93c769 |
| classification_refs | CPC 3.0: 48160 — Mechano-therapy appliances; massage apparatus; psychological aptitude-testing apparatus; ozone therapy, oxygen therapy, aerosol therapy, artificial respiration or other therapeutic respiration apparatus; other breathing appliances and gas masks (excluding protective masks having neither mechanical parts nor replaceable filters) |
| covered_products | finished mechanical-therapy and massage apparatus; psychological aptitude-testing apparatus; finished ozone-, oxygen- and aerosol-therapy apparatus; artificial-respiration and other therapeutic-respiration apparatus; breathing appliances; gas masks with mechanical parts and/or replaceable filters |
| excluded_products | simple protective masks with neither mechanical parts nor replaceable filters; stand-alone gases and cylinders; replacement filters and generic components sold separately; unrelated medical, surgical, veterinary or diagnostic equipment |
| representative_product | the declared, model-specific finished apparatus configuration; no category-average apparatus is presumed because function, construction, mass, energy source, treatment status and service life vary materially |
| production_route | purchased materials and components and/or in-house component preparation → assembly and integration → conditional cleaning, disinfection or sterilisation → final testing, calibration and packaging |
| market_state | new, conforming finished apparatus in its declared sales configuration, production mix at plant; net product mass is distinguished from packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provision at the factory gate of a finished apparatus performing the declared mechanical-therapy, massage, aptitude-testing, therapeutic-respiration, breathing-protection or gas-mask function |
| How much | 1 kg net mass of conforming finished apparatus, including integral parts and accessories in the declared configuration and excluding transport and sales packaging |
| How well | the declared model meets its documented intended function, performance specification and final acceptance criteria; applicable sterile state, respiratory protection or gas-delivery characteristics are preserved |
| How long or cycle | one completed production batch normalised to 1 kg of conforming output; declared service life, number of uses or treatment cycles is a required qualifier rather than a conversion of the mass reference |
| reference_flow_link | net conforming product mass after final testing and any required cleaning or sterilisation, immediately before dispatch beyond the manufacturing gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Mechano-therapy appliances, massage apparatus, psychological aptitude-testing apparatus, ozone therapy, oxygen therapy, aerosol therapy, artificial respiration or other therapeutic respiration apparatus, other breathing appliances and gas masks (excluding protective masks having neither mechanical parts nor replaceable filters) `de3969a1-8fd2-433a-979d-176043362c2e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | device family and intended function; model and configuration; electrical, pneumatic or mechanical operating principle; reusable or single-use status; declared service life or treatment-cycle basis; net product mass; included accessories and consumables; sterile or non-sterile state; cleaning or disinfection state; filtration, supplied-air or supplied-gas mode where applicable; filter class or declared protection type where applicable; gas-contact materials where applicable; battery and electronics configuration; packaging configuration and packaging mass; production route; manufacturing site and geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured net mass of conforming finished apparatus. Exclude transport and sales packaging from the reference amount and report packaging as separate inventory inputs. |
| `batch_normalisation` | all foreground inventory rows | row-specific property | row-specific SI unit | Divide each batch total by the conforming net product mass from the same batch or reconciled production period to express the row per 1 kg reference product. |
| `item_to_mass_conversion` | components, accessories and packaging recorded by count | Mass | kg | Convert counts to mass only with model- and lot-specific measured unit mass; retain count, sample size and scale evidence. |
| `energy_carrier_separation` | electricity, fuels, steam, compressed air and supplied gases | carrier-specific energy, mass or volume property | carrier-specific SI unit | Preserve each energy or gas carrier as a separate flow. Do not combine carriers into one energy total unless the conversion basis and original quantities remain available. |
| `gas_volume_conditions` | process or test gases measured by volume | Volume | m3 | Record reference temperature and pressure and the meter basis; do not treat an unqualified normal or standard cubic metre as interchangeable with an actual cubic metre. |
| `packaging_separation` | primary, secondary and transport packaging | Mass | kg | Record packaging by material and level. Packaging mass must not be included in the net apparatus reference mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | materials, purchased components, subassemblies, accessories and packaging received at the declared manufacturing site with identity, quantity and upstream dataset links |
| starting_condition_role | cradle-to-gate upstream product inputs entering the foreground manufacturing system |
| product_classification_scope | the finished apparatus boundary stated in Section 2, independent of whether a particular model is medical electrical equipment, non-electrical therapy apparatus or respiratory PPE |
| recursive_input_rule | an input already belonging to this same finished-apparatus category must remain a visible product input with its own upstream dataset and must not be recursively re-expanded inside this foreground package |
| upstream_dataset_requirement | every purchased material, component, subassembly, accessory, energy carrier, treatment medium and packaging input requires a geographically, technologically and temporally representative upstream dataset or an explicitly documented data gap |
| disclosure | declare the actual manufacturing sites, route steps, outsourced operations, sterile or non-sterile status, respiratory protection or gas-supply mode, included accessories, packaging boundary, excluded downstream stages and any unmodelled route step |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | cradle-to-factory-gate foreground package | Include all actual on-site and directly controlled processes from received inputs through conforming tested and packaged apparatus; link purchased inputs to upstream datasets and justify every exclusion. | `eu-pef-2021`; `ghg-protocol-product-standard` |
| `sb_route_specificity` | model and production route | Include only route steps that actually occur, but do not omit a material process because it is outsourced; outsourced preparation, treatment or testing remains represented through a purchased service or upstream dataset. | `eu-mdr-2017`; `eu-pef-2021` |
| `sb_treatment_controls` | cleaning, disinfection, sterilisation and gas-contact processing | Include treatment media, energy, water, cycle losses, residual handling and validation-related rejects whenever the declared product route uses the treatment. | `eu-mdr-2017` |
| `sb_respiratory_configuration` | gas masks and other breathing appliances | Distinguish filtered polluted air from externally supplied breathable air, and disclose replaceable filter, supplied-air, supplied-gas and oxygen-deficient-atmosphere applicability; never use one configuration as an undeclared proxy for another. | `eu-ppe-2016-425-consolidated-2026` |
| `sb_downstream_separation` | distribution, installation, use, maintenance and end-of-life | Exclude downstream stages from this foreground production package while clearly disclosing the exclusion; a full product study must add the applicable stages and scenarios separately. | `iec-60601-1-9-2007`; `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | In-house component and part preparation | conditional | include when the foreground site forms, machines, moulds, coats, joins, cleans or otherwise transforms raw materials or semi-finished parts | foreground component manufacture | kg accepted prepared components or parts transferred to assembly |
| `assembly_integration` | Apparatus assembly and integration | required | always include for a mechanically complete finished apparatus | foreground production and integration | kg assembled apparatus transferred to treatment or final testing |
| `cleaning_sterilisation` | Cleaning, disinfection or sterilisation | conditional | include when the declared route includes cleaning, disinfection, microbial-state control or sterilisation | foreground conditioning and validated treatment | kg treated apparatus released from the treatment step |
| `final_testing_packaging` | Final testing, calibration, acceptance and packaging | required | always include final acceptance and the declared packaging operation; calibration and test media are included when applicable | foreground quality release and factory-gate completion | kg conforming net finished apparatus |

### Process: In-house component and part preparation (`component_preparation`)

#### Inputs

##### Product flows

###### Raw materials and semi-finished parts (`preparation_material_inputs`)

Record each metal, polymer, elastomer, textile, adsorbent, electronic substrate, coating material or other material that is transformed at the foreground site as a separate product input.

- Selected flow: exact material- or part-specific Tiangong product flow; do not use the finished-apparatus reference flow as a proxy
- Flow property / unit: Mass / kg
- Amount rule: measured issued quantity minus documented return to stock, by material and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Preparation electricity and energy carriers (`preparation_energy`)

Record metered electricity, fuel, steam, compressed air or other energy carriers used by in-house part preparation as separate carrier-specific inputs.

- Selected flow: exact carrier-specific Tiangong product flow
- Flow property / unit: carrier-specific energy, mass or volume property / corresponding SI unit
- Amount rule: measured process-line use or allocated shared-meter use according to `calc_shared_utility_allocation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_utility_records`
- Sources:

###### Process water and preparation auxiliaries (`preparation_water_auxiliaries`)

Record water, lubricants, coolants, mould-release agents, coatings, adhesives, cleaning agents and other preparation auxiliaries as separate flows when they cross the foreground boundary.

- Selected flow: exact water- or auxiliary-specific Tiangong product flow
- Flow property / unit: Mass / kg or volume / m3 as measured
- Amount rule: measured withdrawal, issue or purchase quantity attributable to the declared preparation route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_consumable_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared components (`prepared_components`)

Record the mass of accepted in-house prepared components transferred to apparatus assembly, separated by component family when this is needed for mass balance or upstream linkage.

- Selected flow: component- or part-specific product flow resolved for the data package
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated accepted component mass released to assembly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_output_records`
- Sources:

##### Waste flows

###### Preparation scrap and rejects (`preparation_scrap`)

Record metal, polymer, composite, textile, electronic and mixed scrap or rejected parts separately by waste identity and destination.

- Selected flow: exact waste-specific Tiangong flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste or reject mass leaving the preparation process, net of documented return to process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_waste_records`
- Sources:

##### Elementary flows

###### Direct preparation emissions (`preparation_direct_emissions`)

Record only measured or calculation-supported releases to air, water or soil from the declared preparation operations, such as particulate, solvent or process-water releases; do not create a generic default emission.

- Selected flow: exact elementary flow for each released substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from collected activity data and a cited substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

### Process: Apparatus assembly and integration (`assembly_integration`)

#### Inputs

##### Product flows

###### Purchased and prepared components (`assembly_components`)

Record the model-specific bill of materials for frames, housings, actuators, pumps, valves, hoses, masks, filters supplied with the apparatus, electronics, sensors, controls, displays, batteries, wiring, fasteners and other included components.

- Selected flow: exact component-specific Tiangong product flow; prepared internal components remain visible intermediate inputs
- Flow property / unit: Mass / kg
- Amount rule: component quantity multiplied by verified unit mass, reconciled to issue and return records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_material_records`
- Sources:

###### Assembly auxiliaries and consumables (`assembly_auxiliaries`)

Record adhesives, solders, joining consumables, lubricants, cleaning wipes, protective films and other materials consumed during assembly as separate product flows.

- Selected flow: exact auxiliary-specific Tiangong product flow
- Flow property / unit: Mass / kg
- Amount rule: measured issue or purchase quantity minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_consumable_records`
- Sources:

###### Assembly electricity and utilities (`assembly_energy`)

Record carrier-specific electricity, compressed air, process gas, heat or other utilities used for assembly and integration.

- Selected flow: exact carrier-specific Tiangong product flow
- Flow property / unit: carrier-specific energy, mass or volume property / corresponding SI unit
- Amount rule: metered process use or allocated shared-meter use according to `calc_shared_utility_allocation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_utility_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled apparatus transferred to the next route step (`assembled_apparatus`)

Record the net mass and number of assembled units transferred either to treatment or directly to final testing.

- Selected flow: model-specific intermediate apparatus product flow resolved for the data package
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with unit count and model-specific net mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_output_records`
- Sources:

##### Waste flows

###### Assembly waste and rejected components (`assembly_waste`)

Record rejected components, offcuts, joining residues, protective films and mixed assembly wastes separately by waste identity and destination.

- Selected flow: exact waste-specific Tiangong flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass, net of documented rework and return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste_records`
- Sources:

##### Elementary flows

###### Direct assembly emissions (`assembly_direct_emissions`)

Record only measured or calculation-supported substance-specific releases from soldering, bonding, welding or other assembly operations.

- Selected flow: exact elementary flow for each released substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from collected activity data and a cited substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

### Process: Cleaning, disinfection or sterilisation (`cleaning_sterilisation`)

#### Inputs

##### Product flows

###### Apparatus entering treatment (`treatment_apparatus_input`)

Record the mass and number of assembled apparatus units entering each declared cleaning, disinfection or sterilisation route.

- Selected flow: model-specific intermediate apparatus product flow resolved for the data package
- Flow property / unit: Mass / kg
- Amount rule: measured batch load mass reconciled with unit count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg treated apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_batch_records`
- Sources:

###### Treatment water, media and consumables (`treatment_media`)

Record water, detergents, disinfectants, sterilants, process gases, wraps, indicators and other route-specific treatment inputs separately.

- Selected flow: exact medium- or consumable-specific Tiangong product flow
- Flow property / unit: Mass / kg or volume / m3 as measured
- Amount rule: measured cycle consumption allocated only across the accepted load treated in that cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg treated apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_consumable_records`
- Sources:

###### Treatment electricity, heat and utilities (`treatment_energy`)

Record electricity, steam, heat, compressed air or other utilities for each treatment cycle as separate carrier-specific flows.

- Selected flow: exact carrier-specific Tiangong product flow
- Flow property / unit: carrier-specific energy, mass or volume property / corresponding SI unit
- Amount rule: metered cycle use or validated equipment-cycle record allocated across accepted treated output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg treated apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_utility_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated apparatus released to final testing (`treated_apparatus`)

Record accepted treated apparatus mass and the achieved declared microbial, cleaning or sterilisation state.

- Selected flow: model-specific treated apparatus product flow resolved for the data package
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass after treatment and treatment-release checks
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg treated apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_output_records`
- Sources:

##### Waste flows

###### Treatment wastewater, spent media and rejected loads (`treatment_waste`)

Record wastewater, spent treatment chemicals or media, used indicators and rejected apparatus or packaging by waste identity and destination.

- Selected flow: exact waste-specific Tiangong flow
- Flow property / unit: Mass / kg or volume / m3 as measured
- Amount rule: measured discharge or waste mass from the treatment cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg treated apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_waste_records`
- Sources:

##### Elementary flows

###### Direct treatment emissions (`treatment_direct_emissions`)

Record only monitored or calculation-supported releases of treatment substances to air, water or soil, with the actual substance and compartment identified.

- Selected flow: exact elementary flow for each released substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from collected treatment consumption, capture records and a cited substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg treated apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

### Process: Final testing, calibration, acceptance and packaging (`final_testing_packaging`)

#### Inputs

##### Product flows

###### Apparatus entering final acceptance (`final_test_apparatus_input`)

Record assembled or treated apparatus units entering model-specific final testing and acceptance.

- Selected flow: model-specific intermediate apparatus product flow resolved for the data package
- Flow property / unit: Mass / kg
- Amount rule: measured input mass reconciled with serial, lot or batch count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_acceptance_records`
- Sources:

###### Test media, gases and consumables (`test_media`)

Record test gases, filters consumed in testing, calibration media, test loads, labels and other consumables that cross the final-test boundary.

- Selected flow: exact medium- or consumable-specific Tiangong product flow
- Flow property / unit: carrier-specific mass or volume property / corresponding SI unit
- Amount rule: measured issue or metered use attributable to accepted and rejected units in the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_test_consumable_records`
- Sources:

###### Final-test electricity and utilities (`final_test_energy`)

Record electricity, compressed air, vacuum service, supplied gases or other utilities used for calibration, leak testing, burn-in and final acceptance as separate flows.

- Selected flow: exact carrier-specific Tiangong product flow
- Flow property / unit: carrier-specific energy, mass or volume property / corresponding SI unit
- Amount rule: metered test-cell use or allocated shared-meter use according to `calc_shared_utility_allocation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_test_utility_records`
- Sources:

###### Packaging materials (`packaging_materials`)

Record primary, secondary and transport packaging by material and packaging level, including instructions and included protective inserts.

- Selected flow: exact packaging-material-specific Tiangong product flow
- Flow property / unit: Mass / kg
- Amount rule: packaging count multiplied by verified unit mass or directly measured packaging material issue
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished apparatus (`finished_apparatus`)

This is the quantitative reference output. Record only conforming net apparatus mass released after final acceptance; packaging mass remains separate.

- Selected flow: Mechano-therapy appliances, massage apparatus, psychological aptitude-testing apparatus, ozone therapy, oxygen therapy, aerosol therapy, artificial respiration or other therapeutic respiration apparatus, other breathing appliances and gas masks (excluding protective masks having neither mechanical parts nor replaceable filters) `de3969a1-8fd2-433a-979d-176043362c2e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalisation from measured conforming net batch output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_output_records`
- Sources:

##### Waste flows

###### Final-test rejects and packaging waste (`final_rejects_packaging_waste`)

Record failed units, replaced parts, spent test items and packaging offcuts or rejects separately by waste identity and destination; reworked units are not waste unless they leave the process as waste.

- Selected flow: exact waste-specific Tiangong flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste or reject mass from final testing and packaging, net of documented rework returned to process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_waste_records`
- Sources:

##### Elementary flows

###### Direct final-test emissions (`final_test_direct_emissions`)

Record only measured or calculation-supported releases from gas, aerosol, leakage, burn-in or other final-test operations, identified by substance and compartment.

- Selected flow: exact elementary flow for each released substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from collected test consumption, recovery records and a cited substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | separable products, lines, batches and route steps | Avoid allocation by process subdivision, separate meters, separate batch records or a redefined process boundary whenever the studied apparatus can be isolated. | `ghg-protocol-product-standard` |
| `allocation_physical_causal` | unavoidable shared utilities, treatment loads and common processes | Allocate by a documented physical relationship that reflects causation, such as metered use, machine time, treatment-cycle occupancy, test time or another engineering driver; mass allocation is acceptable only when mass drives the shared burden. | `ghg-protocol-product-standard` |
| `allocation_economic_fallback` | common process without a defensible physical relationship | Use economic or another justified relationship only when subdivision and physical allocation are not feasible; disclose the factor, data period and sensitivity. | `ghg-protocol-product-standard` |
| `allocation_waste_recycling` | scrap, rejects, spent media and recovered materials | Keep waste outputs and treatment burdens visible. Do not apply an undeclared recycling or avoided-product credit in the foreground package; any downstream recycling allocation must be stated separately and consistently. | `ghg-protocol-product-standard`; `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_material_records` | component_preparation; assembly_integration | raw materials, parts and components | controlled bill of materials, issue and return records | model; revision; part id; material identity; supplier; quantity; unit mass; issued mass; returned mass; lot; date | reconcile controlled BOM with warehouse issues, returns and sampled or complete weighing | item; kg | each BOM revision and production batch | full declared production period | all sites supplying the reference output | sum net issued mass by exact flow and normalise by conforming net output mass | BOM approval, scale calibration, supplier specification, issue and return trace |
| `cp_preparation_utility_records` | component_preparation | preparation energy | meter and equipment log | meter id; carrier; opening and closing reading; machine time; batch; allocation driver | direct submeter preferred; otherwise reconciled shared meter and causal driver | kWh; MJ; kg; m3 | each batch or meter interval | full declared production period | all in-house preparation lines | sum carrier-specific use and allocate only under Section 7 | meter calibration, utility invoice and machine log |
| `cp_preparation_consumable_records` | component_preparation | water and auxiliaries | meter, purchase, issue and return records | flow id; material name; batch; opening stock; receipts; issues; returns; closing stock | meter or mass-balance reconciliation by exact material | kg; m3 | each batch and inventory period | full declared production period | all in-house preparation lines | calculate net consumption by material and reconcile stock change | meter calibration, inventory reconciliation and lot trace |
| `cp_preparation_output_records` | component_preparation | accepted prepared components | production transfer record | component id; accepted count; unit mass; accepted mass; rejects; destination; batch | weigh or calculate from verified unit mass and accepted count | item; kg | each transfer batch | full declared production period | all in-house preparation lines | sum accepted mass by component family | transfer record, scale check and acceptance record |
| `cp_preparation_waste_records` | component_preparation | preparation scrap and rejects | waste log and transfer note | waste identity; source batch; gross; tare; net mass; return to process; destination | calibrated weighing and destination reconciliation | kg | each waste transfer | full declared production period | all in-house preparation lines | sum net waste by identity and destination | scale calibration, waste ticket and contractor receipt |
| `cp_assembly_consumable_records` | assembly_integration | assembly auxiliaries | issue, return and stock records | auxiliary id; lot; opening stock; issue; return; closing stock; batch | material balance by exact auxiliary | kg | each batch and inventory period | full declared production period | all assembly sites | calculate net use and normalise by conforming output | inventory reconciliation and lot trace |
| `cp_assembly_utility_records` | assembly_integration | assembly utilities | meter and production log | carrier; meter id; readings; batch; line time; allocation driver | direct submeter preferred; otherwise reconciled shared meter | kWh; MJ; kg; m3 | each batch or meter interval | full declared production period | all assembly lines | sum carrier-specific use and allocate only under Section 7 | meter calibration, invoice and line log |
| `cp_assembly_output_records` | assembly_integration | assembled apparatus | serial, lot and transfer record | model; serial or lot; unit count; unit net mass; transfer mass; date; next route step | calibrated weighing plus serial or lot reconciliation | item; kg | each transfer batch | full declared production period | all assembly sites | sum accepted transfer mass by model and route | scale calibration, release signature and serial or lot trace |
| `cp_assembly_waste_records` | assembly_integration | assembly waste | waste and rework log | waste identity; rejected component; batch; mass; rework return; destination | calibrated weighing and rework reconciliation | kg | each batch and waste transfer | full declared production period | all assembly sites | sum net waste excluding documented rework returned to process | waste ticket, rework closure and scale calibration |
| `cp_treatment_batch_records` | cleaning_sterilisation | apparatus entering treatment | treatment load record | treatment route; equipment id; load id; model; count; load mass; start and end time | controlled load record reconciled to apparatus transfer | item; kg | each treatment load | full declared production period | each treatment site, including outsourced site | sum input load by route and reconcile accepted and rejected outputs | validated load record and transfer trace |
| `cp_treatment_consumable_records` | cleaning_sterilisation | treatment media and consumables | cycle consumption and issue record | load id; medium id; water; chemical or gas quantity; wraps; indicators; recovered quantity | metering, dosing record or reconciled material issue | kg; m3; item | each treatment load | full declared production period | each treatment route and site | sum exact inputs per load and divide by accepted treated output | dosing calibration, batch certificate and cycle record |
| `cp_treatment_utility_records` | cleaning_sterilisation | treatment utilities | equipment-cycle and meter record | load id; electricity; steam; heat; compressed air; cycle duration; accepted load | dedicated meter or validated equipment-cycle record | kWh; MJ; kg; m3 | each treatment load | full declared production period | each treatment route and site | sum utility by cycle and allocate across accepted load only | meter calibration, equipment validation and cycle log |
| `cp_treatment_output_records` | cleaning_sterilisation | treated apparatus | treatment release record | load id; model; count; accepted mass; rejected mass; achieved state; release decision | weigh accepted output and reconcile with release record | item; kg | each treatment load | full declared production period | each treatment route and site | sum accepted treated mass by declared state | release signature, validation result and load reconciliation |
| `cp_treatment_waste_records` | cleaning_sterilisation | treatment wastes | discharge, waste and rejected-load record | load id; wastewater volume; spent medium; waste identity; rejected mass; destination | meter, calibrated weighing and waste-transfer reconciliation | kg; m3 | each load or discharge event | full declared production period | each treatment route and site | sum by waste identity and destination | discharge meter, waste ticket and load record |
| `cp_final_acceptance_records` | final_testing_packaging | apparatus entering and passing final acceptance | serial, lot, calibration and final-test record | model; serial or lot; input count and mass; test route; result; rework; rejection; release | controlled final-test record reconciled to production output | item; kg | each tested unit or batch | full declared production period | all final-test sites | reconcile input, pass, rework and reject status by model | test-system calibration, approval and traceable test result |
| `cp_final_test_consumable_records` | final_testing_packaging | test media and consumables | test-cell meter and material issue record | test id; gas or medium; opening and closing reading; issue; recovery; returned quantity | direct meter or material balance by test route | kg; m3; item | each test or batch | full declared production period | all final-test sites | sum net use by exact flow over accepted and rejected tests | meter calibration, cylinder or material reconciliation and test log |
| `cp_final_test_utility_records` | final_testing_packaging | final-test utilities | meter and equipment log | meter id; carrier; reading; test duration; unit or batch; allocation driver | direct submeter preferred; otherwise reconciled shared meter | kWh; MJ; kg; m3 | each test batch or meter interval | full declared production period | all final-test sites | sum by carrier and allocate only under Section 7 | meter calibration, equipment log and utility reconciliation |
| `cp_packaging_records` | final_testing_packaging | packaging materials | packaging specification, issue and weighing record | packaging level; material id; package count; unit mass; issued mass; unused return | verified unit mass times count or direct issue weighing | item; kg | each packaging configuration and batch | full declared production period | all packaging sites | sum net packaging mass by material and level | approved specification, scale calibration and issue record |
| `cp_finished_output_records` | final_testing_packaging | conforming finished apparatus | production release and weighing record | model; configuration; serial or lot; conforming count; gross packed mass; packaging mass; net apparatus mass; release date | calibrated net weighing or gross-minus-verified-packaging calculation | item; kg | each released batch | full declared production period | all sites releasing reference output | sum conforming net mass; this is the normalisation denominator | scale calibration, release approval, packaging reconciliation and serial or lot trace |
| `cp_final_waste_records` | final_testing_packaging | rejects and packaging waste | reject, rework and waste-transfer record | model; part or waste identity; mass; rework status; disposition; destination | calibrated weighing and closure of rework records | kg | each batch and waste transfer | full declared production period | all final-test and packaging sites | sum net waste excluding closed rework returned to production | reject disposition, waste ticket and scale calibration |
| `cp_direct_emission_records` | component_preparation; assembly_integration; cleaning_sterilisation; final_testing_packaging | direct releases | monitoring result or calculation worksheet | process; substance; compartment; sample or meter result; activity data; factor; factor source; capture or recovery; period | direct monitoring preferred; otherwise calculation from collected activity and a cited substance-specific factor | kg; m3; concentration unit | each monitoring event or calculation period | full declared production period | every site with a direct release | calculate substance-specific released mass and normalise by corresponding conforming output | laboratory report, instrument calibration, factor citation and calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | every foreground amount | normalised amount = reconciled period or batch amount / conforming net finished apparatus mass from the same scope | applicable collection protocol; `cp_finished_output_records` | row-specific quantity per 1 kg finished apparatus |  |
| `calc_component_mass` | components and accessories recorded by count | component mass = accepted count × verified model- and lot-specific unit mass; reconcile with net issued mass | `cp_bom_material_records` | kg component per reference flow |  |
| `calc_packaging_mass` | packaging recorded by count | packaging mass = package count × verified unit mass, separated by material and packaging level | `cp_packaging_records` | kg packaging material per reference flow |  |
| `calc_shared_utility_allocation` | shared meters and common equipment | allocated quantity = reconciled shared quantity × documented causal-driver share; prefer direct metering, machine time, cycle occupancy or test time and use mass only when mass drives consumption | utility protocols; production or equipment logs | carrier-specific allocated quantity per reference flow | `ghg-protocol-product-standard` |
| `calc_direct_release` | calculated direct emissions | released mass = collected activity × cited substance-specific factor × (1 − measured capture or recovery fraction); preserve factor source and all input units | `cp_direct_emission_records` | kg substance to the declared compartment per reference flow |  |
| `calc_mass_reconciliation` | each process and full foreground package | reconcile input mass = product outputs + waste outputs + measured elementary releases + documented stock change; investigate and disclose unresolved difference rather than forcing balance | material, output, waste and direct-emission protocols | mass-balance check and unexplained difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and all batches | Records must identify model, configuration, intended function, route, included accessories, sterile or non-sterile state, respiratory configuration when applicable, manufacturing site and production period. | controlled product specification, BOM revision, route record and release record; `eu-mdr-2017`; `eu-ppe-2016-425-consolidated-2026` |
| `dq_temporal_coverage` | foreground records | Cover a representative continuous production period or all batches in the declared campaign; disclose start, end, shutdowns, abnormal batches and seasonal or campaign limitations. | dated meter, production, inventory and waste records |
| `dq_completeness` | all included processes and flows | Reconcile BOM, utility, treatment, testing, output and waste records; document missing flows, excluded sites and unresolved mass-balance differences. | completeness checklist, mass reconciliation and exclusion log |
| `dq_measurement` | mass, energy, gas, water and release measurements | Use calibrated or verified instruments with the resolution and range suitable for the recorded quantity; retain the meter basis and any temperature or pressure condition for gas volume. | calibration certificate, meter id and measurement record |
| `dq_supplier_upstream` | purchased materials, components and outsourced services | Use upstream datasets matching actual material or component identity, supplier technology, geography and period where available; disclose proxy use and its limitation. | supplier specification, purchase record, dataset metadata and `eu-pef-2021` data-quality assessment |
| `dq_factor_traceability` | calculated releases or utility conversions | Every non-physical factor must have a named source, applicable technology and period, original unit and calculation trail; unsupported default factors are not permitted. | factor source and reviewed calculation worksheet |
| `dq_allocation` | shared processes and utilities | Retain the unallocated total, allocation driver, factor, period, affected outputs and sensitivity or justification for any non-physical basis. | meter total, production driver record and allocation worksheet; `ghg-protocol-product-standard` |
| `dq_representativeness` | complete dataset | Assess and disclose technological, geographical and time-related representativeness, completeness and precision for significant processes. | data-quality assessment and improvement log; `eu-pef-2021`; `ghg-protocol-product-standard` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product category and reference flow | The declared product must fall within Section 2, must not be a simple protective mask excluded by CPC 48160, and must use exact flow `de3969a1-8fd2-433a-979d-176043362c2e` with Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and unit kg. |  |
| `validate_qualifiers` | reference product metadata | All Required qualifiers applicable to the model and route must be present; non-applicability must be explicit rather than blank. | `eu-mdr-2017`; `eu-ppe-2016-425-consolidated-2026` |
| `validate_reference_mass` | quantitative reference | Conforming finished apparatus output must equal exactly 1 kg after normalisation, and packaging mass must remain outside the net reference amount. |  |
| `validate_process_coverage` | foreground system boundary | `assembly_integration` and `final_testing_packaging` must be present; each actual component-preparation or cleaning, disinfection or sterilisation route must be included or represented by an upstream purchased service with documented site and dataset. | `eu-mdr-2017`; `eu-pef-2021` |
| `validate_inventory_production` | all non-reference inventory rows | Each amount must derive from a named collection protocol or a transparent calculation from collected records; category-level default quantities and uncited emission factors are rejected. | `ghg-protocol-product-standard` |
| `validate_respiratory_route` | breathing appliances and gas masks | The dataset must distinguish filtration of polluted air from external breathable-air or gas supply and must identify replaceable filter and oxygen-deficient-atmosphere applicability. | `eu-ppe-2016-425-consolidated-2026` |
| `validate_treatment_route` | sterile, disinfected or cleaned apparatus | The treatment route, validated method, load basis, treatment media, accepted output and treatment wastes or releases must be present when the product claims the corresponding state. | `eu-mdr-2017` |
| `validate_allocation` | shared process burdens | Allocation must follow Section 7 and disclose total, driver, factor and affected products; unsupported economic allocation or undisclosed recycling credit fails validation. | `ghg-protocol-product-standard`; `eu-pef-2021` |
| `validate_data_quality` | complete foreground package | Temporal coverage, completeness, measurement evidence, upstream representativeness, factor traceability and unresolved gaps must be disclosed; an unreported data gap makes validation inconclusive. | `eu-pef-2021`; `ghg-protocol-product-standard` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | cradle-to-gate modelling of a matching apparatus model, configuration, production route, treatment state, respiratory mode, geography, period and factory-gate condition |
| excluded_use | category-average environmental claims; comparisons of different therapeutic or protective functions; simple protective masks excluded by CPC 48160; use-phase, maintenance or end-of-life claims without separately modelled scenarios; substitution for a different sterile, filter, gas-supply, electrical or reusable configuration |
| required_metadata | PCR id; reference flow UUID; model and configuration; intended function; net product mass; included accessories; reusable or single-use status; service life or cycle basis; sterile and cleaning state; filtration or supplied-air or gas mode; packaging configuration; route and outsourced steps; manufacturing sites and geography; production period; allocation methods; upstream dataset identities |
| required_quality_disclosure | collection-protocol coverage; meter and scale quality; BOM and output reconciliation; mass-balance difference; data gaps and proxies; allocation basis; technological, geographical and temporal representativeness; completeness and precision; treatment and final-test evidence where applicable |
| update_trigger | change in model or configuration, intended function, material or BOM, operating principle, filter or gas-supply mode, sterile state or treatment method, manufacturing or supplier route, site or geography, packaging, allocation basis, upstream dataset, production period, service-life assumption or material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-pef-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint method, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-08-10) | functional-unit fields; supply-chain system-boundary logic; company-specific data; process and data-quality requirements; disclosure of exclusions and downstream stages |
| `ghg-protocol-product-standard` | standard | World Resources Institute and World Business Council for Sustainable Development, Product Life Cycle Accounting and Reporting Standard, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf (retrieved 2026-08-10) | process mapping; primary foreground data; data quality; allocation hierarchy and disclosure |
| `eu-mdr-2017` | official_guidance | Regulation (EU) 2017/745 on medical devices, Annexes I and II, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0745 (retrieved 2026-08-10) | route-specific manufacturing and validation records; material and process effects; sterile-state processing and packaging; final testing, sites and safe-disposal disclosure for medical-device variants |
| `eu-ppe-2016-425-consolidated-2026` | official_guidance | Regulation (EU) 2016/425 on personal protective equipment, consolidated version 29 May 2026, Annex II section 3.10.1, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02016R0425-20260529 (retrieved 2026-08-10) | respiratory-protection configuration; filtered-air versus external breathable-air supply; required gas-mask and breathing-appliance qualifiers |
| `iec-60601-1-9-2007` | standard | IEC 60601-1-9:2007+AMD1:2013+AMD2:2020 CSV, Medical electrical equipment — environmentally conscious design, https://webstore.iec.ch/en/publication/2601 (retrieved 2026-08-10) | life-cycle-stage disclosure and route applicability for medical electrical equipment; separation of production package from downstream life-cycle stages |
