---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.civil-aircraft-structural-parts
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of machined aluminium civil-aircraft structural detail parts

## 1. Scope and Applicability

This narrower PCR covers manufacture of new single monolithic aluminium wing-rib structural detail parts for civil aircraft, machined from certified wrought plate and accepted clean and uncoated. The controlled actual alloy/temper/drawing specifies the product; no default alloy number or rib mass is imposed. The representative route includes stock preparation, material-removal machining, deburring, qualified aqueous cleaning and actual inspection/net-mass release. Solvent final cleaning and dispatch packaging are conditional.

This is a stock-to-accepted-detail-part manufacturing foreground, not complete cradle-to-gate coverage. Actual plate rolling/heat treatment and earlier metal production require matching upstream datasets. Anodising, conversion coating, painting, shot peening/peen forming, additional local heat treatment, composites, titanium/steel, additive manufacturing, bonded/riveted subassemblies, spacecraft/military-only parts, engines and landing gear are outside this restricted route. Parts needing these stages require a supported separate extension before a final-finished-part claim. Downstream aircraft assembly, flight services, repair and service end-of-life are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.civil-aircraft-structural-parts |
| classification_refs | CPC 3.0:49640; narrower |
| covered_products | New monolithic civil-aircraft aluminium wing-rib detail parts from certified wrought plate, clean uncoated acceptance |
| excluded_products | Coated/peened/heat-treated-after-machining finished routes, composites, other metals, assembled structures, spacecraft/military-only/engine/gear parts and services |
| representative_product | A drawing-controlled monolithic aluminium wing rib at the uncoated machining-acceptance gate |
| production_route | Certified wrought plate receipt and actual blank cutting; milling/drilling/deburring; qualified aqueous wash/dry; controlled inspection and net weighing; conditional IPA clean/pack |
| market_state | New accepted uncoated structural detail part for declared further production; not a complete aircraft or airworthiness approval |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of one accepted configured structural detail part of the declared drawing |
| How much | 1 kg |
| How well | Current controlled drawing/material/part-specific conformity and actual signed acceptance records; no aircraft-service equivalence |
| How long or cycle | One manufacturing campaign; no assumed flight life, fatigue cycle or maintenance interval |
| reference_flow_link | finished_rib |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted uncoated monolithic wrought-aluminium civil-aircraft wing rib |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number/drawing/revision/lot/serial; civil-aircraft wing-rib fitment and handedness; alloy/temper/stock lot, thickness/grain direction; monolithic plate route; full geometry/part completeness; uncoated clean delivery state; actual net M kg; actual job/inspection/acceptance plan; site/period/provider; upstream gates and packaging/fixture exclusions |

Required qualifiers must accompany the data package; missing qualifiers leave the reference definition incomplete. One complete unit in the measurement protocol means this single structural detail part, not an aircraft. M is physically measured for the same accepted drawing/configuration, never inferred from CAD density alone or catalogue aircraft mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `material_mass` | mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured q_item kg per one accepted finished unit and apply normalize_mass with reference_mass and the stated protocol. |
| `electric_energy` | electricity rows | Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Collect actual attributable meter kWh; multiply by3.6 MJ/kWh before per-unit collection and normalize_mass. Public energy property is not rewritten as Mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Certified wrought aluminium plate lot at the actual machining-plant supply gate |
| starting_condition_role | upstream_abstraction |
| product_classification_scope | CPC 3.0:49640; narrower |
| recursive_input_rule | Do not consume a finished same-category rib to manufacture that same rib; use actual plate/blank stock. Internal rework/retained offcut loops are not duplicate external input. |
| upstream_dataset_requirement | Match actual plate alloy/temper, rolling/heat-treatment and metal route/geography/year, plus actual coolant/water/utility supply and waste receiver. Prior same-site stages remain upstream abstractions, not absent burdens. |
| disclosure | Stock-to-uncoated-detail-part foreground only; all missing actual upstream/transport/receiver links and any later surface treatment/assembly are separately disclosed. Never claim installation-ready final airframe manufacture from a clean uncoated gate. |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | all_processes | Include actual receipt/preparation, machining, deburring, qualified washing/drying and inspection, including attributable rejects/rework/setup/idle. Cutting, solvent cleaning and packing require actual performed-operation evidence. The sources establish distinct stock/detail-part and downstream assembly stages, not a universal chemical or inspection recipe. | figeac-metal-processing; airbus-production-gates |
| `boundary_exclusions` | later manufacture and use | Exclude later anodising/painting/peening/structural assembly from this uncoated reference; add supported extension where actual scope requires it. Exclude flight, service fatigue/maintenance and disposal; factory direct releases must be actual compound/medium observations, not flight/use-phase emissions. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `preparation` | Certified plate receipt and actual stock cutting | required | Traceable plate receipt; cutting only where actually performed; retain stock grain direction and part nesting | foreground | 1 kg finished_rib |
| `machining` | Controlled rib milling drilling and deburring | required | Actual approved machining from the certified plate lot to the controlled drawing | foreground | 1 kg finished_rib |
| `washing` | Qualified aqueous washing rinsing and drying | required | Declared aqueous-cleaning route; exact chemistry and criteria from current approved work records | foreground | 1 kg finished_rib |
| `inspection` | Dimensional configuration and net-mass acceptance | required | Actually required drawing/part inspection and calibrated uncoated part net weighing | foreground | 1 kg finished_rib |
| `cleaning` | Conditional final IPA cleaning | conditional | Only actual approved performed CAS67-63-0 cleaning | foreground | 1 kg finished_rib |
| `packing` | Conditional protected dispatch packing | conditional | Only actual separate supplied dispatch packaging | foreground | 1 kg finished_rib |

### Process: Certified plate receipt and actual stock cutting (`preparation`)

#### Inputs

##### Product flows

###### Certified wrought aluminium-alloy plate stock for a monolithic aircraft wing rib (`plate_stock`)

One actual certified plate alloy/temper/thickness greater than0.2mm and grain direction crosses the machining-plant gate. Record plate-lot traceability, net received/issued/returned kg and the stock allocated to one controlled drawing, including consumed rejects. This is already wrought stock, not aluminium ingot, generic cast billet, foil or a finished aircraft part; prior rolling/heat treatment are linked upstream. Different alloys/tempers require individual stock records rather than an unspecified mixture.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_preparation`)

Measure actual attributable stage equipment, stock cutting, machining, wash/dry, metrology/control, idle and rework electricity at the user-side meter. Retain supplier geography/voltage/period and current causal shared-load records. High-voltage grid or power-generation flows do not establish this supply interface; record actual additional compressed-air/heat utility separately rather than combine carriers or infer onsite combustion emissions.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected clean wrought aluminium-alloy plate offcut (`cutting_offcut`)

Only actual exported clean dry cutting offcut kg of the declared alloy/temper, linked to an actual off-site recycling receiver. Usable offcuts retained in stock or a documented future job are not discarded waste. Identify saleable co-product versus waste from actual contracts/state; no automatic recycling credit.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Controlled rib milling drilling and deburring (`machining`)

#### Inputs

##### Product flows

###### Supplied aqueous mineral-oil machining emulsion (`cutting_emulsion`)

Only actual wet machining using one documented supplied premixed mineral-oil emulsion: record SDS, concentration and net fresh issue kg. Internal recirculation is not fresh input. Local concentrate mixing requires separately named concentrate and water with actual mixing records instead of both premix and constituents. This route does not imply every aircraft part is wet machined or that all cutting fluids have this chemistry.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_machining`)

Measure actual attributable stage equipment, stock cutting, machining, wash/dry, metrology/control, idle and rework electricity at the user-side meter. Retain supplier geography/voltage/period and current causal shared-load records. High-voltage grid or power-generation flows do not establish this supply interface; record actual additional compressed-air/heat utility separately rather than combine carriers or infer onsite combustion emissions.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected aluminium-alloy rib machining chips (`machining_chips`)

Measure actual exported dry-metal kg and actual separately measured entrained emulsion; retain alloy/lot segregation and actual off-site recycling receiver. Link the dry metal only to the scrap flow; use spent_emulsion for removed liquid. Uncut plate offcut is a separate state; internal reuse/remelt and entrained wet liquid are not double-counted as new external waste.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Collected spent aqueous mineral-oil machining emulsion (`spent_emulsion`)

Only actual exported spent wet emulsion kg and analysed oil/water/metal concentration with actual receiver; recirculated bath is internal. Reconcile liquid carried with chips without counting the chip metal again.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Qualified aqueous washing rinsing and drying (`washing`)

#### Inputs

##### Product flows

###### Supplied industrial washing water (`wash_water`)

Actual supplied water for the declared qualified aqueous wash/rinse route, measured supplied kg with quality/provider records. This technosphere product is distinct from natural freshwater extraction and collected effluent; exclude loop circulation. Alternative dry cleaning and surface-treatment routes require supported separate inventories and cannot be inferred from this card.

- Selected flow: Water for industrial use `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Supplied anhydrous sodium carbonate washing reagent (`wash_carbonate`)

Conditional only if the current drawing-qualified cleaning plan actually uses one anhydrous sodium carbonate CAS497-19-8 reagent. Record assay, net kg and actual bath concentration/temperature; demonstrated compatibility with this alloy is required. Do not invent an alkaline recipe or imply carbonate is mandatory for aircraft manufacture. Any additional actual cleaner/additive needs its own named chemical card.

- Selected flow: Supplied anhydrous sodium carbonate washing reagent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_washing`)

Measure actual attributable stage equipment, stock cutting, machining, wash/dry, metrology/control, idle and rework electricity at the user-side meter. Retain supplier geography/voltage/period and current causal shared-load records. High-voltage grid or power-generation flows do not establish this supply interface; record actual additional compressed-air/heat utility separately rather than combine carriers or infer onsite combustion emissions.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected spent aqueous sodium-carbonate rib washing liquor (`wash_effluent`)

Only actual carbonate-bath route export: wet kg with measured carbonate/oil/metal concentration and actual receiver. Other wash chemistry or additive-free rinses require their own specific liquid card; collected wastewater is not elementary river water or a direct untreated discharge.

- Selected flow: Collected spent aqueous sodium-carbonate rib washing liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Collected additive-free aluminium-rib rinse water (`rinse_effluent`)

Only actual additive-free rinse-water export measured wet kg with actual aluminium particulate/oil contamination and receiver. If mixed with carbonate bath or another cleaner, record that specific analysed mixed liquor instead and do not count this same liquid twice. This is collected effluent, not natural resource water or assumed untreated release.

- Selected flow: Collected additive-free aluminium-rib rinse water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Dimensional configuration and net-mass acceptance (`inspection`)

#### Inputs

##### Product flows

###### User-side low-voltage AC manufacturing electricity (`electricity_inspection`)

Measure actual attributable stage equipment, stock cutting, machining, wash/dry, metrology/control, idle and rework electricity at the user-side meter. Retain supplier geography/voltage/period and current causal shared-load records. High-voltage grid or power-generation flows do not establish this supply interface; record actual additional compressed-air/heat utility separately rather than combine carriers or infer onsite combustion emissions.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Accepted uncoated monolithic wrought-aluminium civil-aircraft wing rib (`finished_rib`)

One complete clean uncoated monolithic wing-rib detail part machined from certified wrought plate to its controlled drawing and actual acceptance plan. Declare alloy/temper, thickness/grain direction, drawing/revision/handedness, geometry, inspected condition and net delivery state. Exclude temporary tabs/fixtures, loose fasteners, sealant, coatings, packing and downstream attached structure. This detail-part acceptance is not full-aircraft airworthiness approval or interchangeable service equivalence.

- Selected flow: Accepted uncoated monolithic wrought-aluminium civil-aircraft wing rib
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Irreparable uncoated aluminium aircraft rib for disposal (`rejected_rib`)

Only actual irreparable factory reject exported with original alloy/drawing/defect/contamination/receiver and net kg. Repair/rework and supplier returns are not disposal; no service-age aircraft scrap or full-airframe waste identity is inferred.

- Selected flow: Irreparable uncoated aluminium aircraft rib for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Conditional final IPA cleaning (`cleaning`)

#### Inputs

##### Product flows

###### Supplied liquid isopropanol final-cleaning formulation (`ipa_cleaner`)

Conditional on actually approved performed cleaning before final part acceptance with one CAS67-63-0 formulation; retain purity/water concentration, issue/recovery/residue/retention kg and current process authorisation. Do not assume mandatory solvent degreasing or complete evaporation; qualified aqueous washing is separately recorded.

- Selected flow: Supplied liquid isopropanol final-cleaning formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_cleaning`)

Measure actual attributable stage equipment, stock cutting, machining, wash/dry, metrology/control, idle and rework electricity at the user-side meter. Retain supplier geography/voltage/period and current causal shared-load records. High-voltage grid or power-generation flows do not establish this supply interface; record actual additional compressed-air/heat utility separately rather than combine carriers or infer onsite combustion emissions.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected spent isopropanol cleaning solution (`spent_ipa`)

Actual exported wet cleaning liquid kg and analysed IPA/water/contaminants with receiver records; distinguish recovered solvent, wiping media and measured residual air release. Other actual wiping media need separate physical waste rows.

- Selected flow: Collected spent isopropanol cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Immediate isopropanol release to unspecified outdoor air (`ipa_air`)

Only actually observed post-control residual CAS67-63-0 release to unspecified outdoor air. Quantify by matched compound-specific concentration/flow/time sampling or documented closed solvent balance resolving recovery/residue/retention. Preserve detection limits and uncertainty, and distinguish not performed, unmeasured and below detection. No generic VOC or assumed100% evaporation; indoor/long-term/soil/n-propanol matches are not this exchange.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

### Process: Conditional protected dispatch packing (`packing`)

#### Inputs

##### Product flows

###### Finished paperboard aircraft-rib dispatch box (`shipping_box`)

Only an actually supplied individual box of the documented dispatch specification, measured empty net kg outside part M. Actual cushioning, film, ties and reusable rack each require a separate named exchange and actual reuse allocation; fragile-part protective packaging is not established by a generic paper-box label.

- Selected flow: Finished paperboard aircraft-rib dispatch box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC manufacturing electricity (`electricity_packing`)

Measure actual attributable stage equipment, stock cutting, machining, wash/dry, metrology/control, idle and rework electricity at the user-side meter. Retain supplier geography/voltage/period and current causal shared-load records. High-voltage grid or power-generation flows do not establish this supply interface; record actual additional compressed-air/heat utility separately rather than combine carriers or infer onsite combustion emissions.

- Selected flow: User-side low-voltage AC manufacturing electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared processes | First subdivide actual stock lots/nesting plans, job cards and stage meters by drawing/revision/alloy/temper. Shared machining uses demonstrated causal operation time and measured load/setup/idle records; cleaning uses actual cycle/load/chemistry records. Do not allocate aircraft service burdens to this part. A simple mass share requires a demonstrated causal relation and sensitivity, not an unsupported universal factor. |  |
| `allocation_rejects` | offcuts chips and rejects | Consumed rejected stock and actual rework remain campaign inputs divided by accepted parts of the same configuration. Retained reusable plate is inventory, not waste; exported chips/offcuts require actual saleable co-product or waste classification. Document any co-product allocation basis and prices/physical relationship and sensitivity; never grant both avoided-metal recycling credit and saleable output benefit to the same mass. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | inspection | accepted complete rib | calibrated complete-part net weighing | model; configuration; serial; drawing/revision/lot; accepted net mass M; kg; tare; original readings; retained film; excluded tabs/fixtures/packing; accepted count | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each part or controlled same-drawing lot with actual representative individual readings | actual declared representative production period | declared plant and actual attributable stage/supply gates | accepted net mass per unit | calibration, original tare/net readings and signed drawing-specific acceptance |
| `cp_stock` | all_processes | specific stock and consumable inputs | actual stock issue/return and consumption | alloy/temper/stock lot; drawing/nesting/blank geometry; actual stock kg; named formulation/CAS/assay; supplied/concentrate mixture; issue/return/stock change; concentration; accepted count | Measure each actual attributable net input kg including consumed rejects/rework; reconcile received/issued/returned stock and usable retained offcut. Record actual chemical concentration and performed operation, and fresh makeup versus recirculation. Supplier grade/temper and local fluids are not invented from product marketing. | kg | each receipt/issue/return and actual campaign | actual declared representative production period | declared plant and actual attributable stage/supply gates | actual attributable input kg / accepted units of the same configuration | certified stock/drawings, calibrated weights/stock balances and SDS |
| `cp_energy` | all_processes | actual stage electricity | actual user-side meter records | stage; meter kWh; actual period; provider/voltage/geography; actual causal shared load; accepted count | Read calibrated user-interface stage meters and attribute actual cutting/machining/wash/dry/metrology/idle/rework electricity using current causal records. Convert kWh to MJ by3.6 MJ/kWh before per-unit collection; rated spindle power is not actual campaign energy. | MJ | actual representative campaign | actual declared representative production period | declared plant and actual attributable stage/supply gates | actual attributable electricity MJ / accepted units of the same configuration | original meter/calibration, causal load and provider evidence |
| `cp_waste` | all_processes | actual named exported waste | export weighing composition and receiver records | named waste; alloy/lot; dry/wet kg; entrained liquid; composition; receiver; retained offcut/reuse/export; accepted count | Measure each actually exported segregated waste kg with actual composition/receiver and dry-metal versus wet-liquid reconciliation. Usable stock retained for documented work is not discarded waste. Collected liquid is a receiver-bound technosphere waste, not untreated elementary water discharge. | kg | each export and actual campaign | actual declared representative production period | declared plant and actual attributable stage/supply gates | actual exported waste kg / accepted units of the same configuration | original weights, analysis, actual contracts and receiver manifests |
| `cp_emission` | cleaning | conditional IPA air release | compound-specific sampling or closed solvent balance | CAS; actual air submedium; concentration; airflow/time; issue/recovery/residue/retention; detection/uncertainty; accepted count | Quantify actual post-control CAS67-63-0 outdoor release by matched sampling or documented closed issue/recovery/residue/retention balance. Preserve no-operation/unmeasured/below-detection distinctions; no complete-evaporation or generic VOC factor. | kg | actual representative solvent/control period | actual declared representative production period | declared plant and actual attributable stage/supply gates | actual released kg / accepted units of the same configuration | sampling/calibration/lab records and solvent balance |
| `cp_configuration` | all_processes | part drawing and acceptance | controlled material/part production records | part number/drawing/revision/serial; alloy/temper/stock lot/grain; actual machining/wash route; actual inspection scope/results/calibration/disposition; uncoated state and missing later stages | Trace current approved stock certificate and drawing/job plan for this civil detail part. Record actually required dimensional, surface/cleanliness and any specifically required material/NDT inspection and disposition with methods and criteria from current controlled records. No universal NDT, fatigue test or threshold is inferred; declare later surface/assembly work separately. | kg | each drawing/material/lot/configuration change | actual declared representative production period | declared plant and actual attributable stage/supply gates | qualifiers accompany each accepted same-configuration unit | signed stock/drawing/job/inspection and disposition records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | period records | Attribute actual campaign stock/meter/export totals to one drawing/revision/alloy/temper configuration using current causal records; divide by actual accepted count to obtain q_item, retaining consumed rejects and rework in the numerator. Do not pool incompatible stock grades, geometries or later surface states silently. | cp_stock; cp_energy; cp_waste; cp_mass | q_item |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | Weigh only after all included cleaning/drying and part acceptance in the declared delivered state. Positive M requires current actual calibrated individual complete-part weighing, capacity/resolution/calibration, original tare/net readings and signed drawing/configuration/serial. M excludes tabs removed before acceptance, fixtures and packaging. Independently reconcile attributable plate to accepted part kg, retained stock, dry offcut/chips and actual rejects with wet-liquid separation. CAD volume/density and nominal catalogue weight are checks, not substitutes for measured net M. | cp_mass; cp_stock; cp_waste; cp_configuration |
| `net_configuration` | finished_rib | The reference is one clean monolithic uncoated detail part of the exact drawing/revision/alloy/temper and actual inspected condition. Include only actual permanent part material and documented retained film once; exclude fixtures, temporary tabs, coating/sealant, loose fasteners and packaging. Unperformed coating/NDT/assembly is disclosed, not passed by assumption. The constrained interface noun unit means one complete rib. | cp_mass; cp_configuration |
| `completeness_balance` | all exchanges | Expand full actual jobs and supplier/utility records before a complete plant claim: actual saw lubricants, machining inserts and grinding media consumed, wash additives, compressed-air/heat providers, fixture wear, packaging/wipe media and extra waste fractions need their own specific exchanges. Reconcile plate nesting/stock/part/offcut/chips/rejects and all fluid issue/recovery/retention/waste/emissions without default yield. Link actual upstream/transport/receivers; disclose omissions, limits, uncertainty and allocation sensitivity. | cp_stock; cp_energy; cp_waste; cp_emission |
| `source_limits` | external sources | Official Figeac material-removal descriptions and Airbus separate detail-part/section/final assembly descriptions support route/gate distinctions only. They do not certify this rib alloy, temper, drawing, bath chemistry, NDT requirement, actual throughput, yield or approved airworthiness. Current controlled foreground plans, actual weights and independent methodology review are required; no promotional machine count or aircraft supplier percentage is an inventory factor. | figeac-metal-processing; airbus-production-gates |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Verify exact reference product name equals finished_rib, complete uncoated monolithic wrought-plate civil wing rib and positive physical M kg with current accepted drawing/state. Blank candidate reference UUID is a declared identity gap, not licence to assign a composite, coated part or group of UAV materials. |  |
| `validation_process` | all_processes | Verify certified plate lot/temper/grain, actual stock/job sequence and approved cleaning/inspection with original results/disposition. Inspect only actually required NDT/material checks; no inferred default limits. Subsequent surface protection/structural assembly requires an independently supported extension; part conformity does not establish complete-aircraft approval. | figeac-metal-processing; airbus-production-gates |
| `validation_identity` | flow rows | Verify state100 public original type, reference property/group/unit, material grade/route/state, medium/submedium and official bilingual names. Preserve Number/Area/Volume/Energy rather than rewrite Mass; use actual supported conversion only for a matching identity. Technosphere water and collected liquor are not resource water or direct effluent; immediate outdoor IPA is not bought solvent or indoor/long-term release. |  |
| `validation_claims` | claims | PCR mechanical pass does not establish actual measured inventory, full cradle-to-gate coverage, scientific approval, airworthiness or fatigue/service equivalence. Disclose remaining identity/operation/measurement/BOM/utility/link and independent evidence gaps. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured civil-aircraft aluminium structural detail-part stock-to-uncoated machining acceptance foreground; heading does not imply publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same drawing/material/state structural-detail-part manufacture by actual measured M, linked to actual plate and process providers and separately declared later production |
| excluded_use | Whole-aircraft/flight/airworthiness, fatigue-life comparisons, painted/composite/assembled finished structures and repair/end-of-life service |
| required_metadata | Part/drawing/revision/serial/lot, alloy/temper/thickness/grain and stock certificate, exact geometry/completeness/uncoated state, actual operations/inspection/acceptance, net M kg original weights, nesting/stock/waste/fluid balance, site/period/provider, allocation and upstream/later-stage/receiver links |
| required_quality_disclosure | Identity/source/operation/measurement/completeness/link gaps, actual rejects/rework/retained offcut/recovery, detection/uncertainty/cut-offs and allocation sensitivity |
| update_trigger | Drawing/revision/stock/alloy/temper/geometry, machining/cleaning/inspection, accepted net state, later surface/assembly, plant/provider/period or dispatch-packaging changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| figeac-metal-processing | handbook | FIGEAC AERO, Metal processing, undated official page, Our specialised activity: metal machining by material removal; High-technology specialised machines; Continuously improving machining skills. https://www.figeac-aero.com/en/metal-processing | Aluminium aerospace structural parts and material-removal machining from stock under customer specifications; no numeric yields, actual alloy/temper/chemical or mandatory test transferred. |
| airbus-production-gates | handbook | Airbus, Production, undated official page, Major components and aerostructures production. https://www.airbus.com/en/products-services/commercial-aircraft/the-life-cycle-of-an-aircraft/production | Distinguishes detail-part manufacture, structural/section assembly and final aircraft assembly; no supplier percentage or universal part process recipe adopted. |
