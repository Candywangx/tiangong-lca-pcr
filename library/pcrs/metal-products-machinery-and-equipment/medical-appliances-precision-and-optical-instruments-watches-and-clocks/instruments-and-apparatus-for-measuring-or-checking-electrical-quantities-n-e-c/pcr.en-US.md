---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-electrical-quantities-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Instruments and apparatus for measuring or checking electrical quantities n.e.c.

## 1. Scope and Applicability

This PCR governs foreground manufacturing data packages for finished instruments and apparatus whose principal purpose is measuring or checking electrical quantities and that are not classified elsewhere within the relevant electrical-measurement product group. It covers factory activities from receipt of materials, components, and subassemblies through preparation, assembly, calibration or functional testing, packaging, and release of the finished instrument at the manufacturer's gate.

The residual category must not be used as a generic substitute for a more specific product identity. It excludes instruments for measuring or detecting ionizing radiation; cathode-ray oscilloscopes and oscillographs; instruments without a recording device specifically classified for measuring voltage, current, resistance, or power; instruments for telecommunications; gas, liquid, or electricity supply or production meters; parts and accessories supplied as such; and instruments whose principal measured variable belongs to another product category. A concrete data package shall document why the selected product remains in this n.e.c. boundary.

This manufacturing PCR does not prescribe a universal use-stage functional unit, reference service life, duty cycle, power demand, maintenance regime, or end-of-life treatment. Those facts vary across the residual category and shall be added as product-specific scenarios when a downstream cradle-to-grave `lifecyclemodel` is produced.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-electrical-quantities-n-e-c |
| classification_refs | CPC 3.0: 48249, exact classification reference |
| covered_products | Finished instruments and apparatus principally used to measure or check electrical quantities and not elsewhere classified in the relevant electrical-measurement product group |
| excluded_products | Ionizing-radiation instruments; cathode-ray oscilloscopes or oscillographs; specifically classified non-recording voltage, current, resistance, or power instruments; telecommunications instruments; supply or production meters; parts or accessories supplied separately; products principally classified by another measured variable or function |
| representative_product | A finished, calibrated or functionally verified electrical measuring or checking instrument, expressed on a mass basis and released at the manufacturer's gate |
| production_route | Receipt and verification of materials/components/subassemblies; conditional in-house parts or electronics preparation; final assembly; calibration and functional testing; packaging and release |
| market_state | Finished product, manufactured, packaged, and released at the manufacturer's gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production and release at the manufacturer's gate of a finished instrument or apparatus for measuring or checking electrical quantities n.e.c. |
| How much | 1 kg net mass of finished instrument, excluding packaging |
| How well | Conforming to the declared product specification and calibration or functional acceptance criteria; the measured electrical quantity, function, range, accuracy class or uncertainty, recording capability, and product configuration shall be declared |
| How long or cycle | One completed manufacturing batch or reporting period normalized to released product mass; no universal use-stage service life is implied |
| reference_flow_link | `reference_product_mass` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Instruments and apparatus for measuring or checking electrical quantities n.e.c. `cf601a2b-131a-41c5-a82f-b20a0c90cdad` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | measured electrical quantity; instrument function; measurement range; accuracy class or stated uncertainty; recording capability; model or product-family identifier; hardware configuration; included accessories; calibration or acceptance standard and result; net product mass; manufacturing site; reporting period; released-product quantity; market geography |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and every normalization denominator | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass of conforming released instruments without packaging. Normalize all foreground inventory values to 1 kg of released product. |
| `count_to_mass_conversion` | Records available as item counts, lots, or batches | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass only from measured net mass for the represented model and period; retain the count, sampled or total mass, sample size, and conversion calculation. |
| `packaging_mass_separation` | Primary and secondary packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record packaging by material and mass separately from net reference-product mass; packaging shall not increase the 1 kg reference amount. |
| `energy_unit_preservation` | Electricity, fuels, and other energy carriers | Energy property selected for the resolved flow | kWh or MJ | Preserve metered energy units and document every conversion factor; do not convert energy into product mass. |
| `process_water_unit` | Process and cleaning water | Mass or volume property selected for the resolved flow | kg or m3 | Preserve the measured property and unit. If density conversion is necessary, record temperature, density source, and formula. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_start_end` | foreground manufacturing dataset | Start at receipt of materials, components, subassemblies, and packaging at the manufacturer's gate; end at release of the packaged finished instrument from the final manufacturing site. Include receipt control, conditional parts/electronics preparation, assembly, calibration or functional testing, packaging, directly controlled internal transport, utilities, rejects, waste, and direct emissions. | `pep-ecopassport-pcr-2021` |
| `boundary_upstream_links` | purchased product inputs | Link every purchased material, component, subassembly, energy carrier, water supply, and packaging input to a geographically and technologically representative upstream dataset; do not re-create upstream production inside this foreground dataset. | `pep-ecopassport-pcr-2021`; `eu-pef-method-2021` |
| `boundary_material_components` | bill of materials and supplied elements | Include the net product mass, electronic circuit boards, cells or batteries when present, metals, plastics, cables, displays, sensors, housings, fasteners, supplied accessories, manuals, labels, primary packaging, and secondary packaging. Disclose hazardous substances or components separately where applicable. | `pep-ecopassport-pcr-2021` |
| `boundary_waste_to_handoff` | manufacturing waste and rejects | Record the generation, internal handling, and transfer of manufacturing waste, rejected assemblies, wastewater, and hazardous waste to the first external treatment operator; connect treatment and final disposal with separate downstream datasets. | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `boundary_downstream_scenarios` | downstream lifecyclemodel | Distribution, installation, use, maintenance, repair, replacement, dismantling, collection, reuse, recycling, and final disposal are outside the foreground manufacturing dataset. A cradle-to-grave lifecycle model shall add product-specific scenarios and shall not infer them from the 1 kg manufacturing reference alone. | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `boundary_cutoff_disclosure` | completeness and cut-off | Include all assessable foreground inputs and outputs. Any exclusion shall be quantified where possible, justified, tested for mass, energy, and environmental significance, and disclosed; cut-off shall never hide a significant electronic component, hazardous substance, direct emission, or waste stream. | `pep-ecopassport-pcr-2021`; `iso-14044-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | materials_components_subassemblies_and_packaging_received_at_manufacturer_gate |
| starting_condition_role | Upstream products are received, identified, and linked to supplier-specific or representative background datasets before foreground preparation and assembly begin. |
| product_classification_scope | Finished products meeting the semantic boundary of CPC 3.0 subclass 48249; classification is a scope reference and does not replace product-specific identity. |
| recursive_input_rule | If a purchased input is itself a finished or partly finished product within this category, record it as a separate product input with its own upstream dataset and supplier gate; do not recursively expand the current foreground manufacturing processes into that input. |
| upstream_dataset_requirement | Upstream datasets shall match material/component identity, technology, geography, temporal period, reference property, and supply state; proxies shall be disclosed and reviewed. |
| disclosure | Declare manufacturing site, reporting period, product models represented, net product mass, bill-of-material coverage, included accessories, packaging scope, outsourced steps, internal steps, allocation bases, cut-offs, proxy datasets, and downstream stages excluded from this foreground package. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `materials_component_receipt` | Materials, components, subassemblies, and packaging receipt | required | Always include for a manufacturing data package | Foreground receipt, identity control, weighing, and accepted-input accounting | kg accepted inputs per kg released product |
| `parts_electronics_preparation` | In-house parts and electronics preparation | conditional | Include when the reporting site fabricates, machines, cleans, coats, solders, mounts, or otherwise prepares parts, boards, sensors, or subassemblies | Foreground transformation before final assembly | kg prepared subassemblies per kg released product |
| `final_assembly` | Final mechanical and electrical assembly | required | Always include | Foreground assembly and integration | kg assembled instrument sent to test per kg released product |
| `calibration_functional_testing` | Calibration, functional testing, and quality acceptance | required | Always include; record calibration separately from functional-only testing where applicable | Foreground conformity verification and reject determination | kg conforming instrument per kg released product |
| `packaging_release` | Packaging, labelling, and release | required | Always include | Foreground final packaging and reference-product release | 1 kg net released product |

### Process: Materials, components, subassemblies, and packaging receipt (`materials_component_receipt`)

#### Inputs

##### Product flows

###### Purchased materials, components, subassemblies, and packaging (`received_inputs`)

Record each purchased input separately at the identity and aggregation level needed to preserve material, component, supplier, and upstream-dataset distinctions. Do not select a generic electrical-instrument flow for dissimilar inputs.

- Selected flow: Supplier-specific material, component, subassembly, accessory, manual, label, or packaging flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg, unless the resolved input requires a different documented property
- Amount rule: measured accepted mass by input identity and lot during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_received_inputs`
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted inputs released to production (`accepted_inputs`)

Accepted input mass is carried forward by material or component identity after subtracting returns and receipt rejects.

- Selected flow: Same resolved input identities as `received_inputs`
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted mass by input identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_received_inputs`
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

###### Receipt rejects, returns, and damaged packaging (`receipt_rejects`)

Record measured mass and destination for rejected inputs and packaging that become waste at receipt. Supplier returns that remain products shall be recorded separately from waste.

- Selected flow: Waste flow matching the actual material and regulatory classification; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg
- Amount rule: measured mass by waste identity and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_rejects`
- Sources: `pep-ecopassport-pcr-2021`

##### Elementary flows

### Process: In-house parts and electronics preparation (`parts_electronics_preparation`)

#### Inputs

##### Product flows

###### Accepted parts and materials entering preparation (`preparation_material_inputs`)

Record the accepted parts, printed circuit boards or bare boards, electronic components, sensors, housings, cables, fasteners, solder, coatings, adhesives, and cleaning agents actually consumed in each in-house preparation route.

- Selected flow: Product-specific resolved material or component flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg, or the documented property required by the resolved flow
- Amount rule: measured issued quantity minus measured return to stock by input identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_materials`
- Sources: `pep-ecopassport-pcr-2021`

###### Electricity and other utilities for preparation (`preparation_energy`)

Record metered electricity and other energy carriers used by included machining, cleaning, coating, soldering, mounting, and preparation equipment. Shared utility allocation shall follow section 7.

- Selected flow: Site- and geography-specific energy carrier flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Energy / kWh or MJ as metered
- Amount rule: direct meter reading or calculated share of a documented shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_energy`
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared parts and electronic subassemblies (`prepared_subassemblies`)

Record the measured mass of prepared parts and subassemblies transferred to final assembly, retaining route and product-model identity.

- Selected flow: Product-specific intermediate part or subassembly flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepared_subassemblies`
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

###### Preparation scrap, spent consumables, and rejected subassemblies (`preparation_waste`)

Record each waste identity, mass, hazardous status, and first external treatment destination.

- Selected flow: Waste flow matching actual scrap, spent chemical, wastewater-treatment residue, or rejected electronic subassembly; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by identity and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_waste`
- Sources: `pep-ecopassport-pcr-2021`

##### Elementary flows

###### Direct preparation emissions (`preparation_emissions`)

Record process-specific direct releases to air, water, or soil where preparation creates a monitored, calculated, or permitted emission. Do not create an emission row when no direct elementary flow crosses the site boundary.

- Selected flow: Substance- and compartment-specific elementary flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Property and unit of the resolved elementary flow
- Amount rule: measured release or calculation from monitored concentration and discharge volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_emissions`
- Sources: `pep-ecopassport-pcr-2021`

### Process: Final mechanical and electrical assembly (`final_assembly`)

#### Inputs

##### Product flows

###### Parts and subassemblies entering final assembly (`assembly_inputs`)

Record each purchased or internally prepared enclosure, board, sensor, transducer, display, connector, cable, fastener, battery, accessory, and other subassembly consumed in final assembly.

- Selected flow: Product-specific resolved part or subassembly flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg
- Amount rule: measured issued quantity minus return to stock by component identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `pep-ecopassport-pcr-2021`

###### Assembly electricity and utilities (`assembly_energy`)

Record direct or allocated electricity and other energy carriers for assembly, joining, cleaning, software loading, and directly controlled internal movement.

- Selected flow: Site- and geography-specific energy carrier flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Energy / kWh or MJ as metered
- Amount rule: direct meter reading or calculated share of a documented shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled instrument sent to calibration or test (`assembled_instrument`)

Record assembled instrument mass transferred to calibration or functional testing before test rejects are removed.

- Selected flow: Product-specific intermediate assembled-instrument flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg
- Amount rule: measured assembled output mass transferred to test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembled_output`
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

###### Assembly scrap and rejected components (`assembly_waste`)

Record discarded components, offcuts, spent joining materials, and irreparable assembly rejects by identity and destination.

- Selected flow: Waste flow matching actual assembly waste; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by identity and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste`
- Sources: `pep-ecopassport-pcr-2021`

##### Elementary flows

### Process: Calibration, functional testing, and quality acceptance (`calibration_functional_testing`)

#### Inputs

##### Product flows

###### Assembled instruments entering calibration or test (`test_input_instruments`)

Carry forward assembled-instrument mass and model identity into each applicable calibration, functional test, safety test, and quality-acceptance route.

- Selected flow: Same resolved intermediate assembled-instrument flow as `assembled_instrument`
- Flow property / unit: Mass / kg
- Amount rule: measured input mass entering test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_inputs`
- Sources: `pep-ecopassport-pcr-2021`

###### Test electricity and calibration consumables (`test_energy_consumables`)

Record electricity for test benches, conditioning, burn-in where used, and product-specific calibration consumables or reference materials. Keep energy and consumables as separate resolved flows in the concrete package.

- Selected flow: Site-specific electricity or product-specific calibration consumable flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Energy / kWh or MJ for energy; resolved property for consumables
- Amount rule: direct metering, timed equipment power calculation, or measured consumable issue minus return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_energy_consumables`
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming calibrated or functionally verified instrument (`conforming_instrument`)

Record only instruments meeting declared calibration or functional acceptance criteria. Retain product model, test procedure, result, and calibration status.

- Selected flow: Instruments and apparatus for measuring or checking electrical quantities n.e.c. `cf601a2b-131a-41c5-a82f-b20a0c90cdad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conforming net instrument mass before packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conforming_output`
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

###### Failed instruments, replaced parts, and spent test consumables (`test_rejects`)

Separate reworkable products from waste. Record irreparable failed instruments, replaced parts, and spent test consumables by mass, hazardous status, and destination.

- Selected flow: Waste flow matching actual failed product, component, or consumable; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass after excluding items returned to rework or inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_rejects`
- Sources: `pep-ecopassport-pcr-2021`

##### Elementary flows

### Process: Packaging, labelling, and release (`packaging_release`)

#### Inputs

##### Product flows

###### Conforming instruments entering packaging (`packaging_product_input`)

Carry forward conforming net instrument mass without packaging. Included accessories shall be identified as part of the product configuration or as separately supplied elements.

- Selected flow: Instruments and apparatus for measuring or checking electrical quantities n.e.c. `cf601a2b-131a-41c5-a82f-b20a0c90cdad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conforming net product mass sent to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_input`
- Sources: `pep-ecopassport-pcr-2021`

###### Primary and secondary packaging, manuals, and labels (`packaging_inputs`)

Record each packaging material, manual, and label separately by material identity and mass. Reusable transport packaging shall be identified and its reuse accounting disclosed.

- Selected flow: Material-specific packaging, paper, label, pallet, film, or reusable-container flow; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus unused return by packaging identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released reference product (`released_reference_product`)

This is the quantitative reference output. It is the net mass of conforming finished instruments released from the manufacturing site and excludes packaging mass.

- Selected flow: Instruments and apparatus for measuring or checking electrical quantities n.e.c. `cf601a2b-131a-41c5-a82f-b20a0c90cdad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization from measured released net product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `pep-ecopassport-pcr-2021`

##### Waste flows

###### Packaging and labelling waste at the manufacturing site (`packaging_waste`)

Record offcuts, damaged packaging, obsolete labels or manuals, and other packaging waste generated before release.

- Selected flow: Waste flow matching actual packaging or paper waste; exact Tiangong UUID shall be resolved during data-package construction
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `pep-ecopassport-pcr-2021`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | separable products, routes, batches, and unit processes | Avoid allocation by subdividing production lines, routes, batches, and meters wherever direct records can represent the product. | `iso-14044-2006`; `pep-ecopassport-pcr-2021` |
| `allocation_physical_causality` | shared utilities, site services, equipment, and waste | When subdivision is not feasible, use a documented physical or causal driver that best represents resource use or emissions, such as metered energy, machine time, test-bench time, processed mass, or accepted units. Economic allocation requires justification that no physical relationship is adequate. | `pep-ecopassport-pcr-2021`; `eu-pef-method-2021` |
| `allocation_rework_returns` | rework loops and return to stock | Return reworkable instruments and unused materials to the originating process or inventory balance; do not count them simultaneously as waste or additional product output. | `pep-ecopassport-pcr-2021` |
| `allocation_recycling_handoff` | recyclable manufacturing waste | Record waste at the measured handoff quantity and destination. Do not credit avoided virgin production inside the foreground manufacturing dataset; any recycling benefit or burden beyond the handoff shall be modelled transparently in a downstream scenario. | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `allocation_disclosure` | every allocated row | Disclose the shared total, allocation driver, numerator, denominator, resulting factor, affected processes and flows, period, and sensitivity where the allocation is material. | `iso-14044-2006`; `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_inputs` | `materials_component_receipt` | received and accepted input accounting | ERP receipt, bill of materials, supplier document, and scale record | input identity; supplier; lot; Tiangong flow UUID; quantity; unit; gross mass; tare; net mass; accepted mass; returned mass; date | reconcile purchase receipts, BOM issues, and calibrated scale records by input identity | kg or resolved input unit | each lot; aggregate monthly | full reporting period, normally 12 consecutive months where available | every manufacturing site in scope | sum accepted mass by identity and site; normalize by net released product mass | purchase receipt; BOM revision; supplier specification; scale calibration; reconciliation sign-off |
| `cp_receipt_rejects` | `materials_component_receipt` | receipt rejects and damaged packaging | nonconformance and waste transfer records | waste identity; hazardous status; mass; unit; return or waste status; destination; date | weigh each reject stream and reconcile supplier returns separately | kg | each event; aggregate monthly | full reporting period | every receiving area in scope | sum waste mass by identity and destination; exclude supplier returns that remain products | nonconformance report; scale record; waste manifest; return authorization |
| `cp_preparation_materials` | `parts_electronics_preparation` | materials consumed in in-house preparation | material issue and return records | route; input identity; issued quantity; returned quantity; unit; lot; date | reconcile issued and returned quantities for each included route | kg or resolved input unit | each batch; aggregate monthly | full reporting period | each in-house preparation route | consumed quantity equals issued minus unused return; normalize by released mass | ERP issue/return record; route traveller; stock reconciliation |
| `cp_preparation_energy` | `parts_electronics_preparation` | preparation electricity and energy carriers | meter, equipment log, and production record | meter id; start/end reading; energy carrier; unit; route; runtime; allocation driver; period | direct submetering preferred; otherwise calculate a documented share of a shared meter | kWh or MJ | continuous or each batch; aggregate monthly | full reporting period | each included preparation route | sum direct energy or apply disclosed causal allocation; normalize by released mass | meter calibration; utility invoice; equipment log; allocation worksheet |
| `cp_prepared_subassemblies` | `parts_electronics_preparation` | accepted prepared output | route traveller and scale record | subassembly identity; model; route; accepted quantity; net mass; unit; transfer date | weigh or count with verified count-to-mass conversion at transfer | kg | each batch | full reporting period | each included preparation route | sum accepted output by route and model; normalize by released mass | transfer record; scale calibration; inspection acceptance |
| `cp_preparation_waste` | `parts_electronics_preparation` | preparation waste | waste log and transfer document | waste identity; hazardous status; mass; unit; route; destination; date | weigh by waste stream and reconcile with external transfer documents | kg | each event; aggregate monthly | full reporting period | each included preparation route | sum by waste identity and destination; normalize by released mass | scale record; waste manifest; treatment receipt |
| `cp_preparation_emissions` | `parts_electronics_preparation` | direct preparation emissions | monitoring and discharge record | substance; compartment; concentration; flow or volume; measured mass; calculation factor; period | use calibrated direct monitoring or calculate from monitored concentration and discharge volume | resolved elementary-flow unit | monitoring frequency required by process control or permit | full reporting period | each direct emission point in scope | sum measured or calculated release by substance and compartment; normalize by released mass | calibration record; laboratory report; permit report; calculation sheet |
| `cp_assembly_inputs` | `final_assembly` | assembly component consumption | BOM, issue, return, and route records | component identity; model; issued quantity; returned quantity; unit; lot; date | reconcile product-model BOM with issued and returned quantities | kg or resolved component unit | each batch; aggregate monthly | full reporting period | every final assembly line in scope | consumed quantity equals issued minus unused return by component; normalize by released mass | BOM revision; issue/return record; route traveller; reconciliation sign-off |
| `cp_assembly_energy` | `final_assembly` | assembly electricity and utilities | meter and production records | meter id; start/end reading; energy carrier; unit; line; runtime; allocation driver; period | direct submetering preferred; otherwise documented causal allocation | kWh or MJ | continuous or each batch; aggregate monthly | full reporting period | every final assembly line in scope | sum direct energy or apply disclosed allocation; normalize by released mass | meter calibration; utility invoice; equipment log; allocation worksheet |
| `cp_assembled_output` | `final_assembly` | assembled instrument output | transfer and scale record | model; batch; assembled count; net mass; unit; test-route destination; date | weigh transfer batches or apply verified count-to-mass conversion | kg | each batch | full reporting period | every final assembly line in scope | sum assembled mass transferred to test; normalize by released mass | transfer record; scale calibration; count-to-mass worksheet |
| `cp_assembly_waste` | `final_assembly` | assembly waste and rejects | waste and nonconformance records | waste identity; component identity; hazardous status; mass; rework status; destination; date | weigh waste; keep rework and return-to-stock records separate | kg | each event; aggregate monthly | full reporting period | every final assembly line in scope | sum only material leaving product or rework loops as waste; normalize by released mass | waste log; nonconformance report; waste manifest |
| `cp_test_inputs` | `calibration_functional_testing` | instruments entering calibration or functional test | test-route and transfer records | model; batch; test procedure; input count; input net mass; date | reconcile transfer records with test-system batch records | kg | each batch | full reporting period | every calibration and test route in scope | sum input mass by route and model; normalize by released mass | transfer record; test-system log; scale or conversion evidence |
| `cp_test_energy_consumables` | `calibration_functional_testing` | test energy and consumables | meter, equipment, test-system, and inventory records | test route; equipment id; power; runtime; metered energy; consumable identity; issued/returned quantity; unit; period | direct meter reading or power multiplied by recorded runtime; consumables from issue minus return | kWh, MJ, kg, or resolved unit | each batch or continuous; aggregate monthly | full reporting period | every calibration and test route in scope | calculate energy and consumable use by route; normalize by conforming released mass | meter calibration; equipment specification; runtime log; inventory record; calculation sheet |
| `cp_conforming_output` | `calibration_functional_testing` | conforming calibrated or verified output | calibration certificate and acceptance record | model; serial or batch id; measured function; range; accuracy or uncertainty; recording capability; test standard; result; conforming count; net mass; date | accept only units meeting declared criteria; weigh or use verified count-to-mass conversion | kg | each batch | full reporting period | every calibration and test route in scope | sum conforming net mass by model and route; normalize by released mass | calibration certificate; test report; acceptance record; scale or conversion evidence |
| `cp_test_rejects` | `calibration_functional_testing` | failed units, parts, and spent consumables | nonconformance, rework, and waste records | identity; failure mode; mass; rework status; return-to-stock status; waste status; destination; date | reconcile failures into rework, returned parts, and waste without double counting | kg | each event; aggregate monthly | full reporting period | every calibration and test route in scope | sum waste only after removing successful rework and return-to-stock quantities; normalize by released mass | test log; nonconformance report; rework closure; waste manifest |
| `cp_packaging_product_input` | `packaging_release` | conforming product entering packaging | transfer and scale record | model; batch; conforming count; net mass; included accessories; date | weigh net product before packaging or apply verified count-to-mass conversion | kg | each batch | full reporting period | every packaging line in scope | sum net product mass entering packaging; reconcile to released mass and packaging rejects | transfer record; scale calibration; product configuration record |
| `cp_packaging_inputs` | `packaging_release` | packaging, manuals, and labels consumed | packaging BOM and issue/return records | material identity; packaging level; reusable status; issued mass; returned mass; unit; model; date | reconcile packaging BOM with issued and returned mass | kg | each batch; aggregate monthly | full reporting period | every packaging line in scope | consumed mass equals issued minus unused return by material; normalize by net released mass | packaging BOM; supplier specification; issue/return record; scale calibration |
| `cp_packaging_waste` | `packaging_release` | packaging and labelling waste | waste and obsolete-stock records | waste identity; mass; hazardous status; destination; reason; date | weigh waste by material and reconcile obsolete stock destruction | kg | each event; aggregate monthly | full reporting period | every packaging line in scope | sum by waste material and destination; normalize by net released mass | scale record; waste log; destruction authorization; waste manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground inventory rows | normalized amount = reporting-period amount / reporting-period net mass of conforming released product in kg | reporting-period row amount; released net product mass | amount per 1 kg released reference product | `pep-ecopassport-pcr-2021` |
| `calc_count_to_mass` | item-count records | represented mass = item count × measured mean net mass per item for the same model and period; use total weighing when available | item count; sampled or total net mass; sample size; model identifier | kg represented mass | `pep-ecopassport-pcr-2021` |
| `calc_consumed_input` | materials, components, consumables, and packaging | consumed quantity = issued or received quantity − unused return − supplier return | issued or received quantity; unused return; supplier return | consumed foreground input quantity | `pep-ecopassport-pcr-2021` |
| `calc_shared_utility_allocation` | shared electricity, water, fuel, and utilities | allocated quantity = shared measured total × product causal-driver quantity / total causal-driver quantity; disclose driver and period | shared total; product driver; total driver | allocated utility quantity | `iso-14044-2006`; `pep-ecopassport-pcr-2021` |
| `calc_test_energy` | unmetered test equipment with recorded operation | test energy = verified equipment demand × recorded operating time; add directly metered auxiliary energy separately | equipment demand; operating time; directly metered auxiliary energy | kWh or MJ test energy | `pep-ecopassport-pcr-2021` |
| `calc_mass_reconciliation` | each process and reporting period | inputs + opening work-in-process = accepted outputs + waste + returns + closing work-in-process + documented mass change; investigate unresolved residuals | input mass; opening and closing work-in-process; output mass; waste; returns; documented mass change | mass-balance residual and reconciliation status | `pep-ecopassport-pcr-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all purchased inputs | Preserve model/product-family identity, measured electrical quantity, function, range, accuracy or uncertainty, recording capability, hardware configuration, BOM revision, supplier identity, and exact resolved flow UUID. | product specification; calibration or acceptance record; BOM; supplier record; Tiangong identity check |
| `dq_temporal` | all foreground records | Use one coherent reporting period, preferably 12 consecutive months where available; disclose shorter periods and seasonal or campaign limitations. | dated records; reporting-period reconciliation; representativeness statement |
| `dq_geography_technology` | every site and upstream link | Represent every included manufacturing site and technology route; document the aggregation method and use upstream datasets matching actual supply geography and technology where possible. | site list; route map; production shares; upstream dataset metadata; proxy justification |
| `dq_measurement` | meters, scales, test systems, and calculations | Retain calibration status, precision, unit, raw reading, conversion, formula, and responsible source system for each measured or calculated quantity. | calibration certificate; raw log; calculation worksheet; audit trail |
| `dq_completeness` | materials, energy, water, emissions, and waste | Demonstrate coverage against BOM, purchase, utility, production, release, and waste totals; quantify and justify exclusions and unresolved mass-balance residuals. | completeness matrix; reconciliations; cut-off register; residual investigation |
| `dq_allocation` | shared processes and utilities | Retain the unallocated total, selected causal driver, numerator, denominator, allocation factor, affected products, and sensitivity or justification. | allocation worksheet; meter map; production record; sensitivity record |
| `dq_secondary_data` | upstream and downstream linked datasets | Record source, version or reference date, temporal, geographic, and technological representativeness, and every proxy or substitution. | dataset metadata; source register; proxy review |
| `dq_reproducibility` | complete data package | An independent reviewer shall be able to reproduce normalized values from retained raw records, formulas, mappings, and allocation decisions. | calculation workbook or script; immutable extracts; reviewer checklist |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | The reference output shall use product flow `cf601a2b-131a-41c5-a82f-b20a0c90cdad`, Mass flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg without dataset versions. |  |
| `validation_reference_amount` | normalized foreground package | Released conforming net product mass shall equal exactly 1 kg after normalization; packaging mass shall remain separate. | `pep-ecopassport-pcr-2021` |
| `validation_category_qualifiers` | product identity | The measured electrical quantity, instrument function, range, accuracy class or uncertainty, recording capability, model or family, hardware configuration, included accessories, calibration or acceptance basis, site, period, and market geography shall all be declared. | `un-cpc-3-2025`; `pep-ecopassport-pcr-2021` |
| `validation_process_coverage` | process map and inventory | Every required process and every applicable conditional route shall have linked foreground records for product inputs, energy and utilities, outputs, rejects, waste, and direct emissions where present. | `pep-ecopassport-pcr-2021` |
| `validation_mass_reconciliation` | each process and reporting period | Mass inputs, accepted outputs, returns, work-in-process changes, waste, and documented mass changes shall reconcile; every unresolved residual shall be quantified and reviewed. | `pep-ecopassport-pcr-2021` |
| `validation_no_double_counting` | rework, returns, waste, and recycling | A quantity shall not be counted simultaneously as returned product, rework, waste, and recycling output; all handoffs and downstream treatment links shall be explicit. | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `validation_allocation_disclosure` | allocated foreground data | Every allocated amount shall expose the shared total, driver, factor, period, affected products and processes, and reason subdivision was not feasible. | `iso-14044-2006`; `eu-pef-method-2021` |
| `validation_downstream_separation` | manufacturing dataset and lifecyclemodel | Product-specific distribution, installation, use, maintenance, service life, and end-of-life scenarios shall not be embedded as generic CPC 48249 manufacturing defaults; downstream lifecycle models shall identify and source them explicitly. | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `validation_no_approximate_uuid` | non-reference inventory flows | Every concrete material, component, energy, waste, and elementary flow shall use a semantically exact resolved Tiangong flow UUID; approximate or neighboring CPC flows shall not be substituted silently. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for a finished electrical measuring or checking instrument n.e.c.; publishable as a secondary_dataset or background_dataset only after review |
| downstream_use | Construct product-specific `process` datasets and downstream cradle-to-gate or cradle-to-grave `lifecyclemodel` projections |
| allowed_use | Manufacturing inventory for products proven to meet this semantic category boundary and represented by the declared model/configuration, sites, technologies, geography, and reporting period |
| excluded_use | Direct comparison of instruments with different functions or performance; generic use-stage or service-life modelling; products in more specific CPC categories; parts-only datasets; undisclosed proxies; unreviewed extrapolation across heterogeneous product families |
| required_metadata | canonical PCR id; CPC reference; product model or homogeneous family; measured electrical quantity; function; range; accuracy or uncertainty; recording capability; hardware configuration; included accessories; net product mass; calibration or acceptance basis; sites; routes; reporting period; geography; BOM coverage; packaging scope; upstream dataset references; cut-offs; allocation; data-quality evidence |
| required_quality_disclosure | Primary-data period and coverage; site and production coverage; measurement and calibration status; completeness and mass-balance results; shared-resource allocations; upstream proxy choices; unresolved residuals; waste destinations; excluded downstream stages; reviewer status |
| update_trigger | Change in measured function or product category; product or BOM redesign; material or supplier change; manufacturing route, site, technology, yield, energy source, packaging, calibration, use scenario, service life, or end-of-life scenario that materially changes representation; expiration of temporal representativeness; corrected UUID or classification identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `pep-ecopassport-pcr-2021` | official_guidance | PEP ecopassport Program, Product Category Rules for Electrical, Electronic and HVAC-R Products, PCR-ed4-EN-2021 09 06, https://register.pep-ecopassport.org/documents (retrieved 2026-08-09) | Category-relevant reference flow, manufacturing and packaging boundary, process and waste coverage, allocation, primary data collection, units, constituent materials, data quality, and downstream life-cycle stages |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-09) | Life-cycle system boundary, upstream data representativeness, allocation hierarchy, materiality, data quality, and disclosure |
| `eu-weee-directive-2012-19` | official_guidance | Directive 2012/19/EU on waste electrical and electronic equipment, consolidated text, https://eur-lex.europa.eu/eli/dir/2012/19/2024-04-08 (retrieved 2026-08-09) | Identification of monitoring and control instruments as electrical and electronic equipment and explicit downstream collection, treatment, recovery, recycling, and disposal scenario requirements |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (confirmed current in 2022; retrieved 2026-08-09) | Goal and scope, inventory, allocation, data quality, reporting, interpretation, and review principles |
| `un-cpc-3-2025` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure, adopted 2025, https://unstats.un.org/unsd/classifications/econ (retrieved 2026-08-09) | Official classification coordinate and residual product-category identity for CPC 48249 |
