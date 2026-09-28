---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.weaving-machines-looms
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Weaving machines (looms)

## 1. Scope and Applicability

This PCR models one new, complete loom accepted at the factory gate before transport packaging. A loom interlaces warp and weft; its drive, shedding, insertion, take-up and control configuration must be declared. The Toyota JAT910 brochure documents one air-jet configuration, while a peer-reviewed smock-loom study documents a motor-driven prototype and factory performance testing. Neither provides a universal bill of materials, machine mass or manufacturing intensity [`toyota-jat910-2021`; `sedzro-fugu-loom-2025`].

Include actual component fitting, assembly, first fill and acceptance testing. Add each performed in-house fabrication exchange as a separate atomic row in the concrete data package; link purchased components to upstream datasets. Exclude fabric production, customer installation, use, maintenance and end of life. Model transport packaging separately; it is excluded from net machine mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.weaving-machines-looms |
| classification_refs | CPC 3.0: 44612, Weaving machines (looms) |
| covered_products | New complete machines whose primary function is weaving warp and weft, including configured shuttle and shuttleless looms |
| excluded_products | Yarn preparation, knitting and sewing machines; standalone loom parts; woven fabric; used or rebuilt machines |
| representative_product | One factory-accepted motor-driven loom with its installed frame, weaving mechanisms, drive, controls where fitted and first-fill oil |
| production_route | Purchased or internally fabricated components, fitting, assembly and functional acceptance test; actual make-or-buy route is disclosed |
| market_state | New complete factory-accepted machine before transport packaging and customer use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one complete machine capable of weaving warp and weft according to its declared configuration. |
| How much | One accepted complete machine. |
| How well | Declare weaving width, technology, installed mechanisms and factory acceptance result. |
| How long or cycle | At the factory gate after acceptance and before use; no operating lifetime is credited. |
| reference_flow_link | `finished_loom` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Weaving machines (looms) `9a86353e-e91a-466c-be25-c022ac99dfe2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; serial or batch; weaving technology and width; shedding and weft insertion type; drive and control configuration; installed accessories; first-fill state; factory acceptance; plant and period |

Required qualifiers belong in dataset metadata, process notes or the reference-flow comment.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using `cp_machine_mass`. |
| `per_machine_basis` | all inventory rows | exchange-specific property | row unit | Collect each exchange per one accepted finished machine of the same configuration; partition shared measured totals by accepted-machine count and disclose rejects and rework. |

## 5. System Boundary

The foreground begins with incoming components or the first performed in-house fabrication step and ends with the accepted net machine before packaging. Include attributable assembly electricity, installed oil, fitting waste and test activity. Purchased inputs require upstream datasets; avoid counting internally fabricated components twice [`epd-hub-core-pcr-2026`].

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_route` | factory production | Record the actual make-or-buy route, assembly, fitting and acceptance test; add each performed fabrication operation as individually measured exchanges. | `sedzro-fugu-loom-2025` |
| `sb_upstream` | purchased components | Link each purchased component to a dataset with matching material and delivered state; disclose proxies. | `epd-hub-core-pcr-2026` |
| `sb_gate` | finished product | Stop at the factory-accepted complete loom before packaging, installation or use. | `toyota-jat910-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | State whether major frame and weaving subassemblies arrive fabricated or are made in-house. |
| starting_condition_role | Incoming component gate or first performed in-house operation. |
| product_classification_scope | Complete CPC 3.0 44612 looms; parts and other textile machinery remain separate products. |
| recursive_input_rule | If a complete loom enters rework, record it as a separate input with an upstream dataset and disclose the route. |
| upstream_dataset_requirement | Match component state, technology, geography and reference unit; disclose missing data. |
| disclosure | Plant, period, model, configuration, make-or-buy boundary, accepted count, M, test yield, allocation and gaps. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `loom_build` | Component fitting, assembly and factory test | required | Every accepted complete loom | Foreground factory production | One accepted complete loom, M kg net mass |

These cards specify core exchanges. The concrete dataset must add each other actual component, material, energy, waste or elementary emission as an individually named atomic exchange. No case source supports a universal bill of materials.

### Process: Component fitting, assembly and factory test (`loom_build`)

#### Inputs

##### Product flows

###### Fabricated frame parts (`frame_parts`)

Record the mass of fabricated structural parts installed in the accepted machine, including documented internal transfers.

- Selected flow: Fabricated loom structural parts and subframes `76fc68b2-37b9-41b7-b153-6d84f556c57f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured installed frame-part mass per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product or site-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `toyota-jat910-2021`; `sedzro-fugu-loom-2025`

###### Drive motor (`drive_motor`)

Record the physical drive motor installed in the declared configuration; its exact database identity remains under review.

- Selected flow: Industrial loom drive motor
- Flow property / unit: Mass / kg
- Amount rule: Measured installed motor mass per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product or site-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `sedzro-fugu-loom-2025`

###### Electronic controller (`electronic_controller`)

Record the installed electronic control unit only for machines equipped with one.

- Selected flow: Weaving-machine electronic control unit
- Flow property / unit: Mass / kg
- Amount rule: Measured installed controller mass per accepted loom; zero only if documented absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product or site-specific (`technology_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Inclusion condition: Accepted configuration includes an electronic controller.
- Sources: `toyota-jat910-2021`

###### First-fill lubricating oil (`loom_lubricating_oil`)

Record mechanical lubricant retained as first fill, excluding spent oil and textile-processing oil.

- Selected flow: Mineral lubricating oil for loom mechanisms
- Flow property / unit: Mass / kg
- Amount rule: Measured retained first-fill oil mass per accepted loom; zero only if oil lubrication is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product or site-specific (`technology_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_first_fill`
- Inclusion condition: Accepted configuration uses oil-lubricated mechanisms.
- Sources: `toyota-jat910-2021`

###### Assembly and test electricity (`assembly_electricity`)

Record delivered electricity consumed by fitting, assembly, adjustment and acceptance testing.

- Selected flow: Grid electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Metered electricity attributable to fitting, assembly and acceptance test per accepted loom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product or site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `epd-hub-core-pcr-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished loom (`finished_loom`)

Record only a complete machine that passed factory acceptance, using its measured net mass M.

- Selected flow: Weaving machines (looms) `9a86353e-e91a-466c-be25-c022ac99dfe2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product or site-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machine_mass`
- Sources: `toyota-jat910-2021`

##### Waste flows

###### Machining steel scrap (`machining_steel_scrap`)

Record segregated steel scrap generated by on-site frame fitting or machining when performed.

- Selected flow: Steel scrap from machining `a88e0790-436c-44f8-b336-ee509aa8a38a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed steel machining scrap attributable to one accepted loom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product or site-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Inclusion condition: On-site steel fitting or machining generates this waste.
- Sources: `sedzro-fugu-loom-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | shared operations | Prefer separately metered fitting, assembly and test operations. | `epd-hub-core-pcr-2026` |
| `alloc_physical` | remaining shared burdens | Partition measured shared inputs and outputs by a documented causal physical relationship such as machine-hours or component mass; disclose factor and basis. | `epd-hub-core-pcr-2026` |
| `alloc_scrap` | steel scrap | Report physical scrap mass and treatment route separately; do not silently credit avoided steel. | `epd-hub-core-pcr-2026` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machine_mass` | `loom_build` | accepted machine | acceptance and weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted machine | reference period | producing plant | accepted net mass per machine | scale record; acceptance certificate |
| `cp_bom` | `loom_build` | frame, motor and controller | BOM and receiving or transfer record | part ID; supplier; configuration; installed count; measured unit mass | Reconcile installed parts to the accepted serial and weigh or use traceable mass records for the same configuration. | kg | each accepted machine | reference period | producing plant and supplier | installed mass / accepted machines | BOM revision; receiving and weighing records |
| `cp_first_fill` | `loom_build` | installed oil | fill record | oil specification; filled mass or calibrated volume and density; spill | Weigh oil retained in the machine or convert calibrated fill volume using measured density. | kg | each accepted machine | reference period | producing plant | retained oil / accepted machines | fill sheet; calibration |
| `cp_electricity` | `loom_build` | assembly and test electricity | meter and production log | meter readings; model; test hours; accepted and rejected counts | Meter relevant operations and remove unrelated loads; partition shared loads by recorded machine-hours. | kWh | batch or shift | reference period | producing plant | attributable electricity / accepted machines | meter record; allocation worksheet |
| `cp_scrap` | `loom_build` | machining steel scrap | waste weighing record | mass; steel grade; job; treatment route; accepted count | Weigh segregated machining steel scrap attributable to the model. | kg | batch or shift | reference period | producing plant | attributable scrap / accepted machines | scale and transfer tickets |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `allocate_shared` | `assembly_electricity`, `machining_steel_scrap` | Attributable quantity per accepted loom = measured model-assigned quantity / accepted looms of that model; document physical allocation and rework. | `cp_electricity`; `cp_scrap`; accepted count; allocation worksheet | kWh or kg per accepted loom | `epd-hub-core-pcr-2026` |
| `mass_check` | `finished_loom` | Compare M with installed component and first-fill masses, fitting losses and weighing uncertainty; investigate unexplained differences. | `cp_machine_mass`; `cp_bom`; `cp_first_fill`; `cp_scrap` | documented mass reconciliation | `epd-hub-core-pcr-2026` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all rows | Use one accepted configuration and traceable batch or serial; disclose make-or-buy and test yield. | BOM; production and acceptance records |
| `dq_completeness` | all rows | Reconcile actual configured BOM and operations; add missing exchanges as atomic flows and disclose data gaps. | BOM; meter, waste and emission registers |
| `dq_representativeness` | upstream datasets | Disclose year, geography, technology, completeness and proxies. | dataset metadata and allocation worksheet |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | reference product | Confirm a complete factory-accepted CPC 44612 loom, not a part or another textile machine. | `toyota-jat910-2021` |
| `val_mass` | M and `finished_loom` | Confirm calibrated net mass M in kg for the same accepted configuration and packaging exclusion. | `epd-hub-core-pcr-2026` |
| `val_inventory` | all rows | Check atomic identities, UUID property and unit where present, measured per-machine basis, inclusion conditions and no upstream double count. | `epd-hub-core-pcr-2026` |
| `val_gaps` | publication and downstream use | Disclose unresolved flow identities and empirical range gaps; do not treat a proxy as verified. | `epd-hub-core-pcr-2026` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one configured, factory-accepted new loom. |
| downstream_use | `secondary_dataset` or `background_dataset` after dataset review. |
| allowed_use | Factory-gate loom production with compatible upstream components and explicit technology and mass qualifiers. |
| excluded_use | Fabric production, machine use, packaging, transport, installation or end of life without separate modules; cross-technology benchmarking without configuration alignment. |
| required_metadata | PCR id and version; model; batch or serial; width and technology; make-or-buy route; plant; year; accepted count; M; upstream identities. |
| required_quality_disclosure | Measurements, data gaps, unresolved UUIDs, allocation, representativeness and uncertainty. |
| update_trigger | Material change to design, component supply, route, measured energy or acceptance procedure. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `toyota-jat910-2021` | handbook | Toyota Industries Corporation, *WEAVING MACHINERY JAT910 Air Jet Loom* (2021.12), https://www.toyotatextilemachinery.com/wp-content/uploads/2022/01/JAT910.pdf | One complete loom's mechanism classes; no general masses or intensities |
| `sedzro-fugu-loom-2025` | literature | Sedzro et al., *DESIGN OPTIMISATION OF AN AUTOMATED TRADITIONAL SMOCK (FUGU) WEAVING MACHINE*, African Journal of Applied Research 11(3), 2025, https://ajaronline.com/index.php/AJAR/article/download/1159/620/2673 | Prototype frame, motor, mechanism and performance-test stages; no industry range |
| `epd-hub-core-pcr-2026` | standard | EPD Hub B.V., *Core Product Category Rules*, version 1.2.1 (2026), https://www.epdhub.com/_files/ugd/199f85_451db462020743c4b007603b67f3c807.pdf | General manufactured-product LCA allocation and data-quality rules |
