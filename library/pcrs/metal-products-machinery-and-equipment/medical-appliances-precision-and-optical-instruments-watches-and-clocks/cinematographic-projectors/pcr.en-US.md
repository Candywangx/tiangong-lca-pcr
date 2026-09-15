---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.cinematographic-projectors
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cinematographic projectors

## 1. Scope and Applicability

This PCR governs foreground production data for complete cinematographic projectors that transport and project motion-picture film. It covers factory assembly, alignment, functional projection testing, and sales packaging. It excludes digital or data projectors, slide or still-image projectors, screens, stand-alone parts, projection services, use, maintenance, and end-of-life.

The foreground boundary is gate-to-gate from receipt of purchased components and energy to a tested, packaged projector at the factory gate. A cradle-to-gate study must link each purchased input to an appropriate upstream dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.cinematographic-projectors |
| classification_refs | CPC 3.0: 48323, exact classification context |
| covered_products | Complete projectors designed to transport and project cinematographic film, including integrated sound-film projectors |
| excluded_products | Digital and data projectors; slide and still-image projectors; screens; stand-alone parts; cinema operation and projection services |
| representative_product | A complete, tested cinematographic projector at the manufacturer's factory gate |
| production_route | Assembly of purchased optical, electromechanical, electrical, and enclosure components; alignment; functional testing; sales packaging |
| market_state | New, complete, tested, and packaged equipment ready for distribution |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete cinematographic projector capable of transporting and projecting the declared motion-picture film format |
| How much | 1 kg net mass of complete projector, excluding sales packaging |
| How well | Meets the manufacturer's declared film-gauge, image, film-path, lamp, sound-system, electrical-safety, and functional acceptance criteria |
| How long or cycle | One finished product at the factory gate; service life and use cycles are outside this gate-to-gate reference |
| reference_flow_link | Quantitative reference output of `projector_assembly_test_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cinematographic projectors `48b51d36-b781-4d3a-9c2d-305985200940` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | film gauge and frame format; projector technology; light-source type; rated electrical input; integrated sound-system status; net product mass; sales-packaging inclusion; manufacturing geography; reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net finished-projector mass after final testing and before sales packaging; normalize all exchanges to 1 kg of output. |
| `component_mass` | Purchased components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass from lot-specific weighing or documented supplier mass; do not use an unsupported nominal conversion. |
| `electricity_energy` | Assembly and test electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered energy and convert kWh to MJ using 1 kWh = 3.6 MJ before normalization; declare meter scope and allocation. |

## 5. System Boundary

The foreground boundary includes:

1. Include controlled component staging, assembly, optical and mechanical alignment, applicable lamp and sound-system installation, functional projection testing, inspection, attributable rework, and sales packaging.
2. Record each purchased component and energy carrier as a separate product input linked to an upstream dataset; do not absorb upstream production into assembly electricity or an undifferentiated material input.
3. Exclude purchased-component production, external transport, capital equipment, buildings, commuting, cinema operation, use-stage electricity, maintenance, and end-of-life unless separately modelled and disclosed.
4. Apply the Library of Congress motion-picture-film care guidance by keeping playback equipment clean and well maintained and, when archival film is used for testing, selecting a suitable low-heat projector bulb; the guidance supplies no inventory quantities.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased components, applicable light source, packaging components, and electricity received at the reporting factory |
| starting_condition_role | Foreground gate-to-gate assembly starting point |
| product_classification_scope | Complete cinematographic projectors; not digital/data projectors or stand-alone parts |
| recursive_input_rule | Record a complete cinematographic projector received for refurbishment or integration as a separate same-category product input with supplier identity and mass; do not recursively apply this PCR inside the same package. |
| upstream_dataset_requirement | Link each purchased input to a product-state-, geography-, and technology-appropriate dataset or disclose an unresolved background-data gap. |
| disclosure | Declare make-or-buy status, outsourced operations, film format, projector technology, light source, test configuration, packaging boundary, geography, reference year, and boundary extensions. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `projector_assembly_test_packaging` | Projector assembly, alignment, testing, and packaging | `required` | Always required for a complete factory-gate projector dataset | Foreground production | 1 kg net mass of complete tested projector |

### Process: Projector assembly, alignment, testing, and packaging (`projector_assembly_test_packaging`)

#### Inputs

##### Product flows

###### Objective lens (`objective_lens`)

The purchased objective lens crosses the boundary as the optical component forming the projected image. Record actual mass consumed in conforming projectors, including documented assembly rejects.

- Selected flow: Objective lenses for cameras, projectors or photographic enlargers or reducers `cfef9f14-3271-428b-bebe-47ded2db11d4`
- Flow property / unit: Mass / kg
- Amount rule: Calculate consumed mass from accepted and scrapped lot quantities multiplied by lot-specific measured or supplier-declared unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of complete tested projector
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_mass`
- Sources:

###### Electric motor (`electric_motor`)

The projector drive motor crosses the boundary as one electromechanical component. Declare motor type, rated output, current type, and drive duty so the generic identity is not mistaken for a technology specification.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: Calculate consumed mass from accepted and scrapped lot quantities multiplied by lot-specific measured or supplier-declared unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of complete tested projector
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_mass`
- Sources:

###### Xenon arc lamp (`xenon_arc_lamp`)

Record this purchased lamp only when the declared projector is supplied with a xenon arc light source. A different technology requires its own specific atomic light-source exchange.

- Selected flow: Xenon arc lamp
- Flow property / unit: Mass / kg
- Amount rule: Calculate installed and assembly-reject mass from purchase, issue, return, and reject records; zero is allowed only when an alternative light-source architecture is documented.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of complete tested projector
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_mass`
- Sources:

###### Assembly and test electricity (`assembly_electricity`)

Electricity crosses the boundary through assembly equipment, alignment stations, applicable lamp operation, film transport, sound checks, and functional testing under the declared meter scope.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use submetered electricity or allocate a complete reconciled area meter with a documented causal driver; convert to MJ and normalize to conforming output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of complete tested projector
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_electricity`
- Sources:

##### Waste flows

No default waste flow is imposed. Add each physically specific foreground waste stream as a separate atomic exchange and document its treatment destination.

##### Elementary flows

No default direct elementary flow is imposed. Add each direct release as its own species- and compartment-specific exchange.

#### Outputs

##### Product flows

###### Complete cinematographic projector (`cinematographic_projector`)

The reference output is a complete projector that passed the declared factory acceptance and film-projection tests. Measure net mass before sales packaging.

- Selected flow: Cinematographic projectors `48b51d36-b781-4d3a-9c2d-305985200940`
- Flow property / unit: Mass / kg
- Amount rule: Fixed at 1 kg after normalization from measured conforming net output mass.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net mass of complete tested projector
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_output`
- Sources:

##### Waste flows

No default waste output is imposed.

##### Elementary flows

No default direct elementary output is imposed.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide_before_allocation` | Shared assembly, test, and packaging operations | Subdivide metered operations and records by product family before allocation whenever technically feasible. |  |
| `physical_allocation` | Residual shared inputs and wastes | If subdivision is infeasible, allocate by a documented causal physical driver such as machine time, test time, component throughput, or net output mass; do not use revenue when a physical relationship exists. |  |
| `scrap_credit_disclosure` | Recyclable production scrap | Report gross scrap and treatment route separately; any avoided-burden or substitution credit belongs outside the foreground inventory and must be disclosed as a scenario. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_mass` | `projector_assembly_test_packaging` | objective_lens; electric_motor; xenon_arc_lamp | Purchase, issue, return, reject, and mass records | part_id; supplier; lot; quantities; measured_or_supplier_unit_mass; specification | Reconcile material-control records to lots and verify representative unit mass by weighing or supplier documentation. | kg | Each lot; aggregate monthly | At least 12 representative months or full shorter campaign | All lines producing the declared projector | Sum net consumed mass by component and divide by conforming net output mass. | Ledger, reconciliation, weighing record or supplier specification |
| `cp_assembly_electricity` | `projector_assembly_test_packaging` | assembly_electricity | Submeter or reconciled area-meter record | meter_id; readings; unit; production_time; test_time; allocation_driver; output_mass | Prefer process submeters; otherwise reconcile an area meter and allocate with the declared causal driver. | kWh and MJ | Monthly and each campaign | Same period as component and output records | All included operations | Subtract excluded loads, allocate shared use, convert kWh to MJ, and divide by output mass. | Meter register, calibration, reconciliation, allocation worksheet |
| `cp_reference_output` | `projector_assembly_test_packaging` | cinematographic_projector | Finished-goods, scale, and acceptance-test records | model; lot; film_gauge; light_source; sound_system; net_mass; test_result; reject_status | Weigh conforming projectors before packaging and link mass to passed acceptance tests. | kg | Each model and lot | Same period as inputs | All included lines | Sum conforming net mass; exclude units until acceptance. | Calibrated-scale and signed acceptance-test records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass_inputs` | objective_lens; electric_motor; xenon_arc_lamp | normalized component mass = net component mass consumed / conforming net projector mass | Material and output records | kg component per kg reference product |  |
| `normalize_electricity` | assembly_electricity | normalized electricity = allocated kWh × 3.6 / conforming net projector mass | Meter, allocation, and output records | MJ electricity per kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal_alignment` | All rows | Inputs, energy, rejects, rework, and output cover the same reporting period. | Period reconciliation |
| `dq_component_traceability` | Component inputs | Retain supplier, lot, specification, and unit-mass evidence; declare make-or-buy status. | Purchase and material-control records |
| `dq_meter_completeness` | assembly_electricity | Demonstrate meter completeness, excluded loads, calibration, and allocation driver. | Meter map and reconciliation |
| `dq_functional_acceptance` | cinematographic_projector | Retain manufacturer acceptance evidence for the declared film path, optics, lamp, take-up, focus, image steadiness, and sound system where applicable. | Signed acceptance-test record |
| `dq_range_gap` | Important rows | Absence of external QA ranges is an evidence gap, not permission to invent defaults; prioritize foreground records and report uncertainty. | Manifest range-evidence register |

## 9. Validation Rules

A foreground data package conforms only when:

1. the output resolves to `48b51d36-b781-4d3a-9c2d-305985200940`, uses Mass and kg, equals 1 kg after normalization, and excludes sales packaging;
2. scope evidence demonstrates a motion-picture film projector rather than a digital, data, slide, or still-image projector;
3. each row is atomic, UUID-bearing flows retain audited properties and units, and `xenon_arc_lamp` remains UUID-empty until an exact public state-100 identity is verified;
4. component, electricity, reject, rework, and output records reconcile to one period and factory boundary;
5. a zero xenon-lamp amount has evidence of an alternative architecture, whose specific light source is recorded separately;
6. shared operations are subdivided or carry a declared allocation driver and worksheet;
7. required qualifiers, upstream links or gaps, outsourced operations, and boundary extensions are disclosed;
8. acceptance evidence covers applicable film-path, optical, lamphouse, take-up, focus, scratch, and sound checks.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for projector assembly, alignment, testing, and packaging |
| downstream_use | Unit-process construction and aggregation into a cradle-to-gate lifecycle model after boundary and qualifier alignment |
| allowed_use | Gate-to-gate and linked cradle-to-gate studies for complete cinematographic projectors with matching format, technology, geography, year, and packaging boundary |
| excluded_use | Digital/data projectors, stand-alone components, cinema operation, use-stage electricity, maintenance, or end-of-life without separate modules |
| required_metadata | PCR id; model; film gauge; frame format; technology; light source; rated input; sound-system status; net mass; packaging boundary; geography; period |
| required_quality_disclosure | Coverage, meter scope, component mass method, allocation, rework, rejects, upstream datasets and gaps, unresolved UUIDs, absent ranges, and test evidence |
| update_trigger | Change in architecture, film format, light source, motor or lens, line, meter boundary, supplier mix, packaging, allocation, geography, or year |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, row 48323, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official classification identity |
| `un-cpc-2-1-update-2012` | `official_guidance` | United Nations Statistics Division, CPC Version 2.1 update background document, https://unstats.un.org/unsd/statcom/43rd-session/documents/BG-CPC-E.pdf (retrieved 2026-09-07) | Scope distinction from other image projectors |
| `loc-motion-picture-film-care` | `official_guidance` | Library of Congress, Care, Handling, and Storage of Motion Picture Film, https://www.loc.gov/preservation/care/film (retrieved 2026-09-07) | Playback-equipment cleanliness, maintenance, and low-heat-bulb care guidance; no inventory amounts or ranges |
