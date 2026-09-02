---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.lifts-skip-hoists-escalators-and-moving-walkways
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Lifts, skip hoists, escalators and moving walkways

## 1. Scope and Applicability

This PCR governs foreground data packages for manufacturing complete lifts (elevators), skip hoists, escalators, and moving walkways. It covers passenger, goods, or mixed-service equipment with vertical, inclined, or horizontal travel when the equipment is supplied as a functionally complete manufactured system. The product-specific bill of materials (BOM), manufacturing route, factory tests, equipment subtype, and factory-gate condition must be declared.

The common methodology ends at the manufacturing factory gate. In-house component fabrication is included when performed by the reporting manufacturer. Installation and commissioning, operation and maintenance, modernization, and dismantling or end-of-life treatment are separate conditional processes and must not be silently merged into the manufacturing dataset. If a downstream process is added, its scenario, geography, service life, duty or usage category, and energy boundary must be explicit.

The category excludes standalone lifting accessories, cranes, winches, jacks, forklift trucks, continuous-action conveyors classified outside CPC 43540, building shafts and supporting civil works, and unrelated building services. Replacement parts or isolated subsystems are excluded unless the dataset clearly declares a part or subsystem study and does not present it as a complete-equipment result.

The official lift c-PCR applies only to lifts and explicitly does not apply to skip hoists, escalators, or moving walkways. Accordingly, lift-specific rules may inform only the lift subtype. Escalator and moving-walk operational energy uses ISO 25745-3; lift operational energy uses ISO 25745-2; skip-hoist energy remains a foreground measurement or documented engineering calculation rather than an extrapolation from either standard.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.lifts-skip-hoists-escalators-and-moving-walkways |
| classification_refs | CPC 3.0: 43540 — Lifts, skip hoists, escalators and moving walkways |
| covered_products | Functionally complete manufactured lifts/elevators, skip hoists, escalators, and moving walkways for passenger, goods, material, or mixed service |
| excluded_products | Standalone components and replacement parts; lifting accessories; cranes; winches; jacks; forklift trucks; conveyors outside CPC 43540; building shafts, pits, supporting structures, and unrelated building services |
| representative_product | One declared complete equipment system at the manufacturing factory gate, normalized by dry product mass |
| production_route | Purchased and/or in-house fabricated components → system assembly and integration → factory testing and acceptance → packaging and factory-gate release |
| market_state | Finished, functionally complete, manufactured equipment at factory gate; installed or in-use state only in separately declared conditional processes |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A functionally complete manufactured lift, skip hoist, escalator, or moving walkway in its declared factory-gate configuration |
| How much | 1 kg dry mass of the complete factory-gate equipment |
| How well | Meets the declared equipment subtype, rated load or passenger capacity, travel geometry, rated speed, drive technology, duty or usage category, factory acceptance criteria, and applicable market specification |
| How long or cycle | One manufacturing reporting period; service life is outside the common manufacturing reference and is mandatory only when a conditional downstream use-stage model is added |
| reference_flow_link | The 1 kg output is the mass-normalized share of one complete accepted equipment system; whole-unit dry mass must be retained to scale between the PCR reference flow and one installed or sold unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Lifts, skip hoists, escalators and moving walkways `71c9140f-5a21-4ba8-ac40-c272cdf45654` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | equipment_subtype; passenger_goods_or_material_service; complete_or_subsystem_scope; whole_unit_dry_mass_kg; rated_load_or_capacity; vertical_rise_inclined_length_or_horizontal_length; rated_speed; drive_or_traction_technology; duty_or_usage_category; manufacturing_geography; factory_gate_condition; reporting_period; installation_scope; reference_service_life_if_use_stage_included; operational_energy_method_if_use_stage_included |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Complete factory-gate reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference output as 1 kg dry equipment mass and retain measured or BOM-reconciled whole-unit dry mass for scaling. Exclude temporary test loads, installation tools, transport packaging, and building works from equipment mass unless they are sold as part of the product. |
| `bom_mass_basis` | Materials, purchased components, internal assemblies, and product outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net incorporated mass, input mass before losses, and waste or reject mass separately. Do not infer component shares from a generic equipment design. |
| `energy_carrier_preservation` | Manufacturing, testing, installation, and operational energy | Flow-specific energy property | kWh or MJ | Preserve the measured carrier and unit. Convert only with an explicit factor and retain the original reading, factor, converted value, and selected geography- and voltage-appropriate Tiangong energy flow. |
| `operational_energy_boundary` | Conditional use-stage energy | Flow-specific energy property | kWh per declared period | Meter or calculate only equipment-associated energy on a single-unit basis. Disclose ancillary loads and exclude them from the equipment result unless the declared scenario intentionally includes them. |
| `lift_operational_energy` | Conditional lift use stage | Flow-specific energy property | kWh/year | For lifts within the ISO 25745-2 applicability domain, use measured values, calculation, or simulation on an annual single-unit basis and disclose the chosen method and applicable lift subtype. |
| `escalator_walk_operational_energy` | Conditional escalator or moving-walk use stage | Flow-specific energy property | kWh/year | Apply ISO 25745-3 for escalators and moving walks within its declared applicability. Disclose equipment outside its stated rise or length domain and do not present the classification as directly comparable without an approved extension. |
| `skip_hoist_operational_energy` | Conditional skip-hoist use stage | Flow-specific energy property | kWh or MJ per declared duty period | Use metered foreground energy or a documented engineering calculation tied to payload, travel, cycles, standby, and auxiliaries. Do not substitute ISO 25745-2 or ISO 25745-3 default behaviour without evidence that the method is applicable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Product-specific BOM and accepted purchased materials, components, and subassemblies at the reporting manufacturer's receiving boundary, with upstream datasets linked for their production and delivery |
| starting_condition_role | The foreground starts at manufacturer-controlled receipt and covers all manufacturer-controlled preparation, assembly, testing, acceptance, packaging, and factory-gate release activities |
| product_classification_scope | Complete equipment within the reviewed semantic scope; the CPC 43540 reference is mapping context and does not authorize inclusion of unrelated lifting or conveying machinery |
| recursive_input_rule | A purchased lift, skip hoist, escalator, moving-walk subsystem, or same-category complete unit used as an input is recorded once as a product input with an upstream dataset; its internal manufacture is not recursively expanded in the same foreground package |
| upstream_dataset_requirement | Each purchased material, component, energy carrier, transport service, treatment service, and other technosphere input requires a representative upstream dataset or an explicit unresolved-data disclosure |
| disclosure | Declare equipment subtype, complete-versus-subsystem scope, BOM coverage, outsourced and in-house operations, geography, factory-gate condition, exclusions, allocation drivers, and whether installation, use, maintenance, modernization, or end-of-life processes are present |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_product_specific_bom` | Product and manufacturing scope | Use a product-specific BOM and company- or site-specific manufacturing records for the equipment in scope. Generic component shares may be used only as an explicitly disclosed temporary data gap, not as a conforming foreground result. | `eu-pef-method-2021`; `epd-intl-cpcr-008-lifts-v2-0-0` |
| `sb_factory_gate_core` | Common foreground boundary | Include manufacturer-controlled component preparation, assembly, integration, factory testing, acceptance, packaging, and factory-gate release. Identify co-products, by-products, rejects, and wastes crossing the foreground boundary. | `eu-pef-method-2021` |
| `sb_conditional_downstream` | Installation, use, maintenance, modernization, and end of life | Model downstream stages only as explicit conditional processes with their own scenario, geography, time basis, and data sources. Their exclusion from a factory-gate dataset must be stated and must not be interpreted as zero impact. | `eu-pef-method-2021`; `epd-intl-pcr-2019-14-v2-0-1` |
| `sb_subtype_method_separation` | Equipment subtype | Apply lift-specific PCR evidence only to lifts. Apply ISO 25745-2 only to applicable lifts and ISO 25745-3 only to applicable escalators and moving walks. Keep skip-hoist rules grounded in foreground records or separately applicable evidence. | `epd-intl-cpcr-008-lifts-v2-0-0`; `iso-25745-2-2015`; `iso-25745-3-2015` |
| `sb_ancillary_energy_disclosure` | Conditional operational energy | Separate equipment-associated operational energy from building or site ancillary loads. List every included and excluded ancillary load and retain meter-boundary evidence. | `iso-25745-1-2023`; `iso-25745-3-2015` |
| `sb_exclusion_justification` | All exclusions and cut-offs | Document the reason and potential significance of each excluded process or flow. Do not omit a relevant flow solely because its quantity or UUID is not yet available. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_manufacturing_and_preparation` | Component manufacturing and preparation | conditional | Include every in-house cutting, forming, machining, welding, coating, wiring, controller build, drive build, or other component operation controlled by the reporting manufacturer | Foreground component production | Per 1 kg complete factory-gate reference product |
| `final_assembly_and_integration` | Final assembly and system integration | required | Always include for complete equipment | Foreground equipment assembly | Per 1 kg complete factory-gate reference product |
| `factory_testing_and_acceptance` | Factory testing and acceptance | required | Always include tests and rework required before factory release | Foreground quality assurance | Per 1 kg accepted equipment |
| `packaging_and_factory_gate_release` | Packaging and factory-gate release | required | Always include packaging and release operations; report zero packaging only with evidence | Foreground finishing and release | 1 kg complete accepted equipment at factory gate |
| `installation_and_commissioning` | Installation and commissioning | excluded_by_default | Add only when the dataset explicitly covers installed equipment | Conditional downstream process | Per 1 kg factory-gate equipment and declared installation scenario |
| `operation_and_maintenance` | Operation and maintenance | conditional | Include only for a declared use-stage dataset or lifecycle model | Conditional downstream use process | Per 1 kg factory-gate equipment over the declared service life and duty scenario |
| `modernization` | Modernization | excluded_by_default | Add only when a declared modernization scenario changes equipment or service life | Conditional downstream process | Per declared modernization event |
| `dismantling_and_end_of_life` | Dismantling and end-of-life treatment | excluded_by_default | Add only when the dataset explicitly covers end of life | Conditional downstream process | Per 1 kg factory-gate equipment under the declared end-of-life scenario |

### Process: Component manufacturing and preparation (`component_manufacturing_and_preparation`)

#### Inputs

##### Product flows

###### Raw and semifinished materials and purchased component inputs (`component_material_inputs`)

Record the actual materials, purchased components, electronics, drive or hydraulic parts, ropes or belts, structural members, steps or pallets, guide systems, enclosures, and auxiliaries entering manufacturer-controlled component preparation. Disaggregate by materially and technically distinct flow.

- Selected flow: Select the Tiangong product flow matching each recorded material or component; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Product-specific received and issued mass from BOM, purchasing, stores, or production records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources:

###### Component-preparation energy and utilities (`component_process_energy`)

Record metered electricity, fuels, compressed air, process heat, and other utilities for included in-house component operations. Select geography- and carrier-appropriate Tiangong flows at dataset construction time.

- Selected flow: Select the Tiangong product flow matching each measured energy carrier or utility; no category-wide UUID
- Flow property / unit: Carrier-specific energy or service property / original metered unit
- Amount rule: Metered use directly attributable to the equipment or allocated under section 7
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared components transferred to final assembly (`prepared_components_output`)

Record the reconciled mass of in-house prepared components released to final assembly. Internal transfers must not duplicate the upstream material burden.

- Selected flow: Select a Tiangong product flow matching the prepared component or use a documented internal intermediate; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Accepted component mass calculated from production records and the component mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_materials`
- Sources:

##### Waste flows

###### Component fabrication rejects, scrap, and treatment-bound waste (`component_process_waste`)

Separate metal scrap, swarf, spent process chemicals, coating waste, wastewater, and other treatment-bound outputs by destination and regulatory class.

- Selected flow: Select the Tiangong waste flow matching each recorded waste and treatment route; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste, consignment records, or reconciled batch difference with uncertainty disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_waste_and_emissions`
- Sources:

##### Elementary flows

###### Direct emissions from component operations (`component_direct_emissions`)

Record measured or permit-calculated releases to air, water, and soil from included welding, coating, cleaning, combustion, or other component processes. Do not use a waste flow for an environmental release.

- Selected flow: Select the Tiangong elementary flow matching each measured or calculated substance and compartment; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured emission or calculation from collected activity and an identified method factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_waste_and_emissions`
- Sources:

### Process: Final assembly and system integration (`final_assembly_and_integration`)

#### Inputs

##### Product flows

###### Product-specific BOM components and subassemblies (`assembly_bom_inputs`)

Record all purchased and in-house prepared components incorporated in the final system, keeping net incorporated mass distinct from input losses and packaging.

- Selected flow: Select the Tiangong product flow matching each BOM item; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Product-specific issued and incorporated mass from BOM and assembly records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Assembly energy, utilities, and consumables (`assembly_energy_and_consumables`)

Record attributable electricity, fuels, compressed air, lubricants, cleaning agents, fasteners, and other assembly inputs, disaggregated by flow.

- Selected flow: Select the Tiangong product flow matching each recorded carrier or consumable; no category-wide UUID
- Flow property / unit: Flow-specific property / original recorded unit
- Amount rule: Direct meter, issue record, or section 7 allocation from shared records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled equipment transferred to factory testing (`assembled_equipment_output`)

Record the dry mass of the integrated equipment transferred to factory testing, before temporary test media or loads.

- Selected flow: Lifts, skip hoists, escalators and moving walkways `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: BOM-reconciled assembled dry mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Waste flows

###### Assembly rejects and waste (`assembly_waste`)

Record rejected components, offcuts, spills, and other assembly waste separately from reusable rework and internal transfers.

- Selected flow: Select the Tiangong waste flow matching each recorded waste and treatment route; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste or reconciled production record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Elementary flows

### Process: Factory testing and acceptance (`factory_testing_and_acceptance`)

#### Inputs

##### Product flows

###### Assembled equipment entering test (`test_equipment_input`)

Carry the assembled equipment mass into testing without adding a second upstream production burden.

- Selected flow: Lifts, skip hoists, escalators and moving walkways `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Transferred assembled dry mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_testing`
- Sources:

###### Test energy, media, and consumables (`factory_test_inputs`)

Record electricity, fuels, temporary operating media, hydraulic-fluid make-up, and consumables used for factory tests. Temporary test weights or media returned unchanged are tracked as reusable test assets and not incorporated into product mass.

- Selected flow: Select the Tiangong product flow matching each recorded test input; no category-wide UUID
- Flow property / unit: Flow-specific property / original recorded unit
- Amount rule: Test-meter reading or issued-minus-returned quantity for the accepted equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_testing`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted equipment transferred to packaging (`accepted_equipment_output`)

Record only equipment that passes the declared factory acceptance criteria; reworked units remain within the foreground until acceptance.

- Selected flow: Lifts, skip hoists, escalators and moving walkways `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Accepted dry mass after test and rework reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_testing`
- Sources:

##### Waste flows

###### Test waste and non-returned operating media (`factory_test_waste`)

Record discarded test media, leaked or drained fluids sent to treatment, and test rejects by treatment route.

- Selected flow: Select the Tiangong waste flow matching each recorded waste and treatment route; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered, or issued-minus-returned quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_testing`
- Sources:

##### Elementary flows

###### Direct emissions during factory testing (`factory_test_direct_emissions`)

Record direct combustion emissions and releases of hydraulic or other operating fluids to the environment when they occur. Zero is allowed only with evidence that the release pathway is absent.

- Selected flow: Select the Tiangong elementary flow matching each substance and compartment; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measurement or calculation from collected fuel or fluid loss and an identified method factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_testing`
- Sources:

### Process: Packaging and factory-gate release (`packaging_and_factory_gate_release`)

#### Inputs

##### Product flows

###### Accepted equipment entering packaging (`packaging_equipment_input`)

Carry the accepted equipment into packaging without duplicating its upstream burden.

- Selected flow: Lifts, skip hoists, escalators and moving walkways `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Accepted dry equipment mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources:

###### Packaging materials and release consumables (`packaging_material_inputs`)

Record pallets, crates, timber, cardboard, plastics, corrosion protection, labels, and other materials delivered with or consumed in factory-gate packaging. Keep packaging mass separate from equipment dry mass.

- Selected flow: Select the Tiangong product flow matching each packaging or release material; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Packing-list, issue, or weighed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete accepted factory-gate equipment (`factory_gate_reference_product`)

This is the quantitative reference output. It represents the dry equipment only; accompanying packaging is reported as a separate product input or output according to the data package design.

- Selected flow: Lifts, skip hoists, escalators and moving walkways `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization from the measured or BOM-reconciled whole-unit dry mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources:

##### Waste flows

###### Packaging operation waste (`packaging_operation_waste`)

Record packaging offcuts, damaged packaging, and other release-operation waste by treatment route.

- Selected flow: Select the Tiangong waste flow matching each recorded waste and treatment route; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste or packing-material reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources:

##### Elementary flows

### Process: Operation and maintenance (`operation_and_maintenance`)

#### Inputs

##### Product flows

###### Installed equipment entering the use scenario (`installed_equipment_input`)

Use this internal link only when a separate downstream model includes installation and a declared service life. The factory-gate manufacturing dataset remains independently usable.

- Selected flow: Lifts, skip hoists, escalators and moving walkways `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Factory-gate equipment mass linked to the declared installed-unit scenario
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_scenario_identity`
- Sources:

###### Equipment operational electricity (`operational_electricity`)

Record equipment-associated energy using the applicable subtype method and declared duty scenario. Select the electricity flow for the actual geography, voltage level, and market state; the search result alone does not select a universal electricity UUID.

- Selected flow: Select a geography-, voltage-, and market-state-appropriate Tiangong electricity product flow; no category-wide UUID
- Flow property / unit: Energy / kWh
- Amount rule: Lift annual energy per ISO 25745-2 where applicable; escalator or moving-walk energy per ISO 25745-3 where applicable; skip-hoist metering or documented engineering calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product over the declared service life and duty scenario
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_operational_energy`
- Sources: `iso-25745-1-2023`; `iso-25745-2-2015`; `iso-25745-3-2015`

###### Maintenance parts and consumables (`maintenance_inputs`)

Record replaced parts, lubricants, hydraulic fluids, cleaning materials, and service travel inputs for the declared maintenance plan. Do not use a category-average replacement rate without evidence.

- Selected flow: Select the Tiangong product or service flow matching each maintenance record; no category-wide UUID
- Flow property / unit: Flow-specific property / recorded unit
- Amount rule: Maintenance log, invoice, parts issue, service travel, or fluid top-up record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Declared transport service (`transport_service_output`)

Report the service output only in a subtype-specific downstream model. The service metric must be declared and must not be used to compare unlike equipment subtypes without a reviewed common functional equivalence.

- Selected flow: Select or create a reviewed service-flow identity appropriate to the declared equipment subtype; no category-wide UUID
- Flow property / unit: Declared service property / passenger-metre, tonne-metre, cycle, or other reviewed unit
- Amount rule: Calculated from declared payload or passenger basis, travel distance, completed cycles, availability, and service period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared installed-unit use scenario
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_operational_energy`
- Sources: `iso-25745-2-2015`; `iso-25745-3-2015`

##### Waste flows

###### Maintenance waste and replaced parts (`maintenance_waste`)

Record removed parts, spent fluids, cleaning waste, and other maintenance outputs by actual treatment route.

- Selected flow: Select the Tiangong waste flow matching each recorded waste and treatment route; no category-wide UUID
- Flow property / unit: Flow-specific property / recorded unit
- Amount rule: Maintenance log and waste consignment record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance_records`
- Sources:

##### Elementary flows

###### Operational fluid releases to the environment (`operational_fluid_releases`)

Record only actual or calculated releases to an environmental compartment. Fluid removed for treatment is a waste flow, not an elementary emission.

- Selected flow: Select the Tiangong elementary flow matching each released substance and compartment; no category-wide UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured loss or opening-plus-additions-minus-closing-inventory-minus-treatment-bound removal
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg complete factory-gate reference product over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | Shared and multifunctional manufacturing processes | Avoid allocation by metering, production-order tracking, or subdivision. If that is not possible, document why and use a causal physical driver such as machine time, energy demand, processed mass, or tested unit-hours. | `eu-pef-method-2021` |
| `alloc_other_relationship_last` | Residual shared burdens | Use economic or another non-physical relationship only after subdivision, system expansion, and a relevant physical relationship have been shown impracticable. Record the data period, factor calculation, affected processes, and sensitivity. | `eu-pef-method-2021` |
| `alloc_internal_transfers` | Internal components and intermediate equipment states | Carry internal transfers without duplicating upstream burdens. Allocate only the incremental process inputs and outputs of the receiving process. | `eu-pef-method-2021` |
| `alloc_rework_and_rejects` | Rework, rejects, and production scrap | Keep rework burdens with the accepted reference product. Record rejects and scrap as outputs; do not credit recycling or avoided production inside the foreground unless the chosen lifecycle method explicitly requires it and all parameters are disclosed. | `eu-pef-method-2021` |
| `alloc_packaging` | Equipment and packaging | Keep equipment dry mass and packaging mass separate. Allocate packaging-operation burdens using directly measured packing records or a causal driver; do not add packaging mass to the equipment reference output. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_manufacturing_and_preparation` | Material inputs and prepared component outputs | BOM, purchase, stores, batch, and production records | item_id; description; material_or_component_type; supplier; received_mass; issued_mass; accepted_output_mass; lot; unit; date | Reconcile product-specific BOM with receipts, issues, accepted outputs, and inventory change | kg and original unit | Per lot or production order | Full reporting period | All included component operations | Sum by item and production order, subtract documented inventory change, then normalize by accepted factory-gate dry mass | Approved BOM revision, scale calibration, purchase or stores record, and reconciliation log |
| `cp_component_energy` | `component_manufacturing_and_preparation` | Component-process energy and utilities | Meter, fuel, utility, and machine-hour records | carrier; meter_id; opening; closing; unit; machine_time; production_order; allocation_driver; geography; voltage_or_grade | Direct submeter where available; otherwise allocate a reconciled shared meter under section 7 | kWh, MJ, m3, kg, or original unit | Continuous, shift, batch, or monthly | Full reporting period with start and end | All included component operations | Direct use or shared total multiplied by documented causal allocation factor, then normalized by accepted dry mass | Meter identity and calibration, invoice reconciliation, and allocation worksheet |
| `cp_component_waste_and_emissions` | `component_manufacturing_and_preparation` | Component waste and direct emissions | Scale, waste consignment, permit monitoring, laboratory, and factor-calculation records | material_or_substance; flow_type; compartment_or_treatment; amount; unit; date; method; factor_source | Measure waste; measure emissions or calculate from collected activity and an identified method factor | kg and original unit | Per batch, shipment, monitoring period, or permit frequency | Full reporting period | All included component operations | Sum by flow identity and destination or compartment, then normalize by accepted dry mass | Scale record, consignment note, laboratory result, permit report, or calculation sheet |
| `cp_assembly_records` | `final_assembly_and_integration` | BOM inputs, assembly utilities, output, and waste | BOM, issue, meter, work-order, and waste records | equipment_id; item_id; issued_amount; incorporated_amount; utility_amount; output_mass; waste_amount; unit; date; driver | Link all records to the equipment or production order and reconcile material and shared resource use | kg and original unit | Per equipment or production order | Full reporting period | Final assembly line and support operations | Sum direct records; allocate shared records under section 7; normalize by accepted dry mass | BOM revision, work order, meter or issue record, scale record, and waste record |
| `cp_factory_testing` | `factory_testing_and_acceptance` | Test inputs, accepted output, rework, waste, and direct emissions | Test plan, meter, issue-return, acceptance, rework, and waste records | equipment_id; test_id; test_type; start; end; energy; test_media_issued; test_media_returned; accepted_mass; rework; waste; direct_release; unit | Link each test and rework event to the equipment and distinguish reusable test assets from consumed media | kg, kWh, MJ, or original unit | Per test event | All tests for equipment released in the reporting period | All factory test stations | Sum consumed inputs, rework, wastes, and releases for accepted equipment, then normalize by accepted dry mass | Approved test plan, meter record, issue-return record, acceptance certificate, and rework disposition |
| `cp_packaging_release` | `packaging_and_factory_gate_release` | Packaging inputs, reference output, and operation waste | Packing list, material issue, scale, release, and waste records | equipment_id; dry_mass; packaging_item; packaging_mass; waste_mass; release_date; unit | Reconcile accepted dry mass with packing and release records while keeping packaging separate | kg | Per released equipment | All equipment released in the reporting period | Factory packing and release boundary | Set reference output to accepted dry mass, aggregate packaging and waste separately, then normalize to 1 kg output | Calibrated scale or BOM mass reconciliation, signed packing list, and release record |
| `cp_use_scenario_identity` | `operation_and_maintenance` | Installed-unit identity and use scenario | Installation, commissioning, and scenario records | equipment_id; subtype; location; installed_mass; rise_or_length; speed; capacity; drive; duty_category; service_life; scenario_start; scenario_end | Bind the factory-gate product to one declared installed-unit scenario | kg, m, m/s, years, and declared capacity unit | Per scenario and change event | Declared service life or study period | Declared installation | One scenario record per modelled unit; document every change affecting function or energy | Commissioning record, technical specification, scenario approval, and service-life basis |
| `cp_operational_energy` | `operation_and_maintenance` | Equipment-associated operational energy and service | Meter, controller log, simulation, or engineering calculation | equipment_id; subtype; method; meter_boundary; active_energy; standby_energy; cycles; payload_or_passenger_basis; travel; operating_time; ancillary_loads; period; unit | Apply ISO 25745-2 to applicable lifts, ISO 25745-3 to applicable escalators or moving walks, or foreground measurement/calculation for skip hoists | kWh and declared service unit | Continuous or representative measurement, annual calculation, and at scenario change | Declared study period | Single installed unit | Annualize the accepted measurement or calculation, separate ancillary loads, and scale to declared service life and reference mass | Meter calibration, controller export, model inputs, method version, calculation sheet, and boundary diagram |
| `cp_maintenance_records` | `operation_and_maintenance` | Maintenance inputs, waste, service travel, and releases | Maintenance log, invoice, parts issue, fluid inventory, travel, and waste records | date; equipment_id; part_or_fluid; input_amount; removed_amount; treatment; travel_distance; mode; opening_inventory; closing_inventory; unit | Capture each maintenance event and reconcile fluids and removed parts | kg, L, km, tkm, and original unit | Per maintenance event | Declared study period | Declared installed unit and service network | Sum by flow and route over the study period, calculate releases by inventory balance where needed, then normalize | Signed maintenance record, invoice or issue record, fluid inventory, travel log, and consignment note |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All manufacturing inventory rows | normalized_amount = attributable_period_amount / accepted_factory_gate_dry_mass_kg | attributable_period_amount; accepted_factory_gate_dry_mass_kg | Amount per 1 kg complete factory-gate reference product | `eu-pef-method-2021` |
| `calc_shared_resource_allocation` | Shared energy, utilities, consumables, waste, and emissions | attributable_amount = reconciled_shared_total × causal_driver_for_product / sum_causal_drivers_for_all_products | reconciled_shared_total; product_driver; total_driver | Product-attributable foreground amount | `eu-pef-method-2021` |
| `calc_equipment_mass_balance` | Component preparation, assembly, testing, and release | unexplained_mass = inputs + opening_inventory − incorporated_output − recorded_waste − closing_inventory; investigate and disclose non-zero residuals | input_mass; opening_inventory; incorporated_output_mass; recorded_waste_mass; closing_inventory | Process mass-balance residual | `eu-pef-method-2021` |
| `calc_lift_annual_energy` | Applicable lift use scenario | Calculate annual single-unit energy from accepted measurements, calculation, or simulation under ISO 25745-2; retain method inputs and separate non-lift ancillary loads | active_energy; standby_energy; trips_or_cycles; usage_category; measurement_or_simulation_inputs | kWh/year per installed lift | `iso-25745-1-2023`; `iso-25745-2-2015` |
| `calc_escalator_walk_annual_energy` | Applicable escalator or moving-walk use scenario | Calculate and classify annual equipment energy under ISO 25745-3, retaining operating mode, running time, geometry, and excluded ancillary loads | measured_or_calculated_power; operating_time; operating_mode; rise_or_length; ancillary_loads | kWh/year per installed escalator or moving walk | `iso-25745-1-2023`; `iso-25745-3-2015` |
| `calc_skip_hoist_energy` | Skip-hoist use scenario | annual_or_period_energy = measured meter difference, or sum of documented drive, standby, and auxiliary energy over payload, travel, and cycle records; no lift or escalator default is imported automatically | meter_readings_or_power; operating_time; cycles; payload; travel; standby; auxiliaries | kWh or MJ per declared duty period |  |
| `calc_fluid_release_balance` | Operating or hydraulic fluid releases | environmental_release = opening_inventory + additions − closing_inventory − recovered_for_reuse − treatment_bound_removal; negative results are invalid | opening_inventory; additions; closing_inventory; recovered_amount; treatment_bound_amount | Mass released to the declared environmental compartment | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and scenario | Use one product-specific equipment configuration and one controlled BOM revision; declare every required qualifier. | Technical specification, BOM revision, product identifier, and release record |
| `dq_primary_manufacturing_data` | Manufacturer-controlled processes | Use company- or site-specific data for the product BOM and included manufacturing processes. | Meter, work order, issue, test, waste, and release records; `eu-pef-method-2021` |
| `dq_temporal_representativeness` | All foreground data | Cover a representative reporting period and disclose shutdowns, ramp-up, abnormal tests, rework campaigns, and substitutions. | Date-bounded records and representativeness statement |
| `dq_geographical_technological_match` | Upstream datasets and energy | Match material grade, component technology, energy carrier, voltage, market state, production geography, and treatment route; document every proxy. | Dataset metadata and proxy justification |
| `dq_completeness` | BOM, energy, waste, and emissions | Reconcile product mass and factory utilities; identify all exclusions and their potential significance rather than treating missing data as zero. | BOM reconciliation, utility reconciliation, mass balance, waste register, and exclusion log |
| `dq_operational_method` | Conditional use stage | Preserve the applicable ISO method, version, measurement or model boundary, equipment geometry, usage category, service life, and ancillary-load treatment. | Method report, meter boundary, calculation sheet, and scenario record |
| `dq_uncertainty_and_estimates` | Estimates and calculated values | Identify calculation factors, uncertainty, sensitivity, and replacement trigger. A `reasoned_estimate` must remain provisional and cannot silently become a conforming measured value. | Calculation sheet, source reference, uncertainty note, and review disposition |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_and_scope` | Reference product | Fail when canonical PCR id, equipment subtype, complete-versus-subsystem scope, CPC context, or required reference qualifiers are missing or contradictory. | `unsd-cpc-3-2025`; `epd-intl-cpcr-008-lifts-v2-0-0` |
| `val_reference_uuid_and_mass` | Reference flow | Require product flow `71c9140f-5a21-4ba8-ac40-c272cdf45654`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, reference output 1 kg, and a positive whole-unit dry mass. |  |
| `val_bom_and_mass_balance` | Manufacturing inventory | Require a product-specific BOM, separate equipment and packaging mass, process waste by route, and documented investigation of material mass-balance residuals. | `eu-pef-method-2021` |
| `val_required_processes` | Process coverage | Require final assembly and integration, factory testing and acceptance, and packaging and factory-gate release. Require component preparation whenever the manufacturer controls a listed component operation. | `eu-pef-method-2021` |
| `val_allocation_evidence` | Shared processes | Fail shared-resource allocation without a reconciled total, causal driver, denominator population, data period, and explanation of why direct measurement or subdivision was not used. | `eu-pef-method-2021` |
| `val_operational_subtype_method` | Conditional use-stage energy | Require the declared subtype-specific method. Reject lift c-PCR or ISO 25745-2 extrapolation to skip hoists, escalators, or moving walks; reject ISO 25745-3 extrapolation to lifts or skip hoists. | `epd-intl-cpcr-008-lifts-v2-0-0`; `iso-25745-2-2015`; `iso-25745-3-2015` |
| `val_operational_boundary` | Conditional use-stage energy | Require a single-unit equipment meter or model boundary, declared included and excluded ancillary loads, period, geometry, duty or usage category, and service life. | `iso-25745-1-2023`; `iso-25745-2-2015`; `iso-25745-3-2015` |
| `val_source_and_estimate_status` | External evidence and estimates | Fail an external-source value without a listed source id. Flag any `reasoned_estimate` as provisional and incomplete for activation until the review record explicitly accepts or replaces it. | `eu-pef-method-2021` |
| `val_completeness_and_exclusions` | Dataset completeness | Fail silent omissions, missing upstream dataset links, missing treatment routes, or exclusions without reason and potential-significance disclosure. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset for a reviewed product-specific manufacturing dataset; background_dataset only after independent methodology and data review confirms representativeness |
| downstream_use | Foreground data package for process authoring and lifecyclemodel construction; optional subtype-specific installation, use, maintenance, modernization, and end-of-life scenarios |
| allowed_use | Product-specific modelling for the declared equipment subtype, manufacturing route, geography, factory-gate state, time period, and quality level |
| excluded_use | Unqualified comparison across lifts, skip hoists, escalators, and moving walks; substitution for a complete-equipment dataset by a part or subsystem result; use-stage claims without a declared subtype method and service scenario |
| required_metadata | PCR id and version; equipment subtype; service type; complete or subsystem scope; whole-unit dry mass; capacity; rise or length; speed; drive technology; duty or usage category; BOM revision; manufacturing geography and period; factory-gate condition; process coverage; allocation drivers; upstream dataset references; installation and use-stage scope; service life when applicable |
| required_quality_disclosure | Primary-data share; BOM and utility reconciliation; mass-balance residual; temporal, geographic, and technological representativeness; proxy datasets; exclusions and potential significance; allocation method; operational-energy boundary; uncertainty; provisional estimates; source and UUID gaps |
| update_trigger | Material BOM or design change; new drive or control technology; manufacturing-site or energy-supply change; changed test or packaging route; revised service-life or duty scenario; changed operational-energy standard; new reviewed subtype PCR; replacement of a proxy or provisional estimate; UUID deprecation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, code 43540, “Lifts, skip hoists, escalators and moving walkways”, https://unstats.un.org/unsd/classifications/cpc/version3 (retrieved 2026-07-26) | Classification context and category-name scope only |
| `epd-intl-pcr-2019-14-v2-0-1` | Standard (`standard`) | EPD International, PCR 2019:14 Construction products (EN 15804+A2), version 2.0.1, https://www.environdec.com/pcr-library/pcr_6b99d07c-4b75-4763-4485-08dd775d2e49 (retrieved 2026-07-26) | Construction-product PCR context and existence of separate c-PCRs for lifts and for escalators/moving walks |
| `epd-intl-cpcr-008-lifts-v2-0-0` | Standard (`standard`) | EPD International, 2019:14-c-PCR-008 Lifts (elevators), version 2.0.0, https://www.environdec.com/pcr-library/pcr_bc9b668e-0689-4f7b-5d33-08de2daa222d (retrieved 2026-07-26) | Lift-only scope, complete lift systems as subsystems/components, and prohibition on applying the lift c-PCR to skip hoists, escalators, or moving walks |
| `iso-25745-1-2023` | Standard (`standard`) | ISO 25745-1:2023, Energy performance of lifts, escalators and moving walks — Part 1: Energy measurement and verification, https://www.iso.org/standard/78245.html (retrieved 2026-07-26) | Single-unit operational-energy measurement boundary and ancillary-load disclosure |
| `iso-25745-2-2015` | Standard (`standard`) | ISO 25745-2:2015 including applicable amendment, Energy performance of lifts, escalators and moving walks — Part 2: Energy calculation and classification for lifts (elevators), https://www.iso.org/standard/60951.html (retrieved 2026-07-26) | Annual measured, calculated, or simulated energy method for applicable lift subtypes |
| `iso-25745-3-2015` | Standard (`standard`) | ISO 25745-3:2015, Energy performance of lifts, escalators and moving walks — Part 3: Energy calculation and classification of escalators and moving walks, https://www.iso.org/standard/60952.html (retrieved 2026-07-26) | Escalator and moving-walk operational-energy method, applicability, and ancillary-load exclusions |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf (retrieved 2026-07-26) | Product-specific BOM and company data, system boundary, exclusion disclosure, allocation hierarchy, foreground collection, mass balance, and data quality |
