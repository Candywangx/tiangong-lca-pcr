---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47221-to-47223
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---


# Parts for the goods of subclasses 47221 to 47223

## 1. Scope and Applicability

This PCR describes factory-gate production of a separately supplied, finished part designed for a telephone set or communication apparatus in the CPC 47221–47223 host set. A concrete data package must name the part, compatible host, technology and production route. The category flow is a mass reporting identity, not permission to compare unlike parts by mass alone. Production of a complete telephone, router or base station is outside this part-level reference. [un-cpc-3-2025; itu-l1410-2024]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47221-to-47223 |
| classification_refs | CPC 3.0 47401, parts for goods of subclasses 47221 to 47223 |
| covered_products | Separately supplied dedicated finished parts of the specified host goods, including populated boards and fabricated mechanical parts when sold as those parts |
| excluded_products | Complete host equipment; raw unpopulated printed circuits, standalone ICs, unshaped sheet and packaging sold as their own products |
| representative_product | A populated communication-apparatus board module supplied as a replacement part; other dedicated part routes remain eligible when declared |
| production_route | Declare the actual on-site route; board population and sheet fabrication rows apply only when those operations occur |
| market_state | Accepted, functional, separately supplied part at the factory gate, before transport use or end of life |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared dedicated part that performs a specified function in a compatible telephone or communications apparatus |
| How much | 1 kg net mass of accepted finished parts of one declared part specification |
| How well | Pass the declared inspection and compatibility specification; disclose part type, materials and performance criteria |
| How long or cycle | One completed production lot to the factory gate; service lifetime and use are not modeled |
| reference_flow_link | finished_part |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts for the goods of subclasses 47221 to 47223 `bf7766aa-8f63-4869-bd70-2090483f4437` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part type and part number; compatible host subclass and model; accepted functional specification; material composition; manufacturing route; production geography and period; packaging exclusion from net mass |


A mass result is comparable only for parts with equivalent function, quality and boundary. The producer measures accepted net output mass for the same lot used by all inventory protocols. [itu-l1410-2024]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished parts on a calibrated scale after inspection and before transport packaging; exclude rejected units and the corrugated box. Collect using cp_finished_mass. |
| inventory_basis | all inventory rows | Physical flow property of each selected flow | row unit | Record attributable lot quantities per 1 kg reference flow using the same accepted net output mass and production period; preserve board area in m2, material masses in kg and electricity in kWh. |


## 5. System Boundary

Cradle-to-gate accounting includes upstream datasets for purchased boards, ICs, solder paste, aluminium sheet, electricity and packaging, plus the declared on-site fabrication, assembly, testing and packing operations. Exclude host-device assembly after the part leaves the gate, distribution, use and end-of-life from this part dataset. Disclose any externally performed process as an upstream dataset. [itu-l1410-2024]

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components at the part producer gate, with supplier production represented upstream |
| starting_condition_role | Explicit foreground inputs with linked upstream datasets |
| product_classification_scope | Dedicated separately supplied parts for host goods 47221, 47222 and 47223 |
| recursive_input_rule | Record a purchased same-category part as a distinct input with its own upstream dataset and stop tracing at that declared supplier boundary; do not silently merge it into the reference output |
| upstream_dataset_requirement | Use composition- and geography-matched supplier datasets where available; disclose missing upstream processes and proxy limits |
| disclosure | Report part identity, route, supplier boundary, included stages, exclusions and all deviations |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground part production | Include applicable on-site fabrication, module assembly, testing and packing until acceptance at factory gate; disclose route-specific omissions. | itu-l1410-2024 |
| boundary_supplier | purchased component inputs | Keep purchased-component upstream burdens and process boundary explicit; avoid double counting a supplier stage as on-site fabrication. | itu-l1410-2024 |


## 6. Process Inventory Structure

The cards below specify atomic exchanges for the common board-module and aluminium-sheet routes. Apply each card only when its stated physical operation occurs. A different part technology must disclose its own atomic exchanges and seek method review before treating this list as complete. [itu-l1410-2024]

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| part_manufacturing | Part fabrication, module assembly, testing and packing | required | Declare which of board population, sheet fabrication and packing actually occur; each conditional card follows that route | foreground production of one accepted part type | per 1 kg accepted finished part |


### Process: Part manufacturing (`part_manufacturing`)

#### Inputs

##### Product flows

###### Bare printed circuit board input (`bare_pcb`)

Include only when the producer populates a bare board for the declared communication part. Record the purchased board area and supplier technology; its upstream fabrication remains in the supplier dataset.

- Selected flow: Fabricated bare PCB board `6f07dbee-0861-42d0-a644-f84a667933a9`

- Flow property / unit: Area / m2

- Amount rule: Measured board area attributable to accepted output, per 1 kg reference flow.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_bare_pcb`

- Sources: `itu-l1410-2024`

###### Packaged integrated circuit input (`packaged_ic`)

Include when packaged ICs are mounted on the part; reconcile masses and part numbers with the bill of materials. Do not count bare die fabrication as an on-site process when ICs are purchased.

- Selected flow: Packaged integrated circuits `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`

- Flow property / unit: Mass / kg

- Amount rule: Measured purchased IC mass consumed per 1 kg reference flow.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_packaged_ic`

- Sources: `itu-l1410-2024`

###### Solder paste input (`solder_paste`)

Include only for an on-site solder-paste deposition route. Declare alloy and flux formulation; the database identity does not establish lead-free composition.

- Selected flow: Solder paste `13b90193-c692-4fce-a8d6-a20554776710`

- Flow property / unit: Mass / kg

- Amount rule: Measured paste consumed per 1 kg reference flow.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_solder_paste`

- Sources: `itu-l1410-2024`

###### Aluminium sheet input (`aluminium_sheet`)

Include only for a part formed or cut from aluminium sheet at the foreground site. Declare grade, recycled content and actual fabrication route; this generic flow does not establish primary-metal origin.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`

- Flow property / unit: Mass / kg

- Amount rule: Measured aluminium sheet consumption per 1 kg reference flow.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_aluminium_sheet`

- Sources: `itu-l1410-2024`

###### Purchased AC electricity (`electricity`)

Record electricity consumed by the declared on-site part fabrication, assembly, testing and packing activities. The public candidate records cannot uniquely establish the grid-supply identity; resolve the flow before dataset publication.

- Selected flow: Grid-supplied alternating-current electricity

- Flow property / unit: Energy / kWh

- Amount rule: Metered attributable electricity per 1 kg reference flow.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_electricity`

- Sources: `itu-l1410-2024`

###### Corrugated board shipping box input (`corrugated_box`)

Include when the accepted part is supplied in a corrugated board box. The box is an input to gate-ready packing and is excluded from the net reference-product mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`

- Flow property / unit: Mass / kg

- Amount rule: Measured box mass attributable to accepted output per 1 kg reference flow.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_corrugated_box`

- Sources: `itu-l1410-2024`

##### Waste flows

##### Elementary flows



#### Outputs

##### Product flows

###### Accepted finished communication-equipment part (`finished_part`)

One declared part type and host compatibility, accepted after inspection at the factory gate. Its net mass excludes the shipping box and rejects.

- Selected flow: Parts for the goods of subclasses 47221 to 47223 `bf7766aa-8f63-4869-bd70-2090483f4437`

- Flow property / unit: Mass / kg

- Amount rule: 1 kg

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_finished_mass`

- Sources: `un-cpc-3-2025`

##### Waste flows

###### Rejected populated board waste (`rejected_pcba`)

Include only when assembled boards fail inspection and leave the foreground as segregated populated-board waste. Record destination and do not treat this waste as accepted product.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`

- Flow property / unit: Mass / kg

- Amount rule: Measured rejected populated-board mass per 1 kg reference flow.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_rejected_pcba`

- Sources: `itu-l1410-2024`

###### Segregated aluminium cutting scrap (`aluminium_scrap`)

Include only when aluminium-sheet cutting produces separately collected aluminium scrap. Record recycling or disposal destination without a credit in this foreground inventory.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`

- Flow property / unit: Mass / kg

- Amount rule: Measured aluminium scrap mass per 1 kg reference flow.

- Value mode: Foreground record (`foreground_record`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Collected record (`collected_record`)

- Collection protocol: `cp_aluminium_scrap`

- Sources: `itu-l1410-2024`

##### Elementary flows



## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | shared lines and co-products | Subdivide metered processes and assign direct input and waste records to the declared part first. | itu-l1410-2024; eu-pef-2021-2279 |
| allocate_physical | shared facility data | When subdivision is unavailable, use a demonstrated physical driver relevant to the process: board area for PCB operations, good die area for IC production, or mass for other parts. Record driver, totals and sensitivity. | itu-l1410-2024; eu-pef-2021-2279 |
| allocate_economic | shared facility data without a defensible physical driver | Use economic allocation only if physical data are insufficient; report price basis, period and sensitivity. Do not grant an automatic recycling credit to aluminium scrap. | itu-l1410-2024; eu-pef-2021-2279 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_bare_pcb | part_manufacturing | bare_pcb | lot ledger and calibrated meter or scale | lot ID; part number; accepted net output kg; attributable bare printed circuit board input quantity | Measure or reconcile bare printed circuit board input for the same accepted lot; record route applicability and supplier or waste destination. | m2 | each lot | declared production period | declared facility | per 1 kg reference flow | meter or scale calibration; purchase and production ledger; acceptance and mass-balance record |
| cp_packaged_ic | part_manufacturing | packaged_ic | lot ledger and calibrated meter or scale | lot ID; part number; accepted net output kg; attributable packaged integrated circuit input quantity | Measure or reconcile packaged integrated circuit input for the same accepted lot; record route applicability and supplier or waste destination. | kg | each lot | declared production period | declared facility | per 1 kg reference flow | meter or scale calibration; purchase and production ledger; acceptance and mass-balance record |
| cp_solder_paste | part_manufacturing | solder_paste | lot ledger and calibrated meter or scale | lot ID; part number; accepted net output kg; attributable solder paste input quantity | Measure or reconcile solder paste input for the same accepted lot; record route applicability and supplier or waste destination. | kg | each lot | declared production period | declared facility | per 1 kg reference flow | meter or scale calibration; purchase and production ledger; acceptance and mass-balance record |
| cp_aluminium_sheet | part_manufacturing | aluminium_sheet | lot ledger and calibrated meter or scale | lot ID; part number; accepted net output kg; attributable aluminium sheet input quantity | Measure or reconcile aluminium sheet input for the same accepted lot; record route applicability and supplier or waste destination. | kg | each lot | declared production period | declared facility | per 1 kg reference flow | meter or scale calibration; purchase and production ledger; acceptance and mass-balance record |
| cp_electricity | part_manufacturing | electricity | lot ledger and calibrated meter or scale | lot ID; part number; accepted net output kg; attributable purchased ac electricity quantity | Measure or reconcile purchased ac electricity for the same accepted lot; record route applicability and supplier or waste destination. | kWh | each lot | declared production period | declared facility | per 1 kg reference flow | meter or scale calibration; purchase and production ledger; acceptance and mass-balance record |
| cp_corrugated_box | part_manufacturing | corrugated_box | lot ledger and calibrated meter or scale | lot ID; part number; accepted net output kg; attributable corrugated board shipping box input quantity | Measure or reconcile corrugated board shipping box input for the same accepted lot; record route applicability and supplier or waste destination. | kg | each lot | declared production period | declared facility | per 1 kg reference flow | meter or scale calibration; purchase and production ledger; acceptance and mass-balance record |
| cp_finished_mass | part_manufacturing | finished_part | lot ledger and calibrated meter or scale | lot ID; part number; accepted net output kg; attributable accepted finished communication-equipment part quantity | Measure or reconcile accepted finished communication-equipment part for the same accepted lot; record route applicability and supplier or waste destination. | kg | each lot | declared production period | declared facility | per 1 kg reference flow | meter or scale calibration; purchase and production ledger; acceptance and mass-balance record |
| cp_rejected_pcba | part_manufacturing | rejected_pcba | lot ledger and calibrated meter or scale | lot ID; part number; accepted net output kg; attributable rejected populated board waste quantity | Measure or reconcile rejected populated board waste for the same accepted lot; record route applicability and supplier or waste destination. | kg | each lot | declared production period | declared facility | per 1 kg reference flow | meter or scale calibration; purchase and production ledger; acceptance and mass-balance record |
| cp_aluminium_scrap | part_manufacturing | aluminium_scrap | lot ledger and calibrated meter or scale | lot ID; part number; accepted net output kg; attributable segregated aluminium cutting scrap quantity | Measure or reconcile segregated aluminium cutting scrap for the same accepted lot; record route applicability and supplier or waste destination. | kg | each lot | declared production period | declared facility | per 1 kg reference flow | meter or scale calibration; purchase and production ledger; acceptance and mass-balance record |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_mass_balance | finished_part and material losses | Check that accepted output plus separated scrap is physically plausible against measured material inputs; explain non-recovered losses without inventing a yield factor. | accepted output; material inputs; scrap records | mass-balance review | itu-l1410-2024 |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Use the same part number, host compatibility, route and lot across inputs, outputs and reference flow. | bill of materials; inspection record |
| dq_temporal | all collection protocols | Use one disclosed production period and site; record any estimated or missing meter share. | dated ledgers; meter and allocation records |
| dq_completeness | applicable route cards | Account for applicable materials, power and wastes; add separate atomic records for other actual exchanges and explain omissions. | process map; mass balance; waste transfer records |
| dq_electricity | electricity | Resolve a unique public product flow and a geography-matched upstream electricity dataset before publishing a data package. | task-bound flow audit; meter; supplier dataset |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference flow and finished_part | Require part/host compatibility, exact CPC 47401 product-flow UUID, 1 kg accepted net mass and exclusion of packaging from net product mass. | un-cpc-3-2025; itu-l1410-2024 |
| validate_route | all inventory rows | Require route-specific inclusion conditions, atomic selected flows, lot records and reconciliation of accepted output, rejects and material inputs. | itu-l1410-2024 |
| validate_unresolved | electricity | Block publication of a foreground data package until a unique public electricity flow is audited; retain measured activity without choosing an ambiguous UUID. | itu-l1410-2024 |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product production dataset for one declared part specification |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Model the production of the declared dedicated part as an input to a host-device LCA when specifications and boundary match |
| excluded_use | Do not substitute for a complete phone or network device, compare unlike part functions by mass, or claim use/end-of-life impacts |
| required_metadata | part number; host compatibility; production geography, year and technology; bill of materials; accepted net mass; route and supplier boundary; allocation driver |
| required_quality_disclosure | unresolved electricity UUID; missing upstream data; conditional route omissions; meter allocation; scrap destination; source limitations |
| update_trigger | part design, material composition, route, supplier mix, electricity identity or production period changes materially |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC identity and host subclasses |
| itu-l1410-2024 | standard | ITU-T Recommendation L.1410 (11/2024), https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.1410-202411-I%21%21PDF-E&lang=s&type=items | ICT parts, functional unit, process map, physical facility allocation |
| eu-pef-2021-2279 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf | multifunctional process allocation hierarchy |
