---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-for-the-goods-of-subclasses-45141-45142-and-45160-except-covers-c-f1ce13cf
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts and accessories for the goods of subclasses 45141, 45142 and 45160 (except covers, carrying cases and the like)

## 1. Scope and Applicability

This PCR covers separately supplied functional parts and accessories for accounting machines, cash registers, postage-franking and ticket-issuing machines incorporating a calculating device, POS terminals, ATMs and other office machines. Host-machine function and dedicated compatibility determine inclusion. Complete machines, typewriter and pocket-calculator parts, computing-machine parts, covers and carrying cases are excluded. The retained identity is promoted for part-level manufacture and replacement integration: a kilogram of a part does not deliver a kilogram of host-machine service. [un-cpc-3-0-structure-2025]

An operational banknote recycling cassette illustrates the inventory. Its engagement with the cash-handling mechanism distinguishes it from a transport case. [cbp-hq-086537-1990; diebold-nixdorf-cash-cassette-flexibility] The material routes below are conditional engineering collection models, not a manufacturer bill of materials. Define a separate dataset for each part number and revision; do not average unrelated functions. Other eligible parts use the same collection principles with their own fully specified atomic exchanges. A cassette inventory is not a default for a circuit board or a ticket-issuing mechanism.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-for-the-goods-of-subclasses-45141-45142-and-45160-except-covers-c-f1ce13cf |
| classification_refs | CPC 3.0: 45180 |
| covered_products | Dedicated functional parts of the stated office and transaction machines |
| excluded_products | Complete hosts; covers; carrying cases; typewriter, pocket-calculator and general computing parts |
| representative_product | Empty ATM banknote recycling cassette, one declared model |
| production_route | Conditional ABS moulding and steel forming; assembly, testing and packing |
| market_state | New, accepted functional part ready for incorporation; no banknotes |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a compatible operational replacement or incorporation part |
| How much | 1 kg net accepted parts of one part number; also report item count and unit mass |
| How well | Drawing revision, interface fit and functional acceptance demonstrated by test records |
| How long or cycle | One factory-gate production delivery; no service-life equivalence assumed. Declare rated cycles and warranty basis when claimed. |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | ATM banknote recycling cassette |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number; revision; host function and model; interface; net mass and count; material grades; electronics presence; acceptance test; rated duty where claimed; new or remanufactured state; site; period; manufacturing route; packaging mass |

Declare every qualifier in the data package. Use the mass basis only for production normalization; comparisons require equivalent function, compatibility and life. Remanufactured parts require a separately disclosed collection and refurbishment boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | reference_product | Mass | kg | Use accepted net part mass M; exclude packaging, banknotes and failed units from M. |
| count_conversion | count records | Mass | kg | Mass = count × measured mean unit mass for the same revision; retain sample count and dispersion. |
| energy_conversion | electricity meters | Net calorific value | MJ | Convert kWh to MJ using 3.6 MJ/kWh; reconcile submeter totals with allocated invoice consumption. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received identified material stocks and purchased finished components |
| starting_condition_role | Foreground entry condition, not burden-free raw material |
| product_classification_scope | CPC 3.0: 45180 |
| recursive_input_rule | Record a purchased same-category part once with supplier dataset; internal transfers are linked, not recursively purchased again. |
| upstream_dataset_requirement | Link production, delivery and waste-treatment datasets matching material state, geography and technology. |
| disclosure | Disclose make/buy split, supplier boundaries, treatment destinations, exclusions and separate gate-to-gate from cradle-to-gate totals. |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_partial | system_boundary | Use a disclosed partial production boundary; host operation and final disposal are separate downstream scenarios. | ghg-protocol-product-standard-2011 |
| boundary_complete | foreground | Include actual fabrication, outsourced finishing, testing, rework, packing, inbound delivery and production-waste treatment. Extend the atomic inventory for every actual material, chemical and emission absent below; never hide it in a category row. |  |
| boundary_transfer | internal_transfers | Pair housing and chassis transfers by batch and mass; internal quantities cancel at the aggregated boundary. Purchased parts require upstream datasets and exclude their on-site fabrication route. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| moulding | Housing moulding | conditional | ABS housing manufactured on site | foreground_production | 1 kg accepted net final part |
| forming | Chassis forming | conditional | Steel chassis manufactured on site | foreground_production | 1 kg accepted net final part |
| assembly | Assembly, acceptance and packing | required | All declared parts; single-piece parts undergo acceptance and packing | foreground_production | 1 kg accepted net final part |

### Process: Housing moulding (`moulding`)

#### Inputs

##### Product flows

###### ABS granulate (`abs_granulate`)

Inclusion condition: ABS housing is moulded on site.

- Selected flow: Acrylonitrile-butadiene-styrene (ABS) copolymer, granulate `8f1317c1-aa51-4524-8692-74079c923e2c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moulding`
- Sources:

###### Electricity (`moulding_electricity`)

Inclusion condition: The moulding route operates; include drying and closed-loop cooling power.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moulding`
- Sources:

#### Outputs

##### Product flows

###### Moulded ABS ATM cash cassette housing (`housing_output`)

Inclusion condition: Transfer accepted housings to assembly, with paired transfer records.

- Selected flow: Moulded ABS ATM cash cassette housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moulding`
- Sources:

##### Waste flows

###### ABS moulding scrap for off-site treatment (`abs_scrap`)

Inclusion condition: ABS scrap leaves the site; exclude internally reground runners.

- Selected flow: ABS moulding scrap for off-site treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moulding`
- Sources:

### Process: Chassis forming (`forming`)

#### Inputs

##### Product flows

###### Cold-rolled low-carbon steel sheet (`steel_sheet`)

Inclusion condition: Steel chassis is formed on site from sheet.

- Selected flow: Cold-rolled low-carbon steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources:

###### Electricity (`forming_electricity`)

Inclusion condition: Sheet cutting and bending operate; include attributable auxiliary power.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources:

#### Outputs

##### Product flows

###### Formed steel ATM cash cassette chassis (`chassis_output`)

Inclusion condition: Transfer accepted chassis to assembly, with paired transfer records.

- Selected flow: Formed steel ATM cash cassette chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources:

##### Waste flows

###### Low-carbon steel sheet offcuts for off-site recycling (`steel_offcuts`)

Inclusion condition: Offcuts leave the site as waste; document recipient and recovery route.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources:

### Process: Assembly, acceptance and packing (`assembly`)

#### Inputs

##### Product flows

###### Moulded ABS ATM cash cassette housing (`housing_input`)

Inclusion condition: The declared cassette uses an ABS housing; identify internal or purchased origin.

- Selected flow: Moulded ABS ATM cash cassette housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Formed steel ATM cash cassette chassis (`chassis_input`)

Inclusion condition: The declared cassette uses a steel chassis; identify internal or purchased origin.

- Selected flow: Formed steel ATM cash cassette chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Steel screw (`steel_screws`)

Inclusion condition: The actual bill of materials specifies steel screws.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Steel compression spring (`steel_spring`)

Inclusion condition: The actual bill of materials specifies a steel compression spring.

- Selected flow: Steel compression spring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Electricity (`assembly_electricity`)

Inclusion condition: Meter assembly, functional testing, rework and attributable facility electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Corrugated cardboard box (`corrugated_box`)

Inclusion condition: The finished part is shipped in a corrugated cardboard box.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch quantity Q divided by accepted final part mass M; record stock changes, rework and any allocation before normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

#### Outputs

##### Product flows

###### ATM banknote recycling cassette (`reference_product`)

Inclusion condition: Accepted, empty operational cassette at factory gate, excluding packaging mass.

- Selected flow: ATM banknote recycling cassette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: M/M = 1 kg; M is accepted net mass from cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net final part
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_processes | Prefer metered subdivision; use a documented causal physical driver, then a justified economic basis if no physical relation is defensible. | ghg-protocol-product-standard-2011 |
| allocation_rework | part_batches | Charge failed production and rework to accepted output. Keep internal regrind separate from purchased recycled resin. Report recovery conventions and do not subtract hypothetical avoided virgin production. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_moulding | moulding | Each atomic exchange and output | Batch ledger and metering | part revision; batch; Q; M; stock change; item count; unit mass; rejects; rework; supplier; route; meter start/end; driver share | Weigh issues, returns, transfers and wastes; read submeters; reconcile invoice and acceptance records | kg; kWh; MJ; count | Each batch and meter period | One declared consecutive production year; disclose shorter startup coverage | Named site and outsourced route | Sum net Q and accepted M for identical part revision, then Q/M; no averaging of batch ratios | Calibration; invoices; BOM; transfer pairs; acceptance tests; waste tickets |
| cp_forming | forming | Each atomic exchange and output | Batch ledger and metering | part revision; batch; Q; M; stock change; item count; unit mass; rejects; rework; supplier; route; meter start/end; driver share | Weigh issues, returns, transfers and wastes; read submeters; reconcile invoice and acceptance records | kg; kWh; MJ; count | Each batch and meter period | One declared consecutive production year; disclose shorter startup coverage | Named site and outsourced route | Sum net Q and accepted M for identical part revision, then Q/M; no averaging of batch ratios | Calibration; invoices; BOM; transfer pairs; acceptance tests; waste tickets |
| cp_assembly | assembly | Each atomic exchange and output | Batch ledger and metering | part revision; batch; Q; M; stock change; item count; unit mass; rejects; rework; supplier; route; meter start/end; driver share | Weigh issues, returns, transfers and wastes; read submeters; reconcile invoice and acceptance records | kg; kWh; MJ; count | Each batch and meter period | One declared consecutive production year; disclose shorter startup coverage | Named site and outsourced route | Sum net Q and accepted M for identical part revision, then Q/M; no averaging of batch ratios | Calibration; invoices; BOM; transfer pairs; acceptance tests; waste tickets |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all rows | q_i = sum(Q_i after allocation and stock correction)/sum(M); M > 0 | Q_i; M | q_i |  |
| transfer_balance | housing and chassis | Internal output = internal receipt + transfer stock change; exclude purchased receipts from this equation | paired transfer ledger | balance residual |  |
| material_balance | fabrication and assembly | Net material inputs = accepted net output + external waste + inventory change + separately measured losses; internal regrind is not a new external input. Investigate residual against instrument uncertainty. | material ledger | mass residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | part and upstream datasets | Verify exact part revision and compatible supplier boundary; generic data require a declared sensitivity check. | BOM; supplier declarations |
| coverage | collection period | Record geography, period, technology, completeness and uncertainty. | ghg-protocol-product-standard-2011 |
| quantity | all quantities | Retain raw observations and conversion factors. Missing records are unknown, not zero; investigate with supplier or site measurements. | Meter and batch evidence |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference_flow | Require all qualifiers and host compatibility evidence. Reject complete hosts, transport cases and unqualified mixed-part averages. | un-cpc-3-0-structure-2025 |
| validate_inventory | inventory | Check every applicable row has a quantity or explicit missing-data finding; reconcile BOM and actual route against added atomic rows. Missing UUIDs do not waive collection. |  |
| validate_balance | quantities | Require positive accepted mass, consistent units, paired internal transfers and explained balance residuals. Count rework once and packaging separately. |  |
| validate_use | downstream_use | Do not infer host energy savings, lifetime or recovery credits from cassette mass or manufacturer marketing claims. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Part manufacture or replacement input to a separately defined host system |
| allowed_use | Compatible part number, revision, material route and gate boundary |
| excluded_use | Whole-ATM claims; direct comparison of unlike parts; unmodelled use-stage savings |
| required_metadata | Qualifiers; site; period; net mass; count; BOM; supplier datasets; allocation; process map; boundary |
| required_quality_disclosure | Measured share; missing data; unresolved identities; uncertainty; exclusions; range limitations |
| update_trigger | Part revision, material supplier, route, tooling, energy mix or test specification changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | CPC Version 3.0 structure (30 June 2025). [Original source](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv). Retrieved 2026-09-08; independence_key: un-cpc-3-0-structure-2025 | Official rows 45141, 45142, 45160 and 45180; category identity and exclusions. |
| cbp-hq-086537-1990 | official_guidance | HQ 086537, Internal Advice 8/90 (17 April 1990). [Original source](https://rulings.cbp.gov/api/ruling/086537). Retrieved 2026-09-08; independence_key: cbp-hq-086537-1990 | Facts and holding: currency cassettes function with banknote dispensing mechanisms; historical product-boundary example, not current tariff advice. |
| diebold-nixdorf-cash-cassette-flexibility | literature | Flexibility is the New Standard for Cash Cassettes. [Original source](https://www.dieboldnixdorf.com/en-us/banking/insights/blog/new-standard-for-cash-cassettes/). Retrieved 2026-09-08; independence_key: diebold-nixdorf-cash-cassette-flexibility | Manufacturer description of cassette functions and configuration; compatibility qualifiers only, no bill of materials or quantitative inventory. |
| ghg-protocol-product-standard-2011 | standard | Product Life Cycle Accounting and Reporting Standard, chapters 7–9. [Original source](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf). Retrieved 2026-09-08; independence_key: ghg-protocol-product-standard-2011 | Partial life-cycle boundary disclosure, allocation hierarchy and data-quality principles; applied here as methodological guidance, not full-standard conformance. |
