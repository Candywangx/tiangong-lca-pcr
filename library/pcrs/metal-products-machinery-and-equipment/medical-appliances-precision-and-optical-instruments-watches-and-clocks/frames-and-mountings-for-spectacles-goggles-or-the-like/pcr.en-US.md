---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.frames-and-mountings-for-spectacles-goggles-or-the-like
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Frames and mountings for spectacles, goggles or the like

## 1. Scope and Applicability

This PCR applies to factory production of unglazed frames and mountings that hold spectacle lenses, goggle lenses, prescription inserts, or analogous optical elements. It covers full-rim, semi-rimless, rimless, folding, and comparable frame constructions supplied without their final corrective or protective lenses. It supports separately declared plastics-sheet and metal-wire routes, including forming, joining, polishing, cleaning, optional surface finishing, final assembly, inspection, and packing.

Finished spectacles, goggles, sunglasses, lenses, optical filters, eye protectors, cases sold as separate products, retail fitting, use, repair, and end-of-life are outside the default product boundary. A foreground data package shall identify the actual frame material, construction, finish, and market state; the conditional rows below shall not be averaged across unused routes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.frames-and-mountings-for-spectacles-goggles-or-the-like |
| classification_refs | CPC 3.0: 48313, exact classification context |
| covered_products | Unglazed spectacle frames and mountings; unglazed goggle frames and mountings; rimless and semi-rimless mounts; frame or mount components assembled as the marketable frame |
| excluded_products | Finished spectacles and goggles with final lenses; spectacle lenses and optical filters; complete eye protectors; separate carrying cases; loose parts not assembled as the marketable frame; retail and repair services |
| representative_product | One conforming, unglazed, packed spectacle frame or mounting represented on a net-mass basis |
| production_route | Purchased material and components through cutting or forming, joining, polishing, cleaning, route-specific finishing, assembly, inspection, and packing |
| market_state | Unglazed frame or mounting at the manufacturing factory gate, packed for transfer to a lens fitter, retailer, or downstream assembler |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide unglazed frames or mountings capable of holding the declared lens or optical element configuration |
| How much | 1 kg net mass of conforming frames and mountings at the manufacturing factory gate |
| How well | Meets the declared purchaser specification and applicable frame requirements; prescription spectacle frames shall state whether conformity to ISO 12870:2024 or another named specification was assessed |
| How long or cycle | Factory-gate delivery; service life is not part of this reference flow and shall be declared separately when downstream use is modelled |
| reference_flow_link | The reference product output `finished_spectacle_frame` realizes the functional unit after normalization to its measured net mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Frames and mountings for spectacles, goggles or the like `8b6b0bdd-aae1-44f1-a5f8-11a984c38cf1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | frame application; frame construction; principal material and grade; plastics-sheet or metal route; finish and coating system; lens-retention design; nominal size; unglazed market state; packed or unpacked mass convention; production site and geography; production period; applicable conformity specification |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | Reference product and mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry or as-received mass consistently as declared. Exclude final lenses and any separately sold carrying case from reference-product net mass. |
| `measurement_02` | Purchased materials, components, chemicals, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calculate consumed mass from receipts plus opening stock minus closing stock, returns, and documented transfers; retain stock reconciliation by production period. |
| `measurement_03` | Electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the native meter reading and documented conversion to MJ. Allocate shared electricity only with a disclosed causal driver such as submetered energy, machine operating time, or validated rated-load hours. |
| `measurement_04` | Counted frames, screws, hinges, and boxes converted to mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use batch weighing or a documented representative mass sample. Record sample size, scale resolution, model mix, and the count-to-mass calculation. |
| `measurement_05` | Aqueous wastes recorded by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert measured volume to mass only with a contemporaneous measured or supplier-supported density for the actual bath or waste mixture; retain both volume and density records. |

## 5. System Boundary

The default boundary is gate-to-gate frame manufacture. It begins when purchased frame materials, miniature hardware, process chemicals, water, electricity, and packaging cross the manufacturing-site boundary and ends with conforming unglazed frames packed at the factory gate. The process includes route-specific material preparation, cutting or forming, wire straightening or swaging, machining, joining, polishing, cleaning, optional plating or varnishing, assembly, inspection, reject handling, waste segregation, and on-site emission control directly associated with production.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased frame material, hardware, process chemicals, water, electricity, and packaging are received at the manufacturing site in the supplier-declared state |
| starting_condition_role | gate_to_gate_manufacturing_input |
| product_classification_scope | Unglazed frames and mountings corresponding semantically to CPC 48313; lenses, complete eyewear, and separate loose parts are excluded |
| recursive_input_rule | If a purchased input is itself a frame or mounting within this PCR category, record it once as an upstream product input with its supplied mass and exclude its prior manufacture from the foreground process; do not recursively recreate the same category |
| upstream_dataset_requirement | Link each purchased material, component, chemical, utility, and packaging input to a geographically and technologically representative upstream dataset; disclose any proxy or missing upstream dataset |
| disclosure | Declare frame material and grade, forming route, joining method, finishing system, production site, period, allocation drivers, treatment destinations, and every conditional row marked not applicable |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | foreground_process | Include all on-site operations from receipt and storage through forming, joining, polishing, cleaning, route-specific finishing, final assembly, inspection, packing, waste handling, and directly associated emission control. | `unido-spectacle-frames-profile` |
| `boundary_02` | conditional_routes | Include cellulose-acetate, nickel-silver, chromium-plating, and varnish rows only when the declared product route uses that exchange; document verified absence before using `not_applicable`. | `unido-spectacle-frames-profile`; `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |
| `boundary_03` | excluded_activities | Exclude final lenses, separately sold cases, retail fitting, use, repair, end-of-life, capital equipment, buildings, employee travel, and general administration unless the study goal explicitly expands the boundary. | `un-cpc-3-0-structure-2025`; `iso-12870-2024` |
| `boundary_04` | upstream_inputs | Represent upstream production of purchased inputs with linked datasets rather than recreating it inside the foreground frame-production process. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame_production` | Frame material preparation, forming, joining, finishing, assembly, testing, and packing | required | Include for every foreground data package; within this process include each route-specific atomic row only when that material, finish, or waste is present | foreground production | 1 kg measured net mass of conforming unglazed frames and mountings at factory gate |

### Process: Frame material preparation, forming, joining, finishing, assembly, testing, and packing (`frame_production`)

#### Inputs

##### Product flows

###### Cellulose acetate sheet (`cellulose_acetate_sheet`)

Record sheet consumed by cutting, planing, milling, bowing, and side production when the plastics-sheet route is used.

- Selected flow: Cellulose acetate sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured consumed mass from purchase and stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unido-spectacle-frames-profile`

###### Nickel-silver wire (`nickel_silver_wire`)

Record nickel-silver wire consumed by straightening, swaging, pressing, rim forming, and joining when that metal route is used.

- Selected flow: Nickel-silver wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured consumed mass from purchase and stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unido-spectacle-frames-profile`

###### Steel spectacle-frame hinge (`steel_spectacle_hinge`)

Record the mass of miniature steel hinges installed in the product; do not substitute furniture or door hinges.

- Selected flow: Steel spectacle-frame hinge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured purchased mass allocated by installed count and batch-weighed unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_inputs`
- Sources: `unido-spectacle-frames-profile`

###### Steel screw (`steel_screw`)

Record steel screws installed to join frame fronts and sides or close rims.

- Selected flow: Steel screw `35a4d7dc-1c42-4eb2-a48a-0f9a5abce9d6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured purchased mass allocated by installed count and batch-weighed unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_inputs`
- Sources: `unido-spectacle-frames-profile`

###### Pumice polishing powder (`pumice_polishing_powder`)

Record pumice powder issued to barrel or vibratory polishing when it crosses the foreground boundary as a purchased abrasive.

- Selected flow: Pumice polishing powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured issued mass minus unused material returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_inputs`
- Sources: `unido-spectacle-frames-profile`

###### Process water (`process_water`)

Record water supplied to cleaning, polishing, and route-specific aqueous finishing operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered water crossing the production boundary, excluding domestic use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `unido-spectacle-frames-profile`; `eu-jrc-stm-bref-2006`

###### Electricity (`electricity`)

Record purchased electrical energy for cutting, forming, polishing, cleaning, finishing, assembly, inspection, packing, and directly associated emission controls.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: metered line electricity plus causally allocated shared production electricity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `unido-spectacle-frames-profile`

###### Sodium hydroxide (`sodium_hydroxide`)

Record sodium hydroxide used to make up an alkaline cleaning bath when that chemistry is used.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pure-product-equivalent mass added to the cleaning bath
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_inputs`
- Sources: `eu-jrc-stm-bref-2006`

###### Chromium trioxide (`chromium_trioxide`)

Record chromium trioxide added to a chromium-plating bath only when that finishing chemistry is used.

- Selected flow: Chromium trioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pure-product-equivalent bath make-up and replenishment mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_inputs`
- Sources: `unido-spectacle-frames-profile`; `eu-jrc-stm-bref-2006`

###### Acrylic varnish (`acrylic_varnish`)

Record acrylic varnish consumed when the declared metal-frame finish uses this formulated coating.

- Selected flow: Acrylic varnish `56a0ef1c-80ef-4e0c-b690-c8aefb4c7e8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured coating issued minus unused coating returned, with formulation and solids content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_inputs`
- Sources: `unido-spectacle-frames-profile`; `eu-jrc-sts-bref-2020`

###### Corrugated board boxes (`corrugated_board_boxes`)

Record corrugated board boxes allocated to the frames packed within the production boundary.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured box mass allocated by packed frame count or measured packed batch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `unido-spectacle-frames-profile`

##### Waste flows

No waste flow is an input to the default frame-production process.

##### Elementary flows

No elementary flow is an input to the default frame-production process.

#### Outputs

##### Product flows

###### Finished unglazed spectacle frame (`finished_spectacle_frame`)

Record conforming unglazed frames and mountings after inspection and packing, excluding final lenses and separately sold cases.

- Selected flow: Frames and mountings for spectacles, goggles or the like `8b6b0bdd-aae1-44f1-a5f8-11a984c38cf1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: normalize measured conforming net product mass to 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_rejects`
- Sources: `un-cpc-3-0-structure-2025`; `iso-12870-2024`

##### Waste flows

###### Cellulose acetate offcuts (`cellulose_acetate_offcuts`)

Record segregated cellulose acetate sheet pieces removed during planing, cutting, milling, drilling, and trimming.

- Selected flow: Cellulose acetate offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass transferred to reuse, recycling, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `unido-spectacle-frames-profile`

###### Nickel-silver scrap (`nickel_silver_scrap`)

Record segregated clean nickel-silver wire, rim, bridge, and side scrap from cutting, forming, and trimming.

- Selected flow: Nickel-silver scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass transferred to internal reuse, recycling, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `unido-spectacle-frames-profile`

###### Waste polishing media (`waste_polishing_media`)

Record spent polishing media removed from barrel or vibratory finishing as one separately managed waste exchange.

- Selected flow: Waste polishing media `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass transferred from the polishing operation to treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `unido-spectacle-frames-profile`

###### Chromium-containing aqueous waste (`chromium_aqueous_waste`)

Record a separately managed aqueous waste containing chromium from bath replacement, drag-out capture, or on-site treatment only when chromium plating is used.

- Selected flow: Chromium-containing aqueous waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass or measured volume converted with contemporaneous waste density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-jrc-stm-bref-2006`

###### Waste alkaline liquor (`waste_alkaline_liquor`)

Record spent sodium-hydroxide cleaning bath removed as a separately managed alkaline liquid waste.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass or measured volume converted with contemporaneous waste density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-jrc-stm-bref-2006`

###### Rejected spectacle frame (`rejected_spectacle_frame`)

Record complete frames rejected after inspection and not returned to production; keep their material composition and destination separate from offcuts.

- Selected flow: Rejected spectacle frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass of final rejects transferred to reuse, recycling, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_rejects`
- Sources: `iso-12870-2024`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`nmvoc_to_air`)

Record direct NMVOC released to unspecified air from the declared varnish application and curing route after capture and treatment.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured emission or documented solvent mass balance minus captured and transferred solvent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-sts-bref-2020`

###### Fine particles to air (`fine_particles_to_air`)

Record direct PM0.2-PM2.5 released to unspecified air from grinding, polishing, or blasting after capture and treatment when measured for this size fraction.

- Selected flow: Particles (PM0.2 - PM2.5) `4d9a8790-3ddd-11dd-936e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured concentration multiplied by normalized dry gas volume for the corresponding production period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming frame output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `unido-spectacle-frames-profile`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | foreground_subdivision | Prefer submetering and subdivision by frame route, production line, coating system, and production campaign before allocation. |  |
| `allocation_02` | shared_materials_and_utilities | Allocate shared inputs by a documented causal driver: direct meter reading, consumed mass, machine operating time, bath loading, or counted units with representative unit mass. Do not allocate unused conditional-route inputs to the product. |  |
| `allocation_03` | multiple_frame_models | When several frame models share a process, allocate burdens using measured net output mass unless a more causal driver is documented for the affected operation. Preserve model mix and allocation totals. |  |
| `allocation_04` | scrap_and_recycling | Report scrap and other wastes at the foreground boundary with measured mass and destination. Do not apply avoided-burden credits inside this PCR unless the chosen LCA method explicitly requires and documents them. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `frame_production` | principal frame materials | purchase, stock, and return records | material_id; grade; supplier; receipts_mass; opening_stock; closing_stock; returns_mass; route | reconcile traceable stock records with calibrated scale readings | kg | each lot and monthly reconciliation | same period as product output | all in-scope lines at the declared site | receipts plus opening stock minus closing stock, returns, and transfers | purchase documents; stock ledger; scale calibration; material specification |
| `cp_component_inputs` | `frame_production` | hinges and screws | bill of materials, issue records, and batch-weighing records | component_id; material; installed_count; issued_count; returned_count; sample_count; sample_mass | count installed components and convert with representative batch mass | count and kg | each model or lot | same period as product output | all in-scope models | installed count multiplied by documented mean unit mass, reconciled to issues | bill of materials; count record; scale calibration; sampling record |
| `cp_finish_inputs` | `frame_production` | polishing, cleaning, plating, and coating inputs | issue, return, bath make-up, and formulation records | product_id; formulation; concentration; issued_mass; returned_mass; make_up_mass; bath_id; route | weigh issued and returned product and reconcile bath additions | kg | each issue and bath addition | same period as product output | each in-scope finishing line | sum net issue or pure-product-equivalent addition by chemistry | stock ledger; batch ticket; supplier specification; scale calibration |
| `cp_utilities` | `frame_production` | process water and electricity | meter and operating records | meter_id; opening_reading; closing_reading; native_unit; allocation_driver; domestic_exclusion | read calibrated line meters or allocate shared meters with a documented causal driver | kg water and native energy unit | at least monthly and at campaign boundaries | representative continuous period covering the output | all in-scope production and controls | meter difference minus documented exclusions, normalized to conforming output | meter calibration; readings; allocation worksheet; production log |
| `cp_packaging` | `frame_production` | corrugated board boxes | packaging issue and packed-batch records | box_id; issued_count; returned_count; sample_count; sample_mass; packed_frame_count | reconcile issued boxes and batch-weigh representative boxes | count and kg | each packaging lot | same period as product output | packing operation | net used count multiplied by documented mean box mass and allocated to packed frames | issue record; weighing record; scale calibration; packing log |
| `cp_output_and_rejects` | `frame_production` | conforming output and final rejects | production, inspection, and disposition records | model_id; gross_mass; excluded_lens_mass; excluded_case_mass; conforming_count; conforming_net_mass; reject_count; reject_mass; disposition | weigh conforming output and segregated final rejects after inspection | kg and count | each production lot | same period as inputs | all in-scope models and lines | sum conforming net mass and rejects separately; normalize inputs to conforming mass | inspection record; scale calibration; disposition record; applicable test report |
| `cp_waste_outputs` | `frame_production` | segregated offcuts, scrap, polishing media, and liquid wastes | container, tank, manifest, and transfer records | waste_id; composition; source_operation; gross_mass; tare_mass; volume; density; destination; transfer_date | weigh containers or measure tank volume with contemporaneous density | kg; volume and density when converted | each transfer, at least monthly reconciliation | same period as product output | all in-scope waste collection points | net transfer mass by waste identity and destination | scale or tank calibration; density record; waste manifest; receiving record |
| `cp_air_emissions` | `frame_production` | NMVOC and PM0.2-PM2.5 | stack or room-exhaust measurements and solvent balance | pollutant; concentration; dry_gas_volume; sampling_period; capture_mass; transferred_solvent_mass; production_mass | use site measurement for the matching compartment and size fraction; NMVOC may also use a complete solvent mass balance | kg and supporting concentration/volume units | each required test and production period | representative operating conditions in the declared period | each in-scope emission point | pollutant concentration times dry gas volume, or verified solvent balance, normalized to conforming output | laboratory report; instrument calibration; flow measurement; solvent reconciliation; control-device record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_01` | purchased material consumption | consumed mass = receipts + opening stock - closing stock - returns - documented outbound transfers | purchase and stock records | kg consumed by row |  |
| `calculation_02` | counted component or box mass | allocated mass = installed or used count multiplied by representative mean unit mass | counts, sample count, sample mass | kg component or packaging input |  |
| `calculation_03` | aqueous waste mass | waste mass = measured volume multiplied by contemporaneous mixture density | volume, density, transfer identity | kg aqueous waste |  |
| `calculation_04` | normalized inventory | normalized row amount = period row amount divided by conforming net frame mass | row amount, conforming net mass | amount per 1 kg reference product |  |
| `calculation_05` | measured air emission | emission mass = matching pollutant concentration multiplied by normalized dry gas volume; subtract only separately measured captured material not already excluded by the measurement boundary | concentration, dry gas volume, capture boundary | kg pollutant per period | `eu-jrc-sts-bref-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | product identity | Distinguish unglazed frames from complete eyewear, lenses, loose parts, and separately sold cases; retain model, material, construction, finish, and market-state records. | product specification; bill of materials; product photograph or drawing; CPC scope review |
| `quality_02` | completeness | Reconcile principal material inputs, conforming output, offcuts, scrap, and final rejects over the same period; explain every unmeasured loss and excluded route. | signed mass-balance worksheet and production-period reconciliation |
| `quality_03` | temporal and site coverage | Use one representative continuous production period and include all in-scope lines, shifts, finishing operations, controls, and waste collection points at the declared site. | production calendar; meter coverage map; line list; maintenance and shutdown log |
| `quality_04` | measurement | Use calibrated scales, meters, tank gauges, and analytical methods with resolution suitable for small components and low-mass emissions. | current calibration certificates; sampling plan; laboratory report |
| `quality_05` | conditional routes | For every conditional material, chemistry, coating, waste, or emission row, record either a value or documented evidence of non-applicability; zero is not a substitute for missing data. | route declaration; formulation; bath list; process flow diagram; signed non-applicability review |
| `quality_06` | source and destination traceability | Link purchased inputs to supplier and grade, and each waste to composition, treatment destination, and transfer record. | supplier declaration; purchase record; waste manifest; receiving certificate |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference_flow | Confirm that the reference output is the exact CPC 48313 frame/mounting flow, uses Mass and kg, excludes final lenses and separately sold cases, and carries all required qualifiers. | `un-cpc-3-0-structure-2025`; `iso-12870-2024` |
| `validation_02` | inventory_identity | Confirm every inventory card contains one atomic exchange; reject umbrella flows, mixed utility labels, generic packaging-material labels, and unspecified wastewater used in place of the chromium-containing aqueous waste row. |  |
| `validation_03` | uuid_and_units | For each UUID-bearing row, confirm state-100 flow type, English and Chinese baseName, classification, property, unit group, and reference unit; for UUID-empty rows, confirm the manifest unresolved entry is present. |  |
| `validation_04` | mass_and_period_reconciliation | Confirm that materials, components, output, offcuts, scrap, waste, and rejects cover the same production period and that unexplained mass imbalance is disclosed. |  |
| `validation_05` | route_applicability | Confirm the declared material and finishing route agrees with every populated or not-applicable conditional row; do not average cellulose-acetate, nickel-silver, chromium-plating, and varnish routes. | `unido-spectacle-frames-profile` |
| `validation_06` | direct_emissions | Confirm NMVOC and PM0.2-PM2.5 are direct foreground emissions to the stated unspecified-air compartment and are not upstream electricity or material-production emissions. | `eu-jrc-sts-bref-2020` |
| `validation_07` | range_evidence | Confirm no empirical external range is used unless at least two independent original sources have compatible boundary, reference flow, product state, geography, and technology; otherwise retain the foreground collection requirement and unresolved range-evidence need. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset eligible for later publication as `secondary_dataset` or `background_dataset` after review |
| downstream_use | Product carbon footprint, comparative LCA, supply-chain modelling, and lifecyclemodel construction for the declared frame material, route, finish, geography, and factory-gate state |
| allowed_use | Use for products matching the declared semantic scope and required qualifiers, with upstream datasets and allocation method disclosed |
| excluded_use | Complete spectacles or goggles; lenses; eye protectors; loose frame parts; retail fitting; use-phase durability; repair; end-of-life; materially different frame materials or finishing systems without route-specific data |
| required_metadata | PCR id; product and model; frame application and construction; principal material and grade; forming and finishing route; lens-retention design; net-mass convention; site and geography; period; technology; upstream dataset links; allocation drivers; treatment destinations; conformity specification |
| required_quality_disclosure | primary-data share; meter and scale coverage; component mass sampling; mass-balance result; missing data and proxies; route non-applicability evidence; emission measurement method; uncertainty; unresolved UUID and range-evidence status |
| update_trigger | Change in principal material, frame construction, forming or joining technology, finishing chemistry, coating formulation, emission control, supplier mix, packaging, production site, allocation driver, or applicable product specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official English classification identity and separation from finished spectacles, goggles, lenses, and parts |
| `un-cpc-v1-1-chinese` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-07) | Verified Chinese terminology for CPC 48313 |
| `unido-spectacle-frames-profile` | official_guidance | United Nations Industrial Development Organization, Techno-Economic Profile on Spectacle Frames: Final Report, document 19404.en, https://downloads.unido.org/ot/48/19/4819673/15001-20000_19404.pdf (retrieved 2026-09-07) | Product-specific plastics and metal routes; forming, polishing, joining, cleaning, finishing, assembly, utilities, inspection, and packing process decomposition |
| `iso-12870-2024` | standard | ISO 12870:2024, Ophthalmic optics - Spectacle frames - Requirements and test methods, https://committee.iso.org/standard/75916.html (retrieved 2026-09-07) | Unglazed spectacle-frame scope, principal components, market state, and performance-test categories; no numerical test limit is reproduced |
| `eu-jrc-stm-bref-2006` | official_guidance | European Commission Joint Research Centre, Surface Treatment of Metals and Plastics BREF, adopted August 2006, https://eippcb.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics (retrieved 2026-09-07) | Aqueous electrochemical and chemical surface-treatment boundary, water and bath inputs, and separately managed treatment outputs |
| `eu-jrc-sts-bref-2020` | official_guidance | European Commission Joint Research Centre, Surface Treatment Using Organic Solvents BREF, adopted December 2020, https://eippcb.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation (retrieved 2026-09-07) | Varnish/coating route, solvent management, and direct NMVOC collection and calculation requirements |
