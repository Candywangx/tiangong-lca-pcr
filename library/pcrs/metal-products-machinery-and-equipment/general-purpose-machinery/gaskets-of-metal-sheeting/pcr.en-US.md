---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.gaskets-of-metal-sheeting
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gaskets of metal sheeting

## 1. Scope and Applicability

This PCR applies to cradle-to-factory-gate production of finished gaskets and similar joints made from metal sheeting combined with another material or from two or more layers of metal. Covered constructions include spiral-wound, metal-jacketed, and grooved or layered metal-sheet gaskets when their declared construction satisfies this boundary. The foreground starts with received metal sheet or strip, declared filler, process auxiliaries, and packaging and ends with an inspected product ready for dispatch.

Mechanical seals, gasket assortments of dissimilar composition, non-metallic flat gaskets, elastomeric O-rings, and solid machined ring-joint gaskets without a metal-sheet or multilayer construction are excluded. Upstream production of purchased metals, polymers, graphite, chemicals, electricity, water, and packaging is represented by linked background datasets. Distribution, installation, use, leakage during use, maintenance, and end-of-life are outside the declared gate boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.gaskets-of-metal-sheeting |
| classification_refs | CPC 3.0: 43924, Gaskets of metal sheeting; semantic boundary informed by CN 8484 10 00 |
| covered_products | Finished gaskets and similar joints of metal sheeting combined with another material or made from two or more metal layers, including applicable spiral-wound, metal-jacketed, and grooved or layered constructions |
| excluded_products | Mechanical seals; gasket assortments; non-metallic flat gaskets; elastomeric O-rings; solid machined ring-joint gaskets without metal-sheet or multilayer construction |
| representative_product | A finished spiral-wound or metal-jacketed gasket made from declared metal sheet or strip and, when used, one declared filler material |
| production_route | Sheet or strip cutting and blanking; edge finishing; conditional forming, profiling, winding, jacketing, or assembly; conditional aqueous alkaline cleaning; inspection; marking when required; and packing |
| market_state | Finished, inspected gasket at the manufacturing-site gate, with declared construction, material grades, dimensions, applicable standard or drawing, and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate provision of finished metal-sheeting gaskets capable of sealing the joint for which their declared design is specified |
| How much | 1 kg net mass of conforming finished gaskets, excluding non-integral packaging |
| How well | Meets the declared drawing or gasket standard, dimensions and tolerances, material grades, construction, pressure class where applicable, and inspection acceptance criteria |
| How long or cycle | One documented production lot at the factory gate; service life and use-stage sealing performance are not included |
| reference_flow_link | The conforming finished-product output `finished_metal_sheeting_gasket` normalized to 1 kg net product mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Gaskets of metal sheeting `566e5c48-5523-4e69-98c9-0a8ad67d24d4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | gasket construction; metal alloy and grade; filler identity, grade, and mass fraction when present; nominal dimensions and net mass; applicable standard or drawing and pressure class; surface treatment or coating; manufacturing geography and reference period; inspection acceptance basis; packaging state; recycled-content and scrap-allocation convention |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of conforming finished gaskets after final inspection. Exclude corrugated boxes, plastic film, pallets, and other non-integral packaging from reference-product mass and report each included packaging material as a separate input. |
| `material_mass` | metal, filler, auxiliary, waste, and packaging rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each material and waste separately by declared grade or composition. Correct stock changes to the same production period before normalizing to 1 kg reference product. |
| `electricity_energy` | purchased electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter data and conversion provenance. Convert kWh to MJ using 1 kWh = 3.6 MJ and do not mix purchased electricity with generated electricity or other energy carriers. |
| `internal_blank_transfer` | metal gasket blank output and input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the same transferred intermediate at both process boundaries on a consistent dry-mass basis; reconcile inter-process stock change and avoid treating the internal transfer as an external product. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate_scope` | foreground manufacturing | Include cutting or blanking, edge finishing, route-specific forming, profiling, winding or jacketing, assembly, cleaning when performed, inspection, marking when required, and packing through the factory gate. | `asme-b16-20-2023`; `moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket` |
| `sb_upstream_inputs` | purchased inputs | Link cradle-to-gate background datasets for every purchased metal, filler, process auxiliary, electricity, water, and packaging input; do not duplicate those upstream processes in the foreground. |  |
| `sb_direct_outputs` | wastes and emissions | Record segregated metal scrap, filler offcuts, spent cutting fluid, spent alkaline liquor, and direct particulate emissions when they cross the foreground boundary. |  |
| `sb_exclusions` | outside-gate stages | Exclude distribution, installation, use-stage leakage and maintenance, and end-of-life. Disclose any study-specific extension beyond the factory gate as a separate model. | `eu-cn-2021-hs-8484-10`; `un-cpc-3-0-structure-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Metal sheet or strip, route-specific filler, process auxiliaries, and packaging received at the manufacturing site with supplier, grade, form, and upstream dataset identifiers declared |
| starting_condition_role | Purchased input gate to foreground gasket manufacture |
| product_classification_scope | Finished gaskets and similar joints of metal sheeting combined with another material or of two or more metal layers; CPC 3.0 43924 |
| recursive_input_rule | When a purchased gasket blank or other same-category semi-finished product enters the foreground, record it once as a product input at its received state and require an upstream dataset ending at that state; do not recursively reopen the supplier process. |
| upstream_dataset_requirement | Use geography-, technology-, grade-, and form-representative upstream datasets for metal sheet or strip, filler, electricity, water, chemicals, and packaging; disclose proxies and recycled-content conventions. |
| disclosure | Declare product construction, alloy and filler grades, route, site and period, included cleaning and packaging operations, internal-transfer treatment, scrap destination and allocation convention, and all boundary deviations. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sheet_preparation` | Metal-sheet cutting, blanking, and edge preparation | required | Applies to every covered product; document the actual cutting, blanking, punching, laser cutting, or equivalent route. | foreground material preparation | Mass of transferred metal gasket blanks |
| `forming_assembly_finishing` | Forming, winding or jacketing, assembly, cleaning, inspection, and packing | required | Include only the declared construction-specific operations and record conditional filler, cleaning, and packaging rows separately. | foreground gasket completion | Net mass of conforming finished gaskets |

### Process: Metal-sheet cutting, blanking, and edge preparation (`sheet_preparation`)

#### Inputs

##### Product flows

###### Cold-rolled carbon steel sheet (`carbon_steel_sheet`)

Record carbon or non-alloy steel sheet only for lots whose declared metal construction uses it.

- Selected flow: Cold-rolled carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass corrected for returned sheet and stock change; record zero only when the declared alloy route does not use carbon steel sheet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_materials`
- Sources: `asme-b16-20-2023`; `valqua-n580-metal-jacketed-gasket`

###### Cold-rolled stainless steel sheet (`stainless_steel_sheet`)

Record stainless sheet or strip only for lots whose declared construction uses it; preserve alloy grade and thickness.

- Selected flow: Cold-rolled stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass corrected for returned sheet and stock change; record zero only when the declared alloy route does not use stainless steel sheet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_materials`
- Sources: `asme-b16-20-2023`; `valqua-n580-metal-jacketed-gasket`

###### Purchased electricity for sheet preparation (`sheet_preparation_electricity`)

Record electricity metered or defensibly allocated to cutting, blanking, punching, edge finishing, local extraction, and associated controls.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity for the sheet-preparation process, converted from kWh when necessary and corrected for the production-period output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_preparation_energy`
- Sources:

###### Cutting fluid used in sheet preparation (`cutting_fluid`)

Record cutting fluid when it is applied in cutting, machining, or edge finishing; declare formulation and recirculation.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Purchases plus opening stock minus closing stock minus recovered fluid leaving as product, normalized to output; record zero when the dry route is documented.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_fluid`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Metal gasket blanks transferred to assembly (`metal_gasket_blank_output`)

Record the measured mass of cut or blanked gasket intermediates transferred from sheet preparation.

- Selected flow: Metal gasket blanks `02789a7c-41a2-46e6-a41d-2fa6fd4191ed`
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred blank mass adjusted for work-in-progress stock change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet_preparation_outputs`
- Sources:

##### Waste flows

###### Segregated ferrous sheet scrap (`steel_scrap`)

Record steel skeletons, punchings, and edge offcuts leaving the process as a segregated ferrous waste flow; disclose recycling destination and contamination.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap dispatch plus closing scrap stock minus opening scrap stock, assigned to the production period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sheet_preparation_outputs`
- Sources:

###### Spent cutting fluid (`spent_cutting_fluid`)

Record spent coolant or cutting fluid when it leaves for treatment or recovery; do not combine it with unrelated waste oil.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented treatment-dispatch mass corrected for on-site waste-fluid stock change; record zero when no fluid is used or none leaves in the period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sheet_preparation_outputs`
- Sources:

##### Elementary flows

###### Direct airborne particulate matter (`particulate_matter_air`)

Record particulate matter released after control from cutting or edge finishing when measured or calculated as a direct emission; do not include captured dust dispatched as waste in this row.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Stack or workplace-exhaust measurement, or documented captured-versus-released mass calculation, for the production period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sheet_preparation_outputs`
- Sources:

### Process: Forming, winding or jacketing, assembly, cleaning, inspection, and packing (`forming_assembly_finishing`)

#### Inputs

##### Product flows

###### Metal gasket blanks received from sheet preparation (`metal_gasket_blank_input`)

Record the same intermediate transferred from `sheet_preparation`; reconcile process-level work-in-progress changes.

- Selected flow: Metal gasket blanks `02789a7c-41a2-46e6-a41d-2fa6fd4191ed`
- Flow property / unit: Mass / kg
- Amount rule: Measured received blank mass adjusted for work-in-progress stock change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources:

###### Expanded graphite sheet filler (`expanded_graphite_sheet`)

Record expanded graphite sheet or strip only when the declared spiral-wound, jacketed, or covered construction uses it.

- Selected flow: Expanded graphite sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass corrected for returned material and stock change; record zero only when the declared construction has no graphite filler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket`

###### Polytetrafluoroethylene sheet filler (`ptfe_sheet`)

Record PTFE sheet or strip only when the declared gasket construction uses it; preserve virgin or filled grade and thickness.

- Selected flow: Polytetrafluoroethylene (PTFE) `7cacbf87-9707-4f6d-9ff8-830158c75b20`
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass corrected for returned material and stock change; record zero only when the declared construction has no PTFE filler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket`

###### Purchased electricity for assembly and finishing (`assembly_electricity`)

Record electricity metered or defensibly allocated to forming, profiling, winding, welding when present, assembly, cleaning, inspection, extraction, and packing equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity for assembly and finishing, converted from kWh when necessary and corrected for production-period output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources:

###### Process water for aqueous cleaning (`process_water`)

Record process water only when aqueous cleaning or rinsing occurs inside the gate; identify source and water-quality basis.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-record water input corrected for recirculated water; record zero when no aqueous cleaning or rinsing occurs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide product mass only when it is added to an alkaline cleaning bath; declare solution concentration separately.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Pure-product-equivalent sodium hydroxide issued to cleaning, calculated from solution mass and measured concentration; record zero when no sodium hydroxide is used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_inputs`
- Sources:

###### Corrugated board boxes for dispatch (`corrugated_board_boxes`)

Record finished corrugated boxes used to dispatch the reference product; do not combine them with other packaging materials.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Issued box count multiplied by verified average box mass, corrected for unused returns.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Low-density polyethylene film for dispatch (`ldpe_film`)

Record PE-LD film used as a separate wrapping or protective packaging component.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Weighed issued film or film length multiplied by verified mass per length, corrected for unused returns.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished gaskets of metal sheeting (`finished_metal_sheeting_gasket`)

Record only products that pass the declared dimensional, material, construction, marking, and inspection criteria.

- Selected flow: Gaskets of metal sheeting `566e5c48-5523-4e69-98c9-0a8ad67d24d4`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg after normalization from measured net mass of conforming finished gaskets.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net mass of conforming finished gaskets
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_outputs`
- Sources: `un-cpc-3-0-structure-2025`; `eu-cn-2021-hs-8484-10`; `asme-b16-20-2023`

##### Waste flows

###### Expanded graphite filler offcuts (`expanded_graphite_offcuts`)

Record segregated expanded graphite sheet or strip offcuts when graphite filler is cut or trimmed.

- Selected flow: Expanded graphite offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed offcut dispatch plus closing stock minus opening stock; record zero when no graphite filler is used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_outputs`
- Sources: `moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket`

###### PTFE filler offcuts (`ptfe_offcuts`)

Record segregated PTFE sheet or strip offcuts when PTFE filler is cut or trimmed.

- Selected flow: Polytetrafluoroethylene offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed offcut dispatch plus closing stock minus opening stock; record zero when no PTFE filler is used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_outputs`
- Sources: `moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket`

###### Spent alkaline cleaning liquor (`waste_alkaline_liquor`)

Record spent alkaline cleaning solution sent to treatment when the route uses an alkaline bath; preserve pH, dissolved-metal, oil, and treatment information.

- Selected flow: Waste Alkaline Liquor `ca310225-50c8-4d41-8353-4338b41e19a1`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented treatment-dispatch mass corrected for bath inventory change; record zero when no alkaline cleaning liquor leaves the process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished gasket output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_outputs`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | foreground processes | Prefer direct metering, lot records, and process subdivision. Keep internal metal-gasket-blank transfers neutral in the combined product system and do not assign upstream burden twice. |  |
| `allocation_shared_resources` | shared electricity and auxiliaries | When direct measurement is unavailable, allocate shared resources using a documented causal driver such as machine operating time, measured power multiplied by operating time, or processed mass; use product mass only when no more causal driver is available. |  |
| `allocation_scrap` | recyclable metal scrap | Report segregated scrap as a waste output at the plant gate. Apply no avoided-burden credit in the foreground unless the chosen background database and study method explicitly require it; disclose any recycled-content or end-of-life allocation convention and prevent double credit. |  |
| `allocation_rework` | internal rejects and rework | Return internal rework to the consuming operation without treating it as a co-product; include its additional energy and material use and report only rejects that leave the system as waste. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_sheet_materials` | `sheet_preparation` | carbon and stainless sheet inputs | purchase, issue, return, and stock records | material grade; thickness; supplier; opening stock; issued mass; returned mass; closing stock; lot id | calibrated scale and inventory reconciliation by material grade | kg | each lot with monthly reconciliation | representative continuous 12-month period or all lots in the declared shorter campaign | all included sheet-preparation lines | sum net issued mass by grade and assign to conforming output lots | scale calibration; supplier certificate; stock reconciliation; lot traceability |
| `cp_sheet_preparation_energy` | `sheet_preparation` | purchased electricity | meter and machine-operation records | meter start and end; kWh; machine id; operating time; lot id; output mass | dedicated meter or documented submeter allocation | kWh and MJ | each shift or lot | same period as product output | all included cutting and edge-preparation equipment plus local controls | sum kWh, subtract unrelated loads, convert to MJ, and divide by conforming output mass | meter calibration; allocation worksheet; production log |
| `cp_cutting_fluid` | `sheet_preparation` | cutting fluid input | purchase, top-up, recovery, and stock records | formulation; opening stock; purchases; recovered product; closing stock; lot id | mass tickets or container mass with inventory balance | kg | each addition with monthly reconciliation | same period as product output | all wet cutting and edge-finishing equipment | purchases plus opening stock minus closing stock minus recovered product | purchase invoices; stock ledger; formulation data sheet |
| `cp_sheet_preparation_outputs` | `sheet_preparation` | blanks, steel scrap, spent coolant, and particulate emissions | transfer tickets, scrap and waste manifests, emission tests, and control records | blank mass; work-in-progress stock; scrap mass; spent coolant mass; measured or captured dust mass; control efficiency; lot and date | calibrated scales, manifests, and applicable emission measurement or mass-balance calculation | kg | each lot or dispatch; emissions at the applicable monitoring frequency | same period as product output | all included sheet-preparation lines and controls | reconcile blank transfer and each output stock change separately; calculate released particulate without combining captured waste | scale calibration; signed manifests; test report; control-maintenance record |
| `cp_assembly_materials` | `forming_assembly_finishing` | gasket blanks and filler inputs | transfer, issue, return, and stock records | blank mass; filler identity and grade; thickness; opening stock; issued mass; returned mass; closing stock; lot id | calibrated scale and inventory reconciliation by filler identity | kg | each lot with monthly reconciliation | same period as product output | all included forming, winding, jacketing, and assembly lines | sum net input by atomic material flow and reconcile internal blank transfer | scale calibration; supplier data sheet; stock reconciliation; lot traceability |
| `cp_assembly_energy` | `forming_assembly_finishing` | purchased electricity | meter and machine-operation records | meter start and end; kWh; machine id; operating time; lot id; output mass | dedicated meter or documented submeter allocation | kWh and MJ | each shift or lot | same period as product output | all included assembly, cleaning, inspection, extraction, and packing equipment | sum kWh, subtract unrelated loads, convert to MJ, and divide by conforming output mass | meter calibration; allocation worksheet; production log |
| `cp_cleaning_inputs` | `forming_assembly_finishing` | process water and sodium hydroxide | water meter, batch recipe, chemical issue, concentration, and stock records | water mass or volume; solution mass; sodium hydroxide concentration; opening and closing stock; batch id | calibrated meter or scale plus concentration record | kg and mass fraction | each cleaning batch | same period as product output | all included aqueous alkaline cleaning baths and rinses | subtract recirculated water; calculate pure-product-equivalent sodium hydroxide from solution mass and concentration | meter calibration; batch sheet; chemical certificate; concentration test |
| `cp_packaging` | `forming_assembly_finishing` | corrugated boxes and PE-LD film | packaging issue, count, mass-per-item, and return records | box count and mass; film mass or length and mass per length; returned quantity; product lot | count plus verified average mass or direct weighing | kg | each packed lot | same period as product output | all included packing stations | calculate net issued mass separately for each packaging flow and divide by conforming product mass | scale calibration; packaging specification; issue and return records |
| `cp_final_outputs` | `forming_assembly_finishing` | finished product, filler offcuts, and spent alkaline liquor | final inspection, net-mass, waste dispatch, and stock records | accepted product mass; rejected mass; offcut identity and mass; liquor dispatch mass; bath stock change; lot id | calibrated scales, inspection records, and treatment manifests | kg | each lot or dispatch | same period as product output | all included finishing lines, waste stores, and cleaning baths | sum conforming product net mass; reconcile each waste separately; normalize all rows to 1 kg product | scale calibration; inspection release; signed waste manifest; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | every inventory row | normalized amount = period amount attributable to the product divided by net mass of conforming finished gasket output | attributable period amount; conforming finished-product net mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calc_electricity_conversion` | electricity rows | electricity in MJ = metered electricity in kWh multiplied by 3.6 | metered kWh | MJ of purchased electricity | `si-energy-conversion` |
| `calc_pure_naoh` | sodium hydroxide row | pure-product-equivalent sodium hydroxide = cleaning-solution mass multiplied by measured sodium hydroxide mass fraction | solution mass; sodium hydroxide mass fraction | kg sodium hydroxide product equivalent | `mass-balance-identity` |
| `calc_internal_transfer` | metal gasket blank rows | transferred blank output plus closing work-in-progress minus opening work-in-progress must reconcile with blank input to assembly over the same period | blank output; blank input; opening and closing work-in-progress | reconciled internal transfer difference | `mass-balance-identity` |
| `calc_material_balance` | each process and full foreground | input mass = product mass plus separately identified waste and emission mass plus closing stock minus opening stock; investigate rather than force unexplained difference to zero | atomic material inputs; products; wastes; emissions; stock changes | disclosed mass-balance difference | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and material inputs | Preserve product construction, metal alloy, filler identity, dimensions, standard or drawing, pressure class when applicable, and lot traceability. | final inspection release, drawing or standard declaration, supplier certificates, and lot records |
| `dq_measurement` | all measured rows | Use calibrated meters or scales and retain raw readings, conversion factors, stock corrections, and allocation worksheets. | calibration certificates, meter exports, scale tickets, and signed calculation files |
| `dq_temporal` | foreground dataset | Prefer a continuous 12-month period; a shorter campaign is acceptable only when it covers the declared product and route and seasonality or production variability is discussed. | production calendar, lot list, and representativeness assessment |
| `dq_completeness` | process inventory | Reconcile every required process, every declared conditional route, internal transfers, materials, packaging, wastes, and direct emissions; explain exclusions and mass-balance differences. | completed flow checklist, process mass balances, and exclusion log |
| `dq_background` | linked upstream datasets | Match geography, technology, alloy or polymer grade, product form, recycled content, and temporal representativeness as closely as available; disclose every proxy. | dataset metadata and proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference flow | Reject a dataset whose canonical PCR id, finished product UUID, reference amount, mass property, unit group, or required qualifiers are missing or inconsistent. |  |
| `validation_processes` | process map and inventory | Require both `sheet_preparation` and `forming_assembly_finishing` inventories, with each row located under the correct direction and flow type and each conditional zero supported by route evidence. |  |
| `validation_internal_transfer` | metal gasket blanks | Require the same blank UUID and mass basis for output and input, reconcile work-in-progress stock change, and prevent the internal transfer from appearing as an external reference product. |  |
| `validation_balance` | mass-bearing rows | Recalculate process and full-foreground mass balances from raw records; investigate and disclose unexplained differences without creating an unspecified material or waste flow. | `mass-balance-identity` |
| `validation_energy` | electricity rows | Verify that purchased electricity is reported separately for the two processes, converted consistently to MJ, and not combined with other energy carriers. | `si-energy-conversion` |
| `validation_wastes` | waste and emission outputs | Verify that steel scrap, graphite offcuts, PTFE offcuts, spent coolant, spent alkaline liquor, and particulate emissions are kept atomic and that omitted conditional rows are demonstrably absent. |  |
| `validation_boundary` | dataset scope | Confirm that upstream supplies are linked once, distribution and use are excluded, and any extension beyond the factory gate is separately disclosed. | `un-cpc-3-0-structure-2025`; `eu-cn-2021-hs-8484-10` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground gate-to-gate production dataset with linked cradle-to-gate upstream inputs |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product- and route-specific cradle-to-gate studies of declared metal-sheeting gasket constructions when required qualifiers, geography, technology, allocation, and data quality are compatible |
| excluded_use | Mechanical seals, non-metallic gaskets, solid machined ring-joint gaskets without sheet construction, use-stage leakage or service-life claims, and products with undisclosed metal or filler composition |
| required_metadata | canonical PCR id; product and intermediate UUIDs; construction; alloy and filler grades; dimensions; standard or drawing; pressure class when applicable; site geography; reference period; route; packaging state; recycled content; scrap allocation; background dataset identifiers |
| required_quality_disclosure | primary-data share; meter and scale coverage; allocation drivers; mass-balance differences; conditional routes; proxies; unresolved flow UUIDs; excluded flows; temporal and technological representativeness |
| update_trigger | Change in gasket construction, alloy or filler grade, manufacturing route, cleaning chemistry, packaging system, site energy mix, scrap or recycling convention, production technology, or a material shift in foreground intensity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-06 | Official CPC 43924 identity and classification context |
| `eu-cn-2021-hs-8484-10` | Official guidance (`official_guidance`) | European Commission Implementing Regulation (EU) 2020/1577, Combined Nomenclature 2021, code 8484 10 00, https://eur-lex.europa.eu/eli/reg_impl/2020/1577/oj/eng/pdf, retrieved 2026-09-06 | Semantic boundary for metal sheeting combined with another material or two or more metal layers and distinction from mechanical seals |
| `asme-b16-20-2023` | Standard (`standard`) | ASME B16.20-2023, Metallic Gaskets for Pipe Flanges, https://www.asme.org/codes-standards/find-codes-standards/b16-20-metallic-gaskets-pipe-flanges/2023, retrieved 2026-09-06 | Covered metallic gasket constructions and required material, dimension, tolerance, and marking qualifiers |
| `moeller-spiral-wound-winding` | Handbook (`handbook`) | Möller-Metalldichtungen GmbH, Winding, https://www.moeller-metalldichtungen.de/range-and-services/manufactoring-processes/winding.html, retrieved 2026-09-06 | Spiral-wound process decomposition, connection to inner and outer rings, and graphite or PTFE filler identities |
| `valqua-n580-metal-jacketed-gasket` | Handbook (`handbook`) | VALQUA, Ltd., Metal Jacketed Gasket N580, https://www.seal.valqua.co.jp/en/metaljacketed/n580/, retrieved 2026-09-06 | Metal-jacketed construction, metal and cushion-material alternatives, and sheet folding into final shape |
| `mass-balance-identity` | Method factor (`method_factor`) | Conservation of mass applied to foreground period records and stock changes | Normalization, pure-product-equivalent calculation, internal-transfer reconciliation, and mass-balance validation |
| `si-energy-conversion` | Method factor (`method_factor`) | SI energy conversion identity: 1 kWh = 3.6 MJ | Electricity unit conversion and validation |
