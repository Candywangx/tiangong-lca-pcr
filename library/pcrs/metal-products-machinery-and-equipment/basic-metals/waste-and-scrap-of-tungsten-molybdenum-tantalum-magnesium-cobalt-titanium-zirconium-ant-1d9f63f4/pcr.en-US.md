---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.waste-and-scrap-of-tungsten-molybdenum-tantalum-magnesium-cobalt-titanium-zirconium-ant-1d9f63f4
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Waste and scrap of tungsten, molybdenum, tantalum, magnesium, cobalt, titanium, zirconium, antinomy, beryllium, chromium, thallium, cadmium

## 1. Scope and Applicability

This PCR applies to preparation of a saleable, composition-controlled lot of waste and scrap whose declared predominant recoverable metal or alloy is tungsten, molybdenum, tantalum, magnesium, cobalt, titanium, zirconium, antimony, beryllium, chromium, thallium, or cadmium. It covers accepted incoming scrap through receiving, weighing, characterization, sorting, route-conditional non-thermal mechanical preparation, final grading, consolidation, and loading at the preparing facility gate.

The English CPC title spells antimony as “antinomy”; this PCR interprets that term as the chemical element antimony and does not create a separate material identity. The output remains waste or scrap prepared for a metals producer; it is not recovered metal. Metallurgical recovery, roasting, smelting, melting, refining, alloy manufacture, treatment of intact batteries or electronic equipment, upstream product use, inbound collection and transport, off-site residue treatment, and downstream transport are outside the foreground boundary. A dataset shall declare whether incoming material is new scrap or post-consumer scrap and shall not combine grades, predominant metals, preparation routes, or hazardous-component states without documented representativeness.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.waste-and-scrap-of-tungsten-molybdenum-tantalum-magnesium-cobalt-titanium-zirconium-ant-1d9f63f4 |
| classification_refs | CPC 3.0: 41609 (exact semantic reference; mapping acceptance is governed separately) |
| covered_products | Saleable waste and scrap lots predominantly containing tungsten, molybdenum, tantalum, magnesium, cobalt, titanium, zirconium, antimony, beryllium, chromium, thallium, or cadmium, including declared alloys of those metals, after grading and any required non-thermal mechanical preparation |
| excluded_products | Precious-metal scrap; ferrous scrap; intact batteries and accumulators; unsorted electronic equipment; metal-bearing liquids, sludges, slags, drosses, baghouse dust, and process residues that are not traded as the declared scrap grade; recovered unwrought metal; wrought articles; cermets; mixtures without a declared predominant listed metal or alloy |
| representative_product | A weighed and graded lot of prepared listed-metal or listed-alloy scrap meeting a declared buyer, industry, or facility specification at the scrap-preparation facility gate |
| production_route | Acceptance and characterization, physical sorting, conditional non-thermal size reduction or separation, final grading, consolidation, and loading; no metallurgical recovery |
| market_state | Bulk pieces, turnings, cuttings, clips, granules, or compacted units, with metal or alloy grade, physical form, moisture, foreign-material content, hazardous-component status, and delivery form declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a composition-controlled secondary raw-material lot that a declared metals producer can accept for further recovery or manufacture |
| How much | 1 kg net mass of prepared saleable waste and scrap |
| How well | Meets the declared metal or alloy grade and buyer, industry, or facility specification, with measured or documented moisture and foreign-material content |
| How long or cycle | One completed preparation batch or dispatch lot at the facility gate; no service lifetime is assigned |
| reference_flow_link | The normalized output `reference_scrap_output` from `grading_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Prepared listed-metal waste and scrap |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | predominant listed metal or alloy and composition basis; new-scrap or post-consumer origin; source sector; physical form and particle-size class; grade or specification; gross, tare, net, moisture, and foreign-material basis; hazardous-component and depollution status; preparation route and equipment; facility geography; temporal coverage; delivery form and included packaging |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | reference product and all solid material exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated gross and tare measurements to obtain net mass. State whether moisture and adhering non-metallic material remain in the commercial grade; never mix dry-mass and as-received results without an explicit conversion. |
| `mu_electricity_energy` | electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter data in its recorded unit and convert kWh to MJ using exactly 3.6 MJ/kWh. Apply only the metered share attributable to the declared process and period. |
| `mu_water_mass` | process-water input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass measurement. When volume is measured, convert with a documented contemporaneous density or a justified water-density value and retain the original volume record. |
| `mu_composition_basis` | metal grade, moisture, and foreign-material results | Mass fraction | kg/kg | Report each fraction on one declared wet or dry basis, identify the test or sorting method and sampling plan, and reconcile the fractions to the measured lot mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_start_at_acceptance` | foreground starting condition | Start the foreground boundary only after the facility has accepted, weighed, and identified the incoming listed-metal scrap. Model generation, collection, depollution required before acceptance, and inbound transport in separate upstream datasets when included by the study. | jrc-waste-treatment-bref-2018; us-epa-metal-shredders-2024 |
| `sb_include_preparation` | foreground operations | Include receiving and inspection, characterization and sorting, material handling and storage, route-conditional cutting, shearing, shredding, screening or physical separation, final grading, consolidation, and loading when performed by the reporting facility. | us-epa-metal-shredders-2024 |
| `sb_exclude_recovery` | downstream transformation | Exclude roasting, smelting, melting, hydrometallurgy, refining, alloy manufacture, and any other transformation that produces recovered metal rather than prepared waste or scrap. | ec-jrc-non-ferrous-metals-bref-2016 |
| `sb_route_and_residue_disclosure` | conditional operations and treatment | Declare every preparation technology actually used, meter its exchanges, and link each outgoing residue to a specific treatment dataset. Do not insert a generic preparation route or a generic waste-treatment process. | jrc-waste-treatment-bref-2018; us-epa-metal-shredders-2024 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted, weighed incoming scrap for which predominant listed metal or alloy, origin, physical form, contamination, hazardous-component status, and moisture basis have been recorded |
| starting_condition_role | Secondary-material input accepted at the scrap-preparation facility gate |
| product_classification_scope | Waste and scrap predominantly of one declared listed metal or alloy within the semantic boundary of this PCR; CPC 3.0 code 41609 is a classification reference, not the canonical identity |
| recursive_input_rule | When incoming material already satisfies this PCR category, reference its supplying dataset and record its delivered grade and state once; do not recursively rebuild the supplying preparation inside the receiving dataset |
| upstream_dataset_requirement | Use separate, geographically and technologically representative datasets for scrap generation or prior treatment, inbound transport, electricity and water supply, and off-site treatment of each residue when these exchanges are in the study scope |
| disclosure | Disclose predominant metal or alloy, source and scrap age class, acceptance criteria, physical form, sampling and analytical method, moisture and foreign-material basis, preparation route, facility location, reporting period, mass balance, residue destinations, allocation, and any excluded operation |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_sorting` | Receiving, characterization, and sorting | `required` | Always included for accepted incoming scrap | Establish accepted lot identity, grade, mass, and sorted intermediate | kg sorted scrap leaving the stage |
| `mechanical_preparation` | Non-thermal mechanical preparation | `conditional` | Include when the accepted scrap is cut, sheared, shredded, screened, physically separated, or water-sprayed before sale | Produce the required physical form and separate non-saleable fractions | kg prepared scrap leaving the stage |
| `grading_dispatch` | Final grading, consolidation, and dispatch | `required` | Always included for the saleable reference lot | Verify the final grade, determine reference mass, consolidate, and load | 1 kg net saleable reference product |

### Process: Receiving, characterization, and sorting (`receiving_sorting`)

#### Inputs

##### Product flows

###### Purchased electricity for receiving and sorting (`receiving_sorting_electricity_input`)

Electricity crosses the process boundary for weighing, analysis, conveyors, lighting, and powered sorting equipment. Record the metered or defensibly submetered energy attributable to accepted lots.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to receiving, characterization, and sorting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_sorting`
- Sources: us-epa-metal-shredders-2024

##### Waste flows

###### Accepted unprepared listed-metal scrap (`accepted_unprepared_scrap_input`)

This is the accepted incoming physical waste stream before foreground sorting or size preparation. Record it by lot and keep the declared predominant metal or alloy, form, contamination, moisture, and origin with the mass record.

- Selected flow: Accepted unprepared listed-metal waste and scrap
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass from gross and tare measurements, reconciled to lot inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_sorting`
- Sources: jrc-waste-treatment-bref-2018; us-epa-metal-shredders-2024

##### Elementary flows

#### Outputs

##### Product flows

###### Sorted listed-metal scrap intermediate (`sorted_scrap_output`)

This internal intermediate is the accepted listed-metal scrap after characterization and sorting but before any required size or separation treatment. Calculate it from measured batch transfers and inventory change.

- Selected flow: Sorted listed-metal scrap intermediate
- Flow property / unit: Mass / kg
- Amount rule: Calculated sorted output mass from batch transfer records and measured inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_sorting`
- Sources: us-epa-metal-shredders-2024

##### Waste flows

##### Elementary flows

### Process: Non-thermal mechanical preparation (`mechanical_preparation`)

#### Inputs

##### Product flows

###### Sorted scrap transferred to preparation (`sorted_scrap_input`)

This row transfers the measured sorting-stage intermediate only when mechanical preparation is used. The value shall equal the corresponding transfer out of `receiving_sorting` after inventory-change reconciliation.

- Selected flow: Sorted listed-metal scrap intermediate
- Flow property / unit: Mass / kg
- Amount rule: Calculated interstage transfer into the included preparation route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mechanical_preparation`
- Sources: us-epa-metal-shredders-2024

###### Purchased electricity for mechanical preparation (`preparation_electricity_input`)

Electricity crosses the boundary for the actually used cutting, shearing, shredding, screening, conveying, or physical separation equipment. Record zero only when the conditional process is not included, and document that route decision.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or submetered electricity for the included preparation campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_preparation`
- Sources: us-epa-metal-shredders-2024

###### Process water for wet separation or dust suppression (`preparation_water_input`)

Process water crosses the boundary only when the declared preparation route uses water for wet physical separation or dust suppression. Keep recirculated internal water outside the input until make-up water crosses the facility boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water for the included wet-separation or dust-suppression route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_preparation`
- Sources: us-epa-metal-shredders-2024

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared scrap intermediate (`prepared_scrap_output`)

This internal intermediate is the route-conditioned scrap after the included non-thermal physical preparation. Calculate it from weighed transfers and the preparation-stage mass balance.

- Selected flow: Prepared listed-metal scrap intermediate
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared output mass after measured residues and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mechanical_preparation`
- Sources: us-epa-metal-shredders-2024

##### Waste flows

###### Separated non-metallic residue (`nonmetallic_separation_residue_output`)

Record the one physical non-metallic residue stream separated from the declared scrap during the included preparation campaign. Do not combine it with metal-bearing fines or an off-site treatment service.

- Selected flow: Non-metallic separation residue from listed-metal scrap preparation
- Flow property / unit: Mass / kg
- Amount rule: Weighed residue dispatched from or added to on-site inventory during the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_preparation`
- Sources: us-epa-metal-shredders-2024

###### Metal-bearing fines from preparation (`metal_bearing_fines_output`)

Record separately the physically collected fines that still contain one or more declared listed metals and leave for recovery or treatment. The metal or alloy composition and destination shall accompany the mass record.

- Selected flow: Listed-metal-bearing fines from mechanical scrap preparation
- Flow property / unit: Mass / kg
- Amount rule: Weighed fines dispatched from or added to on-site inventory during the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_preparation`
- Sources: us-epa-metal-shredders-2024

##### Elementary flows

### Process: Final grading, consolidation, and dispatch (`grading_dispatch`)

#### Inputs

##### Product flows

###### Prepared scrap transferred to final grading (`prepared_scrap_input`)

This interstage transfer is the prepared scrap supplied to final grading. When mechanical preparation is not applicable, use the reconciled sorted output from `receiving_sorting` and declare the bypass.

- Selected flow: Prepared listed-metal scrap intermediate
- Flow property / unit: Mass / kg
- Amount rule: Calculated interstage transfer into the dispatch lot, including a documented process bypass when applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_dispatch`
- Sources: us-epa-metal-shredders-2024

###### Purchased electricity for grading and dispatch (`dispatch_electricity_input`)

Electricity crosses the boundary for final analysis, weighing, consolidation, conveying, and loading equipment. Allocate shared meter data using an auditable operating-time, throughput, or submeter basis.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or allocated electricity attributable to the dispatch lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_dispatch`
- Sources: us-epa-metal-shredders-2024

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared saleable listed-metal waste and scrap (`reference_scrap_output`)

This is the only quantitative reference output. Normalize the complete foreground inventory to 1 kg net mass after final grade verification and retain the actual dispatch-lot mass as the unnormalized source record.

- Selected flow: Prepared listed-metal waste and scrap
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg after normalization by `cr_reference_normalization`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_dispatch`
- Sources: unsd-cpc-3-0-structure-2025; us-epa-metal-shredders-2024

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | independently measured preparation lines and grades | Avoid allocation by subdividing receiving, preparation, and dispatch operations whenever meters, batch records, or operating logs distinguish the declared metal or alloy grade and route. |  |
| `al_shared_operations` | electricity and shared handling | Allocate only genuinely shared operations using a causal submeter, operating-time, equipment-throughput, or handled-net-mass basis, in that preference order; report the driver and affected exchanges. |  |
| `al_multiple_saleable_grades` | multiple saleable scrap outputs | Keep separately weighed saleable grades as separate product outputs. If subdivision is impossible, allocate shared burdens by dry saleable mass and report a sensitivity case using economic value when price differences could change interpretation. |  |
| `al_incoming_scrap_burden` | incoming waste and scrap | State the study's treatment of burdens before facility acceptance. Do not silently assign zero upstream burden, avoided primary-metal credit, or end-of-life recycling credit; apply such conventions only in the downstream study and disclose them separately from this foreground inventory. |  |
| `al_residue_no_credit` | nonmetallic residue and metal-bearing fines | Model each outgoing stream and its receiving treatment or recovery dataset explicitly. Do not credit recovery before the receiving process and allocation convention are identified. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_sorting` | `receiving_sorting` | accepted input, electricity, and sorted transfer | scale tickets, acceptance record, composition or grade test, inventory log, electricity meter | lot id; supplier and origin; gross mass; tare mass; moisture basis; predominant metal or alloy; composition result; physical form; foreign material; hazardous-component status; acceptance decision; opening and closing inventory; meter start and end | Calibrated weighing plus documented sampling, analysis, inspection, lot tracking, and submeter or defensible meter allocation | kg; mass fraction; kWh or MJ | Every accepted lot and meter interval | At least one representative continuous 12-month period or the full campaign when shorter | All receiving and sorting operations supplying the declared product | Sum accepted and transferred net masses by homogeneous declared grade and route; reconcile inventory change; sum attributable electricity and normalize after final output is known | Scale and meter calibration; sampling plan; analytical method; acceptance checklist; lot ledger; inventory reconciliation |
| `cp_mechanical_preparation` | `mechanical_preparation` | interstage input, electricity, water, prepared output, residue, and fines | batch transfer ticket, equipment meter, water meter, residue scale ticket, inventory log | batch id; route and equipment; input mass; output mass; residue mass; fines mass; opening and closing inventory; meter readings; water readings; recirculation state; destination | Weigh every material transfer; meter electricity and boundary-crossing make-up water for the included campaign | kg; kWh or MJ | Every preparation batch and meter interval | Same period as the represented dispatch lots | All included non-thermal mechanical preparation equipment | Reconcile input, outputs, residues, and inventory change by route; sum energy and make-up water; do not combine technologies before checking representativeness | Scale and meter calibration; route log; maintenance and downtime log; residue destination record; signed mass-balance review |
| `cp_grading_dispatch` | `grading_dispatch` | prepared input, dispatch electricity, and reference output | transfer ticket, final grade certificate, dispatch scale ticket, electricity meter, loading log | dispatch lot id; linked input batches; predominant metal or alloy; composition and grade; gross mass; tare mass; net mass; moisture and foreign-material basis; physical and delivery form; meter readings; customer specification; dispatch date | Calibrated final weighing, documented sampling or inspection, lot linkage, and submeter or defensible meter allocation | kg; mass fraction; kWh or MJ | Every dispatch lot and meter interval | At least one representative continuous 12-month period or the full campaign when shorter | All final grading, consolidation, and loading operations for the declared product | Aggregate only homogeneous lots meeting the same declared product boundary; normalize all linked exchanges by net saleable output mass | Scale and meter calibration; grade certificate; chain of custody; customer or facility specification; batch-to-dispatch reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_net_mass` | every weighed lot or stream | net mass = gross mass - tare mass; apply a moisture or foreign-material correction only when the declared commercial basis requires it and retain both original and corrected values | gross mass; tare mass; declared basis; moisture and foreign-material results | kg net mass on the declared basis |  |
| `cr_stage_mass_balance` | `receiving_sorting` and `mechanical_preparation` | input + opening inventory = product transfers + nonmetallic residue + metal-bearing fines + other specifically identified outputs + closing inventory; investigate rather than allocate an unexplained imbalance | measured input, outputs, and inventory change | reconciled batch mass balance and unexplained difference |  |
| `cr_electricity_conversion` | all electricity inputs | electricity_MJ = electricity_kWh × 3.6 | attributable metered kWh | MJ electricity |  |
| `cr_water_conversion` | `preparation_water_input` | water_mass = measured water volume × documented density; subtract measured recovered water crossing outward only if it is a separate exchange | boundary-crossing make-up volume; density; any separately measured outward recovered-water flow | kg process-water input |  |
| `cr_reference_normalization` | complete foreground data package | normalized exchange = reconciled exchange amount / net mass of conforming `reference_scrap_output` | all reconciled exchanges; dispatch-lot net saleable mass | each exchange per 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | every represented lot | Identify the predominant listed metal or alloy, composition basis, origin, physical form, grade, preparation route, and hazardous-component state; do not use a generic mixed-metal identity. | Supplier record, acceptance record, sampling plan, test or inspection result, and grade certificate |
| `dq_measurement` | mass, electricity, water, and composition | Use calibrated devices within their valid range and retain original readings, unit conversions, uncertainty or precision information, and calibration status. | Calibration certificates, meter logs, laboratory quality records, and conversion worksheet |
| `dq_temporal` | annual or campaign dataset | Cover a representative continuous 12-month period where possible; otherwise cover the full campaign and explain seasonality, outages, stock changes, and the reason for the shorter period. | Dated lot ledger, production calendar, inventory reconciliation, and representativeness assessment |
| `dq_completeness` | facility foreground inventory | Reconcile every accepted lot to saleable outputs, specifically identified residues, fines, other physical outputs, and inventory change; investigate missing streams. | Signed process-stage and facility mass balances |
| `dq_route_specificity` | conditional mechanical preparation | Keep bypassed, sheared, shredded, screened, wet-separated, and other materially different routes separate unless a documented weighted aggregation remains representative. | Route logs, equipment records, meter allocation, and aggregation rationale |
| `dq_destination` | outgoing residue and fines | Record physical state, declared composition where relevant, waste or product status, receiver, transport handoff, and treatment or recovery route. | Scale ticket, transfer document, receiver record, and linked treatment dataset |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity_complete` | reference flow and foreground package | Fail validation when predominant listed metal or alloy, origin, physical form, grade or specification, moisture and foreign-material basis, hazardous-component state, preparation route, geography, or reporting period is missing. | unsd-cpc-3-0-structure-2025 |
| `vr_reference_output` | `reference_scrap_output` | Confirm that the only quantitative reference output is exactly 1 kg after normalization and that its unnormalized dispatch-lot net mass is positive and traceable. |  |
| `vr_mass_balance` | each process stage and facility total | Confirm the mass-balance equation, report the signed and absolute unexplained difference, and require documented investigation against a study-defined tolerance rather than inserting a balancing flow. |  |
| `vr_conditional_route` | `mechanical_preparation` and its exchanges | Include preparation electricity, water, residues, and fines only when their specific route occurs; require an explicit bypass statement when the conditional process is omitted. | us-epa-metal-shredders-2024 |
| `vr_energy_units` | electricity inputs | Recalculate each kWh-to-MJ conversion with 3.6 MJ/kWh and reject mixed-unit summation. |  |
| `vr_no_double_count` | interstage and upstream links | Confirm each internal transfer appears once as an output and once as the corresponding input without adding both to the facility-level net inventory, and confirm upstream supply and off-site treatment are linked rather than duplicated in the foreground process. |  |
| `vr_uuid_status` | reference and inventory flows | Treat UUID-empty rows as unresolved identities. Do not substitute generic metal scrap, mixed scrap, precious-metal scrap, ferrous scrap, or non-metal waste for the exact semantic flow. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may serve as a `background_dataset` only after representativeness and review are documented |
| downstream_use | Foreground process datasets and lifecycle models requiring prepared listed-metal scrap at a scrap-preparation facility gate |
| allowed_use | Studies whose predominant metal or alloy, grade, origin, physical form, preparation route, geography, period, moisture basis, foreign-material basis, and burden convention match the dataset |
| excluded_use | Generic mixed-metal scrap; precious-metal or ferrous scrap; intact batteries or electronic equipment; metallurgical recovery; substitution or avoided-primary-metal credit without a separate downstream convention; geographies or technologies lacking a representativeness assessment |
| required_metadata | Canonical PCR id; predominant metal or alloy and composition; new or post-consumer origin; source sector; grade or specification; physical and delivery form; moisture and foreign-material basis; hazardous-component state; preparation route and equipment; facility geography; reporting period; reference mass; allocation; source ids; unresolved UUID disclosure |
| required_quality_disclosure | Sampling and analytical methods; scale and meter calibration; temporal and technological coverage; batch-to-dispatch linkage; process and facility mass balances; unexplained differences; route aggregation; residue destinations; data gaps; uncertainty; review status |
| update_trigger | Change in predominant metal or alloy, accepted source mix, grade specification, physical form, contamination or moisture basis, preparation technology, facility, electricity or water supply, residue destination, allocation rule, reporting period, or reference-flow UUID resolution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-06-23; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official CPC 41609 classification identity and hierarchy; not quantitative evidence |
| `jrc-waste-treatment-bref-2018` | `official_guidance` | European Commission Joint Research Centre, Waste Treatment BAT Reference Document landing page, published October 2018, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/waste-treatment-0 (retrieved 2026-09-04) | Waste reception, sampling, checking, analysis, transfer, handling, and storage process coverage |
| `ec-jrc-non-ferrous-metals-bref-2016` | `official_guidance` | European Commission Joint Research Centre, Non-ferrous Metals Industries BAT Reference Document landing page, adopted June 2016, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/non-ferrous-metals-industries-0 (retrieved 2026-09-04) | Distinguishing production of secondary non-ferrous metals from preparation of scrap |
| `us-epa-metal-shredders-2024` | `official_guidance` | U.S. Environmental Protection Agency, Best Practices for Metal Shredding Facilities in Clean Air Act Permitting, August 2024, https://19january2025snapshot.epa.gov/system/files/documents/2024-09/metal-shredders-best-practices_08-2024.pdf (retrieved 2026-09-04) | Receiving and inspection, acceptance control, sorting, size preparation, separation, material handling, water dust suppression, residue handling, grading, loading, and site-specific emissions-data requirements; not an amount range |
